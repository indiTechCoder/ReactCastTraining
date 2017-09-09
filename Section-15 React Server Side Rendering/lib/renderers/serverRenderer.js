import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from '../app';

export default async () => {
  return {
    initialMarkup: ReactDOMServer.renderToString(<App />),
  };
};
