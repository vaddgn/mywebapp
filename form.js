let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.setText('Отправить');
tg.MainButton.show();

tg.MainButton.onClick(function(){
    let data = {
        a : 'отправлено'
    };
    tg.sendData(JSON.stringify(data));
    tg.MainButton.setText('Отправлено');
});
