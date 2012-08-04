$(document).ready(function() {

    tb1Mirror = CodeMirror.fromTextArea(document.getElementById("tb1"), {
      mode: "text/javascript",
      matchBrackets: true,
      indentUnit: 4,
      lineNumbers: true,
      lineWrapping: true,
      theme: "ambiance",
    });
  tb1Mirror.setValue( "function calc_pi(message_cb) { starttime = new Date(); console.log('running task '+ starttime.getTime()); var hits = 0; var trials = Math.floor(1000000); for(i = 0; i < trials; i++) {var x = Math.random(); var y = Math.random(); if(x*x + y*y <= 1.0){ hits++; } }endtime = new Date(); console.log('finished task '+ (endtime.getTime() - starttime.getTime())); message_cb(hits); }")


  $("#myForm").submit(function(e) {
    e.preventDefault();

    fd = $(this).serializeArray();
    connectionsToWaitFor = parseInt(fd[0].value);
    funcTask = tb1Mirror.getValue();
    funcReady = true;

    // Clear Values From Fields
    tb1Mirror.setValue("")
    $("#nodes").val("")
  })

})
