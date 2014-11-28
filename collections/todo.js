Todo = new Mongo.Collection('todo');

Todo.allow({
    insert: function (userId, doc) {
        return !!userId
    }
});