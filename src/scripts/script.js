const weatherBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('city-name')

const weatherPage = weatherBtn.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.setItem('city', cityName.value)
    window.location.href = 'result.html';
});
