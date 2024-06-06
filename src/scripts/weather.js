const homeBtn = document.getElementById('btnReturn');
const showCityName = localStorage.getItem('city');
const titleCity = document.querySelector('.main-title');
titleCity.innerText = `${showCityName} - SP`;

// Add event listener to homeBtn
homeBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});
