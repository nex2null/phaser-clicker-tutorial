const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    useContentSize: true,
    autoHideMenuBar: true
  });
  //win.setMenu(null);
  win.loadFile('dist/index.html');
}

app.whenReady().then(createWindow);