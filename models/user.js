const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/mongoPractice`);

const UserSchema = mongoose.Schema({
    name : String,
    image : String,
    email : String
}) ;

module.exports = mongoose.model('Users', UserSchema);