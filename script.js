var dd , mm, yy , cc;

var dayOfTheWeek;
var gender;



function getDayOfTheWeek(){

 var yy= document.getElementById("yearOfBirth").value.slice(2,4);
  yy=parseInt(yy);
 var cc = document.getElementById(yearOfBirth).value.slice(0,2);
 var cc = parseInt(cc);
 var mm = parseInt(document.getElementById("monthOfBirth").value);
 var dd = parseInt(document.getElementById("dateOfBirth").value);
  if((mm < 1) || ( mm > 12)){
alert("invalid choice");
  }else if((dd < 1 ) || ( dd > 31)){
    alert("Invalid date of birth");
  }
  dayOfTheWeek = parseInt(((( cc/4) - 2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7) ;
  checkGender();

  }



  function checkGender(){
    gender = document.getElementById("myGender").value;
  getAkanName();
}
function getAkanName(){
  var daysOfTheWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kamwe"];
  var femaleNames = ["Akosu","Adwoaa","Abenaa","Aku","Yaa","Afua","Ama"];
  if(gender === "male"){
    document.getElementById("output").innerText =("You were born on" + daysOfTheWeek[dayOfTheWeek] +"Your Akan name is" + maleNames[daysOfTheWeek]);
  }else {
    document.getElementById("output").innerText =("You were born on" + daysOfTheWeek[dayOfTheWeek] + "Your Akan name is" +femaleNames[daysOfTheWeek]);
  }
  }

