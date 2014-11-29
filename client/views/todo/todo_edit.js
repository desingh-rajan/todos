Template.todoEdit.events({
// Updating record
    'submit form': function (event) {
        event.preventDefault();
        var currentTodoId = this._id;

        var todoProperties = {
            title: $(event.target).find('[name=title]').val(),
            description: $(event.target).find('[name=description]').val()
        };

        Todo.update(currentTodoId, {$set: todoProperties}, function (error) {
            if (error) {
                alert(error.reason);
            } else {
                Router.go('todoPage', {_id: currentTodoId})
            }
        });
    },
// Deleting record
    'click .delete-todo': function (event) {
        event.preventDefault();

        if (confirm("Delete this todo?")) {
            var currentTodoId = this._id;
            Todo.remove(currentTodoId);
            Router.go('todoList');
        }
    }

});
