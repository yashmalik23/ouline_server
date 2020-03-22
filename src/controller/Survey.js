const Survey = require('../model/Survey');

module.exports = {
	add: async function(req, res) {
		const survey = new Survey({
			name: req.body.name,
			emp: req.body.empId
		});
		try {
			const savedSurvey = await survey.save();
			res.json(savedSurvey);
		} catch (error) {
			res.json({
				message: error
			});
		}
	},
	get: async function(req, res) {
		try {
			const survey = await Survey.find();
			res.json(survey);
		} catch (error) {
			res.json({
				message: error
			});
		}
	},
	update: async function(req, res) {
		try {
			const survey = await Survey.findById(req.body.id);
			if (req.body.empId) {
                console.log("updated")
				survey.emp = req.body.empId;
			} else {
                console.log("not updated", req.body)
				survey.emp = undefined;
			}

			const savedSurvey = await survey.save();
			res.json(savedSurvey);
		} catch (error) {
			res.json({
				message: error
			});
		}
	}
};
