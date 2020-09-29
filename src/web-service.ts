import express from 'express';

export function createInstance(): express.Express {
  const app = express();
  const port = 8080;
  app.get('/', (req, res) => {
    res.send('pong!');
  });

  app.listen(port, () => {
    console.log(`starting up on http://localhost:${port}`);
  });
  return app;
}
