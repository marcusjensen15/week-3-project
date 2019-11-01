//Business Logic
var outputArray = [];

function beepBoop(userInput){
  for (i=0; i <= userInput; i++){
    if(i.toString().includes("3")){
      outputArray.push(" I'm sorry, Dave. I'm afraid I can't do that.");
    }else if (i.toString().includes("2")){
      outputArray.push(" Boop");
    }else if (i.toString().includes("1")){
      outputArray.push(" Beep");
     }
    else {outputArray.push(i);}
  };
};

//User Logic
$(document).ready(function(){
  $("form").submit(function(event){
    $("#output-container").hide();
    event.preventDefault();
    outputArray = [];
    var userInput = parseInt($("#userInput").val());
    beepBoop(userInput);
    $("#output").text(outputArray);
    $("#output-container").slideDown("slow");
    $('#userInput').val('');


  });

});
