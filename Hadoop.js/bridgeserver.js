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
      funcReady = false;
			bridge.getChannel('function-channel', function(channel) {
			   channel.message(funcTask);
			});
		}
	}
}

bridge.joinChannel('connections', handleConnection);

var counter = 0;

var functionExecutor = {
  message: function(msg) {
    counter++;
    console.log(counter);
    if (counter === numConnections) {
      for(var i = 0; i < numConnections; i++) {
        bridge.getService('cluster', function(clusterService, name) {
          clusterService.run(connectionsToWaitFor, messageCB);
        });
      }
    }
  }
}

bridge.joinChannel('ack-channel', functionExecutor);
bridge.connect();
