function Favoritos() {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const root = document.getElementById("root");

  if (!root) return;

  if (favoritos.length === 0) {
    root.innerHTML = `
      <div class="vacio">
        <p>🧸 No hay personajes favoritos aún</p>
        <button onclick="Home()">⬅ Volver al inicio</button>
      </div>
    `;
  } else {
    root.innerHTML = `
      <h2>⭐ Mis Personajes Favoritos</h2>
      ${generarLista(favoritos)}
    `;
  }
}
