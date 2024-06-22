import express from 'express';

import ViteExpress from 'vite-express';
import { getPokemonSpecimen } from './adapters/pokemon/species';

const app = express();

app.use(express.static('public'));

app.get('/hello', (_, res) => {
  res.send('Hello Vite + TypeScript!');
});

app.get('/pokemon/:id', async (req, res) => {
  const pokeId = Number(req.params.id);
  const exp = Number(req.query['exp'] || 1);

  res.send(await getPokemonSpecimen(pokeId, exp));
});

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening on port 3000...')
);
