const express = require("express");
const app = express();
const path= require("path");
const port = 3005;

app.use("/", express.static(__dirname));

app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "/MenuPrincipal.html"));
})


app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
  });