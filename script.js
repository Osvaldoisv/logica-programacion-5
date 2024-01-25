let numeroAleatorio;
let listaVacia = [];

function borrarLista(lista){
    while (lista.firstChild) {              // Se selecciona el primer "hijo"
        lista.removeChild(lista.firstChild);    // Se elimina
    }
    return lista;
}

function setRatio(){
    ratio = document.getElementById("Ratio").value;
    let numeroAleatorio = Math.floor((Math.random(1)*(ratio))+1);
    return numeroAleatorio;
}

function borrarInput() {
    // Obtener el elemento input por su ID
    var input = document.getElementById("Entrada");
    
    // Establecer el valor del input como una cadena vacía
    input.value = "";
}

setRatio();

function apretarBoton(){

    let entrada = document.getElementById("Entrada").value;
    let intentos = document.getElementById("Intentos");
    intentos.innerHTML = "Intentos: 0";

    numeroAleatorio = setRatio();

    listaActual = document.getElementById("lista-nueva");

    let nuevaLista = document.createElement("li");      // Creamos elemento hijo para lista en html
    let elementoNuevo = document.createTextNode(entrada);      // Al elemento hijo le añadimos la variable correspondiente
    nuevaLista.appendChild(elementoNuevo);                  // Añadimos elemento hijo a la lista
    listaActual.appendChild(nuevaLista);

    var ultimoElemento = listaActual.lastElementChild;

    listaVacia.push(parseInt(ultimoElemento.textContent));
    intentos_suma = listaVacia.length;

    if (parseInt(ultimoElemento.textContent) !== numeroAleatorio){
        ultimoElemento.classList.add('ultimo-elemento-malo')
        intentos.innerHTML = 'intentos: ' + intentos_suma;
        borrarInput();
    } else{
        ultimoElemento.classList.add('ultimo-elemento-bueno')
        intentos.innerHTML = 'intentos: ' + intentos_suma;
        
        setTimeout(function() {
            if (window.confirm("¡Felicidades!")) {
                borrarLista(listaActual);
                intentos.innerHTML = "Intentos: 0";
                intentos_suma = 0;
                listaVacia = []
                borrarInput();
            }
        }, 300);
    }
}

function detectarEnter(event) {
    if (event.key === "Enter") {
      // Llama a la función que quieres ejecutar cuando se presiona Enter
      apretarBoton();
    }
}

