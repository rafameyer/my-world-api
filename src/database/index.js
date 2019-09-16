const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;