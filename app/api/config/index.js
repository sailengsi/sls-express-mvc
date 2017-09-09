import './common';
import c from './config';
import _ from 'lodash';
config.api=_.merge({},config.common,c);

if(config.api.db && config.api.db.switch===true && config.api.db.info){
	var knex=require('knex');
	db.api=knex(config.api.db.info);

	if(config.api.db.schema){
		require('./schema');
	}
}