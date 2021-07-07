const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
  user: { type: String, required: true },
  photos: [{ type: String}],
});

module.exports = mongoose.model('Voter', voterSchema);