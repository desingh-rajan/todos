if (Todo.find().count() === 0 ){
    console.log("Creating data from fixtures")
Todo.insert({title: "My first todo from collections"});
Todo.insert({title: "My second todo with some description", description: "This is to show my description"});
Todo.insert({title: "Prettify timestamp"});
}