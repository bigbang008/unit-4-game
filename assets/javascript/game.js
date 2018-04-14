$(document).ready(function(){

var totalScore;
var myscore = 0;
var wins = 0;
var losses = 0;


//random total number 19-120
function randomTotal(){
 totalScore = Math.floor((Math.random() * (120 - 19) + 1) + 19); 
 $("#totalscore").html(totalScore);
};

randomTotal();

//random crystal value 1-12
var emerald = Math.floor(Math.random() * 11 + 1);
var ruby = Math.floor(Math.random() * 11 + 1);
var topaz = Math.floor(Math.random() * 11 + 1);
var firestones = Math.floor(Math.random() * 11 + 1);

//show number of wins/losses
$('#show-win').text("Wins: " + wins);
$('#show-loss').text("Losses: " + losses);
$("#currentscore").text(myscore);

//reset the game
function reset(){
  randomTotal();
  var emerald = Math.floor(Math.random() * 11 + 1);
  var ruby = Math.floor(Math.random() * 11 + 1);
  var topaz = Math.floor(Math.random() * 11 + 1);
  var firestones = Math.floor(Math.random() * 11 + 1);
  myscore = 0;
  $('#currentscore').text(myscore);
 
}

// condition function
function condition(){
  if (myscore === totalScore) {
    alert("You win!");
    wins++;
    $('#show-win').text("Wins: " + wins);
    reset();
  }

  else if (myscore >= totalScore) {
    alert("You lose!!");
    losses++
    $('#show-loss').text("Losses: " + losses);
    reset();
  }
}

//click function

$("#one").on("click", function(){
  myscore += emerald;
  $("#currentscore").text(myscore);
  condition();
});

$("#two").on("click", function(){
  myscore += ruby;
  $("#currentscore").text(myscore);
  condition();
});

$("#three").on("click", function(){
  myscore += topaz;
  $("#currentscore").text(myscore);
  condition();
});

$("#four").on("click", function(){
  myscore += firestones;
  $("#currentscore").text(myscore);
  condition();
});


console.log("Emerald value: " + emerald);
console.log("ruby value: " + ruby);
console.log("topaz value: " + topaz);
console.log("firestones value: " +firestones);  
}); 
