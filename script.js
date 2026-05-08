// acces part

let btns = document.querySelectorAll(".box");
let reeset_btn = document.querySelector(".reset");
let new_btn = document.querySelector(".new");
let winm = document.querySelector(".win");
let contain = document.querySelector(".container");

// logic part

let turno = true;
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const resetGame = () => {
  turno = true;
  enablebtn();
  winm.classList.add("hidden");
};

const enablebtn = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btn.innerText = "";
  }
};
btns.forEach((box) => {
  box.addEventListener("click", function () {
    if (turno) {
      box.innerText = "O";
      box.style.color = "aquamarine";
      turno = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turno = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disablebtn = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};

const showWnner = (winner) => {
  winm.innerText = `congratulation winner is ${winner}`;

  winm.classList.remove("hidden");
  contain.classList.add("con");
  disablebtn();
  setTimeout(function () {
    winm.classList.add("hidden");
    contain.classList.remove("con");
    enablebtn();
    turno = true;
  }, 4000);
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let postion1 = btns[pattern[0]].innerText;
    let postion2 = btns[pattern[1]].innerText;
    let postion3 = btns[pattern[2]].innerText;

    if (postion1 != "" && postion2 != "" && postion3 != "") {
      if (postion1 === postion2 && postion2 === postion3) {
        showWnner(postion1);
      }
    }
  }
};

reeset_btn.addEventListener("click", resetGame);
new_btn.addEventListener("click", resetGame);
