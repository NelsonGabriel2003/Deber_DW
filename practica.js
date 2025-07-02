let contador = 0;

// Delegación
document.getElementById("listaFrutas").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert("Clic en: " + e.target.textContent);
    contador++;
    document.getElementById("contador").textContent = contador;
  }
});

// Reiniciar el contador
document.getElementById("reset").onclick = () => {
  contador = 0;
  document.getElementById("contador").textContent = contador;
};
