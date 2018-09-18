var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pets');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var petSchema = mongoose.Schema({
  name: { type: String, required: true },
  ownerName: { type: String, required: true },
  type: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String, required: true },
  sex: { type: String, lowercase: true, enum: ['f', 'm', 'unknown'] },
  color: { type: String, required: true },
  birthdate: Date,
  weight: Number,
  microchipID: String,
  vaccinations: [{ name: { type: String, required: true }, frequency: { type: String, required: true }, lastGiven: Date }],
  medications: [{ name: { type: String, required: true }, use: { type: String, required: true }, dosage: { type: String, required: true }, frequency: String, startDate: Date, endDate: Date }]
});

var Pet = mongoose.model('Pet', petSchema);

var selectAll = function(callback) {
  Pet.find({}, function(err, pets) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, pets);
    }
  });
};

module.exports.selectAll = selectAll;