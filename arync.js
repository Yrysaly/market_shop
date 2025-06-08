

let hours = 0;
let minutes = 00;
let seconds = 00;
let interval;
let isRunning = false;

function updateDisplay() {
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function toggleTimer() {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
    document.getElementById("startBtn").textContent = "▶";
  } else {
    interval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval);
        alert("Время вышло!");
        return;
      }

      if (seconds === 0) {
        seconds = 59;
        if (minutes === 0) {
          minutes = 59;
          if (hours > 0) {
            hours--;
          }
        } else {
          minutes--;
        }
      } else {
        seconds--;
      }

      updateDisplay();
    }, 1000);
    isRunning = true;
    document.getElementById("startBtn").textContent = "⏸";
  }
}

function changeTime(change) {
  minutes = Math.max(0, minutes  +  change);
  updateDisplay();
}

document.getElementById('reset').onclick = () => {
  hours = 0;
  minutes = 32;
  seconds = 21;
  updateDisplay();
};

updateDisplay();