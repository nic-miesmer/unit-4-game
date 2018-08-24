var min = 19;
var max = 120;
var randomNumber = 0;

window.onload = function() {

    $("#gem1").click(this.console.log("gem1"));
    $("#gem2").click();
    $("#gem3").click();
    $("#gem4").click();

    randomNumber = gameRandom(min, max);
  };



var gameRandom = function randomNumberFromRange(min,max)
{
    randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    $("#randomNumber").text(randomNumber);

}