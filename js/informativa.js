function Informativa() {
  const contenedor = document.getElementById("root");
  contenedor.innerHTML = `
    <section class="informativa">
      <div class="info-contenido">
        <h2>✨ Bienvenido a DisneyDex ✨</h2>
        <p><strong>DisneyDex</strong> es una enciclopedia digital para explorar personajes, películas, series, videojuegos y atracciones del mundo Disney. 🏰</p>
        <p>🎬 <strong>Fuente de datos:</strong> <a href="https://disneyapi.dev/" target="_blank">Disney API</a></p>
        <p>💡 Usa el buscador y los filtros para descubrir tus personajes favoritos y guárdalos en tu lista ⭐</p>
      </div>
    </section>
  `;
}
