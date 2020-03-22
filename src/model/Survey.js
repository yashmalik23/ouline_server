const mongoose = require('mongoose');

const Survey = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	emp: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Employee'
	}
});

module.exports = mongoose.model('Survey', Survey);
