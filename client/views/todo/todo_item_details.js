Template.todoItemDetails.helpers({
    ownTodo: function () {
        return this.userId == Meteor.userId();
    }
});