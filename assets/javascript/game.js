console.log("working")

var compoptions = ["a", "b", "c", "d", "e", "f", 
                  "g", "h", "i", "j", "k",
                  "l", "m", "n", "o", "p",
                  "q", "r", "s", "t", "u",
                  "v", "w", "x", "y", "z" ]

var wins = 0;
var losses =0;
var guesses =10; 
var guessessofar =0;


document.onkeyup = function() {
  console.log("woossldkfj")
   var userguess = String.fromCharCode(event.keyCode).toLowerCase();

   console.log(userguess)


   var computerGuess = compoptions[Math.floor(Math.random() * compoptions
   .length)];

   console.log(computerGuess);


   if (userguess==="a" || userguess==="b" || userguess==="c" || userguess==="d" || userguess==="e" || userguess==="f"
    || userguess==="g" || userguess==="h" || userguess==="i" || userguess==="j" || userguess==="k"
    || userguess==="l" || userguess==="m" || userguess==="n" || userguess==="o" || userguess==="p"
    || userguess==="q" || userguess==="r" || userguess==="s" || userguess==="t" || userguess==="u"
    || userguess==="v" || userguess==="w" || userguess==="x" || userguess==="y" || userguess==="z"){

       if (userguess===computerGuess){
     wins++;
     guesses--;
     guessessofar++;
     alert("How Clairvoyant you are")
       }else {
     losses++;
     guesses--;
     guessessofar++;}

   } else {
       alert("choose a Letter");
   }

   if (guesses===0){
       alert("Your all out of luch Buddy. Better luck next time");
       location.reload();
   }

    var html = "<p><strong>Guess what letter im thinking of</strong> (press a letter to start game)</p>" 
             + "<p>Wins: " + wins + "</p>"
             + "<p>Losses: " + losses + "</p>"
             + "<p>Guesses Left: " + guesses + "</p>"
             + "<p>Your Guesses so far: " + guessessofar + "</p>";


 document.querySelector("#psychgame").innerHTML = html;



}
