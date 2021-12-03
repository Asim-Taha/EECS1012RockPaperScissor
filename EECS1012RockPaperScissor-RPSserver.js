const { count } = require('console');

const { response } = require('express');

var express = require('express');

const { METHODS } = require('http');

var app = express();

counter=0;

cCounter=0;

result=""



app.post('/post', (req, res) => {

  console.log("In post");
  
  res.header("Access-Control-Allow-Origin", "*");
  
  console.log("New express client");
  
  console.log("Received: ");
  
  console.log(JSON.parse(req.query['data']));
  
  var z = JSON.parse(req.query['data']);
  
  var rps = z['rps']
  
  
  
  if (z['computerRPS'] == 'random') {
  
    var rps2 = Math.floor((Math.random()*3));
    
    winner(rps, rps2)
    
    var jsontext = JSON.stringify({
    
      'check': 'pvcpu',
      
      'computerSelection': rps2,
      
      'w': result
      
    }); 
    
  } else if(z['computerRPS'] == 'random3') {
  
    var rps2 = Math.floor((Math.random()*3));
    
    winner3(rps, rps2)
    
    var jsontext = JSON.stringify({
    
      'check': 'pvcpu',
      
      'computerSelection': rps2,
      
      'w': result
      
    });
    
  } else if (z['computerRPS'] == 'random5') {
  
    var rps2 = Math.floor((Math.random()*3));
    
    winner5(rps, rps2)
    
    var jsontext = JSON.stringify({
    
      'check': 'pvcpu',
      
      'computerSelection': rps2,
      
      'w': result
      
    }); 
    
  } else if(z['execute'] == 'a'){
  
    rps = z['rps']
    
    rps2 = z['rps2']
    
    winnerpvp(rps, rps2)
    
    var jsontext = JSON.stringify({
    
      'check': 'pvcpu',
      
      'w': result
      
    }); 
    
  }
  
  res.send(jsontext)
})
  .listen(3000);
co
nsole.log("Rock Paper Scissors is Launched!!");





function winner(rps, rps2){

  if (rps == 0){ // We have selected Rock
  
    if(rps == rps2){ // player rps is same as computer random rps it is tie
    
      result="Tie"
      
    }
    
    else if(rps2 == 1){ // if computer rps is 1 that means its paper and so we lose
    
      result="Lose"
      
    }else{ //only other case left is computer choses scissor in which case we win
    
      result="Win"
      
    }
    
  }
  
  if (rps == 1){ // We have selected Paper
  
    if(rps == rps2){ // player rps is same as computer random rps it is tie
    
      result="Tie"
      
    }
    
    else if(rps2 == 2){ // if computer rps2 is 2 that means its scissors and so we lose
    
      result="Lose"
      
    }else{ //only other case left is computer choses rock in which case we win
    
      result="Win"
      
    }
   
    
    
  }
  
  
  
  if (rps == 2){ // We have selected Scissors
  
    if(rps == rps2){ // player rps is same as computer random rps it is tie
    
      result="Tie"
      
    }
    
    else if(rps2 == 0){ // if computer rps2 is o that means its rock and so we lose
            result="Lose"
    
    }else{ //only other case left is computer choses paper in which case we win
    
      result="Win"
      
    }
    
  }

  
}




function winner3(rps, rps2){

  result=""
  
  if (rps == 0){ // We have selected Rock
  
    if(rps2 == 1){ // if computer rps is 1 that means its paper and so we lose
    
      cCounter++;
      
      result=""
      
    }else if(rps2==2){ //only other case left is computer choses scissor in which case we win
    
      counter++;
      
      result=""
      
    }
    
  }

  
  
  if (rps == 1){ // We have selected Paper
  
    if(rps2 == 2){ // if computer rps2 is 2 that means its scissors and so we lose
    
      cCounter++;
      
      result=""
      
    }else if(rps2==0){ //only other case left is computer choses rock in which case we win
    
      counter++;
      
      result=""
      
    }
    
  }
  
  
  
  if (rps == 2){ // We have selected Scissors
  
    if(rps2 == 0){ // if computer rps2 is o that means its rock and so we lose
    
      cCounter++;
      
      result=""
      
    }else if (rps2==1){ //only other case left is computer choses paper in which case we win
    
      counter++;
      
      result=""
      
    }
    
  }

  
  
  if(counter == 2){
  
    counter = 0;
    
    cCounter = 0;
    
    result="Win"
    
  } else if(cCounter == 2){
  
    counter = 0;
    
    cCounter = 0;
    
    result="Lose"  
    
  }
  
  
}




function winner5(rps, rps2){

  result=""
  
  if (rps == 0){ // We have selected Rock
  
    if(rps2 == 1){ // if computer rps is 1 that means its paper and so we lose
    
      cCounter++;
      
      result=""
      
    }else if(rps2==2){ //only other case left is computer choses scissor in which case we win
    
      counter++;
      
      result=""
      
    }
    
  }

  
  
  if (rps == 1){ // We have selected Paper
  
    if(rps2 == 2){ // if computer rps2 is 2 that means its scissors and so we lose
    
      cCounter++;
      
      result=""
      
    }else if(rps2==0){ //only other case left is computer choses rock in which case we win
    
      counter++;
      
      result=""
      
    }
    
  }
  
  
  
  if (rps == 2){ // We have selected Scissors
  
    if(rps2 == 0){ // if computer rps2 is o that means its rock and so we lose
    
      cCounter++;
      
      result=""
      
    }else if (rps2==1){ //only other case left is computer choses paper in which case we win
    
      counter++;
      
      result=""
      
    }
    
  }

  
  
  if(counter == 3){
  
    counter = 0;
    
    cCounter = 0;
    
    result="Win"
    
  } else if(cCounter == 3){
  
    counter = 0;
    
    cCounter = 0;
    
    result="Lose"  
    
  }
  
  
}




function winnerpvp(rps, rps2){

  if (rps == 0){ // We have selected Rock
  
    if(rps == rps2){ // player rps is same as computer random rps it is tie
    
      result="Tie"
      
    }
    
    else if(rps2 == 1){ // if computer rps is 1 that means its paper and so we lose
    
      result="Lose"
      
    }else if(rps2 == 2){ //only other case left is computer choses scissor in which case we win
    
      result="Win"
      
    }
    
  }
  
  if (rps == 1){ // We have selected Paper
  
    if(rps == rps2){ // player rps is same as computer random rps it is tie
    
      result="Tie"
      
    }
    
    else if(rps2 == 2){ // if computer rps2 is 2 that means its scissors and so we lose
    
      result="Lose"
      
    }else{ //only other case left is computer choses rock in which case we win
    
      result="Win"
      
    }
   
    
    
  }
  
  
  
  if (rps == 2){ // We have selected Scissors
  
    if(rps == rps2){ // player rps is same as computer random rps it is tie
    
      result="Tie"
      
    }
    
    else if(rps2 == 0){ // if computer rps2 is o that means its rock and so we lose
    
      result="Lose"
      
    }else{ //only other case left is computer choses paper in which case we win
    
      result="Win"
      
    }
    
  }

  
}
