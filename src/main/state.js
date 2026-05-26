
const state = {
    token: null
}


function getToken() {
    return state.token;
}
function setToken(token) {
    console.log("[DEBUG] Updating token: "+token);
    state.token = token;
}
module.exports = {
    getToken,setToken
}