//do funny bridge stuff
const electron = require("electron");
const webRequest = require("./httpClient");
const {backend} = require("./paths");
const state = require("./state");
const events = require("./events");
electron.ipcMain.handle("auth:login", async (event,data) => {
    const {username,password} = data;
    try {
        const result = await webRequest("POST",backend+"/auth/login", {Username:username,Password:password});
        console.log(result);
        if (result && result.token) {
            state.setToken(result.token)
            events.emit("auth:success");
            return "OK";
        }
        return "TOKEN MISSING";
    } catch (error) {
        console.log(error);
        return "ERROR";
    }
});
electron.ipcMain.handle("auth:register", async (event,data) => {
    const {username,password} = data;
    try {
        const result = await webRequest("POST",backend+"/auth/register", {Username:username,Password:password});
        console.log(result);
        return true;
    } catch (error) {
        console.log(error);
        return error.message;
    }
});