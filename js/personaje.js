async function PersonajeDisney(id) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  let data = null;

  try {
    const res = await fetch("https://api.disneyapi.dev/character/" + id);
    const json = await res.json();
    const attrs = json.data || {};
    data = {
      id: attrs._id,
      name: attrs.name || "Sin nombre",
      image: attrs.imageUrl || "",
      films: attrs.films || [],
      tvShows: attrs.tvShows || [],
      videoGames: attrs.videoGames || [],
      parkAttractions: attrs.parkAttractions || []
    };
  } catch (e) {
    console.error(e);
  }

  if (!data) return;

  let esFavorito = favoritos.some(p => p.id === id);

  const root = document.getElementById("root");
  root.innerHTML = `
    <div class="detail">
      <button class="volver" onclick="Home()">⬅ Volver</button>
      <h2>${data.name}</h2>
      <img src="${data.image}" alt="${data.name}" height="200">
      <p><strong>Películas:</strong> ${data.films.join(", ") || "Ninguna"}</p>
      <p><strong>Series:</strong> ${data.tvShows.join(", ") || "Ninguna"}</p>
      <button id="favBtn">${esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
    </div>
  `;

  document.getElementById("favBtn").addEventListener("click", function(){
    let favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (esFavorito) {
      favs = favs.filter(f => f.id !== id);
      localStorage.setItem("favoritos", JSON.stringify(favs));
      this.textContent = "Agregar a favoritos";
      esFavorito = false;
    } else {
      favs.push({id: id, name: data.name, image: data.image});
      localStorage.setItem("favoritos", JSON.stringify(favs));
      this.textContent = "Quitar de favoritos";
      esFavorito = true;
    }
  });
}
