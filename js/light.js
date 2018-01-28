var state = true;

function toggleLight(){
  var image = document.getElementById("image");
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg";
}

var timeLeft = 0;

function countDownTimer(){
  if(timeLeft>0){
    timeLeft = timeLeft - 1;
    if(timeLeft<=0){
      document.getElementById("image").src = "img/off.jpg";
      state = false;
    }
    document.getElementById("timer").innerHTML = timeLeft;
  }
}

var id = setInterval(countDownTimer, 1000);

function setTimer(){
  var time = document.getElementById("nric").value;
  if(time == "" || isNaN(time)){
    alert("資料錯誤，請輸入數字!");
    return;
  }
  else{
    if(state==false){
      toggleLight();
    }
    timeLeft = Number(time);
    document.getElementById("timer").innerHTML = timeLeft;
    document.getElementById("nric").value = "";
  }
}