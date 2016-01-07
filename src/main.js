import WebPage from "./webpage.js"
import {summary} from "./summary.js"
// import _ from "underscore"  // doesn't work

const ensureUser = (uname, passwd) =>
  KiiUser.authenticate(uname, passwd)
         .catch(err => KiiUser.userWithUsername(uname, passwd).register())

const ensureGroup = (user, gname) =>
  user.memberOfGroups()
      //.then(e => {
      //  let groups = e[1];
      //  let a = null;
      //  groups.forEach((e) => {if (e.getName() === gname) a = e});
      .then(([user, groups]) => {
        let a = groups.find(e => e.getName() === gname);

        return a ? a : KiiGroup.groupWithName(gname).save()
      })

export function example_1(params, ctx, done) {
  let uname  = params.username || "foobar1"
  let passwd = params.password || "abc123"
  let bucket = ensureUser(uname, passwd)
                 .then(u => ensureGroup(u, "portal"))
                 .then(g => g.bucketWithName("top-page"))
  let pages = WebPage.URLs(["http://www.yahoo.co.jp", "http://www.livedoor.com"])  //eslint-disable-line
                     .fetch()

  Promise.all([
    `access-token: ${ctx.getAccessToken()}`,
    `has-admin-context: ${new Boolean(ctx.getAppAdminContext())}`,
  ])
  .then(::console.log);  // console.log.bind(console) in ES6

  Promise.all([bucket, pages])
    //.then(e => [e[0], e[1].map(r => r.length)])
    .then(([b, pages]) => [b, pages.map(r => summary(r))])
    //.then(e => {
    //  let b = e[0];
    //  let yahoo = e[1][0];
    //  let livedoor = e[1][0];
    .then(([b, [yahoo, livedoor]]) => {

      let obj = b.createObject();
      obj.set("yahoo",    yahoo);
      obj.set("livedoor", livedoor);
      return obj.save()
    })
    .then(e => done(e))
    .catch(err => {
      console.error(err);
      done(err);
    })
}

export function hello_world(params, ctx) {
  console.log("Hello, world!", params);
  return `Hello, ${JSON.stringify(params)}`;
}
