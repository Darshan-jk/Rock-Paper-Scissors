const buttons = document.querySelectorAll(".choice");
const result = document.getElementById("result");

const wins = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

buttons.forEach(button => {
    button.onclick = () => {
        const user = button.dataset.choice;
        const computer = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

        let winner = "Computer Wins";

        if(user === computer){
            winner ="It's a Tie";
        }else if(wins[user] === computer){
            winner = "You Win";
        }

        result.innerHTML = `You Chose ${user}, Computer Chose ${computer}.<br> <span style="color:red; font-weight:bold;">${winner}</span>`;
    };

    
});