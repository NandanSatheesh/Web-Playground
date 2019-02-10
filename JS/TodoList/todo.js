
var list = [] ;


function add(){

    list.push(prompt("what would you like to do?"));


}


function showAll(){

    console.log(list);
}
var input = prompt("enter the command");

while(input !== "quit"){


    

    if(input === "new"){
        add();
    }
    else if(input === "list"){
        showAll();
    }

    input = prompt("enter the command");

}


console.log('you quit the app');
