let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.setText('Отправить');
tg.MainButton.show();

tg.MainButton.onClick(function(){
    let data = {
        a : 'отправлено'
    };
    let test = document.getElementById('test')
    test.innerHTML = 'asdasdasdasdasdasdasd';
    tg.sendData(JSON.stringify(data));
    tg.MainButton.setText('Отправлено');
});


let btn = document.getElementById('btn');

document.addEventListener('click', function(){
    let data = {
        a : 'отправлено'
    };
    let test = document.getElementById('test')
    test.innerHTML = JSON.stringify(data);
    tg.sendData(JSON.stringify(data));
    tg.MainButton.setText('Отправлено');
    console.log(JSON.stringify(data))
});

