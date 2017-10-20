import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import express from 'express';
import ReactRouter from 'react-router';
import fs from 'fs';
import Stores from './stores/index';

// get autobind ;)

const app = express();
app.set('views', __dirname + '/pages');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const bundle = fs.readFileSync('build/bundle.js', 'utf8');

const render = (req, res) => {
  if (res.url === '/favicon.ico') {
    res.send('');
    return;
  }
  console.log("rendering", req.url);
  res.set('Content-Type', 'text/html');
  res.send(`
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
`);
};
//Stores.counter.subscribe(render);

app.get('/', render);
app.listen(3000);
