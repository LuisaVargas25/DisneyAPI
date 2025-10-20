function Menu() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  menu.innerHTML = `
    <nav class="menu">
      <button onclick="Home()">🏰 Inicio</button>
      <button onclick="Favoritos()">💖 Favoritos</button>
      <button onclick="Informativa()">📘 Info</button>
      <button onclick="Original()">🌸 Original</button>
      <button onclick="alert('Próximamente 💫')">📤 Compartir</button>
    </nav>
  `;
}



//  Función simple para el botón “Compartir”
function Compartir() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <section class="compartir">
      <h2>📤 Compartir</h2>
      <p>Esta función estará disponible en próximas versiones 💫</p>
    </section>
  `;
}

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
