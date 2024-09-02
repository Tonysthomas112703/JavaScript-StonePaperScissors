let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const yourscore= document.querySelector("#your-score");
const comptscore= document.querySelector("#comp-score");
const resetBtn=document.querySelector("#reset");


resetBtn.addEventListener("click",() =>{
    reset();
})

const reset=() =>{
    let userscore=0;
     let compscore=0;
     yourscore.innerText=userscore;
     comptscore.innerText=compscore;
     msg.innerText="Play your turn";
     msg.style.backgroundColor="rgb(40, 19, 60)";
     

};



const genchoice=() =>{
    const options=["rock" ,"paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const showwinner=(userwin) =>{
    if(userwin){
        userscore++;
        yourscore.innerText=userscore;
        console.log("You win!!!");
        msg.innerText="You win"
        msg.style.backgroundColor="green";

    }
    else{
        console.log("You Lose!!!")
        compscore++;
        comptscore.innerText=compscore;
        msg.innerText="You lose"
        msg.style.backgroundColor="red";

    }
};


const playgame=(userchoice) =>{

    console.log("user choice is ",userchoice)
    const compchoice=genchoice();
    console.log("comp choice is ",compchoice);

    if(userchoice==compchoice){
        console.log("Its a Draw");
        msg.innerText="Its a draw ! play again!!"
        msg.style.backgroundColor="blue";


    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            //paper,scissors
        userwin=    compchoice==="paper"?false:true;
        }
        else if(userchoice=="paper"){
            //rock.scissors
            userwin= compchoice=='rock'?true:false;
        }
        else {
            //paper.rock
            userwin=compchoice=="paper"?true:false;
        }

        showwinner(userwin);
    }




};

choices.forEach((choice) =>{
    choice.addEventListener("click" ,()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
       

    });
});