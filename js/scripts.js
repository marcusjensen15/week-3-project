//Business Logic
var outputArray = [];
var name;    //this is new

function nameCheck(userInput){            //This function is new
  if(userInput % 3 === 0){
    name = userName;
  }else {
    name = "Dave";
  }

};

function beepBoop(userInput){
  for (i=0; i <= userInput; i++){
    if(i.toString().includes("3")){
      outputArray.push(" I'm sorry,"+ name +". I'm afraid I can't do that.");
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
    name= "";                      //this is new
    var userInput = parseInt($("#userInput").val());
    var userName = $("#userNameInput").val();  //this is new

    beepBoop(userInput);
    $("#output").text(outputArray);
    $("#output-container").slideDown("slow");
    $('#userInput').val('');
    $('#userNameInput').val('');    //this is new


  });

});
