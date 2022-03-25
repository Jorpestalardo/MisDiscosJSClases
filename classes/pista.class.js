'use strict';

class Pista{

    static cantidadPistas = 0;

    #cancion = '';
    #duracion = '';

    constructor() {
        console.log('Nueva pista creada')
        Pista.cantidadPistas++;

    }

    //Metodo para que el usuario ingrese la canción:

    establecerNombreCancion() {
        do{
            this.#cancion = prompt('Ingrese por favor el nombre de la canción.');
        }while(!isNaN(this.#cancion));
    }

    //Metodo para que el usuario ingrese la duración de la canción: 
    establecerDuracionCancion() {
        let banderita = false; 
       do{
        if (banderita) {
            alert('Error, la duración excede el rango.');
        }
        this.#duracion = parseInt(prompt('Ingrese por favor la duración de la canción, teniendo en cuenta que puede durar desde 0 a 7200 segundos.'))
        banderita = true;
    }while(!(this.#duracion >= 0 && this.#duracion <= 7200));
    banderita = false;
}

obtenerCancion(){
    return this.#cancion;
}

obtenerDuracion(){
    return this.#duracion;
}

generarBloqueHtml() {
    let html = `<strong> Nombre de la canción:</strong> ${this.#cancion} <strong> Duración: </strong> <span class="${(this.#duracion >= 180) ? 'superior' : 'inferior'}">${this.#duracion}</span> segundos`; 
    return html; 
}  

//test de prueba: 

testEstablecerCancionDuracion(cancion, duracion) { 
    this.#cancion = cancion;
    this.#duracion = duracion;
}

}

