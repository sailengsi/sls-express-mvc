import router from './router/';

module.exports = function(app) {
	app.use(config.router.namespace, router);
}