function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var input = document.getElementById("input").value;
  if( input == "" ){
    alert("內容不可空白!");
    return;
  }
  
  span.innerHTML = input;
  todo.appendChild(span);
  
  // replace button
  var replaceButton = document.createElement("button");
  replaceButton.onclick = function() {
    var input = document.getElementById("input").value;
    if( input == "" ) {
      alert("內容不可空白!");
      return;
    }
    this.parentNode.firstChild.innerHTML = input;
    document.getElementById("input").value = "";
  }
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);
  
  // complete button
  var completeButton = document.createElement("button");
  completeButton.onclick = function() {
    if( !confirm("是否確定完成？") ){
      return;
    }
    span.classList.add("text-grey");
    this.parentNode.removeChild(replaceButton);
    this.parentNode.removeChild(completeButton);
  }
  completeButton.textContent = "V";
  todo.appendChild(completeButton);


  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}