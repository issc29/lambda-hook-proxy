'use strict';
console.log('Loading event');

var request = require('request');
require('request-debug')(request);

exports.handler = function(event, context, callback) {
  var endpoint = process.env.ENDPOINT;

  var options = {
    url: endpoint,
    method: 'POST',
    headers: event.headers,
    body: event.body
  }

  request(options, function (error, response, body) {

    var status = {
    "isBase64Encoded": false,
    "statusCode": response.statusCode,
    "headers": response.headers,
    "body": response.body
    }

    callback(null, status);

  })
};
