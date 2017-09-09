module.exports = {
	/**
	 * 路由配置
	 */
	router: {
		namespace: '/admin'
	},

	/**
	 * 加密解密配置
	 */
	crypto: {
		key: 'https://sailengsi.com&https://github.com/sailengsi&https://git.oschina.net/sailengsi'
	},

	/**
	 * 认证配置
	 */
	auth: {
		switch: false
	},

	/**
	 * 数据库配置
	 */
	db: {
		prefix: 'sls_express_admin_',
	}
};