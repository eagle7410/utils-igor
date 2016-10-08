# utils-igor
----
### Installation
----

```bash
npm install utils-igor
```

## This utils for nodeJs.
It consists of blocks:
* [arr]  - Array
  * diff - Return different part of the array
  * share -  Return share part of the array
  * sortNumber - By default the sort method sorts elements alphabetically. To sort numerically just add a new method which handles numeric sorts. E.g. [11, 1, 2].sort(utils.sortNumber);
  * unique - Clear repeat values.
  * mvVal - Delete all elements whith specified value.
  * sum - Sum of array elements
  * avg - Return average elements array.
  * urls - Return array. When element is url collect from specified array
* [date] - Date
  * time - Get time. Example '11:40:46'
  * date - Get date. Example '2014-11-30'
  * dateTime - Get date time. Example '2014-11-30 11:40:46'
  * now - Unix-time in seconds
  * minute - Unix-time in minutes
  * showTime - Return date time in russian format. (analogue method toLocaleString('ru-RU'))
* [obj]  - Object
  * arrToObjByKey - Return object. When keys is specified property, value is object from array objects.
  * keysChange - Get properties from obj by keys
  * sort - Return new object when keys be sort
  * propInc -  Increment object property to the specified value.
  * beInObj - Check is set object. If not, it creates it with the specified value.
  * pathCreate - Create path in object.
  * isPathExist - Check exist path in object.
  * pathVal - Get element by path in object.
  * pathMv - Delete element by path in object
  * clone - Return new instance object value
  * urlParams - Serialize object to url params.
  * ext - Properties in add object adding to obj or if properties not exits create him.
  * getPropToArr - Get property from array objects.
  * propToArr - Collect object property to array.
  * for - ForEach for Object fn(key, val)
  * isEmpty - If object have length return false else true
  * beRound - If the object property exists, its rounded.
* [str]  - String
  * base64 - Return string encode or decode in base64
  * salt - Return salt
  * hash - Return string hash
  * up1stChar - Return string, fist char in upper case.
  * regexpEscape - Return string escape for regexp.
  * replaceAll - Replace all specified value in string.
  * htmlEscape - Return string escape for html.
  * oneSpace - Replace spaces to only one space.
  * removeSpecSymbols - Replace all spacial symbols to space.
  * makeKey - It generates key specified length. Used accept symbols
  * decodeURIUniversal - Decoding URI by all methods.
  * boolString - Return value after convert string boolean to boolean. If vl === 'true' then vl = true. Other vl = false
* [type] - Types
  * isString - Check value is string.
  * isSet - Check value is not null or undefined
  * isNm - if value is number return true else false
  * noop - Empty function
  * isFn -  if value is function return true else false
  * isObj - - Check value is object.
  * beFn - if value is not function change to empty function
  * cloneVar - Return new instance value
