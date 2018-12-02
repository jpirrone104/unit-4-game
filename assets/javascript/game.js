
// $(document).ready(function() {

//Global Variables

var Automation;
var Consumerism;
var Social_Media;
var Climate_Change;
var availablePlayers;
var yourPlayer = null;
var yourOpponent = null;
var wins = 0;


    function startGame() {
    //Objects holding the players
            var Automation = {
                Id: 0,
                Name: "Automation",
                Health: 150,
                scourgeDamage: 20,
                Damage: 5,
                Image: "assets/images/robot.png",
                ScourgePower: "Layoffs",
                WeaponPower: "Renewable Energy",

            };

            var Consumerism = {
                Id: 1,
                Name: "Consumerism",
                Health: 130,
                scourgeDamage: 25,
                Damage: 7,
                Image: "assets/images/kitty.png",
                ScourgePower: "Crushing Debt",
                WeaponPower: "Booming Economy",
            };

            var Social_Media = {
                Id: 2,
                Name: "Social Media",
                Health: 140,
                scourgeDamage: 15,
                Damage: 3,
                Image: "assets/images/wolf.png",
                ScourgePower: "FOMO",
                WeaponPower: "Retweet",
            };

            var Climate_Change = {
                Id: 3,
                Name: "Climate Change",
                Health: 175,
                scourgeDamage: 30,
                Damage: 7,
                Image: "assets/images/bunny.jpg",
                ScourgePower: "Catastrophic Weather",
                WeaponPower: "Rising Sea Levels",
             };
            
            //reset game variables
            availablePlayers = [Automation, Consumerism, Social_Media, Climate_Change];
            yourPlayer = null;
            yourOpponent = null;
            scourges = [];
            wins = 0;
        

            //clear all game play DIVs
            $("#yourPlayer").empty();
            $("#yourOpponent").empty();
            $("#availablePlayers").empty();
            $("#yourPlayerMessage").empty();
            $("#yourOpponentMessage").empty();
            $("#restart").hide();
            $("#defeated").empty();
            $("#game").show();
            

            // function addPlayers() {
                $.each(availablePlayers, function(index, yourPlayer) {

            
                    var availPlayerDiv = $("<div>").addClass("player panel").attr({data: yourPlayer.Name, id: yourPlayer.Id} );
                    $("#availablePlayers").append(availPlayerDiv);
                    $("<div>").addClass("panel-heading").append(yourPlayer.Name).appendTo(availPlayerDiv);
                    $("<div>").addClass("panel-body").append("<img src=" + yourPlayer.Image + ">").appendTo(availPlayerDiv);
                    $("<div>").addClass("panel-footer").append("Health: " + yourPlayer.Health).appendTo(availPlayerDiv);
                    console.log(yourPlayer);

                });
    }

   
                function winner() {
                    wins = $("#defeated div").length;
                    console.log(wins)
                    if(wins === 12) {
                        $("#game").hide();
                        $("#restart").show();
                        alert("You've won the game!");
                        // $("#game").hide();
                        // $("#earth").show();
                       
                    }
                };
                
                function fight() {
                    if((yourPlayer !== null && yourPlayer.Health > 0) && (yourOpponent !== null && yourOpponent.Health > 0) ) {

                            //update health for your Weapon
                            yourPlayer.Health -= yourOpponent.scourgeDamage;
                            //update health on DOM
                            $("#yourPlayer").find(".panel-footer").html("Health: " + yourPlayer.Health);
                            //update status and attack message
                            $("#yourOpponentMessage").html("You used " + yourPlayer.WeaponPower + " for " + yourPlayer.Damage + " damage ");

                            //update health for your opponent
                            yourOpponent.Health -= yourPlayer.Damage;
                            //update health on the DOM 
                            $("#yourOpponent").find(".panel-footer").html("Health: " + yourOpponent.Health);
                            //update status and attack messages
                            $("#yourPlayerMessage").html(yourOpponent.Name + " used " + yourOpponent.ScourgePower + " for " + yourOpponent.scourgeDamage + " damage ");

                                    //update your attack damage for next hit
                                    yourPlayer.Damage += yourPlayer.Damage;
                                    console.log(yourPlayer.Health);
                                    console.log(yourOpponent.Health);

                                } else if (yourOpponent.Health <= 0 && yourPlayer.Health > 0) {
                                    console.log(yourOpponent);
                                    $("#"+yourOpponent.Id).removeClass("battleMe").addClass("defeated").appendTo("#defeated");
                                    $("#yourPlayerMessage").html("");
                                    $("#yourOpponentMessage").html("<h3>You are one step closer - Please select another scourge to defeat!</h3>");
                                    yourOpponent = null;
                                    console.log(yourOpponent);
                                    winner();
                                    
                                }
                            if(yourPlayer.Health <= 0) {
                                $("#game").hide();
                                $("#restart").show();
                                alert("Oh No....you lose!");
                                
                                

                            }
                           
                        }
                    
                    
                $(document).ready(function(){
                    startGame();
                });

              
               
                $(document).on("click", ".player", function(){
                    if(yourPlayer === null) {
            
                        var playerId = parseInt($(this).attr("Id"));
                        yourPlayer = availablePlayers[playerId];
                        console.log(playerId);
                       
                        $.each(availablePlayers, function(index, yourPlayer) {
                            if(yourPlayer.Id !== playerId) {
                                // scourges.push(yourPlayer);
                             
                                ($(this).attr("id"));
                                $("#"+yourPlayer.Id).removeClass("player").addClass("remaining");
                            } else {
                                $("#"+yourPlayer.Id).removeClass("player").addClass("inPlay").appendTo("#yourPlayer");
                                
                            }
                            
                        });
                    }
                        //replace available player div with scourges div
            
                        $(".title").html("<h3>Select a Scourge to Destroy<h3>");
                    
                });
   
                $(document).on("click", ".remaining", function(){
                    if(yourOpponent === null) {
                        console.log("pickMe");

                        

                        var scourgeId = parseInt($(this).attr("id"));
                        yourOpponent = availablePlayers[scourgeId];
                        
                        console.log(scourgeId);
                        console.log(yourOpponent);
            
                        $.each(availablePlayers, function(index, yourOpponent) {
                            if(yourOpponent.Id !== scourgeId) {
                               
                                
                            } else {
                                $("#"+yourOpponent.Id).removeClass("remaining").addClass("battleMe").appendTo("#yourOpponent");
                                $("#yourOpponentMessage").html("")
                                $(".battleMe").show();
                                
                            };
                        
                        });
                        $(".title").html("<h3>Scourges Remaining</h3>")
                    }
            });

            $(document).on("click", "#fightbutton", function() {
                // if((yourPlayer !== null && yourPlayer.Health > 0) && (yourOpponent !== null && yourOpponent.Health > 0)){
                //     fight(); 
                // }
                fight();
               
            });

            $(document).on("click", "#restart", function() {
                // if((yourPlayer !== null && yourPlayer.Health > 0) && (yourOpponent !== null && yourOpponent.Health > 0)){
                //     fight(); 
                // }
                startGame();
               
            });






