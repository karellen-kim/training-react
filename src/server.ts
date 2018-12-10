import * as express from 'express'

var app = express();
app.use('/', express.static(__dirname + '/../public'));

app.get('/api/item', function (req, res) {
  res.send({
    name : "name",
    description: "description",
  });
});

app.get('/api/items', function (req, res) {
  res.send(["item1", "item2", "item3", "item4", "item5"]);
});