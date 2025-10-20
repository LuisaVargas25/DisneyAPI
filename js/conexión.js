var personajes = [];

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

      if (data.length === 0) {
        seguir = false;
        break;
      }

      const lista = data.map(item => ({
        id: item._id,
        name: item.name || "Sin nombre",
        image: item.imageUrl || "https://via.placeholder.com/96x96?text=Sin+imagen",
        films: item.films || [],
        tvShows: item.tvShows || [],
        videoGames: item.videoGames || [],
        parkAttractions: item.parkAttractions || []
      }));

      items = items.concat(lista);
      page++;
      if (page > 10) seguir = false;

    } catch (err) {
      console.error("⚠️ Error cargando página", page, err);
      seguir = false;
    }
  }

  if (filtrotipo && filtrotipo !== "All") {
    return items.filter(it => 
      it.films.includes(filtrotipo) || it.tvShows.includes(filtrotipo)
    );
  } else {
    return items;
  }
}

async function General() {
  const contenedor = document.getElementById("root");
  if (contenedor) contenedor.innerHTML = "<p>Cargando personajes Disney...</p>";

  if (personajes.length === 0) {
    personajes = await Conexion("All");
  }

  console.log(`✅ Total de personajes cargados: ${personajes.length}`);
  Home();
}

async function FiltroConexion(Elfiltro) {
  const listaEl = document.getElementById("root");
  if (listaEl) listaEl.innerHTML = "<p>Cargando...</p>";

  personajes = await Conexion(Elfiltro);
  Home();
}
