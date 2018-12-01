//Ready the DOM on page load

$(document).ready(function() {

//Global Variables

var Automation;
var Consumerism;
var Social_Media;
var Climate_Change;
var availablePlayers;
var yourPlayer = null;
var scourges = [];
var yourOpponent = null;
var wins = 0;


    function startGame() {
    //Objects holding the players
            var Automation = {
                Id: 1,
                Name: "Automation",
                Health: 150,
                Damage: 25,
                Image: "assets/images/robot.png",
                ScourgePower: "Layoffs",
                WeaponPower: "Renewable Energy",

            };

            var Consumerism = {
                Id: 2,
                Name: "Consumerism",
                Health: 130,
                Damage: 30,
                Image: "assets/images/kitty.png",
                ScourgePower: "Crushing Debt",
                WeaponPower: "Booming Economy",
            };

            var Social_Media = {
                Id: 3,
                Name: "Social Media",
                Health: 140,
                Damage: 20,
                Image: "assets/images/wolf.png",
                ScourgePower: "FOMO",
                WeaponPower: "Retweet",
            };

            var Climate_Change = {
                Id: 4,
                Name: "Climate Change",
                Health: 175,
                Damage: 35,
                Image: "assets/images/bunny.jpg",
                ScourgePower: "Catastrophic Weather",
                WeaponPower: "Rising Sea Levels",
             };
            
            //reset game variables
            availablePlayers = [Automation, Consumerism, Social_Media, Climate_Change];
            yourPlayer = null;
            yourOpponent = null;
            scourges = [];
        

            //clear all game play DIVs
            $("#yourPlayer").empty();
            $("#yourOpponent").empty();
            $("#enemies").empty();

            // function addPlayers() {
                $.each(availablePlayers, function(index, yourPlayer) {

            
                    var availPlayerDiv = $("<div>").addClass("player panel").attr({data: yourPlayer.Name, id: yourPlayer.Id} );
                    $("#availablePlayers").append(availPlayerDiv);
                    $("<div>").addClass("panel-heading").append(yourPlayer.Name).appendTo(availPlayerDiv);
                    $("<div>").addClass("panel-body").append("<img src=" + yourPlayer.Image + ">").appendTo(availPlayerDiv);
                    $("<div>").addClass("panel-footer").append("Health: " + yourPlayer.Health).appendTo(availPlayerDiv);
                    

                });
                $(document).on("click", ".player", function() {
                    if(yourPlayer === null) {
                        
                        var playerId = parseInt($(this).attr("Id"));
                       
                        
                        yourPlayer = availablePlayers[playerId];
                        
                       
                        $.each(availablePlayers, function(index, yourPlayer) {
                            if(yourPlayer.Id !== playerId) {
                                scourges.push(yourPlayer);
                                console.log(scourges);
                                $("#"+yourPlayer.Id).removeClass("player").addClass("remaining");
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
                        //replace available player div with scourges div
            
                        $(".title").html("<h3>Select a Scourge to Destroy<h3>")
            
                    });

                    $(document).on("click", ".remaining", function () {
                        if(yourOpponent === null) {

                            var scourgeId = parseInt($(this).attr("id"));
                            
                            yourOpponent = availablePlayers[scourgeId];
                            console.log($(this));
						    $("#"+scourgeId).removeClass("remaining").addClass("battleMe").appendTo("#yourOpponent");
                            // yourOpponent = $(this);
                            // $(yourOpponent).attr("class", "battleMe")
                            // $("#yourOpponent").append(yourOpponent);
  
                            //replace scourges div with remaining scourges div
                            $(".title").html("<h3>Scourges Remaining</h3>")
                
                        }
                    });
                    
    }
        
    startGame();  
   
                $(document).on("click", "#fightbutton", function(){
                    if(yourPlayer !== null && yourPlayer.Health > 0 && yourOpponent !== null) {

                        
                            //update health for your Weapon
                            yourPlayer.Health -= yourOpponent.Damage;
                           

                            //update health on DOM
                            $("#yourPlayer").find(".panel-footer").html("Health: " + yourPlayer.Health);

                             //update status and attack message
                             $("#yourOpponentMessage").html("You used " + yourPlayer.WeaponPower + " for " + yourPlayer.Damage + " damage ");

                                if (yourOpponent.Health >= 0 && wins < 3)    {
                                    //update health for your opponent
                                    yourOpponent.Health -= yourPlayer.Damage;

                                    //update health on the DOM 
                                    $("#yourOpponent").find(".panel-footer").html("Health: " + yourOpponent.Health);
                                
                                
                                    //update status and attack messages
                                    $("#yourPlayerMessage").html(yourOpponent.Name + " used " + yourOpponent.ScourgePower + " for " + yourOpponent.Damage + " damage ");
                                } else {
                                    $("#yourOpponent").hide();
                                    $("#scourge").hide();
                                    $("#yourOpponentMessage").html("<h3>You are one step closer - Please select another scourge to defeat!</h3>")
                                    wins++
                                    alert(wins);
                                }


                            if(yourPlayer.Health <= 0) {
                                alert("You Lose!");
                            }
                        }
                    
                });


           
                

            
        });

           //Fight alert     





