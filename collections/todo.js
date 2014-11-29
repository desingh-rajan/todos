Todo = new Mongo.Collection('todo');

Todo.allow({
    update: ownsDocument,
    remove: ownsDocument
});

Todo.deny({
    update: function (userId, post, fieldNames) {
        return(_.without(fieldNames, 'title', 'description').length > 0);
    }
});

Meteor.methods({
    post: function (todoAttributes) {
        var user = Meteor.user(),
            todoWithSameTitle = Todo.findOne({title: todoAttributes.title});

        if (!user)
            throw new Meteor.Error(401, 'Login required to add new Todo');

        if (!todoAttributes.title)
            throw new Meteor.Error(422, 'Please fill in the title');

        if (todoWithSameTitle)
            throw new Meteor.Error(302, 'Same todo already exist!', todoWithSameTitle._id);

        var todo = _.extend(_.pick(todoAttributes, 'title', 'description'), {
            userId: user._id,
            user: user.username,
            createdAt: new Date().getTime()
        });

        return Todo.insert(todo);
    }
});