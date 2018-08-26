var min = 19;
var max = 120;
var userScore = 0;
var wins = 0;
var losses = 0;


var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
var gem1Value = Math.floor(Math.random() * 11) + 1;
var gem2Value = Math.floor(Math.random() * 11) + 1;
var gem3Value = Math.floor(Math.random() * 11) + 1;
var gem4Value = Math.floor(Math.random() * 11) + 1;


$("#randomNumber").text(randomNumber);
$("#userScore").text( userScore);
$("#wins").text("Wins:" + wins);
$("#losses").html("Losses:" + losses);




var resetGame = function resetGame(){
    userScore = 0;
    randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    $("#randomNumber").text(randomNumber);  
    $('#userScore').text(userScore); 
    gem1Value = Math.floor(Math.random() * 11) + 1;
    gem2Value = Math.floor(Math.random() * 11) + 1;
    gem3Value = Math.floor(Math.random() * 11) + 1;
    gem4Value = Math.floor(Math.random() * 11) + 1;


}


var win = function win(){
    wins++;
    $("#wins").text("Wins: " + wins);
    alert("Congratulations, you won! Play again!");
    resetGame();

}

var lose = function lose(){
    losses++;
    $("#losses").text("Losses: " + losses);
    alert("Aww you lost. Try again!");
    resetGame();
}


$('#gem1').on ('click', function(){
    userScore = userScore + gem1Value;
    
    $('#userScore').text(userScore); 
          
        if (userScore == randomNumber){
          win();
        }
        else if (userScore > randomNumber){
          lose();
        }   
  });  

  $('#gem2').on ('click', function(){
    userScore = userScore + gem2Value;
    
    $('#userScore').text(userScore); 
          
        if (userScore == randomNumber){
          win();
        }
        else if (userScore > randomNumber){
          lose();
        }   
  });  

  $('#gem3').on ('click', function(){
    userScore = userScore + gem3Value;
    
    $('#userScore').text(userScore); 
          
        if (userScore == randomNumber){
          win();
        }
        else if (userScore > randomNumber){
          lose();
        }   
  });  

  $('#gem4').on ('click', function(){
    userScore = userScore + gem4Value;
    
    $('#userScore').text(userScore); 
          
        if (userScore == randomNumber){
          win();
        }
        else if (userScore > randomNumber){
          lose();
        }   
  });  


