
var url = "http://localhost:3000/post";

a=0;



// P V CPU

function rock(){ // activates when we click rock button

    var rps = 0; //0 is rock

    document.getElementById("RPS").src="pictures/rock.png";  

    $.post(url+'?data='+JSON.stringify({

        'computerRPS':'random',

        'rps':rps,

    }),

    response);


}




function paper(){ // activates when we click paper button

    var rps = 1; //1 is paper

    document.getElementById("RPS").src="pictures/paper.png";  

    $.post(url+'?data='+JSON.stringify({

        'computerRPS':'random',

        'rps':rps,

    }),

    response);


}






function scissor(){ // activates when we click scissor button

    var rps = 2; //2 is scissor

    document.getElementById("RPS").src="pictures/scissors.png";  

    $.post(url+'?data='+JSON.stringify({

        'computerRPS':'random',

        'rps':rps,

    }),

    response);

}







function rock3(){ // activates when we click rock button

    var rps = 0; //0 is rock

    document.getElementById("RPS").src="pictures/rock.png";  

    $.post(url+'?data='+JSON.stringify({

        'computerRPS':'random3',

        'rps':rps,

    }),

    response);


}




function paper3(){ // activates when we click paper button

    var rps = 1; //1 is paper

    document.getElementById("RPS").src="pictures/paper.png";  

    $.post(url+'?data='+JSON.stringify({

        'computerRPS':'random3',

        'rps':rps,

    }),

    response);


}





function scissor3(){ // activates when we click scissor button

    var rps = 2; //2 is scissor

    document.getElementById("RPS").src="pictures/scissors.png";  

    $.post(url+'?data='+JSON.stringify({

        'computerRPS':'random3',

        'rps':rps,

    }),

    response);




}




function rock5(){ // activates when we click rock button

    var rps = 0; //0 is rock

    document.getElementById("RPS").src="pictures/rock.png";  

    $.post(url+'?data='+JSON.stringify({

        'computerRPS':'random5',

        'rps':rps,

    }),

    response);


}




function paper5(){ // activates when we click paper button

    var rps = 1; //1 is paper

    document.getElementById("RPS").src="pictures/paper.png";  

    $.post(url+'?data='+JSON.stringify({

        'computerRPS':'random5',

        'rps':rps,

    }),

    response);


}





function scissor5(){ // activates when we click scissor button

    var rps = 2; //2 is scissor

    document.getElementById("RPS").src="pictures/scissors.png";  

    $.post(url+'?data='+JSON.stringify({

        'computerRPS':'random5',

        'rps':rps,

    }),

    response);




}




function rockpvp(){ // activates when we click rock button

    rps = 0; //0 is rock

    document.getElementById("RPS").src="pictures/rock.png";  


}




function paperpvp(){ // activates when we click paper button

    rps = 1; //1 is paper

    document.getElementById("RPS").src="pictures/paper.png";  

}





function scissorpvp(){ // activates when we click scissor button

    rps = 2; //2 is scissor

    document.getElementById("RPS").src="pictures/scissors.png";  


}


function rockpvpp2(){ // activates when we click rock button

    var rpsp2 = 0; //0 is rock

    document.getElementById("RPS1").src="pictures/rock.png";  

    $.post(url+'?data='+JSON.stringify({

        'execute': 'a',

        'rps2':rpsp2,

        'rps': rps

    }),

    response);

}



function paperpvpp2(){ // activates when we click paper button

    var rpsp2 = 1; //1 is paper

    document.getElementById("RPS1").src="pictures/paper.png";  

    $.post(url+'?data='+JSON.stringify({

        'execute': 'a',

        'rps2':rpsp2,

        'rps': rps

    }),

    response);


}






function scissorpvpp2(){ // activates when we click scissor button

    var rpsp2 = 2; //2 is scissor

    document.getElementById("RPS1").src="pictures/scissors.png";  

    $.post(url+'?data='+JSON.stringify({

        'execute': 'a',

        'rps2':rpsp2,

        'rps': rps

    }),

    response);

}



function response(data, status){

    var response = JSON.parse(data);

    console.log(data);

    var rps2 = (response['computerSelection']);

    result = response['w'];

    
    
    if (response['check'] == 'pvcpu'){


        
        if (rps2 == 0){
        
            document.getElementById("RPS1").src="pictures/rock.png"
        
        }
        
        if (rps2 == 1){
        
            document.getElementById("RPS1").src="pictures/paper.png"
        
        }
        
        if (rps2 == 2){
        
            document.getElementById("RPS1").src="pictures/scissors.png"
        
        }   
        
        document.getElementById("results").innerHTML=result;
        
        setTimeout(function(){
        
            reset();
        
        },1500);
    }

}




function reset(){

    document.getElementById("RPS").src="pictures/background.png";

    document.getElementById("RPS1").src="pictures/background.png";

    document.getElementById("results").innerHTML=" ";


}
