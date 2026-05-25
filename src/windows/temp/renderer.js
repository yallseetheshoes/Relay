const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");


loginButton.onclick = async () => {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (username && password) {
        document.getElementById("login-response").textContent = await window.api.login(username, password);
    }
}
registerButton.onclick = async () => {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    if (username && password) {
        document.getElementById("register-response").textContent = await window.api.register(username, password);
    }
}
