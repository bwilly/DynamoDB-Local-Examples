// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'local'});

// Create the DynamoDB service object
//var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});



var ddb= new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });

var params = {
  TableName: 'SHIPSHAPE_SENSORS_V3ide',
  Item: {
    'LocationId' : {S: 'Natasha:Dayhead'},
    'Timestamp' : {S: '2020-01-01T23:59:00Z'},
    'PiName' : {S: 'NoPi'},
    'MeasureUnit#Val' : {S: 'C10'}
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
