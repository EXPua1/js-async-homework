const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start_btn");
const stopButton = document.querySelector("#stop_btn");

let intervalId = null;
let seconds = 0;

startButton.addEventListener("click", () => {
  if (intervalId !== null) {
    return;
  }

  intervalId = setInterval(() => {
    seconds++;
    timer.textContent = seconds.toString().padStart(2, "0");
  }, 1000);

  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;

  startButton.disabled = false;
  stopButton.disabled = true;
});
