import Logger from "js-logger";
import config from "./config.js";
const remote   = window.require("remote");

Logger.useDefaults();
Logger.setLevel(config.log_level || Logger.DEBUG);

const app_id       = remote.process.env.KII_APP_ID  || config.app_id
const app_key      = remote.process.env.KII_APP_KEY || config.app_key
const api_endpoint = remote.process.env.KII_API_ENDPOINT || config.api_endpoint
const username = remote.process.env.KII_USERNAME || config.username
const password = remote.process.env.KII_PASSWORD || config.password
const client_id     = remote.process.env.KII_CLIENT_ID     || config.client_id
const client_secret = remote.process.env.KII_CLIENT_SECRET || config.client_secret
Kii.initializeWithSite(app_id, app_key, api_endpoint);

export default {
  invoke: (f, params) => {
    let usr = !(username && password)
                ? Promise.resolve(null)
                : KiiUser.authenticate(username, password).then(u => {
                    localStorage.setItem(`${username}:userToken`, u.getAccessToken()); // experimental
                    return u;
                  });
    
    let admin = !(client_id && client_secret)
                  ? Promise.resolve(null)
                  : Kii.authenticateAsAppAdmin(client_id, client_secret)
    
    Promise.all([usr, admin]).then(([usr, adminCtx]) => {
      console.group("invoke");
      Logger.debug("invoke", `start ${f.name}`);
      var toid = null;
      var done = _ => {}

      if (f.length >= 3) {
        const to = _ => {throw new Error(`timed out for ${f.name} with ${JSON.stringify(params)}`)}
        toid = setTimeout(to, config.timeout || 20*1000)
        Logger.debug("setTimeout", `timeout: ${config.timeout}msec, id: ${toid}`);
        done = (r) => {
          clearTimeout(toid);
          Logger.debug("clearTimeout", `id=${toid}`);
          Logger.debug(`result: ${JSON.stringify(r)}`);
          console.groupEnd("invoke");
          //window.document.getElementById("container").innerHTML = JSON.stringify(r);
        }
      }

      const ctx = {
        getAccessToken: () => usr ? usr.getAccessToken() : null,
        getAppAdminContext: () => adminCtx,
      }

      const r = f.apply(null, [params, ctx, done])
      if (f.length < 3) {
        Logger.debug(`result: ${JSON.stringify(r)}`);
        console.groupEnd("invoke");
      }
    })
    .catch(err => console.error(err))
  }
}
