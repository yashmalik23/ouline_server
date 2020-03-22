const controller = require("../controller/Survey")

module.exports = (router) => {
	router.route('/survey').get(controller.get).post(controller.add).put(controller.update);
};