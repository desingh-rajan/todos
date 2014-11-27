Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function(){return Meteor.subscribe('todo')}
});

Router.route('/',{name: 'todoList'});
Router.route('/todo/:_id',{
    name: 'todoPage',
    data: function(){return Todo.findOne(this.params._id);}
});

Router.onBeforeAction('dataNotFound',{only: 'todoPage'})