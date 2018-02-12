var mqtt = require('mqtt')
var request = require('request');
var options = {
  url: 'http://163.180.117.30:8080/proper',
  method:'GET',
  headers:this.headers,
  json: true
};

request(options, (err,res,body) => {
  var ip = 'tcp://'+body['ip'];
  console.log(ip);
  var client  = mqtt.connect(ip);
  client.on('connect', () => {
    client.subscribe('#');
    //client.publish('presence', 'Hello mqtt')''
  });

  client.on('message', (topic, message) => {
    console.log(topic.toString() + "  : " +message.toString());
  });
});
