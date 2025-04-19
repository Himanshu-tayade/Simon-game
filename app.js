let gameSeq = [];
let userSeq = [];
let btnArr = ["yellow", "red", "green", "blue"];
let started = false;
let level = 0;
let highScore = level;
let play = 0;
h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if(started == false) {
        started = true;
        play++;
        levelup();
    }
})

function flash(btn) {
    btn.classList.add("btn-flash");
    setTimeout(function() {
        btn.classList.remove("btn-flash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    if(play != 1) h3.innerHTML = `Level ${level} <br> High Score: ${highScore}`;
    else h3.innerText = `Level ${level}`;
    let randNum = Math.floor(Math.random() * 4);
    let randColor = btnArr[randNum];
    let randBtn = document.querySelector(`.${randColor}`);
    flash(randBtn);
    gameSeq.push(randColor);
}

function checkSeq(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {
        if(level > highScore) {
            highScore = level;
        }
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start the game <br> High Score: ${highScore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "darkkhaki";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    flash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkSeq(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btns of allBtns) {
    btns.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}