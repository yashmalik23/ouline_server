const Employee = require('../model/Employee');

module.exports = {
	get: async function(req, res) {
		try {
			const emps = await Employee.find();
			res.json(emps);
		} catch (error) {
			res.json({
				message: error
			});
		}
	},
	add: async function(req, res) {
		const emp = new Employee({
			name: req.body.name
		});

		try {
			const savedEmp = await emp.save();
			res.json(savedEmp);
		} catch (error) {
			res.json({
				messsage: error
			});
		}
	},
	update: async function(req, res) {},
	remove: async function(req, res) {}
};
