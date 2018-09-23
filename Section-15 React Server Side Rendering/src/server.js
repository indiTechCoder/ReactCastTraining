import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app/index';
import template from './template';

require('babel/register');


const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(UsersFactory);

  var application = React.createFactory(require('./app/index'));

  var generated = React.renderToString(application());

  res.send(template({
    title: 'Hello World from the server',
    reactOutput:generated
  }));

});

server.listen(8080);
console.log('listening');
