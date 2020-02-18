var dd , mm, yy , cc;

var dayOfTheWeek;
var gender;



function getDayOfTheWeek(){
  // event.preventDefault();

  yy= document.getElementById("yearOfBirth").value.slice(2,4);
  yy=parseInt(yy);
  cc = document.getElementById(yearOfBirth).value.slice(0,2);
  cc = parseInt(cc);
  mm = parseInt(document.getElementById("monthOfBirth").value);
  dd = parseInt(document.getElementById("dateOfBirth").value);
  if((mm < 1) || ( mm > 12)){
alert("invalid choice");
  }else if((dd < 1 ) || ( dd > 31)){
    alert("Invalid date of birth");
  }//else{
    //var dayOfTheWeek = ((( cc/4) - 2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7 ;
    //return dayOfTheWeek;
  //}
  dayOfTheWeek = parseInt(((( cc/4) - 2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7) ;
  checkGender();

  }



  function checkGender(){
    // event.preventDefault();
    gender = document.getElementById("myGender").value;
    //if(gender[0].checked === true){
      //gender = "male";
    
    //}else if(gender[1].checked === true){
      //gender = "female";
      
    //}else{
      //console.log("No gender was selected");
  //}
  //return gender;
  getAkanName();
}
function getAkanName(){
  
  

  //dayReturned = getDayOfTheWeek();
  //var newDay = Math.floor(dayReturned)
  //var newDay = Math.floor(daysOfTheWeek)
  //var newGender = checkGender();
  var daysOfTheWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kamwe"];
  var femaleNames = ["Akosu","Adwoaa","Abenaa","Aku","Yaa","Afua","Ama"];
  if(gender === "male"){
    document.getElementById("output").innerText =("You were born on" + daysOfTheWeek[dayOfTheWeek] +"Your Akan name is" + maleNames[dayOfTheWeek]);
  }else {
    document.getElementById("output").innerText =("You were born on" + daysOfTheWeek[dayOfTheWeek] + "Your Akan name is" +femaleNames[dayOfTheWeek]);
  }
  //else
    //alert("check your input");
  }

