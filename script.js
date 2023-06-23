'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Number";
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent="NO";
// console.log(document.querySelector('.number').textContent="NO");

// document.querySelector('.guess').value="14";
// console.log(document.querySelector('.guess').value);

let secrectNumber= Math.trunc(Math.random()*20)+1;


let score=20;
let highscore=0;

let mainFunction=function()
{
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess,typeof guess);
   
   if(!guess)
   {
    console.log(document.querySelector('.message').textContent="There is NO number");
   }
   else if(guess===secrectNumber)
   {
     document.querySelector(".message").textContent="You Guessed it Right!!";
     //for the secret number to reveled when we give the right answer.
     document.querySelector(".number").textContent=secrectNumber;
     //styling
     document.querySelector("body").style.backgroundColor="#60b347";
     document.querySelector(".number").style.width="30rem";

     if(score>highscore)
     {
        highscore=score;
        document.querySelector(".highscore").textContent=highscore;
     }

   }
   else if(guess < secrectNumber)
   {
    if(score>1)
    {
        document.querySelector(".message").textContent="Too Low!";
        score--;
        document.querySelector(".score").textContent=score;
    }
    else{
        document.querySelector('.message').textContent="You Lost the Game!";
        document.querySelector('.score').textContent=0;
    }

   }
   else if(guess > secrectNumber)
   {
    if(score>1)
    {
        document.querySelector(".message").textContent="Too High!";
        score--;
        document.querySelector(".score").textContent=score;
    }
    else{
        document.querySelector('.message').textContent="You Lost the Game!";
        document.querySelector('.score').textContent=0;
    }
   }

}
document.querySelector(".check").addEventListener('click',mainFunction );

document.querySelector(".again").addEventListener('click', function()
{
    secrectNumber= Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector(".number").textContent="?";
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector('.score').textContent=score;
    //empty string, so it can be like a blank input box
    document.querySelector(".guess").value='';
    //styling
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";

});

document.addEventListener('keydown',function(object)
{
    console.log(object.key);
    if(object.key==='Escape')
    {
        mainFunction();
    }
})


