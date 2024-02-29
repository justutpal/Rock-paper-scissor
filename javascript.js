let imgRock = document.querySelector(".imgRock");
let imgPaper = document.querySelector(".imgPaper");
let imgScissors = document.querySelector(".imgScissors");
let down = document.querySelectorAll(".down img");
let points = document.querySelector(".points");
let imgCorner = document.querySelector(".imgCorner");
let yourPicked = document.querySelector(".yourPicked");
let compPicked = document.querySelector(".compPicked");
let resultCorner = document.querySelector(".resultCorner");
let downContainer = document.querySelector(".down");
let play = document.querySelector(".play");
let heading = document.querySelector(".heading");
let triangle = document.querySelector(".triangle");



// computer chance
let imgArr = Array.from(down);
console.log(imgArr)


// let selectImg = function (p) {
//   return p[Math.round(Math.random() * (2 - 0) + 0)];
// };

let selectImg = function (imgArr){
 return imgArr[Math.round(Math.random() * 2)]
}






// onclick

imgRock.addEventListener("click", function () {
  compPicked.src = selectImg(imgArr).src;
  resultCorner.style.display = "Block";
  downContainer.style.display = "none";
  triangle.style.display = "none";
  yourPicked.src = this.src;
  yourPicked.classList.add("animationWork");
  compPicked.classList.add("animationWork");
  checkwin();
  return;
});

imgPaper.addEventListener("click", function () {
  compPicked.src = selectImg(imgArr).src;
  resultCorner.style.display = "Block";
  downContainer.style.display = "none";
  triangle.style.display = "none";
  yourPicked.src = this.src;
  yourPicked.classList.add("animationWork");
  compPicked.classList.add("animationWork");
  checkwin();
  return;
});

imgScissors.addEventListener("click", function () {
  compPicked.src = selectImg(imgArr).src;
  resultCorner.style.display = "Block";
  downContainer.style.display = "none";
  triangle.style.display = "none";
  yourPicked.src = this.src;
  yourPicked.classList.add("animationWork");
  compPicked.classList.add("animationWork");
  checkwin();
  return;
});



// checkwin

let onlyPoint = Array.from(points);
onlyPoint[0] = 0;

let checkwin = function () {
  if (yourPicked.src == imgRock.src && compPicked.src == imgRock.src) {
    heading.innerHTML = "TIED";
  }

  else if (yourPicked.src == imgRock.src && compPicked.src == imgPaper.src) {
    heading.innerHTML = "YOU LOSS";
  }

  else if (yourPicked.src == imgRock.src && compPicked.src == imgScissors.src) {
    heading.innerHTML = "YOU WIN";
  }

  else if (yourPicked.src == imgPaper.src && compPicked.src == imgPaper.src) {
    heading.innerHTML = "TIED";
  }

  else if (yourPicked.src == imgPaper.src && compPicked.src == imgScissors.src) {
    heading.innerHTML = "YOU LOSS";
  }

  else if (yourPicked.src == imgPaper.src && compPicked.src == imgRock.src) {
    heading.innerHTML = "YOU WIN";
  }

  else if (yourPicked.src == imgScissors.src && compPicked.src == imgScissors.src) {
    heading.innerHTML = "TIED";
  }

  else if (yourPicked.src == imgScissors.src && compPicked.src == imgPaper.src) {
    heading.innerHTML = "YOU WIN";
  }

  else if (yourPicked.src == imgScissors.src && compPicked.src == imgRock.src) {
    heading.innerHTML = "YOU LOSS";
  }
};



// play again button

play.addEventListener("click", function () {
  resultCorner.style.display = "none";
  downContainer.style.display = "block";
  triangle.style.display = "block";
});

// const promisOne = new Promise(function(resolve, reject) {
//   setTimeout(selectImg, 2000);
//   setTimeout(checkwin, 2000);
//   console.log("something done here");
//   resolve()
// })
// promisOne.then(function(user) {
//   console.log("hehe")
// })

setTimeout(function() {
  selectImg(imgArr);
  checkwin();
}, 2000);
