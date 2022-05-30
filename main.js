const time_el =document.querySelector('.time');
const Start_btn = document.getElementById('Start');
const Stop_btn = document.getElementById("Stop");
const Reset_btn = document.getElementById("Reset");

let seconds = 0;
let interval = null;

//event listeners

Start_btn.addEventListener('click', Start);
Stop_btn.addEventListener("click",Stop);
Reset_btn.addEventListener("click", Reset );

//update the timer
function timer () {
   
seconds++;



//format our time

let hrs = Math.floor(seconds/3600);
let mins = Math.floor((seconds - (hrs * 3600)) / 60);
let secs = seconds % 60;

if (secs < 10) secs = '0' + secs;
if (mins < 10) mins = "0" + mins;
if (hrs < 10) hrs = "0" + hrs;

time_el.innerText = `${hrs}:${mins}:${secs}`;


}


function Start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);

}

function Stop () {
    clearInterval(interval);
    interval = null;
}

function Reset () {
    Stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
}

