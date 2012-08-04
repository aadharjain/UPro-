from BridgePython.bridge import Bridge 
bridge = Bridge(api_key='f99ede2465de4114')


def message_cb(msg):
  print msg

forjs = """
handler.run  =  function(message_cb, start, end) {
        var temp = start + end;
        console.log(temp);
        message_cb(temp);
}
"""

channel = bridge.get_channel('function-channel')
channel.message(forjs)

cluster = bridge.get_service('cluster')

cluster.run(message_cb, 1, 3)
cluster.run(message_cb, 5, 3)

bridge.connect()
