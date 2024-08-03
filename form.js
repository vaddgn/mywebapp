let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.setText('Отправить');
tg.MainButton.show();

tg.MainButton.onClick(function(){
    let data = {
        a : 'отправлено'
    };
    let test = document.getElementById('test')
    tg.sendData(JSON.stringify(data));
    tg.MainButton.setText('Отправлено');
    test.innerHTML = "Sending data: " . JSON.stringify(data)
});
