/**
 * 初始化全局信息
 */
global.config = {};
global.db     = {};
global.functions = {};

require('./config/');

require('./admin/config/');
require('./api/config/');
require('./web/config/');
