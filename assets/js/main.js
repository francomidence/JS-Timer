//sets the interval
let timer = setInterval(TimerHandler, 1000);
let sec = 0;
let min = 0;
let hour = 0;

let start_button = document.getElementById("start");
let stop_button = document.getElementById("stop");
let reset_button = document.getElementById("reset");
let timer_element = document.getElementById("timer");

start_button.addEventListener("click", () => {
  timer = setInterval(TimerHandler, 1000);
  reset_button.disabled = true;
});

stop_button.addEventListener("click", () => {
  timer = clearInterval(timer);
  reset_button.disabled = false;
});

reset_button.addEventListener("click", () => {
  timer = clearInterval(timer);
  reset_button.disabled = true;
  sec = 0;
  min = 0;
  hour = 0;
  timer_element.innerHTML = `${hour} : ${min} : ${sec}`;
});

function TimerHandler() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min == 0;
    hour++;
  }
  console.log(`${hour} : ${min} : ${sec}`);
  DisplayTime();
}

function DisplayTime() {
  let timer_element = document.getElementById("timer");
  let sec_sml = sec;
  let min_sml = min;
  let hour_sml = hour;
  if (sec < 10) {
    sec_sml = `0${sec}`;
  }
  if (min < 10) {
    min_sml = `0${min}`;
  }
  if (hour < 10) {
    hour_sml = `0${hour}`;
  }

  timer_element.innerHTML = `${hour_sml} : ${min_sml} : ${sec_sml}`;
}
