const btn = document.querySelector("#btn")
const boxes = document.querySelectorAll('.box')
const msg = document.querySelector("#msg")
const newbtn = document.querySelector("#new-btn")
const msgContainer = document.querySelector(".msg-container")


console.log(boxes)


let turnO = true;   //player X , player O

const WinPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {   //  reset the game and start again
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        box.style.color = "black"
        console.log("box was clicked");
       if(turnO){ // player O
        box.innerText = "X"
        turnO = false
       }else{    //  player X
         box.innerText = "O"
         turnO = true
       }
      box.disabled = true  // clicking the box button will not make any changes

      checkWinner();
    });
});

const disabledboxes = () => {    // when winner is winning after boxes cannot change
    for(let box of boxes){
         box.disabled = true;
    }

}
const enableboxes = () => {
    for(let box of boxes){
         box.disabled = false;
         box.innerText = "";
    }

}

const showWinner =(winner) => {  // show the winner
    msg.innerText = `Congratulation ,winner is ${winner}`
    msgContainer.classList.remove("hide")
    disabledboxes()
};

const checkWinner = () => {     // check the winner,  player O or player X
    for(let pattern of WinPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("Winner" , pos1val)
                showWinner(pos1val);
            }
        }
    }
};



newbtn.addEventListener('click', resetGame);
btn.addEventListener('click', resetGame);
