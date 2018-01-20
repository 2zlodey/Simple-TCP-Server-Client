var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var messageSchema = new Schema({
  guid: String,
  dateTime: Date
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
