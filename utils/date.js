/**
 * Created by igor on 30.05.16.
 */
"use strict";

/**
 * Return date (now or by unixTime).
 * @param {Number}unixTs
 */
var date = (unixTs) => (unixTs ? new Date(unixTs) : new Date());

/**
 * Get time
 * @example '11:40:46'
 */
exports.time = (unixTs) => (/(\d{2}:\d{2}:\d{2})/.exec(date(unixTs).toTimeString())[1]);
/**
 * Get date
 * @example '2014-11-30'
 */
exports.date = (shiftDays, unixTs) => {

	let now = date(unixTs);

	if (shiftDays) {
		now.setDate(now.getDate() + Number(shiftDays));
	}

	let year = now.getFullYear(),
		month = now.getMonth() + 1; month = (month >= 10 ? month : '0' + month),
		date = now.getDate();

	return year + '-' + month + '-' + (date >= 10 ? date : '0' + date);
};

/**
 * Get date time
 * @example '2014-11-30 11:40:46'
 */
exports.dateTime = function (shiftDays, unixTs) {
	return exports.date(shiftDays, unixTs) + ' ' + exports.time(unixTs);
};

/**
 * unix-time in seconds
 * @example 1417323330
 */
exports.now = function () {
	return Math.round(Date.now() / 1000);
};


/**
 * unix-time in minutes
 * @example 23622056
 */
exports.minute = function () {
	return Math.round(Date.now() / 60000);
};


/**
 * Return date time in russian format
 * (analogue method toLocaleString('ru-RU'))
 * @param d
 * @returns {string}
 */
exports.showTime = function (d) {
	var dt = new Date(new Date(d).getTime());
	var o = {
		yy: dt.getFullYear().toString(),
		mm: (dt.getMonth() + 1).toString(),
		dd: dt.getDate().toString(),
		h:  dt.getHours().toString(),
		m:  dt.getMinutes().toString(),
		s:  dt.getSeconds().toString()
	};

	return ((o.yy.length < 2) ? ('0' + o.dd) : o.dd) + '-' +
		((o.mm.length < 2) ? ('0' + o.mm) : o.mm) + '-' +
		o.yy + ' ' +
		((o.h.length < 2)  ? ('0' + o.h)  : o.h) + '-' +
		((o.m.length < 2)  ? ('0' + o.m)  : o.m) + '-' +
		((o.s.length < 2)  ? ('0' + o.s)  : o.s);
};
