/* fetch("https://www.swapi.tech/api/planets/1")
  .then(res => res.json())
  .then(data => {
    // Update the card with fetched planet information
    const planetInfoDiv = document.getElementById('planetInfo');
    planetInfoDiv.innerHTML = `
      <p>Name: ${data.result.properties.name}</p>
      <p>Climate: ${data.result.properties.climate}</p>
      <p>Terrain: ${data.result.properties.terrain}</p>
      <p>Population: ${data.result.properties.population}</p>
    `;
  })
  .catch(err => console.error(err)); */