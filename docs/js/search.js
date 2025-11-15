function saveRecentSearch(city) {
  let history = JSON.parse(localStorage.getItem('recentCities')) || [];
  if (!history.includes(city)) {
    history.unshift(city);
    if (history.length > 5) history.pop(); // Keep only last 5
    localStorage.setItem('recentCities', JSON.stringify(history));
  }
  renderRecentSearches();
}

async function searchCity() {
  const city = document.getElementById('cityInput').value;
  if (!city) return;
  saveRecentSearch(city);
  const response = await fetch(`/api/airquality?city=${city}`);
  const data = await response.json();
  renderData(data);
}