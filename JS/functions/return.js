function kebabToSnake(str){

    while(str.indexOf('-') != -1){

        str = str.replace('-','_');

    }
    

    return str ;

}


var str = kebabToSnake(prompt('enter the str in kebab case'));
console.log(str);


function factorial(n){
    if(n==1){
        return 1 ;
    }

    return n * factorial(n -1);

}

var s = factorial(prompt('enter a number for factorial'));
console.log(s);

function isEven(){
    var s = prompt('enter a number ');
    if( s % 2 == 0){
        return true ;
    }
    else{
        return false ;
    }

}

var even = isEven();
console.log(even);





function doSomething(){

    console.log("Hello Motherfucker");
    console.log("Hello Motherfucker");
}



doSomething();
doSomething();


function square(num){

    console.log(num*num);


    return alert('the square of the number is ' + ( num * num ) );
}


square(prompt('enter some number nigga'));