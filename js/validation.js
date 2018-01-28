function validate() {
  var code = document.getElementById("nric").value;

  var reg=/^[A-Z]{1}[1-2]{1}[0-9]{8}$/;

  if (code == "") {
    alert("輸入內容不可空白!");
  } else if (code.length != 10) {
    alert("長度不正確!");
  } else if (!reg.test(code)) {
    alert("格式不正確，第一碼為[A-Z]，第二碼為[1-2]");
  }
  else {
    if(code[1]=="1"){
      document.getElementById("result").innerHTML = "某男通過驗證";
    }
    else{
      document.getElementById("result").innerHTML = "某女通過驗證"; 
    }
  }
}