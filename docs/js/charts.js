function updateChart(locations) {
  const ctx = document.getElementById('aqChart').getContext('2d');
  const labels = locations.map(loc => loc.location);
  const values = locations.map(loc => loc.measurements[0].value);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'PM2.5 Levels',
        data: values,
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }]
    }
  });
}