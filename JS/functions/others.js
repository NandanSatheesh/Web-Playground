



var interval = setInterval(sing , 1000 );
var seconds = 10 ;
function sing(){

    seconds = seconds + 1 ;
    console.log(seconds);

    if(seconds == 15){
        clearInterval(interval);
    }


}


