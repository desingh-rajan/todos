Template.todoList.helpers({
    todo: function () {
        return Todo.find({}, {sort: {createdAt: -1}});
    }
});