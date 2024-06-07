document.addEventListener('DOMContentLoaded', async () => {
  // Declaração de Variáveis
  const homeBtn = document.getElementById('btnReturn');
  const titleCity = document.getElementsByClassName('main-title')[0];
  const tempValue = document.getElementById('temp-value');
  const weatherNow = document.getElementById('weather-now');
  const tempMax = document.getElementById('temp-max-value');
  const tempMin = document.getElementById('temp-min-value');
  const moistureValue = document.getElementById('moisture-value');
  const windSpeed = document.getElementById('wind-speed');

  // Recuperação de Dados Locais
  const cityNameValue = localStorage.getItem('city');

  // Chamada da API
  const apiKey = 'deed26ae8dc4a03f86f95d19219b5a98';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityNameValue)}&appid=${apiKey}&units=metric&lang=pt_br`;
  const results = await fetch(apiUrl);
  const json = await results.json();

  // Código se Bem Sucedido
  if (json.cod === 200) {
    showInfo({
      city: json.name,
      country: json.sys.country,
      tempNow: json.main.temp,
      tempMax: json.main.temp_max,
      tempMin: json.main.temp_min,
      humidity: json.main.humidity, 
      windSpeed: json.wind.speed,
      description: json.weather[0].description,
    });
  }

  // Mostra as Informações
  function showInfo(json) {
    titleCity.innerText = `${json.city} - ${json.country}`;
    tempValue.innerText = `${json.tempNow.toFixed(1)}ºC`
    weatherNow.innerText = `${json.description}`
    tempMax.innerText = `${json.tempMax.toFixed(1)}ºC`
    tempMin.innerText = `${json.tempMin.toFixed(1)}ºC`
    moistureValue.innerText = `${json.humidity}%`
    windSpeed.innerText = `${json.windSpeed.toFixed(0)}km/h`
  }

  // Adiciona Evento de Clique ao Botão
  homeBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});
