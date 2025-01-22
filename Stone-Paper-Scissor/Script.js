let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#m");

const userScorePara=document.querySelector("#user");
const computerScorePara=document.querySelector("#computer");

const genComchoice=()=>{
    const opt=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return opt[randIdx];
};

const showWinner=(userWin,userchoice,comchoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        computerScorePara.innerText=computerscore;
        msg.innerText=`You Lose. ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const drawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
};

const playGame=(userchoice)=>{
    const comchoice=genComchoice();
    if(userchoice===comchoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=comchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userWin=comchoice==="scissors"?false:true;
        }else{
            userWin=comchoice==="rock"?false:true;
        }  
        showWinner(userWin,userchoice,comchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    })
})