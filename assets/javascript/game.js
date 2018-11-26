//Ready the DOM on page load

$(document).ready(function() {

//Global Variables

var player1;
var player2;
var player3;
var player4;
var availablePlayers;
var yourPlayer;
var opponents;
var yourOpponent;

    function startGame() {
    //Objects holding the players
            var player1 = {
                Name: "Automation",
                Health: 140,
                Damage: 10,
                Image: "assets/images/robot.png",

            };

            var player2 = {
                Name: "Consumerism",
                Health: 150,
                Damage: 8,
                Image: "assets/images/kitty.png",
            };

            var player3 = {
                Name: "Social Media",
                Health: 175,
                Damage: 5,
                Image: "assets/images/wolf.png",
            };

            var player4 = {
                Name: "Climate Change",
                Health: 130,
                Damage: 12,
                Image: "assets/images/bunny.jpg",
             };
            
            //reset game variables
            availablePlayers = [player1, player2, player3, player4];
            yourPlayer = null;
            opponents = [];
            yourOpponent = null;

            //clear all game play DIVs
            $("#yourPlayer").empty();
            $("#yourOpponent").empty();
            $("#opponents").empty();
             
            $.each(availablePlayers, function(index, yourPlayer) {
                var availPlayerDiv = $("<div>").addClass("yourPlayer panel").attr("id", yourPlayer.id);

                $("#availablePlayers").append(availPlayerDiv);
                $("<div>").addClass("panel-heading").html(yourPlayer.Name).appendTo(availPlayerDiv);
                $("<div>").addClass("panel-body").append("<img src=" + yourPlayer.Image + ">").appendTo(availPlayerDiv);
                $("<div>").addClass("panel-footer").append(yourPlayer.Health).appendTo(availPlayerDiv);

              

            });
            }     
startGame();
})



//Game variables to hold the attack, the player position, and function names

//Start Game function 



//Select a player function 

//place the player in the battle area

//select an opponent function

//place the opponent in the battle area

//calculate damage 

//display attack status message

//display win or lose message 

//reset game function 

//update HTML function 

//onclick events 