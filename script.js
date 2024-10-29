let p = document.getElementById("text");
let textLists = [
    "Hello",
    "Start Game",
    "Welcome",
    "Clear"
];
let checkTexts = [];

remakeText();

document.addEventListener('keydown', keydown);

function keydown(e){
    console.log(e.key);
    if(e.key == checkTexts[0].textContent){
        checkTexts[0].className = 'add-blue';
        checkTexts.shift();
        if(!checkTexts.length) remakeText();
    }
}

function remakeText(){
    let textArray = Math.floor(Math.random()*textLists.length);
    p.textContent = '';
    checkTexts = textLists[textArray].split('').map(function(value){
        let span = document.createElement('span');
        span.textContent = value;
        p.appendChild(span);
        return span;
    });
    console.log(checkTexts);
}