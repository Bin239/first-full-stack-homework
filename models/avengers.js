const mongoose = require('mongoose');


const avengerSchema = mongoose.Schema({
  name: String,
  superpowers: [{type: String}]
});


// Making a mongo collection named avengers, The schema,
// is the blueprint for all the documents going into the collection
const Avenger = mongoose.model('Avenger', avengerSchema);

//Author model which has all those methods to perform crud updates
module.exports = Avenger;