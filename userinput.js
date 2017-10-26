window.onload = function() {
    var input = document.getElementById('inp');
    var btn = document.getElementById('btn');
    var list = document.getElementById('todos');

    var lst = getTodos();
    for (let i=0; i<lst.tasks.length; i++) {
      myFunction(lst.tasks[i], lst.status[i], i);
    }

    btn.onclick = function () {
        var value = input.value;
        addTodo(value, false);
        mydisplay();
    };

  function mydelete(id){
        deleteTodo(id);
        mydisplay();
    }

  function mydisplay(){
      list.innerHTML = '';
      var lst = getTodos();
      for (let i=0; i<lst.tasks.length; i++) {
        myFunction(lst.tasks[i], lst.status[i], i);
      }
  }

  function myFunction(task, done, id){
    var listString = '';
    listString += '<li>' + task + '</li>';
    listString += '<li> Status : ' +done+ '</li>';
    listString += '<button id="deletebtn" onclick="deleteTodo('+id+')">Delete</button>'
    listString += '<hr></hr>';
    list.innerHTML += listString;
  }

}
