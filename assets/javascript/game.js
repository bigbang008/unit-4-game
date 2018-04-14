$(document).ready(function(){

var totalScore;
var myscore = 0;
var wins = 0;
var losses = 0;


//random total number 19-120
function randomTotal(){
 totalScore = Math.floor((Math.random() * (120 - 19) + 1) + 19); 
 $("#totalscore").html("Target Number is: " + totalScore);
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

//click function

$("#one").on("click", function(){
  myscore += emerald;
  $("#currentscore").text(myscore);
   
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
});

$("#two").on("click", function(){
  myscore += ruby;
  $("#currentscore").text(myscore);
   
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
});

$("#three").on("click", function(){
  myscore += topaz;
  $("#currentscore").text(myscore);
   
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
});

$("#four").on("click", function(){
  myscore += firestones;
  $("#currentscore").text(myscore);
   
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
});



console.log("Emerald value: " + emerald);
console.log("ruby value: " + ruby);
console.log("topaz value: " + topaz);
console.log("firestones value: " +firestones);  
}); 
