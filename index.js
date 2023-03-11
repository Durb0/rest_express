const express = require('express');
const app = express();
import { getDistance } from './distance.js';

//allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(process.env.PORT || 3000);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  });

app.get('/distance', (req, res) => {
    console.log(req.query);
    var start_lng = parseFloat(req.query.start_lng);
    var start_lat = parseFloat(req.query.start_lat);
    var finish_lng = parseFloat(req.query.finish_lng);
    var finish_lat = parseFloat(req.query.finish_lat);
    console.log(start_lng, start_lat, finish_lng, finish_lat);
    var distance = getDistance(start_lng, start_lat, finish_lng, finish_lat);
    console.log(distance);
    res.send(distance.toString());
});

module.exports = app;