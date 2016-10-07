/**
 * Created by igor on 06.10.16.
 */
"use strict";

let utils = require('./index.js')();

describe('array', () => {
	let test = ['test'],
		testNumber = [1, 4, 2, 3],
		testNumber1 = [1, 2],
		testWithDouble = [1,1,2,2],
		res;

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
describe('type', () => {

	it('isString', (done) => {

		if (!utils.type.isString('sfgf'))
			throw 'String != String';

		if (utils.type.isString(123))
			throw 'No string = String';

		done();

	});

	it('isSet', (done) => {
		let o = {test: 1, test2 : null };

		if (!utils.type.isSet(o.test))
			throw 'Set no set';

		if (utils.type.isSet(o.test2))
			throw 'NULL is Set';

		if (utils.type.isSet(o.test3))
			throw 'Undefined is Set';

		done();
	});

	it('isFn', (done) => {

		if (utils.type.isFn(null))
			throw 'Null is function';

		if (!utils.type.isFn(utils.type.noop))
			throw 'function is no function';

		done();
	});

	it('isObj', (done) => {
		if (utils.type.isObj(null))
			throw 'Null is object';

		if (!utils.type.isObj({}))
			throw 'object is no object';

		done();
	});

	it('beFn', (done) => {
		if (utils.type.beFn(null) != utils.type.noop)
			throw 'No covert';

		done();
	});

	it('cloneVar', (done) => {
		let z = {v :1 };
		let m = (o) => utils.type.cloneVar(o).v = 3;

		m(z);

		if (z.v !== 1) {
			throw 'Be change value';
		}

		done();
	});

});
describe('object', () => {

	it('beRound', (done) => {
		let o = { 'round' : 2.568, prop : 'AAA'};

		utils.obj.beRound(o, 'round', 1);
		utils.obj.beRound(o, 'test', 1);
		utils.obj.beRound(o, 'prop', 1);

		if (o.round !== 2.6)
			throw 'No correct round';

		if (utils.type.isSet(o.test))
			throw 'No correct stability tests 1';

		if (o.prop !== 0)
			throw 'No correct stability tests 2';

		done();
	});

	it('isEmpty', (done) => {
		let e = {};
		let ne = {e : 3};

		if (!utils.obj.isEmpty(e)) {
			throw 'Empty object no enmpty';
		}

		if (utils.obj.isEmpty(ne)) {
			throw 'No empty object is enmpty';
		}

		done();
	});

	it('for', (done) => {
		let o = {p1 : 1 , p2 : 2};

		utils.obj.for(o, (k, v) => o[k] = ++v);

		if (o.p1 !== 2 || o.p2 !== 3) {
			throw 'No correct inc';
		}

		done();
	});

	it('propToArr', (done) => {
		let r = utils.obj.propToArr({p1 : 1, p2 : 2 });

		if (r[0] !== 1 || r[1] !== 2) {
			throw 'No collect';
		}

		done();

	});

	it('getPropToArr', (done) => {
		let r = utils.obj.getPropToArr([ {p : 1}, {p : 2}, {z : 3}], 'p');

		if (r[0] !== 1 || r[1] !== 2) {
			throw 'No collect';
		}

		done();

	});

	it('ext', (done) => {
		let r = utils.obj.ext({},{p:1});

		if (r.p !== 1) {
			throw 'No extented';
		}

		done();

	});

	it('urlParams', (done) => {

		if (utils.obj.urlParams({p:1, p2:2}) !== 'p=1&p2=2') {
			throw 'No create query string';
		}

		done();

	});

	it('pathMv', (done) => {
		let o = {p : {p :1}};

		utils.obj.pathMv(o, 'p.p');

		if (!utils.obj.isEmpty(o.p)) {
			throw 'No delet path';
		}

		done();

	});

	it('pathVal', (done) => {
		let o = {p : {p :1}};
		let r  = utils.obj.pathVal(o, 'p.p');

		if (r !== 1) {
			throw 'No correct get';
		}

		r  = utils.obj.pathVal(o, 'p.z');

		if (r) {
			throw 'Get undefined';
		}

		done();

	});

	it('isPathExist', (done) => {
		let o = {p : {p :1}};
		let r  = utils.obj.isPathExist(o, 'p.p');

		if (!r) {
			throw 'No exists path';
		}

		r  = utils.obj.pathVal(o, 'p.z');

		if (r) {
			throw 'No exists path is exists';
		}

		done();

	});

	it('pathCreate', (done) => {
		let o = {};
		let r  = utils.obj.pathCreate(o, 'p.p', 1);

		if (o.p.p !== 1) {
			throw 'No exists path';
		}

		done();

	});

	it('beInObj', (done) => {
		let o = {z : 2};
		utils.obj.beInObj(o, 'p', 1);
		utils.obj.beInObj(o, 'z', 1);

		if (o.p !== 1) {
			throw 'No create';
		}

		if (o.z !== 2) {
			throw 'Change object';
		}

		done();

	});

	it('propInc', (done) => {
		let o = {z : 2};
		utils.obj.propInc(o, 'p', 1);
		utils.obj.propInc(o, 'z');

		if (o.p !== 1) {
			throw 'No create';
		}

		if (o.z !== 3) {
			throw 'No inc';
		}

		done();

	});

	it('keysChange', (done) => {
		let o = {z : 2};
		o = utils.obj.keysChange(o, {z : 'b'});

		if (!o.b) {
			throw 'No change';
		}

		if (o.z) {
			throw 'No remove old';
		}

		done();

	});

	it('arrToObjByKey', (done) => {
		let o = [{z : 2}, {z :3}];
		let r = utils.obj.arrToObjByKey(o, 'z');

		if (r['2'].z != 2 || r['3'].z != 3) {
			throw 'Bab get';
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
