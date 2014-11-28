Template.todoAdd.events({
    'submit form': function (e) {
        e.preventDefault();

        var todo = {
            title: $(e.target).find('[name=title]').val(),
            description: $(e.target).find('[name=description]').val()
        }
        todo._id = Todo.insert(todo);
        Router.go('todoPage', todo);
    }
})