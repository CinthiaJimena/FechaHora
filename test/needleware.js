var fechaHora=(req,res,next)=>{
    let ahora = new Date();
    let año = ahora.getFullYear();
    let mes = ahora.getMonth() + 1; // Los meses empiezan desde 0
    let día = ahora.getDate();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    console.log(`Fecha: ${día}/${mes}/${año}`);
    console.log(`Hora: ${horas}:${minutos}:${segundos}`);
    next();
}

var hola=(req,res,next)=>{
    console.log("Hola mundo");
    next();
}

module.exports = {
    fechaHora,
    hola
}