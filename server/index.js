const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var petsDB = require('../database/index.js');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/pets', function(req, res) {
//   items.selectAll(function(err, data) {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });

app.listen(3000, function() {
  console.log('PetInfo on port 3000!');
});

const postToDatabase = () => {};
