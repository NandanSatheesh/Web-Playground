var h1 = document.querySelector('h1') ;

h1.style.color = "pink" ;

var timeOut = setInterval(changeColor , 2000 ) ;

var isBlue = false ;

function changeColor(){

    var background = document.body ;

    if(isBlue){
        isBlue = false ;
        background.style.backgroundColor = "green" ;
    }
    else{
        isBlue = true ;
        background.style.backgroundColor = "blue" ;
    }

    console.log("color changed");
}

