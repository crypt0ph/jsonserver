'use strict';
// const express = require('express');
const serverless = require('serverless-http');
const jsonServer = require('json-server');
const request = require('request');
const middlewares = jsonServer.defaults();
const app = jsonServer.create();

app.use(middlewares);
app.use('/.netlify/functions/json/:fileName', (req, res, next) => {
   const { fileName } = req.params;
   const opts = { url: `https://raw.githubusercontent.com/doselect/jsonserver/master/data/${fileName}.json`, json: true }
   request(opts, function (error, response, body) {
      if (error) {
         return res.status(400).send({ error });
      }
      const jsonrouter = jsonServer.router(body);
      jsonrouter(req, res, next);
   });
});

module.exports = app;
module.exports.handler = serverless(app);