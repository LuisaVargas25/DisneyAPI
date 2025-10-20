// Menú y pestañas de navegación para DisneyDex
window.Menu = function Menu() {
  const root = document.getElementById("menu");
  if (!root) return;

  root.innerHTML = `
    <nav class="menu-tabs">
      <button onclick="Home()">🏠 Inicio</button>
      <button onclick="Favoritos()">⭐ Favoritos</button>
      <button onclick="Informativa()">ℹ️ Info</button>
      <button onclick="Original()">🎁 Original</button>
    </nav>
  `;
};

function Original() {
  const contenedor = document.getElementById("root");

  contenedor.innerHTML = `
    <section class="original">
      <h2>🌸 Mi rincón mágico 🌸</h2>
      <p>
        Bienvenido a mi sección especial ✨ Aquí quise agregar mi toque personal, 
        inspirado en la magia y los sueños del mundo Disney.
      </p>
      <p class="frase">
        “Si puedes soñarlo, puedes hacerlo.” — Walt Disney 💫
      </p>
    </section>
  `;
}
