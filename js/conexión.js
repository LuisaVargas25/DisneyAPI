var personajes = [];

// Función para conectar con la API de Disney
async function Conexion(filtrotipo) {
  let items = [];
  let page = 1;
  let seguir = true;

  while (seguir) {
    console.log(`📜 Cargando página ${page} de personajes Disney...`);
    try {
      const res = await fetch(`https://api.disneyapi.dev/character?page=${page}&pageSize=50`);
      const json = await res.json();
      const data = json.data || [];

      //  Si  no hay más datos, detenemos
      if (data.length === 0) {
        seguir = false;
        break;
      }

      //  Convertir los datos a objetos más simples
      const lista = data.map(item => ({
        id: item._id,
        name: item.name || "Sin nombre",
        image: item.imageUrl || "https://i.imgur.com/nYJZ5dD.png", // Imagen por defecto
        films: item.films || [],
        tvShows: item.tvShows || [],
        videoGames: item.videoGames || [],
      }));

      items = items.concat(lista);
      page++;

      //  Solo cargamos 10 páginas para que sea rápido
      if (page > 30) seguir = false;

    } catch (err) {
      console.error("⚠️ Error cargando página", page, err);
      seguir = false;
    }
  }

  //  Filtrar si se aplica un filtro (aunque en tu caso no se usa)
  if (filtrotipo && filtrotipo !== "All") {
    return items.filter(it => 
      it.films.includes(filtrotipo) || it.tvShows.includes(filtrotipo)
    );
  } else {
    return items;
  }
}

//  Splash y carga general
async function General() {
  const contenedor = document.getElementById("root");

  // Splash visible 
  contenedor.innerHTML = `
    <section class="splash">
      <p class="texto-splash" id="texto-carga">Cargando personajes Disney...</p>
    </section>
  `;

  // Texto mientras carga
  const textos = ["Cargando personajes Disney...", "Un momento más...", "✨ Preparando la magia ✨"];
  let index = 0;
  const intervalo = setInterval(() => {
    const texto = document.getElementById("texto-carga");
    if (texto) {
      texto.textContent = textos[index];
      index = (index + 1) % textos.length;
    }
  }, 1000);

  //  Esperar a que se carguen los personajes
  if (personajes.length === 0) {
    personajes = await Conexion("All");
  }

  //  Detener el texto animado y mostrar Home
  clearInterval(intervalo);
console.log(`✅ Total de personajes cargados: ${personajes.length}`);
Home();
Menu();

}

//Filtrar personajes (por películas o series)
async function FiltroConexion(Elfiltro) {
  const listaEl = document.getElementById("root");
  if (listaEl) listaEl.innerHTML = "<p>Cargando...</p>";

  personajes = await Conexion(Elfiltro);
  Home();
}

