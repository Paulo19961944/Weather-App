const weatherBtn = document.getElementById('submitBtn')

const weatherPage = weatherBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'result.html';
});
