let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.setText('отправить');
tg.MainButton.show()



let btn = document.getElementById('btn');


Telegram.WebApp.onEvent('mainButtonClicked', function (){
    let data = {
        a : 'отправлено'
    };
    tg.sendData(JSON.stringify(data));
});
