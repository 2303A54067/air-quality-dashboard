function renderData(data) {
  const results = document.getElementById('results');
  results.innerHTML = '';

  data.results.forEach(location => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${location.location}</h3>
      <p><strong>PM2.5:</strong> ${location.measurements[0].value} ${location.measurements[0].unit}</p>
    `;
    results.appendChild(div);
  });

  updateChart(data.results);
  renderRecentSearches();
}

function renderRecentSearches() {
  const results = document.getElementById('results');
  const history = JSON.parse(localStorage.getItem('recentCities')) || [];
  const container = document.createElement('div');
  container.innerHTML = `<h4>Recent Searches:</h4>`;
  history.forEach(city => {
    const btn = document.createElement('button');
    btn.textContent = city;
    btn.onclick = () => {
      document.getElementById('cityInput').value = city;
      searchCity();
    };
    container.appendChild(btn);
  });
  results.prepend(container);
}