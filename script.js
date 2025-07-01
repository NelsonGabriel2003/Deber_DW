
function ejercicios_Nelson() {
  const btn = document.getElementById("btnDemo");

  // Usando onclick (solo uno sobrevive)
  btn.onclick = () => alert("Primera función");
  btn.onclick = () => alert("Segunda función");
  // Solo verás: "Segunda función"

  // Usando addEventListener (ambas se ejecutan)
  btn.addEventListener("click", () => alert("Función A"));
  btn.addEventListener("click", () => alert("Función B"));

  document.getElementById("hijo").addEventListener("click", (e) => {
    console.log("1) Handler del HIJO");
    // e.stopPropagation();
  });

  document.getElementById("padre").addEventListener("click", (e) => {
    console.log("2) Handler del PADRE");
  });

  document.body.addEventListener("click", () => {
    console.log("3) Handler de BODY");
  });
}

ejercicios_Nelson();

const lista_dinamica=document.getElementById('miListaDinamica')
const agregar_elemento=document.getElementById('agregarElemento')



lista_dinamica.addEventListener('click', function(event) {
        if (event.target && event.target.nodeName === 'LI') {
            alert(event.target.textContent);
        }
    });

agregar_elemento.addEventListener('click', function() {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = 'Elemento Nuevo';
        lista_dinamica.appendChild(nuevoElemento);
    });

    /*
    nuevoElemento.addEventListener('click', function() {
        alert(this.textContent);
    })
    */
   console.dir(lista_dinamica)