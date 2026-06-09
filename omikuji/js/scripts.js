document.getElementById('draw').addEventListener('click', function() {
    const omikujiResults = ['大吉', '中吉', '小吉', '末吉', '凶', '大凶'];
    const result = omikujiResults[
        Math.floor(Math.random() * omikujiResults.length)];
    const el = document.getElementById('result');
    switch(result){
        case '大吉':
            el.style.color = 'red';
            break;
        case '中吉':
            el.style.color = 'orange';
            break;
        case '大凶':
            el.style.color = 'blue';
            break;
        default :
            el.style.color = 'black';
    }
    document.getElementById('result').textContent = `あなたの運勢は... ${result}!`;
})