import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import express from 'express';
import ReactRouter from 'react-router';
import fs from 'fs';
import Stores from './stores/index';

// get autobind ;)
// Get request data working

const app = express();
app.set('views', __dirname + '/pages');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Pull our react bundle from disk and cache it
const bundle = fs.readFileSync('build/bundle.js', 'utf8');
const payload = `
<!DOCTYPE html>
  <html>
    <head>
      <script type="text/javascript">
        ${bundle}
      </script>
    </head>
    <body>
      <div id="root"/>
    </body>
  </html>
`;

// Our main render function, serves our whole webpacked react payload to the user
const render = (req, res) => {
  // Special case for /favicon.ico, to stop repeatedly rerendering our package
  // Can be removed by simply sending an icon
  if (res.url === '/favicon.ico') {
    res.send('');
    return;
  }
  console.log("rendering", req.url);
  res.set('Content-Type', 'text/html');
  res.send(payload);
};
Stores.counter.subscribe(render);

// We'll define api endpoints here or in a different file
// We don't need a wrapper for them (although maybe we will when I get the orm in)
let users = [];
app.get('/api/users', (req, res) => {
  res.send(users);
});

app.use('/api/addUser/:name/:age', (req, res) => {
  users.push({
    name: req.params.name,
    age: parseInt(req.params.age, 10)
  });
  res.end();
});

let i = 0;
app.get('/api/counter', (req, res) => {
  res.send({
    i: i++
  });
});

app.get('/*', render);
app.listen(3000);
