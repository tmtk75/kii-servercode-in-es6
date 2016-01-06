const Logger = require("js-logger");

module.exports = {
  timeout: 5*1000,  // millisecond
  //log_level: Logger.INFO,

  //
  app_id: "",       // envvar: KII_APP_ID
  app_key: "",      // envvar: KII_APP_KEY
  api_endpoint: "", // envvar: KII_API_ENDPOINT

  // To enable getAccessToken(), fill below two properties with valid values.
  username: "",  // envvar: KII_USERNAME
  password: "",  // envvar: KII_PASSWORD

  // To enable getAppAdminContext(), fill below two properties with valid values.
  client_id: "",      // envvar: KII_CLIENT_ID
  client_secret: "",  // envvar: KII_CLIENT_SECRET
}

