Template.todoAdd.events({
    'submit form': function (event) {
        event.preventDefault();

        var todo = {
            title: $(event.target).find('[name=title]').val(),
            description: $(event.target).find('[name=description]').val()
        };
        Meteor.call('post', todo, function (error, id) {
            if (error)
                return alert(error.reason);

            Router.go('todoPage', {_id: id})

        });
    }
});