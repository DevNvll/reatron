'use strict';
const { app, BrowserWindow } = require('electron')

const path = require('path')

require('electron-reload')(path.join(__dirname, 'dist'))

let mainWindow;

function createWindow () {
  const browserOptions = {
    width: 500,
    height: 500
  }
  mainWindow = new BrowserWindow(browserOptions)
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.on('closed', function() {
    mainWindow = null
  });
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
