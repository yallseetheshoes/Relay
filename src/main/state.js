
const state = {
    token: null
}


function getToken() {
    return state.token;
}
function setToken(token) {
    state.token = token;
}
module.exports = {
    getToken,setToken
}