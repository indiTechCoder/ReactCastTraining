import express from 'express';
import config from './util/config/config';
import serverRenderer from './renderers/serverRenderer';
import { data } from '../lib/state-api/lib/testData.json';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = serverRenderer();
  res.render('index', { "initialContent" : initialContent.initialMarkup  });
});

app.get('/data', (req, res) => {
  res.send(data);
});

const port = config.getPort();

app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`); // eslint-disable-line no-console
});
