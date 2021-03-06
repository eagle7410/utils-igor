"use strict";
exports.arrToObjByKey = (arr, prop, fnIterProp) => {
  var obj = {};if (!Array.isArray(arr) || !prop) return obj;for (let i = 0; i < arr.length; ++i) {
    let el = arr[i];if (el[prop]) {
      let key = el[prop];if (typeof fnIterProp === 'function') key = fnIterProp(key, el);obj[key] = el;
    }
  }return obj;
};exports.keysChange = (obj, keys) => {
  let r = {},
      arKey,
      isNewkey = false;if (isObj(keys)) {
    arKey = Object.keys(keys);isNewkey = true;
  } else arKey = keys;if (obj && Array.isArray(arKey)) {
    for (let i = 0; i < arKey.length; ++i) {
      let k = arKey[i];if (obj[k] || obj[k] === false) r[isNewkey ? keys[k] : k] = obj[k];
    }
  }return r;
};exports.sort = (obj, down) => {
  down = down || false;let r = {},
      keys = Object.keys(obj).sort();if (down) keys.reverse();for (let i = 0; i < keys.length; i++) r[keys[i]] = obj[keys[i]];return r;
};exports.propInc = (obj, prop, byVal) => {
  let val = byVal || 1;val = isNaN(val) ? 1 : Number(val);if (!isObj(obj)) return obj;if (obj[prop] === undefined) obj[prop] = val;else {
    if (isNaN(obj[prop])) return obj;else obj[prop] = Number(obj[prop]);obj[prop] += val;
  }return obj;
};exports.beInObj = (ob, prop, def) => {
  if (def === undefined) def = {};if (ob && !ob[prop]) ob[prop] = def;return ob;
};exports.pathCreate = function (obj, path, def) {
  if (!isSet(path)) {
    path = obj;obj = {};
  }if (typeof path === 'string') path = path.split('.');let b = obj;let len = path.length;if (len === 1) exports.beInObj(b, path[0], def);else if (len > 1) {
    len--;for (let i = 0; i < len; i++) {
      exports.beInObj(b, path[i]);b = b[path[i]];
    }exports.beInObj(b, path[len], def);
  }return obj;
};exports.isPathExist = (obj, path) => {
  let arPath = [];if (typeof path === 'string') arPath = path.split('.');else if (Array.isArray(path)) arPath = path;if (!arPath.length) return true;let p = arPath.shift();return obj.hasOwnProperty(p) || obj[p] !== undefined ? exports.isPathExist(obj[p], arPath) : false;
};exports.pathVal = (obj, path) => {
  if (!isSet(obj) || !isObj(obj)) return undefined;let r = obj;if (typeof path === 'string') path = path.split('.');for (let i = 0; i < path.length; ++i) {
    let next = path[i];if (r[next]) r = r[next];else return undefined;
  }return r;
};exports.pathMv = (obj, path) => {
  if (typeof path === 'string') path = path.split('.');if (!isSet(obj) || !isObj(obj) || !exports.isPathExist(obj, [].concat(path))) return null;path = path.map(el => `["${ el }"]`);eval(`delete obj${ path.join('') }`);return true;
};exports.urlParams = obj => {
  let arr = [];exports.each(obj, (key, val) => arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(val)));return arr.join('&');
};exports.ext = (obj, add) => {
  let j = (obj, op) => {
    exports.each(op, function (k, val) {
      if (isObj(val)) {
        if (!obj[k]) obj[k] = val;else j(obj[k], val);
      } else obj[k] = val;
    });
  };obj = obj || {};if (add) j(obj, add);return obj;
};let isObj = obj => Object.prototype.toString.call(obj) === '[object Object]';let isSet = v => typeof v !== 'undefined' && v !== null;exports.getPropToArr = (arObj, prop) => {
  let r = [];if (!Array.isArray(arObj)) arObj = [arObj];for (let i = 0; i < arObj.length; ++i) if (isSet(arObj[i][prop])) r.push(arObj[i][prop]);return r;
};exports.propToArr = obj => {
  let arr = [];if (!isObj(obj)) return arr;exports.each(obj, key => arr.push(obj[key]));return arr;
};exports.each = (obj, fn, fnSort) => {
  if (isObj(obj)) {
    fn = typeof fn !== 'function' ? function () {} : fn;let keys = Object.keys(obj);if (fnSort) {
      keys = keys.sort(fnSort);
    }for (let i = 0, len = keys.length; i < len; ++i) fn(keys[i], obj[keys[i]]);
  }
};exports.isEmpty = obj => !isObj(obj) || !Object.keys(obj).length;exports.beRound = (ob, prop, round) => {
  if (ob[prop]) ob[prop] = isNaN(ob[prop]) ? 0 : Number(parseFloat(Number(ob[prop])).toFixed(round));return ob;
};

//# sourceMappingURL=obj-compiled.js.map