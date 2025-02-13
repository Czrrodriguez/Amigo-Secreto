
let amigos = [];


function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


/** ESTA FUNCION SE PUEDE UTILIZAR PARA EL ESPECIFICO DEL AMIGO SECRETO Y SUS INDICACIONES ORIGINALES 
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

*/

// ESTA FUNCION ABAJO HACE QUE LOS AMIGOS INGRESADOS SEAN MEZCLADOS ENTRE SI, DEBEN HABER 2 O MAS INGRESADOS 

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }
    
    let disponibles = [...amigos];
    let resultadoSorteo = {};
    
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let posibles = disponibles.filter(a => a !== amigo);
        
        if (posibles.length === 0) {
            return sortearAmigos(); // Reintentar si queda un solo nombre repetido
        }
        
        let indiceAleatorio = Math.floor(Math.random() * posibles.length);
        let asignado = posibles[indiceAleatorio];
        
        resultadoSorteo[amigo] = asignado;
        disponibles = disponibles.filter(a => a !== asignado);
    }
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (let [amigo, asignado] of Object.entries(resultadoSorteo)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultado.appendChild(li);
    }
}

