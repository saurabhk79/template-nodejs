const express = require("express");

const app = express();
const PORT = 8080;

app.listen(PORT, ()=> {
    console.log("Running on port http://localhost:"+PORT);
})

module.exports = app;