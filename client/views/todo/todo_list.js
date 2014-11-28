Template.todoList.helpers({
    todo: function(){
        return Todo.find();
    }
});