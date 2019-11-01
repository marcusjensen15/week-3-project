//Business Logic
var outputArray = [];

// function beepBoop(userInput){
//   for (i=0; i <= userInput; i++){
//     if(i === 1){
//       outputArray.push("Beep");
//
//     }else if (i === 2){
//       outputArray.push("Boop");
//
//     }else if (i === 3){
//       outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
//
//     }else if (i===13){
//       outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
//
//
//     }else if (i === 21){
//       outputArray.push("Boop");
//
//
//     }else if (i === 32){
//       outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
//
//
//     }else {outputArray.push(i);}
//   };
//
//
//
// };

//Everything above this line works, but isn't to spec

//str.includes("world");
// num.toString();
//if this evaluates to true, do below

function beepBoop(userInput){
  for (i=0; i <= userInput; i++){
    if(i.toString().includes("1")){
      outputArray.push("Beep");

    }else if (i.toString().includes("2")){
      outputArray.push("Boop");

    }else if (i.toString().includes("3")){
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");

    // }else if (i===13){
    //   outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    //
    //
    // }else if (i === 21){
    //   outputArray.push("Boop");
    //
    //
    // }else if (i === 32){
    //   outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    //
    //
     }
    else {outputArray.push(i);}
  };



};





beepBoop(100);
console.log(outputArray);



//User Logic
$(document).ready(function(){
  // var outputArray = [];
  var userInput = 5; //will need to parseInt userInput

});

//accept input from user (one as a raw string input, one to iderate the loop as a number (parseInt))
// evaluate number as a string using the includes method.
// write if statements

// convert i to a string and compaire to the string of "2" using the includes method.
