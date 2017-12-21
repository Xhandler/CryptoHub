const express = require('express');
const app = express();

app.use(express.static('build'));
app.set('views', './build');

app.get('/', () => {
  res.sendFile(`${process.cwd}/build/index.html`)
});
app.listen(2400, () => {
  console.log('Test app listening on port 3000');
});
