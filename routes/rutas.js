const express = require("express");
const app = express();
var funcion1 = require("../test/needleware").fechaHora;
var funcion2 = require("../test/needleware").hola;

app.get("/",funcion1,funcion2,(req,res)=>{
    res.send("Hola mundo con express");
});

app.get("/home",funcion1,funcion2,(req,res)=>{
    res.send("Bienvenido a home");
});



module.exports = app;