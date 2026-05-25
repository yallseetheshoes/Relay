const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");


loginButton.onclick = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        document.getElementById("response").textContent = await window.api.login(username, password);
    }
}
