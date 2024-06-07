const weatherBtn = document.getElementById('submitBtn');

weatherBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const cityName = document.getElementById('city-name').value;
  localStorage.setItem('city', cityName);

  if (cityName === '') {
    showAlert('Você precisa digitar uma cidade...');
  } else {
    window.location.href = 'result.html';
  }
});

const showAlert = (msg) => {
  const alertElement = document.getElementById('alert');
  alertElement.style.display = 'block';
  alertElement.innerText = msg;
};
