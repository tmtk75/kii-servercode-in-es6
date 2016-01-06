const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  var win = new BrowserWindow({width: 800, height: 600, 'node-integration': true});
  win.loadURL(`file://${process.cwd()}/index.html`);
  win.webContents.openDevTools();
});

const path = require("path");
console.log("default appData", app.getPath("appData"));
app.setPath("appData", path.join(__dirname, "./appData"));
console.log("default userData", app.getPath("userData"));
app.setPath("userData", path.join(__dirname, "./userData"));
