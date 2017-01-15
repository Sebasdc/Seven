const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// Say goodbye Javascript Garbage Collector ;)
let win

function createWindow() {
  // Create the brower window.
  win = new BrowserWindow({ window: 800, height: 600 })

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/../dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {

  if(win === null) {

    createWindow()
  }

})