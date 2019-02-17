var moviesDB = {
    0:{
        name:"In Burgers",
        rating:5,
        hasWatched:false
    },
    1:{
        name:"Frozen",
        rating:4.5,
        hasWatched:true
    },
    2:{
        name:"Mad Max Fury Road",
        rating:3.5,
        hasWatched:false
    },
    3:{
        name:"Inception",
        rating:5,
        hasWatched:true
    }
};


console.log(moviesDB);


for(var i = 0 ; i < 4 ; i++){

    console.log(moviesDB[i]);
    
    if(moviesDB[i].hasWatched){
        document.write("You have watched \""+moviesDB[i].name+"\" - "+moviesDB[i].rating+" stars <br>");
    }
    else{
        document.write("You have not seen \""+moviesDB[i].name+"\" - "+moviesDB[i].rating+" stars <br>");
    }


}