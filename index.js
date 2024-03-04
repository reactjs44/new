import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('server is runnint');
});

 const PORT=3000;
app.listen(PORT, () => {
  console.log('Express server initialized');
});
