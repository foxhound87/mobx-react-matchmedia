(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MobXReactMatchMedia"] = factory();
	else
		root["MobXReactMatchMedia"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MatchMediaProvider = exports.setMatchMediaConfig = exports.matchMedia = undefined;
	
	var _matchMedia = __webpack_require__(1);
	
	var _MatchMediaProvider = __webpack_require__(181);
	
	var _MatchMediaProvider2 = _interopRequireDefault(_MatchMediaProvider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.matchMedia = _matchMedia.matchMedia;
	exports.setMatchMediaConfig = _matchMedia.setMatchMediaConfig;
	exports.MatchMediaProvider = _MatchMediaProvider2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setMatchMediaConfig = exports.matchMedia = undefined;
	
	var _matchMediaMock = __webpack_require__(2);
	
	var _matchMediaMock2 = _interopRequireDefault(_matchMediaMock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var matchMedia = _matchMediaMock2.default.create();
	
	var config = null;
	
	var setMatchMediaConfig = function setMatchMediaConfig() {
	  var req = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	  var isClient = typeof window !== 'undefined';
	
	  if (!isClient && req) {
	    config = {
	      type: 'screen',
	      width: req.params.width,
	      height: req.params.height
	    };
	  }
	
	  if (isClient && !req) {
	    config = {
	      type: 'screen',
	      width: window.innerWidth, // eslint-disable-line
	      height: window.innerHeight // eslint-disable-line
	    };
	  }
	
	  if (config) matchMedia.setConfig(config);
	};
	
	exports.matchMedia = matchMedia;
	exports.setMatchMediaConfig = setMatchMediaConfig;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashClone = __webpack_require__(3);
	
	var _lodashClone2 = _interopRequireDefault(_lodashClone);
	
	var _lodashMapValues = __webpack_require__(112);
	
	var _lodashMapValues2 = _interopRequireDefault(_lodashMapValues);
	
	var _lodashForOwn = __webpack_require__(154);
	
	var _lodashForOwn2 = _interopRequireDefault(_lodashForOwn);
	
	var _MediaQueryListMock = __webpack_require__(156);
	
	var _MediaQueryListMock2 = _interopRequireDefault(_MediaQueryListMock);
	
	exports['default'] = {
	
	  create: function create() {
	    var config = {};
	    var createdMqls = {};
	
	    function matchMediaMock(query) {
	
	      var mql = createdMqls[query];
	
	      if (!mql) {
	        mql = new _MediaQueryListMock2['default'](query, function () {
	          return config;
	        });
	        createdMqls[query] = mql;
	      }
	
	      return mql;
	    }
	
	    matchMediaMock.setConfig = function (newConfig) {
	
	      if (!newConfig) {
	        return;
	      }
	
	      var matchBeforeByQuery = (0, _lodashMapValues2['default'])(createdMqls, 'matches');
	
	      config = (0, _lodashClone2['default'])(newConfig) || {};
	
	      (0, _lodashForOwn2['default'])(createdMqls, function (mql, query) {
	
	        if (mql.matches !== matchBeforeByQuery[query]) {
	          mql.callListeners();
	        }
	      });
	    };
	
	    return matchMediaMock;
	  }
	};
	module.exports = exports['default'];
	//# sourceMappingURL=MatchMediaMock.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(4);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_SYMBOLS_FLAG = 4;
	
	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @returns {*} Returns the cloned value.
	 * @see _.cloneDeep
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var shallow = _.clone(objects);
	 * console.log(shallow[0] === objects[0]);
	 * // => true
	 */
	function clone(value) {
	  return baseClone(value, CLONE_SYMBOLS_FLAG);
	}
	
	module.exports = clone;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(5),
	    arrayEach = __webpack_require__(49),
	    assignValue = __webpack_require__(50),
	    baseAssign = __webpack_require__(53),
	    baseAssignIn = __webpack_require__(76),
	    cloneBuffer = __webpack_require__(80),
	    copyArray = __webpack_require__(81),
	    copySymbols = __webpack_require__(82),
	    copySymbolsIn = __webpack_require__(86),
	    getAllKeys = __webpack_require__(90),
	    getAllKeysIn = __webpack_require__(92),
	    getTag = __webpack_require__(93),
	    initCloneArray = __webpack_require__(98),
	    initCloneByTag = __webpack_require__(99),
	    initCloneObject = __webpack_require__(106),
	    isArray = __webpack_require__(61),
	    isBuffer = __webpack_require__(62),
	    isMap = __webpack_require__(108),
	    isObject = __webpack_require__(29),
	    isSet = __webpack_require__(110),
	    keys = __webpack_require__(55);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;
	
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  if (isSet(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }
	
	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys)
	    : (isFlat ? keysIn : keys);
	
	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(6),
	    stackClear = __webpack_require__(14),
	    stackDelete = __webpack_require__(15),
	    stackGet = __webpack_require__(16),
	    stackHas = __webpack_require__(17),
	    stackSet = __webpack_require__(18);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(7),
	    listCacheDelete = __webpack_require__(8),
	    listCacheGet = __webpack_require__(11),
	    listCacheHas = __webpack_require__(12),
	    listCacheSet = __webpack_require__(13);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(9);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(10);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(9);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(9);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(9);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(6);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(6),
	    Map = __webpack_require__(19),
	    MapCache = __webpack_require__(34);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    root = __webpack_require__(25);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(21),
	    getValue = __webpack_require__(33);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(22),
	    isMasked = __webpack_require__(30),
	    isObject = __webpack_require__(29),
	    toSource = __webpack_require__(32);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    isObject = __webpack_require__(29);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24),
	    getRawTag = __webpack_require__(27),
	    objectToString = __webpack_require__(28);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(25);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(26);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(31);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(25);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(35),
	    mapCacheDelete = __webpack_require__(43),
	    mapCacheGet = __webpack_require__(46),
	    mapCacheHas = __webpack_require__(47),
	    mapCacheSet = __webpack_require__(48);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(36),
	    ListCache = __webpack_require__(6),
	    Map = __webpack_require__(19);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(37),
	    hashDelete = __webpack_require__(39),
	    hashGet = __webpack_require__(40),
	    hashHas = __webpack_require__(41),
	    hashSet = __webpack_require__(42);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(38);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(38);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(38);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(38);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(44);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(45);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(44);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(44);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(44);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(51),
	    eq = __webpack_require__(10);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(52);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(54),
	    keys = __webpack_require__(55);
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(50),
	    baseAssignValue = __webpack_require__(51);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(56),
	    baseKeys = __webpack_require__(71),
	    isArrayLike = __webpack_require__(75);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(57),
	    isArguments = __webpack_require__(58),
	    isArray = __webpack_require__(61),
	    isBuffer = __webpack_require__(62),
	    isIndex = __webpack_require__(65),
	    isTypedArray = __webpack_require__(66);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(59),
	    isObjectLike = __webpack_require__(60);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    isObjectLike = __webpack_require__(60);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(25),
	    stubFalse = __webpack_require__(64);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)(module)))

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 65 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	
	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(67),
	    baseUnary = __webpack_require__(69),
	    nodeUtil = __webpack_require__(70);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    isLength = __webpack_require__(68),
	    isObjectLike = __webpack_require__(60);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(26);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;
	
	    if (types) {
	      return types;
	    }
	
	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)(module)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(72),
	    nativeKeys = __webpack_require__(73);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 72 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(74);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(22),
	    isLength = __webpack_require__(68);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(54),
	    keysIn = __webpack_require__(77);
	
	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn(source), object);
	}
	
	module.exports = baseAssignIn;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(56),
	    baseKeysIn = __webpack_require__(78),
	    isArrayLike = __webpack_require__(75);
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	module.exports = keysIn;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29),
	    isPrototype = __webpack_require__(72),
	    nativeKeysIn = __webpack_require__(79);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeysIn;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = nativeKeysIn;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(25);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	
	  buffer.copy(result);
	  return result;
	}
	
	module.exports = cloneBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)(module)))

/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(54),
	    getSymbols = __webpack_require__(83);
	
	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	module.exports = copySymbols;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(84),
	    stubArray = __webpack_require__(85);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(54),
	    getSymbolsIn = __webpack_require__(87);
	
	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}
	
	module.exports = copySymbolsIn;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(88),
	    getPrototype = __webpack_require__(89),
	    getSymbols = __webpack_require__(83),
	    stubArray = __webpack_require__(85);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};
	
	module.exports = getSymbolsIn;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(74);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(91),
	    getSymbols = __webpack_require__(83),
	    keys = __webpack_require__(55);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(88),
	    isArray = __webpack_require__(61);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(91),
	    getSymbolsIn = __webpack_require__(87),
	    keysIn = __webpack_require__(77);
	
	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}
	
	module.exports = getAllKeysIn;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(94),
	    Map = __webpack_require__(19),
	    Promise = __webpack_require__(95),
	    Set = __webpack_require__(96),
	    WeakMap = __webpack_require__(97),
	    baseGetTag = __webpack_require__(23),
	    toSource = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    root = __webpack_require__(25);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    root = __webpack_require__(25);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    root = __webpack_require__(25);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(20),
	    root = __webpack_require__(25);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(100),
	    cloneDataView = __webpack_require__(102),
	    cloneRegExp = __webpack_require__(103),
	    cloneSymbol = __webpack_require__(104),
	    cloneTypedArray = __webpack_require__(105);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case dataViewTag:
	      return cloneDataView(object, isDeep);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return new Ctor;
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return new Ctor;
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	module.exports = initCloneByTag;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(101);
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	module.exports = cloneArrayBuffer;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(25);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(100);
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	module.exports = cloneDataView;


/***/ },
/* 103 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	module.exports = cloneRegExp;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	module.exports = cloneSymbol;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(100);
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	module.exports = cloneTypedArray;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(107),
	    getPrototype = __webpack_require__(89),
	    isPrototype = __webpack_require__(72);
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	module.exports = initCloneObject;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());
	
	module.exports = baseCreate;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMap = __webpack_require__(109),
	    baseUnary = __webpack_require__(69),
	    nodeUtil = __webpack_require__(70);
	
	/* Node.js helper references. */
	var nodeIsMap = nodeUtil && nodeUtil.isMap;
	
	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
	
	module.exports = isMap;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var getTag = __webpack_require__(93),
	    isObjectLike = __webpack_require__(60);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]';
	
	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike(value) && getTag(value) == mapTag;
	}
	
	module.exports = baseIsMap;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsSet = __webpack_require__(111),
	    baseUnary = __webpack_require__(69),
	    nodeUtil = __webpack_require__(70);
	
	/* Node.js helper references. */
	var nodeIsSet = nodeUtil && nodeUtil.isSet;
	
	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
	
	module.exports = isSet;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var getTag = __webpack_require__(93),
	    isObjectLike = __webpack_require__(60);
	
	/** `Object#toString` result references. */
	var setTag = '[object Set]';
	
	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike(value) && getTag(value) == setTag;
	}
	
	module.exports = baseIsSet;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(51),
	    baseForOwn = __webpack_require__(113),
	    baseIteratee = __webpack_require__(116);
	
	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapKeys
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee, 3);
	
	  baseForOwn(object, function(value, key, object) {
	    baseAssignValue(result, key, iteratee(value, key, object));
	  });
	  return result;
	}
	
	module.exports = mapValues;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(114),
	    keys = __webpack_require__(55);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(115);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 115 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(117),
	    baseMatchesProperty = __webpack_require__(134),
	    identity = __webpack_require__(150),
	    isArray = __webpack_require__(61),
	    property = __webpack_require__(151);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(118),
	    getMatchData = __webpack_require__(131),
	    matchesStrictComparable = __webpack_require__(133);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(5),
	    baseIsEqual = __webpack_require__(119);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(120),
	    isObjectLike = __webpack_require__(60);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(5),
	    equalArrays = __webpack_require__(121),
	    equalByTag = __webpack_require__(127),
	    equalObjects = __webpack_require__(130),
	    getTag = __webpack_require__(93),
	    isArray = __webpack_require__(61),
	    isBuffer = __webpack_require__(62),
	    isTypedArray = __webpack_require__(66);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(122),
	    arraySome = __webpack_require__(125),
	    cacheHas = __webpack_require__(126);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(34),
	    setCacheAdd = __webpack_require__(123),
	    setCacheHas = __webpack_require__(124);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ },
/* 124 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ },
/* 125 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24),
	    Uint8Array = __webpack_require__(101),
	    eq = __webpack_require__(10),
	    equalArrays = __webpack_require__(121),
	    mapToArray = __webpack_require__(128),
	    setToArray = __webpack_require__(129);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 128 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(90);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(132),
	    keys = __webpack_require__(55);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 133 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(119),
	    get = __webpack_require__(135),
	    hasIn = __webpack_require__(147),
	    isKey = __webpack_require__(138),
	    isStrictComparable = __webpack_require__(132),
	    matchesStrictComparable = __webpack_require__(133),
	    toKey = __webpack_require__(146);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(136);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(137),
	    toKey = __webpack_require__(146);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(61),
	    isKey = __webpack_require__(138),
	    stringToPath = __webpack_require__(140),
	    toString = __webpack_require__(143);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(61),
	    isSymbol = __webpack_require__(139);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    isObjectLike = __webpack_require__(60);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(141);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(142);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(34);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(144);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(24),
	    arrayMap = __webpack_require__(145),
	    isArray = __webpack_require__(61),
	    isSymbol = __webpack_require__(139);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ },
/* 145 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(139);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(148),
	    hasPath = __webpack_require__(149);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ },
/* 148 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(137),
	    isArguments = __webpack_require__(58),
	    isArray = __webpack_require__(61),
	    isIndex = __webpack_require__(65),
	    isLength = __webpack_require__(68),
	    toKey = __webpack_require__(146);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ },
/* 150 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(152),
	    basePropertyDeep = __webpack_require__(153),
	    isKey = __webpack_require__(138),
	    toKey = __webpack_require__(146);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 152 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(136);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(113),
	    castFunction = __webpack_require__(155);
	
	/**
	 * Iterates over own enumerable string keyed properties of an object and
	 * invokes `iteratee` for each property. The iteratee is invoked with three
	 * arguments: (value, key, object). Iteratee functions may exit iteration
	 * early by explicitly returning `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.3.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 * @see _.forOwnRight
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.forOwn(new Foo, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forOwn(object, iteratee) {
	  return object && baseForOwn(object, castFunction(iteratee));
	}
	
	module.exports = forOwn;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(150);
	
	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}
	
	module.exports = castFunction;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashIncludes = __webpack_require__(157);
	
	var _lodashIncludes2 = _interopRequireDefault(_lodashIncludes);
	
	var _lodashPull = __webpack_require__(168);
	
	var _lodashPull2 = _interopRequireDefault(_lodashPull);
	
	var _cssMediaquery = __webpack_require__(179);
	
	var _cssMediaquery2 = _interopRequireDefault(_cssMediaquery);
	
	var _exenv = __webpack_require__(180);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var MediaQueryListMock = (function () {
	  function MediaQueryListMock(query, getConfig) {
	    _classCallCheck(this, MediaQueryListMock);
	
	    this._getConfig = getConfig;
	    this._query = query;
	    this._listeners = [];
	  }
	
	  _createClass(MediaQueryListMock, [{
	    key: 'addListener',
	    value: function addListener(listener) {
	      if (!_exenv2['default'].canUseDOM) {
	        return;
	      }
	
	      if (!(0, _lodashIncludes2['default'])(this._listeners, listener)) {
	        this._listeners.push(listener);
	      }
	    }
	  }, {
	    key: 'removeListener',
	    value: function removeListener(listener) {
	      (0, _lodashPull2['default'])(this._listeners, listener);
	    }
	  }, {
	    key: 'callListeners',
	    value: function callListeners() {
	      var _this = this;
	
	      this._listeners.forEach(function (listener) {
	        return listener(_this);
	      });
	    }
	  }, {
	    key: 'matches',
	    get: function get() {
	      return _cssMediaquery2['default'].match(this._query, this._getConfig());
	    }
	  }, {
	    key: 'media',
	    get: function get() {
	      return this._query;
	    }
	  }]);
	
	  return MediaQueryListMock;
	})();
	
	exports['default'] = MediaQueryListMock;
	module.exports = exports['default'];
	//# sourceMappingURL=MediaQueryListMock.js.map

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(158),
	    isArrayLike = __webpack_require__(75),
	    isString = __webpack_require__(162),
	    toInteger = __webpack_require__(163),
	    values = __webpack_require__(166);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike(collection) ? collection : values(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
	
	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}
	
	module.exports = includes;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(159),
	    baseIsNaN = __webpack_require__(160),
	    strictIndexOf = __webpack_require__(161);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;


/***/ },
/* 160 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}
	
	module.exports = baseIsNaN;


/***/ },
/* 161 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = strictIndexOf;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(23),
	    isArray = __webpack_require__(61),
	    isObjectLike = __webpack_require__(60);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(164);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(165);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29),
	    isSymbol = __webpack_require__(139);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(167),
	    keys = __webpack_require__(55);
	
	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : baseValues(object, keys(object));
	}
	
	module.exports = values;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(145);
	
	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}
	
	module.exports = baseValues;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(169),
	    pullAll = __webpack_require__(176);
	
	/**
	 * Removes all given values from `array` using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	 * to remove elements from an array by predicate.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {...*} [values] The values to remove.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pull(array, 'a', 'c');
	 * console.log(array);
	 * // => ['b', 'b']
	 */
	var pull = baseRest(pullAll);
	
	module.exports = pull;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(150),
	    overRest = __webpack_require__(170),
	    setToString = __webpack_require__(172);
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}
	
	module.exports = baseRest;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(171);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;


/***/ },
/* 171 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(173),
	    shortOut = __webpack_require__(175);
	
	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);
	
	module.exports = setToString;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(174),
	    defineProperty = __webpack_require__(52),
	    identity = __webpack_require__(150);
	
	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	
	module.exports = baseSetToString;


/***/ },
/* 174 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	module.exports = constant;


/***/ },
/* 175 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;
	
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	
	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	
	module.exports = shortOut;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var basePullAll = __webpack_require__(177);
	
	/**
	 * This method is like `_.pull` except that it accepts an array of values to remove.
	 *
	 * **Note:** Unlike `_.difference`, this method mutates `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pullAll(array, ['a', 'c']);
	 * console.log(array);
	 * // => ['b', 'b']
	 */
	function pullAll(array, values) {
	  return (array && array.length && values && values.length)
	    ? basePullAll(array, values)
	    : array;
	}
	
	module.exports = pullAll;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(145),
	    baseIndexOf = __webpack_require__(158),
	    baseIndexOfWith = __webpack_require__(178),
	    baseUnary = __webpack_require__(69),
	    copyArray = __webpack_require__(81);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * The base implementation of `_.pullAllBy` without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns `array`.
	 */
	function basePullAll(array, values, iteratee, comparator) {
	  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
	      index = -1,
	      length = values.length,
	      seen = array;
	
	  if (array === values) {
	    values = copyArray(values);
	  }
	  if (iteratee) {
	    seen = arrayMap(array, baseUnary(iteratee));
	  }
	  while (++index < length) {
	    var fromIndex = 0,
	        value = values[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
	      if (seen !== array) {
	        splice.call(seen, fromIndex, 1);
	      }
	      splice.call(array, fromIndex, 1);
	    }
	  }
	  return array;
	}
	
	module.exports = basePullAll;


/***/ },
/* 178 */
/***/ function(module, exports) {

	/**
	 * This function is like `baseIndexOf` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOfWith(array, value, fromIndex, comparator) {
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (comparator(array[index], value)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOfWith;


/***/ },
/* 179 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	'use strict';
	
	exports.match = matchQuery;
	exports.parse = parseQuery;
	
	// -----------------------------------------------------------------------------
	
	var RE_MEDIA_QUERY     = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
	    RE_MQ_EXPRESSION   = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
	    RE_MQ_FEATURE      = /^(?:(min|max)-)?(.+)/,
	    RE_LENGTH_UNIT     = /(em|rem|px|cm|mm|in|pt|pc)?$/,
	    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
	
	function matchQuery(mediaQuery, values) {
	    return parseQuery(mediaQuery).some(function (query) {
	        var inverse = query.inverse;
	
	        // Either the parsed or specified `type` is "all", or the types must be
	        // equal for a match.
	        var typeMatch = query.type === 'all' || values.type === query.type;
	
	        // Quit early when `type` doesn't match, but take "not" into account.
	        if ((typeMatch && inverse) || !(typeMatch || inverse)) {
	            return false;
	        }
	
	        var expressionsMatch = query.expressions.every(function (expression) {
	            var feature  = expression.feature,
	                modifier = expression.modifier,
	                expValue = expression.value,
	                value    = values[feature];
	
	            // Missing or falsy values don't match.
	            if (!value) { return false; }
	
	            switch (feature) {
	                case 'orientation':
	                case 'scan':
	                    return value.toLowerCase() === expValue.toLowerCase();
	
	                case 'width':
	                case 'height':
	                case 'device-width':
	                case 'device-height':
	                    expValue = toPx(expValue);
	                    value    = toPx(value);
	                    break;
	
	                case 'resolution':
	                    expValue = toDpi(expValue);
	                    value    = toDpi(value);
	                    break;
	
	                case 'aspect-ratio':
	                case 'device-aspect-ratio':
	                case /* Deprecated */ 'device-pixel-ratio':
	                    expValue = toDecimal(expValue);
	                    value    = toDecimal(value);
	                    break;
	
	                case 'grid':
	                case 'color':
	                case 'color-index':
	                case 'monochrome':
	                    expValue = parseInt(expValue, 10) || 1;
	                    value    = parseInt(value, 10) || 0;
	                    break;
	            }
	
	            switch (modifier) {
	                case 'min': return value >= expValue;
	                case 'max': return value <= expValue;
	                default   : return value === expValue;
	            }
	        });
	
	        return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);
	    });
	}
	
	function parseQuery(mediaQuery) {
	    return mediaQuery.split(',').map(function (query) {
	        query = query.trim();
	
	        var captures    = query.match(RE_MEDIA_QUERY),
	            modifier    = captures[1],
	            type        = captures[2],
	            expressions = captures[3] || '',
	            parsed      = {};
	
	        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
	        parsed.type    = type ? type.toLowerCase() : 'all';
	
	        // Split expressions into a list.
	        expressions = expressions.match(/\([^\)]+\)/g) || [];
	
	        parsed.expressions = expressions.map(function (expression) {
	            var captures = expression.match(RE_MQ_EXPRESSION),
	                feature  = captures[1].toLowerCase().match(RE_MQ_FEATURE);
	
	            return {
	                modifier: feature[1],
	                feature : feature[2],
	                value   : captures[2]
	            };
	        });
	
	        return parsed;
	    });
	}
	
	// -- Utilities ----------------------------------------------------------------
	
	function toDecimal(ratio) {
	    var decimal = Number(ratio),
	        numbers;
	
	    if (!decimal) {
	        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
	        decimal = numbers[1] / numbers[2];
	    }
	
	    return decimal;
	}
	
	function toDpi(resolution) {
	    var value = parseFloat(resolution),
	        units = String(resolution).match(RE_RESOLUTION_UNIT)[1];
	
	    switch (units) {
	        case 'dpcm': return value / 2.54;
	        case 'dppx': return value * 96;
	        default    : return value;
	    }
	}
	
	function toPx(length) {
	    var value = parseFloat(length),
	        units = String(length).match(RE_LENGTH_UNIT)[1];
	
	    switch (units) {
	        case 'em' : return value * 16;
	        case 'rem': return value * 16;
	        case 'cm' : return value * 96 / 2.54;
	        case 'mm' : return value * 96 / 2.54 / 10;
	        case 'in' : return value * 96;
	        case 'pt' : return value * 72;
	        case 'pc' : return value * 72 / 12;
	        default   : return value;
	    }
	}


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(182);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(189);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _mobx = __webpack_require__(195);
	
	var _matchMedia = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var breakpoints = void 0;
	
	var setObservable = function setObservable(observable, obj) {
	  return _mobx.set ? (0, _mobx.set)(observable, obj) : (0, _mobx.extendObservable)(observable, obj);
	};
	
	var MatchMediaProvider = (_temp = _class = function (_Component) {
	  _inherits(MatchMediaProvider, _Component);
	
	  function MatchMediaProvider(props) {
	    _classCallCheck(this, MatchMediaProvider);
	
	    var _this = _possibleConstructorReturn(this, (MatchMediaProvider.__proto__ || Object.getPrototypeOf(MatchMediaProvider)).call(this, props));
	
	    _this.handleResize = function (e) {
	      e.preventDefault();
	      _this.matchBreakpoints();
	    };
	
	    _this.matchBreakpoints = function () {
	      (0, _mobx.runInAction)('match breakpoints', function () {
	        (0, _matchMedia.setMatchMediaConfig)();
	        Object.keys(_this.templates).forEach(function (key) {
	          return _this.updateBreakpoints(key, _this.templates[key]);
	        });
	      });
	    };
	
	    _this.updateBreakpoints = (0, _mobx.action)('update breakpoints', function (key, val) {
	      var match = (0, _matchMedia.matchMedia)(val).matches;
	      setObservable(_this.props.breakpoints, _defineProperty({}, key, match));
	    });
	
	    if (!breakpoints) breakpoints = Object.assign({}, (0, _mobx.toJS)(_this.props.breakpoints));
	    if (!_this.templates) _this.templates = Object.assign({}, (0, _mobx.toJS)(breakpoints));
	    return _this;
	  }
	
	  _createClass(MatchMediaProvider, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this.handleResize); // eslint-disable-line
	      this.matchBreakpoints(); // set initials values
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.handleResize); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props && this.props.children
	      );
	    }
	  }]);
	
	  return MatchMediaProvider;
	}(_react.Component), _class.propTypes = {
	  children: _propTypes2.default.node,
	  breakpoints: _propTypes2.default.object
	}, _temp);
	exports.default = MatchMediaProvider;
	module.exports = exports['default'];

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(184);
	} else {
	  module.exports = __webpack_require__(186);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ },
/* 183 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v16.9.0
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';var h=__webpack_require__(185),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.suspense_list"):60120,ba=n?Symbol.for("react.memo"):
	60115,ca=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");var z="function"===typeof Symbol&&Symbol.iterator;
	function A(a){for(var b=a.message,d="https://reactjs.org/docs/error-decoder.html?invariant="+b,c=1;c<arguments.length;c++)d+="&args[]="+encodeURIComponent(arguments[c]);a.message="Minified React error #"+b+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};
	function D(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}D.prototype.isReactComponent={};D.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw A(Error(85));this.updater.enqueueSetState(this,a,b,"setState")};D.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function E(){}E.prototype=D.prototype;function F(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}var G=F.prototype=new E;
	G.constructor=F;h(G,D.prototype);G.isPureReactComponent=!0;var H={current:null},I={suspense:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,d){var c=void 0,e={},g=null,k=null;if(null!=b)for(c in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:k,props:e,_owner:J.current}}
	function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
	function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
	function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){e=a[k];var f=b+T(e,k);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
	0;!(e=a.next()).done;)e=e.value,f=b+T(e,k++),g+=S(e,f,d,c);else if("object"===e)throw d=""+a,A(Error(31),"[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,"");return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
	function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=H.current;if(null===a)throw A(Error(321));return a}
	var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw A(Error(143));return a}},createRef:function(){return{current:null}},Component:D,PureComponent:F,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
	_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:ca,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:ba,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
	b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,unstable_SuspenseList:aa,createElement:M,cloneElement:function(a,b,d){if(null===a||void 0===a)throw A(Error(267),a);var c=void 0,e=
	h({},a.props),g=a.key,k=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:k,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);
	b.type=a;return b},isValidElement:N,version:"16.9.0",unstable_withSuspenseConfig:function(a,b){var d=I.suspense;I.suspense=void 0===b?null:b;try{a()}finally{I.suspense=d}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:H,ReactCurrentBatchConfig:I,ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ },
/* 185 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.9.0
	 * react.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	
	
	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';
	
	var _assign = __webpack_require__(185);
	var checkPropTypes = __webpack_require__(187);
	
	// TODO: this is special because it gets imported during build.
	
	var ReactVersion = '16.9.0';
	
	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?
	
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	
	var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }
	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }
	  return null;
	}
	
	// Do not require this module directly! Use normal `invariant` calls with
	// template literal strings. The messages will be converted to ReactError during
	// build, and in production they will be minified.
	
	// Do not require this module directly! Use normal `invariant` calls with
	// template literal strings. The messages will be converted to ReactError during
	// build, and in production they will be minified.
	
	function ReactError(error) {
	  error.name = 'Invariant Violation';
	  return error;
	}
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var lowPriorityWarning = function () {};
	
	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	var lowPriorityWarning$1 = lowPriorityWarning;
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warningWithoutStack = function () {};
	
	{
	  warningWithoutStack = function (condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    if (format === undefined) {
	      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (args.length > 8) {
	      // Check before the condition to catch violations early.
	      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
	    }
	    if (condition) {
	      return;
	    }
	    if (typeof console !== 'undefined') {
	      var argsWithFormat = args.map(function (item) {
	        return '' + item;
	      });
	      argsWithFormat.unshift('Warning: ' + format);
	
	      // We intentionally don't use spread (or .apply) directly because it
	      // breaks IE9: https://github.com/facebook/react/issues/13610
	      Function.prototype.apply.call(console.error, console, argsWithFormat);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	
	var warningWithoutStack$1 = warningWithoutStack;
	
	var didWarnStateUpdateForUnmountedComponent = {};
	
	function warnNoop(publicInstance, callerName) {
	  {
	    var _constructor = publicInstance.constructor;
	    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
	    var warningKey = componentName + '.' + callerName;
	    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
	      return;
	    }
	    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
	    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
	  }
	}
	
	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance, callback, callerName) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
	    warnNoop(publicInstance, 'replaceState');
	  },
	
	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
	    warnNoop(publicInstance, 'setState');
	  }
	};
	
	var emptyObject = {};
	{
	  Object.freeze(emptyObject);
	}
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  // If a component has string refs, we will assign a different object later.
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	Component.prototype.isReactComponent = {};
	
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	Component.prototype.setState = function (partialState, callback) {
	  (function () {
	    if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
	      {
	        throw ReactError(Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.'));
	      }
	    }
	  })();
	  this.updater.enqueueSetState(this, partialState, callback, 'setState');
	};
	
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	};
	
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	{
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    Object.defineProperty(Component.prototype, methodName, {
	      get: function () {
	        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	        return undefined;
	      }
	    });
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}
	
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	
	/**
	 * Convenience component with default shallow equality check for sCU.
	 */
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  // If a component has string refs, we will assign a different object later.
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;
	
	// an immutable object with a single mutable value
	function createRef() {
	  var refObject = {
	    current: null
	  };
	  {
	    Object.seal(refObject);
	  }
	  return refObject;
	}
	
	/**
	 * Keeps track of the current dispatcher.
	 */
	var ReactCurrentDispatcher = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};
	
	/**
	 * Keeps track of the current batch's configuration such as how long an update
	 * should suspend for if it needs to.
	 */
	var ReactCurrentBatchConfig = {
	  suspense: null
	};
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};
	
	var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
	
	var describeComponentFrame = function (name, source, ownerName) {
	  var sourceInfo = '';
	  if (source) {
	    var path = source.fileName;
	    var fileName = path.replace(BEFORE_SLASH_RE, '');
	    {
	      // In DEV, include code for a common special case:
	      // prefer "folder/index.js" instead of just "index.js".
	      if (/^index\./.test(fileName)) {
	        var match = path.match(BEFORE_SLASH_RE);
	        if (match) {
	          var pathBeforeSlash = match[1];
	          if (pathBeforeSlash) {
	            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
	            fileName = folderName + '/' + fileName;
	          }
	        }
	      }
	    }
	    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
	  } else if (ownerName) {
	    sourceInfo = ' (created by ' + ownerName + ')';
	  }
	  return '\n    in ' + (name || 'Unknown') + sourceInfo;
	};
	
	var Resolved = 1;
	
	
	function refineResolvedLazyComponent(lazyComponent) {
	  return lazyComponent._status === Resolved ? lazyComponent._result : null;
	}
	
	function getWrappedName(outerType, innerType, wrapperName) {
	  var functionName = innerType.displayName || innerType.name || '';
	  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
	}
	
	function getComponentName(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }
	  {
	    if (typeof type.tag === 'number') {
	      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }
	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }
	  if (typeof type === 'string') {
	    return type;
	  }
	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';
	    case REACT_PORTAL_TYPE:
	      return 'Portal';
	    case REACT_PROFILER_TYPE:
	      return 'Profiler';
	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';
	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';
	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';
	  }
	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        return 'Context.Consumer';
	      case REACT_PROVIDER_TYPE:
	        return 'Context.Provider';
	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');
	      case REACT_MEMO_TYPE:
	        return getComponentName(type.type);
	      case REACT_LAZY_TYPE:
	        {
	          var thenable = type;
	          var resolvedThenable = refineResolvedLazyComponent(thenable);
	          if (resolvedThenable) {
	            return getComponentName(resolvedThenable);
	          }
	          break;
	        }
	    }
	  }
	  return null;
	}
	
	var ReactDebugCurrentFrame = {};
	
	var currentlyValidatingElement = null;
	
	function setCurrentlyValidatingElement(element) {
	  {
	    currentlyValidatingElement = element;
	  }
	}
	
	{
	  // Stack implementation injected by the current renderer.
	  ReactDebugCurrentFrame.getCurrentStack = null;
	
	  ReactDebugCurrentFrame.getStackAddendum = function () {
	    var stack = '';
	
	    // Add an extra top frame while an element is being validated
	    if (currentlyValidatingElement) {
	      var name = getComponentName(currentlyValidatingElement.type);
	      var owner = currentlyValidatingElement._owner;
	      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
	    }
	
	    // Delegate to the injected renderer-specific implementation
	    var impl = ReactDebugCurrentFrame.getCurrentStack;
	    if (impl) {
	      stack += impl() || '';
	    }
	
	    return stack;
	  };
	}
	
	/**
	 * Used by act() to track whether you're inside an act() scope.
	 */
	
	var IsSomeRendererActing = {
	  current: false
	};
	
	var ReactSharedInternals = {
	  ReactCurrentDispatcher: ReactCurrentDispatcher,
	  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
	  ReactCurrentOwner: ReactCurrentOwner,
	  IsSomeRendererActing: IsSomeRendererActing,
	  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
	  assign: _assign
	};
	
	{
	  _assign(ReactSharedInternals, {
	    // These should not be included in production.
	    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
	    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
	    // TODO: remove in React 17.0.
	    ReactComponentTreeHook: {}
	  });
	}
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = warningWithoutStack$1;
	
	{
	  warning = function (condition, format) {
	    if (condition) {
	      return;
	    }
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();
	    // eslint-disable-next-line react-internal/warning-and-invariant-args
	
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
	  };
	}
	
	var warning$1 = warning;
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	
	var specialPropKeyWarningShown = void 0;
	var specialPropRefWarningShown = void 0;
	
	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}
	
	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}
	
	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}
	
	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}
	
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	
	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    });
	    // self and source are DEV only properties.
	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    });
	    // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.
	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }
	
	  return element;
	};
	
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */
	
	
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */
	function jsxDEV(type, config, maybeKey, source, self) {
	  var propName = void 0;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	
	  if (hasValidRef(config)) {
	    ref = config.ref;
	  }
	
	  if (hasValidKey(config)) {
	    key = '' + config.key;
	  }
	
	  // Remaining properties are added to a new props object
	  for (propName in config) {
	    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	      props[propName] = config[propName];
	    }
	  }
	
	  // intentionally not checking if key was set above
	  // this key is higher priority as it's static
	  if (maybeKey !== undefined) {
	    key = '' + maybeKey;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	
	  if (key || ref) {
	    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	    if (key) {
	      defineKeyPropWarningGetter(props, displayName);
	    }
	    if (ref) {
	      defineRefPropWarningGetter(props, displayName);
	    }
	  }
	
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	}
	
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://reactjs.org/docs/react-api.html#createelement
	 */
	function createElement(type, config, children) {
	  var propName = void 0;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;
	
	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  {
	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }
	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	}
	
	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://reactjs.org/docs/react-api.html#createfactory
	 */
	
	
	function cloneAndReplaceKey(oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	
	  return newElement;
	}
	
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://reactjs.org/docs/react-api.html#cloneelement
	 */
	function cloneElement(element, config, children) {
	  (function () {
	    if (!!(element === null || element === undefined)) {
	      {
	        throw ReactError(Error('React.cloneElement(...): The argument must be a React element, but you passed ' + element + '.'));
	      }
	    }
	  })();
	
	  var propName = void 0;
	
	  // Original props are copied
	  var props = _assign({}, element.props);
	
	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;
	
	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;
	
	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    // Remaining properties override existing props
	    var defaultProps = void 0;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  return ReactElement(element.type, key, ref, self, source, owner, props);
	}
	
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */
	function isValidElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	
	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	
	  return '$' + escapedString;
	}
	
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */
	
	var didWarnAboutMaps = false;
	
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}
	
	var POOL_SIZE = 10;
	var traverseContextPool = [];
	function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
	  if (traverseContextPool.length) {
	    var traverseContext = traverseContextPool.pop();
	    traverseContext.result = mapResult;
	    traverseContext.keyPrefix = keyPrefix;
	    traverseContext.func = mapFunction;
	    traverseContext.context = mapContext;
	    traverseContext.count = 0;
	    return traverseContext;
	  } else {
	    return {
	      result: mapResult,
	      keyPrefix: keyPrefix,
	      func: mapFunction,
	      context: mapContext,
	      count: 0
	    };
	  }
	}
	
	function releaseTraverseContext(traverseContext) {
	  traverseContext.result = null;
	  traverseContext.keyPrefix = null;
	  traverseContext.func = null;
	  traverseContext.context = null;
	  traverseContext.count = 0;
	  if (traverseContextPool.length < POOL_SIZE) {
	    traverseContextPool.push(traverseContext);
	  }
	}
	
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;
	
	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }
	
	  var invokeCallback = false;
	
	  if (children === null) {
	    invokeCallback = true;
	  } else {
	    switch (type) {
	      case 'string':
	      case 'number':
	        invokeCallback = true;
	        break;
	      case 'object':
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	        }
	    }
	  }
	
	  if (invokeCallback) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }
	
	  var child = void 0;
	  var nextName = void 0;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (typeof iteratorFn === 'function') {
	      {
	        // Warn about using Maps as children
	        if (iteratorFn === children.entries) {
	          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
	          didWarnAboutMaps = true;
	        }
	      }
	
	      var iterator = iteratorFn.call(children);
	      var step = void 0;
	      var ii = 0;
	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getComponentKey(child, ii++);
	        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
	      }
	      var childrenString = '' + children;
	      (function () {
	        {
	          {
	            throw ReactError(Error('Objects are not valid as a React child (found: ' + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ').' + addendum));
	          }
	        }
	      })();
	    }
	  }
	
	  return subtreeCount;
	}
	
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (typeof component === 'object' && component !== null && component.key != null) {
	    // Explicit key
	    return escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;
	
	  func.call(context, child, bookKeeping.count++);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  releaseTraverseContext(traverseContext);
	}
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;
	
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
	      return c;
	    });
	  } else if (mappedChild != null) {
	    if (isValidElement(mappedChild)) {
	      mappedChild = cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}
	
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  releaseTraverseContext(traverseContext);
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrencount
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children) {
	  return traverseAllChildren(children, function () {
	    return null;
	  }, null);
	}
	
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
	    return child;
	  });
	  return result;
	}
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  (function () {
	    if (!isValidElement(children)) {
	      {
	        throw ReactError(Error('React.Children.only expected to receive a single React element child.'));
	      }
	    }
	  })();
	  return children;
	}
	
	function createContext(defaultValue, calculateChangedBits) {
	  if (calculateChangedBits === undefined) {
	    calculateChangedBits = null;
	  } else {
	    {
	      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
	    }
	  }
	
	  var context = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _calculateChangedBits: calculateChangedBits,
	    // As a workaround to support multiple concurrent renderers, we categorize
	    // some renderers as primary and others as secondary. We only expect
	    // there to be two concurrent renderers at most: React Native (primary) and
	    // Fabric (secondary); React DOM (primary) and React ART (secondary).
	    // Secondary renderers store their context values on separate fields.
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    // Used to track how many concurrent renderers this context currently
	    // supports within in a single renderer. Such as parallel server rendering.
	    _threadCount: 0,
	    // These are circular
	    Provider: null,
	    Consumer: null
	  };
	
	  context.Provider = {
	    $$typeof: REACT_PROVIDER_TYPE,
	    _context: context
	  };
	
	  var hasWarnedAboutUsingNestedContextConsumers = false;
	  var hasWarnedAboutUsingConsumerProvider = false;
	
	  {
	    // A separate object, but proxies back to the original context object for
	    // backwards compatibility. It has a different $$typeof, so we can properly
	    // warn for the incorrect usage of Context as a Consumer.
	    var Consumer = {
	      $$typeof: REACT_CONTEXT_TYPE,
	      _context: context,
	      _calculateChangedBits: context._calculateChangedBits
	    };
	    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
	    Object.defineProperties(Consumer, {
	      Provider: {
	        get: function () {
	          if (!hasWarnedAboutUsingConsumerProvider) {
	            hasWarnedAboutUsingConsumerProvider = true;
	            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
	          }
	          return context.Provider;
	        },
	        set: function (_Provider) {
	          context.Provider = _Provider;
	        }
	      },
	      _currentValue: {
	        get: function () {
	          return context._currentValue;
	        },
	        set: function (_currentValue) {
	          context._currentValue = _currentValue;
	        }
	      },
	      _currentValue2: {
	        get: function () {
	          return context._currentValue2;
	        },
	        set: function (_currentValue2) {
	          context._currentValue2 = _currentValue2;
	        }
	      },
	      _threadCount: {
	        get: function () {
	          return context._threadCount;
	        },
	        set: function (_threadCount) {
	          context._threadCount = _threadCount;
	        }
	      },
	      Consumer: {
	        get: function () {
	          if (!hasWarnedAboutUsingNestedContextConsumers) {
	            hasWarnedAboutUsingNestedContextConsumers = true;
	            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	          }
	          return context.Consumer;
	        }
	      }
	    });
	    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
	    context.Consumer = Consumer;
	  }
	
	  {
	    context._currentRenderer = null;
	    context._currentRenderer2 = null;
	  }
	
	  return context;
	}
	
	function lazy(ctor) {
	  var lazyType = {
	    $$typeof: REACT_LAZY_TYPE,
	    _ctor: ctor,
	    // React uses these fields to store the result.
	    _status: -1,
	    _result: null
	  };
	
	  {
	    // In production, this would just set it on the object.
	    var defaultProps = void 0;
	    var propTypes = void 0;
	    Object.defineProperties(lazyType, {
	      defaultProps: {
	        configurable: true,
	        get: function () {
	          return defaultProps;
	        },
	        set: function (newDefaultProps) {
	          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
	          defaultProps = newDefaultProps;
	          // Match production behavior more closely:
	          Object.defineProperty(lazyType, 'defaultProps', {
	            enumerable: true
	          });
	        }
	      },
	      propTypes: {
	        configurable: true,
	        get: function () {
	          return propTypes;
	        },
	        set: function (newPropTypes) {
	          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
	          propTypes = newPropTypes;
	          // Match production behavior more closely:
	          Object.defineProperty(lazyType, 'propTypes', {
	            enumerable: true
	          });
	        }
	      }
	    });
	  }
	
	  return lazyType;
	}
	
	function forwardRef(render) {
	  {
	    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
	      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
	    } else if (typeof render !== 'function') {
	      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
	    } else {
	      !(
	      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
	      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
	    }
	
	    if (render != null) {
	      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
	    }
	  }
	
	  return {
	    $$typeof: REACT_FORWARD_REF_TYPE,
	    render: render
	  };
	}
	
	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
	}
	
	function memo(type, compare) {
	  {
	    if (!isValidElementType(type)) {
	      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
	    }
	  }
	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: compare === undefined ? null : compare
	  };
	}
	
	function resolveDispatcher() {
	  var dispatcher = ReactCurrentDispatcher.current;
	  (function () {
	    if (!(dispatcher !== null)) {
	      {
	        throw ReactError(Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.'));
	      }
	    }
	  })();
	  return dispatcher;
	}
	
	function useContext(Context, unstable_observedBits) {
	  var dispatcher = resolveDispatcher();
	  {
	    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;
	
	    // TODO: add a more generic warning for invalid values.
	    if (Context._context !== undefined) {
	      var realContext = Context._context;
	      // Don't deduplicate because this legitimately causes bugs
	      // and nobody should be using this in existing code.
	      if (realContext.Consumer === Context) {
	        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
	      } else if (realContext.Provider === Context) {
	        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
	      }
	    }
	  }
	  return dispatcher.useContext(Context, unstable_observedBits);
	}
	
	function useState(initialState) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useState(initialState);
	}
	
	function useReducer(reducer, initialArg, init) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useReducer(reducer, initialArg, init);
	}
	
	function useRef(initialValue) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useRef(initialValue);
	}
	
	function useEffect(create, inputs) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useEffect(create, inputs);
	}
	
	function useLayoutEffect(create, inputs) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useLayoutEffect(create, inputs);
	}
	
	function useCallback(callback, inputs) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useCallback(callback, inputs);
	}
	
	function useMemo(create, inputs) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useMemo(create, inputs);
	}
	
	function useImperativeHandle(ref, create, inputs) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useImperativeHandle(ref, create, inputs);
	}
	
	function useDebugValue(value, formatterFn) {
	  {
	    var dispatcher = resolveDispatcher();
	    return dispatcher.useDebugValue(value, formatterFn);
	  }
	}
	
	var emptyObject$1 = {};
	
	function useResponder(responder, listenerProps) {
	  var dispatcher = resolveDispatcher();
	  {
	    if (responder == null || responder.$$typeof !== REACT_RESPONDER_TYPE) {
	      warning$1(false, 'useResponder: invalid first argument. Expected an event responder, but instead got %s', responder);
	      return;
	    }
	  }
	  return dispatcher.useResponder(responder, listenerProps || emptyObject$1);
	}
	
	// Within the scope of the callback, mark all updates as being allowed to suspend.
	function withSuspenseConfig(scope, config) {
	  var previousConfig = ReactCurrentBatchConfig.suspense;
	  ReactCurrentBatchConfig.suspense = config === undefined ? null : config;
	  try {
	    scope();
	  } finally {
	    ReactCurrentBatchConfig.suspense = previousConfig;
	  }
	}
	
	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */
	
	var propTypesMisspellWarningShown = void 0;
	
	{
	  propTypesMisspellWarningShown = false;
	}
	
	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = getComponentName(ReactCurrentOwner.current.type);
	    if (name) {
	      return '\n\nCheck the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	function getSourceInfoErrorAddendum(source) {
	  if (source !== undefined) {
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	  }
	  return '';
	}
	
	function getSourceInfoErrorAddendumForProps(elementProps) {
	  if (elementProps !== null && elementProps !== undefined) {
	    return getSourceInfoErrorAddendum(elementProps.__source);
	  }
	  return '';
	}
	
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};
	
	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();
	
	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}
	
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;
	
	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	    return;
	  }
	  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
	
	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
	  }
	
	  setCurrentlyValidatingElement(element);
	  {
	    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
	  }
	  setCurrentlyValidatingElement(null);
	}
	
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    if (typeof iteratorFn === 'function') {
	      // Entry iterators used to provide implicit keys,
	      // but now we print a separate warning for them later.
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step = void 0;
	        while (!(step = iterator.next()).done) {
	          if (isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var type = element.type;
	  if (type === null || type === undefined || typeof type === 'string') {
	    return;
	  }
	  var name = getComponentName(type);
	  var propTypes = void 0;
	  if (typeof type === 'function') {
	    propTypes = type.propTypes;
	  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
	  // Note: Memo only checks outer props here.
	  // Inner props are checked in the reconciler.
	  type.$$typeof === REACT_MEMO_TYPE)) {
	    propTypes = type.propTypes;
	  } else {
	    return;
	  }
	  if (propTypes) {
	    setCurrentlyValidatingElement(element);
	    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
	    setCurrentlyValidatingElement(null);
	  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	    propTypesMisspellWarningShown = true;
	    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
	  }
	  if (typeof type.getDefaultProps === 'function') {
	    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}
	
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */
	function validateFragmentProps(fragment) {
	  setCurrentlyValidatingElement(fragment);
	
	  var keys = Object.keys(fragment.props);
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (key !== 'children' && key !== 'key') {
	      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
	      break;
	    }
	  }
	
	  if (fragment.ref !== null) {
	    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
	  }
	
	  setCurrentlyValidatingElement(null);
	}
	
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  var validType = isValidElementType(type);
	
	  // We warn in this case but don't throw. We expect the element creation to
	  // succeed and there will likely be errors in render.
	  if (!validType) {
	    var info = '';
	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	    }
	
	    var sourceInfo = getSourceInfoErrorAddendum(source);
	    if (sourceInfo) {
	      info += sourceInfo;
	    } else {
	      info += getDeclarationErrorAddendum();
	    }
	
	    var typeString = void 0;
	    if (type === null) {
	      typeString = 'null';
	    } else if (Array.isArray(type)) {
	      typeString = 'array';
	    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
	      info = ' Did you accidentally export a JSX literal instead of a component?';
	    } else {
	      typeString = typeof type;
	    }
	
	    warning$1(false, 'React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	  }
	
	  var element = jsxDEV(type, props, key, source, self);
	
	  // The result can be nullish if a mock or a custom function is used.
	  // TODO: Drop this when these are no longer allowed as the type argument.
	  if (element == null) {
	    return element;
	  }
	
	  // Skip key warning if the type isn't valid since our key validation logic
	  // doesn't expect a non-string/function type and can throw confusing errors.
	  // We don't want exception behavior to differ between dev and prod.
	  // (Rendering will throw with a helpful message and as soon as the type is
	  // fixed, the key warnings will appear.)
	  if (validType) {
	    var children = props.children;
	    if (children !== undefined) {
	      if (isStaticChildren) {
	        for (var i = 0; i < children.length; i++) {
	          validateChildKeys(children[i], type);
	        }
	      } else {
	        validateChildKeys(children, type);
	      }
	    }
	  }
	
	  if (props.key !== undefined) {
	    warning$1(false, 'React.jsx: Spreading a key to JSX is a deprecated pattern. ' + 'Explicitly pass a key after spreading props in your JSX call. ' + 'E.g. <ComponentName {...props} key={key} />');
	  }
	
	  if (type === REACT_FRAGMENT_TYPE) {
	    validateFragmentProps(element);
	  } else {
	    validatePropTypes(element);
	  }
	
	  return element;
	}
	
	// These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.
	function jsxWithValidationStatic(type, props, key) {
	  return jsxWithValidation(type, props, key, true);
	}
	
	function jsxWithValidationDynamic(type, props, key) {
	  return jsxWithValidation(type, props, key, false);
	}
	
	function createElementWithValidation(type, props, children) {
	  var validType = isValidElementType(type);
	
	  // We warn in this case but don't throw. We expect the element creation to
	  // succeed and there will likely be errors in render.
	  if (!validType) {
	    var info = '';
	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	    }
	
	    var sourceInfo = getSourceInfoErrorAddendumForProps(props);
	    if (sourceInfo) {
	      info += sourceInfo;
	    } else {
	      info += getDeclarationErrorAddendum();
	    }
	
	    var typeString = void 0;
	    if (type === null) {
	      typeString = 'null';
	    } else if (Array.isArray(type)) {
	      typeString = 'array';
	    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
	      info = ' Did you accidentally export a JSX literal instead of a component?';
	    } else {
	      typeString = typeof type;
	    }
	
	    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	  }
	
	  var element = createElement.apply(this, arguments);
	
	  // The result can be nullish if a mock or a custom function is used.
	  // TODO: Drop this when these are no longer allowed as the type argument.
	  if (element == null) {
	    return element;
	  }
	
	  // Skip key warning if the type isn't valid since our key validation logic
	  // doesn't expect a non-string/function type and can throw confusing errors.
	  // We don't want exception behavior to differ between dev and prod.
	  // (Rendering will throw with a helpful message and as soon as the type is
	  // fixed, the key warnings will appear.)
	  if (validType) {
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }
	  }
	
	  if (type === REACT_FRAGMENT_TYPE) {
	    validateFragmentProps(element);
	  } else {
	    validatePropTypes(element);
	  }
	
	  return element;
	}
	
	function createFactoryWithValidation(type) {
	  var validatedFactory = createElementWithValidation.bind(null, type);
	  validatedFactory.type = type;
	  // Legacy hook: remove it
	  {
	    Object.defineProperty(validatedFactory, 'type', {
	      enumerable: false,
	      get: function () {
	        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	        Object.defineProperty(this, 'type', {
	          value: type
	        });
	        return type;
	      }
	    });
	  }
	
	  return validatedFactory;
	}
	
	function cloneElementWithValidation(element, props, children) {
	  var newElement = cloneElement.apply(this, arguments);
	  for (var i = 2; i < arguments.length; i++) {
	    validateChildKeys(arguments[i], newElement.type);
	  }
	  validatePropTypes(newElement);
	  return newElement;
	}
	
	var hasBadMapPolyfill = void 0;
	
	{
	  hasBadMapPolyfill = false;
	  try {
	    var frozenObject = Object.freeze({});
	    var testMap = new Map([[frozenObject, null]]);
	    var testSet = new Set([frozenObject]);
	    // This is necessary for Rollup to not consider these unused.
	    // https://github.com/rollup/rollup/issues/1771
	    // TODO: we can remove these if Rollup fixes the bug.
	    testMap.set(0, 0);
	    testSet.add(0);
	  } catch (e) {
	    // TODO: Consider warning about bad polyfills
	    hasBadMapPolyfill = true;
	  }
	}
	
	function createFundamentalComponent(impl) {
	  // We use responder as a Map key later on. When we have a bad
	  // polyfill, then we can't use it as a key as the polyfill tries
	  // to add a property to the object.
	  if (true && !hasBadMapPolyfill) {
	    Object.freeze(impl);
	  }
	  var fundamantalComponent = {
	    $$typeof: REACT_FUNDAMENTAL_TYPE,
	    impl: impl
	  };
	  {
	    Object.freeze(fundamantalComponent);
	  }
	  return fundamantalComponent;
	}
	
	function createEventResponder(displayName, responderConfig) {
	  var getInitialState = responderConfig.getInitialState,
	      onEvent = responderConfig.onEvent,
	      onMount = responderConfig.onMount,
	      onUnmount = responderConfig.onUnmount,
	      onOwnershipChange = responderConfig.onOwnershipChange,
	      onRootEvent = responderConfig.onRootEvent,
	      rootEventTypes = responderConfig.rootEventTypes,
	      targetEventTypes = responderConfig.targetEventTypes;
	
	  var eventResponder = {
	    $$typeof: REACT_RESPONDER_TYPE,
	    displayName: displayName,
	    getInitialState: getInitialState || null,
	    onEvent: onEvent || null,
	    onMount: onMount || null,
	    onOwnershipChange: onOwnershipChange || null,
	    onRootEvent: onRootEvent || null,
	    onUnmount: onUnmount || null,
	    rootEventTypes: rootEventTypes || null,
	    targetEventTypes: targetEventTypes || null
	  };
	  // We use responder as a Map key later on. When we have a bad
	  // polyfill, then we can't use it as a key as the polyfill tries
	  // to add a property to the object.
	  if (true && !hasBadMapPolyfill) {
	    Object.freeze(eventResponder);
	  }
	  return eventResponder;
	}
	
	// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
	
	
	// In some cases, StrictMode should also double-render lifecycles.
	// This can be confusing for tests though,
	// And it can be bad for performance in production.
	// This feature flag can be used to control the behavior:
	
	
	// To preserve the "Pause on caught exceptions" behavior of the debugger, we
	// replay the begin phase of a failed component inside invokeGuardedCallback.
	
	
	// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
	
	
	// Gather advanced timing metrics for Profiler subtrees.
	
	
	// Trace which interactions trigger each commit.
	
	
	// Only used in www builds.
	 // TODO: true? Here it might just be false.
	
	// Only used in www builds.
	
	
	// Only used in www builds.
	
	
	// Disable javascript: URL strings in href for XSS protection.
	
	
	// React Fire: prevent the value and checked attributes from syncing
	// with their related DOM properties
	
	
	// These APIs will no longer be "unstable" in the upcoming 16.7 release,
	// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
	
	
	
	
	// See https://github.com/react-native-community/discussions-and-proposals/issues/72 for more information
	// This is a flag so we can fix warnings in RN core before turning it on
	
	
	// Experimental React Flare event system and event components support.
	var enableFlareAPI = false;
	
	// Experimental Host Component support.
	var enableFundamentalAPI = false;
	
	// New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
	var enableJSXTransformAPI = false;
	
	// We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
	// Till then, we warn about the missing mock, but still fallback to a sync mode compatible version
	
	// Temporary flag to revert the fix in #15650
	
	
	// For tests, we flush suspense fallbacks in an act scope;
	// *except* in some of our own tests, where we test incremental loading states.
	
	
	// Changes priority of some events like mousemove to user-blocking priority,
	// but without making them discrete. The flag exists in case it causes
	// starvation problems.
	
	
	// Add a callback property to suspense to notify which promises are currently
	// in the update queue. This allows reporting and tracing of what is causing
	// the user to see a loading state.
	
	
	// Part of the simplification of React.createElement so we can eventually move
	// from React.createElement to React.jsx
	// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md
	
	var React = {
	  Children: {
	    map: mapChildren,
	    forEach: forEachChildren,
	    count: countChildren,
	    toArray: toArray,
	    only: onlyChild
	  },
	
	  createRef: createRef,
	  Component: Component,
	  PureComponent: PureComponent,
	
	  createContext: createContext,
	  forwardRef: forwardRef,
	  lazy: lazy,
	  memo: memo,
	
	  useCallback: useCallback,
	  useContext: useContext,
	  useEffect: useEffect,
	  useImperativeHandle: useImperativeHandle,
	  useDebugValue: useDebugValue,
	  useLayoutEffect: useLayoutEffect,
	  useMemo: useMemo,
	  useReducer: useReducer,
	  useRef: useRef,
	  useState: useState,
	
	  Fragment: REACT_FRAGMENT_TYPE,
	  Profiler: REACT_PROFILER_TYPE,
	  StrictMode: REACT_STRICT_MODE_TYPE,
	  Suspense: REACT_SUSPENSE_TYPE,
	  unstable_SuspenseList: REACT_SUSPENSE_LIST_TYPE,
	
	  createElement: createElementWithValidation,
	  cloneElement: cloneElementWithValidation,
	  createFactory: createFactoryWithValidation,
	  isValidElement: isValidElement,
	
	  version: ReactVersion,
	
	  unstable_withSuspenseConfig: withSuspenseConfig,
	
	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
	};
	
	if (enableFlareAPI) {
	  React.unstable_useResponder = useResponder;
	  React.unstable_createResponder = createEventResponder;
	}
	
	if (enableFundamentalAPI) {
	  React.unstable_createFundamental = createFundamentalComponent;
	}
	
	// Note: some APIs are added with feature flags.
	// Make sure that stable builds for open source
	// don't modify the React object to avoid deopts.
	// Also let's not expose their names in stable builds.
	
	if (enableJSXTransformAPI) {
	  {
	    React.jsxDEV = jsxWithValidation;
	    React.jsx = jsxWithValidationDynamic;
	    React.jsxs = jsxWithValidationStatic;
	  }
	}
	
	
	
	var React$2 = Object.freeze({
		default: React
	});
	
	var React$3 = ( React$2 && React ) || React$2;
	
	// TODO: decide on the top-level export form.
	// This is hacky but makes it work with both Rollup and Jest.
	var react = React$3.default || React$3;
	
	module.exports = react;
	  })();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var printWarning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(188);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);
	
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ },
/* 188 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = __webpack_require__(190);
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(193)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(194)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(191);
	} else {
	  module.exports = __webpack_require__(192);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ },
/* 191 */
/***/ function(module, exports) {

	/** @license React v16.9.0
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
	60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118;function x(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function y(a){return x(a)===m}exports.typeOf=x;exports.AsyncMode=l;
	exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w)};exports.isAsyncMode=function(a){return y(a)||x(a)===l};exports.isConcurrentMode=y;exports.isContextConsumer=function(a){return x(a)===k};exports.isContextProvider=function(a){return x(a)===h};
	exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return x(a)===n};exports.isFragment=function(a){return x(a)===e};exports.isLazy=function(a){return x(a)===t};exports.isMemo=function(a){return x(a)===r};exports.isPortal=function(a){return x(a)===d};exports.isProfiler=function(a){return x(a)===g};exports.isStrictMode=function(a){return x(a)===f};exports.isSuspense=function(a){return x(a)===p};


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.9.0
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	
	
	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	
	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
	}
	
	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var lowPriorityWarning = function () {};
	
	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	var lowPriorityWarning$1 = lowPriorityWarning;
	
	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;
	
	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;
	
	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }
	
	  return undefined;
	}
	
	// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	
	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	
	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactIs = __webpack_require__(190);
	var assign = __webpack_require__(185);
	
	var ReactPropTypesSecret = __webpack_require__(188);
	var checkPropTypes = __webpack_require__(187);
	
	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	
	function emptyFunctionThatReturnsNull() {
	  return null;
	}
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = __webpack_require__(188);
	
	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,
	
	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };
	
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/** MobX - (c) Michel Weststrate 2015 - 2019 - MIT Licensed */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */
	
	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};
	
	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	
	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	
	function __values(o) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	    if (m) return m.call(o);
	    return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	}
	
	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}
	
	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}
	
	var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
	var EMPTY_ARRAY = [];
	Object.freeze(EMPTY_ARRAY);
	var EMPTY_OBJECT = {};
	Object.freeze(EMPTY_OBJECT);
	function getNextId() {
	    return ++globalState.mobxGuid;
	}
	function fail(message) {
	    invariant(false, message);
	    throw "X"; // unreachable
	}
	function invariant(check, message) {
	    if (!check)
	        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
	}
	/**
	 * Prints a deprecation message, but only one time.
	 * Returns false if the deprecated message was already printed before
	 */
	var deprecatedMessages = [];
	function deprecated(msg, thing) {
	    if (process.env.NODE_ENV === "production")
	        return false;
	    if (thing) {
	        return deprecated("'" + msg + "', use '" + thing + "' instead.");
	    }
	    if (deprecatedMessages.indexOf(msg) !== -1)
	        return false;
	    deprecatedMessages.push(msg);
	    console.error("[mobx] Deprecated: " + msg);
	    return true;
	}
	/**
	 * Makes sure that the provided function is invoked at most once.
	 */
	function once(func) {
	    var invoked = false;
	    return function () {
	        if (invoked)
	            return;
	        invoked = true;
	        return func.apply(this, arguments);
	    };
	}
	var noop = function () { };
	function unique(list) {
	    var res = [];
	    list.forEach(function (item) {
	        if (res.indexOf(item) === -1)
	            res.push(item);
	    });
	    return res;
	}
	function isObject(value) {
	    return value !== null && typeof value === "object";
	}
	function isPlainObject(value) {
	    if (value === null || typeof value !== "object")
	        return false;
	    var proto = Object.getPrototypeOf(value);
	    return proto === Object.prototype || proto === null;
	}
	function addHiddenProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: true,
	        configurable: true,
	        value: value
	    });
	}
	function addHiddenFinalProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: false,
	        configurable: true,
	        value: value
	    });
	}
	function isPropertyConfigurable(object, prop) {
	    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
	}
	function assertPropertyConfigurable(object, prop) {
	    if (process.env.NODE_ENV !== "production" && !isPropertyConfigurable(object, prop))
	        fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
	}
	function createInstanceofPredicate(name, clazz) {
	    var propName = "isMobX" + name;
	    clazz.prototype[propName] = true;
	    return function (x) {
	        return isObject(x) && x[propName] === true;
	    };
	}
	/**
	 * Returns whether the argument is an array, disregarding observability.
	 */
	function isArrayLike(x) {
	    return Array.isArray(x) || isObservableArray(x);
	}
	function isES6Map(thing) {
	    return thing instanceof Map;
	}
	function isES6Set(thing) {
	    return thing instanceof Set;
	}
	/**
	 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
	 */
	function getPlainObjectKeys(object) {
	    var enumerables = new Set();
	    for (var key in object)
	        enumerables.add(key); // *all* enumerables
	    Object.getOwnPropertySymbols(object).forEach(function (k) {
	        if (Object.getOwnPropertyDescriptor(object, k).enumerable)
	            enumerables.add(k);
	    }); // *own* symbols
	    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
	    // as there is no efficient iterator that returns *all* properties
	    return Array.from(enumerables);
	}
	function stringifyKey(key) {
	    if (key && key.toString)
	        return key.toString();
	    else
	        return new String(key).toString();
	}
	function getMapLikeKeys(map) {
	    if (isPlainObject(map))
	        return Object.keys(map);
	    if (Array.isArray(map))
	        return map.map(function (_a) {
	            var _b = __read(_a, 1), key = _b[0];
	            return key;
	        });
	    if (isES6Map(map) || isObservableMap(map))
	        return Array.from(map.keys());
	    return fail("Cannot get keys from '" + map + "'");
	}
	function toPrimitive(value) {
	    return value === null ? null : typeof value === "object" ? "" + value : value;
	}
	
	var $mobx = Symbol("mobx administration");
	var Atom = /** @class */ (function () {
	    /**
	     * Create a new atom. For debugging purposes it is recommended to give it a name.
	     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
	     */
	    function Atom(name) {
	        if (name === void 0) { name = "Atom@" + getNextId(); }
	        this.name = name;
	        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
	        this.isBeingObserved = false;
	        this.observers = new Set();
	        this.diffValue = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = exports.IDerivationState.NOT_TRACKING;
	    }
	    Atom.prototype.onBecomeObserved = function () {
	        if (this.onBecomeObservedListeners) {
	            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
	        }
	    };
	    Atom.prototype.onBecomeUnobserved = function () {
	        if (this.onBecomeUnobservedListeners) {
	            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
	        }
	    };
	    /**
	     * Invoke this method to notify mobx that your atom has been used somehow.
	     * Returns true if there is currently a reactive context.
	     */
	    Atom.prototype.reportObserved = function () {
	        return reportObserved(this);
	    };
	    /**
	     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
	     */
	    Atom.prototype.reportChanged = function () {
	        startBatch();
	        propagateChanged(this);
	        endBatch();
	    };
	    Atom.prototype.toString = function () {
	        return this.name;
	    };
	    return Atom;
	}());
	var isAtom = createInstanceofPredicate("Atom", Atom);
	function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
	    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
	    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
	    var atom = new Atom(name);
	    // default `noop` listener will not initialize the hook Set
	    if (onBecomeObservedHandler !== noop) {
	        onBecomeObserved(atom, onBecomeObservedHandler);
	    }
	    if (onBecomeUnobservedHandler !== noop) {
	        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
	    }
	    return atom;
	}
	
	function identityComparer(a, b) {
	    return a === b;
	}
	function structuralComparer(a, b) {
	    return deepEqual(a, b);
	}
	function defaultComparer(a, b) {
	    return Object.is(a, b);
	}
	var comparer = {
	    identity: identityComparer,
	    structural: structuralComparer,
	    default: defaultComparer
	};
	
	var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
	var mobxPendingDecorators = Symbol("mobx pending decorators");
	var enumerableDescriptorCache = {};
	var nonEnumerableDescriptorCache = {};
	function createPropertyInitializerDescriptor(prop, enumerable) {
	    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
	    return (cache[prop] ||
	        (cache[prop] = {
	            configurable: true,
	            enumerable: enumerable,
	            get: function () {
	                initializeInstance(this);
	                return this[prop];
	            },
	            set: function (value) {
	                initializeInstance(this);
	                this[prop] = value;
	            }
	        }));
	}
	function initializeInstance(target) {
	    if (target[mobxDidRunLazyInitializersSymbol] === true)
	        return;
	    var decorators = target[mobxPendingDecorators];
	    if (decorators) {
	        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
	        for (var key in decorators) {
	            var d = decorators[key];
	            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
	        }
	    }
	}
	function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
	    return function decoratorFactory() {
	        var decoratorArguments;
	        var decorator = function decorate(target, prop, descriptor, applyImmediately
	        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
	        // as the instance to apply the decorator to equals the target
	        ) {
	            if (applyImmediately === true) {
	                propertyCreator(target, prop, descriptor, target, decoratorArguments);
	                return null;
	            }
	            if (process.env.NODE_ENV !== "production" && !quacksLikeADecorator(arguments))
	                fail("This function is a decorator, but it wasn't invoked like a decorator");
	            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
	                var inheritedDecorators = target[mobxPendingDecorators];
	                addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
	            }
	            target[mobxPendingDecorators][prop] = {
	                prop: prop,
	                propertyCreator: propertyCreator,
	                descriptor: descriptor,
	                decoratorTarget: target,
	                decoratorArguments: decoratorArguments
	            };
	            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
	        };
	        if (quacksLikeADecorator(arguments)) {
	            // @decorator
	            decoratorArguments = EMPTY_ARRAY;
	            return decorator.apply(null, arguments);
	        }
	        else {
	            // @decorator(args)
	            decoratorArguments = Array.prototype.slice.call(arguments);
	            return decorator;
	        }
	    };
	}
	function quacksLikeADecorator(args) {
	    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
	        (args.length === 4 && args[3] === true));
	}
	
	function deepEnhancer(v, _, name) {
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    if (Array.isArray(v))
	        return observable.array(v, { name: name });
	    if (isPlainObject(v))
	        return observable.object(v, undefined, { name: name });
	    if (isES6Map(v))
	        return observable.map(v, { name: name });
	    if (isES6Set(v))
	        return observable.set(v, { name: name });
	    return v;
	}
	function shallowEnhancer(v, _, name) {
	    if (v === undefined || v === null)
	        return v;
	    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
	        return v;
	    if (Array.isArray(v))
	        return observable.array(v, { name: name, deep: false });
	    if (isPlainObject(v))
	        return observable.object(v, undefined, { name: name, deep: false });
	    if (isES6Map(v))
	        return observable.map(v, { name: name, deep: false });
	    if (isES6Set(v))
	        return observable.set(v, { name: name, deep: false });
	    return fail(process.env.NODE_ENV !== "production" &&
	        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
	}
	function referenceEnhancer(newValue) {
	    // never turn into an observable
	    return newValue;
	}
	function refStructEnhancer(v, oldValue, name) {
	    if (process.env.NODE_ENV !== "production" && isObservable(v))
	        throw "observable.struct should not be used with observable values";
	    if (deepEqual(v, oldValue))
	        return oldValue;
	    return v;
	}
	
	function createDecoratorForEnhancer(enhancer) {
	    invariant(enhancer);
	    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
	        if (process.env.NODE_ENV !== "production") {
	            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
	        }
	        var initialValue = descriptor
	            ? descriptor.initializer
	                ? descriptor.initializer.call(target)
	                : descriptor.value
	            : undefined;
	        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
	    });
	    var res = 
	    // Extra process checks, as this happens during module initialization
	    typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production"
	        ? function observableDecorator() {
	            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
	            // and simply return the created prop decorator
	            if (arguments.length < 2)
	                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
	            return decorator.apply(null, arguments);
	        }
	        : decorator;
	    res.enhancer = enhancer;
	    return res;
	}
	
	// Predefined bags of create observable options, to avoid allocating temporarily option objects
	// in the majority of cases
	var defaultCreateObservableOptions = {
	    deep: true,
	    name: undefined,
	    defaultDecorator: undefined,
	    proxy: true
	};
	Object.freeze(defaultCreateObservableOptions);
	function assertValidOption(key) {
	    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
	        fail("invalid option for (extend)observable: " + key);
	}
	function asCreateObservableOptions(thing) {
	    if (thing === null || thing === undefined)
	        return defaultCreateObservableOptions;
	    if (typeof thing === "string")
	        return { name: thing, deep: true, proxy: true };
	    if (process.env.NODE_ENV !== "production") {
	        if (typeof thing !== "object")
	            return fail("expected options object");
	        Object.keys(thing).forEach(assertValidOption);
	    }
	    return thing;
	}
	var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
	var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
	var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
	var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
	function getEnhancerFromOptions(options) {
	    return options.defaultDecorator
	        ? options.defaultDecorator.enhancer
	        : options.deep === false
	            ? referenceEnhancer
	            : deepEnhancer;
	}
	/**
	 * Turns an object, array or function into a reactive structure.
	 * @param v the value which should become observable.
	 */
	function createObservable(v, arg2, arg3) {
	    // @observable someProp;
	    if (typeof arguments[1] === "string") {
	        return deepDecorator.apply(null, arguments);
	    }
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    var res = isPlainObject(v)
	        ? observable.object(v, arg2, arg3)
	        : Array.isArray(v)
	            ? observable.array(v, arg2)
	            : isES6Map(v)
	                ? observable.map(v, arg2)
	                : isES6Set(v)
	                    ? observable.set(v, arg2)
	                    : v;
	    // this value could be converted to a new observable data structure, return it
	    if (res !== v)
	        return res;
	    // otherwise, just box it
	    fail(process.env.NODE_ENV !== "production" &&
	        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
	}
	var observableFactories = {
	    box: function (value, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("box");
	        var o = asCreateObservableOptions(options);
	        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
	    },
	    array: function (initialValues, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("array");
	        var o = asCreateObservableOptions(options);
	        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
	    },
	    map: function (initialValues, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("map");
	        var o = asCreateObservableOptions(options);
	        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
	    },
	    set: function (initialValues, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("set");
	        var o = asCreateObservableOptions(options);
	        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
	    },
	    object: function (props, decorators, options) {
	        if (typeof arguments[1] === "string")
	            incorrectlyUsedAsDecorator("object");
	        var o = asCreateObservableOptions(options);
	        if (o.proxy === false) {
	            return extendObservable({}, props, decorators, o);
	        }
	        else {
	            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
	            var base = extendObservable({}, undefined, undefined, o);
	            var proxy = createDynamicObservableObject(base);
	            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
	            return proxy;
	        }
	    },
	    ref: refDecorator,
	    shallow: shallowDecorator,
	    deep: deepDecorator,
	    struct: refStructDecorator
	};
	var observable = createObservable;
	// weird trick to keep our typings nicely with our funcs, and still extend the observable function
	Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
	function incorrectlyUsedAsDecorator(methodName) {
	    fail(
	    // process.env.NODE_ENV !== "production" &&
	    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
	}
	
	var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
	    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
	    // Optimization: faster on decorator target or instance? Assuming target
	    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
	    // Forcing instance now, fixes hot reloadig issues on React Native:
	    var options = decoratorArgs[0] || {};
	    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({ get: get,
	        set: set, context: instance }, options));
	});
	var computedStructDecorator = computedDecorator({ equals: comparer.structural });
	/**
	 * Decorator for class properties: @computed get value() { return expr; }.
	 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
	 */
	var computed = function computed(arg1, arg2, arg3) {
	    if (typeof arg2 === "string") {
	        // @computed
	        return computedDecorator.apply(null, arguments);
	    }
	    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
	        // @computed({ options })
	        return computedDecorator.apply(null, arguments);
	    }
	    // computed(expr, options?)
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
	        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
	    }
	    var opts = typeof arg2 === "object" ? arg2 : {};
	    opts.get = arg1;
	    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
	    opts.name = opts.name || arg1.name || ""; /* for generated name */
	    return new ComputedValue(opts);
	};
	computed.struct = computedStructDecorator;
	
	function createAction(actionName, fn, ref) {
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof fn === "function", "`action` can only be invoked on functions");
	        if (typeof actionName !== "string" || !actionName)
	            fail("actions should have valid names, got: '" + actionName + "'");
	    }
	    var res = function () {
	        return executeAction(actionName, fn, ref || this, arguments);
	    };
	    res.isMobxAction = true;
	    return res;
	}
	function executeAction(actionName, fn, scope, args) {
	    var runInfo = startAction(actionName, fn, scope, args);
	    var shouldSupressReactionError = true;
	    try {
	        var res = fn.apply(scope, args);
	        shouldSupressReactionError = false;
	        return res;
	    }
	    finally {
	        if (shouldSupressReactionError) {
	            globalState.suppressReactionErrors = shouldSupressReactionError;
	            endAction(runInfo);
	            globalState.suppressReactionErrors = false;
	        }
	        else {
	            endAction(runInfo);
	        }
	    }
	}
	function startAction(actionName, fn, scope, args) {
	    var notifySpy = isSpyEnabled() && !!actionName;
	    var startTime = 0;
	    if (notifySpy && process.env.NODE_ENV !== "production") {
	        startTime = Date.now();
	        var l = (args && args.length) || 0;
	        var flattendArgs = new Array(l);
	        if (l > 0)
	            for (var i = 0; i < l; i++)
	                flattendArgs[i] = args[i];
	        spyReportStart({
	            type: "action",
	            name: actionName,
	            object: scope,
	            arguments: flattendArgs
	        });
	    }
	    var prevDerivation = untrackedStart();
	    startBatch();
	    var prevAllowStateChanges = allowStateChangesStart(true);
	    return {
	        prevDerivation: prevDerivation,
	        prevAllowStateChanges: prevAllowStateChanges,
	        notifySpy: notifySpy,
	        startTime: startTime
	    };
	}
	function endAction(runInfo) {
	    allowStateChangesEnd(runInfo.prevAllowStateChanges);
	    endBatch();
	    untrackedEnd(runInfo.prevDerivation);
	    if (runInfo.notifySpy && process.env.NODE_ENV !== "production")
	        spyReportEnd({ time: Date.now() - runInfo.startTime });
	}
	function allowStateChanges(allowStateChanges, func) {
	    var prev = allowStateChangesStart(allowStateChanges);
	    var res;
	    try {
	        res = func();
	    }
	    finally {
	        allowStateChangesEnd(prev);
	    }
	    return res;
	}
	function allowStateChangesStart(allowStateChanges) {
	    var prev = globalState.allowStateChanges;
	    globalState.allowStateChanges = allowStateChanges;
	    return prev;
	}
	function allowStateChangesEnd(prev) {
	    globalState.allowStateChanges = prev;
	}
	function allowStateChangesInsideComputed(func) {
	    var prev = globalState.computationDepth;
	    globalState.computationDepth = 0;
	    var res;
	    try {
	        res = func();
	    }
	    finally {
	        globalState.computationDepth = prev;
	    }
	    return res;
	}
	
	var ObservableValue = /** @class */ (function (_super) {
	    __extends(ObservableValue, _super);
	    function ObservableValue(value, enhancer, name, notifySpy, equals) {
	        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
	        if (notifySpy === void 0) { notifySpy = true; }
	        if (equals === void 0) { equals = comparer.default; }
	        var _this = _super.call(this, name) || this;
	        _this.enhancer = enhancer;
	        _this.name = name;
	        _this.equals = equals;
	        _this.hasUnreportedChange = false;
	        _this.value = enhancer(value, undefined, name);
	        if (notifySpy && isSpyEnabled() && process.env.NODE_ENV !== "production") {
	            // only notify spy if this is a stand-alone observable
	            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
	        }
	        return _this;
	    }
	    ObservableValue.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined)
	            return this.dehancer(value);
	        return value;
	    };
	    ObservableValue.prototype.set = function (newValue) {
	        var oldValue = this.value;
	        newValue = this.prepareNewValue(newValue);
	        if (newValue !== globalState.UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            if (notifySpy && process.env.NODE_ENV !== "production") {
	                spyReportStart({
	                    type: "update",
	                    name: this.name,
	                    newValue: newValue,
	                    oldValue: oldValue
	                });
	            }
	            this.setNewValue(newValue);
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportEnd();
	        }
	    };
	    ObservableValue.prototype.prepareNewValue = function (newValue) {
	        checkIfStateModificationsAreAllowed(this);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this,
	                type: "update",
	                newValue: newValue
	            });
	            if (!change)
	                return globalState.UNCHANGED;
	            newValue = change.newValue;
	        }
	        // apply modifier
	        newValue = this.enhancer(newValue, this.value, this.name);
	        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
	    };
	    ObservableValue.prototype.setNewValue = function (newValue) {
	        var oldValue = this.value;
	        this.value = newValue;
	        this.reportChanged();
	        if (hasListeners(this)) {
	            notifyListeners(this, {
	                type: "update",
	                object: this,
	                newValue: newValue,
	                oldValue: oldValue
	            });
	        }
	    };
	    ObservableValue.prototype.get = function () {
	        this.reportObserved();
	        return this.dehanceValue(this.value);
	    };
	    ObservableValue.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableValue.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately)
	            listener({
	                object: this,
	                type: "update",
	                newValue: this.value,
	                oldValue: undefined
	            });
	        return registerListener(this, listener);
	    };
	    ObservableValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ObservableValue.prototype.toString = function () {
	        return this.name + "[" + this.value + "]";
	    };
	    ObservableValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    ObservableValue.prototype[Symbol.toPrimitive] = function () {
	        return this.valueOf();
	    };
	    return ObservableValue;
	}(Atom));
	var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
	
	/**
	 * A node in the state dependency root that observes other nodes, and can be observed itself.
	 *
	 * ComputedValue will remember the result of the computation for the duration of the batch, or
	 * while being observed.
	 *
	 * During this time it will recompute only when one of its direct dependencies changed,
	 * but only when it is being accessed with `ComputedValue.get()`.
	 *
	 * Implementation description:
	 * 1. First time it's being accessed it will compute and remember result
	 *    give back remembered result until 2. happens
	 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
	 * 3. When it's being accessed, recompute if any shallow dependency changed.
	 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
	 *    go to step 2. either way
	 *
	 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
	 */
	var ComputedValue = /** @class */ (function () {
	    /**
	     * Create a new computed value based on a function expression.
	     *
	     * The `name` property is for debug purposes only.
	     *
	     * The `equals` property specifies the comparer function to use to determine if a newly produced
	     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
	     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
	     * Structural comparison can be convenient if you always produce a new aggregated object and
	     * don't want to notify observers if it is structurally the same.
	     * This is useful for working with vectors, mouse coordinates etc.
	     */
	    function ComputedValue(options) {
	        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	        this.observing = []; // nodes we are looking at. Our value depends on these nodes
	        this.newObserving = null; // during tracking it's an array with new observed observers
	        this.isBeingObserved = false;
	        this.isPendingUnobservation = false;
	        this.observers = new Set();
	        this.diffValue = 0;
	        this.runId = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.value = new CaughtException(null);
	        this.isComputing = false; // to check for cycles
	        this.isRunningSetter = false;
	        this.isTracing = TraceMode.NONE;
	        if (process.env.NODE_ENV !== "production" && !options.get)
	            throw "[mobx] missing option for computed: get";
	        this.derivation = options.get;
	        this.name = options.name || "ComputedValue@" + getNextId();
	        if (options.set)
	            this.setter = createAction(this.name + "-setter", options.set);
	        this.equals =
	            options.equals ||
	                (options.compareStructural || options.struct
	                    ? comparer.structural
	                    : comparer.default);
	        this.scope = options.context;
	        this.requiresReaction = !!options.requiresReaction;
	        this.keepAlive = !!options.keepAlive;
	    }
	    ComputedValue.prototype.onBecomeStale = function () {
	        propagateMaybeChanged(this);
	    };
	    ComputedValue.prototype.onBecomeObserved = function () {
	        if (this.onBecomeObservedListeners) {
	            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
	        }
	    };
	    ComputedValue.prototype.onBecomeUnobserved = function () {
	        if (this.onBecomeUnobservedListeners) {
	            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
	        }
	    };
	    /**
	     * Returns the current value of this computed value.
	     * Will evaluate its computation first if needed.
	     */
	    ComputedValue.prototype.get = function () {
	        if (this.isComputing)
	            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
	        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
	            if (shouldCompute(this)) {
	                this.warnAboutUntrackedRead();
	                startBatch(); // See perf test 'computed memoization'
	                this.value = this.computeValue(false);
	                endBatch();
	            }
	        }
	        else {
	            reportObserved(this);
	            if (shouldCompute(this))
	                if (this.trackAndCompute())
	                    propagateChangeConfirmed(this);
	        }
	        var result = this.value;
	        if (isCaughtException(result))
	            throw result.cause;
	        return result;
	    };
	    ComputedValue.prototype.peek = function () {
	        var res = this.computeValue(false);
	        if (isCaughtException(res))
	            throw res.cause;
	        return res;
	    };
	    ComputedValue.prototype.set = function (value) {
	        if (this.setter) {
	            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
	            this.isRunningSetter = true;
	            try {
	                this.setter.call(this.scope, value);
	            }
	            finally {
	                this.isRunningSetter = false;
	            }
	        }
	        else
	            invariant(false, process.env.NODE_ENV !== "production" &&
	                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
	    };
	    ComputedValue.prototype.trackAndCompute = function () {
	        if (isSpyEnabled() && process.env.NODE_ENV !== "production") {
	            spyReport({
	                object: this.scope,
	                type: "compute",
	                name: this.name
	            });
	        }
	        var oldValue = this.value;
	        var wasSuspended = 
	        /* see #1208 */ this.dependenciesState === exports.IDerivationState.NOT_TRACKING;
	        var newValue = this.computeValue(true);
	        var changed = wasSuspended ||
	            isCaughtException(oldValue) ||
	            isCaughtException(newValue) ||
	            !this.equals(oldValue, newValue);
	        if (changed) {
	            this.value = newValue;
	        }
	        return changed;
	    };
	    ComputedValue.prototype.computeValue = function (track) {
	        this.isComputing = true;
	        globalState.computationDepth++;
	        var res;
	        if (track) {
	            res = trackDerivedFunction(this, this.derivation, this.scope);
	        }
	        else {
	            if (globalState.disableErrorBoundaries === true) {
	                res = this.derivation.call(this.scope);
	            }
	            else {
	                try {
	                    res = this.derivation.call(this.scope);
	                }
	                catch (e) {
	                    res = new CaughtException(e);
	                }
	            }
	        }
	        globalState.computationDepth--;
	        this.isComputing = false;
	        return res;
	    };
	    ComputedValue.prototype.suspend = function () {
	        if (!this.keepAlive) {
	            clearObserving(this);
	            this.value = undefined; // don't hold on to computed value!
	        }
	    };
	    ComputedValue.prototype.observe = function (listener, fireImmediately) {
	        var _this = this;
	        var firstTime = true;
	        var prevValue = undefined;
	        return autorun(function () {
	            var newValue = _this.get();
	            if (!firstTime || fireImmediately) {
	                var prevU = untrackedStart();
	                listener({
	                    type: "update",
	                    object: _this,
	                    newValue: newValue,
	                    oldValue: prevValue
	                });
	                untrackedEnd(prevU);
	            }
	            firstTime = false;
	            prevValue = newValue;
	        });
	    };
	    ComputedValue.prototype.warnAboutUntrackedRead = function () {
	        if (process.env.NODE_ENV === "production")
	            return;
	        if (this.requiresReaction === true) {
	            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
	        }
	        if (this.isTracing !== TraceMode.NONE) {
	            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
	        }
	        if (globalState.computedRequiresReaction) {
	            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
	        }
	    };
	    ComputedValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ComputedValue.prototype.toString = function () {
	        return this.name + "[" + this.derivation.toString() + "]";
	    };
	    ComputedValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    ComputedValue.prototype[Symbol.toPrimitive] = function () {
	        return this.valueOf();
	    };
	    return ComputedValue;
	}());
	var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
	
	(function (IDerivationState) {
	    // before being run or (outside batch and not being observed)
	    // at this point derivation is not holding any data about dependency tree
	    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
	    // no shallow dependency changed since last computation
	    // won't recalculate derivation
	    // this is what makes mobx fast
	    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
	    // some deep dependency changed, but don't know if shallow dependency changed
	    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
	    // currently only ComputedValue will propagate POSSIBLY_STALE
	    //
	    // having this state is second big optimization:
	    // don't have to recompute on every dependency change, but only when it's needed
	    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
	    // A shallow dependency has changed since last computation and the derivation
	    // will need to recompute when it's needed next.
	    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
	})(exports.IDerivationState || (exports.IDerivationState = {}));
	var TraceMode;
	(function (TraceMode) {
	    TraceMode[TraceMode["NONE"] = 0] = "NONE";
	    TraceMode[TraceMode["LOG"] = 1] = "LOG";
	    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
	})(TraceMode || (TraceMode = {}));
	var CaughtException = /** @class */ (function () {
	    function CaughtException(cause) {
	        this.cause = cause;
	        // Empty
	    }
	    return CaughtException;
	}());
	function isCaughtException(e) {
	    return e instanceof CaughtException;
	}
	/**
	 * Finds out whether any dependency of the derivation has actually changed.
	 * If dependenciesState is 1 then it will recalculate dependencies,
	 * if any dependency changed it will propagate it by changing dependenciesState to 2.
	 *
	 * By iterating over the dependencies in the same order that they were reported and
	 * stopping on the first change, all the recalculations are only called for ComputedValues
	 * that will be tracked by derivation. That is because we assume that if the first x
	 * dependencies of the derivation doesn't change then the derivation should run the same way
	 * up until accessing x-th dependency.
	 */
	function shouldCompute(derivation) {
	    switch (derivation.dependenciesState) {
	        case exports.IDerivationState.UP_TO_DATE:
	            return false;
	        case exports.IDerivationState.NOT_TRACKING:
	        case exports.IDerivationState.STALE:
	            return true;
	        case exports.IDerivationState.POSSIBLY_STALE: {
	            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
	            var obs = derivation.observing, l = obs.length;
	            for (var i = 0; i < l; i++) {
	                var obj = obs[i];
	                if (isComputedValue(obj)) {
	                    if (globalState.disableErrorBoundaries) {
	                        obj.get();
	                    }
	                    else {
	                        try {
	                            obj.get();
	                        }
	                        catch (e) {
	                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
	                            untrackedEnd(prevUntracked);
	                            return true;
	                        }
	                    }
	                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
	                    // and `derivation` is an observer of `obj`
	                    // invariantShouldCompute(derivation)
	                    if (derivation.dependenciesState === exports.IDerivationState.STALE) {
	                        untrackedEnd(prevUntracked);
	                        return true;
	                    }
	                }
	            }
	            changeDependenciesStateTo0(derivation);
	            untrackedEnd(prevUntracked);
	            return false;
	        }
	    }
	}
	// function invariantShouldCompute(derivation: IDerivation) {
	//     const newDepState = (derivation as any).dependenciesState
	//     if (
	//         process.env.NODE_ENV === "production" &&
	//         (newDepState === IDerivationState.POSSIBLY_STALE ||
	//             newDepState === IDerivationState.NOT_TRACKING)
	//     )
	//         fail("Illegal dependency state")
	// }
	function isComputingDerivation() {
	    return globalState.trackingDerivation !== null; // filter out actions inside computations
	}
	function checkIfStateModificationsAreAllowed(atom) {
	    var hasObservers = atom.observers.size > 0;
	    // Should never be possible to change an observed observable from inside computed, see #798
	    if (globalState.computationDepth > 0 && hasObservers)
	        fail(process.env.NODE_ENV !== "production" &&
	            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
	    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
	    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
	        fail(process.env.NODE_ENV !== "production" &&
	            (globalState.enforceActions
	                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
	                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
	                atom.name);
	}
	/**
	 * Executes the provided function `f` and tracks which observables are being accessed.
	 * The tracking information is stored on the `derivation` object and the derivation is registered
	 * as observer of any of the accessed observables.
	 */
	function trackDerivedFunction(derivation, f, context) {
	    // pre allocate array allocation + room for variation in deps
	    // array will be trimmed by bindDependencies
	    changeDependenciesStateTo0(derivation);
	    derivation.newObserving = new Array(derivation.observing.length + 100);
	    derivation.unboundDepsCount = 0;
	    derivation.runId = ++globalState.runId;
	    var prevTracking = globalState.trackingDerivation;
	    globalState.trackingDerivation = derivation;
	    var result;
	    if (globalState.disableErrorBoundaries === true) {
	        result = f.call(context);
	    }
	    else {
	        try {
	            result = f.call(context);
	        }
	        catch (e) {
	            result = new CaughtException(e);
	        }
	    }
	    globalState.trackingDerivation = prevTracking;
	    bindDependencies(derivation);
	    return result;
	}
	/**
	 * diffs newObserving with observing.
	 * update observing to be newObserving with unique observables
	 * notify observers that become observed/unobserved
	 */
	function bindDependencies(derivation) {
	    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
	    var prevObserving = derivation.observing;
	    var observing = (derivation.observing = derivation.newObserving);
	    var lowestNewObservingDerivationState = exports.IDerivationState.UP_TO_DATE;
	    // Go through all new observables and check diffValue: (this list can contain duplicates):
	    //   0: first occurrence, change to 1 and keep it
	    //   1: extra occurrence, drop it
	    var i0 = 0, l = derivation.unboundDepsCount;
	    for (var i = 0; i < l; i++) {
	        var dep = observing[i];
	        if (dep.diffValue === 0) {
	            dep.diffValue = 1;
	            if (i0 !== i)
	                observing[i0] = dep;
	            i0++;
	        }
	        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
	        // not hitting the condition
	        if (dep.dependenciesState > lowestNewObservingDerivationState) {
	            lowestNewObservingDerivationState = dep.dependenciesState;
	        }
	    }
	    observing.length = i0;
	    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
	    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
	    //   0: it's not in new observables, unobserve it
	    //   1: it keeps being observed, don't want to notify it. change to 0
	    l = prevObserving.length;
	    while (l--) {
	        var dep = prevObserving[l];
	        if (dep.diffValue === 0) {
	            removeObserver(dep, derivation);
	        }
	        dep.diffValue = 0;
	    }
	    // Go through all new observables and check diffValue: (now it should be unique)
	    //   0: it was set to 0 in last loop. don't need to do anything.
	    //   1: it wasn't observed, let's observe it. set back to 0
	    while (i0--) {
	        var dep = observing[i0];
	        if (dep.diffValue === 1) {
	            dep.diffValue = 0;
	            addObserver(dep, derivation);
	        }
	    }
	    // Some new observed derivations may become stale during this derivation computation
	    // so they have had no chance to propagate staleness (#916)
	    if (lowestNewObservingDerivationState !== exports.IDerivationState.UP_TO_DATE) {
	        derivation.dependenciesState = lowestNewObservingDerivationState;
	        derivation.onBecomeStale();
	    }
	}
	function clearObserving(derivation) {
	    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
	    var obs = derivation.observing;
	    derivation.observing = [];
	    var i = obs.length;
	    while (i--)
	        removeObserver(obs[i], derivation);
	    derivation.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	}
	function untracked(action) {
	    var prev = untrackedStart();
	    try {
	        return action();
	    }
	    finally {
	        untrackedEnd(prev);
	    }
	}
	function untrackedStart() {
	    var prev = globalState.trackingDerivation;
	    globalState.trackingDerivation = null;
	    return prev;
	}
	function untrackedEnd(prev) {
	    globalState.trackingDerivation = prev;
	}
	/**
	 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
	 *
	 */
	function changeDependenciesStateTo0(derivation) {
	    if (derivation.dependenciesState === exports.IDerivationState.UP_TO_DATE)
	        return;
	    derivation.dependenciesState = exports.IDerivationState.UP_TO_DATE;
	    var obs = derivation.observing;
	    var i = obs.length;
	    while (i--)
	        obs[i].lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	}
	
	/**
	 * These values will persist if global state is reset
	 */
	var persistentKeys = [
	    "mobxGuid",
	    "spyListeners",
	    "enforceActions",
	    "computedRequiresReaction",
	    "disableErrorBoundaries",
	    "runId",
	    "UNCHANGED"
	];
	var MobXGlobals = /** @class */ (function () {
	    function MobXGlobals() {
	        /**
	         * MobXGlobals version.
	         * MobX compatiblity with other versions loaded in memory as long as this version matches.
	         * It indicates that the global state still stores similar information
	         *
	         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
	         * internal state storage of MobX, and can be the same across many different package versions
	         */
	        this.version = 5;
	        /**
	         * globally unique token to signal unchanged
	         */
	        this.UNCHANGED = {};
	        /**
	         * Currently running derivation
	         */
	        this.trackingDerivation = null;
	        /**
	         * Are we running a computation currently? (not a reaction)
	         */
	        this.computationDepth = 0;
	        /**
	         * Each time a derivation is tracked, it is assigned a unique run-id
	         */
	        this.runId = 0;
	        /**
	         * 'guid' for general purpose. Will be persisted amongst resets.
	         */
	        this.mobxGuid = 0;
	        /**
	         * Are we in a batch block? (and how many of them)
	         */
	        this.inBatch = 0;
	        /**
	         * Observables that don't have observers anymore, and are about to be
	         * suspended, unless somebody else accesses it in the same batch
	         *
	         * @type {IObservable[]}
	         */
	        this.pendingUnobservations = [];
	        /**
	         * List of scheduled, not yet executed, reactions.
	         */
	        this.pendingReactions = [];
	        /**
	         * Are we currently processing reactions?
	         */
	        this.isRunningReactions = false;
	        /**
	         * Is it allowed to change observables at this point?
	         * In general, MobX doesn't allow that when running computations and React.render.
	         * To ensure that those functions stay pure.
	         */
	        this.allowStateChanges = true;
	        /**
	         * If strict mode is enabled, state changes are by default not allowed
	         */
	        this.enforceActions = false;
	        /**
	         * Spy callbacks
	         */
	        this.spyListeners = [];
	        /**
	         * Globally attached error handlers that react specifically to errors in reactions
	         */
	        this.globalReactionErrorHandlers = [];
	        /**
	         * Warn if computed values are accessed outside a reactive context
	         */
	        this.computedRequiresReaction = false;
	        /**
	         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
	         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
	         */
	        this.computedConfigurable = false;
	        /*
	         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
	         * the stack when an exception occurs while debugging.
	         */
	        this.disableErrorBoundaries = false;
	        /*
	         * If true, we are already handling an exception in an action. Any errors in reactions should be supressed, as
	         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
	         */
	        this.suppressReactionErrors = false;
	    }
	    return MobXGlobals;
	}());
	var canMergeGlobalState = true;
	var isolateCalled = false;
	var globalState = (function () {
	    var global = getGlobal();
	    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
	        canMergeGlobalState = false;
	    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
	        canMergeGlobalState = false;
	    if (!canMergeGlobalState) {
	        setTimeout(function () {
	            if (!isolateCalled) {
	                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
	            }
	        }, 1);
	        return new MobXGlobals();
	    }
	    else if (global.__mobxGlobals) {
	        global.__mobxInstanceCount += 1;
	        if (!global.__mobxGlobals.UNCHANGED)
	            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
	        return global.__mobxGlobals;
	    }
	    else {
	        global.__mobxInstanceCount = 1;
	        return (global.__mobxGlobals = new MobXGlobals());
	    }
	})();
	function isolateGlobalState() {
	    if (globalState.pendingReactions.length ||
	        globalState.inBatch ||
	        globalState.isRunningReactions)
	        fail("isolateGlobalState should be called before MobX is running any reactions");
	    isolateCalled = true;
	    if (canMergeGlobalState) {
	        if (--getGlobal().__mobxInstanceCount === 0)
	            getGlobal().__mobxGlobals = undefined;
	        globalState = new MobXGlobals();
	    }
	}
	function getGlobalState() {
	    return globalState;
	}
	/**
	 * For testing purposes only; this will break the internal state of existing observables,
	 * but can be used to get back at a stable state after throwing errors
	 */
	function resetGlobalState() {
	    var defaultGlobals = new MobXGlobals();
	    for (var key in defaultGlobals)
	        if (persistentKeys.indexOf(key) === -1)
	            globalState[key] = defaultGlobals[key];
	    globalState.allowStateChanges = !globalState.enforceActions;
	}
	function getGlobal() {
	    return typeof window !== "undefined" ? window : global;
	}
	
	function hasObservers(observable) {
	    return observable.observers && observable.observers.size > 0;
	}
	function getObservers(observable) {
	    return observable.observers;
	}
	// function invariantObservers(observable: IObservable) {
	//     const list = observable.observers
	//     const map = observable.observersIndexes
	//     const l = list.length
	//     for (let i = 0; i < l; i++) {
	//         const id = list[i].__mapid
	//         if (i) {
	//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
	//         } else {
	//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
	//         }
	//     }
	//     invariant(
	//         list.length === 0 || Object.keys(map).length === list.length - 1,
	//         "INTERNAL ERROR there is no junk in map"
	//     )
	// }
	function addObserver(observable, node) {
	    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
	    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
	    // invariantObservers(observable);
	    observable.observers.add(node);
	    if (observable.lowestObserverState > node.dependenciesState)
	        observable.lowestObserverState = node.dependenciesState;
	    // invariantObservers(observable);
	    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
	}
	function removeObserver(observable, node) {
	    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
	    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
	    // invariantObservers(observable);
	    observable.observers.delete(node);
	    if (observable.observers.size === 0) {
	        // deleting last observer
	        queueForUnobservation(observable);
	    }
	    // invariantObservers(observable);
	    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
	}
	function queueForUnobservation(observable) {
	    if (observable.isPendingUnobservation === false) {
	        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
	        observable.isPendingUnobservation = true;
	        globalState.pendingUnobservations.push(observable);
	    }
	}
	/**
	 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
	 * During a batch `onBecomeUnobserved` will be called at most once per observable.
	 * Avoids unnecessary recalculations.
	 */
	function startBatch() {
	    globalState.inBatch++;
	}
	function endBatch() {
	    if (--globalState.inBatch === 0) {
	        runReactions();
	        // the batch is actually about to finish, all unobserving should happen here.
	        var list = globalState.pendingUnobservations;
	        for (var i = 0; i < list.length; i++) {
	            var observable = list[i];
	            observable.isPendingUnobservation = false;
	            if (observable.observers.size === 0) {
	                if (observable.isBeingObserved) {
	                    // if this observable had reactive observers, trigger the hooks
	                    observable.isBeingObserved = false;
	                    observable.onBecomeUnobserved();
	                }
	                if (observable instanceof ComputedValue) {
	                    // computed values are automatically teared down when the last observer leaves
	                    // this process happens recursively, this computed might be the last observabe of another, etc..
	                    observable.suspend();
	                }
	            }
	        }
	        globalState.pendingUnobservations = [];
	    }
	}
	function reportObserved(observable) {
	    var derivation = globalState.trackingDerivation;
	    if (derivation !== null) {
	        /**
	         * Simple optimization, give each derivation run an unique id (runId)
	         * Check if last time this observable was accessed the same runId is used
	         * if this is the case, the relation is already known
	         */
	        if (derivation.runId !== observable.lastAccessedBy) {
	            observable.lastAccessedBy = derivation.runId;
	            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
	            derivation.newObserving[derivation.unboundDepsCount++] = observable;
	            if (!observable.isBeingObserved) {
	                observable.isBeingObserved = true;
	                observable.onBecomeObserved();
	            }
	        }
	        return true;
	    }
	    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
	        queueForUnobservation(observable);
	    }
	    return false;
	}
	// function invariantLOS(observable: IObservable, msg: string) {
	//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
	//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
	//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
	//     throw new Error(
	//         "lowestObserverState is wrong for " +
	//             msg +
	//             " because " +
	//             min +
	//             " < " +
	//             observable.lowestObserverState
	//     )
	// }
	/**
	 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
	 * It will propagate changes to observers from previous run
	 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
	 * Hopefully self reruning autoruns aren't a feature people should depend on
	 * Also most basic use cases should be ok
	 */
	// Called by Atom when its value changes
	function propagateChanged(observable) {
	    // invariantLOS(observable, "changed start");
	    if (observable.lowestObserverState === exports.IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.STALE;
	    // Ideally we use for..of here, but the downcompiled version is really slow...
	    observable.observers.forEach(function (d) {
	        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
	            if (d.isTracing !== TraceMode.NONE) {
	                logTraceInfo(d, observable);
	            }
	            d.onBecomeStale();
	        }
	        d.dependenciesState = exports.IDerivationState.STALE;
	    });
	    // invariantLOS(observable, "changed end");
	}
	// Called by ComputedValue when it recalculate and its value changed
	function propagateChangeConfirmed(observable) {
	    // invariantLOS(observable, "confirmed start");
	    if (observable.lowestObserverState === exports.IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.STALE;
	    observable.observers.forEach(function (d) {
	        if (d.dependenciesState === exports.IDerivationState.POSSIBLY_STALE)
	            d.dependenciesState = exports.IDerivationState.STALE;
	        else if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
	        )
	            observable.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	    });
	    // invariantLOS(observable, "confirmed end");
	}
	// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
	function propagateMaybeChanged(observable) {
	    // invariantLOS(observable, "maybe start");
	    if (observable.lowestObserverState !== exports.IDerivationState.UP_TO_DATE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.POSSIBLY_STALE;
	    observable.observers.forEach(function (d) {
	        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
	            d.dependenciesState = exports.IDerivationState.POSSIBLY_STALE;
	            if (d.isTracing !== TraceMode.NONE) {
	                logTraceInfo(d, observable);
	            }
	            d.onBecomeStale();
	        }
	    });
	    // invariantLOS(observable, "maybe end");
	}
	function logTraceInfo(derivation, observable) {
	    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
	    if (derivation.isTracing === TraceMode.BREAK) {
	        var lines = [];
	        printDepTree(getDependencyTree(derivation), lines, 1);
	        // prettier-ignore
	        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
	    }
	}
	function printDepTree(tree, lines, depth) {
	    if (lines.length >= 1000) {
	        lines.push("(and many more)");
	        return;
	    }
	    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
	    if (tree.dependencies)
	        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
	}
	
	var Reaction = /** @class */ (function () {
	    function Reaction(name, onInvalidate, errorHandler) {
	        if (name === void 0) { name = "Reaction@" + getNextId(); }
	        this.name = name;
	        this.onInvalidate = onInvalidate;
	        this.errorHandler = errorHandler;
	        this.observing = []; // nodes we are looking at. Our value depends on these nodes
	        this.newObserving = [];
	        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	        this.diffValue = 0;
	        this.runId = 0;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.isDisposed = false;
	        this._isScheduled = false;
	        this._isTrackPending = false;
	        this._isRunning = false;
	        this.isTracing = TraceMode.NONE;
	    }
	    Reaction.prototype.onBecomeStale = function () {
	        this.schedule();
	    };
	    Reaction.prototype.schedule = function () {
	        if (!this._isScheduled) {
	            this._isScheduled = true;
	            globalState.pendingReactions.push(this);
	            runReactions();
	        }
	    };
	    Reaction.prototype.isScheduled = function () {
	        return this._isScheduled;
	    };
	    /**
	     * internal, use schedule() if you intend to kick off a reaction
	     */
	    Reaction.prototype.runReaction = function () {
	        if (!this.isDisposed) {
	            startBatch();
	            this._isScheduled = false;
	            if (shouldCompute(this)) {
	                this._isTrackPending = true;
	                try {
	                    this.onInvalidate();
	                    if (this._isTrackPending &&
	                        isSpyEnabled() &&
	                        process.env.NODE_ENV !== "production") {
	                        // onInvalidate didn't trigger track right away..
	                        spyReport({
	                            name: this.name,
	                            type: "scheduled-reaction"
	                        });
	                    }
	                }
	                catch (e) {
	                    this.reportExceptionInDerivation(e);
	                }
	            }
	            endBatch();
	        }
	    };
	    Reaction.prototype.track = function (fn) {
	        if (this.isDisposed) {
	            return;
	            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
	        }
	        startBatch();
	        var notify = isSpyEnabled();
	        var startTime;
	        if (notify && process.env.NODE_ENV !== "production") {
	            startTime = Date.now();
	            spyReportStart({
	                name: this.name,
	                type: "reaction"
	            });
	        }
	        this._isRunning = true;
	        var result = trackDerivedFunction(this, fn, undefined);
	        this._isRunning = false;
	        this._isTrackPending = false;
	        if (this.isDisposed) {
	            // disposed during last run. Clean up everything that was bound after the dispose call.
	            clearObserving(this);
	        }
	        if (isCaughtException(result))
	            this.reportExceptionInDerivation(result.cause);
	        if (notify && process.env.NODE_ENV !== "production") {
	            spyReportEnd({
	                time: Date.now() - startTime
	            });
	        }
	        endBatch();
	    };
	    Reaction.prototype.reportExceptionInDerivation = function (error) {
	        var _this = this;
	        if (this.errorHandler) {
	            this.errorHandler(error, this);
	            return;
	        }
	        if (globalState.disableErrorBoundaries)
	            throw error;
	        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
	        if (globalState.suppressReactionErrors) {
	            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
	        }
	        else {
	            console.error(message, error);
	            /** If debugging brought you here, please, read the above message :-). Tnx! */
	        }
	        if (isSpyEnabled()) {
	            spyReport({
	                type: "error",
	                name: this.name,
	                message: message,
	                error: "" + error
	            });
	        }
	        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
	    };
	    Reaction.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this.isDisposed = true;
	            if (!this._isRunning) {
	                // if disposed while running, clean up later. Maybe not optimal, but rare case
	                startBatch();
	                clearObserving(this);
	                endBatch();
	            }
	        }
	    };
	    Reaction.prototype.getDisposer = function () {
	        var r = this.dispose.bind(this);
	        r[$mobx] = this;
	        return r;
	    };
	    Reaction.prototype.toString = function () {
	        return "Reaction[" + this.name + "]";
	    };
	    Reaction.prototype.trace = function (enterBreakPoint) {
	        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
	        trace(this, enterBreakPoint);
	    };
	    return Reaction;
	}());
	function onReactionError(handler) {
	    globalState.globalReactionErrorHandlers.push(handler);
	    return function () {
	        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
	        if (idx >= 0)
	            globalState.globalReactionErrorHandlers.splice(idx, 1);
	    };
	}
	/**
	 * Magic number alert!
	 * Defines within how many times a reaction is allowed to re-trigger itself
	 * until it is assumed that this is gonna be a never ending loop...
	 */
	var MAX_REACTION_ITERATIONS = 100;
	var reactionScheduler = function (f) { return f(); };
	function runReactions() {
	    // Trampolining, if runReactions are already running, new reactions will be picked up
	    if (globalState.inBatch > 0 || globalState.isRunningReactions)
	        return;
	    reactionScheduler(runReactionsHelper);
	}
	function runReactionsHelper() {
	    globalState.isRunningReactions = true;
	    var allReactions = globalState.pendingReactions;
	    var iterations = 0;
	    // While running reactions, new reactions might be triggered.
	    // Hence we work with two variables and check whether
	    // we converge to no remaining reactions after a while.
	    while (allReactions.length > 0) {
	        if (++iterations === MAX_REACTION_ITERATIONS) {
	            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
	                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
	            allReactions.splice(0); // clear reactions
	        }
	        var remainingReactions = allReactions.splice(0);
	        for (var i = 0, l = remainingReactions.length; i < l; i++)
	            remainingReactions[i].runReaction();
	    }
	    globalState.isRunningReactions = false;
	}
	var isReaction = createInstanceofPredicate("Reaction", Reaction);
	function setReactionScheduler(fn) {
	    var baseScheduler = reactionScheduler;
	    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
	}
	
	function isSpyEnabled() {
	    return process.env.NODE_ENV !== "production" && !!globalState.spyListeners.length;
	}
	function spyReport(event) {
	    if (process.env.NODE_ENV === "production")
	        return; // dead code elimination can do the rest
	    if (!globalState.spyListeners.length)
	        return;
	    var listeners = globalState.spyListeners;
	    for (var i = 0, l = listeners.length; i < l; i++)
	        listeners[i](event);
	}
	function spyReportStart(event) {
	    if (process.env.NODE_ENV === "production")
	        return;
	    var change = __assign({}, event, { spyReportStart: true });
	    spyReport(change);
	}
	var END_EVENT = { spyReportEnd: true };
	function spyReportEnd(change) {
	    if (process.env.NODE_ENV === "production")
	        return;
	    if (change)
	        spyReport(__assign({}, change, { spyReportEnd: true }));
	    else
	        spyReport(END_EVENT);
	}
	function spy(listener) {
	    if (process.env.NODE_ENV === "production") {
	        console.warn("[mobx.spy] Is a no-op in production builds");
	        return function () { };
	    }
	    else {
	        globalState.spyListeners.push(listener);
	        return once(function () {
	            globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
	        });
	    }
	}
	
	function dontReassignFields() {
	    fail(process.env.NODE_ENV !== "production" && "@action fields are not reassignable");
	}
	function namedActionDecorator(name) {
	    return function (target, prop, descriptor) {
	        if (descriptor) {
	            if (process.env.NODE_ENV !== "production" && descriptor.get !== undefined) {
	                return fail("@action cannot be used with getters");
	            }
	            // babel / typescript
	            // @action method() { }
	            if (descriptor.value) {
	                // typescript
	                return {
	                    value: createAction(name, descriptor.value),
	                    enumerable: false,
	                    configurable: true,
	                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
	                };
	            }
	            // babel only: @action method = () => {}
	            var initializer_1 = descriptor.initializer;
	            return {
	                enumerable: false,
	                configurable: true,
	                writable: true,
	                initializer: function () {
	                    // N.B: we can't immediately invoke initializer; this would be wrong
	                    return createAction(name, initializer_1.call(this));
	                }
	            };
	        }
	        // bound instance methods
	        return actionFieldDecorator(name).apply(this, arguments);
	    };
	}
	function actionFieldDecorator(name) {
	    // Simple property that writes on first invocation to the current instance
	    return function (target, prop, descriptor) {
	        Object.defineProperty(target, prop, {
	            configurable: true,
	            enumerable: false,
	            get: function () {
	                return undefined;
	            },
	            set: function (value) {
	                addHiddenProp(this, prop, action(name, value));
	            }
	        });
	    };
	}
	function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
	    if (applyToInstance === true) {
	        defineBoundAction(target, propertyName, descriptor.value);
	        return null;
	    }
	    if (descriptor) {
	        // if (descriptor.value)
	        // Typescript / Babel: @action.bound method() { }
	        // also: babel @action.bound method = () => {}
	        return {
	            configurable: true,
	            enumerable: false,
	            get: function () {
	                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
	                return this[propertyName];
	            },
	            set: dontReassignFields
	        };
	    }
	    // field decorator Typescript @action.bound method = () => {}
	    return {
	        enumerable: false,
	        configurable: true,
	        set: function (v) {
	            defineBoundAction(this, propertyName, v);
	        },
	        get: function () {
	            return undefined;
	        }
	    };
	}
	
	var action = function action(arg1, arg2, arg3, arg4) {
	    // action(fn() {})
	    if (arguments.length === 1 && typeof arg1 === "function")
	        return createAction(arg1.name || "<unnamed action>", arg1);
	    // action("name", fn() {})
	    if (arguments.length === 2 && typeof arg2 === "function")
	        return createAction(arg1, arg2);
	    // @action("name") fn() {}
	    if (arguments.length === 1 && typeof arg1 === "string")
	        return namedActionDecorator(arg1);
	    // @action fn() {}
	    if (arg4 === true) {
	        // apply to instance immediately
	        addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
	    }
	    else {
	        return namedActionDecorator(arg2).apply(null, arguments);
	    }
	};
	action.bound = boundActionDecorator;
	function runInAction(arg1, arg2) {
	    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
	    var fn = typeof arg1 === "function" ? arg1 : arg2;
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
	        if (typeof actionName !== "string" || !actionName)
	            fail("actions should have valid names, got: '" + actionName + "'");
	    }
	    return executeAction(actionName, fn, this, undefined);
	}
	function isAction(thing) {
	    return typeof thing === "function" && thing.isMobxAction === true;
	}
	function defineBoundAction(target, propertyName, fn) {
	    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
	}
	
	/**
	 * Creates a named reactive view and keeps it alive, so that the view is always
	 * updated if one of the dependencies changes, even when the view is not further used by something else.
	 * @param view The reactive view
	 * @returns disposer function, which can be used to stop the view from being updated in the future.
	 */
	function autorun(view, opts) {
	    if (opts === void 0) { opts = EMPTY_OBJECT; }
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof view === "function", "Autorun expects a function as first argument");
	        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
	    }
	    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
	    var runSync = !opts.scheduler && !opts.delay;
	    var reaction;
	    if (runSync) {
	        // normal autorun
	        reaction = new Reaction(name, function () {
	            this.track(reactionRunner);
	        }, opts.onError);
	    }
	    else {
	        var scheduler_1 = createSchedulerFromOptions(opts);
	        // debounced autorun
	        var isScheduled_1 = false;
	        reaction = new Reaction(name, function () {
	            if (!isScheduled_1) {
	                isScheduled_1 = true;
	                scheduler_1(function () {
	                    isScheduled_1 = false;
	                    if (!reaction.isDisposed)
	                        reaction.track(reactionRunner);
	                });
	            }
	        }, opts.onError);
	    }
	    function reactionRunner() {
	        view(reaction);
	    }
	    reaction.schedule();
	    return reaction.getDisposer();
	}
	var run = function (f) { return f(); };
	function createSchedulerFromOptions(opts) {
	    return opts.scheduler
	        ? opts.scheduler
	        : opts.delay
	            ? function (f) { return setTimeout(f, opts.delay); }
	            : run;
	}
	function reaction(expression, effect, opts) {
	    if (opts === void 0) { opts = EMPTY_OBJECT; }
	    if (process.env.NODE_ENV !== "production") {
	        invariant(typeof expression === "function", "First argument to reaction should be a function");
	        invariant(typeof opts === "object", "Third argument of reactions should be an object");
	    }
	    var name = opts.name || "Reaction@" + getNextId();
	    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
	    var runSync = !opts.scheduler && !opts.delay;
	    var scheduler = createSchedulerFromOptions(opts);
	    var firstTime = true;
	    var isScheduled = false;
	    var value;
	    var equals = opts.compareStructural
	        ? comparer.structural
	        : opts.equals || comparer.default;
	    var r = new Reaction(name, function () {
	        if (firstTime || runSync) {
	            reactionRunner();
	        }
	        else if (!isScheduled) {
	            isScheduled = true;
	            scheduler(reactionRunner);
	        }
	    }, opts.onError);
	    function reactionRunner() {
	        isScheduled = false; // Q: move into reaction runner?
	        if (r.isDisposed)
	            return;
	        var changed = false;
	        r.track(function () {
	            var nextValue = expression(r);
	            changed = firstTime || !equals(value, nextValue);
	            value = nextValue;
	        });
	        if (firstTime && opts.fireImmediately)
	            effectAction(value, r);
	        if (!firstTime && changed === true)
	            effectAction(value, r);
	        if (firstTime)
	            firstTime = false;
	    }
	    r.schedule();
	    return r.getDisposer();
	}
	function wrapErrorHandler(errorHandler, baseFn) {
	    return function () {
	        try {
	            return baseFn.apply(this, arguments);
	        }
	        catch (e) {
	            errorHandler.call(this, e);
	        }
	    };
	}
	
	function onBecomeObserved(thing, arg2, arg3) {
	    return interceptHook("onBecomeObserved", thing, arg2, arg3);
	}
	function onBecomeUnobserved(thing, arg2, arg3) {
	    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
	}
	function interceptHook(hook, thing, arg2, arg3) {
	    var atom = typeof arg2 === "string" ? getAtom(thing, arg2) : getAtom(thing);
	    var cb = typeof arg2 === "string" ? arg3 : arg2;
	    var listenersKey = hook + "Listeners";
	    if (atom[listenersKey]) {
	        atom[listenersKey].add(cb);
	    }
	    else {
	        atom[listenersKey] = new Set([cb]);
	    }
	    var orig = atom[hook];
	    if (typeof orig !== "function")
	        return fail(process.env.NODE_ENV !== "production" && "Not an atom that can be (un)observed");
	    return function () {
	        var hookListeners = atom[listenersKey];
	        if (hookListeners) {
	            hookListeners.delete(cb);
	            if (hookListeners.size === 0) {
	                delete atom[listenersKey];
	            }
	        }
	    };
	}
	
	function configure(options) {
	    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler;
	    if (options.isolateGlobalState === true) {
	        isolateGlobalState();
	    }
	    if (enforceActions !== undefined) {
	        if (typeof enforceActions === "boolean" || enforceActions === "strict")
	            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
	        var ea = void 0;
	        switch (enforceActions) {
	            case true:
	            case "observed":
	                ea = true;
	                break;
	            case false:
	            case "never":
	                ea = false;
	                break;
	            case "strict":
	            case "always":
	                ea = "strict";
	                break;
	            default:
	                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
	        }
	        globalState.enforceActions = ea;
	        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
	    }
	    if (computedRequiresReaction !== undefined) {
	        globalState.computedRequiresReaction = !!computedRequiresReaction;
	    }
	    if (computedConfigurable !== undefined) {
	        globalState.computedConfigurable = !!computedConfigurable;
	    }
	    if (disableErrorBoundaries !== undefined) {
	        if (disableErrorBoundaries === true)
	            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
	        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
	    }
	    if (reactionScheduler) {
	        setReactionScheduler(reactionScheduler);
	    }
	}
	
	function decorate(thing, decorators) {
	    process.env.NODE_ENV !== "production" &&
	        invariant(isPlainObject(decorators), "Decorators should be a key value map");
	    var target = typeof thing === "function" ? thing.prototype : thing;
	    var _loop_1 = function (prop) {
	        var propertyDecorators = decorators[prop];
	        if (!Array.isArray(propertyDecorators)) {
	            propertyDecorators = [propertyDecorators];
	        }
	        process.env.NODE_ENV !== "production" &&
	            invariant(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
	        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
	        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
	        if (newDescriptor)
	            Object.defineProperty(target, prop, newDescriptor);
	    };
	    for (var prop in decorators) {
	        _loop_1(prop);
	    }
	    return thing;
	}
	
	function extendObservable(target, properties, decorators, options) {
	    if (process.env.NODE_ENV !== "production") {
	        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
	        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
	        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
	    }
	    options = asCreateObservableOptions(options);
	    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
	    initializeInstance(target); // Fixes #1740
	    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
	    if (properties)
	        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
	    return target;
	}
	function getDefaultDecoratorFromObjectOptions(options) {
	    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
	}
	function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
	    var e_1, _a, e_2, _b;
	    if (process.env.NODE_ENV !== "production") {
	        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
	        if (decorators) {
	            var keys = getPlainObjectKeys(decorators);
	            try {
	                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
	                    var key = keys_1_1.value;
	                    if (!(key in properties))
	                        fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
	                }
	            }
	            catch (e_1_1) { e_1 = { error: e_1_1 }; }
	            finally {
	                try {
	                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
	                }
	                finally { if (e_1) throw e_1.error; }
	            }
	        }
	    }
	    startBatch();
	    try {
	        var keys = getPlainObjectKeys(properties);
	        try {
	            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
	                var key = keys_2_1.value;
	                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
	                if (process.env.NODE_ENV !== "production") {
	                    if (Object.getOwnPropertyDescriptor(target, key))
	                        fail("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + stringifyKey(key) + "' already exists on '" + target + "'");
	                    if (isComputed(descriptor.value))
	                        fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
	                }
	                var decorator = decorators && key in decorators
	                    ? decorators[key]
	                    : descriptor.get
	                        ? computedDecorator
	                        : defaultDecorator;
	                if (process.env.NODE_ENV !== "production" && typeof decorator !== "function")
	                    fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
	                var resultDescriptor = decorator(target, key, descriptor, true);
	                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
	                )
	                    Object.defineProperty(target, key, resultDescriptor);
	            }
	        }
	        catch (e_2_1) { e_2 = { error: e_2_1 }; }
	        finally {
	            try {
	                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
	            }
	            finally { if (e_2) throw e_2.error; }
	        }
	    }
	    finally {
	        endBatch();
	    }
	}
	
	function getDependencyTree(thing, property) {
	    return nodeToDependencyTree(getAtom(thing, property));
	}
	function nodeToDependencyTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (node.observing && node.observing.length > 0)
	        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
	    return result;
	}
	function getObserverTree(thing, property) {
	    return nodeToObserverTree(getAtom(thing, property));
	}
	function nodeToObserverTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (hasObservers(node))
	        result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
	    return result;
	}
	
	var generatorId = 0;
	function flow(generator) {
	    if (arguments.length !== 1)
	        fail(!!process.env.NODE_ENV && "Flow expects one 1 argument and cannot be used as decorator");
	    var name = generator.name || "<unnamed flow>";
	    // Implementation based on https://github.com/tj/co/blob/master/index.js
	    return function () {
	        var ctx = this;
	        var args = arguments;
	        var runId = ++generatorId;
	        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
	        var rejector;
	        var pendingPromise = undefined;
	        var promise = new Promise(function (resolve, reject) {
	            var stepId = 0;
	            rejector = reject;
	            function onFulfilled(res) {
	                pendingPromise = undefined;
	                var ret;
	                try {
	                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
	                }
	                catch (e) {
	                    return reject(e);
	                }
	                next(ret);
	            }
	            function onRejected(err) {
	                pendingPromise = undefined;
	                var ret;
	                try {
	                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
	                }
	                catch (e) {
	                    return reject(e);
	                }
	                next(ret);
	            }
	            function next(ret) {
	                if (ret && typeof ret.then === "function") {
	                    // an async iterator
	                    ret.then(next, reject);
	                    return;
	                }
	                if (ret.done)
	                    return resolve(ret.value);
	                pendingPromise = Promise.resolve(ret.value);
	                return pendingPromise.then(onFulfilled, onRejected);
	            }
	            onFulfilled(undefined); // kick off the process
	        });
	        promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
	            try {
	                if (pendingPromise)
	                    cancelPromise(pendingPromise);
	                // Finally block can return (or yield) stuff..
	                var res = gen.return();
	                // eat anything that promise would do, it's cancelled!
	                var yieldedPromise = Promise.resolve(res.value);
	                yieldedPromise.then(noop, noop);
	                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
	                // reject our original promise
	                rejector(new Error("FLOW_CANCELLED"));
	            }
	            catch (e) {
	                rejector(e); // there could be a throwing finally block
	            }
	        });
	        return promise;
	    };
	}
	function cancelPromise(promise) {
	    if (typeof promise.cancel === "function")
	        promise.cancel();
	}
	
	function interceptReads(thing, propOrHandler, handler) {
	    var target;
	    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
	        target = getAdministration(thing);
	    }
	    else if (isObservableObject(thing)) {
	        if (typeof propOrHandler !== "string")
	            return fail(process.env.NODE_ENV !== "production" &&
	                "InterceptReads can only be used with a specific property, not with an object in general");
	        target = getAdministration(thing, propOrHandler);
	    }
	    else {
	        return fail(process.env.NODE_ENV !== "production" &&
	            "Expected observable map, object or array as first array");
	    }
	    if (target.dehancer !== undefined)
	        return fail(process.env.NODE_ENV !== "production" && "An intercept reader was already established");
	    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
	    return function () {
	        target.dehancer = undefined;
	    };
	}
	
	function intercept(thing, propOrHandler, handler) {
	    if (typeof handler === "function")
	        return interceptProperty(thing, propOrHandler, handler);
	    else
	        return interceptInterceptable(thing, propOrHandler);
	}
	function interceptInterceptable(thing, handler) {
	    return getAdministration(thing).intercept(handler);
	}
	function interceptProperty(thing, property, handler) {
	    return getAdministration(thing, property).intercept(handler);
	}
	
	function _isComputed(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (isObservableObject(value) === false)
	            return false;
	        if (!value[$mobx].values.has(property))
	            return false;
	        var atom = getAtom(value, property);
	        return isComputedValue(atom);
	    }
	    return isComputedValue(value);
	}
	function isComputed(value) {
	    if (arguments.length > 1)
	        return fail(process.env.NODE_ENV !== "production" &&
	            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
	    return _isComputed(value);
	}
	function isComputedProp(value, propName) {
	    if (typeof propName !== "string")
	        return fail(process.env.NODE_ENV !== "production" &&
	            "isComputed expected a property name as second argument");
	    return _isComputed(value, propName);
	}
	
	function _isObservable(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (process.env.NODE_ENV !== "production" &&
	            (isObservableMap(value) || isObservableArray(value)))
	            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
	        if (isObservableObject(value)) {
	            return value[$mobx].values.has(property);
	        }
	        return false;
	    }
	    // For first check, see #701
	    return (isObservableObject(value) ||
	        !!value[$mobx] ||
	        isAtom(value) ||
	        isReaction(value) ||
	        isComputedValue(value));
	}
	function isObservable(value) {
	    if (arguments.length !== 1)
	        fail(process.env.NODE_ENV !== "production" &&
	            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
	    return _isObservable(value);
	}
	function isObservableProp(value, propName) {
	    if (typeof propName !== "string")
	        return fail(process.env.NODE_ENV !== "production" && "expected a property name as second argument");
	    return _isObservable(value, propName);
	}
	
	function keys(obj) {
	    if (isObservableObject(obj)) {
	        return obj[$mobx].getKeys();
	    }
	    if (isObservableMap(obj)) {
	        return Array.from(obj.keys());
	    }
	    if (isObservableSet(obj)) {
	        return Array.from(obj.keys());
	    }
	    if (isObservableArray(obj)) {
	        return obj.map(function (_, index) { return index; });
	    }
	    return fail(process.env.NODE_ENV !== "production" &&
	        "'keys()' can only be used on observable objects, arrays, sets and maps");
	}
	function values(obj) {
	    if (isObservableObject(obj)) {
	        return keys(obj).map(function (key) { return obj[key]; });
	    }
	    if (isObservableMap(obj)) {
	        return keys(obj).map(function (key) { return obj.get(key); });
	    }
	    if (isObservableSet(obj)) {
	        return Array.from(obj.values());
	    }
	    if (isObservableArray(obj)) {
	        return obj.slice();
	    }
	    return fail(process.env.NODE_ENV !== "production" &&
	        "'values()' can only be used on observable objects, arrays, sets and maps");
	}
	function entries(obj) {
	    if (isObservableObject(obj)) {
	        return keys(obj).map(function (key) { return [key, obj[key]]; });
	    }
	    if (isObservableMap(obj)) {
	        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
	    }
	    if (isObservableSet(obj)) {
	        return Array.from(obj.entries());
	    }
	    if (isObservableArray(obj)) {
	        return obj.map(function (key, index) { return [index, key]; });
	    }
	    return fail(process.env.NODE_ENV !== "production" &&
	        "'entries()' can only be used on observable objects, arrays and maps");
	}
	function set(obj, key, value) {
	    if (arguments.length === 2 && !isObservableSet(obj)) {
	        startBatch();
	        var values_1 = key;
	        try {
	            for (var key_1 in values_1)
	                set(obj, key_1, values_1[key_1]);
	        }
	        finally {
	            endBatch();
	        }
	        return;
	    }
	    if (isObservableObject(obj)) {
	        var adm = obj[$mobx];
	        var existingObservable = adm.values.get(key);
	        if (existingObservable) {
	            adm.write(key, value);
	        }
	        else {
	            adm.addObservableProp(key, value, adm.defaultEnhancer);
	        }
	    }
	    else if (isObservableMap(obj)) {
	        obj.set(key, value);
	    }
	    else if (isObservableSet(obj)) {
	        obj.add(key);
	    }
	    else if (isObservableArray(obj)) {
	        if (typeof key !== "number")
	            key = parseInt(key, 10);
	        invariant(key >= 0, "Not a valid index: '" + key + "'");
	        startBatch();
	        if (key >= obj.length)
	            obj.length = key + 1;
	        obj[key] = value;
	        endBatch();
	    }
	    else {
	        return fail(process.env.NODE_ENV !== "production" &&
	            "'set()' can only be used on observable objects, arrays and maps");
	    }
	}
	function remove(obj, key) {
	    if (isObservableObject(obj)) {
	        obj[$mobx].remove(key);
	    }
	    else if (isObservableMap(obj)) {
	        obj.delete(key);
	    }
	    else if (isObservableSet(obj)) {
	        obj.delete(key);
	    }
	    else if (isObservableArray(obj)) {
	        if (typeof key !== "number")
	            key = parseInt(key, 10);
	        invariant(key >= 0, "Not a valid index: '" + key + "'");
	        obj.splice(key, 1);
	    }
	    else {
	        return fail(process.env.NODE_ENV !== "production" &&
	            "'remove()' can only be used on observable objects, arrays and maps");
	    }
	}
	function has(obj, key) {
	    if (isObservableObject(obj)) {
	        // return keys(obj).indexOf(key) >= 0
	        var adm = getAdministration(obj);
	        return adm.has(key);
	    }
	    else if (isObservableMap(obj)) {
	        return obj.has(key);
	    }
	    else if (isObservableSet(obj)) {
	        return obj.has(key);
	    }
	    else if (isObservableArray(obj)) {
	        return key >= 0 && key < obj.length;
	    }
	    else {
	        return fail(process.env.NODE_ENV !== "production" &&
	            "'has()' can only be used on observable objects, arrays and maps");
	    }
	}
	function get(obj, key) {
	    if (!has(obj, key))
	        return undefined;
	    if (isObservableObject(obj)) {
	        return obj[key];
	    }
	    else if (isObservableMap(obj)) {
	        return obj.get(key);
	    }
	    else if (isObservableArray(obj)) {
	        return obj[key];
	    }
	    else {
	        return fail(process.env.NODE_ENV !== "production" &&
	            "'get()' can only be used on observable objects, arrays and maps");
	    }
	}
	
	function observe(thing, propOrCb, cbOrFire, fireImmediately) {
	    if (typeof cbOrFire === "function")
	        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
	    else
	        return observeObservable(thing, propOrCb, cbOrFire);
	}
	function observeObservable(thing, listener, fireImmediately) {
	    return getAdministration(thing).observe(listener, fireImmediately);
	}
	function observeObservableProperty(thing, property, listener, fireImmediately) {
	    return getAdministration(thing, property).observe(listener, fireImmediately);
	}
	
	var defaultOptions = {
	    detectCycles: true,
	    exportMapsAsObjects: true,
	    recurseEverything: false
	};
	function cache(map, key, value, options) {
	    if (options.detectCycles)
	        map.set(key, value);
	    return value;
	}
	function toJSHelper(source, options, __alreadySeen) {
	    if (!options.recurseEverything && !isObservable(source))
	        return source;
	    if (typeof source !== "object")
	        return source;
	    // Directly return null if source is null
	    if (source === null)
	        return null;
	    // Directly return the Date object itself if contained in the observable
	    if (source instanceof Date)
	        return source;
	    if (isObservableValue(source))
	        return toJSHelper(source.get(), options, __alreadySeen);
	    // make sure we track the keys of the object
	    if (isObservable(source))
	        keys(source);
	    var detectCycles = options.detectCycles === true;
	    if (detectCycles && source !== null && __alreadySeen.has(source)) {
	        return __alreadySeen.get(source);
	    }
	    if (isObservableArray(source) || Array.isArray(source)) {
	        var res_1 = cache(__alreadySeen, source, [], options);
	        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
	        res_1.length = toAdd.length;
	        for (var i = 0, l = toAdd.length; i < l; i++)
	            res_1[i] = toAdd[i];
	        return res_1;
	    }
	    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
	        if (options.exportMapsAsObjects === false) {
	            var res_2 = cache(__alreadySeen, source, new Set(), options);
	            source.forEach(function (value) {
	                res_2.add(toJSHelper(value, options, __alreadySeen));
	            });
	            return res_2;
	        }
	        else {
	            var res_3 = cache(__alreadySeen, source, [], options);
	            source.forEach(function (value) {
	                res_3.push(toJSHelper(value, options, __alreadySeen));
	            });
	            return res_3;
	        }
	    }
	    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
	        if (options.exportMapsAsObjects === false) {
	            var res_4 = cache(__alreadySeen, source, new Map(), options);
	            source.forEach(function (value, key) {
	                res_4.set(key, toJSHelper(value, options, __alreadySeen));
	            });
	            return res_4;
	        }
	        else {
	            var res_5 = cache(__alreadySeen, source, {}, options);
	            source.forEach(function (value, key) {
	                res_5[key] = toJSHelper(value, options, __alreadySeen);
	            });
	            return res_5;
	        }
	    }
	    // Fallback to the situation that source is an ObservableObject or a plain object
	    var res = cache(__alreadySeen, source, {}, options);
	    getPlainObjectKeys(source).forEach(function (key) {
	        res[key] = toJSHelper(source[key], options, __alreadySeen);
	    });
	    return res;
	}
	function toJS(source, options) {
	    // backward compatibility
	    if (typeof options === "boolean")
	        options = { detectCycles: options };
	    if (!options)
	        options = defaultOptions;
	    options.detectCycles =
	        options.detectCycles === undefined
	            ? options.recurseEverything === true
	            : options.detectCycles === true;
	    var __alreadySeen;
	    if (options.detectCycles)
	        __alreadySeen = new Map();
	    return toJSHelper(source, options, __alreadySeen);
	}
	
	function trace() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    var enterBreakPoint = false;
	    if (typeof args[args.length - 1] === "boolean")
	        enterBreakPoint = args.pop();
	    var derivation = getAtomFromArgs(args);
	    if (!derivation) {
	        return fail(process.env.NODE_ENV !== "production" &&
	            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
	    }
	    if (derivation.isTracing === TraceMode.NONE) {
	        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
	    }
	    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
	}
	function getAtomFromArgs(args) {
	    switch (args.length) {
	        case 0:
	            return globalState.trackingDerivation;
	        case 1:
	            return getAtom(args[0]);
	        case 2:
	            return getAtom(args[0], args[1]);
	    }
	}
	
	/**
	 * During a transaction no views are updated until the end of the transaction.
	 * The transaction will be run synchronously nonetheless.
	 *
	 * @param action a function that updates some reactive state
	 * @returns any value that was returned by the 'action' parameter.
	 */
	function transaction(action, thisArg) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    startBatch();
	    try {
	        return action.apply(thisArg);
	    }
	    finally {
	        endBatch();
	    }
	}
	
	function when(predicate, arg1, arg2) {
	    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
	        return whenPromise(predicate, arg1);
	    return _when(predicate, arg1, arg2 || {});
	}
	function _when(predicate, effect, opts) {
	    var timeoutHandle;
	    if (typeof opts.timeout === "number") {
	        timeoutHandle = setTimeout(function () {
	            if (!disposer[$mobx].isDisposed) {
	                disposer();
	                var error = new Error("WHEN_TIMEOUT");
	                if (opts.onError)
	                    opts.onError(error);
	                else
	                    throw error;
	            }
	        }, opts.timeout);
	    }
	    opts.name = opts.name || "When@" + getNextId();
	    var effectAction = createAction(opts.name + "-effect", effect);
	    var disposer = autorun(function (r) {
	        if (predicate()) {
	            r.dispose();
	            if (timeoutHandle)
	                clearTimeout(timeoutHandle);
	            effectAction();
	        }
	    }, opts);
	    return disposer;
	}
	function whenPromise(predicate, opts) {
	    if (process.env.NODE_ENV !== "production" && opts && opts.onError)
	        return fail("the options 'onError' and 'promise' cannot be combined");
	    var cancel;
	    var res = new Promise(function (resolve, reject) {
	        var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
	        cancel = function () {
	            disposer();
	            reject("WHEN_CANCELLED");
	        };
	    });
	    res.cancel = cancel;
	    return res;
	}
	
	function getAdm(target) {
	    return target[$mobx];
	}
	function isPropertyKey(val) {
	    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
	}
	// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
	// and skip either the internal values map, or the base object with its property descriptors!
	var objectProxyTraps = {
	    has: function (target, name) {
	        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
	            return true;
	        var adm = getAdm(target);
	        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
	        // TODO: check performance stats!
	        // if (adm.values.get(name as string)) return true
	        if (isPropertyKey(name))
	            return adm.has(name);
	        return name in target;
	    },
	    get: function (target, name) {
	        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
	            return target[name];
	        var adm = getAdm(target);
	        var observable = adm.values.get(name);
	        if (observable instanceof Atom) {
	            var result = observable.get();
	            if (result === undefined) {
	                // This fixes #1796, because deleting a prop that has an
	                // undefined value won't retrigger a observer (no visible effect),
	                // the autorun wouldn't subscribe to future key changes (see also next comment)
	                adm.has(name);
	            }
	            return result;
	        }
	        // make sure we start listening to future keys
	        // note that we only do this here for optimization
	        if (isPropertyKey(name))
	            adm.has(name);
	        return target[name];
	    },
	    set: function (target, name, value) {
	        if (!isPropertyKey(name))
	            return false;
	        set(target, name, value);
	        return true;
	    },
	    deleteProperty: function (target, name) {
	        if (!isPropertyKey(name))
	            return false;
	        var adm = getAdm(target);
	        adm.remove(name);
	        return true;
	    },
	    ownKeys: function (target) {
	        var adm = getAdm(target);
	        adm.keysAtom.reportObserved();
	        return Reflect.ownKeys(target);
	    },
	    preventExtensions: function (target) {
	        fail("Dynamic observable objects cannot be frozen");
	        return false;
	    }
	};
	function createDynamicObservableObject(base) {
	    var proxy = new Proxy(base, objectProxyTraps);
	    base[$mobx].proxy = proxy;
	    return proxy;
	}
	
	function hasInterceptors(interceptable) {
	    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
	}
	function registerInterceptor(interceptable, handler) {
	    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
	    interceptors.push(handler);
	    return once(function () {
	        var idx = interceptors.indexOf(handler);
	        if (idx !== -1)
	            interceptors.splice(idx, 1);
	    });
	}
	function interceptChange(interceptable, change) {
	    var prevU = untrackedStart();
	    try {
	        var interceptors = interceptable.interceptors;
	        if (interceptors)
	            for (var i = 0, l = interceptors.length; i < l; i++) {
	                change = interceptors[i](change);
	                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
	                if (!change)
	                    break;
	            }
	        return change;
	    }
	    finally {
	        untrackedEnd(prevU);
	    }
	}
	
	function hasListeners(listenable) {
	    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
	}
	function registerListener(listenable, handler) {
	    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
	    listeners.push(handler);
	    return once(function () {
	        var idx = listeners.indexOf(handler);
	        if (idx !== -1)
	            listeners.splice(idx, 1);
	    });
	}
	function notifyListeners(listenable, change) {
	    var prevU = untrackedStart();
	    var listeners = listenable.changeListeners;
	    if (!listeners)
	        return;
	    listeners = listeners.slice();
	    for (var i = 0, l = listeners.length; i < l; i++) {
	        listeners[i](change);
	    }
	    untrackedEnd(prevU);
	}
	
	var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
	var arrayTraps = {
	    get: function (target, name) {
	        if (name === $mobx)
	            return target[$mobx];
	        if (name === "length")
	            return target[$mobx].getArrayLength();
	        if (typeof name === "number") {
	            return arrayExtensions.get.call(target, name);
	        }
	        if (typeof name === "string" && !isNaN(name)) {
	            return arrayExtensions.get.call(target, parseInt(name));
	        }
	        if (arrayExtensions.hasOwnProperty(name)) {
	            return arrayExtensions[name];
	        }
	        return target[name];
	    },
	    set: function (target, name, value) {
	        if (name === "length") {
	            target[$mobx].setArrayLength(value);
	        }
	        if (typeof name === "number") {
	            arrayExtensions.set.call(target, name, value);
	        }
	        if (typeof name === "symbol" || isNaN(name)) {
	            target[name] = value;
	        }
	        else {
	            // numeric string
	            arrayExtensions.set.call(target, parseInt(name), value);
	        }
	        return true;
	    },
	    preventExtensions: function (target) {
	        fail("Observable arrays cannot be frozen");
	        return false;
	    }
	};
	function createObservableArray(initialValues, enhancer, name, owned) {
	    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
	    if (owned === void 0) { owned = false; }
	    var adm = new ObservableArrayAdministration(name, enhancer, owned);
	    addHiddenFinalProp(adm.values, $mobx, adm);
	    var proxy = new Proxy(adm.values, arrayTraps);
	    adm.proxy = proxy;
	    if (initialValues && initialValues.length) {
	        var prev = allowStateChangesStart(true);
	        adm.spliceWithArray(0, 0, initialValues);
	        allowStateChangesEnd(prev);
	    }
	    return proxy;
	}
	var ObservableArrayAdministration = /** @class */ (function () {
	    function ObservableArrayAdministration(name, enhancer, owned) {
	        this.owned = owned;
	        this.values = [];
	        this.proxy = undefined;
	        this.lastKnownLength = 0;
	        this.atom = new Atom(name || "ObservableArray@" + getNextId());
	        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
	    }
	    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined)
	            return this.dehancer(value);
	        return value;
	    };
	    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
	        if (this.dehancer !== undefined && values.length > 0)
	            return values.map(this.dehancer);
	        return values;
	    };
	    ObservableArrayAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        if (fireImmediately) {
	            listener({
	                object: this.proxy,
	                type: "splice",
	                index: 0,
	                added: this.values.slice(),
	                addedCount: this.values.length,
	                removed: [],
	                removedCount: 0
	            });
	        }
	        return registerListener(this, listener);
	    };
	    ObservableArrayAdministration.prototype.getArrayLength = function () {
	        this.atom.reportObserved();
	        return this.values.length;
	    };
	    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
	        if (typeof newLength !== "number" || newLength < 0)
	            throw new Error("[mobx.array] Out of range: " + newLength);
	        var currentLength = this.values.length;
	        if (newLength === currentLength)
	            return;
	        else if (newLength > currentLength) {
	            var newItems = new Array(newLength - currentLength);
	            for (var i = 0; i < newLength - currentLength; i++)
	                newItems[i] = undefined; // No Array.fill everywhere...
	            this.spliceWithArray(currentLength, 0, newItems);
	        }
	        else
	            this.spliceWithArray(newLength, currentLength - newLength);
	    };
	    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
	        if (oldLength !== this.lastKnownLength)
	            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
	        this.lastKnownLength += delta;
	    };
	    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this.atom);
	        var length = this.values.length;
	        if (index === undefined)
	            index = 0;
	        else if (index > length)
	            index = length;
	        else if (index < 0)
	            index = Math.max(0, length + index);
	        if (arguments.length === 1)
	            deleteCount = length - index;
	        else if (deleteCount === undefined || deleteCount === null)
	            deleteCount = 0;
	        else
	            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
	        if (newItems === undefined)
	            newItems = EMPTY_ARRAY;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.proxy,
	                type: "splice",
	                index: index,
	                removedCount: deleteCount,
	                added: newItems
	            });
	            if (!change)
	                return EMPTY_ARRAY;
	            deleteCount = change.removedCount;
	            newItems = change.added;
	        }
	        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
	        if (process.env.NODE_ENV !== "production") {
	            var lengthDelta = newItems.length - deleteCount;
	            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
	        }
	        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
	        if (deleteCount !== 0 || newItems.length !== 0)
	            this.notifyArraySplice(index, newItems, res);
	        return this.dehanceValues(res);
	    };
	    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
	        var _a;
	        if (newItems.length < MAX_SPLICE_SIZE) {
	            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
	        }
	        else {
	            var res = this.values.slice(index, index + deleteCount);
	            this.values = this.values
	                .slice(0, index)
	                .concat(newItems, this.values.slice(index + deleteCount));
	            return res;
	        }
	    };
	    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                object: this.proxy,
	                type: "update",
	                index: index,
	                newValue: newValue,
	                oldValue: oldValue
	            }
	            : null;
	        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
	        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
	        if (notifySpy && process.env.NODE_ENV !== "production")
	            spyReportStart(__assign({}, change, { name: this.atom.name }));
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy && process.env.NODE_ENV !== "production")
	            spyReportEnd();
	    };
	    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                object: this.proxy,
	                type: "splice",
	                index: index,
	                removed: removed,
	                added: added,
	                removedCount: removed.length,
	                addedCount: added.length
	            }
	            : null;
	        if (notifySpy && process.env.NODE_ENV !== "production")
	            spyReportStart(__assign({}, change, { name: this.atom.name }));
	        this.atom.reportChanged();
	        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy && process.env.NODE_ENV !== "production")
	            spyReportEnd();
	    };
	    return ObservableArrayAdministration;
	}());
	var arrayExtensions = {
	    intercept: function (handler) {
	        return this[$mobx].intercept(handler);
	    },
	    observe: function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        var adm = this[$mobx];
	        return adm.observe(listener, fireImmediately);
	    },
	    clear: function () {
	        return this.splice(0);
	    },
	    replace: function (newItems) {
	        var adm = this[$mobx];
	        return adm.spliceWithArray(0, adm.values.length, newItems);
	    },
	    /**
	     * Converts this array back to a (shallow) javascript structure.
	     * For a deep clone use mobx.toJS
	     */
	    toJS: function () {
	        return this.slice();
	    },
	    toJSON: function () {
	        // Used by JSON.stringify
	        return this.toJS();
	    },
	    /*
	     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
	     * since these functions alter the inner structure of the array, the have side effects.
	     * Because the have side effects, they should not be used in computed function,
	     * and for that reason the do not call dependencyState.notifyObserved
	     */
	    splice: function (index, deleteCount) {
	        var newItems = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            newItems[_i - 2] = arguments[_i];
	        }
	        var adm = this[$mobx];
	        switch (arguments.length) {
	            case 0:
	                return [];
	            case 1:
	                return adm.spliceWithArray(index);
	            case 2:
	                return adm.spliceWithArray(index, deleteCount);
	        }
	        return adm.spliceWithArray(index, deleteCount, newItems);
	    },
	    spliceWithArray: function (index, deleteCount, newItems) {
	        var adm = this[$mobx];
	        return adm.spliceWithArray(index, deleteCount, newItems);
	    },
	    push: function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this[$mobx];
	        adm.spliceWithArray(adm.values.length, 0, items);
	        return adm.values.length;
	    },
	    pop: function () {
	        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
	    },
	    shift: function () {
	        return this.splice(0, 1)[0];
	    },
	    unshift: function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this[$mobx];
	        adm.spliceWithArray(0, 0, items);
	        return adm.values.length;
	    },
	    reverse: function () {
	        // reverse by default mutates in place before returning the result
	        // which makes it both a 'derivation' and a 'mutation'.
	        // so we deviate from the default and just make it an dervitation
	        if (process.env.NODE_ENV !== "production") {
	            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
	        }
	        var clone = this.slice();
	        return clone.reverse.apply(clone, arguments);
	    },
	    sort: function (compareFn) {
	        // sort by default mutates in place before returning the result
	        // which goes against all good practices. Let's not change the array in place!
	        if (process.env.NODE_ENV !== "production") {
	            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
	        }
	        var clone = this.slice();
	        return clone.sort.apply(clone, arguments);
	    },
	    remove: function (value) {
	        var adm = this[$mobx];
	        var idx = adm.dehanceValues(adm.values).indexOf(value);
	        if (idx > -1) {
	            this.splice(idx, 1);
	            return true;
	        }
	        return false;
	    },
	    get: function (index) {
	        var adm = this[$mobx];
	        if (adm) {
	            if (index < adm.values.length) {
	                adm.atom.reportObserved();
	                return adm.dehanceValue(adm.values[index]);
	            }
	            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
	        }
	        return undefined;
	    },
	    set: function (index, newValue) {
	        var adm = this[$mobx];
	        var values = adm.values;
	        if (index < values.length) {
	            // update at index in range
	            checkIfStateModificationsAreAllowed(adm.atom);
	            var oldValue = values[index];
	            if (hasInterceptors(adm)) {
	                var change = interceptChange(adm, {
	                    type: "update",
	                    object: adm.proxy,
	                    index: index,
	                    newValue: newValue
	                });
	                if (!change)
	                    return;
	                newValue = change.newValue;
	            }
	            newValue = adm.enhancer(newValue, oldValue);
	            var changed = newValue !== oldValue;
	            if (changed) {
	                values[index] = newValue;
	                adm.notifyArrayChildUpdate(index, newValue, oldValue);
	            }
	        }
	        else if (index === values.length) {
	            // add a new item
	            adm.spliceWithArray(index, 0, [newValue]);
	        }
	        else {
	            // out of bounds
	            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
	        }
	    }
	};
	[
	    "concat",
	    "every",
	    "filter",
	    "forEach",
	    "indexOf",
	    "join",
	    "lastIndexOf",
	    "map",
	    "reduce",
	    "reduceRight",
	    "slice",
	    "some",
	    "toString",
	    "toLocaleString"
	].forEach(function (funcName) {
	    arrayExtensions[funcName] = function () {
	        var adm = this[$mobx];
	        adm.atom.reportObserved();
	        var res = adm.dehanceValues(adm.values);
	        return res[funcName].apply(res, arguments);
	    };
	});
	var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
	function isObservableArray(thing) {
	    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
	}
	
	var _a;
	var ObservableMapMarker = {};
	// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
	// But: https://github.com/mobxjs/mobx/issues/1556
	var ObservableMap = /** @class */ (function () {
	    function ObservableMap(initialData, enhancer, name) {
	        if (enhancer === void 0) { enhancer = deepEnhancer; }
	        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
	        this.enhancer = enhancer;
	        this.name = name;
	        this[_a] = ObservableMapMarker;
	        this._keysAtom = createAtom(this.name + ".keys()");
	        this[Symbol.toStringTag] = "Map";
	        if (typeof Map !== "function") {
	            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
	        }
	        this._data = new Map();
	        this._hasMap = new Map();
	        this.merge(initialData);
	    }
	    ObservableMap.prototype._has = function (key) {
	        return this._data.has(key);
	    };
	    ObservableMap.prototype.has = function (key) {
	        var _this = this;
	        if (!globalState.trackingDerivation)
	            return this._has(key);
	        var entry = this._hasMap.get(key);
	        if (!entry) {
	            // todo: replace with atom (breaking change)
	            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
	            this._hasMap.set(key, newEntry);
	            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
	        }
	        return entry.get();
	    };
	    ObservableMap.prototype.set = function (key, value) {
	        var hasKey = this._has(key);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: hasKey ? "update" : "add",
	                object: this,
	                newValue: value,
	                name: key
	            });
	            if (!change)
	                return this;
	            value = change.newValue;
	        }
	        if (hasKey) {
	            this._updateValue(key, value);
	        }
	        else {
	            this._addValue(key, value);
	        }
	        return this;
	    };
	    ObservableMap.prototype.delete = function (key) {
	        var _this = this;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "delete",
	                object: this,
	                name: key
	            });
	            if (!change)
	                return false;
	        }
	        if (this._has(key)) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "delete",
	                    object: this,
	                    oldValue: this._data.get(key).value,
	                    name: key
	                }
	                : null;
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            transaction(function () {
	                _this._keysAtom.reportChanged();
	                _this._updateHasMapEntry(key, false);
	                var observable = _this._data.get(key);
	                observable.setNewValue(undefined);
	                _this._data.delete(key);
	            });
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportEnd();
	            return true;
	        }
	        return false;
	    };
	    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
	        var entry = this._hasMap.get(key);
	        if (entry) {
	            entry.setNewValue(value);
	        }
	    };
	    ObservableMap.prototype._updateValue = function (key, newValue) {
	        var observable = this._data.get(key);
	        newValue = observable.prepareNewValue(newValue);
	        if (newValue !== globalState.UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "update",
	                    object: this,
	                    oldValue: observable.value,
	                    name: key,
	                    newValue: newValue
	                }
	                : null;
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportEnd();
	        }
	    };
	    ObservableMap.prototype._addValue = function (key, newValue) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this._keysAtom);
	        transaction(function () {
	            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
	            _this._data.set(key, observable);
	            newValue = observable.value; // value might have been changed
	            _this._updateHasMapEntry(key, true);
	            _this._keysAtom.reportChanged();
	        });
	        var notifySpy = isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                type: "add",
	                object: this,
	                name: key,
	                newValue: newValue
	            }
	            : null;
	        if (notifySpy && process.env.NODE_ENV !== "production")
	            spyReportStart(__assign({}, change, { name: this.name, key: key }));
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy && process.env.NODE_ENV !== "production")
	            spyReportEnd();
	    };
	    ObservableMap.prototype.get = function (key) {
	        if (this.has(key))
	            return this.dehanceValue(this._data.get(key).get());
	        return this.dehanceValue(undefined);
	    };
	    ObservableMap.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined) {
	            return this.dehancer(value);
	        }
	        return value;
	    };
	    ObservableMap.prototype.keys = function () {
	        this._keysAtom.reportObserved();
	        return this._data.keys();
	    };
	    ObservableMap.prototype.values = function () {
	        var self = this;
	        var nextIndex = 0;
	        var keys = Array.from(this.keys());
	        return makeIterable({
	            next: function () {
	                return nextIndex < keys.length
	                    ? { value: self.get(keys[nextIndex++]), done: false }
	                    : { done: true };
	            }
	        });
	    };
	    ObservableMap.prototype.entries = function () {
	        var self = this;
	        var nextIndex = 0;
	        var keys = Array.from(this.keys());
	        return makeIterable({
	            next: function () {
	                if (nextIndex < keys.length) {
	                    var key = keys[nextIndex++];
	                    return {
	                        value: [key, self.get(key)],
	                        done: false
	                    };
	                }
	                return { done: true };
	            }
	        });
	    };
	    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
	        return this.entries();
	    };
	    ObservableMap.prototype.forEach = function (callback, thisArg) {
	        var e_1, _a;
	        try {
	            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
	                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
	                callback.call(thisArg, value, key, this);
	            }
	        }
	        catch (e_1_1) { e_1 = { error: e_1_1 }; }
	        finally {
	            try {
	                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	            }
	            finally { if (e_1) throw e_1.error; }
	        }
	    };
	    /** Merge another object into this object, returns this. */
	    ObservableMap.prototype.merge = function (other) {
	        var _this = this;
	        if (isObservableMap(other)) {
	            other = other.toJS();
	        }
	        transaction(function () {
	            if (isPlainObject(other))
	                getPlainObjectKeys(other).forEach(function (key) { return _this.set(key, other[key]); });
	            else if (Array.isArray(other))
	                other.forEach(function (_a) {
	                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
	                    return _this.set(key, value);
	                });
	            else if (isES6Map(other)) {
	                if (other.constructor !== Map)
	                    fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
	                other.forEach(function (value, key) { return _this.set(key, value); });
	            }
	            else if (other !== null && other !== undefined)
	                fail("Cannot initialize map from " + other);
	        });
	        return this;
	    };
	    ObservableMap.prototype.clear = function () {
	        var _this = this;
	        transaction(function () {
	            untracked(function () {
	                var e_2, _a;
	                try {
	                    for (var _b = __values(_this.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
	                        var key = _c.value;
	                        _this.delete(key);
	                    }
	                }
	                catch (e_2_1) { e_2 = { error: e_2_1 }; }
	                finally {
	                    try {
	                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	                    }
	                    finally { if (e_2) throw e_2.error; }
	                }
	            });
	        });
	    };
	    ObservableMap.prototype.replace = function (values) {
	        var _this = this;
	        transaction(function () {
	            // grab all the keys that are present in the new map but not present in the current map
	            // and delete them from the map, then merge the new map
	            // this will cause reactions only on changed values
	            var newKeys = getMapLikeKeys(values);
	            var oldKeys = Array.from(_this.keys());
	            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
	            missingKeys.forEach(function (k) { return _this.delete(k); });
	            _this.merge(values);
	        });
	        return this;
	    };
	    Object.defineProperty(ObservableMap.prototype, "size", {
	        get: function () {
	            this._keysAtom.reportObserved();
	            return this._data.size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns a plain object that represents this map.
	     * Note that all the keys being stringified.
	     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
	     */
	    ObservableMap.prototype.toPOJO = function () {
	        var e_3, _a;
	        var res = {};
	        try {
	            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
	                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
	                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
	                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
	            }
	        }
	        catch (e_3_1) { e_3 = { error: e_3_1 }; }
	        finally {
	            try {
	                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	            }
	            finally { if (e_3) throw e_3.error; }
	        }
	        return res;
	    };
	    /**
	     * Returns a shallow non observable object clone of this map.
	     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
	     */
	    ObservableMap.prototype.toJS = function () {
	        return new Map(this);
	    };
	    ObservableMap.prototype.toJSON = function () {
	        // Used by JSON.stringify
	        return this.toPOJO();
	    };
	    ObservableMap.prototype.toString = function () {
	        var _this = this;
	        return (this.name +
	            "[{ " +
	            Array.from(this.keys())
	                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
	                .join(", ") +
	            " }]");
	    };
	    /**
	     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
	     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
	     * for callback details
	     */
	    ObservableMap.prototype.observe = function (listener, fireImmediately) {
	        process.env.NODE_ENV !== "production" &&
	            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
	        return registerListener(this, listener);
	    };
	    ObservableMap.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableMap;
	}());
	/* 'var' fixes small-build issue */
	var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
	
	var _a$1;
	var ObservableSetMarker = {};
	var ObservableSet = /** @class */ (function () {
	    function ObservableSet(initialData, enhancer, name) {
	        if (enhancer === void 0) { enhancer = deepEnhancer; }
	        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
	        this.name = name;
	        this[_a$1] = ObservableSetMarker;
	        this._data = new Set();
	        this._atom = createAtom(this.name);
	        this[Symbol.toStringTag] = "Set";
	        if (typeof Set !== "function") {
	            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
	        }
	        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
	        if (initialData) {
	            this.replace(initialData);
	        }
	    }
	    ObservableSet.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined) {
	            return this.dehancer(value);
	        }
	        return value;
	    };
	    ObservableSet.prototype.clear = function () {
	        var _this = this;
	        transaction(function () {
	            untracked(function () {
	                var e_1, _a;
	                try {
	                    for (var _b = __values(_this._data.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
	                        var value = _c.value;
	                        _this.delete(value);
	                    }
	                }
	                catch (e_1_1) { e_1 = { error: e_1_1 }; }
	                finally {
	                    try {
	                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	                    }
	                    finally { if (e_1) throw e_1.error; }
	                }
	            });
	        });
	    };
	    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
	        var e_2, _a;
	        try {
	            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
	                var value = _c.value;
	                callbackFn.call(thisArg, value, value, this);
	            }
	        }
	        catch (e_2_1) { e_2 = { error: e_2_1 }; }
	        finally {
	            try {
	                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	            }
	            finally { if (e_2) throw e_2.error; }
	        }
	    };
	    Object.defineProperty(ObservableSet.prototype, "size", {
	        get: function () {
	            this._atom.reportObserved();
	            return this._data.size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ObservableSet.prototype.add = function (value) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this._atom);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "add",
	                object: this,
	                newValue: value
	            });
	            if (!change)
	                return this;
	            // TODO: ideally, value = change.value would be done here, so that values can be
	            // changed by interceptor. Same applies for other Set and Map api's.
	        }
	        if (!this.has(value)) {
	            transaction(function () {
	                _this._data.add(_this.enhancer(value, undefined));
	                _this._atom.reportChanged();
	            });
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "add",
	                    object: this,
	                    newValue: value
	                }
	                : null;
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportStart(change);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportEnd();
	        }
	        return this;
	    };
	    ObservableSet.prototype.delete = function (value) {
	        var _this = this;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "delete",
	                object: this,
	                oldValue: value
	            });
	            if (!change)
	                return false;
	        }
	        if (this.has(value)) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "delete",
	                    object: this,
	                    oldValue: value
	                }
	                : null;
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportStart(__assign({}, change, { name: this.name }));
	            transaction(function () {
	                _this._atom.reportChanged();
	                _this._data.delete(value);
	            });
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportEnd();
	            return true;
	        }
	        return false;
	    };
	    ObservableSet.prototype.has = function (value) {
	        this._atom.reportObserved();
	        return this._data.has(this.dehanceValue(value));
	    };
	    ObservableSet.prototype.entries = function () {
	        var nextIndex = 0;
	        var keys = Array.from(this.keys());
	        var values = Array.from(this.values());
	        return makeIterable({
	            next: function () {
	                var index = nextIndex;
	                nextIndex += 1;
	                return index < values.length
	                    ? { value: [keys[index], values[index]], done: false }
	                    : { done: true };
	            }
	        });
	    };
	    ObservableSet.prototype.keys = function () {
	        return this.values();
	    };
	    ObservableSet.prototype.values = function () {
	        this._atom.reportObserved();
	        var self = this;
	        var nextIndex = 0;
	        var observableValues = Array.from(this._data.values());
	        return makeIterable({
	            next: function () {
	                return nextIndex < observableValues.length
	                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
	                    : { done: true };
	            }
	        });
	    };
	    ObservableSet.prototype.replace = function (other) {
	        var _this = this;
	        if (isObservableSet(other)) {
	            other = other.toJS();
	        }
	        transaction(function () {
	            if (Array.isArray(other)) {
	                _this.clear();
	                other.forEach(function (value) { return _this.add(value); });
	            }
	            else if (isES6Set(other)) {
	                _this.clear();
	                other.forEach(function (value) { return _this.add(value); });
	            }
	            else if (other !== null && other !== undefined) {
	                fail("Cannot initialize set from " + other);
	            }
	        });
	        return this;
	    };
	    ObservableSet.prototype.observe = function (listener, fireImmediately) {
	        // TODO 'fireImmediately' can be true?
	        process.env.NODE_ENV !== "production" &&
	            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
	        return registerListener(this, listener);
	    };
	    ObservableSet.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableSet.prototype.toJS = function () {
	        return new Set(this);
	    };
	    ObservableSet.prototype.toString = function () {
	        return this.name + "[ " + Array.from(this).join(", ") + " ]";
	    };
	    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
	        return this.values();
	    };
	    return ObservableSet;
	}());
	var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);
	
	var ObservableObjectAdministration = /** @class */ (function () {
	    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
	        if (values === void 0) { values = new Map(); }
	        this.target = target;
	        this.values = values;
	        this.name = name;
	        this.defaultEnhancer = defaultEnhancer;
	        this.keysAtom = new Atom(name + ".keys");
	    }
	    ObservableObjectAdministration.prototype.read = function (key) {
	        return this.values.get(key).get();
	    };
	    ObservableObjectAdministration.prototype.write = function (key, newValue) {
	        var instance = this.target;
	        var observable = this.values.get(key);
	        if (observable instanceof ComputedValue) {
	            observable.set(newValue);
	            return;
	        }
	        // intercept
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "update",
	                object: this.proxy || instance,
	                name: key,
	                newValue: newValue
	            });
	            if (!change)
	                return;
	            newValue = change.newValue;
	        }
	        newValue = observable.prepareNewValue(newValue);
	        // notify spy & observers
	        if (newValue !== globalState.UNCHANGED) {
	            var notify = hasListeners(this);
	            var notifySpy = isSpyEnabled();
	            var change = notify || notifySpy
	                ? {
	                    type: "update",
	                    object: this.proxy || instance,
	                    oldValue: observable.value,
	                    name: key,
	                    newValue: newValue
	                }
	                : null;
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportEnd();
	        }
	    };
	    ObservableObjectAdministration.prototype.has = function (key) {
	        var map = this.pendingKeys || (this.pendingKeys = new Map());
	        var entry = map.get(key);
	        if (entry)
	            return entry.get();
	        else {
	            var exists = !!this.values.get(key);
	            // Possible optimization: Don't have a separate map for non existing keys,
	            // but store them in the values map instead, using a special symbol to denote "not existing"
	            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
	            map.set(key, entry);
	            return entry.get(); // read to subscribe
	        }
	    };
	    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
	        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
	        var target = this.target;
	        assertPropertyConfigurable(target, propName);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.proxy || target,
	                name: propName,
	                type: "add",
	                newValue: newValue
	            });
	            if (!change)
	                return;
	            newValue = change.newValue;
	        }
	        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
	        this.values.set(propName, observable);
	        newValue = observable.value; // observableValue might have changed it
	        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
	        this.notifyPropertyAddition(propName, newValue);
	    };
	    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
	    propName, options) {
	        var target = this.target;
	        options.name = options.name || this.name + "." + stringifyKey(propName);
	        this.values.set(propName, new ComputedValue(options));
	        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
	            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
	    };
	    ObservableObjectAdministration.prototype.remove = function (key) {
	        if (!this.values.has(key))
	            return;
	        var target = this.target;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.proxy || target,
	                name: key,
	                type: "remove"
	            });
	            if (!change)
	                return;
	        }
	        try {
	            startBatch();
	            var notify = hasListeners(this);
	            var notifySpy = isSpyEnabled();
	            var oldObservable = this.values.get(key);
	            var oldValue = oldObservable && oldObservable.get();
	            oldObservable && oldObservable.set(undefined);
	            // notify key and keyset listeners
	            this.keysAtom.reportChanged();
	            this.values.delete(key);
	            if (this.pendingKeys) {
	                var entry = this.pendingKeys.get(key);
	                if (entry)
	                    entry.set(false);
	            }
	            // delete the prop
	            delete this.target[key];
	            var change = notify || notifySpy
	                ? {
	                    type: "remove",
	                    object: this.proxy || target,
	                    oldValue: oldValue,
	                    name: key
	                }
	                : null;
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportStart(__assign({}, change, { name: this.name, key: key }));
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && process.env.NODE_ENV !== "production")
	                spyReportEnd();
	        }
	        finally {
	            endBatch();
	        }
	    };
	    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
	        /**
	         * This happens if a property is accessed through the prototype chain, but the property was
	         * declared directly as own property on the prototype.
	         *
	         * E.g.:
	         * class A {
	         * }
	         * extendObservable(A.prototype, { x: 1 })
	         *
	         * classB extens A {
	         * }
	         * console.log(new B().x)
	         *
	         * It is unclear whether the property should be considered 'static' or inherited.
	         * Either use `console.log(A.x)`
	         * or: decorate(A, { x: observable })
	         *
	         * When using decorate, the property will always be redeclared as own property on the actual instance
	         */
	        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
	    };
	    /**
	     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
	     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
	     * for callback details
	     */
	    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
	        process.env.NODE_ENV !== "production" &&
	            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
	        return registerListener(this, callback);
	    };
	    ObservableObjectAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
	        var notify = hasListeners(this);
	        var notifySpy = isSpyEnabled();
	        var change = notify || notifySpy
	            ? {
	                type: "add",
	                object: this.proxy || this.target,
	                name: key,
	                newValue: newValue
	            }
	            : null;
	        if (notifySpy && process.env.NODE_ENV !== "production")
	            spyReportStart(__assign({}, change, { name: this.name, key: key }));
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy && process.env.NODE_ENV !== "production")
	            spyReportEnd();
	        if (this.pendingKeys) {
	            var entry = this.pendingKeys.get(key);
	            if (entry)
	                entry.set(true);
	        }
	        this.keysAtom.reportChanged();
	    };
	    ObservableObjectAdministration.prototype.getKeys = function () {
	        var e_1, _a;
	        this.keysAtom.reportObserved();
	        // return Reflect.ownKeys(this.values) as any
	        var res = [];
	        try {
	            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
	                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
	                if (value instanceof ObservableValue)
	                    res.push(key);
	            }
	        }
	        catch (e_1_1) { e_1 = { error: e_1_1 }; }
	        finally {
	            try {
	                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	            }
	            finally { if (e_1) throw e_1.error; }
	        }
	        return res;
	    };
	    return ObservableObjectAdministration;
	}());
	function asObservableObject(target, name, defaultEnhancer) {
	    if (name === void 0) { name = ""; }
	    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
	    if (Object.prototype.hasOwnProperty.call(target, $mobx))
	        return target[$mobx];
	    process.env.NODE_ENV !== "production" &&
	        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
	    if (!isPlainObject(target))
	        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
	    if (!name)
	        name = "ObservableObject@" + getNextId();
	    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
	    addHiddenProp(target, $mobx, adm);
	    return adm;
	}
	var observablePropertyConfigs = Object.create(null);
	var computedPropertyConfigs = Object.create(null);
	function generateObservablePropConfig(propName) {
	    return (observablePropertyConfigs[propName] ||
	        (observablePropertyConfigs[propName] = {
	            configurable: true,
	            enumerable: true,
	            get: function () {
	                return this[$mobx].read(propName);
	            },
	            set: function (v) {
	                this[$mobx].write(propName, v);
	            }
	        }));
	}
	function getAdministrationForComputedPropOwner(owner) {
	    var adm = owner[$mobx];
	    if (!adm) {
	        // because computed props are declared on proty,
	        // the current instance might not have been initialized yet
	        initializeInstance(owner);
	        return owner[$mobx];
	    }
	    return adm;
	}
	function generateComputedPropConfig(propName) {
	    return (computedPropertyConfigs[propName] ||
	        (computedPropertyConfigs[propName] = {
	            configurable: globalState.computedConfigurable,
	            enumerable: false,
	            get: function () {
	                return getAdministrationForComputedPropOwner(this).read(propName);
	            },
	            set: function (v) {
	                getAdministrationForComputedPropOwner(this).write(propName, v);
	            }
	        }));
	}
	var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
	function isObservableObject(thing) {
	    if (isObject(thing)) {
	        // Initializers run lazily when transpiling to babel, so make sure they are run...
	        initializeInstance(thing);
	        return isObservableObjectAdministration(thing[$mobx]);
	    }
	    return false;
	}
	
	function getAtom(thing, property) {
	    if (typeof thing === "object" && thing !== null) {
	        if (isObservableArray(thing)) {
	            if (property !== undefined)
	                fail(process.env.NODE_ENV !== "production" &&
	                    "It is not possible to get index atoms from arrays");
	            return thing[$mobx].atom;
	        }
	        if (isObservableSet(thing)) {
	            return thing[$mobx];
	        }
	        if (isObservableMap(thing)) {
	            var anyThing = thing;
	            if (property === undefined)
	                return anyThing._keysAtom;
	            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
	            if (!observable)
	                fail(process.env.NODE_ENV !== "production" &&
	                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
	            return observable;
	        }
	        // Initializers run lazily when transpiling to babel, so make sure they are run...
	        initializeInstance(thing);
	        if (property && !thing[$mobx])
	            thing[property]; // See #1072
	        if (isObservableObject(thing)) {
	            if (!property)
	                return fail(process.env.NODE_ENV !== "production" && "please specify a property");
	            var observable = thing[$mobx].values.get(property);
	            if (!observable)
	                fail(process.env.NODE_ENV !== "production" &&
	                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
	            return observable;
	        }
	        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
	            return thing;
	        }
	    }
	    else if (typeof thing === "function") {
	        if (isReaction(thing[$mobx])) {
	            // disposer function
	            return thing[$mobx];
	        }
	    }
	    return fail(process.env.NODE_ENV !== "production" && "Cannot obtain atom from " + thing);
	}
	function getAdministration(thing, property) {
	    if (!thing)
	        fail("Expecting some object");
	    if (property !== undefined)
	        return getAdministration(getAtom(thing, property));
	    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
	        return thing;
	    if (isObservableMap(thing) || isObservableSet(thing))
	        return thing;
	    // Initializers run lazily when transpiling to babel, so make sure they are run...
	    initializeInstance(thing);
	    if (thing[$mobx])
	        return thing[$mobx];
	    fail(process.env.NODE_ENV !== "production" && "Cannot obtain administration from " + thing);
	}
	function getDebugName(thing, property) {
	    var named;
	    if (property !== undefined)
	        named = getAtom(thing, property);
	    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
	        named = getAdministration(thing);
	    else
	        named = getAtom(thing); // valid for arrays as well
	    return named.name;
	}
	
	var toString = Object.prototype.toString;
	function deepEqual(a, b) {
	    return eq(a, b);
	}
	// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
	// Internal recursive comparison function for `isEqual`.
	function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b)
	        return a !== 0 || 1 / a === 1 / b;
	    // `null` or `undefined` only equal to itself (strict comparison).
	    if (a == null || b == null)
	        return false;
	    // `NaN`s are equivalent, but non-reflexive.
	    if (a !== a)
	        return b !== b;
	    // Exhaust primitive checks
	    var type = typeof a;
	    if (type !== "function" && type !== "object" && typeof b != "object")
	        return false;
	    return deepEq(a, b, aStack, bStack);
	}
	// Internal recursive comparison function for `isEqual`.
	function deepEq(a, b, aStack, bStack) {
	    // Unwrap any wrapped objects.
	    a = unwrap(a);
	    b = unwrap(b);
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b))
	        return false;
	    switch (className) {
	        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	        case "[object RegExp]":
	        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	        case "[object String]":
	            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	            // equivalent to `new String("5")`.
	            return "" + a === "" + b;
	        case "[object Number]":
	            // `NaN`s are equivalent, but non-reflexive.
	            // Object(NaN) is equivalent to NaN.
	            if (+a !== +a)
	                return +b !== +b;
	            // An `egal` comparison is performed for other numeric values.
	            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	        case "[object Date]":
	        case "[object Boolean]":
	            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	            // millisecond representations. Note that invalid dates with millisecond representations
	            // of `NaN` are not equivalent.
	            return +a === +b;
	        case "[object Symbol]":
	            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
	    }
	    var areArrays = className === "[object Array]";
	    if (!areArrays) {
	        if (typeof a != "object" || typeof b != "object")
	            return false;
	        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	        // from different frames are.
	        var aCtor = a.constructor, bCtor = b.constructor;
	        if (aCtor !== bCtor &&
	            !(typeof aCtor === "function" &&
	                aCtor instanceof aCtor &&
	                typeof bCtor === "function" &&
	                bCtor instanceof bCtor) &&
	            ("constructor" in a && "constructor" in b)) {
	            return false;
	        }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	        // Linear search. Performance is inversely proportional to the number of
	        // unique nested structures.
	        if (aStack[length] === a)
	            return bStack[length] === b;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	        // Compare array lengths to determine if a deep comparison is necessary.
	        length = a.length;
	        if (length !== b.length)
	            return false;
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (length--) {
	            if (!eq(a[length], b[length], aStack, bStack))
	                return false;
	        }
	    }
	    else {
	        // Deep compare objects.
	        var keys = Object.keys(a);
	        var key = void 0;
	        length = keys.length;
	        // Ensure that both objects contain the same number of properties before comparing deep equality.
	        if (Object.keys(b).length !== length)
	            return false;
	        while (length--) {
	            // Deep compare each member
	            key = keys[length];
	            if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
	                return false;
	        }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	}
	function unwrap(a) {
	    if (isObservableArray(a))
	        return a.slice();
	    if (isES6Map(a) || isObservableMap(a))
	        return Array.from(a.entries());
	    if (isES6Set(a) || isObservableSet(a))
	        return Array.from(a.entries());
	    return a;
	}
	function has$1(a, key) {
	    return Object.prototype.hasOwnProperty.call(a, key);
	}
	
	function makeIterable(iterator) {
	    iterator[Symbol.iterator] = self;
	    return iterator;
	}
	function self() {
	    return this;
	}
	
	/*
	The only reason for this file to exist is pure horror:
	Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
	it will cause undefined errors (for example because super classes or local variables not being hosted).
	With this file that will still happen,
	but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
	*/
	
	/**
	 * (c) Michel Weststrate 2015 - 2018
	 * MIT Licensed
	 *
	 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
	 * this is a good place to start:
	 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
	 *
	 * Source folders:
	 * ===============
	 *
	 * - api/     Most of the public static methods exposed by the module can be found here.
	 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
	 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
	 * - utils/   Utility stuff.
	 *
	 */
	if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
	    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
	}
	try {
	    // define process.env if needed
	    // if this is not a production build in the first place
	    // (in which case the expression below would be substituted with 'production')
	    process.env.NODE_ENV;
	}
	catch (e) {
	    var g = typeof window !== "undefined" ? window : global;
	    if (typeof process === "undefined")
	        g.process = {};
	    g.process.env = {};
	}
	(function () {
	    function testCodeMinification() { }
	    if (testCodeMinification.name !== "testCodeMinification" &&
	        process.env.NODE_ENV !== "production" &&
	        process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
	        // trick so it doesn't get replaced
	        var varName = ["process", "env", "NODE_ENV"].join(".");
	        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
	    }
	})();
	if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
	    // See: https://github.com/andykog/mobx-devtools/
	    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
	        spy: spy,
	        extras: {
	            getDebugName: getDebugName
	        },
	        $mobx: $mobx
	    });
	}
	
	exports.$mobx = $mobx;
	exports.ObservableMap = ObservableMap;
	exports.ObservableSet = ObservableSet;
	exports.Reaction = Reaction;
	exports._allowStateChanges = allowStateChanges;
	exports._allowStateChangesInsideComputed = allowStateChangesInsideComputed;
	exports._getAdministration = getAdministration;
	exports._getGlobalState = getGlobalState;
	exports._interceptReads = interceptReads;
	exports._isComputingDerivation = isComputingDerivation;
	exports._resetGlobalState = resetGlobalState;
	exports.action = action;
	exports.autorun = autorun;
	exports.comparer = comparer;
	exports.computed = computed;
	exports.configure = configure;
	exports.createAtom = createAtom;
	exports.decorate = decorate;
	exports.entries = entries;
	exports.extendObservable = extendObservable;
	exports.flow = flow;
	exports.get = get;
	exports.getAtom = getAtom;
	exports.getDebugName = getDebugName;
	exports.getDependencyTree = getDependencyTree;
	exports.getObserverTree = getObserverTree;
	exports.has = has;
	exports.intercept = intercept;
	exports.isAction = isAction;
	exports.isArrayLike = isArrayLike;
	exports.isBoxedObservable = isObservableValue;
	exports.isComputed = isComputed;
	exports.isComputedProp = isComputedProp;
	exports.isObservable = isObservable;
	exports.isObservableArray = isObservableArray;
	exports.isObservableMap = isObservableMap;
	exports.isObservableObject = isObservableObject;
	exports.isObservableProp = isObservableProp;
	exports.isObservableSet = isObservableSet;
	exports.keys = keys;
	exports.observable = observable;
	exports.observe = observe;
	exports.onBecomeObserved = onBecomeObserved;
	exports.onBecomeUnobserved = onBecomeUnobserved;
	exports.onReactionError = onReactionError;
	exports.reaction = reaction;
	exports.remove = remove;
	exports.runInAction = runInAction;
	exports.set = set;
	exports.spy = spy;
	exports.toJS = toJS;
	exports.trace = trace;
	exports.transaction = transaction;
	exports.untracked = untracked;
	exports.values = values;
	exports.when = when;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183), (function() { return this; }())))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.umd.js.map