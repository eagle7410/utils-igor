/**
 * Created by igor on 30.05.16.
 */

"use strict";

/**
 * Login includes modules
 * @param {mixed}type
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

	if (!type)
		for (let i = 0; i<have.length; ++i)
			module[have[i]] = require('./utils/' + have[i]);

	 else if (Array.isArray(type))
		for (var i = 0, len = type.length; i<len; ++i)
			if (have.indexOf(type[i]) > -1 )
				module[type[i]] = require('./utils/' + type[i]);
	 else
		if (have.indexOf(type) > -1 )
			module = require('./utils/' + type);

	return module;
};
