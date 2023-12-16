let userScore=0;
let computerScore=0;
const choises=document.querySelectorAll('.choice');
let massage=document.querySelector('#msg');
let userScoreDisplay=document.querySelector('#userscore');
let computerScoreDisplay=document.querySelector('#computerscore');

const gernateComputerChoice=()=>{
    const option=['rock','pepar','scissors'];
    let index=Math.floor(Math.random()*3);
   return option[index];
}

const showWinner=(userWin)=>{
    if(userWin== true){
        userScore +=1;
        userScoreDisplay.innerText=userScore;
        massage.innerText='you are win ! ';
        massage.style.backgroundColor = "green";

    }else{

        massage.style.backgroundColor = "red";
        computerScore +=1;
        computerScoreDisplay.innerText=computerScore;
        massage.innerText='you are Lose ! ';
    }
}

const playGame=(userChoice)=>{
    console.log(userChoice);
    let computerChoice=gernateComputerChoice();
    let userWin=null;
    console.log(computerChoice);
    

    if(userChoice===computerChoice){
        massage.innerText='Match Was Draw !!';
        massage.style.backgroundColor = "#27296d";

       
    }else{
        
        if(userChoice === 'rock'){
            if(computerChoice === 'scissors'){
                userWin=true;
            }else{
                userWin=false;
            }
        }else if(userChoice === 'pepar'){
            if(computerChoice === 'rock'){
                userWin=true;
            }else{
                userWin=false;
            }
        }else{
            {
                if(computerChoice === 'pepar'){
                    userWin=true;
                }else{
                    userWin=false;
                }
               
            }
        }
        showWinner(userWin);
    }   
}


choises.forEach((choise)=>{
    choise.addEventListener('click',()=>{
        const userChoice=choise.getAttribute('id');
        playGame(userChoice);
    });
});