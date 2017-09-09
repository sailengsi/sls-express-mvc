import './common';
import c from './config';
import _ from 'lodash';
config.admin=_.merge({},config.common,c);

if(config.admin.db && config.admin.db.switch===true && config.admin.db.info){
	var knex=require('knex');
	db.admin=knex(config.admin.db.info);

	if(config.admin.db.schema){
		require('./schema');
	}
}