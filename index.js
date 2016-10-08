/**
 * Created by igor on 30.05.16.
 */

"use strict";

/**
 * Logic includes modules
 * @param {Array|String|undefined|null}type
 * @returns {{}}
 */
module.exports = (type) => {
	let have = [
		'type',
		'date',
		'arr',
		'obj',
		'str'
	];

	let module = {};
	let i = 0;

	if (!type)
		for (; i<have.length; i++)
			module[have[i]] = require('./utils/' + have[i]);

	 else if (Array.isArray(type))
		for (; i< type.length; i++)
			if (~have.indexOf(type[i]))
				module[type[i]] = require('./utils/' + type[i]);
	 else if (~have.indexOf(type))
		module = require('./utils/' + type);

	return module;
};
