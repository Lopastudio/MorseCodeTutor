const { app, BrowserWindow, Menu} = require('electron')
const path = require('path')
require('update-electron-app')()

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + './graphics/logo_desktop.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('./html/index.html')
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(false);
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
