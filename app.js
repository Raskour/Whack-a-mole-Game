const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const mole = document.querySelector(".mole");

let result = 0;
let molePosition;
let currentTime = 10;

// add mole to random squares
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  molePosition = randomSquare.id;
}

// make the mole clickable
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === molePosition) {
      result++;
      score.textContent = result;
    }
  });
});

//set interval for movement of random square
const moveMoleTimerId = setInterval(randomSquare, 500);

// set interval for contdown timer
const countDownTimerId = setInterval(countDown, 1000);

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    alert("GAME OVER! Your final Score is " + result);

    // stoping the timer
    clearInterval(countDownTimerId);

    // TODO: stopping the moving mole
    clearInterval(moveMoleTimerId);
  }
}
