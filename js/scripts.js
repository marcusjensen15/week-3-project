//Business Logic
var outputArray = [];
var userName; //this is new
var userInput; //this is new
var nameResult = nameCheck(userInput); //this is new I think this is calling the function right away

function nameCheck(input){
                                  //This function is new
  if(input % 3 === 0){
    var name = userName;
    console.log(name);
  }else {
    name = "Dave";
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
     userName = $('#userNameInput').val();  //this is new
    $("#output-container").hide();
    event.preventDefault();
    outputArray = [];
    name= "";
    userName =  $("#userNameInput").val();                    //this is new
    userInput = parseInt($("#userInput").val());  //changed from: var userInput = parseInt($("#userInput").val());
    // var userName = $("#userNameInput").val();  //this is new
    nameCheck(userInput);                        //calling new function
    beepBoop(userInput);
    $("#output").text(outputArray);
    $("#output-container").slideDown("slow");
    $('#userInput').val('');
    // $('#userNameInput').val('');    //this is new


  });

});
