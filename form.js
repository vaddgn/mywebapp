document.getElementById('surveyForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;

    // Отправка данных в телеграм
    if (window.Telegram.WebApp) {
        window.Telegram.WebApp.sendData(JSON.stringify({ name }));
    }
}); 
