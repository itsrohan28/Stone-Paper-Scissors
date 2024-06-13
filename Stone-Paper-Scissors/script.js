let userScore = 0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userore = document.querySelector("#user-score");
let compore = document.querySelector("#comp-score")
const Winner = (result,userchoice,compChoice) =>{
    if(result){
        userScore++;
        userore.innerText = userScore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compore.innerText = compScore;
        msg.innerText=`You lost  ${compChoice} beats Your  ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const draw = () => {
msg.innerText = "Game Draw, Play Again";
msg.style.backgroundColor = "#081b31";
};
const getCompChoice = () => {
    const options = ["rock", "paper","scissor"];
    const getrInd = Math.floor(Math.random() *3);
    return options[getrInd];
}
let playGame = (userchoice) => {
  // generate compute choice
  const compChoice = getCompChoice();
  if(userchoice === compChoice){
    //Draw
    draw();
  }
  else{
  let  userWin= true;
    if(userchoice==="rock"){
        userWin = compChoice==="paper" ? false:true;
    }
    else if(userchoice==="paper"){
        userWin = compChoice==="scissor"? false:true;
    }
    else{
        userWin = compChoice ==="rock"? false:true;
    }
    Winner(userWin,userchoice,compChoice);
  }


}
choices.forEach((choice) => {
    choice.addEventListener("click",  () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);

    })
})
