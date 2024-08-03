let tg = window.Telegram.WebApp;
tg.expand();
let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let data = {
        a : 'отправлено'
    };
    tg.sendData(JSON.stringify(data));
});
