const controller = require('../controller/Employee');

module.exports = (router) => {
	router.route('/employee').get(controller.get).post(controller.add).put(controller.update).delete(controller.remove);
};
