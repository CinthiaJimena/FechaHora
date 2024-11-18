const express = require("express");
var path = require("path");
var usuariosRutas=require("./routes/rutas");
const app = express();
app.use(express.urlencoded({extend:true}));
app.use("/", usuariosRutas);
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Servidor en https://localhost:"+port);
});