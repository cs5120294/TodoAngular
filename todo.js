var TodoList = /** @class */ (function () {
    function TodoList(tasks, status) {
        this.tasks = tasks;
        this.status = status;
    }
    TodoList.prototype.add = function (atodo) {
        this.tasks.push(atodo.task);
        this.status.push(atodo.done);
    };
    TodoList.prototype["delete"] = function (index) {
        this.tasks.splice(index, 1);
        this.status.splice(index, 1);
    };
    TodoList.prototype.update = function (index, taskUpdate) {
        this.tasks[index] = taskUpdate;
    };
    TodoList.prototype.display = function () {
        console.log('Tasks ' + this.tasks);
        console.log('Status ' + this.status);
    };
    return TodoList;
}());
var list = new TodoList(["Learn TypeScript"], [true]);
function addTodo(task, done) {
    list.add({
        task: task,
        done: done
    });
}
function deleteTodo(index) {
    list["delete"](index);
}
function updateTodo(index, taskupdate) {
    list.update(index, taskupdate);
}
function getTodos() {
    return list;
}
list.add({ task: "Learn Angular", done: false });
// Task name
// done
//mark as read
//delete
//update
list.display();
