interface todo{
  task: string;
  done: boolean;
}

class TodoList{
  public tasks: string[];
  public status: boolean[];

  constructor(tasks: string[], status: boolean[]){
    this.tasks = tasks;
    this.status = status;
  }

  add(atodo: todo){
    this.tasks.push(atodo.task);
    this.status.push(atodo.done);
  }

  delete(index: number){
    this.tasks.splice(index, 1);
    this.status.splice(index, 1);
  }

  update(index: number, taskUpdate: string){
    this.tasks[index] = taskUpdate;
  }

  read(index: number){
    this.status[index] = !this.status[index];
  }

  display(){
    console.log('Tasks '+this.tasks)
    console.log('Status '+this.status)
  }
}


var list  = new TodoList(["Learn TypeScript"],[true]);

function addTodo(task: string, done: boolean){
  list.add({
    task: task,
    done: done
  })
}

function deleteTodo(index: number){
  list.delete(index);
}

function updateTodo(index: number, taskupdate: string){
  list.update(index, taskupdate);
}

function markTodo(index: number){
  list.read(index);
}

function getTodos(){
  return list;
}


list.add({task: "Learn Angular",done: false});

// Task name
// done
//mark as read
//delete
//update

list.display()
