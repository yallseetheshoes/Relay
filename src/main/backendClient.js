// call backend here IDK
const webRequest = require("./httpClient");
const backendPath = require("./paths").backend;


class auth {
    async login(username,password) {
        return await webRequest("POST", backendPath+"/auth/login",{username,password});
    }
    async register(username,password) {
        return await webRequest("POST", backendPath+"/auth/register",{username,password});
    }
}

