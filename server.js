//
const express        = require('express'),
      bodyParser     = require('body-parser'),
      methodOverride = require('method-override'),
      logger         = require("morgan");

const port = parseInt(process.env.PORT) || 3000;
const app = express();
app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(logger('dev'));

module.exports = app;

app.listen(port, (err) => {
  if (err) {
    console.error(err)
    return;
  }
  console.debug("A HTTP server started listening at %d", port)
})
