const clock = document.getElementById("digital-clock");

let hour = 0;
let min = 0;
let sec = 0;
let isPaused = false;
let timeinterval;

function startTimer() {
  isPaused = false;
  clearInterval(timeinterval);

  timeinterval = setInterval(updateTime, 1000);
  //   startCount();
}
function stopTimer() {
  isPaused = true;
  clearInterval(timeinterval);

  //   startCount();
}

function updateTime() {
  //   if (!isPaused) {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  }

  if (min === 60) {
    min = 0;
    hour++;
  }
  //   }

  clock.innerHTML = `${pad(hour)} . ${pad(min)} . ${pad(sec)} `;
}

function pad(value) {
  return value < 10 ? "0" + value : value; // Add leading zero if value is less than 10
}
