var express = require('express');
var app = express();

const botmatic = require('@botmatic/js-integration')({
  auth: (token) => {
    return Promise.resolve({success: token=="azertyuiopqsdfghjklmwxcvbn"})
  },
  server: app
})

// Tips: you can use regexp for action name.
botmatic.onAction(".*", ({client, data}) => {
  console.log('RECEIVE ACTION')
  return Promise.resolve({data: {action: data.action, type:"action"}});
})

botmatic.onEvent(".*", ({client, data}) => {
  console.log('RECEIVE EVENT')
  return Promise.resolve({data: "ok"});
})

app.listen(3000)
