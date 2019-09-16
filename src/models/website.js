const mongoose = require('../database');

const WebsiteSchema = new mongoose.Schema({
	nome: {
		type: String,
	},
	url: {
		type: String,
	},
	createAt: {
		type: Date,
		default: Date.now,
	}
})

const Website = mongoose.model('Website', WebsiteSchema);

module.exports = Website;