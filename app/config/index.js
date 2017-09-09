import './common';
import c from './config';

config.common=c;

if(config.common.db && config.common.db.switch===true && config.common.db.info){
	var knex=require('knex');
	db.common=knex(config.common.db.info);

	if(config.common.db.schema){
		require('./schema');
	}
}
