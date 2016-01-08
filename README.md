# README

Develeoment & test environment for [Kii Cloud servercode](http://docs.kii.com/en/guides/serverextension/).

ES6, Developer tool in Chronium for debug, Easy build,
Pre-configured tools for JavaScript like testing and linting,
and more!


## Support
This repository allows you to do
- Write servercode in ES6 which supports `class`, `=>` (arrow function) or others
- Generate single .js file combined with webpack for easy deployment
  * source-map support. You can view source easily and set breakpoints in developer tool of Chronium.
- Execute your code on an Electron app with some features.
  * Support sync & async call.
  * Support `getAccessToken` and `getAppAdminContext`.
  * Support timeout which can be configured by yourself.
  * Debugging with developer tool of Chronium. Breakpoints work!
  * etc.
- Emulate REST API to invoke endpoints you define.
- Testing with `mocha` and `power-assert`.
- ESLint is configured.


Not supported.
- Verification for whether it's enabled to be uploaded or not.
- Limitation for step count.
- `require` for underscore doesn't work well.


## Getting Started
In 3 minutes! without time to download modules.

To configure your app, open `config.js` and edit three properties
`app_id`, `app_key` and `api_endpoint`. Or export three envvars.
```
app_id: "",       // envvar: KII_APP_ID
app_key: "",      // envvar: KII_APP_KEY
api_endpoint: "", // envvar: KII_API_ENDPOINT
```

Set up your PATH.
```
# To add to PATH
$ PATH=`pwd`/node_modules/.bin
or
$ source .env
```

`[0]`, `[1]` and `[2]` express different terminal.
```
$ npm install

[0]$ npm run build:debug
Hash: da55844f3f161a01ed76
Version: webpack 1.12.9
...

[1]$ npm start
...

[2]$ make sync
[2]$ make async
```

You can see a window like this.

<img width="480px" src="https://59c5872c.jp.kiiapps.com/api/x/s.d3d808a00022-0f9b-5e11-ddea-081a754a"/>


## Writing codes
Your sources are in `src` directory. Please edit them as you want.
You need to use `src/main.js` which exposes public entry names can be invoked.
If you want to change it, `./debug.js` and `./release.js`.


## Debugging
Step execution works! Set breakpoints wherever you want.

<img width="480px" src="https://59c5872c.jp.kiiapps.com/api/x/s.350948a00022-ced9-5e11-266b-0d435104"/>


## Testing
```
$ npm test
```

Test files are in `./test` directory.

<img width="480px" src="https://59c5872c.jp.kiiapps.com/api/x/s.5a8848a00022-d4e9-5e11-366b-028d18b1"/>


## Linting
```
$ npm run lint
```


## Generated files
* `./dist/bundle.debug.js` based on `debug.js`.
* `./dist/bundle.release.js` based on `release.js`.

Basically you don't need to edit `debug.js`.
On the other hand, you need to edit `release.js` to export functions you want. Please follow existing code.


## Release build
```
$ npm run build:release
```
This command generates minified `./dist/bundle.release.min.js`.


## Configuration
### Enable getAccessToken()
Open `./config.js` and fill `username` and `password` with your values.

### Enable getAppAdminContenxt()
Open `./config.js` and fill `client_id` and `client_secret` with your values.

