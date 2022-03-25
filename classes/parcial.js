'use strict';



let discos = [];


//PARA PROBAR EL DISCO: 


/* 
let cancion1 = new Pista();
cancion1.testEstablecerCancionDuracion('Fake Plastic Trees', 290);


let cancion2 = new Pista();
cancion2.testEstablecerCancionDuracion('Paranoid Android', 143);

let cancion3 = new Pista();
cancion3.testEstablecerCancionDuracion('Optimistic', 316);

let cancion4 = new Pista();
cancion4.testEstablecerCancionDuracion('Cancion de Prueba', 250);

let disco1 = new Disco();
disco1.testEstablecerNombreAutorCodigo('The Bends', 'Radiohead', 45);
disco1.establecerDuracionCancion(cancion1);
disco1.establecerNombreCancion(cancion1);
disco1.establecerDuracionCancion(cancion4);
disco1.establecerNombreCancion(cancion4);
disco1.testEstablecerGenero('Indie');

let disco2 = new Disco();
disco2.testEstablecerNombreAutorCodigo('OK computer', 'Radiohead', 46);
disco2.establecerDuracionCancion(cancion2);
disco2.establecerNombreCancion(cancion2);
disco2.testEstablecerGenero('Indie');


let disco3 = new Disco();
disco3.testEstablecerNombreAutorCodigo('KID A', 'Radiohead', 47);
disco3.establecerDuracionCancion(cancion3);
disco3.establecerNombreCancion(cancion3);
disco3.testEstablecerGenero('Indie');


discos.push(disco1, disco2, disco3);
*/

// Función Cargar:
function Cargar() {

    let disco = new Disco();

    disco.establecerNombreDisco();
    disco.establecerNombreAutor();
    disco.establecerCodigoDisco();
    disco.establecerGenero();

    do {
        let pista = new Pista();
        pista.establecerNombreCancion();
        pista.establecerDuracionCancion();

        disco.establecerNombreCancion(pista);
        disco.establecerDuracionCancion(pista);
    } while (confirm('¿Desea ingresar una nueva canción?'));

    discos.push(disco);
}


// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';

    for (let disco of discos) {

        html += disco.generarBloqueHtml();
    }

    html += `<p>Total de Discos: ${Disco.cantidadDiscos}</p>`;
    html += `<p>Total de Pistas ingresadas: ${Pista.cantidadPistas}</p>`;



    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};




// Todas las funciones que necesites:
const EliminarDisco = () => {

    for (let disco of discos) {
        if (confirm('¿Está seguro que desea eliminar el último disco?')) {
            return discos.pop(disco), Disco.cantidadDiscos--, Pista.cantidadPistas--;
        } else {
            return alert('Ud. no elimino el último disco');
        }
    }
};


const BuscarDiscoCodigo = () => {
    let html = ``;
    let valorBuscado;
    let resultado;
    do {
        valorBuscado = parseInt(prompt('Ingrese código'));
        resultado = discos.filter(disco => disco.obtenerCodigo() == valorBuscado);
        resultado.forEach((disco) =>{
            return html +=`<p>El disco es: ${disco.obtenerNombreDisco()}, el autor: ${disco.obtenerNombreAutor()} y su genero: ${disco.obtenerGenero()}</p>`;
        })
    } while (isNaN(valorBuscado));
    
    
    document.getElementById('infoCodigo').innerHTML = html;

};












