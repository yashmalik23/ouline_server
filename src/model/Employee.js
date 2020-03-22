const mongoose = require('mongoose');

const Employee = mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Employee', Employee);
