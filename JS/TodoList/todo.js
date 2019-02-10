console.log("app started");
var list = [] ;


function add(){

    list.push(prompt("what would you like to do?"));


}

function deleteItem(){

    var item = prompt("enter the item to be deleted")
    if(list.indexOf(item) != -1){
        list.splice(list.indexOf(item) , 1 ) ;
    }
}

function showAll(){

    console.log('*****************');
    list.forEach(function(item , i) {
        console.log((i+1)+'. '+item);
    });
    console.log('*****************');
    
}
var input = prompt("enter the command");

while(input !== "quit"){


    

    if(input === "new"){
        add();
    }
    else if(input === "list"){
        if(list.length != 0){

            showAll();

        }
        else{
            console.log("no items in the list");
        }
      
    }
    else if( input === "delete"){
        deleteItem();
    }

    input = prompt("enter the command");

}


console.log('you quit the app');
