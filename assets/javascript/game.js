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
                Name: "Player 1",
                Health: 140,
                Damage: 10,
                Image: "https://via.placeholder.com/150",

            };

            var player2 = {
                Name: "Player 2",
                Health: 150,
                Damage: 8,
                Image: "https://via.placeholder.com/150",
            };

            var player3 = {
                Name: "Player 3",
                Health: 175,
                Damage: 5,
                Image: "https://via.placeholder.com/150",
            };

            var player4 = {
                Name: "Player 4",
                Health: 130,
                Damage: 12,
                Image: "https://via.placeholder.com/150",
             };
            
            //reset game variables
            availablePlayers = [player1, player2, player3, player4];
            yourPlayer = null;
            opponents = [];
            yourOpponent = null;

            //clear all game play DIVs
            $("#yourPlayer").empty();
            $("#opponents").empty();
             
            $.each(availablePlayers, function(index, yourPlayer) {
                var availPlayerDiv = $("<div>").attr("id", yourPlayer.id);

                $("#availablePlayers").append(availPlayerDiv);
                $("<div>").html(yourPlayer.name).appendTo(availPlayerDiv);
                $("<div>").append("<img src=" + yourPlayer.img + ">").appendTo(availPlayerDiv);
                $("<div>").append(yourPlayer.healthPoints).appendTo(availPlayerDiv);

              

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