const { app, BrowserWindow } = require('electron');
let appWindow
function creatWindow(){
  appWindow = new BrowserWindow({
    width:1000,
    height:800
  })
  appWindow.loadFile('dist/rentify_frontend/browser/index.html')
  appWindow.on('closed',function(){
    appWindow=null
  })
}

app.whenReady().then(()=>{
  creatWindow()
})
