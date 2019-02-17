var person = {
    name:"Nandan",
    age: 23,
    city: "Bangalore",
    skills:{
        c:10,
        java:10
    }
};

console.log(person);
console.log(person);
console.log(person);


var someObject = {
    friends:[
        {name:"malfoy"},
        {name:"crabble"},
        {name:"goyle"}
    ],
    color:"blue",
    isevil:true
}

someObject.friends.forEach(function(item){
    console.log(item.name)
});

