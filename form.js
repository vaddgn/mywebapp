let tg = window.Telegram.WebApp;
tg.expand();

form = document.getElementById("main-form");
form.addEventListener("submit", form_check);
function form_check(event){
    event.preventDefault();
    let form = document.getElementById("main-form");
    let data = {
        balls : form.balls.value,
        impres : form.impres.value,
        quest : form.quest.value
    };
    tg.sendData(JSON.stringify(data));
    document.getElementById("submit").innerHTML = 'Отправлено';
}
