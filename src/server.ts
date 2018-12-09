import * as express from 'express'

var app = express();
app.use('/', express.static(__dirname + '/../public'));