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
  
  // remove button
  var removeButton = document.createElement("button");
  removeButton.onclick = function() {
    if( !confirm("是否確定完成？") ){
      return;
    }
    this.parentNode.parentNode.removeChild(this.parentNode);
  }
  removeButton.textContent = "V";
  todo.appendChild(removeButton);
  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}