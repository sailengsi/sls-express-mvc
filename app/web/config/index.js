import './common';
import c from './config';
import _ from 'lodash';
config.web=_.merge({},config.common,c);

if(config.web.db && config.web.db.switch===true && config.web.db.info){
	var knex=require('knex');
	db.web=knex(config.web.db.info);

	if(config.web.db.schema){
		require('./schema');
	}
}