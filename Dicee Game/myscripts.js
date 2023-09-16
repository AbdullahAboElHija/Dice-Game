// import player from "./indexscript";
// import Players from "./Players";

const diceButton = document.querySelector(".dbtn");

diceButton.addEventListener("click", () => {
  // Sample image URLs (you can replace these with your own image URLs)
  const imageUrls = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];
  const randomIndex1 = Math.floor(Math.random() * imageUrls.length);
  const randomIndex2 = Math.floor(Math.random() * imageUrls.length);

  const player1Dice = document.querySelector(".dice1");
  const player2Dice = document.querySelector(".dice2");

  player1Dice.src = imageUrls[randomIndex1];
  player2Dice.src = imageUrls[randomIndex2];

  const winner = document.querySelector(".winner");

  winner.innerHTML =
    randomIndex1 > randomIndex2
      ? localStorage.getItem("playerName1") + " Winner"
      : localStorage.getItem("playerName2") + " Winner";
});

document.addEventListener("DOMContentLoaded", function () {
  var playerName1 = localStorage.getItem("playerName1");
  var playerName2 = localStorage.getItem("playerName2");
  const p1 = document.getElementById("player1");
  const p2 = document.getElementById("player2");
  console.log(playerName1);
  p1.innerHTML = `<p>${playerName1}</p>`;
  p2.innerHTML = `<p>${playerName2}</p>`;
});
