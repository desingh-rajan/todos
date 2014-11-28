Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return Meteor.subscribe('todo')
    }
});

Router.onBeforeAction('dataNotFound', {only: 'todoPage'})

Router.map(function () {
    this.route('/', {name: 'todoList'});

    this.route('/todo/:_id', {
        name: 'todoPage',
        data: function () {
            return Todo.findOne(this.params._id);
        }
    });

    this.route('todoAdd', {
        path: '/add'
    });

});

var permitUser = function () {
    if (!Meteor.user()) {
        this.render('accessDenied');
        this.stop();
    } else {
        this.next();
    }
};
Router.before(permitUser, {only: 'todoAdd'})

