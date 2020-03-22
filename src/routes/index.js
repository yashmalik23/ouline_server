const employee = require('./Employee');
const survey = require('./Survey');

module.exports = (router) => {
	employee(router);
	survey(router);
	return router;
};
