let numeroAleatorio = 100;
let listaVacia = [];

function borrarLista(lista){
    while (lista.firstChild) {              // Se selecciona el primer "hijo"
        lista.removeChild(lista.firstChild);    // Se elimina
    }
    return lista;
}

function setRatio(){
    ratio = document.getElementById("Ratio").value;                     // Recibimos el rango
    let numeroAleatorio = Math.floor((Math.random(1)*(ratio))+1);
    console.log(`el numero aleatorio es ${numeroAleatorio}`)            // Mostramos internamente el numero correcto
    return numeroAleatorio;
}

function borrarInput() {
    var input = document.getElementById("Entrada");
    input.value = ""; // Establecer el valor del input como una cadena vacía
}
console.log(numeroAleatorio);

function visualToggle(){                // Esto es para mostrarle al USER el modo en el que es´ta (Seleccionar numero o rango)
    let estadoBoton = document.getElementById("Estado").getAttribute("aria-pressed");
    let nombreBoton = document.getElementById("Estado");

    if (estadoBoton == "true"){
        nombreBoton.textContent = "Seleccionar numero";
    } else {
        nombreBoton.textContent = "Seleccionar rango";
    }
}


function apretarBoton(){                            

    let entrada = document.getElementById("Entrada").value;
    let intentos = document.getElementById("Intentos");
    let estadoBoton = document.getElementById("Estado").ariaPressed; // Valor del toggle
    intentos.innerHTML = "Intentos: 0";

    console.log(estadoBoton);                       
    if (estadoBoton == true){       // Si seleccionar NUMERO está apretado, el numero correcto será el NUMERO del input
        numeroAleatorio = document.getElementById("Ratio").value;

    } else {                        // Si no, generámos un numero aleatorio dentro de un rango establecido
        numeroAleatorio = setRatio();
    }

    listaActual = document.getElementById("lista-nueva");

    let nuevaLista = document.createElement("li");      // Creamos elemento hijo para lista en html
    let elementoNuevo = document.createTextNode(entrada);      // Al elemento hijo le añadimos la variable correspondiente
    nuevaLista.appendChild(elementoNuevo);                  // Añadimos elemento hijo a la lista
    listaActual.appendChild(nuevaLista);

    var ultimoElemento = listaActual.lastElementChild;          // Para llamar el último elemento

    listaVacia.push(parseInt(ultimoElemento.textContent));  // Lo insertamos en una lista
    intentos_suma = listaVacia.length;                      // Calculamos el largo de la lista

    if (parseInt(ultimoElemento.textContent) !== numeroAleatorio){      
        ultimoElemento.classList.add('ultimo-elemento-malo')
        intentos.innerHTML = 'intentos: ' + intentos_suma;
        borrarInput();                                              // Borramos el input rapidamente para seguir ingresando numeros
    } else{
        ultimoElemento.classList.add('ultimo-elemento-bueno')
        intentos.innerHTML = 'intentos: ' + intentos_suma;
                                                                    
        setTimeout(function() {                             // Al conseguir ganar, aparece un mensaje en pantalla
            if (window.confirm("¡Felicidades!")) {          // Si aceptamos, se reinicia el juego
                borrarLista(listaActual);
                intentos.innerHTML = "Intentos: 0";
                intentos_suma = 0;
                listaVacia = []
                borrarInput();
            }
        }, 300);
    }
}

function detectarEnter(event) {                     // Podemos dar click en boton PROBAR o con la tecla ENTER
    if (event.key === "Enter") {
      apretarBoton();
    }
}

