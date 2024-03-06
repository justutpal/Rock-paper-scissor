// Assigning variables.
let upRight = document.querySelector(".upRight");
let imgRock = document.querySelector(".imgRock");
let imgPaper = document.querySelector(".imgPaper");
let imgScissors = document.querySelector(".imgScissors");
let down = document.querySelectorAll(".down img");
let score = document.querySelector(".score");
let points = document.querySelector(".points");
let imgCorner = document.querySelector(".imgCorner");
let yourPicked = document.querySelector(".yourPicked");
let compPicked = document.querySelector(".compPicked");
let resultCorner = document.querySelector(".resultCorner");
let downContainer = document.querySelector(".down");
let play = document.querySelector(".play");
let heading = document.querySelector(".heading");
let triangle = document.querySelector(".triangle");
let music = new Audio("Resources/music.mp3")
let d = new Date()


// getting name
function welcome() {
  let d = new Date()
  let name = prompt("Please enter your name:", "UTPAL KUMAR");
  let nameUpper = name.toUpperCase()
  if (name == null || name == "") {
    score.innerHTML = "GUEST"
  }
  else if (name.length > "20") {
    score.innerHTML = "Please enter short name"
  }
  else {
    if (d.getHours() < 12) {
    score.innerHTML = `GOOD MORNING <br>${nameUpper}`
    upRight.style.backgroundImage = "url('Resources/Morning.jpg')"
    }
    else if (d.getHours() >= 12 && d.getHours() < 16 ) {
    score.innerHTML = `GOOD AFTERNOON <br>${nameUpper}`
    upRight.style.backgroundImage = "url('Resources/sun.jpg')"
  }
  else if (d.getHours() >= 16) {
    score.innerHTML = `GOOD EVENING <br>${nameUpper}`
    upRight.style.backgroundImage = "url('Resources/evening.jpeg')"
  }
}};
welcome()


// computer chance
let imgArr = Array.from(down);

let selectImg = function (imgArr) {
  return imgArr[Math.round(Math.random() * 2)]
}


// function
let allChange = function () {
  compPicked.src = selectImg(imgArr).src;
  resultCorner.style.display = "Block";
  downContainer.style.display = "none";
  triangle.style.display = "none";
  yourPicked.src = this.src;
  yourPicked.classList.add("animationWork");
  compPicked.classList.add("animationWork");
  checkwin();
  return;
}


// checkwin
let checkwin = function () {
  if (yourPicked.src == imgRock.src && compPicked.src == imgRock.src || 
    yourPicked.src == imgScissors.src && compPicked.src == imgScissors.src || 
    yourPicked.src == imgPaper.src && compPicked.src == imgPaper.src) {
    heading.innerHTML = "TIED";
  }

  else if (yourPicked.src == imgRock.src && compPicked.src == imgPaper.src || 
    yourPicked.src == imgPaper.src && compPicked.src == imgScissors.src || 
    yourPicked.src == imgScissors.src && compPicked.src == imgRock.src) {
    heading.innerHTML = "YOU LOSS";
  }

  else if (yourPicked.src == imgRock.src && compPicked.src == imgScissors.src || 
    yourPicked.src == imgPaper.src && compPicked.src == imgRock.src || 
    yourPicked.src == imgScissors.src && compPicked.src == imgPaper.src) {
    heading.innerHTML = "YOU WIN";
  }
};


// onclick
imgRock.addEventListener("click", allChange);
imgPaper.addEventListener("click", allChange);
imgScissors.addEventListener("click", allChange);


// play again button
play.addEventListener("click", function () {
  resultCorner.style.display = "none";
  downContainer.style.display = "block";
  triangle.style.display = "block";
});