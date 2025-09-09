// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];



function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let amigoUsuario = document.getElementById('amigo').value.trim();

    
    if (amigoUsuario === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        listaAmigos.push(amigoUsuario);
        console.log(listaAmigos);
    }
    mostrarLista();

    limpiarCaja();
    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function mostrarLista() {
  // 1. Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // 2. Limpiar la lista existente
  lista.innerHTML = "";

  // 3. Iterar sobre el arreglo
  for (let i = 0; i < listaAmigos.length; i++) {
    // 4. Crear un nuevo elemento <li> para cada amigo
    const li = document.createElement("li");
    li.textContent = listaAmigos[i];

    // 5. Agregar el <li> a la lista (<ul>)
    lista.appendChild(li);
  }
}

function sortearAmigo() {

    if (listaAmigos.length === 0){
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    const amigoSorteado = listaAmigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    
}

