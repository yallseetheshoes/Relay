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
        icon: path.join(paths.SRC, "assets/relayicon.ico"),
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
    const loginPrompt = await createWindow(300,350,path.join(paths.WINDOWS,"Authentication"),{title:"Relay",minHeight:350,minWidth:300,frame:false,resizable:false})
    eventBus.on("auth:success",async ()=>{
        console.log("[DEBUG] Login success")
        loginPrompt.close()
        mainWindow = await createWindow(1100,700,path.join(paths.WINDOWS,"Main"),{title:"Relay",minHeight:600,minWidth:900})

    })
})
