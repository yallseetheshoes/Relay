const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
const forms = document.forms;

const statCode = document.getElementById("statCode");

function setCode(text) {
    statCode.textContent = text;
}




let CD
forms[0].addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!CD) { // cooldown
        CD=true
        //extract user and pass
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (!username || !password) {setCode("Unknown error"); return} // if user/pass isn't available for some reason
        if (e.submitter.id === "login") { // login
            const response = await window.api.login(username, password);
            if (response === "401") {
                setCode("Invalid username or password");
            } else {
                setCode("Unknown error");
            }
        } else { // if not login do register
            const response = await window.api.register(username, password);
            if (response) {
                const loginResponse = await window.api.login(username, password);
            }
        }
        setTimeout(() => {
            CD=false
        },1000);
    }
})
/*
loginButton.onclick = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        document.getElementById("response").textContent = await window.api.login(username, password);
    }
}
*/