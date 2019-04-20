/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * 
 * RTL by @wdmagir (http://www.webdesignermag.ir)
 */
if (typeof jQuery === "undefined") {
  throw new Error("Bootstrap's JavaScript requires jQuery");
}

+function (b) {
  function a() {
    var e = document.createElement("bootstrap");
    var d = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var c in d) {
      if (e.style[c] !== undefined) {
        return {
          end: d[c]
        };
      }
    }

    return false;
  }

  b.fn.emulateTransitionEnd = function (e) {
    var d = false,
        c = this;
    b(this).one(b.support.transition.end, function () {
      d = true;
    });

    var f = function f() {
      if (!d) {
        b(c).trigger(b.support.transition.end);
      }
    };

    setTimeout(f, e);
    return this;
  };

  b(function () {
    b.support.transition = a();
  });
}(jQuery);
+function (d) {
  var c = '[data-dismiss="alert"]';

  var b = function b(e) {
    d(e).on("click", c, this.close);
  };

  b.prototype.close = function (j) {
    var i = d(this);
    var g = i.attr("data-target");

    if (!g) {
      g = i.attr("href");
      g = g && g.replace(/.*(?=#[^\s]*$)/, "");
    }

    var h = d(g);

    if (j) {
      j.preventDefault();
    }

    if (!h.length) {
      h = i.hasClass("alert") ? i : i.parent();
    }

    h.trigger(j = d.Event("close.bs.alert"));

    if (j.isDefaultPrevented()) {
      return;
    }

    h.removeClass("in");

    function f() {
      h.trigger("closed.bs.alert").remove();
    }

    d.support.transition && h.hasClass("fade") ? h.one(d.support.transition.end, f).emulateTransitionEnd(150) : f();
  };

  var a = d.fn.alert;

  d.fn.alert = function (e) {
    return this.each(function () {
      var g = d(this);
      var f = g.data("bs.alert");

      if (!f) {
        g.data("bs.alert", f = new b(this));
      }

      if (typeof e == "string") {
        f[e].call(g);
      }
    });
  };

  d.fn.alert.Constructor = b;

  d.fn.alert.noConflict = function () {
    d.fn.alert = a;
    return this;
  };

  d(document).on("click.bs.alert.data-api", c, b.prototype.close);
}(jQuery);
+function (c) {
  var b = function b(e, d) {
    this.$element = c(e);
    this.options = c.extend({}, b.DEFAULTS, d);
    this.isLoading = false;
  };

  b.DEFAULTS = {
    loadingText: "loading..."
  };

  b.prototype.setState = function (g) {
    var i = "disabled";
    var e = this.$element;
    var h = e.is("input") ? "val" : "html";
    var f = e.data();
    g = g + "Text";

    if (!f.resetText) {
      e.data("resetText", e[h]());
    }

    e[h](f[g] || this.options[g]);
    setTimeout(c.proxy(function () {
      if (g == "loadingText") {
        this.isLoading = true;
        e.addClass(i).attr(i, i);
      } else {
        if (this.isLoading) {
          this.isLoading = false;
          e.removeClass(i).removeAttr(i);
        }
      }
    }, this), 0);
  };

  b.prototype.toggle = function () {
    var e = true;
    var d = this.$element.closest('[data-toggle="buttons"]');

    if (d.length) {
      var f = this.$element.find("input");

      if (f.prop("type") == "radio") {
        if (f.prop("checked") && this.$element.hasClass("active")) {
          e = false;
        } else {
          d.find(".active").removeClass("active");
        }
      }

      if (e) {
        f.prop("checked", !this.$element.hasClass("active")).trigger("change");
      }
    }

    if (e) {
      this.$element.toggleClass("active");
    }
  };

  var a = c.fn.button;

  c.fn.button = function (d) {
    return this.each(function () {
      var g = c(this);
      var f = g.data("bs.button");
      var e = _typeof(d) == "object" && d;

      if (!f) {
        g.data("bs.button", f = new b(this, e));
      }

      if (d == "toggle") {
        f.toggle();
      } else {
        if (d) {
          f.setState(d);
        }
      }
    });
  };

  c.fn.button.Constructor = b;

  c.fn.button.noConflict = function () {
    c.fn.button = a;
    return this;
  };

  c(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (f) {
    var d = c(f.target);

    if (!d.hasClass("btn")) {
      d = d.closest(".btn");
    }

    d.button("toggle");
    f.preventDefault();
  });
}(jQuery);
+function (b) {
  var c = function c(e, d) {
    this.$element = b(e);
    this.$indicators = this.$element.find(".carousel-indicators");
    this.options = d;
    this.paused = this.sliding = this.interval = this.$active = this.$items = null;
    this.options.pause == "hover" && this.$element.on("mouseenter", b.proxy(this.pause, this)).on("mouseleave", b.proxy(this.cycle, this));
  };

  c.DEFAULTS = {
    interval: 5000,
    pause: "hover",
    wrap: true
  };

  c.prototype.cycle = function (d) {
    d || (this.paused = false);
    this.interval && clearInterval(this.interval);
    this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval));
    return this;
  };

  c.prototype.getActiveIndex = function () {
    this.$active = this.$element.find(".item.active");
    this.$items = this.$active.parent().children();
    return this.$items.index(this.$active);
  };

  c.prototype.to = function (f) {
    var e = this;
    var d = this.getActiveIndex();

    if (f > this.$items.length - 1 || f < 0) {
      return;
    }

    if (this.sliding) {
      return this.$element.one("slid.bs.carousel", function () {
        e.to(f);
      });
    }

    if (d == f) {
      return this.pause().cycle();
    }

    return this.slide(f > d ? "next" : "prev", b(this.$items[f]));
  };

  c.prototype.pause = function (d) {
    d || (this.paused = true);

    if (this.$element.find(".next, .prev").length && b.support.transition) {
      this.$element.trigger(b.support.transition.end);
      this.cycle(true);
    }

    this.interval = clearInterval(this.interval);
    return this;
  };

  c.prototype.next = function () {
    if (this.sliding) {
      return;
    }

    return this.slide("next");
  };

  c.prototype.prev = function () {
    if (this.sliding) {
      return;
    }

    return this.slide("prev");
  };

  c.prototype.slide = function (k, f) {
    var m = this.$element.find(".item.active");
    var d = f || m[k]();
    var j = this.interval;
    var l = k == "next" ? "right" : "left";
    var g = k == "next" ? "first" : "last";
    var h = this;

    if (!d.length) {
      if (!this.options.wrap) {
        return;
      }

      d = this.$element.find(".item")[g]();
    }

    if (d.hasClass("active")) {
      return this.sliding = false;
    }

    var i = b.Event("slide.bs.carousel", {
      relatedTarget: d[0],
      direction: l
    });
    this.$element.trigger(i);

    if (i.isDefaultPrevented()) {
      return;
    }

    this.sliding = true;
    j && this.pause();

    if (this.$indicators.length) {
      this.$indicators.find(".active").removeClass("active");
      this.$element.one("slid.bs.carousel", function () {
        var e = b(h.$indicators.children()[h.getActiveIndex()]);
        e && e.addClass("active");
      });
    }

    if (b.support.transition && this.$element.hasClass("slide")) {
      d.addClass(k);
      d[0].offsetWidth;
      m.addClass(l);
      d.addClass(l);
      m.one(b.support.transition.end, function () {
        d.removeClass([k, l].join(" ")).addClass("active");
        m.removeClass(["active", l].join(" "));
        h.sliding = false;
        setTimeout(function () {
          h.$element.trigger("slid.bs.carousel");
        }, 0);
      }).emulateTransitionEnd(m.css("transition-duration").slice(0, -1) * 1000);
    } else {
      m.removeClass("active");
      d.addClass("active");
      this.sliding = false;
      this.$element.trigger("slid.bs.carousel");
    }

    j && this.cycle();
    return this;
  };

  var a = b.fn.carousel;

  b.fn.carousel = function (d) {
    return this.each(function () {
      var h = b(this);
      var g = h.data("bs.carousel");
      var e = b.extend({}, c.DEFAULTS, h.data(), _typeof(d) == "object" && d);
      var f = typeof d == "string" ? d : e.slide;

      if (!g) {
        h.data("bs.carousel", g = new c(this, e));
      }

      if (typeof d == "number") {
        g.to(d);
      } else {
        if (f) {
          g[f]();
        } else {
          if (e.interval) {
            g.pause().cycle();
          }
        }
      }
    });
  };

  b.fn.carousel.Constructor = c;

  b.fn.carousel.noConflict = function () {
    b.fn.carousel = a;
    return this;
  };

  b(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (j) {
    var i = b(this),
        f;
    var d = b(i.attr("data-target") || (f = i.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, ""));
    var g = b.extend({}, d.data(), i.data());
    var h = i.attr("data-slide-to");

    if (h) {
      g.interval = false;
    }

    d.carousel(g);

    if (h = i.attr("data-slide-to")) {
      d.data("bs.carousel").to(h);
    }

    j.preventDefault();
  });
  b(window).on("load", function () {
    b('[data-ride="carousel"]').each(function () {
      var d = b(this);
      d.carousel(d.data());
    });
  });
}(jQuery);
+function (b) {
  var c = function c(e, d) {
    this.$element = b(e);
    this.options = b.extend({}, c.DEFAULTS, d);
    this.transitioning = null;

    if (this.options.parent) {
      this.$parent = b(this.options.parent);
    }

    if (this.options.toggle) {
      this.toggle();
    }
  };

  c.DEFAULTS = {
    toggle: true
  };

  c.prototype.dimension = function () {
    var d = this.$element.hasClass("width");
    return d ? "width" : "height";
  };

  c.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass("in")) {
      return;
    }

    var e = b.Event("show.bs.collapse");
    this.$element.trigger(e);

    if (e.isDefaultPrevented()) {
      return;
    }

    var h = this.$parent && this.$parent.find("> .panel > .in");

    if (h && h.length) {
      var f = h.data("bs.collapse");

      if (f && f.transitioning) {
        return;
      }

      h.collapse("hide");
      f || h.data("bs.collapse", null);
    }

    var i = this.dimension();
    this.$element.removeClass("collapse").addClass("collapsing")[i](0);
    this.transitioning = 1;

    var d = function d() {
      this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto");
      this.transitioning = 0;
      this.$element.trigger("shown.bs.collapse");
    };

    if (!b.support.transition) {
      return d.call(this);
    }

    var g = b.camelCase(["scroll", i].join("-"));
    this.$element.one(b.support.transition.end, b.proxy(d, this)).emulateTransitionEnd(350)[i](this.$element[0][g]);
  };

  c.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass("in")) {
      return;
    }

    var e = b.Event("hide.bs.collapse");
    this.$element.trigger(e);

    if (e.isDefaultPrevented()) {
      return;
    }

    var f = this.dimension();
    this.$element[f](this.$element[f]())[0].offsetHeight;
    this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
    this.transitioning = 1;

    var d = function d() {
      this.transitioning = 0;
      this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
    };

    if (!b.support.transition) {
      return d.call(this);
    }

    this.$element[f](0).one(b.support.transition.end, b.proxy(d, this)).emulateTransitionEnd(350);
  };

  c.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  };

  var a = b.fn.collapse;

  b.fn.collapse = function (d) {
    return this.each(function () {
      var g = b(this);
      var f = g.data("bs.collapse");
      var e = b.extend({}, c.DEFAULTS, g.data(), _typeof(d) == "object" && d);

      if (!f && e.toggle && d == "show") {
        d = !d;
      }

      if (!f) {
        g.data("bs.collapse", f = new c(this, e));
      }

      if (typeof d == "string") {
        f[d]();
      }
    });
  };

  b.fn.collapse.Constructor = c;

  b.fn.collapse.noConflict = function () {
    b.fn.collapse = a;
    return this;
  };

  b(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (j) {
    var l = b(this),
        d;
    var k = l.attr("data-target") || j.preventDefault() || (d = l.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "");
    var f = b(k);
    var h = f.data("bs.collapse");
    var i = h ? "toggle" : l.data();
    var m = l.attr("data-parent");
    var g = m && b(m);

    if (!h || !h.transitioning) {
      if (g) {
        g.find('[data-toggle=collapse][data-parent="' + m + '"]').not(l).addClass("collapsed");
      }

      l[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed");
    }

    f.collapse(i);
  });
}(jQuery);
+function (g) {
  var e = ".dropdown-backdrop";
  var b = "[data-toggle=dropdown]";

  var a = function a(h) {
    g(h).on("click.bs.dropdown", this.toggle);
  };

  a.prototype.toggle = function (l) {
    var k = g(this);

    if (k.is(".disabled, :disabled")) {
      return;
    }

    var j = f(k);
    var i = j.hasClass("open");
    d();

    if (!i) {
      if ("ontouchstart" in document.documentElement && !j.closest(".navbar-nav").length) {
        g('<div class="dropdown-backdrop"/>').insertAfter(g(this)).on("click", d);
      }

      var h = {
        relatedTarget: this
      };
      j.trigger(l = g.Event("show.bs.dropdown", h));

      if (l.isDefaultPrevented()) {
        return;
      }

      j.toggleClass("open").trigger("shown.bs.dropdown", h);
      k.focus();
    }

    return false;
  };

  a.prototype.keydown = function (l) {
    if (!/(38|40|27)/.test(l.keyCode)) {
      return;
    }

    var k = g(this);
    l.preventDefault();
    l.stopPropagation();

    if (k.is(".disabled, :disabled")) {
      return;
    }

    var j = f(k);
    var i = j.hasClass("open");

    if (!i || i && l.keyCode == 27) {
      if (l.which == 27) {
        j.find(b).focus();
      }

      return k.click();
    }

    var m = " li:not(.divider):visible a";
    var n = j.find("[role=menu]" + m + ", [role=listbox]" + m);

    if (!n.length) {
      return;
    }

    var h = n.index(n.filter(":focus"));

    if (l.keyCode == 38 && h > 0) {
      h--;
    }

    if (l.keyCode == 40 && h < n.length - 1) {
      h++;
    }

    if (!~h) {
      h = 0;
    }

    n.eq(h).focus();
  };

  function d(h) {
    g(e).remove();
    g(b).each(function () {
      var j = f(g(this));
      var i = {
        relatedTarget: this
      };

      if (!j.hasClass("open")) {
        return;
      }

      j.trigger(h = g.Event("hide.bs.dropdown", i));

      if (h.isDefaultPrevented()) {
        return;
      }

      j.removeClass("open").trigger("hidden.bs.dropdown", i);
    });
  }

  function f(j) {
    var h = j.attr("data-target");

    if (!h) {
      h = j.attr("href");
      h = h && /#[A-Za-z]/.test(h) && h.replace(/.*(?=#[^\s]*$)/, "");
    }

    var i = h && g(h);
    return i && i.length ? i : j.parent();
  }

  var c = g.fn.dropdown;

  g.fn.dropdown = function (h) {
    return this.each(function () {
      var j = g(this);
      var i = j.data("bs.dropdown");

      if (!i) {
        j.data("bs.dropdown", i = new a(this));
      }

      if (typeof h == "string") {
        i[h].call(j);
      }
    });
  };

  g.fn.dropdown.Constructor = a;

  g.fn.dropdown.noConflict = function () {
    g.fn.dropdown = c;
    return this;
  };

  g(document).on("click.bs.dropdown.data-api", d).on("click.bs.dropdown.data-api", ".dropdown form", function (h) {
    h.stopPropagation();
  }).on("click.bs.dropdown.data-api", b, a.prototype.toggle).on("keydown.bs.dropdown.data-api", b + ", [role=menu], [role=listbox]", a.prototype.keydown);
}(jQuery);
+function (c) {
  var b = function b(e, d) {
    this.options = d;
    this.$element = c(e);
    this.$backdrop = this.isShown = null;

    if (this.options.remote) {
      this.$element.find(".modal-content").load(this.options.remote, c.proxy(function () {
        this.$element.trigger("loaded.bs.modal");
      }, this));
    }
  };

  b.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };

  b.prototype.toggle = function (d) {
    return this[!this.isShown ? "show" : "hide"](d);
  };

  b.prototype.show = function (g) {
    var d = this;
    var f = c.Event("show.bs.modal", {
      relatedTarget: g
    });
    this.$element.trigger(f);

    if (this.isShown || f.isDefaultPrevented()) {
      return;
    }

    this.isShown = true;
    this.escape();
    this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', c.proxy(this.hide, this));
    this.backdrop(function () {
      var i = c.support.transition && d.$element.hasClass("fade");

      if (!d.$element.parent().length) {
        d.$element.appendTo(document.body);
      }

      d.$element.show().scrollTop(0);

      if (i) {
        d.$element[0].offsetWidth;
      }

      d.$element.addClass("in").attr("aria-hidden", false);
      d.enforceFocus();
      var h = c.Event("shown.bs.modal", {
        relatedTarget: g
      });
      i ? d.$element.find(".modal-dialog").one(c.support.transition.end, function () {
        d.$element.focus().trigger(h);
      }).emulateTransitionEnd(300) : d.$element.focus().trigger(h);
    });
  };

  b.prototype.hide = function (d) {
    if (d) {
      d.preventDefault();
    }

    d = c.Event("hide.bs.modal");
    this.$element.trigger(d);

    if (!this.isShown || d.isDefaultPrevented()) {
      return;
    }

    this.isShown = false;
    this.escape();
    c(document).off("focusin.bs.modal");
    this.$element.removeClass("in").attr("aria-hidden", true).off("click.dismiss.bs.modal");
    c.support.transition && this.$element.hasClass("fade") ? this.$element.one(c.support.transition.end, c.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal();
  };

  b.prototype.enforceFocus = function () {
    c(document).off("focusin.bs.modal").on("focusin.bs.modal", c.proxy(function (d) {
      if (this.$element[0] !== d.target && !this.$element.has(d.target).length) {
        this.$element.focus();
      }
    }, this));
  };

  b.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on("keyup.dismiss.bs.modal", c.proxy(function (d) {
        d.which == 27 && this.hide();
      }, this));
    } else {
      if (!this.isShown) {
        this.$element.off("keyup.dismiss.bs.modal");
      }
    }
  };

  b.prototype.hideModal = function () {
    var d = this;
    this.$element.hide();
    this.backdrop(function () {
      d.removeBackdrop();
      d.$element.trigger("hidden.bs.modal");
    });
  };

  b.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };

  b.prototype.backdrop = function (f) {
    var e = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var d = c.support.transition && e;
      this.$backdrop = c('<div class="modal-backdrop ' + e + '" />').appendTo(document.body);
      this.$element.on("click.dismiss.bs.modal", c.proxy(function (g) {
        if (g.target !== g.currentTarget) {
          return;
        }

        this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this);
      }, this));

      if (d) {
        this.$backdrop[0].offsetWidth;
      }

      this.$backdrop.addClass("in");

      if (!f) {
        return;
      }

      d ? this.$backdrop.one(c.support.transition.end, f).emulateTransitionEnd(150) : f();
    } else {
      if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        c.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(c.support.transition.end, f).emulateTransitionEnd(150) : f();
      } else {
        if (f) {
          f();
        }
      }
    }
  };

  var a = c.fn.modal;

  c.fn.modal = function (d, e) {
    return this.each(function () {
      var h = c(this);
      var g = h.data("bs.modal");
      var f = c.extend({}, b.DEFAULTS, h.data(), _typeof(d) == "object" && d);

      if (!g) {
        h.data("bs.modal", g = new b(this, f));
      }

      if (typeof d == "string") {
        g[d](e);
      } else {
        if (f.show) {
          g.show(e);
        }
      }
    });
  };

  c.fn.modal.Constructor = b;

  c.fn.modal.noConflict = function () {
    c.fn.modal = a;
    return this;
  };

  c(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
    var h = c(this);
    var f = h.attr("href");
    var d = c(h.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, ""));
    var g = d.data("bs.modal") ? "toggle" : c.extend({
      remote: !/#/.test(f) && f
    }, d.data(), h.data());

    if (h.is("a")) {
      i.preventDefault();
    }

    d.modal(g, this).one("hide", function () {
      h.is(":visible") && h.focus();
    });
  });
  c(document).on("show.bs.modal", ".modal", function () {
    c(document.body).addClass("modal-open");
  }).on("hidden.bs.modal", ".modal", function () {
    c(document.body).removeClass("modal-open");
  });
}(jQuery);
+function (c) {
  var b = function b(e, d) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
    this.init("tooltip", e, d);
  };

  b.DEFAULTS = {
    animation: true,
    placement: "top",
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: false,
    container: false
  };

  b.prototype.init = function (k, h, f) {
    this.enabled = true;
    this.type = k;
    this.$element = c(h);
    this.options = this.getOptions(f);
    var j = this.options.trigger.split(" ");

    for (var g = j.length; g--;) {
      var e = j[g];

      if (e == "click") {
        this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this));
      } else {
        if (e != "manual") {
          var l = e == "hover" ? "mouseenter" : "focusin";
          var d = e == "hover" ? "mouseleave" : "focusout";
          this.$element.on(l + "." + this.type, this.options.selector, c.proxy(this.enter, this));
          this.$element.on(d + "." + this.type, this.options.selector, c.proxy(this.leave, this));
        }
      }
    }

    this.options.selector ? this._options = c.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  };

  b.prototype.getDefaults = function () {
    return b.DEFAULTS;
  };

  b.prototype.getOptions = function (d) {
    d = c.extend({}, this.getDefaults(), this.$element.data(), d);

    if (d.delay && typeof d.delay == "number") {
      d.delay = {
        show: d.delay,
        hide: d.delay
      };
    }

    return d;
  };

  b.prototype.getDelegateOptions = function () {
    var d = {};
    var e = this.getDefaults();
    this._options && c.each(this._options, function (f, g) {
      if (e[f] != g) {
        d[f] = g;
      }
    });
    return d;
  };

  b.prototype.enter = function (e) {
    var d = e instanceof this.constructor ? e : c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    clearTimeout(d.timeout);
    d.hoverState = "in";

    if (!d.options.delay || !d.options.delay.show) {
      return d.show();
    }

    d.timeout = setTimeout(function () {
      if (d.hoverState == "in") {
        d.show();
      }
    }, d.options.delay.show);
  };

  b.prototype.leave = function (e) {
    var d = e instanceof this.constructor ? e : c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    clearTimeout(d.timeout);
    d.hoverState = "out";

    if (!d.options.delay || !d.options.delay.hide) {
      return d.hide();
    }

    d.timeout = setTimeout(function () {
      if (d.hoverState == "out") {
        d.hide();
      }
    }, d.options.delay.hide);
  };

  b.prototype.show = function () {
    var p = c.Event("show.bs." + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(p);

      if (p.isDefaultPrevented()) {
        return;
      }

      var o = this;
      var k = this.tip();
      this.setContent();

      if (this.options.animation) {
        k.addClass("fade");
      }

      var j = typeof this.options.placement == "function" ? this.options.placement.call(this, k[0], this.$element[0]) : this.options.placement;
      var t = /\s?auto?\s?/i;
      var u = t.test(j);

      if (u) {
        j = j.replace(t, "") || "top";
      }

      k.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(j);
      this.options.container ? k.appendTo(this.options.container) : k.insertAfter(this.$element);
      var q = this.getPosition();
      var d = k[0].offsetWidth;
      var m = k[0].offsetHeight;

      if (u) {
        var i = this.$element.parent();
        var h = j;
        var r = document.documentElement.scrollTop || document.body.scrollTop;
        var s = this.options.container == "body" ? window.innerWidth : i.outerWidth();
        var n = this.options.container == "body" ? window.innerHeight : i.outerHeight();
        var l = this.options.container == "body" ? 0 : i.offset().left;
        j = j == "bottom" && q.top + q.height + m - r > n ? "top" : j == "top" && q.top - r - m < 0 ? "bottom" : j == "right" && q.right + d > s ? "left" : j == "left" && q.left - d < l ? "right" : j;
        k.removeClass(h).addClass(j);
      }

      var g = this.getCalculatedOffset(j, q, d, m);
      this.applyPlacement(g, j);
      this.hoverState = null;

      var f = function f() {
        o.$element.trigger("shown.bs." + o.type);
      };

      c.support.transition && this.$tip.hasClass("fade") ? k.one(c.support.transition.end, f).emulateTransitionEnd(150) : f();
    }
  };

  b.prototype.applyPlacement = function (i, j) {
    var g;
    var k = this.tip();
    var f = k[0].offsetWidth;
    var n = k[0].offsetHeight;
    var e = parseInt(k.css("margin-top"), 10);
    var h = parseInt(k.css("margin-left"), 10);

    if (isNaN(e)) {
      e = 0;
    }

    if (isNaN(h)) {
      h = 0;
    }

    i.top = i.top + e;
    i.left = i.left + h;
    c.offset.setOffset(k[0], c.extend({
      using: function using(o) {
        k.css({
          top: Math.round(o.top),
          left: Math.round(o.left)
        });
      }
    }, i), 0);
    k.addClass("in");
    var d = k[0].offsetWidth;
    var l = k[0].offsetHeight;

    if (j == "top" && l != n) {
      g = true;
      i.top = i.top + n - l;
    }

    if (/bottom|top/.test(j)) {
      var m = 0;

      if (i.left < 0) {
        m = i.left * -2;
        i.left = 0;
        k.offset(i);
        d = k[0].offsetWidth;
        l = k[0].offsetHeight;
      }

      this.replaceArrow(m - f + d, d, "left");
    } else {
      this.replaceArrow(l - n, l, "top");
    }

    if (g) {
      k.offset(i);
    }
  };

  b.prototype.replaceArrow = function (f, e, d) {
    this.arrow().css(d, f ? 50 * (1 - f / e) + "%" : "");
  };

  b.prototype.setContent = function () {
    var e = this.tip();
    var d = this.getTitle();
    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](d);
    e.removeClass("fade in top bottom left right");
  };

  b.prototype.hide = function () {
    var f = this;
    var h = this.tip();
    var g = c.Event("hide.bs." + this.type);

    function d() {
      if (f.hoverState != "in") {
        h.detach();
      }

      f.$element.trigger("hidden.bs." + f.type);
    }

    this.$element.trigger(g);

    if (g.isDefaultPrevented()) {
      return;
    }

    h.removeClass("in");
    c.support.transition && this.$tip.hasClass("fade") ? h.one(c.support.transition.end, d).emulateTransitionEnd(150) : d();
    this.hoverState = null;
    return this;
  };

  b.prototype.fixTitle = function () {
    var d = this.$element;

    if (d.attr("title") || typeof d.attr("data-original-title") != "string") {
      d.attr("data-original-title", d.attr("title") || "").attr("title", "");
    }
  };

  b.prototype.hasContent = function () {
    return this.getTitle();
  };

  b.prototype.getPosition = function () {
    var d = this.$element[0];
    return c.extend({}, typeof d.getBoundingClientRect == "function" ? d.getBoundingClientRect() : {
      width: d.offsetWidth,
      height: d.offsetHeight
    }, this.$element.offset());
  };

  b.prototype.getCalculatedOffset = function (d, g, e, f) {
    return d == "bottom" ? {
      top: g.top + g.height,
      left: g.left + g.width / 2 - e / 2
    } : d == "top" ? {
      top: g.top - f,
      left: g.left + g.width / 2 - e / 2
    } : d == "left" ? {
      top: g.top + g.height / 2 - f / 2,
      left: g.left - e
    } : {
      top: g.top + g.height / 2 - f / 2,
      left: g.left + g.width
    };
  };

  b.prototype.getTitle = function () {
    var f;
    var d = this.$element;
    var e = this.options;
    f = d.attr("data-original-title") || (typeof e.title == "function" ? e.title.call(d[0]) : e.title);
    return f;
  };

  b.prototype.tip = function () {
    return this.$tip = this.$tip || c(this.options.template);
  };

  b.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  };

  b.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide();
      this.$element = null;
      this.options = null;
    }
  };

  b.prototype.enable = function () {
    this.enabled = true;
  };

  b.prototype.disable = function () {
    this.enabled = false;
  };

  b.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  };

  b.prototype.toggle = function (f) {
    var d = f ? c(f.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
    d.tip().hasClass("in") ? d.leave(d) : d.enter(d);
  };

  b.prototype.destroy = function () {
    clearTimeout(this.timeout);
    this.hide().$element.off("." + this.type).removeData("bs." + this.type);
  };

  var a = c.fn.tooltip;

  c.fn.tooltip = function (d) {
    return this.each(function () {
      var g = c(this);
      var f = g.data("bs.tooltip");
      var e = _typeof(d) == "object" && d;

      if (!f && d == "destroy") {
        return;
      }

      if (!f) {
        g.data("bs.tooltip", f = new b(this, e));
      }

      if (typeof d == "string") {
        f[d]();
      }
    });
  };

  c.fn.tooltip.Constructor = b;

  c.fn.tooltip.noConflict = function () {
    c.fn.tooltip = a;
    return this;
  };
}(jQuery);
+function (c) {
  var b = function b(e, d) {
    this.init("popover", e, d);
  };

  if (!c.fn.tooltip) {
    throw new Error("Popover requires tooltip.js");
  }

  b.DEFAULTS = c.extend({}, c.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });
  b.prototype = c.extend({}, c.fn.tooltip.Constructor.prototype);
  b.prototype.constructor = b;

  b.prototype.getDefaults = function () {
    return b.DEFAULTS;
  };

  b.prototype.setContent = function () {
    var f = this.tip();
    var e = this.getTitle();
    var d = this.getContent();
    f.find(".popover-title")[this.options.html ? "html" : "text"](e);
    f.find(".popover-content")[this.options.html ? typeof d == "string" ? "html" : "append" : "text"](d);
    f.removeClass("fade top bottom left right in");

    if (!f.find(".popover-title").html()) {
      f.find(".popover-title").hide();
    }
  };

  b.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  };

  b.prototype.getContent = function () {
    var d = this.$element;
    var e = this.options;
    return d.attr("data-content") || (typeof e.content == "function" ? e.content.call(d[0]) : e.content);
  };

  b.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };

  b.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = c(this.options.template);
    }

    return this.$tip;
  };

  var a = c.fn.popover;

  c.fn.popover = function (d) {
    return this.each(function () {
      var g = c(this);
      var f = g.data("bs.popover");
      var e = _typeof(d) == "object" && d;

      if (!f && d == "destroy") {
        return;
      }

      if (!f) {
        g.data("bs.popover", f = new b(this, e));
      }

      if (typeof d == "string") {
        f[d]();
      }
    });
  };

  c.fn.popover.Constructor = b;

  c.fn.popover.noConflict = function () {
    c.fn.popover = a;
    return this;
  };
}(jQuery);
+function (c) {
  function b(f, e) {
    var d;
    var g = c.proxy(this.process, this);
    this.$element = c(f).is("body") ? c(window) : c(f);
    this.$body = c("body");
    this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", g);
    this.options = c.extend({}, b.DEFAULTS, e);
    this.selector = (this.options.target || (d = c(f).attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
    this.offsets = c([]);
    this.targets = c([]);
    this.activeTarget = null;
    this.refresh();
    this.process();
  }

  b.DEFAULTS = {
    offset: 10
  };

  b.prototype.refresh = function () {
    var d = this.$element[0] == window ? "offset" : "position";
    this.offsets = c([]);
    this.targets = c([]);
    var e = this;
    var f = this.$body.find(this.selector).map(function () {
      var h = c(this);
      var g = h.data("target") || h.attr("href");
      var i = /^#./.test(g) && c(g);
      return i && i.length && i.is(":visible") && [[i[d]().top + (!c.isWindow(e.$scrollElement.get(0)) && e.$scrollElement.scrollTop()), g]] || null;
    }).sort(function (h, g) {
      return h[0] - g[0];
    }).each(function () {
      e.offsets.push(this[0]);
      e.targets.push(this[1]);
    });
  };

  b.prototype.process = function () {
    var j = this.$scrollElement.scrollTop() + this.options.offset;
    var f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight;
    var h = f - this.$scrollElement.height();
    var g = this.offsets;
    var d = this.targets;
    var k = this.activeTarget;
    var e;

    if (j >= h) {
      return k != (e = d.last()[0]) && this.activate(e);
    }

    if (k && j <= g[0]) {
      return k != (e = d[0]) && this.activate(e);
    }

    for (e = g.length; e--;) {
      k != d[e] && j >= g[e] && (!g[e + 1] || j <= g[e + 1]) && this.activate(d[e]);
    }
  };

  b.prototype.activate = function (f) {
    this.activeTarget = f;
    c(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    var d = this.selector + '[data-target="' + f + '"],' + this.selector + '[href="' + f + '"]';
    var e = c(d).parents("li").addClass("active");

    if (e.parent(".dropdown-menu").length) {
      e = e.closest("li.dropdown").addClass("active");
    }

    e.trigger("activate.bs.scrollspy");
  };

  var a = c.fn.scrollspy;

  c.fn.scrollspy = function (d) {
    return this.each(function () {
      var g = c(this);
      var f = g.data("bs.scrollspy");
      var e = _typeof(d) == "object" && d;

      if (!f) {
        g.data("bs.scrollspy", f = new b(this, e));
      }

      if (typeof d == "string") {
        f[d]();
      }
    });
  };

  c.fn.scrollspy.Constructor = b;

  c.fn.scrollspy.noConflict = function () {
    c.fn.scrollspy = a;
    return this;
  };

  c(window).on("load", function () {
    c('[data-spy="scroll"]').each(function () {
      var d = c(this);
      d.scrollspy(d.data());
    });
  });
}(jQuery);
+function (c) {
  var b = function b(d) {
    this.element = c(d);
  };

  b.prototype.show = function () {
    var j = this.element;
    var g = j.closest("ul:not(.dropdown-menu)");
    var f = j.data("target");

    if (!f) {
      f = j.attr("href");
      f = f && f.replace(/.*(?=#[^\s]*$)/, "");
    }

    if (j.parent("li").hasClass("active")) {
      return;
    }

    var h = g.find(".active:last a")[0];
    var i = c.Event("show.bs.tab", {
      relatedTarget: h
    });
    j.trigger(i);

    if (i.isDefaultPrevented()) {
      return;
    }

    var d = c(f);
    this.activate(j.parent("li"), g);
    this.activate(d, d.parent(), function () {
      j.trigger({
        type: "shown.bs.tab",
        relatedTarget: h
      });
    });
  };

  b.prototype.activate = function (f, e, i) {
    var d = e.find("> .active");
    var h = i && c.support.transition && d.hasClass("fade");

    function g() {
      d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
      f.addClass("active");

      if (h) {
        f[0].offsetWidth;
        f.addClass("in");
      } else {
        f.removeClass("fade");
      }

      if (f.parent(".dropdown-menu")) {
        f.closest("li.dropdown").addClass("active");
      }

      i && i();
    }

    h ? d.one(c.support.transition.end, g).emulateTransitionEnd(150) : g();
    d.removeClass("in");
  };

  var a = c.fn.tab;

  c.fn.tab = function (d) {
    return this.each(function () {
      var f = c(this);
      var e = f.data("bs.tab");

      if (!e) {
        f.data("bs.tab", e = new b(this));
      }

      if (typeof d == "string") {
        e[d]();
      }
    });
  };

  c.fn.tab.Constructor = b;

  c.fn.tab.noConflict = function () {
    c.fn.tab = a;
    return this;
  };

  c(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (d) {
    d.preventDefault();
    c(this).tab("show");
  });
}(jQuery);
+function (c) {
  var b = function b(e, d) {
    this.options = c.extend({}, b.DEFAULTS, d);
    this.$window = c(window).on("scroll.bs.affix.data-api", c.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", c.proxy(this.checkPositionWithEventLoop, this));
    this.$element = c(e);
    this.affixed = this.unpin = this.pinnedOffset = null;
    this.checkPosition();
  };

  b.RESET = "affix affix-top affix-bottom";
  b.DEFAULTS = {
    offset: 0
  };

  b.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) {
      return this.pinnedOffset;
    }

    this.$element.removeClass(b.RESET).addClass("affix");
    var e = this.$window.scrollTop();
    var d = this.$element.offset();
    return this.pinnedOffset = d.top - e;
  };

  b.prototype.checkPositionWithEventLoop = function () {
    setTimeout(c.proxy(this.checkPosition, this), 1);
  };

  b.prototype.checkPosition = function () {
    if (!this.$element.is(":visible")) {
      return;
    }

    var m = c(document).height();
    var d = this.$window.scrollTop();
    var j = this.$element.offset();
    var h = this.options.offset;
    var f = h.top;
    var g = h.bottom;

    if (this.affixed == "top") {
      j.top += d;
    }

    if (_typeof(h) != "object") {
      g = f = h;
    }

    if (typeof f == "function") {
      f = h.top(this.$element);
    }

    if (typeof g == "function") {
      g = h.bottom(this.$element);
    }

    var i = this.unpin != null && d + this.unpin <= j.top ? false : g != null && j.top + this.$element.height() >= m - g ? "bottom" : f != null && d <= f ? "top" : false;

    if (this.affixed === i) {
      return;
    }

    if (this.unpin) {
      this.$element.css("top", "");
    }

    var l = "affix" + (i ? "-" + i : "");
    var k = c.Event(l + ".bs.affix");
    this.$element.trigger(k);

    if (k.isDefaultPrevented()) {
      return;
    }

    this.affixed = i;
    this.unpin = i == "bottom" ? this.getPinnedOffset() : null;
    this.$element.removeClass(b.RESET).addClass(l).trigger(c.Event(l.replace("affix", "affixed")));

    if (i == "bottom") {
      this.$element.offset({
        top: m - g - this.$element.height()
      });
    }
  };

  var a = c.fn.affix;

  c.fn.affix = function (d) {
    return this.each(function () {
      var g = c(this);
      var f = g.data("bs.affix");
      var e = _typeof(d) == "object" && d;

      if (!f) {
        g.data("bs.affix", f = new b(this, e));
      }

      if (typeof d == "string") {
        f[d]();
      }
    });
  };

  c.fn.affix.Constructor = b;

  c.fn.affix.noConflict = function () {
    c.fn.affix = a;
    return this;
  };

  c(window).on("load", function () {
    c('[data-spy="affix"]').each(function () {
      var e = c(this);
      var d = e.data();
      d.offset = d.offset || {};

      if (d.offsetBottom) {
        d.offset.bottom = d.offsetBottom;
      }

      if (d.offsetTop) {
        d.offset.top = d.offsetTop;
      }

      e.affix(d);
    });
  });
}(jQuery);

/***/ }),

/***/ "./resources/js/fileinput.min.js":
/*!***************************************!*\
  !*** ./resources/js/fileinput.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * bootstrap-fileinput v5.0.2
 * http://plugins.krajee.com/file-input
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2019, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD-3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */
!function (e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (e) {
  "use strict";

  e.fn.fileinputLocales = {}, e.fn.fileinputThemes = {}, String.prototype.setTokens = function (e) {
    var t,
        i,
        a = this.toString();

    for (t in e) {
      e.hasOwnProperty(t) && (i = new RegExp("{" + t + "}", "g"), a = a.replace(i, e[t]));
    }

    return a;
  };
  var t, i;
  t = {
    FRAMES: ".kv-preview-thumb",
    SORT_CSS: "file-sortable",
    OBJECT_PARAMS: '<param name="controller" value="true" />\n<param name="allowFullScreen" value="true" />\n<param name="allowScriptAccess" value="always" />\n<param name="autoPlay" value="false" />\n<param name="autoStart" value="false" />\n<param name="quality" value="high" />\n',
    DEFAULT_PREVIEW: '<div class="file-preview-other">\n<span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>',
    MODAL_ID: "kvFileinputModal",
    MODAL_EVENTS: ["show", "shown", "hide", "hidden", "loaded"],
    objUrl: window.URL || window.webkitURL,
    now: function now() {
      return new Date();
    },
    round: function round(e) {
      return e = parseFloat(e), isNaN(e) ? 0 : Math.floor(Math.round(e));
    },
    getFileRelativePath: function getFileRelativePath(e) {
      return String(e.relativePath || e.webkitRelativePath || t.getFileName(e) || null);
    },
    getFileId: function getFileId(e, i) {
      var a = t.getFileRelativePath(e);
      return "function" == typeof i ? i(e) : e && a ? e.size + "_" + a.replace(/\s/gim, "_") : null;
    },
    getElapsed: function getElapsed(t) {
      var i = t,
          a = "",
          r = {},
          n = {
        year: 31536e3,
        month: 2592e3,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };
      return Object.keys(n).forEach(function (e) {
        r[e] = Math.floor(i / n[e]), i -= r[e] * n[e];
      }), e.each(r, function (e, t) {
        t > 0 && (a += (a ? " " : "") + t + e.substring(0, 1));
      }), a;
    },
    debounce: function debounce(e, t) {
      var i;
      return function () {
        var a = arguments,
            r = this;
        clearTimeout(i), i = setTimeout(function () {
          e.apply(r, a);
        }, t);
      };
    },
    stopEvent: function stopEvent(e) {
      e.stopPropagation(), e.preventDefault();
    },
    getFileName: function getFileName(e) {
      return e ? e.fileName || e.name || "" : "";
    },
    createObjectURL: function createObjectURL(e) {
      return t.objUrl && t.objUrl.createObjectURL && e ? t.objUrl.createObjectURL(e) : "";
    },
    revokeObjectURL: function revokeObjectURL(e) {
      t.objUrl && t.objUrl.revokeObjectURL && e && t.objUrl.revokeObjectURL(e);
    },
    compare: function compare(e, t, i) {
      return void 0 !== e && (i ? e === t : e.match(t));
    },
    isIE: function isIE(e) {
      var t, i;
      return "Microsoft Internet Explorer" !== navigator.appName ? !1 : 10 === e ? new RegExp("msie\\s" + e, "i").test(navigator.userAgent) : (t = document.createElement("div"), t.innerHTML = "<!--[if IE " + e + "]> <i></i> <![endif]-->", i = t.getElementsByTagName("i").length, document.body.appendChild(t), t.parentNode.removeChild(t), i);
    },
    canAssignFilesToInput: function canAssignFilesToInput() {
      var e = document.createElement("input");

      try {
        return e.type = "file", e.files = null, !0;
      } catch (t) {
        return !1;
      }
    },
    getDragDropFolders: function getDragDropFolders(e) {
      var t,
          i,
          a = e ? e.length : 0,
          r = 0;
      if (a > 0 && e[0].webkitGetAsEntry()) for (t = 0; a > t; t++) {
        i = e[t].webkitGetAsEntry(), i && i.isDirectory && r++;
      }
      return r;
    },
    initModal: function initModal(t) {
      var i = e("body");
      i.length && t.appendTo(i);
    },
    isEmpty: function isEmpty(t, i) {
      return void 0 === t || null === t || 0 === t.length || i && "" === e.trim(t);
    },
    isArray: function isArray(e) {
      return Array.isArray(e) || "[object Array]" === Object.prototype.toString.call(e);
    },
    ifSet: function ifSet(e, t, i) {
      return i = i || "", t && "object" == _typeof(t) && e in t ? t[e] : i;
    },
    cleanArray: function cleanArray(e) {
      return e instanceof Array || (e = []), e.filter(function (e) {
        return void 0 !== e && null !== e;
      });
    },
    spliceArray: function spliceArray(t, i, a) {
      var r,
          n,
          o = 0,
          l = [];
      if (!(t instanceof Array)) return [];

      for (n = e.extend(!0, [], t), a && n.reverse(), r = 0; r < n.length; r++) {
        r !== i && (l[o] = n[r], o++);
      }

      return a && l.reverse(), l;
    },
    getNum: function getNum(e, t) {
      return t = t || 0, "number" == typeof e ? e : ("string" == typeof e && (e = parseFloat(e)), isNaN(e) ? t : e);
    },
    hasFileAPISupport: function hasFileAPISupport() {
      return !(!window.File || !window.FileReader);
    },
    hasDragDropSupport: function hasDragDropSupport() {
      var e = document.createElement("div");
      return !t.isIE(9) && (void 0 !== e.draggable || void 0 !== e.ondragstart && void 0 !== e.ondrop);
    },
    hasFileUploadSupport: function hasFileUploadSupport() {
      return t.hasFileAPISupport() && window.FormData;
    },
    hasBlobSupport: function hasBlobSupport() {
      try {
        return !!window.Blob && Boolean(new Blob());
      } catch (e) {
        return !1;
      }
    },
    hasArrayBufferViewSupport: function hasArrayBufferViewSupport() {
      try {
        return 100 === new Blob([new Uint8Array(100)]).size;
      } catch (e) {
        return !1;
      }
    },
    hasResumableUploadSupport: function hasResumableUploadSupport() {
      return t.hasFileUploadSupport() && t.hasBlobSupport() && t.hasArrayBufferViewSupport() && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || !1);
    },
    dataURI2Blob: function dataURI2Blob(e) {
      var i,
          a,
          r,
          n,
          o,
          l,
          s = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
          d = t.hasBlobSupport(),
          c = (d || s) && window.atob && window.ArrayBuffer && window.Uint8Array;
      if (!c) return null;

      for (i = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : decodeURIComponent(e.split(",")[1]), a = new ArrayBuffer(i.length), r = new Uint8Array(a), n = 0; n < i.length; n += 1) {
        r[n] = i.charCodeAt(n);
      }

      return o = e.split(",")[0].split(":")[1].split(";")[0], d ? new Blob([t.hasArrayBufferViewSupport() ? r : a], {
        type: o
      }) : (l = new s(), l.append(a), l.getBlob(o));
    },
    arrayBuffer2String: function arrayBuffer2String(e) {
      if (window.TextDecoder) return new TextDecoder("utf-8").decode(e);
      var t,
          i,
          a,
          r,
          n = Array.prototype.slice.apply(new Uint8Array(e)),
          o = "",
          l = 0;

      for (t = n.length; t > l;) {
        switch (i = n[l++], i >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            o += String.fromCharCode(i);
            break;

          case 12:
          case 13:
            a = n[l++], o += String.fromCharCode((31 & i) << 6 | 63 & a);
            break;

          case 14:
            a = n[l++], r = n[l++], o += String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | (63 & r) << 0);
        }
      }

      return o;
    },
    isHtml: function isHtml(e) {
      var t = document.createElement("div");
      t.innerHTML = e;

      for (var i = t.childNodes, a = i.length; a--;) {
        if (1 === i[a].nodeType) return !0;
      }

      return !1;
    },
    isSvg: function isSvg(e) {
      return e.match(/^\s*<\?xml/i) && (e.match(/<!DOCTYPE svg/i) || e.match(/<svg/i));
    },
    getMimeType: function getMimeType(e, t, i) {
      switch (e) {
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
          return "image/jpeg";

        case "89504E47":
          return "image/png";

        case "47494638":
          return "image/gif";

        case "49492a00":
          return "image/tiff";

        case "52494646":
          return "image/webp";

        case "66747970":
          return "video/3gp";

        case "4f676753":
          return "video/ogg";

        case "1a45dfa3":
          return "video/mkv";

        case "000001ba":
        case "000001b3":
          return "video/mpeg";

        case "3026b275":
          return "video/wmv";

        case "25504446":
          return "application/pdf";

        case "25215053":
          return "application/ps";

        case "504b0304":
        case "504b0506":
        case "504b0508":
          return "application/zip";

        case "377abcaf":
          return "application/7z";

        case "75737461":
          return "application/tar";

        case "7801730d":
          return "application/dmg";

        default:
          switch (e.substring(0, 6)) {
            case "435753":
              return "application/x-shockwave-flash";

            case "494433":
              return "audio/mp3";

            case "425a68":
              return "application/bzip";

            default:
              switch (e.substring(0, 4)) {
                case "424d":
                  return "image/bmp";

                case "fffb":
                  return "audio/mp3";

                case "4d5a":
                  return "application/exe";

                case "1f9d":
                case "1fa0":
                  return "application/zip";

                case "1f8b":
                  return "application/gzip";

                default:
                  return t && !t.match(/[^\u0000-\u007f]/) ? "application/text-plain" : i;
              }

          }

      }
    },
    addCss: function addCss(e, t) {
      e.removeClass(t).addClass(t);
    },
    getElement: function getElement(i, a, r) {
      return t.isEmpty(i) || t.isEmpty(i[a]) ? r : e(i[a]);
    },
    uniqId: function uniqId() {
      return Math.round(new Date().getTime()) + "_" + Math.round(100 * Math.random());
    },
    htmlEncode: function htmlEncode(e, t) {
      return void 0 === e ? t || null : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    },
    replaceTags: function replaceTags(t, i) {
      var a = t;
      return i ? (e.each(i, function (e, t) {
        "function" == typeof t && (t = t()), a = a.split(e).join(t);
      }), a) : a;
    },
    cleanMemory: function cleanMemory(e) {
      var i = e.is("img") ? e.attr("src") : e.find("source").attr("src");
      t.revokeObjectURL(i);
    },
    findFileName: function findFileName(e) {
      var t = e.lastIndexOf("/");
      return -1 === t && (t = e.lastIndexOf("\\")), e.split(e.substring(t, t + 1)).pop();
    },
    checkFullScreen: function checkFullScreen() {
      return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    },
    toggleFullScreen: function toggleFullScreen(e) {
      var i = document,
          a = i.documentElement;
      a && e && !t.checkFullScreen() ? a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : i.exitFullscreen ? i.exitFullscreen() : i.msExitFullscreen ? i.msExitFullscreen() : i.mozCancelFullScreen ? i.mozCancelFullScreen() : i.webkitExitFullscreen && i.webkitExitFullscreen();
    },
    moveArray: function moveArray(t, i, a, r) {
      var n = e.extend(!0, [], t);
      if (r && n.reverse(), a >= n.length) for (var o = a - n.length; o-- + 1;) {
        n.push(void 0);
      }
      return n.splice(a, 0, n.splice(i, 1)[0]), r && n.reverse(), n;
    },
    cleanZoomCache: function cleanZoomCache(e) {
      var t = e.closest(".kv-zoom-cache-theme");
      t.length || (t = e.closest(".kv-zoom-cache")), t.remove();
    },
    closeButton: function closeButton(e) {
      return e = e ? "close " + e : "close", '<button type="button" class="' + e + '" aria-label="Close">\n  <span aria-hidden="true">&times;</span>\n</button>';
    },
    getRotation: function getRotation(e) {
      switch (e) {
        case 2:
          return "rotateY(180deg)";

        case 3:
          return "rotate(180deg)";

        case 4:
          return "rotate(180deg) rotateY(180deg)";

        case 5:
          return "rotate(270deg) rotateY(180deg)";

        case 6:
          return "rotate(90deg)";

        case 7:
          return "rotate(90deg) rotateY(180deg)";

        case 8:
          return "rotate(270deg)";

        default:
          return "";
      }
    },
    setTransform: function setTransform(e, t) {
      e && (e.style.transform = t, e.style.webkitTransform = t, e.style["-moz-transform"] = t, e.style["-ms-transform"] = t, e.style["-o-transform"] = t);
    },
    setImageOrientation: function setImageOrientation(e, i, a) {
      if (e && e.length) {
        var r = "load.fileinputimageorient";
        e.off(r).on(r, function () {
          var r = e.get(0),
              n = i && i.length ? i.get(0) : null,
              o = r.offsetHeight,
              l = r.offsetWidth,
              s = t.getRotation(a);
          if (e.data("orientation", a), n && i.data("orientation", a), 5 > a) return t.setTransform(r, s), void t.setTransform(n, s);
          var d = Math.atan(l / o),
              c = Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2)),
              u = c ? o / Math.cos(Math.PI / 2 + d) / c : 1,
              p = " scale(" + Math.abs(u) + ")";
          t.setTransform(r, s + p), t.setTransform(n, s + p);
        });
      }
    }
  }, i = function i(_i, a) {
    var r = this;
    r.$element = e(_i), r.$parent = r.$element.parent(), r._validate() && (r.isPreviewable = t.hasFileAPISupport(), r.isIE9 = t.isIE(9), r.isIE10 = t.isIE(10), (r.isPreviewable || r.isIE9) && (r._init(a), r._listen()), r.$element.removeClass("file-loading"));
  }, i.prototype = {
    constructor: i,
    _cleanup: function _cleanup() {
      var e = this;
      e.reader = null, e.clearFileStack(), e.fileBatchCompleted = !0, e.isError = !1, e.cancelling = !1, e.paused = !1, e.lastProgress = 0, e._initAjax();
    },
    _initAjax: function _initAjax() {
      var e = this;
      e.ajaxQueue = [], e.ajaxRequests = [], e.ajaxQueueIntervalId = null, e.ajaxCurrentThreads = 0, e.ajaxAborted = !1;
    },
    _init: function _init(i, a) {
      var r,
          n,
          o,
          l,
          s = this,
          d = s.$element;
      s.options = i, e.each(i, function (e, i) {
        switch (e) {
          case "minFileCount":
          case "maxFileCount":
          case "minFileSize":
          case "maxFileSize":
          case "maxFilePreviewSize":
          case "resizeImageQuality":
          case "resizeIfSizeMoreThan":
          case "progressUploadThreshold":
          case "initialPreviewCount":
          case "zoomModalHeight":
          case "minImageHeight":
          case "maxImageHeight":
          case "minImageWidth":
          case "maxImageWidth":
            s[e] = t.getNum(i);
            break;

          default:
            s[e] = i;
        }
      }), s.rtl && (l = s.previewZoomButtonIcons.prev, s.previewZoomButtonIcons.prev = s.previewZoomButtonIcons.next, s.previewZoomButtonIcons.next = l), !isNaN(s.maxAjaxThreads) && s.maxAjaxThreads < s.resumableUploadOptions.maxThreads && (s.resumableUploadOptions.maxThreads = s.maxAjaxThreads), s._initFileManager(), "function" == typeof s.autoOrientImage && (s.autoOrientImage = s.autoOrientImage()), "function" == typeof s.autoOrientImageInitial && (s.autoOrientImageInitial = s.autoOrientImageInitial()), a || s._cleanup(), s.$form = d.closest("form"), s._initTemplateDefaults(), s.uploadFileAttr = t.isEmpty(d.attr("name")) ? "file_data" : d.attr("name"), o = s._getLayoutTemplate("progress"), s.progressTemplate = o.replace("{class}", s.progressClass), s.progressInfoTemplate = o.replace("{class}", s.progressInfoClass), s.progressPauseTemplate = o.replace("{class}", s.progressPauseClass), s.progressCompleteTemplate = o.replace("{class}", s.progressCompleteClass), s.progressErrorTemplate = o.replace("{class}", s.progressErrorClass), s.isDisabled = d.attr("disabled") || d.attr("readonly"), s.isDisabled && d.attr("disabled", !0), s.isClickable = s.browseOnZoneClick && s.showPreview && (s.dropZoneEnabled || !t.isEmpty(s.defaultPreviewContent)), s.isAjaxUpload = t.hasFileUploadSupport() && !t.isEmpty(s.uploadUrl), s.dropZoneEnabled = t.hasDragDropSupport() && s.dropZoneEnabled, s.isAjaxUpload || (s.dropZoneEnabled = s.dropZoneEnabled && t.canAssignFilesToInput()), s.slug = "function" == typeof i.slugCallback ? i.slugCallback : s._slugDefault, s.mainTemplate = s.showCaption ? s._getLayoutTemplate("main1") : s._getLayoutTemplate("main2"), s.captionTemplate = s._getLayoutTemplate("caption"), s.previewGenericTemplate = s._getPreviewTemplate("generic"), !s.imageCanvas && s.resizeImage && (s.maxImageWidth || s.maxImageHeight) && (s.imageCanvas = document.createElement("canvas"), s.imageCanvasContext = s.imageCanvas.getContext("2d")), t.isEmpty(d.attr("id")) && d.attr("id", t.uniqId()), s.namespace = ".fileinput_" + d.attr("id").replace(/-/g, "_"), void 0 === s.$container ? s.$container = s._createContainer() : s._refreshContainer(), n = s.$container, s.$dropZone = n.find(".file-drop-zone"), s.$progress = n.find(".kv-upload-progress"), s.$btnUpload = n.find(".fileinput-upload"), s.$captionContainer = t.getElement(i, "elCaptionContainer", n.find(".file-caption")), s.$caption = t.getElement(i, "elCaptionText", n.find(".file-caption-name")), t.isEmpty(s.msgPlaceholder) || (r = d.attr("multiple") ? s.filePlural : s.fileSingle, s.$caption.attr("placeholder", s.msgPlaceholder.replace("{files}", r))), s.$captionIcon = s.$captionContainer.find(".file-caption-icon"), s.$previewContainer = t.getElement(i, "elPreviewContainer", n.find(".file-preview")), s.$preview = t.getElement(i, "elPreviewImage", n.find(".file-preview-thumbnails")), s.$previewStatus = t.getElement(i, "elPreviewStatus", n.find(".file-preview-status")), s.$errorContainer = t.getElement(i, "elErrorContainer", s.$previewContainer.find(".kv-fileinput-error")), s._validateDisabled(), t.isEmpty(s.msgErrorClass) || t.addCss(s.$errorContainer, s.msgErrorClass), a ? s._errorsExist() || s.$errorContainer.hide() : (s.$errorContainer.hide(), s.previewInitId = "preview-" + t.uniqId(), s._initPreviewCache(), s._initPreview(!0), s._initPreviewActions(), s.$parent.hasClass("file-loading") && (s.$container.insertBefore(s.$parent), s.$parent.remove())), s._setFileDropZoneTitle(), d.attr("disabled") && s.disable(), s._initZoom(), s.hideThumbnailContent && t.addCss(s.$preview, "hide-content");
    },
    _initFileManager: function _initFileManager() {
      var i = this;
      i.fileManager = {
        stack: {},
        processed: [],
        loadedImages: {},
        totalImages: 0,
        totalFiles: null,
        totalSize: null,
        uploadedSize: 0,
        stats: {},
        initStats: function initStats(e) {
          var a = {
            started: t.now().getTime()
          };
          e ? i.fileManager.stats[e] = a : i.fileManager.stats = a;
        },
        getUploadStats: function getUploadStats(e, a, r) {
          var n = i.fileManager,
              o = e ? n.stats[e] && n.stats[e].started || null : null;
          o || (o = t.now().getTime());

          var l = (t.now().getTime() - o) / 1e3,
              s = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s", "PB/s", "EB/s", "ZB/s", "YB/s"],
              d = l ? a / l : 0,
              c = i._getSize(d, s),
              u = r - a,
              p = {
            fileId: e,
            started: o,
            elapsed: l,
            loaded: a,
            total: r,
            bps: d,
            bitrate: c,
            pendingBytes: u
          };

          return e ? n.stats[e] = p : n.stats = p, p;
        },
        exists: function exists(t) {
          return -1 !== e.inArray(t, i.fileManager.getIdList());
        },
        count: function count() {
          return i.fileManager.getIdList().length;
        },
        total: function total() {
          var e = i.fileManager;
          return e.totalFiles || (e.totalFiles = e.count()), e.totalFiles;
        },
        getTotalSize: function getTotalSize() {
          var t = i.fileManager;
          return t.totalSize ? t.totalSize : (t.totalSize = 0, e.each(i.fileManager.stack, function (e, i) {
            var a = parseFloat(i.size);
            t.totalSize += isNaN(a) ? 0 : a;
          }), t.totalSize);
        },
        add: function add(e, a) {
          a || (a = i.fileManager.getId(e)), a && (i.fileManager.stack[a] = {
            file: e,
            name: t.getFileName(e),
            relativePath: t.getFileRelativePath(e),
            size: e.size,
            nameFmt: i._getFileName(e, ""),
            sizeFmt: i._getSize(e.size)
          });
        },
        remove: function remove(e) {
          var t = e.attr("data-fileid");
          t && i.fileManager.removeFile(t);
        },
        removeFile: function removeFile(e) {
          delete i.fileManager.stack[e], delete i.fileManager.loadedImages[e];
        },
        move: function move(t, a) {
          var r = {},
              n = i.fileManager.stack;
          (t || a) && t !== a && (e.each(n, function (e, i) {
            e !== t && (r[e] = i), e === a && (r[t] = n[t]);
          }), i.fileManager.stack = r);
        },
        list: function list() {
          var t = [];
          return e.each(i.fileManager.stack, function (e, i) {
            i && i.file && t.push(i.file);
          }), t;
        },
        isPending: function isPending(t) {
          return -1 === e.inArray(t, i.fileManager.processed) && i.fileManager.exists(t);
        },
        isProcessed: function isProcessed() {
          var t = !0,
              a = i.fileManager;
          return e.each(a.stack, function (e) {
            a.isPending(e) && (t = !1);
          }), t;
        },
        clear: function clear() {
          var e = i.fileManager;
          e.totalFiles = null, e.totalSize = null, e.uploadedSize = 0, e.stack = {}, e.processed = [], e.stats = {}, e.clearImages();
        },
        clearImages: function clearImages() {
          i.fileManager.loadedImages = {}, i.fileManager.totalImages = 0;
        },
        addImage: function addImage(e, t) {
          i.fileManager.loadedImages[e] = t;
        },
        removeImage: function removeImage(e) {
          delete i.fileManager.loadedImages[e];
        },
        getImageIdList: function getImageIdList() {
          return Object.keys(i.fileManager.loadedImages);
        },
        getImageCount: function getImageCount() {
          return i.fileManager.getImageIdList().length;
        },
        getId: function getId(e) {
          return i._getFileId(e);
        },
        getIndex: function getIndex(e) {
          return i.fileManager.getIdList().indexOf(e);
        },
        getThumb: function getThumb(t) {
          var a = null;
          return i._getThumbs().each(function () {
            e(this).attr("data-fileid") === t && (a = e(this));
          }), a;
        },
        getThumbIndex: function getThumbIndex(e) {
          var t = e.attr("data-fileid");
          return i.fileManager.getIndex(t);
        },
        getIdList: function getIdList() {
          return Object.keys(i.fileManager.stack);
        },
        getFile: function getFile(e) {
          return i.fileManager.stack[e] || null;
        },
        getFileName: function getFileName(e, t) {
          var a = i.fileManager.getFile(e);
          return a ? t ? a.nameFmt || "" : a.name || "" : "";
        },
        getFirstFile: function getFirstFile() {
          var e = i.fileManager.getIdList(),
              t = e && e.length ? e[0] : null;
          return i.fileManager.getFile(t);
        },
        setFile: function setFile(e, t) {
          i.fileManager.getFile(e) ? i.fileManager.stack[e].file = t : i.fileManager.add(t, e);
        },
        setProcessed: function setProcessed(e) {
          i.fileManager.processed.push(e);
        },
        getProgress: function getProgress() {
          var e = i.fileManager.total(),
              t = i.fileManager.processed.length;
          return e ? Math.ceil(t / e * 100) : 0;
        },
        setProgress: function setProgress(e, t) {
          var a = i.fileManager.getFile(e);
          !isNaN(t) && a && (a.progress = t);
        }
      };
    },
    _setUploadData: function _setUploadData(i, a) {
      var r = this;
      e.each(a, function (e, a) {
        var n = r.uploadParamNames[e] || e;
        t.isArray(a) ? i.append(n, a[0], a[1]) : i.append(n, a);
      });
    },
    _initResumableUpload: function _initResumableUpload() {
      var i = this,
          a = i.resumableUploadOptions;

      if (i.enableResumableUpload) {
        if (a.fallback !== !1 && "function" != typeof a.fallback && (a.fallback = function (e) {
          e._log("The browser does not support resumable or chunk uploads."), e.enableResumableUpload = !1;
        }), !t.hasResumableUploadSupport() && a.fallback !== !1) return void a.fallback(i);
        if (!i.uploadUrl && i.enableResumableUpload) return i._log('The "uploadUrl" is not set. Ajax uploads and resumable uploads have been disabled.'), void (i.enableResumableUpload = !1);
        if (a.chunkSize = parseFloat(a.chunkSize), a.chunkSize <= 0 || isNaN(a.chunkSize)) return i._log('Invalid "uploadResumableSize" (' + a.chunkSize + "). Resumable uploads are disabled."), void (i.enableResumableUpload = !1);
        i.resumableManager = {
          init: function init(e, t, a) {
            var r = i.resumableManager,
                n = i.fileManager;
            r.currThreads = 0, r.logs = [], r.stack = [], r.error = "", r.chunkIntervalId = null, r.id = e, r.file = t.file, r.fileName = t.name, r.fileIndex = a, r.completed = !1, r.testing = !1, r.lastProgress = 0, i.showPreview && (r.$thumb = n.getThumb(e) || null, r.$progress = r.$btnUpload = r.$btnDelete = null, r.$thumb && r.$thumb.length && (r.$progress = r.$thumb.find(".file-thumb-progress"), r.$btnUpload = r.$thumb.find(".kv-file-upload"), r.$btnDelete = r.$thumb.find(".kv-file-remove"))), r.chunkSize = 1024 * i.resumableUploadOptions.chunkSize, r.chunkCount = r.getTotalChunks();
          },
          logAjaxError: function logAjaxError(e, t, a) {
            i.resumableUploadOptions.showErrorLog && i._log(e.status + ": " + a + ". Error Details: " + e.responseText || "");
          },
          reset: function reset() {
            var e = i.resumableManager;
            e.processed = {};
          },
          setProcessed: function setProcessed(e) {
            var t,
                a = i.resumableManager,
                r = i.fileManager,
                n = a.id,
                o = a.$btnUpload,
                l = a.$thumb,
                s = a.$progress,
                d = {
              id: l.attr("id"),
              index: r.getIndex(n),
              fileId: n
            };
            a.completed = !0, a.lastProgress = 0, r.uploadedSize += a.file.size, l.removeClass("file-uploading"), "success" === e ? (i.showPreview && (i._setProgress(101, s), i._setThumbStatus(l, "Success"), i._initUploadSuccess(a.processed[n].data, l), o.hide()), i.fileManager.removeFile(n), delete a.processed[n], i._raise("fileuploaded", [d.id, d.index, d.fileId]), r.isProcessed() && i._setProgress(101)) : (i.showPreview && (i._setThumbStatus(l, "Error"), i._setPreviewError(l, !0), i.retryErrorUploads ? o.removeAttr("disabled") : o.hide(), i._setProgress(101, s, i.msgUploadError), i._setProgress(101, i.$progress, i.msgUploadError), i.cancelling = !0), i.$errorContainer.find('li[data-file-id="' + d.fileId + '"]').length || (t = i.msgResumableUploadRetriesExceeded.setTokens({
              file: a.fileName,
              max: i.resumableUploadOptions.maxRetries,
              error: a.error
            }), i._showUploadError(t, d))), r.isProcessed() && a.reset();
          },
          check: function check() {
            var t = i.resumableManager,
                a = !0;
            e.each(t.logs, function (e, t) {
              return t ? void 0 : (a = !1, !1);
            }), a && (clearInterval(t.chunkIntervalId), t.setProcessed("success"));
          },
          processedResumables: function processedResumables() {
            var e,
                t = i.resumableManager.logs,
                a = 0;
            if (!t || !t.length) return 0;

            for (e = 0; e < t.length; e++) {
              t[e] === !0 && a++;
            }

            return a;
          },
          getUploadedSize: function getUploadedSize() {
            var e = i.resumableManager,
                t = e.processedResumables() * e.chunkSize;
            return t > e.file.size ? e.file.size : t;
          },
          getTotalChunks: function getTotalChunks() {
            var e = i.resumableManager,
                t = parseFloat(e.chunkSize);
            return !isNaN(t) && t > 0 ? Math.ceil(e.file.size / t) : 0;
          },
          getProgress: function getProgress() {
            var e = i.resumableManager,
                t = e.processedResumables(),
                a = e.chunkCount;
            return 0 === a ? 0 : Math.ceil(t / a * 100);
          },
          checkAborted: function checkAborted(e) {
            (i.paused || i.cancelling) && (clearInterval(e), i.unlock());
          },
          uploadSingle: function uploadSingle(e) {
            var t,
                a = i.resumableManager,
                r = i.fileManager,
                n = "new";
            t = setInterval(function () {
              a.checkAborted(t), "new" === n && (i.lock(), n = "processing", r.stack[e] && (a.init(e, r.stack[e]), a.uploadResumable())), (!r.isPending(e) && a.completed || r.isProcessed()) && (clearInterval(t), i.unlock());
            }, i.processDelay);
          },
          upload: function upload() {
            var e,
                a = i.resumableManager,
                r = i.fileManager,
                n = r.getIdList(),
                o = "new";
            e = setInterval(function () {
              var l;

              if (a.checkAborted(e), "new" === o && (i.lock(), o = "processing", l = n.shift(), r.initStats(l), r.stack[l] && (a.init(l, r.stack[l], r.getIndex(l)), a.testUpload(), a.uploadResumable())), !r.isPending(l) && a.completed && (o = "new"), r.isProcessed()) {
                var s = i.$preview.find(".file-preview-initial");
                s.length && (t.addCss(s, t.SORT_CSS), i._initSortable()), clearInterval(e), i._clearFileInput(), i.unlock(), setTimeout(function () {
                  var e = i.previewCache.data;
                  e && (i.initialPreview = e.content, i.initialPreviewConfig = e.config, i.initialPreviewThumbTags = e.tags), i._raise("filebatchuploadcomplete", [i.initialPreview, i.initialPreviewConfig, i.initialPreviewThumbTags, i._getExtraData()]);
                }, i.processDelay);
              }
            }, i.processDelay);
          },
          uploadResumable: function uploadResumable() {
            var e,
                t = i.resumableManager,
                a = t.chunkCount;

            for (e = 0; a > e; e++) {
              t.logs[e] = !(!t.processed[t.id] || !t.processed[t.id][e]);
            }

            for (e = 0; a > e; e++) {
              t.pushAjax(e, 0);
            }

            t.chunkIntervalId = setInterval(t.loopAjax, i.queueDelay);
          },
          testUpload: function testUpload() {
            var a,
                r,
                n,
                o,
                l,
                s,
                d,
                c = i.resumableManager,
                u = i.resumableUploadOptions,
                p = i.fileManager,
                f = c.id;
            return u.testUrl ? (c.testing = !0, a = new FormData(), r = p.stack[f], i._setUploadData(a, {
              fileId: f,
              fileName: r.fileName,
              fileSize: r.size,
              fileRelativePath: r.relativePath,
              chunkSize: c.chunkSize,
              chunkCount: c.chunkCount
            }), n = function n(e) {
              d = i._getOutData(a, e), i._raise("filetestbeforesend", [f, p, c, d]);
            }, o = function o(r, n, _o) {
              d = i._getOutData(a, _o, r);
              var l = i.uploadParamNames,
                  s = l.chunksUploaded || "chunksUploaded",
                  u = [f, p, c, d];
              r[s] && t.isArray(r[s]) ? (c.processed[f] || (c.processed[f] = {}), e.each(r[s], function (e, t) {
                c.logs[t] = !0, c.processed[f][t] = !0;
              }), c.processed[f].data = r, i._raise("filetestsuccess", u)) : i._raise("filetesterror", u), c.testing = !1;
            }, l = function l(e, t, r) {
              d = i._getOutData(a, e), i._raise("filetestajaxerror", [f, p, c, d]), c.logAjaxError(e, t, r), c.testing = !1;
            }, s = function s() {
              i._raise("filetestcomplete", [f, p, c, i._getOutData(a)]), c.testing = !1;
            }, void i._ajaxSubmit(n, o, s, l, a, f, c.fileIndex, u.testUrl)) : void (c.testing = !1);
          },
          pushAjax: function pushAjax(e, t) {
            i.resumableManager.stack.push([e, t]);
          },
          sendAjax: function sendAjax(e, a) {
            var r,
                n = i.fileManager,
                o = i.resumableManager,
                l = i.resumableUploadOptions,
                s = o.chunkSize,
                d = o.id,
                c = o.file,
                u = o.$thumb,
                p = o.$btnUpload,
                f = o.$btnDelete;

            if (!o.processed[d] || !o.processed[d][e]) {
              if (o.currThreads++, a > l.maxRetries) return void o.setProcessed("error");

              var g,
                  m,
                  v,
                  h,
                  w,
                  b,
                  _ = c.slice ? "slice" : c.mozSlice ? "mozSlice" : c.webkitSlice ? "webkitSlice" : "slice",
                  C = c[_](s * e, s * (e + 1));

              g = new FormData(), r = n.stack[d], i._setUploadData(g, {
                fileId: d,
                fileName: o.fileName,
                fileSize: c.size,
                fileRelativePath: r.relativePath,
                fileBlob: [C, o.fileName],
                chunkIndex: e,
                chunkSize: s,
                chunkSizeStart: s * e,
                chunkCount: o.chunkCount,
                retryCount: a
              }), o.$progress.show(), v = function v(r) {
                m = i._getOutData(g, r), i.showPreview && (u.hasClass("file-preview-success") || (i._setThumbStatus(u, "Loading"), t.addCss(u, "file-uploading")), p.attr("disabled", !0), f.attr("disabled", !0)), i._raise("filechunkbeforesend", [d, e, a, n, o, m]);
              }, h = function h(t, r, l) {
                m = i._getOutData(g, l, t);
                var s = i.uploadParamNames,
                    c = s.chunkIndex || "chunkIndex",
                    u = i.resumableUploadOptions,
                    p = [d, e, a, n, o, m];
                o.currThreads--, t.error ? (u.showErrorLog && i._log("Retry # " + a + "1 for " + o.fileName + " chunk # " + e), o.pushAjax(e, a + 1), o.error = t.error, i._raise("filechunkerror", p)) : (o.logs[t[c]] = !0, o.processed[d] || (o.processed[d] = {}), o.processed[d][t[c]] = !0, o.processed[d].data = t, o.check(), i._raise("filechunksuccess", p));
              }, w = function w(t, r, l) {
                m = i._getOutData(g, t), o.currThreads--, o.error = l, o.logAjaxError(t, r, l), i._raise("filechunkajaxerror", [d, e, a, n, o, m]), o.pushAjax(e, a + 1);
              }, b = function b() {
                i._raise("filechunkcomplete", [d, e, a, n, o, i._getOutData(g)]);
              }, i._ajaxSubmit(v, h, b, w, g, d, o.fileIndex);
            }
          },
          loopAjax: function loopAjax() {
            var e = i.resumableManager;

            if (e.currThreads < i.resumableUploadOptions.maxThreads && !e.testing) {
              var t,
                  a = e.stack.shift();
              "undefined" != typeof a && (t = a[0], e.processed[e.id] && e.processed[e.id][t] ? e.processedResumables() >= e.getTotalChunks() && (e.setProcessed("success"), clearInterval(e.chunkIntervalId)) : e.sendAjax(t, a[1]));
            }
          }
        }, i.resumableManager.reset();
      }
    },
    _initTemplateDefaults: function _initTemplateDefaults() {
      var i,
          a,
          r,
          n,
          o,
          l,
          s,
          d,
          c,
          u,
          p,
          f,
          g,
          m,
          v,
          h,
          w,
          b,
          _,
          C,
          y,
          x,
          T,
          I,
          P,
          k,
          S,
          E,
          F,
          A,
          z,
          D,
          M,
          U,
          $,
          j,
          R,
          O,
          B,
          L,
          Z,
          N = this;

      i = '{preview}\n<div class="kv-upload-progress kv-hidden"></div><div class="clearfix"></div>\n<div class="input-group {class}">\n  {caption}\n<div class="input-group-btn input-group-append">\n      {remove}\n      {cancel}\n      {pause}\n      {upload}\n      {browse}\n    </div>\n</div>', a = '{preview}\n<div class="kv-upload-progress kv-hidden"></div>\n<div class="clearfix"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n', r = '<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>', o = t.closeButton("fileinput-remove"), n = '<i class="glyphicon glyphicon-file"></i>', l = '<div class="file-caption form-control {class}" tabindex="500">\n  <span class="file-caption-icon"></span>\n  <input class="file-caption-name" onkeydown="return false;" onpaste="return false;">\n</div>', s = '<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</button>', d = '<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>', c = '<div tabindex="500" class="{css}" {status}>{icon} {label}</div>', u = '<div id="' + t.MODAL_ID + '" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="' + t.MODAL_ID + 'Label"></div>', p = '<div class="modal-dialog modal-lg{rtl}" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title">{heading}</h5>\n      <span class="kv-zoom-title"></span>\n      <div class="kv-zoom-actions">{toggleheader}{fullscreen}{borderless}{close}</div>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons"></div>\n      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n', f = '<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {status}\n     </div>\n</div>{stats}', Z = '<div class="text-info file-upload-stats"><span class="pending-time">{pendingTime}</span> <span class="upload-speed">{uploadSpeed}</span></div>', g = " <samp>({sizeText})</samp>", m = '<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">\n        <div class="file-caption-info">{caption}</div>\n        <div class="file-size-info">{size}</div>\n    </div>\n    {progress}\n{indicator}\n{actions}\n</div>', v = '<div class="file-actions">\n    <div class="file-footer-buttons">\n        {download} {upload} {delete} {zoom} {other}    </div>\n</div>\n{drag}\n<div class="clearfix"></div>', h = '<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n', w = '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>', b = '<a class="kv-file-download {downloadClass}" title="{downloadTitle}" href="{downloadUrl}" download="{caption}" target="_blank">{downloadIcon}</a>', _ = '<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>', C = '<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>', y = '<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>', x = '<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-fileid="{fileid}" data-template="{template}"', T = x + '><div class="kv-file-content">\n', I = x + ' title="{caption}"><div class="kv-file-content">\n', P = "</div>{footer}\n</div>\n", k = "{content}\n", O = " {style}", S = '<div class="kv-preview-data file-preview-html" title="{caption}"' + O + ">{data}</div>\n", E = '<img src="{data}" class="file-preview-image kv-preview-data" title="{title}" alt="{alt}"' + O + ">\n", F = '<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly' + O + ">{data}</textarea>\n", A = '<iframe class="kv-preview-data file-preview-office" src="https://view.officeapps.live.com/op/embed.aspx?src={data}"' + O + "></iframe>", z = '<iframe class="kv-preview-data file-preview-gdocs" src="https://docs.google.com/gview?url={data}&embedded=true"' + O + "></iframe>", D = '<video class="kv-preview-data file-preview-video" controls' + O + '>\n<source src="{data}" type="{type}">\n' + t.DEFAULT_PREVIEW + "\n</video>\n", M = '<!--suppress ALL --><audio class="kv-preview-data file-preview-audio" controls' + O + '>\n<source src="{data}" type="{type}">\n' + t.DEFAULT_PREVIEW + "\n</audio>\n", U = '<embed class="kv-preview-data file-preview-flash" src="{data}" type="application/x-shockwave-flash"' + O + ">\n", j = '<embed class="kv-preview-data file-preview-pdf" src="{data}" type="application/pdf"' + O + ">\n", $ = '<object class="kv-preview-data file-preview-object file-object {typeCss}" data="{data}" type="{type}"' + O + '>\n<param name="movie" value="{caption}" />\n' + t.OBJECT_PARAMS + " " + t.DEFAULT_PREVIEW + "\n</object>\n", R = '<div class="kv-preview-data file-preview-other-frame"' + O + ">\n" + t.DEFAULT_PREVIEW + "\n</div>\n", B = '<div class="kv-zoom-cache" style="display:none">{zoomContent}</div>', L = {
        width: "100%",
        height: "100%",
        "min-height": "480px"
      }, N._isPdfRendered() && (j = N.pdfRendererTemplate.replace("{renderer}", N._encodeURI(N.pdfRendererUrl))), N.defaults = {
        layoutTemplates: {
          main1: i,
          main2: a,
          preview: r,
          close: o,
          fileIcon: n,
          caption: l,
          modalMain: u,
          modal: p,
          progress: f,
          stats: Z,
          size: g,
          footer: m,
          indicator: y,
          actions: v,
          actionDelete: h,
          actionUpload: w,
          actionDownload: b,
          actionZoom: _,
          actionDrag: C,
          btnDefault: s,
          btnLink: d,
          btnBrowse: c,
          zoomCache: B
        },
        previewMarkupTags: {
          tagBefore1: T,
          tagBefore2: I,
          tagAfter: P
        },
        previewContentTemplates: {
          generic: k,
          html: S,
          image: E,
          text: F,
          office: A,
          gdocs: z,
          video: D,
          audio: M,
          flash: U,
          object: $,
          pdf: j,
          other: R
        },
        allowedPreviewTypes: ["image", "html", "text", "video", "audio", "flash", "pdf", "object"],
        previewTemplates: {},
        previewSettings: {
          image: {
            width: "auto",
            height: "auto",
            "max-width": "100%",
            "max-height": "100%"
          },
          html: {
            width: "213px",
            height: "160px"
          },
          text: {
            width: "213px",
            height: "160px"
          },
          office: {
            width: "213px",
            height: "160px"
          },
          gdocs: {
            width: "213px",
            height: "160px"
          },
          video: {
            width: "213px",
            height: "160px"
          },
          audio: {
            width: "100%",
            height: "30px"
          },
          flash: {
            width: "213px",
            height: "160px"
          },
          object: {
            width: "213px",
            height: "160px"
          },
          pdf: {
            width: "100%",
            height: "160px"
          },
          other: {
            width: "213px",
            height: "160px"
          }
        },
        previewSettingsSmall: {
          image: {
            width: "auto",
            height: "auto",
            "max-width": "100%",
            "max-height": "100%"
          },
          html: {
            width: "100%",
            height: "160px"
          },
          text: {
            width: "100%",
            height: "160px"
          },
          office: {
            width: "100%",
            height: "160px"
          },
          gdocs: {
            width: "100%",
            height: "160px"
          },
          video: {
            width: "100%",
            height: "auto"
          },
          audio: {
            width: "100%",
            height: "30px"
          },
          flash: {
            width: "100%",
            height: "auto"
          },
          object: {
            width: "100%",
            height: "auto"
          },
          pdf: {
            width: "100%",
            height: "160px"
          },
          other: {
            width: "100%",
            height: "160px"
          }
        },
        previewZoomSettings: {
          image: {
            width: "auto",
            height: "auto",
            "max-width": "100%",
            "max-height": "100%"
          },
          html: L,
          text: L,
          office: {
            width: "100%",
            height: "100%",
            "max-width": "100%",
            "min-height": "480px"
          },
          gdocs: {
            width: "100%",
            height: "100%",
            "max-width": "100%",
            "min-height": "480px"
          },
          video: {
            width: "auto",
            height: "100%",
            "max-width": "100%"
          },
          audio: {
            width: "100%",
            height: "30px"
          },
          flash: {
            width: "auto",
            height: "480px"
          },
          object: {
            width: "auto",
            height: "100%",
            "max-width": "100%",
            "min-height": "480px"
          },
          pdf: L,
          other: {
            width: "auto",
            height: "100%",
            "min-height": "480px"
          }
        },
        mimeTypeAliases: {
          "video/quicktime": "video/mp4"
        },
        fileTypeSettings: {
          image: function image(e, i) {
            return t.compare(e, "image.*") && !t.compare(e, /(tiff?|wmf)$/i) || t.compare(i, /\.(gif|png|jpe?g)$/i);
          },
          html: function html(e, i) {
            return t.compare(e, "text/html") || t.compare(i, /\.(htm|html)$/i);
          },
          office: function office(e, i) {
            return t.compare(e, /(word|excel|powerpoint|office)$/i) || t.compare(i, /\.(docx?|xlsx?|pptx?|pps|potx?)$/i);
          },
          gdocs: function gdocs(e, i) {
            return t.compare(e, /(word|excel|powerpoint|office|iwork-pages|tiff?)$/i) || t.compare(i, /\.(docx?|xlsx?|pptx?|pps|potx?|rtf|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i);
          },
          text: function text(e, i) {
            return t.compare(e, "text.*") || t.compare(i, /\.(xml|javascript)$/i) || t.compare(i, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i);
          },
          video: function video(e, i) {
            return t.compare(e, "video.*") && (t.compare(e, /(ogg|mp4|mp?g|mov|webm|3gp)$/i) || t.compare(i, /\.(og?|mp4|webm|mp?g|mov|3gp)$/i));
          },
          audio: function audio(e, i) {
            return t.compare(e, "audio.*") && (t.compare(i, /(ogg|mp3|mp?g|wav)$/i) || t.compare(i, /\.(og?|mp3|mp?g|wav)$/i));
          },
          flash: function flash(e, i) {
            return t.compare(e, "application/x-shockwave-flash", !0) || t.compare(i, /\.(swf)$/i);
          },
          pdf: function pdf(e, i) {
            return t.compare(e, "application/pdf", !0) || t.compare(i, /\.(pdf)$/i);
          },
          object: function object() {
            return !0;
          },
          other: function other() {
            return !0;
          }
        },
        fileActionSettings: {
          showRemove: !0,
          showUpload: !0,
          showDownload: !0,
          showZoom: !0,
          showDrag: !0,
          removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
          removeClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          removeErrorClass: "btn btn-sm btn-kv btn-danger",
          removeTitle: "Remove file",
          uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
          uploadClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          uploadTitle: "Upload file",
          uploadRetryIcon: '<i class="glyphicon glyphicon-repeat"></i>',
          uploadRetryTitle: "Retry upload",
          downloadIcon: '<i class="glyphicon glyphicon-download"></i>',
          downloadClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          downloadTitle: "Download file",
          zoomIcon: '<i class="glyphicon glyphicon-zoom-in"></i>',
          zoomClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          zoomTitle: "View Details",
          dragIcon: '<i class="glyphicon glyphicon-move"></i>',
          dragClass: "text-info",
          dragTitle: "Move / Rearrange",
          dragSettings: {},
          indicatorNew: '<i class="glyphicon glyphicon-plus-sign text-warning"></i>',
          indicatorSuccess: '<i class="glyphicon glyphicon-ok-sign text-success"></i>',
          indicatorError: '<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',
          indicatorLoading: '<i class="glyphicon glyphicon-hourglass text-muted"></i>',
          indicatorNewTitle: "Not uploaded yet",
          indicatorSuccessTitle: "Uploaded",
          indicatorErrorTitle: "Upload Error",
          indicatorLoadingTitle: "Uploading ..."
        }
      }, e.each(N.defaults, function (t, i) {
        return "allowedPreviewTypes" === t ? void (void 0 === N.allowedPreviewTypes && (N.allowedPreviewTypes = i)) : void (N[t] = e.extend(!0, {}, i, N[t]));
      }), N._initPreviewTemplates();
    },
    _initPreviewTemplates: function _initPreviewTemplates() {
      var i,
          a = this,
          r = a.previewMarkupTags,
          n = r.tagAfter;
      e.each(a.previewContentTemplates, function (e, o) {
        t.isEmpty(a.previewTemplates[e]) && (i = r.tagBefore2, "generic" !== e && "image" !== e && "html" !== e && "text" !== e || (i = r.tagBefore1), a._isPdfRendered() && "pdf" === e && (i = i.replace("kv-file-content", "kv-file-content kv-pdf-rendered")), a.previewTemplates[e] = i + o + n);
      });
    },
    _initPreviewCache: function _initPreviewCache() {
      var i = this;
      i.previewCache = {
        data: {},
        init: function init() {
          var e = i.initialPreview;
          e.length > 0 && !t.isArray(e) && (e = e.split(i.initialPreviewDelimiter)), i.previewCache.data = {
            content: e,
            config: i.initialPreviewConfig,
            tags: i.initialPreviewThumbTags
          };
        },
        count: function count(e) {
          if (!i.previewCache.data || !i.previewCache.data.content) return 0;

          if (e) {
            var t = i.previewCache.data.content.filter(function (e) {
              return null !== e;
            });
            return t.length;
          }

          return i.previewCache.data.content.length;
        },
        get: function get(a, r) {
          var n,
              o,
              l,
              s,
              d,
              c,
              u,
              p,
              f = "init_" + a,
              g = i.previewCache.data,
              m = g.config[a],
              v = g.content[a],
              h = i.previewInitId + "-" + f,
              w = t.ifSet("previewAsData", m, i.initialPreviewAsData),
              b = m ? {
            title: m.title || null,
            alt: m.alt || null
          } : {
            title: null,
            alt: null
          },
              _ = function _(e, a, r, o, l, s, d, c, u) {
            return c = " file-preview-initial " + t.SORT_CSS + (c ? " " + c : ""), n = m && m.fileId || "file_" + l, i._generatePreviewTemplate(e, a, r, o, l, n, !1, null, c, s, d, u, b, m && m.zoomData || a);
          };

          return v && v.length ? (r = void 0 === r ? !0 : r, s = t.ifSet("type", m, i.initialPreviewFileType || "generic"), c = t.ifSet("filename", m, t.ifSet("caption", m)), u = t.ifSet("filetype", m, s), d = i.previewCache.footer(a, r, m && m.size || null), p = t.ifSet("frameClass", m), o = w ? _(s, v, c, u, h, d, f, p) : _("generic", v, c, u, h, d, f, p, s).setTokens({
            content: g.content[a]
          }), g.tags.length && g.tags[a] && (o = t.replaceTags(o, g.tags[a])), t.isEmpty(m) || t.isEmpty(m.frameAttr) || (l = e(document.createElement("div")).html(o), l.find(".file-preview-initial").attr(m.frameAttr), o = l.html(), l.remove()), o) : "";
        },
        clean: function clean(e) {
          e.content = t.cleanArray(e.content), e.config = t.cleanArray(e.config), e.tags = t.cleanArray(e.tags), i.previewCache.data = e;
        },
        add: function add(e, a, r, n) {
          var o = i.previewCache.data,
              l = e.length - 1;
          return e && e.length ? (t.isArray(e) || (e = e.split(i.initialPreviewDelimiter)), n ? (l = o.content.push(e[0]) - 1, o.config[l] = a, o.tags[l] = r) : (o.content = e, o.config = a, o.tags = r), i.previewCache.clean(o), l) : l;
        },
        set: function set(e, a, r, n) {
          var o,
              l,
              s = i.previewCache.data;

          if (e && e.length && (t.isArray(e) || (e = e.split(i.initialPreviewDelimiter)), l = e.filter(function (e) {
            return null !== e;
          }), l.length)) {
            if (void 0 === s.content && (s.content = []), void 0 === s.config && (s.config = []), void 0 === s.tags && (s.tags = []), n) {
              for (o = 0; o < e.length; o++) {
                e[o] && s.content.push(e[o]);
              }

              for (o = 0; o < a.length; o++) {
                a[o] && s.config.push(a[o]);
              }

              for (o = 0; o < r.length; o++) {
                r[o] && s.tags.push(r[o]);
              }
            } else s.content = e, s.config = a, s.tags = r;

            i.previewCache.clean(s);
          }
        },
        unset: function unset(a) {
          var r = i.previewCache.count(),
              n = i.reversePreviewOrder;

          if (r) {
            if (1 === r) return i.previewCache.data.content = [], i.previewCache.data.config = [], i.previewCache.data.tags = [], i.initialPreview = [], i.initialPreviewConfig = [], void (i.initialPreviewThumbTags = []);
            i.previewCache.data.content = t.spliceArray(i.previewCache.data.content, a, n), i.previewCache.data.config = t.spliceArray(i.previewCache.data.config, a, n), i.previewCache.data.tags = t.spliceArray(i.previewCache.data.tags, a, n);
            var o = e.extend(!0, {}, i.previewCache.data);
            i.previewCache.clean(o);
          }
        },
        out: function out() {
          var e,
              t,
              a,
              r = "",
              n = i.previewCache.count();
          if (0 === n) return {
            content: "",
            caption: ""
          };

          for (t = 0; n > t; t++) {
            a = i.previewCache.get(t), r = i.reversePreviewOrder ? a + r : r + a;
          }

          return e = i._getMsgSelected(n), {
            content: r,
            caption: e
          };
        },
        footer: function footer(e, a, r) {
          var n = i.previewCache.data || {};
          if (t.isEmpty(n.content)) return "";
          (t.isEmpty(n.config) || t.isEmpty(n.config[e])) && (n.config[e] = {}), a = void 0 === a ? !0 : a;

          var o,
              l = n.config[e],
              s = t.ifSet("caption", l),
              d = t.ifSet("width", l, "auto"),
              c = t.ifSet("url", l, !1),
              u = t.ifSet("key", l, null),
              p = t.ifSet("fileId", l, null),
              f = i.fileActionSettings,
              g = i.initialPreviewShowDelete || !1,
              m = i.initialPreviewDownloadUrl ? i.initialPreviewDownloadUrl + "?key=" + u + (p ? "&fileId=" + p : "") : "",
              v = l.downloadUrl || m,
              h = l.filename || l.caption || "",
              w = !!v,
              b = t.ifSet("showRemove", l, t.ifSet("showRemove", f, g)),
              _ = t.ifSet("showDownload", l, t.ifSet("showDownload", f, w)),
              C = t.ifSet("showZoom", l, t.ifSet("showZoom", f, !0)),
              y = t.ifSet("showDrag", l, t.ifSet("showDrag", f, !0)),
              x = c === !1 && a;

          return _ = _ && l.downloadUrl !== !1 && !!v, o = i._renderFileActions(l, !1, _, b, C, y, x, c, u, !0, v, h), i._getLayoutTemplate("footer").setTokens({
            progress: i._renderThumbProgress(),
            actions: o,
            caption: s,
            size: i._getSize(r),
            width: d,
            indicator: ""
          });
        }
      }, i.previewCache.init();
    },
    _isPdfRendered: function _isPdfRendered() {
      var e = this,
          t = e.usePdfRenderer,
          i = "function" == typeof t ? t() : !!t;
      return i && e.pdfRendererUrl;
    },
    _handler: function _handler(e, t, i) {
      var a = this,
          r = a.namespace,
          n = t.split(" ").join(r + " ") + r;
      e && e.length && e.off(n).on(n, i);
    },
    _encodeURI: function _encodeURI(e) {
      var t = this;
      return t.encodeUrl ? encodeURI(e) : e;
    },
    _log: function _log(e) {
      var t = this,
          i = t.$element.attr("id");
      i && (e = '"' + i + '": ' + e), e = "bootstrap-fileinput: " + e, "undefined" != typeof window.console.log ? window.console.log(e) : window.alert(e);
    },
    _validate: function _validate() {
      var e = this,
          t = "file" === e.$element.attr("type");
      return t || e._log('The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.'), t;
    },
    _errorsExist: function _errorsExist() {
      var t,
          i = this,
          a = i.$errorContainer.find("li");
      return a.length ? !0 : (t = e(document.createElement("div")).html(i.$errorContainer.html()), t.find(".kv-error-close").remove(), t.find("ul").remove(), !!e.trim(t.text()).length);
    },
    _errorHandler: function _errorHandler(e, t) {
      var i = this,
          a = e.target.error,
          r = function r(e) {
        i._showError(e.replace("{name}", t));
      };

      r(a.code === a.NOT_FOUND_ERR ? i.msgFileNotFound : a.code === a.SECURITY_ERR ? i.msgFileSecured : a.code === a.NOT_READABLE_ERR ? i.msgFileNotReadable : a.code === a.ABORT_ERR ? i.msgFilePreviewAborted : i.msgFilePreviewError);
    },
    _addError: function _addError(e) {
      var t = this,
          i = t.$errorContainer;
      e && i.length && (i.html(t.errorCloseButton + e), t._handler(i.find(".kv-error-close"), "click", function () {
        setTimeout(function () {
          t.showPreview && !t.getFrames().length && t.clear(), i.fadeOut("slow");
        }, t.processDelay);
      }));
    },
    _setValidationError: function _setValidationError(e) {
      var i = this;
      e = (e ? e + " " : "") + "has-error", i.$container.removeClass(e).addClass("has-error"), t.addCss(i.$captionContainer, "is-invalid");
    },
    _resetErrors: function _resetErrors(e) {
      var t = this,
          i = t.$errorContainer;
      t.isError = !1, t.$container.removeClass("has-error"), t.$captionContainer.removeClass("is-invalid"), i.html(""), e ? i.fadeOut("slow") : i.hide();
    },
    _showFolderError: function _showFolderError(e) {
      var t,
          i = this,
          a = i.$errorContainer;
      e && (i.isAjaxUpload || i._clearFileInput(), t = i.msgFoldersNotAllowed.replace("{n}", e), i._addError(t), i._setValidationError(), a.fadeIn(800), i._raise("filefoldererror", [e, t]));
    },
    _showUploadError: function _showUploadError(e, t, i) {
      var a = this,
          r = a.$errorContainer,
          n = i || "fileuploaderror",
          o = t.fileId || "",
          l = t && t.id ? '<li data-thumb-id="' + t.id + '" data-file-id="' + o + '">' + e + "</li>" : "<li>" + e + "</li>";
      return 0 === r.find("ul").length ? a._addError("<ul>" + l + "</ul>") : r.find("ul").append(l), r.fadeIn(800), a._raise(n, [t, e]), a._setValidationError("file-input-new"), !0;
    },
    _showError: function _showError(e, t, i) {
      var a = this,
          r = a.$errorContainer,
          n = i || "fileerror";
      return t = t || {}, t.reader = a.reader, a._addError(e), r.fadeIn(800), a._raise(n, [t, e]), a.isAjaxUpload || a._clearFileInput(), a._setValidationError("file-input-new"), a.$btnUpload.attr("disabled", !0), !0;
    },
    _noFilesError: function _noFilesError(e) {
      var t = this,
          i = t.minFileCount > 1 ? t.filePlural : t.fileSingle,
          a = t.msgFilesTooLess.replace("{n}", t.minFileCount).replace("{files}", i),
          r = t.$errorContainer;
      t._addError(a), t.isError = !0, t._updateFileDetails(0), r.fadeIn(800), t._raise("fileerror", [e, a]), t._clearFileInput(), t._setValidationError();
    },
    _parseError: function _parseError(t, i, a, r) {
      var n,
          o = this,
          l = e.trim(a + ""),
          s = void 0 !== i.responseJSON && void 0 !== i.responseJSON.error ? i.responseJSON.error : i.responseText;
      return o.cancelling && o.msgUploadAborted && (l = o.msgUploadAborted), o.showAjaxErrorDetails && s && (s = e.trim(s.replace(/\n\s*\n/g, "\n")), n = s.length ? "<pre>" + s + "</pre>" : "", l += l ? n : s), l || (l = o.msgAjaxError.replace("{operation}", t)), o.cancelling = !1, r ? "<b>" + r + ": </b>" + l : l;
    },
    _parseFileType: function _parseFileType(e, i) {
      var a,
          r,
          n,
          o,
          l = this,
          s = l.allowedPreviewTypes || [];
      if ("application/text-plain" === e) return "text";

      for (o = 0; o < s.length; o++) {
        if (n = s[o], a = l.fileTypeSettings[n], r = a(e, i) ? n : "", !t.isEmpty(r)) return r;
      }

      return "other";
    },
    _getPreviewIcon: function _getPreviewIcon(t) {
      var i,
          a = this,
          r = null;
      return t && t.indexOf(".") > -1 && (i = t.split(".").pop(), a.previewFileIconSettings && (r = a.previewFileIconSettings[i] || a.previewFileIconSettings[i.toLowerCase()] || null), a.previewFileExtSettings && e.each(a.previewFileExtSettings, function (e, t) {
        return a.previewFileIconSettings[e] && t(i) ? void (r = a.previewFileIconSettings[e]) : void 0;
      })), r;
    },
    _parseFilePreviewIcon: function _parseFilePreviewIcon(e, t) {
      var i = this,
          a = i._getPreviewIcon(t) || i.previewFileIcon,
          r = e;
      return r.indexOf("{previewFileIcon}") > -1 && (r = r.setTokens({
        previewFileIconClass: i.previewFileIconClass,
        previewFileIcon: a
      })), r;
    },
    _raise: function _raise(t, i) {
      var a = this,
          r = e.Event(t);
      if (void 0 !== i ? a.$element.trigger(r, i) : a.$element.trigger(r), r.isDefaultPrevented() || r.result === !1) return !1;

      switch (t) {
        case "filebatchuploadcomplete":
        case "filebatchuploadsuccess":
        case "fileuploaded":
        case "fileclear":
        case "filecleared":
        case "filereset":
        case "fileerror":
        case "filefoldererror":
        case "fileuploaderror":
        case "filebatchuploaderror":
        case "filedeleteerror":
        case "filecustomerror":
        case "filesuccessremove":
          break;

        default:
          a.ajaxAborted || (a.ajaxAborted = r.result);
      }

      return !0;
    },
    _listenFullScreen: function _listenFullScreen(e) {
      var t,
          i,
          a = this,
          r = a.$modal;
      r && r.length && (t = r && r.find(".btn-fullscreen"), i = r && r.find(".btn-borderless"), t.length && i.length && (t.removeClass("active").attr("aria-pressed", "false"), i.removeClass("active").attr("aria-pressed", "false"), e ? t.addClass("active").attr("aria-pressed", "true") : i.addClass("active").attr("aria-pressed", "true"), r.hasClass("file-zoom-fullscreen") ? a._maximizeZoomDialog() : e ? a._maximizeZoomDialog() : i.removeClass("active").attr("aria-pressed", "false")));
    },
    _listen: function _listen() {
      var i,
          a = this,
          r = a.$element,
          n = a.$form,
          o = a.$container;
      a._handler(r, "click", function (e) {
        r.hasClass("file-no-browse") && (r.data("zoneClicked") ? r.data("zoneClicked", !1) : e.preventDefault());
      }), a._handler(r, "change", e.proxy(a._change, a)), a.showBrowse && a._handler(a.$btnFile, "click", e.proxy(a._browse, a)), a._handler(o.find(".fileinput-remove:not([disabled])"), "click", e.proxy(a.clear, a)), a._handler(o.find(".fileinput-cancel"), "click", e.proxy(a.cancel, a)), a._handler(o.find(".fileinput-pause"), "click", e.proxy(a.pause, a)), a._initDragDrop(), a._handler(n, "reset", e.proxy(a.clear, a)), a.isAjaxUpload || a._handler(n, "submit", e.proxy(a._submitForm, a)), a._handler(a.$container.find(".fileinput-upload"), "click", e.proxy(a._uploadClick, a)), a._handler(e(window), "resize", function () {
        a._listenFullScreen(screen.width === window.innerWidth && screen.height === window.innerHeight);
      }), i = "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", a._handler(e(document), i, function () {
        a._listenFullScreen(t.checkFullScreen());
      }), a._autoFitContent(), a._initClickable(), a._refreshPreview();
    },
    _autoFitContent: function _autoFitContent() {
      var t,
          i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          a = this,
          r = 400 > i ? a.previewSettingsSmall || a.defaults.previewSettingsSmall : a.previewSettings || a.defaults.previewSettings;
      e.each(r, function (e, i) {
        t = ".file-preview-frame .file-preview-" + e, a.$preview.find(t + ".kv-preview-data," + t + " .kv-preview-data").css(i);
      });
    },
    _scanDroppedItems: function _scanDroppedItems(e, t, i) {
      i = i || "";

      var a,
          r,
          _n,
          o = this,
          l = function l(e) {
        o._log("Error scanning dropped files!"), o._log(e);
      };

      e.isFile ? e.file(function (e) {
        t.push(e);
      }, l) : e.isDirectory && (r = e.createReader(), (_n = function n() {
        r.readEntries(function (r) {
          if (r && r.length > 0) {
            for (a = 0; a < r.length; a++) {
              o._scanDroppedItems(r[a], t, i + e.name + "/");
            }

            _n();
          }

          return null;
        }, l);
      })());
    },
    _initDragDrop: function _initDragDrop() {
      var t = this,
          i = t.$dropZone;
      t.dropZoneEnabled && t.showPreview && (t._handler(i, "dragenter dragover", e.proxy(t._zoneDragEnter, t)), t._handler(i, "dragleave", e.proxy(t._zoneDragLeave, t)), t._handler(i, "drop", e.proxy(t._zoneDrop, t)), t._handler(e(document), "dragenter dragover drop", t._zoneDragDropInit));
    },
    _zoneDragDropInit: function _zoneDragDropInit(e) {
      e.stopPropagation(), e.preventDefault();
    },
    _zoneDragEnter: function _zoneDragEnter(i) {
      var a = this,
          r = i.originalEvent.dataTransfer,
          n = e.inArray("Files", r.types) > -1;
      return a._zoneDragDropInit(i), a.isDisabled || !n ? (i.originalEvent.dataTransfer.effectAllowed = "none", void (i.originalEvent.dataTransfer.dropEffect = "none")) : void (a._raise("fileDragEnter", {
        sourceEvent: i,
        files: r.types.Files
      }) && t.addCss(a.$dropZone, "file-highlighted"));
    },
    _zoneDragLeave: function _zoneDragLeave(e) {
      var t = this;
      t._zoneDragDropInit(e), t.isDisabled || t._raise("fileDragLeave", {
        sourceEvent: e
      }) && t.$dropZone.removeClass("file-highlighted");
    },
    _zoneDrop: function _zoneDrop(e) {
      var i,
          a = this,
          r = a.$element,
          n = e.originalEvent.dataTransfer,
          o = n.files,
          l = n.items,
          s = t.getDragDropFolders(l),
          d = function d() {
        a.isAjaxUpload ? a._change(e, o) : (a.changeTriggered = !0, r.get(0).files = o, setTimeout(function () {
          a.changeTriggered = !1, r.trigger("change" + a.namespace);
        }, a.processDelay)), a.$dropZone.removeClass("file-highlighted");
      };

      if (e.preventDefault(), !a.isDisabled && !t.isEmpty(o) && a._raise("fileDragDrop", {
        sourceEvent: e,
        files: o
      })) if (s > 0) {
        if (!a.isAjaxUpload) return void a._showFolderError(s);

        for (o = [], i = 0; i < l.length; i++) {
          var c = l[i].webkitGetAsEntry();
          c && a._scanDroppedItems(c, o);
        }

        setTimeout(function () {
          d();
        }, 500);
      } else d();
    },
    _uploadClick: function _uploadClick(e) {
      var i,
          a = this,
          r = a.$container.find(".fileinput-upload"),
          n = !r.hasClass("disabled") && t.isEmpty(r.attr("disabled"));

      if (!e || !e.isDefaultPrevented()) {
        if (!a.isAjaxUpload) return void (n && "submit" !== r.attr("type") && (i = r.closest("form"), i.length && i.trigger("submit"), e.preventDefault()));
        e.preventDefault(), n && a.upload();
      }
    },
    _submitForm: function _submitForm() {
      var e = this;
      return e._isFileSelectionValid() && !e._abort({});
    },
    _clearPreview: function _clearPreview() {
      var i = this,
          a = i.$preview,
          r = i.showUploadedThumbs ? i.getFrames(":not(.file-preview-success)") : i.getFrames();
      r.each(function () {
        var i = e(this);
        i.remove(), t.cleanZoomCache(a.find("#zoom-" + i.attr("id")));
      }), i.getFrames().length && i.showPreview || i._resetUpload(), i._validateDefaultPreview();
    },
    _initSortable: function _initSortable() {
      var i,
          a = this,
          r = a.$preview,
          n = "." + t.SORT_CSS,
          o = a.reversePreviewOrder;
      window.KvSortable && 0 !== r.find(n).length && (i = {
        handle: ".drag-handle-init",
        dataIdAttr: "data-preview-id",
        scroll: !1,
        draggable: n,
        onSort: function onSort(i) {
          var r = i.oldIndex,
              n = i.newIndex,
              l = 0;
          a.initialPreview = t.moveArray(a.initialPreview, r, n, o), a.initialPreviewConfig = t.moveArray(a.initialPreviewConfig, r, n, o), a.previewCache.init(), a.getFrames(".file-preview-initial").each(function () {
            e(this).attr("data-fileindex", "init_" + l), l++;
          }), a._raise("filesorted", {
            previewId: e(i.item).attr("id"),
            oldIndex: r,
            newIndex: n,
            stack: a.initialPreviewConfig
          });
        }
      }, r.data("kvsortable") && r.kvsortable("destroy"), e.extend(!0, i, a.fileActionSettings.dragSettings), r.kvsortable(i));
    },
    _setPreviewContent: function _setPreviewContent(e) {
      var t = this;
      t.$preview.html(e), t._autoFitContent();
    },
    _initPreviewImageOrientations: function _initPreviewImageOrientations() {
      var i = this,
          a = 0;
      i.autoOrientImageInitial && i.getFrames(".file-preview-initial").each(function () {
        var r,
            n,
            o,
            l = e(this),
            s = i.initialPreviewConfig[a];
        s && s.exif && s.exif.Orientation && (o = l.attr("id"), r = l.find(">.kv-file-content img"), n = i.$preview.find("#zoom-" + o + " >.kv-file-content img"), r && r.length && t.setImageOrientation(r, n, s.exif.Orientation)), a++;
      });
    },
    _initPreview: function _initPreview(e) {
      var i,
          a = this,
          r = a.initialCaption || "";
      return a.previewCache.count(!0) ? (i = a.previewCache.out(), r = e && a.initialCaption ? a.initialCaption : i.caption, a._setPreviewContent(i.content), a._setInitThumbAttr(), a._setCaption(r), a._initSortable(), t.isEmpty(i.content) || a.$container.removeClass("file-input-new"), void a._initPreviewImageOrientations()) : (a._clearPreview(), void (e ? a._setCaption(r) : a._initCaption()));
    },
    _getZoomButton: function _getZoomButton(e) {
      var t = this,
          i = t.previewZoomButtonIcons[e],
          a = t.previewZoomButtonClasses[e],
          r = ' title="' + (t.previewZoomButtonTitles[e] || "") + '" ',
          n = r + ("close" === e ? ' data-dismiss="modal" aria-hidden="true"' : "");
      return "fullscreen" !== e && "borderless" !== e && "toggleheader" !== e || (n += ' data-toggle="button" aria-pressed="false" autocomplete="off"'), '<button type="button" class="' + a + " btn-" + e + '"' + n + ">" + i + "</button>";
    },
    _getModalContent: function _getModalContent() {
      var e = this;
      return e._getLayoutTemplate("modal").setTokens({
        rtl: e.rtl ? " kv-rtl" : "",
        zoomFrameClass: e.frameClass,
        heading: e.msgZoomModalHeading,
        prev: e._getZoomButton("prev"),
        next: e._getZoomButton("next"),
        toggleheader: e._getZoomButton("toggleheader"),
        fullscreen: e._getZoomButton("fullscreen"),
        borderless: e._getZoomButton("borderless"),
        close: e._getZoomButton("close")
      });
    },
    _listenModalEvent: function _listenModalEvent(e) {
      var i = this,
          a = i.$modal,
          r = function r(e) {
        return {
          sourceEvent: e,
          previewId: a.data("previewId"),
          modal: a
        };
      };

      a.on(e + ".bs.modal", function (n) {
        var o = a.find(".btn-fullscreen"),
            l = a.find(".btn-borderless");
        i._raise("filezoom" + e, r(n)), "shown" === e && (l.removeClass("active").attr("aria-pressed", "false"), o.removeClass("active").attr("aria-pressed", "false"), a.hasClass("file-zoom-fullscreen") && (i._maximizeZoomDialog(), t.checkFullScreen() ? o.addClass("active").attr("aria-pressed", "true") : l.addClass("active").attr("aria-pressed", "true")));
      });
    },
    _initZoom: function _initZoom() {
      var i,
          a = this,
          r = a._getLayoutTemplate("modalMain"),
          n = "#" + t.MODAL_ID;

      a.showPreview && (a.$modal = e(n), a.$modal && a.$modal.length || (i = e(document.createElement("div")).html(r).insertAfter(a.$container), a.$modal = e(n).insertBefore(i), i.remove()), t.initModal(a.$modal), a.$modal.html(a._getModalContent()), e.each(t.MODAL_EVENTS, function (e, t) {
        a._listenModalEvent(t);
      }));
    },
    _initZoomButtons: function _initZoomButtons() {
      var t,
          i,
          a = this,
          r = a.$modal.data("previewId") || "",
          n = a.getFrames().toArray(),
          o = n.length,
          l = a.$modal.find(".btn-prev"),
          s = a.$modal.find(".btn-next");
      return n.length < 2 ? (l.hide(), void s.hide()) : (l.show(), s.show(), void (o && (t = e(n[0]), i = e(n[o - 1]), l.removeAttr("disabled"), s.removeAttr("disabled"), t.length && t.attr("id") === r && l.attr("disabled", !0), i.length && i.attr("id") === r && s.attr("disabled", !0))));
    },
    _maximizeZoomDialog: function _maximizeZoomDialog() {
      var t = this,
          i = t.$modal,
          a = i.find(".modal-header:visible"),
          r = i.find(".modal-footer:visible"),
          n = i.find(".modal-body"),
          o = e(window).height(),
          l = 0;
      i.addClass("file-zoom-fullscreen"), a && a.length && (o -= a.outerHeight(!0)), r && r.length && (o -= r.outerHeight(!0)), n && n.length && (l = n.outerHeight(!0) - n.height(), o -= l), i.find(".kv-zoom-body").height(o);
    },
    _resizeZoomDialog: function _resizeZoomDialog(e) {
      var i = this,
          a = i.$modal,
          r = a.find(".btn-fullscreen"),
          n = a.find(".btn-borderless");
      if (a.hasClass("file-zoom-fullscreen")) t.toggleFullScreen(!1), e ? r.hasClass("active") || (a.removeClass("file-zoom-fullscreen"), i._resizeZoomDialog(!0), n.hasClass("active") && n.removeClass("active").attr("aria-pressed", "false")) : r.hasClass("active") ? r.removeClass("active").attr("aria-pressed", "false") : (a.removeClass("file-zoom-fullscreen"), i.$modal.find(".kv-zoom-body").css("height", i.zoomModalHeight));else {
        if (!e) return void i._maximizeZoomDialog();
        t.toggleFullScreen(!0);
      }
      a.focus();
    },
    _setZoomContent: function _setZoomContent(i, a) {
      var r,
          n,
          o,
          l,
          s,
          d,
          c,
          u,
          p,
          f,
          g = this,
          m = i.attr("id"),
          v = g.$preview.find("#zoom-" + m),
          h = g.$modal,
          w = h.find(".btn-fullscreen"),
          b = h.find(".btn-borderless"),
          _ = h.find(".btn-toggleheader");

      n = v.attr("data-template") || "generic", r = v.find(".kv-file-content"), o = r.length ? r.html() : "", p = i.data("caption") || "", f = i.data("size") || "", l = p + " " + f, h.find(".kv-zoom-title").attr("title", e("<div/>").html(l).text()).html(l), s = h.find(".kv-zoom-body"), h.removeClass("kv-single-content"), a ? (u = s.addClass("file-thumb-loading").clone().insertAfter(s), s.html(o).hide(), u.fadeOut("fast", function () {
        s.fadeIn("fast", function () {
          s.removeClass("file-thumb-loading");
        }), u.remove();
      })) : s.html(o), c = g.previewZoomSettings[n], c && (d = s.find(".kv-preview-data"), t.addCss(d, "file-zoom-detail"), e.each(c, function (e, t) {
        d.css(e, t), (d.attr("width") && "width" === e || d.attr("height") && "height" === e) && d.removeAttr(e);
      })), h.data("previewId", m), g._handler(h.find(".btn-prev"), "click", function () {
        g._zoomSlideShow("prev", m);
      }), g._handler(h.find(".btn-next"), "click", function () {
        g._zoomSlideShow("next", m);
      }), g._handler(w, "click", function () {
        g._resizeZoomDialog(!0);
      }), g._handler(b, "click", function () {
        g._resizeZoomDialog(!1);
      }), g._handler(_, "click", function () {
        var e,
            t = h.find(".modal-header"),
            i = h.find(".modal-body .floating-buttons"),
            a = t.find(".kv-zoom-actions"),
            r = function r(e) {
          var i = g.$modal.find(".kv-zoom-body"),
              a = g.zoomModalHeight;
          h.hasClass("file-zoom-fullscreen") && (a = i.outerHeight(!0), e || (a -= t.outerHeight(!0))), i.css("height", e ? a + e : a);
        };

        t.is(":visible") ? (e = t.outerHeight(!0), t.slideUp("slow", function () {
          a.find(".btn").appendTo(i), r(e);
        })) : (i.find(".btn").appendTo(a), t.slideDown("slow", function () {
          r();
        })), h.focus();
      }), g._handler(h, "keydown", function (t) {
        var i = t.which || t.keyCode,
            a = e(this).find(".btn-prev"),
            r = e(this).find(".btn-next"),
            n = e(this).data("previewId"),
            o = g.rtl ? 39 : 37,
            l = g.rtl ? 37 : 39;
        i === o && a.length && !a.attr("disabled") && g._zoomSlideShow("prev", n), i === l && r.length && !r.attr("disabled") && g._zoomSlideShow("next", n);
      });
    },
    _zoomPreview: function _zoomPreview(e) {
      var i,
          a = this,
          r = a.$modal;
      if (!e.length) throw "Cannot zoom to detailed preview!";
      t.initModal(r), r.html(a._getModalContent()), i = e.closest(t.FRAMES), a._setZoomContent(i), r.modal("show"), a._initZoomButtons();
    },
    _zoomSlideShow: function _zoomSlideShow(t, i) {
      var a,
          r,
          n,
          o = this,
          l = o.$modal.find(".kv-zoom-actions .btn-" + t),
          s = o.getFrames().toArray(),
          d = s.length;

      if (!l.attr("disabled")) {
        for (r = 0; d > r; r++) {
          if (e(s[r]).attr("id") === i) {
            n = "prev" === t ? r - 1 : r + 1;
            break;
          }
        }

        0 > n || n >= d || !s[n] || (a = e(s[n]), a.length && o._setZoomContent(a, !0), o._initZoomButtons(), o._raise("filezoom" + t, {
          previewId: i,
          modal: o.$modal
        }));
      }
    },
    _initZoomButton: function _initZoomButton() {
      var t = this;
      t.$preview.find(".kv-file-zoom").each(function () {
        var i = e(this);

        t._handler(i, "click", function () {
          t._zoomPreview(i);
        });
      });
    },
    _inputFileCount: function _inputFileCount() {
      return this.$element.get(0).files.length;
    },
    _refreshPreview: function _refreshPreview() {
      var e,
          t = this;
      (t._inputFileCount() || t.isAjaxUpload) && t.showPreview && t.isPreviewable && (t.isAjaxUpload && t.fileManager.count() > 0 ? (e = t.fileManager.stack, t.fileManager.clear(), t._clearFileInput()) : e = t.$element.get(0).files, e && e.length && (t.readFiles(e), t._setFileDropZoneTitle()));
    },
    _clearObjects: function _clearObjects(t) {
      t.find("video audio").each(function () {
        this.pause(), e(this).remove();
      }), t.find("img object div").each(function () {
        e(this).remove();
      });
    },
    _clearFileInput: function _clearFileInput() {
      var t,
          i,
          a,
          r = this,
          n = r.$element;
      r._inputFileCount() && (t = n.closest("form"), i = e(document.createElement("form")), a = e(document.createElement("div")), n.before(a), t.length ? t.after(i) : a.after(i), i.append(n).trigger("reset"), a.before(n).remove(), i.remove());
    },
    _resetUpload: function _resetUpload() {
      var e = this;
      e.uploadCache = {
        content: [],
        config: [],
        tags: [],
        append: !0
      }, e.$btnUpload.removeAttr("disabled"), e._setProgress(0), e.$progress.hide(), e._resetErrors(!1), e._initAjax(), e.fileManager.clearImages(), e._resetCanvas(), e.cacheInitialPreview = {}, e.overwriteInitial && (e.initialPreview = [], e.initialPreviewConfig = [], e.initialPreviewThumbTags = [], e.previewCache.data = {
        content: [],
        config: [],
        tags: []
      });
    },
    _resetCanvas: function _resetCanvas() {
      var e = this;
      e.canvas && e.imageCanvasContext && e.imageCanvasContext.clearRect(0, 0, e.canvas.width, e.canvas.height);
    },
    _hasInitialPreview: function _hasInitialPreview() {
      var e = this;
      return !e.overwriteInitial && e.previewCache.count(!0);
    },
    _resetPreview: function _resetPreview() {
      var e,
          t,
          i = this;
      i.previewCache.count(!0) ? (e = i.previewCache.out(), i._setPreviewContent(e.content), i._setInitThumbAttr(), t = i.initialCaption ? i.initialCaption : e.caption, i._setCaption(t)) : (i._clearPreview(), i._initCaption()), i.showPreview && (i._initZoom(), i._initSortable());
    },
    _clearDefaultPreview: function _clearDefaultPreview() {
      var e = this;
      e.$preview.find(".file-default-preview").remove();
    },
    _validateDefaultPreview: function _validateDefaultPreview() {
      var e = this;
      e.showPreview && !t.isEmpty(e.defaultPreviewContent) && (e._setPreviewContent('<div class="file-default-preview">' + e.defaultPreviewContent + "</div>"), e.$container.removeClass("file-input-new"), e._initClickable());
    },
    _resetPreviewThumbs: function _resetPreviewThumbs(e) {
      var t,
          i = this;
      return e ? (i._clearPreview(), void i.clearFileStack()) : void (i._hasInitialPreview() ? (t = i.previewCache.out(), i._setPreviewContent(t.content), i._setInitThumbAttr(), i._setCaption(t.caption), i._initPreviewActions()) : i._clearPreview());
    },
    _getLayoutTemplate: function _getLayoutTemplate(e) {
      var i = this,
          a = i.layoutTemplates[e];
      return t.isEmpty(i.customLayoutTags) ? a : t.replaceTags(a, i.customLayoutTags);
    },
    _getPreviewTemplate: function _getPreviewTemplate(e) {
      var i = this,
          a = i.previewTemplates[e];
      return t.isEmpty(i.customPreviewTags) ? a : t.replaceTags(a, i.customPreviewTags);
    },
    _getOutData: function _getOutData(e, t, i, a) {
      var r = this;
      return t = t || {}, i = i || {}, a = a || r.fileManager.list(), {
        formdata: e,
        files: a,
        filenames: r.filenames,
        filescount: r.getFilesCount(),
        extra: r._getExtraData(),
        response: i,
        reader: r.reader,
        jqXHR: t
      };
    },
    _getMsgSelected: function _getMsgSelected(e) {
      var t = this,
          i = 1 === e ? t.fileSingle : t.filePlural;
      return e > 0 ? t.msgSelected.replace("{n}", e).replace("{files}", i) : t.msgNoFilesSelected;
    },
    _getFrame: function _getFrame(t) {
      var i = this,
          a = e("#" + t);
      return a.length ? a : (i._log('Invalid thumb frame with id: "' + t + '".'), null);
    },
    _getThumbs: function _getThumbs(e) {
      return e = e || "", this.getFrames(":not(.file-preview-initial)" + e);
    },
    _getExtraData: function _getExtraData(e, t) {
      var i = this,
          a = i.uploadExtraData;
      return "function" == typeof i.uploadExtraData && (a = i.uploadExtraData(e, t)), a;
    },
    _initXhr: function _initXhr(e, i, a) {
      var r = this,
          n = r.fileManager,
          o = function o(e) {
        var o = 0,
            l = e.total,
            s = e.loaded || e.position,
            d = n.getUploadStats(i, s, l);
        e.lengthComputable && !r.enableResumableUpload && (o = t.round(s / l * 100)), i ? r._setFileUploadStats(i, o, a, d) : r._setProgress(o, null, null, r._getStats(d)), r._raise("fileajaxprogress", [d]);
      };

      return e.upload && (r.progressDelay && (o = t.debounce(o, r.progressDelay)), e.upload.addEventListener("progress", o, !1)), e;
    },
    _initAjaxSettings: function _initAjaxSettings() {
      var t = this;
      t._ajaxSettings = e.extend(!0, {}, t.ajaxSettings), t._ajaxDeleteSettings = e.extend(!0, {}, t.ajaxDeleteSettings);
    },
    _mergeAjaxCallback: function _mergeAjaxCallback(e, t, i) {
      var a,
          r = this,
          n = r._ajaxSettings,
          o = r.mergeAjaxCallbacks;
      "delete" === i && (n = r._ajaxDeleteSettings, o = r.mergeAjaxDeleteCallbacks), a = n[e], o && "function" == typeof a ? "before" === o ? n[e] = function () {
        a.apply(this, arguments), t.apply(this, arguments);
      } : n[e] = function () {
        t.apply(this, arguments), a.apply(this, arguments);
      } : n[e] = t;
    },
    _ajaxSubmit: function _ajaxSubmit(t, i, a, r, n, o, l, s) {
      var d,
          c,
          u,
          p,
          f = this;
      f._raise("filepreajax", [n, o, l]) && (n.append("initialPreview", JSON.stringify(f.initialPreview)), n.append("initialPreviewConfig", JSON.stringify(f.initialPreviewConfig)), n.append("initialPreviewThumbTags", JSON.stringify(f.initialPreviewThumbTags)), f._initAjaxSettings(), f._mergeAjaxCallback("beforeSend", t), f._mergeAjaxCallback("success", i), f._mergeAjaxCallback("complete", a), f._mergeAjaxCallback("error", r), s = s || f.uploadUrlThumb || f.uploadUrl, "function" == typeof s && (s = s()), u = f._getExtraData(o, l) || {}, "object" == _typeof(u) && e.each(u, function (e, t) {
        n.append(e, t);
      }), c = {
        xhr: function xhr() {
          var t = e.ajaxSettings.xhr();
          return f._initXhr(t, o, f.fileManager.count());
        },
        url: f._encodeURI(s),
        type: "POST",
        dataType: "json",
        data: n,
        cache: !1,
        processData: !1,
        contentType: !1
      }, d = e.extend(!0, {}, c, f._ajaxSettings), f.ajaxQueue.push(d), p = function p() {
        var t, i;
        f.ajaxCurrentThreads < f.maxAjaxThreads && (t = f.ajaxQueue.shift(), "undefined" != typeof t && (f.ajaxCurrentThreads++, i = e.ajax(t).done(function () {
          clearInterval(f.ajaxQueueIntervalId), f.ajaxCurrentThreads--;
        }), f.ajaxRequests.push(i)));
      }, f.ajaxQueueIntervalId = setInterval(p, f.queueDelay));
    },
    _mergeArray: function _mergeArray(e, i) {
      var a = this,
          r = t.cleanArray(a[e]),
          n = t.cleanArray(i);
      a[e] = r.concat(n);
    },
    _initUploadSuccess: function _initUploadSuccess(i, a, r) {
      var n,
          o,
          l,
          s,
          d,
          c,
          u,
          p,
          f,
          g = this;
      g.showPreview && "object" == _typeof(i) && !e.isEmptyObject(i) && void 0 !== i.initialPreview && i.initialPreview.length > 0 && (g.hasInitData = !0, c = i.initialPreview || [], u = i.initialPreviewConfig || [], p = i.initialPreviewThumbTags || [], n = void 0 === i.append || i.append, c.length > 0 && !t.isArray(c) && (c = c.split(g.initialPreviewDelimiter)), c.length && (g._mergeArray("initialPreview", c), g._mergeArray("initialPreviewConfig", u), g._mergeArray("initialPreviewThumbTags", p)), void 0 !== a ? r ? (f = a.attr("data-fileindex"), g.uploadCache.content[f] = c[0], g.uploadCache.config[f] = u[0] || [], g.uploadCache.tags[f] = p[0] || [], g.uploadCache.append = n) : (l = g.previewCache.add(c[0], u[0], p[0], n), o = g.previewCache.get(l, !1), s = e(document.createElement("div")).html(o).hide().insertAfter(a), d = s.find(".kv-zoom-cache"), d && d.length && d.insertAfter(a), a.fadeOut("slow", function () {
        var e = s.find(".file-preview-frame");
        e && e.length && e.insertBefore(a).fadeIn("slow").css("display:inline-block"), g._initPreviewActions(), g._clearFileInput(), t.cleanZoomCache(g.$preview.find("#zoom-" + a.attr("id"))), g._initSortable();
      })) : (g.previewCache.set(c, u, p, n), g._initPreview(), g._initPreviewActions()));
    },
    _initSuccessThumbs: function _initSuccessThumbs() {
      var i = this;
      i.showPreview && i._getThumbs(t.FRAMES + ".file-preview-success").each(function () {
        var a = e(this),
            r = i.$preview,
            n = a.find(".kv-file-remove");
        n.removeAttr("disabled"), i._handler(n, "click", function () {
          var e = a.attr("id"),
              n = i._raise("filesuccessremove", [e, a.attr("data-fileindex")]);

          t.cleanMemory(a), n !== !1 && a.fadeOut("slow", function () {
            t.cleanZoomCache(r.find("#zoom-" + e)), a.remove(), i.getFrames().length || i.reset();
          });
        });
      });
    },
    _updateInitialPreview: function _updateInitialPreview() {
      var e,
          i,
          a = this,
          r = a.uploadCache,
          n = 0,
          o = a.cacheInitialPreview;

      if (o && o.content && (n = o.content.length), a.showPreview) {
        if (a.previewCache.set(r.content, r.config, r.tags, r.append), n) {
          for (e = 0; e < r.content.length; e++) {
            i = e + n, o.content[i] = r.content[e], o.config.length && (o.config[i] = r.config[e]), o.tags.length && (o.tags[i] = r.tags[e]);
          }

          a.initialPreview = t.cleanArray(o.content), a.initialPreviewConfig = t.cleanArray(o.config), a.initialPreviewThumbTags = t.cleanArray(o.tags);
        } else a.initialPreview = r.content, a.initialPreviewConfig = r.config, a.initialPreviewThumbTags = r.tags;

        a.cacheInitialPreview = {}, a.hasInitData && (a._initPreview(), a._initPreviewActions());
      }
    },
    _uploadSingle: function _uploadSingle(i, a, r) {
      var n,
          o,
          l,
          s,
          d,
          c,
          u,
          p,
          f,
          g,
          m,
          v,
          h = this,
          w = h.fileManager,
          b = w.count(),
          _ = new FormData(),
          C = h.previewInitId + "-" + i,
          y = b > 0 || !e.isEmptyObject(h.uploadExtraData),
          x = w.getFile(a),
          T = h.resumableManager,
          I = {
        id: C,
        index: i,
        fileId: a
      },
          P = h.fileManager.getFileName(a, !0);

      return h.enableResumableUpload ? (h.paused = !1, h.cancelling = !1, w.initStats(a), void T.uploadSingle(a)) : (h.showPreview && (o = h.fileManager.getThumb(a), u = o.find(".file-thumb-progress"), s = o.find(".kv-file-upload"), d = o.find(".kv-file-remove"), u.show()), void (0 === b || !y || h.showPreview && s && s.hasClass("disabled") || h._abort(I) || (v = function v() {
        c || h.fileManager.removeFile(a), h.fileManager.setProcessed(a), h.fileManager.isProcessed() && (h.fileBatchCompleted = !0);
      }, l = function l() {
        var e;
        h.fileBatchCompleted && setTimeout(function () {
          var i = 0 === h.fileManager.count();
          h._updateInitialPreview(), h.unlock(i), i && h._clearFileInput(), e = h.$preview.find(".file-preview-initial"), h.uploadAsync && e.length && (t.addCss(e, t.SORT_CSS), h._initSortable()), h._raise("filebatchuploadcomplete", [h.fileManager.stack, h._getExtraData()]), h.fileManager.clear(), h._setProgress(101), h.ajaxAborted = !1;
        }, h.processDelay);
      }, p = function p(l) {
        n = h._getOutData(_, l), w.initStats(a), h.fileBatchCompleted = !1, r || (h.ajaxAborted = !1), h.showPreview && (o.hasClass("file-preview-success") || (h._setThumbStatus(o, "Loading"), t.addCss(o, "file-uploading")), s.attr("disabled", !0), d.attr("disabled", !0)), r || h.lock(), h._raise("filepreupload", [n, C, i]), e.extend(!0, I, n), h._abort(I) && (l.abort(), r || (h._setThumbStatus(o, "New"), o.removeClass("file-uploading"), s.removeAttr("disabled"), d.removeAttr("disabled"), h.unlock()), h._setProgressCancelled());
      }, f = function f(a, l, d) {
        var p = h.showPreview && o.attr("id") ? o.attr("id") : C;
        n = h._getOutData(_, d, a), e.extend(!0, I, n), setTimeout(function () {
          t.isEmpty(a) || t.isEmpty(a.error) ? (h.showPreview && (h._setThumbStatus(o, "Success"), s.hide(), h._initUploadSuccess(a, o, r), h._setProgress(101, u)), h._raise("fileuploaded", [n, p, i]), r ? v() : h.fileManager.remove(o)) : (c = !0, h._showUploadError(a.error, I), h._setPreviewError(o, !0), h.retryErrorUploads || s.hide(), r && v(), h._setProgress(101, e("#" + p).find(".file-thumb-progress"), h.msgUploadError));
        }, h.processDelay);
      }, g = function g() {
        setTimeout(function () {
          h.showPreview && (s.removeAttr("disabled"), d.removeAttr("disabled"), o.removeClass("file-uploading")), r ? l() : (h.unlock(!1), h._clearFileInput()), h._initSuccessThumbs();
        }, h.processDelay);
      }, m = function m(t, i, n) {
        var l = h.ajaxOperations.uploadThumb,
            d = h._parseError(l, t, n, h.fileManager.getFileName(a));

        c = !0, setTimeout(function () {
          r && v(), h.fileManager.setProgress(a, 100), h._setPreviewError(o, !0), h.retryErrorUploads || s.hide(), e.extend(!0, I, h._getOutData(_, t)), h._setProgress(101, u, h.msgAjaxProgressError.replace("{operation}", l)), h._setProgress(101, o.find(".file-thumb-progress"), h.msgUploadError), h._showUploadError(d, I);
        }, h.processDelay);
      }, _.append(h.uploadFileAttr, x.file, P), h._setUploadData(_, {
        fileId: a
      }), h._ajaxSubmit(p, f, g, m, _, a, i))));
    },
    _uploadBatch: function _uploadBatch() {
      var i,
          a,
          r,
          n,
          o,
          l = this,
          s = l.fileManager,
          d = s.total(),
          c = {},
          u = d > 0 || !e.isEmptyObject(l.uploadExtraData),
          p = new FormData();

      if (0 !== d && u && !l._abort(c)) {
        o = function o() {
          l.fileManager.clear(), l._clearFileInput();
        }, i = function i(_i2) {
          l.lock(), s.initStats();

          var a = l._getOutData(p, _i2);

          l.ajaxAborted = !1, l.showPreview && l._getThumbs().each(function () {
            var i = e(this),
                a = i.find(".kv-file-upload"),
                r = i.find(".kv-file-remove");
            i.hasClass("file-preview-success") || (l._setThumbStatus(i, "Loading"), t.addCss(i, "file-uploading")), a.attr("disabled", !0), r.attr("disabled", !0);
          }), l._raise("filebatchpreupload", [a]), l._abort(a) && (_i2.abort(), l._getThumbs().each(function () {
            var t = e(this),
                i = t.find(".kv-file-upload"),
                a = t.find(".kv-file-remove");
            t.hasClass("file-preview-loading") && (l._setThumbStatus(t, "New"), t.removeClass("file-uploading")), i.removeAttr("disabled"), a.removeAttr("disabled");
          }), l._setProgressCancelled());
        }, a = function a(i, _a, r) {
          var n = l._getOutData(p, r, i),
              s = 0,
              d = l._getThumbs(":not(.file-preview-success)"),
              c = t.isEmpty(i) || t.isEmpty(i.errorkeys) ? [] : i.errorkeys;

          t.isEmpty(i) || t.isEmpty(i.error) ? (l._raise("filebatchuploadsuccess", [n]), o(), l.showPreview ? (d.each(function () {
            var t = e(this);
            l._setThumbStatus(t, "Success"), t.removeClass("file-uploading"), t.find(".kv-file-upload").hide().removeAttr("disabled");
          }), l._initUploadSuccess(i)) : l.reset(), l._setProgress(101)) : (l.showPreview && (d.each(function () {
            var t = e(this);
            t.removeClass("file-uploading"), t.find(".kv-file-upload").removeAttr("disabled"), t.find(".kv-file-remove").removeAttr("disabled"), 0 === c.length || -1 !== e.inArray(s, c) ? (l._setPreviewError(t, !0), l.retryErrorUploads || (t.find(".kv-file-upload").hide(), l.fileManager.remove(t))) : (t.find(".kv-file-upload").hide(), l._setThumbStatus(t, "Success"), l.fileManager.remove(t)), t.hasClass("file-preview-error") && !l.retryErrorUploads || s++;
          }), l._initUploadSuccess(i)), l._showUploadError(i.error, n, "filebatchuploaderror"), l._setProgress(101, l.$progress, l.msgUploadError));
        }, n = function n() {
          l.unlock(), l._initSuccessThumbs(), l._clearFileInput(), l._raise("filebatchuploadcomplete", [l.fileManager.stack, l._getExtraData()]);
        }, r = function r(t, i, a) {
          var r = l._getOutData(p, t),
              n = l.ajaxOperations.uploadBatch,
              o = l._parseError(n, t, a);

          l._showUploadError(o, r, "filebatchuploaderror"), l.uploadFileCount = d - 1, l.showPreview && (l._getThumbs().each(function () {
            var t = e(this);
            t.removeClass("file-uploading"), l.fileManager.getFile(t.attr("data-fileid")) && l._setPreviewError(t);
          }), l._getThumbs().removeClass("file-uploading"), l._getThumbs(" .kv-file-upload").removeAttr("disabled"), l._getThumbs(" .kv-file-delete").removeAttr("disabled"), l._setProgress(101, l.$progress, l.msgAjaxProgressError.replace("{operation}", n)));
        };
        var f = 0;
        e.each(l.fileManager.stack, function (e, i) {
          t.isEmpty(i.file) || p.append(l.uploadFileAttr, i.file, i.nameFmt || "untitled_" + f), f++;
        }), l._ajaxSubmit(i, a, n, r, p);
      }
    },
    _uploadExtraOnly: function _uploadExtraOnly() {
      var e,
          i,
          a,
          r,
          n = this,
          o = {},
          l = new FormData();
      n._abort(o) || (e = function e(_e) {
        n.lock();

        var t = n._getOutData(l, _e);

        n._raise("filebatchpreupload", [t]), n._setProgress(50), o.data = t, o.xhr = _e, n._abort(o) && (_e.abort(), n._setProgressCancelled());
      }, i = function i(e, _i3, a) {
        var r = n._getOutData(l, a, e);

        t.isEmpty(e) || t.isEmpty(e.error) ? (n._raise("filebatchuploadsuccess", [r]), n._clearFileInput(), n._initUploadSuccess(e), n._setProgress(101)) : n._showUploadError(e.error, r, "filebatchuploaderror");
      }, a = function a() {
        n.unlock(), n._clearFileInput(), n._raise("filebatchuploadcomplete", [n.fileManager.stack, n._getExtraData()]);
      }, r = function r(e, t, i) {
        var a = n._getOutData(l, e),
            r = n.ajaxOperations.uploadExtra,
            s = n._parseError(r, e, i);

        o.data = a, n._showUploadError(s, a, "filebatchuploaderror"), n._setProgress(101, n.$progress, n.msgAjaxProgressError.replace("{operation}", r));
      }, n._ajaxSubmit(e, i, a, r, l));
    },
    _deleteFileIndex: function _deleteFileIndex(i) {
      var a = this,
          r = i.attr("data-fileindex"),
          n = a.reversePreviewOrder;
      "init_" === r.substring(0, 5) && (r = parseInt(r.replace("init_", "")), a.initialPreview = t.spliceArray(a.initialPreview, r, n), a.initialPreviewConfig = t.spliceArray(a.initialPreviewConfig, r, n), a.initialPreviewThumbTags = t.spliceArray(a.initialPreviewThumbTags, r, n), a.getFrames().each(function () {
        var t = e(this),
            i = t.attr("data-fileindex");
        "init_" === i.substring(0, 5) && (i = parseInt(i.replace("init_", "")), i > r && (i--, t.attr("data-fileindex", "init_" + i)));
      }), (a.uploadAsync || a.enableResumableUpload) && (a.cacheInitialPreview = a.getPreview()));
    },
    _initFileActions: function _initFileActions() {
      var i = this,
          a = i.$preview;
      i.showPreview && (i._initZoomButton(), i.getFrames(" .kv-file-remove").each(function () {
        var r,
            n,
            o,
            l,
            s = e(this),
            d = s.closest(t.FRAMES),
            c = d.attr("id"),
            u = d.attr("data-fileindex");

        i._handler(s, "click", function () {
          return l = i._raise("filepreremove", [c, u]), l !== !1 && i._validateMinCount() ? (r = d.hasClass("file-preview-error"), t.cleanMemory(d), void d.fadeOut("slow", function () {
            t.cleanZoomCache(a.find("#zoom-" + c)), i.fileManager.remove(d), i._clearObjects(d), d.remove(), c && r && i.$errorContainer.find('li[data-thumb-id="' + c + '"]').fadeOut("fast", function () {
              e(this).remove(), i._errorsExist() || i._resetErrors();
            }), i._clearFileInput();
            var l,
                s = i.previewCache.count(!0),
                p = i.fileManager.count(),
                f = i.showPreview && i.getFrames().length;
            0 !== p || 0 !== s || f ? (n = s + p, n > 1 ? o = i._getMsgSelected(n) : (l = i.fileManager.getFirstFile(), o = l ? l.nameFmt : "_"), i._setCaption(o)) : i.reset(), i._raise("fileremoved", [c, u]);
          })) : !1;
        });
      }), i.getFrames(" .kv-file-upload").each(function () {
        var a = e(this);

        i._handler(a, "click", function () {
          var e = a.closest(t.FRAMES),
              r = e.attr("data-fileid");
          i.$progress.hide(), e.hasClass("file-preview-error") && !i.retryErrorUploads || i._uploadSingle(i.fileManager.getIndex(r), r, !1);
        });
      }));
    },
    _initPreviewActions: function _initPreviewActions() {
      var i = this,
          a = i.$preview,
          r = i.deleteExtraData || {},
          n = t.FRAMES + " .kv-file-remove",
          o = i.fileActionSettings,
          l = o.removeClass,
          s = o.removeErrorClass,
          d = function d() {
        var e = i.isAjaxUpload ? i.previewCache.count(!0) : i._inputFileCount();
        i.getFrames().length || e || (i._setCaption(""), i.reset(), i.initialCaption = "");
      };

      i._initZoomButton(), a.find(n).each(function () {
        var n,
            o,
            c,
            u = e(this),
            p = u.data("url") || i.deleteUrl,
            f = u.data("key");

        if (!t.isEmpty(p) && void 0 !== f) {
          "function" == typeof p && (p = p());

          var g,
              m,
              v,
              h,
              w = u.closest(t.FRAMES),
              b = i.previewCache.data,
              _ = w.attr("data-fileindex");

          _ = parseInt(_.replace("init_", "")), v = t.isEmpty(b.config) && t.isEmpty(b.config[_]) ? null : b.config[_], h = t.isEmpty(v) || t.isEmpty(v.extra) ? r : v.extra, "function" == typeof h && (h = h()), m = {
            id: u.attr("id"),
            key: f,
            extra: h
          }, n = function n(e) {
            i.ajaxAborted = !1, i._raise("filepredelete", [f, e, h]), i._abort() ? e.abort() : (u.removeClass(s), t.addCss(w, "file-uploading"), t.addCss(u, "disabled " + l));
          }, o = function o(e, r, n) {
            var o, c;
            return t.isEmpty(e) || t.isEmpty(e.error) ? (w.removeClass("file-uploading").addClass("file-deleted"), void w.fadeOut("slow", function () {
              _ = parseInt(w.attr("data-fileindex").replace("init_", "")), i.previewCache.unset(_), i._deleteFileIndex(w), o = i.previewCache.count(!0), c = o > 0 ? i._getMsgSelected(o) : "", i._setCaption(c), i._raise("filedeleted", [f, n, h]), t.cleanZoomCache(a.find("#zoom-" + w.attr("id"))), i._clearObjects(w), w.remove(), d();
            })) : (m.jqXHR = n, m.response = e, i._showError(e.error, m, "filedeleteerror"), w.removeClass("file-uploading"), u.removeClass("disabled " + l).addClass(s), void d());
          }, c = function c(e, t, a) {
            var r = i.ajaxOperations.deleteThumb,
                n = i._parseError(r, e, a);

            m.jqXHR = e, m.response = {}, i._showError(n, m, "filedeleteerror"), w.removeClass("file-uploading"), u.removeClass("disabled " + l).addClass(s), d();
          }, i._initAjaxSettings(), i._mergeAjaxCallback("beforeSend", n, "delete"), i._mergeAjaxCallback("success", o, "delete"), i._mergeAjaxCallback("error", c, "delete"), g = e.extend(!0, {}, {
            url: i._encodeURI(p),
            type: "POST",
            dataType: "json",
            data: e.extend(!0, {}, {
              key: f
            }, h)
          }, i._ajaxDeleteSettings), i._handler(u, "click", function () {
            return i._validateMinCount() ? (i.ajaxAborted = !1, i._raise("filebeforedelete", [f, h]), void (i.ajaxAborted instanceof Promise ? i.ajaxAborted.then(function (t) {
              t || e.ajax(g);
            }) : i.ajaxAborted || e.ajax(g))) : !1;
          });
        }
      });
    },
    _hideFileIcon: function _hideFileIcon() {
      var e = this;
      e.overwriteInitial && e.$captionContainer.removeClass("icon-visible");
    },
    _showFileIcon: function _showFileIcon() {
      var e = this;
      t.addCss(e.$captionContainer, "icon-visible");
    },
    _getSize: function _getSize(t, i) {
      var a,
          r,
          n = this,
          o = parseFloat(t),
          l = n.fileSizeGetter;
      return e.isNumeric(t) && e.isNumeric(o) ? ("function" == typeof l ? r = l(o) : 0 === o ? r = "0.00 B" : (a = Math.floor(Math.log(o) / Math.log(1024)), i || (i = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]), r = 1 * (o / Math.pow(1024, a)).toFixed(2) + " " + i[a]), n._getLayoutTemplate("size").replace("{sizeText}", r)) : "";
    },
    _getFileType: function _getFileType(e) {
      var t = this;
      return t.mimeTypeAliases[e] || e;
    },
    _generatePreviewTemplate: function _generatePreviewTemplate(i, a, r, n, o, l, s, d, c, u, p, f, g, m) {
      var v,
          h,
          w,
          b = this,
          _ = b.slug(r),
          C = "",
          y = "",
          x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          T = b.preferIconicPreview ? "other" : i,
          I = _,
          P = _,
          k = u || b._renderFileFooter(i, _, d, "auto", s),
          S = b._getPreviewIcon(r),
          E = "type-default",
          F = S && b.preferIconicPreview,
          A = S && b.preferIconicZoomPreview;

      return h = 400 > x ? b.previewSettingsSmall[T] || b.defaults.previewSettingsSmall[T] : b.previewSettings[T] || b.defaults.previewSettings[T], h && e.each(h, function (e, t) {
        y += e + ":" + t + ";";
      }), w = function w(a, s, d, u) {
        var m = d ? "zoom-" + o : o,
            v = b._getPreviewTemplate(a),
            h = (c || "") + " " + u;

        return b.frameClass && (h = b.frameClass + " " + h), d && (h = h.replace(" " + t.SORT_CSS, "")), v = b._parseFilePreviewIcon(v, r), "text" === a && (s = t.htmlEncode(s)), "object" !== i || n || e.each(b.defaults.fileTypeSettings, function (e, t) {
          "object" !== e && "other" !== e && t(r, n) && (E = "type-" + e);
        }), t.isEmpty(g) || (void 0 !== g.title && null !== g.title && (I = g.title), void 0 !== g.alt && null !== g.alt && (I = g.alt)), v.setTokens({
          previewId: m,
          caption: _,
          title: I,
          alt: P,
          frameClass: h,
          type: b._getFileType(n),
          fileindex: p,
          fileid: l || "",
          typeCss: E,
          footer: k,
          data: s,
          template: f || i,
          style: y ? 'style="' + y + '"' : ""
        });
      }, p = p || o.slice(o.lastIndexOf("-") + 1), b.fileActionSettings.showZoom && (C = w(A ? "other" : i, m ? m : a, !0, "kv-zoom-thumb")), C = "\n" + b._getLayoutTemplate("zoomCache").replace("{zoomContent}", C), "function" == typeof b.sanitizeZoomCache && (C = b.sanitizeZoomCache(C)), v = w(F ? "other" : i, a, !1, "kv-preview-thumb"), v + C;
    },
    _addToPreview: function _addToPreview(e, t) {
      var i = this;
      return i.reversePreviewOrder ? e.prepend(t) : e.append(t);
    },
    _previewDefault: function _previewDefault(i, a, r) {
      var n = this,
          o = n.$preview;

      if (n.showPreview) {
        var l,
            s = t.getFileName(i),
            d = i ? i.type : "",
            c = i.size || 0,
            u = n._getFileName(i, ""),
            p = r === !0 && !n.isAjaxUpload,
            f = t.createObjectURL(i),
            g = n.fileManager.getId(i);

        n._clearDefaultPreview(), l = n._generatePreviewTemplate("other", f, s, d, a, g, p, c), n._addToPreview(o, l), n._setThumbAttr(a, u, c), r === !0 && n.isAjaxUpload && n._setThumbStatus(e("#" + a), "Error");
      }
    },
    canPreview: function canPreview(e) {
      var i = this;
      if (!(e && i.showPreview && i.$preview && i.$preview.length)) return !1;

      var a,
          r,
          n,
          o,
          l = e.name || "",
          s = e.type || "",
          d = (e.size || 0) / 1e3,
          c = i._parseFileType(s, l),
          u = i.allowedPreviewTypes,
          p = i.allowedPreviewMimeTypes,
          f = i.allowedPreviewExtensions || [],
          g = i.disabledPreviewTypes,
          m = i.disabledPreviewMimeTypes,
          v = i.disabledPreviewExtensions || [],
          h = i.maxFilePreviewSize && parseFloat(i.maxFilePreviewSize) || 0,
          w = new RegExp("\\.(" + f.join("|") + ")$", "i"),
          b = new RegExp("\\.(" + v.join("|") + ")$", "i");

      return a = !u || -1 !== u.indexOf(c), r = !p || -1 !== p.indexOf(s), n = !f.length || t.compare(l, w), o = g && -1 !== g.indexOf(c) || m && -1 !== m.indexOf(s) || v.length && t.compare(l, b) || h && !isNaN(h) && d > h, !o && (a || r || n);
    },
    _previewFile: function _previewFile(e, i, a, r, n, o) {
      if (this.showPreview) {
        var l,
            s = this,
            d = t.getFileName(i),
            c = o.type,
            u = o.name,
            p = s._parseFileType(c, d),
            f = s.$preview,
            g = i.size || 0,
            m = "text" === p || "html" === p || "image" === p ? a.target.result : n,
            v = s.fileManager.getId(i);

        "html" === p && s.purifyHtml && window.DOMPurify && (m = window.DOMPurify.sanitize(m)), l = s._generatePreviewTemplate(p, m, d, c, r, v, !1, g), s._clearDefaultPreview(), s._addToPreview(f, l);
        var h = f.find("#" + r),
            w = h.find("img"),
            b = h.attr("data-fileid");
        s._validateImageOrientation(w, i, r, b, u, c, g, m), s._setThumbAttr(r, u, g), s._initSortable();
      }
    },
    _setThumbAttr: function _setThumbAttr(t, i, a) {
      var r = this,
          n = e("#" + t);
      n.length && (a = a && a > 0 ? r._getSize(a) : "", n.data({
        caption: i,
        size: a
      }));
    },
    _setInitThumbAttr: function _setInitThumbAttr() {
      var e,
          i,
          a,
          r,
          n = this,
          o = n.previewCache.data,
          l = n.previewCache.count(!0);
      if (0 !== l) for (var s = 0; l > s; s++) {
        e = o.config[s], r = n.previewInitId + "-init_" + s, i = t.ifSet("caption", e, t.ifSet("filename", e)), a = t.ifSet("size", e), n._setThumbAttr(r, i, a);
      }
    },
    _slugDefault: function _slugDefault(e) {
      return t.isEmpty(e) ? "" : String(e).replace(/[\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g, "_");
    },
    _updateFileDetails: function _updateFileDetails(e) {
      var i,
          a,
          r,
          n,
          o,
          l = this,
          s = l.$element,
          d = t.isIE(9) && t.findFileName(s.val()) || s[0].files[0] && s[0].files[0].name;
      !d && l.fileManager.count() > 0 ? (o = l.fileManager.getFirstFile(), i = o.nameFmt) : i = d ? l.slug(d) : "_", a = l.isAjaxUpload ? l.fileManager.count() : e, n = l.previewCache.count(!0) + a, r = 1 === a ? i : l._getMsgSelected(n), l.isError ? (l.$previewContainer.removeClass("file-thumb-loading"), l.$previewStatus.html(""), l.$captionContainer.removeClass("icon-visible")) : l._showFileIcon(), l._setCaption(r, l.isError), l.$container.removeClass("file-input-new file-input-ajax-new"), 1 === arguments.length && l._raise("fileselect", [e, i]), l.previewCache.count(!0) && l._initPreviewActions();
    },
    _setThumbStatus: function _setThumbStatus(e, t) {
      var i = this;

      if (i.showPreview) {
        var a = "indicator" + t,
            r = a + "Title",
            n = "file-preview-" + t.toLowerCase(),
            o = e.find(".file-upload-indicator"),
            l = i.fileActionSettings;
        e.removeClass("file-preview-success file-preview-error file-preview-loading"), "Success" === t && e.find(".file-drag-handle").remove(), o.html(l[a]), o.attr("title", l[r]), e.addClass(n), "Error" !== t || i.retryErrorUploads || e.find(".kv-file-upload").attr("disabled", !0);
      }
    },
    _setProgressCancelled: function _setProgressCancelled() {
      var e = this;

      e._setProgress(101, e.$progress, e.msgCancelled);
    },
    _setProgress: function _setProgress(e, i, a, r) {
      var n,
          o = this,
          l = Math.min(e, 100),
          s = o.progressUploadThreshold,
          d = 100 >= e ? o.progressTemplate : o.progressCompleteTemplate,
          c = 100 > l ? o.progressTemplate : a ? o.paused ? o.progressPauseTemplate : o.progressErrorTemplate : d;
      i = i || o.$progress, e >= 100 && (r = ""), t.isEmpty(c) || (n = s && l > s && 100 >= e ? c.setTokens({
        percent: s,
        status: o.msgUploadThreshold
      }) : c.setTokens({
        percent: l,
        status: e > 100 ? o.msgUploadEnd : l + "%"
      }), r = r || "", n = n.setTokens({
        stats: r
      }), i.html(n), a && i.find('[role="progressbar"]').html(a));
    },
    _setFileDropZoneTitle: function _setFileDropZoneTitle() {
      var e,
          i = this,
          a = i.$container.find(".file-drop-zone"),
          r = i.dropZoneTitle;
      i.isClickable && (e = t.isEmpty(i.$element.attr("multiple")) ? i.fileSingle : i.filePlural, r += i.dropZoneClickTitle.replace("{files}", e)), a.find("." + i.dropZoneTitleClass).remove(), !i.showPreview || 0 === a.length || i.fileManager.count() > 0 || !i.dropZoneEnabled || !i.isAjaxUpload && i.$element.files || (0 === a.find(t.FRAMES).length && t.isEmpty(i.defaultPreviewContent) && a.prepend('<div class="' + i.dropZoneTitleClass + '">' + r + "</div>"), i.$container.removeClass("file-input-new"), t.addCss(i.$container, "file-input-ajax-new"));
    },
    _getStats: function _getStats(e) {
      var i,
          a,
          r = this;
      return r.showUploadStats && e && e.bitrate ? (a = r._getLayoutTemplate("stats"), i = e.elapsed && e.bps ? r.msgPendingTime.setTokens({
        time: t.getElapsed(Math.ceil(e.pendingBytes / e.bps))
      }) : r.msgCalculatingTime, a.setTokens({
        uploadSpeed: e.bitrate,
        pendingTime: i
      })) : "";
    },
    _setResumableProgress: function _setResumableProgress(e, t, i) {
      var a = this,
          r = a.resumableManager,
          n = i ? r : a,
          o = i ? i.find(".file-thumb-progress") : null;
      0 === n.lastProgress && (n.lastProgress = e), e < n.lastProgress && (e = n.lastProgress), a._setProgress(e, o, null, a._getStats(t)), n.lastProgress = e;
    },
    _setFileUploadStats: function _setFileUploadStats(i, a, r, n) {
      var o,
          l = this,
          s = l.fileManager,
          d = s.getThumb(i),
          c = l.resumableManager,
          u = 0,
          p = s.getTotalSize(),
          f = e.extend(!0, {}, n);

      if (l.enableResumableUpload) {
        var g,
            m = n.loaded,
            v = c.getUploadedSize(),
            h = c.file.size;
        m += v, g = s.uploadedSize + m, a = t.round(100 * m / h), n.pendingBytes = h - v, l._setResumableProgress(a, n, d), o = Math.floor(100 * g / p), f.pendingBytes = p - g, l._setResumableProgress(o, f);
      } else s.setProgress(i, a), l._setProgress(a, d.find(".file-thumb-progress"), null, l._getStats(n)), e.each(s.stats, function (e, t) {
        u += t.loaded;
      }), f.pendingBytes = p - u, o = t.round(u / p * 100), l._setProgress(o, null, null, l._getStats(f));
    },
    _validateMinCount: function _validateMinCount() {
      var e = this,
          t = e.isAjaxUpload ? e.fileManager.count() : e._inputFileCount();
      return e.validateInitialCount && e.minFileCount > 0 && e._getFileCount(t - 1) < e.minFileCount ? (e._noFilesError({}), !1) : !0;
    },
    _getFileCount: function _getFileCount(e) {
      var t = this,
          i = 0;
      return t.validateInitialCount && !t.overwriteInitial && (i = t.previewCache.count(!0), e += i), e;
    },
    _getFileId: function _getFileId(e) {
      return t.getFileId(e, this.generateFileId);
    },
    _getFileName: function _getFileName(e, i) {
      var a = this,
          r = t.getFileName(e);
      return r ? a.slug(r) : i;
    },
    _getFileNames: function _getFileNames(e) {
      var t = this;
      return t.filenames.filter(function (t) {
        return e ? void 0 !== t : void 0 !== t && null !== t;
      });
    },
    _setPreviewError: function _setPreviewError(e, t) {
      var i = this,
          a = i.removeFromPreviewOnError && !i.retryErrorUploads;

      if (t && !a || i.fileManager.remove(e), i.showPreview) {
        if (a) return void e.remove();
        i._setThumbStatus(e, "Error"), i._refreshUploadButton(e);
      }
    },
    _refreshUploadButton: function _refreshUploadButton(e) {
      var t = this,
          i = e.find(".kv-file-upload"),
          a = t.fileActionSettings,
          r = a.uploadIcon,
          n = a.uploadTitle;
      i.length && (t.retryErrorUploads && (r = a.uploadRetryIcon, n = a.uploadRetryTitle), i.attr("title", n).html(r));
    },
    _checkDimensions: function _checkDimensions(e, i, a, r, n, o, l) {
      var s,
          d,
          c,
          u,
          p = this,
          f = "Small" === i ? "min" : "max",
          g = p[f + "Image" + o];
      !t.isEmpty(g) && a.length && (c = a[0], d = "Width" === o ? c.naturalWidth || c.width : c.naturalHeight || c.height, u = "Small" === i ? d >= g : g >= d, u || (s = p["msgImage" + o + i].setTokens({
        name: n,
        size: g
      }), p._showUploadError(s, l), p._setPreviewError(r)));
    },
    _getExifObj: function _getExifObj(e) {
      var t = this,
          i = null;
      if ("data:image/jpeg;base64," !== e.slice(0, 23) && "data:image/jpg;base64," !== e.slice(0, 22)) return void (i = null);

      try {
        i = window.piexif ? window.piexif.load(e) : null;
      } catch (a) {
        i = null, t._log(a);
      }

      return i || t._log("Error loading the piexif.js library."), i;
    },
    _validateImageOrientation: function _validateImageOrientation(e, i, a, r, n, o, l, s) {
      var d,
          c,
          u = this,
          p = u.autoOrientImage;
      return d = e.length && p ? u._getExifObj(s) : null, (c = d ? d["0th"][piexif.ImageIFD.Orientation] : null) ? (t.setImageOrientation(e, u.$preview.find("#zoom-" + a + " img"), c), u._raise("fileimageoriented", {
        $img: e,
        file: i
      }), void u._validateImage(a, r, n, o, l, s, d)) : void u._validateImage(a, r, n, o, l, s, d);
    },
    _validateImage: function _validateImage(t, i, a, r, n, o, l) {
      var s,
          d,
          c,
          u = this,
          p = u.$preview,
          f = p.find("#" + t),
          g = f.attr("data-fileindex"),
          m = f.find("img");
      a = a || "Untitled", m.one("load", function () {
        d = f.width(), c = p.width(), d > c && m.css("width", "100%"), s = {
          ind: g,
          id: t,
          fileId: i
        }, u._checkDimensions(g, "Small", m, f, a, "Width", s), u._checkDimensions(g, "Small", m, f, a, "Height", s), u.resizeImage || (u._checkDimensions(g, "Large", m, f, a, "Width", s), u._checkDimensions(g, "Large", m, f, a, "Height", s)), u._raise("fileimageloaded", [t]), u.fileManager.addImage(i, {
          ind: g,
          img: m,
          thumb: f,
          pid: t,
          typ: r,
          siz: n,
          validated: !1,
          imgData: o,
          exifObj: l
        }), f.data("exif", l), u._validateAllImages();
      }).one("error", function () {
        u._raise("fileimageloaderror", [t]);
      }).each(function () {
        this.complete ? e(this).trigger("load") : this.error && e(this).trigger("error");
      });
    },
    _validateAllImages: function _validateAllImages() {
      var t,
          i = this,
          a = {
        val: 0
      },
          r = i.fileManager.getImageCount(),
          n = i.resizeIfSizeMoreThan;
      r === i.fileManager.totalImages && (i._raise("fileimagesloaded"), i.resizeImage && e.each(i.fileManager.loadedImages, function (e, o) {
        o.validated || (t = o.siz, t && t > 1e3 * n && i._getResizedImage(e, o, a, r), o.validated = !0);
      }));
    },
    _getResizedImage: function _getResizedImage(i, a, r, n) {
      var o,
          l,
          s,
          d,
          c,
          u,
          p,
          f,
          g,
          m,
          v = this,
          h = e(a.img)[0],
          w = h.naturalWidth,
          b = h.naturalHeight,
          _ = 1,
          C = v.maxImageWidth || w,
          y = v.maxImageHeight || b,
          x = !(!w || !b),
          T = v.imageCanvas,
          I = v.imageCanvasContext,
          P = a.typ,
          k = a.pid,
          S = a.ind,
          E = a.thumb,
          F = a.exifObj;
      if (c = function c(e, t, i) {
        v.isAjaxUpload ? v._showUploadError(e, t, i) : v._showError(e, t, i), v._setPreviewError(E);
      }, f = v.fileManager.getFile(i), g = {
        id: k,
        index: S,
        fileId: i
      }, m = [i, k, S], (!f || !x || C >= w && y >= b) && (x && f && v._raise("fileimageresized", m), r.val++, r.val === n && v._raise("fileimagesresized"), !x)) return void c(v.msgImageResizeError, g, "fileimageresizeerror");
      P = P || v.resizeDefaultImageType, l = w > C, s = b > y, _ = "width" === v.resizePreference ? l ? C / w : s ? y / b : 1 : s ? y / b : l ? C / w : 1, v._resetCanvas(), w *= _, b *= _, T.width = w, T.height = b;

      try {
        I.drawImage(h, 0, 0, w, b), d = T.toDataURL(P, v.resizeQuality), F && (p = window.piexif.dump(F), d = window.piexif.insert(p, d)), o = t.dataURI2Blob(d), v.fileManager.setFile(i, o), v._raise("fileimageresized", m), r.val++, r.val === n && v._raise("fileimagesresized", [void 0, void 0]), o instanceof Blob || c(v.msgImageResizeError, g, "fileimageresizeerror");
      } catch (A) {
        r.val++, r.val === n && v._raise("fileimagesresized", [void 0, void 0]), u = v.msgImageResizeException.replace("{errors}", A.message), c(u, g, "fileimageresizeexception");
      }
    },
    _initBrowse: function _initBrowse(e) {
      var i = this,
          a = i.$element;
      i.showBrowse ? i.$btnFile = e.find(".btn-file").append(a) : (a.appendTo(e).attr("tabindex", -1), t.addCss(a, "file-no-browse"));
    },
    _initClickable: function _initClickable() {
      var i,
          a,
          r = this;
      r.isClickable && (i = r.$dropZone, r.isAjaxUpload || (a = r.$preview.find(".file-default-preview"), a.length && (i = a)), t.addCss(i, "clickable"), i.attr("tabindex", -1), r._handler(i, "click", function (t) {
        var a = e(t.target);
        e(r.elErrorContainer + ":visible").length || a.parents(".file-preview-thumbnails").length && !a.parents(".file-default-preview").length || (r.$element.data("zoneClicked", !0).trigger("click"), i.blur());
      }));
    },
    _initCaption: function _initCaption() {
      var e = this,
          i = e.initialCaption || "";
      return e.overwriteInitial || t.isEmpty(i) ? (e.$caption.val(""), !1) : (e._setCaption(i), !0);
    },
    _setCaption: function _setCaption(i, a) {
      var r,
          n,
          o,
          l,
          s,
          d,
          c = this;

      if (c.$caption.length) {
        if (c.$captionContainer.removeClass("icon-visible"), a) r = e("<div>" + c.msgValidationError + "</div>").text(), l = c.fileManager.count(), l ? (d = c.fileManager.getFirstFile(), s = 1 === l && d ? d.nameFmt : c._getMsgSelected(l)) : s = c._getMsgSelected(c.msgNo), n = t.isEmpty(i) ? s : i, o = '<span class="' + c.msgValidationErrorClass + '">' + c.msgValidationErrorIcon + "</span>";else {
          if (t.isEmpty(i)) return;
          r = e("<div>" + i + "</div>").text(), n = r, o = c._getLayoutTemplate("fileIcon");
        }
        c.$captionContainer.addClass("icon-visible"), c.$caption.attr("title", r).val(n), c.$captionIcon.html(o);
      }
    },
    _createContainer: function _createContainer() {
      var t = this,
          i = {
        "class": "file-input file-input-new" + (t.rtl ? " kv-rtl" : "")
      },
          a = e(document.createElement("div")).attr(i).html(t._renderMain());
      return a.insertBefore(t.$element), t._initBrowse(a), t.theme && a.addClass("theme-" + t.theme), a;
    },
    _refreshContainer: function _refreshContainer() {
      var e = this,
          t = e.$container,
          i = e.$element;
      i.insertAfter(t), t.html(e._renderMain()), e._initBrowse(t), e._validateDisabled();
    },
    _validateDisabled: function _validateDisabled() {
      var e = this;
      e.$caption.attr({
        readonly: e.isDisabled
      });
    },
    _renderMain: function _renderMain() {
      var e = this,
          t = e.dropZoneEnabled ? " file-drop-zone" : "file-drop-disabled",
          i = e.showClose ? e._getLayoutTemplate("close") : "",
          a = e.showPreview ? e._getLayoutTemplate("preview").setTokens({
        "class": e.previewClass,
        dropClass: t
      }) : "",
          r = e.isDisabled ? e.captionClass + " file-caption-disabled" : e.captionClass,
          n = e.captionTemplate.setTokens({
        "class": r + " kv-fileinput-caption"
      });
      return e.mainTemplate.setTokens({
        "class": e.mainClass + (!e.showBrowse && e.showCaption ? " no-browse" : ""),
        preview: a,
        close: i,
        caption: n,
        upload: e._renderButton("upload"),
        remove: e._renderButton("remove"),
        cancel: e._renderButton("cancel"),
        pause: e._renderButton("pause"),
        browse: e._renderButton("browse")
      });
    },
    _renderButton: function _renderButton(e) {
      var i = this,
          a = i._getLayoutTemplate("btnDefault"),
          r = i[e + "Class"],
          n = i[e + "Title"],
          o = i[e + "Icon"],
          l = i[e + "Label"],
          s = i.isDisabled ? " disabled" : "",
          d = "button";

      switch (e) {
        case "remove":
          if (!i.showRemove) return "";
          break;

        case "cancel":
          if (!i.showCancel) return "";
          r += " kv-hidden";
          break;

        case "pause":
          if (!i.showPause) return "";
          r += " kv-hidden";
          break;

        case "upload":
          if (!i.showUpload) return "";
          i.isAjaxUpload && !i.isDisabled ? a = i._getLayoutTemplate("btnLink").replace("{href}", i.uploadUrl) : d = "submit";
          break;

        case "browse":
          if (!i.showBrowse) return "";
          a = i._getLayoutTemplate("btnBrowse");
          break;

        default:
          return "";
      }

      return r += "browse" === e ? " btn-file" : " fileinput-" + e + " fileinput-" + e + "-button", t.isEmpty(l) || (l = ' <span class="' + i.buttonLabelClass + '">' + l + "</span>"), a.setTokens({
        type: d,
        css: r,
        title: n,
        status: s,
        icon: o,
        label: l
      });
    },
    _renderThumbProgress: function _renderThumbProgress() {
      var e = this;
      return '<div class="file-thumb-progress kv-hidden">' + e.progressInfoTemplate.setTokens({
        percent: 101,
        status: e.msgUploadBegin,
        stats: ""
      }) + "</div>";
    },
    _renderFileFooter: function _renderFileFooter(e, i, a, r, n) {
      var o,
          l,
          s = this,
          d = s.fileActionSettings,
          c = d.showRemove,
          u = d.showDrag,
          p = d.showUpload,
          f = d.showZoom,
          g = s._getLayoutTemplate("footer"),
          m = s._getLayoutTemplate("indicator"),
          v = n ? d.indicatorError : d.indicatorNew,
          h = n ? d.indicatorErrorTitle : d.indicatorNewTitle,
          w = m.setTokens({
        indicator: v,
        indicatorTitle: h
      });

      return a = s._getSize(a), l = {
        type: e,
        caption: i,
        size: a,
        width: r,
        progress: "",
        indicator: w
      }, s.isAjaxUpload ? (l.progress = s._renderThumbProgress(), l.actions = s._renderFileActions(l, p, !1, c, f, u, !1, !1, !1)) : l.actions = s._renderFileActions(l, !1, !1, !1, f, u, !1, !1, !1), o = g.setTokens(l), o = t.replaceTags(o, s.previewThumbTags);
    },
    _renderFileActions: function _renderFileActions(e, t, i, a, r, n, o, l, s, d, c, u) {
      if (!e.type && d && (e.type = "image"), "function" == typeof t && (t = t(e)), "function" == typeof i && (i = i(e)), "function" == typeof a && (a = a(e)), "function" == typeof r && (r = r(e)), "function" == typeof n && (n = n(e)), !(t || i || a || r || n)) return "";

      var p,
          f = this,
          g = l === !1 ? "" : ' data-url="' + l + '"',
          m = s === !1 ? "" : ' data-key="' + s + '"',
          v = "",
          h = "",
          w = "",
          b = "",
          _ = "",
          C = f._getLayoutTemplate("actions"),
          y = f.fileActionSettings,
          x = f.otherActionButtons.setTokens({
        dataKey: m,
        key: s
      }),
          T = o ? y.removeClass + " disabled" : y.removeClass;

      return a && (v = f._getLayoutTemplate("actionDelete").setTokens({
        removeClass: T,
        removeIcon: y.removeIcon,
        removeTitle: y.removeTitle,
        dataUrl: g,
        dataKey: m,
        key: s
      })), t && (h = f._getLayoutTemplate("actionUpload").setTokens({
        uploadClass: y.uploadClass,
        uploadIcon: y.uploadIcon,
        uploadTitle: y.uploadTitle
      })), i && (w = f._getLayoutTemplate("actionDownload").setTokens({
        downloadClass: y.downloadClass,
        downloadIcon: y.downloadIcon,
        downloadTitle: y.downloadTitle,
        downloadUrl: c || f.initialPreviewDownloadUrl
      }), w = w.setTokens({
        filename: u,
        key: s
      })), r && (b = f._getLayoutTemplate("actionZoom").setTokens({
        zoomClass: y.zoomClass,
        zoomIcon: y.zoomIcon,
        zoomTitle: y.zoomTitle
      })), n && d && (p = "drag-handle-init " + y.dragClass, _ = f._getLayoutTemplate("actionDrag").setTokens({
        dragClass: p,
        dragTitle: y.dragTitle,
        dragIcon: y.dragIcon
      })), C.setTokens({
        "delete": v,
        upload: h,
        download: w,
        zoom: b,
        drag: _,
        other: x
      });
    },
    _browse: function _browse(e) {
      var t = this;
      e && e.isDefaultPrevented() || !t._raise("filebrowse") || (t.isError && !t.isAjaxUpload && t.clear(), t.$captionContainer.focus());
    },
    _change: function _change(i) {
      var a = this;

      if (!a.changeTriggered) {
        var r,
            n,
            o,
            l = a.$element,
            s = arguments.length > 1,
            d = a.isAjaxUpload,
            c = s ? arguments[1] : l.get(0).files,
            u = !d && t.isEmpty(l.attr("multiple")) ? 1 : a.maxFileCount,
            p = a.fileManager.count(),
            f = t.isEmpty(l.attr("multiple")),
            g = f && p > 0,
            m = function m(t, i, r, n) {
          var o = e.extend(!0, {}, a._getOutData(null, {}, {}, c), {
            id: r,
            index: n
          }),
              l = {
            id: r,
            index: n,
            file: i,
            files: c
          };
          return d ? a._showUploadError(t, o) : a._showError(t, l);
        },
            v = function v(e, t) {
          var i = a.msgFilesTooMany.replace("{m}", t).replace("{n}", e);
          a.isError = m(i, null, null, null), a.$captionContainer.removeClass("icon-visible"), a._setCaption("", !0), a.$container.removeClass("file-input-new file-input-ajax-new");
        };

        if (a.reader = null, a._resetUpload(), a._hideFileIcon(), a.dropZoneEnabled && a.$container.find(".file-drop-zone ." + a.dropZoneTitleClass).remove(), d || (c = i.target && void 0 === i.target.files ? i.target.value ? [{
          name: i.target.value.replace(/^.+\\/, "")
        }] : [] : i.target.files || {}), r = c, t.isEmpty(r) || 0 === r.length) return d || a.clear(), void a._raise("fileselectnone");

        if (a._resetErrors(), o = r.length, n = a._getFileCount(d ? a.fileManager.count() + o : o), u > 0 && n > u) {
          if (!a.autoReplace || o > u) return void v(a.autoReplace && o > u ? o : n, u);
          n > u && a._resetPreviewThumbs(d);
        } else !d || g ? (a._resetPreviewThumbs(!1), g && a.clearFileStack()) : !d || 0 !== p || a.previewCache.count(!0) && !a.overwriteInitial || a._resetPreviewThumbs(!0);

        a.readFiles(r);
      }
    },
    _abort: function _abort(t) {
      var i,
          a = this;
      return a.ajaxAborted && "object" == _typeof(a.ajaxAborted) && void 0 !== a.ajaxAborted.message ? (i = e.extend(!0, {}, a._getOutData(null), t), i.abortData = a.ajaxAborted.data || {}, i.abortMessage = a.ajaxAborted.message, a._setProgress(101, a.$progress, a.msgCancelled), a._showUploadError(a.ajaxAborted.message, i, "filecustomerror"), a.cancel(), !0) : !!a.ajaxAborted;
    },
    _resetFileStack: function _resetFileStack() {
      var i = this,
          a = 0;

      i._getThumbs().each(function () {
        var r = e(this),
            n = r.attr("data-fileindex"),
            o = r.attr("id");
        "-1" !== n && -1 !== n && (i.fileManager.getFile(r.attr("data-fileid")) ? r.attr({
          id: "uploaded-" + t.uniqId(),
          "data-fileindex": "-1"
        }) : (r.attr({
          id: i.previewInitId + "-" + a,
          "data-fileindex": a
        }), a++), i.$preview.find("#zoom-" + o).attr({
          id: "zoom-" + r.attr("id"),
          "data-fileindex": r.attr("data-fileindex")
        }));
      });
    },
    _isFileSelectionValid: function _isFileSelectionValid(e) {
      var t = this;
      return e = e || 0, t.required && !t.getFilesCount() ? (t.$errorContainer.html(""), t._showUploadError(t.msgFileRequired), !1) : t.minFileCount > 0 && t._getFileCount(e) < t.minFileCount ? (t._noFilesError({}), !1) : !0;
    },
    clearFileStack: function clearFileStack() {
      var e = this;
      return e.fileManager.clear(), e._initResumableUpload(), e.enableResumableUpload ? (null === e.showPause && (e.showPause = !0), null === e.showCancel && (e.showCancel = !1)) : (e.showPause = !1, null === e.showCancel && (e.showCancel = !0)), e.$element;
    },
    getFileStack: function getFileStack() {
      return this.files.stack;
    },
    getFileList: function getFileList() {
      return this.files.list();
    },
    getFilesCount: function getFilesCount() {
      var e = this,
          t = e.isAjaxUpload ? e.fileManager.count() : e._inputFileCount();
      return e._getFileCount(t);
    },
    readFiles: function readFiles(i) {
      this.reader = new FileReader();

      var _a2,
          r = this,
          n = r.$element,
          o = r.reader,
          l = r.$previewContainer,
          s = r.$previewStatus,
          d = r.msgLoading,
          c = r.msgProgress,
          u = r.previewInitId,
          p = i.length,
          f = r.fileTypeSettings,
          g = r.fileManager.count(),
          m = r.allowedFileTypes,
          v = m ? m.length : 0,
          h = r.allowedFileExtensions,
          w = t.isEmpty(h) ? "" : h.join(", "),
          b = function b(t, n, o, l, s) {
        var d = e.extend(!0, {}, r._getOutData(null, {}, {}, i), {
          id: o,
          index: l,
          fileId: s
        }),
            c = e("#" + o),
            u = {
          id: o,
          index: l,
          fileId: s,
          file: n,
          files: i
        };
        r._previewDefault(n, o, !0), r.isAjaxUpload ? setTimeout(function () {
          _a2(l + 1);
        }, r.processDelay) : p = 0, r._initFileActions(), c.remove(), r.isError = r.isAjaxUpload ? r._showUploadError(t, d) : r._showError(t, u), r._updateFileDetails(p);
      };

      r.fileManager.clearImages(), e.each(i, function (e, t) {
        var i = r.fileTypeSettings.image;
        i && i(t.type) && r.fileManager.totalImages++;
      }), _a2 = function a(_) {
        if (t.isEmpty(n.attr("multiple")) && (p = 1), _ >= p) return r.isAjaxUpload && r.fileManager.count() > 0 ? r._raise("filebatchselected", [r.fileManager.stack]) : r._raise("filebatchselected", [i]), l.removeClass("file-thumb-loading"), void s.html("");

        var C,
            y,
            x,
            T,
            I,
            P,
            k,
            S,
            E,
            F,
            A,
            z,
            D,
            M = g + _,
            U = u + "-" + M,
            $ = i[_],
            j = f.text,
            R = f.image,
            O = f.html,
            B = r._getFileName($, ""),
            L = ($ && $.size || 0) / 1e3,
            Z = "",
            N = t.createObjectURL($),
            H = 0,
            q = "",
            W = 0,
            V = function V() {
          var e = c.setTokens({
            index: _ + 1,
            files: p,
            percent: 50,
            name: B
          });
          setTimeout(function () {
            s.html(e), r._updateFileDetails(p), _a2(_ + 1);
          }, r.processDelay), r._raise("fileloaded", [$, U, _, o]);
        };

        if ($) {
          if (S = r.fileManager.getId($), v > 0) for (y = 0; v > y; y++) {
            P = m[y], k = r.msgFileTypes[P] || P, q += 0 === y ? k : ", " + k;
          }
          if (B === !1) return void _a2(_ + 1);
          if (0 === B.length) return x = r.msgInvalidFileName.replace("{name}", t.htmlEncode(t.getFileName($), "[unknown]")), void b(x, $, U, _, S);
          if (t.isEmpty(h) || (Z = new RegExp("\\.(" + h.join("|") + ")$", "i")), C = L.toFixed(2), r.maxFileSize > 0 && L > r.maxFileSize) return x = r.msgSizeTooLarge.setTokens({
            name: B,
            size: C,
            maxSize: r.maxFileSize
          }), void b(x, $, U, _, S);
          if (null !== r.minFileSize && L <= t.getNum(r.minFileSize)) return x = r.msgSizeTooSmall.setTokens({
            name: B,
            size: C,
            minSize: r.minFileSize
          }), void b(x, $, U, _, S);

          if (!t.isEmpty(m) && t.isArray(m)) {
            for (y = 0; y < m.length; y += 1) {
              T = m[y], E = f[T], H += E && "function" == typeof E && E($.type, t.getFileName($)) ? 1 : 0;
            }

            if (0 === H) return x = r.msgInvalidFileType.setTokens({
              name: B,
              types: q
            }), void b(x, $, U, _, S);
          }

          if (0 === H && !t.isEmpty(h) && t.isArray(h) && !t.isEmpty(Z) && (I = t.compare(B, Z), H += t.isEmpty(I) ? 0 : I.length, 0 === H)) return x = r.msgInvalidFileExtension.setTokens({
            name: B,
            extensions: w
          }), void b(x, $, U, _, S);
          if (r.isAjaxUpload && r.fileManager.exists(S)) return x = r.msgDuplicateFile.setTokens({
            name: B,
            size: C
          }), void b(x, $, U, _, S);
          if (!r.canPreview($)) return r.isAjaxUpload && r.fileManager.add($), r.showPreview && (l.addClass("file-thumb-loading"), r._previewDefault($, U), r._initFileActions()), void setTimeout(function () {
            r._updateFileDetails(p), _a2(_ + 1), r._raise("fileloaded", [$, U, _]);
          }, 10);
          F = j($.type, B), A = O($.type, B), z = R($.type, B), s.html(d.replace("{index}", _ + 1).replace("{files}", p)), l.addClass("file-thumb-loading"), o.onerror = function (e) {
            r._errorHandler(e, B);
          }, o.onload = function (i) {
            var a,
                n,
                l,
                s,
                d,
                c,
                u = [],
                p = function p(e) {
              var t = new FileReader();
              t.onerror = function (e) {
                r._errorHandler(e, B);
              }, t.onload = function (e) {
                r._previewFile(_, $, e, U, N, n), r._initFileActions(), V();
              }, e ? t.readAsText($, r.textEncoding) : t.readAsDataURL($);
            };

            if (n = {
              name: B,
              type: $.type
            }, e.each(f, function (e, t) {
              "object" !== e && "other" !== e && "function" == typeof t && t($.type, B) && W++;
            }), 0 === W) {
              for (l = new Uint8Array(i.target.result), y = 0; y < l.length; y++) {
                s = l[y].toString(16), u.push(s);
              }

              if (a = u.join("").toLowerCase().substring(0, 8), c = t.getMimeType(a, "", ""), t.isEmpty(c) && (d = t.arrayBuffer2String(o.result), c = t.isSvg(d) ? "image/svg+xml" : t.getMimeType(a, d, $.type)), n = {
                name: B,
                type: c
              }, F = j(c, ""), A = O(c, ""), z = R(c, ""), D = F || A, D || z) return void p(D);
            }

            r._previewFile(_, $, i, U, N, n), r._initFileActions(), V();
          }, o.onprogress = function (e) {
            if (e.lengthComputable) {
              var t = e.loaded / e.total * 100,
                  i = Math.ceil(t);
              x = c.setTokens({
                index: _ + 1,
                files: p,
                percent: i,
                name: B
              }), setTimeout(function () {
                s.html(x);
              }, r.processDelay);
            }
          }, F || A ? o.readAsText($, r.textEncoding) : z ? o.readAsDataURL($) : o.readAsArrayBuffer($), r.fileManager.add($);
        }
      }, _a2(0), r._updateFileDetails(p, !1);
    },
    lock: function lock() {
      var e = this,
          t = e.$container;
      return e._resetErrors(), e.disable(), t.addClass("is-locked"), e.showCancel && t.find(".fileinput-cancel").show(), e.showPause && t.find(".fileinput-pause").show(), e._raise("filelock", [e.fileManager.stack, e._getExtraData()]), e.$element;
    },
    unlock: function unlock(e) {
      var t = this,
          i = t.$container;
      return void 0 === e && (e = !0), t.enable(), i.removeClass("is-locked"), t.showCancel && i.find(".fileinput-cancel").hide(), t.showPause && i.find(".fileinput-pause").hide(), e && t._resetFileStack(), t._raise("fileunlock", [t.fileManager.stack, t._getExtraData()]), t.$element;
    },
    pause: function pause() {
      var t,
          i = this,
          a = i.resumableManager,
          r = i.ajaxRequests,
          n = r.length;

      if (i.enableResumableUpload) {
        if (a.chunkIntervalId && clearInterval(a.chunkIntervalId), i.ajaxQueueIntervalId && clearInterval(i.ajaxQueueIntervalId), i._raise("fileuploadpaused", [i.fileManager, a]), n > 0) for (t = 0; n > t; t += 1) {
          i.paused = !0, r[t].abort();
        }
        return i.showPreview && (a.$btnUpload.removeAttr("disabled"), i._getThumbs().each(function () {
          var t = e(this),
              a = t.attr("data-fileid");
          t.removeClass("file-uploading"), i.fileManager.getFile(a) || (t.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"), t.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled"));
        })), i._setProgress(101, i.$progress, i.msgPaused), i.$element;
      }
    },
    cancel: function cancel() {
      var t,
          i = this,
          a = i.ajaxRequests,
          r = i.resumableManager,
          n = a.length;
      if (i.enableResumableUpload && r.chunkIntervalId ? (clearInterval(r.chunkIntervalId), r.reset(), i._raise("fileuploadcancelled", [i.fileManager, r])) : i._raise("fileuploadcancelled", [i.fileManager]), i.ajaxQueueIntervalId && clearInterval(i.ajaxQueueIntervalId), i._initAjax(), n > 0) for (t = 0; n > t; t += 1) {
        i.cancelling = !0, a[t].abort();
      }
      return i._getThumbs().each(function () {
        var t = e(this),
            a = t.attr("data-fileid"),
            r = t.find(".file-thumb-progress");
        t.removeClass("file-uploading"), i._setProgress(0, r), r.hide(), i.fileManager.getFile(a) || (t.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"), t.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")), i.unlock();
      }), setTimeout(function () {
        i._setProgressCancelled();
      }, i.processDelay), i.$element;
    },
    clear: function clear() {
      var i,
          a = this;
      if (a._raise("fileclear")) return a.$btnUpload.removeAttr("disabled"), a._getThumbs().find("video,audio,img").each(function () {
        t.cleanMemory(e(this));
      }), a._clearFileInput(), a._resetUpload(), a.clearFileStack(), a._resetErrors(!0), a._hasInitialPreview() ? (a._showFileIcon(), a._resetPreview(), a._initPreviewActions(), a.$container.removeClass("file-input-new")) : (a._getThumbs().each(function () {
        a._clearObjects(e(this));
      }), a.isAjaxUpload && (a.previewCache.data = {}), a.$preview.html(""), i = !a.overwriteInitial && a.initialCaption.length > 0 ? a.initialCaption : "", a.$caption.attr("title", "").val(i), t.addCss(a.$container, "file-input-new"), a._validateDefaultPreview()), 0 === a.$container.find(t.FRAMES).length && (a._initCaption() || a.$captionContainer.removeClass("icon-visible")), a._hideFileIcon(), a.$captionContainer.focus(), a._setFileDropZoneTitle(), a._raise("filecleared"), a.$element;
    },
    reset: function reset() {
      var e = this;
      if (e._raise("filereset")) return e.lastProgress = 0, e._resetPreview(), e.$container.find(".fileinput-filename").text(""), t.addCss(e.$container, "file-input-new"), (e.getFrames().length || e.dropZoneEnabled) && e.$container.removeClass("file-input-new"), e.clearFileStack(), e._setFileDropZoneTitle(), e.$element;
    },
    disable: function disable() {
      var e = this;
      return e.isDisabled = !0, e._raise("filedisabled"), e.$element.attr("disabled", "disabled"), e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"), e.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled", !0), t.addCss(e.$container.find(".btn-file"), "disabled"), e._initDragDrop(), e.$element;
    },
    enable: function enable() {
      var e = this;
      return e.isDisabled = !1, e._raise("fileenabled"), e.$element.removeAttr("disabled"), e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"), e.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"), e.$container.find(".btn-file").removeClass("disabled"), e._initDragDrop(), e.$element;
    },
    upload: function upload() {
      var i,
          a,
          r,
          n = this,
          o = n.fileManager,
          l = o.count(),
          s = n.resumableManager,
          d = !e.isEmptyObject(n._getExtraData()),
          c = n.$progress;

      if (n.isAjaxUpload && !n.isDisabled && n._isFileSelectionValid(l)) {
        if (n.lastProgress = 0, n._resetUpload(), 0 === l && !d) return void n._showUploadError(n.msgUploadEmpty);
        if (n.cancelling = !1, n.$progress.show(), n.lock(), r = o.count(), 0 === l && d) return n._setProgress(2), void n._uploadExtraOnly();

        if (n.uploadAsync || n.enableResumableUpload) {
          for (a = n._getOutData(null), n._raise("filebatchpreupload", [a]), n.fileBatchCompleted = !1, n.uploadCache = {
            content: [],
            config: [],
            tags: [],
            append: !0
          }, i = 0; r > i; i++) {
            n.uploadCache.content[i] = null, n.uploadCache.config[i] = null, n.uploadCache.tags[i] = null;
          }

          n.$preview.find(".file-preview-initial").removeClass(t.SORT_CSS), n._initSortable(), n.cacheInitialPreview = n.getPreview();
        }

        if (n.enableResumableUpload) {
          var u = !1;
          return n.paused ? c.html(n.progressPauseTemplate.setTokens({
            percent: 101,
            status: n.msgUploadResume,
            stats: ""
          })) : u = !0, n.paused = !1, u && c.html(n.progressInfoTemplate.setTokens({
            percent: 101,
            status: n.msgUploadBegin,
            stats: ""
          })), setTimeout(function () {
            s.upload();
          }, n.processDelay), n.$element;
        }

        return n._setProgress(2), n.hasInitData = !1, n.uploadAsync ? (i = 0, void e.each(o.stack, function (e) {
          n._uploadSingle(i, e, !0), i++;
        })) : (n._uploadBatch(), n.$element);
      }
    },
    destroy: function destroy() {
      var t = this,
          i = t.$form,
          a = t.$container,
          r = t.$element,
          n = t.namespace;
      return e(document).off(n), e(window).off(n), i && i.length && i.off(n), t.isAjaxUpload && t._clearFileInput(), t._cleanup(), t._initPreviewCache(), r.insertBefore(a).off(n).removeData(), a.off().remove(), r;
    },
    refresh: function refresh(i) {
      var a = this,
          r = a.$element;
      return i = "object" != _typeof(i) || t.isEmpty(i) ? a.options : e.extend(!0, {}, a.options, i), a._init(i, !0), a._listen(), r;
    },
    zoom: function zoom(e) {
      var i = this,
          a = i._getFrame(e),
          r = i.$modal;

      a && (t.initModal(r), r.html(i._getModalContent()), i._setZoomContent(a), r.modal("show"), i._initZoomButtons());
    },
    getExif: function getExif(e) {
      var t = this,
          i = t._getFrame(e);

      return i && i.data("exif") || null;
    },
    getFrames: function getFrames(i) {
      var a,
          r = this;
      return i = i || "", a = r.$preview.find(t.FRAMES + i), r.reversePreviewOrder && (a = e(a.get().reverse())), a;
    },
    getPreview: function getPreview() {
      var e = this;
      return {
        content: e.initialPreview,
        config: e.initialPreviewConfig,
        tags: e.initialPreviewThumbTags
      };
    }
  }, e.fn.fileinput = function (a) {
    if (t.hasFileAPISupport() || t.isIE(9)) {
      var r = Array.apply(null, arguments),
          n = [];

      switch (r.shift(), this.each(function () {
        var o,
            l = e(this),
            s = l.data("fileinput"),
            d = "object" == _typeof(a) && a,
            c = d.theme || l.data("theme"),
            u = {},
            p = {},
            f = d.language || l.data("language") || e.fn.fileinput.defaults.language || "en";
        s || (c && (p = e.fn.fileinputThemes[c] || {}), "en" === f || t.isEmpty(e.fn.fileinputLocales[f]) || (u = e.fn.fileinputLocales[f] || {}), o = e.extend(!0, {}, e.fn.fileinput.defaults, p, e.fn.fileinputLocales.en, u, d, l.data()), s = new i(this, o), l.data("fileinput", s)), "string" == typeof a && n.push(s[a].apply(s, r));
      }), n.length) {
        case 0:
          return this;

        case 1:
          return n[0];

        default:
          return n;
      }
    }
  }, e.fn.fileinput.defaults = {
    language: "en",
    showCaption: !0,
    showBrowse: !0,
    showPreview: !0,
    showRemove: !0,
    showUpload: !0,
    showUploadStats: !0,
    showCancel: null,
    showPause: null,
    showClose: !0,
    showUploadedThumbs: !0,
    browseOnZoneClick: !1,
    autoReplace: !1,
    autoOrientImage: function autoOrientImage() {
      var e = window.navigator.userAgent,
          t = !!e.match(/WebKit/i),
          i = !!e.match(/iP(od|ad|hone)/i),
          a = i && t && !e.match(/CriOS/i);
      return !a;
    },
    autoOrientImageInitial: !0,
    required: !1,
    rtl: !1,
    hideThumbnailContent: !1,
    encodeUrl: !0,
    generateFileId: null,
    previewClass: "",
    captionClass: "",
    frameClass: "krajee-default",
    mainClass: "file-caption-main",
    mainTemplate: null,
    purifyHtml: !0,
    fileSizeGetter: null,
    initialCaption: "",
    initialPreview: [],
    initialPreviewDelimiter: "*$$*",
    initialPreviewAsData: !1,
    initialPreviewFileType: "image",
    initialPreviewConfig: [],
    initialPreviewThumbTags: [],
    previewThumbTags: {},
    initialPreviewShowDelete: !0,
    initialPreviewDownloadUrl: "",
    removeFromPreviewOnError: !1,
    deleteUrl: "",
    deleteExtraData: {},
    overwriteInitial: !0,
    sanitizeZoomCache: function sanitizeZoomCache(t) {
      var i = e(document.createElement("div")).append(t);
      return i.find("input,select,.file-thumbnail-footer").remove(), i.html();
    },
    previewZoomButtonIcons: {
      prev: '<i class="glyphicon glyphicon-triangle-left"></i>',
      next: '<i class="glyphicon glyphicon-triangle-right"></i>',
      toggleheader: '<i class="glyphicon glyphicon-resize-vertical"></i>',
      fullscreen: '<i class="glyphicon glyphicon-fullscreen"></i>',
      borderless: '<i class="glyphicon glyphicon-resize-full"></i>',
      close: '<i class="glyphicon glyphicon-remove"></i>'
    },
    previewZoomButtonClasses: {
      prev: "btn btn-navigate",
      next: "btn btn-navigate",
      toggleheader: "btn btn-sm btn-kv btn-default btn-outline-secondary",
      fullscreen: "btn btn-sm btn-kv btn-default btn-outline-secondary",
      borderless: "btn btn-sm btn-kv btn-default btn-outline-secondary",
      close: "btn btn-sm btn-kv btn-default btn-outline-secondary"
    },
    previewTemplates: {},
    previewContentTemplates: {},
    preferIconicPreview: !1,
    preferIconicZoomPreview: !1,
    allowedFileTypes: null,
    allowedFileExtensions: null,
    allowedPreviewTypes: void 0,
    allowedPreviewMimeTypes: null,
    allowedPreviewExtensions: null,
    disabledPreviewTypes: void 0,
    disabledPreviewExtensions: ["msi", "exe", "com", "zip", "rar", "app", "vb", "scr"],
    disabledPreviewMimeTypes: null,
    defaultPreviewContent: null,
    customLayoutTags: {},
    customPreviewTags: {},
    previewFileIcon: '<i class="glyphicon glyphicon-file"></i>',
    previewFileIconClass: "file-other-icon",
    previewFileIconSettings: {},
    previewFileExtSettings: {},
    buttonLabelClass: "hidden-xs",
    browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',
    browseClass: "btn btn-primary",
    removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
    removeClass: "btn btn-default btn-secondary",
    cancelIcon: '<i class="glyphicon glyphicon-ban-circle"></i>',
    cancelClass: "btn btn-default btn-secondary",
    pauseIcon: '<i class="glyphicon glyphicon-pause"></i>',
    pauseClass: "btn btn-default btn-secondary",
    uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
    uploadClass: "btn btn-default btn-secondary",
    uploadUrl: null,
    uploadUrlThumb: null,
    uploadAsync: !0,
    uploadParamNames: {
      chunkIndex: "chunkIndex",
      chunkCount: "chunkCount",
      chunkSize: "chunkSize",
      chunkSizeStart: "chunkSizeStart",
      chunksUploaded: "chunksUploaded",
      retryCount: "retryCount",
      fileId: "fileId",
      fileRelativePath: "fileRelativePath",
      fileSize: "fileSize",
      fileName: "fileName"
    },
    maxAjaxThreads: 5,
    processDelay: 100,
    queueDelay: 10,
    progressDelay: 0,
    enableResumableUpload: !1,
    resumableUploadOptions: {
      fallback: null,
      testUrl: null,
      chunkSize: 2048,
      maxThreads: 4,
      maxRetries: 3,
      showErrorLog: !0
    },
    uploadExtraData: {},
    zoomModalHeight: 480,
    minImageWidth: null,
    minImageHeight: null,
    maxImageWidth: null,
    maxImageHeight: null,
    resizeImage: !1,
    resizePreference: "width",
    resizeQuality: .92,
    resizeDefaultImageType: "image/jpeg",
    resizeIfSizeMoreThan: 0,
    minFileSize: 0,
    maxFileSize: 0,
    maxFilePreviewSize: 25600,
    minFileCount: 0,
    maxFileCount: 0,
    validateInitialCount: !1,
    msgValidationErrorClass: "text-danger",
    msgValidationErrorIcon: '<i class="glyphicon glyphicon-exclamation-sign"></i> ',
    msgErrorClass: "file-error-message",
    progressThumbClass: "progress-bar progress-bar-striped active",
    progressClass: "progress-bar bg-success progress-bar-success progress-bar-striped active",
    progressInfoClass: "progress-bar bg-info progress-bar-info progress-bar-striped active",
    progressCompleteClass: "progress-bar bg-success progress-bar-success",
    progressPauseClass: "progress-bar bg-primary progress-bar-primary progress-bar-striped active",
    progressErrorClass: "progress-bar bg-danger progress-bar-danger",
    progressUploadThreshold: 99,
    previewFileType: "image",
    elCaptionContainer: null,
    elCaptionText: null,
    elPreviewContainer: null,
    elPreviewImage: null,
    elPreviewStatus: null,
    elErrorContainer: null,
    errorCloseButton: t.closeButton("kv-error-close"),
    slugCallback: null,
    dropZoneEnabled: !0,
    dropZoneTitleClass: "file-drop-zone-title",
    fileActionSettings: {},
    otherActionButtons: "",
    textEncoding: "UTF-8",
    ajaxSettings: {},
    ajaxDeleteSettings: {},
    showAjaxErrorDetails: !0,
    mergeAjaxCallbacks: !1,
    mergeAjaxDeleteCallbacks: !1,
    retryErrorUploads: !0,
    reversePreviewOrder: !1,
    usePdfRenderer: function usePdfRenderer() {
      var e = !!window.MSInputMethodContext && !!document.documentMode;
      return !!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/i) || e;
    },
    pdfRendererUrl: "",
    pdfRendererTemplate: '<iframe class="kv-preview-data file-preview-pdf" src="{renderer}?file={data}" {style}></iframe>'
  }, e.fn.fileinputLocales.en = {
    fileSingle: "file",
    filePlural: "files",
    browseLabel: "Browse &hellip;",
    removeLabel: "Remove",
    removeTitle: "Clear all unprocessed files",
    cancelLabel: "Cancel",
    cancelTitle: "Abort ongoing upload",
    pauseLabel: "Pause",
    pauseTitle: "Pause ongoing upload",
    uploadLabel: "Upload",
    uploadTitle: "Upload selected files",
    msgNo: "No",
    msgNoFilesSelected: "No files selected",
    msgCancelled: "Cancelled",
    msgPaused: "Paused",
    msgPlaceholder: "Select {files}...",
    msgZoomModalHeading: "Detailed Preview",
    msgFileRequired: "You must select a file to upload.",
    msgSizeTooSmall: 'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',
    msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
    msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.",
    msgFilesTooMany: "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",
    msgFileNotFound: 'File "{name}" not found!',
    msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
    msgFileNotReadable: 'File "{name}" is not readable.',
    msgFilePreviewAborted: 'File preview aborted for "{name}".',
    msgFilePreviewError: 'An error occurred while reading the file "{name}".',
    msgInvalidFileName: 'Invalid or unsupported characters in file name "{name}".',
    msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
    msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
    msgFileTypes: {
      image: "image",
      html: "HTML",
      text: "text",
      video: "video",
      audio: "audio",
      flash: "flash",
      pdf: "PDF",
      object: "object"
    },
    msgUploadAborted: "The file upload was aborted",
    msgUploadThreshold: "Processing...",
    msgUploadBegin: "Initializing...",
    msgUploadEnd: "Done",
    msgUploadResume: "Resuming upload...",
    msgUploadEmpty: "No valid data available for upload.",
    msgUploadError: "Error",
    msgValidationError: "Validation Error",
    msgLoading: "Loading file {index} of {files} &hellip;",
    msgProgress: "Loading file {index} of {files} - {name} - {percent}% completed.",
    msgSelected: "{n} {files} selected",
    msgFoldersNotAllowed: "Drag & drop files only! {n} folder(s) dropped were skipped.",
    msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.',
    msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.',
    msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
    msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.',
    msgImageResizeError: "Could not get the image dimensions to resize.",
    msgImageResizeException: "Error while resizing the image.<pre>{errors}</pre>",
    msgAjaxError: "Something went wrong with the {operation} operation. Please try again later!",
    msgAjaxProgressError: "{operation} failed",
    msgDuplicateFile: 'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
    msgResumableUploadRetriesExceeded: "Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>",
    msgPendingTime: "{time} remaining",
    msgCalculatingTime: "calculating time remaining",
    ajaxOperations: {
      deleteThumb: "file delete",
      uploadThumb: "file upload",
      uploadBatch: "batch file upload",
      uploadExtra: "form data upload"
    },
    dropZoneTitle: "Drag & drop files here &hellip;",
    dropZoneClickTitle: "<br>(or click to select {files})",
    previewZoomButtonTitles: {
      prev: "View previous file",
      next: "View next file",
      toggleheader: "Toggle header",
      fullscreen: "Toggle full screen",
      borderless: "Toggle borderless mode",
      close: "Close detailed preview"
    }
  }, e.fn.fileinput.Constructor = i, e(document).ready(function () {
    var t = e("input.file[type=file]");
    t.length && t.fileinput();
  });
});

/***/ }),

/***/ "./resources/js/jquery.blockUI.js":
/*!****************************************!*\
  !*** ./resources/js/jquery.blockUI.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
;

(function () {
  /*jshint eqeqeq:false curly:false latedef:false */
  "use strict";

  function setup($) {
    $.fn._fadeIn = $.fn.fadeIn;

    var noOp = $.noop || function () {}; // this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
    // confusing userAgent strings on Vista)


    var msie = /MSIE/.test(navigator.userAgent);
    var ie6 = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent);
    var mode = document.documentMode || 0;
    var setExpr = $.isFunction(document.createElement('div').style.setExpression); // global $ methods for blocking/unblocking the entire page

    $.blockUI = function (opts) {
      install(window, opts);
    };

    $.unblockUI = function (opts) {
      remove(window, opts);
    }; // convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)


    $.growlUI = function (title, message, timeout, onClose) {
      var $m = $('<div class="growlUI"></div>');
      if (title) $m.append('<h1>' + title + '</h1>');
      if (message) $m.append('<h2>' + message + '</h2>');
      if (timeout === undefined) timeout = 3000; // Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications

      var callBlock = function callBlock(opts) {
        opts = opts || {};
        $.blockUI({
          message: $m,
          fadeIn: typeof opts.fadeIn !== 'undefined' ? opts.fadeIn : 700,
          fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
          timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
          centerY: false,
          showOverlay: false,
          onUnblock: onClose,
          css: $.blockUI.defaults.growlCSS
        });
      };

      callBlock();
      var nonmousedOpacity = $m.css('opacity');
      $m.mouseover(function () {
        callBlock({
          fadeIn: 0,
          timeout: 30000
        });
        var displayBlock = $('.blockMsg');
        displayBlock.stop(); // cancel fadeout if it has started

        displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
      }).mouseout(function () {
        $('.blockMsg').fadeOut(1000);
      }); // End konapun additions
    }; // plugin method for blocking element content


    $.fn.block = function (opts) {
      if (this[0] === window) {
        $.blockUI(opts);
        return this;
      }

      var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
      this.each(function () {
        var $el = $(this);
        if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked')) return;
        $el.unblock({
          fadeOut: 0
        });
      });
      return this.each(function () {
        if ($.css(this, 'position') == 'static') {
          this.style.position = 'relative';
          $(this).data('blockUI.static', true);
        }

        this.style.zoom = 1; // force 'hasLayout' in ie

        install(this, opts);
      });
    }; // plugin method for unblocking element content


    $.fn.unblock = function (opts) {
      if (this[0] === window) {
        $.unblockUI(opts);
        return this;
      }

      return this.each(function () {
        remove(this, opts);
      });
    };

    $.blockUI.version = 2.70; // 2nd generation blocking at no extra cost!
    // override these in your code to change the default behavior and style

    $.blockUI.defaults = {
      // message displayed when blocking (use null for no message)
      message: '<h1>Please wait...</h1>',
      title: null,
      // title string; only used when theme == true
      draggable: true,
      // only used when theme == true (requires jquery-ui.js to be loaded)
      theme: false,
      // set to true to use with jQuery UI themes
      // styles for the message when blocking; if you wish to disable
      // these and use an external stylesheet then do this in your code:
      // $.blockUI.defaults.css = {};
      css: {
        padding: 0,
        margin: 0,
        width: '30%',
        top: '40%',
        left: '35%',
        textAlign: 'center',
        color: '#000',
        border: '3px solid #aaa',
        backgroundColor: '#fff',
        cursor: 'wait'
      },
      // minimal style set used when themes are used
      themedCSS: {
        width: '30%',
        top: '40%',
        left: '35%'
      },
      // styles for the overlay
      overlayCSS: {
        backgroundColor: '#000',
        opacity: 0.6,
        cursor: 'wait'
      },
      // style to replace wait cursor before unblocking to correct issue
      // of lingering wait cursor
      cursorReset: 'default',
      // styles applied when using $.growlUI
      growlCSS: {
        width: '350px',
        top: '10px',
        left: '',
        right: '10px',
        border: 'none',
        padding: '5px',
        opacity: 0.6,
        cursor: 'default',
        color: '#fff',
        backgroundColor: '#000',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px',
        'border-radius': '10px'
      },
      // IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
      // (hat tip to Jorge H. N. de Vasconcelos)

      /*jshint scripturl:true */
      iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',
      // force usage of iframe in non-IE browsers (handy for blocking applets)
      forceIframe: false,
      // z-index for the blocking overlay
      baseZ: 1000,
      // set these to true to have the message automatically centered
      centerX: true,
      // <-- only effects element blocking (page block controlled via css above)
      centerY: true,
      // allow body element to be stetched in ie6; this makes blocking look better
      // on "short" pages.  disable if you wish to prevent changes to the body height
      allowBodyStretch: true,
      // enable if you want key and mouse events to be disabled for content that is blocked
      bindEvents: true,
      // be default blockUI will supress tab navigation from leaving blocking content
      // (if bindEvents is true)
      constrainTabKey: true,
      // fadeIn time in millis; set to 0 to disable fadeIn on block
      fadeIn: 200,
      // fadeOut time in millis; set to 0 to disable fadeOut on unblock
      fadeOut: 400,
      // time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
      timeout: 0,
      // disable if you don't want to show the overlay
      showOverlay: true,
      // if true, focus will be placed in the first available input field when
      // page blocking
      focusInput: true,
      // elements that can receive focus
      focusableElements: ':input:enabled:visible',
      // suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
      // no longer needed in 2012
      // applyPlatformOpacityRules: true,
      // callback method invoked when fadeIn has completed and blocking message is visible
      onBlock: null,
      // callback method invoked when unblocking has completed; the callback is
      // passed the element that has been unblocked (which is the window object for page
      // blocks) and the options that were passed to the unblock call:
      //	onUnblock(element, options)
      onUnblock: null,
      // callback method invoked when the overlay area is clicked.
      // setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
      onOverlayClick: null,
      // don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
      quirksmodeOffsetHack: 4,
      // class name of the message block
      blockMsgClass: 'blockMsg',
      // if it is already blocked, then ignore it (don't unblock and reblock)
      ignoreIfBlocked: false
    }; // private data and functions follow...

    var pageBlock = null;
    var pageBlockEls = [];

    function install(el, opts) {
      var css, themedCSS;
      var full = el == window;
      var msg = opts && opts.message !== undefined ? opts.message : undefined;
      opts = $.extend({}, $.blockUI.defaults, opts || {});
      if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked')) return;
      opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
      css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
      if (opts.onOverlayClick) opts.overlayCSS.cursor = 'pointer';
      themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
      msg = msg === undefined ? opts.message : msg; // remove the current block (if there is one)

      if (full && pageBlock) remove(window, {
        fadeOut: 0
      }); // if an existing element is being used as the blocking content then we capture
      // its current place in the DOM (and current display style) so we can restore
      // it when we unblock

      if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
        var node = msg.jquery ? msg[0] : msg;
        var data = {};
        $(el).data('blockUI.history', data);
        data.el = node;
        data.parent = node.parentNode;
        data.display = node.style.display;
        data.position = node.style.position;
        if (data.parent) data.parent.removeChild(node);
      }

      $(el).data('blockUI.onUnblock', opts.onUnblock);
      var z = opts.baseZ; // blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
      // layer1 is the iframe layer which is used to supress bleed through of underlying content
      // layer2 is the overlay layer which has opacity and a wait cursor (by default)
      // layer3 is the message content that is displayed while blocking

      var lyr1, lyr2, lyr3, s;
      if (msie || opts.forceIframe) lyr1 = $('<iframe class="blockUI" style="z-index:' + z++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + opts.iframeSrc + '"></iframe>');else lyr1 = $('<div class="blockUI" style="display:none"></div>');
      if (opts.theme) lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + z++ + ';display:none"></div>');else lyr2 = $('<div class="blockUI blockOverlay" style="z-index:' + z++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

      if (opts.theme && full) {
        s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (z + 10) + ';display:none;position:fixed">';

        if (opts.title) {
          s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (opts.title || '&nbsp;') + '</div>';
        }

        s += '<div class="ui-widget-content ui-dialog-content"></div>';
        s += '</div>';
      } else if (opts.theme) {
        s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (z + 10) + ';display:none;position:absolute">';

        if (opts.title) {
          s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (opts.title || '&nbsp;') + '</div>';
        }

        s += '<div class="ui-widget-content ui-dialog-content"></div>';
        s += '</div>';
      } else if (full) {
        s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:' + (z + 10) + ';display:none;position:fixed"></div>';
      } else {
        s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:' + (z + 10) + ';display:none;position:absolute"></div>';
      }

      lyr3 = $(s); // if we have a message, style it

      if (msg) {
        if (opts.theme) {
          lyr3.css(themedCSS);
          lyr3.addClass('ui-widget-content');
        } else lyr3.css(css);
      } // style the overlay


      if (!opts.theme
      /*&& (!opts.applyPlatformOpacityRules)*/
      ) lyr2.css(opts.overlayCSS);
      lyr2.css('position', full ? 'fixed' : 'absolute'); // make iframe layer transparent in IE

      if (msie || opts.forceIframe) lyr1.css('opacity', 0.0); //$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);

      var layers = [lyr1, lyr2, lyr3],
          $par = full ? $('body') : $(el);
      $.each(layers, function () {
        this.appendTo($par);
      });

      if (opts.theme && opts.draggable && $.fn.draggable) {
        lyr3.draggable({
          handle: '.ui-dialog-titlebar',
          cancel: 'li'
        });
      } // ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)


      var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);

      if (ie6 || expr) {
        // give body 100% height
        if (full && opts.allowBodyStretch && $.support.boxModel) $('html,body').css('height', '100%'); // fix ie6 issue when blocked element has a border width

        if ((ie6 || !$.support.boxModel) && !full) {
          var t = sz(el, 'borderTopWidth'),
              l = sz(el, 'borderLeftWidth');
          var fixT = t ? '(0 - ' + t + ')' : 0;
          var fixL = l ? '(0 - ' + l + ')' : 0;
        } // simulate fixed position


        $.each(layers, function (i, o) {
          var s = o[0].style;
          s.position = 'absolute';

          if (i < 2) {
            if (full) s.setExpression('height', 'Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:' + opts.quirksmodeOffsetHack + ') + "px"');else s.setExpression('height', 'this.parentNode.offsetHeight + "px"');
            if (full) s.setExpression('width', 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');else s.setExpression('width', 'this.parentNode.offsetWidth + "px"');
            if (fixL) s.setExpression('left', fixL);
            if (fixT) s.setExpression('top', fixT);
          } else if (opts.centerY) {
            if (full) s.setExpression('top', '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
            s.marginTop = 0;
          } else if (!opts.centerY && full) {
            var top = opts.css && opts.css.top ? parseInt(opts.css.top, 10) : 0;
            var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + ' + top + ') + "px"';
            s.setExpression('top', expression);
          }
        });
      } // show the message


      if (msg) {
        if (opts.theme) lyr3.find('.ui-widget-content').append(msg);else lyr3.append(msg);
        if (msg.jquery || msg.nodeType) $(msg).show();
      }

      if ((msie || opts.forceIframe) && opts.showOverlay) lyr1.show(); // opacity is zero

      if (opts.fadeIn) {
        var cb = opts.onBlock ? opts.onBlock : noOp;
        var cb1 = opts.showOverlay && !msg ? cb : noOp;
        var cb2 = msg ? cb : noOp;
        if (opts.showOverlay) lyr2._fadeIn(opts.fadeIn, cb1);
        if (msg) lyr3._fadeIn(opts.fadeIn, cb2);
      } else {
        if (opts.showOverlay) lyr2.show();
        if (msg) lyr3.show();
        if (opts.onBlock) opts.onBlock.bind(lyr3)();
      } // bind key and mouse events


      bind(1, el, opts);

      if (full) {
        pageBlock = lyr3[0];
        pageBlockEls = $(opts.focusableElements, pageBlock);
        if (opts.focusInput) setTimeout(focus, 20);
      } else center(lyr3[0], opts.centerX, opts.centerY);

      if (opts.timeout) {
        // auto-unblock
        var to = setTimeout(function () {
          if (full) $.unblockUI(opts);else $(el).unblock(opts);
        }, opts.timeout);
        $(el).data('blockUI.timeout', to);
      }
    } // remove the block


    function remove(el, opts) {
      var count;
      var full = el == window;
      var $el = $(el);
      var data = $el.data('blockUI.history');
      var to = $el.data('blockUI.timeout');

      if (to) {
        clearTimeout(to);
        $el.removeData('blockUI.timeout');
      }

      opts = $.extend({}, $.blockUI.defaults, opts || {});
      bind(0, el, opts); // unbind events

      if (opts.onUnblock === null) {
        opts.onUnblock = $el.data('blockUI.onUnblock');
        $el.removeData('blockUI.onUnblock');
      }

      var els;
      if (full) // crazy selector to handle odd field errors in ie6/7
        els = $('body').children().filter('.blockUI').add('body > .blockUI');else els = $el.find('>.blockUI'); // fix cursor issue

      if (opts.cursorReset) {
        if (els.length > 1) els[1].style.cursor = opts.cursorReset;
        if (els.length > 2) els[2].style.cursor = opts.cursorReset;
      }

      if (full) pageBlock = pageBlockEls = null;

      if (opts.fadeOut) {
        count = els.length;
        els.stop().fadeOut(opts.fadeOut, function () {
          if (--count === 0) reset(els, data, opts, el);
        });
      } else reset(els, data, opts, el);
    } // move blocking element back into the DOM where it started


    function reset(els, data, opts, el) {
      var $el = $(el);
      if ($el.data('blockUI.isBlocked')) return;
      els.each(function (i, o) {
        // remove via DOM calls so we don't lose event handlers
        if (this.parentNode) this.parentNode.removeChild(this);
      });

      if (data && data.el) {
        data.el.style.display = data.display;
        data.el.style.position = data.position;
        data.el.style.cursor = 'default'; // #59

        if (data.parent) data.parent.appendChild(data.el);
        $el.removeData('blockUI.history');
      }

      if ($el.data('blockUI.static')) {
        $el.css('position', 'static'); // #22
      }

      if (typeof opts.onUnblock == 'function') opts.onUnblock(el, opts); // fix issue in Safari 6 where block artifacts remain until reflow

      var body = $(document.body),
          w = body.width(),
          cssW = body[0].style.width;
      body.width(w - 1).width(w);
      body[0].style.width = cssW;
    } // bind/unbind the handler


    function bind(b, el, opts) {
      var full = el == window,
          $el = $(el); // don't bother unbinding if there is nothing to unbind

      if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked'))) return;
      $el.data('blockUI.isBlocked', b); // don't bind events when overlay is not in use or if bindEvents is false

      if (!full || !opts.bindEvents || b && !opts.showOverlay) return; // bind anchors and inputs for mouse and key events

      var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
      if (b) $(document).bind(events, opts, handler);else $(document).unbind(events, handler); // former impl...
      //		var $e = $('a,:input');
      //		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
    } // event handler to suppress keyboard/mouse events when blocking


    function handler(e) {
      // allow tab navigation (conditionally)
      if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
        if (pageBlock && e.data.constrainTabKey) {
          var els = pageBlockEls;
          var fwd = !e.shiftKey && e.target === els[els.length - 1];
          var back = e.shiftKey && e.target === els[0];

          if (fwd || back) {
            setTimeout(function () {
              focus(back);
            }, 10);
            return false;
          }
        }
      }

      var opts = e.data;
      var target = $(e.target);
      if (target.hasClass('blockOverlay') && opts.onOverlayClick) opts.onOverlayClick(e); // allow events within the message content

      if (target.parents('div.' + opts.blockMsgClass).length > 0) return true; // allow events for content that is not being blocked

      return target.parents().children().filter('div.blockUI').length === 0;
    }

    function focus(back) {
      if (!pageBlockEls) return;
      var e = pageBlockEls[back === true ? pageBlockEls.length - 1 : 0];
      if (e) e.focus();
    }

    function center(el, x, y) {
      var p = el.parentNode,
          s = el.style;
      var l = (p.offsetWidth - el.offsetWidth) / 2 - sz(p, 'borderLeftWidth');
      var t = (p.offsetHeight - el.offsetHeight) / 2 - sz(p, 'borderTopWidth');
      if (x) s.left = l > 0 ? l + 'px' : '0';
      if (y) s.top = t > 0 ? t + 'px' : '0';
    }

    function sz(el, p) {
      return parseInt($.css(el, p), 10) || 0;
    }
  }
  /*global define:true */


  if ( true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (setup),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    setup(jQuery);
  }
})();

/***/ }),

/***/ "./resources/js/jquery.js":
/*!********************************!*\
  !*** ./resources/js/jquery.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license

*/
(function (e, t) {
  var n,
      r,
      i = _typeof(t),
      o = e.document,
      a = e.location,
      s = e.jQuery,
      u = e.$,
      l = {},
      c = [],
      p = "1.9.1",
      f = c.concat,
      d = c.push,
      h = c.slice,
      g = c.indexOf,
      m = l.toString,
      y = l.hasOwnProperty,
      v = p.trim,
      b = function b(e, t) {
    return new b.fn.init(e, t, r);
  },
      x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      w = /\S+/g,
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      k = /^[\],:{}\s]*$/,
      E = /(?:^|:|,)(?:\s*\[)+/g,
      S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      j = /^-ms-/,
      D = /-([\da-z])/gi,
      L = function L(e, t) {
    return t.toUpperCase();
  },
      H = function H(e) {
    (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready());
  },
      q = function q() {
    o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H));
  };

  b.fn = b.prototype = {
    jquery: p,
    constructor: b,
    init: function init(e, n, r) {
      var i, a;
      if (!e) return this;

      if ("string" == typeof e) {
        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);

        if (i[1]) {
          if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n)) for (i in n) {
            b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          }
          return this;
        }

        if (a = o.getElementById(i[2]), a && a.parentNode) {
          if (a.id !== i[2]) return r.find(e);
          this.length = 1, this[0] = a;
        }

        return this.context = o, this.selector = e, this;
      }

      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this));
    },
    selector: "",
    length: 0,
    size: function size() {
      return this.length;
    },
    toArray: function toArray() {
      return h.call(this);
    },
    get: function get(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = b.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function each(e, t) {
      return b.each(this, e, t);
    },
    ready: function ready(e) {
      return b.ready.promise().done(e), this;
    },
    slice: function slice() {
      return this.pushStack(h.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function map(e) {
      return this.pushStack(b.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: d,
    sort: [].sort,
    splice: [].splice
  }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () {
    var e,
        n,
        r,
        i,
        o,
        a,
        s = arguments[0] || {},
        u = 1,
        l = arguments.length,
        c = !1;

    for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == _typeof(s) || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) {
      if (null != (o = arguments[u])) for (i in o) {
        e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
      }
    }

    return s;
  }, b.extend({
    noConflict: function noConflict(t) {
      return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(e) {
      e ? b.readyWait++ : b.ready(!0);
    },
    ready: function ready(e) {
      if (e === !0 ? ! --b.readyWait : !b.isReady) {
        if (!o.body) return setTimeout(b.ready);
        b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"));
      }
    },
    isFunction: function isFunction(e) {
      return "function" === b.type(e);
    },
    isArray: Array.isArray || function (e) {
      return "array" === b.type(e);
    },
    isWindow: function isWindow(e) {
      return null != e && e == e.window;
    },
    isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function type(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? l[m.call(e)] || "object" : _typeof(e);
    },
    isPlainObject: function isPlainObject(e) {
      if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;

      try {
        if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (n) {
        return !1;
      }

      var r;

      for (r in e) {
        ;
      }

      return r === t || y.call(e, r);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    error: function error(e) {
      throw Error(e);
    },
    parseHTML: function parseHTML(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || o;
      var r = C.exec(e),
          i = !n && [];
      return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes));
    },
    parseJSON: function parseJSON(n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t);
    },
    parseXML: function parseXML(n) {
      var r, i;
      if (!n || "string" != typeof n) return null;

      try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
      } catch (o) {
        r = t;
      }

      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r;
    },
    noop: function noop() {},
    globalEval: function globalEval(t) {
      t && b.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function camelCase(e) {
      return e.replace(j, "ms-").replace(D, L);
    },
    nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function each(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e);

      if (n) {
        if (a) {
          for (; o > i; i++) {
            if (r = t.apply(e[i], n), r === !1) break;
          }
        } else for (i in e) {
          if (r = t.apply(e[i], n), r === !1) break;
        }
      } else if (a) {
        for (; o > i; i++) {
          if (r = t.call(e[i], i, e[i]), r === !1) break;
        }
      } else for (i in e) {
        if (r = t.call(e[i], i, e[i]), r === !1) break;
      }

      return e;
    },
    trim: v && !v.call("\uFEFF\xA0") ? function (e) {
      return null == e ? "" : v.call(e);
    } : function (e) {
      return null == e ? "" : (e + "").replace(T, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      var r;

      if (t) {
        if (g) return g.call(t, e, n);

        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
          if (n in t && t[n] === e) return n;
        }
      }

      return -1;
    },
    merge: function merge(e, n) {
      var r = n.length,
          i = e.length,
          o = 0;
      if ("number" == typeof r) for (; r > o; o++) {
        e[i++] = n[o];
      } else while (n[o] !== t) {
        e[i++] = n[o++];
      }
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      var r,
          i = [],
          o = 0,
          a = e.length;

      for (n = !!n; a > o; o++) {
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e),
          s = [];
      if (a) for (; o > i; i++) {
        r = t(e[i], i, n), null != r && (s[s.length] = r);
      } else for (i in e) {
        r = t(e[i], i, n), null != r && (s[s.length] = r);
      }
      return f.apply([], s);
    },
    guid: 1,
    proxy: function proxy(e, n) {
      var r, i, o;
      return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function i() {
        return e.apply(n || this, r.concat(h.call(arguments)));
      }, i.guid = e.guid = e.guid || b.guid++, i) : t;
    },
    access: function access(e, n, r, i, o, a, s) {
      var u = 0,
          l = e.length,
          c = null == r;

      if ("object" === b.type(r)) {
        o = !0;

        for (u in r) {
          b.access(e, n, u, r[u], !0, a, s);
        }
      } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function n(e, t, _n2) {
        return c.call(b(e), _n2);
      })), n)) for (; l > u; u++) {
        n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
      }

      return o ? e : c ? n.call(e) : l ? n(e[0], r) : a;
    },
    now: function now() {
      return new Date().getTime();
    }
  }), b.ready.promise = function (t) {
    if (!n) if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);else {
      o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
      var r = !1;

      try {
        r = null == e.frameElement && o.documentElement;
      } catch (i) {}

      r && r.doScroll && function a() {
        if (!b.isReady) {
          try {
            r.doScroll("left");
          } catch (e) {
            return setTimeout(a, 50);
          }

          q(), b.ready();
        }
      }();
    }
    return n.promise(t);
  }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  function M(e) {
    var t = e.length,
        n = b.type(e);
    return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  r = b(o);
  var _ = {};

  function F(e) {
    var t = _[e] = {};
    return b.each(e.match(w) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  b.Callbacks = function (e) {
    e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);

    var n,
        r,
        i,
        o,
        a,
        s,
        u = [],
        l = !e.once && [],
        c = function c(t) {
      for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) {
        if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          r = !1;
          break;
        }
      }

      n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable());
    },
        p = {
      add: function add() {
        if (u) {
          var t = u.length;
          (function i(t) {
            b.each(t, function (t, n) {
              var r = b.type(n);
              "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n);
            });
          })(arguments), n ? o = u.length : r && (s = t, c(r));
        }

        return this;
      },
      remove: function remove() {
        return u && b.each(arguments, function (e, t) {
          var r;

          while ((r = b.inArray(t, u, r)) > -1) {
            u.splice(r, 1), n && (o >= r && o--, a >= r && a--);
          }
        }), this;
      },
      has: function has(e) {
        return e ? b.inArray(e, u) > -1 : !(!u || !u.length);
      },
      empty: function empty() {
        return u = [], this;
      },
      disable: function disable() {
        return u = l = r = t, this;
      },
      disabled: function disabled() {
        return !u;
      },
      lock: function lock() {
        return l = t, r || p.disable(), this;
      },
      locked: function locked() {
        return !l;
      },
      fireWith: function fireWith(e, t) {
        return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this;
      },
      fire: function fire() {
        return p.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!i;
      }
    };

    return p;
  }, b.extend({
    Deferred: function Deferred(e) {
      var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]],
          n = "pending",
          r = {
        state: function state() {
          return n;
        },
        always: function always() {
          return i.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var e = arguments;
          return b.Deferred(function (n) {
            b.each(t, function (t, o) {
              var a = o[0],
                  s = b.isFunction(e[t]) && e[t];
              i[o[1]](function () {
                var e = s && s.apply(this, arguments);
                e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? b.extend(e, r) : r;
        }
      },
          i = {};
      return r.pipe = r.then, b.each(t, function (e, o) {
        var a = o[2],
            s = o[3];
        r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function when(e) {
      var t = 0,
          n = h.call(arguments),
          r = n.length,
          i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
          o = 1 === i ? e : b.Deferred(),
          a = function a(e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
        };
      },
          s,
          u,
          l;

      if (r > 1) for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) {
        n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
      }
      return i || o.resolveWith(l, n), o.promise();
    }
  }), b.support = function () {
    var t,
        n,
        r,
        a,
        s,
        u,
        l,
        c,
        p,
        f,
        d = o.createElement("div");
    if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
    s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
      getSetAttribute: "t" !== d.className,
      leadingWhitespace: 3 === d.firstChild.nodeType,
      tbody: !d.getElementsByTagName("tbody").length,
      htmlSerialize: !!d.getElementsByTagName("link").length,
      style: /top/.test(r.getAttribute("style")),
      hrefNormalized: "/a" === r.getAttribute("href"),
      opacity: /^0.5/.test(r.style.opacity),
      cssFloat: !!r.style.cssFloat,
      checkOn: !!a.value,
      optSelected: l.selected,
      enctype: !!o.createElement("form").enctype,
      html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
      boxModel: "CSS1Compat" === o.compatMode,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;

    try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = !1;
    }

    a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
      t.noCloneEvent = !1;
    }), d.cloneNode(!0).click());

    for (f in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
    }

    return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function () {
      var n,
          r,
          a,
          s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
          u = o.getElementsByTagName("body")[0];
      u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
        width: "4px"
      }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), _typeof(d.style.zoom) !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null);
    }), n = s = u = l = r = a = null, t;
  }();
  var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      B = /([A-Z])/g;

  function P(e, n, r, i) {
    if (b.acceptData(e)) {
      var o,
          a,
          s = b.expando,
          u = "string" == typeof n,
          l = e.nodeType,
          p = l ? b.cache : e,
          f = l ? e[s] : e[s] && s;
      if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == _typeof(n) || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a;
    }
  }

  function R(e, t, n) {
    if (b.acceptData(e)) {
      var r,
          i,
          o,
          a = e.nodeType,
          s = a ? b.cache : e,
          u = a ? e[b.expando] : b.expando;

      if (s[u]) {
        if (t && (o = n ? s[u] : s[u].data)) {
          b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));

          for (r = 0, i = t.length; i > r; r++) {
            delete o[t[r]];
          }

          if (!(n ? $ : b.isEmptyObject)(o)) return;
        }

        (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null);
      }
    }
  }

  b.extend({
    cache: {},
    expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function hasData(e) {
      return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e);
    },
    data: function data(e, t, n) {
      return P(e, t, n);
    },
    removeData: function removeData(e, t) {
      return R(e, t);
    },
    _data: function _data(e, t, n) {
      return P(e, t, n, !0);
    },
    _removeData: function _removeData(e, t) {
      return R(e, t, !0);
    },
    acceptData: function acceptData(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t;
    }
  }), b.fn.extend({
    data: function data(e, n) {
      var r,
          i,
          o = this[0],
          a = 0,
          s = null;

      if (e === t) {
        if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
          for (r = o.attributes; r.length > a; a++) {
            i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
          }

          b._data(o, "parsedAttrs", !0);
        }

        return s;
      }

      return "object" == _typeof(e) ? this.each(function () {
        b.data(this, e);
      }) : b.access(this, function (n) {
        return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () {
          b.data(this, e, n);
        }), t);
      }, null, n, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        b.removeData(this, e);
      });
    }
  });

  function W(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(B, "-$1").toLowerCase();

      if (r = e.getAttribute(i), "string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r;
        } catch (o) {}

        b.data(e, n, r);
      } else r = t;
    }

    return r;
  }

  function $(e) {
    var t;

    for (t in e) {
      if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    }

    return !0;
  }

  b.extend({
    queue: function queue(e, n, r) {
      var i;
      return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t;
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = b.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = b._queueHooks(e, t),
          a = function a() {
        b.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return b._data(e, n) || b._data(e, n, {
        empty: b.Callbacks("once memory").add(function () {
          b._removeData(e, t + "queue"), b._removeData(e, n);
        })
      });
    }
  }), b.fn.extend({
    queue: function queue(e, n) {
      var r = 2;
      return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = b.queue(this, e, n);
        b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        b.dequeue(this, e);
      });
    },
    delay: function delay(e, t) {
      return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);

        n.stop = function () {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, n) {
      var r,
          i = 1,
          o = b.Deferred(),
          a = this,
          s = this.length,
          u = function u() {
        --i || o.resolveWith(a, [a]);
      };

      "string" != typeof e && (n = e, e = t), e = e || "fx";

      while (s--) {
        r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
      }

      return u(), o.promise(n);
    }
  });
  var I,
      z,
      X = /[\t\r\n]/g,
      U = /\r/g,
      V = /^(?:input|select|textarea|button|object)$/i,
      Y = /^(?:a|area)$/i,
      J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
      G = /^(?:checked|selected)$/i,
      Q = b.support.getSetAttribute,
      K = b.support.input;
  b.fn.extend({
    attr: function attr(e, t) {
      return b.access(this, b.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        b.removeAttr(this, e);
      });
    },
    prop: function prop(e, t) {
      return b.access(this, b.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return e = b.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      });
    },
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          u = "string" == typeof e && e;
      if (b.isFunction(e)) return this.each(function (t) {
        b(this).addClass(e.call(this, t, this.className));
      });
      if (u) for (t = (e || "").match(w) || []; s > a; a++) {
        if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
          o = 0;

          while (i = t[o++]) {
            0 > r.indexOf(" " + i + " ") && (r += i + " ");
          }

          n.className = b.trim(r);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          u = 0 === arguments.length || "string" == typeof e && e;
      if (b.isFunction(e)) return this.each(function (t) {
        b(this).removeClass(e.call(this, t, this.className));
      });
      if (u) for (t = (e || "").match(w) || []; s > a; a++) {
        if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
          o = 0;

          while (i = t[o++]) {
            while (r.indexOf(" " + i + " ") >= 0) {
              r = r.replace(" " + i + " ", " ");
            }
          }

          n.className = e ? b.trim(r) : "";
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          r = "boolean" == typeof t;

      return b.isFunction(e) ? this.each(function (n) {
        b(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) {
          var o,
              a = 0,
              s = b(this),
              u = t,
              l = e.match(w) || [];

          while (o = l[a++]) {
            u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o);
          }
        } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "");
      });
    },
    hasClass: function hasClass(e) {
      var t = " " + e + " ",
          n = 0,
          r = this.length;

      for (; r > n; n++) {
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
      }

      return !1;
    },
    val: function val(e) {
      var n,
          r,
          i,
          o = this[0];
      {
        if (arguments.length) return i = b.isFunction(e), this.each(function (n) {
          var o,
              a = b(this);
          1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) {
            return null == e ? "" : e + "";
          })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
        });
        if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n);
      }
    }
  }), b.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text;
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = "select-one" === e.type || 0 > i,
              a = o ? null : [],
              s = o ? i + 1 : r.length,
              u = 0 > i ? s : o ? i : 0;

          for (; s > u; u++) {
            if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
              if (t = b(n).val(), o) return t;
              a.push(t);
            }
          }

          return a;
        },
        set: function set(e, t) {
          var n = b.makeArray(t);
          return b(e).find("option").each(function () {
            this.selected = b.inArray(b(this).val(), n) >= 0;
          }), n.length || (e.selectedIndex = -1), n;
        }
      }
    },
    attr: function attr(e, n, r) {
      var o,
          a,
          s,
          u = e.nodeType;
      if (e && 3 !== u && 8 !== u && 2 !== u) return _typeof(e.getAttribute) === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (_typeof(e.getAttribute) !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t));
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(w);
      if (o && 1 === e.nodeType) while (n = o[i++]) {
        r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r);
      }
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function prop(e, n, r) {
      var i,
          o,
          a,
          s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var n = e.getAttributeNode("tabindex");
          return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t;
        }
      }
    }
  }), z = {
    get: function get(e, n) {
      var r = b.prop(e, n),
          i = "boolean" == typeof r && e.getAttribute(n),
          o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
      return o && o.value !== !1 ? n.toLowerCase() : t;
    },
    set: function set(e, t, n) {
      return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n;
    }
  }, K && Q || (b.attrHooks.value = {
    get: function get(e, n) {
      var r = e.getAttributeNode(n);
      return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t;
    },
    set: function set(e, n, r) {
      return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r);
    }
  }), Q || (I = b.valHooks.button = {
    get: function get(e, n) {
      var r = e.getAttributeNode(n);
      return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t;
    },
    set: function set(e, n, r) {
      var i = e.getAttributeNode(r);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t;
    }
  }, b.attrHooks.contenteditable = {
    get: I.get,
    set: function set(e, t, n) {
      I.set(e, "" === t ? !1 : t, n);
    }
  }, b.each(["width", "height"], function (e, n) {
    b.attrHooks[n] = b.extend(b.attrHooks[n], {
      set: function set(e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t;
      }
    });
  })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) {
    b.attrHooks[n] = b.extend(b.attrHooks[n], {
      get: function get(e) {
        var r = e.getAttribute(n, 2);
        return null == r ? t : r;
      }
    });
  }), b.each(["href", "src"], function (e, t) {
    b.propHooks[t] = {
      get: function get(e) {
        return e.getAttribute(t, 4);
      }
    };
  })), b.support.style || (b.attrHooks.style = {
    get: function get(e) {
      return e.style.cssText || t;
    },
    set: function set(e, t) {
      return e.style.cssText = t + "";
    }
  }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
    get: function get(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () {
    b.valHooks[this] = {
      get: function get(e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      }
    };
  }), b.each(["radio", "checkbox"], function () {
    b.valHooks[this] = b.extend(b.valHooks[this], {
      set: function set(e, n) {
        return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t;
      }
    });
  });
  var Z = /^(?:input|select|textarea)$/i,
      et = /^key/,
      tt = /^(?:mouse|contextmenu)|click/,
      nt = /^(?:focusinfocus|focusoutblur)$/,
      rt = /^([^.]*)(?:\.(.+)|)$/;

  function it() {
    return !0;
  }

  function ot() {
    return !1;
  }

  b.event = {
    global: {},
    add: function add(e, n, r, o, a) {
      var s,
          u,
          l,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          y,
          v = b._data(e);

      if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
          return _typeof(b) === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments);
        }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;

        while (l--) {
          s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
            type: g,
            origType: y,
            data: o,
            handler: r,
            guid: r.guid,
            selector: a,
            needsContext: a && b.expr.match.needsContext.test(a),
            namespace: m.join(".")
          }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
        }

        e = null;
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          p,
          f,
          d,
          h,
          g,
          m = b.hasData(e) && b._data(e);

      if (m && (c = m.events)) {
        t = (t || "").match(w) || [""], l = t.length;

        while (l--) {
          if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;

            while (o--) {
              a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
            }

            u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d]);
          } else for (d in c) {
            b.event.remove(e, d + t[l], n, r, !0);
          }
        }

        b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"));
      }
    },
    trigger: function trigger(n, r, i, a) {
      var s,
          u,
          l,
          c,
          p,
          f,
          d,
          h = [i || o],
          g = y.call(n, "type") ? n.type : n,
          m = y.call(n, "namespace") ? n.namespace.split(".") : [];

      if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == _typeof(n) && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!a && !p.noBubble && !b.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) {
            h.push(l), f = l;
          }

          f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e);
        }

        d = 0;

        while ((l = h[d++]) && !n.isPropagationStopped()) {
          n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
        }

        if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
          f = i[u], f && (i[u] = null), b.event.triggered = g;

          try {
            i[g]();
          } catch (v) {}

          b.event.triggered = t, f && (i[u] = f);
        }

        return n.result;
      }
    },
    dispatch: function dispatch(e) {
      e = b.event.fix(e);
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = h.call(arguments),
          l = (b._data(this, "events") || {})[e.type] || [],
          c = b.event.special[e.type] || {};

      if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = b.event.handlers.call(this, e, l), n = 0;

        while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;

          while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function handlers(e, n) {
      var r,
          i,
          o,
          a,
          s = [],
          u = n.delegateCount,
          l = e.target;
      if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) {
        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
          for (o = [], a = 0; u > a; a++) {
            i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return n.length > u && s.push({
        elem: this,
        handlers: n.slice(u)
      }), s;
    },
    fix: function fix(e) {
      if (e[b.expando]) return e;
      var t,
          n,
          r,
          i = e.type,
          a = e,
          s = this.fixHooks[i];
      s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;

      while (t--) {
        n = r[t], e[n] = a[n];
      }

      return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(e, n) {
        var r,
            i,
            a,
            s = n.button,
            u = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        trigger: function trigger() {
          return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
        }
      },
      focus: {
        trigger: function trigger() {
          if (this !== o.activeElement && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === o.activeElement && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: "focusout"
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function simulate(e, t, n, r) {
      var i = b.extend(new b.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, b.removeEvent = o.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = "on" + t;
    e.detachEvent && (_typeof(e[r]) === i && (e[r] = null), e.detachEvent(r, n));
  }, b.Event = function (e, n) {
    return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n);
  }, b.Event.prototype = {
    isDefaultPrevented: ot,
    isPropagationStopped: ot,
    isImmediatePropagationStopped: ot,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = it, this.stopPropagation();
    }
  }, b.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (e, t) {
    b.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), b.support.submitBubbles || (b.event.special.submit = {
    setup: function setup() {
      return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target,
            r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
        r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0;
        }), b._data(r, "submitBubbles", !0));
      }), t);
    },
    postDispatch: function postDispatch(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0));
    },
    teardown: function teardown() {
      return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t);
    }
  }), b.support.changeBubbles || (b.event.special.change = {
    setup: function setup() {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
      }), b.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0);
      })), !1) : (b.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;
        Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0);
        }), b._data(t, "changeBubbles", !0));
      }), t);
    },
    handle: function handle(e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    },
    teardown: function teardown() {
      return b.event.remove(this, "._change"), !Z.test(this.nodeName);
    }
  }), b.support.focusinBubbles || b.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = 0,
        r = function r(e) {
      b.event.simulate(t, e.target, b.event.fix(e), !0);
    };

    b.event.special[t] = {
      setup: function setup() {
        0 === n++ && o.addEventListener(e, r, !0);
      },
      teardown: function teardown() {
        0 === --n && o.removeEventListener(e, r, !0);
      }
    };
  }), b.fn.extend({
    on: function on(e, n, r, i, o) {
      var a, s;

      if ("object" == _typeof(e)) {
        "string" != typeof n && (r = r || n, n = t);

        for (a in e) {
          this.on(a, n, r, e[a], o);
        }

        return this;
      }

      if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;else if (!i) return this;
      return 1 === o && (s = i, i = function i(e) {
        return b().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function () {
        b.event.add(this, e, i, r, n);
      });
    },
    one: function one(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function off(e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

      if ("object" == _typeof(e)) {
        for (o in e) {
          this.off(o, n, e[o]);
        }

        return this;
      }

      return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
        b.event.remove(this, e, r, n);
      });
    },
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    trigger: function trigger(e, t) {
      return this.each(function () {
        b.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, n) {
      var r = this[0];
      return r ? b.event.trigger(e, n, r, !0) : t;
    }
  }), function (e, t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v,
        x = "sizzle" + -new Date(),
        w = e.document,
        T = {},
        N = 0,
        C = 0,
        k = it(),
        E = it(),
        S = it(),
        A = _typeof(t),
        j = 1 << 31,
        D = [],
        L = D.pop,
        H = D.push,
        q = D.slice,
        M = D.indexOf || function (e) {
      var t = 0,
          n = this.length;

      for (; n > t; t++) {
        if (this[t] === e) return t;
      }

      return -1;
    },
        _ = "[\\x20\\t\\r\\n\\f]",
        F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        O = F.replace("w", "w#"),
        B = "([*^$|!~]?=)",
        P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
        R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
        W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
        $ = RegExp("^" + _ + "*," + _ + "*"),
        I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
        z = RegExp(R),
        X = RegExp("^" + O + "$"),
        U = {
      ID: RegExp("^#(" + F + ")"),
      CLASS: RegExp("^\\.(" + F + ")"),
      NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
      TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
      ATTR: RegExp("^" + P),
      PSEUDO: RegExp("^" + R),
      CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
      needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
    },
        V = /[\x20\t\r\n\f]*[+~]/,
        Y = /^[^{]+\{\s*\[native code/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        G = /^(?:input|select|textarea|button)$/i,
        Q = /^h\d$/i,
        K = /'|\\/g,
        Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        tt = function tt(e, t) {
      var n = "0x" + t - 65536;
      return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
    };

    try {
      q.call(w.documentElement.childNodes, 0)[0].nodeType;
    } catch (nt) {
      q = function q(e) {
        var t,
            n = [];

        while (t = this[e++]) {
          n.push(t);
        }

        return n;
      };
    }

    function rt(e) {
      return Y.test(e + "");
    }

    function it() {
      var _e,
          t = [];

      return _e = function e(n, r) {
        return t.push(n += " ") > i.cacheLength && delete _e[t.shift()], _e[n] = r;
      };
    }

    function ot(e) {
      return e[x] = !0, e;
    }

    function at(e) {
      var t = p.createElement("div");

      try {
        return e(t);
      } catch (n) {
        return !1;
      } finally {
        t = null;
      }
    }

    function st(e, t, n, r) {
      var i, o, a, s, u, l, f, g, m, v;
      if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (s = t.nodeType) && 9 !== s) return [];

      if (!d && !r) {
        if (i = J.exec(e)) if (a = i[1]) {
          if (9 === s) {
            if (o = t.getElementById(a), !o || !o.parentNode) return n;
            if (o.id === a) return n.push(o), n;
          } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n;
        } else {
          if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
          if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n;
        }

        if (T.qsa && !h.test(e)) {
          if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
            l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;

            while (u--) {
              l[u] = g + dt(l[u]);
            }

            m = V.test(e) && t.parentNode || t, v = l.join(",");
          }

          if (v) try {
            return H.apply(n, q.call(m.querySelectorAll(v), 0)), n;
          } catch (b) {} finally {
            f || t.removeAttribute("id");
          }
        }
      }

      return wt(e.replace(W, "$1"), t, n, r);
    }

    a = st.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1;
    }, c = st.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : w;
      return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), T.attributes = at(function (e) {
        e.innerHTML = "<select></select>";

        var t = _typeof(e.lastChild.getAttribute("multiple"));

        return "boolean" !== t && "string" !== t;
      }), T.getByClassName = at(function (e) {
        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1;
      }), T.getByName = at(function (e) {
        e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
        var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
        return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t;
      }), i.attrHandle = at(function (e) {
        return e.innerHTML = "<a href='#'></a>", e.firstChild && _typeof(e.firstChild.getAttribute) !== A && "#" === e.firstChild.getAttribute("href");
      }) ? {} : {
        href: function href(e) {
          return e.getAttribute("href", 2);
        },
        type: function type(e) {
          return e.getAttribute("type");
        }
      }, T.getIdNotName ? (i.find.ID = function (e, t) {
        if (_typeof(t.getElementById) !== A && !d) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : [];
        }
      }, i.filter.ID = function (e) {
        var t = e.replace(et, tt);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (i.find.ID = function (e, n) {
        if (_typeof(n.getElementById) !== A && !d) {
          var r = n.getElementById(e);
          return r ? r.id === e || _typeof(r.getAttributeNode) !== A && r.getAttributeNode("id").value === e ? [r] : t : [];
        }
      }, i.filter.ID = function (e) {
        var t = e.replace(et, tt);
        return function (e) {
          var n = _typeof(e.getAttributeNode) !== A && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), i.find.TAG = T.tagNameNoComments ? function (e, n) {
        return _typeof(n.getElementsByTagName) !== A ? n.getElementsByTagName(e) : t;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, i.find.NAME = T.getByName && function (e, n) {
        return _typeof(n.getElementsByName) !== A ? n.getElementsByName(name) : t;
      }, i.find.CLASS = T.getByClassName && function (e, n) {
        return _typeof(n.getElementsByClassName) === A || d ? t : n.getElementsByClassName(e);
      }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked");
      }), at(function (e) {
        e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:");
      })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) {
        T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R);
      }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, v = f.compareDocumentPosition ? function (e, t) {
        var r;
        return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
            i = 0,
            o = e.parentNode,
            a = t.parentNode,
            s = [e],
            l = [t];
        if (e === t) return u = !0, 0;
        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
        if (o === a) return ut(e, t);
        r = e;

        while (r = r.parentNode) {
          s.unshift(r);
        }

        r = t;

        while (r = r.parentNode) {
          l.unshift(r);
        }

        while (s[i] === l[i]) {
          i++;
        }

        return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
      }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p;
    }, st.matches = function (e, t) {
      return st(e, null, null, t);
    }, st.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
        var n = m.call(e, t);
        if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (r) {}
      return st(t, p, null, [e]).length > 0;
    }, st.contains = function (e, t) {
      return (e.ownerDocument || e) !== p && c(e), y(e, t);
    }, st.attr = function (e, t) {
      var n;
      return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null;
    }, st.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, st.uniqueSort = function (e) {
      var t,
          n = [],
          r = 1,
          i = 0;

      if (u = !T.detectDuplicates, e.sort(v), u) {
        for (; t = e[r]; r++) {
          t === e[r - 1] && (i = n.push(r));
        }

        while (i--) {
          e.splice(n[i], 1);
        }
      }

      return e;
    };

    function ut(e, t) {
      var n = t && e,
          r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function lt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }

    function ct(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function pt(e) {
      return ot(function (t) {
        return t = +t, ot(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    o = st.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r]; r++) {
        n += o(t);
      }

      return n;
    }, i = st.selectors = {
      cacheLength: 50,
      createPseudo: ot,
      match: U,
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[5] && e[2];
          return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          return "*" === e ? function () {
            return !0;
          } : (e = e.replace(et, tt).toLowerCase(), function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          });
        },
        CLASS: function CLASS(e) {
          var t = k[e + " "];
          return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function (e) {
            return t.test(e.className || _typeof(e.getAttribute) !== A && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = st.attr(r, e);
            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                p,
                f,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                y = s && t.nodeName.toLowerCase(),
                v = !u && !s;

            if (m) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? m.firstChild : m.lastChild], a && v) {
                c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];

                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++f && p === t) {
                    c[e] = [N, d, f];
                    break;
                  }
                }
              } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break;
              }

              return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
          return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) {
            var i,
                o = r(e, t),
                a = o.length;

            while (a--) {
              i = M.call(e, o[a]), e[i] = !(n[i] = o[a]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: ot(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(W, "$1"));
          return r[x] ? ot(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }),
        has: ot(function (e) {
          return function (t) {
            return st(e, t).length > 0;
          };
        }),
        contains: ot(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
          };
        }),
        lang: ot(function (e) {
          return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function (t) {
            var n;

            do {
              if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === f;
        },
        focus: function focus(e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function enabled(e) {
          return e.disabled === !1;
        },
        disabled: function disabled(e) {
          return e.disabled === !0;
        },
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !i.pseudos.empty(e);
        },
        header: function header(e) {
          return Q.test(e.nodeName);
        },
        input: function input(e) {
          return G.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
        },
        first: pt(function () {
          return [0];
        }),
        last: pt(function (e, t) {
          return [t - 1];
        }),
        eq: pt(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: pt(function (e, t) {
          var n = 0;

          for (; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: pt(function (e, t) {
          var n = 1;

          for (; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: pt(function (e, t, n) {
          var r = 0 > n ? n + t : n;

          for (; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: pt(function (e, t, n) {
          var r = 0 > n ? n + t : n;

          for (; t > ++r;) {
            e.push(r);
          }

          return e;
        })
      }
    };

    for (n in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      i.pseudos[n] = lt(n);
    }

    for (n in {
      submit: !0,
      reset: !0
    }) {
      i.pseudos[n] = ct(n);
    }

    function ft(e, t) {
      var n,
          r,
          o,
          a,
          s,
          u,
          l,
          c = E[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = i.preFilter;

      while (s) {
        (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
          value: n,
          type: r[0].replace(W, " ")
        }), s = s.slice(n.length));

        for (a in i.filter) {
          !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
            value: n,
            type: a,
            matches: r
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? st.error(e) : E(e, u).slice(0);
    }

    function dt(e) {
      var t = 0,
          n = e.length,
          r = "";

      for (; n > t; t++) {
        r += e[t].value;
      }

      return r;
    }

    function ht(e, t, n) {
      var i = t.dir,
          o = n && "parentNode" === i,
          a = C++;
      return t.first ? function (t, n, r) {
        while (t = t[i]) {
          if (1 === t.nodeType || o) return e(t, n, r);
        }
      } : function (t, n, s) {
        var u,
            l,
            c,
            p = N + " " + a;

        if (s) {
          while (t = t[i]) {
            if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
          }
        } else while (t = t[i]) {
          if (1 === t.nodeType || o) if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
            if ((u = l[1]) === !0 || u === r) return u === !0;
          } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0;
        }
      };
    }

    function gt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function mt(e, t, n, r, i) {
      var o,
          a = [],
          s = 0,
          u = e.length,
          l = null != t;

      for (; u > s; s++) {
        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
      }

      return a;
    }

    function yt(e, t, n, r, i, o) {
      return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function (o, a, s, u) {
        var l,
            c,
            p,
            f = [],
            d = [],
            h = a.length,
            g = o || xt(t || "*", s.nodeType ? [s] : s, []),
            m = !e || !o && t ? g : mt(g, f, e, s, u),
            y = n ? i || (o ? e : h || r) ? [] : a : m;

        if (n && n(m, y, s, u), r) {
          l = mt(y, d), r(l, [], s, u), c = l.length;

          while (c--) {
            (p = l[c]) && (y[d[c]] = !(m[d[c]] = p));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = y.length;

              while (c--) {
                (p = y[c]) && l.push(m[c] = p);
              }

              i(null, y = [], l, u);
            }

            c = y.length;

            while (c--) {
              (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p));
            }
          }
        } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y);
      });
    }

    function vt(e) {
      var t,
          n,
          r,
          o = e.length,
          a = i.relative[e[0].type],
          s = a || i.relative[" "],
          u = a ? 1 : 0,
          c = ht(function (e) {
        return e === t;
      }, s, !0),
          p = ht(function (e) {
        return M.call(t, e) > -1;
      }, s, !0),
          f = [function (e, n, r) {
        return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
      }];

      for (; o > u; u++) {
        if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];else {
          if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
            for (r = ++u; o > r; r++) {
              if (i.relative[e[r].type]) break;
            }

            return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e));
          }

          f.push(n);
        }
      }

      return gt(f);
    }

    function bt(e, t) {
      var n = 0,
          o = t.length > 0,
          a = e.length > 0,
          s = function s(_s, u, c, f, d) {
        var h,
            g,
            m,
            y = [],
            v = 0,
            b = "0",
            x = _s && [],
            w = null != d,
            T = l,
            C = _s || a && i.find.TAG("*", d && u.parentNode || u),
            k = N += null == T ? 1 : Math.random() || .1;

        for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
          if (a && h) {
            g = 0;

            while (m = e[g++]) {
              if (m(h, u, c)) {
                f.push(h);
                break;
              }
            }

            w && (N = k, r = ++n);
          }

          o && ((h = !m && h) && v--, _s && x.push(h));
        }

        if (v += b, o && b !== v) {
          g = 0;

          while (m = t[g++]) {
            m(x, y, u, c);
          }

          if (_s) {
            if (v > 0) while (b--) {
              x[b] || y[b] || (y[b] = L.call(f));
            }
            y = mt(y);
          }

          H.apply(f, y), w && !_s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f);
        }

        return w && (N = k, l = T), x;
      };

      return o ? ot(s) : s;
    }

    s = st.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];

      if (!o) {
        t || (t = ft(e)), n = t.length;

        while (n--) {
          o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
        }

        o = S(e, bt(i, r));
      }

      return o;
    };

    function xt(e, t, n) {
      var r = 0,
          i = t.length;

      for (; i > r; r++) {
        st(e, t[r], n);
      }

      return n;
    }

    function wt(e, t, n, r) {
      var o,
          a,
          u,
          l,
          c,
          p = ft(e);

      if (!r && 1 === p.length) {
        if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
          if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
          e = e.slice(a.shift().value.length);
        }

        o = U.needsContext.test(e) ? 0 : a.length;

        while (o--) {
          if (u = a[o], i.relative[l = u.type]) break;

          if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
            if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
            break;
          }
        }
      }

      return s(e, p)(r, t, d, n, V.test(e)), n;
    }

    i.pseudos.nth = i.pseudos.eq;

    function Tt() {}

    i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt(), c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains;
  }(e);
  var at = /Until$/,
      st = /^(?:parents|prev(?:Until|All))/,
      ut = /^.[^:#\[\.,]*$/,
      lt = b.expr.match.needsContext,
      ct = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  b.fn.extend({
    find: function find(e) {
      var t,
          n,
          r,
          i = this.length;
      if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () {
        for (t = 0; i > t; t++) {
          if (b.contains(r[t], this)) return !0;
        }
      }));

      for (n = [], t = 0; i > t; t++) {
        b.find(e, this[t], n);
      }

      return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n;
    },
    has: function has(e) {
      var t,
          n = b(e, this),
          r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) {
          if (b.contains(this, n[t])) return !0;
        }
      });
    },
    not: function not(e) {
      return this.pushStack(ft(this, e, !1));
    },
    filter: function filter(e) {
      return this.pushStack(ft(this, e, !0));
    },
    is: function is(e) {
      return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0);
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;

      for (; i > r; r++) {
        n = this[r];

        while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
          if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
            o.push(n);
            break;
          }

          n = n.parentNode;
        }
      }

      return this.pushStack(o.length > 1 ? b.unique(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
          r = b.merge(this.get(), n);
      return this.pushStack(b.unique(r));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), b.fn.andSelf = b.fn.addBack;

  function pt(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);

    return e;
  }

  b.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return b.dir(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return b.dir(e, "parentNode", n);
    },
    next: function next(e) {
      return pt(e, "nextSibling");
    },
    prev: function prev(e) {
      return pt(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return b.dir(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return b.dir(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return b.dir(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return b.dir(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return b.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return b.sibling(e.firstChild);
    },
    contents: function contents(e) {
      return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes);
    }
  }, function (e, t) {
    b.fn[e] = function (n, r) {
      var i = b.map(this, t, n);
      return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i);
    };
  }), b.extend({
    filter: function filter(e, t, n) {
      return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t);
    },
    dir: function dir(e, n, r) {
      var i = [],
          o = e[n];

      while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) {
        1 === o.nodeType && i.push(o), o = o[n];
      }

      return i;
    },
    sibling: function sibling(e, t) {
      var n = [];

      for (; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    }
  });

  function ft(e, t, n) {
    if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) {
      var i = !!t.call(e, r, e);
      return i === n;
    });
    if (t.nodeType) return b.grep(e, function (e) {
      return e === t === n;
    });

    if ("string" == typeof t) {
      var r = b.grep(e, function (e) {
        return 1 === e.nodeType;
      });
      if (ut.test(t)) return b.filter(t, r, !n);
      t = b.filter(t, r);
    }

    return b.grep(e, function (e) {
      return b.inArray(e, t) >= 0 === n;
    });
  }

  function dt(e) {
    var t = ht.split("|"),
        n = e.createDocumentFragment();
    if (n.createElement) while (t.length) {
      n.createElement(t.pop());
    }
    return n;
  }

  var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      gt = / jQuery\d+="(?:null|\d+)"/g,
      mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
      yt = /^\s+/,
      vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bt = /<([\w:]+)/,
      xt = /<tbody/i,
      wt = /<|&#?\w+;/,
      Tt = /<(?:script|style|link)/i,
      Nt = /^(?:checkbox|radio)$/i,
      Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kt = /^$|\/(?:java|ecma)script/i,
      Et = /^true\/(.*)/,
      St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      At = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  },
      jt = dt(o),
      Dt = jt.appendChild(o.createElement("div"));
  At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
    text: function text(e) {
      return b.access(this, function (e) {
        return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
      }, null, e, arguments.length);
    },
    wrapAll: function wrapAll(e) {
      if (b.isFunction(e)) return this.each(function (t) {
        b(this).wrapAll(e.call(this, t));
      });

      if (this[0]) {
        var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;

          while (e.firstChild && 1 === e.firstChild.nodeType) {
            e = e.firstChild;
          }

          return e;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(e) {
      return b.isFunction(e) ? this.each(function (t) {
        b(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = b(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = b.isFunction(e);
      return this.each(function (n) {
        b(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        b.nodeName(this, "body") || b(this).replaceWith(this.childNodes);
      }).end();
    },
    append: function append() {
      return this.domManip(arguments, !0, function (e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e);
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, !0, function (e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild);
      });
    },
    before: function before() {
      return this.domManip(arguments, !1, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return this.domManip(arguments, !1, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function remove(e, t) {
      var n,
          r = 0;

      for (; null != (n = this[r]); r++) {
        (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
      }

      return this;
    },
    empty: function empty() {
      var e,
          t = 0;

      for (; null != (e = this[t]); t++) {
        1 === e.nodeType && b.cleanData(Ot(e, !1));

        while (e.firstChild) {
          e.removeChild(e.firstChild);
        }

        e.options && b.nodeName(e, "select") && (e.options.length = 0);
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return b.clone(this, e, t);
      });
    },
    html: function html(e) {
      return b.access(this, function (e) {
        var n = this[0] || {},
            r = 0,
            i = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;

        if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(vt, "<$1></$2>");

          try {
            for (; i > r; r++) {
              n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
            }

            n = 0;
          } catch (o) {}
        }

        n && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith(e) {
      var t = b.isFunction(e);
      return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) {
        var t = this.nextSibling,
            n = this.parentNode;
        n && (b(this).remove(), n.insertBefore(e, t));
      });
    },
    detach: function detach(e) {
      return this.remove(e, !0);
    },
    domManip: function domManip(e, n, r) {
      e = f.apply([], e);
      var i,
          o,
          a,
          s,
          u,
          l,
          c = 0,
          p = this.length,
          d = this,
          h = p - 1,
          g = e[0],
          m = b.isFunction(g);
      if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) {
        var o = d.eq(i);
        m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r);
      });

      if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
        for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) {
          o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
        }

        if (a) for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) {
          o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
            url: o.src,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
          }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
        }
        l = i = null;
      }

      return this;
    }
  });

  function Lt(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
  }

  function Ht(e) {
    var t = e.getAttributeNode("type");
    return e.type = (t && t.specified) + "/" + e.type, e;
  }

  function qt(e) {
    var t = Et.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }

  function Mt(e, t) {
    var n,
        r = 0;

    for (; null != (n = e[r]); r++) {
      b._data(n, "globalEval", !t || b._data(t[r], "globalEval"));
    }
  }

  function _t(e, t) {
    if (1 === t.nodeType && b.hasData(e)) {
      var n,
          r,
          i,
          o = b._data(e),
          a = b._data(t, o),
          s = o.events;

      if (s) {
        delete a.handle, a.events = {};

        for (n in s) {
          for (r = 0, i = s[n].length; i > r; r++) {
            b.event.add(t, n, s[n][r]);
          }
        }
      }

      a.data && (a.data = b.extend({}, a.data));
    }
  }

  function Ft(e, t) {
    var n, r, i;

    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
        i = b._data(t);

        for (r in i.events) {
          b.removeEvent(t, r, i.handle);
        }

        t.removeAttribute(b.expando);
      }

      "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
  }

  b.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    b.fn[e] = function (e) {
      var n,
          r = 0,
          i = [],
          o = b(e),
          a = o.length - 1;

      for (; a >= r; r++) {
        n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
      }

      return this.pushStack(i);
    };
  });

  function Ot(e, n) {
    var r,
        o,
        a = 0,
        s = _typeof(e.getElementsByTagName) !== i ? e.getElementsByTagName(n || "*") : _typeof(e.querySelectorAll) !== i ? e.querySelectorAll(n || "*") : t;
    if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
      !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
    }
    return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s;
  }

  function Bt(e) {
    Nt.test(e.type) && (e.defaultChecked = e.checked);
  }

  b.extend({
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u = b.contains(e.ownerDocument, e);
      if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) {
        r[a] && Ft(i, r[a]);
      }
      if (t) if (n) for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) {
        _t(i, r[a]);
      } else _t(e, o);
      return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o;
    },
    buildFragment: function buildFragment(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          p = e.length,
          f = dt(t),
          d = [],
          h = 0;

      for (; p > h; h++) {
        if (o = e[h], o || 0 === o) if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);else if (wt.test(o)) {
          s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];

          while (i--) {
            s = s.lastChild;
          }

          if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
            o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;

            while (i--) {
              b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
            }
          }

          b.merge(d, s.childNodes), s.textContent = "";

          while (s.firstChild) {
            s.removeChild(s.firstChild);
          }

          s = f.lastChild;
        } else d.push(t.createTextNode(o));
      }

      s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;

      while (o = d[h++]) {
        if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
          i = 0;

          while (o = s[i++]) {
            kt.test(o.type || "") && n.push(o);
          }
        }
      }

      return s = null, f;
    },
    cleanData: function cleanData(e, t) {
      var n,
          r,
          o,
          a,
          s = 0,
          u = b.expando,
          l = b.cache,
          p = b.support.deleteExpando,
          f = b.event.special;

      for (; null != (n = e[s]); s++) {
        if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
          if (a.events) for (r in a.events) {
            f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
          }
          l[o] && (delete l[o], p ? delete n[u] : _typeof(n.removeAttribute) !== i ? n.removeAttribute(u) : n[u] = null, c.push(o));
        }
      }
    }
  });
  var Pt,
      Rt,
      Wt,
      $t = /alpha\([^)]*\)/i,
      It = /opacity\s*=\s*([^)]*)/,
      zt = /^(top|right|bottom|left)$/,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Ut = /^margin/,
      Vt = RegExp("^(" + x + ")(.*)$", "i"),
      Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
      Jt = RegExp("^([+-])=(" + x + ")", "i"),
      Gt = {
    BODY: "block"
  },
      Qt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Kt = {
    letterSpacing: 0,
    fontWeight: 400
  },
      Zt = ["Top", "Right", "Bottom", "Left"],
      en = ["Webkit", "O", "Moz", "ms"];

  function tn(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;

    while (i--) {
      if (t = en[i] + n, t in e) return t;
    }

    return r;
  }

  function nn(e, t) {
    return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e);
  }

  function rn(e, t) {
    var n,
        r,
        i,
        o = [],
        a = 0,
        s = e.length;

    for (; s > a; a++) {
      r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
    }

    for (a = 0; s > a; a++) {
      r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    }

    return e;
  }

  b.fn.extend({
    css: function css(e, n) {
      return b.access(this, function (e, n, r) {
        var i,
            o,
            a = {},
            s = 0;

        if (b.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++) {
            a[n[s]] = b.css(e, n[s], !1, o);
          }

          return a;
        }

        return r !== t ? b.style(e, n, r) : b.css(e, n);
      }, e, n, arguments.length > 1);
    },
    show: function show() {
      return rn(this, !0);
    },
    hide: function hide() {
      return rn(this);
    },
    toggle: function toggle(e) {
      var t = "boolean" == typeof e;
      return this.each(function () {
        (t ? e : nn(this)) ? b(this).show() : b(this).hide();
      });
    }
  }), b.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Wt(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            a,
            s,
            u = b.camelCase(n),
            l = e.style;
        if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
        if (a = _typeof(r), "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
          l[n] = r;
        } catch (c) {}
      }
    },
    css: function css(e, n, r, i) {
      var o,
          a,
          s,
          u = b.camelCase(n);
      return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a;
    },
    swap: function swap(e, t, n, r) {
      var i,
          o,
          a = {};

      for (o in t) {
        a[o] = e.style[o], e.style[o] = t[o];
      }

      i = n.apply(e, r || []);

      for (o in t) {
        e.style[o] = a[o];
      }

      return i;
    }
  }), e.getComputedStyle ? (Rt = function Rt(t) {
    return e.getComputedStyle(t, null);
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        u = s ? s.getPropertyValue(n) || s[n] : t,
        l = e.style;
    return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u;
  }) : o.documentElement.currentStyle && (Rt = function Rt(e) {
    return e.currentStyle;
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        u = s ? s[n] : t,
        l = e.style;
    return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u;
  });

  function on(e, t, n) {
    var r = Vt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }

  function an(e, t, n, r, i) {
    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;

    for (; 4 > o; o += 2) {
      "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
    }

    return a;
  }

  function sn(e, t, n) {
    var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Rt(e),
        a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);

    if (0 >= i || null == i) {
      if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
      r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }

    return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }

  function un(e) {
    var t = o,
        n = Gt[e];
    return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n;
  }

  function ln(e, t) {
    var n = b(t.createElement(e)).appendTo(t.body),
        r = b.css(n[0], "display");
    return n.remove(), r;
  }

  b.each(["height", "width"], function (e, n) {
    b.cssHooks[n] = {
      get: function get(e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () {
          return sn(e, n, i);
        }) : sn(e, n, i) : t;
      },
      set: function set(e, t, r) {
        var i = r && Rt(e);
        return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0);
      }
    };
  }), b.support.opacity || (b.cssHooks.opacity = {
    get: function get(e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function set(e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
    }
  }), b(function () {
    b.support.reliableMarginRight || (b.cssHooks.marginRight = {
      get: function get(e, n) {
        return n ? b.swap(e, {
          display: "inline-block"
        }, Wt, [e, "marginRight"]) : t;
      }
    }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) {
      b.cssHooks[n] = {
        get: function get(e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t;
        }
      };
    });
  }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"));
  }, b.expr.filters.visible = function (e) {
    return !b.expr.filters.hidden(e);
  }), b.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    b.cssHooks[e + t] = {
      expand: function expand(n) {
        var r = 0,
            i = {},
            o = "string" == typeof n ? n.split(" ") : [n];

        for (; 4 > r; r++) {
          i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, Ut.test(e) || (b.cssHooks[e + t].set = on);
  });
  var cn = /%20/g,
      pn = /\[\]$/,
      fn = /\r?\n/g,
      dn = /^(?:submit|button|image|reset|file)$/i,
      hn = /^(?:input|select|textarea|keygen)/i;
  b.fn.extend({
    serialize: function serialize() {
      return b.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = b.prop(this, "elements");
        return e ? b.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e));
      }).map(function (e, t) {
        var n = b(this).val();
        return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(fn, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(fn, "\r\n")
        };
      }).get();
    }
  }), b.param = function (e, n) {
    var r,
        i = [],
        o = function o(e, t) {
      t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };

    if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
      o(this.name, this.value);
    });else for (r in e) {
      gn(r, e[r], n, o);
    }
    return i.join("&").replace(cn, "+");
  };

  function gn(e, t, n, r) {
    var i;
    if (b.isArray(t)) b.each(t, function (t, i) {
      n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == _typeof(i) ? t : "") + "]", i, n, r);
    });else if (n || "object" !== b.type(t)) r(e, t);else for (i in t) {
      gn(e + "[" + i + "]", t[i], n, r);
    }
  }

  b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    b.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), b.fn.hover = function (e, t) {
    return this.mouseenter(e).mouseleave(t || e);
  };
  var mn,
      yn,
      vn = b.now(),
      bn = /\?/,
      xn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Cn = /^(?:GET|HEAD)$/,
      kn = /^\/\//,
      En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Sn = b.fn.load,
      An = {},
      jn = {},
      Dn = "*/".concat("*");

  try {
    yn = a.href;
  } catch (Ln) {
    yn = o.createElement("a"), yn.href = "", yn = yn.href;
  }

  mn = En.exec(yn.toLowerCase()) || [];

  function Hn(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(w) || [];
      if (b.isFunction(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function qn(e, n, r, i) {
    var o = {},
        a = e === jn;

    function s(u) {
      var l;
      return o[u] = !0, b.each(e[u] || [], function (e, u) {
        var c = u(n, r, i);
        return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1);
      }), l;
    }

    return s(n.dataTypes[0]) || !o["*"] && s("*");
  }

  function Mn(e, n) {
    var r,
        i,
        o = b.ajaxSettings.flatOptions || {};

    for (i in n) {
      n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    }

    return r && b.extend(!0, e, r), e;
  }

  b.fn.load = function (e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
    var i,
        o,
        a,
        s = this,
        u = e.indexOf(" ");
    return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == _typeof(n) && (a = "POST"), s.length > 0 && b.ajax({
      url: e,
      type: a,
      dataType: "html",
      data: n
    }).done(function (e) {
      o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    b.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), b.each(["get", "post"], function (e, n) {
    b[n] = function (e, r, i, o) {
      return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
        url: e,
        type: n,
        dataType: o,
        data: r,
        success: i
      });
    };
  }), b.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: yn,
      type: "GET",
      isLocal: Nn.test(mn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Dn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": e.String,
        "text html": !0,
        "text json": b.parseJSON,
        "text xml": b.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e);
    },
    ajaxPrefilter: Hn(An),
    ajaxTransport: Hn(jn),
    ajax: function ajax(e, n) {
      "object" == _typeof(e) && (n = e, e = t), n = n || {};
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          p = b.ajaxSetup({}, n),
          f = p.context || p,
          d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
          h = b.Deferred(),
          g = b.Callbacks("once memory"),
          m = p.statusCode || {},
          y = {},
          v = {},
          x = 0,
          T = "canceled",
          N = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (2 === x) {
            if (!c) {
              c = {};

              while (t = Tn.exec(a)) {
                c[t[1].toLowerCase()] = t[2];
              }
            }

            t = c[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === x ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();
          return x || (e = v[n] = v[n] || e, y[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return x || (p.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (2 > x) for (t in e) {
            m[t] = [m[t], e[t]];
          } else N.always(e[N.status]);
          return this;
        },
        abort: function abort(e) {
          var t = e || T;
          return l && l.abort(t), k(0, t), this;
        }
      };
      if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
      u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);

      for (i in p.headers) {
        N.setRequestHeader(i, p.headers[i]);
      }

      if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
      T = "abort";

      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        N[i](p[i]);
      }

      if (l = qn(jn, p, n, N)) {
        N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
          N.abort("timeout");
        }, p.timeout));

        try {
          x = 1, l.send(y, k);
        } catch (C) {
          if (!(2 > x)) throw C;
          k(-1, C);
        }
      } else k(-1, "No Transport");

      function k(e, n, r, i) {
        var c,
            y,
            v,
            w,
            T,
            C = n;
        2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")));
      }

      return N;
    },
    getScript: function getScript(e, n) {
      return b.get(e, t, n, "script");
    },
    getJSON: function getJSON(e, t, n) {
      return b.get(e, t, n, "json");
    }
  });

  function _n(e, n, r) {
    var i,
        o,
        a,
        s,
        u = e.contents,
        l = e.dataTypes,
        c = e.responseFields;

    for (s in c) {
      s in r && (n[c[s]] = r[s]);
    }

    while ("*" === l[0]) {
      l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
    }

    if (o) for (s in u) {
      if (u[s] && u[s].test(o)) {
        l.unshift(s);
        break;
      }
    }
    if (l[0] in r) a = l[0];else {
      for (s in r) {
        if (!l[0] || e.converters[s + " " + l[0]]) {
          a = s;
          break;
        }

        i || (i = s);
      }

      a = a || i;
    }
    return a ? (a !== l[0] && l.unshift(a), r[a]) : t;
  }

  function Fn(e, t) {
    var n,
        r,
        i,
        o,
        a = {},
        s = 0,
        u = e.dataTypes.slice(),
        l = u[0];
    if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) {
      a[i.toLowerCase()] = e.converters[i];
    }

    for (; r = u[++s];) {
      if ("*" !== r) {
        if ("*" !== l && l !== r) {
          if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) {
            if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
              i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
              break;
            }
          }
          if (i !== !0) if (i && e["throws"]) t = i(t);else try {
            t = i(t);
          } catch (c) {
            return {
              state: "parsererror",
              error: i ? c : "No conversion from " + l + " to " + r
            };
          }
        }

        l = r;
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  b.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function textScript(e) {
        return b.globalEval(e), e;
      }
    }
  }), b.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), b.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
          r = o.head || b("head")[0] || o.documentElement;
      return {
        send: function send(t, i) {
          n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
          }, r.insertBefore(n, r.firstChild);
        },
        abort: function abort() {
          n && n.onload(t, !0);
        }
      };
    }
  });
  var On = [],
      Bn = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = On.pop() || b.expando + "_" + vn++;
      return this[e] = !0, e;
    }
  }), b.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o,
        a,
        s,
        u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
    return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
      return s || b.error(o + " was not called"), s[0];
    }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t;
    }), "script") : t;
  });

  var Pn,
      Rn,
      Wn = 0,
      $n = e.ActiveXObject && function () {
    var e;

    for (e in Pn) {
      Pn[e](t, !0);
    }
  };

  function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }

  function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }

  b.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn();
  } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function (n) {
    if (!n.crossDomain || b.support.cors) {
      var _r;

      return {
        send: function send(i, o) {
          var a,
              s,
              u = n.xhr();
          if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) {
            u[s] = n.xhrFields[s];
          }
          n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

          try {
            for (s in i) {
              u.setRequestHeader(s, i[s]);
            }
          } catch (l) {}

          u.send(n.hasContent && n.data || null), _r = function r(e, i) {
            var s, l, c, p;

            try {
              if (_r && (i || 4 === u.readyState)) if (_r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();else {
                p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);

                try {
                  c = u.statusText;
                } catch (f) {
                  c = "";
                }

                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
              }
            } catch (d) {
              i || o(-1, d);
            }

            p && o(s, c, p, l);
          }, n.async ? 4 === u.readyState ? setTimeout(_r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = _r), u.onreadystatechange = _r) : _r();
        },
        abort: function abort() {
          _r && _r(t, !0);
        }
      };
    }
  });
  var Xn,
      Un,
      Vn = /^(?:toggle|show|hide)$/,
      Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
      Jn = /queueHooks$/,
      Gn = [nr],
      Qn = {
    "*": [function (e, t) {
      var n,
          r,
          i = this.createTween(e, t),
          o = Yn.exec(t),
          a = i.cur(),
          s = +a || 0,
          u = 1,
          l = 20;

      if (o) {
        if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
          s = b.css(i.elem, e, !0) || n || 1;

          do {
            u = u || ".5", s /= u, b.style(i.elem, e, s + r);
          } while (u !== (u = i.cur() / a) && 1 !== u && --l);
        }

        i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n;
      }

      return i;
    }]
  };

  function Kn() {
    return setTimeout(function () {
      Xn = t;
    }), Xn = b.now();
  }

  function Zn(e, t) {
    b.each(t, function (t, n) {
      var r = (Qn[t] || []).concat(Qn["*"]),
          i = 0,
          o = r.length;

      for (; o > i; i++) {
        if (r[i].call(e, t, n)) return;
      }
    });
  }

  function er(e, t, n) {
    var r,
        i,
        o = 0,
        a = Gn.length,
        s = b.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;
      var t = Xn || Kn(),
          n = Math.max(0, l.startTime + l.duration - t),
          r = n / l.duration || 0,
          o = 1 - r,
          a = 0,
          u = l.tweens.length;

      for (; u > a; a++) {
        l.tweens[a].run(o);
      }

      return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1);
    },
        l = s.promise({
      elem: e,
      props: b.extend({}, t),
      opts: b.extend(!0, {
        specialEasing: {}
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Xn || Kn(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; r > n; n++) {
          l.tweens[n].run(1);
        }

        return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (tr(c, l.opts.specialEasing); a > o; o++) {
      if (r = Gn[o].call(l, e, c, l.opts)) return r;
    }

    return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }

  function tr(e, t) {
    var n, r, i, o, a;

    for (i in e) {
      if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
        n = a.expand(n), delete e[r];

        for (i in n) {
          i in e || (e[i] = n[i], t[i] = o);
        }
      } else t[r] = o;
    }
  }

  b.Animation = b.extend(er, {
    tweener: function tweener(e, t) {
      b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      var n,
          r = 0,
          i = e.length;

      for (; i > r; r++) {
        n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
      }
    },
    prefilter: function prefilter(e, t) {
      t ? Gn.unshift(e) : Gn.push(e);
    }
  });

  function nr(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        p,
        f = this,
        d = e.style,
        h = {},
        g = [],
        m = e.nodeType && nn(e);
    n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function () {
      c.unqueued || p();
    }), c.unqueued++, f.always(function () {
      f.always(function () {
        c.unqueued--, b.queue(e, "fx").length || c.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function () {
      d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
    }));

    for (i in t) {
      if (a = t[i], Vn.exec(a)) {
        if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
        g.push(i);
      }
    }

    if (o = g.length) {
      s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function () {
        b(e).hide();
      }), f.done(function () {
        var t;

        b._removeData(e, "fxshow");

        for (t in h) {
          b.style(e, t, h[t]);
        }
      });

      for (i = 0; o > i; i++) {
        r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0));
      }
    }
  }

  function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }

  b.Tween = rr, rr.prototype = {
    constructor: rr,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = rr.propHooks[this.prop];
      return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = rr.propHooks[this.prop];
      return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
    }
  }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      },
      set: function set(e) {
        b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, b.each(["toggle", "show", "hide"], function (e, t) {
    var n = b.fn[t];

    b.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
    };
  }), b.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(nn).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = b.isEmptyObject(e),
          o = b.speed(t, n, r),
          a = function a() {
        var t = er(this, b.extend({}, e), o);
        a.finish = function () {
          t.stop(!0);
        }, (i || b._data(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, n, r) {
      var i = function i(e) {
        var t = e.stop;
        delete e.stop, t(r);
      };

      return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            n = null != e && e + "queueHooks",
            o = b.timers,
            a = b._data(this);

        if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) {
          a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        }

        for (n = o.length; n--;) {
          o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        }

        (t || !r) && b.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t,
            n = b._data(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = b.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; a > t; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  });

  function ir(e, t) {
    var n,
        r = {
      height: e
    },
        i = 0;

    for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
      n = Zt[i], r["margin" + n] = r["padding" + n] = e;
    }

    return t && (r.opacity = r.width = e), r;
  }

  b.each({
    slideDown: ir("show"),
    slideUp: ir("hide"),
    slideToggle: ir("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    b.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), b.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? b.extend({}, e) : {
      complete: n || !n && t || b.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !b.isFunction(t) && t
    };
    return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
    }, r;
  }, b.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () {
    var e,
        n = b.timers,
        r = 0;

    for (Xn = b.now(); n.length > r; r++) {
      e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    }

    n.length || b.fx.stop(), Xn = t;
  }, b.fx.timer = function (e) {
    e() && b.timers.push(e) && b.fx.start();
  }, b.fx.interval = 13, b.fx.start = function () {
    Un || (Un = setInterval(b.fx.tick, b.fx.interval));
  }, b.fx.stop = function () {
    clearInterval(Un), Un = null;
  }, b.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) {
    return b.grep(b.timers, function (t) {
      return e === t.elem;
    }).length;
  }), b.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      b.offset.setOffset(this, e, t);
    });
    var n,
        r,
        o = {
      top: 0,
      left: 0
    },
        a = this[0],
        s = a && a.ownerDocument;
    if (s) return n = s.documentElement, b.contains(n, a) ? (_typeof(a.getBoundingClientRect) !== i && (o = a.getBoundingClientRect()), r = or(s), {
      top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : o;
  }, b.offset = {
    setOffset: function setOffset(e, t, n) {
      var r = b.css(e, "position");
      "static" === r && (e.style.position = "relative");
      var i = b(e),
          o = i.offset(),
          a = b.css(e, "top"),
          s = b.css(e, "left"),
          u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
          l = {},
          c = {},
          p,
          f;
      u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l);
    }
  }, b.fn.extend({
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n = {
          top: 0,
          left: 0
        },
            r = this[0];
        return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - b.css(r, "marginTop", !0),
          left: t.left - n.left - b.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent || o.documentElement;

        while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || o.documentElement;
      });
    }
  }), b.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, n) {
    var r = /Y/.test(n);

    b.fn[e] = function (i) {
      return b.access(this, function (e, i, o) {
        var a = or(e);
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t);
      }, e, i, arguments.length, null);
    };
  });

  function or(e) {
    return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }

  b.each({
    Height: "height",
    Width: "width"
  }, function (e, n) {
    b.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function (r, i) {
      b.fn[i] = function (i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
            s = r || (i === !0 || o === !0 ? "margin" : "border");
        return b.access(this, function (n, r, i) {
          var o;
          return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      };
    });
  }), e.jQuery = e.$ = b,  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return b;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(window);

/***/ }),

/***/ "./resources/js/jquery.toast.js":
/*!**************************************!*\
  !*** ./resources/js/jquery.toast.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

; // jQuery toast plugin created by Kamran Ahmed copyright MIT license 2015

if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}

    F.prototype = obj;
    return new F();
  };
}

(function ($, window, document, undefined) {
  "use strict";

  var Toast = {
    _positionClasses: ['bottom-left', 'bottom-right', 'top-right', 'top-left', 'bottom-center', 'top-center', 'mid-center'],
    _defaultIcons: ['success', 'error', 'info', 'warning'],
    init: function init(options, elem) {
      this.prepareOptions(options, $.toast.options);
      this.process();
    },
    prepareOptions: function prepareOptions(options, options_to_extend) {
      var _options = {};

      if (typeof options === 'string' || options instanceof Array) {
        _options.text = options;
      } else {
        _options = options;
      }

      this.options = $.extend({}, options_to_extend, _options);
    },
    process: function process() {
      this.setup();
      this.addToDom();
      this.position();
      this.bindToast();
      this.animate();
    },
    setup: function setup() {
      var _toastContent = '';
      this._toastEl = this._toastEl || $('<div></div>', {
        class: 'jq-toast-single'
      }); // For the loader on top

      _toastContent += '<span class="jq-toast-loader"></span>';

      if (this.options.allowToastClose) {
        _toastContent += '<span class="close-jq-toast-single">&times;</span>';
      }

      ;

      if (this.options.text instanceof Array) {
        if (this.options.heading) {
          _toastContent += '<h2 class="jq-toast-heading">' + this.options.heading + '</h2>';
        }

        ;
        _toastContent += '<ul class="jq-toast-ul">';

        for (var i = 0; i < this.options.text.length; i++) {
          _toastContent += '<li class="jq-toast-li" id="jq-toast-item-' + i + '">' + this.options.text[i] + '</li>';
        }

        _toastContent += '</ul>';
      } else {
        if (this.options.heading) {
          _toastContent += '<h2 class="jq-toast-heading">' + this.options.heading + '</h2>';
        }

        ;
        _toastContent += this.options.text;
      }

      this._toastEl.html(_toastContent);

      if (this.options.bgColor !== false) {
        this._toastEl.css("background-color", this.options.bgColor);
      }

      ;

      if (this.options.textColor !== false) {
        this._toastEl.css("color", this.options.textColor);
      }

      ;

      if (this.options.textAlign) {
        this._toastEl.css('text-align', this.options.textAlign);
      }

      if (this.options.icon !== false) {
        this._toastEl.addClass('jq-has-icon');

        if ($.inArray(this.options.icon, this._defaultIcons) !== -1) {
          this._toastEl.addClass('jq-icon-' + this.options.icon);
        }

        ;
      }

      ;
    },
    position: function position() {
      if (typeof this.options.position === 'string' && $.inArray(this.options.position, this._positionClasses) !== -1) {
        if (this.options.position === 'bottom-center') {
          this._container.css({
            left: $(window).outerWidth() / 2 - this._container.outerWidth() / 2,
            bottom: 20
          });
        } else if (this.options.position === 'top-center') {
          this._container.css({
            left: $(window).outerWidth() / 2 - this._container.outerWidth() / 2,
            top: 20
          });
        } else if (this.options.position === 'mid-center') {
          this._container.css({
            left: $(window).outerWidth() / 2 - this._container.outerWidth() / 2,
            top: $(window).outerHeight() / 2 - this._container.outerHeight() / 2
          });
        } else {
          this._container.addClass(this.options.position);
        }
      } else if (_typeof(this.options.position) === 'object') {
        this._container.css({
          top: this.options.position.top ? this.options.position.top : 'auto',
          bottom: this.options.position.bottom ? this.options.position.bottom : 'auto',
          left: this.options.position.left ? this.options.position.left : 'auto',
          right: this.options.position.right ? this.options.position.right : 'auto'
        });
      } else {
        this._container.addClass('bottom-left');
      }
    },
    bindToast: function bindToast() {
      var that = this;

      this._toastEl.on('afterShown', function () {
        that.processLoader();
      });

      this._toastEl.find('.close-jq-toast-single').on('click', function (e) {
        e.preventDefault();

        if (that.options.showHideTransition === 'fade') {
          that._toastEl.trigger('beforeHide');

          that._toastEl.fadeOut(function () {
            that._toastEl.trigger('afterHidden');
          });
        } else if (that.options.showHideTransition === 'slide') {
          that._toastEl.trigger('beforeHide');

          that._toastEl.slideUp(function () {
            that._toastEl.trigger('afterHidden');
          });
        } else {
          that._toastEl.trigger('beforeHide');

          that._toastEl.hide(function () {
            that._toastEl.trigger('afterHidden');
          });
        }
      });

      if (typeof this.options.beforeShow == 'function') {
        this._toastEl.on('beforeShow', function () {
          that.options.beforeShow();
        });
      }

      ;

      if (typeof this.options.afterShown == 'function') {
        this._toastEl.on('afterShown', function () {
          that.options.afterShown();
        });
      }

      ;

      if (typeof this.options.beforeHide == 'function') {
        this._toastEl.on('beforeHide', function () {
          that.options.beforeHide();
        });
      }

      ;

      if (typeof this.options.afterHidden == 'function') {
        this._toastEl.on('afterHidden', function () {
          that.options.afterHidden();
        });
      }

      ;
    },
    addToDom: function addToDom() {
      var _container = $('.jq-toast-wrap');

      if (_container.length === 0) {
        _container = $('<div></div>', {
          class: "jq-toast-wrap"
        });
        $('body').append(_container);
      } else if (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) {
        _container.empty();
      }

      _container.find('.jq-toast-single:hidden').remove();

      _container.append(this._toastEl);

      if (this.options.stack && !isNaN(parseInt(this.options.stack), 10)) {
        var _prevToastCount = _container.find('.jq-toast-single').length,
            _extToastCount = _prevToastCount - this.options.stack;

        if (_extToastCount > 0) {
          $('.jq-toast-wrap').find('.jq-toast-single').slice(0, _extToastCount).remove();
        }

        ;
      }

      this._container = _container;
    },
    canAutoHide: function canAutoHide() {
      return this.options.hideAfter !== false && !isNaN(parseInt(this.options.hideAfter, 10));
    },
    processLoader: function processLoader() {
      // Show the loader only, if auto-hide is on and loader is demanded
      if (!this.canAutoHide() || this.options.loader === false) {
        return false;
      }

      var loader = this._toastEl.find('.jq-toast-loader'); // 400 is the default time that jquery uses for fade/slide
      // Divide by 1000 for milliseconds to seconds conversion


      var transitionTime = (this.options.hideAfter - 400) / 1000 + 's';
      var loaderBg = this.options.loaderBg;
      var style = loader.attr('style') || '';
      style = style.substring(0, style.indexOf('-webkit-transition')); // Remove the last transition definition

      style += '-webkit-transition: width ' + transitionTime + ' ease-in; \
                      -o-transition: width ' + transitionTime + ' ease-in; \
                      transition: width ' + transitionTime + ' ease-in; \
                      background-color: ' + loaderBg + ';';
      loader.attr('style', style).addClass('jq-toast-loaded');
    },
    animate: function animate() {
      var that = this;

      this._toastEl.hide();

      this._toastEl.trigger('beforeShow');

      if (this.options.showHideTransition.toLowerCase() === 'fade') {
        this._toastEl.fadeIn(function () {
          that._toastEl.trigger('afterShown');
        });
      } else if (this.options.showHideTransition.toLowerCase() === 'slide') {
        this._toastEl.slideDown(function () {
          that._toastEl.trigger('afterShown');
        });
      } else {
        this._toastEl.show(function () {
          that._toastEl.trigger('afterShown');
        });
      }

      if (this.canAutoHide()) {
        var that = this;
        window.setTimeout(function () {
          if (that.options.showHideTransition.toLowerCase() === 'fade') {
            that._toastEl.trigger('beforeHide');

            that._toastEl.fadeOut(function () {
              that._toastEl.trigger('afterHidden');
            });
          } else if (that.options.showHideTransition.toLowerCase() === 'slide') {
            that._toastEl.trigger('beforeHide');

            that._toastEl.slideUp(function () {
              that._toastEl.trigger('afterHidden');
            });
          } else {
            that._toastEl.trigger('beforeHide');

            that._toastEl.hide(function () {
              that._toastEl.trigger('afterHidden');
            });
          }
        }, this.options.hideAfter);
      }

      ;
    },
    reset: function reset(resetWhat) {
      if (resetWhat === 'all') {
        $('.jq-toast-wrap').remove();
      } else {
        this._toastEl.remove();
      }
    },
    update: function update(options) {
      this.prepareOptions(options, this.options);
      this.setup();
      this.bindToast();
    }
  };

  $.toast = function (options) {
    var toast = Object.create(Toast);
    toast.init(options, this);
    return {
      reset: function reset(what) {
        toast.reset(what);
      },
      update: function update(options) {
        toast.update(options);
      }
    };
  };

  $.toast.options = {
    text: '',
    heading: '',
    showHideTransition: 'fade',
    allowToastClose: true,
    hideAfter: 3000,
    loader: true,
    loaderBg: '#9EC600',
    stack: 5,
    position: 'bottom-left',
    bgColor: false,
    textColor: false,
    textAlign: 'left',
    icon: false,
    beforeShow: function beforeShow() {},
    afterShown: function afterShown() {},
    beforeHide: function beforeHide() {},
    afterHidden: function afterHidden() {}
  };
})(jQuery, window, document);

/***/ }),

/***/ "./resources/js/select2.js":
/*!*********************************!*\
  !*** ./resources/js/select2.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  var b = function () {
    if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
    var b;
    return function () {
      if (!b || !b.requirejs) {
        b ? c = b : b = {};
        var a, c, d;
        !function (b) {
          function e(a, b) {
            return u.call(a, b);
          }

          function f(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n = b && b.split("/"),
                o = s.map,
                p = o && o["*"] || {};
            if (a && "." === a.charAt(0)) if (b) {
              for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1) {
                if (m = a[k], "." === m) a.splice(k, 1), k -= 1;else if (".." === m) {
                  if (1 === k && (".." === a[2] || ".." === a[0])) break;
                  k > 0 && (a.splice(k - 1, 2), k -= 2);
                }
              }

              a = a.join("/");
            } else 0 === a.indexOf("./") && (a = a.substring(2));

            if ((n || p) && o) {
              for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1) {
                  if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                    f = e, h = k;
                    break;
                  }
                }
                if (f) break;
                !i && p && p[d] && (i = p[d], j = k);
              }

              !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
            }

            return a;
          }

          function g(a, c) {
            return function () {
              var d = v.call(arguments, 0);
              return "string" != typeof d[0] && 1 === d.length && d.push(null), _n.apply(b, d.concat([a, c]));
            };
          }

          function h(a) {
            return function (b) {
              return f(b, a);
            };
          }

          function i(a) {
            return function (b) {
              q[a] = b;
            };
          }

          function j(a) {
            if (e(r, a)) {
              var c = r[a];
              delete r[a], t[a] = !0, m.apply(b, c);
            }

            if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
            return q[a];
          }

          function k(a) {
            var b,
                c = a ? a.indexOf("!") : -1;
            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a];
          }

          function l(a) {
            return function () {
              return s && s.config && s.config[a] || {};
            };
          }

          var m,
              _n,
              o,
              p,
              q = {},
              r = {},
              s = {},
              t = {},
              u = Object.prototype.hasOwnProperty,
              v = [].slice,
              w = /\.js$/;

          o = function o(a, b) {
            var c,
                d = k(a),
                e = d[0];
            return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
              f: e ? e + "!" + a : a,
              n: a,
              pr: e,
              p: c
            };
          }, p = {
            require: function require(a) {
              return g(a);
            },
            exports: function exports(a) {
              var b = q[a];
              return "undefined" != typeof b ? b : q[a] = {};
            },
            module: function module(a) {
              return {
                id: a,
                uri: "",
                exports: q[a],
                config: l(a)
              };
            }
          }, m = function m(a, c, d, f) {
            var h,
                k,
                l,
                m,
                n,
                s,
                u = [],
                v = _typeof(d);

            if (f = f || a, "undefined" === v || "function" === v) {
              for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1) {
                if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);else if ("exports" === k) u[n] = p.exports(a), s = !0;else if ("module" === k) h = u[n] = p.module(a);else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);else {
                  if (!m.p) throw new Error(a + " missing " + k);
                  m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k];
                }
              }

              l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l));
            } else a && (q[a] = d);
          }, a = c = _n = function n(a, c, d, e, f) {
            if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);

            if (!a.splice) {
              if (s = a, s.deps && _n(s.deps, s.callback), !c) return;
              c.splice ? (a = c, c = d, d = null) : a = b;
            }

            return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
              m(b, a, c, d);
            }, 4), _n;
          }, _n.config = function (a) {
            return _n(a);
          }, a._defined = q, d = function d(a, b, c) {
            if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
            b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c]);
          }, d.amd = {
            jQuery: !0
          };
        }(), b.requirejs = a, b.require = c, b.define = d;
      }
    }(), b.define("almond", function () {}), b.define("jquery", [], function () {
      var b = a || $;
      return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b;
    }), b.define("select2/utils", ["jquery"], function (a) {
      function b(a) {
        var b = a.prototype,
            c = [];

        for (var d in b) {
          var e = b[d];
          "function" == typeof e && "constructor" !== d && c.push(d);
        }

        return c;
      }

      var c = {};
      c.Extend = function (a, b) {
        function c() {
          this.constructor = a;
        }

        var d = {}.hasOwnProperty;

        for (var e in b) {
          d.call(b, e) && (a[e] = b[e]);
        }

        return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
      }, c.Decorate = function (a, c) {
        function d() {
          var b = Array.prototype.unshift,
              d = c.prototype.constructor.length,
              e = a.prototype.constructor;
          d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments);
        }

        function e() {
          this.constructor = d;
        }

        var f = b(c),
            g = b(a);
        c.displayName = a.displayName, d.prototype = new e();

        for (var h = 0; h < g.length; h++) {
          var i = g[h];
          d.prototype[i] = a.prototype[i];
        }

        for (var j = function j(a) {
          var b = function b() {};

          (a in d.prototype) && (b = d.prototype[a]);
          var e = c.prototype[a];
          return function () {
            var a = Array.prototype.unshift;
            return a.call(arguments, b), e.apply(this, arguments);
          };
        }, k = 0; k < f.length; k++) {
          var l = f[k];
          d.prototype[l] = j(l);
        }

        return d;
      };

      var d = function d() {
        this.listeners = {};
      };

      return d.prototype.on = function (a, b) {
        this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b];
      }, d.prototype.trigger = function (a) {
        var b = Array.prototype.slice,
            c = b.call(arguments, 1);
        this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
      }, d.prototype.invoke = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
          a[c].apply(this, b);
        }
      }, c.Observable = d, c.generateChars = function (a) {
        for (var b = "", c = 0; a > c; c++) {
          var d = Math.floor(36 * Math.random());
          b += d.toString(36);
        }

        return b;
      }, c.bind = function (a, b) {
        return function () {
          a.apply(b, arguments);
        };
      }, c._convertData = function (a) {
        for (var b in a) {
          var c = b.split("-"),
              d = a;

          if (1 !== c.length) {
            for (var e = 0; e < c.length; e++) {
              var f = c[e];
              f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f];
            }

            delete a[b];
          }
        }

        return a;
      }, c.hasScroll = function (b, c) {
        var d = a(c),
            e = c.style.overflowX,
            f = c.style.overflowY;
        return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1;
      }, c.escapeMarkup = function (a) {
        var b = {
          "\\": "&#92;",
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#47;"
        };
        return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
          return b[a];
        });
      }, c.appendMany = function (b, c) {
        if ("1.7" === a.fn.jquery.substr(0, 3)) {
          var d = a();
          a.map(c, function (a) {
            d = d.add(a);
          }), c = d;
        }

        b.append(c);
      }, c;
    }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
      function c(a, b, d) {
        this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
      }

      return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<ul class="select2-results__options" role="tree"></ul>');
        return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b;
      }, c.prototype.clear = function () {
        this.$results.empty();
      }, c.prototype.displayMessage = function (b) {
        var c = this.options.get("escapeMarkup");
        this.clear(), this.hideLoading();
        var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
            e = this.options.get("translations").get(b.message);
        d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
      }, c.prototype.hideMessages = function () {
        this.$results.find(".select2-results__message").remove();
      }, c.prototype.append = function (a) {
        this.hideLoading();
        var b = [];
        if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", {
          message: "noResults"
        }));
        a.results = this.sort(a.results);

        for (var c = 0; c < a.results.length; c++) {
          var d = a.results[c],
              e = this.option(d);
          b.push(e);
        }

        this.$results.append(b);
      }, c.prototype.position = function (a, b) {
        var c = b.find(".select2-results");
        c.append(a);
      }, c.prototype.sort = function (a) {
        var b = this.options.get("sorter");
        return b(a);
      }, c.prototype.highlightFirstItem = function () {
        var a = this.$results.find(".select2-results__option[aria-selected]"),
            b = a.filter("[aria-selected=true]");
        b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible();
      }, c.prototype.setClasses = function () {
        var b = this;
        this.data.current(function (c) {
          var d = a.map(c, function (a) {
            return a.id.toString();
          }),
              e = b.$results.find(".select2-results__option[aria-selected]");
          e.each(function () {
            var b = a(this),
                c = a.data(this, "data"),
                e = "" + c.id;
            null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false");
          });
        });
      }, c.prototype.showLoading = function (a) {
        this.hideLoading();
        var b = this.options.get("translations").get("searching"),
            c = {
          disabled: !0,
          loading: !0,
          text: b(a)
        },
            d = this.option(c);
        d.className += " loading-results", this.$results.prepend(d);
      }, c.prototype.hideLoading = function () {
        this.$results.find(".loading-results").remove();
      }, c.prototype.option = function (b) {
        var c = document.createElement("li");
        c.className = "select2-results__option";
        var d = {
          role: "treeitem",
          "aria-selected": "false"
        };
        b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);

        for (var e in d) {
          var f = d[e];
          c.setAttribute(e, f);
        }

        if (b.children) {
          var g = a(c),
              h = document.createElement("strong");
          h.className = "select2-results__group";
          a(h);
          this.template(b, h);

          for (var i = [], j = 0; j < b.children.length; j++) {
            var k = b.children[j],
                l = this.option(k);
            i.push(l);
          }

          var m = a("<ul></ul>", {
            "class": "select2-results__options select2-results__options--nested"
          });
          m.append(i), g.append(h), g.append(m);
        } else this.template(b, c);

        return a.data(c, "data", b), c;
      }, c.prototype.bind = function (b, c) {
        var d = this,
            e = b.id + "-results";
        this.$results.attr("id", e), b.on("results:all", function (a) {
          d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("results:append", function (a) {
          d.append(a.data), b.isOpen() && d.setClasses();
        }), b.on("query", function (a) {
          d.hideMessages(), d.showLoading(a);
        }), b.on("select", function () {
          b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("unselect", function () {
          b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("open", function () {
          d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible();
        }), b.on("close", function () {
          d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant");
        }), b.on("results:toggle", function () {
          var a = d.getHighlightedResults();
          0 !== a.length && a.trigger("mouseup");
        }), b.on("results:select", function () {
          var a = d.getHighlightedResults();

          if (0 !== a.length) {
            var b = a.data("data");
            "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
              data: b
            });
          }
        }), b.on("results:previous", function () {
          var a = d.getHighlightedResults(),
              b = d.$results.find("[aria-selected]"),
              c = b.index(a);

          if (0 !== c) {
            var e = c - 1;
            0 === a.length && (e = 0);
            var f = b.eq(e);
            f.trigger("mouseenter");
            var g = d.$results.offset().top,
                h = f.offset().top,
                i = d.$results.scrollTop() + (h - g);
            0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i);
          }
        }), b.on("results:next", function () {
          var a = d.getHighlightedResults(),
              b = d.$results.find("[aria-selected]"),
              c = b.index(a),
              e = c + 1;

          if (!(e >= b.length)) {
            var f = b.eq(e);
            f.trigger("mouseenter");
            var g = d.$results.offset().top + d.$results.outerHeight(!1),
                h = f.offset().top + f.outerHeight(!1),
                i = d.$results.scrollTop() + h - g;
            0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i);
          }
        }), b.on("results:focus", function (a) {
          a.element.addClass("select2-results__option--highlighted");
        }), b.on("results:message", function (a) {
          d.displayMessage(a);
        }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
          var b = d.$results.scrollTop(),
              c = d.$results.get(0).scrollHeight - b + a.deltaY,
              e = a.deltaY > 0 && b - a.deltaY <= 0,
              f = a.deltaY < 0 && c <= d.$results.height();
          e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation());
        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
          var c = a(this),
              e = c.data("data");
          return "true" === c.attr("aria-selected") ? void (d.options.get("multiple") ? d.trigger("unselect", {
            originalEvent: b,
            data: e
          }) : d.trigger("close", {})) : void d.trigger("select", {
            originalEvent: b,
            data: e
          });
        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
          var c = a(this).data("data");
          d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
            data: c,
            element: a(this)
          });
        });
      }, c.prototype.getHighlightedResults = function () {
        var a = this.$results.find(".select2-results__option--highlighted");
        return a;
      }, c.prototype.destroy = function () {
        this.$results.remove();
      }, c.prototype.ensureHighlightVisible = function () {
        var a = this.getHighlightedResults();

        if (0 !== a.length) {
          var b = this.$results.find("[aria-selected]"),
              c = b.index(a),
              d = this.$results.offset().top,
              e = a.offset().top,
              f = this.$results.scrollTop() + (e - d),
              g = e - d;
          f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f);
        }
      }, c.prototype.template = function (b, c) {
        var d = this.options.get("templateResult"),
            e = this.options.get("escapeMarkup"),
            f = d(b, c);
        null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
      }, c;
    }), b.define("select2/keys", [], function () {
      var a = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };
      return a;
    }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }

      return b.Extend(d, b.Observable), d.prototype.render = function () {
        var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b;
      }, d.prototype.bind = function (a, b) {
        var d = this,
            e = (a.id + "-container", a.id + "-results");
        this.container = a, this.$selection.on("focus", function (a) {
          d.trigger("focus", a);
        }), this.$selection.on("blur", function (a) {
          d._handleBlur(a);
        }), this.$selection.on("keydown", function (a) {
          d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
        }), a.on("results:focus", function (a) {
          d.$selection.attr("aria-activedescendant", a.data._resultId);
        }), a.on("selection:update", function (a) {
          d.update(a.data);
        }), a.on("open", function () {
          d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
        }), a.on("close", function () {
          d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a);
        }), a.on("enable", function () {
          d.$selection.attr("tabindex", d._tabindex);
        }), a.on("disable", function () {
          d.$selection.attr("tabindex", "-1");
        });
      }, d.prototype._handleBlur = function (b) {
        var c = this;
        window.setTimeout(function () {
          document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
        }, 1);
      }, d.prototype._attachCloseHandler = function (b) {
        a(document.body).on("mousedown.select2." + b.id, function (b) {
          var c = a(b.target),
              d = c.closest(".select2"),
              e = a(".select2.select2-container--open");
          e.each(function () {
            var b = a(this);

            if (this != d[0]) {
              var c = b.data("element");
              c.select2("close");
            }
          });
        });
      }, d.prototype._detachCloseHandler = function (b) {
        a(document.body).off("mousedown.select2." + b.id);
      }, d.prototype.position = function (a, b) {
        var c = b.find(".selection");
        c.append(a);
      }, d.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      }, d.prototype.update = function (a) {
        throw new Error("The `update` method must be defined in child classes.");
      }, d;
    }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
      function e() {
        e.__super__.constructor.apply(this, arguments);
      }

      return c.Extend(e, b), e.prototype.render = function () {
        var a = e.__super__.render.call(this);

        return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a;
      }, e.prototype.bind = function (a, b) {
        var c = this;

        e.__super__.bind.apply(this, arguments);

        var d = a.id + "-container";
        this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
          1 === a.which && c.trigger("toggle", {
            originalEvent: a
          });
        }), this.$selection.on("focus", function (a) {}), this.$selection.on("blur", function (a) {}), a.on("focus", function (b) {
          a.isOpen() || c.$selection.focus();
        }), a.on("selection:update", function (a) {
          c.update(a.data);
        });
      }, e.prototype.clear = function () {
        this.$selection.find(".select2-selection__rendered").empty();
      }, e.prototype.display = function (a, b) {
        var c = this.options.get("templateSelection"),
            d = this.options.get("escapeMarkup");
        return d(c(a, b));
      }, e.prototype.selectionContainer = function () {
        return a("<span></span>");
      }, e.prototype.update = function (a) {
        if (0 === a.length) return void this.clear();
        var b = a[0],
            c = this.$selection.find(".select2-selection__rendered"),
            d = this.display(b, c);
        c.empty().append(d), c.prop("title", b.title || b.text);
      }, e;
    }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
      function d(a, b) {
        d.__super__.constructor.apply(this, arguments);
      }

      return c.Extend(d, b), d.prototype.render = function () {
        var a = d.__super__.render.call(this);

        return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a;
      }, d.prototype.bind = function (b, c) {
        var e = this;
        d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
          e.trigger("toggle", {
            originalEvent: a
          });
        }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
          if (!e.options.get("disabled")) {
            var c = a(this),
                d = c.parent(),
                f = d.data("data");
            e.trigger("unselect", {
              originalEvent: b,
              data: f
            });
          }
        });
      }, d.prototype.clear = function () {
        this.$selection.find(".select2-selection__rendered").empty();
      }, d.prototype.display = function (a, b) {
        var c = this.options.get("templateSelection"),
            d = this.options.get("escapeMarkup");
        return d(c(a, b));
      }, d.prototype.selectionContainer = function () {
        var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
        return b;
      }, d.prototype.update = function (a) {
        if (this.clear(), 0 !== a.length) {
          for (var b = [], d = 0; d < a.length; d++) {
            var e = a[d],
                f = this.selectionContainer(),
                g = this.display(e, f);
            f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f);
          }

          var h = this.$selection.find(".select2-selection__rendered");
          c.appendMany(h, b);
        }
      }, d;
    }), b.define("select2/selection/placeholder", ["../utils"], function (a) {
      function b(a, b, c) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
      }

      return b.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = {
          id: "",
          text: b
        }), b;
      }, b.prototype.createPlaceholder = function (a, b) {
        var c = this.selectionContainer();
        return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c;
      }, b.prototype.update = function (a, b) {
        var c = 1 == b.length && b[0].id != this.placeholder.id,
            d = b.length > 1;
        if (d || c) return a.call(this, b);
        this.clear();
        var e = this.createPlaceholder(this.placeholder);
        this.$selection.find(".select2-selection__rendered").append(e);
      }, b;
    }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
      function c() {}

      return c.prototype.bind = function (a, b, c) {
        var d = this;
        a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
          d._handleClear(a);
        }), b.on("keypress", function (a) {
          d._handleKeyboardClear(a, b);
        });
      }, c.prototype._handleClear = function (a, b) {
        if (!this.options.get("disabled")) {
          var c = this.$selection.find(".select2-selection__clear");

          if (0 !== c.length) {
            b.stopPropagation();

            for (var d = c.data("data"), e = 0; e < d.length; e++) {
              var f = {
                data: d[e]
              };
              if (this.trigger("unselect", f), f.prevented) return;
            }

            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
          }
        }
      }, c.prototype._handleKeyboardClear = function (a, c, d) {
        d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c);
      }, c.prototype.update = function (b, c) {
        if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
          var d = a('<span class="select2-selection__clear">&times;</span>');
          d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d);
        }
      }, c;
    }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b, c) {
        a.call(this, b, c);
      }

      return d.prototype.render = function (b) {
        var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
        this.$searchContainer = c, this.$search = c.find("input");
        var d = b.call(this);
        return this._transferTabIndex(), d;
      }, d.prototype.bind = function (a, b, d) {
        var e = this;
        a.call(this, b, d), b.on("open", function () {
          e.$search.trigger("focus");
        }), b.on("close", function () {
          e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus");
        }), b.on("enable", function () {
          e.$search.prop("disabled", !1), e._transferTabIndex();
        }), b.on("disable", function () {
          e.$search.prop("disabled", !0);
        }), b.on("focus", function (a) {
          e.$search.trigger("focus");
        }), b.on("results:focus", function (a) {
          e.$search.attr("aria-activedescendant", a.id);
        }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
          e.trigger("focus", a);
        }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
          e._handleBlur(a);
        }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
          a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
          var b = a.which;

          if (b === c.BACKSPACE && "" === e.$search.val()) {
            var d = e.$searchContainer.prev(".select2-selection__choice");

            if (d.length > 0) {
              var f = d.data("data");
              e.searchRemoveChoice(f), a.preventDefault();
            }
          }
        });
        var f = document.documentMode,
            g = f && 11 >= f;
        this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
          return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search");
        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
          if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
          var b = a.which;
          b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a);
        });
      }, d.prototype._transferTabIndex = function (a) {
        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
      }, d.prototype.createPlaceholder = function (a, b) {
        this.$search.attr("placeholder", b.text);
      }, d.prototype.update = function (a, b) {
        var c = this.$search[0] == document.activeElement;
        this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus();
      }, d.prototype.handleSearch = function () {
        if (this.resizeSearch(), !this._keyUpPrevented) {
          var a = this.$search.val();
          this.trigger("query", {
            term: a
          });
        }

        this._keyUpPrevented = !1;
      }, d.prototype.searchRemoveChoice = function (a, b) {
        this.trigger("unselect", {
          data: b
        }), this.$search.val(b.text), this.handleSearch();
      }, d.prototype.resizeSearch = function () {
        this.$search.css("width", "25px");
        var a = "";
        if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();else {
          var b = this.$search.val().length + 1;
          a = .75 * b + "em";
        }
        this.$search.css("width", a);
      }, d;
    }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
      function b() {}

      return b.prototype.bind = function (b, c, d) {
        var e = this,
            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
            g = ["opening", "closing", "selecting", "unselecting"];
        b.call(this, c, d), c.on("*", function (b, c) {
          if (-1 !== a.inArray(b, f)) {
            c = c || {};
            var d = a.Event("select2:" + b, {
              params: c
            });
            e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
          }
        });
      }, b;
    }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
      function c(a) {
        this.dict = a || {};
      }

      return c.prototype.all = function () {
        return this.dict;
      }, c.prototype.get = function (a) {
        return this.dict[a];
      }, c.prototype.extend = function (b) {
        this.dict = a.extend({}, b.all(), this.dict);
      }, c._cache = {}, c.loadPath = function (a) {
        if (!(a in c._cache)) {
          var d = b(a);
          c._cache[a] = d;
        }

        return new c(c._cache[a]);
      }, c;
    }), b.define("select2/diacritics", [], function () {
      var a = {
        "Ⓐ": "A",
        "Ａ": "A",
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ầ": "A",
        "Ấ": "A",
        "Ẫ": "A",
        "Ẩ": "A",
        "Ã": "A",
        "Ā": "A",
        "Ă": "A",
        "Ằ": "A",
        "Ắ": "A",
        "Ẵ": "A",
        "Ẳ": "A",
        "Ȧ": "A",
        "Ǡ": "A",
        "Ä": "A",
        "Ǟ": "A",
        "Ả": "A",
        "Å": "A",
        "Ǻ": "A",
        "Ǎ": "A",
        "Ȁ": "A",
        "Ȃ": "A",
        "Ạ": "A",
        "Ậ": "A",
        "Ặ": "A",
        "Ḁ": "A",
        "Ą": "A",
        "Ⱥ": "A",
        "Ɐ": "A",
        "Ꜳ": "AA",
        "Æ": "AE",
        "Ǽ": "AE",
        "Ǣ": "AE",
        "Ꜵ": "AO",
        "Ꜷ": "AU",
        "Ꜹ": "AV",
        "Ꜻ": "AV",
        "Ꜽ": "AY",
        "Ⓑ": "B",
        "Ｂ": "B",
        "Ḃ": "B",
        "Ḅ": "B",
        "Ḇ": "B",
        "Ƀ": "B",
        "Ƃ": "B",
        "Ɓ": "B",
        "Ⓒ": "C",
        "Ｃ": "C",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "Ç": "C",
        "Ḉ": "C",
        "Ƈ": "C",
        "Ȼ": "C",
        "Ꜿ": "C",
        "Ⓓ": "D",
        "Ｄ": "D",
        "Ḋ": "D",
        "Ď": "D",
        "Ḍ": "D",
        "Ḑ": "D",
        "Ḓ": "D",
        "Ḏ": "D",
        "Đ": "D",
        "Ƌ": "D",
        "Ɗ": "D",
        "Ɖ": "D",
        "Ꝺ": "D",
        "Ǳ": "DZ",
        "Ǆ": "DZ",
        "ǲ": "Dz",
        "ǅ": "Dz",
        "Ⓔ": "E",
        "Ｅ": "E",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ề": "E",
        "Ế": "E",
        "Ễ": "E",
        "Ể": "E",
        "Ẽ": "E",
        "Ē": "E",
        "Ḕ": "E",
        "Ḗ": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ë": "E",
        "Ẻ": "E",
        "Ě": "E",
        "Ȅ": "E",
        "Ȇ": "E",
        "Ẹ": "E",
        "Ệ": "E",
        "Ȩ": "E",
        "Ḝ": "E",
        "Ę": "E",
        "Ḙ": "E",
        "Ḛ": "E",
        "Ɛ": "E",
        "Ǝ": "E",
        "Ⓕ": "F",
        "Ｆ": "F",
        "Ḟ": "F",
        "Ƒ": "F",
        "Ꝼ": "F",
        "Ⓖ": "G",
        "Ｇ": "G",
        "Ǵ": "G",
        "Ĝ": "G",
        "Ḡ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ǧ": "G",
        "Ģ": "G",
        "Ǥ": "G",
        "Ɠ": "G",
        "Ꞡ": "G",
        "Ᵹ": "G",
        "Ꝿ": "G",
        "Ⓗ": "H",
        "Ｈ": "H",
        "Ĥ": "H",
        "Ḣ": "H",
        "Ḧ": "H",
        "Ȟ": "H",
        "Ḥ": "H",
        "Ḩ": "H",
        "Ḫ": "H",
        "Ħ": "H",
        "Ⱨ": "H",
        "Ⱶ": "H",
        "Ɥ": "H",
        "Ⓘ": "I",
        "Ｉ": "I",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "İ": "I",
        "Ï": "I",
        "Ḯ": "I",
        "Ỉ": "I",
        "Ǐ": "I",
        "Ȉ": "I",
        "Ȋ": "I",
        "Ị": "I",
        "Į": "I",
        "Ḭ": "I",
        "Ɨ": "I",
        "Ⓙ": "J",
        "Ｊ": "J",
        "Ĵ": "J",
        "Ɉ": "J",
        "Ⓚ": "K",
        "Ｋ": "K",
        "Ḱ": "K",
        "Ǩ": "K",
        "Ḳ": "K",
        "Ķ": "K",
        "Ḵ": "K",
        "Ƙ": "K",
        "Ⱪ": "K",
        "Ꝁ": "K",
        "Ꝃ": "K",
        "Ꝅ": "K",
        "Ꞣ": "K",
        "Ⓛ": "L",
        "Ｌ": "L",
        "Ŀ": "L",
        "Ĺ": "L",
        "Ľ": "L",
        "Ḷ": "L",
        "Ḹ": "L",
        "Ļ": "L",
        "Ḽ": "L",
        "Ḻ": "L",
        "Ł": "L",
        "Ƚ": "L",
        "Ɫ": "L",
        "Ⱡ": "L",
        "Ꝉ": "L",
        "Ꝇ": "L",
        "Ꞁ": "L",
        "Ǉ": "LJ",
        "ǈ": "Lj",
        "Ⓜ": "M",
        "Ｍ": "M",
        "Ḿ": "M",
        "Ṁ": "M",
        "Ṃ": "M",
        "Ɱ": "M",
        "Ɯ": "M",
        "Ⓝ": "N",
        "Ｎ": "N",
        "Ǹ": "N",
        "Ń": "N",
        "Ñ": "N",
        "Ṅ": "N",
        "Ň": "N",
        "Ṇ": "N",
        "Ņ": "N",
        "Ṋ": "N",
        "Ṉ": "N",
        "Ƞ": "N",
        "Ɲ": "N",
        "Ꞑ": "N",
        "Ꞥ": "N",
        "Ǌ": "NJ",
        "ǋ": "Nj",
        "Ⓞ": "O",
        "Ｏ": "O",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Ồ": "O",
        "Ố": "O",
        "Ỗ": "O",
        "Ổ": "O",
        "Õ": "O",
        "Ṍ": "O",
        "Ȭ": "O",
        "Ṏ": "O",
        "Ō": "O",
        "Ṑ": "O",
        "Ṓ": "O",
        "Ŏ": "O",
        "Ȯ": "O",
        "Ȱ": "O",
        "Ö": "O",
        "Ȫ": "O",
        "Ỏ": "O",
        "Ő": "O",
        "Ǒ": "O",
        "Ȍ": "O",
        "Ȏ": "O",
        "Ơ": "O",
        "Ờ": "O",
        "Ớ": "O",
        "Ỡ": "O",
        "Ở": "O",
        "Ợ": "O",
        "Ọ": "O",
        "Ộ": "O",
        "Ǫ": "O",
        "Ǭ": "O",
        "Ø": "O",
        "Ǿ": "O",
        "Ɔ": "O",
        "Ɵ": "O",
        "Ꝋ": "O",
        "Ꝍ": "O",
        "Ƣ": "OI",
        "Ꝏ": "OO",
        "Ȣ": "OU",
        "Ⓟ": "P",
        "Ｐ": "P",
        "Ṕ": "P",
        "Ṗ": "P",
        "Ƥ": "P",
        "Ᵽ": "P",
        "Ꝑ": "P",
        "Ꝓ": "P",
        "Ꝕ": "P",
        "Ⓠ": "Q",
        "Ｑ": "Q",
        "Ꝗ": "Q",
        "Ꝙ": "Q",
        "Ɋ": "Q",
        "Ⓡ": "R",
        "Ｒ": "R",
        "Ŕ": "R",
        "Ṙ": "R",
        "Ř": "R",
        "Ȑ": "R",
        "Ȓ": "R",
        "Ṛ": "R",
        "Ṝ": "R",
        "Ŗ": "R",
        "Ṟ": "R",
        "Ɍ": "R",
        "Ɽ": "R",
        "Ꝛ": "R",
        "Ꞧ": "R",
        "Ꞃ": "R",
        "Ⓢ": "S",
        "Ｓ": "S",
        "ẞ": "S",
        "Ś": "S",
        "Ṥ": "S",
        "Ŝ": "S",
        "Ṡ": "S",
        "Š": "S",
        "Ṧ": "S",
        "Ṣ": "S",
        "Ṩ": "S",
        "Ș": "S",
        "Ş": "S",
        "Ȿ": "S",
        "Ꞩ": "S",
        "Ꞅ": "S",
        "Ⓣ": "T",
        "Ｔ": "T",
        "Ṫ": "T",
        "Ť": "T",
        "Ṭ": "T",
        "Ț": "T",
        "Ţ": "T",
        "Ṱ": "T",
        "Ṯ": "T",
        "Ŧ": "T",
        "Ƭ": "T",
        "Ʈ": "T",
        "Ⱦ": "T",
        "Ꞇ": "T",
        "Ꜩ": "TZ",
        "Ⓤ": "U",
        "Ｕ": "U",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ũ": "U",
        "Ṹ": "U",
        "Ū": "U",
        "Ṻ": "U",
        "Ŭ": "U",
        "Ü": "U",
        "Ǜ": "U",
        "Ǘ": "U",
        "Ǖ": "U",
        "Ǚ": "U",
        "Ủ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ǔ": "U",
        "Ȕ": "U",
        "Ȗ": "U",
        "Ư": "U",
        "Ừ": "U",
        "Ứ": "U",
        "Ữ": "U",
        "Ử": "U",
        "Ự": "U",
        "Ụ": "U",
        "Ṳ": "U",
        "Ų": "U",
        "Ṷ": "U",
        "Ṵ": "U",
        "Ʉ": "U",
        "Ⓥ": "V",
        "Ｖ": "V",
        "Ṽ": "V",
        "Ṿ": "V",
        "Ʋ": "V",
        "Ꝟ": "V",
        "Ʌ": "V",
        "Ꝡ": "VY",
        "Ⓦ": "W",
        "Ｗ": "W",
        "Ẁ": "W",
        "Ẃ": "W",
        "Ŵ": "W",
        "Ẇ": "W",
        "Ẅ": "W",
        "Ẉ": "W",
        "Ⱳ": "W",
        "Ⓧ": "X",
        "Ｘ": "X",
        "Ẋ": "X",
        "Ẍ": "X",
        "Ⓨ": "Y",
        "Ｙ": "Y",
        "Ỳ": "Y",
        "Ý": "Y",
        "Ŷ": "Y",
        "Ỹ": "Y",
        "Ȳ": "Y",
        "Ẏ": "Y",
        "Ÿ": "Y",
        "Ỷ": "Y",
        "Ỵ": "Y",
        "Ƴ": "Y",
        "Ɏ": "Y",
        "Ỿ": "Y",
        "Ⓩ": "Z",
        "Ｚ": "Z",
        "Ź": "Z",
        "Ẑ": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "Ẓ": "Z",
        "Ẕ": "Z",
        "Ƶ": "Z",
        "Ȥ": "Z",
        "Ɀ": "Z",
        "Ⱬ": "Z",
        "Ꝣ": "Z",
        "ⓐ": "a",
        "ａ": "a",
        "ẚ": "a",
        "à": "a",
        "á": "a",
        "â": "a",
        "ầ": "a",
        "ấ": "a",
        "ẫ": "a",
        "ẩ": "a",
        "ã": "a",
        "ā": "a",
        "ă": "a",
        "ằ": "a",
        "ắ": "a",
        "ẵ": "a",
        "ẳ": "a",
        "ȧ": "a",
        "ǡ": "a",
        "ä": "a",
        "ǟ": "a",
        "ả": "a",
        "å": "a",
        "ǻ": "a",
        "ǎ": "a",
        "ȁ": "a",
        "ȃ": "a",
        "ạ": "a",
        "ậ": "a",
        "ặ": "a",
        "ḁ": "a",
        "ą": "a",
        "ⱥ": "a",
        "ɐ": "a",
        "ꜳ": "aa",
        "æ": "ae",
        "ǽ": "ae",
        "ǣ": "ae",
        "ꜵ": "ao",
        "ꜷ": "au",
        "ꜹ": "av",
        "ꜻ": "av",
        "ꜽ": "ay",
        "ⓑ": "b",
        "ｂ": "b",
        "ḃ": "b",
        "ḅ": "b",
        "ḇ": "b",
        "ƀ": "b",
        "ƃ": "b",
        "ɓ": "b",
        "ⓒ": "c",
        "ｃ": "c",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "ç": "c",
        "ḉ": "c",
        "ƈ": "c",
        "ȼ": "c",
        "ꜿ": "c",
        "ↄ": "c",
        "ⓓ": "d",
        "ｄ": "d",
        "ḋ": "d",
        "ď": "d",
        "ḍ": "d",
        "ḑ": "d",
        "ḓ": "d",
        "ḏ": "d",
        "đ": "d",
        "ƌ": "d",
        "ɖ": "d",
        "ɗ": "d",
        "ꝺ": "d",
        "ǳ": "dz",
        "ǆ": "dz",
        "ⓔ": "e",
        "ｅ": "e",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ề": "e",
        "ế": "e",
        "ễ": "e",
        "ể": "e",
        "ẽ": "e",
        "ē": "e",
        "ḕ": "e",
        "ḗ": "e",
        "ĕ": "e",
        "ė": "e",
        "ë": "e",
        "ẻ": "e",
        "ě": "e",
        "ȅ": "e",
        "ȇ": "e",
        "ẹ": "e",
        "ệ": "e",
        "ȩ": "e",
        "ḝ": "e",
        "ę": "e",
        "ḙ": "e",
        "ḛ": "e",
        "ɇ": "e",
        "ɛ": "e",
        "ǝ": "e",
        "ⓕ": "f",
        "ｆ": "f",
        "ḟ": "f",
        "ƒ": "f",
        "ꝼ": "f",
        "ⓖ": "g",
        "ｇ": "g",
        "ǵ": "g",
        "ĝ": "g",
        "ḡ": "g",
        "ğ": "g",
        "ġ": "g",
        "ǧ": "g",
        "ģ": "g",
        "ǥ": "g",
        "ɠ": "g",
        "ꞡ": "g",
        "ᵹ": "g",
        "ꝿ": "g",
        "ⓗ": "h",
        "ｈ": "h",
        "ĥ": "h",
        "ḣ": "h",
        "ḧ": "h",
        "ȟ": "h",
        "ḥ": "h",
        "ḩ": "h",
        "ḫ": "h",
        "ẖ": "h",
        "ħ": "h",
        "ⱨ": "h",
        "ⱶ": "h",
        "ɥ": "h",
        "ƕ": "hv",
        "ⓘ": "i",
        "ｉ": "i",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "ï": "i",
        "ḯ": "i",
        "ỉ": "i",
        "ǐ": "i",
        "ȉ": "i",
        "ȋ": "i",
        "ị": "i",
        "į": "i",
        "ḭ": "i",
        "ɨ": "i",
        "ı": "i",
        "ⓙ": "j",
        "ｊ": "j",
        "ĵ": "j",
        "ǰ": "j",
        "ɉ": "j",
        "ⓚ": "k",
        "ｋ": "k",
        "ḱ": "k",
        "ǩ": "k",
        "ḳ": "k",
        "ķ": "k",
        "ḵ": "k",
        "ƙ": "k",
        "ⱪ": "k",
        "ꝁ": "k",
        "ꝃ": "k",
        "ꝅ": "k",
        "ꞣ": "k",
        "ⓛ": "l",
        "ｌ": "l",
        "ŀ": "l",
        "ĺ": "l",
        "ľ": "l",
        "ḷ": "l",
        "ḹ": "l",
        "ļ": "l",
        "ḽ": "l",
        "ḻ": "l",
        "ſ": "l",
        "ł": "l",
        "ƚ": "l",
        "ɫ": "l",
        "ⱡ": "l",
        "ꝉ": "l",
        "ꞁ": "l",
        "ꝇ": "l",
        "ǉ": "lj",
        "ⓜ": "m",
        "ｍ": "m",
        "ḿ": "m",
        "ṁ": "m",
        "ṃ": "m",
        "ɱ": "m",
        "ɯ": "m",
        "ⓝ": "n",
        "ｎ": "n",
        "ǹ": "n",
        "ń": "n",
        "ñ": "n",
        "ṅ": "n",
        "ň": "n",
        "ṇ": "n",
        "ņ": "n",
        "ṋ": "n",
        "ṉ": "n",
        "ƞ": "n",
        "ɲ": "n",
        "ŉ": "n",
        "ꞑ": "n",
        "ꞥ": "n",
        "ǌ": "nj",
        "ⓞ": "o",
        "ｏ": "o",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "ồ": "o",
        "ố": "o",
        "ỗ": "o",
        "ổ": "o",
        "õ": "o",
        "ṍ": "o",
        "ȭ": "o",
        "ṏ": "o",
        "ō": "o",
        "ṑ": "o",
        "ṓ": "o",
        "ŏ": "o",
        "ȯ": "o",
        "ȱ": "o",
        "ö": "o",
        "ȫ": "o",
        "ỏ": "o",
        "ő": "o",
        "ǒ": "o",
        "ȍ": "o",
        "ȏ": "o",
        "ơ": "o",
        "ờ": "o",
        "ớ": "o",
        "ỡ": "o",
        "ở": "o",
        "ợ": "o",
        "ọ": "o",
        "ộ": "o",
        "ǫ": "o",
        "ǭ": "o",
        "ø": "o",
        "ǿ": "o",
        "ɔ": "o",
        "ꝋ": "o",
        "ꝍ": "o",
        "ɵ": "o",
        "ƣ": "oi",
        "ȣ": "ou",
        "ꝏ": "oo",
        "ⓟ": "p",
        "ｐ": "p",
        "ṕ": "p",
        "ṗ": "p",
        "ƥ": "p",
        "ᵽ": "p",
        "ꝑ": "p",
        "ꝓ": "p",
        "ꝕ": "p",
        "ⓠ": "q",
        "ｑ": "q",
        "ɋ": "q",
        "ꝗ": "q",
        "ꝙ": "q",
        "ⓡ": "r",
        "ｒ": "r",
        "ŕ": "r",
        "ṙ": "r",
        "ř": "r",
        "ȑ": "r",
        "ȓ": "r",
        "ṛ": "r",
        "ṝ": "r",
        "ŗ": "r",
        "ṟ": "r",
        "ɍ": "r",
        "ɽ": "r",
        "ꝛ": "r",
        "ꞧ": "r",
        "ꞃ": "r",
        "ⓢ": "s",
        "ｓ": "s",
        "ß": "s",
        "ś": "s",
        "ṥ": "s",
        "ŝ": "s",
        "ṡ": "s",
        "š": "s",
        "ṧ": "s",
        "ṣ": "s",
        "ṩ": "s",
        "ș": "s",
        "ş": "s",
        "ȿ": "s",
        "ꞩ": "s",
        "ꞅ": "s",
        "ẛ": "s",
        "ⓣ": "t",
        "ｔ": "t",
        "ṫ": "t",
        "ẗ": "t",
        "ť": "t",
        "ṭ": "t",
        "ț": "t",
        "ţ": "t",
        "ṱ": "t",
        "ṯ": "t",
        "ŧ": "t",
        "ƭ": "t",
        "ʈ": "t",
        "ⱦ": "t",
        "ꞇ": "t",
        "ꜩ": "tz",
        "ⓤ": "u",
        "ｕ": "u",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ũ": "u",
        "ṹ": "u",
        "ū": "u",
        "ṻ": "u",
        "ŭ": "u",
        "ü": "u",
        "ǜ": "u",
        "ǘ": "u",
        "ǖ": "u",
        "ǚ": "u",
        "ủ": "u",
        "ů": "u",
        "ű": "u",
        "ǔ": "u",
        "ȕ": "u",
        "ȗ": "u",
        "ư": "u",
        "ừ": "u",
        "ứ": "u",
        "ữ": "u",
        "ử": "u",
        "ự": "u",
        "ụ": "u",
        "ṳ": "u",
        "ų": "u",
        "ṷ": "u",
        "ṵ": "u",
        "ʉ": "u",
        "ⓥ": "v",
        "ｖ": "v",
        "ṽ": "v",
        "ṿ": "v",
        "ʋ": "v",
        "ꝟ": "v",
        "ʌ": "v",
        "ꝡ": "vy",
        "ⓦ": "w",
        "ｗ": "w",
        "ẁ": "w",
        "ẃ": "w",
        "ŵ": "w",
        "ẇ": "w",
        "ẅ": "w",
        "ẘ": "w",
        "ẉ": "w",
        "ⱳ": "w",
        "ⓧ": "x",
        "ｘ": "x",
        "ẋ": "x",
        "ẍ": "x",
        "ⓨ": "y",
        "ｙ": "y",
        "ỳ": "y",
        "ý": "y",
        "ŷ": "y",
        "ỹ": "y",
        "ȳ": "y",
        "ẏ": "y",
        "ÿ": "y",
        "ỷ": "y",
        "ẙ": "y",
        "ỵ": "y",
        "ƴ": "y",
        "ɏ": "y",
        "ỿ": "y",
        "ⓩ": "z",
        "ｚ": "z",
        "ź": "z",
        "ẑ": "z",
        "ż": "z",
        "ž": "z",
        "ẓ": "z",
        "ẕ": "z",
        "ƶ": "z",
        "ȥ": "z",
        "ɀ": "z",
        "ⱬ": "z",
        "ꝣ": "z",
        "Ά": "Α",
        "Έ": "Ε",
        "Ή": "Η",
        "Ί": "Ι",
        "Ϊ": "Ι",
        "Ό": "Ο",
        "Ύ": "Υ",
        "Ϋ": "Υ",
        "Ώ": "Ω",
        "ά": "α",
        "έ": "ε",
        "ή": "η",
        "ί": "ι",
        "ϊ": "ι",
        "ΐ": "ι",
        "ό": "ο",
        "ύ": "υ",
        "ϋ": "υ",
        "ΰ": "υ",
        "ω": "ω",
        "ς": "σ"
      };
      return a;
    }), b.define("select2/data/base", ["../utils"], function (a) {
      function b(a, c) {
        b.__super__.constructor.call(this);
      }

      return a.Extend(b, a.Observable), b.prototype.current = function (a) {
        throw new Error("The `current` method must be defined in child classes.");
      }, b.prototype.query = function (a, b) {
        throw new Error("The `query` method must be defined in child classes.");
      }, b.prototype.bind = function (a, b) {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
        var d = b.id + "-result-";
        return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4);
      }, b;
    }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }

      return b.Extend(d, a), d.prototype.current = function (a) {
        var b = [],
            d = this;
        this.$element.find(":selected").each(function () {
          var a = c(this),
              e = d.item(a);
          b.push(e);
        }), a(b);
      }, d.prototype.select = function (a) {
        var b = this;
        if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
        if (this.$element.prop("multiple")) this.current(function (d) {
          var e = [];
          a = [a], a.push.apply(a, d);

          for (var f = 0; f < a.length; f++) {
            var g = a[f].id;
            -1 === c.inArray(g, e) && e.push(g);
          }

          b.$element.val(e), b.$element.trigger("change");
        });else {
          var d = a.id;
          this.$element.val(d), this.$element.trigger("change");
        }
      }, d.prototype.unselect = function (a) {
        var b = this;
        if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
          for (var e = [], f = 0; f < d.length; f++) {
            var g = d[f].id;
            g !== a.id && -1 === c.inArray(g, e) && e.push(g);
          }

          b.$element.val(e), b.$element.trigger("change");
        });
      }, d.prototype.bind = function (a, b) {
        var c = this;
        this.container = a, a.on("select", function (a) {
          c.select(a.data);
        }), a.on("unselect", function (a) {
          c.unselect(a.data);
        });
      }, d.prototype.destroy = function () {
        this.$element.find("*").each(function () {
          c.removeData(this, "data");
        });
      }, d.prototype.query = function (a, b) {
        var d = [],
            e = this,
            f = this.$element.children();
        f.each(function () {
          var b = c(this);

          if (b.is("option") || b.is("optgroup")) {
            var f = e.item(b),
                g = e.matches(a, f);
            null !== g && d.push(g);
          }
        }), b({
          results: d
        });
      }, d.prototype.addOptions = function (a) {
        b.appendMany(this.$element, a);
      }, d.prototype.option = function (a) {
        var b;
        a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);

        var d = c(b),
            e = this._normalizeItem(a);

        return e.element = b, c.data(b, "data", e), d;
      }, d.prototype.item = function (a) {
        var b = {};
        if (b = c.data(a[0], "data"), null != b) return b;
        if (a.is("option")) b = {
          id: a.val(),
          text: a.text(),
          disabled: a.prop("disabled"),
          selected: a.prop("selected"),
          title: a.prop("title")
        };else if (a.is("optgroup")) {
          b = {
            text: a.prop("label"),
            children: [],
            title: a.prop("title")
          };

          for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
            var g = c(d[f]),
                h = this.item(g);
            e.push(h);
          }

          b.children = e;
        }
        return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b;
      }, d.prototype._normalizeItem = function (a) {
        c.isPlainObject(a) || (a = {
          id: a,
          text: a
        }), a = c.extend({}, {
          text: ""
        }, a);
        var b = {
          selected: !1,
          disabled: !1
        };
        return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a);
      }, d.prototype.matches = function (a, b) {
        var c = this.options.get("matcher");
        return c(a, b);
      }, d;
    }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        var c = b.get("data") || [];
        d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
      }

      return b.Extend(d, a), d.prototype.select = function (a) {
        var b = this.$element.find("option").filter(function (b, c) {
          return c.value == a.id.toString();
        });
        0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
      }, d.prototype.convertToOptions = function (a) {
        function d(a) {
          return function () {
            return c(this).val() == a.id;
          };
        }

        for (var e = this, f = this.$element.find("option"), g = f.map(function () {
          return e.item(c(this)).id;
        }).get(), h = [], i = 0; i < a.length; i++) {
          var j = this._normalizeItem(a[i]);

          if (c.inArray(j.id, g) >= 0) {
            var k = f.filter(d(j)),
                l = this.item(k),
                m = c.extend(!0, {}, j, l),
                n = this.option(m);
            k.replaceWith(n);
          } else {
            var o = this.option(j);

            if (j.children) {
              var p = this.convertToOptions(j.children);
              b.appendMany(o, p);
            }

            h.push(o);
          }
        }

        return h;
      }, d;
    }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b);
      }

      return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
        var b = {
          data: function data(a) {
            return c.extend({}, a, {
              q: a.term
            });
          },
          transport: function transport(a, b, d) {
            var e = c.ajax(a);
            return e.then(b), e.fail(d), e;
          }
        };
        return c.extend({}, b, a, !0);
      }, d.prototype.processResults = function (a) {
        return a;
      }, d.prototype.query = function (a, b) {
        function d() {
          var d = f.transport(f, function (d) {
            var f = e.processResults(d, a);
            e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f);
          }, function () {
            d.status && "0" === d.status || e.trigger("results:message", {
              message: "errorLoading"
            });
          });
          e._request = d;
        }

        var e = this;
        null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
        var f = c.extend({
          type: "GET"
        }, this.ajaxOptions);
        "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
      }, d;
    }), b.define("select2/data/tags", ["jquery"], function (a) {
      function b(b, c, d) {
        var e = d.get("tags"),
            f = d.get("createTag");
        void 0 !== f && (this.createTag = f);
        var g = d.get("insertTag");
        if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) {
          var i = e[h],
              j = this._normalizeItem(i),
              k = this.option(j);

          this.$element.append(k);
        }
      }

      return b.prototype.query = function (a, b, c) {
        function d(a, f) {
          for (var g = a.results, h = 0; h < g.length; h++) {
            var i = g[h],
                j = null != i.children && !d({
              results: i.children
            }, !0),
                k = i.text === b.term;
            if (k || j) return f ? !1 : (a.data = g, void c(a));
          }

          if (f) return !0;
          var l = e.createTag(b);

          if (null != l) {
            var m = e.option(l);
            m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l);
          }

          a.results = g, c(a);
        }

        var e = this;
        return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d);
      }, b.prototype.createTag = function (b, c) {
        var d = a.trim(c.term);
        return "" === d ? null : {
          id: d,
          text: d
        };
      }, b.prototype.insertTag = function (a, b, c) {
        b.unshift(c);
      }, b.prototype._removeOldTags = function (b) {
        var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
        c.each(function () {
          this.selected || a(this).remove();
        });
      }, b;
    }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
      function b(a, b, c) {
        var d = c.get("tokenizer");
        void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
      }

      return b.prototype.bind = function (a, b, c) {
        a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
      }, b.prototype.query = function (b, c, d) {
        function e(b) {
          var c = g._normalizeItem(b),
              d = g.$element.find("option").filter(function () {
            return a(this).val() === c.id;
          });

          if (!d.length) {
            var e = g.option(c);
            e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e]);
          }

          f(c);
        }

        function f(a) {
          g.trigger("select", {
            data: a
          });
        }

        var g = this;
        c.term = c.term || "";
        var h = this.tokenizer(c, this.options, e);
        h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d);
      }, b.prototype.tokenizer = function (b, c, d, e) {
        for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
          return {
            id: a.term,
            text: a.term
          };
        }; h < g.length;) {
          var j = g[h];

          if (-1 !== a.inArray(j, f)) {
            var k = g.substr(0, h),
                l = a.extend({}, c, {
              term: k
            }),
                m = i(l);
            null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
          } else h++;
        }

        return {
          term: g
        };
      }, b;
    }), b.define("select2/data/minimumInputLength", [], function () {
      function a(a, b, c) {
        this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
      }

      return a.prototype.query = function (a, b, c) {
        return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
          message: "inputTooShort",
          args: {
            minimum: this.minimumInputLength,
            input: b.term,
            params: b
          }
        }) : void a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumInputLength", [], function () {
      function a(a, b, c) {
        this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
      }

      return a.prototype.query = function (a, b, c) {
        return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
          message: "inputTooLong",
          args: {
            maximum: this.maximumInputLength,
            input: b.term,
            params: b
          }
        }) : void a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumSelectionLength", [], function () {
      function a(a, b, c) {
        this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
      }

      return a.prototype.query = function (a, b, c) {
        var d = this;
        this.current(function (e) {
          var f = null != e ? e.length : 0;
          return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
            message: "maximumSelected",
            args: {
              maximum: d.maximumSelectionLength
            }
          }) : void a.call(d, b, c);
        });
      }, a;
    }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
      function c(a, b) {
        this.$element = a, this.options = b, c.__super__.constructor.call(this);
      }

      return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
        return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
      }, c.prototype.bind = function () {}, c.prototype.position = function (a, b) {}, c.prototype.destroy = function () {
        this.$dropdown.remove();
      }, c;
    }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
      function c() {}

      return c.prototype.render = function (b) {
        var c = b.call(this),
            d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
        return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c;
      }, c.prototype.bind = function (b, c, d) {
        var e = this;
        b.call(this, c, d), this.$search.on("keydown", function (a) {
          e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
        }), this.$search.on("input", function (b) {
          a(this).off("keyup");
        }), this.$search.on("keyup input", function (a) {
          e.handleSearch(a);
        }), c.on("open", function () {
          e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
            e.$search.focus();
          }, 0);
        }), c.on("close", function () {
          e.$search.attr("tabindex", -1), e.$search.val("");
        }), c.on("focus", function () {
          c.isOpen() && e.$search.focus();
        }), c.on("results:all", function (a) {
          if (null == a.query.term || "" === a.query.term) {
            var b = e.showSearch(a);
            b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
          }
        });
      }, c.prototype.handleSearch = function (a) {
        if (!this._keyUpPrevented) {
          var b = this.$search.val();
          this.trigger("query", {
            term: b
          });
        }

        this._keyUpPrevented = !1;
      }, c.prototype.showSearch = function (a, b) {
        return !0;
      }, c;
    }), b.define("select2/dropdown/hidePlaceholder", [], function () {
      function a(a, b, c, d) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
      }

      return a.prototype.append = function (a, b) {
        b.results = this.removePlaceholder(b.results), a.call(this, b);
      }, a.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = {
          id: "",
          text: b
        }), b;
      }, a.prototype.removePlaceholder = function (a, b) {
        for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
          var e = b[d];
          this.placeholder.id === e.id && c.splice(d, 1);
        }

        return c;
      }, a;
    }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
      function b(a, b, c, d) {
        this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
      }

      return b.prototype.append = function (a, b) {
        this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
      }, b.prototype.bind = function (b, c, d) {
        var e = this;
        b.call(this, c, d), c.on("query", function (a) {
          e.lastParams = a, e.loading = !0;
        }), c.on("query:append", function (a) {
          e.lastParams = a, e.loading = !0;
        }), this.$results.on("scroll", function () {
          var b = a.contains(document.documentElement, e.$loadingMore[0]);

          if (!e.loading && b) {
            var c = e.$results.offset().top + e.$results.outerHeight(!1),
                d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
            c + 50 >= d && e.loadMore();
          }
        });
      }, b.prototype.loadMore = function () {
        this.loading = !0;
        var b = a.extend({}, {
          page: 1
        }, this.lastParams);
        b.page++, this.trigger("query:append", b);
      }, b.prototype.showLoadingMore = function (a, b) {
        return b.pagination && b.pagination.more;
      }, b.prototype.createLoadingMore = function () {
        var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
            c = this.options.get("translations").get("loadingMore");
        return b.html(c(this.lastParams)), b;
      }, b;
    }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
      function c(b, c, d) {
        this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
      }

      return c.prototype.bind = function (a, b, c) {
        var d = this,
            e = !1;
        a.call(this, b, c), b.on("open", function () {
          d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
            d._positionDropdown(), d._resizeDropdown();
          }), b.on("results:append", function () {
            d._positionDropdown(), d._resizeDropdown();
          }));
        }), b.on("close", function () {
          d._hideDropdown(), d._detachPositioningHandler(b);
        }), this.$dropdownContainer.on("mousedown", function (a) {
          a.stopPropagation();
        });
      }, c.prototype.destroy = function (a) {
        a.call(this), this.$dropdownContainer.remove();
      }, c.prototype.position = function (a, b, c) {
        b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
          position: "absolute",
          top: -999999
        }), this.$container = c;
      }, c.prototype.render = function (b) {
        var c = a("<span></span>"),
            d = b.call(this);
        return c.append(d), this.$dropdownContainer = c, c;
      }, c.prototype._hideDropdown = function (a) {
        this.$dropdownContainer.detach();
      }, c.prototype._attachPositioningHandler = function (c, d) {
        var e = this,
            f = "scroll.select2." + d.id,
            g = "resize.select2." + d.id,
            h = "orientationchange.select2." + d.id,
            i = this.$container.parents().filter(b.hasScroll);
        i.each(function () {
          a(this).data("select2-scroll-position", {
            x: a(this).scrollLeft(),
            y: a(this).scrollTop()
          });
        }), i.on(f, function (b) {
          var c = a(this).data("select2-scroll-position");
          a(this).scrollTop(c.y);
        }), a(window).on(f + " " + g + " " + h, function (a) {
          e._positionDropdown(), e._resizeDropdown();
        });
      }, c.prototype._detachPositioningHandler = function (c, d) {
        var e = "scroll.select2." + d.id,
            f = "resize.select2." + d.id,
            g = "orientationchange.select2." + d.id,
            h = this.$container.parents().filter(b.hasScroll);
        h.off(e), a(window).off(e + " " + f + " " + g);
      }, c.prototype._positionDropdown = function () {
        var b = a(window),
            c = this.$dropdown.hasClass("select2-dropdown--above"),
            d = this.$dropdown.hasClass("select2-dropdown--below"),
            e = null,
            f = this.$container.offset();
        f.bottom = f.top + this.$container.outerHeight(!1);
        var g = {
          height: this.$container.outerHeight(!1)
        };
        g.top = f.top, g.bottom = f.top + g.height;
        var h = {
          height: this.$dropdown.outerHeight(!1)
        },
            i = {
          top: b.scrollTop(),
          bottom: b.scrollTop() + b.height()
        },
            j = i.top < f.top - h.height,
            k = i.bottom > f.bottom + h.height,
            l = {
          left: f.left,
          top: g.bottom
        },
            m = this.$dropdownParent;
        "static" === m.css("position") && (m = m.offsetParent());
        var n = m.offset();
        l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
      }, c.prototype._resizeDropdown = function () {
        var a = {
          width: this.$container.outerWidth(!1) + "px"
        };
        this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a);
      }, c.prototype._showDropdown = function (a) {
        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
      }, c;
    }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
      function a(b) {
        for (var c = 0, d = 0; d < b.length; d++) {
          var e = b[d];
          e.children ? c += a(e.children) : c++;
        }

        return c;
      }

      function b(a, b, c, d) {
        this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d);
      }

      return b.prototype.showSearch = function (b, c) {
        return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c);
      }, b;
    }), b.define("select2/dropdown/selectOnClose", [], function () {
      function a() {}

      return a.prototype.bind = function (a, b, c) {
        var d = this;
        a.call(this, b, c), b.on("close", function (a) {
          d._handleSelectOnClose(a);
        });
      }, a.prototype._handleSelectOnClose = function (a, b) {
        if (b && null != b.originalSelect2Event) {
          var c = b.originalSelect2Event;
          if ("select" === c._type || "unselect" === c._type) return;
        }

        var d = this.getHighlightedResults();

        if (!(d.length < 1)) {
          var e = d.data("data");
          null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", {
            data: e
          });
        }
      }, a;
    }), b.define("select2/dropdown/closeOnSelect", [], function () {
      function a() {}

      return a.prototype.bind = function (a, b, c) {
        var d = this;
        a.call(this, b, c), b.on("select", function (a) {
          d._selectTriggered(a);
        }), b.on("unselect", function (a) {
          d._selectTriggered(a);
        });
      }, a.prototype._selectTriggered = function (a, b) {
        var c = b.originalEvent;
        c && c.ctrlKey || this.trigger("close", {
          originalEvent: c,
          originalSelect2Event: b
        });
      }, a;
    }), b.define("select2/i18n/en", [], function () {
      return {
        errorLoading: function errorLoading() {
          return "The results could not be loaded.";
        },
        inputTooLong: function inputTooLong(a) {
          var b = a.input.length - a.maximum,
              c = "Please delete " + b + " character";
          return 1 != b && (c += "s"), c;
        },
        inputTooShort: function inputTooShort(a) {
          var b = a.minimum - a.input.length,
              c = "Please enter " + b + " or more characters";
          return c;
        },
        loadingMore: function loadingMore() {
          return "Loading more results…";
        },
        maximumSelected: function maximumSelected(a) {
          var b = "You can only select " + a.maximum + " item";
          return 1 != a.maximum && (b += "s"), b;
        },
        noResults: function noResults() {
          return "No results found";
        },
        searching: function searching() {
          return "Searching…";
        }
      };
    }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
      function D() {
        this.reset();
      }

      D.prototype.apply = function (l) {
        if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
          if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
            var C = b(l.amdBase + "compat/query");
            l.dataAdapter = j.Decorate(l.dataAdapter, C);
          }

          if (null != l.initSelection) {
            var D = b(l.amdBase + "compat/initSelection");
            l.dataAdapter = j.Decorate(l.dataAdapter, D);
          }
        }

        if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
          if (l.multiple) l.dropdownAdapter = u;else {
            var E = j.Decorate(u, v);
            l.dropdownAdapter = E;
          }

          if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
            var F = b(l.amdBase + "compat/dropdownCss");
            l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
          }

          l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
        }

        if (null == l.selectionAdapter) {
          if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
            var G = b(l.amdBase + "compat/containerCss");
            l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
          }

          l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
        }

        if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
          var H = l.language.split("-"),
              I = H[0];
          l.language = [l.language, I];
        } else l.language = [l.language];

        if (a.isArray(l.language)) {
          var J = new k();
          l.language.push("en");

          for (var K = l.language, L = 0; L < K.length; L++) {
            var M = K[L],
                N = {};

            try {
              N = k.loadPath(M);
            } catch (O) {
              try {
                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
              } catch (P) {
                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                continue;
              }
            }

            J.extend(N);
          }

          l.translations = J;
        } else {
          var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
              R = new k(l.language);
          R.extend(Q), l.translations = R;
        }

        return l;
      }, D.prototype.reset = function () {
        function b(a) {
          function b(a) {
            return l[a] || a;
          }

          return a.replace(/[^\u0000-\u007E]/g, b);
        }

        function c(d, e) {
          if ("" === a.trim(d.term)) return e;

          if (e.children && e.children.length > 0) {
            for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
              var h = e.children[g],
                  i = c(d, h);
              null == i && f.children.splice(g, 1);
            }

            return f.children.length > 0 ? f : c(d, f);
          }

          var j = b(e.text).toUpperCase(),
              k = b(d.term).toUpperCase();
          return j.indexOf(k) > -1 ? e : null;
        }

        this.defaults = {
          amdBase: "./",
          amdLanguageBase: "./i18n/",
          closeOnSelect: !0,
          debug: !1,
          dropdownAutoWidth: !1,
          escapeMarkup: j.escapeMarkup,
          language: C,
          matcher: c,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: !1,
          sorter: function sorter(a) {
            return a;
          },
          templateResult: function templateResult(a) {
            return a.text;
          },
          templateSelection: function templateSelection(a) {
            return a.text;
          },
          theme: "default",
          width: "resolve"
        };
      }, D.prototype.set = function (b, c) {
        var d = a.camelCase(b),
            e = {};
        e[d] = c;

        var f = j._convertData(e);

        a.extend(this.defaults, f);
      };
      var E = new D();
      return E;
    }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
      function e(b, e) {
        if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
          var f = a(this.get("amdBase") + "compat/inputData");
          this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
        }
      }

      return e.prototype.fromElement = function (a) {
        var c = ["select2"];
        null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
        var e = {};
        e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
        var f = b.extend(!0, {}, e);
        f = d._convertData(f);

        for (var g in f) {
          b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
        }

        return this;
      }, e.prototype.get = function (a) {
        return this.options[a];
      }, e.prototype.set = function (a, b) {
        this.options[a] = b;
      }, e;
    }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
      var e = function e(a, c) {
        null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
        var d = a.attr("tabindex") || 0;
        a.data("old-tabindex", d), a.attr("tabindex", "-1");
        var f = this.options.get("dataAdapter");
        this.dataAdapter = new f(a, this.options);
        var g = this.render();

        this._placeContainer(g);

        var h = this.options.get("selectionAdapter");
        this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
        var i = this.options.get("dropdownAdapter");
        this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
        var j = this.options.get("resultsAdapter");
        this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
        var k = this;
        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
          k.trigger("selection:update", {
            data: a
          });
        }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this);
      };

      return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
        var b = "";
        return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b;
      }, e.prototype._placeContainer = function (a) {
        a.insertAfter(this.$element);

        var b = this._resolveWidth(this.$element, this.options.get("width"));

        null != b && a.css("width", b);
      }, e.prototype._resolveWidth = function (a, b) {
        var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

        if ("resolve" == b) {
          var d = this._resolveWidth(a, "style");

          return null != d ? d : this._resolveWidth(a, "element");
        }

        if ("element" == b) {
          var e = a.outerWidth(!1);
          return 0 >= e ? "auto" : e + "px";
        }

        if ("style" == b) {
          var f = a.attr("style");
          if ("string" != typeof f) return null;

          for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
            var j = g[h].replace(/\s/g, ""),
                k = j.match(c);
            if (null !== k && k.length >= 1) return k[1];
          }

          return null;
        }

        return b;
      }, e.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
      }, e.prototype._registerDomEvents = function () {
        var b = this;
        this.$element.on("change.select2", function () {
          b.dataAdapter.current(function (a) {
            b.trigger("selection:update", {
              data: a
            });
          });
        }), this.$element.on("focus.select2", function (a) {
          b.trigger("focus", a);
        }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
        var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        null != d ? (this._observer = new d(function (c) {
          a.each(c, b._syncA), a.each(c, b._syncS);
        }), this._observer.observe(this.$element[0], {
          attributes: !0,
          childList: !0,
          subtree: !1
        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1));
      }, e.prototype._registerDataEvents = function () {
        var a = this;
        this.dataAdapter.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerSelectionEvents = function () {
        var b = this,
            c = ["toggle", "focus"];
        this.selection.on("toggle", function () {
          b.toggleDropdown();
        }), this.selection.on("focus", function (a) {
          b.focus(a);
        }), this.selection.on("*", function (d, e) {
          -1 === a.inArray(d, c) && b.trigger(d, e);
        });
      }, e.prototype._registerDropdownEvents = function () {
        var a = this;
        this.dropdown.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerResultsEvents = function () {
        var a = this;
        this.results.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerEvents = function () {
        var a = this;
        this.on("open", function () {
          a.$container.addClass("select2-container--open");
        }), this.on("close", function () {
          a.$container.removeClass("select2-container--open");
        }), this.on("enable", function () {
          a.$container.removeClass("select2-container--disabled");
        }), this.on("disable", function () {
          a.$container.addClass("select2-container--disabled");
        }), this.on("blur", function () {
          a.$container.removeClass("select2-container--focus");
        }), this.on("query", function (b) {
          a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
            a.trigger("results:all", {
              data: c,
              query: b
            });
          });
        }), this.on("query:append", function (b) {
          this.dataAdapter.query(b, function (c) {
            a.trigger("results:append", {
              data: c,
              query: b
            });
          });
        }), this.on("keypress", function (b) {
          var c = b.which;
          a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault());
        });
      }, e.prototype._syncAttributes = function () {
        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
      }, e.prototype._syncSubtree = function (a, b) {
        var c = !1,
            d = this;

        if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
          if (b) {
            if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) {
              var f = b.addedNodes[e];
              f.selected && (c = !0);
            } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
          } else c = !0;
          c && this.dataAdapter.current(function (a) {
            d.trigger("selection:update", {
              data: a
            });
          });
        }
      }, e.prototype.trigger = function (a, b) {
        var c = e.__super__.trigger,
            d = {
          open: "opening",
          close: "closing",
          select: "selecting",
          unselect: "unselecting"
        };

        if (void 0 === b && (b = {}), a in d) {
          var f = d[a],
              g = {
            prevented: !1,
            name: a,
            args: b
          };
          if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
        }

        c.call(this, a, b);
      }, e.prototype.toggleDropdown = function () {
        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
      }, e.prototype.open = function () {
        this.isOpen() || this.trigger("query", {});
      }, e.prototype.close = function () {
        this.isOpen() && this.trigger("close", {});
      }, e.prototype.isOpen = function () {
        return this.$container.hasClass("select2-container--open");
      }, e.prototype.hasFocus = function () {
        return this.$container.hasClass("select2-container--focus");
      }, e.prototype.focus = function (a) {
        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
      }, e.prototype.enable = function (a) {
        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
        var b = !a[0];
        this.$element.prop("disabled", b);
      }, e.prototype.data = function () {
        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
        var a = [];
        return this.dataAdapter.current(function (b) {
          a = b;
        }), a;
      }, e.prototype.val = function (b) {
        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
        var c = b[0];
        a.isArray(c) && (c = a.map(c, function (a) {
          return a.toString();
        })), this.$element.val(c).trigger("change");
      }, e.prototype.destroy = function () {
        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
      }, e.prototype.render = function () {
        var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
        return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b;
      }, e;
    }), b.define("jquery-mousewheel", ["jquery"], function (a) {
      return a;
    }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
      if (null == a.fn.select2) {
        var e = ["open", "close", "destroy"];

        a.fn.select2 = function (b) {
          if (b = b || {}, "object" == _typeof(b)) return this.each(function () {
            var d = a.extend(!0, {}, b);
            new c(a(this), d);
          }), this;

          if ("string" == typeof b) {
            var d,
                f = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
              var c = a(this).data("select2");
              null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f);
            }), a.inArray(b, e) > -1 ? this : d;
          }

          throw new Error("Invalid arguments for Select2: " + b);
        };
      }

      return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
    }), {
      define: b.define,
      require: b.require
    };
  }(),
      c = b.require("jquery.select2");

  return a.fn.select2.amd = b, c;
});

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/jquery.js ./resources/js/bootstrap.js ./resources/js/jquery.blockUI.js ./resources/js/jquery.toast.js ./resources/js/select2.js ./resources/js/fileinput.min.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/social/resources/js/jquery.js */"./resources/js/jquery.js");
__webpack_require__(/*! /var/www/html/social/resources/js/bootstrap.js */"./resources/js/bootstrap.js");
__webpack_require__(/*! /var/www/html/social/resources/js/jquery.blockUI.js */"./resources/js/jquery.blockUI.js");
__webpack_require__(/*! /var/www/html/social/resources/js/jquery.toast.js */"./resources/js/jquery.toast.js");
__webpack_require__(/*! /var/www/html/social/resources/js/select2.js */"./resources/js/select2.js");
module.exports = __webpack_require__(/*! /var/www/html/social/resources/js/fileinput.min.js */"./resources/js/fileinput.min.js");


/***/ })

/******/ });