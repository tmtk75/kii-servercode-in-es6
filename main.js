const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const win = new BrowserWindow({width: 800, height: 600, 'node-integration': true});
  win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.openDevTools();
  win.webContents.on('did-finish-load', () => {
  });
});

const path = require("path");
//console.log("default appData",  app.getPath("appData"));
//console.log("default userData", app.getPath("userData"));
app.setPath("appData",  path.join(__dirname, "./.appData"));
app.setPath("userData", path.join(__dirname, "./.userData"));
