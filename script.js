function playRound(playerSelection, computerSelection){
    let player = 0, computer = 0;
    for(let i = 0; i< 5;i++){
        if(playerSelection === computerSelection){
            continue;
        }
        else{
            if(playerSelection === "rock"){
                if(computerSelection === "paper") 
                    computer++;        

                else
                    player++;        
            }
    
            else if(playerSelection === "paper"){
                if(computerSelection === "scissors")
                    computer++;       
                
                else
                    player++;       
            }
    
            else{
                if(computerSelection === "rock")
                    computer++;      
                
                else
                    player++;        
            }
        }
    }

    if(player > computer) return "player";
    else if(player == computer) return "draw";
    else return "computer";
}

function getComputerChoice(){
    let x = Math.floor(Math.random()*10);
    console.log(x);
    if(x%3 == 0)
        return "rock";
    else if(x%3 == 1)
        return "paper";
    else
        return "scissors";
}


let playerSelection = prompt("Enter choice: ");
let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);