import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('server is runnint');
});

app.listen(3000, () => {
  console.log('Express server initialized');
});