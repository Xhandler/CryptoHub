const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');


app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('build'));
app.set('views', './build');

app.get('/', (req, res) => {
  res.sendFile(path.resolve('/build/index.html'));

});


module.exports = app;
