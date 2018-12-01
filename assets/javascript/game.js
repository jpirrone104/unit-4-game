//Ready the DOM on page load

$(document).ready(function() {

//Global Variables

var player1;
var player2;
var player3;
var player4;
var availablePlayers;
var yourPlayer;
var opponents = [];
var yourOpponent;


    function startGame() {
    //Objects holding the players
            var player1 = {
                Id: 1,
                Name: "Automation",
                Health: 160,
                Damage: 15,
                Image: "assets/images/robot.png",
                ScourgePower: "Layoffs",
                WeaponPower: "Renewable Energy",

            };

            var player2 = {
                Id: 2,
                Name: "Consumerism",
                Health: 110,
                Damage: 5,
                Image: "assets/images/kitty.png",
                ScourgePower: "Crushing Debt",
                WeaponPower: "Booming Economy",
            };

            var player3 = {
                Id: 3,
                Name: "Social Media",
                Health: 140,
                Damage: 10,
                Image: "assets/images/wolf.png",
                ScourgePower: "FOMO",
                WeaponPower: "Retweet",
            };

            var player4 = {
                Id: 4,
                Name: "Climate Change",
                Health: 175,
                Damage: 12,
                Image: "assets/images/bunny.jpg",
                ScourgePower: "Catastrophic Weather",
                WeaponPower: "Rising Sea Levels",
             };
            
            //reset game variables
            availablePlayers = [player1, player2, player3, player4];
            yourPlayer = null;
            yourOpponent = null;
            opponents = [];
        

            //clear all game play DIVs
            $("#yourPlayer").empty();
            $("#yourOpponent").empty();
            $("#enemies").empty();

            // function addPlayers() {
                $.each(availablePlayers, function(index, yourPlayer) {

            
                    var availPlayerDiv = $("<div>").addClass("player panel panel-success").attr("Id", yourPlayer.Id);
                    $("#availablePlayers").append(availPlayerDiv);
                    $("<div>").addClass("panel-heading").append(yourPlayer.Name).appendTo(availPlayerDiv);
                    $("<div>").addClass("panel-body").append("<img src=" + yourPlayer.Image + ">").appendTo(availPlayerDiv);
                    $("<div>").addClass("panel-footer").append(yourPlayer.Health).appendTo(availPlayerDiv);
                    

                });
                $(document).on("click", ".player", function() {
                    if(yourPlayer === null) {
                        var charId = parseInt($(this).attr("Id"));

                        yourPlayer = availablePlayers[charId];
                        
                        $.each(availablePlayers, function(index, yourPlayer) {
                            if(yourPlayer.Id !== charId) {
                                $("#"+yourPlayer.Id).removeClass("player").addClass("remaining");
                                alert("#"+yourPlayer.Id);
                            } else {
                                $("#"+yourPlayer.Id).removeClass("player").addClass("inPlay").appendTo("#yourPlayer");
                            }
                            
                        });

                        // yourPlayer = $(this);
                        // $(yourPlayer).attr("class", "inPlay");
                        // $("#yourPlayer").append(yourPlayer);
                        // //append new class to remaining characters
                        // $("#availablePlayers").each(function updateRemaining(){
                        //    var remainingPlayers = $(this).find(".player");
                        //    console.log(remainingPlayers);
                        //     $(remainingPlayers).attr("class","remaining");
                        
                            
                    
                       
                                       
                    }
                        //replace available player div with opponents div
            
                        $(".title").html("<h3>Select a Scourge to Destroy<h3>")
            
                    });

                    $(document).on("click", ".remaining", function () {
                        if(yourOpponent === null) {
                            yourOpponent = $(this);
                            $(yourOpponent).attr("class", "battleMe")
                            $("#yourOpponent").append(yourOpponent);
                            
                            
                            console.log($(this));
                
                            //replace opponents div with remaining opponents div
                            $(".title").html("<h3>Scourges Remaining</h3>")
                
                         
                            //update background color or some other element that shows a difference
                            //center images
                        }
                    });
                    
    }
        
    startGame();  
   
                $(document).on("click", "#fightbutton", function(){
                    if($("#yourPlayer") !== "" && yourPlayer.Health > 0 &&  yourOpponent !== null) {
                        var status = "";
                        if(yourOpponent !== null) {
                            yourOpponent.Health -= yourPlayer.Damage;
                            status += "You used " + yourPlayer.Power + " on " + yourOpponent.Name + " for " + yourPlayer.Damage

                            Alert("You used " + yourPlayer.Power + " on " + yourOpponent.Name + " for " + yourPlayer.Damage);
                        }
                    }
                });


           
                

            
        });

           //Fight alert     





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