const electron = require("electron");
const paths = require("./paths");
const path = require("path");
const ipc = require("./ipc");
const state = require("./state");

const eventBus = require("./events");

async function createWindow(w,h,p,options = {},webPreferences = {}) { //window helper thing idk
    const win = new electron.BrowserWindow({
        width: w,
        height: h,
        webPreferences: {
            preload: path.join(p,"preload.js"),
                ...webPreferences
        },
        ...options
    })
    await win.loadFile(path.join(p,"index.html"));
    win.removeMenu();
    return win;
}
let mainWindow

electron.app.whenReady().then(async () => {
    //create login window first
    const loginPrompt = await createWindow(700,400,path.join(paths.WINDOWS,"Authentication"),{title:"Relay",minHeight:400,minWidth:700})
    eventBus.on("auth:success",async ()=>{
        loginPrompt.close()
        mainWindow = await createWindow(900,600,path.join(paths.WINDOWS,"Main"),{title:"Relay",minHeight:600,minWidth:900})
    })
})
