const electron = require('electron');

electron.contextBridge.exposeInMainWorld("api",{
    login: (username,password) => electron.ipcRenderer.invoke("auth:login", {username,password}),
    register: (username,password) => electron.ipcRenderer.invoke("auth:register", {username,password})
})
