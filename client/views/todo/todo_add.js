Template.todoAdd.events({
    'submit form': function (e) {
        e.preventDefault();

        var todo = {
            title: $(e.target).find('[name=title]').val(),
            description: $(e.target).find('[name=description]').val()
        }
        Meteor.call('post', todo, function (error, id) {
            if (error)
                return alert(error.reason);

            Router.go('todoPage', {_id: id})

        });
    }
})