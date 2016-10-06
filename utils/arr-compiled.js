/**
 * Created by igor on 30.05.16.
 */
"use strict";

/**
 * Check parametr be array. if not return empty array
 * @param {Mixed} arr
 */

exports.check = arr => Array.isArray(arr) ? [] : arr;

let check = exports.check;

/**
 * By default the sort method sorts elements alphabetically.
 * To sort numerically just add a new method which handles numeric sorts
 * e.g. [11, 1, 2].sort(utils.sortNumber);
 * @param a
 * @param b
 * @returns {number}
 */
exports.sortNumber = (a, b) => parseFloat(a) - parseFloat(b);
/**
 *  Return share part of the array
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
module.exports.share = (arr1, arr2) => check(arr1).filter(val => check(arr2).indexOf(val) !== -1);

/**
 * Return different part of the array
 * @param	{Array} arr1
 * @param	{Array} arr2
 * @return {Array}
 */
exports.diff = (arr1, arr2) => Array.isArray(arr2) ? check(arr1).filter(i => arr2.indexOf(i) === -1) : [];

/**
 * Clear repeat values
 * @param {Array} arr
 */
exports.unique = arr => check(arr).filter((value, index, self) => self.indexOf(value) === index);

/**
 * Delete all elements whith specified value
 * @param {Array} arr массив для очистки
 * @param {Mixed} value значение
 * @constructor
 */
exports.mvVal = (arr, value) => check(arr).filter(i => arr[i] !== value);

/**
 * Sum of array elements
 * @return {Number}
 */
exports.sum = a => Array.isArray(a) ? a.reduce((pv, cv) => (isNaN(pv) ? 0 : Number(pv)) + (isNaN(cv) ? 0 : Number(cv)), 0) : 0;

/**
 * Return average elements array
 * @param a
 * @returns {number}
 */
exports.avg = a => !Array.isArray(a) || !a.length ? 0 : exports.sum(a) / a.length;

/**
 * Return array. When element is url collect from specified array
 * @param arr
 * @returns {Array}
 */
exports.urls = arr => {
  let r = [];
  arr = arr || [];
  arr = Array.isArray(arr) ? arr : [arr];

  for (let i = 0; i < arr.length; ++i) {
    let el = arr[i] || '';

    el = el.trim().toLowerCase();

    if (el.indexOf('://') === -1) el = 'http://' + el;

    if (/^htt(p|ps)\:\/\/(.*)+\.(.*)+$/.test(el)) r.push(el);
  }

  return r;
};

//# sourceMappingURL=arr-compiled.js.map