var mongoose = require('mongoose');

var connect = process.env.DATABASE || mongoose.connect('mongodb://root:abc123@ds223063.mlab.com:23063/portfolio', { useNewUrlParser: true });
var database = 'mongodb://root:abc123@ds223063.mlab.com:23063/portfolio';
var port = process.env.PORT || 3000;

module.export = {database, connect, port};