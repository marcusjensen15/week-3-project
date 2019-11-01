//Business Logic
var outputArray = [];
var userName;
var userInput;
var nameResult;

function nameCheck(input){

  if(input % 3 === 0){
    var name = userName;
    console.log(name);
  }else {
    name = " Dave";
    console.log(name);
  }
  return name;

};
function beepBoop(userInput){
  for (i=0; i <= userInput; i++){
    if(i.toString().includes("3")){
      outputArray.push(" I'm sorry,"+ nameResult +". I'm afraid I can't do that.");
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
     event.preventDefault();
     outputArray = [];
     userName = $('#userNameInput').val();  //this is new
     userInput = parseInt($("#userInput").val());
     nameResult = nameCheck(userInput);
    $("#output-container").hide();

    beepBoop(userInput);
    $("#output").text(outputArray);
    $("#output-container").slideDown("slow");
    $('#userInput').val('');
    $('#userNameInput').val('');


  });
});
