let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let wm = document.getElementById("w-min");
let ws = document.getElementById("w-sec");

let bm = document.getElementById("b-min");
let bs = document.getElementById("b-sec");

let br_timer = document.getElementById("break-timer");
let w_timer = document.getElementById("work-timer");
let w_label = document.getElementById("work");
let br_label = document.getElementById("break");

// store ref to timer var
let startTimer;

start.addEventListener('click', () => {
    if(startTimer === undefined) {
        startTimer = setInterval(timer, 1000);
    } else {
        alert("timer is already running");
    }
});

reset.addEventListener('click', () => {
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";
    document.getElementById('counter').innerText = 0;
    stopInterval();
    startTimer = undefined;
});

stop.addEventListener('click', () => {
    stopInterval();
    startTimer = undefined;
});

// start timer function
function timer() {
    // work timer countdown
    if(ws.innerText != 0) {
        w_timer.classList.remove("hide");
        br_timer.classList.add("hide");
        w_label.classList.remove("hide");
        br_label.classList.add("hide");
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    // break timer countdowm
    if(wm.innerText == 0 && ws.innerText == 0) {
        w_timer.classList.add("hide");
        br_timer.classList.remove("hide");
        w_label.classList.add("hide");
        br_label.classList.remove("hide");
        if(bs.innerText != 0) {
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    // increment counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText = 25;
        ws.innerText = "00";
        bm.innerText = 5;
        bs.innerText = "00";
        document.getElementById('counter').innerText++;
    }
}

// stop timer function
function stopInterval() {
    clearInterval(startTimer);
}