'use strict';

class Disco{
    //Estático:
    static cantidadDiscos = 0;
    static codigos = [];
    static generos = [];
    
    //propiedades: 
    #nombre = '';
    #autor = '';
    #codigo = '';
    #genero = '';

    // arrays:

    #canciones = [];
    #duraciones = [];
    
 
     

    constructor() {
        console.log('Nuevo Disco creado')
        Disco.cantidadDiscos++;
    }



    //metodo para pedir el nombre del disco:
    establecerNombreDisco() {
        let banderitaIngreso = false;
        do{ 
            if (banderitaIngreso){
                alert('Debe ingresar un nombre');
            }
            this.#nombre = prompt('Hola! Escriba el nombre del disco deseado');
            banderitaIngreso = true;
        } while(!isNaN(this.#nombre));
        banderitaIngreso = false;
    }

    //metodo para pedir el nombre del autor:

    establecerNombreAutor() {
        do{
            this.#autor = prompt('Por favor ingrese el nombre del autor del disco.');
        }while(!isNaN(this.#autor));
    }

    //metodo para pedir el codigo del disco y validar:
    //REVISAR
    establecerCodigoDisco() {
            let banderita = false;
            let codigoExistente = false;

            do {
                codigoExistente = false;
                if(banderita) {
                    alert('Error, debe ingresar un código.');
                }
                this.#codigo = prompt('Ingrese el código del disco (en un rango de 1 y 999)');
                for(let codigo of Disco.codigos) {
                    if (this.#codigo == codigo) {
                        alert('Este código ya existe');
                        codigoExistente = true;
                    }
                }
                banderita = true;
            } while (!(this.#codigo > 0 && this.#codigo <= 999) || codigoExistente);
            Disco.codigos.push(this.#codigo);
            banderita = false;
        }

    //metodo para pedir tipo de género:

    establecerGenero() {
        do{
            this.#genero = prompt('Por favor ingrese el genero musical del Disco. Rock/Reggae/Indie/Metal/Clasica');
        }while(!isNaN(this.#genero));
        Disco.generos.push(this.#genero);
    }

    //metodo para la cantidad de pistas que tiene cada disco. 

    promedioDuracionDisco(){
        let cantidad = this.#duraciones.length;
        let acumulacion = 0;

        for ( let duracion of this.#duraciones){
            acumulacion += duracion.obtenerDuracion();
        }
        let promedioDuracion = acumulacion / cantidad;
        return promedioDuracion;
    }

    

    duracionDisco(){    
        
        let duracionDelDisco = this.#duraciones.reduce((acc, item) =>{
            return acc = acc + item.obtenerDuracion();
        }, 0);

        return duracionDelDisco;
    
}


    pistaConMayorDuracion(){
        let mayorDuracion = this.#duraciones.reduce((acc, item) =>{
            return Math.max(acc, item.obtenerDuracion());
        }, 0);

        return mayorDuracion;


    }


    obtenerNombreDisco(){
        return this.#nombre;
    }
    
    obtenerNombreAutor() {
        return this.#autor;
    }

    obtenerCodigo() {
        return this.#codigo;

    }

    obtenerGenero(){
        return this.#genero;
        
    }

    establecerNombreCancion(cancion) {
        this.#canciones.push(cancion);
    }

    establecerDuracionCancion(duracion) {
        this.#duraciones.push(duracion);
    }

   

    //mensaje html: 

    generarBloqueHtml() {

        let html = `<p><strong> Tu disco: </strong></p>`;
        html += `<ul>`;
        html += `<li><strong>Nombre del disco:</strong> ${this.#nombre} </li> <li> <strong> Nombre del autor:</strong> ${this.#autor}</li> <li><strong> Número de código:</strong> ${this.#codigo}</li> <li><strong> Género Musical:</strong> ${this.#genero}</li>`; 
        html += `</ul>`;    
        html += `<p><strong>Pistas:</strong></p>`;
        html += `<ul>`;

        for (let cancion of this.#canciones) {
            html += `<li>${cancion.generarBloqueHtml()}</li> `;
        };
        html += `</ul>`;
        html += `<p><strong>Cantidad de pistas del disco:</strong> ${this.#canciones.length}</p>`;
        html += `<p><strong>Duracion del disco:</strong> ${this.duracionDisco()}</p>`;
        html += `<p><strong>Promedio Duración del disco:</strong> ${this.promedioDuracionDisco()} segundos.</p>`;
        html += `<p><strong>Pista con mayor duración:</strong> <span class="mayorDuracion">${this.pistaConMayorDuracion()}</span> segundos.</p>`;
        
        return html; 
    }  

    

    //test de prueba:
    
    testEstablecerNombreAutorCodigo(nombre, autor, codigo) { 
        this.#nombre = nombre;
        this.#autor = autor;
        this.#codigo = codigo;
    }

    testEstablecerGenero(genero){
        this.#genero = genero; 
    }
}



