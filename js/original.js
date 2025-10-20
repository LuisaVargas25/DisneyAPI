// 📱 Menú y pestañas de navegación para DisneyDex
window.Menu = function Menu() {
  const root = document.getElementById("menu");
  if (!root) return;

  root.innerHTML = `
    <nav class="menu-tabs">
      <button onclick="Home()">🏠 Inicio</button>
      <button onclick="Favoritos()">⭐ Favoritos</button>
      <button onclick="Informativa()">ℹ️ Info</button>
      <button onclick="CompartirApp()">💬 Compartir</button>
      <button onclick="Original()">🎁 Original</button>
    </nav>
  `;
};

// 🎁 Pestaña original
window.Original = function Original() {
  const cont = document.getElementById("root");
  cont.innerHTML = `
    <section class="original">
      <h2>🎨 Mi Pestaña Original</h2>
      <p>Aquí puedes agregar algo creativo o único sobre Disney.</p>
      <p>Por ejemplo, tu lista de películas favoritas o curiosidades mágicas.</p>
      <button onclick="Home()">⬅ Volver</button>
    </section>
  `;
};

// 💬 Objeto compartido
window.CompartirApp = function CompartirApp() {
  const mensaje = {
    title: "DisneyDex App",
    text: "Explora personajes, películas y más del mundo Disney con DisneyDex ✨",
    url: "https://disneyapi.dev/"
  };

  if (navigator.share) {
    navigator.share(mensaje)
      .then(() => console.log("Compartido correctamente"))
      .catch(err => console.error("Error al compartir:", err));
  } else {
    alert("Tu dispositivo no soporta compartir. Copia este enlace: https://disneyapi.dev/");
  }
};
