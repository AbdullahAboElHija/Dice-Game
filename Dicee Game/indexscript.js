// import Players from "./Players.js";

// var player;

const btn = document.querySelector(".sbtn");
btn.addEventListener("click", function (event) {
  // Prevent the form from submitting the traditional way
  event.preventDefault();

  // Get input values
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  // const players = new Players(name1, name2);
  // You can now save or process the input values as needed
  console.log("Name1: " + name1);
  console.log("Name2: " + name2);
  // Store the data in localStorage
  localStorage.setItem("playerName1", name1);
  localStorage.setItem("playerName2", name2);
  // player = new Players(name1, name2);
  // Fetch the target HTML page
  window.location.href = "dicee.html";
  // Here, you can send the data to a server, store it in local storage, or perform any other action.
});

// export default player;
