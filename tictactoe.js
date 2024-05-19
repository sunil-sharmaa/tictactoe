let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".restart");
let turn0 = true;
let newgame = document.querySelector(".newgame");

let showresult = document.querySelector(".winner"); //apn ko ese global krna pda because resetgame global h na esliye
let count = 0;
const winpatterns = [
  [0, 4, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turn0 = true;
  enablebtn();
  count = 0;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
      box.style.color = "rgb(37, 37, 151)";
    } else {
      box.innerHTML = "X";
      turn0 = true;
      box.style.color = "rgb(7, 26, 26)";
    }
    box.disabled = true;
    count = count + 1;
    checkwinner();
  });
});

let disablebtn = () => {
  //this disabled all button after coming winner
  for (let btn of boxes) {
    btn.disabled = true;
  }
};

let enablebtn = () => {
  //enable all btn and do empty all boxes when click reset btn
  for (let btn of boxes) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

function checkwinner() {
  for (patterns of winpatterns) {
    // console.log(patterns[0],patterns[1],patterns[2]);
    // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);

    let posval1 = boxes[patterns[0]].innerText;
    let posval2 = boxes[patterns[1]].innerText; //FIND THE INNERTEXT OF BOX WHEN WE CLICK BUTTON
    let posval3 = boxes[patterns[2]].innerText;
    console.log(posval1,posval2,posval3)
    // 222222count++;
    if (posval1.length !== 0 && posval2.length !== 0 && posval3.length !== 0) {
      //or if(posval1!="" && posval2!="" && posval!="") empty string mean no value in string
      console.log("check")
      if (posval1 === posval2 && posval1 === posval3) {
        showresult.innerText = "Winner is: " + posval1;
        disablebtn();
        return;
      } 
    }
    if(count == 9) {
      if (posval1 !== posval2 || posval2 !== posval3) {
        showresult.innerText = "match draw";
      }
    }
  }
}
newgame.addEventListener("click", () => {
  resetGame();
  showresult.innerText = "";
}); //it is use for restart new game
resetbtn.addEventListener("click", resetGame);
