
let your_score = 0;
let comp_score = 0;
let msg = document.querySelector(".result-message");

const options=document.querySelectorAll("#option");

const comp_choice = ()=>{
    const arr = ["option rock","option paper","option scissors"];
    const random = Math.floor(Math.random()*3);
    return arr[random];
}
const play_game = (your_choice)=>{
    console.log("your",your_choice);
    const compchoice = comp_choice();
    console.log("comp", compchoice);

    if(your_choice === compchoice){
    console.log("draw");
     msg.innerHTML="Game was draw. Play again.";
         msg.style.backgroundColor="#230662";
}else{
    youwin = true;
    if(your_choice==="option rock"){
        // rock, paper
        youwin= compchoice==="option scissors"? true:false;
    }else if(your_choice==="option paper"){
        //rock, scissors
        youwin= compchoice==="option scissors"? false:true;
    }if(your_choice==="option scissors"){
        // paper , rock
        youwin= compchoice==="option paper"? true:false;
    }
    if(youwin){
        console.log("you win.");
        msg.innerText=`You win! your ${your_choice} beats computer's ${compchoice}. `;
        msg.style.backgroundColor="green";
        your_score++;
       document.querySelector(".yourcount").innerText= your_score;}
       else{
        console.log("you lose.");
         msg.innerText=`You lose. computer's ${compchoice} beats your ${your_choice}.`;
         msg.style.backgroundColor="red";
         comp_score++;
       document.querySelector(".compcount").innerText= comp_score;

    }
}
} 
options.forEach((option)=>{
option.addEventListener("click", function(){
    const your_choice = option.getAttribute("class");
play_game(your_choice);
});
});
