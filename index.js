import express from 'express';

const app = express();

app.get('/new', (req, res) => {
  res.send('new server is runnint');
});

app.get('/', (req, res) => {
  res.send('server is runnint');
});
app.get('/person', (req, res) => {
  res.send('server is runnint');
});


 const PORT=3000;
app.listen(PORT, () => {
  console.log('Express server initialized');
});
