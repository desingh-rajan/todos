Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function(){return Meteor.subscribe('todo')}
});

Router.route('/',{name: 'todoList'});