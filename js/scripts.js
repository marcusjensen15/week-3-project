//Business Logic
var outputArray = [];

function beepBoop(userInput){
  for (i=0; i <= userInput; i++){
    if(i === 1){
      outputArray.push("Beep");

    }else if (i === 2){
      outputArray.push("Boop");

    }else if (i === 3){
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");

    }else if (i===13){
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");


    }else if (i === 21){
      outputArray.push("Boop");


    }else if (i === 32){
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");


    }else {outputArray.push(i);}
  };



};

beepBoop(40);
console.log(outputArray);



//User Logic
$(document).ready(function(){
  // var outputArray = [];
  var userInput = 5; //will need to parseInt userInput

});

//accept input from user
cut up user input into an array of numbers
