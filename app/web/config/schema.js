db.web.schema.hasTable(config.web.db.prefix+'user').then(exis=>{
	if(!exis){
		db.web.schema.createTable(config.web.db.prefix+'user',table=>{
			table.increments('id').primary();
			table.string('username',26).collate('utf8_general_ci');
			table.string('email',32).collate('utf8_general_ci');
			table.string('password',226).collate('utf8_general_ci');
			table.string('token',226).collate('utf8_general_ci');
			table.timestamp('create_time').defaultTo(db.api.fn.now());
		}).then(()=>{
			let init_userinfo={
				'username':'sailengsi',
				'password':functions.common.encryptByDES('123456',config.web.crypto.key),
			};
			init_userinfo.token=functions.common.encryptByDES(init_userinfo.password,init_userinfo.password);
			db.web(config.web.db.prefix+'user').insert(init_userinfo).then(res=>{
				console.log('web config init schema success');
				console.log(res)
			}).catch(err=>{
				console.log('web config init schema success');
				console.log(err);
			});
		}).catch(e=>{
			console.log(e);
		});
	}
});


db.web.schema.hasTable(config.web.db.prefix+'article').then(exis=>{
	if(!exis){
		db.web.schema.createTable(config.web.db.prefix+'article',table=>{
			table.increments('id').primary();
			table.integer('uid');
			table.string('title',26).collate('utf8_general_ci');
			table.text('content','longtext').collate('utf8_general_ci');
			table.timestamp('create_time').defaultTo(db.web.fn.now());
		}).catch(e=>{
			console.log(e);
		});
	}
});