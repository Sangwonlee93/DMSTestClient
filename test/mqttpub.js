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
  var client = mqtt.connect(ip);
  client.on('connect', () => {
    setInterval(()=>{
        client.publish('testTopic','asdasdasdasdasdasdasdasd');
      }, 10);
  });
});

//client.on('message', (topic, message) => {
  // message is Buffer
//  console.log(topic.toString() + "  : " +message.toString());
//});
