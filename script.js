let quien = ['El perro', 'Mi abuela', 'La tortuga', 'Mi pajaro'];
let accion = ['se comio', 'se orino', 'aplasto', 'rompio'];
let que = ['mi tarea', 'las llaves', 'el carro'];
let cuando = ['antes de clase', 'justo a tiempo', 'cuando termine', 'cuando estaba almorzando', 'mientras estaba rezando'];

function generadorExcusas(){
    let numQuien = Math.floor(Math.random() * 4);
    let numAccion = Math.floor(Math.random() * 4);
    let numQue = Math.floor(Math.random() * 3);
    let numCuando = Math.floor(Math.random() * 5);

    let excusaCompleta = quien[numQuien] + " " + accion[numAccion] + " " + que[numQue] + " " + cuando[numCuando];

    return excusaCompleta;
}


document.getElementById('excusa').innerHTML = generadorExcusas();