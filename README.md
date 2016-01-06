# README

Testing environment for Kii Cloud servercode.

This allows you to do
- Write servercode in ES6 which supports `class`, `=>` (arrow function) or others
- Execute your code on an Electron app
- Build as single .js file with webpack


## Getting Started
```
# To add to PATH
$ PATH=`pwd`/node_modules/.bin
or
$ source .env
```

`[0]` and `[1]` show different terminal.
```
$ npm install

[0]$ webpack -w
Hash: da55844f3f161a01ed76
Version: webpack 1.12.9
...

[1]$ electron .
```

You can see a window like this.
<img width="480px" src="https://59c5872c.jp.kiiapps.com/api/x/s.d3d808a00022-0f9b-5e11-ddea-081a754a"/>


## Writing codes
Your sources are in `src` directory. Please edit them as you want.

