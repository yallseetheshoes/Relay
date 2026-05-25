const {app} = require("electron");
const path = require('path');

const SRC = path.join(process.cwd(), "src/")
module.exports = {
    SRC,
    WINDOWS: path.join(SRC,"windows"),
    backend: "http://localhost:5009/api"
}