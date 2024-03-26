
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  document.getElementById('time').innerHTML=formatAMPM(new Date);
setInterval(() => {
    document.getElementById('time').innerHTML=formatAMPM(new Date);
}, 5000);

document.getElementById("triggerAboutMenu").onclick=function(){
  document.getElementById("triggerAboutMenu").innerHTML = "You must be signed in to view this pannel.";
  document.getElementById("triggerAboutMenu").style.width="255px"
  setTimeout(() => {
    document.getElementById("triggerAboutMenu").innerHTML = '<i class="fa-solid fa-wifi" style="color: #dbdbdb;"></i><i class="fa-solid fa-battery-three-quarters" style="color: #e3e3e3;"></i><span id="time"></span>';
    document.getElementById("triggerAboutMenu").style.width="110px"
    document.getElementById('time').innerHTML=formatAMPM(new Date);
    document.getElementById('time1').innerHTML=formatAMPM(new Date);
  }, 2000);
}


function shutDown(){
  document.body.style.backgroundImage="url('images/black.jpg')";
  document.getElementById('mainSignedOutBackgroundFilter').style.display="none";
  setTimeout(() => {
    document.body.style.backgroundImage="url('images/osBoot.webp')";
    document.body.style.backgroundSize="Cover"

    setTimeout(() => {
      document.body.style.backgroundImage="none";
      document.body.style.backgroundColor="rgb(199, 199, 199)";
      document.getElementById("signedOutScreen").style.display="block"
    }, 2000);
  }, 3000);
    loadGif();
                setTimeout(() => {
                document.getElementById("password1").style.display="block";
                document.getElementById("username1").style.display="block";
                document.querySelector(".signedOutLoader").style.display="none";
            })
    };
}
document.getElementById('signedOutScreen').style.display='none';








function validate(idPass, idUser){

  //password validation
  var pass = document.getElementById(idPass).value;
  var username = document.getElementById(idUser).value;
  var string = null;
  var string2 = null;
  var interger = null;
  var checker = 0;

  if(pass.substring(0,5).includes('0') || pass.substring(0,5).includes('1') || pass.substring(0,5).includes('2') || pass.substring(0,5).includes('3') || pass.substring(0,5).includes('4') || pass.substring(0,5).includes('5') || pass.substring(0,5).includes('6') || pass.substring(0,5).includes('7') || pass.substring(0,5).includes('8') || pass.substring(0,5).includes('9') || pass == ''){
      string = false;
  }else string = true;

  if(pass.substring(6,8).includes('0') || pass.substring(6,8).includes('1') || pass.substring(6,8).includes('2') || pass.substring(6,8).includes('3') || pass.substring(6,8).includes('4') || pass.substring(6,8).includes('5') || pass.substring(6,8).includes('6') || pass.substring(6,8).includes('7') || pass.substring(6,8).includes('8') || pass.substring(6,8).includes('9')){
      interger = true;
  }else interger = false;

  if(pass.substring(9,12).includes('0') || pass.substring(9,12).includes('1') || pass.substring(9,12).includes('2') || pass.substring(9,12).includes('3') || pass.substring(9,12).includes('4') || pass.substring(9,12).includes('5') || pass.substring(9,12).includes('6') || pass.substring(9,12).includes('7') || pass.substring(9,12).includes('8') || pass.substring(9,12).includes('9')){
      string2 = false;
  }else string2 = true;



  if(pass.length == 12 & string==true & string2==true & interger==true){
      //alert('pass works')
      checker=1;
      //console.log(checker)
  }else{
      document.getElementById(idPass).value = '';
//say its incorrect
      setTimeout(() => {
//take that away
      }, 2500);
  }

  //username validation
  var interger2 = null;
  var string3 = null;

  if(username.substring(0,3).includes('0') || username.substring(0,3).includes('1') || username.substring(0,3).includes('2') || username.substring(0,3).includes('3') || username.substring(0,3).includes('4') || username.substring(0,3).includes('5') || username.substring(0,3).includes('6') || username.substring(0,3).includes('7') || username.substring(0,3).includes('8') || username.substring(0,3).includes('9') || username == ''){
      string3 = false;
  }else string3 = true;

  if(username.substring(3,8).includes('0') || username.substring(3,8).includes('1') || username.substring(3,8).includes('2') || username.substring(3,8).includes('3') || username.substring(3,8).includes('4') || username.substring(3,8).includes('5') || username.substring(3,8).includes('6') || username.substring(3,8).includes('7') || username.substring(3,8).includes('8') || username.substring(3,8).includes('9')){
      interger2 = true;
  }else interger2 = false;
  if(username.length == 8 & string3==true & interger2==true){
      //alert('usrname works')
      checker++;
      //console.log(checker)
  }else{
      document.getElementById(idPass).value = '';
      //username is fake
  }
  if(checker==2){
      return true; 
}
}










document.querySelector(".signedOutLoader").style.display='none';
document.querySelector(".errorSO").style.display='none';

function loadGif(){
  document.querySelector(".signedOutLoader").style.display='block';
}
function error(){
     if(errorCounter==0){
  document.querySelector(".errorSO").style.display='block';
         errorCounter++;
     }else{
        loadGif();
        setTimeout(() => {
            document.querySelector(".signedOutLoader").style.display="none";
            }
        }, 1000);
        document.getElementById("submit2").style.display='none';
        document.querySelector(".welcomeMesg1").innerHTML = "Thanks."
    }
}
