/**
 * Created by igor on 06.10.16.
 */
"use strict";

let utils = require('./index.js')();

describe('array', () => {
	let test = ['test'];
	let testNumber = [1, 4, 2, 3];
	let testNumber1 = [1, 2];
	let testWithDouble = [1,1,2,2];
	let res;

	it ( 'check' , (done) => {

		if (utils.arr.check(test) != test) {
			throw 'arr.check return different array';
		}

		if (utils.arr.check(null) == []) {
			throw 'arr.check return no empty array';
		}

		done();
	});

	it ('sortNumber', (done) => {

		res = testNumber.sort(utils.arr.sortNumber);

		let bad = false;
		for (let i = 0 ; i < res.length; i++)
			if (res[i] !== (i+1)) bad = true;

		if (bad) {
			throw 'arr.sortNumber bad sort';
		}

		done();
	});

	it('share', (done) => {

		res = utils.arr.share(testNumber, testNumber1);

		if (res[0] != 1 || res[1] != 2) {
			throw 'arr.share bad';
		}

		done();
	});

	it('diff', (done) => {

		res = utils.arr.diff(testNumber, testNumber1);

		if (res[0] != 3 || res[1] != 4) {
			throw 'arr.diff bad';
		}

		done();

	});

	it('unique', (done) => {

		res = utils.arr.unique(testWithDouble);

		if (res[0] != 1 || res[1] != 2) {
			throw 'arr.unique bad';
		}

		done();

	});


	it('mvVal', (done) => {

		res = utils.arr.mvVal(testWithDouble, 2);

		if (res[0] != 1 || res[1] != 1) {
			throw 'arr.mvVal bad';
		}

		done();

	});

	it('sum', (done) => {

		res = utils.arr.sum(testNumber);

		if (res != 10 ) {
			throw 'arr.sum bad';
		}

		done();

	});

	it('avg', (done) => {

		res = utils.arr.avg(testNumber.concat([0]));

		if (res != 2 ) {
			throw 'arr.avg bad';
		}

		done();

	});

	it('urls', (done) => {

		res = utils.arr.urls(['', 'test.com', 'http://test2.com']);

		if (res[0] != 'http://test.com' || res[1] !=  'http://test2.com' ) {
			throw 'arr.urls bad';
		}

		done();

	});

});

describe('date', () => {
	it('date', (done) => {
		if (utils.date.date(null, 1475825004412) === '2016-10-07') {
			throw 'Bab work ' + utils.date.date(null, 1475825004412);
		}

		done();
	});
});
