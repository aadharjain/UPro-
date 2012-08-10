$(document).ready(function() {

    tb1Mirror = CodeMirror.fromTextArea(document.getElementById("tb1"), {
      mode: "text/javascript",
      matchBrackets: true,
      indentUnit: 4,
      lineNumbers: true,
      lineWrapping: true,
      theme: "ambiance",
    });
  tb1Mirror.setValue( "function calc_pi(nodes, message_cb) { \n starttime = new Date(); \n console.log('running task '+ starttime.getTime()); \n var hits = 0; \n var trials = Math.floor(3000000/nodes); \n for(i = 0; i < trials; i++) {var x = Math.random(); \n\tvar y = Math.random(); \n\tif(x*x + y*y <= 1.0){ hits++; } } \n endtime = new Date(); \n console.log('finished task '+ (endtime.getTime() - starttime.getTime()));\n message_cb(hits, nodes);\n }")

    tb2Mirror = CodeMirror.fromTextArea(document.getElementById("tb2"), {
      mode: "text/javascript",
      matchBrackets: true,
      indentUnit: 4,
      lineNumbers: true,
      lineWrapping: true,
      theme: "ambiance",
    });

tb2Mirror.setValue("var hits_so_far = 1; \nvar trials_so_far = 1; \nvar total_trials = [0]; \nvar total_hits = [3]; \nvar messageCB = function(msg, nodes) {\n\thits_so_far += msg;\n\ttrials_so_far += (3000000/nodes);\n\ttotal_trials.push(trials_so_far);\n\ttotal_hits.push(4*hits_so_far/trials_so_far);\n\tnumConnections--;\n\tcounter--;\n end = new Date;\n$('#output').html(4*hits_so_far/trials_so_far + ' | milliseconds: ' + (end.getTime() - start.getTime()).toString())}")

  $("#startChart").click(function() {
    startChart(); 
  })

  $("#myForm").submit(function(e) {
    e.preventDefault();

    fd = $(this).serializeArray();
    connectionsToWaitFor = parseInt(fd[0].value);
    funcTask = tb1Mirror.getValue();
    funcAgg = tb2Mirror.getValue();
    window.eval(funcAgg);
    funcReady = true;

    // Clear Values From Fields
    start = new Date();
    $("#output").html("running... "+ start.getTime())
  })

})
