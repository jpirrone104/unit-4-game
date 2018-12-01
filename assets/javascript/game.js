
// $(document).ready(function() {

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
                scourgeDamage: 25,
                Damage: 5,
                Image: "assets/images/robot.png",
                ScourgePower: "Layoffs",
                WeaponPower: "Renewable Energy",

            };

            var Consumerism = {
                Id: 2,
                Name: "Consumerism",
                Health: 130,
                scourgeDamage: 20,
                Damage: 7,
                Image: "assets/images/kitty.png",
                ScourgePower: "Crushing Debt",
                WeaponPower: "Booming Economy",
            };

            var Social_Media = {
                Id: 3,
                Name: "Social Media",
                Health: 140,
                scourgeDamage: 15,
                Damage: 3,
                Image: "assets/images/wolf.png",
                ScourgePower: "FOMO",
                WeaponPower: "Retweet",
            };

            var Climate_Change = {
                Id: 4,
                Name: "Climate Change",
                Health: 175,
                scourgeDamage: 30,
                Damage: 9,
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
                    console.log(yourPlayer);

                });

         
    }
        
    // startGame();  


    // $(document).on("click", ".player", 
    
    function playerSelect() {
        if(yourPlayer === null) {
            
            var playerId = parseInt($(this).attr("Id"));
           
            
           alert( yourPlayer = availablePlayers[playerId])
            
            
           
            $.each(availablePlayers, function(index, yourPlayer) {
                if(yourPlayer.Id !== playerId) {
                    scourges.push(yourPlayer);
        
                    $("#"+yourPlayer.Id).removeClass("player").addClass("remaining");
                } else {
                    $("#"+yourPlayer.Id).removeClass("player").addClass("inPlay").appendTo("#yourPlayer");
                    
                }
                
            });
        }
            //replace available player div with scourges div

            $(".title").html("<h3>Select a Scourge to Destroy<h3>")
    }

        // });

    // $(document).on("click", ".remaining", 
    
    function remaining() {
        if(yourOpponent === null) {
          
            var scourgeId = parseInt($(this).attr("id"));
            
            yourOpponent = scourges[scourgeId];

            console.log(yourOpponent);

            $.each(scourges, function(index, yourOpponent) {
                if(yourOpponent.Id !== scourgeId) {
                   
                    
                } else {
                    $("#"+yourOpponent.Id).removeClass("remaining").addClass("battleMe").appendTo("#yourOpponent");
                    
                };
                
            
            });
           

            // $("#"+scourgeId).removeClass("remaining").addClass("battleMe").appendTo("#yourOpponent");
           
            // yourOpponent = $(this);
            // $(yourOpponent).attr("class", "battleMe")
            // $("#yourOpponent").append(yourOpponent);

            //replace scourges div with remaining scourges div
            $(".title").html("<h3>Scourges Remaining</h3>")

        }
    }
    // });
   
                // $(document).on("click", "#fightbutton", 
                
                function fight() {
                    if(yourPlayer !== null && yourPlayer.Health > 0 && yourOpponent !== null) {

                        
                            //update health for your Weapon
                            yourPlayer.Health -= yourOpponent.scourgeDamage;
                           

                            //update health on DOM
                            $("#yourPlayer").find(".panel-footer").html("Health: " + yourPlayer.Health);

                             //update status and attack message
                             $("#yourOpponentMessage").html("You used " + yourPlayer.WeaponPower + " for " + yourPlayer.Damage + " damage ");

                                if (yourOpponent.Health >= 0)    {
                                    //update health for your opponent
                                    yourOpponent.Health -= yourPlayer.Damage;
                                    yourPlayer.Damage += yourPlayer.Damage;
                                    

                                    //update health on the DOM 
                                    $("#yourOpponent").find(".panel-footer").html("Health: " + yourOpponent.Health);
                                
                                
                                    //update status and attack messages
                                    $("#yourPlayerMessage").html(yourOpponent.Name + " used " + yourOpponent.ScourgePower + " for " + yourOpponent.scourgeDamage + " damage ");
                                } else {
                                    yourOpponent === null;
                                  
                                    $(".battleMe").hide();
                                    $("#yourOpponentMessage").html("<h3>You are one step closer - Please select another scourge to defeat!</h3>")
                                  
                                    

                                    
                                }
                           


                            if(yourPlayer.Health <= 0) {
                                alert("You Lose!");
                            }
                        }
                    
                    }
                $(document).ready(function(){
                    startGame();
                });

                $(document).on("click", "#fightbutton", function() {
                    fight();
                });

                $(document).on("click", ".remaining", function(){
                    remaining();
                });
           
                $(document).on("click", ".player", function(){
                    playerSelect();
                });

            
        

           //Fight alert     





