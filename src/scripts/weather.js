// Declaração de Variáveis
const homeBtn = document.getElementById('btnReturn');
const titleCity = document.querySelector('.main-title');
const tempValue = document.getElementById('temp-value')
const weatherNow = document.getElementById('weather-now')
const tempMax = document.getElementById('temp-max-value')
const tempMin = document.getElementById('temp-min-value')
const moistureValue = document.getElementById('moisture-value')
const windSpeed = document.getElementById('wind-speed')

// Recuperação de Dados Locais
const cityNameValue = localStorage.getItem('city')

// Chamada da API
const apiKey = 'deed26ae8dc4a03f86f95d19219b5a98'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityNameValue)}&appid=${apiKey}&units=metric&lang=pt_br`
const results = fetch(apiUrl)
const json = results.json


// Codigo se Bem Sucedido
if(json.cod === 200){
  showInfo({
    city: json.name,
    country: json.sys.country,
    tempNow: json.main.temp,
    tempMax: json.main.temp_max,
    tempMin: json.main.temp_min,
    humidity: json.temp.main.humidity,
    windSpeed: json.temp.wind.speed,
    description: json.weather[0].description,
  })
}

// Mostra as Informações
const showInfo = (json) => {
  titleCity.innerText = `${json.city} - ${json.country}`;
}

// Adiciona Evento de Clique ao Botão
homeBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});
