var min = 19;
var max = 120;

window.onload = function() {

    $("#gem1").click(this.console.log("gem1"));
    $("#gem2").click();
    $("#gem3").click();
    $("#gem4").click();

    // console.log(gameRandom(min, max));
  };



var gameRandom = function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}