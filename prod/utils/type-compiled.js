"use strict";
exports.isString = s => Object.prototype.toString.call(s) === '[object String]';exports.isSet = v => typeof v !== 'undefined' && v !== null;exports.noop = () => {};exports.isFn = f => typeof f === 'function';exports.isObj = o => Object.prototype.toString.call(o) === '[object Object]';exports.beFn = fn => !exports.isFn(fn) ? exports.noop : fn;exports.cloneVar = v => {
  let tp;if (Array.isArray(v)) {
    tp = [];v.forEach(el => tp.push(el));
  } else if (exports.isNm(v)) tp = 0 + v;else if (exports.isObj(v)) {
    tp = {};Object.keys(v).forEach(k => tp[k] = v[k]);
  } else if (exports.isString(v)) {
    tp = '' + v;
  }return tp || null;
};exports.isNm = n => typeof n === 'number';

//# sourceMappingURL=type-compiled.js.map