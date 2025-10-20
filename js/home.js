function generarLista(arrayPersonajes) {
  let listaHTML = "";
  for (let i = 0; i < arrayPersonajes.length; i++) {
    let item = arrayPersonajes[i];
    let id = item.id;
    let img = item.image ? item.image : "https://via.placeholder.com/96x96?text=No+Image";
    listaHTML += `
      <div class="c-lista-personaje personaje-${id}" onclick="PersonajeDisney('${id}')">
          <img src="${img}" height="100" loading="lazy" alt="${item.name}">
          <p>${item.name}</p>
      </div>`;
  }
  return listaHTML;
}

window.Home = async function Home() {
  const root = document.getElementById("root");
  if (root) root.innerHTML = "";

  const header = document.createElement("div");
  header.className = "header";
  header.innerHTML = `<h1>DisneyDex</h1><p>Explora el mágico mundo de Disney</p>`;

  const buscador = document.createElement("div");
  buscador.id = "buscador";
  buscador.innerHTML = `<input id="search" placeholder="Buscar personaje..." oninput="FiltrarBusqueda(this.value)" />`;

  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.id = "filtros";
  contenedorFiltro.innerHTML = `
      <button onclick="FiltroConexion('All')">Todos</button>
      <button onclick="FiltroConexion('Frozen')">Frozen</button>
      <button onclick="FiltroConexion('The Lion King')">The Lion King</button>
      <button onclick="FiltroConexion('Mickey Mouse Works')">Mickey Mouse</button>
      <button onclick="FiltroConexion('Toy Story')">Toy Story</button>
  `;

  const listaHTML = generarLista(personajes);
  const contenedorPersonajes = document.createElement("section");
  contenedorPersonajes.id = "la-lista";
  contenedorPersonajes.innerHTML = listaHTML;

  root.appendChild(header);
  root.appendChild(buscador);
  root.appendChild(contenedorFiltro);
  root.appendChild(contenedorPersonajes);
};

window.FiltrarBusqueda = function FiltrarBusqueda(q) {
  q = q.toLowerCase();
  const results = personajes.filter(p => p.name && p.name.toLowerCase().includes(q));
  const listaEl = document.getElementById("la-lista");
  if (listaEl) listaEl.innerHTML = generarLista(results);
};
