var bridge = new Bridge({apiKey: 'f99ede2465de4114'});

var funcReady = false;
var connectionsToWaitFor = 1;
var funcTask = '';

var numConnections = 0;
var handleConnection = {
	message: function(msg) {
		console.log("Connection received")
		numConnections++;
		if (numConnections === connectionsToWaitFor && funcReady) {
			bridge.getChannel('function-channel', function(channel) {
			   channel.message(funcTask);
			});
		}
	}
}

bridge.joinChannel('connections', handleConnection);

var vals = []
var messageCB = function(msg) {
  vals.push(msg)
      var total = 0;
      for(var i in vals) {
        total += vals[i];
      }
      document.write(4*total/1000000 + "<br>");
		numConnections--;
		counter--;
		vals = [];
		
}

//var piforcluster = "function calc_pi(message_cb) { starttime = new Date(); console.log('running task '+ starttime.getTime()); var hits = 0; var trials = Math.floor(1000000); for(i = 0; i < trials; i++) {var x = Math.random(); var y = Math.random(); if(x*x + y*y <= 1.0){ hits++; } }endtime = new Date(); console.log('finished task '+ (endtime.getTime() - starttime.getTime())); message_cb(hits); }"

var counter = 0;

var functionExecutor = {
  message: function(msg) {
    counter++;
    console.log(counter);
    if (counter === numConnections) {
      for(var i = 0; i < numConnections; i++) {
        bridge.getService('cluster', function(clusterService, name) {
          clusterService.run(messageCB);
        });
      }
    }
  }
}

bridge.joinChannel('ack-channel', functionExecutor);
bridge.connect();
