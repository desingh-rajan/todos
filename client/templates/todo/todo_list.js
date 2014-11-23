/**
 * Created by desingh on 11/23/14.
 */
var todoData = [
    {title: 'Buy detergent power.', description: 'Ayyo mudiyala'},
    {title: 'Wash your cloths, Almost two weeks gone.'},
    {title: 'Go outside and see the sky, ground, tree! You noob prisoner.'}
];

Template.todoList.helpers({
    todo: todoData
});