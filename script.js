var timer = 60;
var score = 0;
var hitVal = 0;

function makeBubble(){
    var clutter = "";
    for(var i = 1; i <= 140; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var rtimer = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#tval").textContent = timer;
        }
        else{
            clearInterval(rtimer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1> <br> <h2>Total Score = ${score}</h2>`
        }
    }, 1000)
}

function newHit(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#hval").textContent = hitVal;
}

function increaseScore(){
    score += 10;
    document.querySelector("#sval").textContent = score;
}

function decreaseScore(){
    score -= 5;
    document.querySelector("#sval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent)
    if(clickedNum === hitVal){
        increaseScore();
        newHit();
        makeBubble();
    }
    else{
        decreaseScore();
        newHit();
        makeBubble();
    }
})

makeBubble();
runTimer();
newHit();