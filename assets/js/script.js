//Creamos el patron módulo mediante IIFE
let patronModulo = (function () {
    //Creamos la funcion privada
    function funcionPrivada(url, id) {
        console.log("Url: ", url);
        console.log("Id: ", id);
        id.setAttribute("src", url);
    }

    return {
        //Creamos la funcion publica que llama a la funcion privada
        llamarFuncionPrivada: (url, id) => funcionPrivada(url, id)
    }
})();
//Mostramos en consola el valor de patronModulo
console.log("Valor de patronModulo: ", patronModulo);

//Creamos la clase padre Multimedia
class Multimedia {
    constructor(url) {
        // Atributo protegido mediante closure
        let _url = url;
        //Closure
        this.getUrl = function () {
            return _url;
        }
    }
    //get url nos retorna "getUrl" para acceder a la url
    get url() {
        return this.getUrl();
    }
    
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}
//Creamos la clase hija de Multimedia: Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        //hereda url de su padre
        super(url);
        //id es propia de Reproductor
        this._id = id;
    }
    //Metodo playMultimedia solicitado, el cual permite hacer el llamado
    //a patronModulo y acceder a la funcion publica
    playMultimedia() {
        patronModulo.llamarFuncionPrivada(this.url, this._id);
    }
    //Metodo setInicio que recibe y agrega un tiempo de inicio
    //a la URL de la etiqueta iframe
    setInicio(tiempo) {
        this._id.setAttribute("src", `${this.url}?start=${tiempo}`);
    }

}

//Instanciamos a la clase hija segun corresponda
//Creamos la variable IdMusica a quien le asignamos el id musica del html
const idMusica = document.getElementById("musica");
//Instanciamos Reproductor y le añadimos la url y el idMusica
let musica = new Reproductor("https://www.youtube.com/embed/c0bm1XfDtdY", idMusica);
//Invocamos al método “playMultimedia” y así mostramos los videos en el html.
musica.playMultimedia();
//Invocamos el método “setInicio” y modificamos el tiempo de inicio del video
musica.setInicio(30);

//Creamos la variable idPeliculas a quien le asignamos el id peliculas del html
const idPeliculas = document.getElementById("peliculas");
//Instanciamos Reproductor y le añadimos la url y el idPeliculas
let peliculas = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", idPeliculas);
//Invocamos al método “playMultimedia” y así mostramos los videos en el html.
peliculas.playMultimedia();
//Invocamos el método “setInicio” y modificamos el tiempo de inicio del video
peliculas.setInicio(40);

//Creamos la variable idSeries a quien le asignamos el id series del html
const idSeries = document.getElementById("series");
//Instanciamos Reproductor y le añadimos la url y el idSeries
let series = new Reproductor("https://www.youtube.com/embed/1KsyZF590NM", idSeries);
//Invocamos al método “playMultimedia” y así mostramos los videos en el html.
series.playMultimedia();
//Invocamos el método “setInicio” y modificamos el tiempo de inicio del video
series.setInicio(46);