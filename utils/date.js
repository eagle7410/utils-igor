/**
 * Created by igor on 30.05.16.
 */
"use strict";

/**
 * Return date (now or by unixTime).
 * @param {Number|null|undefined}ts
 */
let unix = (ts) => ts || Date.now();


/**
 * Get time string
 * @example '11:40:46'
 * @param {Number|null|undefined}ts
 */
exports.time = (ts) => (/(\d{2}:\d{2}:\d{2})/.exec(new Date(unix(ts)).toTimeString())[1]);

/**
 * Get date string
 * @example date() => '2014-11-30'
 * @example date(null, null, 'd-m-y') => '30-11-2014'
 * @param {Number|null}shiftDays
 * @param {Number|null|undefined}ts
 * @param {string|null|undefined}format
 * @returns {string}
 */
exports.date = (shiftDays, ts, format) => {

	let now = new Date(unix(ts));

	if (shiftDays) {
		now.setDate(now.getDate() + Number(shiftDays));
	}

	let y = now.getFullYear(),
		m = now.getMonth() + 1,
		d = now.getDate();

	return (format || 'y-m-d').replace('y', y).replace('m', (m >= 10 ? m : '0' + m)).replace('d', d >= 10 ? d : '0' + d);
};

/**
 * * Get date time string
 * @example '2014-11-30 11:40:46'
 * @example dateTime() this work
 * @param {Number|null|undefined}shiftDays
 * @param {Number|null|undefined}ts
 * @param {String|null|undefined}format
 */
exports.dateTime = (shiftDays, ts, format) => exports.date(shiftDays, ts, format) + ' ' + exports.time(ts);

/**
 * Be round up or down
 * @param {Number}number
 * @param {boolean|null}up
 */
let round = (number, up) => Math[(up||false) ? 'round' : 'floor'](number);


/**
 * unix-time to seconds
 * @example 1417323330
 * @param {Number|null|undefined}ts
 * @param {boolean|null}up
 */
exports.tsToSec = (ts, up) => round(((ts || Date.now()) / 1000), up );

/**
 * unix-time to minutes
 * @example 23622056
 * @param {Number|null|undefined}ts
 * @param {boolean|null}up
 */
exports.tsToMin = (ts, up) => round( ((ts || Date.now()) / 60000) , up);


/**
 * seconds to unix-time
 * @example 1417323330
 * @param {Number}sec
 */
exports.secToTs = (sec) => sec * 1000;

/**
 * minutes to unix-time
 * @example 23622056
 * @param {Number}min
 */
exports.minToTs = (min) => min * 60000;
