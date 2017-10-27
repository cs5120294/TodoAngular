function myupdate(id){
  var para = 'para'+String(id);
  console.log(para);
    var input = document.getElementById(para);
    var newTask = input.textContent;
    updateTodo(id, newTask);
    mydisplay();
}

function myread(id){
    markTodo(id);
    mydisplay();
}

function mydelete(id){
    deleteTodo(id);
    mydisplay();
}

function mydisplay(){
    var list = document.getElementById('todos');
    list.innerHTML ='';
    var lst = getTodos();
    for (let i=0; i<lst.tasks.length; i++) {
      myFunction(list, lst.tasks[i], lst.status[i], i);
    }
}

function myFunction(list, task, done, id){
  var listString = '';
  // listString += '<p>' + task + '</p>';
  // listString += '<li> Status : ' +done+ '</li>';
  listString += '<div>';
  if(done){
    listString += '<p id=para'+String(id)+' class="undonepara" contenteditable="false"><strike>' + task + '</strike></p>';
  }
  else{
    listString += '<p id=para'+String(id)+' class="undonepara" contenteditable="true">' + task + '</p>';
  }
  listString += '<button id="deletebtn" class="btn deletebtn" onclick="mydelete('+id+')">Delete</button>'


  listString += '<button id="updatebtn" class="btn updatebtn" onclick="myupdate('+id+')">Update</button>'

  if(!done){
    listString += '<button id="markreadbtn" class="btn markreadbtn" onclick="myread('+id+')">Mark as Read</button>'
  }
  else{
    listString += '<button id="markreadbtn" class="btn markreadbtn" onclick="myread('+id+')">Mark as Unread</button>'
  }

  listString += '<hr></hr>';
  listString += '</div>';
  list.innerHTML += listString;
}

window.onload = function() {
    var input = document.getElementById('inp');
    var btn = document.getElementById('btn');
    mydisplay();

    btn.onclick = function () {
        var value = input.value;
        addTodo(value, false);
        mydisplay();
    };


}
