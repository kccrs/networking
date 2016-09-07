/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	mocha.setup("bdd");
	__webpack_require__(23)
	__webpack_require__(67);
	if(false) {
		module.hot.accept();
		module.hot.dispose(function() {
			mocha.suite.suites.length = 0;
			var stats = document.getElementById('mocha-stats');
			var report = document.getElementById('mocha-report');
			stats.parentNode.removeChild(stats);
			report.parentNode.removeChild(report);
		});
	}

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	class Note {
	  constructor(content) {
	    this.content = content || null;
	    this.time = Date.now();
	  }

	  updateContent(newContent) {
	    this.content = newContent;
	    this.time = Date.now();
	  }

	  shortHtmlTemplate() {
	    return `<li data='${ this.time }'>${ this.content }
	    <p>${ this.time }</p></li>`;
	  }
	}

	module.exports = Note;

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	const Note = __webpack_require__(5);
	const firebase = __webpack_require__(8);
	let database = firebase.database;

	class Contact {
	  constructor(options) {
	    this.photo = options.photo || null;
	    this.firstName = options.firstName;
	    this.lastName = options.lastName;
	    this.company = options.company || null;
	    this.jobTitle = options.jobTitle || null;
	    this.email = [];
	    this.phone = [];
	    this.category = [];
	    this.notes = [];
	    this.linkedIn = options.linkedIn || null;
	    this.twitter = options.twitter || null;
	    this.gitHub = options.gitHub || null;
	    this.followUp = options.followUp || true;
	    this.id = Date.now();
	  }

	  updateInfo(property, newValue) {
	    this[property] = newValue;
	  }

	  addPhoneEmailCategory(property, newArrayItem) {
	    this[property].push(newArrayItem);
	  }

	  addNote(content) {
	    var note = new Note(content);
	    this.notes.push(note);
	  }

	  deleteNote(i) {
	    this.notes.splice(i, 1);
	  }

	  shortHtmlTemplate() {
	    return `<ul style="border: 1px dotted black">
	    <li><img src="${ this.photo }" alt="User Photo"></li>
	    <li>First Name: ${ this.firstName }</li>
	    <li>Last Name: ${ this.lastName }</li>
	    </ul>`;
	  }

	  longHtmlTemplate() {
	    return `<ul style="border: 1px dotted black">
	    <li>Follow up: ${ this.followUp }</li>
	    <li><button type="button" class="delete-button">Delete</button></li>
	    <li><button type="button" class="edit-button">Edit</button></li>
	    <li><img src="${ this.photo }" alt="User Photo"></li>
	    <li>First Name: ${ this.firstName }</li>
	    <li>Last Name: ${ this.lastName }</li>
	    <li>Company: ${ this.company }</li>
	    <li>Job Title: ${ this.jobTitle }</li>
	    <li>Email: ${ this.email }</li>
	    <li>Phone: ${ this.phone }</li>
	    <li>Category: ${ this.category }</li>
	    <li>Notes: ${ this.notes }</li>
	    <li>LinkedIn: ${ this.linkedIn }</li>
	    <li>Twitter: ${ this.twitter }</li>
	    <li>GitHub: ${ this.gitHub }</li>
	   </ul>`;
	  }

	  // renderNote() {
	  //
	  // }

	}

	module.exports = Contact;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const firebase = __webpack_require__(9);

	var config = {
	  apiKey: "AIzaSyBA7TgbDpZI7LHJsYineLMnzNKfmkiQNKc",
	  authDomain: "networking-app-5df06.firebaseapp.com",
	  databaseURL: "https://networking-app-5df06.firebaseio.com",
	  storageBucket: "networking-app-5df06.appspot.com"
	};
	firebase.initializeApp(config);

	module.exports = firebase;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Firebase libraries for browser - npm package.
	 *
	 * Usage:
	 *
	 *   firebase = require('firebase');
	 */
	__webpack_require__(10);
	module.exports = firebase;

/***/ },
/* 10 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v3.3.0
	    Build: 3.3.0-rc.7
	    Terms: https://developers.google.com/terms */(function(){var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value);},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this,l=function(){l=function(){};h.Symbol||(h.Symbol=ba);},ca=0,ba=function(a){return"jscomp_symbol_"+(a||"")+ca++;},p=function(){l();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=h.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return m(this);}});p=function(){};},m=function(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0};});},da=function(a){p();a={next:a};a[h.Symbol.iterator]=function(){return this;};return a;},q=this,r=function(){},t=function(a){var b=typeof a;if("object"==b){if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function";}else return"null";}else if("function"==b&&"undefined"==typeof a.call)return"object";return b;},u=function(a){return"function"==t(a);},ea=function(a,b,c){return a.call.apply(a.bind,arguments);},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c);};}return function(){return a.apply(b,arguments);};},v=function(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return v.apply(null,arguments);},w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b);};},x=function(a,b){function c(){}c.prototype=b.prototype;a.ga=b.prototype;a.prototype=new c();a.prototype.constructor=a;a.fa=function(a,c,g){for(var f=Array(arguments.length-2),k=2;k<arguments.length;k++)f[k-2]=arguments[k];return b.prototype[c].apply(a,f);};};var y="undefined"!==typeof window?window:global;function __extends(a,b){function c(){this.constructor=a;}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c());}function __decorate(a,b,c,d){var e=arguments.length,g=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,f;f=y.Reflect;if("object"===typeof f&&"function"===typeof f.decorate)g=f.decorate(a,b,c,d);else for(var k=a.length-1;0<=k;k--)if(f=a[k])g=(3>e?f(g):3<e?f(b,c,g):f(b,c))||g;return 3<e&&g&&Object.defineProperty(b,c,g),g;}function __metadata(a,b){var c=y.Reflect;if("object"===typeof c&&"function"===typeof c.metadata)return c.metadata(a,b);}var __param=function(a,b){return function(c,d){b(c,d,a);};},__awaiter=function(a,b,c,d){return new(c||(c=Promise))(function(e,g){function f(a){try{n(d.next(a));}catch(b){g(b);}}function k(a){try{n(d.throw(a));}catch(b){g(b);}}function n(a){a.done?e(a.value):new c(function(b){b(a.value);}).then(f,k);}n((d=d.apply(a,b)).next());});};"undefined"!==typeof y.L&&y.L||"undefined"===typeof global||(global.ca=__extends,global.ba=__decorate,global.da=__metadata,global.ea=__param,global.aa=__awaiter);var z=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{var b=Error().stack;b&&(this.stack=b);}a&&(this.message=String(a));};x(z,Error);z.prototype.name="CustomError";var ga=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s");};var A=function(a,b){b.unshift(a);z.call(this,ga.apply(null,b));b.shift();};x(A,z);A.prototype.name="AssertionError";var ha=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),g=d;else a&&(e+=": "+a,g=b);throw new A(""+e,g||[]);},B=function(a,b,c){a||ha("",null,b,Array.prototype.slice.call(arguments,2));},C=function(a,b,c){u(a)||ha("Expected function but got %s: %s.",[t(a),a],b,Array.prototype.slice.call(arguments,2));};var D=function(a,b,c){this.S=c;this.M=a;this.U=b;this.s=0;this.o=null;};D.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.M();return a;};D.prototype.put=function(a){this.U(a);this.s<this.S&&(this.s++,a.next=this.o,this.o=a);};var E;a:{var ia=q.navigator;if(ia){var ja=ia.userAgent;if(ja){E=ja;break a;}}E="";};var ka=function(a){q.setTimeout(function(){throw a;},0);},F,la=function(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==E.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage();},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d);}};});if("undefined"!==typeof a&&-1==E.indexOf("Trident")&&-1==E.indexOf("MSIE")){var b=new a(),c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.F;c.F=null;a();}};return function(a){d.next={F:a};d=d.next;b.port2.postMessage(0);};}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null;};document.documentElement.appendChild(b);}:function(a){q.setTimeout(a,0);};};var G=function(){this.v=this.f=null;},ma=new D(function(){return new H();},function(a){a.reset();},100);G.prototype.add=function(a,b){var c=ma.get();c.set(a,b);this.v?this.v.next=c:(B(!this.f),this.f=c);this.v=c;};G.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.v=null),a.next=null);return a;};var H=function(){this.next=this.scope=this.B=null;};H.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null;};H.prototype.reset=function(){this.next=this.scope=this.B=null;};var L=function(a,b){I||na();K||(I(),K=!0);oa.add(a,b);},I,na=function(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);I=function(){a.then(pa);};}else I=function(){var a=pa;!u(q.setImmediate)||q.Window&&q.Window.prototype&&-1==E.indexOf("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(F||(F=la()),F(a)):q.setImmediate(a);};},K=!1,oa=new G(),pa=function(){for(var a;a=oa.remove();){try{a.B.call(a.scope);}catch(b){ka(b);}ma.put(a);}K=!1;};var N=function(a,b){this.b=0;this.K=void 0;this.j=this.g=this.u=null;this.m=this.A=!1;if(a!=r)try{var c=this;a.call(b,function(a){M(c,2,a);},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}M(c,3,a);});}catch(d){M(this,3,d);}},qa=function(){this.next=this.context=this.h=this.c=this.child=null;this.w=!1;};qa.prototype.reset=function(){this.context=this.h=this.c=this.child=null;this.w=!1;};var ra=new D(function(){return new qa();},function(a){a.reset();},100),sa=function(a,b,c){var d=ra.get();d.c=a;d.h=b;d.context=c;return d;},ua=function(a,b,c){ta(a,b,c,null)||L(w(b,a));};N.prototype.then=function(a,b,c){null!=a&&C(a,"opt_onFulfilled should be a function.");null!=b&&C(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this,u(a)?a:null,u(b)?b:null,c);};N.prototype.then=N.prototype.then;N.prototype.$goog_Thenable=!0;N.prototype.X=function(a,b){return va(this,null,a,b);};var xa=function(a,b){a.g||2!=a.b&&3!=a.b||wa(a);B(null!=b.c);a.j?a.j.next=b:a.g=b;a.j=b;},va=function(a,b,c,d){var e=sa(null,null,null);e.child=new N(function(a,f){e.c=b?function(c){try{var e=b.call(d,c);a(e);}catch(J){f(J);}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e);}catch(J){f(J);}}:f;});e.child.u=a;xa(a,e);return e.child;};N.prototype.Y=function(a){B(1==this.b);this.b=0;M(this,2,a);};N.prototype.Z=function(a){B(1==this.b);this.b=0;M(this,3,a);};var M=function(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,ta(c,a.Y,a.Z,a)||(a.K=c,a.b=b,a.u=null,wa(a),3!=b||ya(a,c)));},ta=function(a,b,c,d){if(a instanceof N)return null!=b&&C(b,"opt_onFulfilled should be a function."),null!=c&&C(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),xa(a,sa(b||r,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable;}catch(f){e=!1;}else e=!1;if(e)return a.then(b,c,d),!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var g=a.then;if(u(g))return za(a,g,b,c,d),!0;}catch(f){return c.call(d,f),!0;}return!1;},za=function(a,b,c,d,e){var g=!1,f=function(a){g||(g=!0,c.call(e,a));},k=function(a){g||(g=!0,d.call(e,a));};try{b.call(a,f,k);}catch(n){k(n);}},wa=function(a){a.A||(a.A=!0,L(a.O,a));},Aa=function(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);null!=b&&B(null!=b.c);return b;};N.prototype.O=function(){for(var a;a=Aa(this);){var b=this.b,c=this.K;if(3==b&&a.h&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1;}if(a.child)a.child.u=null,Ba(a,b,c);else try{a.w?a.c.call(a.context):Ba(a,b,c);}catch(e){Ca.call(null,e);}ra.put(a);}this.A=!1;};var Ba=function(a,b,c){2==b?a.c.call(a.context,c):a.h&&a.h.call(a.context,c);},ya=function(a,b){a.m=!0;L(function(){a.m&&Ca.call(null,b);});},Ca=ka;function O(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b;}for(var c in b)b.hasOwnProperty(c)&&(a[c]=O(a[c],b[c]));return a;};var Da=Error.captureStackTrace,Q=function(a,b){this.code=a;this.message=b;if(Da)Da(this,P.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack;}});}};Q.prototype=Object.create(Error.prototype);Q.prototype.constructor=Q;Q.prototype.name="FirebaseError";var P=function(a,b,c){this.V=a;this.W=b;this.N=c;this.pattern=/\{\$([^}]+)}/g;};P.prototype.create=function(a,b){void 0===b&&(b={});var c=this.N[a];a=this.V+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>";}),c=this.W+": "+c+" ("+a+").",c=new Q(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c;};N.all=function(a){return new N(function(b,c){var d=a.length,e=[];if(d)for(var g=function(a,c){d--;e[a]=c;0==d&&b(e);},f=function(a){c(a);},k=0,n;k<a.length;k++)n=a[k],ua(n,w(g,k),f);else b(e);});};N.resolve=function(a){if(a instanceof N)return a;var b=new N(r);M(b,2,a);return b;};N.reject=function(a){return new N(function(b,c){c(a);});};N.prototype["catch"]=N.prototype.X;var R=N;"undefined"!==typeof Promise&&(R=Promise);var Ea=R;function Fa(a,b){a=new S(a,b);return a.subscribe.bind(a);}var S=function(a,b){var c=this;this.a=[];this.J=0;this.task=Ea.resolve();this.l=!1;this.D=b;this.task.then(function(){a(c);}).catch(function(a){c.error(a);});};S.prototype.next=function(a){T(this,function(b){b.next(a);});};S.prototype.error=function(a){T(this,function(b){b.error(a);});this.close(a);};S.prototype.complete=function(){T(this,function(a){a.complete();});this.close();};S.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Ga(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=U);void 0===e.error&&(e.error=U);void 0===e.complete&&(e.complete=U);a=this.$.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.G?e.error(d.G):e.complete();}catch(a){}});this.a.push(e);return a;};S.prototype.$=function(a){void 0!==this.a&&void 0!==this.a[a]&&(delete this.a[a],--this.J,0===this.J&&void 0!==this.D&&this.D(this));};var T=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Ha(a,c,b);},Ha=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b]);}catch(d){}});};S.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.G=a),this.task.then(function(){b.a=void 0;b.D=void 0;}));};function Ga(a){if("object"!==typeof a||null===a)return!1;var b;b=["next","error","complete"];p();var c=b[Symbol.iterator];b=c?c.call(b):m(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1;}function U(){};var V=R,W=function(a,b,c){var d=this;this.H=c;this.I=!1;this.i={};this.C=b;this.T=O(void 0,a);Object.keys(c.INTERNAL.factories).forEach(function(a){var b=c.INTERNAL.useAsService(d,a);null!==b&&(d[a]=d.R.bind(d,b));});};W.prototype.delete=function(){var a=this;return new V(function(b){X(a);b();}).then(function(){a.H.INTERNAL.removeApp(a.C);return V.all(Object.keys(a.i).map(function(b){return a.i[b].INTERNAL.delete();}));}).then(function(){a.I=!0;a.i={};});};W.prototype.R=function(a){X(this);void 0===this.i[a]&&(this.i[a]=this.H.INTERNAL.factories[a](this,this.P.bind(this)));return this.i[a];};W.prototype.P=function(a){O(this,a);};var X=function(a){a.I&&Y(Ia("deleted",{name:a.C}));};h.Object.defineProperties(W.prototype,{name:{configurable:!0,enumerable:!0,get:function(){X(this);return this.C;}},options:{configurable:!0,enumerable:!0,get:function(){X(this);return this.T;}}});W.prototype.name&&W.prototype.options||W.prototype.delete||console.log("dc");function Ja(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&Y("noApp",{name:a});return b;}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&g[d])g[d](b,a);});}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth");return c;}var d={},e={},g={},f={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Y("bad-app-name",{name:c+""});void 0!==d[c]&&Y("dupApp",{name:c});a=new W(a,c,f);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||O(a,{INTERNAL:{getToken:function(){return V.resolve(null);},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a;},app:a,apps:null,Promise:V,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,Z){e[b]&&Y("dupService",{name:b});e[b]=c;Z&&(g[b]=Z);c=function(c){void 0===c&&(c=a());return c[b]();};void 0!==d&&O(c,d);return f[b]=c;},createFirebaseNamespace:Ja,extendNamespace:function(a){O(f,a);},createSubscribe:Fa,ErrorFactory:P,removeApp:function(a){b(d[a],"delete");delete d[a];},factories:e,useAsService:c,Promise:N,deepExtend:O}};f["default"]=f;Object.defineProperty(f,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a];});}});a.App=W;return f;}function Y(a,b){throw Error(Ia(a,b));}function Ia(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered."}[a];return void 0===b?"Application Error: ("+a+")":b;};"undefined"!==typeof window&&(window.firebase=Ja());})();firebase.SDK_VERSION="3.3.0";(function(){var h,aa=aa||{},l=this,ba=function(){},m=function(a){var b=typeof a;if("object"==b){if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function";}else return"null";}else if("function"==b&&"undefined"==typeof a.call)return"object";return b;},ca=function(a){return null===a;},da=function(a){return"array"==m(a);},ea=function(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length;},n=function(a){return"string"==typeof a;},fa=function(a){return"number"==typeof a;},p=function(a){return"function"==m(a);},ga=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b;},ha=function(a,b,c){return a.call.apply(a.bind,arguments);},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c);};}return function(){return a.apply(b,arguments);};},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return r.apply(null,arguments);},ja=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b);};},ka=Date.now||function(){return+new Date();},t=function(a,b){function c(){}c.prototype=b.prototype;a.Pc=b.prototype;a.prototype=new c();a.prototype.constructor=a;a.Ne=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g);};};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b);}a&&(this.message=String(a));};t(u,Error);u.prototype.name="CustomError";var la=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s");},ma=String.prototype.trim?function(a){return a.trim();}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"");},na=/&/g,oa=/</g,pa=/>/g,qa=/"/g,sa=/'/g,ta=/\x00/g,ua=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b);},va=function(a,b){return a<b?-1:a>b?1:0;};var wa=function(a,b){b.unshift(a);u.call(this,la.apply(null,b));b.shift();};t(wa,u);wa.prototype.name="AssertionError";var xa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new wa(""+e,f||[]);},w=function(a,b,c){a||xa("",null,b,Array.prototype.slice.call(arguments,2));},ya=function(a,b){throw new wa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},za=function(a,b,c){fa(a)||xa("Expected number but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a;},Aa=function(a,b,c){n(a)||xa("Expected string but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));},Ba=function(a,b,c){p(a)||xa("Expected function but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));};var Ca=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c);}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1;},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);},Da=function(a,b){for(var c=n(a)?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a);},Ea=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=Array(d),f=n(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e;},Fa=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1;},Ha=function(a){var b;a:{b=Ga;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a;}b=-1;}return 0>b?null:n(a)?a.charAt(b):a[b];},Ia=function(a,b){return 0<=Ca(a,b);},Ka=function(a,b){b=Ca(a,b);var c;(c=0<=b)&&Ja(a,b);return c;},Ja=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length;},La=function(a,b){var c=0;Da(a,function(d,e){b.call(void 0,d,e,a)&&Ja(a,e)&&c++;});},Ma=function(a){return Array.prototype.concat.apply(Array.prototype,arguments);},Na=function(a){return Array.prototype.concat.apply(Array.prototype,arguments);},Oa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c;}return[];},Pa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g];}else a.push(d);}};var Qa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a);},Ra=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b;},Sa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b;},Ta=function(a){for(var b in a)return!1;return!0;},Ua=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0;},Va=function(a){var b={},c;for(c in a)b[c]=a[c];return b;},Wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Xa=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Wa.length;f++)c=Wa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}};var Ya;a:{var Za=l.navigator;if(Za){var $a=Za.userAgent;if($a){Ya=$a;break a;}}Ya="";}var y=function(a){return v(Ya,a);};var ab=function(a){ab[" "](a);return a;};ab[" "]=ba;var cb=function(a,b){var c=bb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a);};var db=y("Opera"),z=y("Trident")||y("MSIE"),eb=y("Edge"),fb=eb||z,gb=y("Gecko")&&!(v(Ya.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),hb=v(Ya.toLowerCase(),"webkit")&&!y("Edge"),ib=function(){var a=l.document;return a?a.documentMode:void 0;},jb;a:{var kb="",lb=function(){var a=Ya;if(gb)return /rv\:([^\);]+)(\)|;)/.exec(a);if(eb)return /Edge\/([\d\.]+)/.exec(a);if(z)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hb)return /WebKit\/(\S+)/.exec(a);if(db)return /(?:Version)[ \/]?(\S+)/.exec(a);}();lb&&(kb=lb?lb[1]:"");if(z){var mb=ib();if(null!=mb&&mb>parseFloat(kb)){jb=String(mb);break a;}}jb=kb;}var nb=jb,bb={},A=function(a){return cb(a,function(){for(var b=0,c=ma(String(nb)).split("."),d=ma(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=va(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||va(0==g[2].length,0==k[2].length)||va(g[2],k[2]);g=g[3];k=k[3];}while(0==b);}return 0<=b;});},ob=l.document,pb=ob&&z?ib()||("CSS1Compat"==ob.compatMode?parseInt(nb,10):5):void 0;var qb=null,rb=null,tb=function(a){var b="";sb(a,function(a){b+=String.fromCharCode(a);});return b;},sb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=rb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b;}ub();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k));}},ub=function(){if(!qb){qb={};rb={};for(var a=0;65>a;a++)qb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),rb[qb[a]]=a,62<=a&&(rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a);}};var wb=function(){this.ec="";this.Md=vb;};wb.prototype.Nb=!0;wb.prototype.Ib=function(){return this.ec;};wb.prototype.toString=function(){return"Const{"+this.ec+"}";};var xb=function(a){if(a instanceof wb&&a.constructor===wb&&a.Md===vb)return a.ec;ya("expected object of type Const, got '"+a+"'");return"type_error:Const";},vb={};var B=function(){this.ja="";this.Ld=yb;};B.prototype.Nb=!0;B.prototype.Ib=function(){return this.ja;};B.prototype.toString=function(){return"SafeUrl{"+this.ja+"}";};var zb=function(a){if(a instanceof B&&a.constructor===B&&a.Ld===yb)return a.ja;ya("expected object of type SafeUrl, got '"+a+"' of type "+m(a));return"type_error:SafeUrl";},Ab=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Cb=function(a){if(a instanceof B)return a;a=a.Nb?a.Ib():String(a);Ab.test(a)||(a="about:invalid#zClosurez");return Bb(a);},yb={},Bb=function(a){var b=new B();b.ja=a;return b;};Bb("about:blank");var Eb=function(){this.Vb="";this.Nd=Db;};Eb.prototype.Nb=!0;Eb.prototype.Ib=function(){return this.Vb;};Eb.prototype.toString=function(){return"TrustedResourceUrl{"+this.Vb+"}";};var Db={};var Gb=function(){this.ja="";this.Kd=Fb;};Gb.prototype.Nb=!0;Gb.prototype.Ib=function(){return this.ja;};Gb.prototype.toString=function(){return"SafeHtml{"+this.ja+"}";};var Hb=function(a){if(a instanceof Gb&&a.constructor===Gb&&a.Kd===Fb)return a.ja;ya("expected object of type SafeHtml, got '"+a+"' of type "+m(a));return"type_error:SafeHtml";},Fb={};Gb.prototype.ne=function(a){this.ja=a;return this;};var Ib=function(a,b){b=b instanceof B?b:Cb(b);a.href=zb(b);};var Jb=!z||9<=Number(pb),Kb=z&&!A("9");!hb||A("528");gb&&A("1.9b")||z&&A("8")||db&&A("9.5")||hb&&A("528");gb&&!A("8")||z&&A("9");var Lb=function(){this.ya=this.ya;this.Sb=this.Sb;};Lb.prototype.ya=!1;Lb.prototype.isDisposed=function(){return this.ya;};Lb.prototype.Oa=function(){if(this.Sb)for(;this.Sb.length;)this.Sb.shift()();};var Mb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Va=!1;this.ud=!0;};Mb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ud=!1;};var Nb=function(a,b){Mb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.kb=this.state=null;a&&this.init(a,b);};t(Nb,Mb);Nb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(gb){var e;a:{try{ab(b.nodeName);e=!0;break a;}catch(f){}e=!1;}e||(b=null);}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=hb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=hb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.kb=a;a.defaultPrevented&&this.preventDefault();};Nb.prototype.preventDefault=function(){Nb.Pc.preventDefault.call(this);var a=this.kb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Kb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};Nb.prototype.ce=function(){return this.kb;};var Ob="closure_listenable_"+(1E6*Math.random()|0),Pb=0;var Qb=function(a,b,c,d,e){this.listener=a;this.Wb=null;this.src=b;this.type=c;this.Bb=!!d;this.Kb=e;this.key=++Pb;this.$a=this.Ab=!1;},Rb=function(a){a.$a=!0;a.listener=null;a.Wb=null;a.src=null;a.Kb=null;};var Sb=function(a){this.src=a;this.w={};this.xb=0;};Sb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.w[f];a||(a=this.w[f]=[],this.xb++);var g=Tb(a,b,d,e);-1<g?(b=a[g],c||(b.Ab=!1)):(b=new Qb(b,this.src,f,!!d,e),b.Ab=c,a.push(b));return b;};Sb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.w))return!1;var e=this.w[a];b=Tb(e,b,c,d);return-1<b?(Rb(e[b]),Ja(e,b),0==e.length&&(delete this.w[a],this.xb--),!0):!1;};var Ub=function(a,b){var c=b.type;c in a.w&&Ka(a.w[c],b)&&(Rb(b),0==a.w[c].length&&(delete a.w[c],a.xb--));};Sb.prototype.tc=function(a,b,c,d){a=this.w[a.toString()];var e=-1;a&&(e=Tb(a,b,c,d));return-1<e?a[e]:null;};var Tb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.$a&&f.listener==b&&f.Bb==!!c&&f.Kb==d)return e;}return-1;};var Vb="closure_lm_"+(1E6*Math.random()|0),Wb={},Xb=0,Yb=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Yb(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?a.listen(b,c,d,e):$b(a,b,c,!1,d,e);},$b=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=ac(a);k||(a[Vb]=k=new Sb(a));c=k.add(b,c,d,e,f);if(c.Wb)return;d=bc();c.Wb=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(cc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Xb++;},bc=function(){var a=dc,b=Jb?function(c){return a.call(b.src,b.listener,c);}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c;};return b;},ec=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)ec(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?fc(a,b,c,d,e):$b(a,b,c,!0,d,e);},gc=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)gc(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?a.Y.remove(String(b),c,d,e):a&&(a=ac(a))&&(b=a.tc(b,c,!!d,e))&&hc(b);},hc=function(a){if(!fa(a)&&a&&!a.$a){var b=a.src;if(b&&b[Ob])Ub(b.Y,a);else{var c=a.type,d=a.Wb;b.removeEventListener?b.removeEventListener(c,d,a.Bb):b.detachEvent&&b.detachEvent(cc(c),d);Xb--;(c=ac(b))?(Ub(c,a),0==c.xb&&(c.src=null,b[Vb]=null)):Rb(a);}}},cc=function(a){return a in Wb?Wb[a]:Wb[a]="on"+a;},jc=function(a,b,c,d){var e=!0;if(a=ac(a))if(b=a.w[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.Bb==c&&!f.$a&&(f=ic(f,d),e=e&&!1!==f);}return e;},ic=function(a,b){var c=a.listener,d=a.Kb||a.src;a.Ab&&hc(a);return c.call(d,b);},dc=function(a,b){if(a.$a)return!0;if(!Jb){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a;}b=c;}d=b;b=new Nb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a;}catch(g){e=!0;}if(e||void 0==d.returnValue)d.returnValue=!0;}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Va&&0<=e;e--){b.currentTarget=d[e];var f=jc(d[e],a,!0,b),c=c&&f;}for(e=0;!b.Va&&e<d.length;e++)b.currentTarget=d[e],f=jc(d[e],a,!1,b),c=c&&f;}return c;}return ic(a,new Nb(b,this));},ac=function(a){a=a[Vb];return a instanceof Sb?a:null;},kc="__closure_events_fn_"+(1E9*Math.random()>>>0),Zb=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[kc]||(a[kc]=function(b){return a.handleEvent(b);});return a[kc];};var lc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var mc=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")");}catch(b){}throw Error("Invalid JSON string: "+a);},pc=function(a){var b=[];nc(new oc(),a,b);return b.join("");},oc=function(){this.$b=void 0;},nc=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],nc(a,a.$b?a.$b.call(d,String(f),e):e,c),e=",";c.push("]");return;}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),qc(d,c),c.push(":"),nc(a,a.$b?a.$b.call(b,d,e):e,c),f=","));c.push("}");return;}}switch(typeof b){case"string":qc(b,c);break;case"number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case"boolean":c.push(String(b));break;case"function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},rc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,qc=function(a,b){b.push('"',a.replace(sc,function(a){var b=rc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),rc[a]=b);return b;}),'"');};var tc=function(){};tc.prototype.Tc=null;var uc=function(a){return a.Tc||(a.Tc=a.xc());};var vc,wc=function(){};t(wc,tc);wc.prototype.Cb=function(){var a=xc(this);return a?new ActiveXObject(a):new XMLHttpRequest();};wc.prototype.xc=function(){var a={};xc(this)&&(a[0]=!0,a[1]=!0);return a;};var xc=function(a){if(!a.gd&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.gd=d;}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.gd;};vc=new wc();var yc=function(){};t(yc,tc);yc.prototype.Cb=function(){var a=new XMLHttpRequest();if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new zc();throw Error("Unsupported browser");};yc.prototype.xc=function(){return{};};var zc=function(){this.na=new XDomainRequest();this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.na.onload=r(this.ee,this);this.na.onerror=r(this.ed,this);this.na.onprogress=r(this.fe,this);this.na.ontimeout=r(this.ge,this);};h=zc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.na.open(a,b);};h.send=function(a){if(a){if("string"==typeof a)this.na.send(a);else throw Error("Only string data is supported");}else this.na.send();};h.abort=function(){this.na.abort();};h.setRequestHeader=function(){};h.ee=function(){this.status=200;this.responseText=this.na.responseText;Ac(this,4);};h.ed=function(){this.status=500;this.responseText="";Ac(this,4);};h.ge=function(){this.ed();};h.fe=function(){this.status=200;Ac(this,1);};var Ac=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange();};var C=function(a,b){this.h=[];this.g=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.h[d]=e,c=!1);}},Bc={},Cc=function(a){if(-128<=a&&128>a){var b=Bc[a];if(b)return b;}b=new C([a|0],0>a?-1:0);-128<=a&&128>a&&(Bc[a]=b);return b;},F=function(a){if(isNaN(a)||!isFinite(a))return D;if(0>a)return E(F(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=4294967296;return new C(b,0);},Dc=function(a,b){if(0==a.length)throw Error("number format error: empty string");b=b||10;if(2>b||36<b)throw Error("radix out of range: "+b);if("-"==a.charAt(0))return E(Dc(a.substring(1),b));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=F(Math.pow(b,8)),d=D,e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),g=parseInt(a.substring(e,e+f),b);8>f?(f=F(Math.pow(b,f)),d=d.multiply(f).add(F(g))):(d=d.multiply(c),d=d.add(F(g)));}return d;},D=Cc(0),Ec=Cc(1),Fc=Cc(16777216),Gc=function(a){if(-1==a.g)return-Gc(E(a));for(var b=0,c=1,d=0;d<a.h.length;d++)b+=Hc(a,d)*c,c*=4294967296;return b;};C.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(G(this))return"0";if(-1==this.g)return"-"+E(this).toString(a);for(var b=F(Math.pow(a,6)),c=this,d="";;){var e=Ic(c,b),c=Jc(c,e.multiply(b)),f=((0<c.h.length?c.h[0]:c.g)>>>0).toString(a),c=e;if(G(c))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d;}};var H=function(a,b){return 0>b?0:b<a.h.length?a.h[b]:a.g;},Hc=function(a,b){a=H(a,b);return 0<=a?a:4294967296+a;},G=function(a){if(0!=a.g)return!1;for(var b=0;b<a.h.length;b++)if(0!=a.h[b])return!1;return!0;};C.prototype.Eb=function(a){if(this.g!=a.g)return!1;for(var b=Math.max(this.h.length,a.h.length),c=0;c<b;c++)if(H(this,c)!=H(a,c))return!1;return!0;};C.prototype.compare=function(a){a=Jc(this,a);return-1==a.g?-1:G(a)?0:1;};var E=function(a){for(var b=a.h.length,c=[],d=0;d<b;d++)c[d]=~a.h[d];return new C(c,~a.g).add(Ec);};C.prototype.add=function(a){for(var b=Math.max(this.h.length,a.h.length),c=[],d=0,e=0;e<=b;e++){var f=d+(H(this,e)&65535)+(H(a,e)&65535),g=(f>>>16)+(H(this,e)>>>16)+(H(a,e)>>>16),d=g>>>16,f=f&65535,g=g&65535;c[e]=g<<16|f;}return new C(c,c[c.length-1]&-2147483648?-1:0);};var Jc=function(a,b){return a.add(E(b));};C.prototype.multiply=function(a){if(G(this)||G(a))return D;if(-1==this.g)return-1==a.g?E(this).multiply(E(a)):E(E(this).multiply(a));if(-1==a.g)return E(this.multiply(E(a)));if(0>this.compare(Fc)&&0>a.compare(Fc))return F(Gc(this)*Gc(a));for(var b=this.h.length+a.h.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.h.length;d++)for(var e=0;e<a.h.length;e++){var f=H(this,d)>>>16,g=H(this,d)&65535,k=H(a,e)>>>16,q=H(a,e)&65535;c[2*d+2*e]+=g*q;Kc(c,2*d+2*e);c[2*d+2*e+1]+=f*q;Kc(c,2*d+2*e+1);c[2*d+2*e+1]+=g*k;Kc(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;Kc(c,2*d+2*e+2);}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new C(c,0);};var Kc=function(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535;},Ic=function(a,b){if(G(b))throw Error("division by zero");if(G(a))return D;if(-1==a.g)return-1==b.g?Ic(E(a),E(b)):E(Ic(E(a),b));if(-1==b.g)return E(Ic(a,E(b)));if(30<a.h.length){if(-1==a.g||-1==b.g)throw Error("slowDivide_ only works with positive integers.");for(var c=Ec;0>=b.compare(a);)c=c.shiftLeft(1),b=b.shiftLeft(1);var d=Lc(c,1),e=Lc(b,1),f;b=Lc(b,2);for(c=Lc(c,2);!G(b);)f=e.add(b),0>=f.compare(a)&&(d=d.add(c),e=f),b=Lc(b,1),c=Lc(c,1);return d;}for(c=D;0<=a.compare(b);){d=Math.max(1,Math.floor(Gc(a)/Gc(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);f=F(d);for(var g=f.multiply(b);-1==g.g||0<g.compare(a);)d-=e,f=F(d),g=f.multiply(b);G(f)&&(f=Ec);c=c.add(f);a=Jc(a,g);}return c;},Mc=function(a,b){for(var c=Math.max(a.h.length,b.h.length),d=[],e=0;e<c;e++)d[e]=H(a,e)|H(b,e);return new C(d,a.g|b.g);};C.prototype.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.h.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?H(this,e-b)<<a|H(this,e-b-1)>>>32-a:H(this,e-b);return new C(d,this.g);};var Lc=function(a,b){var c=b>>5;b%=32;for(var d=a.h.length-c,e=[],f=0;f<d;f++)e[f]=0<b?H(a,f+c)>>>b|H(a,f+c+1)<<32-b:H(a,f+c);return new C(e,a.g);};var Nc=function(a,b){this.ob=a;this.ma=b;};Nc.prototype.Eb=function(a){return this.ma==a.ma&&this.ob.Eb(Va(a.ob));};var Qc=function(a){try{var b;if(b=0==a.lastIndexOf("[",0)){var c=a.length-1;b=0<=c&&a.indexOf("]",c)==c;}return b?new Oc(a.substring(1,a.length-1)):new Pc(a);}catch(d){return null;}},Pc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0>a.compare(D)||0<a.compare(Rc))throw Error("The address does not look like an IPv4.");b=Va(a);}else{if(!Sc.test(a))throw Error(a+" does not look like an IPv4 address.");var c=a.split(".");if(4!=c.length)throw Error(a+" does not look like an IPv4 address.");for(var d=0;d<c.length;d++){var e;e=c[d];var f=Number(e);e=0==f&&/^[\s\xa0]*$/.test(e)?NaN:f;if(isNaN(e)||0>e||255<e||1!=c[d].length&&0==c[d].lastIndexOf("0",0))throw Error("In "+a+", octet "+d+" is not valid");e=F(e);b=Mc(b.shiftLeft(8),e);}}Nc.call(this,b,4);};t(Pc,Nc);var Sc=/^[0-9.]*$/,Rc=Jc(Ec.shiftLeft(32),Ec);Pc.prototype.toString=function(){if(this.Ca)return this.Ca;for(var a=Hc(this.ob,0),b=[],c=3;0<=c;c--)b[c]=String(a&255),a>>>=8;return this.Ca=b.join(".");};var Oc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0>a.compare(D)||0<a.compare(Tc))throw Error("The address does not look like a valid IPv6.");b=Va(a);}else{if(!Uc.test(a))throw Error(a+" is not a valid IPv6 address.");var c=a.split(":");if(-1!=c[c.length-1].indexOf(".")){a=Hc(Va(new Pc(c[c.length-1]).ob),0);var d=[];d.push((a>>>16&65535).toString(16));d.push((a&65535).toString(16));Ja(c,c.length-1);Pa(c,d);a=c.join(":");}d=a.split("::");if(2<d.length||1==d.length&&8!=c.length)throw Error(a+" is not a valid IPv6 address.");if(1<d.length){c=d[0].split(":");d=d[1].split(":");1==c.length&&""==c[0]&&(c=[]);1==d.length&&""==d[0]&&(d=[]);var e=8-(c.length+d.length);if(1>e)c=[];else{for(var f=[],g=0;g<e;g++)f[g]="0";c=Na(c,f,d);}}if(8!=c.length)throw Error(a+" is not a valid IPv6 address");for(d=0;d<c.length;d++){e=Dc(c[d],16);if(0>e.compare(D)||0<e.compare(Vc))throw Error(c[d]+" in "+a+" is not a valid hextet.");b=Mc(b.shiftLeft(16),e);}}Nc.call(this,b,6);};t(Oc,Nc);var Uc=/^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,Vc=Cc(65535),Tc=Jc(Ec.shiftLeft(128),Ec);Oc.prototype.toString=function(){if(this.Ca)return this.Ca;for(var a=[],b=3;0<=b;b--){var c=Hc(this.ob,b),d=c&65535;a.push((c>>>16).toString(16));a.push(d.toString(16));}for(var c=b=-1,e=d=0,f=0;f<a.length;f++)"0"==a[f]?(e++,-1==c&&(c=f),e>d&&(d=e,b=c)):(c=-1,e=0);0<d&&(b+d==a.length&&a.push(""),a.splice(b,d,""),0==b&&(a=[""].concat(a)));return this.Ca=a.join(":");};!gb&&!z||z&&9<=Number(pb)||gb&&A("1.9.1");z&&A("9");var Xc=function(a,b){Qa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Wc.hasOwnProperty(d)?a.setAttribute(Wc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b;});},Wc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Yc=function(a,b,c){this.pe=c;this.Td=a;this.ye=b;this.Rb=0;this.Lb=null;};Yc.prototype.get=function(){var a;0<this.Rb?(this.Rb--,a=this.Lb,this.Lb=a.next,a.next=null):a=this.Td();return a;};Yc.prototype.put=function(a){this.ye(a);this.Rb<this.pe&&(this.Rb++,a.next=this.Lb,this.Lb=a);};var Zc=function(a){l.setTimeout(function(){throw a;},0);},$c,ad=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage();},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d);}};});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a(),c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Xc;c.Xc=null;a();}};return function(a){d.next={Xc:a};d=d.next;b.port2.postMessage(0);};}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null;};document.documentElement.appendChild(b);}:function(a){l.setTimeout(a,0);};};var bd=function(){this.jc=this.Ja=null;},dd=new Yc(function(){return new cd();},function(a){a.reset();},100);bd.prototype.add=function(a,b){var c=dd.get();c.set(a,b);this.jc?this.jc.next=c:(w(!this.Ja),this.Ja=c);this.jc=c;};bd.prototype.remove=function(){var a=null;this.Ja&&(a=this.Ja,this.Ja=this.Ja.next,this.Ja||(this.jc=null),a.next=null);return a;};var cd=function(){this.next=this.scope=this.sc=null;};cd.prototype.set=function(a,b){this.sc=a;this.scope=b;this.next=null;};cd.prototype.reset=function(){this.next=this.scope=this.sc=null;};var id=function(a,b){ed||fd();gd||(ed(),gd=!0);hd.add(a,b);},ed,fd=function(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);ed=function(){a.then(jd);};}else ed=function(){var a=jd;!p(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?($c||($c=ad()),$c(a)):l.setImmediate(a);};},gd=!1,hd=new bd(),jd=function(){for(var a;a=hd.remove();){try{a.sc.call(a.scope);}catch(b){Zc(b);}dd.put(a);}gd=!1;};var kd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0;},ld=function(a){if(!a)return!1;try{return!!a.$goog_Thenable;}catch(b){return!1;}};var I=function(a,b){this.F=0;this.ka=void 0;this.Ma=this.fa=this.o=null;this.Jb=this.rc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){md(c,2,a);},function(a){if(!(a instanceof nd))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}md(c,3,a);});}catch(d){md(this,3,d);}},od=function(){this.next=this.context=this.Sa=this.Ea=this.child=null;this.ib=!1;};od.prototype.reset=function(){this.context=this.Sa=this.Ea=this.child=null;this.ib=!1;};var pd=new Yc(function(){return new od();},function(a){a.reset();},100),qd=function(a,b,c){var d=pd.get();d.Ea=a;d.Sa=b;d.context=c;return d;},J=function(a){if(a instanceof I)return a;var b=new I(ba);md(b,2,a);return b;},K=function(a){return new I(function(b,c){c(a);});},sd=function(a,b,c){rd(a,b,c,null)||id(ja(b,a));},td=function(a){return new I(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{be:!0,value:f}:{be:!1,reason:f};0==c&&b(d);},f=0,g;f<a.length;f++)g=a[f],sd(g,ja(e,f,!0),ja(e,f,!1));else b(d);});};I.prototype.then=function(a,b,c){null!=a&&Ba(a,"opt_onFulfilled should be a function.");null!=b&&Ba(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return ud(this,p(a)?a:null,p(b)?b:null,c);};kd(I);var wd=function(a,b){b=qd(b,b,void 0);b.ib=!0;vd(a,b);return a;};I.prototype.l=function(a,b){return ud(this,null,a,b);};I.prototype.cancel=function(a){0==this.F&&id(function(){var b=new nd(a);xd(this,b);},this);};var xd=function(a,b){if(0==a.F)if(a.o){var c=a.o;if(c.fa){for(var d=0,e=null,f=null,g=c.fa;g&&(g.ib||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.F&&1==d?xd(c,b):(f?(d=f,w(c.fa),w(null!=d),d.next==c.Ma&&(c.Ma=d),d.next=d.next.next):yd(c),zd(c,e,3,b)));}a.o=null;}else md(a,3,b);},vd=function(a,b){a.fa||2!=a.F&&3!=a.F||Ad(a);w(null!=b.Ea);a.Ma?a.Ma.next=b:a.fa=b;a.Ma=b;},ud=function(a,b,c,d){var e=qd(null,null,null);e.child=new I(function(a,g){e.Ea=b?function(c){try{var e=b.call(d,c);a(e);}catch(ra){g(ra);}}:a;e.Sa=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof nd?g(b):a(e);}catch(ra){g(ra);}}:g;});e.child.o=a;vd(a,e);return e.child;};I.prototype.He=function(a){w(1==this.F);this.F=0;md(this,2,a);};I.prototype.Ie=function(a){w(1==this.F);this.F=0;md(this,3,a);};var md=function(a,b,c){0==a.F&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.F=1,rd(c,a.He,a.Ie,a)||(a.ka=c,a.F=b,a.o=null,Ad(a),3!=b||c instanceof nd||Bd(a,c)));},rd=function(a,b,c,d){if(a instanceof I)return null!=b&&Ba(b,"opt_onFulfilled should be a function."),null!=c&&Ba(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),vd(a,qd(b||ba,c||null,d)),!0;if(ld(a))return a.then(b,c,d),!0;if(ga(a))try{var e=a.then;if(p(e))return Cd(a,e,b,c,d),!0;}catch(f){return c.call(d,f),!0;}return!1;},Cd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a));},k=function(a){f||(f=!0,d.call(e,a));};try{b.call(a,g,k);}catch(q){k(q);}},Ad=function(a){a.rc||(a.rc=!0,id(a.Xd,a));},yd=function(a){var b=null;a.fa&&(b=a.fa,a.fa=b.next,b.next=null);a.fa||(a.Ma=null);null!=b&&w(null!=b.Ea);return b;};I.prototype.Xd=function(){for(var a;a=yd(this);)zd(this,a,this.F,this.ka);this.rc=!1;};var zd=function(a,b,c,d){if(3==c&&b.Sa&&!b.ib)for(;a&&a.Jb;a=a.o)a.Jb=!1;if(b.child)b.child.o=null,Dd(b,c,d);else try{b.ib?b.Ea.call(b.context):Dd(b,c,d);}catch(e){Ed.call(null,e);}pd.put(b);},Dd=function(a,b,c){2==b?a.Ea.call(a.context,c):a.Sa&&a.Sa.call(a.context,c);},Bd=function(a,b){a.Jb=!0;id(function(){a.Jb&&Ed.call(null,b);});},Ed=Zc,nd=function(a){u.call(this,a);};t(nd,u);nd.prototype.name="cancel";/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/var Fd=function(a,b){this.ac=[];this.nd=a;this.Zc=b||null;this.mb=this.Qa=!1;this.ka=void 0;this.Nc=this.Sc=this.mc=!1;this.hc=0;this.o=null;this.nc=0;};Fd.prototype.cancel=function(a){if(this.Qa)this.ka instanceof Fd&&this.ka.cancel();else{if(this.o){var b=this.o;delete this.o;a?b.cancel(a):(b.nc--,0>=b.nc&&b.cancel());}this.nd?this.nd.call(this.Zc,this):this.Nc=!0;this.Qa||Gd(this,new Hd());}};Fd.prototype.Yc=function(a,b){this.mc=!1;Id(this,a,b);};var Id=function(a,b,c){a.Qa=!0;a.ka=c;a.mb=!b;Jd(a);},Ld=function(a){if(a.Qa){if(!a.Nc)throw new Kd();a.Nc=!1;}};Fd.prototype.callback=function(a){Ld(this);Md(a);Id(this,!0,a);};var Gd=function(a,b){Ld(a);Md(b);Id(a,!1,b);},Md=function(a){w(!(a instanceof Fd),"An execution sequence may not be initiated with a blocking Deferred.");},Qd=function(a){var b=Nd("https://apis.google.com/js/client.js?onload="+Od);Pd(b,null,a,void 0);},Pd=function(a,b,c,d){w(!a.Sc,"Blocking Deferreds can not be re-used");a.ac.push([b,c,d]);a.Qa&&Jd(a);};Fd.prototype.then=function(a,b,c){var d,e,f=new I(function(a,b){d=a;e=b;});Pd(this,d,function(a){a instanceof Hd?f.cancel():e(a);});return f.then(a,b,c);};kd(Fd);var Rd=function(a){return Fa(a.ac,function(a){return p(a[1]);});},Jd=function(a){if(a.hc&&a.Qa&&Rd(a)){var b=a.hc,c=Sd[b];c&&(l.clearTimeout(c.nb),delete Sd[b]);a.hc=0;}a.o&&(a.o.nc--,delete a.o);for(var b=a.ka,d=c=!1;a.ac.length&&!a.mc;){var e=a.ac.shift(),f=e[0],g=e[1],e=e[2];if(f=a.mb?g:f)try{var k=f.call(e||a.Zc,b);void 0!==k&&(a.mb=a.mb&&(k==b||k instanceof Error),a.ka=b=k);if(ld(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.mc=!0;}catch(q){b=q,a.mb=!0,Rd(a)||(c=!0);}}a.ka=b;d&&(k=r(a.Yc,a,!0),d=r(a.Yc,a,!1),b instanceof Fd?(Pd(b,k,d),b.Sc=!0):b.then(k,d));c&&(b=new Td(b),Sd[b.nb]=b,a.hc=b.nb);},Kd=function(){u.call(this);};t(Kd,u);Kd.prototype.message="Deferred has already fired";Kd.prototype.name="AlreadyCalledError";var Hd=function(){u.call(this);};t(Hd,u);Hd.prototype.message="Deferred was canceled";Hd.prototype.name="CanceledError";var Td=function(a){this.nb=l.setTimeout(r(this.Ge,this),0);this.J=a;};Td.prototype.Ge=function(){w(Sd[this.nb],"Cannot throw an error that is not scheduled.");delete Sd[this.nb];throw this.J;};var Sd={};var Nd=function(a){var b=new Eb();b.Vb=a;return Ud(b);},Ud=function(a){var b={},c=b.document||document,d;a instanceof Eb&&a.constructor===Eb&&a.Nd===Db?d=a.Vb:(ya("expected object of type TrustedResourceUrl, got '"+a+"' of type "+m(a)),d="type_error:TrustedResourceUrl");var e=document.createElement("SCRIPT");a={vd:e,wb:void 0};var f=new Fd(Vd,a),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){Wd(e,!0);Gd(f,new Xd(1,"Timeout reached for loading script "+d));},k),a.wb=g);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Wd(e,b.Oe||!1,g),f.callback(null));};e.onerror=function(){Wd(e,!0,g);Gd(f,new Xd(0,"Error while loading script "+d));};a=b.attributes||{};Xa(a,{type:"text/javascript",charset:"UTF-8",src:d});Xc(e,a);Yd(c).appendChild(e);return f;},Yd=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement;},Vd=function(){if(this&&this.vd){var a=this.vd;a&&"SCRIPT"==a.tagName&&Wd(a,!0,this.wb);}},Wd=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a);},0);},Xd=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a;};t(Xd,u);var Zd=function(){Lb.call(this);this.Y=new Sb(this);this.Qd=this;this.Cc=null;};t(Zd,Lb);Zd.prototype[Ob]=!0;h=Zd.prototype;h.addEventListener=function(a,b,c,d){Yb(this,a,b,c,d);};h.removeEventListener=function(a,b,c,d){gc(this,a,b,c,d);};h.dispatchEvent=function(a){$d(this);var b,c=this.Cc;if(c){b=[];for(var d=1;c;c=c.Cc)b.push(c),w(1E3>++d,"infinite loop");}c=this.Qd;d=a.type||a;if(n(a))a=new Mb(a,c);else if(a instanceof Mb)a.target=a.target||c;else{var e=a;a=new Mb(d,c);Xa(a,e);}var e=!0,f;if(b)for(var g=b.length-1;!a.Va&&0<=g;g--)f=a.currentTarget=b[g],e=ae(f,d,!0,a)&&e;a.Va||(f=a.currentTarget=c,e=ae(f,d,!0,a)&&e,a.Va||(e=ae(f,d,!1,a)&&e));if(b)for(g=0;!a.Va&&g<b.length;g++)f=a.currentTarget=b[g],e=ae(f,d,!1,a)&&e;return e;};h.Oa=function(){Zd.Pc.Oa.call(this);if(this.Y){var a=this.Y,b=0,c;for(c in a.w){for(var d=a.w[c],e=0;e<d.length;e++)++b,Rb(d[e]);delete a.w[c];a.xb--;}}this.Cc=null;};h.listen=function(a,b,c,d){$d(this);return this.Y.add(String(a),b,!1,c,d);};var fc=function(a,b,c,d,e){a.Y.add(String(b),c,!0,d,e);},ae=function(a,b,c,d){b=a.Y.w[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.$a&&g.Bb==c){var k=g.listener,q=g.Kb||g.src;g.Ab&&Ub(a.Y,g);e=!1!==k.call(q,d)&&e;}}return e&&0!=d.ud;};Zd.prototype.tc=function(a,b,c,d){return this.Y.tc(String(a),b,c,d);};var $d=function(a){w(a.Y,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");};var be="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},ce=function(){};ce.prototype.next=function(){throw be;};ce.prototype.Pd=function(){return this;};var de=function(a,b){this.Z={};this.s=[];this.ma=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else a&&this.addAll(a);};h=de.prototype;h.dd=function(){return this.i;};h.T=function(){ee(this);for(var a=[],b=0;b<this.s.length;b++)a.push(this.Z[this.s[b]]);return a;};h.ha=function(){ee(this);return this.s.concat();};h.jb=function(a){return fe(this.Z,a);};h.Eb=function(a,b){if(this===a)return!0;if(this.i!=a.dd())return!1;b=b||ge;ee(this);for(var c,d=0;c=this.s[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0;};var ge=function(a,b){return a===b;};de.prototype.remove=function(a){return fe(this.Z,a)?(delete this.Z[a],this.i--,this.ma++,this.s.length>2*this.i&&ee(this),!0):!1;};var ee=function(a){if(a.i!=a.s.length){for(var b=0,c=0;b<a.s.length;){var d=a.s[b];fe(a.Z,d)&&(a.s[c++]=d);b++;}a.s.length=c;}if(a.i!=a.s.length){for(var e={},c=b=0;b<a.s.length;)d=a.s[b],fe(e,d)||(a.s[c++]=d,e[d]=1),b++;a.s.length=c;}};h=de.prototype;h.get=function(a,b){return fe(this.Z,a)?this.Z[a]:b;};h.set=function(a,b){fe(this.Z,a)||(this.i++,this.s.push(a),this.ma++);this.Z[a]=b;};h.addAll=function(a){var b;a instanceof de?(b=a.ha(),a=a.T()):(b=Sa(a),a=Ra(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c]);};h.forEach=function(a,b){for(var c=this.ha(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};h.clone=function(){return new de(this);};h.Pd=function(a){ee(this);var b=0,c=this.ma,d=this,e=new ce();e.next=function(){if(c!=d.ma)throw Error("The map has changed since the iterator was created");if(b>=d.s.length)throw be;var e=d.s[b++];return a?e:d.Z[e];};return e;};var fe=function(a,b){return Object.prototype.hasOwnProperty.call(a,b);};var he=function(a){if(a.T&&"function"==typeof a.T)return a.T();if(n(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b;}return Ra(a);},ie=function(a){if(a.ha&&"function"==typeof a.ha)return a.ha();if(!a.T||"function"!=typeof a.T){if(ea(a)||n(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b;}return Sa(a);}},je=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ea(a)||n(a))x(a,b,void 0);else for(var c=ie(a),d=he(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a);};var ke=function(a,b,c,d,e){this.reset(a,b,c,d,e);};ke.prototype.ad=null;var le=0;ke.prototype.reset=function(a,b,c,d,e){"number"==typeof e||le++;d||ka();this.qb=a;this.re=b;delete this.ad;};ke.prototype.yd=function(a){this.qb=a;};var me=function(a){this.se=a;this.fd=this.oc=this.qb=this.o=null;},ne=function(a,b){this.name=a;this.value=b;};ne.prototype.toString=function(){return this.name;};var oe=new ne("SEVERE",1E3),pe=new ne("CONFIG",700),qe=new ne("FINE",500);me.prototype.getParent=function(){return this.o;};me.prototype.yd=function(a){this.qb=a;};var re=function(a){if(a.qb)return a.qb;if(a.o)return re(a.o);ya("Root logger has no level set.");return null;};me.prototype.log=function(a,b,c){if(a.value>=re(this).value)for(p(b)&&(b=b()),a=new ke(a,String(b),this.se),c&&(a.ad=c),c="log:"+a.re,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.fd)for(var e=0,f;f=b.fd[e];e++)f(d);c=c.getParent();}};var se={},te=null,ue=function(a){te||(te=new me(""),se[""]=te,te.yd(pe));var b;if(!(b=se[a])){b=new me(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ue(a.substr(0,c));c.oc||(c.oc={});c.oc[d]=b;b.o=c;se[a]=b;}return b;};var L=function(a,b){a&&a.log(qe,b,void 0);};var ve=function(a,b,c){if(p(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0);},we=function(a){var b=null;return new I(function(c,d){b=ve(function(){c(void 0);},a);-1==b&&d(Error("Failed to schedule timer."));}).l(function(a){l.clearTimeout(b);throw a;});};var xe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,ye=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"");}}};var M=function(a){Zd.call(this);this.headers=new de();this.lc=a||null;this.oa=!1;this.kc=this.a=null;this.pb=this.ld=this.Qb="";this.Ba=this.wc=this.Ob=this.qc=!1;this.fb=0;this.gc=null;this.td="";this.ic=this.xe=this.Gd=!1;};t(M,Zd);var ze=M.prototype,Ae=ue("goog.net.XhrIo");ze.P=Ae;var Be=/^https?$/i,Ce=["POST","PUT"];M.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Qb+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Qb=a;this.pb="";this.ld=b;this.qc=!1;this.oa=!0;this.a=this.lc?this.lc.Cb():vc.Cb();this.kc=this.lc?uc(this.lc):uc(vc);this.a.onreadystatechange=r(this.qd,this);this.xe&&"onprogress"in this.a&&(this.a.onprogress=r(function(a){this.pd(a,!0);},this),this.a.upload&&(this.a.upload.onprogress=r(this.pd,this)));try{L(this.P,De(this,"Opening Xhr")),this.wc=!0,this.a.open(b,String(a),!0),this.wc=!1;}catch(f){L(this.P,De(this,"Error opening Xhr: "+f.message));this.J(5,f);return;}a=c||"";var e=this.headers.clone();d&&je(d,function(a,b){e.set(b,a);});d=Ha(e.ha());c=l.FormData&&a instanceof l.FormData;!Ia(Ce,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a);},this);this.td&&(this.a.responseType=this.td);"withCredentials"in this.a&&this.a.withCredentials!==this.Gd&&(this.a.withCredentials=this.Gd);try{Ee(this),0<this.fb&&(this.ic=Fe(this.a),L(this.P,De(this,"Will abort after "+this.fb+"ms if incomplete, xhr2 "+this.ic)),this.ic?(this.a.timeout=this.fb,this.a.ontimeout=r(this.wb,this)):this.gc=ve(this.wb,this.fb,this)),L(this.P,De(this,"Sending request")),this.Ob=!0,this.a.send(a),this.Ob=!1;}catch(f){L(this.P,De(this,"Send error: "+f.message)),this.J(5,f);}};var Fe=function(a){return z&&A(9)&&fa(a.timeout)&&void 0!==a.ontimeout;},Ga=function(a){return"content-type"==a.toLowerCase();};M.prototype.wb=function(){"undefined"!=typeof aa&&this.a&&(this.pb="Timed out after "+this.fb+"ms, aborting",L(this.P,De(this,this.pb)),this.dispatchEvent("timeout"),this.abort(8));};M.prototype.J=function(a,b){this.oa=!1;this.a&&(this.Ba=!0,this.a.abort(),this.Ba=!1);this.pb=b;Ge(this);He(this);};var Ge=function(a){a.qc||(a.qc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"));};M.prototype.abort=function(){this.a&&this.oa&&(L(this.P,De(this,"Aborting")),this.oa=!1,this.Ba=!0,this.a.abort(),this.Ba=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),He(this));};M.prototype.Oa=function(){this.a&&(this.oa&&(this.oa=!1,this.Ba=!0,this.a.abort(),this.Ba=!1),He(this,!0));M.Pc.Oa.call(this);};M.prototype.qd=function(){this.isDisposed()||(this.wc||this.Ob||this.Ba?Ie(this):this.ve());};M.prototype.ve=function(){Ie(this);};var Ie=function(a){if(a.oa&&"undefined"!=typeof aa)if(a.kc[1]&&4==Je(a)&&2==Ke(a))L(a.P,De(a,"Local request error detected and ignored"));else if(a.Ob&&4==Je(a))ve(a.qd,0,a);else if(a.dispatchEvent("readystatechange"),4==Je(a)){L(a.P,De(a,"Request complete"));a.oa=!1;try{var b=Ke(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1;}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Qb).match(xe)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,f=g.substr(0,g.length-1);e=!Be.test(f?f.toLowerCase():"");}d=e;}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<Je(a)?a.a.statusText:"";}catch(q){L(a.P,"Can not get status: "+q.message),k="";}a.pb=k+" ["+Ke(a)+"]";Ge(a);}}finally{He(a);}}};M.prototype.pd=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Le(a,"progress"));this.dispatchEvent(Le(a,b?"downloadprogress":"uploadprogress"));};var Le=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total};},He=function(a,b){if(a.a){Ee(a);var c=a.a,d=a.kc[0]?ba:null;a.a=null;a.kc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d;}catch(e){(a=a.P)&&a.log(oe,"Problem encountered resetting onreadystatechange: "+e.message,void 0);}}},Ee=function(a){a.a&&a.ic&&(a.a.ontimeout=null);fa(a.gc)&&(l.clearTimeout(a.gc),a.gc=null);},Je=function(a){return a.a?a.a.readyState:0;},Ke=function(a){try{return 2<Je(a)?a.a.status:-1;}catch(b){return-1;}},Me=function(a){try{return a.a?a.a.responseText:"";}catch(b){return L(a.P,"Can not get responseText: "+b.message),"";}},De=function(a,b){return b+" ["+a.ld+" "+a.Qb+" "+Ke(a)+"]";};var Ne=function(a,b){this.ga=this.Ia=this.la="";this.Ua=null;this.Aa=this.qa="";this.M=this.oe=!1;var c;a instanceof Ne?(this.M=void 0!==b?b:a.M,Oe(this,a.la),c=a.Ia,N(this),this.Ia=c,Pe(this,a.ga),Qe(this,a.Ua),Re(this,a.qa),Se(this,a.aa.clone()),a=a.Aa,N(this),this.Aa=a):a&&(c=String(a).match(xe))?(this.M=!!b,Oe(this,c[1]||"",!0),a=c[2]||"",N(this),this.Ia=Te(a),Pe(this,c[3]||"",!0),Qe(this,c[4]),Re(this,c[5]||"",!0),Se(this,c[6]||"",!0),a=c[7]||"",N(this),this.Aa=Te(a)):(this.M=!!b,this.aa=new O(null,0,this.M));};Ne.prototype.toString=function(){var a=[],b=this.la;b&&a.push(Ue(b,Ve,!0),":");var c=this.ga;if(c||"file"==b)a.push("//"),(b=this.Ia)&&a.push(Ue(b,Ve,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Ua,null!=c&&a.push(":",String(c));if(c=this.qa)this.ga&&"/"!=c.charAt(0)&&a.push("/"),a.push(Ue(c,"/"==c.charAt(0)?We:Xe,!0));(c=this.aa.toString())&&a.push("?",c);(c=this.Aa)&&a.push("#",Ue(c,Ye));return a.join("");};Ne.prototype.resolve=function(a){var b=this.clone(),c=!!a.la;c?Oe(b,a.la):c=!!a.Ia;if(c){var d=a.Ia;N(b);b.Ia=d;}else c=!!a.ga;c?Pe(b,a.ga):c=null!=a.Ua;d=a.qa;if(c)Qe(b,a.Ua);else if(c=!!a.qa){if("/"!=d.charAt(0))if(this.ga&&!this.qa)d="/"+d;else{var e=b.qa.lastIndexOf("/");-1!=e&&(d=b.qa.substr(0,e+1)+d);}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0);}d=f.join("/");}else d=e;}c?Re(b,d):c=""!==a.aa.toString();c?Se(b,Te(a.aa.toString())):c=!!a.Aa;c&&(a=a.Aa,N(b),b.Aa=a);return b;};Ne.prototype.clone=function(){return new Ne(this);};var Oe=function(a,b,c){N(a);a.la=c?Te(b,!0):b;a.la&&(a.la=a.la.replace(/:$/,""));},Pe=function(a,b,c){N(a);a.ga=c?Te(b,!0):b;},Qe=function(a,b){N(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ua=b;}else a.Ua=null;},Re=function(a,b,c){N(a);a.qa=c?Te(b,!0):b;},Se=function(a,b,c){N(a);b instanceof O?(a.aa=b,a.aa.Mc(a.M)):(c||(b=Ue(b,Ze)),a.aa=new O(b,0,a.M));},P=function(a,b,c){N(a);a.aa.set(b,c);},N=function(a){if(a.oe)throw Error("Tried to modify a read-only Uri");};Ne.prototype.Mc=function(a){this.M=a;this.aa&&this.aa.Mc(a);return this;};var $e=function(a){return a instanceof Ne?a.clone():new Ne(a,void 0);},af=function(a,b){var c=new Ne(null,void 0);Oe(c,"https");a&&Pe(c,a);b&&Re(c,b);return c;},Te=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):"";},Ue=function(a,b,c){return n(a)?(a=encodeURI(a).replace(b,bf),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null;},bf=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16);},Ve=/[#\/\?@]/g,Xe=/[\#\?:]/g,We=/[\#\?]/g,Ze=/[\#\?@]/g,Ye=/#/g,O=function(a,b,c){this.i=this.j=null;this.I=a||null;this.M=!!c;},cf=function(a){a.j||(a.j=new de(),a.i=0,a.I&&ye(a.I,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c);}));},ef=function(a){var b=ie(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new O(null,0,void 0);a=he(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];da(f)?df(c,e,f):c.add(e,f);}return c;};h=O.prototype;h.dd=function(){cf(this);return this.i;};h.add=function(a,b){cf(this);this.I=null;a=this.K(a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.i=za(this.i)+1;return this;};h.remove=function(a){cf(this);a=this.K(a);return this.j.jb(a)?(this.I=null,this.i=za(this.i)-this.j.get(a).length,this.j.remove(a)):!1;};h.jb=function(a){cf(this);a=this.K(a);return this.j.jb(a);};h.ha=function(){cf(this);for(var a=this.j.T(),b=this.j.ha(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c;};h.T=function(a){cf(this);var b=[];if(n(a))this.jb(a)&&(b=Ma(b,this.j.get(this.K(a))));else{a=this.j.T();for(var c=0;c<a.length;c++)b=Ma(b,a[c]);}return b;};h.set=function(a,b){cf(this);this.I=null;a=this.K(a);this.jb(a)&&(this.i=za(this.i)-this.j.get(a).length);this.j.set(a,[b]);this.i=za(this.i)+1;return this;};h.get=function(a,b){a=a?this.T(a):[];return 0<a.length?String(a[0]):b;};var df=function(a,b,c){a.remove(b);0<c.length&&(a.I=null,a.j.set(a.K(b),Oa(c)),a.i=za(a.i)+c.length);};O.prototype.toString=function(){if(this.I)return this.I;if(!this.j)return"";for(var a=[],b=this.j.ha(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.T(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g);}return this.I=a.join("&");};O.prototype.clone=function(){var a=new O();a.I=this.I;this.j&&(a.j=this.j.clone(),a.i=this.i);return a;};O.prototype.K=function(a){a=String(a);this.M&&(a=a.toLowerCase());return a;};O.prototype.Mc=function(a){a&&!this.M&&(cf(this),this.I=null,this.j.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),df(this,d,a));},this));this.M=a;};var gf=function(){var a=ff();return z&&!!pb&&11==pb||/Edge\/\d+/.test(a);},hf=function(){return l.window&&l.window.location.href||"";},jf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):da(a[d])?Ua(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<jf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c;},lf=function(){var a;a=ff();a="Chrome"!=kf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!z||!pb||9<pb;},mf=function(a){(a||l.window).close();},nf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};d&&(b.target=d);"Firefox"==kf(ff())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof B?c:Cb("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case"width":case"height":case"top":case"left":e.push(g+"="+d[g]);break;case"target":case"noreferrer":break;default:e.push(g+"="+(d[g]?1:0));}g=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),b=b instanceof B?b:Cb(b),g.href=zb(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=zb(b),g&&(fb&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=new wb(),a.ec="b/12014412, meta tag with sanitized URL",ua.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(na,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(oa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(pa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(qa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(sa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ta,"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Aa(xb(a),"must provide justification"),w(!/^[\s\xa0]*$/.test(xb(a)),"must provide non-empty justification"),g.document.write(Hb(new Gb().ne(d))),g.document.close())):g=a.open(zb(b),c,g);if(g)try{g.focus();}catch(k){}return g;},of=function(a){return new I(function(b){var c=function(){we(2E3).then(function(){if(!a||a.closed)b();else return c();});};return c();});},pf=function(){var a=null;return new I(function(b){"complete"==l.document.readyState?b():(a=function(){b();},ec(window,"load",a));}).l(function(b){gc(window,"load",a);throw b;});},qf=function(a){switch(a||l.navigator&&l.navigator.product||""){case"ReactNative":return"ReactNative";default:return"undefined"!==typeof l.process?"Node":"Browser";}},rf=function(){var a=qf();return"ReactNative"===a||"Node"===a;},kf=function(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android")){if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1];}else return"Chrome";}else return"Safari";return"Other";},sf=function(a){var b=qf(void 0);return("Browser"===b?kf(ff()):b)+"/JsCore/"+a;},ff=function(){return l.navigator&&l.navigator.userAgent||"";},tf=function(a){a=a.split(".");for(var b=l,c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b;},vf=function(){var a;if(!(a=!l.location||!l.location.protocol||"http:"!=l.location.protocol&&"https:"!=l.location.protocol||rf())){var b;a:{try{var c=l.localStorage,d=uf();if(c){c.setItem(d,"1");c.removeItem(d);b=gf()?!!l.indexedDB:!0;break a;}}catch(e){}b=!1;}a=!b;}return!a;},wf=function(a){a=a||ff();var b=(a||ff()).toLowerCase();return b.match(/android/)||b.match(/webos/)||b.match(/iphone|ipad|ipod/)||b.match(/blackberry/)||b.match(/windows phone/)||b.match(/iemobile/)||"Firefox"==kf(a)?!1:!0;},xf=function(a){return"undefined"===typeof a?null:pc(a);},yf=function(a){if(null!==a){var b;try{b=mc(a);}catch(c){try{b=JSON.parse(a);}catch(d){throw c;}}return b;}},uf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString();},zf=function(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null;};var Af;try{var Bf={};Object.defineProperty(Bf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Bf,"abcd",{configurable:!0,enumerable:!0,value:2});Af=2==Bf.abcd;}catch(a){Af=!1;}var Q=function(a,b,c){Af?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c;},Cf=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&Q(a,c,b[c]);},Df=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b;},Ef=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1;}return!0;};var Ff={Hd:{tb:985,sb:735,providerId:"facebook.com"},Id:{tb:500,sb:620,providerId:"github.com"},Jd:{tb:515,sb:680,providerId:"google.com"},Od:{tb:485,sb:705,providerId:"twitter.com"}},Gf=function(a){for(var b in Ff)if(Ff[b].providerId==a)return Ff[b];return null;};var R=function(a,b){this.code="auth/"+a;this.message=b||Hf[a]||"";};t(R,Error);R.prototype.G=function(){return{name:this.code,code:this.code,message:this.message};};var Hf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported."};var If=function(a,b,c,d,e){this.ua=a;this.za=b||null;this.hb=c||null;this.bc=d||null;this.J=e||null;if(this.hb||this.J){if(this.hb&&this.J)throw new R("invalid-auth-event");if(this.hb&&!this.bc)throw new R("invalid-auth-event");}else throw new R("invalid-auth-event");};If.prototype.getError=function(){return this.J;};If.prototype.G=function(){return{type:this.ua,eventId:this.za,urlResponse:this.hb,sessionId:this.bc,error:this.J&&this.J.G()};};var Jf=function(a){var b="unauthorized-domain",c=void 0,d=$e(a);a=d.ga;d=d.la;"http"!=d&&"https"!=d?b="operation-not-supported-in-this-environment":c=la("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a);R.call(this,b,c);};t(Jf,R);var Kf=function(a){this.qe=a.sub;ka();this.Db=a.email||null;};var Lf=function(a,b,c,d){var e={};ga(c)?e=c:b&&n(c)&&n(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&&n(c)&&(e={accessToken:c});if(b||!e.idToken&&!e.accessToken){if(b&&e.oauthToken&&e.oauthTokenSecret)Q(this,"accessToken",e.oauthToken),Q(this,"secret",e.oauthTokenSecret);else{if(b)throw new R("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");throw new R("argument-error","credential failed: expected 1 argument (the OAuth access token).");}}else e.idToken&&Q(this,"idToken",e.idToken),e.accessToken&&Q(this,"accessToken",e.accessToken);Q(this,"provider",a);};Lf.prototype.Gb=function(a){var b=Mf(this);return S(a,Nf,b);};Lf.prototype.md=function(a,b){var c=Mf(this);c.idToken=b;return S(a,Of,c);};var Mf=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:ef(b).toString(),requestUri:vf()?hf():"http://localhost"};};Lf.prototype.G=function(){var a={provider:this.provider};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a;};var Pf=function(a,b){var c=!!b;b=function(){Cf(this,{providerId:a,isOAuthProvider:!0});this.Lc=[];"google.com"==a&&this.addScope("profile");};c||(b.prototype.addScope=function(a){Ia(this.Lc,a)||this.Lc.push(a);});b.prototype.Hb=function(){return Oa(this.Lc);};b.credential=function(b,e){return new Lf(a,c,b,e);};Cf(b,{PROVIDER_ID:a});return b;},Qf=Pf("facebook.com");Qf.prototype.addScope=Qf.prototype.addScope||void 0;var Rf=Pf("github.com");Rf.prototype.addScope=Rf.prototype.addScope||void 0;var Sf=Pf("google.com");Sf.prototype.addScope=Sf.prototype.addScope||void 0;Sf.credential=function(a,b){if(!a&&!b)throw new R("argument-error","credential failed: must provide the ID token and/or the access token.");return new Lf("google.com",!1,ga(a)?a:{idToken:a||null,accessToken:b||null});};var Tf=Pf("twitter.com",!0),Uf=function(a,b){this.Db=a;this.Dc=b;Q(this,"provider","password");};Uf.prototype.Gb=function(a){return S(a,Vf,{email:this.Db,password:this.Dc});};Uf.prototype.md=function(a,b){return S(a,Wf,{idToken:b,email:this.Db,password:this.Dc});};Uf.prototype.G=function(){return{email:this.Db,password:this.Dc};};var Xf=function(){Cf(this,{providerId:"password",isOAuthProvider:!1});};Cf(Xf,{PROVIDER_ID:"password"});var Yf={Me:Xf,Hd:Qf,Jd:Sf,Id:Rf,Od:Tf},Zf=function(a){var b=a&&a.providerId;if(!b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;for(var e in Yf)if(Yf[e].PROVIDER_ID==b)try{return Yf[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d});}catch(f){break;}return null;};var $f=function(a,b,c){R.call(this,"account-exists-with-different-credential",c);Q(this,"email",a);Q(this,"credential",b);};t($f,R);$f.prototype.G=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.G();b&&(Xa(a,b),a.providerId=b.provider,delete a.provider);return a;};var ag=function(a){this.Le=a;};t(ag,tc);ag.prototype.Cb=function(){return new this.Le();};ag.prototype.xc=function(){return{};};var T=function(a,b,c){var d;d="Node"==qf();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new R("internal-error","The XMLHttpRequest compatibility library was not found.");this.v=a;a=b||{};this.Ae=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.Be=a.secureTokenTimeout||1E4;this.wd=Va(a.secureTokenHeaders||bg);this.$d=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.ae=a.firebaseTimeout||1E4;this.cd=Va(a.firebaseHeaders||cg);c&&(this.cd["X-Client-Version"]=c,this.wd["X-Client-Version"]=c);this.Sd=new yc();this.Ke=new ag(d);},dg,bg={"Content-Type":"application/x-www-form-urlencoded"},cg={"Content-Type":"application/json"},fg=function(a,b,c,d,e,f,g){lf()?a=r(a.De,a):(dg||(dg=new I(function(a,b){eg(a,b);})),a=r(a.Ce,a));a(b,c,d,e,f,g);};T.prototype.De=function(a,b,c,d,e,f){var g="Node"==qf(),k=rf()?g?new M(this.Ke):new M():new M(this.Sd),q;f&&(k.fb=Math.max(0,f),q=setTimeout(function(){k.dispatchEvent("timeout");},f));k.listen("complete",function(){q&&clearTimeout(q);var a=null;try{var c;c=this.a?mc(this.a.responseText):void 0;a=c||null;}catch(d){try{a=JSON.parse(Me(this))||null;}catch(e){a=null;}}b&&b(a);});fc(k,"ready",function(){q&&clearTimeout(q);this.ya||(this.ya=!0,this.Oa());});fc(k,"timeout",function(){q&&clearTimeout(q);this.ya||(this.ya=!0,this.Oa());b&&b(null);});k.send(a,c,d,e);};var Od="__fcb"+Math.floor(1E6*Math.random()).toString(),eg=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Od]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"));},Qd(function(){b(Error("CORS_UNSUPPORTED"));}));};T.prototype.Ce=function(a,b,c,d,e){var f=this;dg.then(function(){window.gapi.client.setApiKey(f.v);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a);}});}).l(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}});});};var hg=function(a,b){return new I(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?fg(a,a.Ae+"?key="+encodeURIComponent(a.v),function(a){a?a.error?d(gg(a)):a.access_token&&a.refresh_token?c(a):d(new R("internal-error")):d(new R("network-request-failed"));},"POST",ef(b).toString(),a.wd,a.Be):d(new R("internal-error"));});},ig=function(a){var b={},c;for(c in a)null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return pc(b);},jg=function(a,b,c,d,e){var f=a.$d+b+"?key="+encodeURIComponent(a.v);e&&(f+="&cb="+ka().toString());return new I(function(b,e){fg(a,f,function(a){a?a.error?e(gg(a)):b(a):e(new R("network-request-failed"));},c,ig(d),a.cd,a.ae);});},kg=function(a){if(!lc.test(a.email))throw new R("invalid-email");},lg=function(a){"email"in a&&kg(a);},ng=function(a,b){var c=vf()?hf():"http://localhost";return S(a,mg,{identifier:b,continueUri:c}).then(function(a){return a.allProviders||[];});},pg=function(a){return S(a,og,{}).then(function(a){return a.authorizedDomains||[];});},qg=function(a){if(!a.idToken)throw new R("internal-error");};T.prototype.signInAnonymously=function(){return S(this,rg,{});};T.prototype.updateEmail=function(a,b){return S(this,sg,{idToken:a,email:b});};T.prototype.updatePassword=function(a,b){return S(this,Wf,{idToken:a,password:b});};var tg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};T.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Qa(tg,function(a,f){var g=b[f];null===g?d.push(a):f in b&&(c[f]=g);});d.length&&(c.deleteAttribute=d);return S(this,sg,c);};T.prototype.sendPasswordResetEmail=function(a){return S(this,ug,{requestType:"PASSWORD_RESET",email:a});};T.prototype.sendEmailVerification=function(a){return S(this,vg,{requestType:"VERIFY_EMAIL",idToken:a});};var xg=function(a,b,c){return S(a,wg,{idToken:b,deleteProvider:c});},yg=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new R("internal-error");},zg=function(a){if(a.needConfirmation)throw(a&&a.email?new $f(a.email,Zf(a),a.message):null)||new R("account-exists-with-different-credential");if(!a.idToken)throw new R("internal-error");},Ag=function(a){if(!a.oobCode)throw new R("invalid-action-code");};T.prototype.confirmPasswordReset=function(a,b){return S(this,Bg,{oobCode:a,newPassword:b});};T.prototype.checkActionCode=function(a){return S(this,Cg,{oobCode:a});};T.prototype.applyActionCode=function(a){return S(this,Dg,{oobCode:a});};var Dg={endpoint:"setAccountInfo",D:Ag,cb:"email"},Cg={endpoint:"resetPassword",D:Ag,sa:function(a){if(!lc.test(a.email))throw new R("internal-error");}},Eg={endpoint:"signupNewUser",D:function(a){kg(a);if(!a.password)throw new R("weak-password");},sa:qg,ta:!0},mg={endpoint:"createAuthUri"},Fg={endpoint:"deleteAccount",ab:["idToken"]},wg={endpoint:"setAccountInfo",ab:["idToken","deleteProvider"],D:function(a){if(!da(a.deleteProvider))throw new R("internal-error");}},Gg={endpoint:"getAccountInfo"},vg={endpoint:"getOobConfirmationCode",ab:["idToken","requestType"],D:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new R("internal-error");},cb:"email"},ug={endpoint:"getOobConfirmationCode",ab:["requestType"],D:function(a){if("PASSWORD_RESET"!=a.requestType)throw new R("internal-error");kg(a);},cb:"email"},og={Rd:!0,endpoint:"getProjectConfig",je:"GET"},Bg={endpoint:"resetPassword",D:Ag,cb:"email"},sg={endpoint:"setAccountInfo",ab:["idToken"],D:lg,ta:!0},Wf={endpoint:"setAccountInfo",ab:["idToken"],D:function(a){lg(a);if(!a.password)throw new R("weak-password");},sa:qg,ta:!0},rg={endpoint:"signupNewUser",sa:qg,ta:!0},Nf={endpoint:"verifyAssertion",D:yg,sa:zg,ta:!0},Of={endpoint:"verifyAssertion",D:function(a){yg(a);if(!a.idToken)throw new R("internal-error");},sa:zg,ta:!0},Hg={endpoint:"verifyCustomToken",D:function(a){if(!a.token)throw new R("invalid-custom-token");},sa:qg,ta:!0},Vf={endpoint:"verifyPassword",D:function(a){kg(a);if(!a.password)throw new R("wrong-password");},sa:qg,ta:!0},S=function(a,b,c){if(!Ef(c,b.ab))return K(new R("internal-error"));var d=b.je||"POST",e;return J(c).then(b.D).then(function(){b.ta&&(c.returnSecureToken=!0);return jg(a,b.endpoint,d,c,b.Rd||!1);}).then(function(a){return e=a;}).then(b.sa).then(function(){if(!b.cb)return e;if(!(b.cb in e))throw new R("internal-error");return e[b.cb];});},gg=function(a){var b,c;c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new R(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed"};b=(b=c.match(/:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new R(d[e],b);!b&&a&&(b=xf(a));return new R("internal-error",b);};var Ig=function(a){this.R=a;};Ig.prototype.value=function(){return this.R;};Ig.prototype.zd=function(a){this.R.style=a;return this;};var Jg=function(a){this.R=a||{};};Jg.prototype.value=function(){return this.R;};Jg.prototype.zd=function(a){this.R.style=a;return this;};var Lg=function(a){this.Je=a;this.vc=null;this.od=Kg(this);};Lg.prototype.Bc=function(){return this.od;};var Mg=function(a){var b=new Jg();b.R.where=document.body;b.R.url=a.Je;b.R.messageHandlersFilter=tf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.R.attributes=b.R.attributes||{};new Ig(b.R.attributes).zd({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.R.dontclear=!0;return b;},Kg=function(a){return Ng().then(function(){return new I(function(b,c){tf("gapi.iframes.getContext")().open(Mg(a).value(),function(d){a.vc=d;a.vc.restyle({setHideOnLeave:!1});var e=setTimeout(function(){c(Error("Network Error"));},5E3),f=function(){clearTimeout(e);b();};d.ping(f).then(f,function(){c(Error("Network Error"));});});});});},Og=function(a,b){a.od.then(function(){a.vc.register("authEvent",b,tf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));});},Pg="__iframefcb"+Math.floor(1E6*Math.random()).toString(),Ng=function(){return new I(function(a,b){var c=function(){zf();tf("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){zf();b(Error("Network Error"));},timeout:3E3});};tf("gapi.iframes.Iframe")?a():tf("gapi.load")?c():(l[Pg]=function(){tf("gapi.load")?c():b(Error("Network Error"));},J(Nd("https://apis.google.com/js/api.js?onload="+Pg)).l(function(){b(Error("Network Error"));}));});};var Rg=function(a,b,c,d){this.X=a;this.v=b;this.ea=c;d=this.xa=d||null;a=af(a,"/__/auth/iframe");P(a,"apiKey",b);P(a,"appName",c);d&&P(a,"v",d);this.ke=a.toString();this.hd=new Lg(this.ke);this.yb=[];Qg(this);};Rg.prototype.Bc=function(){return this.hd.Bc();};var Sg=function(a,b,c,d,e,f,g,k,q){a=af(a,"/__/auth/handler");P(a,"apiKey",b);P(a,"appName",c);P(a,"authType",d);P(a,"providerId",e);f&&f.length&&P(a,"scopes",f.join(","));g&&P(a,"redirectUrl",g);k&&P(a,"eventId",k);q&&P(a,"v",q);return a.toString();},Qg=function(a){Og(a.hd,function(b){var c={};if(b&&b.authEvent){var d=!1;b=b.authEvent||{};if(b.type){if(c=b.error)var e=(c=b.error)&&(c.name||c.code),c=e?new R(e.substring(5),c.message):null;b=new If(b.type,b.eventId,b.urlResponse,b.sessionId,c);}else b=null;for(c=0;c<a.yb.length;c++)d=a.yb[c](b)||d;c={};c.status=d?"ACK":"ERROR";return J(c);}c.status="ERROR";return J(c);});},Tg=function(a,b){La(a.yb,function(a){return a==b;});};var Ug=function(a){this.u=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.u)throw new R("internal-error","The React Native compatibility library was not found.");};h=Ug.prototype;h.get=function(a){return J(this.u.getItem(a)).then(function(a){return a&&yf(a);});};h.set=function(a,b){return J(this.u.setItem(a,xf(b)));};h.remove=function(a){return J(this.u.removeItem(a));};h.Ka=function(){};h.Za=function(){};var Vg=function(){this.u={};};h=Vg.prototype;h.get=function(a){return J(this.u[a]);};h.set=function(a,b){this.u[a]=b;return J();};h.remove=function(a){delete this.u[a];return J();};h.Ka=function(){};h.Za=function(){};var Xg=function(){if(!Wg()){if("Node"==qf())throw new R("internal-error","The LocalStorage compatibility library was not found.");throw new R("web-storage-unsupported");}this.u=l.localStorage||firebase.INTERNAL.node.localStorage;},Wg=function(){var a="Node"==qf(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0;}catch(b){return!1;}};h=Xg.prototype;h.get=function(a){var b=this;return J().then(function(){var c=b.u.getItem(a);return yf(c);});};h.set=function(a,b){var c=this;return J().then(function(){var d=xf(b);null===d?c.remove(a):c.u.setItem(a,d);});};h.remove=function(a){var b=this;return J().then(function(){b.u.removeItem(a);});};h.Ka=function(a){l.window&&Yb(l.window,"storage",a);};h.Za=function(a){l.window&&gc(l.window,"storage",a);};var Yg=function(){this.u={};};h=Yg.prototype;h.get=function(){return J(null);};h.set=function(){return J();};h.remove=function(){return J();};h.Ka=function(){};h.Za=function(){};var $g=function(){if(!Zg()){if("Node"==qf())throw new R("internal-error","The SessionStorage compatibility library was not found.");throw new R("web-storage-unsupported");}this.u=l.sessionStorage||firebase.INTERNAL.node.sessionStorage;},Zg=function(){var a="Node"==qf(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0;}catch(b){return!1;}};h=$g.prototype;h.get=function(a){var b=this;return J().then(function(){var c=b.u.getItem(a);return yf(c);});};h.set=function(a,b){var c=this;return J().then(function(){var d=xf(b);null===d?c.remove(a):c.u.setItem(a,d);});};h.remove=function(a){var b=this;return J().then(function(){b.u.removeItem(a);});};h.Ka=function(){};h.Za=function(){};var ah=function(a,b,c,d,e,f){if(!window.indexedDB)throw new R("web-storage-unsupported");this.Ud=a;this.Ac=b;this.pc=c;this.Fd=d;this.ma=e;this.O={};this.ub=[];this.rb=0;this.le=f||l.indexedDB;},bh,ch=function(a){return new I(function(b,c){var d=a.le.open(a.Ud,a.ma);d.onerror=function(a){c(Error(a.target.errorCode));};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Ac,{keyPath:a.pc});}catch(d){c(d);}};d.onsuccess=function(a){b(a.target.result);};});},dh=function(a){a.jd||(a.jd=ch(a));return a.jd;},eh=function(a,b){return b.objectStore(a.Ac);},fh=function(a,b,c){return b.transaction([a.Ac],c?"readwrite":"readonly");},gh=function(a){return new I(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b();};a.onerror=function(a){c(Error(a.target.errorCode));};});};h=ah.prototype;h.set=function(a,b){var c=!1,d,e=this;return wd(dh(this).then(function(b){d=b;b=eh(e,fh(e,d,!0));return gh(b.get(a));}).then(function(f){var g=eh(e,fh(e,d,!0));if(f)return f.value=b,gh(g.put(f));e.rb++;c=!0;f={};f[e.pc]=a;f[e.Fd]=b;return gh(g.add(f));}).then(function(){e.O[a]=b;}),function(){c&&e.rb--;});};h.get=function(a){var b=this;return dh(this).then(function(c){return gh(eh(b,fh(b,c,!1)).get(a));}).then(function(a){return a&&a.value;});};h.remove=function(a){var b=!1,c=this;return wd(dh(this).then(function(d){b=!0;c.rb++;return gh(eh(c,fh(c,d,!0))["delete"](a));}).then(function(){delete c.O[a];}),function(){b&&c.rb--;});};h.Fe=function(){var a=this;return dh(this).then(function(b){var c=eh(a,fh(a,b,!1));return c.getAll?gh(c.getAll()):new I(function(a,b){var f=[],g=c.openCursor();g.onsuccess=function(b){(b=b.target.result)?(f.push(b.value),b["continue"]()):a(f);};g.onerror=function(a){b(Error(a.target.errorCode));};});}).then(function(b){var c={},d=[];if(0==a.rb){for(d=0;d<b.length;d++)c[b[d][a.pc]]=b[d][a.Fd];d=jf(a.O,c);a.O=c;}return d;});};h.Ka=function(a){0==this.ub.length&&this.Oc();this.ub.push(a);};h.Za=function(a){La(this.ub,function(b){return b==a;});0==this.ub.length&&this.dc();};h.Oc=function(){var a=this;this.dc();var b=function(){a.Fc=we(800).then(r(a.Fe,a)).then(function(b){0<b.length&&x(a.ub,function(a){a(b);});}).then(b).l(function(a){"STOP_EVENT"!=a.message&&b();});return a.Fc;};b();};h.dc=function(){this.Fc&&this.Fc.cancel("STOP_EVENT");};var kh=function(){this.$c={Browser:hh,Node:ih,ReactNative:jh}[qf()];},lh,hh={V:Xg,Qc:$g},ih={V:Xg,Qc:$g},jh={V:Ug,Qc:Yg};var mh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),U=function(a,b){return{name:a||"",ca:"a valid string",optional:!!b,da:n};},nh=function(a){return{name:a||"",ca:"a valid object",optional:!1,da:ga};},oh=function(a,b){return{name:a||"",ca:"a function",optional:!!b,da:p};},ph=function(){return{name:"",ca:"null",optional:!1,da:ca};},qh=function(){return{name:"credential",ca:"a valid credential",optional:!1,da:function(a){return!(!a||!a.Gb);}};},rh=function(){return{name:"authProvider",ca:"a valid Auth provider",optional:!1,da:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"));}};},sh=function(a,b,c,d){return{name:c||"",ca:a.ca+" or "+b.ca,optional:!!d,da:function(c){return a.da(c)||b.da(c);}};};var uh=function(a,b){for(var c in b){var d=b[c].name;a[d]=th(d,a[c],b[c].b);}},V=function(a,b,c,d){a[b]=th(b,c,d);},th=function(a,b,c){if(!c)return b;var d=vh(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var q=!1,ra=0;ra<c.length;ra++)if(c[ra].optional)q=!0;else{if(q)throw new R("internal-error","Argument validator encountered a required argument after an optional argument.");k++;}q=c.length;if(e.length<k||q<e.length)e="Expected "+(k==q?1==k?"1 argument":k+" arguments":k+"-"+q+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(q=c[k].optional&&void 0===e[k],!c[k].da(e[k])&&!q){e=c[k];if(0>k||k>=mh.length)throw new R("internal-error","Argument validator received an unsupported number of arguments.");e=mh[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.ca+".";break a;}e=null;}}if(e)throw new R("argument-error",d+" failed: "+e);return b.apply(this,a);};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=b.prototype[e];return a;},vh=function(a){a=a.split(".");return a[a.length-1];};var wh=function(a,b,c,d){this.te=a;this.xd=b;this.ze=c;this.eb=d;this.N={};lh||(lh=new kh());a=lh;try{var e;gf()?(bh||(bh=new ah("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),e=bh):e=new a.$c.V();this.Ta=e;}catch(f){this.Ta=new Vg(),this.eb=!0;}try{this.fc=new a.$c.Qc();}catch(f){this.fc=new Vg();}this.Ad=r(this.Bd,this);this.O={};},xh,yh=function(){xh||(xh=new wh("firebase",":","Safari"==kf(ff())&&l.window&&l.window!=l.window.top?!0:!1,wf()));return xh;};h=wh.prototype;h.K=function(a,b){return this.te+this.xd+a.name+(b?this.xd+b:"");};h.get=function(a,b){return(a.V?this.Ta:this.fc).get(this.K(a,b));};h.remove=function(a,b){b=this.K(a,b);a.V&&!this.eb&&(this.O[b]=null);return(a.V?this.Ta:this.fc).remove(b);};h.set=function(a,b,c){var d=this.K(a,c),e=this,f=a.V?this.Ta:this.fc;return f.set(d,b).then(function(){return f.get(d);}).then(function(b){a.V&&!this.eb&&(e.O[d]=b);});};h.addListener=function(a,b,c){a=this.K(a,b);this.eb||(this.O[a]=l.localStorage.getItem(a));Ta(this.N)&&this.Oc();this.N[a]||(this.N[a]=[]);this.N[a].push(c);};h.removeListener=function(a,b,c){a=this.K(a,b);this.N[a]&&(La(this.N[a],function(a){return a==c;}),0==this.N[a].length&&delete this.N[a]);Ta(this.N)&&this.dc();};h.Oc=function(){this.Ta.Ka(this.Ad);this.eb||zh(this);};var zh=function(a){Ah(a);a.zc=setInterval(function(){for(var b in a.N){var c=l.localStorage.getItem(b);c!=a.O[b]&&(a.O[b]=c,c=new Nb({type:"storage",key:b,target:window,oldValue:a.O[b],newValue:c}),a.Bd(c));}},1E3);},Ah=function(a){a.zc&&(clearInterval(a.zc),a.zc=null);};wh.prototype.dc=function(){this.Ta.Za(this.Ad);this.eb||Ah(this);};wh.prototype.Bd=function(a){if(a&&a.ce){var b=a.kb.key;if(this.ze){var c=l.localStorage.getItem(b);a=a.kb.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b));}this.O[b]=l.localStorage.getItem(b);this.Vc(b);}else x(a,r(this.Vc,this));};wh.prototype.Vc=function(a){this.N[a]&&x(this.N[a],function(a){a();});};var Bh=function(a){this.B=a;this.A=yh();},Ch={name:"pendingRedirect",V:!1},Dh=function(a){return a.A.set(Ch,"pending",a.B);},Eh=function(a){return a.A.remove(Ch,a.B);},Fh=function(a){return a.A.get(Ch,a.B).then(function(a){return"pending"==a;});};var Ih=function(a,b,c){var d=this,e=(this.xa=firebase.SDK_VERSION||null)?sf(this.xa):null;this.f=new T(b,null,e);this.pa=null;this.X=a;this.v=b;this.ea=c;this.vb=[];this.Pb=!1;this.Rc=r(this.de,this);this.Wa=new Gh(this);this.rd=new Hh(this);this.Ec=new Bh(this.v+":"+this.ea);this.gb={};this.gb.unknown=this.Wa;this.gb.signInViaRedirect=this.Wa;this.gb.linkViaRedirect=this.Wa;this.gb.signInViaPopup=this.rd;this.gb.linkViaPopup=this.rd;this.Zb=this.bb=null;this.Tb=new I(function(a,b){d.bb=a;d.Zb=b;});};Ih.prototype.reset=function(){var a=this;this.pa=null;this.Tb.cancel();this.Pb=!1;this.Zb=this.bb=null;this.Mb&&Tg(this.Mb,this.Rc);this.Tb=new I(function(b,c){a.bb=b;a.Zb=c;});};var Jh=function(a){var b=hf();return pg(a).then(function(a){a:{for(var d=$e(b).ga,e=0;e<a.length;e++){var f;var g=a[e];f=d;var k=Qc(g);k?f=(f=Qc(f))?k.Eb(f):!1:(k=g.split(".").join("\\."),f=new RegExp("^(.+\\."+k+"|"+k+")$","i").test(f));if(f){a=!0;break a;}}a=!1;}if(!a)throw new Jf(hf());});},Kh=function(a){a.Pb||(a.Pb=!0,pf().then(function(){a.Mb=new Rg(a.X,a.v,a.ea,a.xa);a.Mb.Bc().l(function(){a.Zb(new R("network-request-failed"));a.reset();});a.Mb.yb.push(a.Rc);}));return a.Tb;};Ih.prototype.subscribe=function(a){Ia(this.vb,a)||this.vb.push(a);if(!this.Pb){var b=this,c=function(){var a=ff(),c;(c=wf(a))||(a=a||ff(),c="Safari"==kf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0);c?Lh(b.Wa):Kh(b);};Fh(this.Ec).then(function(a){a?Eh(b.Ec).then(function(){Kh(b);}):c();}).l(function(){c();});}};Ih.prototype.unsubscribe=function(a){La(this.vb,function(b){return b==a;});};Ih.prototype.de=function(a){if(!a)throw new R("invalid-auth-event");this.bb&&(this.bb(),this.bb=null);for(var b=!1,c=0;c<this.vb.length;c++){var d=this.vb[c];if(d.Wc(a.ua,a.za)){(b=this.gb[a.ua])&&b.sd(a,d);b=!0;break;}}Lh(this.Wa);return b;};Ih.prototype.getRedirectResult=function(){return this.Wa.getRedirectResult();};var Nh=function(a,b,c,d,e,f){if(!b)return K(new R("popup-blocked"));if(f)return Kh(a),J();a.pa||(a.pa=Jh(a.f));return a.pa.then(function(){return Kh(a);}).then(function(){Mh(d);var f=Sg(a.X,a.v,a.ea,c,d.providerId,d.Hb(),null,e,a.xa);Ib((b||l.window).location,f);}).l(function(b){"auth/network-request-failed"==b.code&&(a.pa=null);throw b;});},Oh=function(a,b,c,d){a.pa||(a.pa=Jh(a.f));return a.pa.then(function(){Mh(c);var e=Sg(a.X,a.v,a.ea,b,c.providerId,c.Hb(),hf(),d,a.xa);Dh(a.Ec).then(function(){Ib(l.window.location,e);});});},Ph=function(a,b,c,d,e){var f=new R("popup-closed-by-user");return a.Tb.l(function(){}).then(function(){return of(d);}).then(function(){return we(2E3).then(function(){b.Ha(c,null,f,e);});});},Mh=function(a){if(!a.isOAuthProvider)throw new R("invalid-oauth-provider");},Qh={},Rh=function(a,b,c){var d=b+":"+c;Qh[d]||(Qh[d]=new Ih(a,b,c));return Qh[d];},Gh=function(a){this.A=a;this.Jc=this.Yb=this.Xa=this.W=null;this.Ic=!1;};Gh.prototype.sd=function(a,b){if(!a)return K(new R("invalid-auth-event"));this.Ic=!0;var c=a.ua,d=a.za;"unknown"==c?(this.W||Sh(this,!1,null,null),a=J()):a=a.J?this.Gc(a,b):b.lb(c,d)?this.Hc(a,b):K(new R("invalid-auth-event"));return a;};var Lh=function(a){a.Ic||(a.Ic=!0,Sh(a,!1,null,null));};Gh.prototype.Gc=function(a){this.W||Sh(this,!0,null,a.getError());return J();};Gh.prototype.Hc=function(a,b){var c=this,d=a.ua;b=b.lb(d,a.za);var e=a.hb;a=a.bc;var f="signInViaRedirect"==d||"linkViaRedirect"==d;return this.W?J():b(e,a).then(function(a){c.W||Sh(c,f,a,null);}).l(function(a){c.W||Sh(c,f,null,a);});};var Sh=function(a,b,c,d){b?d?(a.W=function(){return K(d);},a.Yb&&a.Yb(d)):(a.W=function(){return J(c);},a.Xa&&a.Xa(c)):(a.W=function(){return J({user:null});},a.Xa&&a.Xa({user:null}));a.Xa=null;a.Yb=null;};Gh.prototype.getRedirectResult=function(){var a=this;this.Uc||(this.Uc=new I(function(b,c){a.W?a.W().then(b,c):(a.Xa=b,a.Yb=c,Th(a));}));return this.Uc;};var Th=function(a){var b=new R("timeout");a.Jc&&a.Jc.cancel();a.Jc=we(1E4).then(function(){a.W||Sh(a,!0,null,b);});},Hh=function(a){this.A=a;};Hh.prototype.sd=function(a,b){if(!a)return K(new R("invalid-auth-event"));var c=a.ua,d=a.za;return a.J?this.Gc(a,b):b.lb(c,d)?this.Hc(a,b):K(new R("invalid-auth-event"));};Hh.prototype.Gc=function(a,b){b.Ha(a.ua,null,a.getError(),a.za);return J();};Hh.prototype.Hc=function(a,b){var c=a.za,d=a.ua;return b.lb(d,c)(a.hb,a.bc).then(function(a){b.Ha(d,a,null,c);}).l(function(a){b.Ha(d,null,a,c);});};var Uh=function(a){this.f=a;this.wa=this.S=null;this.Pa=0;};Uh.prototype.G=function(){return{apiKey:this.f.v,refreshToken:this.S,accessToken:this.wa,expirationTime:this.Pa};};var Wh=function(a,b){var c=b.idToken,d=b.refreshToken;b=Vh(b.expiresIn);a.wa=c;a.Pa=b;a.S=d;},Vh=function(a){return ka()+1E3*parseInt(a,10);},Xh=function(a,b){return hg(a.f,b).then(function(b){a.wa=b.access_token;a.Pa=Vh(b.expires_in);a.S=b.refresh_token;return{accessToken:a.wa,expirationTime:a.Pa,refreshToken:a.S};}).l(function(b){"auth/user-token-expired"==b.code&&(a.S=null);throw b;});},Yh=function(a){return!(!a.wa||a.S);};Uh.prototype.getToken=function(a){a=!!a;return Yh(this)?K(new R("user-token-expired")):a||!this.wa||ka()>this.Pa-3E4?this.S?Xh(this,{grant_type:"refresh_token",refresh_token:this.S}):J(null):J({accessToken:this.wa,expirationTime:this.Pa,refreshToken:this.S});};var Zh=function(a,b,c,d,e){Cf(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b});},$h=function(a,b){Mb.call(this,a);for(var c in b)this[c]=b[c];};t($h,Mb);var W=function(a,b,c){this.U=[];this.v=a.apiKey;this.ea=a.appName;this.X=a.authDomain||null;a=firebase.SDK_VERSION?sf(firebase.SDK_VERSION):null;this.f=new T(this.v,null,a);this.ba=new Uh(this.f);ai(this,b.idToken);Wh(this.ba,b);Q(this,"refreshToken",this.ba.S);bi(this,c||{});Zd.call(this);this.Ub=!1;this.X&&vf()&&(this.m=Rh(this.X,this.v,this.ea));this.cc=[];};t(W,Zd);var ai=function(a,b){a.kd=b;Q(a,"_lat",b);},ci=function(a,b){La(a.cc,function(a){return a==b;});},di=function(a){for(var b=[],c=0;c<a.cc.length;c++)b.push(a.cc[c](a));return td(b).then(function(){return a;});},ei=function(a){a.m&&!a.Ub&&(a.Ub=!0,a.m.subscribe(a));},bi=function(a,b){Cf(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]});};Q(W.prototype,"providerId","firebase");var fi=function(){},gi=function(a){return J().then(function(){if(a.Vd)throw new R("app-deleted");});},hi=function(a){return Ea(a.providerData,function(a){return a.providerId;});},ji=function(a,b){b&&(ii(a,b.providerId),a.providerData.push(b));},ii=function(a,b){La(a.providerData,function(a){return a.providerId==b;});},ki=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&Q(a,b,c);};W.prototype.copy=function(a){var b=this;b!=a&&(Cf(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){ji(b,a);}),this.ba=a.ba,Q(this,"refreshToken",this.ba.S));};W.prototype.reload=function(){var a=this;return gi(this).then(function(){return li(a).then(function(){return di(a);}).then(fi);});};var li=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return mi(a,b).then(function(){c||ki(a,"isAnonymous",!1);return b;}).l(function(b){"auth/user-token-expired"==b.code&&(a.dispatchEvent(new $h("userDeleted")),ni(a));throw b;});});};W.prototype.getToken=function(a){var b=this,c=Yh(this.ba);return gi(this).then(function(){return b.ba.getToken(a);}).then(function(a){if(!a)throw new R("internal-error");a.accessToken!=b.kd&&(ai(b,a.accessToken),b.Da());ki(b,"refreshToken",a.refreshToken);return a.accessToken;}).l(function(a){if("auth/user-token-expired"==a.code&&!c)return di(b).then(function(){ki(b,"refreshToken",null);throw a;});throw a;});};var oi=function(a,b){b.idToken&&a.kd!=b.idToken&&(Wh(a.ba,b),a.Da(),ai(a,b.idToken),ki(a,"refreshToken",a.ba.S));};W.prototype.Da=function(){this.dispatchEvent(new $h("tokenChanged"));};var mi=function(a,b){return S(a.f,Gg,{idToken:b}).then(r(a.we,a));};W.prototype.we=function(a){a=a.users;if(!a||!a.length)throw new R("internal-error");a=a[0];bi(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=pi(a),c=0;c<b.length;c++)ji(this,b[c]);ki(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length));};var pi=function(a){return(a=a.providerUserInfo)&&a.length?Ea(a,function(a){return new Zh(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl);}):[];};W.prototype.reauthenticate=function(a){var b=this;return this.c(a.Gb(this.f).then(function(a){var d;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=mc(tb(e));if(k.sub&&k.iss&&k.aud&&k.exp){d=new Kf(k);break a;}}catch(q){}}d=null;}if(!d||b.uid!=d.qe)throw new R("user-mismatch");oi(b,a);return b.reload();}));};var qi=function(a,b){return li(a).then(function(){if(Ia(hi(a),b))return di(a).then(function(){throw new R("provider-already-linked");});});};h=W.prototype;h.link=function(a){var b=this;return this.c(qi(this,a.provider).then(function(){return b.getToken();}).then(function(c){return a.md(b.f,c);}).then(r(this.bd,this)));};h.bd=function(a){oi(this,a);var b=this;return this.reload().then(function(){return b;});};h.updateEmail=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updateEmail(c,a);}).then(function(a){oi(b,a);return b.reload();}));};h.updatePassword=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updatePassword(c,a);}).then(function(a){oi(b,a);return b.reload();}));};h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return gi(this);var b=this;return this.c(this.getToken().then(function(c){return b.f.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL});}).then(function(a){oi(b,a);ki(b,"displayName",a.displayName||null);ki(b,"photoURL",a.photoUrl||null);return di(b);}).then(fi));};h.unlink=function(a){var b=this;return this.c(li(this).then(function(c){return Ia(hi(b),a)?xg(b.f,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0;});x(hi(b),function(a){c[a]||ii(b,a);});return di(b);}):di(b).then(function(){throw new R("no-such-provider");});}));};h.delete=function(){var a=this;return this.c(this.getToken().then(function(b){return S(a.f,Fg,{idToken:b});}).then(function(){a.dispatchEvent(new $h("userDeleted"));})).then(function(){ni(a);});};h.Wc=function(a,b){return"linkViaPopup"==a&&(this.ia||null)==b&&this.$||"linkViaRedirect"==a&&(this.Xb||null)==b?!0:!1;};h.Ha=function(a,b,c,d){"linkViaPopup"==a&&d==(this.ia||null)&&(c&&this.Fa?this.Fa(c):b&&!c&&this.$&&this.$(b),this.C&&(this.C.cancel(),this.C=null),delete this.$,delete this.Fa);};h.lb=function(a,b){return"linkViaPopup"==a&&b==(this.ia||null)||"linkViaRedirect"==a&&(this.Xb||null)==b?r(this.Yd,this):null;};h.Fb=function(){return uf(this.uid+":::");};h.linkWithPopup=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Gf(a.providerId),d=this.Fb(),e=null;!wf()&&this.X&&a.isOAuthProvider&&(e=Sg(this.X,this.v,this.ea,"linkViaPopup",a.providerId,a.Hb(),null,d,firebase.SDK_VERSION||null));var f=nf(e,c&&c.tb,c&&c.sb),c=qi(this,a.providerId).then(function(){return di(b);}).then(function(){ri(b);return b.getToken();}).then(function(){return Nh(b.m,f,"linkViaPopup",a,d,!!e);}).then(function(){return new I(function(a,c){b.Ha("linkViaPopup",null,new R("cancelled-popup-request"),b.ia||null);b.$=a;b.Fa=c;b.ia=d;b.C=Ph(b.m,b,"linkViaPopup",f,d);});}).then(function(a){f&&mf(f);return a;}).l(function(a){f&&mf(f);throw a;});return this.c(c);};h.linkWithRedirect=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=null,d=this.Fb(),e=qi(this,a.providerId).then(function(){ri(b);return b.getToken();}).then(function(){b.Xb=d;return di(b);}).then(function(a){b.Ga&&(a=b.Ga,a=a.A.set(si,b.G(),a.B));return a;}).then(function(){return Oh(b.m,"linkViaRedirect",a,d);}).l(function(a){c=a;if(b.Ga)return ti(b.Ga);throw c;}).then(function(){if(c)throw c;});return this.c(e);};var ri=function(a){if(a.m&&a.Ub)return;if(a.m&&!a.Ub)throw new R("internal-error");throw new R("auth-domain-config-required");};W.prototype.Yd=function(a,b){var c=this;this.C&&(this.C.cancel(),this.C=null);var d=null,e=this.getToken().then(function(d){return S(c.f,Of,{requestUri:a,sessionId:b,idToken:d});}).then(function(a){d=Zf(a);return c.bd(a);}).then(function(a){return{user:a,credential:d};});return this.c(e);};W.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getToken().then(function(b){return a.f.sendEmailVerification(b);}).then(function(b){if(a.email!=b)return a.reload();}).then(function(){}));};var ni=function(a){for(var b=0;b<a.U.length;b++)a.U[b].cancel("app-deleted");a.U=[];a.Vd=!0;Q(a,"refreshToken",null);a.m&&a.m.unsubscribe(a);};W.prototype.c=function(a){var b=this;this.U.push(a);wd(a,function(){Ka(b.U,a);});return a;};W.prototype.toJSON=function(){return this.G();};W.prototype.G=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.v,appName:this.ea,authDomain:this.X,stsTokenManager:this.ba.G(),redirectEventId:this.Xb||null};x(this.providerData,function(b){a.providerData.push(Df(b));});return a;};var ui=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-ka())/1E3;else return null;var d=new W(b,c,a);a.providerData&&x(a.providerData,function(a){if(a){var b={};Cf(b,a);ji(d,b);}});a.redirectEventId&&(d.Xb=a.redirectEventId);return d;},vi=function(a,b,c){var d=new W(a,b);c&&(d.Ga=c);return d.reload().then(function(){return d;});};var wi=function(a){this.B=a;this.A=yh();},si={name:"redirectUser",V:!1},ti=function(a){return a.A.remove(si,a.B);},xi=function(a,b){return a.A.get(si,a.B).then(function(a){a&&b&&(a.authDomain=b);return ui(a||{});});};var yi=function(a){this.B=a;this.A=yh();},zi={name:"authUser",V:!0},Ai=function(a){return a.A.remove(zi,a.B);},Bi=function(a,b){return a.A.get(zi,a.B).then(function(a){a&&b&&(a.authDomain=b);return ui(a||{});});};var Y=function(a){this.Na=!1;Q(this,"app",a);if(X(this).options&&X(this).options.apiKey)a=firebase.SDK_VERSION?sf(firebase.SDK_VERSION):null,this.f=new T(X(this).options&&X(this).options.apiKey,null,a);else throw new R("invalid-api-key");this.U=[];this.La=[];this.ue=firebase.INTERNAL.createSubscribe(r(this.me,this));Ci(this,null);this.va=new yi(X(this).options.apiKey+":"+X(this).name);this.Ya=new wi(X(this).options.apiKey+":"+X(this).name);this.zb=this.c(Di(this));this.ra=this.c(Ei(this));this.yc=!1;this.uc=r(this.Ee,this);this.Dd=r(this.Ra,this);this.Ed=r(this.ie,this);this.Cd=r(this.he,this);Fi(this);this.INTERNAL={};this.INTERNAL.delete=r(this.delete,this);};Y.prototype.toJSON=function(){return{apiKey:X(this).options.apiKey,authDomain:X(this).options.authDomain,appName:X(this).name,currentUser:Z(this)&&Z(this).G()};};var Gi=function(a){return a.Wd||K(new R("auth-domain-config-required"));},Fi=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&&vf()&&(a.Wd=a.zb.then(function(){if(!a.Na)return a.m=Rh(b,c,X(a).name),a.m.subscribe(a),Z(a)&&ei(Z(a)),a.Kc&&(ei(a.Kc),a.Kc=null),a.m;}));};h=Y.prototype;h.Wc=function(a,b){switch(a){case"unknown":case"signInViaRedirect":return!0;case"signInViaPopup":return this.ia==b&&!!this.$;default:return!1;}};h.Ha=function(a,b,c,d){"signInViaPopup"==a&&this.ia==d&&(c&&this.Fa?this.Fa(c):b&&!c&&this.$&&this.$(b),this.C&&(this.C.cancel(),this.C=null),delete this.$,delete this.Fa);};h.lb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ia==b&&this.$?r(this.Zd,this):null;};h.Zd=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.C&&(this.C.cancel(),this.C=null);var d=null,e=S(c.f,Nf,a).then(function(a){d=Zf(a);return a;});a=c.zb.then(function(){return e;}).then(function(a){return Hi(c,a);}).then(function(){return{user:Z(c),credential:d};});return this.c(a);};h.Fb=function(){return uf();};h.signInWithPopup=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Gf(a.providerId),d=this.Fb(),e=null;!wf()&&X(this).options.authDomain&&a.isOAuthProvider&&(e=Sg(X(this).options.authDomain,X(this).options.apiKey,X(this).name,"signInViaPopup",a.providerId,a.Hb(),null,d,firebase.SDK_VERSION||null));var f=nf(e,c&&c.tb,c&&c.sb),c=Gi(this).then(function(b){return Nh(b,f,"signInViaPopup",a,d,!!e);}).then(function(){return new I(function(a,c){b.Ha("signInViaPopup",null,new R("cancelled-popup-request"),b.ia);b.$=a;b.Fa=c;b.ia=d;b.C=Ph(b.m,b,"signInViaPopup",f,d);});}).then(function(a){f&&mf(f);return a;}).l(function(a){f&&mf(f);throw a;});return this.c(c);};h.signInWithRedirect=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Gi(this).then(function(){return Oh(b.m,"signInViaRedirect",a);});return this.c(c);};h.getRedirectResult=function(){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var a=this,b=Gi(this).then(function(){return a.m.getRedirectResult();});return this.c(b);};var Hi=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.zb.then(function(){return vi(c,b,a.Ya);}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.Ra(b);Ci(a,b);ei(b);return a.Ra(b);}).then(function(){a.Da();});},Ci=function(a,b){Z(a)&&(ci(Z(a),a.Dd),gc(Z(a),"tokenChanged",a.Ed),gc(Z(a),"userDeleted",a.Cd));b&&(b.cc.push(a.Dd),Yb(b,"tokenChanged",a.Ed),Yb(b,"userDeleted",a.Cd));Q(a,"currentUser",b);};Y.prototype.signOut=function(){var a=this,b=this.ra.then(function(){if(!Z(a))return J();Ci(a,null);return Ai(a.va).then(function(){a.Da();});});return this.c(b);};var Ii=function(a){var b=xi(a.Ya,X(a).options.authDomain).then(function(b){if(a.Kc=b)b.Ga=a.Ya;return ti(a.Ya);});return a.c(b);},Di=function(a){var b=X(a).options.authDomain,c=Ii(a).then(function(){return Bi(a.va,b);}).then(function(b){return b?(b.Ga=a.Ya,b.reload().then(function(){return b;}).l(function(c){return"auth/network-request-failed"==c.code?b:Ai(a.va);})):null;}).then(function(b){Ci(a,b||null);});return a.c(c);},Ei=function(a){return a.zb.then(function(){return a.getRedirectResult();}).l(function(){}).then(function(){if(!a.Na)return a.uc();}).l(function(){}).then(function(){if(!a.Na){a.yc=!0;var b=a.va;b.A.addListener(zi,b.B,a.uc);}});};Y.prototype.Ee=function(){var a=this;return Bi(this.va,X(this).options.authDomain).then(function(b){if(!a.Na){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d;}if(c)return Z(a).copy(b),Z(a).getToken();if(Z(a)||b)Ci(a,b),b&&(ei(b),b.Ga=a.Ya),a.m&&a.m.subscribe(a),a.Da();}});};Y.prototype.Ra=function(a){var b=this.va;return b.A.set(zi,a.G(),b.B);};Y.prototype.ie=function(){this.Da();this.Ra(Z(this));};Y.prototype.he=function(){this.signOut();};var Ji=function(a,b){return a.c(b.then(function(b){return Hi(a,b);}).then(function(){return Z(a);}));};h=Y.prototype;h.me=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b));});};h.onAuthStateChanged=function(a,b,c){var d=this;this.yc&&firebase.Promise.resolve().then(function(){p(a)?a(Z(d)):p(a.next)&&a.next(Z(d));});return this.ue(a,b,c);};h.getToken=function(a){var b=this,c=this.ra.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a};}):null;});return this.c(c);};h.signInWithCustomToken=function(a){var b=this;return this.ra.then(function(){return Ji(b,S(b.f,Hg,{token:a}));}).then(function(a){ki(a,"isAnonymous",!1);return b.Ra(a);}).then(function(){return Z(b);});};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.ra.then(function(){return Ji(c,S(c.f,Vf,{email:a,password:b}));});};h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.ra.then(function(){return Ji(c,S(c.f,Eg,{email:a,password:b}));});};h.signInWithCredential=function(a){var b=this;return this.ra.then(function(){return Ji(b,a.Gb(b.f));});};h.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?J(a):this.ra.then(function(){return Ji(b,b.f.signInAnonymously());}).then(function(a){ki(a,"isAnonymous",!0);return b.Ra(a);}).then(function(){return Z(b);});};var X=function(a){return a.app;},Z=function(a){return a.currentUser;};h=Y.prototype;h.Da=function(){if(this.yc)for(var a=0;a<this.La.length;a++)if(this.La[a])this.La[a](Z(this)&&Z(this)._lat||null);};h.addAuthTokenListener=function(a){var b=this;this.La.push(a);this.c(this.ra.then(function(){b.Na||Ia(b.La,a)&&a(Z(b)&&Z(b)._lat||null);}));};h.removeAuthTokenListener=function(a){La(this.La,function(b){return b==a;});};h.delete=function(){this.Na=!0;for(var a=0;a<this.U.length;a++)this.U[a].cancel("app-deleted");this.U=[];this.va&&(a=this.va,a.A.removeListener(zi,a.B,this.uc));this.m&&this.m.unsubscribe(this);return firebase.Promise.resolve();};h.c=function(a){var b=this;this.U.push(a);wd(a,function(){Ka(b.U,a);});return a;};h.fetchProvidersForEmail=function(a){return this.c(ng(this.f,a));};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email;});};h.confirmPasswordReset=function(a,b){return this.c(this.f.confirmPasswordReset(a,b).then(function(){}));};h.checkActionCode=function(a){return this.c(this.f.checkActionCode(a).then(function(a){return{data:{email:a.email}};}));};h.applyActionCode=function(a){return this.c(this.f.applyActionCode(a).then(function(){}));};h.sendPasswordResetEmail=function(a){return this.c(this.f.sendPasswordResetEmail(a).then(function(){}));};uh(Y.prototype,{applyActionCode:{name:"applyActionCode",b:[U("code")]},checkActionCode:{name:"checkActionCode",b:[U("code")]},confirmPasswordReset:{name:"confirmPasswordReset",b:[U("code"),U("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",b:[U("email"),U("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",b:[U("email")]},getRedirectResult:{name:"getRedirectResult",b:[]},onAuthStateChanged:{name:"onAuthStateChanged",b:[sh(nh(),oh(),"nextOrObserver"),oh("opt_error",!0),oh("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",b:[U("email")]},signInAnonymously:{name:"signInAnonymously",b:[]},signInWithCredential:{name:"signInWithCredential",b:[qh()]},signInWithCustomToken:{name:"signInWithCustomToken",b:[U("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",b:[U("email"),U("password")]},signInWithPopup:{name:"signInWithPopup",b:[rh()]},signInWithRedirect:{name:"signInWithRedirect",b:[rh()]},signOut:{name:"signOut",b:[]},toJSON:{name:"toJSON",b:[U(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",b:[U("code")]}});uh(W.prototype,{"delete":{name:"delete",b:[]},getToken:{name:"getToken",b:[{name:"opt_forceRefresh",ca:"a boolean",optional:!0,da:function(a){return"boolean"==typeof a;}}]},link:{name:"link",b:[qh()]},linkWithPopup:{name:"linkWithPopup",b:[rh()]},linkWithRedirect:{name:"linkWithRedirect",b:[rh()]},reauthenticate:{name:"reauthenticate",b:[qh()]},reload:{name:"reload",b:[]},sendEmailVerification:{name:"sendEmailVerification",b:[]},toJSON:{name:"toJSON",b:[U(null,!0)]},unlink:{name:"unlink",b:[U("provider")]},updateEmail:{name:"updateEmail",b:[U("email")]},updatePassword:{name:"updatePassword",b:[U("password")]},updateProfile:{name:"updateProfile",b:[nh("profile")]}});uh(I.prototype,{l:{name:"catch"},then:{name:"then"}});V(Xf,"credential",function(a,b){return new Uf(a,b);},[U("email"),U("password")]);uh(Qf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Qf,"credential",Qf.credential,[sh(U(),nh(),"token")]);uh(Rf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Rf,"credential",Rf.credential,[sh(U(),nh(),"token")]);uh(Sf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Sf,"credential",Sf.credential,[sh(U(),sh(nh(),ph()),"idToken"),sh(U(),ph(),"accessToken",!0)]);V(Tf,"credential",Tf.credential,[sh(U(),nh(),"token"),U("secret",!0)]);(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Y,Error:R};V(a,"EmailAuthProvider",Xf,[]);V(a,"FacebookAuthProvider",Qf,[]);V(a,"GithubAuthProvider",Rf,[]);V(a,"GoogleAuthProvider",Sf,[]);V(a,"TwitterAuthProvider",Tf,[]);firebase.INTERNAL.registerService("auth",function(a,c){a=new Y(a);c({INTERNAL:{getToken:r(a.getToken,a),addAuthTokenListener:r(a.addAuthTokenListener,a),removeAuthTokenListener:r(a.removeAuthTokenListener,a)}});return a;},a,function(a,c){if("create"===a)try{c.auth();}catch(d){}});firebase.INTERNAL.extendNamespace({User:W});}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();})();(function(){var h,n=this;function p(a){return void 0!==a;}function aa(){}function ba(a){a.Wb=function(){return a.bf?a.bf:a.bf=new a();};}function ca(a){var b=typeof a;if("object"==b){if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function";}else return"null";}else if("function"==b&&"undefined"==typeof a.call)return"object";return b;}function da(a){return"array"==ca(a);}function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length;}function q(a){return"string"==typeof a;}function fa(a){return"number"==typeof a;}function ga(a){return"function"==ca(a);}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b;}function ia(a,b,c){return a.call.apply(a.bind,arguments);}function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c);};}return function(){return a.apply(b,arguments);};}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return r.apply(null,arguments);}function ka(a,b){function c(){}c.prototype=b.prototype;a.Ig=b.prototype;a.prototype=new c();a.prototype.constructor=a;a.Eg=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g);};};function la(){this.Ya=-1;};function ma(){this.Ya=-1;this.Ya=64;this.N=[];this.Wd=[];this.Jf=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Ya;++a)this.zd[a]=0;this.Pd=this.ac=0;this.reset();}ka(ma,la);ma.prototype.reset=function(){this.N[0]=1732584193;this.N[1]=4023233417;this.N[2]=2562383102;this.N[3]=271733878;this.N[4]=3285377520;this.Pd=this.ac=0;};function na(a,b,c){c||(c=0);var d=a.Jf;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295;}b=a.N[0];c=a.N[1];for(var g=a.N[2],k=a.N[3],m=a.N[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),l=1518500249):(f=c^g^k,l=1859775393):60>e?(f=c&g|k&(c|g),l=2400959708):(f=c^g^k,l=3395469782),f=(b<<5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.N[0]=a.N[0]+b&4294967295;a.N[1]=a.N[1]+c&4294967295;a.N[2]=a.N[2]+g&4294967295;a.N[3]=a.N[3]+k&4294967295;a.N[4]=a.N[4]+m&4294967295;}ma.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.Wd,f=this.ac;d<b;){if(0==f)for(;d<=c;)na(this,a,d),d+=this.Ya;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){na(this,e);f=0;break;}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ya){na(this,e);f=0;break;}}this.ac=f;this.Pd+=b;}};function t(a,b){for(var c in a)b.call(void 0,a[c],c,a);}function oa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c;}function pa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0;}function qa(a){var b=0,c;for(c in a)b++;return b;}function ra(a){for(var b in a)return b;}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b;}function ta(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b;}function ua(a,b){for(var c in a)if(a[c]==b)return!0;return!1;}function va(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d;}function wa(a,b){var c=va(a,b,void 0);return c&&a[c];}function xa(a){for(var b in a)return!1;return!0;}function ya(a){var b={},c;for(c in a)b[c]=a[c];return b;};function za(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")");}catch(b){}throw Error("Invalid JSON string: "+a);}function Aa(){this.Fd=void 0;}function Ba(a,b,c){switch(typeof b){case"string":Ca(b,c);break;case"number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case"boolean":c.push(b);break;case"undefined":c.push("null");break;case"object":if(null==b){c.push("null");break;}if(da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ba(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break;}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ca(f,c),c.push(":"),Ba(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case"function":break;default:throw Error("Unknown type: "+typeof b);}}var Da={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ea=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Ca(a,b){b.push('"',a.replace(Ea,function(a){if(a in Da)return Da[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Da[a]=e+b.toString(16);}),'"');};var v;a:{var Fa=n.navigator;if(Fa){var Ga=Fa.userAgent;if(Ga){v=Ga;break a;}}v="";};function Ha(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ha);else{var b=Error().stack;b&&(this.stack=b);}a&&(this.message=String(a));}ka(Ha,Error);Ha.prototype.name="CustomError";var w=Array.prototype,Ia=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c);}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1;},Ja=w.forEach?function(a,b,c){w.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);},Ka=w.filter?function(a,b,c){return w.filter.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var m=g[k];b.call(c,m,k,a)&&(e[f++]=m);}return e;},La=w.map?function(a,b,c){return w.map.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e;},Ma=w.reduce?function(a,b,c,d){for(var e=[],f=1,g=arguments.length;f<g;f++)e.push(arguments[f]);d&&(e[0]=r(b,d));return w.reduce.apply(a,e);}:function(a,b,c,d){var e=c;Ja(a,function(c,g){e=b.call(d,e,c,g,a);});return e;},Na=w.every?function(a,b,c){return w.every.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0;};function Oa(a,b){var c=Pa(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c];}function Pa(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1;}function Qa(a,b){var c=Ia(a,b);0<=c&&w.splice.call(a,c,1);}function Ra(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c);}function Sa(a,b){a.sort(b||Ta);}function Ta(a,b){return a>b?1:a<b?-1:0;};var Ua=-1!=v.indexOf("Opera")||-1!=v.indexOf("OPR"),Va=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"),Wa=-1!=v.indexOf("Gecko")&&-1==v.toLowerCase().indexOf("webkit")&&!(-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE")),Xa=-1!=v.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Ua&&n.opera)return a=n.opera.version,ga(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(v))?a[1]:"");return Va&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a;})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,g||(k=64));d.push(c[u],c[f],c[k],c[l]);}return d.join("");}function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a);}};function cb(a){n.setTimeout(function(){throw a;},0);}var db;function eb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==v.indexOf("Presto")&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage();},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d);}};});if("undefined"!==typeof a&&-1==v.indexOf("Trident")&&-1==v.indexOf("MSIE")){var b=new a(),c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Le;c.Le=null;a();}};return function(a){d.next={Le:a};d=d.next;b.port2.postMessage(0);};}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null;};document.documentElement.appendChild(b);}:function(a){n.setTimeout(a,0);};};function fb(a,b){gb||hb();ib||(gb(),ib=!0);jb.push(new kb(a,b));}var gb;function hb(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve();gb=function(){a.then(lb);};}else gb=function(){var a=lb;!ga(n.setImmediate)||n.Window&&n.Window.prototype&&n.Window.prototype.setImmediate==n.setImmediate?(db||(db=eb()),db(a)):n.setImmediate(a);};}var ib=!1,jb=[];[].push(function(){ib=!1;jb=[];});function lb(){for(;jb.length;){var a=jb;jb=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.Wf.call(c.scope);}catch(d){cb(d);}}}ib=!1;}function kb(a,b){this.Wf=a;this.scope=b;};function mb(a,b){this.L=nb;this.uf=void 0;this.Ca=this.Ha=null;this.jd=this.be=!1;if(a==ob)pb(this,qb,b);else try{var c=this;a.call(b,function(a){pb(c,qb,a);},function(a){if(!(a instanceof rb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}pb(c,sb,a);});}catch(d){pb(this,sb,d);}}var nb=0,qb=2,sb=3;function ob(){}mb.prototype.then=function(a,b,c){return tb(this,ga(a)?a:null,ga(b)?b:null,c);};mb.prototype.then=mb.prototype.then;mb.prototype.$goog_Thenable=!0;h=mb.prototype;h.Ag=function(a,b){return tb(this,null,a,b);};h.cancel=function(a){this.L==nb&&fb(function(){var b=new rb(a);ub(this,b);},this);};function ub(a,b){if(a.L==nb)if(a.Ha){var c=a.Ha;if(c.Ca){for(var d=0,e=-1,f=0,g;g=c.Ca[f];f++)if(g=g.m)if(d++,g==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.L==nb&&1==d?ub(c,b):(d=c.Ca.splice(e,1)[0],vb(c,d,sb,b)));}a.Ha=null;}else pb(a,sb,b);}function wb(a,b){a.Ca&&a.Ca.length||a.L!=qb&&a.L!=sb||xb(a);a.Ca||(a.Ca=[]);a.Ca.push(b);}function tb(a,b,c,d){var e={m:null,hf:null,kf:null};e.m=new mb(function(a,g){e.hf=b?function(c){try{var e=b.call(d,c);a(e);}catch(l){g(l);}}:a;e.kf=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof rb?g(b):a(e);}catch(l){g(l);}}:g;});e.m.Ha=a;wb(a,e);return e.m;}h.Cf=function(a){this.L=nb;pb(this,qb,a);};h.Df=function(a){this.L=nb;pb(this,sb,a);};function pb(a,b,c){if(a.L==nb){if(a==c)b=sb,c=new TypeError("Promise cannot resolve to itself");else{var d;if(c)try{d=!!c.$goog_Thenable;}catch(e){d=!1;}else d=!1;if(d){a.L=1;c.then(a.Cf,a.Df,a);return;}if(ha(c))try{var f=c.then;if(ga(f)){yb(a,c,f);return;}}catch(g){b=sb,c=g;}}a.uf=c;a.L=b;a.Ha=null;xb(a);b!=sb||c instanceof rb||zb(a,c);}}function yb(a,b,c){function d(b){f||(f=!0,a.Df(b));}function e(b){f||(f=!0,a.Cf(b));}a.L=1;var f=!1;try{c.call(b,e,d);}catch(g){d(g);}}function xb(a){a.be||(a.be=!0,fb(a.Uf,a));}h.Uf=function(){for(;this.Ca&&this.Ca.length;){var a=this.Ca;this.Ca=null;for(var b=0;b<a.length;b++)vb(this,a[b],this.L,this.uf);}this.be=!1;};function vb(a,b,c,d){if(c==qb)b.hf(d);else{if(b.m)for(;a&&a.jd;a=a.Ha)a.jd=!1;b.kf(d);}}function zb(a,b){a.jd=!0;fb(function(){a.jd&&Ab.call(null,b);});}var Ab=cb;function rb(a){Ha.call(this,a);}ka(rb,Ha);rb.prototype.name="cancel";function Bb(a,b){return Object.prototype.hasOwnProperty.call(a,b);}function x(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b];}function Cb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c]);};function y(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function Db(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ");}function A(a,b,c,d){if((!d||p(c))&&!ga(c))throw Error(Db(a,b,d)+"must be a valid function.");}function Eb(a,b,c){if(p(c)&&(!ha(c)||null===c))throw Error(Db(a,b,!0)+"must be a valid context object.");};function Fb(a){var b=[];Cb(a,function(a,d){da(d)?Ja(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d));}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d));});return b.length?"&"+b.join("&"):"";};var Gb=n.Promise||mb;mb.prototype["catch"]=mb.prototype.Ag;function Hb(){var a=this;this.reject=this.resolve=null;this.ra=new Gb(function(b,c){a.resolve=b;a.reject=c;});}function Ib(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ga(b)&&(Jb(a.ra),1===b.length?b(c):b(c,d));};}function Jb(a){a.then(void 0,aa);};function Kb(a,b){if(!a)throw Lb(b);}function Lb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a);};function Mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,Kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128);}return b;}function Nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3;}return b;};function Ob(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):za(a);}function B(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ba(new Aa(),a,b);a=b.join("");}return a;};function Pb(a,b){this.committed=a;this.snapshot=b;};function Qb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"");};function Rb(a){this.te=a;this.Bd=[];this.Rb=0;this.Yd=-1;this.Gb=null;}function Sb(a,b,c){a.Yd=b;a.Gb=c;a.Yd<a.Rb&&(a.Gb(),a.Gb=null);}function Tb(a,b,c){for(a.Bd[b]=c;a.Bd[a.Rb];){var d=a.Bd[a.Rb];delete a.Bd[a.Rb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Ub(function(){f.te(d[e]);});}if(a.Rb===a.Yd){a.Gb&&(clearTimeout(a.Gb),a.Gb(),a.Gb=null);break;}a.Rb++;}};function Vb(){this.qc={};}Vb.prototype.set=function(a,b){null==b?delete this.qc[a]:this.qc[a]=b;};Vb.prototype.get=function(a){return Bb(this.qc,a)?this.qc[a]:null;};Vb.prototype.remove=function(a){delete this.qc[a];};Vb.prototype.cf=!0;function Wb(a){this.vc=a;this.Cd="firebase:";}h=Wb.prototype;h.set=function(a,b){null==b?this.vc.removeItem(this.Cd+a):this.vc.setItem(this.Cd+a,B(b));};h.get=function(a){a=this.vc.getItem(this.Cd+a);return null==a?null:Ob(a);};h.remove=function(a){this.vc.removeItem(this.Cd+a);};h.cf=!1;h.toString=function(){return this.vc.toString();};function Xb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Wb(b);}}catch(c){}return new Vb();}var Yb=Xb("localStorage"),Zb=Xb("sessionStorage");function $b(a,b,c){this.type=ac;this.source=a;this.path=b;this.Ja=c;}$b.prototype.Nc=function(a){return this.path.e()?new $b(this.source,C,this.Ja.R(a)):new $b(this.source,D(this.path),this.Ja);};$b.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ja.toString()+")";};function bc(a,b){this.type=cc;this.source=a;this.path=b;}bc.prototype.Nc=function(){return this.path.e()?new bc(this.source,C):new bc(this.source,D(this.path));};bc.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)";};function dc(a){this.He=a;}dc.prototype.getToken=function(a){return this.He.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a);});};function ec(a,b){a.He.INTERNAL.addAuthTokenListener(b);};function fc(){this.Jd=F;}fc.prototype.j=function(a){return this.Jd.Q(a);};fc.prototype.toString=function(){return this.Jd.toString();};function gc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.Cg=d;this.nf=e||"";this.bb=Yb.get("host:"+a)||this.host;}function hc(a,b){b!==a.bb&&(a.bb=b,"s-"===a.bb.substr(0,2)&&Yb.set("host:"+a.host,a.bb));}function ic(a,b,c){H("string"===typeof b,"typeof type must == string");H("object"===typeof c,"typeof params must == object");if("websocket"===b)b=(a.Sc?"wss://":"ws://")+a.bb+"/.ws?";else if("long_polling"===b)b=(a.Sc?"https://":"http://")+a.bb+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.bb&&(c.ns=a.pe);var d=[];t(c,function(a,b){d.push(b+"="+a);});return b+d.join("&");}gc.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.nf&&(a+="<"+this.nf+">");return a;};function jc(a,b){this.zf={};this.Vc=new kc(a);this.va=b;var c=1E4+2E4*Math.random();setTimeout(r(this.rf,this),Math.floor(c));}jc.prototype.rf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&Bb(this.zf,d)&&(b[d]=a[d],c=!0);c&&this.va.ye(b);setTimeout(r(this.rf,this),Math.floor(6E5*Math.random()));};function lc(){this.uc={};}function mc(a,b,c){p(c)||(c=1);Bb(a.uc,b)||(a.uc[b]=0);a.uc[b]+=c;}lc.prototype.get=function(){return ya(this.uc);};function kc(a){this.Nf=a;this.rd=null;}kc.prototype.get=function(){var a=this.Nf.get(),b=ya(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b;};var nc={},oc={};function pc(a){a=a.toString();nc[a]||(nc[a]=new lc());return nc[a];}function qc(a,b){var c=a.toString();oc[c]||(oc[c]=b());return oc[c];};function rc(){this.wb=[];}function sc(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.ca(c.Zb())||(a.wb.push(c),c=null);null===c&&(c=new tc(f));c.add(e);}c&&a.wb.push(c);}function uc(a,b,c){sc(a,c);vc(a,function(a){return a.ca(b);});}function wc(a,b,c){sc(a,c);vc(a,function(a){return a.contains(b)||b.contains(a);});}function vc(a,b){for(var c=!0,d=0;d<a.wb.length;d++){var e=a.wb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.wb[d],f=0;f<e.hd.length;f++){var g=e.hd[f];if(null!==g){e.hd[f]=null;var k=g.Ub();xc&&E("event: "+g.toString());Ub(k);}}a.wb[d]=null;}else c=!1;}c&&(a.wb=[]);}function tc(a){this.qa=a;this.hd=[];}tc.prototype.add=function(a){this.hd.push(a);};tc.prototype.Zb=function(){return this.qa;};function yc(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.gd=a;}yc.prototype.Zb=function(){var a=this.Md.xb();return"value"===this.gd?a.path:a.getParent().path;};yc.prototype.ge=function(){return this.gd;};yc.prototype.Ub=function(){return this.ae.Ub(this);};yc.prototype.toString=function(){return this.Zb().toString()+":"+this.gd+":"+B(this.Md.Ue());};function zc(a,b,c){this.ae=a;this.error=b;this.path=c;}zc.prototype.Zb=function(){return this.path;};zc.prototype.ge=function(){return"cancel";};zc.prototype.Ub=function(){return this.ae.Ub(this);};zc.prototype.toString=function(){return this.path.toString()+":cancel";};function Ac(){}Ac.prototype.Xe=function(){return null;};Ac.prototype.fe=function(){return null;};var Bc=new Ac();function Cc(a,b,c){this.Gf=a;this.Na=b;this.yd=c;}Cc.prototype.Xe=function(a){var b=this.Na.O;if(Dc(b,a))return b.j().R(a);b=null!=this.yd?new Ec(this.yd,!0,!1):this.Na.u();return this.Gf.rc(a,b);};Cc.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:Fc(this.Na);a=this.Gf.Xd(d,b,1,c,a);return 0===a.length?null:a[0];};function I(a,b,c,d){this.type=a;this.Ma=b;this.Za=c;this.qe=d;this.Dd=void 0;}function Gc(a){return new I(Hc,a);}var Hc="value";function Ec(a,b,c){this.A=a;this.ea=b;this.Tb=c;}function Ic(a){return a.ea;}function Jc(a){return a.Tb;}function Kc(a,b){return b.e()?a.ea&&!a.Tb:Dc(a,J(b));}function Dc(a,b){return a.ea&&!a.Tb||a.A.Fa(b);}Ec.prototype.j=function(){return this.A;};function Lc(a,b){return Mc(a.name,b.name);}function Nc(a,b){return Mc(a,b);};function K(a,b){this.name=a;this.S=b;}function Oc(a,b){return new K(a,b);};function Pc(a,b){return a&&"object"===typeof a?(H(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a;}function Qc(a,b){var c=new Rc();Sc(a,new L(""),function(a,e){Tc(c,a,Uc(e,b));});return c;}function Uc(a,b){var c=a.C().H(),c=Pc(c,b),d;if(a.J()){var e=Pc(a.Ea(),b);return e!==a.Ea()||c!==a.C().H()?new Vc(e,M(c)):a;}d=a;c!==a.C().H()&&(d=d.ga(new Vc(c)));a.P(N,function(a,c){var e=Uc(c,b);e!==c&&(d=d.U(a,e));});return d;};var Wc=function(){var a=1;return function(){return a++;};}(),H=Kb,Xc=Lb;function Yc(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==m)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=m&&d.push(k<<6&192|m));}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ra(d,c,c+8192));b=a;}return b;}catch(l){E("base64Decode failed: ",l);}return null;}function Zc(a){var b=Mb(a);a=new ma();a.update(b);var b=[],c=8*a.Pd;56>a.ac?a.update(a.zd,56-a.ac):a.update(a.zd,a.Ya-(a.ac-56));for(var d=a.Ya-1;56<=d;d--)a.Wd[d]=c&255,c/=256;na(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.N[d]>>e&255,++c;return ab(b);}function $c(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+$c.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b;}var xc=null,ad=!0;function bd(a,b){Kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?xc=r(console.log,console):"object"===typeof console.log&&(xc=function(a){console.log(a);})),b&&Zb.set("logging_enabled",!0)):ga(a)?xc=a:(xc=null,Zb.remove("logging_enabled"));}function E(a){!0===ad&&(ad=!1,null===xc&&!0===Zb.get("logging_enabled")&&bd(!0));if(xc){var b=$c.apply(null,arguments);xc(b);}}function cd(a){return function(){E(a,arguments);};}function dd(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+$c.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b);}}function ed(a){var b=$c.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+$c.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b);}}function fd(a){var b,c,d,e,f,g=a;f=c=a=b="";d=!0;e="https";if(q(g)){var k=g.indexOf("//");0<=k&&(e=g.substring(0,k-1),g=g.substring(k+2));k=g.indexOf("/");-1===k&&(k=g.length);b=g.substring(0,k);f="";g=g.substring(k).split("/");for(k=0;k<g.length;k++)if(0<g[k].length){var m=g[k];try{m=decodeURIComponent(m.replace(/\+/g," "));}catch(l){}f+="/"+m;}g=b.split(".");3===g.length?(a=g[1],c=g[0].toLowerCase()):2===g.length&&(a=g[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e);}"firebase"===a&&ed(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c&&"undefined"!=c||ed("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{kc:new gc(b,d,c,"ws"===e||"wss"===e),path:new L(f)};}function gd(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY);}function hd(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10));};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c();}),window.attachEvent("onload",c));}}function Mc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=id(a),d=id(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1;}function jd(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}function kd(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=kd(a[b[d]]);return c+"}";}function ld(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c;}function md(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else t(a,b);}function nd(a){H(!gd(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&(d="0"+d),c+=d;return c.toLowerCase();}var od=/^-?\d{1,10}$/;function id(a){return od.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null;}function Ub(a){try{a();}catch(b){setTimeout(function(){O("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0));}}function pd(a,b,c){Object.defineProperty(a,b,{get:c});};function qd(a){var b={},c={},d={},e="";try{var f=a.split("."),b=Ob(Yc(f[0])||""),c=Ob(Yc(f[1])||""),e=f[2],d=c.d||{};delete c.d;}catch(g){}return{Fg:b,Me:c,data:d,xg:e};}function rd(a){a=qd(a);var b=a.Me;return!!a.xg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat");}function sd(a){a=qd(a).Me;return"object"===typeof a&&!0===x(a,"admin");};var ud=null;"undefined"!==typeof MozWebSocket?ud=MozWebSocket:"undefined"!==typeof WebSocket&&(ud=WebSocket);function vd(a,b,c,d){this.Zd=a;this.f=cd(this.Zd);this.frames=this.Ac=null;this.qb=this.rb=this.Fe=0;this.Xa=pc(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Ne=ic(b,"websocket",a);}var wd;vd.prototype.open=function(a,b){this.kb=b;this.hg=a;this.f("Websocket connecting to "+this.Ne);this.xc=!1;Yb.set("previous_websocket_failure",!0);try{this.La=new ud(this.Ne);}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.fb();return;}var e=this;this.La.onopen=function(){e.f("Websocket connected.");e.xc=!0;};this.La.onclose=function(){e.f("Websocket connection was disconnected.");e.La=null;e.fb();};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.qb+=a.length,mc(e.Xa,"bytes_received",a.length),xd(e),null!==e.frames)yd(e,a);else{a:{H(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a;}}e.Fe=1;e.frames=[];}null!==a&&yd(e,a);}};this.La.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.fb();};};vd.prototype.start=function(){};vd.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0);}return!a&&null!==ud&&!wd;};vd.responsesRequiredToBeHealthy=2;vd.healthyTimeout=3E4;h=vd.prototype;h.sd=function(){Yb.remove("previous_websocket_failure");};function yd(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=Ob(c);a.hg(c);}}h.send=function(a){xd(this);a=B(a);this.rb+=a.length;mc(this.Xa,"bytes_sent",a.length);a=ld(a,16384);1<a.length&&zd(this,String(a.length));for(var b=0;b<a.length;b++)zd(this,a[b]);};h.Tc=function(){this.Bb=!0;this.Ac&&(clearInterval(this.Ac),this.Ac=null);this.La&&(this.La.close(),this.La=null);};h.fb=function(){this.Bb||(this.f("WebSocket is closing itself"),this.Tc(),this.kb&&(this.kb(this.xc),this.kb=null));};h.close=function(){this.Bb||(this.f("WebSocket is being closed"),this.Tc());};function xd(a){clearInterval(a.Ac);a.Ac=setInterval(function(){a.La&&zd(a,"0");xd(a);},Math.floor(45E3));}function zd(a,b){try{a.La.send(b);}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(r(a.fb,a),0);}};function Ad(a,b,c){this.f=cd("p:rest:");this.M=a;this.Hb=b;this.Vd=c;this.$={};}function Bd(a,b){if(p(b))return"tag$"+b;H(Cd(a.n),"should have a tag if it's not a default query.");return a.path.toString();}h=Ad.prototype;h.df=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ya());var f=Bd(a,c),g={};this.$[f]=g;a=Dd(a.n);var k=this;Ed(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Hb(e,u,!1,c);x(k.$,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null);});};h.Ef=function(a,b){var c=Bd(a,b);delete this.$[c];};h.qf=function(){};h.re=function(){};h.gf=function(){};h.xd=function(){};h.put=function(){};h.ef=function(){};h.ye=function(){};function Ed(a,b,c,d){c=c||{};c.format="export";a.Vd.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.M.Sc?"https://":"http://")+a.M.host+b+"?"+Fb(c);a.f("Sending REST request for "+f);var g=new XMLHttpRequest();g.onreadystatechange=function(){if(d&&4===g.readyState){a.f("REST Response for "+f+" received. status:",g.status,"response:",g.responseText);var b=null;if(200<=g.status&&300>g.status){try{b=Ob(g.responseText);}catch(c){O("Failed to parse JSON response for "+f+": "+g.responseText);}d(null,b);}else 401!==g.status&&404!==g.status&&O("Got unsuccessful REST response for "+f+" Status: "+g.status),d(g.status);d=null;}};g.open("GET",f,!0);g.send();});};function Fd(a,b,c){this.type=Gd;this.source=a;this.path=b;this.children=c;}Fd.prototype.Nc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new $b(this.source,C,a.value):new Fd(this.source,C,a);H(J(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new Fd(this.source,D(this.path),this.children);};Fd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")";};function Hd(){this.hb={};}function Id(a,b){var c=b.type,d=b.Za;H("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");H(".priority"!==d,"Only non-priority child changes can be tracked.");var e=x(a.hb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.hb[d]=new I("child_changed",b.Ma,d,e.Ma);else if("child_removed"==c&&"child_added"==f)delete a.hb[d];else if("child_removed"==c&&"child_changed"==f)a.hb[d]=new I("child_removed",e.qe,d);else if("child_changed"==c&&"child_added"==f)a.hb[d]=new I("child_added",b.Ma,d);else if("child_changed"==c&&"child_changed"==f)a.hb[d]=new I("child_changed",b.Ma,d,e.qe);else throw Xc("Illegal combination of changes: "+b+" occurred after "+e);}else a.hb[d]=b;};function Jd(a){this.W=a;this.g=a.n.g;}function Kd(a,b,c,d){var e=[],f=[];Ja(b,function(b){"child_changed"===b.type&&a.g.nd(b.qe,b.Ma)&&f.push(new I("child_moved",b.Ma,b.Za));});Ld(a,e,"child_removed",b,d,c);Ld(a,e,"child_added",b,d,c);Ld(a,e,"child_moved",f,d,c);Ld(a,e,"child_changed",b,d,c);Ld(a,e,Hc,b,d,c);return e;}function Ld(a,b,c,d,e,f){d=Ka(d,function(a){return a.type===c;});Sa(d,r(a.Of,a));Ja(d,function(c){var d=Md(a,c,f);Ja(e,function(e){e.tf(c.type)&&b.push(e.createEvent(d,a.W));});});}function Md(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ze(b.Za,b.Ma,a.g));return b;}Jd.prototype.Of=function(a,b){if(null==a.Za||null==b.Za)throw Xc("Should only compare child_ events.");return this.g.compare(new K(a.Za,a.Ma),new K(b.Za,b.Ma));};function Nd(a,b){this.Sd=a;this.Mf=b;}function Od(a){this.V=a;}Od.prototype.gb=function(a,b,c,d){var e=new Hd(),f;if(b.type===ac)b.source.ee?c=Pd(this,a,b.path,b.Ja,c,d,e):(H(b.source.We,"Unknown source."),f=b.source.Ee||Jc(a.u())&&!b.path.e(),c=Qd(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===Gd)b.source.ee?c=Rd(this,a,b.path,b.children,c,d,e):(H(b.source.We,"Unknown source."),f=b.source.Ee||Jc(a.u()),c=Sd(this,a,b.path,b.children,c,d,f,e));else if(b.type===Td){if(b.Id){if(b=b.path,null!=c.mc(b))c=a;else{f=new Cc(c,a,d);d=a.O.j();if(b.e()||".priority"===J(b))Ic(a.u())?b=c.Ba(Fc(a)):(b=a.u().j(),H(b instanceof P,"serverChildren would be complete if leaf node"),b=c.sc(b)),b=this.V.za(d,b,e);else{var g=J(b),k=c.rc(g,a.u());null==k&&Dc(a.u(),g)&&(k=d.R(g));b=null!=k?this.V.F(d,g,k,D(b),f,e):a.O.j().Fa(g)?this.V.F(d,g,F,D(b),f,e):d;b.e()&&Ic(a.u())&&(d=c.Ba(Fc(a)),d.J()&&(b=this.V.za(b,d,e)));}d=Ic(a.u())||null!=c.mc(C);c=Ud(a,b,d,this.V.Qa());}}else c=Vd(this,a,b.path,b.Pb,c,d,e);}else if(b.type===cc)d=b.path,b=a.u(),f=b.j(),g=b.ea||d.e(),c=Wd(this,new Xd(a.O,new Ec(f,g,b.Tb)),d,c,Bc,e);else throw Xc("Unknown operation type: "+b.type);e=sa(e.hb);d=c;b=d.O;b.ea&&(f=b.j().J()||b.j().e(),g=Yd(a),(0<e.length||!a.O.ea||f&&!b.j().ca(g)||!b.j().C().ca(g.C()))&&e.push(Gc(Yd(d))));return new Nd(c,e);};function Wd(a,b,c,d,e,f){var g=b.O;if(null!=d.mc(c))return b;var k;if(c.e())H(Ic(b.u()),"If change path is empty, we must have complete server data"),Jc(b.u())?(e=Fc(b),d=d.sc(e instanceof P?e:F)):d=d.Ba(Fc(b)),f=a.V.za(b.O.j(),d,f);else{var m=J(c);if(".priority"==m)H(1==Zd(c),"Can't have a priority with additional path components"),f=g.j(),k=b.u().j(),d=d.$c(c,f,k),f=null!=d?a.V.ga(f,d):g.j();else{var l=D(c);Dc(g,m)?(k=b.u().j(),d=d.$c(c,g.j(),k),d=null!=d?g.j().R(m).F(l,d):g.j().R(m)):d=d.rc(m,b.u());f=null!=d?a.V.F(g.j(),m,d,l,e,f):g.j();}}return Ud(b,f,g.ea||c.e(),a.V.Qa());}function Qd(a,b,c,d,e,f,g,k){var m=b.u();g=g?a.V:a.V.Vb();if(c.e())d=g.za(m.j(),d,null);else if(g.Qa()&&!m.Tb)d=m.j().F(c,d),d=g.za(m.j(),d,null);else{var l=J(c);if(!Kc(m,c)&&1<Zd(c))return b;var u=D(c);d=m.j().R(l).F(u,d);d=".priority"==l?g.ga(m.j(),d):g.F(m.j(),l,d,u,Bc,null);}m=m.ea||c.e();b=new Xd(b.O,new Ec(d,m,g.Qa()));return Wd(a,b,c,e,new Cc(e,b,f),k);}function Pd(a,b,c,d,e,f,g){var k=b.O;e=new Cc(e,b,f);if(c.e())g=a.V.za(b.O.j(),d,g),a=Ud(b,g,!0,a.V.Qa());else if(f=J(c),".priority"===f)g=a.V.ga(b.O.j(),d),a=Ud(b,g,k.ea,k.Tb);else{c=D(c);var m=k.j().R(f);if(!c.e()){var l=e.Xe(f);d=null!=l?".priority"===$d(c)&&l.Q(c.parent()).e()?l:l.F(c,d):F;}m.ca(d)?a=b:(g=a.V.F(k.j(),f,d,c,e,g),a=Ud(b,g,k.ea,a.V.Qa()));}return a;}function Rd(a,b,c,d,e,f,g){var k=b;ae(d,function(d,l){var u=c.m(d);Dc(b.O,J(u))&&(k=Pd(a,k,u,l,e,f,g));});ae(d,function(d,l){var u=c.m(d);Dc(b.O,J(u))||(k=Pd(a,k,u,l,e,f,g));});return k;}function be(a,b){ae(b,function(b,d){a=a.F(b,d);});return a;}function Sd(a,b,c,d,e,f,g,k){if(b.u().j().e()&&!Ic(b.u()))return b;var m=b;c=c.e()?d:ce(Q,c,d);var l=b.u().j();c.children.ia(function(c,d){if(l.Fa(c)){var G=b.u().j().R(c),G=be(G,d);m=Qd(a,m,new L(c),G,e,f,g,k);}});c.children.ia(function(c,d){var G=!Dc(b.u(),c)&&null==d.value;l.Fa(c)||G||(G=b.u().j().R(c),G=be(G,d),m=Qd(a,m,new L(c),G,e,f,g,k));});return m;}function Vd(a,b,c,d,e,f,g){if(null!=e.mc(c))return b;var k=Jc(b.u()),m=b.u();if(null!=d.value){if(c.e()&&m.ea||Kc(m,c))return Qd(a,b,c,m.j().Q(c),e,f,k,g);if(c.e()){var l=Q;m.j().P(de,function(a,b){l=l.set(new L(a),b);});return Sd(a,b,c,l,e,f,k,g);}return b;}l=Q;ae(d,function(a){var b=c.m(a);Kc(m,b)&&(l=l.set(a,m.j().Q(b)));});return Sd(a,b,c,l,e,f,k,g);};function ee(a){this.g=a;}h=ee.prototype;h.F=function(a,b,c,d,e,f){H(a.zc(this.g),"A node must be indexed if only a child is updated");e=a.R(b);if(e.Q(d).ca(c.Q(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Fa(b)?Id(f,new I("child_removed",e,b)):H(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?Id(f,new I("child_added",c,b)):Id(f,new I("child_changed",c,b,e)));return a.J()&&c.e()?a:a.U(b,c).ob(this.g);};h.za=function(a,b,c){null!=c&&(a.J()||a.P(N,function(a,e){b.Fa(a)||Id(c,new I("child_removed",e,a));}),b.J()||b.P(N,function(b,e){if(a.Fa(b)){var f=a.R(b);f.ca(e)||Id(c,new I("child_changed",e,b,f));}else Id(c,new I("child_added",e,b));}));return b.ob(this.g);};h.ga=function(a,b){return a.e()?F:a.ga(b);};h.Qa=function(){return!1;};h.Vb=function(){return this;};function fe(a){this.he=new ee(a.g);this.g=a.g;var b;a.ka?(b=ge(a),b=a.g.Fc(he(a),b)):b=a.g.Ic();this.Uc=b;a.na?(b=ie(a),a=a.g.Fc(je(a),b)):a=a.g.Gc();this.wc=a;}h=fe.prototype;h.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.wc);};h.F=function(a,b,c,d,e,f){this.matches(new K(b,c))||(c=F);return this.he.F(a,b,c,d,e,f);};h.za=function(a,b,c){b.J()&&(b=F);var d=b.ob(this.g),d=d.ga(F),e=this;b.P(N,function(a,b){e.matches(new K(a,b))||(d=d.U(a,F));});return this.he.za(a,d,c);};h.ga=function(a){return a;};h.Qa=function(){return!0;};h.Vb=function(){return this.he;};function ke(a){this.sa=new fe(a);this.g=a.g;H(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Jb=!le(a);}h=ke.prototype;h.F=function(a,b,c,d,e,f){this.sa.matches(new K(b,c))||(c=F);return a.R(b).ca(c)?a:a.Fb()<this.oa?this.sa.Vb().F(a,b,c,d,e,f):me(this,a,b,c,e,f);};h.za=function(a,b,c){var d;if(b.J()||b.e())d=F.ob(this.g);else if(2*this.oa<b.Fb()&&b.zc(this.g)){d=F.ob(this.g);b=this.Jb?b.$b(this.sa.wc,this.g):b.Yb(this.sa.Uc,this.g);for(var e=0;0<b.Sa.length&&e<this.oa;){var f=R(b),g;if(g=this.Jb?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.wc))d=d.U(f.name,f.S),e++;else break;}}else{d=b.ob(this.g);d=d.ga(F);var k,m,l;if(this.Jb){b=d.$e(this.g);k=this.sa.wc;m=this.sa.Uc;var u=ne(this.g);l=function(a,b){return u(b,a);};}else b=d.Xb(this.g),k=this.sa.Uc,m=this.sa.wc,l=ne(this.g);for(var e=0,z=!1;0<b.Sa.length;)f=R(b),!z&&0>=l(k,f)&&(z=!0),(g=z&&e<this.oa&&0>=l(f,m))?e++:d=d.U(f.name,F);}return this.sa.Vb().za(a,d,c);};h.ga=function(a){return a;};h.Qa=function(){return!0;};h.Vb=function(){return this.sa.Vb();};function me(a,b,c,d,e,f){var g;if(a.Jb){var k=ne(a.g);g=function(a,b){return k(b,a);};}else g=ne(a.g);H(b.Fb()==a.oa,"");var m=new K(c,d),l=a.Jb?oe(b,a.g):pe(b,a.g),u=a.sa.matches(m);if(b.Fa(c)){for(var z=b.R(c),l=e.fe(a.g,l,a.Jb);null!=l&&(l.name==c||b.Fa(l.name));)l=e.fe(a.g,l,a.Jb);e=null==l?1:g(l,m);if(u&&!d.e()&&0<=e)return null!=f&&Id(f,new I("child_changed",d,c,z)),b.U(c,d);null!=f&&Id(f,new I("child_removed",z,c));b=b.U(c,F);return null!=l&&a.sa.matches(l)?(null!=f&&Id(f,new I("child_added",l.S,l.name)),b.U(l.name,l.S)):b;}return d.e()?b:u&&0<=g(l,m)?(null!=f&&(Id(f,new I("child_removed",l.S,l.name)),Id(f,new I("child_added",d,c))),b.U(c,d).U(l.name,F)):b;};function Vc(a,b){this.B=a;H(p(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||F;qe(this.aa);this.Eb=null;}var re=["object","boolean","number","string"];h=Vc.prototype;h.J=function(){return!0;};h.C=function(){return this.aa;};h.ga=function(a){return new Vc(this.B,a);};h.R=function(a){return".priority"===a?this.aa:F;};h.Q=function(a){return a.e()?this:".priority"===J(a)?this.aa:F;};h.Fa=function(){return!1;};h.Ze=function(){return null;};h.U=function(a,b){return".priority"===a?this.ga(b):b.e()&&".priority"!==a?this:F.U(a,b).ga(this.aa);};h.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;H(".priority"!==c||1===Zd(a),".priority must be the last token in a path");return this.U(c,F.F(D(a),b));};h.e=function(){return!1;};h.Fb=function(){return 0;};h.P=function(){return!1;};h.H=function(a){return a&&!this.C().e()?{".value":this.Ea(),".priority":this.C().H()}:this.Ea();};h.hash=function(){if(null===this.Eb){var a="";this.aa.e()||(a+="priority:"+se(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+nd(this.B):a+this.B;this.Eb=Zc(a);}return this.Eb;};h.Ea=function(){return this.B;};h.tc=function(a){if(a===F)return 1;if(a instanceof P)return-1;H(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Ia(re,b),e=Ia(re,c);H(0<=d,"Unknown leaf type: "+b);H(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d;};h.ob=function(){return this;};h.zc=function(){return!0;};h.ca=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.ca(a.aa):!1;};h.toString=function(){return B(this.H(!0));};function te(){}var ue={};function ne(a){return r(a.compare,a);}te.prototype.nd=function(a,b){return 0!==this.compare(new K("[MIN_NAME]",a),new K("[MIN_NAME]",b));};te.prototype.Ic=function(){return ve;};function we(a){H(!a.e()&&".priority"!==J(a),"Can't create PathIndex with empty path or .priority key");this.cc=a;}ka(we,te);h=we.prototype;h.yc=function(a){return!a.Q(this.cc).e();};h.compare=function(a,b){var c=a.S.Q(this.cc),d=b.S.Q(this.cc),c=c.tc(d);return 0===c?Mc(a.name,b.name):c;};h.Fc=function(a,b){var c=M(a),c=F.F(this.cc,c);return new K(b,c);};h.Gc=function(){var a=F.F(this.cc,xe);return new K("[MAX_NAME]",a);};h.toString=function(){return this.cc.slice().join("/");};function ye(){}ka(ye,te);h=ye.prototype;h.compare=function(a,b){var c=a.S.C(),d=b.S.C(),c=c.tc(d);return 0===c?Mc(a.name,b.name):c;};h.yc=function(a){return!a.C().e();};h.nd=function(a,b){return!a.C().ca(b.C());};h.Ic=function(){return ve;};h.Gc=function(){return new K("[MAX_NAME]",new Vc("[PRIORITY-POST]",xe));};h.Fc=function(a,b){var c=M(a);return new K(b,new Vc("[PRIORITY-POST]",c));};h.toString=function(){return".priority";};var N=new ye();function ze(){}ka(ze,te);h=ze.prototype;h.compare=function(a,b){return Mc(a.name,b.name);};h.yc=function(){throw Xc("KeyIndex.isDefinedOn not expected to be called.");};h.nd=function(){return!1;};h.Ic=function(){return ve;};h.Gc=function(){return new K("[MAX_NAME]",F);};h.Fc=function(a){H(q(a),"KeyIndex indexValue must always be a string.");return new K(a,F);};h.toString=function(){return".key";};var de=new ze();function Ae(){}ka(Ae,te);h=Ae.prototype;h.compare=function(a,b){var c=a.S.tc(b.S);return 0===c?Mc(a.name,b.name):c;};h.yc=function(){return!0;};h.nd=function(a,b){return!a.ca(b);};h.Ic=function(){return ve;};h.Gc=function(){return Be;};h.Fc=function(a,b){var c=M(a);return new K(b,c);};h.toString=function(){return".value";};var Ce=new Ae();function De(){this.Sb=this.na=this.Lb=this.ka=this.xa=!1;this.oa=0;this.oc="";this.ec=null;this.Ab="";this.bc=null;this.yb="";this.g=N;}var Ee=new De();function le(a){return""===a.oc?a.ka:"l"===a.oc;}function he(a){H(a.ka,"Only valid if start has been set");return a.ec;}function ge(a){H(a.ka,"Only valid if start has been set");return a.Lb?a.Ab:"[MIN_NAME]";}function je(a){H(a.na,"Only valid if end has been set");return a.bc;}function ie(a){H(a.na,"Only valid if end has been set");return a.Sb?a.yb:"[MAX_NAME]";}function Fe(a){var b=new De();b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.ec=a.ec;b.Lb=a.Lb;b.Ab=a.Ab;b.na=a.na;b.bc=a.bc;b.Sb=a.Sb;b.yb=a.yb;b.g=a.g;return b;}h=De.prototype;h.ne=function(a){var b=Fe(this);b.xa=!0;b.oa=a;b.oc="l";return b;};h.oe=function(a){var b=Fe(this);b.xa=!0;b.oa=a;b.oc="r";return b;};h.Nd=function(a,b){var c=Fe(this);c.ka=!0;p(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.Ab=b):(c.Lb=!1,c.Ab="");return c;};h.fd=function(a,b){var c=Fe(this);c.na=!0;p(a)||(a=null);c.bc=a;p(b)?(c.Sb=!0,c.yb=b):(c.Hg=!1,c.yb="");return c;};function Ge(a,b){var c=Fe(a);c.g=b;return c;}function He(a){var b={};a.ka&&(b.sp=a.ec,a.Lb&&(b.sn=a.Ab));a.na&&(b.ep=a.bc,a.Sb&&(b.en=a.yb));if(a.xa){b.l=a.oa;var c=a.oc;""===c&&(c=le(a)?"l":"r");b.vf=c;}a.g!==N&&(b.i=a.g.toString());return b;}function S(a){return!(a.ka||a.na||a.xa);}function Cd(a){return S(a)&&a.g==N;}function Dd(a){var b={};if(Cd(a))return b;var c;a.g===N?c="$priority":a.g===Ce?c="$value":a.g===de?c="$key":(H(a.g instanceof we,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ka&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.Ab)));a.na&&(b.endAt=B(a.bc),a.Sb&&(b.endAt+=","+B(a.yb)));a.xa&&(le(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b;}h.toString=function(){return B(He(this));};function Ie(a,b){this.od=a;this.dc=b;}Ie.prototype.get=function(a){var b=x(this.od,a);if(!b)throw Error("No index defined for "+a);return b===ue?null:b;};function Je(a,b,c){var d=oa(a.od,function(d,f){var g=x(a.dc,f);H(g,"Missing index implementation for "+f);if(d===ue){if(g.yc(b.S)){for(var k=[],m=c.Xb(Oc),l=R(m);l;)l.name!=b.name&&k.push(l),l=R(m);k.push(b);return Ke(k,ne(g));}return ue;}g=c.get(b.name);k=d;g&&(k=k.remove(new K(b.name,g)));return k.Ra(b,b.S);});return new Ie(d,a.dc);}function Le(a,b,c){var d=oa(a.od,function(a){if(a===ue)return a;var d=c.get(b.name);return d?a.remove(new K(b.name,d)):a;});return new Ie(d,a.dc);}var Me=new Ie({".priority":ue},{".priority":N});function Ne(){this.set={};}h=Ne.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0;};h.contains=function(a){return Bb(this.set,a);};h.get=function(a){return this.contains(a)?this.set[a]:void 0;};h.remove=function(a){delete this.set[a];};h.clear=function(){this.set={};};h.e=function(){return xa(this.set);};h.count=function(){return qa(this.set);};function Oe(a,b){t(a.set,function(a,d){b(d,a);});}h.keys=function(){var a=[];t(this.set,function(b,c){a.push(c);});return a;};function Pe(a,b,c,d){this.Zd=a;this.f=cd(a);this.kc=b;this.qb=this.rb=0;this.Xa=pc(b);this.Bf=c;this.xc=!1;this.Db=d;this.Yc=function(a){return ic(b,"long_polling",a);};}var Qe,Re;Pe.prototype.open=function(a,b){this.Qe=0;this.ja=b;this.ff=new Rb(a);this.Bb=!1;var c=this;this.tb=setTimeout(function(){c.f("Timed out trying to connect.");c.fb();c.tb=null;},Math.floor(3E4));hd(function(){if(!c.Bb){c.Wa=new Se(function(a,b,d,k,m){Te(c,arguments);if(c.Wa)if(c.tb&&(clearTimeout(c.tb),c.tb=null),c.xc=!0,"start"==a)c.id=b,c.mf=d;else if("close"===a)b?(c.Wa.Kd=!1,Sb(c.ff,b,function(){c.fb();})):c.fb();else throw Error("Unrecognized command received: "+a);},function(a,b){Te(c,arguments);Tb(c.ff,a,b);},function(){c.fb();},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Wa.Qd&&(a.cb=c.Wa.Qd);a.v="5";c.Bf&&(a.s=c.Bf);c.Db&&(a.ls=c.Db);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);Ue(c.Wa,a,function(){});}});};Pe.prototype.start=function(){var a=this.Wa,b=this.mf;a.fg=this.id;a.gg=b;for(a.Ud=!0;Ve(a););a=this.id;b=this.mf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.Yc(c);this.gc.style.display="none";document.body.appendChild(this.gc);};Pe.isAvailable=function(){return Qe||!Re&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Dg)&&!0;};h=Pe.prototype;h.sd=function(){};h.Tc=function(){this.Bb=!0;this.Wa&&(this.Wa.close(),this.Wa=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.tb&&(clearTimeout(this.tb),this.tb=null);};h.fb=function(){this.Bb||(this.f("Longpoll is closing itself"),this.Tc(),this.ja&&(this.ja(this.xc),this.ja=null));};h.close=function(){this.Bb||(this.f("Longpoll is being closed."),this.Tc());};h.send=function(a){a=B(a);this.rb+=a.length;mc(this.Xa,"bytes_sent",a.length);a=Mb(a);a=ab(a,!0);a=ld(a,1840);for(var b=0;b<a.length;b++){var c=this.Wa;c.Qc.push({ug:this.Qe,Bg:a.length,Se:a[b]});c.Ud&&Ve(c);this.Qe++;}};function Te(a,b){var c=B(b).length;a.qb+=c;mc(a.Xa,"bytes_received",c);}function Se(a,b,c,d){this.Yc=d;this.kb=c;this.ve=new Ne();this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Wc();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||E("No IE domain setting required");}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())";}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";a.contentDocument?a.ib=a.contentDocument:a.contentWindow?a.ib=a.contentWindow.document:a.document&&(a.ib=a.document);this.Ga=a;a="";this.Ga.src&&"javascript:"===this.Ga.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ga.ib.open(),this.Ga.ib.write(a),this.Ga.ib.close();}catch(f){E("frame writing exception"),f.stack&&E(f.stack),E(f);}}Se.prototype.close=function(){this.Ud=!1;if(this.Ga){this.Ga.ib.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ga&&(document.body.removeChild(a.Ga),a.Ga=null);},Math.floor(0));}var b=this.kb;b&&(this.kb=null,b());};function Ve(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.fg;b.pw=a.gg;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Se.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.ug+"&ts"+d+"="+e.Bg+"&d"+d+"="+e.Se;d++;}else break;We(a,b+c,a.$d);return!0;}return!1;}function We(a,b,c){function d(){a.ve.remove(c);Ve(a);}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));Ue(a,b,function(){clearTimeout(e);d();});}function Ue(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ga.ib.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c());};d.onerror=function(){E("Long-poll script failed to load: "+b);a.Kd=!1;a.close();};a.Ga.ib.body.appendChild(d);}}catch(e){}},Math.floor(1));};function Xe(a){Ye(this,a);}var Ze=[Pe,vd];function Ye(a,b){var c=vd&&vd.isAvailable(),d=c&&!(Yb.cf||!0===Yb.get("previous_websocket_failure"));b.Cg&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[vd];else{var e=a.Wc=[];md(Ze,function(a,b){b&&b.isAvailable()&&e.push(b);});}}function $e(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function af(a,b,c,d,e,f,g){this.id=a;this.f=cd("c:"+this.id+":");this.te=c;this.Mc=d;this.ja=e;this.se=f;this.M=b;this.Ad=[];this.Oe=0;this.Af=new Xe(b);this.L=0;this.Db=g;this.f("Connection created");bf(this);}function bf(a){var b=$e(a.Af);a.I=new b("c:"+a.id+":"+a.Oe++,a.M,void 0,a.Db);a.xe=b.responsesRequiredToBeHealthy||0;var c=cf(a,a.I),d=df(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Cb=!1;setTimeout(function(){a.I&&a.I.open(c,d);},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=setTimeout(function(){a.md=null;a.Cb||(a.I&&102400<a.I.qb?(a.f("Connection exceeded healthy timeout but has received "+a.I.qb+" bytes.  Marking connection healthy."),a.Cb=!0,a.I.sd()):a.I&&10240<a.I.rb?a.f("Connection exceeded healthy timeout but has sent "+a.I.rb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()));},Math.floor(b)));}function df(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.L?1===a.L&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.M.bb.substr(0,2)&&(Yb.remove("host:"+a.M.host),a.M.bb=a.M.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection");};}function cf(a,b){return function(c){if(2!=a.L)if(b===a.Rc){var d=jd("t",c);c=jd("d",c);if("c"==d){if(d=jd("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.yf=c.s;hc(a.M,f);0==a.L&&(a.I.start(),ef(a,a.I,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.Af,(c=1<c.Wc.length?c.Wc[1]:null)&&ff(a,c));}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];gf(a);}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),a.se&&(a.se(c),a.se=null),a.ja=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),hc(a.M,c),1===a.L?a.close():(hf(a),bf(a))):"e"===d?dd("Server Error: "+c):"o"===d?(a.f("got pong on primary."),jf(a),kf(a)):dd("Unknown control packet command: "+d);}else"d"==d&&a.wd(c);}else if(b===a.D){if(d=jd("t",c),c=jd("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?lf(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),a.xf--,lf(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);}else a.f("message on old connection");};}af.prototype.ua=function(a){mf(this,{t:"d",d:a});};function gf(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null);}function lf(a){0>=a.xf?(a.f("Secondary connection is healthy."),a.Cb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,gf(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}));}af.prototype.wd=function(a){jf(this);this.te(a);};function jf(a){a.Cb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Cb=!0,a.I.sd()));}function ff(a,b){a.D=new b("c:"+a.id+":"+a.Oe++,a.M,a.yf);a.xf=b.responsesRequiredToBeHealthy||0;a.D.open(cf(a,a.D),df(a,a.D));setTimeout(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close());},Math.floor(6E4));}function ef(a,b,c){a.f("Realtime connection established.");a.I=b;a.L=1;a.Mc&&(a.Mc(c,a.yf),a.Mc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Cb=!0):setTimeout(function(){kf(a);},Math.floor(5E3));}function kf(a){a.Cb||1!==a.L||(a.f("sending ping on primary."),mf(a,{t:"c",d:{t:"p",d:{}}}));}function mf(a,b){if(1!==a.L)throw"Connection is not connected";a.Xc.send(b);}af.prototype.close=function(){2!==this.L&&(this.f("Closing realtime connection."),this.L=2,hf(this),this.ja&&(this.ja(),this.ja=null));};function hf(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null);};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0;}else this.o=a,this.Z=b;}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(D(a),D(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}function nf(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=Mc(c[e],d[e]);if(0!==f)return f;}return c.length===d.length?0:c.length<d.length?-1:1;}function J(a){return a.Z>=a.o.length?null:a.o[a.Z];}function Zd(a){return a.o.length-a.Z;}function D(a){var b=a.Z;b<a.o.length&&b++;return new L(a.o,b);}function $d(a){return a.Z<a.o.length?a.o[a.o.length-1]:null;}h=L.prototype;h.toString=function(){for(var a="",b=this.Z;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/";};h.slice=function(a){return this.o.slice(this.Z+(a||0));};h.parent=function(){if(this.Z>=this.o.length)return null;for(var a=[],b=this.Z;b<this.o.length-1;b++)a.push(this.o[b]);return new L(a,0);};h.m=function(a){for(var b=[],c=this.Z;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Z;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0);};h.e=function(){return this.Z>=this.o.length;};h.ca=function(a){if(Zd(this)!==Zd(a))return!1;for(var b=this.Z,c=a.Z;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0;};h.contains=function(a){var b=this.Z,c=a.Z;if(Zd(this)>Zd(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c;}return!0;};var C=new L("");function of(a,b){this.Ta=a.slice();this.Ka=Math.max(1,this.Ta.length);this.Te=b;for(var c=0;c<this.Ta.length;c++)this.Ka+=Nb(this.Ta[c]);pf(this);}of.prototype.push=function(a){0<this.Ta.length&&(this.Ka+=1);this.Ta.push(a);this.Ka+=Nb(a);pf(this);};of.prototype.pop=function(){var a=this.Ta.pop();this.Ka-=Nb(a);0<this.Ta.length&&--this.Ka;};function pf(a){if(768<a.Ka)throw Error(a.Te+"has a key path longer than 768 bytes ("+a.Ka+").");if(32<a.Ta.length)throw Error(a.Te+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+qf(a));}function qf(a){return 0==a.Ta.length?"":"in property '"+a.Ta.join(".")+"'";};function rf(a){a instanceof sf||ed("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,C);this.INTERNAL=new tf(this);}var uf={TIMESTAMP:{".sv":"timestamp"}};h=rf.prototype;h.app=null;h.pf=function(a){vf(this,"ref");y("database.ref",0,1,arguments.length);return p(a)?this.ba.m(a):this.ba;};h.rg=function(a){vf(this,"database.refFromURL");y("database.refFromURL",1,1,arguments.length);var b=fd(a);wf("database.refFromURL",b);var c=b.kc;c.host!==this.ta.M.host&&ed("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.M.host+")");return this.pf(b.path.toString());};function vf(a,b){null===a.ta&&ed("Cannot call "+b+" on a deleted database.");}h.$f=function(){y("database.goOffline",0,0,arguments.length);vf(this,"goOffline");this.ta.eb();};h.ag=function(){y("database.goOnline",0,0,arguments.length);vf(this,"goOnline");this.ta.lc();};Object.defineProperty(rf.prototype,"app",{get:function(){return this.ta.app;}});function tf(a){this.$a=a;}tf.prototype.delete=function(){vf(this.$a,"delete");var a=xf.Wb(),b=this.$a.ta;x(a.nb,b.app.name)!==b&&ed("Database "+b.app.name+" has already been deleted.");b.eb();delete a.nb[b.app.name];this.$a.ta=null;this.$a.ba=null;this.$a=this.$a.INTERNAL=null;return firebase.Promise.resolve();};rf.prototype.ref=rf.prototype.pf;rf.prototype.refFromURL=rf.prototype.rg;rf.prototype.goOnline=rf.prototype.ag;rf.prototype.goOffline=rf.prototype.$f;tf.prototype["delete"]=tf.prototype.delete;function Rc(){this.k=this.B=null;}Rc.prototype.find=function(a){if(null!=this.B)return this.B.Q(a);if(a.e()||null==this.k)return null;var b=J(a);a=D(a);return this.k.contains(b)?this.k.get(b).find(a):null;};function Tc(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Ne());var d=J(b);a.k.contains(d)||a.k.add(d,new Rc());a=a.k.get(d);b=D(b);Tc(a,b,c);}}function yf(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.P(N,function(b,c){Tc(a,new L(b),c);});return yf(a,b);}return null!==a.k?(c=J(b),b=D(b),a.k.contains(c)&&yf(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0;}function Sc(a,b,c){null!==a.B?c(b,a.B):a.P(function(a,e){var f=new L(b.toString()+"/"+a);Sc(e,f,c);});}Rc.prototype.P=function(a){null!==this.k&&Oe(this.k,function(b,c){a(b,c);});};var zf=/[\[\].#$\/\u0000-\u001F\u007F]/,Af=/[\[\].#$\u0000-\u001F\u007F]/;function Bf(a){return q(a)&&0!==a.length&&!zf.test(a);}function Cf(a){return null===a||q(a)||fa(a)&&!gd(a)||ha(a)&&Bb(a,".sv");}function Df(a,b,c,d){d&&!p(b)||Ef(Db(a,1,d),b,c);}function Ef(a,b,c){c instanceof L&&(c=new of(c,a));if(!p(b))throw Error(a+"contains undefined "+qf(c));if(ga(b))throw Error(a+"contains a function "+qf(c)+" with contents: "+b.toString());if(gd(b))throw Error(a+"contains "+b.toString()+" "+qf(c));if(q(b)&&b.length>10485760/3&&10485760<Nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+qf(c)+" ('"+b.substring(0,50)+"...')");if(ha(b)){var d=!1,e=!1;Cb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=!0,!Bf(b)))throw Error(a+" contains an invalid key ("+b+") "+qf(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Ef(a,g,c);c.pop();});if(d&&e)throw Error(a+' contains ".value" child '+qf(c)+" in addition to actual children.");}}function Ff(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Bf(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(nf);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d;}}function Gf(a,b,c){var d=Db(a,1,!1);if(!ha(b)||da(b))throw Error(d+" must be an object containing the children to replace.");var e=[];Cb(b,function(a,b){var k=new L(a);Ef(d,b,c.m(k));if(".priority"===$d(k)&&!Cf(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k);});Ff(d,e);}function Hf(a,b,c){if(gd(c))throw Error(Db(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Cf(c))throw Error(Db(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}function If(a,b,c){if(!c||p(b))switch(b){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw Error(Db(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Jf(a,b){if(p(b)&&!Bf(b))throw Error(Db(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}function Kf(a,b){if(!q(b)||0===b.length||Af.test(b))throw Error(Db(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Lf(a,b){if(".info"===J(b))throw Error(a+" failed: Can't modify data under /.info/");}function wf(a,b){var c=b.path.toString(),d;!(d=!q(b.kc.host)||0===b.kc.host.length||!Bf(b.kc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(q(c)&&0!==c.length&&!Af.test(c)));if(d)throw Error(Db(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function V(a,b){this.ta=a;this.qa=b;}V.prototype.cancel=function(a){y("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);var b=new Hb();this.ta.xd(this.qa,Ib(b,a));return b.ra;};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){y("Firebase.onDisconnect().remove",0,1,arguments.length);Lf("Firebase.onDisconnect().remove",this.qa);A("Firebase.onDisconnect().remove",1,a,!0);var b=new Hb();Mf(this.ta,this.qa,null,Ib(b,a));return b.ra;};V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){y("Firebase.onDisconnect().set",1,2,arguments.length);Lf("Firebase.onDisconnect().set",this.qa);Df("Firebase.onDisconnect().set",a,this.qa,!1);A("Firebase.onDisconnect().set",2,b,!0);var c=new Hb();Mf(this.ta,this.qa,a,Ib(c,b));return c.ra;};V.prototype.set=V.prototype.set;V.prototype.Kb=function(a,b,c){y("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Lf("Firebase.onDisconnect().setWithPriority",this.qa);Df("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Hf("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new Hb();Nf(this.ta,this.qa,a,b,Ib(d,c));return d.ra;};V.prototype.setWithPriority=V.prototype.Kb;V.prototype.update=function(a,b){y("Firebase.onDisconnect().update",1,2,arguments.length);Lf("Firebase.onDisconnect().update",this.qa);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");}Gf("Firebase.onDisconnect().update",a,this.qa);A("Firebase.onDisconnect().update",2,b,!0);c=new Hb();Of(this.ta,this.qa,a,Ib(c,b));return c.ra;};V.prototype.update=V.prototype.update;function Pf(a){H(da(a)&&0<a.length,"Requires a non-empty array");this.Kf=a;this.Ec={};}Pf.prototype.Ge=function(a,b){var c;c=this.Ec[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e;}else c=[];for(d=0;d<c.length;d++)c[d].Ke.apply(c[d].Pa,Array.prototype.slice.call(arguments,1));};Pf.prototype.hc=function(a,b,c){Qf(this,a);this.Ec[a]=this.Ec[a]||[];this.Ec[a].push({Ke:b,Pa:c});(a=this.Ye(a))&&b.apply(c,a);};Pf.prototype.Jc=function(a,b,c){Qf(this,a);a=this.Ec[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ke===b&&(!c||c===a[d].Pa)){a.splice(d,1);break;}};function Qf(a,b){H(Oa(a.Kf,function(a){return a===b;}),"Unknown event: "+b);};function Rf(){Pf.call(this,["online"]);this.ic=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!Qb()){var a=this;window.addEventListener("online",function(){a.ic||(a.ic=!0,a.Ge("online",!0));},!1);window.addEventListener("offline",function(){a.ic&&(a.ic=!1,a.Ge("online",!1));},!1);}}ka(Rf,Pf);Rf.prototype.Ye=function(a){H("online"===a,"Unknown event type: "+a);return[this.ic];};ba(Rf);function Sf(){Pf.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Nb=!0;if(b){var c=this;document.addEventListener(b,function(){var b=!document[a];b!==c.Nb&&(c.Nb=b,c.Ge("visible",b));},!1);}}ka(Sf,Pf);Sf.prototype.Ye=function(a){H("visible"===a,"Unknown event type: "+a);return[this.Nb];};ba(Sf);var Tf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);H(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++;}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);H(20===c.length,"nextPushId: Length should be 20.");return c;};}();function Uf(a,b){this.Oa=a;this.ba=b?b:Vf;}h=Uf.prototype;h.Ra=function(a,b){return new Uf(this.Oa,this.ba.Ra(a,b,this.Oa).Y(null,null,!1,null,null));};h.remove=function(a){return new Uf(this.Oa,this.ba.remove(a,this.Oa).Y(null,null,!1,null,null));};h.get=function(a){for(var b,c=this.ba;!c.e();){b=this.Oa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right);}return null;};function Wf(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.Oa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key;}0>c?d=d.left:0<c&&(e=d,d=d.right);}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.ba.e();};h.count=function(){return this.ba.count();};h.Hc=function(){return this.ba.Hc();};h.fc=function(){return this.ba.fc();};h.ia=function(a){return this.ba.ia(a);};h.Xb=function(a){return new Xf(this.ba,null,this.Oa,!1,a);};h.Yb=function(a,b){return new Xf(this.ba,a,this.Oa,!1,b);};h.$b=function(a,b){return new Xf(this.ba,a,this.Oa,!0,b);};h.$e=function(a){return new Xf(this.ba,null,this.Oa,!0,a);};function Xf(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Sa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Sa.push(a);break;}else this.Sa.push(a),a=this.le?a.right:a.left;}function R(a){if(0===a.Sa.length)return null;var b=a.Sa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Sa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Sa.push(b),b=b.left;return c;}function Yf(a){if(0===a.Sa.length)return null;var b;b=a.Sa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};}function Zf(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Vf;this.right=null!=e?e:Vf;}h=Zf.prototype;h.Y=function(a,b,c,d,e){return new Zf(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right);};h.count=function(){return this.left.count()+1+this.right.count();};h.e=function(){return!1;};h.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a);};function $f(a){return a.left.e()?a:$f(a.left);}h.Hc=function(){return $f(this).key;};h.fc=function(){return this.right.e()?this.key:this.right.fc();};h.Ra=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Y(null,null,null,e.left.Ra(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.Ra(a,b,c));return ag(e);};function bg(a){if(a.left.e())return Vf;a.left.fa()||a.left.left.fa()||(a=cg(a));a=a.Y(null,null,null,bg(a.left),null);return ag(a);}h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=cg(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=dg(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=eg(c),c.left.left.fa()&&(c=dg(c),c=eg(c)));if(0===b(a,c.key)){if(c.right.e())return Vf;d=$f(c.right);c=c.Y(d.key,d.value,null,null,bg(c.right));}c=c.Y(null,null,null,null,c.right.remove(a,b));}return ag(c);};h.fa=function(){return this.color;};function ag(a){a.right.fa()&&!a.left.fa()&&(a=fg(a));a.left.fa()&&a.left.left.fa()&&(a=dg(a));a.left.fa()&&a.right.fa()&&(a=eg(a));return a;}function cg(a){a=eg(a);a.right.left.fa()&&(a=a.Y(null,null,null,null,dg(a.right)),a=fg(a),a=eg(a));return a;}function fg(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null);}function dg(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null));}function eg(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null));}function gg(){}h=gg.prototype;h.Y=function(){return this;};h.Ra=function(a,b){return new Zf(a,b,null);};h.remove=function(){return this;};h.count=function(){return 0;};h.e=function(){return!0;};h.ia=function(){return!1;};h.Hc=function(){return null;};h.fc=function(){return null;};h.fa=function(){return!1;};var Vf=new gg();function P(a,b,c){this.k=a;(this.aa=b)&&qe(this.aa);a.e()&&H(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.zb=c;this.Eb=null;}h=P.prototype;h.J=function(){return!1;};h.C=function(){return this.aa||F;};h.ga=function(a){return this.k.e()?this:new P(this.k,a,this.zb);};h.R=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?F:a;};h.Q=function(a){var b=J(a);return null===b?this:this.R(b).Q(D(a));};h.Fa=function(a){return null!==this.k.get(a);};h.U=function(a,b){H(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ga(b);var c=new K(a,b),d,e;b.e()?(d=this.k.remove(a),c=Le(this.zb,c,this.k)):(d=this.k.Ra(a,b),c=Je(this.zb,c,this.k));e=d.e()?F:this.aa;return new P(d,e,c);};h.F=function(a,b){var c=J(a);if(null===c)return b;H(".priority"!==J(a)||1===Zd(a),".priority must be the last token in a path");var d=this.R(c).F(D(a),b);return this.U(c,d);};h.e=function(){return this.k.e();};h.Fb=function(){return this.k.count();};var hg=/^(0|[1-9]\d*)$/;h=P.prototype;h.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.P(N,function(f,g){b[f]=g.H(a);c++;e&&hg.test(f)?d=Math.max(d,Number(f)):e=!1;});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f;}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b;};h.hash=function(){if(null===this.Eb){var a="";this.C().e()||(a+="priority:"+se(this.C().H())+":");this.P(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d);});this.Eb=""===a?"":Zc(a);}return this.Eb;};h.Ze=function(a,b,c){return(c=ig(this,c))?(a=Wf(c,new K(a,b)))?a.name:null:Wf(this.k,a);};function oe(a,b){var c;c=(c=ig(a,b))?(c=c.Hc())&&c.name:a.k.Hc();return c?new K(c,a.k.get(c)):null;}function pe(a,b){var c;c=(c=ig(a,b))?(c=c.fc())&&c.name:a.k.fc();return c?new K(c,a.k.get(c)):null;}h.P=function(a,b){var c=ig(this,a);return c?c.ia(function(a){return b(a.name,a.S);}):this.k.ia(b);};h.Xb=function(a){return this.Yb(a.Ic(),a);};h.Yb=function(a,b){var c=ig(this,b);if(c)return c.Yb(a,function(a){return a;});for(var c=this.k.Yb(a.name,Oc),d=Yf(c);null!=d&&0>b.compare(d,a);)R(c),d=Yf(c);return c;};h.$e=function(a){return this.$b(a.Gc(),a);};h.$b=function(a,b){var c=ig(this,b);if(c)return c.$b(a,function(a){return a;});for(var c=this.k.$b(a.name,Oc),d=Yf(c);null!=d&&0<b.compare(d,a);)R(c),d=Yf(c);return c;};h.tc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===xe?-1:0;};h.ob=function(a){if(a===de||ua(this.zb.dc,a.toString()))return this;var b=this.zb,c=this.k;H(a!==de,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(Oc),f=R(c);f;)e=e||a.yc(f.S),d.push(f),f=R(c);d=e?Ke(d,ne(a)):ue;e=a.toString();c=ya(b.dc);c[e]=a;a=ya(b.od);a[e]=d;return new P(this.k,this.aa,new Ie(a,c));};h.zc=function(a){return a===de||ua(this.zb.dc,a.toString());};h.ca=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().ca(a.C())&&this.k.count()===a.k.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=R(b),d=R(a);c&&d;){if(c.name!==d.name||!c.S.ca(d.S))return!1;c=R(b);d=R(a);}return null===c&&null===d;}return!1;};function ig(a,b){return b===de?null:a.zb.get(b.toString());}h.toString=function(){return B(this.H(!0));};function M(a,b){if(null===a)return F;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);H(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Vc(a,M(c));if(a instanceof Array){var d=F,e=a;t(e,function(a,b){if(Bb(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.J()||!c.e())d=d.U(b,c);}});return d.ga(M(c));}var f=[],g=!1,k=a;Cb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(g=g||!b.C().e(),f.push(new K(a,b)));}});if(0==f.length)return F;var m=Ke(f,Lc,function(a){return a.name;},Nc);if(g){var l=Ke(f,ne(N));return new P(m,M(c),new Ie({".priority":l},{".priority":N}));}return new P(m,M(c),Me);}var jg=Math.log(2);function kg(a){this.count=parseInt(Math.log(a+1)/jg,10);this.Re=this.count-1;this.Lf=a+1&parseInt(Array(this.count+1).join("1"),2);}function lg(a){var b=!(a.Lf&1<<a.Re);a.Re--;return b;}function Ke(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new Zf(u,l.S,!1,null,null);}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new Zf(u,l.S,!1,f,z);}a.sort(b);var f=function(b){function d(b,g){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],G=c?c(k):k,z=new Zf(G,k.S,g,null,z);f?f.left=z:l=z;f=z;}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var G=lg(b),td=Math.pow(2,b.count-(z+1));G?d(td,!1):(d(td,!1),d(td,!0));}return l;}(new kg(a.length));return null!==f?new Uf(d||b,f):new Uf(d||b);}function se(a){return"number"===typeof a?"number:"+nd(a):"string:"+a;}function qe(a){if(a.J()){var b=a.H();H("string"===typeof b||"number"===typeof b||"object"===typeof b&&Bb(b,".sv"),"Priority must be a string or number.");}else H(a===xe||a.e(),"priority of unexpected type.");H(a===xe||a.C().e(),"Priority nodes can't have a priority of their own.");}var F=new P(new Uf(Nc),null,Me);function mg(){P.call(this,new Uf(Nc),F,Me);}ka(mg,P);h=mg.prototype;h.tc=function(a){return a===this?0:1;};h.ca=function(a){return a===this;};h.C=function(){return this;};h.R=function(){return F;};h.e=function(){return!1;};var xe=new mg(),ve=new K("[MIN_NAME]",F),Be=new K("[MAX_NAME]",xe);function W(a,b,c){this.A=a;this.W=b;this.g=c;}W.prototype.H=function(){y("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H();};W.prototype.val=W.prototype.H;W.prototype.Ue=function(){y("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0);};W.prototype.exportVal=W.prototype.Ue;W.prototype.Vf=function(){y("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e();};W.prototype.exists=W.prototype.Vf;W.prototype.m=function(a){y("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));Kf("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.W.m(b);return new W(this.A.Q(b),c,N);};W.prototype.child=W.prototype.m;W.prototype.Fa=function(a){y("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Kf("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.A.Q(b).e();};W.prototype.hasChild=W.prototype.Fa;W.prototype.C=function(){y("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H();};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){y("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.P(this.g,function(c,d){return a(new W(d,b.W.m(c),N));});};W.prototype.forEach=W.prototype.forEach;W.prototype.kd=function(){y("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e();};W.prototype.hasChildren=W.prototype.kd;W.prototype.getKey=function(){y("Firebase.DataSnapshot.key",0,0,arguments.length);return this.W.getKey();};pd(W.prototype,"key",W.prototype.getKey);W.prototype.Fb=function(){y("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Fb();};W.prototype.numChildren=W.prototype.Fb;W.prototype.xb=function(){y("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.W;};pd(W.prototype,"ref",W.prototype.xb);function Xd(a,b){this.O=a;this.Ld=b;}function Ud(a,b,c,d){return new Xd(new Ec(b,c,d),a.Ld);}function Yd(a){return a.O.ea?a.O.j():null;}Xd.prototype.u=function(){return this.Ld;};function Fc(a){return a.Ld.ea?a.Ld.j():null;};function ng(a,b){this.W=a;var c=a.n,d=new ee(c.g),c=S(c)?new ee(c.g):c.xa?new ke(c):new fe(c);this.of=new Od(c);var e=b.u(),f=b.O,g=d.za(F,e.j(),null),k=c.za(F,f.j(),null);this.Na=new Xd(new Ec(k,f.ea,c.Qa()),new Ec(g,e.ea,d.Qa()));this.ab=[];this.Sf=new Jd(a);}function og(a){return a.W;}h=ng.prototype;h.u=function(){return this.Na.u().j();};h.jb=function(a){var b=Fc(this.Na);return b&&(S(this.W.n)||!a.e()&&!b.R(J(a)).e())?b.Q(a):null;};h.e=function(){return 0===this.ab.length;};h.Ob=function(a){this.ab.push(a);};h.mb=function(a,b){var c=[];if(b){H(null==a,"A cancel should cancel all event registrations.");var d=this.W.path;Ja(this.ab,function(a){(a=a.Pe(b,d))&&c.push(a);});}if(a){for(var e=[],f=0;f<this.ab.length;++f){var g=this.ab[f];if(!g.matches(a))e.push(g);else if(a.af()){e=e.concat(this.ab.slice(f+1));break;}}this.ab=e;}else this.ab=[];return c;};h.gb=function(a,b,c){a.type===Gd&&null!==a.source.Ib&&(H(Fc(this.Na),"We should always have a full cache before handling merges"),H(Yd(this.Na),"Missing event cache, even though we have a server cache"));var d=this.Na;a=this.of.gb(d,a,b,c);b=this.of;c=a.Sd;H(c.O.j().zc(b.V.g),"Event snap not indexed");H(c.u().j().zc(b.V.g),"Server snap not indexed");H(Ic(a.Sd.u())||!Ic(d.u()),"Once a server snap is complete, it should never go back");this.Na=a.Sd;return pg(this,a.Mf,a.Sd.O.j(),null);};function qg(a,b){var c=a.Na.O,d=[];c.j().J()||c.j().P(N,function(a,b){d.push(new I("child_added",b,a));});c.ea&&d.push(Gc(c.j()));return pg(a,d,c.j(),b);}function pg(a,b,c,d){return Kd(a.Sf,b,c,d?[d]:a.ab);};function rg(a,b,c){this.Qb=a;this.sb=b;this.ub=c||null;}h=rg.prototype;h.tf=function(a){return"value"===a;};h.createEvent=function(a,b){var c=b.n.g;return new yc("value",this,new W(a.Ma,b.xb(),c));};h.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){H(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error);};}var d=this.Qb;return function(){d.call(b,a.Md);};};h.Pe=function(a,b){return this.sb?new zc(this,a,b):null;};h.matches=function(a){return a instanceof rg?a.Qb&&this.Qb?a.Qb===this.Qb&&a.ub===this.ub:!0:!1;};h.af=function(){return null!==this.Qb;};function sg(a,b,c){this.ha=a;this.sb=b;this.ub=c;}h=sg.prototype;h.tf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ha;};h.Pe=function(a,b){return this.sb?new zc(this,a,b):null;};h.createEvent=function(a,b){H(null!=a.Za,"Child events should have a childName.");var c=b.xb().m(a.Za);return new yc(a.type,this,new W(a.Ma,c,b.n.g),a.Dd);};h.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){H(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error);};}var d=this.ha[a.gd];return function(){d.call(b,a.Md,a.Dd);};};h.matches=function(a){if(a instanceof sg){if(!this.ha||!a.ha)return!0;if(this.ub===a.ub){var b=qa(a.ha);if(b===qa(this.ha)){if(1===b){var b=ra(a.ha),c=ra(this.ha);return c===b&&(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c]);}return pa(this.ha,function(b,c){return a.ha[c]===b;});}}}return!1;};h.af=function(){return null!==this.ha;};function X(a,b,c,d){this.w=a;this.path=b;this.n=c;this.Oc=d;}function tg(a){var b=null,c=null;a.ka&&(b=he(a));a.na&&(c=je(a));if(a.g===de){if(a.ka){if("[MIN_NAME]"!=ge(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=ie(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!Cf(b)||null!=c&&!Cf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(H(a.g instanceof we||a.g===Ce,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");}function ug(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.oc))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function vg(a,b){if(!0===a.Oc)throw Error(b+": You can't combine multiple orderBy calls.");}h=X.prototype;h.xb=function(){y("Query.ref",0,0,arguments.length);return new U(this.w,this.path);};h.hc=function(a,b,c,d){y("Query.on",2,4,arguments.length);If("Query.on",a,!1);A("Query.on",2,b,!1);var e=wg("Query.on",c,d);if("value"===a)xg(this.w,this,new rg(b,e.cancel||null,e.Pa||null));else{var f={};f[a]=b;xg(this.w,this,new sg(f,e.cancel,e.Pa));}return b;};h.Jc=function(a,b,c){y("Query.off",0,3,arguments.length);If("Query.off",a,!0);A("Query.off",2,b,!0);Eb("Query.off",3,c);var d=null,e=null;"value"===a?d=new rg(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new sg(e,null,c||null));e=this.w;d=".info"===J(this.path)?e.pd.mb(this,d):e.K.mb(this,d);uc(e.da,this.path,d);};h.kg=function(a,b){function c(k){f&&(f=!1,e.Jc(a,c),b&&b.call(d.Pa,k),g.resolve(k));}y("Query.once",1,4,arguments.length);If("Query.once",a,!1);A("Query.once",2,b,!0);var d=wg("Query.once",arguments[2],arguments[3]),e=this,f=!0,g=new Hb();Jb(g.ra);this.hc(a,c,function(b){e.Jc(a,c);d.cancel&&d.cancel.call(d.Pa,b);g.reject(b);});return g.ra;};h.ne=function(a){y("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.w,this.path,this.n.ne(a),this.Oc);};h.oe=function(a){y("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.w,this.path,this.n.oe(a),this.Oc);};h.lg=function(a){y("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Kf("Query.orderByChild",a);vg(this,"Query.orderByChild");var b=new L(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");b=new we(b);b=Ge(this.n,b);tg(b);return new X(this.w,this.path,b,!0);};h.mg=function(){y("Query.orderByKey",0,0,arguments.length);vg(this,"Query.orderByKey");var a=Ge(this.n,de);tg(a);return new X(this.w,this.path,a,!0);};h.ng=function(){y("Query.orderByPriority",0,0,arguments.length);vg(this,"Query.orderByPriority");var a=Ge(this.n,N);tg(a);return new X(this.w,this.path,a,!0);};h.og=function(){y("Query.orderByValue",0,0,arguments.length);vg(this,"Query.orderByValue");var a=Ge(this.n,Ce);tg(a);return new X(this.w,this.path,a,!0);};h.Nd=function(a,b){y("Query.startAt",0,2,arguments.length);Df("Query.startAt",a,this.path,!0);Jf("Query.startAt",b);var c=this.n.Nd(a,b);ug(c);tg(c);if(this.n.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new X(this.w,this.path,c,this.Oc);};h.fd=function(a,b){y("Query.endAt",0,2,arguments.length);Df("Query.endAt",a,this.path,!0);Jf("Query.endAt",b);var c=this.n.fd(a,b);ug(c);tg(c);if(this.n.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.w,this.path,c,this.Oc);};h.Rf=function(a,b){y("Query.equalTo",1,2,arguments.length);Df("Query.equalTo",a,this.path,!1);Jf("Query.equalTo",b);if(this.n.ka)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).fd(a,b);};h.toString=function(){y("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Z;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.w.toString()+(b||"/");};h.ya=function(){var a=kd(He(this.n));return"{}"===a?"default":a;};function wg(a,b,c){var d={cancel:null,Pa:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Pa=c,Eb(a,4,d.Pa);else if(b)if("object"===typeof b&&null!==b)d.Pa=b;else if("function"===typeof b)d.cancel=b;else throw Error(Db(a,3,!0)+" must either be a cancel callback or a context object.");return d;}X.prototype.on=X.prototype.hc;X.prototype.off=X.prototype.Jc;X.prototype.once=X.prototype.kg;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.lg;X.prototype.orderByKey=X.prototype.mg;X.prototype.orderByPriority=X.prototype.ng;X.prototype.orderByValue=X.prototype.og;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.fd;X.prototype.equalTo=X.prototype.Rf;X.prototype.toString=X.prototype.toString;pd(X.prototype,"ref",X.prototype.xb);function yg(a,b){this.value=a;this.children=b||zg;}var zg=new Uf(function(a,b){return a===b?0:a<b?-1:1;});function Ag(a){var b=Q;t(a,function(a,d){b=b.set(new L(d),a);});return b;}h=yg.prototype;h.e=function(){return null===this.value&&this.children.e();};function Bg(a,b,c){if(null!=a.value&&c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=Bg(a,D(b),c),null!=b?{path:new L(d).m(b.path),value:b.value}:null):null;}function Cg(a,b){return Bg(a,b,function(){return!0;});}h.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q;};h.set=function(a,b){if(a.e())return new yg(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Ra(c,d);return new yg(this.value,c);};h.remove=function(a){if(a.e())return this.children.e()?Q:new yg(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Ra(b,a),null===this.value&&b.e()?Q:new yg(this.value,b)):this;};h.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null;};function ce(a,b,c){if(b.e())return c;var d=J(b);b=ce(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Ra(d,b);return new yg(a.value,d);}function Dg(a,b){return Eg(a,C,b);}function Eg(a,b,c){var d={};a.children.ia(function(a,f){d[a]=Eg(f,b.m(a),c);});return c(b,a.value,d);}function Fg(a,b,c){return Gg(a,b,C,c);}function Gg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?Gg(a,D(b),c.m(e),d):null;}function Hg(a,b,c){Ig(a,b,C,c);}function Ig(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=J(b);return(a=a.children.get(e))?Ig(a,D(b),c.m(e),d):Q;}function ae(a,b){Jg(a,C,b);}function Jg(a,b,c){a.children.ia(function(a,e){Jg(e,b.m(a),c);});a.value&&c(b,a.value);}function Kg(a,b){a.children.ia(function(a,d){d.value&&b(a,d.value);});}var Q=new yg(null);yg.prototype.toString=function(){var a={};ae(this,function(b,c){a[b.toString()]=c.toString();});return B(a);};function Lg(a,b,c){this.type=Td;this.source=Mg;this.path=a;this.Pb=b;this.Id=c;}Lg.prototype.Nc=function(a){if(this.path.e()){if(null!=this.Pb.value)return H(this.Pb.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Pb.subtree(new L(a));return new Lg(C,a,this.Id);}H(J(this.path)===a,"operationForChild called for unrelated child.");return new Lg(D(this.path),this.Pb,this.Id);};Lg.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Pb+")";};var ac=0,Gd=1,Td=2,cc=3;function Ng(a,b,c,d){this.ee=a;this.We=b;this.Ib=c;this.Ee=d;H(!d||b,"Tagged queries must be from server.");}var Mg=new Ng(!0,!1,null,!1),Og=new Ng(!1,!0,null,!1);Ng.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Ib+")":"server";};function Pg(a){this.X=a;}var Qg=new Pg(new yg(null));function Rg(a,b,c){if(b.e())return new Pg(new yg(c));var d=Cg(a.X,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.F(b,c);return new Pg(a.X.set(e,d));}a=ce(a.X,b,new yg(c));return new Pg(a);}function Sg(a,b,c){var d=a;Cb(c,function(a,c){d=Rg(d,b.m(a),c);});return d;}Pg.prototype.Ed=function(a){if(a.e())return Qg;a=ce(this.X,a,Q);return new Pg(a);};function Tg(a,b){var c=Cg(a.X,b);return null!=c?a.X.get(c.path).Q(T(c.path,b)):null;}function Ug(a){var b=[],c=a.X.value;null!=c?c.J()||c.P(N,function(a,c){b.push(new K(a,c));}):a.X.children.ia(function(a,c){null!=c.value&&b.push(new K(a,c.value));});return b;}function Vg(a,b){if(b.e())return a;var c=Tg(a,b);return null!=c?new Pg(new yg(c)):new Pg(a.X.subtree(b));}Pg.prototype.e=function(){return this.X.e();};Pg.prototype.apply=function(a){return Wg(C,this.X,a);};function Wg(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ia(function(b,f){".priority"===b?(H(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Wg(a.m(b),f,c);});c.Q(a).e()||null===d||(c=c.F(a.m(".priority"),d));return c;};function Xg(){this.Aa={};}h=Xg.prototype;h.e=function(){return xa(this.Aa);};h.gb=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=x(this.Aa,d),H(null!=d,"SyncTree gave us an op for an invalid query."),d.gb(a,b,c);var e=[];t(this.Aa,function(d){e=e.concat(d.gb(a,b,c));});return e;};h.Ob=function(a,b,c,d,e){var f=a.ya(),g=x(this.Aa,f);if(!g){var g=c.Ba(e?d:null),k=!1;g?k=!0:(g=d instanceof P?c.sc(d):F,k=!1);g=new ng(a,new Xd(new Ec(g,k,!1),new Ec(d,e,!1)));this.Aa[f]=g;}g.Ob(b);return qg(g,b);};h.mb=function(a,b,c){var d=a.ya(),e=[],f=[],g=null!=Yg(this);if("default"===d){var k=this;t(this.Aa,function(a,d){f=f.concat(a.mb(b,c));a.e()&&(delete k.Aa[d],S(a.W.n)||e.push(a.W));});}else{var m=x(this.Aa,d);m&&(f=f.concat(m.mb(b,c)),m.e()&&(delete this.Aa[d],S(m.W.n)||e.push(m.W)));}g&&null==Yg(this)&&e.push(new U(a.w,a.path));return{sg:e,Tf:f};};function Zg(a){return Ka(sa(a.Aa),function(a){return!S(a.W.n);});}h.jb=function(a){var b=null;t(this.Aa,function(c){b=b||c.jb(a);});return b;};function $g(a,b){if(S(b.n))return Yg(a);var c=b.ya();return x(a.Aa,c);}function Yg(a){return wa(a.Aa,function(a){return S(a.W.n);})||null;};function ah(){this.T=Qg;this.la=[];this.Cc=-1;}function bh(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d;}return null;}h=ah.prototype;h.Ed=function(a){var b=Pa(this.la,function(b){return b.Zc===a;});H(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var g=this.la[f];g.visible&&(f>=b&&ch(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--;}if(d){if(e)this.T=dh(this.la,eh,C),this.Cc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ja)this.T=this.T.Ed(c.path);else{var k=this;t(c.children,function(a,b){k.T=k.T.Ed(c.path.m(b));});}return!0;}return!1;};h.Ba=function(a,b,c,d){if(c||d){var e=Vg(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Tg(e,C)?(e=dh(this.la,function(b){return(b.visible||d)&&(!c||!(0<=Ia(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path));},a),b=b||F,e.apply(b)):null;}e=Tg(this.T,a);if(null!=e)return e;e=Vg(this.T,a);return e.e()?b:null!=b||null!=Tg(e,C)?(b=b||F,e.apply(b)):null;};h.sc=function(a,b){var c=F,d=Tg(this.T,a);if(d)d.J()||d.P(N,function(a,b){c=c.U(a,b);});else if(b){var e=Vg(this.T,a);b.P(N,function(a,b){var d=Vg(e,new L(a)).apply(b);c=c.U(a,d);});Ja(Ug(e),function(a){c=c.U(a.name,a.S);});}else e=Vg(this.T,a),Ja(Ug(e),function(a){c=c.U(a.name,a.S);});return c;};h.$c=function(a,b,c,d){H(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.m(b);if(null!=Tg(this.T,a))return null;a=Vg(this.T,a);return a.e()?d.Q(b):a.apply(d.Q(b));};h.rc=function(a,b,c){a=a.m(b);var d=Tg(this.T,a);return null!=d?d:Dc(c,b)?Vg(this.T,a).apply(c.j().R(b)):null;};h.mc=function(a){return Tg(this.T,a);};h.Xd=function(a,b,c,d,e,f){var g;a=Vg(this.T,a);g=Tg(a,C);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.ob(f);if(g.e()||g.J())return[];b=[];a=ne(f);e=e?g.$b(c,f):g.Yb(c,f);for(f=R(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=R(e);return b;};function ch(a,b){return a.Ja?a.path.contains(b):!!va(a.children,function(c,d){return a.path.m(d).contains(b);});}function eh(a){return a.visible;}function dh(a,b,c){for(var d=Qg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ja)c.contains(g)?(g=T(c,g),d=Rg(d,g,f.Ja)):g.contains(c)&&(g=T(g,c),d=Rg(d,C,f.Ja.Q(g)));else if(f.children){if(c.contains(g))g=T(c,g),d=Sg(d,g,f.children);else{if(g.contains(c))if(g=T(g,c),g.e())d=Sg(d,C,f.children);else if(f=x(f.children,J(g)))f=f.Q(D(g)),d=Rg(d,C,f);}}else throw Xc("WriteRecord should have .snap or .children");}}return d;}function fh(a,b){this.Mb=a;this.X=b;}h=fh.prototype;h.Ba=function(a,b,c){return this.X.Ba(this.Mb,a,b,c);};h.sc=function(a){return this.X.sc(this.Mb,a);};h.$c=function(a,b,c){return this.X.$c(this.Mb,a,b,c);};h.mc=function(a){return this.X.mc(this.Mb.m(a));};h.Xd=function(a,b,c,d,e){return this.X.Xd(this.Mb,a,b,c,d,e);};h.rc=function(a,b){return this.X.rc(this.Mb,a,b);};h.m=function(a){return new fh(this.Mb.m(a),this.X);};function gh(){this.children={};this.ad=0;this.value=null;}function hh(a,b,c){this.ud=a?a:"";this.Ha=b?b:null;this.A=c?c:new gh();}function ih(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=J(c));)d=new hh(e,d,x(d.A.children,e)||new gh()),c=D(c);return d;}h=hh.prototype;h.Ea=function(){return this.A.value;};function jh(a,b){H("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;kh(a);}h.clear=function(){this.A.value=null;this.A.children={};this.A.ad=0;kh(this);};h.kd=function(){return 0<this.A.ad;};h.e=function(){return null===this.Ea()&&!this.kd();};h.P=function(a){var b=this;t(this.A.children,function(c,d){a(new hh(d,b,c));});};function lh(a,b,c,d){c&&!d&&b(a);a.P(function(a){lh(a,b,!0,d);});c&&d&&b(a);}function mh(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent();}h.path=function(){return new L(null===this.Ha?this.ud:this.Ha.path()+"/"+this.ud);};h.name=function(){return this.ud;};h.parent=function(){return this.Ha;};function kh(a){if(null!==a.Ha){var b=a.Ha,c=a.ud,d=a.e(),e=Bb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.ad--,kh(b)):d||e||(b.A.children[c]=a.A,b.A.ad++,kh(b));}};function nh(a,b,c,d,e,f){this.id=oh++;this.f=cd("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Pc=0;this.Lc=[];this.ma=!1;this.Va=1E3;this.td=3E5;this.Hb=b;this.Kc=c;this.ue=d;this.M=a;this.pb=this.Ia=this.Db=this.ze=null;this.Vd=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Je=f||null;this.vb=null;this.Nb=!1;this.Gd={};this.tg=0;this.Ve=!0;this.Bc=this.me=null;ph(this,0);Sf.Wb().hc("visible",this.jg,this);-1===a.host.indexOf("fblocal")&&Rf.Wb().hc("online",this.ig,this);}var oh=0,qh=0;h=nh.prototype;h.ua=function(a,b,c){var d=++this.tg;a={r:d,a:a,b:b};this.f(B(a));H(this.ma,"sendRequest call when we're not connected not allowed.");this.Ia.ua(a);c&&(this.Gd[d]=c);};h.df=function(a,b,c,d){var e=a.ya(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};H(Cd(a.n)||!S(a.n),"listen() called for non-default but complete query");H(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,pg:a,tag:c};this.$[f][e]=a;this.ma&&rh(this,a);};function rh(a,b){var c=b.pg,d=c.path.toString(),e=c.ya();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=He(c.n),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&Bb(k,"w")){var l=x(k,"w");da(l)&&0<=Ia(l,"no_index")&&O("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance");}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==m&&sh(a,d,e),b.G&&b.G(m,k));});}h.qf=function(a){this.pb=a;this.f("Auth token refreshed");this.pb?th(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||sd(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4;};function th(a){if(a.ma&&a.pb){var b=a.pb,c=rd(b)?"auth":"gauth",d={cred:b};a.Je&&(d.authvar=a.Je);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.pb===b&&("ok"===d?this.ke=0:uh(a,d,c));});}}h.Ef=function(a,b){var c=a.path.toString(),d=a.ya();this.f("Unlisten called for "+c+" "+d);H(Cd(a.n)||!S(a.n),"unlisten() called for non-default but complete query");if(sh(this,c,d)&&this.ma){var e=He(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c);}};h.re=function(a,b,c){this.ma?vh(this,"o",a,b,c):this.Lc.push({we:a,action:"o",data:b,G:c});};h.gf=function(a,b,c){this.ma?vh(this,"om",a,b,c):this.Lc.push({we:a,action:"om",data:b,G:c});};h.xd=function(a,b){this.ma?vh(this,"oc",a,null,b):this.Lc.push({we:a,action:"oc",data:null,G:b});};function vh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d);},Math.floor(0));});}h.put=function(a,b,c,d){wh(this,"p",a,b,c,d);};h.ef=function(a,b,c,d){wh(this,"m",a,b,c,d);};function wh(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.pa.push({action:b,sf:d,G:e});a.Pc++;b=a.pa.length-1;a.ma?xh(a,b):a.f("Buffering put: "+c);}function xh(a,b){var c=a.pa[b].action,d=a.pa[b].sf,e=a.pa[b].G;a.pa[b].qg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Pc--;0===a.Pc&&(a.pa=[]);e&&e(d.s,d.d);});}h.ye=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d);}));};h.wd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b));}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Hb(a.p,a.d,!1,a.t):"m"===b?this.Hb(a.p,a.d,!0,a.t):"c"===b?yh(this,a.p,a.q):"ac"===b?uh(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):dd("Unrecognized action received from server: "+B(b)+"\nAre you using the latest client?"));}};h.Mc=function(a,b){this.f("connection ready");this.ma=!0;this.Bc=new Date().getTime();this.ue({serverTimeOffset:a-new Date().getTime()});this.Db=b;if(this.Ve){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;Qb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c);}zh(this);this.Ve=!1;this.Kc(!0);};function ph(a,b){H(!a.Ia,"Scheduling a connect when we're already connected/ing?");a.vb&&clearTimeout(a.vb);a.vb=setTimeout(function(){a.vb=null;Ah(a);},Math.floor(b));}h.jg=function(a){a&&!this.Nb&&this.Va===this.td&&(this.f("Window became visible.  Reducing delay."),this.Va=1E3,this.Ia||ph(this,0));this.Nb=a;};h.ig=function(a){a?(this.f("Browser went online."),this.Va=1E3,this.Ia||ph(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ia&&this.Ia.close());};h.jf=function(){this.f("data client disconnected");this.ma=!1;this.Ia=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.sf&&b.qg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Pc--);}0===this.Pc&&(this.pa=[]);this.Gd={};Bh(this)&&(this.Nb?this.Bc&&(3E4<new Date().getTime()-this.Bc&&(this.Va=1E3),this.Bc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Va=this.td,this.me=new Date().getTime()),a=Math.max(0,this.Va-(new Date().getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+a+"ms"),ph(this,a),this.Va=Math.min(this.td,1.3*this.Va));this.Kc(!1);};function Ah(a){if(Bh(a)){a.f("Making a connection attempt");a.me=new Date().getTime();a.Bc=null;var b=r(a.wd,a),c=r(a.Mc,a),d=r(a.jf,a),e=a.id+":"+qh++,f=a.Db,g=!1,k=null,m=function(){k?k.close():(g=!0,d());};a.Ia={close:m,ua:function(a){H(k,"sendRequest call when we're not connected not allowed.");k.ua(a);}};var l=a.de;a.de=!1;a.Vd.getToken(l).then(function(l){g?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),a.pb=l&&l.accessToken,k=new af(e,a.M,b,c,d,function(b){O(b+" ("+a.M.toString()+")");a.eb("server_kill");},f));}).then(null,function(b){a.f("Failed to get token: "+b);g||m();});}}h.eb=function(a){E("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Ia?this.Ia.close():(this.vb&&(clearTimeout(this.vb),this.vb=null),this.ma&&this.jf());};h.lc=function(a){E("Resuming connection for reason: "+a);delete this.qd[a];xa(this.qd)&&(this.Va=1E3,this.Ia||ph(this,0));};function yh(a,b,c){c=c?La(c,function(a){return kd(a);}).join("$"):"default";(a=sh(a,b,c))&&a.G&&a.G("permission_denied");}function sh(a,b,c){b=new L(b).toString();var d;p(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===qa(a.$[b])&&delete a.$[b]):d=void 0;return d;}function uh(a,b,c){E("Auth token revoked: "+b+"/"+c);a.pb=null;a.de=!0;a.Ia.close();"invalid_token"===b&&(a.ke++,3<=a.ke&&(a.Va=3E4,O("Provided authentication credentials are invalid. This usually indicates your FirebaseApp instance was not initialized correctly. Make sure your apiKey and databaseURL match the values provided for your app at https://console.firebase.google.com/, or if you're using a service account, make sure it's authorized to access the specified databaseURL and is from the correct project.")));}function zh(a){th(a);t(a.$,function(b){t(b,function(b){rh(a,b);});});for(var b=0;b<a.pa.length;b++)a.pa[b]&&xh(a,b);for(;a.Lc.length;)b=a.Lc.shift(),vh(a,b.action,b.we,b.data,b.G);}function Bh(a){var b;b=Rf.Wb().ic;return xa(a.qd)&&b;};var Y={Xf:function(){Qe=wd=!0;}};Y.forceLongPolling=Y.Xf;Y.Yf=function(){Re=!0;};Y.forceWebSockets=Y.Yf;Y.dg=function(){return vd.isAvailable();};Y.isWebSocketsAvailable=Y.dg;Y.wg=function(a,b){a.w.Ua.ze=b;};Y.setSecurityDebugCallback=Y.wg;Y.Be=function(a,b){a.w.Be(b);};Y.stats=Y.Be;Y.Ce=function(a,b){a.w.Ce(b);};Y.statsIncrementCounter=Y.Ce;Y.ed=function(a){return a.w.ed;};Y.dataUpdateCount=Y.ed;Y.cg=function(a,b){a.w.je=b;};Y.interceptServerData=Y.cg;function Ch(a){this.wa=Q;this.lb=new ah();this.De={};this.jc={};this.Dc=a;}function Dh(a,b,c,d,e){var f=a.lb,g=e;H(d>f.Cc,"Stacking an older write on top of newer ones");p(g)||(g=!0);f.la.push({path:b,Ja:c,Zc:d,visible:g});g&&(f.T=Rg(f.T,b,c));f.Cc=d;return e?Eh(a,new $b(Mg,b,c)):[];}function Fh(a,b,c,d){var e=a.lb;H(d>e.Cc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.T=Sg(e.T,b,c);e.Cc=d;c=Ag(c);return Eh(a,new Fd(Mg,b,c));}function Gh(a,b,c){c=c||!1;var d=bh(a.lb,b);if(a.lb.Ed(b)){var e=Q;null!=d.Ja?e=e.set(C,!0):Cb(d.children,function(a,b){e=e.set(new L(a),b);});return Eh(a,new Lg(d.path,e,c));}return[];}function Hh(a,b,c){c=Ag(c);return Eh(a,new Fd(Og,b,c));}function Ih(a,b,c,d){d=Jh(a,d);if(null!=d){var e=Kh(d);d=e.path;e=e.Ib;b=T(d,b);c=new $b(new Ng(!1,!0,e,!0),b,c);return Lh(a,d,c);}return[];}function Mh(a,b,c,d){if(d=Jh(a,d)){var e=Kh(d);d=e.path;e=e.Ib;b=T(d,b);c=Ag(c);c=new Fd(new Ng(!1,!0,e,!0),b,c);return Lh(a,d,c);}return[];}Ch.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;Hg(this.wa,c,function(a,b){var f=T(a,c);d=d||b.jb(f);e=e||null!=Yg(b);});var f=this.wa.get(c);f?(e=e||null!=Yg(f),d=d||f.jb(C)):(f=new Xg(),this.wa=this.wa.set(c,f));var g;null!=d?g=!0:(g=!1,d=F,Kg(this.wa.subtree(c),function(a,b){var c=b.jb(C);c&&(d=d.U(a,c));}));var k=null!=$g(f,a);if(!k&&!S(a.n)){var m=Nh(a);H(!(m in this.jc),"View does not exist, but we have a tag");var l=Oh++;this.jc[m]=l;this.De["_"+l]=m;}g=f.Ob(a,b,new fh(c,this.lb),d,g);k||e||(f=$g(f,a),g=g.concat(Ph(this,a,f)));return g;};Ch.prototype.mb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ya()||null!=$g(e,a))){f=e.mb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.sg;f=f.Tf;b=-1!==Pa(e,function(a){return S(a.n);});var g=Fg(this.wa,d,function(a,b){return null!=Yg(b);});if(b&&!g&&(d=this.wa.subtree(d),!d.e()))for(var d=Qh(d),k=0;k<d.length;++k){var m=d[k],l=m.W,m=Rh(this,m);this.Dc.Ae(Sh(l),Th(this,l),m.ld,m.G);}if(!g&&0<e.length&&!c)if(b)this.Dc.Od(Sh(a),null);else{var u=this;Ja(e,function(a){a.ya();var b=u.jc[Nh(a)];u.Dc.Od(Sh(a),b);});}Uh(this,e);}return f;};Ch.prototype.Ba=function(a,b){var c=this.lb,d=Fg(this.wa,a,function(b,c){var d=T(b,a);if(d=c.jb(d))return d;});return c.Ba(a,d,b,!0);};function Qh(a){return Dg(a,function(a,c,d){if(c&&null!=Yg(c))return[Yg(c)];var e=[];c&&(e=Zg(c));t(d,function(a){e=e.concat(a);});return e;});}function Uh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!S(d.n)){var d=Nh(d),e=a.jc[d];delete a.jc[d];delete a.De["_"+e];}}}function Sh(a){return S(a.n)&&!Cd(a.n)?a.xb():a;}function Ph(a,b,c){var d=b.path,e=Th(a,b);c=Rh(a,c);b=a.Dc.Ae(Sh(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)H(null==Yg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Dg(d,function(a,b,c){if(!a.e()&&b&&null!=Yg(b))return[og(Yg(b))];var d=[];b&&(d=d.concat(La(Zg(b),function(a){return a.W;})));t(c,function(a){d=d.concat(a);});return d;}),d=0;d<e.length;++d)c=e[d],a.Dc.Od(Sh(c),Th(a,c));return b;}function Rh(a,b){var c=b.W,d=Th(a,c);return{ld:function(){return(b.u()||F).hash();},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=Jh(a,d)){var g=Kh(b);b=g.path;g=g.Ib;f=T(b,f);f=new bc(new Ng(!1,!0,g,!0),f);b=Lh(a,b,f);}else b=[];}else b=Eh(a,new bc(Og,c.path));return b;}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.mb(c,null,f);}};}function Nh(a){return a.path.toString()+"$"+a.ya();}function Kh(a){var b=a.indexOf("$");H(-1!==b&&b<a.length-1,"Bad queryKey.");return{Ib:a.substr(b+1),path:new L(a.substr(0,b))};}function Jh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0;}function Th(a,b){var c=Nh(b);return x(a.jc,c);}var Oh=1;function Lh(a,b,c){var d=a.wa.get(b);H(d,"Missing sync point for query tag that we're tracking");return d.gb(c,new fh(b,a.lb),null);}function Eh(a,b){return Vh(a,b,a.wa,null,new fh(C,a.lb));}function Vh(a,b,c,d,e){if(b.path.e())return Wh(a,b,c,d,e);var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var g=[],k=J(b.path),m=b.Nc(k);if((c=c.children.get(k))&&m)var l=d?d.R(k):null,k=e.m(k),g=g.concat(Vh(a,m,c,l,k));f&&(g=g.concat(f.gb(b,e,d)));return g;}function Wh(a,b,c,d,e){var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var g=[];c.children.ia(function(c,f){var l=d?d.R(c):null,u=e.m(c),z=b.Nc(c);z&&(g=g.concat(Wh(a,z,f,l,u)));});f&&(g=g.concat(f.gb(b,e,d)));return g;};function sf(a,b,c){this.app=c;var d=new dc(c);this.M=a;this.Xa=pc(a);this.Vc=null;this.da=new rc();this.vd=1;this.Ua=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Ad(this.M,r(this.Hb,this),d),setTimeout(r(this.Kc,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if("object"!==ca(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");try{B(b);}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ua=new nh(this.M,r(this.Hb,this),r(this.Kc,this),r(this.ue,this),d,b);}var f=this;ec(d,function(a){f.va.qf(a);});this.zg=qc(a,r(function(){return new jc(this.Xa,this.va);},this));this.nc=new hh();this.ie=new fc();this.pd=new Ch({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=Eh(f.pd,new $b(Og,a.path,c)),setTimeout(function(){d("ok");},0));return b;},Od:aa});Xh(this,"connected",!1);this.ja=new Rc();this.$a=new rf(this);this.ed=0;this.je=null;this.K=new Ch({Ae:function(a,b,c,d){f.va.df(a,c,b,function(b,c){var e=d(b,c);wc(f.da,a.path,e);});return[];},Od:function(a,b){f.va.Ef(a,b);}});}h=sf.prototype;h.toString=function(){return(this.M.Sc?"https://":"http://")+this.M.host;};h.name=function(){return this.M.pe;};function Yh(a){a=a.ie.j(new L(".info/serverTimeOffset")).H()||0;return new Date().getTime()+a;}function Zh(a){a=a={timestamp:Yh(a)};a.timestamp=a.timestamp||new Date().getTime();return a;}h.Hb=function(a,b,c,d){this.ed++;var e=new L(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=oa(b,function(a){return M(a);}),a=Mh(this.K,e,b,d)):(b=M(b),a=Ih(this.K,e,b,d)):c?(d=oa(b,function(a){return M(a);}),a=Hh(this.K,e,d)):(d=M(b),a=Eh(this.K,new $b(Og,e,d)));d=e;0<a.length&&(d=$h(this,e));wc(this.da,d,a);};h.Kc=function(a){Xh(this,"connected",a);!1===a&&ai(this);};h.ue=function(a){var b=this;md(a,function(a,d){Xh(b,d,a);});};function Xh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=Eh(a.pd,new $b(Og,b,c));wc(a.da,b,c);}h.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Gg:c});var e=Zh(this);b=M(b,c);var e=Uc(b,e),f=this.vd++,e=Dh(this.K,a,e,f,!0);sc(this.da,e);var g=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||O("set at "+a+" failed: "+b);e=Gh(g.K,f,!e);wc(g.da,a,e);bi(d,b,c);});e=ci(this,a);$h(this,e);wc(this.da,e,[]);};h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Zh(this),f={};t(b,function(a,b){d=!1;var c=M(a);f[b]=Uc(c,e);});if(d)E("update() called with empty data.  Don't do anything."),bi(c,"ok");else{var g=this.vd++,k=Fh(this.K,a,f,g);sc(this.da,k);var m=this;this.va.ef(a.toString(),b,function(b,d){var e="ok"===b;e||O("update at "+a+" failed: "+b);var e=Gh(m.K,g,!e),f=a;0<e.length&&(f=$h(m,a));wc(m.da,f,e);bi(c,b,d);});b=ci(this,a);$h(this,b);wc(this.da,a,[]);}};function ai(a){a.f("onDisconnectEvents");var b=Zh(a),c=[];Sc(Qc(a.ja,b),C,function(b,e){c=c.concat(Eh(a.K,new $b(Og,b,e)));var f=ci(a,b);$h(a,f);});a.ja=new Rc();wc(a.da,C,c);}h.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&yf(c.ja,a);bi(b,d,e);});};function Mf(a,b,c,d){var e=M(c);a.va.re(b.toString(),e.H(!0),function(c,g){"ok"===c&&Tc(a.ja,b,e);bi(d,c,g);});}function Nf(a,b,c,d,e){var f=M(c,d);a.va.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Tc(a.ja,b,f);bi(e,c,d);});}function Of(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(E("onDisconnect().update() called with empty data.  Don't do anything."),bi(d,"ok")):a.va.gf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=M(c[m]);Tc(a.ja,b.m(m),l);}bi(d,e,f);});}function xg(a,b,c){c=".info"===J(b.path)?a.pd.Ob(b,c):a.K.Ob(b,c);uc(a.da,b.path,c);}h.eb=function(){this.Ua&&this.Ua.eb("repo_interrupt");};h.lc=function(){this.Ua&&this.Ua.lc("repo_interrupt");};h.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new kc(this.Xa)),a=this.Vc.get()):a=this.Xa.get();var b=Ma(ta(a),function(a,b){return Math.max(b.length,a);},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d);}}};h.Ce=function(a){mc(this.Xa,a);this.zg.zf[a]=!0;};h.f=function(a){var b="";this.Ua&&(b=this.Ua.id+":");E(b,arguments);};function bi(a,b,c){a&&Ub(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e);}});};function di(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new U(a,b);g.hc("value",f);c={path:b,update:c,G:d,status:null,lf:Wc(),Ie:e,wf:0,Rd:function(){g.Jc("value",f);},Td:null,Da:null,bd:null,cd:null,dd:null};d=a.K.Ba(b,void 0)||F;c.bd=d;d=c.update(d.H());if(p(d)){Ef("transaction failed: Data returned ",d,c.path);c.status=1;e=ih(a.nc,b);var k=e.Ea()||[];k.push(c);jh(e,k);"object"===typeof d&&null!==d&&Bb(d,".priority")?(k=x(d,".priority"),H(Cf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):k=(a.K.Ba(b)||F).C().H();e=Zh(a);d=M(d,k);e=Uc(d,e);c.cd=d;c.dd=e;c.Da=a.vd++;c=Dh(a.K,b,e,c.Da,c.Ie);wc(a.da,b,c);ei(a);}else c.Rd(),c.cd=null,c.dd=null,c.G&&(a=new W(c.bd,new U(a,c.path),N),c.G(null,!1,a));}function ei(a,b){var c=b||a.nc;b||fi(a,c);if(null!==c.Ea()){var d=gi(a,c);H(0<d.length,"Sending zero length transaction queue");Na(d,function(a){return 1===a.status;})&&hi(a,c.path(),d);}else c.kd()&&c.P(function(b){ei(a,b);});}function hi(a,b,c){for(var d=La(c,function(a){return a.Da;}),e=a.K.Ba(b,d)||F,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];H(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.wf++;var k=T(b,g.path),d=d.F(k,g.cd);}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(Gh(a.K,c[f].Da));if(c[f].G){var g=c[f].dd,k=new U(a,c[f].path);d.push(r(c[f].G,null,null,!0,new W(g,k,N)));}c[f].Rd();}fi(a,ih(a.nc,b));ei(a);wc(a.da,b,e);for(f=0;f<d.length;f++)Ub(d[f]);}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(O("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;$h(a,b);}},e);}function $h(a,b){var c=ii(a,b),d=c.path(),c=gi(a,c);ji(a,c,d);return d;}function ji(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ka(b,function(a){return 1===a.status;}),f=La(f,function(a){return a.Da;}),g=0;g<b.length;g++){var k=b[g],m=T(c,k.path),l=!1,u;H(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(Gh(a.K,k.Da,!0));else if(1===k.status)if(25<=k.wf)l=!0,u="maxretry",e=e.concat(Gh(a.K,k.Da,!0));else{var z=a.K.Ba(k.path,f)||F;k.bd=z;var G=b[g].update(z.H());p(G)?(Ef("transaction failed: Data returned ",G,k.path),m=M(G),"object"===typeof G&&null!=G&&Bb(G,".priority")||(m=m.ga(z.C())),z=k.Da,G=Zh(a),G=Uc(m,G),k.cd=m,k.dd=G,k.Da=a.vd++,Qa(f,z),e=e.concat(Dh(a.K,k.path,G,k.Da,k.Ie)),e=e.concat(Gh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(Gh(a.K,k.Da,!0)));}wc(a.da,c,e);e=[];l&&(b[g].status=3,setTimeout(b[g].Rd,Math.floor(0)),b[g].G&&("nodata"===u?(k=new U(a,b[g].path),d.push(r(b[g].G,null,null,!1,new W(b[g].bd,k,N)))):d.push(r(b[g].G,null,Error(u),!1,null))));}fi(a,a.nc);for(g=0;g<d.length;g++)Ub(d[g]);ei(a);}}function ii(a,b){for(var c,d=a.nc;null!==(c=J(b))&&null===d.Ea();)d=ih(d,c),b=D(b);return d;}function gi(a,b){var c=[];ki(a,b,c);c.sort(function(a,b){return a.lf-b.lf;});return c;}function ki(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.P(function(b){ki(a,b,c);});}function fi(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;jh(b,0<c.length?c:null);}b.P(function(b){fi(a,b);});}function ci(a,b){var c=ii(a,b).path(),d=ih(a.nc,b);mh(d,function(b){li(a,b);});li(a,d);lh(d,function(b){li(a,b);});return c;}function li(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(H(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].Td="set"):(H(1===c[g].status,"Unexpected transaction status in abort"),c[g].Rd(),e=e.concat(Gh(a.K,c[g].Da,!0)),c[g].G&&d.push(r(c[g].G,null,Error("set"),!1,null))));-1===f?jh(b,null):c.length=f+1;wc(a.da,b.path(),e);for(g=0;g<d.length;g++)Ub(d[g]);}};function xf(){this.nb={};this.Ff=!1;}xf.prototype.eb=function(){for(var a in this.nb)this.nb[a].eb();};xf.prototype.lc=function(){for(var a in this.nb)this.nb[a].lc();};xf.prototype.ce=function(a){this.Ff=a;};ba(xf);xf.prototype.interrupt=xf.prototype.eb;xf.prototype.resume=xf.prototype.lc;var Z={};Z.pc=nh;Z.DataConnection=Z.pc;nh.prototype.yg=function(a,b){this.ua("q",{p:a},b);};Z.pc.prototype.simpleListen=Z.pc.prototype.yg;nh.prototype.Qf=function(a,b){this.ua("echo",{d:a},b);};Z.pc.prototype.echo=Z.pc.prototype.Qf;nh.prototype.interrupt=nh.prototype.eb;Z.If=af;Z.RealTimeConnection=Z.If;af.prototype.sendRequest=af.prototype.ua;af.prototype.close=af.prototype.close;Z.bg=function(a){var b=nh.prototype.put;nh.prototype.put=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f);};return function(){nh.prototype.put=b;};};Z.hijackHash=Z.bg;Z.Hf=gc;Z.ConnectionTarget=Z.Hf;Z.ya=function(a){return a.ya();};Z.queryIdentifier=Z.ya;Z.eg=function(a){return a.w.Ua.$;};Z.listens=Z.eg;Z.ce=function(a){xf.Wb().ce(a);};Z.forceRestClient=Z.ce;Z.Context=xf;function U(a,b){if(!(a instanceof sf))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,Ee,!1);this.then=void 0;this["catch"]=void 0;}ka(U,X);h=U.prototype;h.getKey=function(){y("Firebase.key",0,0,arguments.length);return this.path.e()?null:$d(this.path);};h.m=function(a){y("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof L))if(null===J(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Kf("Firebase.child",b);}else Kf("Firebase.child",a);return new U(this.w,this.path.m(a));};h.getParent=function(){y("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.w,a);};h.Zf=function(){y("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a;};h.Pf=function(){return this.w.$a;};h.set=function(a,b){y("Firebase.set",1,2,arguments.length);Lf("Firebase.set",this.path);Df("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);var c=new Hb();this.w.Kb(this.path,a,null,Ib(c,b));return c.ra;};h.update=function(a,b){y("Firebase.update",1,2,arguments.length);Lf("Firebase.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");}Gf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);c=new Hb();this.w.update(this.path,a,Ib(c,b));return c.ra;};h.Kb=function(a,b,c){y("Firebase.setWithPriority",2,3,arguments.length);Lf("Firebase.setWithPriority",this.path);Df("Firebase.setWithPriority",a,this.path,!1);Hf("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new Hb();this.w.Kb(this.path,a,b,Ib(d,c));return d.ra;};h.remove=function(a){y("Firebase.remove",0,1,arguments.length);Lf("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);return this.set(null,a);};h.transaction=function(a,b,c){y("Firebase.transaction",1,3,arguments.length);Lf("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(Db("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new Hb();ga(b)&&Jb(d.ra);di(this.w,this.path,a,function(a,c,g){a?d.reject(a):d.resolve(new Pb(c,g));ga(b)&&b(a,c,g);},c);return d.ra;};h.vg=function(a,b){y("Firebase.setPriority",1,2,arguments.length);Lf("Firebase.setPriority",this.path);Hf("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);var c=new Hb();this.w.Kb(this.path.m(".priority"),a,null,Ib(c,b));return c.ra;};h.push=function(a,b){y("Firebase.push",0,2,arguments.length);Lf("Firebase.push",this.path);Df("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=Yh(this.w),d=Tf(c),c=this.m(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.m(d);});c.then=r(f.then,f);c["catch"]=r(f.then,f,void 0);ga(b)&&Jb(f);}return c;};h.kb=function(){Lf("Firebase.onDisconnect",this.path);return new V(this.w,this.path);};U.prototype.child=U.prototype.m;U.prototype.set=U.prototype.set;U.prototype.update=U.prototype.update;U.prototype.setWithPriority=U.prototype.Kb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.vg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.kb;pd(U.prototype,"database",U.prototype.Pf);pd(U.prototype,"key",U.prototype.getKey);pd(U.prototype,"parent",U.prototype.getParent);pd(U.prototype,"root",U.prototype.Zf);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");try{firebase.INTERNAL.registerService("database",function(a){var b=xf.Wb(),c=a.options.databaseURL;p(c)||ed("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=fd(c),c=d.kc;wf("Invalid Firebase Database URL",d);d.path.e()||ed("Database URL must point to the root of a Firebase Database (not including a child path).");(d=x(b.nb,a.name))&&ed("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new sf(c,b.Ff,a);b.nb[a.name]=d;return d.$a;},{Reference:U,Query:X,Database:rf,enableLogging:bd,INTERNAL:Y,TEST_ACCESS:Z,ServerValue:uf});}catch(mi){ed("Failed to register the Firebase Database Service ("+mi+")");};})();(function(){var k,aa=aa||{},m=this,n=function(a){return void 0!==a;},ba=function(){},p=function(a){var b=typeof a;if("object"==b){if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function";}else return"null";}else if("function"==b&&"undefined"==typeof a.call)return"object";return b;},ca=function(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length;},q=function(a){return"string"==typeof a;},r=function(a){return"function"==p(a);},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b;},ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0,ga=function(a,b,c){return a.call.apply(a.bind,arguments);},ha=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c);};}return function(){return a.apply(b,arguments);};},t=function(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return t.apply(null,arguments);},ia=Date.now||function(){return+new Date();},u=function(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c();a.La=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g);};};var ja=function(a,b,c){function d(){ya||(ya=!0,b.apply(null,arguments));}function e(b){l=setTimeout(function(){l=null;a(f,2===N);},b);}function f(a,b){if(!ya)if(a)d.apply(null,arguments);else if(2===N||F)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===N?(N=2,c=0):c=1E3*(h+Math.random());e(c);}}function g(a){cc||(cc=!0,ya||(null!==l?(a||(N=2),clearTimeout(l),e(0)):a||(N=1)));}var h=1,l=null,F=!1,N=0,ya=!1,cc=!1;e(0);setTimeout(function(){F=!0;g(!0);},c);return g;};var ka="https://firebasestorage.googleapis.com";var v=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError";};u(v,Error);var la=function(){return new v("unknown","An unknown error occurred, please check the error payload for server response.");},ma=function(){return new v("canceled","User canceled the upload/download.");},na=function(){return new v("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");},oa=function(a,b,c){return new v("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c);},pa=function(){return new v("app-deleted","The Firebase app was deleted.");},qa=function(a,b){return new v("invalid-format","String does not match format '"+a+"': "+b);};var ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c]);},sa=function(a){var b={};ra(a,function(a,d){b[a]=d;});return b;};var w=function(a,b,c,d){this.l=a;this.f={};this.i=b;this.b={};this.c="";this.M=c;this.g=this.a=null;this.h=[200];this.j=d;};var ta={STATE_CHANGED:"state_changed"},ua={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},va=function(a){switch(a){case"running":case"pausing":case"canceling":return"running";case"paused":return"paused";case"success":return"success";case"canceled":return"canceled";case"error":return"error";default:return"error";}};var x=function(a){return n(a)&&null!==a;},wa=function(a){return"string"===typeof a||a instanceof String;},xa=function(){return"undefined"!==typeof Blob;};var za=function(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null;};za.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a;};var Aa=function(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b);};var Ba=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ba);else{var b=Error().stack;b&&(this.stack=b);}a&&(this.message=String(a));};u(Ba,Error);Ba.prototype.name="CustomError";var Ca=function(a,b,c,d,e){this.reset(a,b,c,d,e);};Ca.prototype.a=null;var Da=0;Ca.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Da++;d||ia();this.b=b;delete this.a;};var Ea=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b;},Fa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b;},Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ha=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ga.length;f++)c=Ga[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}};var Ia=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0;},Ja=function(a){if(!a)return!1;try{return!!a.$goog_Thenable;}catch(b){return!1;}};var Ka=function(a){Ka[" "](a);return a;};Ka[" "]=ba;var Ma=function(a,b){var c=La;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a);};var Na=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s");},Oa=String.prototype.trim?function(a){return a.trim();}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"");},Pa=function(a,b){return a<b?-1:a>b?1:0;};var Qa=function(a,b){this.a=a;this.b=b;};var y=function(a,b){this.bucket=a;this.path=b;},Ra=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path);},Sa=function(a){for(var b=null,c=[{ia:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,ba:{bucket:1,path:3},ha:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1));}},{ia:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,ba:{bucket:1,path:3},ha:function(a){a.path=decodeURIComponent(a.path);}}],d=0;d<c.length;d++){var e=c[d],f=e.ia.exec(a);if(f){b=f[e.ba.bucket];(f=f[e.ba.path])||(f="");b=new y(b,f);e.ha(b);break;}}if(null==b)throw new v("invalid-url","Invalid URL '"+a+"'.");return b;};var Ta=function(a,b,c){r(a)||x(b)||x(c)?(this.next=a,this.a=b||null,this.b=c||null):(this.next=a.next||null,this.a=a.error||null,this.b=a.complete||null);};var Ua={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},Va=function(a){switch(a){case"raw":case"base64":case"base64url":case"data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},Wa=function(a,b){this.data=a;this.a=b||null;},$a=function(a,b){switch(a){case"raw":return new Wa(Xa(b));case"base64":case"base64url":return new Wa(Ya(a,b));case"data_url":return a=new Za(b),a=a.a?Ya("base64",a.c):Xa(a.c),new Wa(a,new Za(b).b);}throw la();},Xa=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(127>=d)b.push(d);else if(2047>=d)b.push(192|d>>6,128|d&63);else if(55296==(d&64512)){if(c<a.length-1&&56320==(a.charCodeAt(c+1)&64512)){var e=a.charCodeAt(++c),d=65536|(d&1023)<<10|e&1023;b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63);}else b.push(239,191,189);}else 56320==(d&64512)?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|d&63);}return new Uint8Array(b);},Ya=function(a,b){switch(a){case"base64":var c=-1!==b.indexOf("-"),d=-1!==b.indexOf("_");if(c||d)throw qa(a,"Invalid character '"+(c?"-":"_")+"' found: is it base64url encoded?");break;case"base64url":c=-1!==b.indexOf("+");d=-1!==b.indexOf("/");if(c||d)throw qa(a,"Invalid character '"+(c?"+":"/")+"' found: is it base64 encoded?");b=b.replace(/-/g,"+").replace(/_/g,"/");}var e;try{e=atob(b);}catch(f){throw qa(a,"Invalid character found");}a=new Uint8Array(e.length);for(b=0;b<e.length;b++)a[b]=e.charCodeAt(b);return a;},Za=function(a){var b=a.match(/^data:([^,]+)?,/);if(null===b)throw qa("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0<=c&&b.indexOf(";base64",c)==c)?b.substring(0,b.length-7):b;}this.c=a.substring(a.indexOf(",")+1);};var bb=function(a){var b=encodeURIComponent,c="?";ra(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&";});return c=c.slice(0,-1);};var z=function(a,b,c,d,e,f){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=f;};k=z.prototype;k.oa=function(){return this.b;};k.Ka=function(){return this.h;};k.Ha=function(){return this.f;};k.Ca=function(){return this.a;};k.qa=function(){if(x(this.a)){var a=this.a.downloadURLs;return x(a)&&x(a[0])?a[0]:null;}return null;};k.Ja=function(){return this.g;};k.Fa=function(){return this.c;};var cb=function(a,b){b.unshift(a);Ba.call(this,Na.apply(null,b));b.shift();};u(cb,Ba);cb.prototype.name="AssertionError";var db=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new cb(""+e,f||[]);},A=function(a,b,c){a||db("",null,b,Array.prototype.slice.call(arguments,2));},eb=function(a,b){throw new cb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},fb=function(a,b,c){r(a)||db("Expected function but got %s: %s.",[p(a),a],b,Array.prototype.slice.call(arguments,2));};var B=function(){this.g=this.g;this.o=this.o;};B.prototype.g=!1;B.prototype.ea=function(){this.g||(this.g=!0,this.C());};B.prototype.C=function(){if(this.o)for(;this.o.length;)this.o.shift()();};var gb="closure_listenable_"+(1E6*Math.random()|0),hb=0;var ib;a:{var jb=m.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a;}}ib="";}var C=function(a){return-1!=ib.indexOf(a);};var lb=function(){};lb.prototype.a=null;var nb=function(a){var b;(b=a.a)||(b={},mb(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b;};var ob=Array.prototype.indexOf?function(a,b,c){A(null!=a.length);return Array.prototype.indexOf.call(a,b,c);}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1;},pb=Array.prototype.forEach?function(a,b,c){A(null!=a.length);Array.prototype.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);},qb=Array.prototype.filter?function(a,b,c){A(null!=a.length);return Array.prototype.filter.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];b.call(c,l,h,a)&&(e[f++]=l);}return e;},rb=Array.prototype.map?function(a,b,c){A(null!=a.length);return Array.prototype.map.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e;},sb=Array.prototype.some?function(a,b,c){A(null!=a.length);return Array.prototype.some.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1;},ub=function(a){var b;a:{b=tb;for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a;}b=-1;}return 0>b?null:q(a)?a.charAt(b):a[b];},vb=function(a){if("array"!=p(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0;},wb=function(a,b){b=ob(a,b);var c;if(c=0<=b)A(null!=a.length),Array.prototype.splice.call(a,b,1);return c;},xb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c;}return[];};var zb=new za(function(){return new yb();},function(a){a.reset();},100),Bb=function(){var a=Ab,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b;},yb=function(){this.next=this.b=this.a=null;};yb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null;};yb.prototype.reset=function(){this.next=this.b=this.a=null;};var Cb=function(a,b){this.type=a;this.a=this.target=b;this.ja=!0;};Cb.prototype.b=function(){this.ja=!1;};var Db=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.V=!!d;this.M=e;++hb;this.N=this.U=!1;},Eb=function(a){a.N=!0;a.listener=null;a.a=null;a.src=null;a.M=null;};var Fb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Gb=function(a,b){b=qb(b.split("/"),function(a){return 0<a.length;}).join("/");return 0===a.length?b:a+"/"+b;},Hb=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1);};var Ib=function(a){this.src=a;this.a={};this.b=0;},Kb=function(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=Jb(b,c,e,f);-1<h?(a=b[h],d||(a.U=!1)):(a=new Db(c,a.src,g,!!e,f),a.U=d,b.push(a));return a;},Lb=function(a,b){var c=b.type;c in a.a&&wb(a.a[c],b)&&(Eb(b),0==a.a[c].length&&(delete a.a[c],a.b--));},Jb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.N&&f.listener==b&&f.V==!!c&&f.M==d)return e;}return-1;};var Mb,Nb=function(){};u(Nb,lb);var Ob=function(a){return(a=mb(a))?new ActiveXObject(a):new XMLHttpRequest();},mb=function(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d;}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b;};Mb=new Nb();var Pb=function(a){this.a=[];if(a)a:{var b;if(a instanceof Pb){if(b=a.H(),a=a.A(),0>=this.b()){for(var c=this.a,d=0;d<b.length;d++)c.push(new Qa(b[d],a[d]));break a;}}else b=Fa(a),a=Ea(a);for(d=0;d<b.length;d++)Qb(this,b[d],a[d]);}},Qb=function(a,b,c){var d=a.a;d.push(new Qa(b,c));b=d.length-1;a=a.a;for(c=a[b];0<b;)if(d=b-1>>1,a[d].a>c.a)a[b]=a[d],b=d;else break;a[b]=c;};Pb.prototype.A=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].b);return b;};Pb.prototype.H=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].a);return b;};Pb.prototype.b=function(){return this.a.length;};var Rb=function(){this.c=[];this.a=[];},Sb=function(a){0==a.c.length&&(a.c=a.a,a.c.reverse(),a.a=[]);return a.c.pop();};Rb.prototype.b=function(){return this.c.length+this.a.length;};Rb.prototype.A=function(){for(var a=[],b=this.c.length-1;0<=b;--b)a.push(this.c[b]);for(var c=this.a.length,b=0;b<c;++b)a.push(this.a[b]);return a;};var Tb=function(a){if(a.A&&"function"==typeof a.A)return a.A();if(q(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b;}return Ea(a);},Ub=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||q(a))pb(a,b,void 0);else{var c;if(a.H&&"function"==typeof a.H)c=a.H();else if(a.A&&"function"==typeof a.A)c=void 0;else if(ca(a)||q(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e);}else c=Fa(a);for(var d=Tb(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a);}};var Vb=function(a){m.setTimeout(function(){throw a;},0);},Wb,Xb=function(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage();},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d);}};});if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a(),c={},d=c;b.port1.onmessage=function(){if(n(c.next)){c=c.next;var a=c.da;c.da=null;a();}};return function(a){d.next={da:a};d=d.next;b.port2.postMessage(0);};}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null;};document.documentElement.appendChild(b);}:function(a){m.setTimeout(a,0);};};var Yb="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""},Zb=function(){};Zb.prototype.next=function(){throw Yb;};Zb.prototype.h=function(){return this;};var $b=function(){Pb.call(this);};u($b,Pb);var ac=C("Opera"),D=C("Trident")||C("MSIE"),bc=C("Edge"),dc=C("Gecko")&&!(-1!=ib.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),ec=-1!=ib.toLowerCase().indexOf("webkit")&&!C("Edge"),fc=function(){var a=m.document;return a?a.documentMode:void 0;},gc;a:{var hc="",ic=function(){var a=ib;if(dc)return /rv\:([^\);]+)(\)|;)/.exec(a);if(bc)return /Edge\/([\d\.]+)/.exec(a);if(D)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ec)return /WebKit\/(\S+)/.exec(a);if(ac)return /(?:Version)[ \/]?(\S+)/.exec(a);}();ic&&(hc=ic?ic[1]:"");if(D){var jc=fc();if(null!=jc&&jc>parseFloat(hc)){gc=String(jc);break a;}}gc=hc;}var kc=gc,La={},E=function(a){return Ma(a,function(){for(var b=0,c=Oa(String(kc)).split("."),d=Oa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Pa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Pa(0==g[2].length,0==h[2].length)||Pa(g[2],h[2]);g=g[3];h=h[3];}while(0==b);}return 0<=b;});},lc=m.document,mc=lc&&D?fc()||("CSS1Compat"==lc.compatMode?parseInt(kc,10):5):void 0;var qc=function(a,b){nc||oc();pc||(nc(),pc=!0);var c=Ab,d=zb.get();d.set(a,b);c.b?c.b.next=d:(A(!c.a),c.a=d);c.b=d;},nc,oc=function(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);nc=function(){a.then(rc);};}else nc=function(){var a=rc;!r(m.setImmediate)||m.Window&&m.Window.prototype&&!C("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Wb||(Wb=Xb()),Wb(a)):m.setImmediate(a);};},pc=!1,Ab=new function(){this.b=this.a=null;}(),rc=function(){for(var a;a=Bb();){try{a.a.call(a.b);}catch(b){Vb(b);}Aa(zb,a);}pc=!1;};var sc;(sc=!D)||(sc=9<=Number(mc));var tc=sc,uc=D&&!E("9");!ec||E("528");dc&&E("1.9b")||D&&E("8")||ac&&E("9.5")||ec&&E("528");dc&&!E("8")||D&&E("9");var G=function(a,b){this.c={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else if(a){a instanceof G?(c=a.H(),d=a.A()):(c=Fa(a),d=Ea(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e]);}};G.prototype.b=function(){return this.f;};G.prototype.A=function(){vc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.c[this.a[b]]);return a;};G.prototype.H=function(){vc(this);return this.a.concat();};var wc=function(a,b){return Object.prototype.hasOwnProperty.call(a.c,b)?(delete a.c[b],a.f--,a.g++,a.a.length>2*a.f&&vc(a),!0):!1;},vc=function(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.c,d)&&(a.a[c++]=d);b++;}a.a.length=c;}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c;}};G.prototype.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.c,a)?this.c[a]:b;};G.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.c,a)||(this.f++,this.a.push(a),this.g++);this.c[a]=b;};G.prototype.forEach=function(a,b){for(var c=this.H(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};G.prototype.h=function(a){vc(this);var b=0,c=this.g,d=this,e=new Zb();e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Yb;var e=d.a[b++];return a?e:d.c[e];};return e;};var xc=function(a,b){Cb.call(this,a?a.type:"");this.c=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;if((b=a.relatedTarget)&&dc)try{Ka(b.nodeName);}catch(c){}this.c=a;a.defaultPrevented&&this.b();}};u(xc,Cb);xc.prototype.b=function(){xc.I.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,uc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};var H=function(a,b){this.a=0;this.i=void 0;this.c=this.b=this.f=null;this.g=this.h=!1;if(a!=ba)try{var c=this;a.call(b,function(a){yc(c,2,a);},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}yc(c,3,a);});}catch(d){yc(this,3,d);}},zc=function(){this.next=this.f=this.c=this.a=this.b=null;this.g=!1;};zc.prototype.reset=function(){this.f=this.c=this.a=this.b=null;this.g=!1;};var Ac=new za(function(){return new zc();},function(a){a.reset();},100),Bc=function(a,b,c){var d=Ac.get();d.a=a;d.c=b;d.f=c;return d;},Cc=function(a){if(a instanceof H)return a;var b=new H(ba);yc(b,2,a);return b;},Dc=function(a){return new H(function(b,c){c(a);});};H.prototype.then=function(a,b,c){null!=a&&fb(a,"opt_onFulfilled should be a function.");null!=b&&fb(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Ec(this,r(a)?a:null,r(b)?b:null,c);};Ia(H);H.prototype.l=function(a,b){return Ec(this,null,a,b);};var Gc=function(a,b){a.b||2!=a.a&&3!=a.a||Fc(a);A(null!=b.a);a.c?a.c.next=b:a.b=b;a.c=b;},Ec=function(a,b,c,d){var e=Bc(null,null,null);e.b=new H(function(a,g){e.a=b?function(c){try{var e=b.call(d,c);a(e);}catch(F){g(F);}}:a;e.c=c?function(b){try{var e=c.call(d,b);a(e);}catch(F){g(F);}}:g;});e.b.f=a;Gc(a,e);return e.b;};H.prototype.o=function(a){A(1==this.a);this.a=0;yc(this,2,a);};H.prototype.m=function(a){A(1==this.a);this.a=0;yc(this,3,a);};var yc=function(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;var d;a:{var e=c,f=a.o,g=a.m;if(e instanceof H)null!=f&&fb(f,"opt_onFulfilled should be a function."),null!=g&&fb(g,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Gc(e,Bc(f||ba,g||null,a)),d=!0;else if(Ja(e))e.then(f,g,a),d=!0;else{if(da(e))try{var h=e.then;if(r(h)){Hc(e,h,f,g,a);d=!0;break a;}}catch(l){g.call(a,l);d=!0;break a;}d=!1;}}d||(a.i=c,a.a=b,a.f=null,Fc(a),3!=b||Ic(a,c));}},Hc=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a));},h=function(a){f||(f=!0,d.call(e,a));};try{b.call(a,g,h);}catch(l){h(l);}},Fc=function(a){a.h||(a.h=!0,qc(a.j,a));},Jc=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.c=null);null!=b&&A(null!=b.a);return b;};H.prototype.j=function(){for(var a;a=Jc(this);){var b=this.a,c=this.i;if(3==b&&a.c&&!a.g){var d;for(d=this;d&&d.g;d=d.f)d.g=!1;}if(a.b)a.b.f=null,Kc(a,b,c);else try{a.g?a.a.call(a.f):Kc(a,b,c);}catch(e){Lc.call(null,e);}Aa(Ac,a);}this.h=!1;};var Kc=function(a,b,c){2==b?a.a.call(a.f,c):a.c&&a.c.call(a.f,c);},Ic=function(a,b){a.g=!0;qc(function(){a.g&&Lc.call(null,b);});},Lc=Vb;var Nc=function(a){this.a=new G();if(a){a=Tb(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];this.a.set(Mc(d),d);}}},Mc=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[ea]||(a[ea]=++fa)):b.substr(0,1)+a;};Nc.prototype.b=function(){return this.a.b();};Nc.prototype.A=function(){return this.a.A();};Nc.prototype.h=function(){return this.a.h(!1);};var Oc=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);Cc(!0).then(function(){a.apply(null,b);});};};var Pc="closure_lm_"+(1E6*Math.random()|0),Qc={},Rc=0,Sc=function(a,b,c,d,e){if("array"==p(b)){for(var f=0;f<b.length;f++)Sc(a,b[f],c,d,e);return null;}c=Tc(c);a&&a[gb]?(Uc(a),a=Kb(a.b,String(b),c,!1,d,e)):a=Vc(a,b,c,!1,d,e);return a;},Vc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=Wc(a);h||(a[Pc]=h=new Ib(a));c=Kb(h,b,c,d,e,f);if(c.a)return c;d=Xc();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Yc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Rc++;return c;},Xc=function(){var a=Zc,b=tc?function(c){return a.call(b.src,b.listener,c);}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c;};return b;},$c=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)$c(a,b[f],c,d,e);else c=Tc(c),a&&a[gb]?Kb(a.b,String(b),c,!0,d,e):Vc(a,b,c,!0,d,e);},ad=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)ad(a,b[f],c,d,e);else(c=Tc(c),a&&a[gb])?(a=a.b,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Jb(f,c,d,e),-1<c&&(Eb(f[c]),A(null!=f.length),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=Wc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Jb(b,c,!!d,e)),(c=-1<a?b[a]:null)&&bd(c));},bd=function(a){if("number"!=typeof a&&a&&!a.N){var b=a.src;if(b&&b[gb])Lb(b.b,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.V):b.detachEvent&&b.detachEvent(Yc(c),d);Rc--;(c=Wc(b))?(Lb(c,a),0==c.b&&(c.src=null,b[Pc]=null)):Eb(a);}}},Yc=function(a){return a in Qc?Qc[a]:Qc[a]="on"+a;},dd=function(a,b,c,d){var e=!0;if(a=Wc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.V==c&&!f.N&&(f=cd(f,d),e=e&&!1!==f);}return e;},cd=function(a,b){var c=a.listener,d=a.M||a.src;a.U&&bd(a);return c.call(d,b);},Zc=function(a,b){if(a.N)return!0;if(!tc){if(!b)a:{b=["window","event"];for(var c=m,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a;}b=c;}d=b;b=new xc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a;}catch(g){e=!0;}if(e||void 0==d.returnValue)d.returnValue=!0;}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.a=d[e];var f=dd(d[e],a,!0,b),c=c&&f;}for(e=0;e<d.length;e++)b.a=d[e],f=dd(d[e],a,!1,b),c=c&&f;}return c;}return cd(a,new xc(b,this));},Wc=function(a){a=a[Pc];return a instanceof Ib?a:null;},ed="__closure_events_fn_"+(1E9*Math.random()>>>0),Tc=function(a){A(a,"Listener can not be null.");if(r(a))return a;A(a.handleEvent,"An object listener must have handleEvent method.");a[ed]||(a[ed]=function(b){return a.handleEvent(b);});return a[ed];};var I=function(a,b){B.call(this);this.m=a||0;this.f=b||10;if(this.m>this.f)throw Error("[goog.structs.Pool] Min can not be greater than max");this.a=new Rb();this.c=new Nc();this.j=null;this.T();};u(I,B);I.prototype.X=function(){var a=ia();if(!(null!=this.j&&0>a-this.j)){for(var b;0<this.a.b()&&(b=Sb(this.a),!this.l(b));)this.T();!b&&this.b()<this.f&&(b=this.i());b&&(this.j=a,this.c.a.set(Mc(b),b));return b;}};var gd=function(a){var b=fd;wc(b.c.a,Mc(a))&&b.$(a);};I.prototype.$=function(a){wc(this.c.a,Mc(a));this.l(a)&&this.b()<this.f?this.a.a.push(a):hd(a);};I.prototype.T=function(){for(var a=this.a;this.b()<this.m;){var b=this.i();a.a.push(b);}for(;this.b()>this.f&&0<this.a.b();)hd(Sb(a));};I.prototype.i=function(){return{};};var hd=function(a){if("function"==typeof a.ea)a.ea();else for(var b in a)a[b]=null;};I.prototype.l=function(a){return"function"==typeof a.pa?a.pa():!0;};I.prototype.b=function(){return this.a.b()+this.c.b();};I.prototype.C=function(){I.I.C.call(this);if(0<this.c.b())throw Error("[goog.structs.Pool] Objects not released");delete this.c;for(var a=this.a;0!=a.c.length||0!=a.a.length;)hd(Sb(a));delete this.a;};/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/var id=function(a,b){this.c=[];this.m=b||null;this.a=this.h=!1;this.b=void 0;this.j=this.g=!1;this.f=0;this.i=null;this.o=0;};id.prototype.l=function(a,b){this.g=!1;this.h=!0;this.b=b;this.a=!a;jd(this);};var kd=function(a,b,c){A(!a.j,"Blocking Deferreds can not be re-used");a.c.push([b,c,void 0]);a.h&&jd(a);};id.prototype.then=function(a,b,c){var d,e,f=new H(function(a,b){d=a;e=b;});kd(this,d,function(a){e(a);});return f.then(a,b,c);};Ia(id);var ld=function(a){return sb(a.c,function(a){return r(a[1]);});},jd=function(a){if(a.f&&a.h&&ld(a)){var b=a.f,c=md[b];c&&(m.clearTimeout(c.a),delete md[b]);a.f=0;}a.i&&(a.i.o--,delete a.i);for(var b=a.b,d=c=!1;a.c.length&&!a.g;){var e=a.c.shift(),f=e[0],g=e[1],e=e[2];if(f=a.a?g:f)try{var h=f.call(e||a.m,b);n(h)&&(a.a=a.a&&(h==b||h instanceof Error),a.b=b=h);if(Ja(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.g=!0;}catch(l){b=l,a.a=!0,ld(a)||(c=!0);}}a.b=b;d&&(h=t(a.l,a,!0),d=t(a.l,a,!1),b instanceof id?(kd(b,h,d),b.j=!0):b.then(h,d));c&&(b=new nd(b),md[b.a]=b,a.f=b.a);},nd=function(a){this.a=m.setTimeout(t(this.c,this),0);this.b=a;};nd.prototype.c=function(){A(md[this.a],"Cannot throw an error that is not scheduled.");delete md[this.a];throw this.b;};var md={};var od=function(a){this.f=a;this.b=this.c=this.a=null;},pd=function(a,b){this.name=a;this.value=b;};pd.prototype.toString=function(){return this.name;};var qd=new pd("SEVERE",1E3),rd=new pd("CONFIG",700),sd=new pd("FINE",500),td=function(a){if(a.c)return a.c;if(a.a)return td(a.a);eb("Root logger has no level set.");return null;};od.prototype.log=function(a,b,c){if(a.value>=td(this).value)for(r(b)&&(b=b()),a=new Ca(a,String(b),this.f),c&&(a.a=c),c="log:"+a.b,m.console&&(m.console.timeStamp?m.console.timeStamp(c):m.console.markTimeline&&m.console.markTimeline(c)),m.msWriteProfilerMark&&m.msWriteProfilerMark(c),c=this;c;)c=c.a;};var ud={},vd=null,wd=function(a){vd||(vd=new od(""),ud[""]=vd,vd.c=rd);var b;if(!(b=ud[a])){b=new od(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=wd(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;ud[a]=b;}return b;};var xd=function(){B.call(this);this.b=new Ib(this);this.Z=this;this.G=null;};u(xd,B);xd.prototype[gb]=!0;xd.prototype.removeEventListener=function(a,b,c,d){ad(this,a,b,c,d);};var J=function(a,b){Uc(a);var c,d=a.G;if(d){c=[];for(var e=1;d;d=d.G)c.push(d),A(1E3>++e,"infinite loop");}a=a.Z;d=b.type||b;q(b)?b=new Cb(b,a):b instanceof Cb?b.target=b.target||a:(e=b,b=new Cb(d,a),Ha(b,e));var e=!0,f;if(c)for(var g=c.length-1;0<=g;g--)f=b.a=c[g],e=yd(f,d,!0,b)&&e;f=b.a=a;e=yd(f,d,!0,b)&&e;e=yd(f,d,!1,b)&&e;if(c)for(g=0;g<c.length;g++)f=b.a=c[g],e=yd(f,d,!1,b)&&e;};xd.prototype.C=function(){xd.I.C.call(this);if(this.b){var a=this.b,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Eb(d[e]);delete a.a[c];a.b--;}}this.G=null;};var yd=function(a,b,c,d){b=a.b.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.N&&g.V==c){var h=g.listener,l=g.M||g.src;g.U&&Lb(a.b,g);e=!1!==h.call(l,d)&&e;}}return e&&0!=d.ja;},Uc=function(a){A(a.b,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");};var K=function(a,b){this.h=new $b();I.call(this,a,b);};u(K,I);k=K.prototype;k.X=function(a,b){if(!a)return K.I.X.call(this);Qb(this.h,n(b)?b:100,a);this.aa();};k.aa=function(){for(var a=this.h;0<a.b();){var b=this.X();if(b){var c;var d=a,e=d.a,f=e.length;c=e[0];if(0>=f)c=void 0;else{if(1==f)vb(e);else{e[0]=e.pop();for(var e=0,d=d.a,f=d.length,g=d[e];e<f>>1;){var h=2*e+1,l=2*e+2,h=l<f&&d[l].a<d[h].a?l:h;if(d[h].a>g.a)break;d[e]=d[h];e=h;}d[e]=g;}c=c.b;}c.apply(this,[b]);}else break;}};k.$=function(a){K.I.$.call(this,a);this.aa();};k.T=function(){K.I.T.call(this);this.aa();};k.C=function(){K.I.C.call(this);m.clearTimeout(void 0);vb(this.h.a);this.h=null;};var L=function(a,b){a&&a.log(sd,b,void 0);};var zd=function(a,b,c){if(r(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0);};var M=function(a){xd.call(this);this.K=new G();this.B=a||null;this.c=!1;this.w=this.a=null;this.O=this.l="";this.J=0;this.h="";this.f=this.F=this.j=this.D=!1;this.i=0;this.m=null;this.S="";this.u=this.ca=this.Y=!1;};u(M,xd);var Ad=M.prototype,Bd=wd("goog.net.XhrIo");Ad.v=Bd;var Cd=/^https?$/i,Dd=["POST","PUT"];M.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.l+"; newUri="+a);b=b?b.toUpperCase():"GET";this.l=a;this.h="";this.J=0;this.O=b;this.D=!1;this.c=!0;this.a=this.B?Ob(this.B):Ob(Mb);this.w=this.B?nb(this.B):nb(Mb);this.a.onreadystatechange=t(this.R,this);this.ca&&"onprogress"in this.a&&(this.a.onprogress=t(function(a){this.P(a,!0);},this),this.a.upload&&(this.a.upload.onprogress=t(this.P,this)));try{L(this.v,O(this,"Opening Xhr")),this.F=!0,this.a.open(b,String(a),!0),this.F=!1;}catch(f){L(this.v,O(this,"Error opening Xhr: "+f.message));Ed(this,f);return;}a=c||"";var e=new G(this.K);d&&Ub(d,function(a,b){e.set(b,a);});d=ub(e.H());c=m.FormData&&a instanceof m.FormData;!(0<=ob(Dd,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a);},this);this.S&&(this.a.responseType=this.S);"withCredentials"in this.a&&this.a.withCredentials!==this.Y&&(this.a.withCredentials=this.Y);try{Fd(this),0<this.i&&(this.u=Gd(this.a),L(this.v,O(this,"Will abort after "+this.i+"ms if incomplete, xhr2 "+this.u)),this.u?(this.a.timeout=this.i,this.a.ontimeout=t(this.L,this)):this.m=zd(this.L,this.i,this)),L(this.v,O(this,"Sending request")),this.j=!0,this.a.send(a),this.j=!1;}catch(f){L(this.v,O(this,"Send error: "+f.message)),Ed(this,f);}};var Gd=function(a){return D&&E(9)&&"number"==typeof a.timeout&&n(a.ontimeout);},tb=function(a){return"content-type"==a.toLowerCase();};M.prototype.L=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.i+"ms, aborting",this.J=8,L(this.v,O(this,this.h)),J(this,"timeout"),Hd(this,8));};var Ed=function(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;a.J=5;Id(a);Kd(a);},Id=function(a){a.D||(a.D=!0,J(a,"complete"),J(a,"error"));},Hd=function(a,b){a.a&&a.c&&(L(a.v,O(a,"Aborting")),a.c=!1,a.f=!0,a.a.abort(),a.f=!1,a.J=b||7,J(a,"complete"),J(a,"abort"),Kd(a));};M.prototype.C=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Kd(this,!0));M.I.C.call(this);};M.prototype.R=function(){this.g||(this.F||this.j||this.f?Ld(this):this.la());};M.prototype.la=function(){Ld(this);};var Ld=function(a){if(a.c&&"undefined"!=typeof aa)if(a.w[1]&&4==Md(a)&&2==P(a))L(a.v,O(a,"Local request error detected and ignored"));else if(a.j&&4==Md(a))zd(a.R,0,a);else if(J(a,"readystatechange"),4==Md(a)){L(a.v,O(a,"Request complete"));a.c=!1;try{if(Nd(a))J(a,"complete"),J(a,"success");else{a.J=6;var b;try{b=2<Md(a)?a.a.statusText:"";}catch(c){L(a.v,"Can not get status: "+c.message),b="";}a.h=b+" ["+P(a)+"]";Id(a);}}finally{Kd(a);}}};M.prototype.P=function(a,b){A("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");J(this,Od(a,"progress"));J(this,Od(a,b?"downloadprogress":"uploadprogress"));};var Od=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total};},Kd=function(a,b){if(a.a){Fd(a);var c=a.a,d=a.w[0]?ba:null;a.a=null;a.w=null;b||J(a,"ready");try{c.onreadystatechange=d;}catch(e){(a=a.v)&&a.log(qd,"Problem encountered resetting onreadystatechange: "+e.message,void 0);}}},Fd=function(a){a.a&&a.u&&(a.a.ontimeout=null);"number"==typeof a.m&&(m.clearTimeout(a.m),a.m=null);},Nd=function(a){var b=P(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1;}if(!c){if(b=0===b)a=String(a.l).match(Fb)[1]||null,!a&&m.self&&m.self.location&&(a=m.self.location.protocol,a=a.substr(0,a.length-1)),b=!Cd.test(a?a.toLowerCase():"");c=b;}return c;},Md=function(a){return a.a?a.a.readyState:0;},P=function(a){try{return 2<Md(a)?a.a.status:-1;}catch(b){return-1;}},Pd=function(a){try{return a.a?a.a.responseText:"";}catch(b){return L(a.v,"Can not get responseText: "+b.message),"";}},Qd=function(a,b){return a.a&&4==Md(a)?a.a.getResponseHeader(b):void 0;},O=function(a,b){return b+" ["+a.O+" "+a.l+" "+P(a)+"]";};var Rd=function(a,b,c,d){this.u=a;this.w=!!d;K.call(this,b,c);};u(Rd,K);Rd.prototype.i=function(){var a=new M(),b=this.u;b&&b.forEach(function(b,d){a.K.set(d,b);});this.w&&(a.Y=!0);return a;};Rd.prototype.l=function(a){return!a.g&&!a.a;};var fd=new Rd();var Td=function(a,b,c,d,e,f,g,h,l,F){this.K=a;this.F=b;this.w=c;this.m=d;this.G=e.slice();this.l=this.o=this.f=this.c=null;this.h=this.i=!1;this.u=f;this.j=g;this.g=l;this.L=F;this.D=h;var N=this;this.B=new H(function(a,b){N.o=a;N.l=b;Sd(N);});},Ud=function(a,b,c){this.b=a;this.c=b;this.a=!!c;},Sd=function(a){function b(a,b){b?a(!1,new Ud(!1,null,!0)):fd.X(function(b){b.Y=d.L;d.c=b;var c=null;null!==d.g&&(b.ca=!0,c=Sc(b,"uploadprogress",function(a){d.g(a.loaded,a.lengthComputable?a.total:-1);}),b.ca=null!==d.g);b.send(d.K,d.F,d.m,d.w);$c(b,"complete",function(b){null!==c&&bd(c);d.c=null;b=b.target;var f=6===b.J&&100<=P(b),f=Nd(b)||f,g=P(b);!f||500<=g&&600>g||429===g?(f=7===b.J,gd(b),a(!1,new Ud(!1,null,f))):(f=0<=ob(d.G,g),a(!0,new Ud(f,b)));});});}function c(a,b){var c=d.o;a=d.l;var h=b.c;if(b.b)try{var l=d.u(h,Pd(h));n(l)?c(l):c();}catch(F){a(F);}else null!==h?(b=la(),l=Pd(h),b.serverResponse=l,d.j?a(d.j(h,b)):a(b)):(b=b.a?d.h?pa():ma():new v("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),a(b));gd(h);}var d=a;a.i?c(0,new Ud(!1,null,!0)):a.f=ja(b,c,a.D);};Td.prototype.a=function(){return this.B;};Td.prototype.b=function(a){this.i=!0;this.h=a||!1;null!==this.f&&(0,this.f)(!1);null!==this.c&&Hd(this.c);};var Vd=function(a,b,c){var d=bb(a.f),d=a.l+d,e=a.b?sa(a.b):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new Td(d,a.i,e,a.c,a.h,a.M,a.a,a.j,a.g,c);};var Wd=function(a){var b=m.BlobBuilder||m.WebKitBlobBuilder;if(n(b)){for(var b=new b(),c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob();}b=xb(arguments);c=m.BlobBuilder||m.WebKitBlobBuilder;if(n(c)){for(var c=new c(),d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0);}else if(n(m.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b;},Xd=function(a,b,c){n(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,c):a.slice?dc&&!E("13.0")||ec&&!E("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null;};var Q=function(a,b){xa()&&a instanceof Blob?(this.s=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.s=new Uint8Array(a):(this.s=new Uint8Array(a.byteLength),this.s.set(new Uint8Array(a))),b=this.s.length):(b?this.s=a:(this.s=new Uint8Array(a.length),this.s.set(a)),b=a.length),a="");this.a=b;this.b=a;};Q.prototype.type=function(){return this.b;};Q.prototype.slice=function(a,b){if(xa()&&this.s instanceof Blob)return a=Xd(this.s,a,b),null===a?null:new Q(a);a=new Uint8Array(this.s.buffer,a,b-a);return new Q(a,!0);};var Yd=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(xa())return b=rb(b,function(a){return a instanceof Q?a.s:a;}),new Q(Wd.apply(null,b));var b=rb(b,function(a){return wa(a)?$a("raw",a).data.buffer:a.s.buffer;}),c=0;pb(b,function(a){c+=a.byteLength;});var d=new Uint8Array(c),e=0;pb(b,function(a){a=new Uint8Array(a);for(var b=0;b<a.length;b++)d[e++]=a[b];});return new Q(d,!0);};var Zd=function(a){this.c=Dc(a);};Zd.prototype.a=function(){return this.c;};Zd.prototype.b=function(){};var $d=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER;},ae=function(a,b){function c(){delete e.a[d];}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c);},be=function(a){ra(a.a,function(a,c){c&&c.b(!0);});a.a={};};var ce=function(a,b,c,d){this.a=a;this.g=null;if(null!==this.a&&(a=this.a.options,x(a))){a=a.storageBucket||null;if(null==a)a=null;else{var e=null;try{e=Sa(a);}catch(f){}if(null!==e){if(""!==e.path)throw new v("invalid-default-bucket","Invalid default bucket '"+a+"'.");a=e.bucket;}}this.g=a;}this.l=b;this.j=c;this.i=d;this.c=12E4;this.b=6E4;this.h=new $d();this.f=!1;},de=function(a){return null!==a.a&&x(a.a.INTERNAL)&&x(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return x(a)?a.accessToken:null;},function(){return null;}):Cc(null);};ce.prototype.bucket=function(){if(this.f)throw pa();return this.g;};var R=function(a,b,c){if(a.f)return new Zd(pa());b=a.j(b,c,null===a.a);ae(a.h,b);return b;};var ee=function(a,b){return b;},S=function(a,b,c,d){this.c=a;this.b=b||a;this.f=!!c;this.a=d||ee;},fe=null,ge=function(){if(fe)return fe;var a=[];a.push(new S("bucket"));a.push(new S("generation"));a.push(new S("metageneration"));a.push(new S("name","fullPath",!0));var b=new S("name");b.a=function(a,b){return!wa(b)||2>b.length?b:Hb(b);};a.push(b);b=new S("size");b.a=function(a,b){return x(b)?+b:b;};a.push(b);a.push(new S("timeCreated"));a.push(new S("updated"));a.push(new S("md5Hash",null,!0));a.push(new S("cacheControl",null,!0));a.push(new S("contentDisposition",null,!0));a.push(new S("contentEncoding",null,!0));a.push(new S("contentLanguage",null,!0));a.push(new S("contentType",null,!0));a.push(new S("metadata","customMetadata",!0));a.push(new S("downloadTokens","downloadURLs",!1,function(a,b){if(!(wa(b)&&0<b.length))return[];var e=encodeURIComponent;return rb(b.split(","),function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+e(a.bucket)+"/o/"+e(d));b=bb({alt:"media",token:b});return d+b;});}));return fe=a;},he=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.l(b,new y(a.bucket,a.fullPath));}});},ie=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var f=b[e];f.f&&(c[f.c]=a[f.b]);}return JSON.stringify(c);},je=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b&&"object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}};var T=function(a,b,c){for(var d=b.length,e=b.length,f=0;f<b.length;f++)if(b[f].b){d=f;break;}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new v("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(f=0;f<c.length;f++)try{b[f].a(c[f]);}catch(g){if(g instanceof Error)throw oa(f,a,g.message);throw oa(f,a,g);}},U=function(a,b){var c=this;this.a=function(b){c.b&&!n(b)||a(b);};this.b=!!b;},ke=function(a,b){return function(c){a(c);b(c);};},le=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=ke(c,a):d=c;return new U(d,b);},me=function(){return new U(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||xa()&&a instanceof Blob))throw"Expected Blob or File.";});},ne=function(){return new U(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";});},oe=function(a,b){return new U(function(b){if(!(null===b||x(b)&&b instanceof Object))throw"Expected an Object.";x(a)&&a(b);},b);},pe=function(){return new U(function(a){if(null!==a&&!r(a))throw"Expected a Function.";},!0);};var qe=function(a){if(!a)throw la();},re=function(a,b){return function(c,d){a:{var e;try{e=JSON.parse(d);}catch(h){c=null;break a;}c=da(e)?e:null;}if(null===c)c=null;else{d={type:"file"};e=b.length;for(var f=0;f<e;f++){var g=b[f];d[g.b]=g.a(d,c[g.c]);}he(d,a);c=d;}qe(null!==c);return c;};},se=function(a){return function(b,c){b=401===P(b)?new v("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===P(b)?new v("quota-exceeded","Quota for bucket '"+a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===P(b)?new v("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b;};},te=function(a){var b=se(a);return function(c,d){var e=b(c,d);404===P(c)&&(e=new v("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e;};},ue=function(a,b,c){var d=Ra(b);a=new w(ka+"/v0"+d,"GET",re(a,c),a.c);a.a=te(b);return a;},ve=function(a,b){var c=Ra(b);a=new w(ka+"/v0"+c,"DELETE",function(){},a.c);a.h=[200,204];a.a=te(b);return a;},we=function(a,b,c){c=c?sa(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&&b.type()||"application/octet-stream",c.contentType=a);return c;},xe=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g={"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var l=0;2>l;l++)h+=Math.random().toString().slice(2);g["Content-Type"]="multipart/related; boundary="+h;e=we(b,d,e);l=ie(e,c);d=Yd("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");if(null===d)throw na();a=new w(ka+"/v0"+f,"POST",re(a,c),a.b);a.f={name:e.fullPath};a.b=g;a.c=d.s;a.a=se(b);return a;},ye=function(a,b,c,d){this.a=a;this.total=b;this.b=!!c;this.c=d||null;},ze=function(a,b){var c;try{c=Qd(a,"X-Goog-Upload-Status");}catch(d){qe(!1);}a=0<=ob(b||["active"],c);qe(a);return c;},Ae=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g=we(b,d,e);e={name:g.fullPath};f=ka+"/v0"+f;d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.a,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"};c=ie(g,c);a=new w(f,"POST",function(a){ze(a);var b;try{b=Qd(a,"X-Goog-Upload-URL");}catch(c){qe(!1);}qe(wa(b));return b;},a.b);a.f=e;a.b=d;a.c=c;a.a=se(b);return a;},Be=function(a,b,c,d){a=new w(c,"POST",function(a){var b=ze(a,["active","final"]),c;try{c=Qd(a,"X-Goog-Upload-Size-Received");}catch(h){qe(!1);}a=c;isFinite(a)&&(a=String(a));a=q(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;qe(!isNaN(a));return new ye(a,d.a,"final"===b);},a.b);a.b={"X-Goog-Upload-Command":"query"};a.a=se(b);return a;},Ce=function(a,b,c,d,e,f){var g=new ye(0,0);f?(g.a=f.a,g.total=f.total):(g.a=0,g.total=d.a);if(d.a!==g.total)throw new v("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var h=f=g.total-g.a,h=Math.min(h,262144),l=g.a;f={"X-Goog-Upload-Command":h===f?"upload, finalize":"upload","X-Goog-Upload-Offset":g.a};l=d.slice(l,l+h);if(null===l)throw na();c=new w(c,"POST",function(a,c){var f=ze(a,["active","final"]),l=g.a+h,Jd=d.a,ab;"final"===f?ab=re(b,e)(a,c):ab=null;return new ye(l,Jd,"final"===f,ab);},b.b);c.b=f;c.c=l.s;c.g=null;c.a=se(a);return c;};var W=function(a,b,c,d,e,f){this.K=a;this.c=b;this.i=c;this.f=e;this.h=f||null;this.o=d;this.j=0;this.G=this.m=!1;this.B=[];this.Z=262144<this.f.a;this.b="running";this.a=this.u=this.g=null;var g=this;this.W=function(a){g.a=null;"storage/canceled"===a.code?(g.m=!0,De(g)):(g.g=a,V(g,"error"));};this.S=function(a){g.a=null;"storage/canceled"===a.code?De(g):(g.g=a,V(g,"error"));};this.w=this.l=null;this.F=new H(function(a,b){g.l=a;g.w=b;Ee(g);});this.F.then(null,function(){});},Ee=function(a){"running"===a.b&&null===a.a&&(a.Z?null===a.u?Fe(a):a.m?Ge(a):a.G?He(a):Ie(a):Je(a));},Ke=function(a,b){de(a.c).then(function(c){switch(a.b){case"running":b(c);break;case"canceling":V(a,"canceled");break;case"pausing":V(a,"paused");}});},Fe=function(a){Ke(a,function(b){var c=Ae(a.c,a.i,a.o,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.u=b;a.m=!1;De(a);},this.W);});},Ge=function(a){var b=a.u;Ke(a,function(c){var d=Be(a.c,a.i,b,a.f);a.a=R(a.c,d,c);a.a.a().then(function(b){a.a=null;Le(a,b.a);a.m=!1;b.b&&(a.G=!0);De(a);},a.W);});},Ie=function(a){var b=new ye(a.j,a.f.a),c=a.u;Ke(a,function(d){var e;try{e=Ce(a.i,a.c,c,a.f,a.o,b);}catch(f){a.g=f;V(a,"error");return;}a.a=R(a.c,e,d);a.a.a().then(function(b){a.a=null;Le(a,b.a);b.b?(a.h=b.c,V(a,"success")):De(a);},a.W);});},He=function(a){Ke(a,function(b){var c=ue(a.c,a.i,a.o);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;V(a,"success");},a.S);});},Je=function(a){Ke(a,function(b){var c=xe(a.c,a.i,a.o,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;Le(a,a.f.a);V(a,"success");},a.W);});},Le=function(a,b){var c=a.j;a.j=b;a.j>c&&Me(a);},V=function(a,b){if(a.b!==b)switch(b){case"canceling":a.b=b;null!==a.a&&a.a.b();break;case"pausing":a.b=b;null!==a.a&&a.a.b();break;case"running":var c="paused"===a.b;a.b=b;c&&(Me(a),Ee(a));break;case"paused":a.b=b;Me(a);break;case"canceled":a.g=ma();a.b=b;Me(a);break;case"error":a.b=b;Me(a);break;case"success":a.b=b,Me(a);}},De=function(a){switch(a.b){case"pausing":V(a,"paused");break;case"canceling":V(a,"canceled");break;case"running":Ee(a);}};W.prototype.D=function(){return new z(this.j,this.f.a,va(this.b),this.h,this,this.K);};W.prototype.O=function(a,b,c,d){function e(a){try{g(a);return;}catch(b){}try{if(h(a),!(n(a.next)||n(a.error)||n(a.complete)))throw"";}catch(b){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function f(a){return function(b,c,d){null!==a&&T("on",a,arguments);var e=new Ta(b,c,d);Ne(l,e);return function(){wb(l.B,e);};};}var g=pe().a,h=oe(null,!0).a;T("on",[le(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";}),oe(e,!0),pe(),pe()],arguments);var l=this,F=[oe(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a);}),pe(),pe()];return n(b)||n(c)||n(d)?f(null)(b,c,d):f(F);};W.prototype.then=function(a,b){return this.F.then(a,b);};var Ne=function(a,b){a.B.push(b);Oe(a,b);},Me=function(a){Pe(a);var b=xb(a.B);pb(b,function(b){Oe(a,b);});},Pe=function(a){if(null!==a.l){var b=!0;switch(va(a.b)){case"success":Oc(a.l.bind(null,a.D()))();break;case"canceled":case"error":Oc(a.w.bind(null,a.g))();break;default:b=!1;}b&&(a.l=null,a.w=null);}},Oe=function(a,b){switch(va(a.b)){case"running":case"paused":null!==b.next&&Oc(b.next.bind(b,a.D()))();break;case"success":null!==b.b&&Oc(b.b.bind(b))();break;case"canceled":case"error":null!==b.a&&Oc(b.a.bind(b,a.g))();break;default:null!==b.a&&Oc(b.a.bind(b,a.g))();}};W.prototype.R=function(){T("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&V(this,"running");return a;};W.prototype.P=function(){T("pause",[],arguments);var a="running"===this.b;a&&V(this,"pausing");return a;};W.prototype.L=function(){T("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&V(this,"canceling");return a;};var X=function(a,b){this.b=a;if(b)this.a=b instanceof y?b:Sa(b);else if(a=a.bucket(),null!==a)this.a=new y(a,"");else throw new v("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");};X.prototype.toString=function(){T("toString",[],arguments);return"gs://"+this.a.bucket+"/"+this.a.path;};var Qe=function(a,b){return new X(a,b);};k=X.prototype;k.fa=function(a){T("child",[le()],arguments);var b=Gb(this.a.path,a);return Qe(this.b,new y(this.a.bucket,b));};k.Ea=function(){var a;a=this.a.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b);}return null===a?null:Qe(this.b,new y(this.a.bucket,a));};k.Ga=function(){return Qe(this.b,new y(this.a.bucket,""));};k.na=function(){return this.a.bucket;};k.za=function(){return this.a.path;};k.Da=function(){return Hb(this.a.path);};k.Ia=function(){return this.b.i;};k.sa=function(a,b){T("put",[me(),new U(je,!0)],arguments);Re(this,"put");return new W(this,this.b,this.a,ge(),new Q(a),b);};k.ta=function(a,b,c){T("putString",[le(),le(Va,!0),new U(je,!0)],arguments);Re(this,"putString");var d=$a(x(b)?b:"raw",a),e=c?sa(c):{};e.contentType=d.a;return new W(this,this.b,this.a,ge(),new Q(d.data,!0),e);};k.delete=function(){T("delete",[],arguments);Re(this,"delete");var a=this;return de(this.b).then(function(b){var c=ve(a.b,a.a);return R(a.b,c,b).a();});};k.ga=function(){T("getMetadata",[],arguments);Re(this,"getMetadata");var a=this;return de(this.b).then(function(b){var c=ue(a.b,a.a,ge());return R(a.b,c,b).a();});};k.ua=function(a){T("updateMetadata",[new U(je,void 0)],arguments);Re(this,"updateMetadata");var b=this;return de(this.b).then(function(c){var d=b.b,e=b.a,f=a,g=ge(),h=Ra(e),h=ka+"/v0"+h,f=ie(f,g),d=new w(h,"PATCH",re(d,g),d.c);d.b={"Content-Type":"application/json; charset=utf-8"};d.c=f;d.a=te(e);return R(b.b,d,c).a();});};k.ra=function(){T("getDownloadURL",[],arguments);Re(this,"getDownloadURL");return this.ga().then(function(a){a=a.downloadURLs[0];if(x(a))return a;throw new v("no-download-url","The given file does not have any download URLs.");});};var Re=function(a,b){if(""===a.a.path)throw new v("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a){this.a=new ce(a,function(a,c){return new X(a,c);},Vd,this);this.b=a;this.c=new Se(this);};k=Y.prototype;k.va=function(a){T("ref",[le(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);var b=new X(this.a);return n(a)?b.fa(a):b;};k.wa=function(a){T("refFromURL",[le(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{Sa(a);}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new X(this.a,a);};k.Ba=function(){return this.a.b;};k.ya=function(a){T("setMaxUploadRetryTime",[ne()],arguments);this.a.b=a;};k.Aa=function(){return this.a.c;};k.xa=function(a){T("setMaxOperationRetryTime",[ne()],arguments);this.a.c=a;};k.ma=function(){return this.b;};k.ka=function(){return this.c;};var Se=function(a){this.a=a;};Se.prototype.delete=function(){var a=this.a.a;a.f=!0;a.a=null;be(a.h);};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c});};X.prototype.toString=X.prototype.toString;X.prototype.child=X.prototype.fa;X.prototype.put=X.prototype.sa;X.prototype.putString=X.prototype.ta;X.prototype["delete"]=X.prototype.delete;X.prototype.getMetadata=X.prototype.ga;X.prototype.updateMetadata=X.prototype.ua;X.prototype.getDownloadURL=X.prototype.ra;Z(X.prototype,"parent",X.prototype.Ea);Z(X.prototype,"root",X.prototype.Ga);Z(X.prototype,"bucket",X.prototype.na);Z(X.prototype,"fullPath",X.prototype.za);Z(X.prototype,"name",X.prototype.Da);Z(X.prototype,"storage",X.prototype.Ia);Y.prototype.ref=Y.prototype.va;Y.prototype.refFromURL=Y.prototype.wa;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.Aa);Y.prototype.setMaxOperationRetryTime=Y.prototype.xa;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.Ba);Y.prototype.setMaxUploadRetryTime=Y.prototype.ya;Z(Y.prototype,"app",Y.prototype.ma);Z(Y.prototype,"INTERNAL",Y.prototype.ka);Se.prototype["delete"]=Se.prototype.delete;Y.prototype.capi_=function(a){ka=a;};W.prototype.on=W.prototype.O;W.prototype.resume=W.prototype.R;W.prototype.pause=W.prototype.P;W.prototype.cancel=W.prototype.L;Z(W.prototype,"snapshot",W.prototype.D);Z(z.prototype,"bytesTransferred",z.prototype.oa);Z(z.prototype,"totalBytes",z.prototype.Ka);Z(z.prototype,"state",z.prototype.Ha);Z(z.prototype,"metadata",z.prototype.Ca);Z(z.prototype,"downloadURL",z.prototype.qa);Z(z.prototype,"task",z.prototype.Ja);Z(z.prototype,"ref",z.prototype.Fa);ta.STATE_CHANGED="state_changed";ua.RUNNING="running";ua.PAUSED="paused";ua.SUCCESS="success";ua.CANCELED="canceled";ua.ERROR="error";Ua.RAW="raw";Ua.BASE64="base64";Ua.BASE64URL="base64url";Ua.DATA_URL="data_url";H.prototype["catch"]=H.prototype.l;H.prototype.then=H.prototype.then;(function(){function a(a){return new Y(a);}var b={TaskState:ua,TaskEvent:ta,StringFormat:Ua,Storage:Y,Reference:X};if(window.firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService)firebase.INTERNAL.registerService("storage",a,b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();})();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	const Contact = __webpack_require__(7);

	class User {
	  constructor(options) {
	    this.photo = options.photo || null;
	    this.firstName = options.firstName;
	    this.lastName = options.lastName;
	    this.contacts = [];
	    this.id = Date.now();
	  }

	  updateUserInfo(property, newValue) {
	    this[property] = newValue;
	  }

	  addContact(options) {
	    var contact = new Contact(options);
	    this.contacts.push(contact);
	  }

	  deleteContacts(i) {
	    this.contacts.splice(i, 1);
	  }
	}

	module.exports = User;

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	if (! document.getElementById("mocha")) { document.write("<div id=\"mocha\"></div>"); }

	__webpack_require__(16);
	__webpack_require__(20);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/caseycross/Documents/Turing/mod2-projects/networking/node_modules/mocha-loader/node_modules/css-loader/index.js!/Users/caseycross/Documents/Turing/mod2-projects/networking/node_modules/mocha/mocha.css", function() {
			var newContent = require("!!/Users/caseycross/Documents/Turing/mod2-projects/networking/node_modules/mocha-loader/node_modules/css-loader/index.js!/Users/caseycross/Documents/Turing/mod2-projects/networking/node_modules/mocha/mocha.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	exports.push([module.id, "@charset \"utf-8\";\n\nbody {\n  margin:0;\n}\n\n#mocha {\n  font: 20px/1.5 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  margin: 60px 50px;\n}\n\n#mocha ul,\n#mocha li {\n  margin: 0;\n  padding: 0;\n}\n\n#mocha ul {\n  list-style: none;\n}\n\n#mocha h1,\n#mocha h2 {\n  margin: 0;\n}\n\n#mocha h1 {\n  margin-top: 15px;\n  font-size: 1em;\n  font-weight: 200;\n}\n\n#mocha h1 a {\n  text-decoration: none;\n  color: inherit;\n}\n\n#mocha h1 a:hover {\n  text-decoration: underline;\n}\n\n#mocha .suite .suite h1 {\n  margin-top: 0;\n  font-size: .8em;\n}\n\n#mocha .hidden {\n  display: none;\n}\n\n#mocha h2 {\n  font-size: 12px;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n#mocha .suite {\n  margin-left: 15px;\n}\n\n#mocha .test {\n  margin-left: 15px;\n  overflow: hidden;\n}\n\n#mocha .test.pending:hover h2::after {\n  content: '(pending)';\n  font-family: arial, sans-serif;\n}\n\n#mocha .test.pass.medium .duration {\n  background: #c09853;\n}\n\n#mocha .test.pass.slow .duration {\n  background: #b94a48;\n}\n\n#mocha .test.pass::before {\n  content: '✓';\n  font-size: 12px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  color: #00d6b2;\n}\n\n#mocha .test.pass .duration {\n  font-size: 9px;\n  margin-left: 5px;\n  padding: 2px 5px;\n  color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n  border-radius: 5px;\n}\n\n#mocha .test.pass.fast .duration {\n  display: none;\n}\n\n#mocha .test.pending {\n  color: #0b97c4;\n}\n\n#mocha .test.pending::before {\n  content: '◦';\n  color: #0b97c4;\n}\n\n#mocha .test.fail {\n  color: #c00;\n}\n\n#mocha .test.fail pre {\n  color: black;\n}\n\n#mocha .test.fail::before {\n  content: '✖';\n  font-size: 12px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  color: #c00;\n}\n\n#mocha .test pre.error {\n  color: #c00;\n  max-height: 300px;\n  overflow: auto;\n}\n\n#mocha .test .html-error {\n  overflow: auto;\n  color: black;\n  line-height: 1.5;\n  display: block;\n  float: left;\n  clear: left;\n  font: 12px/1.5 monaco, monospace;\n  margin: 5px;\n  padding: 15px;\n  border: 1px solid #eee;\n  max-width: 85%; /*(1)*/\n  max-width: -webkit-calc(100% - 42px);\n  max-width: -moz-calc(100% - 42px);\n  max-width: calc(100% - 42px); /*(2)*/\n  max-height: 300px;\n  word-wrap: break-word;\n  border-bottom-color: #ddd;\n  -webkit-box-shadow: 0 1px 3px #eee;\n  -moz-box-shadow: 0 1px 3px #eee;\n  box-shadow: 0 1px 3px #eee;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n\n#mocha .test .html-error pre.error {\n  border: none;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n  -webkit-box-shadow: 0;\n  -moz-box-shadow: 0;\n  box-shadow: 0;\n  padding: 0;\n  margin: 0;\n  margin-top: 18px;\n  max-height: none;\n}\n\n/**\n * (1): approximate for browsers not supporting calc\n * (2): 42 = 2*15 + 2*10 + 2*1 (padding + margin + border)\n *      ^^ seriously\n */\n#mocha .test pre {\n  display: block;\n  float: left;\n  clear: left;\n  font: 12px/1.5 monaco, monospace;\n  margin: 5px;\n  padding: 15px;\n  border: 1px solid #eee;\n  max-width: 85%; /*(1)*/\n  max-width: -webkit-calc(100% - 42px);\n  max-width: -moz-calc(100% - 42px);\n  max-width: calc(100% - 42px); /*(2)*/\n  word-wrap: break-word;\n  border-bottom-color: #ddd;\n  -webkit-box-shadow: 0 1px 3px #eee;\n  -moz-box-shadow: 0 1px 3px #eee;\n  box-shadow: 0 1px 3px #eee;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n\n#mocha .test h2 {\n  position: relative;\n}\n\n#mocha .test a.replay {\n  position: absolute;\n  top: 3px;\n  right: 0;\n  text-decoration: none;\n  vertical-align: middle;\n  display: block;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  text-align: center;\n  background: #eee;\n  font-size: 15px;\n  -webkit-border-radius: 15px;\n  -moz-border-radius: 15px;\n  border-radius: 15px;\n  -webkit-transition:opacity 200ms;\n  -moz-transition:opacity 200ms;\n  -o-transition:opacity 200ms;\n  transition: opacity 200ms;\n  opacity: 0.3;\n  color: #888;\n}\n\n#mocha .test:hover a.replay {\n  opacity: 1;\n}\n\n#mocha-report.pass .test.fail {\n  display: none;\n}\n\n#mocha-report.fail .test.pass {\n  display: none;\n}\n\n#mocha-report.pending .test.pass,\n#mocha-report.pending .test.fail {\n  display: none;\n}\n#mocha-report.pending .test.pass.pending {\n  display: block;\n}\n\n#mocha-error {\n  color: #c00;\n  font-size: 1.5em;\n  font-weight: 100;\n  letter-spacing: 1px;\n}\n\n#mocha-stats {\n  position: fixed;\n  top: 15px;\n  right: 10px;\n  font-size: 12px;\n  margin: 0;\n  color: #888;\n  z-index: 1;\n}\n\n#mocha-stats .progress {\n  float: right;\n  padding-top: 0;\n\n  /**\n   * Set safe initial values, so mochas .progress does not inherit these\n   * properties from Bootstrap .progress (which causes .progress height to\n   * equal line height set in Bootstrap).\n   */\n  height: auto;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  background-color: initial;\n}\n\n#mocha-stats em {\n  color: black;\n}\n\n#mocha-stats a {\n  text-decoration: none;\n  color: inherit;\n}\n\n#mocha-stats a:hover {\n  border-bottom: 1px solid #eee;\n}\n\n#mocha-stats li {\n  display: inline-block;\n  margin: 0 5px;\n  list-style: none;\n  padding-top: 11px;\n}\n\n#mocha-stats canvas {\n  width: 40px;\n  height: 40px;\n}\n\n#mocha code .comment { color: #ddd; }\n#mocha code .init { color: #2f6fad; }\n#mocha code .string { color: #5890ad; }\n#mocha code .keyword { color: #8a6343; }\n#mocha code .number { color: #2f6fad; }\n\n@media screen and (max-device-width: 480px) {\n  #mocha {\n    margin: 60px 0px;\n  }\n\n  #mocha #stats {\n    position: absolute;\n  }\n}\n", ""]);

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function () {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21)(__webpack_require__(22))

/***/ },
/* 21 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\n(function (process,global){\n/**\n * Shim process.stdout.\n */\n\nprocess.stdout = require('browser-stdout')();\n\nvar Mocha = require('./lib/mocha');\n\n/**\n * Create a Mocha instance.\n *\n * @return {undefined}\n */\n\nvar mocha = new Mocha({ reporter: 'html' });\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n\nvar uncaughtExceptionHandlers = [];\n\nvar originalOnerrorHandler = global.onerror;\n\n/**\n * Remove uncaughtException listener.\n * Revert to original onerror handler if previously defined.\n */\n\nprocess.removeListener = function(e, fn){\n  if ('uncaughtException' == e) {\n    if (originalOnerrorHandler) {\n      global.onerror = originalOnerrorHandler;\n    } else {\n      global.onerror = function() {};\n    }\n    var i = Mocha.utils.indexOf(uncaughtExceptionHandlers, fn);\n    if (i != -1) { uncaughtExceptionHandlers.splice(i, 1); }\n  }\n};\n\n/**\n * Implements uncaughtException listener.\n */\n\nprocess.on = function(e, fn){\n  if ('uncaughtException' == e) {\n    global.onerror = function(err, url, line){\n      fn(new Error(err + ' (' + url + ':' + line + ')'));\n      return !mocha.allowUncaught;\n    };\n    uncaughtExceptionHandlers.push(fn);\n  }\n};\n\n// The BDD UI is registered by default, but no UI will be functional in the\n// browser without an explicit call to the overridden `mocha.ui` (see below).\n// Ensure that this default UI does not expose its methods to the global scope.\nmocha.suite.removeAllListeners('pre-require');\n\nvar immediateQueue = []\n  , immediateTimeout;\n\nfunction timeslice() {\n  var immediateStart = new Date().getTime();\n  while (immediateQueue.length && (new Date().getTime() - immediateStart) < 100) {\n    immediateQueue.shift()();\n  }\n  if (immediateQueue.length) {\n    immediateTimeout = setTimeout(timeslice, 0);\n  } else {\n    immediateTimeout = null;\n  }\n}\n\n/**\n * High-performance override of Runner.immediately.\n */\n\nMocha.Runner.immediately = function(callback) {\n  immediateQueue.push(callback);\n  if (!immediateTimeout) {\n    immediateTimeout = setTimeout(timeslice, 0);\n  }\n};\n\n/**\n * Function to allow assertion libraries to throw errors directly into mocha.\n * This is useful when running tests in a browser because window.onerror will\n * only receive the 'message' attribute of the Error.\n */\nmocha.throwError = function(err) {\n  Mocha.utils.forEach(uncaughtExceptionHandlers, function (fn) {\n    fn(err);\n  });\n  throw err;\n};\n\n/**\n * Override ui to ensure that the ui functions are initialized.\n * Normally this would happen in Mocha.prototype.loadFiles.\n */\n\nmocha.ui = function(ui){\n  Mocha.prototype.ui.call(this, ui);\n  this.suite.emit('pre-require', global, null, this);\n  return this;\n};\n\n/**\n * Setup mocha with the given setting options.\n */\n\nmocha.setup = function(opts){\n  if ('string' == typeof opts) opts = { ui: opts };\n  for (var opt in opts) this[opt](opts[opt]);\n  return this;\n};\n\n/**\n * Run mocha, returning the Runner.\n */\n\nmocha.run = function(fn){\n  var options = mocha.options;\n  mocha.globals('location');\n\n  var query = Mocha.utils.parseQuery(global.location.search || '');\n  if (query.grep) mocha.grep(query.grep);\n  if (query.fgrep) mocha.fgrep(query.fgrep);\n  if (query.invert) mocha.invert();\n\n  return Mocha.prototype.run.call(mocha, function(err){\n    // The DOM Document is not available in Web Workers.\n    var document = global.document;\n    if (document && document.getElementById('mocha') && options.noHighlighting !== true) {\n      Mocha.utils.highlightTags('code');\n    }\n    if (fn) fn(err);\n  });\n};\n\n/**\n * Expose the process shim.\n * https://github.com/mochajs/mocha/pull/916\n */\n\nMocha.process = process;\n\n/**\n * Expose mocha.\n */\n\nglobal.Mocha = Mocha;\nglobal.mocha = mocha;\n\n// this allows test/acceptance/required-tokens.js to pass; thus,\n// you can now do `const describe = require('mocha').describe` in a\n// browser context (assuming browserification).  should fix #880\nmodule.exports = global;\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"./lib/mocha\":14,\"_process\":67,\"browser-stdout\":41}],2:[function(require,module,exports){\n/* eslint-disable no-unused-vars */\nmodule.exports = function(type) {\n  return function() {};\n};\n\n},{}],3:[function(require,module,exports){\n/**\n * Module exports.\n */\n\nexports.EventEmitter = EventEmitter;\n\n/**\n * Object#toString reference.\n */\nvar objToString = Object.prototype.toString;\n\n/**\n * Check if a value is an array.\n *\n * @api private\n * @param {*} val The value to test.\n * @return {boolean} true if the value is an array, otherwise false.\n */\nfunction isArray(val) {\n  return objToString.call(val) === '[object Array]';\n}\n\n/**\n * Event emitter constructor.\n *\n * @api public\n */\nfunction EventEmitter() {}\n\n/**\n * Add a listener.\n *\n * @api public\n * @param {string} name Event name.\n * @param {Function} fn Event handler.\n * @return {EventEmitter} Emitter instance.\n */\nEventEmitter.prototype.on = function(name, fn) {\n  if (!this.$events) {\n    this.$events = {};\n  }\n\n  if (!this.$events[name]) {\n    this.$events[name] = fn;\n  } else if (isArray(this.$events[name])) {\n    this.$events[name].push(fn);\n  } else {\n    this.$events[name] = [this.$events[name], fn];\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n/**\n * Adds a volatile listener.\n *\n * @api public\n * @param {string} name Event name.\n * @param {Function} fn Event handler.\n * @return {EventEmitter} Emitter instance.\n */\nEventEmitter.prototype.once = function(name, fn) {\n  var self = this;\n\n  function on() {\n    self.removeListener(name, on);\n    fn.apply(this, arguments);\n  }\n\n  on.listener = fn;\n  this.on(name, on);\n\n  return this;\n};\n\n/**\n * Remove a listener.\n *\n * @api public\n * @param {string} name Event name.\n * @param {Function} fn Event handler.\n * @return {EventEmitter} Emitter instance.\n */\nEventEmitter.prototype.removeListener = function(name, fn) {\n  if (this.$events && this.$events[name]) {\n    var list = this.$events[name];\n\n    if (isArray(list)) {\n      var pos = -1;\n\n      for (var i = 0, l = list.length; i < l; i++) {\n        if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {\n          pos = i;\n          break;\n        }\n      }\n\n      if (pos < 0) {\n        return this;\n      }\n\n      list.splice(pos, 1);\n\n      if (!list.length) {\n        delete this.$events[name];\n      }\n    } else if (list === fn || (list.listener && list.listener === fn)) {\n      delete this.$events[name];\n    }\n  }\n\n  return this;\n};\n\n/**\n * Remove all listeners for an event.\n *\n * @api public\n * @param {string} name Event name.\n * @return {EventEmitter} Emitter instance.\n */\nEventEmitter.prototype.removeAllListeners = function(name) {\n  if (name === undefined) {\n    this.$events = {};\n    return this;\n  }\n\n  if (this.$events && this.$events[name]) {\n    this.$events[name] = null;\n  }\n\n  return this;\n};\n\n/**\n * Get all listeners for a given event.\n *\n * @api public\n * @param {string} name Event name.\n * @return {EventEmitter} Emitter instance.\n */\nEventEmitter.prototype.listeners = function(name) {\n  if (!this.$events) {\n    this.$events = {};\n  }\n\n  if (!this.$events[name]) {\n    this.$events[name] = [];\n  }\n\n  if (!isArray(this.$events[name])) {\n    this.$events[name] = [this.$events[name]];\n  }\n\n  return this.$events[name];\n};\n\n/**\n * Emit an event.\n *\n * @api public\n * @param {string} name Event name.\n * @return {boolean} true if at least one handler was invoked, else false.\n */\nEventEmitter.prototype.emit = function(name) {\n  if (!this.$events) {\n    return false;\n  }\n\n  var handler = this.$events[name];\n\n  if (!handler) {\n    return false;\n  }\n\n  var args = Array.prototype.slice.call(arguments, 1);\n\n  if (typeof handler === 'function') {\n    handler.apply(this, args);\n  } else if (isArray(handler)) {\n    var listeners = handler.slice();\n\n    for (var i = 0, l = listeners.length; i < l; i++) {\n      listeners[i].apply(this, args);\n    }\n  } else {\n    return false;\n  }\n\n  return true;\n};\n\n},{}],4:[function(require,module,exports){\n/**\n * Expose `Progress`.\n */\n\nmodule.exports = Progress;\n\n/**\n * Initialize a new `Progress` indicator.\n */\nfunction Progress() {\n  this.percent = 0;\n  this.size(0);\n  this.fontSize(11);\n  this.font('helvetica, arial, sans-serif');\n}\n\n/**\n * Set progress size to `size`.\n *\n * @api public\n * @param {number} size\n * @return {Progress} Progress instance.\n */\nProgress.prototype.size = function(size) {\n  this._size = size;\n  return this;\n};\n\n/**\n * Set text to `text`.\n *\n * @api public\n * @param {string} text\n * @return {Progress} Progress instance.\n */\nProgress.prototype.text = function(text) {\n  this._text = text;\n  return this;\n};\n\n/**\n * Set font size to `size`.\n *\n * @api public\n * @param {number} size\n * @return {Progress} Progress instance.\n */\nProgress.prototype.fontSize = function(size) {\n  this._fontSize = size;\n  return this;\n};\n\n/**\n * Set font to `family`.\n *\n * @param {string} family\n * @return {Progress} Progress instance.\n */\nProgress.prototype.font = function(family) {\n  this._font = family;\n  return this;\n};\n\n/**\n * Update percentage to `n`.\n *\n * @param {number} n\n * @return {Progress} Progress instance.\n */\nProgress.prototype.update = function(n) {\n  this.percent = n;\n  return this;\n};\n\n/**\n * Draw on `ctx`.\n *\n * @param {CanvasRenderingContext2d} ctx\n * @return {Progress} Progress instance.\n */\nProgress.prototype.draw = function(ctx) {\n  try {\n    var percent = Math.min(this.percent, 100);\n    var size = this._size;\n    var half = size / 2;\n    var x = half;\n    var y = half;\n    var rad = half - 1;\n    var fontSize = this._fontSize;\n\n    ctx.font = fontSize + 'px ' + this._font;\n\n    var angle = Math.PI * 2 * (percent / 100);\n    ctx.clearRect(0, 0, size, size);\n\n    // outer circle\n    ctx.strokeStyle = '#9f9f9f';\n    ctx.beginPath();\n    ctx.arc(x, y, rad, 0, angle, false);\n    ctx.stroke();\n\n    // inner circle\n    ctx.strokeStyle = '#eee';\n    ctx.beginPath();\n    ctx.arc(x, y, rad - 1, 0, angle, true);\n    ctx.stroke();\n\n    // text\n    var text = this._text || (percent | 0) + '%';\n    var w = ctx.measureText(text).width;\n\n    ctx.fillText(text, x - w / 2 + 1, y + fontSize / 2 - 1);\n  } catch (err) {\n    // don't fail if we can't render progress\n  }\n  return this;\n};\n\n},{}],5:[function(require,module,exports){\n(function (global){\nexports.isatty = function isatty() {\n  return true;\n};\n\nexports.getWindowSize = function getWindowSize() {\n  if ('innerHeight' in global) {\n    return [global.innerHeight, global.innerWidth];\n  }\n  // In a Web Worker, the DOM Window is not available.\n  return [640, 480];\n};\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{}],6:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar JSON = require('json3');\n\n/**\n * Expose `Context`.\n */\n\nmodule.exports = Context;\n\n/**\n * Initialize a new `Context`.\n *\n * @api private\n */\nfunction Context() {}\n\n/**\n * Set or get the context `Runnable` to `runnable`.\n *\n * @api private\n * @param {Runnable} runnable\n * @return {Context}\n */\nContext.prototype.runnable = function(runnable) {\n  if (!arguments.length) {\n    return this._runnable;\n  }\n  this.test = this._runnable = runnable;\n  return this;\n};\n\n/**\n * Set test timeout `ms`.\n *\n * @api private\n * @param {number} ms\n * @return {Context} self\n */\nContext.prototype.timeout = function(ms) {\n  if (!arguments.length) {\n    return this.runnable().timeout();\n  }\n  this.runnable().timeout(ms);\n  return this;\n};\n\n/**\n * Set test timeout `enabled`.\n *\n * @api private\n * @param {boolean} enabled\n * @return {Context} self\n */\nContext.prototype.enableTimeouts = function(enabled) {\n  this.runnable().enableTimeouts(enabled);\n  return this;\n};\n\n/**\n * Set test slowness threshold `ms`.\n *\n * @api private\n * @param {number} ms\n * @return {Context} self\n */\nContext.prototype.slow = function(ms) {\n  this.runnable().slow(ms);\n  return this;\n};\n\n/**\n * Mark a test as skipped.\n *\n * @api private\n * @return {Context} self\n */\nContext.prototype.skip = function() {\n  this.runnable().skip();\n  return this;\n};\n\n/**\n * Allow a number of retries on failed tests\n *\n * @api private\n * @param {number} n\n * @return {Context} self\n */\nContext.prototype.retries = function(n) {\n  if (!arguments.length) {\n    return this.runnable().retries();\n  }\n  this.runnable().retries(n);\n  return this;\n};\n\n/**\n * Inspect the context void of `._runnable`.\n *\n * @api private\n * @return {string}\n */\nContext.prototype.inspect = function() {\n  return JSON.stringify(this, function(key, val) {\n    return key === 'runnable' || key === 'test' ? undefined : val;\n  }, 2);\n};\n\n},{\"json3\":54}],7:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Runnable = require('./runnable');\nvar inherits = require('./utils').inherits;\n\n/**\n * Expose `Hook`.\n */\n\nmodule.exports = Hook;\n\n/**\n * Initialize a new `Hook` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\nfunction Hook(title, fn) {\n  Runnable.call(this, title, fn);\n  this.type = 'hook';\n}\n\n/**\n * Inherit from `Runnable.prototype`.\n */\ninherits(Hook, Runnable);\n\n/**\n * Get or set the test `err`.\n *\n * @param {Error} err\n * @return {Error}\n * @api public\n */\nHook.prototype.error = function(err) {\n  if (!arguments.length) {\n    err = this._error;\n    this._error = null;\n    return err;\n  }\n\n  this._error = err;\n};\n\n},{\"./runnable\":33,\"./utils\":38}],8:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Test = require('../test');\n\n/**\n * BDD-style interface:\n *\n *      describe('Array', function() {\n *        describe('#indexOf()', function() {\n *          it('should return -1 when not present', function() {\n *            // ...\n *          });\n *\n *          it('should return the index when present', function() {\n *            // ...\n *          });\n *        });\n *      });\n *\n * @param {Suite} suite Root suite.\n */\nmodule.exports = function(suite) {\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha) {\n    var common = require('./common')(suites, context, mocha);\n\n    context.before = common.before;\n    context.after = common.after;\n    context.beforeEach = common.beforeEach;\n    context.afterEach = common.afterEach;\n    context.run = mocha.options.delay && common.runWithSuite(suite);\n    /**\n     * Describe a \"suite\" with the given `title`\n     * and callback `fn` containing nested suites\n     * and/or tests.\n     */\n\n    context.describe = context.context = function(title, fn) {\n      return common.suite.create({\n        title: title,\n        file: file,\n        fn: fn\n      });\n    };\n\n    /**\n     * Pending describe.\n     */\n\n    context.xdescribe = context.xcontext = context.describe.skip = function(title, fn) {\n      return common.suite.skip({\n        title: title,\n        file: file,\n        fn: fn\n      });\n    };\n\n    /**\n     * Exclusive suite.\n     */\n\n    context.describe.only = function(title, fn) {\n      return common.suite.only({\n        title: title,\n        file: file,\n        fn: fn\n      });\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.it = context.specify = function(title, fn) {\n      var suite = suites[0];\n      if (suite.isPending()) {\n        fn = null;\n      }\n      var test = new Test(title, fn);\n      test.file = file;\n      suite.addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.it.only = function(title, fn) {\n      return common.test.only(mocha, context.it(title, fn));\n    };\n\n    /**\n     * Pending test case.\n     */\n\n    context.xit = context.xspecify = context.it.skip = function(title) {\n      context.it(title);\n    };\n\n    /**\n     * Number of attempts to retry.\n     */\n    context.it.retries = function(n) {\n      context.retries(n);\n    };\n  });\n};\n\n},{\"../test\":36,\"./common\":9}],9:[function(require,module,exports){\n'use strict';\n\nvar Suite = require('../suite');\n\n/**\n * Functions common to more than one interface.\n *\n * @param {Suite[]} suites\n * @param {Context} context\n * @param {Mocha} mocha\n * @return {Object} An object containing common functions.\n */\nmodule.exports = function(suites, context, mocha) {\n  return {\n    /**\n     * This is only present if flag --delay is passed into Mocha. It triggers\n     * root suite execution.\n     *\n     * @param {Suite} suite The root wuite.\n     * @return {Function} A function which runs the root suite\n     */\n    runWithSuite: function runWithSuite(suite) {\n      return function run() {\n        suite.run();\n      };\n    },\n\n    /**\n     * Execute before running tests.\n     *\n     * @param {string} name\n     * @param {Function} fn\n     */\n    before: function(name, fn) {\n      suites[0].beforeAll(name, fn);\n    },\n\n    /**\n     * Execute after running tests.\n     *\n     * @param {string} name\n     * @param {Function} fn\n     */\n    after: function(name, fn) {\n      suites[0].afterAll(name, fn);\n    },\n\n    /**\n     * Execute before each test case.\n     *\n     * @param {string} name\n     * @param {Function} fn\n     */\n    beforeEach: function(name, fn) {\n      suites[0].beforeEach(name, fn);\n    },\n\n    /**\n     * Execute after each test case.\n     *\n     * @param {string} name\n     * @param {Function} fn\n     */\n    afterEach: function(name, fn) {\n      suites[0].afterEach(name, fn);\n    },\n\n    suite: {\n      /**\n       * Create an exclusive Suite; convenience function\n       * See docstring for create() below.\n       *\n       * @param {Object} opts\n       * @returns {Suite}\n       */\n      only: function only(opts) {\n        mocha.options.hasOnly = true;\n        opts.isOnly = true;\n        return this.create(opts);\n      },\n\n      /**\n       * Create a Suite, but skip it; convenience function\n       * See docstring for create() below.\n       *\n       * @param {Object} opts\n       * @returns {Suite}\n       */\n      skip: function skip(opts) {\n        opts.pending = true;\n        return this.create(opts);\n      },\n\n      /**\n       * Creates a suite.\n       * @param {Object} opts Options\n       * @param {string} opts.title Title of Suite\n       * @param {Function} [opts.fn] Suite Function (not always applicable)\n       * @param {boolean} [opts.pending] Is Suite pending?\n       * @param {string} [opts.file] Filepath where this Suite resides\n       * @param {boolean} [opts.isOnly] Is Suite exclusive?\n       * @returns {Suite}\n       */\n      create: function create(opts) {\n        var suite = Suite.create(suites[0], opts.title);\n        suite.pending = Boolean(opts.pending);\n        suite.file = opts.file;\n        suites.unshift(suite);\n        if (opts.isOnly) {\n          suite.parent._onlySuites = suite.parent._onlySuites.concat(suite);\n          mocha.options.hasOnly = true;\n        }\n        if (typeof opts.fn === 'function') {\n          opts.fn.call(suite);\n          suites.shift();\n        }\n\n        return suite;\n      }\n    },\n\n    test: {\n\n      /**\n       * Exclusive test-case.\n       *\n       * @param {Object} mocha\n       * @param {Function} test\n       * @returns {*}\n       */\n      only: function(mocha, test) {\n        test.parent._onlyTests = test.parent._onlyTests.concat(test);\n        mocha.options.hasOnly = true;\n        return test;\n      },\n\n      /**\n       * Pending test case.\n       *\n       * @param {string} title\n       */\n      skip: function(title) {\n        context.test(title);\n      },\n\n      /**\n       * Number of retry attempts\n       *\n       * @param {number} n\n       */\n      retries: function(n) {\n        context.retries(n);\n      }\n    }\n  };\n};\n\n},{\"../suite\":35}],10:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite');\nvar Test = require('../test');\n\n/**\n * Exports-style (as Node.js module) interface:\n *\n *     exports.Array = {\n *       '#indexOf()': {\n *         'should return -1 when the value is not present': function() {\n *\n *         },\n *\n *         'should return the correct index when the value is present': function() {\n *\n *         }\n *       }\n *     };\n *\n * @param {Suite} suite Root suite.\n */\nmodule.exports = function(suite) {\n  var suites = [suite];\n\n  suite.on('require', visit);\n\n  function visit(obj, file) {\n    var suite;\n    for (var key in obj) {\n      if (typeof obj[key] === 'function') {\n        var fn = obj[key];\n        switch (key) {\n          case 'before':\n            suites[0].beforeAll(fn);\n            break;\n          case 'after':\n            suites[0].afterAll(fn);\n            break;\n          case 'beforeEach':\n            suites[0].beforeEach(fn);\n            break;\n          case 'afterEach':\n            suites[0].afterEach(fn);\n            break;\n          default:\n            var test = new Test(key, fn);\n            test.file = file;\n            suites[0].addTest(test);\n        }\n      } else {\n        suite = Suite.create(suites[0], key);\n        suites.unshift(suite);\n        visit(obj[key], file);\n        suites.shift();\n      }\n    }\n  }\n};\n\n},{\"../suite\":35,\"../test\":36}],11:[function(require,module,exports){\nexports.bdd = require('./bdd');\nexports.tdd = require('./tdd');\nexports.qunit = require('./qunit');\nexports.exports = require('./exports');\n\n},{\"./bdd\":8,\"./exports\":10,\"./qunit\":12,\"./tdd\":13}],12:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Test = require('../test');\n\n/**\n * QUnit-style interface:\n *\n *     suite('Array');\n *\n *     test('#length', function() {\n *       var arr = [1,2,3];\n *       ok(arr.length == 3);\n *     });\n *\n *     test('#indexOf()', function() {\n *       var arr = [1,2,3];\n *       ok(arr.indexOf(1) == 0);\n *       ok(arr.indexOf(2) == 1);\n *       ok(arr.indexOf(3) == 2);\n *     });\n *\n *     suite('String');\n *\n *     test('#length', function() {\n *       ok('foo'.length == 3);\n *     });\n *\n * @param {Suite} suite Root suite.\n */\nmodule.exports = function(suite) {\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha) {\n    var common = require('./common')(suites, context, mocha);\n\n    context.before = common.before;\n    context.after = common.after;\n    context.beforeEach = common.beforeEach;\n    context.afterEach = common.afterEach;\n    context.run = mocha.options.delay && common.runWithSuite(suite);\n    /**\n     * Describe a \"suite\" with the given `title`.\n     */\n\n    context.suite = function(title) {\n      if (suites.length > 1) {\n        suites.shift();\n      }\n      return common.suite.create({\n        title: title,\n        file: file\n      });\n    };\n\n    /**\n     * Exclusive Suite.\n     */\n\n    context.suite.only = function(title) {\n      if (suites.length > 1) {\n        suites.shift();\n      }\n      return common.suite.only({\n        title: title,\n        file: file\n      });\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.test = function(title, fn) {\n      var test = new Test(title, fn);\n      test.file = file;\n      suites[0].addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.test.only = function(title, fn) {\n      return common.test.only(mocha, context.test(title, fn));\n    };\n\n    context.test.skip = common.test.skip;\n    context.test.retries = common.test.retries;\n  });\n};\n\n},{\"../test\":36,\"./common\":9}],13:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Test = require('../test');\n\n/**\n * TDD-style interface:\n *\n *      suite('Array', function() {\n *        suite('#indexOf()', function() {\n *          suiteSetup(function() {\n *\n *          });\n *\n *          test('should return -1 when not present', function() {\n *\n *          });\n *\n *          test('should return the index when present', function() {\n *\n *          });\n *\n *          suiteTeardown(function() {\n *\n *          });\n *        });\n *      });\n *\n * @param {Suite} suite Root suite.\n */\nmodule.exports = function(suite) {\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha) {\n    var common = require('./common')(suites, context, mocha);\n\n    context.setup = common.beforeEach;\n    context.teardown = common.afterEach;\n    context.suiteSetup = common.before;\n    context.suiteTeardown = common.after;\n    context.run = mocha.options.delay && common.runWithSuite(suite);\n\n    /**\n     * Describe a \"suite\" with the given `title` and callback `fn` containing\n     * nested suites and/or tests.\n     */\n    context.suite = function(title, fn) {\n      return common.suite.create({\n        title: title,\n        file: file,\n        fn: fn\n      });\n    };\n\n    /**\n     * Pending suite.\n     */\n    context.suite.skip = function(title, fn) {\n      return common.suite.skip({\n        title: title,\n        file: file,\n        fn: fn\n      });\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n    context.suite.only = function(title, fn) {\n      return common.suite.only({\n        title: title,\n        file: file,\n        fn: fn\n      });\n    };\n\n    /**\n     * Describe a specification or test-case with the given `title` and\n     * callback `fn` acting as a thunk.\n     */\n    context.test = function(title, fn) {\n      var suite = suites[0];\n      if (suite.isPending()) {\n        fn = null;\n      }\n      var test = new Test(title, fn);\n      test.file = file;\n      suite.addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.test.only = function(title, fn) {\n      return common.test.only(mocha, context.test(title, fn));\n    };\n\n    context.test.skip = common.test.skip;\n    context.test.retries = common.test.retries;\n  });\n};\n\n},{\"../test\":36,\"./common\":9}],14:[function(require,module,exports){\n(function (process,global,__dirname){\n/*!\n * mocha\n * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>\n * MIT Licensed\n */\n\n/**\n * Module dependencies.\n */\n\nvar escapeRe = require('escape-string-regexp');\nvar path = require('path');\nvar reporters = require('./reporters');\nvar utils = require('./utils');\n\n/**\n * Expose `Mocha`.\n */\n\nexports = module.exports = Mocha;\n\n/**\n * To require local UIs and reporters when running in node.\n */\n\nif (!process.browser) {\n  var cwd = process.cwd();\n  module.paths.push(cwd, path.join(cwd, 'node_modules'));\n}\n\n/**\n * Expose internals.\n */\n\nexports.utils = utils;\nexports.interfaces = require('./interfaces');\nexports.reporters = reporters;\nexports.Runnable = require('./runnable');\nexports.Context = require('./context');\nexports.Runner = require('./runner');\nexports.Suite = require('./suite');\nexports.Hook = require('./hook');\nexports.Test = require('./test');\n\n/**\n * Return image `name` path.\n *\n * @api private\n * @param {string} name\n * @return {string}\n */\nfunction image(name) {\n  return path.join(__dirname, '../images', name + '.png');\n}\n\n/**\n * Set up mocha with `options`.\n *\n * Options:\n *\n *   - `ui` name \"bdd\", \"tdd\", \"exports\" etc\n *   - `reporter` reporter instance, defaults to `mocha.reporters.spec`\n *   - `globals` array of accepted globals\n *   - `timeout` timeout in milliseconds\n *   - `retries` number of times to retry failed tests\n *   - `bail` bail on the first test failure\n *   - `slow` milliseconds to wait before considering a test slow\n *   - `ignoreLeaks` ignore global leaks\n *   - `fullTrace` display the full stack-trace on failing\n *   - `grep` string or regexp to filter tests with\n *\n * @param {Object} options\n * @api public\n */\nfunction Mocha(options) {\n  options = options || {};\n  this.files = [];\n  this.options = options;\n  if (options.grep) {\n    this.grep(new RegExp(options.grep));\n  }\n  if (options.fgrep) {\n    this.fgrep(options.fgrep);\n  }\n  this.suite = new exports.Suite('', new exports.Context());\n  this.ui(options.ui);\n  this.bail(options.bail);\n  this.reporter(options.reporter, options.reporterOptions);\n  if (typeof options.timeout !== 'undefined' && options.timeout !== null) {\n    this.timeout(options.timeout);\n  }\n  if (typeof options.retries !== 'undefined' && options.retries !== null) {\n    this.retries(options.retries);\n  }\n  this.useColors(options.useColors);\n  if (options.enableTimeouts !== null) {\n    this.enableTimeouts(options.enableTimeouts);\n  }\n  if (options.slow) {\n    this.slow(options.slow);\n  }\n}\n\n/**\n * Enable or disable bailing on the first failure.\n *\n * @api public\n * @param {boolean} [bail]\n */\nMocha.prototype.bail = function(bail) {\n  if (!arguments.length) {\n    bail = true;\n  }\n  this.suite.bail(bail);\n  return this;\n};\n\n/**\n * Add test `file`.\n *\n * @api public\n * @param {string} file\n */\nMocha.prototype.addFile = function(file) {\n  this.files.push(file);\n  return this;\n};\n\n/**\n * Set reporter to `reporter`, defaults to \"spec\".\n *\n * @param {String|Function} reporter name or constructor\n * @param {Object} reporterOptions optional options\n * @api public\n * @param {string|Function} reporter name or constructor\n * @param {Object} reporterOptions optional options\n */\nMocha.prototype.reporter = function(reporter, reporterOptions) {\n  if (typeof reporter === 'function') {\n    this._reporter = reporter;\n  } else {\n    reporter = reporter || 'spec';\n    var _reporter;\n    // Try to load a built-in reporter.\n    if (reporters[reporter]) {\n      _reporter = reporters[reporter];\n    }\n    // Try to load reporters from process.cwd() and node_modules\n    if (!_reporter) {\n      try {\n        _reporter = require(reporter);\n      } catch (err) {\n        err.message.indexOf('Cannot find module') !== -1\n          ? console.warn('\"' + reporter + '\" reporter not found')\n          : console.warn('\"' + reporter + '\" reporter blew up with error:\\n' + err.stack);\n      }\n    }\n    if (!_reporter && reporter === 'teamcity') {\n      console.warn('The Teamcity reporter was moved to a package named '\n        + 'mocha-teamcity-reporter '\n        + '(https://npmjs.org/package/mocha-teamcity-reporter).');\n    }\n    if (!_reporter) {\n      throw new Error('invalid reporter \"' + reporter + '\"');\n    }\n    this._reporter = _reporter;\n  }\n  this.options.reporterOptions = reporterOptions;\n  return this;\n};\n\n/**\n * Set test UI `name`, defaults to \"bdd\".\n *\n * @api public\n * @param {string} bdd\n */\nMocha.prototype.ui = function(name) {\n  name = name || 'bdd';\n  this._ui = exports.interfaces[name];\n  if (!this._ui) {\n    try {\n      this._ui = require(name);\n    } catch (err) {\n      throw new Error('invalid interface \"' + name + '\"');\n    }\n  }\n  this._ui = this._ui(this.suite);\n\n  this.suite.on('pre-require', function(context) {\n    exports.afterEach = context.afterEach || context.teardown;\n    exports.after = context.after || context.suiteTeardown;\n    exports.beforeEach = context.beforeEach || context.setup;\n    exports.before = context.before || context.suiteSetup;\n    exports.describe = context.describe || context.suite;\n    exports.it = context.it || context.test;\n    exports.setup = context.setup || context.beforeEach;\n    exports.suiteSetup = context.suiteSetup || context.before;\n    exports.suiteTeardown = context.suiteTeardown || context.after;\n    exports.suite = context.suite || context.describe;\n    exports.teardown = context.teardown || context.afterEach;\n    exports.test = context.test || context.it;\n    exports.run = context.run;\n  });\n\n  return this;\n};\n\n/**\n * Load registered files.\n *\n * @api private\n */\nMocha.prototype.loadFiles = function(fn) {\n  var self = this;\n  var suite = this.suite;\n  this.files.forEach(function(file) {\n    file = path.resolve(file);\n    suite.emit('pre-require', global, file, self);\n    suite.emit('require', require(file), file, self);\n    suite.emit('post-require', global, file, self);\n  });\n  fn && fn();\n};\n\n/**\n * Enable growl support.\n *\n * @api private\n */\nMocha.prototype._growl = function(runner, reporter) {\n  var notify = require('growl');\n\n  runner.on('end', function() {\n    var stats = reporter.stats;\n    if (stats.failures) {\n      var msg = stats.failures + ' of ' + runner.total + ' tests failed';\n      notify(msg, { name: 'mocha', title: 'Failed', image: image('error') });\n    } else {\n      notify(stats.passes + ' tests passed in ' + stats.duration + 'ms', {\n        name: 'mocha',\n        title: 'Passed',\n        image: image('ok')\n      });\n    }\n  });\n};\n\n/**\n * Escape string and add it to grep as a regexp.\n *\n * @api public\n * @param str\n * @returns {Mocha}\n */\nMocha.prototype.fgrep = function(str) {\n  return this.grep(new RegExp(escapeRe(str)));\n};\n\n/**\n * Add regexp to grep, if `re` is a string it is escaped.\n *\n * @param {RegExp|String} re\n * @return {Mocha}\n * @api public\n * @param {RegExp|string} re\n * @return {Mocha}\n */\nMocha.prototype.grep = function(re) {\n  if (utils.isString(re)) {\n    // extract args if it's regex-like, i.e: [string, pattern, flag]\n    var arg = re.match(/^\\/(.*)\\/(g|i|)$|.*/);\n    this.options.grep = new RegExp(arg[1] || arg[0], arg[2]);\n  } else {\n    this.options.grep = re;\n  }\n  return this;\n};\n/**\n * Invert `.grep()` matches.\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.invert = function() {\n  this.options.invert = true;\n  return this;\n};\n\n/**\n * Ignore global leaks.\n *\n * @param {Boolean} ignore\n * @return {Mocha}\n * @api public\n * @param {boolean} ignore\n * @return {Mocha}\n */\nMocha.prototype.ignoreLeaks = function(ignore) {\n  this.options.ignoreLeaks = Boolean(ignore);\n  return this;\n};\n\n/**\n * Enable global leak checking.\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.checkLeaks = function() {\n  this.options.ignoreLeaks = false;\n  return this;\n};\n\n/**\n * Display long stack-trace on failing\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.fullTrace = function() {\n  this.options.fullStackTrace = true;\n  return this;\n};\n\n/**\n * Enable growl support.\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.growl = function() {\n  this.options.growl = true;\n  return this;\n};\n\n/**\n * Ignore `globals` array or string.\n *\n * @param {Array|String} globals\n * @return {Mocha}\n * @api public\n * @param {Array|string} globals\n * @return {Mocha}\n */\nMocha.prototype.globals = function(globals) {\n  this.options.globals = (this.options.globals || []).concat(globals);\n  return this;\n};\n\n/**\n * Emit color output.\n *\n * @param {Boolean} colors\n * @return {Mocha}\n * @api public\n * @param {boolean} colors\n * @return {Mocha}\n */\nMocha.prototype.useColors = function(colors) {\n  if (colors !== undefined) {\n    this.options.useColors = colors;\n  }\n  return this;\n};\n\n/**\n * Use inline diffs rather than +/-.\n *\n * @param {Boolean} inlineDiffs\n * @return {Mocha}\n * @api public\n * @param {boolean} inlineDiffs\n * @return {Mocha}\n */\nMocha.prototype.useInlineDiffs = function(inlineDiffs) {\n  this.options.useInlineDiffs = inlineDiffs !== undefined && inlineDiffs;\n  return this;\n};\n\n/**\n * Set the timeout in milliseconds.\n *\n * @param {Number} timeout\n * @return {Mocha}\n * @api public\n * @param {number} timeout\n * @return {Mocha}\n */\nMocha.prototype.timeout = function(timeout) {\n  this.suite.timeout(timeout);\n  return this;\n};\n\n/**\n * Set the number of times to retry failed tests.\n *\n * @param {Number} retry times\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.retries = function(n) {\n  this.suite.retries(n);\n  return this;\n};\n\n/**\n * Set slowness threshold in milliseconds.\n *\n * @param {Number} slow\n * @return {Mocha}\n * @api public\n * @param {number} slow\n * @return {Mocha}\n */\nMocha.prototype.slow = function(slow) {\n  this.suite.slow(slow);\n  return this;\n};\n\n/**\n * Enable timeouts.\n *\n * @param {Boolean} enabled\n * @return {Mocha}\n * @api public\n * @param {boolean} enabled\n * @return {Mocha}\n */\nMocha.prototype.enableTimeouts = function(enabled) {\n  this.suite.enableTimeouts(arguments.length && enabled !== undefined ? enabled : true);\n  return this;\n};\n\n/**\n * Makes all tests async (accepting a callback)\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.asyncOnly = function() {\n  this.options.asyncOnly = true;\n  return this;\n};\n\n/**\n * Disable syntax highlighting (in browser).\n *\n * @api public\n */\nMocha.prototype.noHighlighting = function() {\n  this.options.noHighlighting = true;\n  return this;\n};\n\n/**\n * Enable uncaught errors to propagate (in browser).\n *\n * @return {Mocha}\n * @api public\n */\nMocha.prototype.allowUncaught = function() {\n  this.options.allowUncaught = true;\n  return this;\n};\n\n/**\n * Delay root suite execution.\n * @returns {Mocha}\n */\nMocha.prototype.delay = function delay() {\n  this.options.delay = true;\n  return this;\n};\n\n/**\n * Run tests and invoke `fn()` when complete.\n *\n * @api public\n * @param {Function} fn\n * @return {Runner}\n */\nMocha.prototype.run = function(fn) {\n  if (this.files.length) {\n    this.loadFiles();\n  }\n  var suite = this.suite;\n  var options = this.options;\n  options.files = this.files;\n  var runner = new exports.Runner(suite, options.delay);\n  var reporter = new this._reporter(runner, options);\n  runner.ignoreLeaks = options.ignoreLeaks !== false;\n  runner.fullStackTrace = options.fullStackTrace;\n  runner.hasOnly = options.hasOnly;\n  runner.asyncOnly = options.asyncOnly;\n  runner.allowUncaught = options.allowUncaught;\n  if (options.grep) {\n    runner.grep(options.grep, options.invert);\n  }\n  if (options.globals) {\n    runner.globals(options.globals);\n  }\n  if (options.growl) {\n    this._growl(runner, reporter);\n  }\n  if (options.useColors !== undefined) {\n    exports.reporters.Base.useColors = options.useColors;\n  }\n  exports.reporters.Base.inlineDiffs = options.useInlineDiffs;\n\n  function done(failures) {\n    if (reporter.done) {\n      reporter.done(failures, fn);\n    } else {\n      fn && fn(failures);\n    }\n  }\n\n  return runner.run(done);\n};\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {},\"/lib\")\n},{\"./context\":6,\"./hook\":7,\"./interfaces\":11,\"./reporters\":21,\"./runnable\":33,\"./runner\":34,\"./suite\":35,\"./test\":36,\"./utils\":38,\"_process\":67,\"escape-string-regexp\":47,\"growl\":49,\"path\":42}],15:[function(require,module,exports){\n/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @api public\n * @param {string|number} val\n * @param {Object} options\n * @return {string|number}\n */\nmodule.exports = function(val, options) {\n  options = options || {};\n  if (typeof val === 'string') {\n    return parse(val);\n  }\n  // https://github.com/mochajs/mocha/pull/1035\n  return options['long'] ? longFormat(val) : shortFormat(val);\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @api private\n * @param {string} str\n * @return {number}\n */\nfunction parse(str) {\n  var match = (/^((?:\\d+)?\\.?\\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i).exec(str);\n  if (!match) {\n    return;\n  }\n  var n = parseFloat(match[1]);\n  var type = (match[2] || 'ms').toLowerCase();\n  switch (type) {\n    case 'years':\n    case 'year':\n    case 'y':\n      return n * y;\n    case 'days':\n    case 'day':\n    case 'd':\n      return n * d;\n    case 'hours':\n    case 'hour':\n    case 'h':\n      return n * h;\n    case 'minutes':\n    case 'minute':\n    case 'm':\n      return n * m;\n    case 'seconds':\n    case 'second':\n    case 's':\n      return n * s;\n    case 'ms':\n      return n;\n    default:\n      // No default case\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @api private\n * @param {number} ms\n * @return {string}\n */\nfunction shortFormat(ms) {\n  if (ms >= d) {\n    return Math.round(ms / d) + 'd';\n  }\n  if (ms >= h) {\n    return Math.round(ms / h) + 'h';\n  }\n  if (ms >= m) {\n    return Math.round(ms / m) + 'm';\n  }\n  if (ms >= s) {\n    return Math.round(ms / s) + 's';\n  }\n  return ms + 'ms';\n}\n\n/**\n * Long format for `ms`.\n *\n * @api private\n * @param {number} ms\n * @return {string}\n */\nfunction longFormat(ms) {\n  return plural(ms, d, 'day')\n    || plural(ms, h, 'hour')\n    || plural(ms, m, 'minute')\n    || plural(ms, s, 'second')\n    || ms + ' ms';\n}\n\n/**\n * Pluralization helper.\n *\n * @api private\n * @param {number} ms\n * @param {number} n\n * @param {string} name\n */\nfunction plural(ms, n, name) {\n  if (ms < n) {\n    return;\n  }\n  if (ms < n * 1.5) {\n    return Math.floor(ms / n) + ' ' + name;\n  }\n  return Math.ceil(ms / n) + ' ' + name + 's';\n}\n\n},{}],16:[function(require,module,exports){\n\n/**\n * Expose `Pending`.\n */\n\nmodule.exports = Pending;\n\n/**\n * Initialize a new `Pending` error with the given message.\n *\n * @param {string} message\n */\nfunction Pending(message) {\n  this.message = message;\n}\n\n},{}],17:[function(require,module,exports){\n(function (process,global){\n/**\n * Module dependencies.\n */\n\nvar tty = require('tty');\nvar diff = require('diff');\nvar ms = require('../ms');\nvar utils = require('../utils');\nvar supportsColor = process.browser ? null : require('supports-color');\n\n/**\n * Expose `Base`.\n */\n\nexports = module.exports = Base;\n\n/**\n * Save timer references to avoid Sinon interfering.\n * See: https://github.com/mochajs/mocha/issues/237\n */\n\n/* eslint-disable no-unused-vars, no-native-reassign */\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n/* eslint-enable no-unused-vars, no-native-reassign */\n\n/**\n * Check if both stdio streams are associated with a tty.\n */\n\nvar isatty = tty.isatty(1) && tty.isatty(2);\n\n/**\n * Enable coloring by default, except in the browser interface.\n */\n\nexports.useColors = !process.browser && (supportsColor || (process.env.MOCHA_COLORS !== undefined));\n\n/**\n * Inline diffs instead of +/-\n */\n\nexports.inlineDiffs = false;\n\n/**\n * Default color map.\n */\n\nexports.colors = {\n  pass: 90,\n  fail: 31,\n  'bright pass': 92,\n  'bright fail': 91,\n  'bright yellow': 93,\n  pending: 36,\n  suite: 0,\n  'error title': 0,\n  'error message': 31,\n  'error stack': 90,\n  checkmark: 32,\n  fast: 90,\n  medium: 33,\n  slow: 31,\n  green: 32,\n  light: 90,\n  'diff gutter': 90,\n  'diff added': 32,\n  'diff removed': 31\n};\n\n/**\n * Default symbol map.\n */\n\nexports.symbols = {\n  ok: '✓',\n  err: '✖',\n  dot: '․',\n  comma: ',',\n  bang: '!'\n};\n\n// With node.js on Windows: use symbols available in terminal default fonts\nif (process.platform === 'win32') {\n  exports.symbols.ok = '\\u221A';\n  exports.symbols.err = '\\u00D7';\n  exports.symbols.dot = '.';\n}\n\n/**\n * Color `str` with the given `type`,\n * allowing colors to be disabled,\n * as well as user-defined color\n * schemes.\n *\n * @param {string} type\n * @param {string} str\n * @return {string}\n * @api private\n */\nvar color = exports.color = function(type, str) {\n  if (!exports.useColors) {\n    return String(str);\n  }\n  return '\\u001b[' + exports.colors[type] + 'm' + str + '\\u001b[0m';\n};\n\n/**\n * Expose term window size, with some defaults for when stderr is not a tty.\n */\n\nexports.window = {\n  width: 75\n};\n\nif (isatty) {\n  exports.window.width = process.stdout.getWindowSize\n      ? process.stdout.getWindowSize(1)[0]\n      : tty.getWindowSize()[1];\n}\n\n/**\n * Expose some basic cursor interactions that are common among reporters.\n */\n\nexports.cursor = {\n  hide: function() {\n    isatty && process.stdout.write('\\u001b[?25l');\n  },\n\n  show: function() {\n    isatty && process.stdout.write('\\u001b[?25h');\n  },\n\n  deleteLine: function() {\n    isatty && process.stdout.write('\\u001b[2K');\n  },\n\n  beginningOfLine: function() {\n    isatty && process.stdout.write('\\u001b[0G');\n  },\n\n  CR: function() {\n    if (isatty) {\n      exports.cursor.deleteLine();\n      exports.cursor.beginningOfLine();\n    } else {\n      process.stdout.write('\\r');\n    }\n  }\n};\n\n/**\n * Outut the given `failures` as a list.\n *\n * @param {Array} failures\n * @api public\n */\n\nexports.list = function(failures) {\n  console.log();\n  failures.forEach(function(test, i) {\n    // format\n    var fmt = color('error title', '  %s) %s:\\n')\n      + color('error message', '     %s')\n      + color('error stack', '\\n%s\\n');\n\n    // msg\n    var msg;\n    var err = test.err;\n    var message;\n    if (err.message && typeof err.message.toString === 'function') {\n      message = err.message + '';\n    } else if (typeof err.inspect === 'function') {\n      message = err.inspect() + '';\n    } else {\n      message = '';\n    }\n    var stack = err.stack || message;\n    var index = message ? stack.indexOf(message) : -1;\n    var actual = err.actual;\n    var expected = err.expected;\n    var escape = true;\n\n    if (index === -1) {\n      msg = message;\n    } else {\n      index += message.length;\n      msg = stack.slice(0, index);\n      // remove msg from stack\n      stack = stack.slice(index + 1);\n    }\n\n    // uncaught\n    if (err.uncaught) {\n      msg = 'Uncaught ' + msg;\n    }\n    // explicitly show diff\n    if (err.showDiff !== false && sameType(actual, expected) && expected !== undefined) {\n      escape = false;\n      if (!(utils.isString(actual) && utils.isString(expected))) {\n        err.actual = actual = utils.stringify(actual);\n        err.expected = expected = utils.stringify(expected);\n      }\n\n      fmt = color('error title', '  %s) %s:\\n%s') + color('error stack', '\\n%s\\n');\n      var match = message.match(/^([^:]+): expected/);\n      msg = '\\n      ' + color('error message', match ? match[1] : msg);\n\n      if (exports.inlineDiffs) {\n        msg += inlineDiff(err, escape);\n      } else {\n        msg += unifiedDiff(err, escape);\n      }\n    }\n\n    // indent stack trace\n    stack = stack.replace(/^/gm, '  ');\n\n    console.log(fmt, (i + 1), test.fullTitle(), msg, stack);\n  });\n};\n\n/**\n * Initialize a new `Base` reporter.\n *\n * All other reporters generally\n * inherit from this reporter, providing\n * stats such as test duration, number\n * of tests passed / failed etc.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Base(runner) {\n  var stats = this.stats = { suites: 0, tests: 0, passes: 0, pending: 0, failures: 0 };\n  var failures = this.failures = [];\n\n  if (!runner) {\n    return;\n  }\n  this.runner = runner;\n\n  runner.stats = stats;\n\n  runner.on('start', function() {\n    stats.start = new Date();\n  });\n\n  runner.on('suite', function(suite) {\n    stats.suites = stats.suites || 0;\n    suite.root || stats.suites++;\n  });\n\n  runner.on('test end', function() {\n    stats.tests = stats.tests || 0;\n    stats.tests++;\n  });\n\n  runner.on('pass', function(test) {\n    stats.passes = stats.passes || 0;\n\n    if (test.duration > test.slow()) {\n      test.speed = 'slow';\n    } else if (test.duration > test.slow() / 2) {\n      test.speed = 'medium';\n    } else {\n      test.speed = 'fast';\n    }\n\n    stats.passes++;\n  });\n\n  runner.on('fail', function(test, err) {\n    stats.failures = stats.failures || 0;\n    stats.failures++;\n    test.err = err;\n    failures.push(test);\n  });\n\n  runner.on('end', function() {\n    stats.end = new Date();\n    stats.duration = new Date() - stats.start;\n  });\n\n  runner.on('pending', function() {\n    stats.pending++;\n  });\n}\n\n/**\n * Output common epilogue used by many of\n * the bundled reporters.\n *\n * @api public\n */\nBase.prototype.epilogue = function() {\n  var stats = this.stats;\n  var fmt;\n\n  console.log();\n\n  // passes\n  fmt = color('bright pass', ' ')\n    + color('green', ' %d passing')\n    + color('light', ' (%s)');\n\n  console.log(fmt,\n    stats.passes || 0,\n    ms(stats.duration));\n\n  // pending\n  if (stats.pending) {\n    fmt = color('pending', ' ')\n      + color('pending', ' %d pending');\n\n    console.log(fmt, stats.pending);\n  }\n\n  // failures\n  if (stats.failures) {\n    fmt = color('fail', '  %d failing');\n\n    console.log(fmt, stats.failures);\n\n    Base.list(this.failures);\n    console.log();\n  }\n\n  console.log();\n};\n\n/**\n * Pad the given `str` to `len`.\n *\n * @api private\n * @param {string} str\n * @param {string} len\n * @return {string}\n */\nfunction pad(str, len) {\n  str = String(str);\n  return Array(len - str.length + 1).join(' ') + str;\n}\n\n/**\n * Returns an inline diff between 2 strings with coloured ANSI output\n *\n * @api private\n * @param {Error} err with actual/expected\n * @param {boolean} escape\n * @return {string} Diff\n */\nfunction inlineDiff(err, escape) {\n  var msg = errorDiff(err, 'WordsWithSpace', escape);\n\n  // linenos\n  var lines = msg.split('\\n');\n  if (lines.length > 4) {\n    var width = String(lines.length).length;\n    msg = lines.map(function(str, i) {\n      return pad(++i, width) + ' |' + ' ' + str;\n    }).join('\\n');\n  }\n\n  // legend\n  msg = '\\n'\n    + color('diff removed', 'actual')\n    + ' '\n    + color('diff added', 'expected')\n    + '\\n\\n'\n    + msg\n    + '\\n';\n\n  // indent\n  msg = msg.replace(/^/gm, '      ');\n  return msg;\n}\n\n/**\n * Returns a unified diff between two strings.\n *\n * @api private\n * @param {Error} err with actual/expected\n * @param {boolean} escape\n * @return {string} The diff.\n */\nfunction unifiedDiff(err, escape) {\n  var indent = '      ';\n  function cleanUp(line) {\n    if (escape) {\n      line = escapeInvisibles(line);\n    }\n    if (line[0] === '+') {\n      return indent + colorLines('diff added', line);\n    }\n    if (line[0] === '-') {\n      return indent + colorLines('diff removed', line);\n    }\n    if (line.match(/\\@\\@/)) {\n      return null;\n    }\n    if (line.match(/\\\\ No newline/)) {\n      return null;\n    }\n    return indent + line;\n  }\n  function notBlank(line) {\n    return typeof line !== 'undefined' && line !== null;\n  }\n  var msg = diff.createPatch('string', err.actual, err.expected);\n  var lines = msg.split('\\n').splice(4);\n  return '\\n      '\n    + colorLines('diff added', '+ expected') + ' '\n    + colorLines('diff removed', '- actual')\n    + '\\n\\n'\n    + lines.map(cleanUp).filter(notBlank).join('\\n');\n}\n\n/**\n * Return a character diff for `err`.\n *\n * @api private\n * @param {Error} err\n * @param {string} type\n * @param {boolean} escape\n * @return {string}\n */\nfunction errorDiff(err, type, escape) {\n  var actual = escape ? escapeInvisibles(err.actual) : err.actual;\n  var expected = escape ? escapeInvisibles(err.expected) : err.expected;\n  return diff['diff' + type](actual, expected).map(function(str) {\n    if (str.added) {\n      return colorLines('diff added', str.value);\n    }\n    if (str.removed) {\n      return colorLines('diff removed', str.value);\n    }\n    return str.value;\n  }).join('');\n}\n\n/**\n * Returns a string with all invisible characters in plain text\n *\n * @api private\n * @param {string} line\n * @return {string}\n */\nfunction escapeInvisibles(line) {\n  return line.replace(/\\t/g, '<tab>')\n    .replace(/\\r/g, '<CR>')\n    .replace(/\\n/g, '<LF>\\n');\n}\n\n/**\n * Color lines for `str`, using the color `name`.\n *\n * @api private\n * @param {string} name\n * @param {string} str\n * @return {string}\n */\nfunction colorLines(name, str) {\n  return str.split('\\n').map(function(str) {\n    return color(name, str);\n  }).join('\\n');\n}\n\n/**\n * Object#toString reference.\n */\nvar objToString = Object.prototype.toString;\n\n/**\n * Check that a / b have the same type.\n *\n * @api private\n * @param {Object} a\n * @param {Object} b\n * @return {boolean}\n */\nfunction sameType(a, b) {\n  return objToString.call(a) === objToString.call(b);\n}\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"../ms\":15,\"../utils\":38,\"_process\":67,\"diff\":46,\"supports-color\":42,\"tty\":5}],18:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar utils = require('../utils');\n\n/**\n * Expose `Doc`.\n */\n\nexports = module.exports = Doc;\n\n/**\n * Initialize a new `Doc` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\nfunction Doc(runner) {\n  Base.call(this, runner);\n\n  var indents = 2;\n\n  function indent() {\n    return Array(indents).join('  ');\n  }\n\n  runner.on('suite', function(suite) {\n    if (suite.root) {\n      return;\n    }\n    ++indents;\n    console.log('%s<section class=\"suite\">', indent());\n    ++indents;\n    console.log('%s<h1>%s</h1>', indent(), utils.escape(suite.title));\n    console.log('%s<dl>', indent());\n  });\n\n  runner.on('suite end', function(suite) {\n    if (suite.root) {\n      return;\n    }\n    console.log('%s</dl>', indent());\n    --indents;\n    console.log('%s</section>', indent());\n    --indents;\n  });\n\n  runner.on('pass', function(test) {\n    console.log('%s  <dt>%s</dt>', indent(), utils.escape(test.title));\n    var code = utils.escape(utils.clean(test.body));\n    console.log('%s  <dd><pre><code>%s</code></pre></dd>', indent(), code);\n  });\n\n  runner.on('fail', function(test, err) {\n    console.log('%s  <dt class=\"error\">%s</dt>', indent(), utils.escape(test.title));\n    var code = utils.escape(utils.clean(test.body));\n    console.log('%s  <dd class=\"error\"><pre><code>%s</code></pre></dd>', indent(), code);\n    console.log('%s  <dd class=\"error\">%s</dd>', indent(), utils.escape(err));\n  });\n}\n\n},{\"../utils\":38,\"./base\":17}],19:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\nvar color = Base.color;\n\n/**\n * Expose `Dot`.\n */\n\nexports = module.exports = Dot;\n\n/**\n * Initialize a new `Dot` matrix test reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction Dot(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var width = Base.window.width * .75 | 0;\n  var n = -1;\n\n  runner.on('start', function() {\n    process.stdout.write('\\n');\n  });\n\n  runner.on('pending', function() {\n    if (++n % width === 0) {\n      process.stdout.write('\\n  ');\n    }\n    process.stdout.write(color('pending', Base.symbols.comma));\n  });\n\n  runner.on('pass', function(test) {\n    if (++n % width === 0) {\n      process.stdout.write('\\n  ');\n    }\n    if (test.speed === 'slow') {\n      process.stdout.write(color('bright yellow', Base.symbols.dot));\n    } else {\n      process.stdout.write(color(test.speed, Base.symbols.dot));\n    }\n  });\n\n  runner.on('fail', function() {\n    if (++n % width === 0) {\n      process.stdout.write('\\n  ');\n    }\n    process.stdout.write(color('fail', Base.symbols.bang));\n  });\n\n  runner.on('end', function() {\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(Dot, Base);\n\n}).call(this,require('_process'))\n},{\"../utils\":38,\"./base\":17,\"_process\":67}],20:[function(require,module,exports){\n(function (global){\n/* eslint-env browser */\n\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar utils = require('../utils');\nvar Progress = require('../browser/progress');\nvar escapeRe = require('escape-string-regexp');\nvar escape = utils.escape;\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\n/* eslint-disable no-unused-vars, no-native-reassign */\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n/* eslint-enable no-unused-vars, no-native-reassign */\n\n/**\n * Expose `HTML`.\n */\n\nexports = module.exports = HTML;\n\n/**\n * Stats template.\n */\n\nvar statsTemplate = '<ul id=\"mocha-stats\">'\n  + '<li class=\"progress\"><canvas width=\"40\" height=\"40\"></canvas></li>'\n  + '<li class=\"passes\"><a href=\"javascript:void(0);\">passes:</a> <em>0</em></li>'\n  + '<li class=\"failures\"><a href=\"javascript:void(0);\">failures:</a> <em>0</em></li>'\n  + '<li class=\"duration\">duration: <em>0</em>s</li>'\n  + '</ul>';\n\n/**\n * Initialize a new `HTML` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction HTML(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var stats = this.stats;\n  var stat = fragment(statsTemplate);\n  var items = stat.getElementsByTagName('li');\n  var passes = items[1].getElementsByTagName('em')[0];\n  var passesLink = items[1].getElementsByTagName('a')[0];\n  var failures = items[2].getElementsByTagName('em')[0];\n  var failuresLink = items[2].getElementsByTagName('a')[0];\n  var duration = items[3].getElementsByTagName('em')[0];\n  var canvas = stat.getElementsByTagName('canvas')[0];\n  var report = fragment('<ul id=\"mocha-report\"></ul>');\n  var stack = [report];\n  var progress;\n  var ctx;\n  var root = document.getElementById('mocha');\n\n  if (canvas.getContext) {\n    var ratio = window.devicePixelRatio || 1;\n    canvas.style.width = canvas.width;\n    canvas.style.height = canvas.height;\n    canvas.width *= ratio;\n    canvas.height *= ratio;\n    ctx = canvas.getContext('2d');\n    ctx.scale(ratio, ratio);\n    progress = new Progress();\n  }\n\n  if (!root) {\n    return error('#mocha div missing, add it to your document');\n  }\n\n  // pass toggle\n  on(passesLink, 'click', function(evt) {\n    evt.preventDefault();\n    unhide();\n    var name = (/pass/).test(report.className) ? '' : ' pass';\n    report.className = report.className.replace(/fail|pass/g, '') + name;\n    if (report.className.trim()) {\n      hideSuitesWithout('test pass');\n    }\n  });\n\n  // failure toggle\n  on(failuresLink, 'click', function(evt) {\n    evt.preventDefault();\n    unhide();\n    var name = (/fail/).test(report.className) ? '' : ' fail';\n    report.className = report.className.replace(/fail|pass/g, '') + name;\n    if (report.className.trim()) {\n      hideSuitesWithout('test fail');\n    }\n  });\n\n  root.appendChild(stat);\n  root.appendChild(report);\n\n  if (progress) {\n    progress.size(40);\n  }\n\n  runner.on('suite', function(suite) {\n    if (suite.root) {\n      return;\n    }\n\n    // suite\n    var url = self.suiteURL(suite);\n    var el = fragment('<li class=\"suite\"><h1><a href=\"%s\">%s</a></h1></li>', url, escape(suite.title));\n\n    // container\n    stack[0].appendChild(el);\n    stack.unshift(document.createElement('ul'));\n    el.appendChild(stack[0]);\n  });\n\n  runner.on('suite end', function(suite) {\n    if (suite.root) {\n      updateStats();\n      return;\n    }\n    stack.shift();\n  });\n\n  runner.on('pass', function(test) {\n    var url = self.testURL(test);\n    var markup = '<li class=\"test pass %e\"><h2>%e<span class=\"duration\">%ems</span> '\n      + '<a href=\"%s\" class=\"replay\">‣</a></h2></li>';\n    var el = fragment(markup, test.speed, test.title, test.duration, url);\n    self.addCodeToggle(el, test.body);\n    appendToStack(el);\n    updateStats();\n  });\n\n  runner.on('fail', function(test) {\n    var el = fragment('<li class=\"test fail\"><h2>%e <a href=\"%e\" class=\"replay\">‣</a></h2></li>',\n      test.title, self.testURL(test));\n    var stackString; // Note: Includes leading newline\n    var message = test.err.toString();\n\n    // <=IE7 stringifies to [Object Error]. Since it can be overloaded, we\n    // check for the result of the stringifying.\n    if (message === '[object Error]') {\n      message = test.err.message;\n    }\n\n    if (test.err.stack) {\n      var indexOfMessage = test.err.stack.indexOf(test.err.message);\n      if (indexOfMessage === -1) {\n        stackString = test.err.stack;\n      } else {\n        stackString = test.err.stack.substr(test.err.message.length + indexOfMessage);\n      }\n    } else if (test.err.sourceURL && test.err.line !== undefined) {\n      // Safari doesn't give you a stack. Let's at least provide a source line.\n      stackString = '\\n(' + test.err.sourceURL + ':' + test.err.line + ')';\n    }\n\n    stackString = stackString || '';\n\n    if (test.err.htmlMessage && stackString) {\n      el.appendChild(fragment('<div class=\"html-error\">%s\\n<pre class=\"error\">%e</pre></div>',\n        test.err.htmlMessage, stackString));\n    } else if (test.err.htmlMessage) {\n      el.appendChild(fragment('<div class=\"html-error\">%s</div>', test.err.htmlMessage));\n    } else {\n      el.appendChild(fragment('<pre class=\"error\">%e%e</pre>', message, stackString));\n    }\n\n    self.addCodeToggle(el, test.body);\n    appendToStack(el);\n    updateStats();\n  });\n\n  runner.on('pending', function(test) {\n    var el = fragment('<li class=\"test pass pending\"><h2>%e</h2></li>', test.title);\n    appendToStack(el);\n    updateStats();\n  });\n\n  function appendToStack(el) {\n    // Don't call .appendChild if #mocha-report was already .shift()'ed off the stack.\n    if (stack[0]) {\n      stack[0].appendChild(el);\n    }\n  }\n\n  function updateStats() {\n    // TODO: add to stats\n    var percent = stats.tests / runner.total * 100 | 0;\n    if (progress) {\n      progress.update(percent).draw(ctx);\n    }\n\n    // update stats\n    var ms = new Date() - stats.start;\n    text(passes, stats.passes);\n    text(failures, stats.failures);\n    text(duration, (ms / 1000).toFixed(2));\n  }\n}\n\n/**\n * Makes a URL, preserving querystring (\"search\") parameters.\n *\n * @param {string} s\n * @return {string} A new URL.\n */\nfunction makeUrl(s) {\n  var search = window.location.search;\n\n  // Remove previous grep query parameter if present\n  if (search) {\n    search = search.replace(/[?&]grep=[^&\\s]*/g, '').replace(/^&/, '?');\n  }\n\n  return window.location.pathname + (search ? search + '&' : '?') + 'grep=' + encodeURIComponent(escapeRe(s));\n}\n\n/**\n * Provide suite URL.\n *\n * @param {Object} [suite]\n */\nHTML.prototype.suiteURL = function(suite) {\n  return makeUrl(suite.fullTitle());\n};\n\n/**\n * Provide test URL.\n *\n * @param {Object} [test]\n */\nHTML.prototype.testURL = function(test) {\n  return makeUrl(test.fullTitle());\n};\n\n/**\n * Adds code toggle functionality for the provided test's list element.\n *\n * @param {HTMLLIElement} el\n * @param {string} contents\n */\nHTML.prototype.addCodeToggle = function(el, contents) {\n  var h2 = el.getElementsByTagName('h2')[0];\n\n  on(h2, 'click', function() {\n    pre.style.display = pre.style.display === 'none' ? 'block' : 'none';\n  });\n\n  var pre = fragment('<pre><code>%e</code></pre>', utils.clean(contents));\n  el.appendChild(pre);\n  pre.style.display = 'none';\n};\n\n/**\n * Display error `msg`.\n *\n * @param {string} msg\n */\nfunction error(msg) {\n  document.body.appendChild(fragment('<div id=\"mocha-error\">%s</div>', msg));\n}\n\n/**\n * Return a DOM fragment from `html`.\n *\n * @param {string} html\n */\nfunction fragment(html) {\n  var args = arguments;\n  var div = document.createElement('div');\n  var i = 1;\n\n  div.innerHTML = html.replace(/%([se])/g, function(_, type) {\n    switch (type) {\n      case 's': return String(args[i++]);\n      case 'e': return escape(args[i++]);\n      // no default\n    }\n  });\n\n  return div.firstChild;\n}\n\n/**\n * Check for suites that do not have elements\n * with `classname`, and hide them.\n *\n * @param {text} classname\n */\nfunction hideSuitesWithout(classname) {\n  var suites = document.getElementsByClassName('suite');\n  for (var i = 0; i < suites.length; i++) {\n    var els = suites[i].getElementsByClassName(classname);\n    if (!els.length) {\n      suites[i].className += ' hidden';\n    }\n  }\n}\n\n/**\n * Unhide .hidden suites.\n */\nfunction unhide() {\n  var els = document.getElementsByClassName('suite hidden');\n  for (var i = 0; i < els.length; ++i) {\n    els[i].className = els[i].className.replace('suite hidden', 'suite');\n  }\n}\n\n/**\n * Set an element's text contents.\n *\n * @param {HTMLElement} el\n * @param {string} contents\n */\nfunction text(el, contents) {\n  if (el.textContent) {\n    el.textContent = contents;\n  } else {\n    el.innerText = contents;\n  }\n}\n\n/**\n * Listen on `event` with callback `fn`.\n */\nfunction on(el, event, fn) {\n  if (el.addEventListener) {\n    el.addEventListener(event, fn, false);\n  } else {\n    el.attachEvent('on' + event, fn);\n  }\n}\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"../browser/progress\":4,\"../utils\":38,\"./base\":17,\"escape-string-regexp\":47}],21:[function(require,module,exports){\n// Alias exports to a their normalized format Mocha#reporter to prevent a need\n// for dynamic (try/catch) requires, which Browserify doesn't handle.\nexports.Base = exports.base = require('./base');\nexports.Dot = exports.dot = require('./dot');\nexports.Doc = exports.doc = require('./doc');\nexports.TAP = exports.tap = require('./tap');\nexports.JSON = exports.json = require('./json');\nexports.HTML = exports.html = require('./html');\nexports.List = exports.list = require('./list');\nexports.Min = exports.min = require('./min');\nexports.Spec = exports.spec = require('./spec');\nexports.Nyan = exports.nyan = require('./nyan');\nexports.XUnit = exports.xunit = require('./xunit');\nexports.Markdown = exports.markdown = require('./markdown');\nexports.Progress = exports.progress = require('./progress');\nexports.Landing = exports.landing = require('./landing');\nexports.JSONStream = exports['json-stream'] = require('./json-stream');\n\n},{\"./base\":17,\"./doc\":18,\"./dot\":19,\"./html\":20,\"./json\":23,\"./json-stream\":22,\"./landing\":24,\"./list\":25,\"./markdown\":26,\"./min\":27,\"./nyan\":28,\"./progress\":29,\"./spec\":30,\"./tap\":31,\"./xunit\":32}],22:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar JSON = require('json3');\n\n/**\n * Expose `List`.\n */\n\nexports = module.exports = List;\n\n/**\n * Initialize a new `List` test reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction List(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var total = runner.total;\n\n  runner.on('start', function() {\n    console.log(JSON.stringify(['start', { total: total }]));\n  });\n\n  runner.on('pass', function(test) {\n    console.log(JSON.stringify(['pass', clean(test)]));\n  });\n\n  runner.on('fail', function(test, err) {\n    test = clean(test);\n    test.err = err.message;\n    test.stack = err.stack || null;\n    console.log(JSON.stringify(['fail', test]));\n  });\n\n  runner.on('end', function() {\n    process.stdout.write(JSON.stringify(['end', self.stats]));\n  });\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @api private\n * @param {Object} test\n * @return {Object}\n */\nfunction clean(test) {\n  return {\n    title: test.title,\n    fullTitle: test.fullTitle(),\n    duration: test.duration,\n    currentRetry: test.currentRetry()\n  };\n}\n\n}).call(this,require('_process'))\n},{\"./base\":17,\"_process\":67,\"json3\":54}],23:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `JSON`.\n */\n\nexports = module.exports = JSONReporter;\n\n/**\n * Initialize a new `JSON` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction JSONReporter(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var tests = [];\n  var pending = [];\n  var failures = [];\n  var passes = [];\n\n  runner.on('test end', function(test) {\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test) {\n    passes.push(test);\n  });\n\n  runner.on('fail', function(test) {\n    failures.push(test);\n  });\n\n  runner.on('pending', function(test) {\n    pending.push(test);\n  });\n\n  runner.on('end', function() {\n    var obj = {\n      stats: self.stats,\n      tests: tests.map(clean),\n      pending: pending.map(clean),\n      failures: failures.map(clean),\n      passes: passes.map(clean)\n    };\n\n    runner.testResults = obj;\n\n    process.stdout.write(JSON.stringify(obj, null, 2));\n  });\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @api private\n * @param {Object} test\n * @return {Object}\n */\nfunction clean(test) {\n  return {\n    title: test.title,\n    fullTitle: test.fullTitle(),\n    duration: test.duration,\n    currentRetry: test.currentRetry(),\n    err: errorJSON(test.err || {})\n  };\n}\n\n/**\n * Transform `error` into a JSON object.\n *\n * @api private\n * @param {Error} err\n * @return {Object}\n */\nfunction errorJSON(err) {\n  var res = {};\n  Object.getOwnPropertyNames(err).forEach(function(key) {\n    res[key] = err[key];\n  }, err);\n  return res;\n}\n\n}).call(this,require('_process'))\n},{\"./base\":17,\"_process\":67}],24:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\nvar cursor = Base.cursor;\nvar color = Base.color;\n\n/**\n * Expose `Landing`.\n */\n\nexports = module.exports = Landing;\n\n/**\n * Airplane color.\n */\n\nBase.colors.plane = 0;\n\n/**\n * Airplane crash color.\n */\n\nBase.colors['plane crash'] = 31;\n\n/**\n * Runway color.\n */\n\nBase.colors.runway = 90;\n\n/**\n * Initialize a new `Landing` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction Landing(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var width = Base.window.width * .75 | 0;\n  var total = runner.total;\n  var stream = process.stdout;\n  var plane = color('plane', '✈');\n  var crashed = -1;\n  var n = 0;\n\n  function runway() {\n    var buf = Array(width).join('-');\n    return '  ' + color('runway', buf);\n  }\n\n  runner.on('start', function() {\n    stream.write('\\n\\n\\n  ');\n    cursor.hide();\n  });\n\n  runner.on('test end', function(test) {\n    // check if the plane crashed\n    var col = crashed === -1 ? width * ++n / total | 0 : crashed;\n\n    // show the crash\n    if (test.state === 'failed') {\n      plane = color('plane crash', '✈');\n      crashed = col;\n    }\n\n    // render landing strip\n    stream.write('\\u001b[' + (width + 1) + 'D\\u001b[2A');\n    stream.write(runway());\n    stream.write('\\n  ');\n    stream.write(color('runway', Array(col).join('⋅')));\n    stream.write(plane);\n    stream.write(color('runway', Array(width - col).join('⋅') + '\\n'));\n    stream.write(runway());\n    stream.write('\\u001b[0m');\n  });\n\n  runner.on('end', function() {\n    cursor.show();\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(Landing, Base);\n\n}).call(this,require('_process'))\n},{\"../utils\":38,\"./base\":17,\"_process\":67}],25:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\nvar color = Base.color;\nvar cursor = Base.cursor;\n\n/**\n * Expose `List`.\n */\n\nexports = module.exports = List;\n\n/**\n * Initialize a new `List` test reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction List(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var n = 0;\n\n  runner.on('start', function() {\n    console.log();\n  });\n\n  runner.on('test', function(test) {\n    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));\n  });\n\n  runner.on('pending', function(test) {\n    var fmt = color('checkmark', '  -')\n      + color('pending', ' %s');\n    console.log(fmt, test.fullTitle());\n  });\n\n  runner.on('pass', function(test) {\n    var fmt = color('checkmark', '  ' + Base.symbols.dot)\n      + color('pass', ' %s: ')\n      + color(test.speed, '%dms');\n    cursor.CR();\n    console.log(fmt, test.fullTitle(), test.duration);\n  });\n\n  runner.on('fail', function(test) {\n    cursor.CR();\n    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());\n  });\n\n  runner.on('end', self.epilogue.bind(self));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(List, Base);\n\n}).call(this,require('_process'))\n},{\"../utils\":38,\"./base\":17,\"_process\":67}],26:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar utils = require('../utils');\n\n/**\n * Constants\n */\n\nvar SUITE_PREFIX = '$';\n\n/**\n * Expose `Markdown`.\n */\n\nexports = module.exports = Markdown;\n\n/**\n * Initialize a new `Markdown` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction Markdown(runner) {\n  Base.call(this, runner);\n\n  var level = 0;\n  var buf = '';\n\n  function title(str) {\n    return Array(level).join('#') + ' ' + str;\n  }\n\n  function mapTOC(suite, obj) {\n    var ret = obj;\n    var key = SUITE_PREFIX + suite.title;\n\n    obj = obj[key] = obj[key] || { suite: suite };\n    suite.suites.forEach(function(suite) {\n      mapTOC(suite, obj);\n    });\n\n    return ret;\n  }\n\n  function stringifyTOC(obj, level) {\n    ++level;\n    var buf = '';\n    var link;\n    for (var key in obj) {\n      if (key === 'suite') {\n        continue;\n      }\n      if (key !== SUITE_PREFIX) {\n        link = ' - [' + key.substring(1) + ']';\n        link += '(#' + utils.slug(obj[key].suite.fullTitle()) + ')\\n';\n        buf += Array(level).join('  ') + link;\n      }\n      buf += stringifyTOC(obj[key], level);\n    }\n    return buf;\n  }\n\n  function generateTOC(suite) {\n    var obj = mapTOC(suite, {});\n    return stringifyTOC(obj, 0);\n  }\n\n  generateTOC(runner.suite);\n\n  runner.on('suite', function(suite) {\n    ++level;\n    var slug = utils.slug(suite.fullTitle());\n    buf += '<a name=\"' + slug + '\"></a>' + '\\n';\n    buf += title(suite.title) + '\\n';\n  });\n\n  runner.on('suite end', function() {\n    --level;\n  });\n\n  runner.on('pass', function(test) {\n    var code = utils.clean(test.body);\n    buf += test.title + '.\\n';\n    buf += '\\n```js\\n';\n    buf += code + '\\n';\n    buf += '```\\n\\n';\n  });\n\n  runner.on('end', function() {\n    process.stdout.write('# TOC\\n');\n    process.stdout.write(generateTOC(runner.suite));\n    process.stdout.write(buf);\n  });\n}\n\n}).call(this,require('_process'))\n},{\"../utils\":38,\"./base\":17,\"_process\":67}],27:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\n\n/**\n * Expose `Min`.\n */\n\nexports = module.exports = Min;\n\n/**\n * Initialize a new `Min` minimal test reporter (best used with --watch).\n *\n * @api public\n * @param {Runner} runner\n */\nfunction Min(runner) {\n  Base.call(this, runner);\n\n  runner.on('start', function() {\n    // clear screen\n    process.stdout.write('\\u001b[2J');\n    // set cursor position\n    process.stdout.write('\\u001b[1;3H');\n  });\n\n  runner.on('end', this.epilogue.bind(this));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(Min, Base);\n\n}).call(this,require('_process'))\n},{\"../utils\":38,\"./base\":17,\"_process\":67}],28:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\n\n/**\n * Expose `Dot`.\n */\n\nexports = module.exports = NyanCat;\n\n/**\n * Initialize a new `Dot` matrix test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction NyanCat(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var width = Base.window.width * .75 | 0;\n  var nyanCatWidth = this.nyanCatWidth = 11;\n\n  this.colorIndex = 0;\n  this.numberOfLines = 4;\n  this.rainbowColors = self.generateColors();\n  this.scoreboardWidth = 5;\n  this.tick = 0;\n  this.trajectories = [[], [], [], []];\n  this.trajectoryWidthMax = (width - nyanCatWidth);\n\n  runner.on('start', function() {\n    Base.cursor.hide();\n    self.draw();\n  });\n\n  runner.on('pending', function() {\n    self.draw();\n  });\n\n  runner.on('pass', function() {\n    self.draw();\n  });\n\n  runner.on('fail', function() {\n    self.draw();\n  });\n\n  runner.on('end', function() {\n    Base.cursor.show();\n    for (var i = 0; i < self.numberOfLines; i++) {\n      write('\\n');\n    }\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(NyanCat, Base);\n\n/**\n * Draw the nyan cat\n *\n * @api private\n */\n\nNyanCat.prototype.draw = function() {\n  this.appendRainbow();\n  this.drawScoreboard();\n  this.drawRainbow();\n  this.drawNyanCat();\n  this.tick = !this.tick;\n};\n\n/**\n * Draw the \"scoreboard\" showing the number\n * of passes, failures and pending tests.\n *\n * @api private\n */\n\nNyanCat.prototype.drawScoreboard = function() {\n  var stats = this.stats;\n\n  function draw(type, n) {\n    write(' ');\n    write(Base.color(type, n));\n    write('\\n');\n  }\n\n  draw('green', stats.passes);\n  draw('fail', stats.failures);\n  draw('pending', stats.pending);\n  write('\\n');\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Append the rainbow.\n *\n * @api private\n */\n\nNyanCat.prototype.appendRainbow = function() {\n  var segment = this.tick ? '_' : '-';\n  var rainbowified = this.rainbowify(segment);\n\n  for (var index = 0; index < this.numberOfLines; index++) {\n    var trajectory = this.trajectories[index];\n    if (trajectory.length >= this.trajectoryWidthMax) {\n      trajectory.shift();\n    }\n    trajectory.push(rainbowified);\n  }\n};\n\n/**\n * Draw the rainbow.\n *\n * @api private\n */\n\nNyanCat.prototype.drawRainbow = function() {\n  var self = this;\n\n  this.trajectories.forEach(function(line) {\n    write('\\u001b[' + self.scoreboardWidth + 'C');\n    write(line.join(''));\n    write('\\n');\n  });\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Draw the nyan cat\n *\n * @api private\n */\nNyanCat.prototype.drawNyanCat = function() {\n  var self = this;\n  var startWidth = this.scoreboardWidth + this.trajectories[0].length;\n  var dist = '\\u001b[' + startWidth + 'C';\n  var padding = '';\n\n  write(dist);\n  write('_,------,');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? '  ' : '   ';\n  write('_|' + padding + '/\\\\_/\\\\ ');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? '_' : '__';\n  var tail = self.tick ? '~' : '^';\n  write(tail + '|' + padding + this.face() + ' ');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? ' ' : '  ';\n  write(padding + '\"\"  \"\" ');\n  write('\\n');\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Draw nyan cat face.\n *\n * @api private\n * @return {string}\n */\n\nNyanCat.prototype.face = function() {\n  var stats = this.stats;\n  if (stats.failures) {\n    return '( x .x)';\n  } else if (stats.pending) {\n    return '( o .o)';\n  } else if (stats.passes) {\n    return '( ^ .^)';\n  }\n  return '( - .-)';\n};\n\n/**\n * Move cursor up `n`.\n *\n * @api private\n * @param {number} n\n */\n\nNyanCat.prototype.cursorUp = function(n) {\n  write('\\u001b[' + n + 'A');\n};\n\n/**\n * Move cursor down `n`.\n *\n * @api private\n * @param {number} n\n */\n\nNyanCat.prototype.cursorDown = function(n) {\n  write('\\u001b[' + n + 'B');\n};\n\n/**\n * Generate rainbow colors.\n *\n * @api private\n * @return {Array}\n */\nNyanCat.prototype.generateColors = function() {\n  var colors = [];\n\n  for (var i = 0; i < (6 * 7); i++) {\n    var pi3 = Math.floor(Math.PI / 3);\n    var n = (i * (1.0 / 6));\n    var r = Math.floor(3 * Math.sin(n) + 3);\n    var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);\n    var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);\n    colors.push(36 * r + 6 * g + b + 16);\n  }\n\n  return colors;\n};\n\n/**\n * Apply rainbow to the given `str`.\n *\n * @api private\n * @param {string} str\n * @return {string}\n */\nNyanCat.prototype.rainbowify = function(str) {\n  if (!Base.useColors) {\n    return str;\n  }\n  var color = this.rainbowColors[this.colorIndex % this.rainbowColors.length];\n  this.colorIndex += 1;\n  return '\\u001b[38;5;' + color + 'm' + str + '\\u001b[0m';\n};\n\n/**\n * Stdout helper.\n *\n * @param {string} string A message to write to stdout.\n */\nfunction write(string) {\n  process.stdout.write(string);\n}\n\n}).call(this,require('_process'))\n},{\"../utils\":38,\"./base\":17,\"_process\":67}],29:[function(require,module,exports){\n(function (process){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\nvar color = Base.color;\nvar cursor = Base.cursor;\n\n/**\n * Expose `Progress`.\n */\n\nexports = module.exports = Progress;\n\n/**\n * General progress bar color.\n */\n\nBase.colors.progress = 90;\n\n/**\n * Initialize a new `Progress` bar test reporter.\n *\n * @api public\n * @param {Runner} runner\n * @param {Object} options\n */\nfunction Progress(runner, options) {\n  Base.call(this, runner);\n\n  var self = this;\n  var width = Base.window.width * .50 | 0;\n  var total = runner.total;\n  var complete = 0;\n  var lastN = -1;\n\n  // default chars\n  options = options || {};\n  options.open = options.open || '[';\n  options.complete = options.complete || '▬';\n  options.incomplete = options.incomplete || Base.symbols.dot;\n  options.close = options.close || ']';\n  options.verbose = false;\n\n  // tests started\n  runner.on('start', function() {\n    console.log();\n    cursor.hide();\n  });\n\n  // tests complete\n  runner.on('test end', function() {\n    complete++;\n\n    var percent = complete / total;\n    var n = width * percent | 0;\n    var i = width - n;\n\n    if (n === lastN && !options.verbose) {\n      // Don't re-render the line if it hasn't changed\n      return;\n    }\n    lastN = n;\n\n    cursor.CR();\n    process.stdout.write('\\u001b[J');\n    process.stdout.write(color('progress', '  ' + options.open));\n    process.stdout.write(Array(n).join(options.complete));\n    process.stdout.write(Array(i).join(options.incomplete));\n    process.stdout.write(color('progress', options.close));\n    if (options.verbose) {\n      process.stdout.write(color('progress', ' ' + complete + ' of ' + total));\n    }\n  });\n\n  // tests are complete, output some stats\n  // and the failures if any\n  runner.on('end', function() {\n    cursor.show();\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(Progress, Base);\n\n}).call(this,require('_process'))\n},{\"../utils\":38,\"./base\":17,\"_process\":67}],30:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar inherits = require('../utils').inherits;\nvar color = Base.color;\n\n/**\n * Expose `Spec`.\n */\n\nexports = module.exports = Spec;\n\n/**\n * Initialize a new `Spec` test reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction Spec(runner) {\n  Base.call(this, runner);\n\n  var self = this;\n  var indents = 0;\n  var n = 0;\n\n  function indent() {\n    return Array(indents).join('  ');\n  }\n\n  runner.on('start', function() {\n    console.log();\n  });\n\n  runner.on('suite', function(suite) {\n    ++indents;\n    console.log(color('suite', '%s%s'), indent(), suite.title);\n  });\n\n  runner.on('suite end', function() {\n    --indents;\n    if (indents === 1) {\n      console.log();\n    }\n  });\n\n  runner.on('pending', function(test) {\n    var fmt = indent() + color('pending', '  - %s');\n    console.log(fmt, test.title);\n  });\n\n  runner.on('pass', function(test) {\n    var fmt;\n    if (test.speed === 'fast') {\n      fmt = indent()\n        + color('checkmark', '  ' + Base.symbols.ok)\n        + color('pass', ' %s');\n      console.log(fmt, test.title);\n    } else {\n      fmt = indent()\n        + color('checkmark', '  ' + Base.symbols.ok)\n        + color('pass', ' %s')\n        + color(test.speed, ' (%dms)');\n      console.log(fmt, test.title, test.duration);\n    }\n  });\n\n  runner.on('fail', function(test) {\n    console.log(indent() + color('fail', '  %d) %s'), ++n, test.title);\n  });\n\n  runner.on('end', self.epilogue.bind(self));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(Spec, Base);\n\n},{\"../utils\":38,\"./base\":17}],31:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `TAP`.\n */\n\nexports = module.exports = TAP;\n\n/**\n * Initialize a new `TAP` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction TAP(runner) {\n  Base.call(this, runner);\n\n  var n = 1;\n  var passes = 0;\n  var failures = 0;\n\n  runner.on('start', function() {\n    var total = runner.grepTotal(runner.suite);\n    console.log('%d..%d', 1, total);\n  });\n\n  runner.on('test end', function() {\n    ++n;\n  });\n\n  runner.on('pending', function(test) {\n    console.log('ok %d %s # SKIP -', n, title(test));\n  });\n\n  runner.on('pass', function(test) {\n    passes++;\n    console.log('ok %d %s', n, title(test));\n  });\n\n  runner.on('fail', function(test, err) {\n    failures++;\n    console.log('not ok %d %s', n, title(test));\n    if (err.stack) {\n      console.log(err.stack.replace(/^/gm, '  '));\n    }\n  });\n\n  runner.on('end', function() {\n    console.log('# tests ' + (passes + failures));\n    console.log('# pass ' + passes);\n    console.log('# fail ' + failures);\n  });\n}\n\n/**\n * Return a TAP-safe title of `test`\n *\n * @api private\n * @param {Object} test\n * @return {String}\n */\nfunction title(test) {\n  return test.fullTitle().replace(/#/g, '');\n}\n\n},{\"./base\":17}],32:[function(require,module,exports){\n(function (process,global){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\nvar utils = require('../utils');\nvar inherits = utils.inherits;\nvar fs = require('fs');\nvar escape = utils.escape;\nvar mkdirp = require('mkdirp');\nvar path = require('path');\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\n/* eslint-disable no-unused-vars, no-native-reassign */\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n/* eslint-enable no-unused-vars, no-native-reassign */\n\n/**\n * Expose `XUnit`.\n */\n\nexports = module.exports = XUnit;\n\n/**\n * Initialize a new `XUnit` reporter.\n *\n * @api public\n * @param {Runner} runner\n */\nfunction XUnit(runner, options) {\n  Base.call(this, runner);\n\n  var stats = this.stats;\n  var tests = [];\n  var self = this;\n\n  if (options.reporterOptions && options.reporterOptions.output) {\n    if (!fs.createWriteStream) {\n      throw new Error('file output not supported in browser');\n    }\n    mkdirp.sync(path.dirname(options.reporterOptions.output));\n    self.fileStream = fs.createWriteStream(options.reporterOptions.output);\n  }\n\n  runner.on('pending', function(test) {\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test) {\n    tests.push(test);\n  });\n\n  runner.on('fail', function(test) {\n    tests.push(test);\n  });\n\n  runner.on('end', function() {\n    self.write(tag('testsuite', {\n      name: 'Mocha Tests',\n      tests: stats.tests,\n      failures: stats.failures,\n      errors: stats.failures,\n      skipped: stats.tests - stats.failures - stats.passes,\n      timestamp: (new Date()).toUTCString(),\n      time: (stats.duration / 1000) || 0\n    }, false));\n\n    tests.forEach(function(t) {\n      self.test(t);\n    });\n\n    self.write('</testsuite>');\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\ninherits(XUnit, Base);\n\n/**\n * Override done to close the stream (if it's a file).\n *\n * @param failures\n * @param {Function} fn\n */\nXUnit.prototype.done = function(failures, fn) {\n  if (this.fileStream) {\n    this.fileStream.end(function() {\n      fn(failures);\n    });\n  } else {\n    fn(failures);\n  }\n};\n\n/**\n * Write out the given line.\n *\n * @param {string} line\n */\nXUnit.prototype.write = function(line) {\n  if (this.fileStream) {\n    this.fileStream.write(line + '\\n');\n  } else if (typeof process === 'object' && process.stdout) {\n    process.stdout.write(line + '\\n');\n  } else {\n    console.log(line);\n  }\n};\n\n/**\n * Output tag for the given `test.`\n *\n * @param {Test} test\n */\nXUnit.prototype.test = function(test) {\n  var attrs = {\n    classname: test.parent.fullTitle(),\n    name: test.title,\n    time: (test.duration / 1000) || 0\n  };\n\n  if (test.state === 'failed') {\n    var err = test.err;\n    this.write(tag('testcase', attrs, false, tag('failure', {}, false, escape(err.message) + '\\n' + escape(err.stack))));\n  } else if (test.isPending()) {\n    this.write(tag('testcase', attrs, false, tag('skipped', {}, true)));\n  } else {\n    this.write(tag('testcase', attrs, true));\n  }\n};\n\n/**\n * HTML tag helper.\n *\n * @param name\n * @param attrs\n * @param close\n * @param content\n * @return {string}\n */\nfunction tag(name, attrs, close, content) {\n  var end = close ? '/>' : '>';\n  var pairs = [];\n  var tag;\n\n  for (var key in attrs) {\n    if (Object.prototype.hasOwnProperty.call(attrs, key)) {\n      pairs.push(key + '=\"' + escape(attrs[key]) + '\"');\n    }\n  }\n\n  tag = '<' + name + (pairs.length ? ' ' + pairs.join(' ') : '') + end;\n  if (content) {\n    tag += content + '</' + name + end;\n  }\n  return tag;\n}\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"../utils\":38,\"./base\":17,\"_process\":67,\"fs\":42,\"mkdirp\":64,\"path\":42}],33:[function(require,module,exports){\n(function (global){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('events').EventEmitter;\nvar JSON = require('json3');\nvar Pending = require('./pending');\nvar debug = require('debug')('mocha:runnable');\nvar milliseconds = require('./ms');\nvar utils = require('./utils');\nvar create = require('lodash.create');\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\n/* eslint-disable no-unused-vars, no-native-reassign */\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n/* eslint-enable no-unused-vars, no-native-reassign */\n\n/**\n * Object#toString().\n */\n\nvar toString = Object.prototype.toString;\n\n/**\n * Expose `Runnable`.\n */\n\nmodule.exports = Runnable;\n\n/**\n * Initialize a new `Runnable` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n * @param {string} title\n * @param {Function} fn\n */\nfunction Runnable(title, fn) {\n  this.title = title;\n  this.fn = fn;\n  this.body = (fn || '').toString();\n  this.async = fn && fn.length;\n  this.sync = !this.async;\n  this._timeout = 2000;\n  this._slow = 75;\n  this._enableTimeouts = true;\n  this.timedOut = false;\n  this._trace = new Error('done() called multiple times');\n  this._retries = -1;\n  this._currentRetry = 0;\n  this.pending = false;\n}\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\nRunnable.prototype = create(EventEmitter.prototype, {\n  constructor: Runnable\n});\n\n/**\n * Set & get timeout `ms`.\n *\n * @api private\n * @param {number|string} ms\n * @return {Runnable|number} ms or Runnable instance.\n */\nRunnable.prototype.timeout = function(ms) {\n  if (!arguments.length) {\n    return this._timeout;\n  }\n  // see #1652 for reasoning\n  if (ms === 0 || ms > Math.pow(2, 31)) {\n    this._enableTimeouts = false;\n  }\n  if (typeof ms === 'string') {\n    ms = milliseconds(ms);\n  }\n  debug('timeout %d', ms);\n  this._timeout = ms;\n  if (this.timer) {\n    this.resetTimeout();\n  }\n  return this;\n};\n\n/**\n * Set & get slow `ms`.\n *\n * @api private\n * @param {number|string} ms\n * @return {Runnable|number} ms or Runnable instance.\n */\nRunnable.prototype.slow = function(ms) {\n  if (typeof ms === 'undefined') {\n    return this._slow;\n  }\n  if (typeof ms === 'string') {\n    ms = milliseconds(ms);\n  }\n  debug('timeout %d', ms);\n  this._slow = ms;\n  return this;\n};\n\n/**\n * Set and get whether timeout is `enabled`.\n *\n * @api private\n * @param {boolean} enabled\n * @return {Runnable|boolean} enabled or Runnable instance.\n */\nRunnable.prototype.enableTimeouts = function(enabled) {\n  if (!arguments.length) {\n    return this._enableTimeouts;\n  }\n  debug('enableTimeouts %s', enabled);\n  this._enableTimeouts = enabled;\n  return this;\n};\n\n/**\n * Halt and mark as pending.\n *\n * @api public\n */\nRunnable.prototype.skip = function() {\n  throw new Pending();\n};\n\n/**\n * Check if this runnable or its parent suite is marked as pending.\n *\n * @api private\n */\nRunnable.prototype.isPending = function() {\n  return this.pending || (this.parent && this.parent.isPending());\n};\n\n/**\n * Set number of retries.\n *\n * @api private\n */\nRunnable.prototype.retries = function(n) {\n  if (!arguments.length) {\n    return this._retries;\n  }\n  this._retries = n;\n};\n\n/**\n * Get current retry\n *\n * @api private\n */\nRunnable.prototype.currentRetry = function(n) {\n  if (!arguments.length) {\n    return this._currentRetry;\n  }\n  this._currentRetry = n;\n};\n\n/**\n * Return the full title generated by recursively concatenating the parent's\n * full title.\n *\n * @api public\n * @return {string}\n */\nRunnable.prototype.fullTitle = function() {\n  return this.parent.fullTitle() + ' ' + this.title;\n};\n\n/**\n * Clear the timeout.\n *\n * @api private\n */\nRunnable.prototype.clearTimeout = function() {\n  clearTimeout(this.timer);\n};\n\n/**\n * Inspect the runnable void of private properties.\n *\n * @api private\n * @return {string}\n */\nRunnable.prototype.inspect = function() {\n  return JSON.stringify(this, function(key, val) {\n    if (key[0] === '_') {\n      return;\n    }\n    if (key === 'parent') {\n      return '#<Suite>';\n    }\n    if (key === 'ctx') {\n      return '#<Context>';\n    }\n    return val;\n  }, 2);\n};\n\n/**\n * Reset the timeout.\n *\n * @api private\n */\nRunnable.prototype.resetTimeout = function() {\n  var self = this;\n  var ms = this.timeout() || 1e9;\n\n  if (!this._enableTimeouts) {\n    return;\n  }\n  this.clearTimeout();\n  this.timer = setTimeout(function() {\n    if (!self._enableTimeouts) {\n      return;\n    }\n    self.callback(new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.'));\n    self.timedOut = true;\n  }, ms);\n};\n\n/**\n * Whitelist a list of globals for this test run.\n *\n * @api private\n * @param {string[]} globals\n */\nRunnable.prototype.globals = function(globals) {\n  if (!arguments.length) {\n    return this._allowedGlobals;\n  }\n  this._allowedGlobals = globals;\n};\n\n/**\n * Run the test and invoke `fn(err)`.\n *\n * @param {Function} fn\n * @api private\n */\nRunnable.prototype.run = function(fn) {\n  var self = this;\n  var start = new Date();\n  var ctx = this.ctx;\n  var finished;\n  var emitted;\n\n  // Sometimes the ctx exists, but it is not runnable\n  if (ctx && ctx.runnable) {\n    ctx.runnable(this);\n  }\n\n  // called multiple times\n  function multiple(err) {\n    if (emitted) {\n      return;\n    }\n    emitted = true;\n    self.emit('error', err || new Error('done() called multiple times; stacktrace may be inaccurate'));\n  }\n\n  // finished\n  function done(err) {\n    var ms = self.timeout();\n    if (self.timedOut) {\n      return;\n    }\n    if (finished) {\n      return multiple(err || self._trace);\n    }\n\n    self.clearTimeout();\n    self.duration = new Date() - start;\n    finished = true;\n    if (!err && self.duration > ms && self._enableTimeouts) {\n      err = new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.');\n    }\n    fn(err);\n  }\n\n  // for .resetTimeout()\n  this.callback = done;\n\n  // explicit async with `done` argument\n  if (this.async) {\n    this.resetTimeout();\n\n    if (this.allowUncaught) {\n      return callFnAsync(this.fn);\n    }\n    try {\n      // allows skip() to be used in an explicit async context\n      this.skip = function() {\n        done(new Pending());\n      };\n      callFnAsync(this.fn);\n    } catch (err) {\n      done(utils.getError(err));\n    }\n    return;\n  }\n\n  if (this.allowUncaught) {\n    callFn(this.fn);\n    done();\n    return;\n  }\n\n  // sync or promise-returning\n  try {\n    if (this.isPending()) {\n      done();\n    } else {\n      callFn(this.fn);\n    }\n  } catch (err) {\n    done(utils.getError(err));\n  }\n\n  function callFn(fn) {\n    var result = fn.call(ctx);\n    if (result && typeof result.then === 'function') {\n      self.resetTimeout();\n      result\n        .then(function() {\n          done();\n          // Return null so libraries like bluebird do not warn about\n          // subsequently constructed Promises.\n          return null;\n        },\n        function(reason) {\n          done(reason || new Error('Promise rejected with no or falsy reason'));\n        });\n    } else {\n      if (self.asyncOnly) {\n        return done(new Error('--async-only option in use without declaring `done()` or returning a promise'));\n      }\n\n      done();\n    }\n  }\n\n  function callFnAsync(fn) {\n    var result = fn.call(ctx, function(err) {\n      if (err instanceof Error || toString.call(err) === '[object Error]') {\n        return done(err);\n      }\n      if (err) {\n        if (Object.prototype.toString.call(err) === '[object Object]') {\n          return done(new Error('done() invoked with non-Error: '\n            + JSON.stringify(err)));\n        }\n        return done(new Error('done() invoked with non-Error: ' + err));\n      }\n      if (result && utils.isPromise(result)) {\n        return done(new Error('Resolution method is overspecified. Specify a callback *or* return a Promise; not both.'));\n      }\n\n      done();\n    });\n  }\n};\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"./ms\":15,\"./pending\":16,\"./utils\":38,\"debug\":2,\"events\":3,\"json3\":54,\"lodash.create\":60}],34:[function(require,module,exports){\n(function (process,global){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('events').EventEmitter;\nvar Pending = require('./pending');\nvar utils = require('./utils');\nvar inherits = utils.inherits;\nvar debug = require('debug')('mocha:runner');\nvar Runnable = require('./runnable');\nvar filter = utils.filter;\nvar indexOf = utils.indexOf;\nvar some = utils.some;\nvar keys = utils.keys;\nvar stackFilter = utils.stackTraceFilter();\nvar stringify = utils.stringify;\nvar type = utils.type;\nvar undefinedError = utils.undefinedError;\nvar isArray = utils.isArray;\n\n/**\n * Non-enumerable globals.\n */\n\nvar globals = [\n  'setTimeout',\n  'clearTimeout',\n  'setInterval',\n  'clearInterval',\n  'XMLHttpRequest',\n  'Date',\n  'setImmediate',\n  'clearImmediate'\n];\n\n/**\n * Expose `Runner`.\n */\n\nmodule.exports = Runner;\n\n/**\n * Initialize a `Runner` for the given `suite`.\n *\n * Events:\n *\n *   - `start`  execution started\n *   - `end`  execution complete\n *   - `suite`  (suite) test suite execution started\n *   - `suite end`  (suite) all tests (and sub-suites) have finished\n *   - `test`  (test) test execution started\n *   - `test end`  (test) test completed\n *   - `hook`  (hook) hook execution started\n *   - `hook end`  (hook) hook complete\n *   - `pass`  (test) test passed\n *   - `fail`  (test, err) test failed\n *   - `pending`  (test) test pending\n *\n * @api public\n * @param {Suite} suite Root suite\n * @param {boolean} [delay] Whether or not to delay execution of root suite\n * until ready.\n */\nfunction Runner(suite, delay) {\n  var self = this;\n  this._globals = [];\n  this._abort = false;\n  this._delay = delay;\n  this.suite = suite;\n  this.started = false;\n  this.total = suite.total();\n  this.failures = 0;\n  this.on('test end', function(test) {\n    self.checkGlobals(test);\n  });\n  this.on('hook end', function(hook) {\n    self.checkGlobals(hook);\n  });\n  this._defaultGrep = /.*/;\n  this.grep(this._defaultGrep);\n  this.globals(this.globalProps().concat(extraGlobals()));\n}\n\n/**\n * Wrapper for setImmediate, process.nextTick, or browser polyfill.\n *\n * @param {Function} fn\n * @api private\n */\nRunner.immediately = global.setImmediate || process.nextTick;\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\ninherits(Runner, EventEmitter);\n\n/**\n * Run tests with full titles matching `re`. Updates runner.total\n * with number of tests matched.\n *\n * @param {RegExp} re\n * @param {Boolean} invert\n * @return {Runner} for chaining\n * @api public\n * @param {RegExp} re\n * @param {boolean} invert\n * @return {Runner} Runner instance.\n */\nRunner.prototype.grep = function(re, invert) {\n  debug('grep %s', re);\n  this._grep = re;\n  this._invert = invert;\n  this.total = this.grepTotal(this.suite);\n  return this;\n};\n\n/**\n * Returns the number of tests matching the grep search for the\n * given suite.\n *\n * @param {Suite} suite\n * @return {Number}\n * @api public\n * @param {Suite} suite\n * @return {number}\n */\nRunner.prototype.grepTotal = function(suite) {\n  var self = this;\n  var total = 0;\n\n  suite.eachTest(function(test) {\n    var match = self._grep.test(test.fullTitle());\n    if (self._invert) {\n      match = !match;\n    }\n    if (match) {\n      total++;\n    }\n  });\n\n  return total;\n};\n\n/**\n * Return a list of global properties.\n *\n * @return {Array}\n * @api private\n */\nRunner.prototype.globalProps = function() {\n  var props = keys(global);\n\n  // non-enumerables\n  for (var i = 0; i < globals.length; ++i) {\n    if (~indexOf(props, globals[i])) {\n      continue;\n    }\n    props.push(globals[i]);\n  }\n\n  return props;\n};\n\n/**\n * Allow the given `arr` of globals.\n *\n * @param {Array} arr\n * @return {Runner} for chaining\n * @api public\n * @param {Array} arr\n * @return {Runner} Runner instance.\n */\nRunner.prototype.globals = function(arr) {\n  if (!arguments.length) {\n    return this._globals;\n  }\n  debug('globals %j', arr);\n  this._globals = this._globals.concat(arr);\n  return this;\n};\n\n/**\n * Check for global variable leaks.\n *\n * @api private\n */\nRunner.prototype.checkGlobals = function(test) {\n  if (this.ignoreLeaks) {\n    return;\n  }\n  var ok = this._globals;\n\n  var globals = this.globalProps();\n  var leaks;\n\n  if (test) {\n    ok = ok.concat(test._allowedGlobals || []);\n  }\n\n  if (this.prevGlobalsLength === globals.length) {\n    return;\n  }\n  this.prevGlobalsLength = globals.length;\n\n  leaks = filterLeaks(ok, globals);\n  this._globals = this._globals.concat(leaks);\n\n  if (leaks.length > 1) {\n    this.fail(test, new Error('global leaks detected: ' + leaks.join(', ') + ''));\n  } else if (leaks.length) {\n    this.fail(test, new Error('global leak detected: ' + leaks[0]));\n  }\n};\n\n/**\n * Fail the given `test`.\n *\n * @api private\n * @param {Test} test\n * @param {Error} err\n */\nRunner.prototype.fail = function(test, err) {\n  ++this.failures;\n  test.state = 'failed';\n\n  if (!(err instanceof Error || err && typeof err.message === 'string')) {\n    err = new Error('the ' + type(err) + ' ' + stringify(err) + ' was thrown, throw an Error :)');\n  }\n\n  err.stack = (this.fullStackTrace || !err.stack)\n    ? err.stack\n    : stackFilter(err.stack);\n\n  this.emit('fail', test, err);\n};\n\n/**\n * Fail the given `hook` with `err`.\n *\n * Hook failures work in the following pattern:\n * - If bail, then exit\n * - Failed `before` hook skips all tests in a suite and subsuites,\n *   but jumps to corresponding `after` hook\n * - Failed `before each` hook skips remaining tests in a\n *   suite and jumps to corresponding `after each` hook,\n *   which is run only once\n * - Failed `after` hook does not alter\n *   execution order\n * - Failed `after each` hook skips remaining tests in a\n *   suite and subsuites, but executes other `after each`\n *   hooks\n *\n * @api private\n * @param {Hook} hook\n * @param {Error} err\n */\nRunner.prototype.failHook = function(hook, err) {\n  if (hook.ctx && hook.ctx.currentTest) {\n    hook.originalTitle = hook.originalTitle || hook.title;\n    hook.title = hook.originalTitle + ' for \"' + hook.ctx.currentTest.title + '\"';\n  }\n\n  this.fail(hook, err);\n  if (this.suite.bail()) {\n    this.emit('end');\n  }\n};\n\n/**\n * Run hook `name` callbacks and then invoke `fn()`.\n *\n * @api private\n * @param {string} name\n * @param {Function} fn\n */\n\nRunner.prototype.hook = function(name, fn) {\n  var suite = this.suite;\n  var hooks = suite['_' + name];\n  var self = this;\n\n  function next(i) {\n    var hook = hooks[i];\n    if (!hook) {\n      return fn();\n    }\n    self.currentRunnable = hook;\n\n    hook.ctx.currentTest = self.test;\n\n    self.emit('hook', hook);\n\n    if (!hook.listeners('error').length) {\n      hook.on('error', function(err) {\n        self.failHook(hook, err);\n      });\n    }\n\n    hook.run(function(err) {\n      var testError = hook.error();\n      if (testError) {\n        self.fail(self.test, testError);\n      }\n      if (err) {\n        if (err instanceof Pending) {\n          if (name === 'beforeEach' || name === 'afterEach') {\n            self.test.pending = true;\n          } else {\n            suite.tests.forEach(function(test) {\n              test.pending = true;\n            });\n          }\n        } else {\n          self.failHook(hook, err);\n\n          // stop executing hooks, notify callee of hook err\n          return fn(err);\n        }\n      }\n      self.emit('hook end', hook);\n      delete hook.ctx.currentTest;\n      next(++i);\n    });\n  }\n\n  Runner.immediately(function() {\n    next(0);\n  });\n};\n\n/**\n * Run hook `name` for the given array of `suites`\n * in order, and callback `fn(err, errSuite)`.\n *\n * @api private\n * @param {string} name\n * @param {Array} suites\n * @param {Function} fn\n */\nRunner.prototype.hooks = function(name, suites, fn) {\n  var self = this;\n  var orig = this.suite;\n\n  function next(suite) {\n    self.suite = suite;\n\n    if (!suite) {\n      self.suite = orig;\n      return fn();\n    }\n\n    self.hook(name, function(err) {\n      if (err) {\n        var errSuite = self.suite;\n        self.suite = orig;\n        return fn(err, errSuite);\n      }\n\n      next(suites.pop());\n    });\n  }\n\n  next(suites.pop());\n};\n\n/**\n * Run hooks from the top level down.\n *\n * @param {String} name\n * @param {Function} fn\n * @api private\n */\nRunner.prototype.hookUp = function(name, fn) {\n  var suites = [this.suite].concat(this.parents()).reverse();\n  this.hooks(name, suites, fn);\n};\n\n/**\n * Run hooks from the bottom up.\n *\n * @param {String} name\n * @param {Function} fn\n * @api private\n */\nRunner.prototype.hookDown = function(name, fn) {\n  var suites = [this.suite].concat(this.parents());\n  this.hooks(name, suites, fn);\n};\n\n/**\n * Return an array of parent Suites from\n * closest to furthest.\n *\n * @return {Array}\n * @api private\n */\nRunner.prototype.parents = function() {\n  var suite = this.suite;\n  var suites = [];\n  while (suite.parent) {\n    suite = suite.parent;\n    suites.push(suite);\n  }\n  return suites;\n};\n\n/**\n * Run the current test and callback `fn(err)`.\n *\n * @param {Function} fn\n * @api private\n */\nRunner.prototype.runTest = function(fn) {\n  var self = this;\n  var test = this.test;\n\n  if (this.asyncOnly) {\n    test.asyncOnly = true;\n  }\n\n  if (this.allowUncaught) {\n    test.allowUncaught = true;\n    return test.run(fn);\n  }\n  try {\n    test.on('error', function(err) {\n      self.fail(test, err);\n    });\n    test.run(fn);\n  } catch (err) {\n    fn(err);\n  }\n};\n\n/**\n * Run tests in the given `suite` and invoke the callback `fn()` when complete.\n *\n * @api private\n * @param {Suite} suite\n * @param {Function} fn\n */\nRunner.prototype.runTests = function(suite, fn) {\n  var self = this;\n  var tests = suite.tests.slice();\n  var test;\n\n  function hookErr(_, errSuite, after) {\n    // before/after Each hook for errSuite failed:\n    var orig = self.suite;\n\n    // for failed 'after each' hook start from errSuite parent,\n    // otherwise start from errSuite itself\n    self.suite = after ? errSuite.parent : errSuite;\n\n    if (self.suite) {\n      // call hookUp afterEach\n      self.hookUp('afterEach', function(err2, errSuite2) {\n        self.suite = orig;\n        // some hooks may fail even now\n        if (err2) {\n          return hookErr(err2, errSuite2, true);\n        }\n        // report error suite\n        fn(errSuite);\n      });\n    } else {\n      // there is no need calling other 'after each' hooks\n      self.suite = orig;\n      fn(errSuite);\n    }\n  }\n\n  function next(err, errSuite) {\n    // if we bail after first err\n    if (self.failures && suite._bail) {\n      return fn();\n    }\n\n    if (self._abort) {\n      return fn();\n    }\n\n    if (err) {\n      return hookErr(err, errSuite, true);\n    }\n\n    // next test\n    test = tests.shift();\n\n    // all done\n    if (!test) {\n      return fn();\n    }\n\n    // grep\n    var match = self._grep.test(test.fullTitle());\n    if (self._invert) {\n      match = !match;\n    }\n    if (!match) {\n      // Run immediately only if we have defined a grep. When we\n      // define a grep — It can cause maximum callstack error if\n      // the grep is doing a large recursive loop by neglecting\n      // all tests. The run immediately function also comes with\n      // a performance cost. So we don't want to run immediately\n      // if we run the whole test suite, because running the whole\n      // test suite don't do any immediate recursive loops. Thus,\n      // allowing a JS runtime to breathe.\n      if (self._grep !== self._defaultGrep) {\n        Runner.immediately(next);\n      } else {\n        next();\n      }\n      return;\n    }\n\n    if (test.isPending()) {\n      self.emit('pending', test);\n      self.emit('test end', test);\n      return next();\n    }\n\n    // execute test and hook(s)\n    self.emit('test', self.test = test);\n    self.hookDown('beforeEach', function(err, errSuite) {\n      if (test.isPending()) {\n        self.emit('pending', test);\n        self.emit('test end', test);\n        return next();\n      }\n      if (err) {\n        return hookErr(err, errSuite, false);\n      }\n      self.currentRunnable = self.test;\n      self.runTest(function(err) {\n        test = self.test;\n        if (err) {\n          var retry = test.currentRetry();\n          if (err instanceof Pending) {\n            test.pending = true;\n            self.emit('pending', test);\n          } else if (retry < test.retries()) {\n            var clonedTest = test.clone();\n            clonedTest.currentRetry(retry + 1);\n            tests.unshift(clonedTest);\n\n            // Early return + hook trigger so that it doesn't\n            // increment the count wrong\n            return self.hookUp('afterEach', next);\n          } else {\n            self.fail(test, err);\n          }\n          self.emit('test end', test);\n\n          if (err instanceof Pending) {\n            return next();\n          }\n\n          return self.hookUp('afterEach', next);\n        }\n\n        test.state = 'passed';\n        self.emit('pass', test);\n        self.emit('test end', test);\n        self.hookUp('afterEach', next);\n      });\n    });\n  }\n\n  this.next = next;\n  this.hookErr = hookErr;\n  next();\n};\n\n/**\n * Run the given `suite` and invoke the callback `fn()` when complete.\n *\n * @api private\n * @param {Suite} suite\n * @param {Function} fn\n */\nRunner.prototype.runSuite = function(suite, fn) {\n  var i = 0;\n  var self = this;\n  var total = this.grepTotal(suite);\n  var afterAllHookCalled = false;\n\n  debug('run suite %s', suite.fullTitle());\n\n  if (!total || (self.failures && suite._bail)) {\n    return fn();\n  }\n\n  this.emit('suite', this.suite = suite);\n\n  function next(errSuite) {\n    if (errSuite) {\n      // current suite failed on a hook from errSuite\n      if (errSuite === suite) {\n        // if errSuite is current suite\n        // continue to the next sibling suite\n        return done();\n      }\n      // errSuite is among the parents of current suite\n      // stop execution of errSuite and all sub-suites\n      return done(errSuite);\n    }\n\n    if (self._abort) {\n      return done();\n    }\n\n    var curr = suite.suites[i++];\n    if (!curr) {\n      return done();\n    }\n\n    // Avoid grep neglecting large number of tests causing a\n    // huge recursive loop and thus a maximum call stack error.\n    // See comment in `this.runTests()` for more information.\n    if (self._grep !== self._defaultGrep) {\n      Runner.immediately(function() {\n        self.runSuite(curr, next);\n      });\n    } else {\n      self.runSuite(curr, next);\n    }\n  }\n\n  function done(errSuite) {\n    self.suite = suite;\n    self.nextSuite = next;\n\n    if (afterAllHookCalled) {\n      fn(errSuite);\n    } else {\n      // mark that the afterAll block has been called once\n      // and so can be skipped if there is an error in it.\n      afterAllHookCalled = true;\n\n      // remove reference to test\n      delete self.test;\n\n      self.hook('afterAll', function() {\n        self.emit('suite end', suite);\n        fn(errSuite);\n      });\n    }\n  }\n\n  this.nextSuite = next;\n\n  this.hook('beforeAll', function(err) {\n    if (err) {\n      return done();\n    }\n    self.runTests(suite, next);\n  });\n};\n\n/**\n * Handle uncaught exceptions.\n *\n * @param {Error} err\n * @api private\n */\nRunner.prototype.uncaught = function(err) {\n  if (err) {\n    debug('uncaught exception %s', err !== function() {\n      return this;\n    }.call(err) ? err : (err.message || err));\n  } else {\n    debug('uncaught undefined exception');\n    err = undefinedError();\n  }\n  err.uncaught = true;\n\n  var runnable = this.currentRunnable;\n\n  if (!runnable) {\n    runnable = new Runnable('Uncaught error outside test suite');\n    runnable.parent = this.suite;\n\n    if (this.started) {\n      this.fail(runnable, err);\n    } else {\n      // Can't recover from this failure\n      this.emit('start');\n      this.fail(runnable, err);\n      this.emit('end');\n    }\n\n    return;\n  }\n\n  runnable.clearTimeout();\n\n  // Ignore errors if complete\n  if (runnable.state) {\n    return;\n  }\n  this.fail(runnable, err);\n\n  // recover from test\n  if (runnable.type === 'test') {\n    this.emit('test end', runnable);\n    this.hookUp('afterEach', this.next);\n    return;\n  }\n\n // recover from hooks\n  if (runnable.type === 'hook') {\n    var errSuite = this.suite;\n    // if hook failure is in afterEach block\n    if (runnable.fullTitle().indexOf('after each') > -1) {\n      return this.hookErr(err, errSuite, true);\n    }\n    // if hook failure is in beforeEach block\n    if (runnable.fullTitle().indexOf('before each') > -1) {\n      return this.hookErr(err, errSuite, false);\n    }\n    // if hook failure is in after or before blocks\n    return this.nextSuite(errSuite);\n  }\n\n  // bail\n  this.emit('end');\n};\n\n/**\n * Cleans up the references to all the deferred functions\n * (before/after/beforeEach/afterEach) and tests of a Suite.\n * These must be deleted otherwise a memory leak can happen,\n * as those functions may reference variables from closures,\n * thus those variables can never be garbage collected as long\n * as the deferred functions exist.\n *\n * @param {Suite} suite\n */\nfunction cleanSuiteReferences(suite) {\n  function cleanArrReferences(arr) {\n    for (var i = 0; i < arr.length; i++) {\n      delete arr[i].fn;\n    }\n  }\n\n  if (isArray(suite._beforeAll)) {\n    cleanArrReferences(suite._beforeAll);\n  }\n\n  if (isArray(suite._beforeEach)) {\n    cleanArrReferences(suite._beforeEach);\n  }\n\n  if (isArray(suite._afterAll)) {\n    cleanArrReferences(suite._afterAll);\n  }\n\n  if (isArray(suite._afterEach)) {\n    cleanArrReferences(suite._afterEach);\n  }\n\n  for (var i = 0; i < suite.tests.length; i++) {\n    delete suite.tests[i].fn;\n  }\n}\n\n/**\n * Run the root suite and invoke `fn(failures)`\n * on completion.\n *\n * @param {Function} fn\n * @return {Runner} for chaining\n * @api public\n * @param {Function} fn\n * @return {Runner} Runner instance.\n */\nRunner.prototype.run = function(fn) {\n  var self = this;\n  var rootSuite = this.suite;\n\n  // If there is an `only` filter\n  if (this.hasOnly) {\n    filterOnly(rootSuite);\n  }\n\n  fn = fn || function() {};\n\n  function uncaught(err) {\n    self.uncaught(err);\n  }\n\n  function start() {\n    self.started = true;\n    self.emit('start');\n    self.runSuite(rootSuite, function() {\n      debug('finished running');\n      self.emit('end');\n    });\n  }\n\n  debug('start');\n\n  // references cleanup to avoid memory leaks\n  this.on('suite end', cleanSuiteReferences);\n\n  // callback\n  this.on('end', function() {\n    debug('end');\n    process.removeListener('uncaughtException', uncaught);\n    fn(self.failures);\n  });\n\n  // uncaught exception\n  process.on('uncaughtException', uncaught);\n\n  if (this._delay) {\n    // for reporters, I guess.\n    // might be nice to debounce some dots while we wait.\n    this.emit('waiting', rootSuite);\n    rootSuite.once('run', start);\n  } else {\n    start();\n  }\n\n  return this;\n};\n\n/**\n * Cleanly abort execution.\n *\n * @api public\n * @return {Runner} Runner instance.\n */\nRunner.prototype.abort = function() {\n  debug('aborting');\n  this._abort = true;\n\n  return this;\n};\n\n/**\n * Filter suites based on `isOnly` logic.\n *\n * @param {Array} suite\n * @returns {Boolean}\n * @api private\n */\nfunction filterOnly(suite) {\n  if (suite._onlyTests.length) {\n    // If the suite contains `only` tests, run those and ignore any nested suites.\n    suite.tests = suite._onlyTests;\n    suite.suites = [];\n  } else {\n    // Otherwise, do not run any of the tests in this suite.\n    suite.tests = [];\n    suite._onlySuites.forEach(function(onlySuite) {\n      // If there are other `only` tests/suites nested in the current `only` suite, then filter that `only` suite.\n      // Otherwise, all of the tests on this `only` suite should be run, so don't filter it.\n      if (hasOnly(onlySuite)) {\n        filterOnly(onlySuite);\n      }\n    });\n    // Run the `only` suites, as well as any other suites that have `only` tests/suites as descendants.\n    suite.suites = filter(suite.suites, function(childSuite) {\n      return indexOf(suite._onlySuites, childSuite) !== -1 || filterOnly(childSuite);\n    });\n  }\n  // Keep the suite only if there is something to run\n  return suite.tests.length || suite.suites.length;\n}\n\n/**\n * Determines whether a suite has an `only` test or suite as a descendant.\n *\n * @param {Array} suite\n * @returns {Boolean}\n * @api private\n */\nfunction hasOnly(suite) {\n  return suite._onlyTests.length || suite._onlySuites.length || some(suite.suites, hasOnly);\n}\n\n/**\n * Filter leaks with the given globals flagged as `ok`.\n *\n * @api private\n * @param {Array} ok\n * @param {Array} globals\n * @return {Array}\n */\nfunction filterLeaks(ok, globals) {\n  return filter(globals, function(key) {\n    // Firefox and Chrome exposes iframes as index inside the window object\n    if (/^d+/.test(key)) {\n      return false;\n    }\n\n    // in firefox\n    // if runner runs in an iframe, this iframe's window.getInterface method\n    // not init at first it is assigned in some seconds\n    if (global.navigator && (/^getInterface/).test(key)) {\n      return false;\n    }\n\n    // an iframe could be approached by window[iframeIndex]\n    // in ie6,7,8 and opera, iframeIndex is enumerable, this could cause leak\n    if (global.navigator && (/^\\d+/).test(key)) {\n      return false;\n    }\n\n    // Opera and IE expose global variables for HTML element IDs (issue #243)\n    if (/^mocha-/.test(key)) {\n      return false;\n    }\n\n    var matched = filter(ok, function(ok) {\n      if (~ok.indexOf('*')) {\n        return key.indexOf(ok.split('*')[0]) === 0;\n      }\n      return key === ok;\n    });\n    return !matched.length && (!global.navigator || key !== 'onerror');\n  });\n}\n\n/**\n * Array of globals dependent on the environment.\n *\n * @return {Array}\n * @api private\n */\nfunction extraGlobals() {\n  if (typeof process === 'object' && typeof process.version === 'string') {\n    var parts = process.version.split('.');\n    var nodeVersion = utils.reduce(parts, function(a, v) {\n      return a << 8 | v;\n    });\n\n    // 'errno' was renamed to process._errno in v0.9.11.\n\n    if (nodeVersion < 0x00090B) {\n      return ['errno'];\n    }\n  }\n\n  return [];\n}\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"./pending\":16,\"./runnable\":33,\"./utils\":38,\"_process\":67,\"debug\":2,\"events\":3}],35:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('events').EventEmitter;\nvar Hook = require('./hook');\nvar utils = require('./utils');\nvar inherits = utils.inherits;\nvar debug = require('debug')('mocha:suite');\nvar milliseconds = require('./ms');\n\n/**\n * Expose `Suite`.\n */\n\nexports = module.exports = Suite;\n\n/**\n * Create a new `Suite` with the given `title` and parent `Suite`. When a suite\n * with the same title is already present, that suite is returned to provide\n * nicer reporter and more flexible meta-testing.\n *\n * @api public\n * @param {Suite} parent\n * @param {string} title\n * @return {Suite}\n */\nexports.create = function(parent, title) {\n  var suite = new Suite(title, parent.ctx);\n  suite.parent = parent;\n  title = suite.fullTitle();\n  parent.addSuite(suite);\n  return suite;\n};\n\n/**\n * Initialize a new `Suite` with the given `title` and `ctx`.\n *\n * @api private\n * @param {string} title\n * @param {Context} parentContext\n */\nfunction Suite(title, parentContext) {\n  if (!utils.isString(title)) {\n    throw new Error('Suite `title` should be a \"string\" but \"' + typeof title + '\" was given instead.');\n  }\n  this.title = title;\n  function Context() {}\n  Context.prototype = parentContext;\n  this.ctx = new Context();\n  this.suites = [];\n  this.tests = [];\n  this.pending = false;\n  this._beforeEach = [];\n  this._beforeAll = [];\n  this._afterEach = [];\n  this._afterAll = [];\n  this.root = !title;\n  this._timeout = 2000;\n  this._enableTimeouts = true;\n  this._slow = 75;\n  this._bail = false;\n  this._retries = -1;\n  this._onlyTests = [];\n  this._onlySuites = [];\n  this.delayed = false;\n}\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\ninherits(Suite, EventEmitter);\n\n/**\n * Return a clone of this `Suite`.\n *\n * @api private\n * @return {Suite}\n */\nSuite.prototype.clone = function() {\n  var suite = new Suite(this.title);\n  debug('clone');\n  suite.ctx = this.ctx;\n  suite.timeout(this.timeout());\n  suite.retries(this.retries());\n  suite.enableTimeouts(this.enableTimeouts());\n  suite.slow(this.slow());\n  suite.bail(this.bail());\n  return suite;\n};\n\n/**\n * Set timeout `ms` or short-hand such as \"2s\".\n *\n * @api private\n * @param {number|string} ms\n * @return {Suite|number} for chaining\n */\nSuite.prototype.timeout = function(ms) {\n  if (!arguments.length) {\n    return this._timeout;\n  }\n  if (ms.toString() === '0') {\n    this._enableTimeouts = false;\n  }\n  if (typeof ms === 'string') {\n    ms = milliseconds(ms);\n  }\n  debug('timeout %d', ms);\n  this._timeout = parseInt(ms, 10);\n  return this;\n};\n\n/**\n * Set number of times to retry a failed test.\n *\n * @api private\n * @param {number|string} n\n * @return {Suite|number} for chaining\n */\nSuite.prototype.retries = function(n) {\n  if (!arguments.length) {\n    return this._retries;\n  }\n  debug('retries %d', n);\n  this._retries = parseInt(n, 10) || 0;\n  return this;\n};\n\n/**\n  * Set timeout to `enabled`.\n  *\n  * @api private\n  * @param {boolean} enabled\n  * @return {Suite|boolean} self or enabled\n  */\nSuite.prototype.enableTimeouts = function(enabled) {\n  if (!arguments.length) {\n    return this._enableTimeouts;\n  }\n  debug('enableTimeouts %s', enabled);\n  this._enableTimeouts = enabled;\n  return this;\n};\n\n/**\n * Set slow `ms` or short-hand such as \"2s\".\n *\n * @api private\n * @param {number|string} ms\n * @return {Suite|number} for chaining\n */\nSuite.prototype.slow = function(ms) {\n  if (!arguments.length) {\n    return this._slow;\n  }\n  if (typeof ms === 'string') {\n    ms = milliseconds(ms);\n  }\n  debug('slow %d', ms);\n  this._slow = ms;\n  return this;\n};\n\n/**\n * Sets whether to bail after first error.\n *\n * @api private\n * @param {boolean} bail\n * @return {Suite|number} for chaining\n */\nSuite.prototype.bail = function(bail) {\n  if (!arguments.length) {\n    return this._bail;\n  }\n  debug('bail %s', bail);\n  this._bail = bail;\n  return this;\n};\n\n/**\n * Check if this suite or its parent suite is marked as pending.\n *\n * @api private\n */\nSuite.prototype.isPending = function() {\n  return this.pending || (this.parent && this.parent.isPending());\n};\n\n/**\n * Run `fn(test[, done])` before running tests.\n *\n * @api private\n * @param {string} title\n * @param {Function} fn\n * @return {Suite} for chaining\n */\nSuite.prototype.beforeAll = function(title, fn) {\n  if (this.isPending()) {\n    return this;\n  }\n  if (typeof title === 'function') {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"before all\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.retries(this.retries());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._beforeAll.push(hook);\n  this.emit('beforeAll', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` after running tests.\n *\n * @api private\n * @param {string} title\n * @param {Function} fn\n * @return {Suite} for chaining\n */\nSuite.prototype.afterAll = function(title, fn) {\n  if (this.isPending()) {\n    return this;\n  }\n  if (typeof title === 'function') {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"after all\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.retries(this.retries());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._afterAll.push(hook);\n  this.emit('afterAll', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` before each test case.\n *\n * @api private\n * @param {string} title\n * @param {Function} fn\n * @return {Suite} for chaining\n */\nSuite.prototype.beforeEach = function(title, fn) {\n  if (this.isPending()) {\n    return this;\n  }\n  if (typeof title === 'function') {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"before each\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.retries(this.retries());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._beforeEach.push(hook);\n  this.emit('beforeEach', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` after each test case.\n *\n * @api private\n * @param {string} title\n * @param {Function} fn\n * @return {Suite} for chaining\n */\nSuite.prototype.afterEach = function(title, fn) {\n  if (this.isPending()) {\n    return this;\n  }\n  if (typeof title === 'function') {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"after each\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.retries(this.retries());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._afterEach.push(hook);\n  this.emit('afterEach', hook);\n  return this;\n};\n\n/**\n * Add a test `suite`.\n *\n * @api private\n * @param {Suite} suite\n * @return {Suite} for chaining\n */\nSuite.prototype.addSuite = function(suite) {\n  suite.parent = this;\n  suite.timeout(this.timeout());\n  suite.retries(this.retries());\n  suite.enableTimeouts(this.enableTimeouts());\n  suite.slow(this.slow());\n  suite.bail(this.bail());\n  this.suites.push(suite);\n  this.emit('suite', suite);\n  return this;\n};\n\n/**\n * Add a `test` to this suite.\n *\n * @api private\n * @param {Test} test\n * @return {Suite} for chaining\n */\nSuite.prototype.addTest = function(test) {\n  test.parent = this;\n  test.timeout(this.timeout());\n  test.retries(this.retries());\n  test.enableTimeouts(this.enableTimeouts());\n  test.slow(this.slow());\n  test.ctx = this.ctx;\n  this.tests.push(test);\n  this.emit('test', test);\n  return this;\n};\n\n/**\n * Return the full title generated by recursively concatenating the parent's\n * full title.\n *\n * @api public\n * @return {string}\n */\nSuite.prototype.fullTitle = function() {\n  if (this.parent) {\n    var full = this.parent.fullTitle();\n    if (full) {\n      return full + ' ' + this.title;\n    }\n  }\n  return this.title;\n};\n\n/**\n * Return the total number of tests.\n *\n * @api public\n * @return {number}\n */\nSuite.prototype.total = function() {\n  return utils.reduce(this.suites, function(sum, suite) {\n    return sum + suite.total();\n  }, 0) + this.tests.length;\n};\n\n/**\n * Iterates through each suite recursively to find all tests. Applies a\n * function in the format `fn(test)`.\n *\n * @api private\n * @param {Function} fn\n * @return {Suite}\n */\nSuite.prototype.eachTest = function(fn) {\n  utils.forEach(this.tests, fn);\n  utils.forEach(this.suites, function(suite) {\n    suite.eachTest(fn);\n  });\n  return this;\n};\n\n/**\n * This will run the root suite if we happen to be running in delayed mode.\n */\nSuite.prototype.run = function run() {\n  if (this.root) {\n    this.emit('run');\n  }\n};\n\n},{\"./hook\":7,\"./ms\":15,\"./utils\":38,\"debug\":2,\"events\":3}],36:[function(require,module,exports){\n/**\n * Module dependencies.\n */\n\nvar Runnable = require('./runnable');\nvar create = require('lodash.create');\nvar isString = require('./utils').isString;\n\n/**\n * Expose `Test`.\n */\n\nmodule.exports = Test;\n\n/**\n * Initialize a new `Test` with the given `title` and callback `fn`.\n *\n * @api private\n * @param {String} title\n * @param {Function} fn\n */\nfunction Test(title, fn) {\n  if (!isString(title)) {\n    throw new Error('Test `title` should be a \"string\" but \"' + typeof title + '\" was given instead.');\n  }\n  Runnable.call(this, title, fn);\n  this.pending = !fn;\n  this.type = 'test';\n}\n\n/**\n * Inherit from `Runnable.prototype`.\n */\nTest.prototype = create(Runnable.prototype, {\n  constructor: Test\n});\n\nTest.prototype.clone = function() {\n  var test = new Test(this.title, this.fn);\n  test.timeout(this.timeout());\n  test.slow(this.slow());\n  test.enableTimeouts(this.enableTimeouts());\n  test.retries(this.retries());\n  test.currentRetry(this.currentRetry());\n  test.globals(this.globals());\n  test.parent = this.parent;\n  test.file = this.file;\n  test.ctx = this.ctx;\n  return test;\n};\n\n},{\"./runnable\":33,\"./utils\":38,\"lodash.create\":60}],37:[function(require,module,exports){\n'use strict';\n\n/**\n * Pad a `number` with a ten's place zero.\n *\n * @param {number} number\n * @return {string}\n */\nfunction pad(number) {\n  var n = number.toString();\n  return n.length === 1 ? '0' + n : n;\n}\n\n/**\n * Turn a `date` into an ISO string.\n *\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString\n *\n * @param {Date} date\n * @return {string}\n */\nfunction toISOString(date) {\n  return date.getUTCFullYear()\n    + '-' + pad(date.getUTCMonth() + 1)\n    + '-' + pad(date.getUTCDate())\n    + 'T' + pad(date.getUTCHours())\n    + ':' + pad(date.getUTCMinutes())\n    + ':' + pad(date.getUTCSeconds())\n    + '.' + String((date.getUTCMilliseconds()/1000).toFixed(3)).slice(2, 5)\n    + 'Z';\n}\n\n/*\n * Exports.\n */\n\nmodule.exports = toISOString;\n\n},{}],38:[function(require,module,exports){\n(function (process,Buffer){\n/* eslint-env browser */\n\n/**\n * Module dependencies.\n */\n\nvar JSON = require('json3');\nvar basename = require('path').basename;\nvar debug = require('debug')('mocha:watch');\nvar exists = require('fs').existsSync || require('path').existsSync;\nvar glob = require('glob');\nvar join = require('path').join;\nvar readdirSync = require('fs').readdirSync;\nvar statSync = require('fs').statSync;\nvar watchFile = require('fs').watchFile;\nvar toISOString = require('./to-iso-string');\n\n/**\n * Ignored directories.\n */\n\nvar ignore = ['node_modules', '.git'];\n\nexports.inherits = require('util').inherits;\n\n/**\n * Escape special characters in the given string of html.\n *\n * @api private\n * @param  {string} html\n * @return {string}\n */\nexports.escape = function(html) {\n  return String(html)\n    .replace(/&/g, '&amp;')\n    .replace(/\"/g, '&quot;')\n    .replace(/</g, '&lt;')\n    .replace(/>/g, '&gt;');\n};\n\n/**\n * Array#forEach (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Function} fn\n * @param {Object} scope\n */\nexports.forEach = function(arr, fn, scope) {\n  for (var i = 0, l = arr.length; i < l; i++) {\n    fn.call(scope, arr[i], i);\n  }\n};\n\n/**\n * Test if the given obj is type of string.\n *\n * @api private\n * @param {Object} obj\n * @return {boolean}\n */\nexports.isString = function(obj) {\n  return typeof obj === 'string';\n};\n\n/**\n * Array#map (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Function} fn\n * @param {Object} scope\n * @return {Array}\n */\nexports.map = function(arr, fn, scope) {\n  var result = [];\n  for (var i = 0, l = arr.length; i < l; i++) {\n    result.push(fn.call(scope, arr[i], i, arr));\n  }\n  return result;\n};\n\n/**\n * Array#indexOf (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Object} obj to find index of\n * @param {number} start\n * @return {number}\n */\nexports.indexOf = function(arr, obj, start) {\n  for (var i = start || 0, l = arr.length; i < l; i++) {\n    if (arr[i] === obj) {\n      return i;\n    }\n  }\n  return -1;\n};\n\n/**\n * Array#reduce (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Function} fn\n * @param {Object} val Initial value.\n * @return {*}\n */\nexports.reduce = function(arr, fn, val) {\n  var rval = val;\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    rval = fn(rval, arr[i], i, arr);\n  }\n\n  return rval;\n};\n\n/**\n * Array#filter (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Function} fn\n * @return {Array}\n */\nexports.filter = function(arr, fn) {\n  var ret = [];\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    var val = arr[i];\n    if (fn(val, i, arr)) {\n      ret.push(val);\n    }\n  }\n\n  return ret;\n};\n\n/**\n * Array#some (<=IE8)\n *\n * @api private\n * @param {Array} arr\n * @param {Function} fn\n * @return {Array}\n */\nexports.some = function(arr, fn) {\n  for (var i = 0, l = arr.length; i < l; i++) {\n    if (fn(arr[i])) {\n      return true;\n    }\n  }\n  return false;\n};\n\n/**\n * Object.keys (<=IE8)\n *\n * @api private\n * @param {Object} obj\n * @return {Array} keys\n */\nexports.keys = typeof Object.keys === 'function' ? Object.keys : function(obj) {\n  var keys = [];\n  var has = Object.prototype.hasOwnProperty; // for `window` on <=IE8\n\n  for (var key in obj) {\n    if (has.call(obj, key)) {\n      keys.push(key);\n    }\n  }\n\n  return keys;\n};\n\n/**\n * Watch the given `files` for changes\n * and invoke `fn(file)` on modification.\n *\n * @api private\n * @param {Array} files\n * @param {Function} fn\n */\nexports.watch = function(files, fn) {\n  var options = { interval: 100 };\n  files.forEach(function(file) {\n    debug('file %s', file);\n    watchFile(file, options, function(curr, prev) {\n      if (prev.mtime < curr.mtime) {\n        fn(file);\n      }\n    });\n  });\n};\n\n/**\n * Array.isArray (<=IE8)\n *\n * @api private\n * @param {Object} obj\n * @return {Boolean}\n */\nvar isArray = typeof Array.isArray === 'function' ? Array.isArray : function(obj) {\n  return Object.prototype.toString.call(obj) === '[object Array]';\n};\n\nexports.isArray = isArray;\n\n/**\n * Buffer.prototype.toJSON polyfill.\n *\n * @type {Function}\n */\nif (typeof Buffer !== 'undefined' && Buffer.prototype) {\n  Buffer.prototype.toJSON = Buffer.prototype.toJSON || function() {\n    return Array.prototype.slice.call(this, 0);\n  };\n}\n\n/**\n * Ignored files.\n *\n * @api private\n * @param {string} path\n * @return {boolean}\n */\nfunction ignored(path) {\n  return !~ignore.indexOf(path);\n}\n\n/**\n * Lookup files in the given `dir`.\n *\n * @api private\n * @param {string} dir\n * @param {string[]} [ext=['.js']]\n * @param {Array} [ret=[]]\n * @return {Array}\n */\nexports.files = function(dir, ext, ret) {\n  ret = ret || [];\n  ext = ext || ['js'];\n\n  var re = new RegExp('\\\\.(' + ext.join('|') + ')$');\n\n  readdirSync(dir)\n    .filter(ignored)\n    .forEach(function(path) {\n      path = join(dir, path);\n      if (statSync(path).isDirectory()) {\n        exports.files(path, ext, ret);\n      } else if (path.match(re)) {\n        ret.push(path);\n      }\n    });\n\n  return ret;\n};\n\n/**\n * Compute a slug from the given `str`.\n *\n * @api private\n * @param {string} str\n * @return {string}\n */\nexports.slug = function(str) {\n  return str\n    .toLowerCase()\n    .replace(/ +/g, '-')\n    .replace(/[^-\\w]/g, '');\n};\n\n/**\n * Strip the function definition from `str`, and re-indent for pre whitespace.\n *\n * @param {string} str\n * @return {string}\n */\nexports.clean = function(str) {\n  str = str\n    .replace(/\\r\\n?|[\\n\\u2028\\u2029]/g, '\\n').replace(/^\\uFEFF/, '')\n    // (traditional)->  space/name     parameters    body     (lambda)-> parameters       body   multi-statement/single          keep body content\n    .replace(/^function(?:\\s*|\\s+[^(]*)\\([^)]*\\)\\s*\\{((?:.|\\n)*?)\\s*\\}$|^\\([^)]*\\)\\s*=>\\s*(?:\\{((?:.|\\n)*?)\\s*\\}|((?:.|\\n)*))$/, '$1$2$3');\n\n  var spaces = str.match(/^\\n?( *)/)[1].length;\n  var tabs = str.match(/^\\n?(\\t*)/)[1].length;\n  var re = new RegExp('^\\n?' + (tabs ? '\\t' : ' ') + '{' + (tabs ? tabs : spaces) + '}', 'gm');\n\n  str = str.replace(re, '');\n\n  return exports.trim(str);\n};\n\n/**\n * Trim the given `str`.\n *\n * @api private\n * @param {string} str\n * @return {string}\n */\nexports.trim = function(str) {\n  return str.replace(/^\\s+|\\s+$/g, '');\n};\n\n/**\n * Parse the given `qs`.\n *\n * @api private\n * @param {string} qs\n * @return {Object}\n */\nexports.parseQuery = function(qs) {\n  return exports.reduce(qs.replace('?', '').split('&'), function(obj, pair) {\n    var i = pair.indexOf('=');\n    var key = pair.slice(0, i);\n    var val = pair.slice(++i);\n\n    obj[key] = decodeURIComponent(val);\n    return obj;\n  }, {});\n};\n\n/**\n * Highlight the given string of `js`.\n *\n * @api private\n * @param {string} js\n * @return {string}\n */\nfunction highlight(js) {\n  return js\n    .replace(/</g, '&lt;')\n    .replace(/>/g, '&gt;')\n    .replace(/\\/\\/(.*)/gm, '<span class=\"comment\">//$1</span>')\n    .replace(/('.*?')/gm, '<span class=\"string\">$1</span>')\n    .replace(/(\\d+\\.\\d+)/gm, '<span class=\"number\">$1</span>')\n    .replace(/(\\d+)/gm, '<span class=\"number\">$1</span>')\n    .replace(/\\bnew[ \\t]+(\\w+)/gm, '<span class=\"keyword\">new</span> <span class=\"init\">$1</span>')\n    .replace(/\\b(function|new|throw|return|var|if|else)\\b/gm, '<span class=\"keyword\">$1</span>');\n}\n\n/**\n * Highlight the contents of tag `name`.\n *\n * @api private\n * @param {string} name\n */\nexports.highlightTags = function(name) {\n  var code = document.getElementById('mocha').getElementsByTagName(name);\n  for (var i = 0, len = code.length; i < len; ++i) {\n    code[i].innerHTML = highlight(code[i].innerHTML);\n  }\n};\n\n/**\n * If a value could have properties, and has none, this function is called,\n * which returns a string representation of the empty value.\n *\n * Functions w/ no properties return `'[Function]'`\n * Arrays w/ length === 0 return `'[]'`\n * Objects w/ no properties return `'{}'`\n * All else: return result of `value.toString()`\n *\n * @api private\n * @param {*} value The value to inspect.\n * @param {string} [type] The type of the value, if known.\n * @returns {string}\n */\nfunction emptyRepresentation(value, type) {\n  type = type || exports.type(value);\n\n  switch (type) {\n    case 'function':\n      return '[Function]';\n    case 'object':\n      return '{}';\n    case 'array':\n      return '[]';\n    default:\n      return value.toString();\n  }\n}\n\n/**\n * Takes some variable and asks `Object.prototype.toString()` what it thinks it\n * is.\n *\n * @api private\n * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString\n * @param {*} value The value to test.\n * @returns {string}\n * @example\n * type({}) // 'object'\n * type([]) // 'array'\n * type(1) // 'number'\n * type(false) // 'boolean'\n * type(Infinity) // 'number'\n * type(null) // 'null'\n * type(new Date()) // 'date'\n * type(/foo/) // 'regexp'\n * type('type') // 'string'\n * type(global) // 'global'\n */\nexports.type = function type(value) {\n  if (value === undefined) {\n    return 'undefined';\n  } else if (value === null) {\n    return 'null';\n  } else if (typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) {\n    return 'buffer';\n  }\n  return Object.prototype.toString.call(value)\n    .replace(/^\\[.+\\s(.+?)\\]$/, '$1')\n    .toLowerCase();\n};\n\n/**\n * Stringify `value`. Different behavior depending on type of value:\n *\n * - If `value` is undefined or null, return `'[undefined]'` or `'[null]'`, respectively.\n * - If `value` is not an object, function or array, return result of `value.toString()` wrapped in double-quotes.\n * - If `value` is an *empty* object, function, or array, return result of function\n *   {@link emptyRepresentation}.\n * - If `value` has properties, call {@link exports.canonicalize} on it, then return result of\n *   JSON.stringify().\n *\n * @api private\n * @see exports.type\n * @param {*} value\n * @return {string}\n */\nexports.stringify = function(value) {\n  var type = exports.type(value);\n\n  if (!~exports.indexOf(['object', 'array', 'function'], type)) {\n    if (type !== 'buffer') {\n      return jsonStringify(value);\n    }\n    var json = value.toJSON();\n    // Based on the toJSON result\n    return jsonStringify(json.data && json.type ? json.data : json, 2)\n      .replace(/,(\\n|$)/g, '$1');\n  }\n\n  for (var prop in value) {\n    if (Object.prototype.hasOwnProperty.call(value, prop)) {\n      return jsonStringify(exports.canonicalize(value), 2).replace(/,(\\n|$)/g, '$1');\n    }\n  }\n\n  return emptyRepresentation(value, type);\n};\n\n/**\n * like JSON.stringify but more sense.\n *\n * @api private\n * @param {Object}  object\n * @param {number=} spaces\n * @param {number=} depth\n * @returns {*}\n */\nfunction jsonStringify(object, spaces, depth) {\n  if (typeof spaces === 'undefined') {\n    // primitive types\n    return _stringify(object);\n  }\n\n  depth = depth || 1;\n  var space = spaces * depth;\n  var str = isArray(object) ? '[' : '{';\n  var end = isArray(object) ? ']' : '}';\n  var length = typeof object.length === 'number' ? object.length : exports.keys(object).length;\n  // `.repeat()` polyfill\n  function repeat(s, n) {\n    return new Array(n).join(s);\n  }\n\n  function _stringify(val) {\n    switch (exports.type(val)) {\n      case 'null':\n      case 'undefined':\n        val = '[' + val + ']';\n        break;\n      case 'array':\n      case 'object':\n        val = jsonStringify(val, spaces, depth + 1);\n        break;\n      case 'boolean':\n      case 'regexp':\n      case 'symbol':\n      case 'number':\n        val = val === 0 && (1 / val) === -Infinity // `-0`\n          ? '-0'\n          : val.toString();\n        break;\n      case 'date':\n        var sDate;\n        if (isNaN(val.getTime())) { // Invalid date\n          sDate = val.toString();\n        } else {\n          sDate = val.toISOString ? val.toISOString() : toISOString(val);\n        }\n        val = '[Date: ' + sDate + ']';\n        break;\n      case 'buffer':\n        var json = val.toJSON();\n        // Based on the toJSON result\n        json = json.data && json.type ? json.data : json;\n        val = '[Buffer: ' + jsonStringify(json, 2, depth + 1) + ']';\n        break;\n      default:\n        val = (val === '[Function]' || val === '[Circular]')\n          ? val\n          : JSON.stringify(val); // string\n    }\n    return val;\n  }\n\n  for (var i in object) {\n    if (!Object.prototype.hasOwnProperty.call(object, i)) {\n      continue; // not my business\n    }\n    --length;\n    str += '\\n ' + repeat(' ', space)\n      + (isArray(object) ? '' : '\"' + i + '\": ') // key\n      + _stringify(object[i])                     // value\n      + (length ? ',' : '');                     // comma\n  }\n\n  return str\n    // [], {}\n    + (str.length !== 1 ? '\\n' + repeat(' ', --space) + end : end);\n}\n\n/**\n * Test if a value is a buffer.\n *\n * @api private\n * @param {*} value The value to test.\n * @return {boolean} True if `value` is a buffer, otherwise false\n */\nexports.isBuffer = function(value) {\n  return typeof Buffer !== 'undefined' && Buffer.isBuffer(value);\n};\n\n/**\n * Return a new Thing that has the keys in sorted order. Recursive.\n *\n * If the Thing...\n * - has already been seen, return string `'[Circular]'`\n * - is `undefined`, return string `'[undefined]'`\n * - is `null`, return value `null`\n * - is some other primitive, return the value\n * - is not a primitive or an `Array`, `Object`, or `Function`, return the value of the Thing's `toString()` method\n * - is a non-empty `Array`, `Object`, or `Function`, return the result of calling this function again.\n * - is an empty `Array`, `Object`, or `Function`, return the result of calling `emptyRepresentation()`\n *\n * @api private\n * @see {@link exports.stringify}\n * @param {*} value Thing to inspect.  May or may not have properties.\n * @param {Array} [stack=[]] Stack of seen values\n * @return {(Object|Array|Function|string|undefined)}\n */\nexports.canonicalize = function(value, stack) {\n  var canonicalizedObj;\n  /* eslint-disable no-unused-vars */\n  var prop;\n  /* eslint-enable no-unused-vars */\n  var type = exports.type(value);\n  function withStack(value, fn) {\n    stack.push(value);\n    fn();\n    stack.pop();\n  }\n\n  stack = stack || [];\n\n  if (exports.indexOf(stack, value) !== -1) {\n    return '[Circular]';\n  }\n\n  switch (type) {\n    case 'undefined':\n    case 'buffer':\n    case 'null':\n      canonicalizedObj = value;\n      break;\n    case 'array':\n      withStack(value, function() {\n        canonicalizedObj = exports.map(value, function(item) {\n          return exports.canonicalize(item, stack);\n        });\n      });\n      break;\n    case 'function':\n      /* eslint-disable guard-for-in */\n      for (prop in value) {\n        canonicalizedObj = {};\n        break;\n      }\n      /* eslint-enable guard-for-in */\n      if (!canonicalizedObj) {\n        canonicalizedObj = emptyRepresentation(value, type);\n        break;\n      }\n    /* falls through */\n    case 'object':\n      canonicalizedObj = canonicalizedObj || {};\n      withStack(value, function() {\n        exports.forEach(exports.keys(value).sort(), function(key) {\n          canonicalizedObj[key] = exports.canonicalize(value[key], stack);\n        });\n      });\n      break;\n    case 'date':\n    case 'number':\n    case 'regexp':\n    case 'boolean':\n    case 'symbol':\n      canonicalizedObj = value;\n      break;\n    default:\n      canonicalizedObj = value + '';\n  }\n\n  return canonicalizedObj;\n};\n\n/**\n * Lookup file names at the given `path`.\n *\n * @api public\n * @param {string} path Base path to start searching from.\n * @param {string[]} extensions File extensions to look for.\n * @param {boolean} recursive Whether or not to recurse into subdirectories.\n * @return {string[]} An array of paths.\n */\nexports.lookupFiles = function lookupFiles(path, extensions, recursive) {\n  var files = [];\n  var re = new RegExp('\\\\.(' + extensions.join('|') + ')$');\n\n  if (!exists(path)) {\n    if (exists(path + '.js')) {\n      path += '.js';\n    } else {\n      files = glob.sync(path);\n      if (!files.length) {\n        throw new Error(\"cannot resolve path (or pattern) '\" + path + \"'\");\n      }\n      return files;\n    }\n  }\n\n  try {\n    var stat = statSync(path);\n    if (stat.isFile()) {\n      return path;\n    }\n  } catch (err) {\n    // ignore error\n    return;\n  }\n\n  readdirSync(path).forEach(function(file) {\n    file = join(path, file);\n    try {\n      var stat = statSync(file);\n      if (stat.isDirectory()) {\n        if (recursive) {\n          files = files.concat(lookupFiles(file, extensions, recursive));\n        }\n        return;\n      }\n    } catch (err) {\n      // ignore error\n      return;\n    }\n    if (!stat.isFile() || !re.test(file) || basename(file)[0] === '.') {\n      return;\n    }\n    files.push(file);\n  });\n\n  return files;\n};\n\n/**\n * Generate an undefined error with a message warning the user.\n *\n * @return {Error}\n */\n\nexports.undefinedError = function() {\n  return new Error('Caught undefined error, did you throw without specifying what?');\n};\n\n/**\n * Generate an undefined error if `err` is not defined.\n *\n * @param {Error} err\n * @return {Error}\n */\n\nexports.getError = function(err) {\n  return err || exports.undefinedError();\n};\n\n/**\n * @summary\n * This Filter based on `mocha-clean` module.(see: `github.com/rstacruz/mocha-clean`)\n * @description\n * When invoking this function you get a filter function that get the Error.stack as an input,\n * and return a prettify output.\n * (i.e: strip Mocha and internal node functions from stack trace).\n * @returns {Function}\n */\nexports.stackTraceFilter = function() {\n  // TODO: Replace with `process.browser`\n  var slash = '/';\n  var is = typeof document === 'undefined' ? { node: true } : { browser: true };\n  var cwd = is.node\n      ? process.cwd() + slash\n      : (typeof location === 'undefined' ? window.location : location).href.replace(/\\/[^\\/]*$/, '/');\n\n  function isMochaInternal(line) {\n    return (~line.indexOf('node_modules' + slash + 'mocha' + slash))\n      || (~line.indexOf('components' + slash + 'mochajs' + slash))\n      || (~line.indexOf('components' + slash + 'mocha' + slash))\n      || (~line.indexOf(slash + 'mocha.js'));\n  }\n\n  function isNodeInternal(line) {\n    return (~line.indexOf('(timers.js:'))\n      || (~line.indexOf('(events.js:'))\n      || (~line.indexOf('(node.js:'))\n      || (~line.indexOf('(module.js:'))\n      || (~line.indexOf('GeneratorFunctionPrototype.next (native)'))\n      || false;\n  }\n\n  return function(stack) {\n    stack = stack.split('\\n');\n\n    stack = exports.reduce(stack, function(list, line) {\n      if (isMochaInternal(line)) {\n        return list;\n      }\n\n      if (is.node && isNodeInternal(line)) {\n        return list;\n      }\n\n      // Clean up cwd(absolute)\n      if (/\\(?.+:\\d+:\\d+\\)?$/.test(line)) {\n        line = line.replace(cwd, '');\n      }\n\n      list.push(line);\n      return list;\n    }, []);\n\n    return stack.join('\\n');\n  };\n};\n\n/**\n * Crude, but effective.\n * @api\n * @param {*} value\n * @returns {boolean} Whether or not `value` is a Promise\n */\nexports.isPromise = function isPromise(value) {\n  return typeof value === 'object' && typeof value.then === 'function';\n};\n\n}).call(this,require('_process'),require(\"buffer\").Buffer)\n},{\"./to-iso-string\":37,\"_process\":67,\"buffer\":44,\"debug\":2,\"fs\":42,\"glob\":42,\"json3\":54,\"path\":42,\"util\":82}],39:[function(require,module,exports){\n'use strict'\n\nexports.toByteArray = toByteArray\nexports.fromByteArray = fromByteArray\n\nvar lookup = []\nvar revLookup = []\nvar Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array\n\nfunction init () {\n  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'\n  for (var i = 0, len = code.length; i < len; ++i) {\n    lookup[i] = code[i]\n    revLookup[code.charCodeAt(i)] = i\n  }\n\n  revLookup['-'.charCodeAt(0)] = 62\n  revLookup['_'.charCodeAt(0)] = 63\n}\n\ninit()\n\nfunction toByteArray (b64) {\n  var i, j, l, tmp, placeHolders, arr\n  var len = b64.length\n\n  if (len % 4 > 0) {\n    throw new Error('Invalid string. Length must be a multiple of 4')\n  }\n\n  // the number of equal signs (place holders)\n  // if there are two placeholders, than the two characters before it\n  // represent one byte\n  // if there is only one, then the three characters before it represent 2 bytes\n  // this is just a cheap hack to not do indexOf twice\n  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0\n\n  // base64 is 4/3 + up to two characters of the original data\n  arr = new Arr(len * 3 / 4 - placeHolders)\n\n  // if there are placeholders, only get up to the last complete 4 chars\n  l = placeHolders > 0 ? len - 4 : len\n\n  var L = 0\n\n  for (i = 0, j = 0; i < l; i += 4, j += 3) {\n    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]\n    arr[L++] = (tmp >> 16) & 0xFF\n    arr[L++] = (tmp >> 8) & 0xFF\n    arr[L++] = tmp & 0xFF\n  }\n\n  if (placeHolders === 2) {\n    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)\n    arr[L++] = tmp & 0xFF\n  } else if (placeHolders === 1) {\n    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)\n    arr[L++] = (tmp >> 8) & 0xFF\n    arr[L++] = tmp & 0xFF\n  }\n\n  return arr\n}\n\nfunction tripletToBase64 (num) {\n  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]\n}\n\nfunction encodeChunk (uint8, start, end) {\n  var tmp\n  var output = []\n  for (var i = start; i < end; i += 3) {\n    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])\n    output.push(tripletToBase64(tmp))\n  }\n  return output.join('')\n}\n\nfunction fromByteArray (uint8) {\n  var tmp\n  var len = uint8.length\n  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes\n  var output = ''\n  var parts = []\n  var maxChunkLength = 16383 // must be multiple of 3\n\n  // go through the array every three bytes, we'll deal with trailing stuff later\n  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {\n    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))\n  }\n\n  // pad the end with zeros, but make sure to not forget the extra bytes\n  if (extraBytes === 1) {\n    tmp = uint8[len - 1]\n    output += lookup[tmp >> 2]\n    output += lookup[(tmp << 4) & 0x3F]\n    output += '=='\n  } else if (extraBytes === 2) {\n    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])\n    output += lookup[tmp >> 10]\n    output += lookup[(tmp >> 4) & 0x3F]\n    output += lookup[(tmp << 2) & 0x3F]\n    output += '='\n  }\n\n  parts.push(output)\n\n  return parts.join('')\n}\n\n},{}],40:[function(require,module,exports){\n\n},{}],41:[function(require,module,exports){\n(function (process){\nvar WritableStream = require('stream').Writable\nvar inherits = require('util').inherits\n\nmodule.exports = BrowserStdout\n\n\ninherits(BrowserStdout, WritableStream)\n\nfunction BrowserStdout(opts) {\n  if (!(this instanceof BrowserStdout)) return new BrowserStdout(opts)\n\n  opts = opts || {}\n  WritableStream.call(this, opts)\n  this.label = (opts.label !== undefined) ? opts.label : 'stdout'\n}\n\nBrowserStdout.prototype._write = function(chunks, encoding, cb) {\n  var output = chunks.toString ? chunks.toString() : chunks\n  if (this.label === false) {\n    console.log(output)\n  } else {\n    console.log(this.label+':', output)\n  }\n  process.nextTick(cb)\n}\n\n}).call(this,require('_process'))\n},{\"_process\":67,\"stream\":78,\"util\":82}],42:[function(require,module,exports){\narguments[4][40][0].apply(exports,arguments)\n},{\"dup\":40}],43:[function(require,module,exports){\n(function (global){\n'use strict';\n\nvar buffer = require('buffer');\nvar Buffer = buffer.Buffer;\nvar SlowBuffer = buffer.SlowBuffer;\nvar MAX_LEN = buffer.kMaxLength || 2147483647;\nexports.alloc = function alloc(size, fill, encoding) {\n  if (typeof Buffer.alloc === 'function') {\n    return Buffer.alloc(size, fill, encoding);\n  }\n  if (typeof encoding === 'number') {\n    throw new TypeError('encoding must not be number');\n  }\n  if (typeof size !== 'number') {\n    throw new TypeError('size must be a number');\n  }\n  if (size > MAX_LEN) {\n    throw new RangeError('size is too large');\n  }\n  var enc = encoding;\n  var _fill = fill;\n  if (_fill === undefined) {\n    enc = undefined;\n    _fill = 0;\n  }\n  var buf = new Buffer(size);\n  if (typeof _fill === 'string') {\n    var fillBuf = new Buffer(_fill, enc);\n    var flen = fillBuf.length;\n    var i = -1;\n    while (++i < size) {\n      buf[i] = fillBuf[i % flen];\n    }\n  } else {\n    buf.fill(_fill);\n  }\n  return buf;\n}\nexports.allocUnsafe = function allocUnsafe(size) {\n  if (typeof Buffer.allocUnsafe === 'function') {\n    return Buffer.allocUnsafe(size);\n  }\n  if (typeof size !== 'number') {\n    throw new TypeError('size must be a number');\n  }\n  if (size > MAX_LEN) {\n    throw new RangeError('size is too large');\n  }\n  return new Buffer(size);\n}\nexports.from = function from(value, encodingOrOffset, length) {\n  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {\n    return Buffer.from(value, encodingOrOffset, length);\n  }\n  if (typeof value === 'number') {\n    throw new TypeError('\"value\" argument must not be a number');\n  }\n  if (typeof value === 'string') {\n    return new Buffer(value, encodingOrOffset);\n  }\n  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {\n    var offset = encodingOrOffset;\n    if (arguments.length === 1) {\n      return new Buffer(value);\n    }\n    if (typeof offset === 'undefined') {\n      offset = 0;\n    }\n    var len = length;\n    if (typeof len === 'undefined') {\n      len = value.byteLength - offset;\n    }\n    if (offset >= value.byteLength) {\n      throw new RangeError('\\'offset\\' is out of bounds');\n    }\n    if (len > value.byteLength - offset) {\n      throw new RangeError('\\'length\\' is out of bounds');\n    }\n    return new Buffer(value.slice(offset, offset + len));\n  }\n  if (Buffer.isBuffer(value)) {\n    var out = new Buffer(value.length);\n    value.copy(out, 0, 0, value.length);\n    return out;\n  }\n  if (value) {\n    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {\n      return new Buffer(value);\n    }\n    if (value.type === 'Buffer' && Array.isArray(value.data)) {\n      return new Buffer(value.data);\n    }\n  }\n\n  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');\n}\nexports.allocUnsafeSlow = function allocUnsafeSlow(size) {\n  if (typeof Buffer.allocUnsafeSlow === 'function') {\n    return Buffer.allocUnsafeSlow(size);\n  }\n  if (typeof size !== 'number') {\n    throw new TypeError('size must be a number');\n  }\n  if (size >= MAX_LEN) {\n    throw new RangeError('size is too large');\n  }\n  return new SlowBuffer(size);\n}\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"buffer\":44}],44:[function(require,module,exports){\n(function (global){\n/*!\n * The buffer module from node.js, for the browser.\n *\n * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\n * @license  MIT\n */\n/* eslint-disable no-proto */\n\n'use strict'\n\nvar base64 = require('base64-js')\nvar ieee754 = require('ieee754')\nvar isArray = require('isarray')\n\nexports.Buffer = Buffer\nexports.SlowBuffer = SlowBuffer\nexports.INSPECT_MAX_BYTES = 50\n\n/**\n * If `Buffer.TYPED_ARRAY_SUPPORT`:\n *   === true    Use Uint8Array implementation (fastest)\n *   === false   Use Object implementation (most compatible, even IE6)\n *\n * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,\n * Opera 11.6+, iOS 4.2+.\n *\n * Due to various browser bugs, sometimes the Object implementation will be used even\n * when the browser supports typed arrays.\n *\n * Note:\n *\n *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,\n *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.\n *\n *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.\n *\n *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of\n *     incorrect length in some situations.\n\n * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they\n * get the Object implementation, which is slower but behaves correctly.\n */\nBuffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined\n  ? global.TYPED_ARRAY_SUPPORT\n  : typedArraySupport()\n\n/*\n * Export kMaxLength after typed array support is determined.\n */\nexports.kMaxLength = kMaxLength()\n\nfunction typedArraySupport () {\n  try {\n    var arr = new Uint8Array(1)\n    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}\n    return arr.foo() === 42 && // typed array instances can be augmented\n        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`\n        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`\n  } catch (e) {\n    return false\n  }\n}\n\nfunction kMaxLength () {\n  return Buffer.TYPED_ARRAY_SUPPORT\n    ? 0x7fffffff\n    : 0x3fffffff\n}\n\nfunction createBuffer (that, length) {\n  if (kMaxLength() < length) {\n    throw new RangeError('Invalid typed array length')\n  }\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    // Return an augmented `Uint8Array` instance, for best performance\n    that = new Uint8Array(length)\n    that.__proto__ = Buffer.prototype\n  } else {\n    // Fallback: Return an object instance of the Buffer class\n    if (that === null) {\n      that = new Buffer(length)\n    }\n    that.length = length\n  }\n\n  return that\n}\n\n/**\n * The Buffer constructor returns instances of `Uint8Array` that have their\n * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of\n * `Uint8Array`, so the returned instances will have all the node `Buffer` methods\n * and the `Uint8Array` methods. Square bracket notation works as expected -- it\n * returns a single octet.\n *\n * The `Uint8Array` prototype remains unmodified.\n */\n\nfunction Buffer (arg, encodingOrOffset, length) {\n  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {\n    return new Buffer(arg, encodingOrOffset, length)\n  }\n\n  // Common case.\n  if (typeof arg === 'number') {\n    if (typeof encodingOrOffset === 'string') {\n      throw new Error(\n        'If encoding is specified then the first argument must be a string'\n      )\n    }\n    return allocUnsafe(this, arg)\n  }\n  return from(this, arg, encodingOrOffset, length)\n}\n\nBuffer.poolSize = 8192 // not used by this implementation\n\n// TODO: Legacy, not needed anymore. Remove in next major version.\nBuffer._augment = function (arr) {\n  arr.__proto__ = Buffer.prototype\n  return arr\n}\n\nfunction from (that, value, encodingOrOffset, length) {\n  if (typeof value === 'number') {\n    throw new TypeError('\"value\" argument must not be a number')\n  }\n\n  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {\n    return fromArrayBuffer(that, value, encodingOrOffset, length)\n  }\n\n  if (typeof value === 'string') {\n    return fromString(that, value, encodingOrOffset)\n  }\n\n  return fromObject(that, value)\n}\n\n/**\n * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError\n * if value is a number.\n * Buffer.from(str[, encoding])\n * Buffer.from(array)\n * Buffer.from(buffer)\n * Buffer.from(arrayBuffer[, byteOffset[, length]])\n **/\nBuffer.from = function (value, encodingOrOffset, length) {\n  return from(null, value, encodingOrOffset, length)\n}\n\nif (Buffer.TYPED_ARRAY_SUPPORT) {\n  Buffer.prototype.__proto__ = Uint8Array.prototype\n  Buffer.__proto__ = Uint8Array\n  if (typeof Symbol !== 'undefined' && Symbol.species &&\n      Buffer[Symbol.species] === Buffer) {\n    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97\n    Object.defineProperty(Buffer, Symbol.species, {\n      value: null,\n      configurable: true\n    })\n  }\n}\n\nfunction assertSize (size) {\n  if (typeof size !== 'number') {\n    throw new TypeError('\"size\" argument must be a number')\n  }\n}\n\nfunction alloc (that, size, fill, encoding) {\n  assertSize(size)\n  if (size <= 0) {\n    return createBuffer(that, size)\n  }\n  if (fill !== undefined) {\n    // Only pay attention to encoding if it's a string. This\n    // prevents accidentally sending in a number that would\n    // be interpretted as a start offset.\n    return typeof encoding === 'string'\n      ? createBuffer(that, size).fill(fill, encoding)\n      : createBuffer(that, size).fill(fill)\n  }\n  return createBuffer(that, size)\n}\n\n/**\n * Creates a new filled Buffer instance.\n * alloc(size[, fill[, encoding]])\n **/\nBuffer.alloc = function (size, fill, encoding) {\n  return alloc(null, size, fill, encoding)\n}\n\nfunction allocUnsafe (that, size) {\n  assertSize(size)\n  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) {\n    for (var i = 0; i < size; ++i) {\n      that[i] = 0\n    }\n  }\n  return that\n}\n\n/**\n * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.\n * */\nBuffer.allocUnsafe = function (size) {\n  return allocUnsafe(null, size)\n}\n/**\n * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.\n */\nBuffer.allocUnsafeSlow = function (size) {\n  return allocUnsafe(null, size)\n}\n\nfunction fromString (that, string, encoding) {\n  if (typeof encoding !== 'string' || encoding === '') {\n    encoding = 'utf8'\n  }\n\n  if (!Buffer.isEncoding(encoding)) {\n    throw new TypeError('\"encoding\" must be a valid string encoding')\n  }\n\n  var length = byteLength(string, encoding) | 0\n  that = createBuffer(that, length)\n\n  that.write(string, encoding)\n  return that\n}\n\nfunction fromArrayLike (that, array) {\n  var length = checked(array.length) | 0\n  that = createBuffer(that, length)\n  for (var i = 0; i < length; i += 1) {\n    that[i] = array[i] & 255\n  }\n  return that\n}\n\nfunction fromArrayBuffer (that, array, byteOffset, length) {\n  array.byteLength // this throws if `array` is not a valid ArrayBuffer\n\n  if (byteOffset < 0 || array.byteLength < byteOffset) {\n    throw new RangeError('\\'offset\\' is out of bounds')\n  }\n\n  if (array.byteLength < byteOffset + (length || 0)) {\n    throw new RangeError('\\'length\\' is out of bounds')\n  }\n\n  if (length === undefined) {\n    array = new Uint8Array(array, byteOffset)\n  } else {\n    array = new Uint8Array(array, byteOffset, length)\n  }\n\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    // Return an augmented `Uint8Array` instance, for best performance\n    that = array\n    that.__proto__ = Buffer.prototype\n  } else {\n    // Fallback: Return an object instance of the Buffer class\n    that = fromArrayLike(that, array)\n  }\n  return that\n}\n\nfunction fromObject (that, obj) {\n  if (Buffer.isBuffer(obj)) {\n    var len = checked(obj.length) | 0\n    that = createBuffer(that, len)\n\n    if (that.length === 0) {\n      return that\n    }\n\n    obj.copy(that, 0, 0, len)\n    return that\n  }\n\n  if (obj) {\n    if ((typeof ArrayBuffer !== 'undefined' &&\n        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {\n      if (typeof obj.length !== 'number' || isnan(obj.length)) {\n        return createBuffer(that, 0)\n      }\n      return fromArrayLike(that, obj)\n    }\n\n    if (obj.type === 'Buffer' && isArray(obj.data)) {\n      return fromArrayLike(that, obj.data)\n    }\n  }\n\n  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')\n}\n\nfunction checked (length) {\n  // Note: cannot use `length < kMaxLength` here because that fails when\n  // length is NaN (which is otherwise coerced to zero.)\n  if (length >= kMaxLength()) {\n    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +\n                         'size: 0x' + kMaxLength().toString(16) + ' bytes')\n  }\n  return length | 0\n}\n\nfunction SlowBuffer (length) {\n  if (+length != length) { // eslint-disable-line eqeqeq\n    length = 0\n  }\n  return Buffer.alloc(+length)\n}\n\nBuffer.isBuffer = function isBuffer (b) {\n  return !!(b != null && b._isBuffer)\n}\n\nBuffer.compare = function compare (a, b) {\n  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {\n    throw new TypeError('Arguments must be Buffers')\n  }\n\n  if (a === b) return 0\n\n  var x = a.length\n  var y = b.length\n\n  for (var i = 0, len = Math.min(x, y); i < len; ++i) {\n    if (a[i] !== b[i]) {\n      x = a[i]\n      y = b[i]\n      break\n    }\n  }\n\n  if (x < y) return -1\n  if (y < x) return 1\n  return 0\n}\n\nBuffer.isEncoding = function isEncoding (encoding) {\n  switch (String(encoding).toLowerCase()) {\n    case 'hex':\n    case 'utf8':\n    case 'utf-8':\n    case 'ascii':\n    case 'binary':\n    case 'base64':\n    case 'raw':\n    case 'ucs2':\n    case 'ucs-2':\n    case 'utf16le':\n    case 'utf-16le':\n      return true\n    default:\n      return false\n  }\n}\n\nBuffer.concat = function concat (list, length) {\n  if (!isArray(list)) {\n    throw new TypeError('\"list\" argument must be an Array of Buffers')\n  }\n\n  if (list.length === 0) {\n    return Buffer.alloc(0)\n  }\n\n  var i\n  if (length === undefined) {\n    length = 0\n    for (i = 0; i < list.length; ++i) {\n      length += list[i].length\n    }\n  }\n\n  var buffer = Buffer.allocUnsafe(length)\n  var pos = 0\n  for (i = 0; i < list.length; ++i) {\n    var buf = list[i]\n    if (!Buffer.isBuffer(buf)) {\n      throw new TypeError('\"list\" argument must be an Array of Buffers')\n    }\n    buf.copy(buffer, pos)\n    pos += buf.length\n  }\n  return buffer\n}\n\nfunction byteLength (string, encoding) {\n  if (Buffer.isBuffer(string)) {\n    return string.length\n  }\n  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&\n      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {\n    return string.byteLength\n  }\n  if (typeof string !== 'string') {\n    string = '' + string\n  }\n\n  var len = string.length\n  if (len === 0) return 0\n\n  // Use a for loop to avoid recursion\n  var loweredCase = false\n  for (;;) {\n    switch (encoding) {\n      case 'ascii':\n      case 'binary':\n      case 'raw':\n      case 'raws':\n        return len\n      case 'utf8':\n      case 'utf-8':\n      case undefined:\n        return utf8ToBytes(string).length\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return len * 2\n      case 'hex':\n        return len >>> 1\n      case 'base64':\n        return base64ToBytes(string).length\n      default:\n        if (loweredCase) return utf8ToBytes(string).length // assume utf8\n        encoding = ('' + encoding).toLowerCase()\n        loweredCase = true\n    }\n  }\n}\nBuffer.byteLength = byteLength\n\nfunction slowToString (encoding, start, end) {\n  var loweredCase = false\n\n  // No need to verify that \"this.length <= MAX_UINT32\" since it's a read-only\n  // property of a typed array.\n\n  // This behaves neither like String nor Uint8Array in that we set start/end\n  // to their upper/lower bounds if the value passed is out of range.\n  // undefined is handled specially as per ECMA-262 6th Edition,\n  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.\n  if (start === undefined || start < 0) {\n    start = 0\n  }\n  // Return early if start > this.length. Done here to prevent potential uint32\n  // coercion fail below.\n  if (start > this.length) {\n    return ''\n  }\n\n  if (end === undefined || end > this.length) {\n    end = this.length\n  }\n\n  if (end <= 0) {\n    return ''\n  }\n\n  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.\n  end >>>= 0\n  start >>>= 0\n\n  if (end <= start) {\n    return ''\n  }\n\n  if (!encoding) encoding = 'utf8'\n\n  while (true) {\n    switch (encoding) {\n      case 'hex':\n        return hexSlice(this, start, end)\n\n      case 'utf8':\n      case 'utf-8':\n        return utf8Slice(this, start, end)\n\n      case 'ascii':\n        return asciiSlice(this, start, end)\n\n      case 'binary':\n        return binarySlice(this, start, end)\n\n      case 'base64':\n        return base64Slice(this, start, end)\n\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return utf16leSlice(this, start, end)\n\n      default:\n        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)\n        encoding = (encoding + '').toLowerCase()\n        loweredCase = true\n    }\n  }\n}\n\n// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect\n// Buffer instances.\nBuffer.prototype._isBuffer = true\n\nfunction swap (b, n, m) {\n  var i = b[n]\n  b[n] = b[m]\n  b[m] = i\n}\n\nBuffer.prototype.swap16 = function swap16 () {\n  var len = this.length\n  if (len % 2 !== 0) {\n    throw new RangeError('Buffer size must be a multiple of 16-bits')\n  }\n  for (var i = 0; i < len; i += 2) {\n    swap(this, i, i + 1)\n  }\n  return this\n}\n\nBuffer.prototype.swap32 = function swap32 () {\n  var len = this.length\n  if (len % 4 !== 0) {\n    throw new RangeError('Buffer size must be a multiple of 32-bits')\n  }\n  for (var i = 0; i < len; i += 4) {\n    swap(this, i, i + 3)\n    swap(this, i + 1, i + 2)\n  }\n  return this\n}\n\nBuffer.prototype.toString = function toString () {\n  var length = this.length | 0\n  if (length === 0) return ''\n  if (arguments.length === 0) return utf8Slice(this, 0, length)\n  return slowToString.apply(this, arguments)\n}\n\nBuffer.prototype.equals = function equals (b) {\n  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')\n  if (this === b) return true\n  return Buffer.compare(this, b) === 0\n}\n\nBuffer.prototype.inspect = function inspect () {\n  var str = ''\n  var max = exports.INSPECT_MAX_BYTES\n  if (this.length > 0) {\n    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')\n    if (this.length > max) str += ' ... '\n  }\n  return '<Buffer ' + str + '>'\n}\n\nBuffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {\n  if (!Buffer.isBuffer(target)) {\n    throw new TypeError('Argument must be a Buffer')\n  }\n\n  if (start === undefined) {\n    start = 0\n  }\n  if (end === undefined) {\n    end = target ? target.length : 0\n  }\n  if (thisStart === undefined) {\n    thisStart = 0\n  }\n  if (thisEnd === undefined) {\n    thisEnd = this.length\n  }\n\n  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {\n    throw new RangeError('out of range index')\n  }\n\n  if (thisStart >= thisEnd && start >= end) {\n    return 0\n  }\n  if (thisStart >= thisEnd) {\n    return -1\n  }\n  if (start >= end) {\n    return 1\n  }\n\n  start >>>= 0\n  end >>>= 0\n  thisStart >>>= 0\n  thisEnd >>>= 0\n\n  if (this === target) return 0\n\n  var x = thisEnd - thisStart\n  var y = end - start\n  var len = Math.min(x, y)\n\n  var thisCopy = this.slice(thisStart, thisEnd)\n  var targetCopy = target.slice(start, end)\n\n  for (var i = 0; i < len; ++i) {\n    if (thisCopy[i] !== targetCopy[i]) {\n      x = thisCopy[i]\n      y = targetCopy[i]\n      break\n    }\n  }\n\n  if (x < y) return -1\n  if (y < x) return 1\n  return 0\n}\n\nfunction arrayIndexOf (arr, val, byteOffset, encoding) {\n  var indexSize = 1\n  var arrLength = arr.length\n  var valLength = val.length\n\n  if (encoding !== undefined) {\n    encoding = String(encoding).toLowerCase()\n    if (encoding === 'ucs2' || encoding === 'ucs-2' ||\n        encoding === 'utf16le' || encoding === 'utf-16le') {\n      if (arr.length < 2 || val.length < 2) {\n        return -1\n      }\n      indexSize = 2\n      arrLength /= 2\n      valLength /= 2\n      byteOffset /= 2\n    }\n  }\n\n  function read (buf, i) {\n    if (indexSize === 1) {\n      return buf[i]\n    } else {\n      return buf.readUInt16BE(i * indexSize)\n    }\n  }\n\n  var foundIndex = -1\n  for (var i = byteOffset; i < arrLength; ++i) {\n    if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {\n      if (foundIndex === -1) foundIndex = i\n      if (i - foundIndex + 1 === valLength) return foundIndex * indexSize\n    } else {\n      if (foundIndex !== -1) i -= i - foundIndex\n      foundIndex = -1\n    }\n  }\n\n  return -1\n}\n\nBuffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {\n  if (typeof byteOffset === 'string') {\n    encoding = byteOffset\n    byteOffset = 0\n  } else if (byteOffset > 0x7fffffff) {\n    byteOffset = 0x7fffffff\n  } else if (byteOffset < -0x80000000) {\n    byteOffset = -0x80000000\n  }\n  byteOffset >>= 0\n\n  if (this.length === 0) return -1\n  if (byteOffset >= this.length) return -1\n\n  // Negative offsets start from the end of the buffer\n  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)\n\n  if (typeof val === 'string') {\n    val = Buffer.from(val, encoding)\n  }\n\n  if (Buffer.isBuffer(val)) {\n    // special case: looking for empty string/buffer always fails\n    if (val.length === 0) {\n      return -1\n    }\n    return arrayIndexOf(this, val, byteOffset, encoding)\n  }\n  if (typeof val === 'number') {\n    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {\n      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)\n    }\n    return arrayIndexOf(this, [ val ], byteOffset, encoding)\n  }\n\n  throw new TypeError('val must be string, number or Buffer')\n}\n\nBuffer.prototype.includes = function includes (val, byteOffset, encoding) {\n  return this.indexOf(val, byteOffset, encoding) !== -1\n}\n\nfunction hexWrite (buf, string, offset, length) {\n  offset = Number(offset) || 0\n  var remaining = buf.length - offset\n  if (!length) {\n    length = remaining\n  } else {\n    length = Number(length)\n    if (length > remaining) {\n      length = remaining\n    }\n  }\n\n  // must be an even number of digits\n  var strLen = string.length\n  if (strLen % 2 !== 0) throw new Error('Invalid hex string')\n\n  if (length > strLen / 2) {\n    length = strLen / 2\n  }\n  for (var i = 0; i < length; ++i) {\n    var parsed = parseInt(string.substr(i * 2, 2), 16)\n    if (isNaN(parsed)) return i\n    buf[offset + i] = parsed\n  }\n  return i\n}\n\nfunction utf8Write (buf, string, offset, length) {\n  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)\n}\n\nfunction asciiWrite (buf, string, offset, length) {\n  return blitBuffer(asciiToBytes(string), buf, offset, length)\n}\n\nfunction binaryWrite (buf, string, offset, length) {\n  return asciiWrite(buf, string, offset, length)\n}\n\nfunction base64Write (buf, string, offset, length) {\n  return blitBuffer(base64ToBytes(string), buf, offset, length)\n}\n\nfunction ucs2Write (buf, string, offset, length) {\n  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)\n}\n\nBuffer.prototype.write = function write (string, offset, length, encoding) {\n  // Buffer#write(string)\n  if (offset === undefined) {\n    encoding = 'utf8'\n    length = this.length\n    offset = 0\n  // Buffer#write(string, encoding)\n  } else if (length === undefined && typeof offset === 'string') {\n    encoding = offset\n    length = this.length\n    offset = 0\n  // Buffer#write(string, offset[, length][, encoding])\n  } else if (isFinite(offset)) {\n    offset = offset | 0\n    if (isFinite(length)) {\n      length = length | 0\n      if (encoding === undefined) encoding = 'utf8'\n    } else {\n      encoding = length\n      length = undefined\n    }\n  // legacy write(string, encoding, offset, length) - remove in v0.13\n  } else {\n    throw new Error(\n      'Buffer.write(string, encoding, offset[, length]) is no longer supported'\n    )\n  }\n\n  var remaining = this.length - offset\n  if (length === undefined || length > remaining) length = remaining\n\n  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {\n    throw new RangeError('Attempt to write outside buffer bounds')\n  }\n\n  if (!encoding) encoding = 'utf8'\n\n  var loweredCase = false\n  for (;;) {\n    switch (encoding) {\n      case 'hex':\n        return hexWrite(this, string, offset, length)\n\n      case 'utf8':\n      case 'utf-8':\n        return utf8Write(this, string, offset, length)\n\n      case 'ascii':\n        return asciiWrite(this, string, offset, length)\n\n      case 'binary':\n        return binaryWrite(this, string, offset, length)\n\n      case 'base64':\n        // Warning: maxLength not taken into account in base64Write\n        return base64Write(this, string, offset, length)\n\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return ucs2Write(this, string, offset, length)\n\n      default:\n        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)\n        encoding = ('' + encoding).toLowerCase()\n        loweredCase = true\n    }\n  }\n}\n\nBuffer.prototype.toJSON = function toJSON () {\n  return {\n    type: 'Buffer',\n    data: Array.prototype.slice.call(this._arr || this, 0)\n  }\n}\n\nfunction base64Slice (buf, start, end) {\n  if (start === 0 && end === buf.length) {\n    return base64.fromByteArray(buf)\n  } else {\n    return base64.fromByteArray(buf.slice(start, end))\n  }\n}\n\nfunction utf8Slice (buf, start, end) {\n  end = Math.min(buf.length, end)\n  var res = []\n\n  var i = start\n  while (i < end) {\n    var firstByte = buf[i]\n    var codePoint = null\n    var bytesPerSequence = (firstByte > 0xEF) ? 4\n      : (firstByte > 0xDF) ? 3\n      : (firstByte > 0xBF) ? 2\n      : 1\n\n    if (i + bytesPerSequence <= end) {\n      var secondByte, thirdByte, fourthByte, tempCodePoint\n\n      switch (bytesPerSequence) {\n        case 1:\n          if (firstByte < 0x80) {\n            codePoint = firstByte\n          }\n          break\n        case 2:\n          secondByte = buf[i + 1]\n          if ((secondByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)\n            if (tempCodePoint > 0x7F) {\n              codePoint = tempCodePoint\n            }\n          }\n          break\n        case 3:\n          secondByte = buf[i + 1]\n          thirdByte = buf[i + 2]\n          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)\n            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {\n              codePoint = tempCodePoint\n            }\n          }\n          break\n        case 4:\n          secondByte = buf[i + 1]\n          thirdByte = buf[i + 2]\n          fourthByte = buf[i + 3]\n          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)\n            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {\n              codePoint = tempCodePoint\n            }\n          }\n      }\n    }\n\n    if (codePoint === null) {\n      // we did not generate a valid codePoint so insert a\n      // replacement char (U+FFFD) and advance only 1 byte\n      codePoint = 0xFFFD\n      bytesPerSequence = 1\n    } else if (codePoint > 0xFFFF) {\n      // encode to utf16 (surrogate pair dance)\n      codePoint -= 0x10000\n      res.push(codePoint >>> 10 & 0x3FF | 0xD800)\n      codePoint = 0xDC00 | codePoint & 0x3FF\n    }\n\n    res.push(codePoint)\n    i += bytesPerSequence\n  }\n\n  return decodeCodePointsArray(res)\n}\n\n// Based on http://stackoverflow.com/a/22747272/680742, the browser with\n// the lowest limit is Chrome, with 0x10000 args.\n// We go 1 magnitude less, for safety\nvar MAX_ARGUMENTS_LENGTH = 0x1000\n\nfunction decodeCodePointsArray (codePoints) {\n  var len = codePoints.length\n  if (len <= MAX_ARGUMENTS_LENGTH) {\n    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()\n  }\n\n  // Decode in chunks to avoid \"call stack size exceeded\".\n  var res = ''\n  var i = 0\n  while (i < len) {\n    res += String.fromCharCode.apply(\n      String,\n      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)\n    )\n  }\n  return res\n}\n\nfunction asciiSlice (buf, start, end) {\n  var ret = ''\n  end = Math.min(buf.length, end)\n\n  for (var i = start; i < end; ++i) {\n    ret += String.fromCharCode(buf[i] & 0x7F)\n  }\n  return ret\n}\n\nfunction binarySlice (buf, start, end) {\n  var ret = ''\n  end = Math.min(buf.length, end)\n\n  for (var i = start; i < end; ++i) {\n    ret += String.fromCharCode(buf[i])\n  }\n  return ret\n}\n\nfunction hexSlice (buf, start, end) {\n  var len = buf.length\n\n  if (!start || start < 0) start = 0\n  if (!end || end < 0 || end > len) end = len\n\n  var out = ''\n  for (var i = start; i < end; ++i) {\n    out += toHex(buf[i])\n  }\n  return out\n}\n\nfunction utf16leSlice (buf, start, end) {\n  var bytes = buf.slice(start, end)\n  var res = ''\n  for (var i = 0; i < bytes.length; i += 2) {\n    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)\n  }\n  return res\n}\n\nBuffer.prototype.slice = function slice (start, end) {\n  var len = this.length\n  start = ~~start\n  end = end === undefined ? len : ~~end\n\n  if (start < 0) {\n    start += len\n    if (start < 0) start = 0\n  } else if (start > len) {\n    start = len\n  }\n\n  if (end < 0) {\n    end += len\n    if (end < 0) end = 0\n  } else if (end > len) {\n    end = len\n  }\n\n  if (end < start) end = start\n\n  var newBuf\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    newBuf = this.subarray(start, end)\n    newBuf.__proto__ = Buffer.prototype\n  } else {\n    var sliceLen = end - start\n    newBuf = new Buffer(sliceLen, undefined)\n    for (var i = 0; i < sliceLen; ++i) {\n      newBuf[i] = this[i + start]\n    }\n  }\n\n  return newBuf\n}\n\n/*\n * Need to make sure that buffer isn't trying to write out of bounds.\n */\nfunction checkOffset (offset, ext, length) {\n  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')\n  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')\n}\n\nBuffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var val = this[offset]\n  var mul = 1\n  var i = 0\n  while (++i < byteLength && (mul *= 0x100)) {\n    val += this[offset + i] * mul\n  }\n\n  return val\n}\n\nBuffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) {\n    checkOffset(offset, byteLength, this.length)\n  }\n\n  var val = this[offset + --byteLength]\n  var mul = 1\n  while (byteLength > 0 && (mul *= 0x100)) {\n    val += this[offset + --byteLength] * mul\n  }\n\n  return val\n}\n\nBuffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 1, this.length)\n  return this[offset]\n}\n\nBuffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  return this[offset] | (this[offset + 1] << 8)\n}\n\nBuffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  return (this[offset] << 8) | this[offset + 1]\n}\n\nBuffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return ((this[offset]) |\n      (this[offset + 1] << 8) |\n      (this[offset + 2] << 16)) +\n      (this[offset + 3] * 0x1000000)\n}\n\nBuffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset] * 0x1000000) +\n    ((this[offset + 1] << 16) |\n    (this[offset + 2] << 8) |\n    this[offset + 3])\n}\n\nBuffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var val = this[offset]\n  var mul = 1\n  var i = 0\n  while (++i < byteLength && (mul *= 0x100)) {\n    val += this[offset + i] * mul\n  }\n  mul *= 0x80\n\n  if (val >= mul) val -= Math.pow(2, 8 * byteLength)\n\n  return val\n}\n\nBuffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var i = byteLength\n  var mul = 1\n  var val = this[offset + --i]\n  while (i > 0 && (mul *= 0x100)) {\n    val += this[offset + --i] * mul\n  }\n  mul *= 0x80\n\n  if (val >= mul) val -= Math.pow(2, 8 * byteLength)\n\n  return val\n}\n\nBuffer.prototype.readInt8 = function readInt8 (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 1, this.length)\n  if (!(this[offset] & 0x80)) return (this[offset])\n  return ((0xff - this[offset] + 1) * -1)\n}\n\nBuffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  var val = this[offset] | (this[offset + 1] << 8)\n  return (val & 0x8000) ? val | 0xFFFF0000 : val\n}\n\nBuffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  var val = this[offset + 1] | (this[offset] << 8)\n  return (val & 0x8000) ? val | 0xFFFF0000 : val\n}\n\nBuffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset]) |\n    (this[offset + 1] << 8) |\n    (this[offset + 2] << 16) |\n    (this[offset + 3] << 24)\n}\n\nBuffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset] << 24) |\n    (this[offset + 1] << 16) |\n    (this[offset + 2] << 8) |\n    (this[offset + 3])\n}\n\nBuffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n  return ieee754.read(this, offset, true, 23, 4)\n}\n\nBuffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n  return ieee754.read(this, offset, false, 23, 4)\n}\n\nBuffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 8, this.length)\n  return ieee754.read(this, offset, true, 52, 8)\n}\n\nBuffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 8, this.length)\n  return ieee754.read(this, offset, false, 52, 8)\n}\n\nfunction checkInt (buf, value, offset, ext, max, min) {\n  if (!Buffer.isBuffer(buf)) throw new TypeError('\"buffer\" argument must be a Buffer instance')\n  if (value > max || value < min) throw new RangeError('\"value\" argument is out of bounds')\n  if (offset + ext > buf.length) throw new RangeError('Index out of range')\n}\n\nBuffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) {\n    var maxBytes = Math.pow(2, 8 * byteLength) - 1\n    checkInt(this, value, offset, byteLength, maxBytes, 0)\n  }\n\n  var mul = 1\n  var i = 0\n  this[offset] = value & 0xFF\n  while (++i < byteLength && (mul *= 0x100)) {\n    this[offset + i] = (value / mul) & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) {\n    var maxBytes = Math.pow(2, 8 * byteLength) - 1\n    checkInt(this, value, offset, byteLength, maxBytes, 0)\n  }\n\n  var i = byteLength - 1\n  var mul = 1\n  this[offset + i] = value & 0xFF\n  while (--i >= 0 && (mul *= 0x100)) {\n    this[offset + i] = (value / mul) & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)\n  this[offset] = (value & 0xff)\n  return offset + 1\n}\n\nfunction objectWriteUInt16 (buf, value, offset, littleEndian) {\n  if (value < 0) value = 0xffff + value + 1\n  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {\n    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>\n      (littleEndian ? i : 1 - i) * 8\n  }\n}\n\nBuffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value & 0xff)\n    this[offset + 1] = (value >>> 8)\n  } else {\n    objectWriteUInt16(this, value, offset, true)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 8)\n    this[offset + 1] = (value & 0xff)\n  } else {\n    objectWriteUInt16(this, value, offset, false)\n  }\n  return offset + 2\n}\n\nfunction objectWriteUInt32 (buf, value, offset, littleEndian) {\n  if (value < 0) value = 0xffffffff + value + 1\n  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {\n    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff\n  }\n}\n\nBuffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset + 3] = (value >>> 24)\n    this[offset + 2] = (value >>> 16)\n    this[offset + 1] = (value >>> 8)\n    this[offset] = (value & 0xff)\n  } else {\n    objectWriteUInt32(this, value, offset, true)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 24)\n    this[offset + 1] = (value >>> 16)\n    this[offset + 2] = (value >>> 8)\n    this[offset + 3] = (value & 0xff)\n  } else {\n    objectWriteUInt32(this, value, offset, false)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) {\n    var limit = Math.pow(2, 8 * byteLength - 1)\n\n    checkInt(this, value, offset, byteLength, limit - 1, -limit)\n  }\n\n  var i = 0\n  var mul = 1\n  var sub = 0\n  this[offset] = value & 0xFF\n  while (++i < byteLength && (mul *= 0x100)) {\n    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {\n      sub = 1\n    }\n    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) {\n    var limit = Math.pow(2, 8 * byteLength - 1)\n\n    checkInt(this, value, offset, byteLength, limit - 1, -limit)\n  }\n\n  var i = byteLength - 1\n  var mul = 1\n  var sub = 0\n  this[offset + i] = value & 0xFF\n  while (--i >= 0 && (mul *= 0x100)) {\n    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {\n      sub = 1\n    }\n    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)\n  if (value < 0) value = 0xff + value + 1\n  this[offset] = (value & 0xff)\n  return offset + 1\n}\n\nBuffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value & 0xff)\n    this[offset + 1] = (value >>> 8)\n  } else {\n    objectWriteUInt16(this, value, offset, true)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 8)\n    this[offset + 1] = (value & 0xff)\n  } else {\n    objectWriteUInt16(this, value, offset, false)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value & 0xff)\n    this[offset + 1] = (value >>> 8)\n    this[offset + 2] = (value >>> 16)\n    this[offset + 3] = (value >>> 24)\n  } else {\n    objectWriteUInt32(this, value, offset, true)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)\n  if (value < 0) value = 0xffffffff + value + 1\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 24)\n    this[offset + 1] = (value >>> 16)\n    this[offset + 2] = (value >>> 8)\n    this[offset + 3] = (value & 0xff)\n  } else {\n    objectWriteUInt32(this, value, offset, false)\n  }\n  return offset + 4\n}\n\nfunction checkIEEE754 (buf, value, offset, ext, max, min) {\n  if (offset + ext > buf.length) throw new RangeError('Index out of range')\n  if (offset < 0) throw new RangeError('Index out of range')\n}\n\nfunction writeFloat (buf, value, offset, littleEndian, noAssert) {\n  if (!noAssert) {\n    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)\n  }\n  ieee754.write(buf, value, offset, littleEndian, 23, 4)\n  return offset + 4\n}\n\nBuffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {\n  return writeFloat(this, value, offset, true, noAssert)\n}\n\nBuffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {\n  return writeFloat(this, value, offset, false, noAssert)\n}\n\nfunction writeDouble (buf, value, offset, littleEndian, noAssert) {\n  if (!noAssert) {\n    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)\n  }\n  ieee754.write(buf, value, offset, littleEndian, 52, 8)\n  return offset + 8\n}\n\nBuffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {\n  return writeDouble(this, value, offset, true, noAssert)\n}\n\nBuffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {\n  return writeDouble(this, value, offset, false, noAssert)\n}\n\n// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)\nBuffer.prototype.copy = function copy (target, targetStart, start, end) {\n  if (!start) start = 0\n  if (!end && end !== 0) end = this.length\n  if (targetStart >= target.length) targetStart = target.length\n  if (!targetStart) targetStart = 0\n  if (end > 0 && end < start) end = start\n\n  // Copy 0 bytes; we're done\n  if (end === start) return 0\n  if (target.length === 0 || this.length === 0) return 0\n\n  // Fatal error conditions\n  if (targetStart < 0) {\n    throw new RangeError('targetStart out of bounds')\n  }\n  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')\n  if (end < 0) throw new RangeError('sourceEnd out of bounds')\n\n  // Are we oob?\n  if (end > this.length) end = this.length\n  if (target.length - targetStart < end - start) {\n    end = target.length - targetStart + start\n  }\n\n  var len = end - start\n  var i\n\n  if (this === target && start < targetStart && targetStart < end) {\n    // descending copy from end\n    for (i = len - 1; i >= 0; --i) {\n      target[i + targetStart] = this[i + start]\n    }\n  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {\n    // ascending copy from start\n    for (i = 0; i < len; ++i) {\n      target[i + targetStart] = this[i + start]\n    }\n  } else {\n    Uint8Array.prototype.set.call(\n      target,\n      this.subarray(start, start + len),\n      targetStart\n    )\n  }\n\n  return len\n}\n\n// Usage:\n//    buffer.fill(number[, offset[, end]])\n//    buffer.fill(buffer[, offset[, end]])\n//    buffer.fill(string[, offset[, end]][, encoding])\nBuffer.prototype.fill = function fill (val, start, end, encoding) {\n  // Handle string cases:\n  if (typeof val === 'string') {\n    if (typeof start === 'string') {\n      encoding = start\n      start = 0\n      end = this.length\n    } else if (typeof end === 'string') {\n      encoding = end\n      end = this.length\n    }\n    if (val.length === 1) {\n      var code = val.charCodeAt(0)\n      if (code < 256) {\n        val = code\n      }\n    }\n    if (encoding !== undefined && typeof encoding !== 'string') {\n      throw new TypeError('encoding must be a string')\n    }\n    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {\n      throw new TypeError('Unknown encoding: ' + encoding)\n    }\n  } else if (typeof val === 'number') {\n    val = val & 255\n  }\n\n  // Invalid ranges are not set to a default, so can range check early.\n  if (start < 0 || this.length < start || this.length < end) {\n    throw new RangeError('Out of range index')\n  }\n\n  if (end <= start) {\n    return this\n  }\n\n  start = start >>> 0\n  end = end === undefined ? this.length : end >>> 0\n\n  if (!val) val = 0\n\n  var i\n  if (typeof val === 'number') {\n    for (i = start; i < end; ++i) {\n      this[i] = val\n    }\n  } else {\n    var bytes = Buffer.isBuffer(val)\n      ? val\n      : utf8ToBytes(new Buffer(val, encoding).toString())\n    var len = bytes.length\n    for (i = 0; i < end - start; ++i) {\n      this[i + start] = bytes[i % len]\n    }\n  }\n\n  return this\n}\n\n// HELPER FUNCTIONS\n// ================\n\nvar INVALID_BASE64_RE = /[^+\\/0-9A-Za-z-_]/g\n\nfunction base64clean (str) {\n  // Node strips out invalid characters like \\n and \\t from the string, base64-js does not\n  str = stringtrim(str).replace(INVALID_BASE64_RE, '')\n  // Node converts strings with length < 2 to ''\n  if (str.length < 2) return ''\n  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not\n  while (str.length % 4 !== 0) {\n    str = str + '='\n  }\n  return str\n}\n\nfunction stringtrim (str) {\n  if (str.trim) return str.trim()\n  return str.replace(/^\\s+|\\s+$/g, '')\n}\n\nfunction toHex (n) {\n  if (n < 16) return '0' + n.toString(16)\n  return n.toString(16)\n}\n\nfunction utf8ToBytes (string, units) {\n  units = units || Infinity\n  var codePoint\n  var length = string.length\n  var leadSurrogate = null\n  var bytes = []\n\n  for (var i = 0; i < length; ++i) {\n    codePoint = string.charCodeAt(i)\n\n    // is surrogate component\n    if (codePoint > 0xD7FF && codePoint < 0xE000) {\n      // last char was a lead\n      if (!leadSurrogate) {\n        // no lead yet\n        if (codePoint > 0xDBFF) {\n          // unexpected trail\n          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n          continue\n        } else if (i + 1 === length) {\n          // unpaired lead\n          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n          continue\n        }\n\n        // valid lead\n        leadSurrogate = codePoint\n\n        continue\n      }\n\n      // 2 leads in a row\n      if (codePoint < 0xDC00) {\n        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n        leadSurrogate = codePoint\n        continue\n      }\n\n      // valid surrogate pair\n      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000\n    } else if (leadSurrogate) {\n      // valid bmp char, but last char was a lead\n      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n    }\n\n    leadSurrogate = null\n\n    // encode utf8\n    if (codePoint < 0x80) {\n      if ((units -= 1) < 0) break\n      bytes.push(codePoint)\n    } else if (codePoint < 0x800) {\n      if ((units -= 2) < 0) break\n      bytes.push(\n        codePoint >> 0x6 | 0xC0,\n        codePoint & 0x3F | 0x80\n      )\n    } else if (codePoint < 0x10000) {\n      if ((units -= 3) < 0) break\n      bytes.push(\n        codePoint >> 0xC | 0xE0,\n        codePoint >> 0x6 & 0x3F | 0x80,\n        codePoint & 0x3F | 0x80\n      )\n    } else if (codePoint < 0x110000) {\n      if ((units -= 4) < 0) break\n      bytes.push(\n        codePoint >> 0x12 | 0xF0,\n        codePoint >> 0xC & 0x3F | 0x80,\n        codePoint >> 0x6 & 0x3F | 0x80,\n        codePoint & 0x3F | 0x80\n      )\n    } else {\n      throw new Error('Invalid code point')\n    }\n  }\n\n  return bytes\n}\n\nfunction asciiToBytes (str) {\n  var byteArray = []\n  for (var i = 0; i < str.length; ++i) {\n    // Node's code seems to be doing this and not & 0x7F..\n    byteArray.push(str.charCodeAt(i) & 0xFF)\n  }\n  return byteArray\n}\n\nfunction utf16leToBytes (str, units) {\n  var c, hi, lo\n  var byteArray = []\n  for (var i = 0; i < str.length; ++i) {\n    if ((units -= 2) < 0) break\n\n    c = str.charCodeAt(i)\n    hi = c >> 8\n    lo = c % 256\n    byteArray.push(lo)\n    byteArray.push(hi)\n  }\n\n  return byteArray\n}\n\nfunction base64ToBytes (str) {\n  return base64.toByteArray(base64clean(str))\n}\n\nfunction blitBuffer (src, dst, offset, length) {\n  for (var i = 0; i < length; ++i) {\n    if ((i + offset >= dst.length) || (i >= src.length)) break\n    dst[i + offset] = src[i]\n  }\n  return i\n}\n\nfunction isnan (val) {\n  return val !== val // eslint-disable-line no-self-compare\n}\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"base64-js\":39,\"ieee754\":50,\"isarray\":53}],45:[function(require,module,exports){\n(function (Buffer){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\n\nfunction isArray(arg) {\n  if (Array.isArray) {\n    return Array.isArray(arg);\n  }\n  return objectToString(arg) === '[object Array]';\n}\nexports.isArray = isArray;\n\nfunction isBoolean(arg) {\n  return typeof arg === 'boolean';\n}\nexports.isBoolean = isBoolean;\n\nfunction isNull(arg) {\n  return arg === null;\n}\nexports.isNull = isNull;\n\nfunction isNullOrUndefined(arg) {\n  return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\nexports.isNumber = isNumber;\n\nfunction isString(arg) {\n  return typeof arg === 'string';\n}\nexports.isString = isString;\n\nfunction isSymbol(arg) {\n  return typeof arg === 'symbol';\n}\nexports.isSymbol = isSymbol;\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\nexports.isUndefined = isUndefined;\n\nfunction isRegExp(re) {\n  return objectToString(re) === '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\nexports.isObject = isObject;\n\nfunction isDate(d) {\n  return objectToString(d) === '[object Date]';\n}\nexports.isDate = isDate;\n\nfunction isError(e) {\n  return (objectToString(e) === '[object Error]' || e instanceof Error);\n}\nexports.isError = isError;\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\nexports.isFunction = isFunction;\n\nfunction isPrimitive(arg) {\n  return arg === null ||\n         typeof arg === 'boolean' ||\n         typeof arg === 'number' ||\n         typeof arg === 'string' ||\n         typeof arg === 'symbol' ||  // ES6 symbol\n         typeof arg === 'undefined';\n}\nexports.isPrimitive = isPrimitive;\n\nexports.isBuffer = Buffer.isBuffer;\n\nfunction objectToString(o) {\n  return Object.prototype.toString.call(o);\n}\n\n}).call(this,{\"isBuffer\":require(\"../../is-buffer/index.js\")})\n},{\"../../is-buffer/index.js\":52}],46:[function(require,module,exports){\n/* See LICENSE file for terms of use */\n\n/*\n * Text diff implementation.\n *\n * This library supports the following APIS:\n * JsDiff.diffChars: Character by character diff\n * JsDiff.diffWords: Word (as defined by \\b regex) diff which ignores whitespace\n * JsDiff.diffLines: Line based diff\n *\n * JsDiff.diffCss: Diff targeted at CSS content\n *\n * These methods are based on the implementation proposed in\n * \"An O(ND) Difference Algorithm and its Variations\" (Myers, 1986).\n * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927\n */\n(function(global, undefined) {\n  var objectPrototypeToString = Object.prototype.toString;\n\n  /*istanbul ignore next*/\n  function map(arr, mapper, that) {\n    if (Array.prototype.map) {\n      return Array.prototype.map.call(arr, mapper, that);\n    }\n\n    var other = new Array(arr.length);\n\n    for (var i = 0, n = arr.length; i < n; i++) {\n      other[i] = mapper.call(that, arr[i], i, arr);\n    }\n    return other;\n  }\n  function clonePath(path) {\n    return { newPos: path.newPos, components: path.components.slice(0) };\n  }\n  function removeEmpty(array) {\n    var ret = [];\n    for (var i = 0; i < array.length; i++) {\n      if (array[i]) {\n        ret.push(array[i]);\n      }\n    }\n    return ret;\n  }\n  function escapeHTML(s) {\n    var n = s;\n    n = n.replace(/&/g, '&amp;');\n    n = n.replace(/</g, '&lt;');\n    n = n.replace(/>/g, '&gt;');\n    n = n.replace(/\"/g, '&quot;');\n\n    return n;\n  }\n\n  // This function handles the presence of circular references by bailing out when encountering an\n  // object that is already on the \"stack\" of items being processed.\n  function canonicalize(obj, stack, replacementStack) {\n    stack = stack || [];\n    replacementStack = replacementStack || [];\n\n    var i;\n\n    for (i = 0; i < stack.length; i += 1) {\n      if (stack[i] === obj) {\n        return replacementStack[i];\n      }\n    }\n\n    var canonicalizedObj;\n\n    if ('[object Array]' === objectPrototypeToString.call(obj)) {\n      stack.push(obj);\n      canonicalizedObj = new Array(obj.length);\n      replacementStack.push(canonicalizedObj);\n      for (i = 0; i < obj.length; i += 1) {\n        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);\n      }\n      stack.pop();\n      replacementStack.pop();\n    } else if (typeof obj === 'object' && obj !== null) {\n      stack.push(obj);\n      canonicalizedObj = {};\n      replacementStack.push(canonicalizedObj);\n      var sortedKeys = [],\n          key;\n      for (key in obj) {\n        sortedKeys.push(key);\n      }\n      sortedKeys.sort();\n      for (i = 0; i < sortedKeys.length; i += 1) {\n        key = sortedKeys[i];\n        canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);\n      }\n      stack.pop();\n      replacementStack.pop();\n    } else {\n      canonicalizedObj = obj;\n    }\n    return canonicalizedObj;\n  }\n\n  function buildValues(components, newString, oldString, useLongestToken) {\n    var componentPos = 0,\n        componentLen = components.length,\n        newPos = 0,\n        oldPos = 0;\n\n    for (; componentPos < componentLen; componentPos++) {\n      var component = components[componentPos];\n      if (!component.removed) {\n        if (!component.added && useLongestToken) {\n          var value = newString.slice(newPos, newPos + component.count);\n          value = map(value, function(value, i) {\n            var oldValue = oldString[oldPos + i];\n            return oldValue.length > value.length ? oldValue : value;\n          });\n\n          component.value = value.join('');\n        } else {\n          component.value = newString.slice(newPos, newPos + component.count).join('');\n        }\n        newPos += component.count;\n\n        // Common case\n        if (!component.added) {\n          oldPos += component.count;\n        }\n      } else {\n        component.value = oldString.slice(oldPos, oldPos + component.count).join('');\n        oldPos += component.count;\n\n        // Reverse add and remove so removes are output first to match common convention\n        // The diffing algorithm is tied to add then remove output and this is the simplest\n        // route to get the desired output with minimal overhead.\n        if (componentPos && components[componentPos - 1].added) {\n          var tmp = components[componentPos - 1];\n          components[componentPos - 1] = components[componentPos];\n          components[componentPos] = tmp;\n        }\n      }\n    }\n\n    return components;\n  }\n\n  function Diff(ignoreWhitespace) {\n    this.ignoreWhitespace = ignoreWhitespace;\n  }\n  Diff.prototype = {\n    diff: function(oldString, newString, callback) {\n      var self = this;\n\n      function done(value) {\n        if (callback) {\n          setTimeout(function() { callback(undefined, value); }, 0);\n          return true;\n        } else {\n          return value;\n        }\n      }\n\n      // Handle the identity case (this is due to unrolling editLength == 0\n      if (newString === oldString) {\n        return done([{ value: newString }]);\n      }\n      if (!newString) {\n        return done([{ value: oldString, removed: true }]);\n      }\n      if (!oldString) {\n        return done([{ value: newString, added: true }]);\n      }\n\n      newString = this.tokenize(newString);\n      oldString = this.tokenize(oldString);\n\n      var newLen = newString.length, oldLen = oldString.length;\n      var editLength = 1;\n      var maxEditLength = newLen + oldLen;\n      var bestPath = [{ newPos: -1, components: [] }];\n\n      // Seed editLength = 0, i.e. the content starts with the same values\n      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);\n      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {\n        // Identity per the equality and tokenizer\n        return done([{value: newString.join('')}]);\n      }\n\n      // Main worker method. checks all permutations of a given edit length for acceptance.\n      function execEditLength() {\n        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {\n          var basePath;\n          var addPath = bestPath[diagonalPath - 1],\n              removePath = bestPath[diagonalPath + 1],\n              oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;\n          if (addPath) {\n            // No one else is going to attempt to use this value, clear it\n            bestPath[diagonalPath - 1] = undefined;\n          }\n\n          var canAdd = addPath && addPath.newPos + 1 < newLen,\n              canRemove = removePath && 0 <= oldPos && oldPos < oldLen;\n          if (!canAdd && !canRemove) {\n            // If this path is a terminal then prune\n            bestPath[diagonalPath] = undefined;\n            continue;\n          }\n\n          // Select the diagonal that we want to branch from. We select the prior\n          // path whose position in the new string is the farthest from the origin\n          // and does not pass the bounds of the diff graph\n          if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {\n            basePath = clonePath(removePath);\n            self.pushComponent(basePath.components, undefined, true);\n          } else {\n            basePath = addPath;   // No need to clone, we've pulled it from the list\n            basePath.newPos++;\n            self.pushComponent(basePath.components, true, undefined);\n          }\n\n          oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);\n\n          // If we have hit the end of both strings, then we are done\n          if (basePath.newPos + 1 >= newLen && oldPos + 1 >= oldLen) {\n            return done(buildValues(basePath.components, newString, oldString, self.useLongestToken));\n          } else {\n            // Otherwise track this path as a potential candidate and continue.\n            bestPath[diagonalPath] = basePath;\n          }\n        }\n\n        editLength++;\n      }\n\n      // Performs the length of edit iteration. Is a bit fugly as this has to support the\n      // sync and async mode which is never fun. Loops over execEditLength until a value\n      // is produced.\n      if (callback) {\n        (function exec() {\n          setTimeout(function() {\n            // This should not happen, but we want to be safe.\n            /*istanbul ignore next */\n            if (editLength > maxEditLength) {\n              return callback();\n            }\n\n            if (!execEditLength()) {\n              exec();\n            }\n          }, 0);\n        }());\n      } else {\n        while (editLength <= maxEditLength) {\n          var ret = execEditLength();\n          if (ret) {\n            return ret;\n          }\n        }\n      }\n    },\n\n    pushComponent: function(components, added, removed) {\n      var last = components[components.length - 1];\n      if (last && last.added === added && last.removed === removed) {\n        // We need to clone here as the component clone operation is just\n        // as shallow array clone\n        components[components.length - 1] = {count: last.count + 1, added: added, removed: removed };\n      } else {\n        components.push({count: 1, added: added, removed: removed });\n      }\n    },\n    extractCommon: function(basePath, newString, oldString, diagonalPath) {\n      var newLen = newString.length,\n          oldLen = oldString.length,\n          newPos = basePath.newPos,\n          oldPos = newPos - diagonalPath,\n\n          commonCount = 0;\n      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {\n        newPos++;\n        oldPos++;\n        commonCount++;\n      }\n\n      if (commonCount) {\n        basePath.components.push({count: commonCount});\n      }\n\n      basePath.newPos = newPos;\n      return oldPos;\n    },\n\n    equals: function(left, right) {\n      var reWhitespace = /\\S/;\n      return left === right || (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right));\n    },\n    tokenize: function(value) {\n      return value.split('');\n    }\n  };\n\n  var CharDiff = new Diff();\n\n  var WordDiff = new Diff(true);\n  var WordWithSpaceDiff = new Diff();\n  WordDiff.tokenize = WordWithSpaceDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/(\\s+|\\b)/));\n  };\n\n  var CssDiff = new Diff(true);\n  CssDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/([{}:;,]|\\s+)/));\n  };\n\n  var LineDiff = new Diff();\n\n  var TrimmedLineDiff = new Diff();\n  TrimmedLineDiff.ignoreTrim = true;\n\n  LineDiff.tokenize = TrimmedLineDiff.tokenize = function(value) {\n    var retLines = [],\n        lines = value.split(/^/m);\n    for (var i = 0; i < lines.length; i++) {\n      var line = lines[i],\n          lastLine = lines[i - 1],\n          lastLineLastChar = lastLine && lastLine[lastLine.length - 1];\n\n      // Merge lines that may contain windows new lines\n      if (line === '\\n' && lastLineLastChar === '\\r') {\n          retLines[retLines.length - 1] = retLines[retLines.length - 1].slice(0, -1) + '\\r\\n';\n      } else {\n        if (this.ignoreTrim) {\n          line = line.trim();\n          // add a newline unless this is the last line.\n          if (i < lines.length - 1) {\n            line += '\\n';\n          }\n        }\n        retLines.push(line);\n      }\n    }\n\n    return retLines;\n  };\n\n  var PatchDiff = new Diff();\n  PatchDiff.tokenize = function(value) {\n    var ret = [],\n        linesAndNewlines = value.split(/(\\n|\\r\\n)/);\n\n    // Ignore the final empty token that occurs if the string ends with a new line\n    if (!linesAndNewlines[linesAndNewlines.length - 1]) {\n      linesAndNewlines.pop();\n    }\n\n    // Merge the content and line separators into single tokens\n    for (var i = 0; i < linesAndNewlines.length; i++) {\n      var line = linesAndNewlines[i];\n\n      if (i % 2) {\n        ret[ret.length - 1] += line;\n      } else {\n        ret.push(line);\n      }\n    }\n    return ret;\n  };\n\n  var SentenceDiff = new Diff();\n  SentenceDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/(\\S.+?[.!?])(?=\\s+|$)/));\n  };\n\n  var JsonDiff = new Diff();\n  // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a\n  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:\n  JsonDiff.useLongestToken = true;\n  JsonDiff.tokenize = LineDiff.tokenize;\n  JsonDiff.equals = function(left, right) {\n    return LineDiff.equals(left.replace(/,([\\r\\n])/g, '$1'), right.replace(/,([\\r\\n])/g, '$1'));\n  };\n\n  var JsDiff = {\n    Diff: Diff,\n\n    diffChars: function(oldStr, newStr, callback) { return CharDiff.diff(oldStr, newStr, callback); },\n    diffWords: function(oldStr, newStr, callback) { return WordDiff.diff(oldStr, newStr, callback); },\n    diffWordsWithSpace: function(oldStr, newStr, callback) { return WordWithSpaceDiff.diff(oldStr, newStr, callback); },\n    diffLines: function(oldStr, newStr, callback) { return LineDiff.diff(oldStr, newStr, callback); },\n    diffTrimmedLines: function(oldStr, newStr, callback) { return TrimmedLineDiff.diff(oldStr, newStr, callback); },\n\n    diffSentences: function(oldStr, newStr, callback) { return SentenceDiff.diff(oldStr, newStr, callback); },\n\n    diffCss: function(oldStr, newStr, callback) { return CssDiff.diff(oldStr, newStr, callback); },\n    diffJson: function(oldObj, newObj, callback) {\n      return JsonDiff.diff(\n        typeof oldObj === 'string' ? oldObj : JSON.stringify(canonicalize(oldObj), undefined, '  '),\n        typeof newObj === 'string' ? newObj : JSON.stringify(canonicalize(newObj), undefined, '  '),\n        callback\n      );\n    },\n\n    createTwoFilesPatch: function(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader) {\n      var ret = [];\n\n      if (oldFileName == newFileName) {\n        ret.push('Index: ' + oldFileName);\n      }\n      ret.push('===================================================================');\n      ret.push('--- ' + oldFileName + (typeof oldHeader === 'undefined' ? '' : '\\t' + oldHeader));\n      ret.push('+++ ' + newFileName + (typeof newHeader === 'undefined' ? '' : '\\t' + newHeader));\n\n      var diff = PatchDiff.diff(oldStr, newStr);\n      diff.push({value: '', lines: []});   // Append an empty value to make cleanup easier\n\n      // Formats a given set of lines for printing as context lines in a patch\n      function contextLines(lines) {\n        return map(lines, function(entry) { return ' ' + entry; });\n      }\n\n      // Outputs the no newline at end of file warning if needed\n      function eofNL(curRange, i, current) {\n        var last = diff[diff.length - 2],\n            isLast = i === diff.length - 2,\n            isLastOfType = i === diff.length - 3 && current.added !== last.added;\n\n        // Figure out if this is the last line for the given file and missing NL\n        if (!(/\\n$/.test(current.value)) && (isLast || isLastOfType)) {\n          curRange.push('\\\\ No newline at end of file');\n        }\n      }\n\n      var oldRangeStart = 0, newRangeStart = 0, curRange = [],\n          oldLine = 1, newLine = 1;\n      for (var i = 0; i < diff.length; i++) {\n        var current = diff[i],\n            lines = current.lines || current.value.replace(/\\n$/, '').split('\\n');\n        current.lines = lines;\n\n        if (current.added || current.removed) {\n          // If we have previous context, start with that\n          if (!oldRangeStart) {\n            var prev = diff[i - 1];\n            oldRangeStart = oldLine;\n            newRangeStart = newLine;\n\n            if (prev) {\n              curRange = contextLines(prev.lines.slice(-4));\n              oldRangeStart -= curRange.length;\n              newRangeStart -= curRange.length;\n            }\n          }\n\n          // Output our changes\n          curRange.push.apply(curRange, map(lines, function(entry) {\n            return (current.added ? '+' : '-') + entry;\n          }));\n          eofNL(curRange, i, current);\n\n          // Track the updated file position\n          if (current.added) {\n            newLine += lines.length;\n          } else {\n            oldLine += lines.length;\n          }\n        } else {\n          // Identical context lines. Track line changes\n          if (oldRangeStart) {\n            // Close out any changes that have been output (or join overlapping)\n            if (lines.length <= 8 && i < diff.length - 2) {\n              // Overlapping\n              curRange.push.apply(curRange, contextLines(lines));\n            } else {\n              // end the range and output\n              var contextSize = Math.min(lines.length, 4);\n              ret.push(\n                  '@@ -' + oldRangeStart + ',' + (oldLine - oldRangeStart + contextSize)\n                  + ' +' + newRangeStart + ',' + (newLine - newRangeStart + contextSize)\n                  + ' @@');\n              ret.push.apply(ret, curRange);\n              ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));\n              if (lines.length <= 4) {\n                eofNL(ret, i, current);\n              }\n\n              oldRangeStart = 0;\n              newRangeStart = 0;\n              curRange = [];\n            }\n          }\n          oldLine += lines.length;\n          newLine += lines.length;\n        }\n      }\n\n      return ret.join('\\n') + '\\n';\n    },\n\n    createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {\n      return JsDiff.createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader);\n    },\n\n    applyPatch: function(oldStr, uniDiff) {\n      var diffstr = uniDiff.split('\\n'),\n          hunks = [],\n          i = 0,\n          remEOFNL = false,\n          addEOFNL = false;\n\n      // Skip to the first change hunk\n      while (i < diffstr.length && !(/^@@/.test(diffstr[i]))) {\n        i++;\n      }\n\n      // Parse the unified diff\n      for (; i < diffstr.length; i++) {\n        if (diffstr[i][0] === '@') {\n          var chnukHeader = diffstr[i].split(/@@ -(\\d+),(\\d+) \\+(\\d+),(\\d+) @@/);\n          hunks.unshift({\n            start: chnukHeader[3],\n            oldlength: +chnukHeader[2],\n            removed: [],\n            newlength: chnukHeader[4],\n            added: []\n          });\n        } else if (diffstr[i][0] === '+') {\n          hunks[0].added.push(diffstr[i].substr(1));\n        } else if (diffstr[i][0] === '-') {\n          hunks[0].removed.push(diffstr[i].substr(1));\n        } else if (diffstr[i][0] === ' ') {\n          hunks[0].added.push(diffstr[i].substr(1));\n          hunks[0].removed.push(diffstr[i].substr(1));\n        } else if (diffstr[i][0] === '\\\\') {\n          if (diffstr[i - 1][0] === '+') {\n            remEOFNL = true;\n          } else if (diffstr[i - 1][0] === '-') {\n            addEOFNL = true;\n          }\n        }\n      }\n\n      // Apply the diff to the input\n      var lines = oldStr.split('\\n');\n      for (i = hunks.length - 1; i >= 0; i--) {\n        var hunk = hunks[i];\n        // Sanity check the input string. Bail if we don't match.\n        for (var j = 0; j < hunk.oldlength; j++) {\n          if (lines[hunk.start - 1 + j] !== hunk.removed[j]) {\n            return false;\n          }\n        }\n        Array.prototype.splice.apply(lines, [hunk.start - 1, hunk.oldlength].concat(hunk.added));\n      }\n\n      // Handle EOFNL insertion/removal\n      if (remEOFNL) {\n        while (!lines[lines.length - 1]) {\n          lines.pop();\n        }\n      } else if (addEOFNL) {\n        lines.push('');\n      }\n      return lines.join('\\n');\n    },\n\n    convertChangesToXML: function(changes) {\n      var ret = [];\n      for (var i = 0; i < changes.length; i++) {\n        var change = changes[i];\n        if (change.added) {\n          ret.push('<ins>');\n        } else if (change.removed) {\n          ret.push('<del>');\n        }\n\n        ret.push(escapeHTML(change.value));\n\n        if (change.added) {\n          ret.push('</ins>');\n        } else if (change.removed) {\n          ret.push('</del>');\n        }\n      }\n      return ret.join('');\n    },\n\n    // See: http://code.google.com/p/google-diff-match-patch/wiki/API\n    convertChangesToDMP: function(changes) {\n      var ret = [],\n          change,\n          operation;\n      for (var i = 0; i < changes.length; i++) {\n        change = changes[i];\n        if (change.added) {\n          operation = 1;\n        } else if (change.removed) {\n          operation = -1;\n        } else {\n          operation = 0;\n        }\n\n        ret.push([operation, change.value]);\n      }\n      return ret;\n    },\n\n    canonicalize: canonicalize\n  };\n\n  /*istanbul ignore next */\n  /*global module */\n  if (typeof module !== 'undefined' && module.exports) {\n    module.exports = JsDiff;\n  } else if (false) {\n    /*global define */\n    define([], function() { return JsDiff; });\n  } else if (typeof global.JsDiff === 'undefined') {\n    global.JsDiff = JsDiff;\n  }\n}(this));\n\n},{}],47:[function(require,module,exports){\n'use strict';\n\nvar matchOperatorsRe = /[|\\\\{}()[\\]^$+*?.]/g;\n\nmodule.exports = function (str) {\n\tif (typeof str !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\treturn str.replace(matchOperatorsRe, '\\\\$&');\n};\n\n},{}],48:[function(require,module,exports){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nfunction EventEmitter() {\n  this._events = this._events || {};\n  this._maxListeners = this._maxListeners || undefined;\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nEventEmitter.defaultMaxListeners = 10;\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function(n) {\n  if (!isNumber(n) || n < 0 || isNaN(n))\n    throw TypeError('n must be a positive number');\n  this._maxListeners = n;\n  return this;\n};\n\nEventEmitter.prototype.emit = function(type) {\n  var er, handler, len, args, i, listeners;\n\n  if (!this._events)\n    this._events = {};\n\n  // If there is no 'error' event listener then throw.\n  if (type === 'error') {\n    if (!this._events.error ||\n        (isObject(this._events.error) && !this._events.error.length)) {\n      er = arguments[1];\n      if (er instanceof Error) {\n        throw er; // Unhandled 'error' event\n      } else {\n        // At least give some kind of context to the user\n        var err = new Error('Uncaught, unspecified \"error\" event. (' + er + ')');\n        err.context = er;\n        throw err;\n      }\n    }\n  }\n\n  handler = this._events[type];\n\n  if (isUndefined(handler))\n    return false;\n\n  if (isFunction(handler)) {\n    switch (arguments.length) {\n      // fast cases\n      case 1:\n        handler.call(this);\n        break;\n      case 2:\n        handler.call(this, arguments[1]);\n        break;\n      case 3:\n        handler.call(this, arguments[1], arguments[2]);\n        break;\n      // slower\n      default:\n        args = Array.prototype.slice.call(arguments, 1);\n        handler.apply(this, args);\n    }\n  } else if (isObject(handler)) {\n    args = Array.prototype.slice.call(arguments, 1);\n    listeners = handler.slice();\n    len = listeners.length;\n    for (i = 0; i < len; i++)\n      listeners[i].apply(this, args);\n  }\n\n  return true;\n};\n\nEventEmitter.prototype.addListener = function(type, listener) {\n  var m;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events)\n    this._events = {};\n\n  // To avoid recursion in the case that type === \"newListener\"! Before\n  // adding it to the listeners, first emit \"newListener\".\n  if (this._events.newListener)\n    this.emit('newListener', type,\n              isFunction(listener.listener) ?\n              listener.listener : listener);\n\n  if (!this._events[type])\n    // Optimize the case of one listener. Don't need the extra array object.\n    this._events[type] = listener;\n  else if (isObject(this._events[type]))\n    // If we've already got an array, just append.\n    this._events[type].push(listener);\n  else\n    // Adding the second element, need to change to array.\n    this._events[type] = [this._events[type], listener];\n\n  // Check for listener leak\n  if (isObject(this._events[type]) && !this._events[type].warned) {\n    if (!isUndefined(this._maxListeners)) {\n      m = this._maxListeners;\n    } else {\n      m = EventEmitter.defaultMaxListeners;\n    }\n\n    if (m && m > 0 && this._events[type].length > m) {\n      this._events[type].warned = true;\n      console.error('(node) warning: possible EventEmitter memory ' +\n                    'leak detected. %d listeners added. ' +\n                    'Use emitter.setMaxListeners() to increase limit.',\n                    this._events[type].length);\n      if (typeof console.trace === 'function') {\n        // not supported in IE 10\n        console.trace();\n      }\n    }\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.once = function(type, listener) {\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  var fired = false;\n\n  function g() {\n    this.removeListener(type, g);\n\n    if (!fired) {\n      fired = true;\n      listener.apply(this, arguments);\n    }\n  }\n\n  g.listener = listener;\n  this.on(type, g);\n\n  return this;\n};\n\n// emits a 'removeListener' event iff the listener was removed\nEventEmitter.prototype.removeListener = function(type, listener) {\n  var list, position, length, i;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events || !this._events[type])\n    return this;\n\n  list = this._events[type];\n  length = list.length;\n  position = -1;\n\n  if (list === listener ||\n      (isFunction(list.listener) && list.listener === listener)) {\n    delete this._events[type];\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n\n  } else if (isObject(list)) {\n    for (i = length; i-- > 0;) {\n      if (list[i] === listener ||\n          (list[i].listener && list[i].listener === listener)) {\n        position = i;\n        break;\n      }\n    }\n\n    if (position < 0)\n      return this;\n\n    if (list.length === 1) {\n      list.length = 0;\n      delete this._events[type];\n    } else {\n      list.splice(position, 1);\n    }\n\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.removeAllListeners = function(type) {\n  var key, listeners;\n\n  if (!this._events)\n    return this;\n\n  // not listening for removeListener, no need to emit\n  if (!this._events.removeListener) {\n    if (arguments.length === 0)\n      this._events = {};\n    else if (this._events[type])\n      delete this._events[type];\n    return this;\n  }\n\n  // emit removeListener for all listeners on all events\n  if (arguments.length === 0) {\n    for (key in this._events) {\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n    this.removeAllListeners('removeListener');\n    this._events = {};\n    return this;\n  }\n\n  listeners = this._events[type];\n\n  if (isFunction(listeners)) {\n    this.removeListener(type, listeners);\n  } else if (listeners) {\n    // LIFO order\n    while (listeners.length)\n      this.removeListener(type, listeners[listeners.length - 1]);\n  }\n  delete this._events[type];\n\n  return this;\n};\n\nEventEmitter.prototype.listeners = function(type) {\n  var ret;\n  if (!this._events || !this._events[type])\n    ret = [];\n  else if (isFunction(this._events[type]))\n    ret = [this._events[type]];\n  else\n    ret = this._events[type].slice();\n  return ret;\n};\n\nEventEmitter.prototype.listenerCount = function(type) {\n  if (this._events) {\n    var evlistener = this._events[type];\n\n    if (isFunction(evlistener))\n      return 1;\n    else if (evlistener)\n      return evlistener.length;\n  }\n  return 0;\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  return emitter.listenerCount(type);\n};\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\n\n},{}],49:[function(require,module,exports){\n(function (process){\n// Growl - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)\n\n/**\n * Module dependencies.\n */\n\nvar exec = require('child_process').exec\n  , fs = require('fs')\n  , path = require('path')\n  , exists = fs.existsSync || path.existsSync\n  , os = require('os')\n  , quote = JSON.stringify\n  , cmd;\n\nfunction which(name) {\n  var paths = process.env.PATH.split(':');\n  var loc;\n\n  for (var i = 0, len = paths.length; i < len; ++i) {\n    loc = path.join(paths[i], name);\n    if (exists(loc)) return loc;\n  }\n}\n\nswitch(os.type()) {\n  case 'Darwin':\n    if (which('terminal-notifier')) {\n      cmd = {\n          type: \"Darwin-NotificationCenter\"\n        , pkg: \"terminal-notifier\"\n        , msg: '-message'\n        , title: '-title'\n        , subtitle: '-subtitle'\n        , icon: '-appIcon'\n        , sound:  '-sound'\n        , url: '-open'\n        , priority: {\n              cmd: '-execute'\n            , range: []\n          }\n      };\n    } else {\n      cmd = {\n          type: \"Darwin-Growl\"\n        , pkg: \"growlnotify\"\n        , msg: '-m'\n        , sticky: '--sticky'\n        , priority: {\n              cmd: '--priority'\n            , range: [\n                -2\n              , -1\n              , 0\n              , 1\n              , 2\n              , \"Very Low\"\n              , \"Moderate\"\n              , \"Normal\"\n              , \"High\"\n              , \"Emergency\"\n            ]\n          }\n      };\n    }\n    break;\n  case 'Linux':\n    if (which('growl')) {\n      cmd = {\n          type: \"Linux-Growl\"\n        , pkg: \"growl\"\n        , msg: '-m'\n        , title: '-title'\n        , subtitle: '-subtitle'\n        , host: {\n            cmd: '-H'\n          , hostname: '192.168.33.1'\n        }\n      };\n    } else {\n      cmd = {\n          type: \"Linux\"\n        , pkg: \"notify-send\"\n        , msg: ''\n        , sticky: '-t 0'\n        , icon: '-i'\n        , priority: {\n            cmd: '-u'\n          , range: [\n              \"low\"\n            , \"normal\"\n            , \"critical\"\n          ]\n        }\n      };\n    }\n    break;\n  case 'Windows_NT':\n    cmd = {\n        type: \"Windows\"\n      , pkg: \"growlnotify\"\n      , msg: ''\n      , sticky: '/s:true'\n      , title: '/t:'\n      , icon: '/i:'\n      , url: '/cu:'\n      , priority: {\n            cmd: '/p:'\n          , range: [\n              -2\n            , -1\n            , 0\n            , 1\n            , 2\n          ]\n        }\n    };\n    break;\n}\n\n/**\n * Expose `growl`.\n */\n\nexports = module.exports = growl;\n\n/**\n * Node-growl version.\n */\n\nexports.version = '1.4.1'\n\n/**\n * Send growl notification _msg_ with _options_.\n *\n * Options:\n *\n *  - title   Notification title\n *  - sticky  Make the notification stick (defaults to false)\n *  - priority  Specify an int or named key (default is 0)\n *  - name    Application name (defaults to growlnotify)\n *  - sound   Sound efect ( in OSx defined in preferences -> sound -> effects) * works only in OSX > 10.8x\n *  - image\n *    - path to an icon sets --iconpath\n *    - path to an image sets --image\n *    - capitalized word sets --appIcon\n *    - filename uses extname as --icon\n *    - otherwise treated as --icon\n *\n * Examples:\n *\n *   growl('New email')\n *   growl('5 new emails', { title: 'Thunderbird' })\n *   growl('5 new emails', { title: 'Thunderbird', sound: 'Purr' })\n *   growl('Email sent', function(){\n *     // ... notification sent\n *   })\n *\n * @param {string} msg\n * @param {object} options\n * @param {function} fn\n * @api public\n */\n\nfunction growl(msg, options, fn) {\n  var image\n    , args\n    , options = options || {}\n    , fn = fn || function(){};\n\n  if (options.exec) {\n    cmd = {\n        type: \"Custom\"\n      , pkg: options.exec\n      , range: []\n    };\n  }\n\n  // noop\n  if (!cmd) return fn(new Error('growl not supported on this platform'));\n  args = [cmd.pkg];\n\n  // image\n  if (image = options.image) {\n    switch(cmd.type) {\n      case 'Darwin-Growl':\n        var flag, ext = path.extname(image).substr(1)\n        flag = flag || ext == 'icns' && 'iconpath'\n        flag = flag || /^[A-Z]/.test(image) && 'appIcon'\n        flag = flag || /^png|gif|jpe?g$/.test(ext) && 'image'\n        flag = flag || ext && (image = ext) && 'icon'\n        flag = flag || 'icon'\n        args.push('--' + flag, quote(image))\n        break;\n      case 'Darwin-NotificationCenter':\n        args.push(cmd.icon, quote(image));\n        break;\n      case 'Linux':\n        args.push(cmd.icon, quote(image));\n        // libnotify defaults to sticky, set a hint for transient notifications\n        if (!options.sticky) args.push('--hint=int:transient:1');\n        break;\n      case 'Windows':\n        args.push(cmd.icon + quote(image));\n        break;\n    }\n  }\n\n  // sticky\n  if (options.sticky) args.push(cmd.sticky);\n\n  // priority\n  if (options.priority) {\n    var priority = options.priority + '';\n    var checkindexOf = cmd.priority.range.indexOf(priority);\n    if (~cmd.priority.range.indexOf(priority)) {\n      args.push(cmd.priority, options.priority);\n    }\n  }\n\n  //sound\n  if(options.sound && cmd.type === 'Darwin-NotificationCenter'){\n    args.push(cmd.sound, options.sound)\n  }\n\n  // name\n  if (options.name && cmd.type === \"Darwin-Growl\") {\n    args.push('--name', options.name);\n  }\n\n  switch(cmd.type) {\n    case 'Darwin-Growl':\n      args.push(cmd.msg);\n      args.push(quote(msg).replace(/\\\\n/g, '\\n'));\n      if (options.title) args.push(quote(options.title));\n      break;\n    case 'Darwin-NotificationCenter':\n      args.push(cmd.msg);\n      var stringifiedMsg = quote(msg);\n      var escapedMsg = stringifiedMsg.replace(/\\\\n/g, '\\n');\n      args.push(escapedMsg);\n      if (options.title) {\n        args.push(cmd.title);\n        args.push(quote(options.title));\n      }\n      if (options.subtitle) {\n        args.push(cmd.subtitle);\n        args.push(quote(options.subtitle));\n      }\n      if (options.url) {\n        args.push(cmd.url);\n        args.push(quote(options.url));\n      }\n      break;\n    case 'Linux-Growl':\n      args.push(cmd.msg);\n      args.push(quote(msg).replace(/\\\\n/g, '\\n'));\n      if (options.title) args.push(quote(options.title));\n      if (cmd.host) {\n        args.push(cmd.host.cmd, cmd.host.hostname)\n      }\n      break;\n    case 'Linux':\n      if (options.title) {\n        args.push(quote(options.title));\n        args.push(cmd.msg);\n        args.push(quote(msg).replace(/\\\\n/g, '\\n'));\n      } else {\n        args.push(quote(msg).replace(/\\\\n/g, '\\n'));\n      }\n      break;\n    case 'Windows':\n      args.push(quote(msg).replace(/\\\\n/g, '\\n'));\n      if (options.title) args.push(cmd.title + quote(options.title));\n      if (options.url) args.push(cmd.url + quote(options.url));\n      break;\n    case 'Custom':\n      args[0] = (function(origCommand) {\n        var message = options.title\n          ? options.title + ': ' + msg\n          : msg;\n        var command = origCommand.replace(/(^|[^%])%s/g, '$1' + quote(message));\n        if (command === origCommand) args.push(quote(message));\n        return command;\n      })(args[0]);\n      break;\n  }\n\n  // execute\n  exec(args.join(' '), fn);\n};\n\n}).call(this,require('_process'))\n},{\"_process\":67,\"child_process\":42,\"fs\":42,\"os\":65,\"path\":42}],50:[function(require,module,exports){\nexports.read = function (buffer, offset, isLE, mLen, nBytes) {\n  var e, m\n  var eLen = nBytes * 8 - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var nBits = -7\n  var i = isLE ? (nBytes - 1) : 0\n  var d = isLE ? -1 : 1\n  var s = buffer[offset + i]\n\n  i += d\n\n  e = s & ((1 << (-nBits)) - 1)\n  s >>= (-nBits)\n  nBits += eLen\n  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}\n\n  m = e & ((1 << (-nBits)) - 1)\n  e >>= (-nBits)\n  nBits += mLen\n  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}\n\n  if (e === 0) {\n    e = 1 - eBias\n  } else if (e === eMax) {\n    return m ? NaN : ((s ? -1 : 1) * Infinity)\n  } else {\n    m = m + Math.pow(2, mLen)\n    e = e - eBias\n  }\n  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)\n}\n\nexports.write = function (buffer, value, offset, isLE, mLen, nBytes) {\n  var e, m, c\n  var eLen = nBytes * 8 - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)\n  var i = isLE ? 0 : (nBytes - 1)\n  var d = isLE ? 1 : -1\n  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0\n\n  value = Math.abs(value)\n\n  if (isNaN(value) || value === Infinity) {\n    m = isNaN(value) ? 1 : 0\n    e = eMax\n  } else {\n    e = Math.floor(Math.log(value) / Math.LN2)\n    if (value * (c = Math.pow(2, -e)) < 1) {\n      e--\n      c *= 2\n    }\n    if (e + eBias >= 1) {\n      value += rt / c\n    } else {\n      value += rt * Math.pow(2, 1 - eBias)\n    }\n    if (value * c >= 2) {\n      e++\n      c /= 2\n    }\n\n    if (e + eBias >= eMax) {\n      m = 0\n      e = eMax\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * Math.pow(2, mLen)\n      e = e + eBias\n    } else {\n      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)\n      e = 0\n    }\n  }\n\n  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}\n\n  e = (e << mLen) | m\n  eLen += mLen\n  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}\n\n  buffer[offset + i - d] |= s * 128\n}\n\n},{}],51:[function(require,module,exports){\nif (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    ctor.prototype = Object.create(superCtor.prototype, {\n      constructor: {\n        value: ctor,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    var TempCtor = function () {}\n    TempCtor.prototype = superCtor.prototype\n    ctor.prototype = new TempCtor()\n    ctor.prototype.constructor = ctor\n  }\n}\n\n},{}],52:[function(require,module,exports){\n/**\n * Determine if an object is Buffer\n *\n * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\n * License:  MIT\n *\n * `npm install is-buffer`\n */\n\nmodule.exports = function (obj) {\n  return !!(obj != null &&\n    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)\n      (obj.constructor &&\n      typeof obj.constructor.isBuffer === 'function' &&\n      obj.constructor.isBuffer(obj))\n    ))\n}\n\n},{}],53:[function(require,module,exports){\nvar toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n},{}],54:[function(require,module,exports){\n(function (global){\n/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */\n;(function () {\n  // Detect the `define` function exposed by asynchronous module loaders. The\n  // strict `define` check is necessary for compatibility with `r.js`.\n  var isLoader = false;\n\n  // A set of types used to distinguish objects from primitives.\n  var objectTypes = {\n    \"function\": true,\n    \"object\": true\n  };\n\n  // Detect the `exports` object exposed by CommonJS implementations.\n  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;\n\n  // Use the `global` object exposed by Node (including Browserify via\n  // `insert-module-globals`), Narwhal, and Ringo as the default context,\n  // and the `window` object in browsers. Rhino exports a `global` function\n  // instead.\n  var root = objectTypes[typeof window] && window || this,\n      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == \"object\" && global;\n\n  if (freeGlobal && (freeGlobal[\"global\"] === freeGlobal || freeGlobal[\"window\"] === freeGlobal || freeGlobal[\"self\"] === freeGlobal)) {\n    root = freeGlobal;\n  }\n\n  // Public: Initializes JSON 3 using the given `context` object, attaching the\n  // `stringify` and `parse` functions to the specified `exports` object.\n  function runInContext(context, exports) {\n    context || (context = root[\"Object\"]());\n    exports || (exports = root[\"Object\"]());\n\n    // Native constructor aliases.\n    var Number = context[\"Number\"] || root[\"Number\"],\n        String = context[\"String\"] || root[\"String\"],\n        Object = context[\"Object\"] || root[\"Object\"],\n        Date = context[\"Date\"] || root[\"Date\"],\n        SyntaxError = context[\"SyntaxError\"] || root[\"SyntaxError\"],\n        TypeError = context[\"TypeError\"] || root[\"TypeError\"],\n        Math = context[\"Math\"] || root[\"Math\"],\n        nativeJSON = context[\"JSON\"] || root[\"JSON\"];\n\n    // Delegate to the native `stringify` and `parse` implementations.\n    if (typeof nativeJSON == \"object\" && nativeJSON) {\n      exports.stringify = nativeJSON.stringify;\n      exports.parse = nativeJSON.parse;\n    }\n\n    // Convenience aliases.\n    var objectProto = Object.prototype,\n        getClass = objectProto.toString,\n        isProperty, forEach, undef;\n\n    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.\n    var isExtended = new Date(-3509827334573292);\n    try {\n      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical\n      // results for certain dates in Opera >= 10.53.\n      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&\n        // Safari < 2.0.2 stores the internal millisecond time value correctly,\n        // but clips the values returned by the date methods to the range of\n        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).\n        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;\n    } catch (exception) {}\n\n    // Internal: Determines whether the native `JSON.stringify` and `parse`\n    // implementations are spec-compliant. Based on work by Ken Snyder.\n    function has(name) {\n      if (has[name] !== undef) {\n        // Return cached feature test result.\n        return has[name];\n      }\n      var isSupported;\n      if (name == \"bug-string-char-index\") {\n        // IE <= 7 doesn't support accessing string characters using square\n        // bracket notation. IE 8 only supports this for primitives.\n        isSupported = \"a\"[0] != \"a\";\n      } else if (name == \"json\") {\n        // Indicates whether both `JSON.stringify` and `JSON.parse` are\n        // supported.\n        isSupported = has(\"json-stringify\") && has(\"json-parse\");\n      } else {\n        var value, serialized = '{\"a\":[1,true,false,null,\"\\\\u0000\\\\b\\\\n\\\\f\\\\r\\\\t\"]}';\n        // Test `JSON.stringify`.\n        if (name == \"json-stringify\") {\n          var stringify = exports.stringify, stringifySupported = typeof stringify == \"function\" && isExtended;\n          if (stringifySupported) {\n            // A test function object with a custom `toJSON` method.\n            (value = function () {\n              return 1;\n            }).toJSON = value;\n            try {\n              stringifySupported =\n                // Firefox 3.1b1 and b2 serialize string, number, and boolean\n                // primitives as object literals.\n                stringify(0) === \"0\" &&\n                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object\n                // literals.\n                stringify(new Number()) === \"0\" &&\n                stringify(new String()) == '\"\"' &&\n                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or\n                // does not define a canonical JSON representation (this applies to\n                // objects with `toJSON` properties as well, *unless* they are nested\n                // within an object or array).\n                stringify(getClass) === undef &&\n                // IE 8 serializes `undefined` as `\"undefined\"`. Safari <= 5.1.7 and\n                // FF 3.1b3 pass this test.\n                stringify(undef) === undef &&\n                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,\n                // respectively, if the value is omitted entirely.\n                stringify() === undef &&\n                // FF 3.1b1, 2 throw an error if the given value is not a number,\n                // string, array, object, Boolean, or `null` literal. This applies to\n                // objects with custom `toJSON` methods as well, unless they are nested\n                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`\n                // methods entirely.\n                stringify(value) === \"1\" &&\n                stringify([value]) == \"[1]\" &&\n                // Prototype <= 1.6.1 serializes `[undefined]` as `\"[]\"` instead of\n                // `\"[null]\"`.\n                stringify([undef]) == \"[null]\" &&\n                // YUI 3.0.0b1 fails to serialize `null` literals.\n                stringify(null) == \"null\" &&\n                // FF 3.1b1, 2 halts serialization if an array contains a function:\n                // `[1, true, getClass, 1]` serializes as \"[1,true,],\". FF 3.1b3\n                // elides non-JSON values from objects and arrays, unless they\n                // define custom `toJSON` methods.\n                stringify([undef, getClass, null]) == \"[null,null,null]\" &&\n                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences\n                // where character escape codes are expected (e.g., `\\b` => `\\u0008`).\n                stringify({ \"a\": [value, true, false, null, \"\\x00\\b\\n\\f\\r\\t\"] }) == serialized &&\n                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.\n                stringify(null, value) === \"1\" &&\n                stringify([1, 2], null, 1) == \"[\\n 1,\\n 2\\n]\" &&\n                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly\n                // serialize extended years.\n                stringify(new Date(-8.64e15)) == '\"-271821-04-20T00:00:00.000Z\"' &&\n                // The milliseconds are optional in ES 5, but required in 5.1.\n                stringify(new Date(8.64e15)) == '\"+275760-09-13T00:00:00.000Z\"' &&\n                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative\n                // four-digit years instead of six-digit years. Credits: @Yaffle.\n                stringify(new Date(-621987552e5)) == '\"-000001-01-01T00:00:00.000Z\"' &&\n                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond\n                // values less than 1000. Credits: @Yaffle.\n                stringify(new Date(-1)) == '\"1969-12-31T23:59:59.999Z\"';\n            } catch (exception) {\n              stringifySupported = false;\n            }\n          }\n          isSupported = stringifySupported;\n        }\n        // Test `JSON.parse`.\n        if (name == \"json-parse\") {\n          var parse = exports.parse;\n          if (typeof parse == \"function\") {\n            try {\n              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.\n              // Conforming implementations should also coerce the initial argument to\n              // a string prior to parsing.\n              if (parse(\"0\") === 0 && !parse(false)) {\n                // Simple parsing test.\n                value = parse(serialized);\n                var parseSupported = value[\"a\"].length == 5 && value[\"a\"][0] === 1;\n                if (parseSupported) {\n                  try {\n                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.\n                    parseSupported = !parse('\"\\t\"');\n                  } catch (exception) {}\n                  if (parseSupported) {\n                    try {\n                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading\n                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow\n                      // certain octal literals.\n                      parseSupported = parse(\"01\") !== 1;\n                    } catch (exception) {}\n                  }\n                  if (parseSupported) {\n                    try {\n                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal\n                      // points. These environments, along with FF 3.1b1 and 2,\n                      // also allow trailing commas in JSON objects and arrays.\n                      parseSupported = parse(\"1.\") !== 1;\n                    } catch (exception) {}\n                  }\n                }\n              }\n            } catch (exception) {\n              parseSupported = false;\n            }\n          }\n          isSupported = parseSupported;\n        }\n      }\n      return has[name] = !!isSupported;\n    }\n\n    if (!has(\"json\")) {\n      // Common `[[Class]]` name aliases.\n      var functionClass = \"[object Function]\",\n          dateClass = \"[object Date]\",\n          numberClass = \"[object Number]\",\n          stringClass = \"[object String]\",\n          arrayClass = \"[object Array]\",\n          booleanClass = \"[object Boolean]\";\n\n      // Detect incomplete support for accessing string characters by index.\n      var charIndexBuggy = has(\"bug-string-char-index\");\n\n      // Define additional utility methods if the `Date` methods are buggy.\n      if (!isExtended) {\n        var floor = Math.floor;\n        // A mapping between the months of the year and the number of days between\n        // January 1st and the first of the respective month.\n        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];\n        // Internal: Calculates the number of days between the Unix epoch and the\n        // first day of the given month.\n        var getDay = function (year, month) {\n          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);\n        };\n      }\n\n      // Internal: Determines if a property is a direct property of the given\n      // object. Delegates to the native `Object#hasOwnProperty` method.\n      if (!(isProperty = objectProto.hasOwnProperty)) {\n        isProperty = function (property) {\n          var members = {}, constructor;\n          if ((members.__proto__ = null, members.__proto__ = {\n            // The *proto* property cannot be set multiple times in recent\n            // versions of Firefox and SeaMonkey.\n            \"toString\": 1\n          }, members).toString != getClass) {\n            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but\n            // supports the mutable *proto* property.\n            isProperty = function (property) {\n              // Capture and break the object's prototype chain (see section 8.6.2\n              // of the ES 5.1 spec). The parenthesized expression prevents an\n              // unsafe transformation by the Closure Compiler.\n              var original = this.__proto__, result = property in (this.__proto__ = null, this);\n              // Restore the original prototype chain.\n              this.__proto__ = original;\n              return result;\n            };\n          } else {\n            // Capture a reference to the top-level `Object` constructor.\n            constructor = members.constructor;\n            // Use the `constructor` property to simulate `Object#hasOwnProperty` in\n            // other environments.\n            isProperty = function (property) {\n              var parent = (this.constructor || constructor).prototype;\n              return property in this && !(property in parent && this[property] === parent[property]);\n            };\n          }\n          members = null;\n          return isProperty.call(this, property);\n        };\n      }\n\n      // Internal: Normalizes the `for...in` iteration algorithm across\n      // environments. Each enumerated key is yielded to a `callback` function.\n      forEach = function (object, callback) {\n        var size = 0, Properties, members, property;\n\n        // Tests for bugs in the current environment's `for...in` algorithm. The\n        // `valueOf` property inherits the non-enumerable flag from\n        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.\n        (Properties = function () {\n          this.valueOf = 0;\n        }).prototype.valueOf = 0;\n\n        // Iterate over a new instance of the `Properties` class.\n        members = new Properties();\n        for (property in members) {\n          // Ignore all properties inherited from `Object.prototype`.\n          if (isProperty.call(members, property)) {\n            size++;\n          }\n        }\n        Properties = members = null;\n\n        // Normalize the iteration algorithm.\n        if (!size) {\n          // A list of non-enumerable properties inherited from `Object.prototype`.\n          members = [\"valueOf\", \"toString\", \"toLocaleString\", \"propertyIsEnumerable\", \"isPrototypeOf\", \"hasOwnProperty\", \"constructor\"];\n          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable\n          // properties.\n          forEach = function (object, callback) {\n            var isFunction = getClass.call(object) == functionClass, property, length;\n            var hasProperty = !isFunction && typeof object.constructor != \"function\" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;\n            for (property in object) {\n              // Gecko <= 1.0 enumerates the `prototype` property of functions under\n              // certain conditions; IE does not.\n              if (!(isFunction && property == \"prototype\") && hasProperty.call(object, property)) {\n                callback(property);\n              }\n            }\n            // Manually invoke the callback for each non-enumerable property.\n            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));\n          };\n        } else if (size == 2) {\n          // Safari <= 2.0.4 enumerates shadowed properties twice.\n          forEach = function (object, callback) {\n            // Create a set of iterated properties.\n            var members = {}, isFunction = getClass.call(object) == functionClass, property;\n            for (property in object) {\n              // Store each property name to prevent double enumeration. The\n              // `prototype` property of functions is not enumerated due to cross-\n              // environment inconsistencies.\n              if (!(isFunction && property == \"prototype\") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {\n                callback(property);\n              }\n            }\n          };\n        } else {\n          // No bugs detected; use the standard `for...in` algorithm.\n          forEach = function (object, callback) {\n            var isFunction = getClass.call(object) == functionClass, property, isConstructor;\n            for (property in object) {\n              if (!(isFunction && property == \"prototype\") && isProperty.call(object, property) && !(isConstructor = property === \"constructor\")) {\n                callback(property);\n              }\n            }\n            // Manually invoke the callback for the `constructor` property due to\n            // cross-environment inconsistencies.\n            if (isConstructor || isProperty.call(object, (property = \"constructor\"))) {\n              callback(property);\n            }\n          };\n        }\n        return forEach(object, callback);\n      };\n\n      // Public: Serializes a JavaScript `value` as a JSON string. The optional\n      // `filter` argument may specify either a function that alters how object and\n      // array members are serialized, or an array of strings and numbers that\n      // indicates which properties should be serialized. The optional `width`\n      // argument may be either a string or number that specifies the indentation\n      // level of the output.\n      if (!has(\"json-stringify\")) {\n        // Internal: A map of control characters and their escaped equivalents.\n        var Escapes = {\n          92: \"\\\\\\\\\",\n          34: '\\\\\"',\n          8: \"\\\\b\",\n          12: \"\\\\f\",\n          10: \"\\\\n\",\n          13: \"\\\\r\",\n          9: \"\\\\t\"\n        };\n\n        // Internal: Converts `value` into a zero-padded string such that its\n        // length is at least equal to `width`. The `width` must be <= 6.\n        var leadingZeroes = \"000000\";\n        var toPaddedString = function (width, value) {\n          // The `|| 0` expression is necessary to work around a bug in\n          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== \"0\"`.\n          return (leadingZeroes + (value || 0)).slice(-width);\n        };\n\n        // Internal: Double-quotes a string `value`, replacing all ASCII control\n        // characters (characters with code unit values between 0 and 31) with\n        // their escaped equivalents. This is an implementation of the\n        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.\n        var unicodePrefix = \"\\\\u00\";\n        var quote = function (value) {\n          var result = '\"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;\n          var symbols = useCharIndex && (charIndexBuggy ? value.split(\"\") : value);\n          for (; index < length; index++) {\n            var charCode = value.charCodeAt(index);\n            // If the character is a control character, append its Unicode or\n            // shorthand escape sequence; otherwise, append the character as-is.\n            switch (charCode) {\n              case 8: case 9: case 10: case 12: case 13: case 34: case 92:\n                result += Escapes[charCode];\n                break;\n              default:\n                if (charCode < 32) {\n                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));\n                  break;\n                }\n                result += useCharIndex ? symbols[index] : value.charAt(index);\n            }\n          }\n          return result + '\"';\n        };\n\n        // Internal: Recursively serializes an object. Implements the\n        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.\n        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {\n          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;\n          try {\n            // Necessary for host object support.\n            value = object[property];\n          } catch (exception) {}\n          if (typeof value == \"object\" && value) {\n            className = getClass.call(value);\n            if (className == dateClass && !isProperty.call(value, \"toJSON\")) {\n              if (value > -1 / 0 && value < 1 / 0) {\n                // Dates are serialized according to the `Date#toJSON` method\n                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15\n                // for the ISO 8601 date time string format.\n                if (getDay) {\n                  // Manually compute the year, month, date, hours, minutes,\n                  // seconds, and milliseconds if the `getUTC*` methods are\n                  // buggy. Adapted from @Yaffle's `date-shim` project.\n                  date = floor(value / 864e5);\n                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);\n                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);\n                  date = 1 + date - getDay(year, month);\n                  // The `time` value specifies the time within the day (see ES\n                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used\n                  // to compute `A modulo B`, as the `%` operator does not\n                  // correspond to the `modulo` operation for negative numbers.\n                  time = (value % 864e5 + 864e5) % 864e5;\n                  // The hours, minutes, seconds, and milliseconds are obtained by\n                  // decomposing the time within the day. See section 15.9.1.10.\n                  hours = floor(time / 36e5) % 24;\n                  minutes = floor(time / 6e4) % 60;\n                  seconds = floor(time / 1e3) % 60;\n                  milliseconds = time % 1e3;\n                } else {\n                  year = value.getUTCFullYear();\n                  month = value.getUTCMonth();\n                  date = value.getUTCDate();\n                  hours = value.getUTCHours();\n                  minutes = value.getUTCMinutes();\n                  seconds = value.getUTCSeconds();\n                  milliseconds = value.getUTCMilliseconds();\n                }\n                // Serialize extended years correctly.\n                value = (year <= 0 || year >= 1e4 ? (year < 0 ? \"-\" : \"+\") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +\n                  \"-\" + toPaddedString(2, month + 1) + \"-\" + toPaddedString(2, date) +\n                  // Months, dates, hours, minutes, and seconds should have two\n                  // digits; milliseconds should have three.\n                  \"T\" + toPaddedString(2, hours) + \":\" + toPaddedString(2, minutes) + \":\" + toPaddedString(2, seconds) +\n                  // Milliseconds are optional in ES 5.0, but required in 5.1.\n                  \".\" + toPaddedString(3, milliseconds) + \"Z\";\n              } else {\n                value = null;\n              }\n            } else if (typeof value.toJSON == \"function\" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, \"toJSON\"))) {\n              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the\n              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3\n              // ignores all `toJSON` methods on these objects unless they are\n              // defined directly on an instance.\n              value = value.toJSON(property);\n            }\n          }\n          if (callback) {\n            // If a replacement function was provided, call it to obtain the value\n            // for serialization.\n            value = callback.call(object, property, value);\n          }\n          if (value === null) {\n            return \"null\";\n          }\n          className = getClass.call(value);\n          if (className == booleanClass) {\n            // Booleans are represented literally.\n            return \"\" + value;\n          } else if (className == numberClass) {\n            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as\n            // `\"null\"`.\n            return value > -1 / 0 && value < 1 / 0 ? \"\" + value : \"null\";\n          } else if (className == stringClass) {\n            // Strings are double-quoted and escaped.\n            return quote(\"\" + value);\n          }\n          // Recursively serialize objects and arrays.\n          if (typeof value == \"object\") {\n            // Check for cyclic structures. This is a linear search; performance\n            // is inversely proportional to the number of unique nested objects.\n            for (length = stack.length; length--;) {\n              if (stack[length] === value) {\n                // Cyclic structures cannot be serialized by `JSON.stringify`.\n                throw TypeError();\n              }\n            }\n            // Add the object to the stack of traversed objects.\n            stack.push(value);\n            results = [];\n            // Save the current indentation level and indent one additional level.\n            prefix = indentation;\n            indentation += whitespace;\n            if (className == arrayClass) {\n              // Recursively serialize array elements.\n              for (index = 0, length = value.length; index < length; index++) {\n                element = serialize(index, value, callback, properties, whitespace, indentation, stack);\n                results.push(element === undef ? \"null\" : element);\n              }\n              result = results.length ? (whitespace ? \"[\\n\" + indentation + results.join(\",\\n\" + indentation) + \"\\n\" + prefix + \"]\" : (\"[\" + results.join(\",\") + \"]\")) : \"[]\";\n            } else {\n              // Recursively serialize object members. Members are selected from\n              // either a user-specified list of property names, or the object\n              // itself.\n              forEach(properties || value, function (property) {\n                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);\n                if (element !== undef) {\n                  // According to ES 5.1 section 15.12.3: \"If `gap` {whitespace}\n                  // is not the empty string, let `member` {quote(property) + \":\"}\n                  // be the concatenation of `member` and the `space` character.\"\n                  // The \"`space` character\" refers to the literal space\n                  // character, not the `space` {width} argument provided to\n                  // `JSON.stringify`.\n                  results.push(quote(property) + \":\" + (whitespace ? \" \" : \"\") + element);\n                }\n              });\n              result = results.length ? (whitespace ? \"{\\n\" + indentation + results.join(\",\\n\" + indentation) + \"\\n\" + prefix + \"}\" : (\"{\" + results.join(\",\") + \"}\")) : \"{}\";\n            }\n            // Remove the object from the traversed object stack.\n            stack.pop();\n            return result;\n          }\n        };\n\n        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.\n        exports.stringify = function (source, filter, width) {\n          var whitespace, callback, properties, className;\n          if (objectTypes[typeof filter] && filter) {\n            if ((className = getClass.call(filter)) == functionClass) {\n              callback = filter;\n            } else if (className == arrayClass) {\n              // Convert the property names array into a makeshift set.\n              properties = {};\n              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));\n            }\n          }\n          if (width) {\n            if ((className = getClass.call(width)) == numberClass) {\n              // Convert the `width` to an integer and create a string containing\n              // `width` number of space characters.\n              if ((width -= width % 1) > 0) {\n                for (whitespace = \"\", width > 10 && (width = 10); whitespace.length < width; whitespace += \" \");\n              }\n            } else if (className == stringClass) {\n              whitespace = width.length <= 10 ? width : width.slice(0, 10);\n            }\n          }\n          // Opera <= 7.54u2 discards the values associated with empty string keys\n          // (`\"\"`) only if they are used directly within an object member list\n          // (e.g., `!(\"\" in { \"\": 1})`).\n          return serialize(\"\", (value = {}, value[\"\"] = source, value), callback, properties, whitespace, \"\", []);\n        };\n      }\n\n      // Public: Parses a JSON source string.\n      if (!has(\"json-parse\")) {\n        var fromCharCode = String.fromCharCode;\n\n        // Internal: A map of escaped control characters and their unescaped\n        // equivalents.\n        var Unescapes = {\n          92: \"\\\\\",\n          34: '\"',\n          47: \"/\",\n          98: \"\\b\",\n          116: \"\\t\",\n          110: \"\\n\",\n          102: \"\\f\",\n          114: \"\\r\"\n        };\n\n        // Internal: Stores the parser state.\n        var Index, Source;\n\n        // Internal: Resets the parser state and throws a `SyntaxError`.\n        var abort = function () {\n          Index = Source = null;\n          throw SyntaxError();\n        };\n\n        // Internal: Returns the next token, or `\"$\"` if the parser has reached\n        // the end of the source string. A token may be a string, number, `null`\n        // literal, or Boolean literal.\n        var lex = function () {\n          var source = Source, length = source.length, value, begin, position, isSigned, charCode;\n          while (Index < length) {\n            charCode = source.charCodeAt(Index);\n            switch (charCode) {\n              case 9: case 10: case 13: case 32:\n                // Skip whitespace tokens, including tabs, carriage returns, line\n                // feeds, and space characters.\n                Index++;\n                break;\n              case 123: case 125: case 91: case 93: case 58: case 44:\n                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at\n                // the current position.\n                value = charIndexBuggy ? source.charAt(Index) : source[Index];\n                Index++;\n                return value;\n              case 34:\n                // `\"` delimits a JSON string; advance to the next character and\n                // begin parsing the string. String tokens are prefixed with the\n                // sentinel `@` character to distinguish them from punctuators and\n                // end-of-string tokens.\n                for (value = \"@\", Index++; Index < length;) {\n                  charCode = source.charCodeAt(Index);\n                  if (charCode < 32) {\n                    // Unescaped ASCII control characters (those with a code unit\n                    // less than the space character) are not permitted.\n                    abort();\n                  } else if (charCode == 92) {\n                    // A reverse solidus (`\\`) marks the beginning of an escaped\n                    // control character (including `\"`, `\\`, and `/`) or Unicode\n                    // escape sequence.\n                    charCode = source.charCodeAt(++Index);\n                    switch (charCode) {\n                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:\n                        // Revive escaped control characters.\n                        value += Unescapes[charCode];\n                        Index++;\n                        break;\n                      case 117:\n                        // `\\u` marks the beginning of a Unicode escape sequence.\n                        // Advance to the first character and validate the\n                        // four-digit code point.\n                        begin = ++Index;\n                        for (position = Index + 4; Index < position; Index++) {\n                          charCode = source.charCodeAt(Index);\n                          // A valid sequence comprises four hexdigits (case-\n                          // insensitive) that form a single hexadecimal value.\n                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {\n                            // Invalid Unicode escape sequence.\n                            abort();\n                          }\n                        }\n                        // Revive the escaped character.\n                        value += fromCharCode(\"0x\" + source.slice(begin, Index));\n                        break;\n                      default:\n                        // Invalid escape sequence.\n                        abort();\n                    }\n                  } else {\n                    if (charCode == 34) {\n                      // An unescaped double-quote character marks the end of the\n                      // string.\n                      break;\n                    }\n                    charCode = source.charCodeAt(Index);\n                    begin = Index;\n                    // Optimize for the common case where a string is valid.\n                    while (charCode >= 32 && charCode != 92 && charCode != 34) {\n                      charCode = source.charCodeAt(++Index);\n                    }\n                    // Append the string as-is.\n                    value += source.slice(begin, Index);\n                  }\n                }\n                if (source.charCodeAt(Index) == 34) {\n                  // Advance to the next character and return the revived string.\n                  Index++;\n                  return value;\n                }\n                // Unterminated string.\n                abort();\n              default:\n                // Parse numbers and literals.\n                begin = Index;\n                // Advance past the negative sign, if one is specified.\n                if (charCode == 45) {\n                  isSigned = true;\n                  charCode = source.charCodeAt(++Index);\n                }\n                // Parse an integer or floating-point value.\n                if (charCode >= 48 && charCode <= 57) {\n                  // Leading zeroes are interpreted as octal literals.\n                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {\n                    // Illegal octal literal.\n                    abort();\n                  }\n                  isSigned = false;\n                  // Parse the integer component.\n                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);\n                  // Floats cannot contain a leading decimal point; however, this\n                  // case is already accounted for by the parser.\n                  if (source.charCodeAt(Index) == 46) {\n                    position = ++Index;\n                    // Parse the decimal component.\n                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);\n                    if (position == Index) {\n                      // Illegal trailing decimal.\n                      abort();\n                    }\n                    Index = position;\n                  }\n                  // Parse exponents. The `e` denoting the exponent is\n                  // case-insensitive.\n                  charCode = source.charCodeAt(Index);\n                  if (charCode == 101 || charCode == 69) {\n                    charCode = source.charCodeAt(++Index);\n                    // Skip past the sign following the exponent, if one is\n                    // specified.\n                    if (charCode == 43 || charCode == 45) {\n                      Index++;\n                    }\n                    // Parse the exponential component.\n                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);\n                    if (position == Index) {\n                      // Illegal empty exponent.\n                      abort();\n                    }\n                    Index = position;\n                  }\n                  // Coerce the parsed value to a JavaScript number.\n                  return +source.slice(begin, Index);\n                }\n                // A negative sign may only precede numbers.\n                if (isSigned) {\n                  abort();\n                }\n                // `true`, `false`, and `null` literals.\n                if (source.slice(Index, Index + 4) == \"true\") {\n                  Index += 4;\n                  return true;\n                } else if (source.slice(Index, Index + 5) == \"false\") {\n                  Index += 5;\n                  return false;\n                } else if (source.slice(Index, Index + 4) == \"null\") {\n                  Index += 4;\n                  return null;\n                }\n                // Unrecognized token.\n                abort();\n            }\n          }\n          // Return the sentinel `$` character if the parser has reached the end\n          // of the source string.\n          return \"$\";\n        };\n\n        // Internal: Parses a JSON `value` token.\n        var get = function (value) {\n          var results, hasMembers;\n          if (value == \"$\") {\n            // Unexpected end of input.\n            abort();\n          }\n          if (typeof value == \"string\") {\n            if ((charIndexBuggy ? value.charAt(0) : value[0]) == \"@\") {\n              // Remove the sentinel `@` character.\n              return value.slice(1);\n            }\n            // Parse object and array literals.\n            if (value == \"[\") {\n              // Parses a JSON array, returning a new JavaScript array.\n              results = [];\n              for (;; hasMembers || (hasMembers = true)) {\n                value = lex();\n                // A closing square bracket marks the end of the array literal.\n                if (value == \"]\") {\n                  break;\n                }\n                // If the array literal contains elements, the current token\n                // should be a comma separating the previous element from the\n                // next.\n                if (hasMembers) {\n                  if (value == \",\") {\n                    value = lex();\n                    if (value == \"]\") {\n                      // Unexpected trailing `,` in array literal.\n                      abort();\n                    }\n                  } else {\n                    // A `,` must separate each array element.\n                    abort();\n                  }\n                }\n                // Elisions and leading commas are not permitted.\n                if (value == \",\") {\n                  abort();\n                }\n                results.push(get(value));\n              }\n              return results;\n            } else if (value == \"{\") {\n              // Parses a JSON object, returning a new JavaScript object.\n              results = {};\n              for (;; hasMembers || (hasMembers = true)) {\n                value = lex();\n                // A closing curly brace marks the end of the object literal.\n                if (value == \"}\") {\n                  break;\n                }\n                // If the object literal contains members, the current token\n                // should be a comma separator.\n                if (hasMembers) {\n                  if (value == \",\") {\n                    value = lex();\n                    if (value == \"}\") {\n                      // Unexpected trailing `,` in object literal.\n                      abort();\n                    }\n                  } else {\n                    // A `,` must separate each object member.\n                    abort();\n                  }\n                }\n                // Leading commas are not permitted, object property names must be\n                // double-quoted strings, and a `:` must separate each property\n                // name and value.\n                if (value == \",\" || typeof value != \"string\" || (charIndexBuggy ? value.charAt(0) : value[0]) != \"@\" || lex() != \":\") {\n                  abort();\n                }\n                results[value.slice(1)] = get(lex());\n              }\n              return results;\n            }\n            // Unexpected token encountered.\n            abort();\n          }\n          return value;\n        };\n\n        // Internal: Updates a traversed object member.\n        var update = function (source, property, callback) {\n          var element = walk(source, property, callback);\n          if (element === undef) {\n            delete source[property];\n          } else {\n            source[property] = element;\n          }\n        };\n\n        // Internal: Recursively traverses a parsed JSON object, invoking the\n        // `callback` function for each value. This is an implementation of the\n        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.\n        var walk = function (source, property, callback) {\n          var value = source[property], length;\n          if (typeof value == \"object\" && value) {\n            // `forEach` can't be used to traverse an array in Opera <= 8.54\n            // because its `Object#hasOwnProperty` implementation returns `false`\n            // for array indices (e.g., `![1, 2, 3].hasOwnProperty(\"0\")`).\n            if (getClass.call(value) == arrayClass) {\n              for (length = value.length; length--;) {\n                update(value, length, callback);\n              }\n            } else {\n              forEach(value, function (property) {\n                update(value, property, callback);\n              });\n            }\n          }\n          return callback.call(source, property, value);\n        };\n\n        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.\n        exports.parse = function (source, callback) {\n          var result, value;\n          Index = 0;\n          Source = \"\" + source;\n          result = get(lex());\n          // If a JSON string contains multiple tokens, it is invalid.\n          if (lex() != \"$\") {\n            abort();\n          }\n          // Reset the parser state.\n          Index = Source = null;\n          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[\"\"] = result, value), \"\", callback) : result;\n        };\n      }\n    }\n\n    exports[\"runInContext\"] = runInContext;\n    return exports;\n  }\n\n  if (freeExports && !isLoader) {\n    // Export for CommonJS environments.\n    runInContext(root, freeExports);\n  } else {\n    // Export for web browsers and JavaScript engines.\n    var nativeJSON = root.JSON,\n        previousJSON = root[\"JSON3\"],\n        isRestored = false;\n\n    var JSON3 = runInContext(root, (root[\"JSON3\"] = {\n      // Public: Restores the original value of the global `JSON` object and\n      // returns a reference to the `JSON3` object.\n      \"noConflict\": function () {\n        if (!isRestored) {\n          isRestored = true;\n          root.JSON = nativeJSON;\n          root[\"JSON3\"] = previousJSON;\n          nativeJSON = previousJSON = null;\n        }\n        return JSON3;\n      }\n    }));\n\n    root.JSON = {\n      \"parse\": JSON3.parse,\n      \"stringify\": JSON3.stringify\n    };\n  }\n\n  // Export for asynchronous module loaders.\n  if (isLoader) {\n    define(function () {\n      return JSON3;\n    });\n  }\n}).call(this);\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{}],55:[function(require,module,exports){\n/**\n * lodash 3.2.0 (Custom Build) <https://lodash.com/>\n * Build: `lodash modern modularize exports=\"npm\" -o ./`\n * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\nvar baseCopy = require('lodash._basecopy'),\n    keys = require('lodash.keys');\n\n/**\n * The base implementation of `_.assign` without support for argument juggling,\n * multiple sources, and `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssign(object, source) {\n  return source == null\n    ? object\n    : baseCopy(source, keys(source), object);\n}\n\nmodule.exports = baseAssign;\n\n},{\"lodash._basecopy\":56,\"lodash.keys\":63}],56:[function(require,module,exports){\n/**\n * lodash 3.0.1 (Custom Build) <https://lodash.com/>\n * Build: `lodash modern modularize exports=\"npm\" -o ./`\n * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property names to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @returns {Object} Returns `object`.\n */\nfunction baseCopy(source, props, object) {\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n    object[key] = source[key];\n  }\n  return object;\n}\n\nmodule.exports = baseCopy;\n\n},{}],57:[function(require,module,exports){\n/**\n * lodash 3.0.3 (Custom Build) <https://lodash.com/>\n * Build: `lodash modern modularize exports=\"npm\" -o ./`\n * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} prototype The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nvar baseCreate = (function() {\n  function object() {}\n  return function(prototype) {\n    if (isObject(prototype)) {\n      object.prototype = prototype;\n      var result = new object;\n      object.prototype = undefined;\n    }\n    return result || {};\n  };\n}());\n\n/**\n * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.\n * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(1);\n * // => false\n */\nfunction isObject(value) {\n  // Avoid a V8 JIT bug in Chrome 19-20.\n  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\nmodule.exports = baseCreate;\n\n},{}],58:[function(require,module,exports){\n/**\n * lodash 3.9.1 (Custom Build) <https://lodash.com/>\n * Build: `lodash modern modularize exports=\"npm\" -o ./`\n * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** `Object#toString` result references. */\nvar funcTag = '[object Function]';\n\n/** Used to detect host constructors (Safari > 5). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/**\n * Checks if `value` is object-like.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar fnToString = Function.prototype.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  fnToString.call(hasOwnProperty).replace(/[\\\\^$.*+?()[\\]{}|]/g, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = object == null ? undefined : object[key];\n  return isNative(value) ? value : undefined;\n}\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in older versions of Chrome and Safari which return 'function' for regexes\n  // and Safari 8 equivalents which return 'object' for typed array constructors.\n  return isObject(value) && objToString.call(value) == funcTag;\n}\n\n/**\n * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.\n * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(1);\n * // => false\n */\nfunction isObject(value) {\n  // Avoid a V8 JIT bug in Chrome 19-20.\n  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is a native function.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function, else `false`.\n * @example\n *\n * _.isNative(Array.prototype.push);\n * // => true\n *\n * _.isNative(_);\n * // => false\n */\nfunction isNative(value) {\n  if (value == null) {\n    return false;\n  }\n  if (isFunction(value)) {\n    return reIsNative.test(fnToString.call(value));\n  }\n  return isObjectLike(value) && reIsHostCtor.test(value);\n}\n\nmodule.exports = getNative;\n\n},{}],59:[function(require,module,exports){\n/**\n * lodash 3.0.9 (Custom Build) <https://lodash.com/>\n * Build: `lodash modern modularize exports=\"npm\" -o ./`\n * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^\\d+$/;\n\n/**\n * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)\n * of an array-like value.\n */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * The base implementation of `_.property` without support for deep paths.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @returns {Function} Returns the new function.\n */\nfunction baseProperty(key) {\n  return function(object) {\n    return object == null ? undefined : object[key];\n  };\n}\n\n/**\n * Gets the \"length\" property value of `object`.\n *\n * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)\n * that affects Safari on at least iOS 8.1-8.3 ARM64.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {*} Returns the \"length\" value.\n */\nvar getLength = baseProperty('length');\n\n/**\n * Checks if `value` is array-like.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(getLength(value));\n}\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n  return value > -1 && value % 1 == 0 && value < length;\n}\n\n/**\n * Checks if the provided arguments are from an iteratee call.\n *\n * @private\n * @param {*} value The potential iteratee value argument.\n * @param {*} index The potential iteratee index or key argument.\n * @param {*} object The potential iteratee object argument.\n * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.\n */\nfunction isIterateeCall(value, index, object) {\n  if (!isObject(object)) {\n    return false;\n  }\n  var type = typeof index;\n  if (type == 'number'\n      ? (isArrayLike(object) && isIndex(index, object.length))\n      : (type == 'string' && index in object)) {\n    var other = object[index];\n    return value === value ? (value === other) : (other !== other);\n  }\n  return false;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n */\nfunction isLength(value) {\n  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.\n * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(1);\n * // => false\n */\nfunction isObject(value) {\n  // Avoid a V8 JIT bug in Chrome 19-20.\n  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isIterateeCall;\n\n},{}],60:[function(require,module,exports){\n/**\n * lodash 3.1.1 (Custom Build) <https://lodash.com/>\n * Build: `lodash modern modularize exports=\"npm\" -o ./`\n * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\nvar baseAssign = require('lodash._baseassign'),\n    baseCreate = require('lodash._basecreate'),\n    isIterateeCall = require('lodash._isiterateecall');\n\n/**\n * Creates an object that inherits from the given `prototype` object. If a\n * `properties` object is provided its own enumerable properties are assigned\n * to the created object.\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} prototype The object to inherit from.\n * @param {Object} [properties] The properties to assign to the object.\n * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.\n * @returns {Object} Returns the new object.\n * @example\n *\n * function Shape() {\n *   this.x = 0;\n *   this.y = 0;\n * }\n *\n * function Circle() {\n *   Shape.call(this);\n * }\n *\n * Circle.prototype = _.create(Shape.prototype, {\n *   'constructor': Circle\n * });\n *\n * var circle = new Circle;\n * circle instanceof Circle;\n * // => true\n *\n * circle instanceof Shape;\n * // => true\n */\nfunction create(prototype, properties, guard) {\n  var result = baseCreate(prototype);\n  if (guard && isIterateeCall(prototype, properties, guard)) {\n    properties = undefined;\n  }\n  return properties ? baseAssign(result, properties) : result;\n}\n\nmodule.exports = create;\n\n},{\"lodash._baseassign\":55,\"lodash._basecreate\":57,\"lodash._isiterateecall\":59}],61:[function(require,module,exports){\n/**\n * lodash 3.0.8 (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * The base implementation of `_.property` without support for deep paths.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @returns {Function} Returns the new function.\n */\nfunction baseProperty(key) {\n  return function(object) {\n    return object == null ? undefined : object[key];\n  };\n}\n\n/**\n * Gets the \"length\" property value of `object`.\n *\n * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)\n * that affects Safari on at least iOS 8.1-8.3 ARM64.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {*} Returns the \"length\" value.\n */\nvar getLength = baseProperty('length');\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nfunction isArguments(value) {\n  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.\n  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&\n    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);\n}\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(getLength(value)) && !isFunction(value);\n}\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 8 which returns 'object' for typed array and weak map constructors,\n  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.\n  var tag = isObject(value) ? objectToString.call(value) : '';\n  return tag == funcTag || tag == genTag;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.\n * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\nmodule.exports = isArguments;\n\n},{}],62:[function(require,module,exports){\n/**\n * lodash 3.0.4 (Custom Build) <https://lodash.com/>\n * Build: `lodash modern modularize exports=\"npm\" -o ./`\n * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** `Object#toString` result references. */\nvar arrayTag = '[object Array]',\n    funcTag = '[object Function]';\n\n/** Used to detect host constructors (Safari > 5). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/**\n * Checks if `value` is object-like.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar fnToString = Function.prototype.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objToString = objectProto.toString;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  fnToString.call(hasOwnProperty).replace(/[\\\\^$.*+?()[\\]{}|]/g, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/* Native method references for those with the same name as other `lodash` methods. */\nvar nativeIsArray = getNative(Array, 'isArray');\n\n/**\n * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)\n * of an array-like value.\n */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = object == null ? undefined : object[key];\n  return isNative(value) ? value : undefined;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n */\nfunction isLength(value) {\n  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(function() { return arguments; }());\n * // => false\n */\nvar isArray = nativeIsArray || function(value) {\n  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;\n};\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in older versions of Chrome and Safari which return 'function' for regexes\n  // and Safari 8 equivalents which return 'object' for typed array constructors.\n  return isObject(value) && objToString.call(value) == funcTag;\n}\n\n/**\n * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.\n * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(1);\n * // => false\n */\nfunction isObject(value) {\n  // Avoid a V8 JIT bug in Chrome 19-20.\n  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is a native function.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function, else `false`.\n * @example\n *\n * _.isNative(Array.prototype.push);\n * // => true\n *\n * _.isNative(_);\n * // => false\n */\nfunction isNative(value) {\n  if (value == null) {\n    return false;\n  }\n  if (isFunction(value)) {\n    return reIsNative.test(fnToString.call(value));\n  }\n  return isObjectLike(value) && reIsHostCtor.test(value);\n}\n\nmodule.exports = isArray;\n\n},{}],63:[function(require,module,exports){\n/**\n * lodash 3.1.2 (Custom Build) <https://lodash.com/>\n * Build: `lodash modern modularize exports=\"npm\" -o ./`\n * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\nvar getNative = require('lodash._getnative'),\n    isArguments = require('lodash.isarguments'),\n    isArray = require('lodash.isarray');\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^\\d+$/;\n\n/** Used for native method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/* Native method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = getNative(Object, 'keys');\n\n/**\n * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)\n * of an array-like value.\n */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * The base implementation of `_.property` without support for deep paths.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @returns {Function} Returns the new function.\n */\nfunction baseProperty(key) {\n  return function(object) {\n    return object == null ? undefined : object[key];\n  };\n}\n\n/**\n * Gets the \"length\" property value of `object`.\n *\n * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)\n * that affects Safari on at least iOS 8.1-8.3 ARM64.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {*} Returns the \"length\" value.\n */\nvar getLength = baseProperty('length');\n\n/**\n * Checks if `value` is array-like.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(getLength(value));\n}\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n  return value > -1 && value % 1 == 0 && value < length;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n */\nfunction isLength(value) {\n  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * A fallback implementation of `Object.keys` which creates an array of the\n * own enumerable property names of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction shimKeys(object) {\n  var props = keysIn(object),\n      propsLength = props.length,\n      length = propsLength && object.length;\n\n  var allowIndexes = !!length && isLength(length) &&\n    (isArray(object) || isArguments(object));\n\n  var index = -1,\n      result = [];\n\n  while (++index < propsLength) {\n    var key = props[index];\n    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.\n * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(1);\n * // => false\n */\nfunction isObject(value) {\n  // Avoid a V8 JIT bug in Chrome 19-20.\n  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nvar keys = !nativeKeys ? shimKeys : function(object) {\n  var Ctor = object == null ? undefined : object.constructor;\n  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||\n      (typeof object != 'function' && isArrayLike(object))) {\n    return shimKeys(object);\n  }\n  return isObject(object) ? nativeKeys(object) : [];\n};\n\n/**\n * Creates an array of the own and inherited enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keysIn(new Foo);\n * // => ['a', 'b', 'c'] (iteration order is not guaranteed)\n */\nfunction keysIn(object) {\n  if (object == null) {\n    return [];\n  }\n  if (!isObject(object)) {\n    object = Object(object);\n  }\n  var length = object.length;\n  length = (length && isLength(length) &&\n    (isArray(object) || isArguments(object)) && length) || 0;\n\n  var Ctor = object.constructor,\n      index = -1,\n      isProto = typeof Ctor == 'function' && Ctor.prototype === object,\n      result = Array(length),\n      skipIndexes = length > 0;\n\n  while (++index < length) {\n    result[index] = (index + '');\n  }\n  for (var key in object) {\n    if (!(skipIndexes && isIndex(key, length)) &&\n        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = keys;\n\n},{\"lodash._getnative\":58,\"lodash.isarguments\":61,\"lodash.isarray\":62}],64:[function(require,module,exports){\n(function (process){\nvar path = require('path');\nvar fs = require('fs');\nvar _0777 = parseInt('0777', 8);\n\nmodule.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;\n\nfunction mkdirP (p, opts, f, made) {\n    if (typeof opts === 'function') {\n        f = opts;\n        opts = {};\n    }\n    else if (!opts || typeof opts !== 'object') {\n        opts = { mode: opts };\n    }\n    \n    var mode = opts.mode;\n    var xfs = opts.fs || fs;\n    \n    if (mode === undefined) {\n        mode = _0777 & (~process.umask());\n    }\n    if (!made) made = null;\n    \n    var cb = f || function () {};\n    p = path.resolve(p);\n    \n    xfs.mkdir(p, mode, function (er) {\n        if (!er) {\n            made = made || p;\n            return cb(null, made);\n        }\n        switch (er.code) {\n            case 'ENOENT':\n                mkdirP(path.dirname(p), opts, function (er, made) {\n                    if (er) cb(er, made);\n                    else mkdirP(p, opts, cb, made);\n                });\n                break;\n\n            // In the case of any other error, just see if there's a dir\n            // there already.  If so, then hooray!  If not, then something\n            // is borked.\n            default:\n                xfs.stat(p, function (er2, stat) {\n                    // if the stat fails, then that's super weird.\n                    // let the original error be the failure reason.\n                    if (er2 || !stat.isDirectory()) cb(er, made)\n                    else cb(null, made);\n                });\n                break;\n        }\n    });\n}\n\nmkdirP.sync = function sync (p, opts, made) {\n    if (!opts || typeof opts !== 'object') {\n        opts = { mode: opts };\n    }\n    \n    var mode = opts.mode;\n    var xfs = opts.fs || fs;\n    \n    if (mode === undefined) {\n        mode = _0777 & (~process.umask());\n    }\n    if (!made) made = null;\n\n    p = path.resolve(p);\n\n    try {\n        xfs.mkdirSync(p, mode);\n        made = made || p;\n    }\n    catch (err0) {\n        switch (err0.code) {\n            case 'ENOENT' :\n                made = sync(path.dirname(p), opts, made);\n                sync(p, opts, made);\n                break;\n\n            // In the case of any other error, just see if there's a dir\n            // there already.  If so, then hooray!  If not, then something\n            // is borked.\n            default:\n                var stat;\n                try {\n                    stat = xfs.statSync(p);\n                }\n                catch (err1) {\n                    throw err0;\n                }\n                if (!stat.isDirectory()) throw err0;\n                break;\n        }\n    }\n\n    return made;\n};\n\n}).call(this,require('_process'))\n},{\"_process\":67,\"fs\":42,\"path\":42}],65:[function(require,module,exports){\nexports.endianness = function () { return 'LE' };\n\nexports.hostname = function () {\n    if (typeof location !== 'undefined') {\n        return location.hostname\n    }\n    else return '';\n};\n\nexports.loadavg = function () { return [] };\n\nexports.uptime = function () { return 0 };\n\nexports.freemem = function () {\n    return Number.MAX_VALUE;\n};\n\nexports.totalmem = function () {\n    return Number.MAX_VALUE;\n};\n\nexports.cpus = function () { return [] };\n\nexports.type = function () { return 'Browser' };\n\nexports.release = function () {\n    if (typeof navigator !== 'undefined') {\n        return navigator.appVersion;\n    }\n    return '';\n};\n\nexports.networkInterfaces\n= exports.getNetworkInterfaces\n= function () { return {} };\n\nexports.arch = function () { return 'javascript' };\n\nexports.platform = function () { return 'browser' };\n\nexports.tmpdir = exports.tmpDir = function () {\n    return '/tmp';\n};\n\nexports.EOL = '\\n';\n\n},{}],66:[function(require,module,exports){\n(function (process){\n'use strict';\n\nif (!process.version ||\n    process.version.indexOf('v0.') === 0 ||\n    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {\n  module.exports = nextTick;\n} else {\n  module.exports = process.nextTick;\n}\n\nfunction nextTick(fn, arg1, arg2, arg3) {\n  if (typeof fn !== 'function') {\n    throw new TypeError('\"callback\" argument must be a function');\n  }\n  var len = arguments.length;\n  var args, i;\n  switch (len) {\n  case 0:\n  case 1:\n    return process.nextTick(fn);\n  case 2:\n    return process.nextTick(function afterTickOne() {\n      fn.call(null, arg1);\n    });\n  case 3:\n    return process.nextTick(function afterTickTwo() {\n      fn.call(null, arg1, arg2);\n    });\n  case 4:\n    return process.nextTick(function afterTickThree() {\n      fn.call(null, arg1, arg2, arg3);\n    });\n  default:\n    args = new Array(len - 1);\n    i = 0;\n    while (i < args.length) {\n      args[i++] = arguments[i];\n    }\n    return process.nextTick(function afterTick() {\n      fn.apply(null, args);\n    });\n  }\n}\n\n}).call(this,require('_process'))\n},{\"_process\":67}],67:[function(require,module,exports){\n// shim for using process in browser\n\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\n(function () {\n  try {\n    cachedSetTimeout = setTimeout;\n  } catch (e) {\n    cachedSetTimeout = function () {\n      throw new Error('setTimeout is not defined');\n    }\n  }\n  try {\n    cachedClearTimeout = clearTimeout;\n  } catch (e) {\n    cachedClearTimeout = function () {\n      throw new Error('clearTimeout is not defined');\n    }\n  }\n} ())\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = cachedSetTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    cachedClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        cachedSetTimeout(drainQueue, 0);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n},{}],68:[function(require,module,exports){\nmodule.exports = require(\"./lib/_stream_duplex.js\")\n\n},{\"./lib/_stream_duplex.js\":69}],69:[function(require,module,exports){\n// a duplex stream is just a stream that is both readable and writable.\n// Since JS doesn't have multiple prototypal inheritance, this class\n// prototypally inherits from Readable, and then parasitically from\n// Writable.\n\n'use strict';\n\n/*<replacement>*/\n\nvar objectKeys = Object.keys || function (obj) {\n  var keys = [];\n  for (var key in obj) {\n    keys.push(key);\n  }return keys;\n};\n/*</replacement>*/\n\nmodule.exports = Duplex;\n\n/*<replacement>*/\nvar processNextTick = require('process-nextick-args');\n/*</replacement>*/\n\n/*<replacement>*/\nvar util = require('core-util-is');\nutil.inherits = require('inherits');\n/*</replacement>*/\n\nvar Readable = require('./_stream_readable');\nvar Writable = require('./_stream_writable');\n\nutil.inherits(Duplex, Readable);\n\nvar keys = objectKeys(Writable.prototype);\nfor (var v = 0; v < keys.length; v++) {\n  var method = keys[v];\n  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];\n}\n\nfunction Duplex(options) {\n  if (!(this instanceof Duplex)) return new Duplex(options);\n\n  Readable.call(this, options);\n  Writable.call(this, options);\n\n  if (options && options.readable === false) this.readable = false;\n\n  if (options && options.writable === false) this.writable = false;\n\n  this.allowHalfOpen = true;\n  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;\n\n  this.once('end', onend);\n}\n\n// the no-half-open enforcer\nfunction onend() {\n  // if we allow half-open state, or if the writable side ended,\n  // then we're ok.\n  if (this.allowHalfOpen || this._writableState.ended) return;\n\n  // no more data can be written.\n  // But allow more writes to happen in this tick.\n  processNextTick(onEndNT, this);\n}\n\nfunction onEndNT(self) {\n  self.end();\n}\n\nfunction forEach(xs, f) {\n  for (var i = 0, l = xs.length; i < l; i++) {\n    f(xs[i], i);\n  }\n}\n},{\"./_stream_readable\":71,\"./_stream_writable\":73,\"core-util-is\":45,\"inherits\":51,\"process-nextick-args\":66}],70:[function(require,module,exports){\n// a passthrough stream.\n// basically just the most minimal sort of Transform stream.\n// Every written chunk gets output as-is.\n\n'use strict';\n\nmodule.exports = PassThrough;\n\nvar Transform = require('./_stream_transform');\n\n/*<replacement>*/\nvar util = require('core-util-is');\nutil.inherits = require('inherits');\n/*</replacement>*/\n\nutil.inherits(PassThrough, Transform);\n\nfunction PassThrough(options) {\n  if (!(this instanceof PassThrough)) return new PassThrough(options);\n\n  Transform.call(this, options);\n}\n\nPassThrough.prototype._transform = function (chunk, encoding, cb) {\n  cb(null, chunk);\n};\n},{\"./_stream_transform\":72,\"core-util-is\":45,\"inherits\":51}],71:[function(require,module,exports){\n(function (process){\n'use strict';\n\nmodule.exports = Readable;\n\n/*<replacement>*/\nvar processNextTick = require('process-nextick-args');\n/*</replacement>*/\n\n/*<replacement>*/\nvar isArray = require('isarray');\n/*</replacement>*/\n\nReadable.ReadableState = ReadableState;\n\n/*<replacement>*/\nvar EE = require('events').EventEmitter;\n\nvar EElistenerCount = function (emitter, type) {\n  return emitter.listeners(type).length;\n};\n/*</replacement>*/\n\n/*<replacement>*/\nvar Stream;\n(function () {\n  try {\n    Stream = require('st' + 'ream');\n  } catch (_) {} finally {\n    if (!Stream) Stream = require('events').EventEmitter;\n  }\n})();\n/*</replacement>*/\n\nvar Buffer = require('buffer').Buffer;\n/*<replacement>*/\nvar bufferShim = require('buffer-shims');\n/*</replacement>*/\n\n/*<replacement>*/\nvar util = require('core-util-is');\nutil.inherits = require('inherits');\n/*</replacement>*/\n\n/*<replacement>*/\nvar debugUtil = require('util');\nvar debug = void 0;\nif (debugUtil && debugUtil.debuglog) {\n  debug = debugUtil.debuglog('stream');\n} else {\n  debug = function () {};\n}\n/*</replacement>*/\n\nvar StringDecoder;\n\nutil.inherits(Readable, Stream);\n\nvar hasPrependListener = typeof EE.prototype.prependListener === 'function';\n\nfunction prependListener(emitter, event, fn) {\n  if (hasPrependListener) return emitter.prependListener(event, fn);\n\n  // This is a brutally ugly hack to make sure that our error handler\n  // is attached before any userland ones.  NEVER DO THIS. This is here\n  // only because this code needs to continue to work with older versions\n  // of Node.js that do not include the prependListener() method. The goal\n  // is to eventually remove this hack.\n  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];\n}\n\nvar Duplex;\nfunction ReadableState(options, stream) {\n  Duplex = Duplex || require('./_stream_duplex');\n\n  options = options || {};\n\n  // object stream flag. Used to make read(n) ignore n and to\n  // make all the buffer merging and length checks go away\n  this.objectMode = !!options.objectMode;\n\n  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;\n\n  // the point at which it stops calling _read() to fill the buffer\n  // Note: 0 is a valid value, means \"don't call _read preemptively ever\"\n  var hwm = options.highWaterMark;\n  var defaultHwm = this.objectMode ? 16 : 16 * 1024;\n  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;\n\n  // cast to ints.\n  this.highWaterMark = ~ ~this.highWaterMark;\n\n  this.buffer = [];\n  this.length = 0;\n  this.pipes = null;\n  this.pipesCount = 0;\n  this.flowing = null;\n  this.ended = false;\n  this.endEmitted = false;\n  this.reading = false;\n\n  // a flag to be able to tell if the onwrite cb is called immediately,\n  // or on a later tick.  We set this to true at first, because any\n  // actions that shouldn't happen until \"later\" should generally also\n  // not happen before the first write call.\n  this.sync = true;\n\n  // whenever we return null, then we set a flag to say\n  // that we're awaiting a 'readable' event emission.\n  this.needReadable = false;\n  this.emittedReadable = false;\n  this.readableListening = false;\n  this.resumeScheduled = false;\n\n  // Crypto is kind of old and crusty.  Historically, its default string\n  // encoding is 'binary' so we have to make this configurable.\n  // Everything else in the universe uses 'utf8', though.\n  this.defaultEncoding = options.defaultEncoding || 'utf8';\n\n  // when piping, we only care about 'readable' events that happen\n  // after read()ing all the bytes and not getting any pushback.\n  this.ranOut = false;\n\n  // the number of writers that are awaiting a drain event in .pipe()s\n  this.awaitDrain = 0;\n\n  // if true, a maybeReadMore has been scheduled\n  this.readingMore = false;\n\n  this.decoder = null;\n  this.encoding = null;\n  if (options.encoding) {\n    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;\n    this.decoder = new StringDecoder(options.encoding);\n    this.encoding = options.encoding;\n  }\n}\n\nvar Duplex;\nfunction Readable(options) {\n  Duplex = Duplex || require('./_stream_duplex');\n\n  if (!(this instanceof Readable)) return new Readable(options);\n\n  this._readableState = new ReadableState(options, this);\n\n  // legacy\n  this.readable = true;\n\n  if (options && typeof options.read === 'function') this._read = options.read;\n\n  Stream.call(this);\n}\n\n// Manually shove something into the read() buffer.\n// This returns true if the highWaterMark has not been hit yet,\n// similar to how Writable.write() returns true if you should\n// write() some more.\nReadable.prototype.push = function (chunk, encoding) {\n  var state = this._readableState;\n\n  if (!state.objectMode && typeof chunk === 'string') {\n    encoding = encoding || state.defaultEncoding;\n    if (encoding !== state.encoding) {\n      chunk = bufferShim.from(chunk, encoding);\n      encoding = '';\n    }\n  }\n\n  return readableAddChunk(this, state, chunk, encoding, false);\n};\n\n// Unshift should *always* be something directly out of read()\nReadable.prototype.unshift = function (chunk) {\n  var state = this._readableState;\n  return readableAddChunk(this, state, chunk, '', true);\n};\n\nReadable.prototype.isPaused = function () {\n  return this._readableState.flowing === false;\n};\n\nfunction readableAddChunk(stream, state, chunk, encoding, addToFront) {\n  var er = chunkInvalid(state, chunk);\n  if (er) {\n    stream.emit('error', er);\n  } else if (chunk === null) {\n    state.reading = false;\n    onEofChunk(stream, state);\n  } else if (state.objectMode || chunk && chunk.length > 0) {\n    if (state.ended && !addToFront) {\n      var e = new Error('stream.push() after EOF');\n      stream.emit('error', e);\n    } else if (state.endEmitted && addToFront) {\n      var _e = new Error('stream.unshift() after end event');\n      stream.emit('error', _e);\n    } else {\n      var skipAdd;\n      if (state.decoder && !addToFront && !encoding) {\n        chunk = state.decoder.write(chunk);\n        skipAdd = !state.objectMode && chunk.length === 0;\n      }\n\n      if (!addToFront) state.reading = false;\n\n      // Don't add to the buffer if we've decoded to an empty string chunk and\n      // we're not in object mode\n      if (!skipAdd) {\n        // if we want the data now, just emit it.\n        if (state.flowing && state.length === 0 && !state.sync) {\n          stream.emit('data', chunk);\n          stream.read(0);\n        } else {\n          // update the buffer info.\n          state.length += state.objectMode ? 1 : chunk.length;\n          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);\n\n          if (state.needReadable) emitReadable(stream);\n        }\n      }\n\n      maybeReadMore(stream, state);\n    }\n  } else if (!addToFront) {\n    state.reading = false;\n  }\n\n  return needMoreData(state);\n}\n\n// if it's past the high water mark, we can push in some more.\n// Also, if we have no data yet, we can stand some\n// more bytes.  This is to work around cases where hwm=0,\n// such as the repl.  Also, if the push() triggered a\n// readable event, and the user called read(largeNumber) such that\n// needReadable was set, then we ought to push more, so that another\n// 'readable' event will be triggered.\nfunction needMoreData(state) {\n  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);\n}\n\n// backwards compatibility.\nReadable.prototype.setEncoding = function (enc) {\n  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;\n  this._readableState.decoder = new StringDecoder(enc);\n  this._readableState.encoding = enc;\n  return this;\n};\n\n// Don't raise the hwm > 8MB\nvar MAX_HWM = 0x800000;\nfunction computeNewHighWaterMark(n) {\n  if (n >= MAX_HWM) {\n    n = MAX_HWM;\n  } else {\n    // Get the next highest power of 2\n    n--;\n    n |= n >>> 1;\n    n |= n >>> 2;\n    n |= n >>> 4;\n    n |= n >>> 8;\n    n |= n >>> 16;\n    n++;\n  }\n  return n;\n}\n\nfunction howMuchToRead(n, state) {\n  if (state.length === 0 && state.ended) return 0;\n\n  if (state.objectMode) return n === 0 ? 0 : 1;\n\n  if (n === null || isNaN(n)) {\n    // only flow one buffer at a time\n    if (state.flowing && state.buffer.length) return state.buffer[0].length;else return state.length;\n  }\n\n  if (n <= 0) return 0;\n\n  // If we're asking for more than the target buffer level,\n  // then raise the water mark.  Bump up to the next highest\n  // power of 2, to prevent increasing it excessively in tiny\n  // amounts.\n  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);\n\n  // don't have that much.  return null, unless we've ended.\n  if (n > state.length) {\n    if (!state.ended) {\n      state.needReadable = true;\n      return 0;\n    } else {\n      return state.length;\n    }\n  }\n\n  return n;\n}\n\n// you can override either this method, or the async _read(n) below.\nReadable.prototype.read = function (n) {\n  debug('read', n);\n  var state = this._readableState;\n  var nOrig = n;\n\n  if (typeof n !== 'number' || n > 0) state.emittedReadable = false;\n\n  // if we're doing read(0) to trigger a readable event, but we\n  // already have a bunch of data in the buffer, then just trigger\n  // the 'readable' event and move on.\n  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {\n    debug('read: emitReadable', state.length, state.ended);\n    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);\n    return null;\n  }\n\n  n = howMuchToRead(n, state);\n\n  // if we've ended, and we're now clear, then finish it up.\n  if (n === 0 && state.ended) {\n    if (state.length === 0) endReadable(this);\n    return null;\n  }\n\n  // All the actual chunk generation logic needs to be\n  // *below* the call to _read.  The reason is that in certain\n  // synthetic stream cases, such as passthrough streams, _read\n  // may be a completely synchronous operation which may change\n  // the state of the read buffer, providing enough data when\n  // before there was *not* enough.\n  //\n  // So, the steps are:\n  // 1. Figure out what the state of things will be after we do\n  // a read from the buffer.\n  //\n  // 2. If that resulting state will trigger a _read, then call _read.\n  // Note that this may be asynchronous, or synchronous.  Yes, it is\n  // deeply ugly to write APIs this way, but that still doesn't mean\n  // that the Readable class should behave improperly, as streams are\n  // designed to be sync/async agnostic.\n  // Take note if the _read call is sync or async (ie, if the read call\n  // has returned yet), so that we know whether or not it's safe to emit\n  // 'readable' etc.\n  //\n  // 3. Actually pull the requested chunks out of the buffer and return.\n\n  // if we need a readable event, then we need to do some reading.\n  var doRead = state.needReadable;\n  debug('need readable', doRead);\n\n  // if we currently have less than the highWaterMark, then also read some\n  if (state.length === 0 || state.length - n < state.highWaterMark) {\n    doRead = true;\n    debug('length less than watermark', doRead);\n  }\n\n  // however, if we've ended, then there's no point, and if we're already\n  // reading, then it's unnecessary.\n  if (state.ended || state.reading) {\n    doRead = false;\n    debug('reading or ended', doRead);\n  }\n\n  if (doRead) {\n    debug('do read');\n    state.reading = true;\n    state.sync = true;\n    // if the length is currently zero, then we *need* a readable event.\n    if (state.length === 0) state.needReadable = true;\n    // call internal read method\n    this._read(state.highWaterMark);\n    state.sync = false;\n  }\n\n  // If _read pushed data synchronously, then `reading` will be false,\n  // and we need to re-evaluate how much data we can return to the user.\n  if (doRead && !state.reading) n = howMuchToRead(nOrig, state);\n\n  var ret;\n  if (n > 0) ret = fromList(n, state);else ret = null;\n\n  if (ret === null) {\n    state.needReadable = true;\n    n = 0;\n  }\n\n  state.length -= n;\n\n  // If we have nothing in the buffer, then we want to know\n  // as soon as we *do* get something into the buffer.\n  if (state.length === 0 && !state.ended) state.needReadable = true;\n\n  // If we tried to read() past the EOF, then emit end on the next tick.\n  if (nOrig !== n && state.ended && state.length === 0) endReadable(this);\n\n  if (ret !== null) this.emit('data', ret);\n\n  return ret;\n};\n\nfunction chunkInvalid(state, chunk) {\n  var er = null;\n  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {\n    er = new TypeError('Invalid non-string/buffer chunk');\n  }\n  return er;\n}\n\nfunction onEofChunk(stream, state) {\n  if (state.ended) return;\n  if (state.decoder) {\n    var chunk = state.decoder.end();\n    if (chunk && chunk.length) {\n      state.buffer.push(chunk);\n      state.length += state.objectMode ? 1 : chunk.length;\n    }\n  }\n  state.ended = true;\n\n  // emit 'readable' now to make sure it gets picked up.\n  emitReadable(stream);\n}\n\n// Don't emit readable right away in sync mode, because this can trigger\n// another read() call => stack overflow.  This way, it might trigger\n// a nextTick recursion warning, but that's not so bad.\nfunction emitReadable(stream) {\n  var state = stream._readableState;\n  state.needReadable = false;\n  if (!state.emittedReadable) {\n    debug('emitReadable', state.flowing);\n    state.emittedReadable = true;\n    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);\n  }\n}\n\nfunction emitReadable_(stream) {\n  debug('emit readable');\n  stream.emit('readable');\n  flow(stream);\n}\n\n// at this point, the user has presumably seen the 'readable' event,\n// and called read() to consume some data.  that may have triggered\n// in turn another _read(n) call, in which case reading = true if\n// it's in progress.\n// However, if we're not ended, or reading, and the length < hwm,\n// then go ahead and try to read some more preemptively.\nfunction maybeReadMore(stream, state) {\n  if (!state.readingMore) {\n    state.readingMore = true;\n    processNextTick(maybeReadMore_, stream, state);\n  }\n}\n\nfunction maybeReadMore_(stream, state) {\n  var len = state.length;\n  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {\n    debug('maybeReadMore read 0');\n    stream.read(0);\n    if (len === state.length)\n      // didn't get any data, stop spinning.\n      break;else len = state.length;\n  }\n  state.readingMore = false;\n}\n\n// abstract method.  to be overridden in specific implementation classes.\n// call cb(er, data) where data is <= n in length.\n// for virtual (non-string, non-buffer) streams, \"length\" is somewhat\n// arbitrary, and perhaps not very meaningful.\nReadable.prototype._read = function (n) {\n  this.emit('error', new Error('not implemented'));\n};\n\nReadable.prototype.pipe = function (dest, pipeOpts) {\n  var src = this;\n  var state = this._readableState;\n\n  switch (state.pipesCount) {\n    case 0:\n      state.pipes = dest;\n      break;\n    case 1:\n      state.pipes = [state.pipes, dest];\n      break;\n    default:\n      state.pipes.push(dest);\n      break;\n  }\n  state.pipesCount += 1;\n  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);\n\n  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;\n\n  var endFn = doEnd ? onend : cleanup;\n  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);\n\n  dest.on('unpipe', onunpipe);\n  function onunpipe(readable) {\n    debug('onunpipe');\n    if (readable === src) {\n      cleanup();\n    }\n  }\n\n  function onend() {\n    debug('onend');\n    dest.end();\n  }\n\n  // when the dest drains, it reduces the awaitDrain counter\n  // on the source.  This would be more elegant with a .once()\n  // handler in flow(), but adding and removing repeatedly is\n  // too slow.\n  var ondrain = pipeOnDrain(src);\n  dest.on('drain', ondrain);\n\n  var cleanedUp = false;\n  function cleanup() {\n    debug('cleanup');\n    // cleanup event handlers once the pipe is broken\n    dest.removeListener('close', onclose);\n    dest.removeListener('finish', onfinish);\n    dest.removeListener('drain', ondrain);\n    dest.removeListener('error', onerror);\n    dest.removeListener('unpipe', onunpipe);\n    src.removeListener('end', onend);\n    src.removeListener('end', cleanup);\n    src.removeListener('data', ondata);\n\n    cleanedUp = true;\n\n    // if the reader is waiting for a drain event from this\n    // specific writer, then it would cause it to never start\n    // flowing again.\n    // So, if this is awaiting a drain, then we just call it now.\n    // If we don't know, then assume that we are waiting for one.\n    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();\n  }\n\n  src.on('data', ondata);\n  function ondata(chunk) {\n    debug('ondata');\n    var ret = dest.write(chunk);\n    if (false === ret) {\n      // If the user unpiped during `dest.write()`, it is possible\n      // to get stuck in a permanently paused state if that write\n      // also returned false.\n      // => Check whether `dest` is still a piping destination.\n      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {\n        debug('false write response, pause', src._readableState.awaitDrain);\n        src._readableState.awaitDrain++;\n      }\n      src.pause();\n    }\n  }\n\n  // if the dest has an error, then stop piping into it.\n  // however, don't suppress the throwing behavior for this.\n  function onerror(er) {\n    debug('onerror', er);\n    unpipe();\n    dest.removeListener('error', onerror);\n    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);\n  }\n\n  // Make sure our error handler is attached before userland ones.\n  prependListener(dest, 'error', onerror);\n\n  // Both close and finish should trigger unpipe, but only once.\n  function onclose() {\n    dest.removeListener('finish', onfinish);\n    unpipe();\n  }\n  dest.once('close', onclose);\n  function onfinish() {\n    debug('onfinish');\n    dest.removeListener('close', onclose);\n    unpipe();\n  }\n  dest.once('finish', onfinish);\n\n  function unpipe() {\n    debug('unpipe');\n    src.unpipe(dest);\n  }\n\n  // tell the dest that it's being piped to\n  dest.emit('pipe', src);\n\n  // start the flow if it hasn't been started already.\n  if (!state.flowing) {\n    debug('pipe resume');\n    src.resume();\n  }\n\n  return dest;\n};\n\nfunction pipeOnDrain(src) {\n  return function () {\n    var state = src._readableState;\n    debug('pipeOnDrain', state.awaitDrain);\n    if (state.awaitDrain) state.awaitDrain--;\n    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {\n      state.flowing = true;\n      flow(src);\n    }\n  };\n}\n\nReadable.prototype.unpipe = function (dest) {\n  var state = this._readableState;\n\n  // if we're not piping anywhere, then do nothing.\n  if (state.pipesCount === 0) return this;\n\n  // just one destination.  most common case.\n  if (state.pipesCount === 1) {\n    // passed in one, but it's not the right one.\n    if (dest && dest !== state.pipes) return this;\n\n    if (!dest) dest = state.pipes;\n\n    // got a match.\n    state.pipes = null;\n    state.pipesCount = 0;\n    state.flowing = false;\n    if (dest) dest.emit('unpipe', this);\n    return this;\n  }\n\n  // slow case. multiple pipe destinations.\n\n  if (!dest) {\n    // remove all.\n    var dests = state.pipes;\n    var len = state.pipesCount;\n    state.pipes = null;\n    state.pipesCount = 0;\n    state.flowing = false;\n\n    for (var _i = 0; _i < len; _i++) {\n      dests[_i].emit('unpipe', this);\n    }return this;\n  }\n\n  // try to find the right one.\n  var i = indexOf(state.pipes, dest);\n  if (i === -1) return this;\n\n  state.pipes.splice(i, 1);\n  state.pipesCount -= 1;\n  if (state.pipesCount === 1) state.pipes = state.pipes[0];\n\n  dest.emit('unpipe', this);\n\n  return this;\n};\n\n// set up data events if they are asked for\n// Ensure readable listeners eventually get something\nReadable.prototype.on = function (ev, fn) {\n  var res = Stream.prototype.on.call(this, ev, fn);\n\n  // If listening to data, and it has not explicitly been paused,\n  // then call resume to start the flow of data on the next tick.\n  if (ev === 'data' && false !== this._readableState.flowing) {\n    this.resume();\n  }\n\n  if (ev === 'readable' && !this._readableState.endEmitted) {\n    var state = this._readableState;\n    if (!state.readableListening) {\n      state.readableListening = true;\n      state.emittedReadable = false;\n      state.needReadable = true;\n      if (!state.reading) {\n        processNextTick(nReadingNextTick, this);\n      } else if (state.length) {\n        emitReadable(this, state);\n      }\n    }\n  }\n\n  return res;\n};\nReadable.prototype.addListener = Readable.prototype.on;\n\nfunction nReadingNextTick(self) {\n  debug('readable nexttick read 0');\n  self.read(0);\n}\n\n// pause() and resume() are remnants of the legacy readable stream API\n// If the user uses them, then switch into old mode.\nReadable.prototype.resume = function () {\n  var state = this._readableState;\n  if (!state.flowing) {\n    debug('resume');\n    state.flowing = true;\n    resume(this, state);\n  }\n  return this;\n};\n\nfunction resume(stream, state) {\n  if (!state.resumeScheduled) {\n    state.resumeScheduled = true;\n    processNextTick(resume_, stream, state);\n  }\n}\n\nfunction resume_(stream, state) {\n  if (!state.reading) {\n    debug('resume read 0');\n    stream.read(0);\n  }\n\n  state.resumeScheduled = false;\n  stream.emit('resume');\n  flow(stream);\n  if (state.flowing && !state.reading) stream.read(0);\n}\n\nReadable.prototype.pause = function () {\n  debug('call pause flowing=%j', this._readableState.flowing);\n  if (false !== this._readableState.flowing) {\n    debug('pause');\n    this._readableState.flowing = false;\n    this.emit('pause');\n  }\n  return this;\n};\n\nfunction flow(stream) {\n  var state = stream._readableState;\n  debug('flow', state.flowing);\n  if (state.flowing) {\n    do {\n      var chunk = stream.read();\n    } while (null !== chunk && state.flowing);\n  }\n}\n\n// wrap an old-style stream as the async data source.\n// This is *not* part of the readable stream interface.\n// It is an ugly unfortunate mess of history.\nReadable.prototype.wrap = function (stream) {\n  var state = this._readableState;\n  var paused = false;\n\n  var self = this;\n  stream.on('end', function () {\n    debug('wrapped end');\n    if (state.decoder && !state.ended) {\n      var chunk = state.decoder.end();\n      if (chunk && chunk.length) self.push(chunk);\n    }\n\n    self.push(null);\n  });\n\n  stream.on('data', function (chunk) {\n    debug('wrapped data');\n    if (state.decoder) chunk = state.decoder.write(chunk);\n\n    // don't skip over falsy values in objectMode\n    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;\n\n    var ret = self.push(chunk);\n    if (!ret) {\n      paused = true;\n      stream.pause();\n    }\n  });\n\n  // proxy all the other methods.\n  // important when wrapping filters and duplexes.\n  for (var i in stream) {\n    if (this[i] === undefined && typeof stream[i] === 'function') {\n      this[i] = function (method) {\n        return function () {\n          return stream[method].apply(stream, arguments);\n        };\n      }(i);\n    }\n  }\n\n  // proxy certain important events.\n  var events = ['error', 'close', 'destroy', 'pause', 'resume'];\n  forEach(events, function (ev) {\n    stream.on(ev, self.emit.bind(self, ev));\n  });\n\n  // when we try to consume some more bytes, simply unpause the\n  // underlying stream.\n  self._read = function (n) {\n    debug('wrapped _read', n);\n    if (paused) {\n      paused = false;\n      stream.resume();\n    }\n  };\n\n  return self;\n};\n\n// exposed for testing purposes only.\nReadable._fromList = fromList;\n\n// Pluck off n bytes from an array of buffers.\n// Length is the combined lengths of all the buffers in the list.\nfunction fromList(n, state) {\n  var list = state.buffer;\n  var length = state.length;\n  var stringMode = !!state.decoder;\n  var objectMode = !!state.objectMode;\n  var ret;\n\n  // nothing in the list, definitely empty.\n  if (list.length === 0) return null;\n\n  if (length === 0) ret = null;else if (objectMode) ret = list.shift();else if (!n || n >= length) {\n    // read it all, truncate the array.\n    if (stringMode) ret = list.join('');else if (list.length === 1) ret = list[0];else ret = Buffer.concat(list, length);\n    list.length = 0;\n  } else {\n    // read just some of it.\n    if (n < list[0].length) {\n      // just take a part of the first list item.\n      // slice is the same for buffers and strings.\n      var buf = list[0];\n      ret = buf.slice(0, n);\n      list[0] = buf.slice(n);\n    } else if (n === list[0].length) {\n      // first list is a perfect match\n      ret = list.shift();\n    } else {\n      // complex case.\n      // we have enough to cover it, but it spans past the first buffer.\n      if (stringMode) ret = '';else ret = bufferShim.allocUnsafe(n);\n\n      var c = 0;\n      for (var i = 0, l = list.length; i < l && c < n; i++) {\n        var _buf = list[0];\n        var cpy = Math.min(n - c, _buf.length);\n\n        if (stringMode) ret += _buf.slice(0, cpy);else _buf.copy(ret, c, 0, cpy);\n\n        if (cpy < _buf.length) list[0] = _buf.slice(cpy);else list.shift();\n\n        c += cpy;\n      }\n    }\n  }\n\n  return ret;\n}\n\nfunction endReadable(stream) {\n  var state = stream._readableState;\n\n  // If we get here before consuming all the bytes, then that is a\n  // bug in node.  Should never happen.\n  if (state.length > 0) throw new Error('\"endReadable()\" called on non-empty stream');\n\n  if (!state.endEmitted) {\n    state.ended = true;\n    processNextTick(endReadableNT, state, stream);\n  }\n}\n\nfunction endReadableNT(state, stream) {\n  // Check that we didn't get one last unshift.\n  if (!state.endEmitted && state.length === 0) {\n    state.endEmitted = true;\n    stream.readable = false;\n    stream.emit('end');\n  }\n}\n\nfunction forEach(xs, f) {\n  for (var i = 0, l = xs.length; i < l; i++) {\n    f(xs[i], i);\n  }\n}\n\nfunction indexOf(xs, x) {\n  for (var i = 0, l = xs.length; i < l; i++) {\n    if (xs[i] === x) return i;\n  }\n  return -1;\n}\n}).call(this,require('_process'))\n},{\"./_stream_duplex\":69,\"_process\":67,\"buffer\":44,\"buffer-shims\":43,\"core-util-is\":45,\"events\":48,\"inherits\":51,\"isarray\":53,\"process-nextick-args\":66,\"string_decoder/\":79,\"util\":40}],72:[function(require,module,exports){\n// a transform stream is a readable/writable stream where you do\n// something with the data.  Sometimes it's called a \"filter\",\n// but that's not a great name for it, since that implies a thing where\n// some bits pass through, and others are simply ignored.  (That would\n// be a valid example of a transform, of course.)\n//\n// While the output is causally related to the input, it's not a\n// necessarily symmetric or synchronous transformation.  For example,\n// a zlib stream might take multiple plain-text writes(), and then\n// emit a single compressed chunk some time in the future.\n//\n// Here's how this works:\n//\n// The Transform stream has all the aspects of the readable and writable\n// stream classes.  When you write(chunk), that calls _write(chunk,cb)\n// internally, and returns false if there's a lot of pending writes\n// buffered up.  When you call read(), that calls _read(n) until\n// there's enough pending readable data buffered up.\n//\n// In a transform stream, the written data is placed in a buffer.  When\n// _read(n) is called, it transforms the queued up data, calling the\n// buffered _write cb's as it consumes chunks.  If consuming a single\n// written chunk would result in multiple output chunks, then the first\n// outputted bit calls the readcb, and subsequent chunks just go into\n// the read buffer, and will cause it to emit 'readable' if necessary.\n//\n// This way, back-pressure is actually determined by the reading side,\n// since _read has to be called to start processing a new chunk.  However,\n// a pathological inflate type of transform can cause excessive buffering\n// here.  For example, imagine a stream where every byte of input is\n// interpreted as an integer from 0-255, and then results in that many\n// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in\n// 1kb of data being output.  In this case, you could write a very small\n// amount of input, and end up with a very large amount of output.  In\n// such a pathological inflating mechanism, there'd be no way to tell\n// the system to stop doing the transform.  A single 4MB write could\n// cause the system to run out of memory.\n//\n// However, even in such a pathological case, only a single written chunk\n// would be consumed, and then the rest would wait (un-transformed) until\n// the results of the previous transformed chunk were consumed.\n\n'use strict';\n\nmodule.exports = Transform;\n\nvar Duplex = require('./_stream_duplex');\n\n/*<replacement>*/\nvar util = require('core-util-is');\nutil.inherits = require('inherits');\n/*</replacement>*/\n\nutil.inherits(Transform, Duplex);\n\nfunction TransformState(stream) {\n  this.afterTransform = function (er, data) {\n    return afterTransform(stream, er, data);\n  };\n\n  this.needTransform = false;\n  this.transforming = false;\n  this.writecb = null;\n  this.writechunk = null;\n  this.writeencoding = null;\n}\n\nfunction afterTransform(stream, er, data) {\n  var ts = stream._transformState;\n  ts.transforming = false;\n\n  var cb = ts.writecb;\n\n  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));\n\n  ts.writechunk = null;\n  ts.writecb = null;\n\n  if (data !== null && data !== undefined) stream.push(data);\n\n  cb(er);\n\n  var rs = stream._readableState;\n  rs.reading = false;\n  if (rs.needReadable || rs.length < rs.highWaterMark) {\n    stream._read(rs.highWaterMark);\n  }\n}\n\nfunction Transform(options) {\n  if (!(this instanceof Transform)) return new Transform(options);\n\n  Duplex.call(this, options);\n\n  this._transformState = new TransformState(this);\n\n  // when the writable side finishes, then flush out anything remaining.\n  var stream = this;\n\n  // start out asking for a readable event once data is transformed.\n  this._readableState.needReadable = true;\n\n  // we have implemented the _read method, and done the other things\n  // that Readable wants before the first _read call, so unset the\n  // sync guard flag.\n  this._readableState.sync = false;\n\n  if (options) {\n    if (typeof options.transform === 'function') this._transform = options.transform;\n\n    if (typeof options.flush === 'function') this._flush = options.flush;\n  }\n\n  this.once('prefinish', function () {\n    if (typeof this._flush === 'function') this._flush(function (er) {\n      done(stream, er);\n    });else done(stream);\n  });\n}\n\nTransform.prototype.push = function (chunk, encoding) {\n  this._transformState.needTransform = false;\n  return Duplex.prototype.push.call(this, chunk, encoding);\n};\n\n// This is the part where you do stuff!\n// override this function in implementation classes.\n// 'chunk' is an input chunk.\n//\n// Call `push(newChunk)` to pass along transformed output\n// to the readable side.  You may call 'push' zero or more times.\n//\n// Call `cb(err)` when you are done with this chunk.  If you pass\n// an error, then that'll put the hurt on the whole operation.  If you\n// never call cb(), then you'll never get another chunk.\nTransform.prototype._transform = function (chunk, encoding, cb) {\n  throw new Error('Not implemented');\n};\n\nTransform.prototype._write = function (chunk, encoding, cb) {\n  var ts = this._transformState;\n  ts.writecb = cb;\n  ts.writechunk = chunk;\n  ts.writeencoding = encoding;\n  if (!ts.transforming) {\n    var rs = this._readableState;\n    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);\n  }\n};\n\n// Doesn't matter what the args are here.\n// _transform does all the work.\n// That we got here means that the readable side wants more data.\nTransform.prototype._read = function (n) {\n  var ts = this._transformState;\n\n  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {\n    ts.transforming = true;\n    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);\n  } else {\n    // mark that we need a transform, so that any data that comes in\n    // will get processed, now that we've asked for it.\n    ts.needTransform = true;\n  }\n};\n\nfunction done(stream, er) {\n  if (er) return stream.emit('error', er);\n\n  // if there's nothing in the write buffer, then that means\n  // that nothing more will ever be provided\n  var ws = stream._writableState;\n  var ts = stream._transformState;\n\n  if (ws.length) throw new Error('Calling transform done when ws.length != 0');\n\n  if (ts.transforming) throw new Error('Calling transform done when still transforming');\n\n  return stream.push(null);\n}\n},{\"./_stream_duplex\":69,\"core-util-is\":45,\"inherits\":51}],73:[function(require,module,exports){\n(function (process){\n// A bit simpler than readable streams.\n// Implement an async ._write(chunk, encoding, cb), and it'll handle all\n// the drain event emission and buffering.\n\n'use strict';\n\nmodule.exports = Writable;\n\n/*<replacement>*/\nvar processNextTick = require('process-nextick-args');\n/*</replacement>*/\n\n/*<replacement>*/\nvar asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;\n/*</replacement>*/\n\nWritable.WritableState = WritableState;\n\n/*<replacement>*/\nvar util = require('core-util-is');\nutil.inherits = require('inherits');\n/*</replacement>*/\n\n/*<replacement>*/\nvar internalUtil = {\n  deprecate: require('util-deprecate')\n};\n/*</replacement>*/\n\n/*<replacement>*/\nvar Stream;\n(function () {\n  try {\n    Stream = require('st' + 'ream');\n  } catch (_) {} finally {\n    if (!Stream) Stream = require('events').EventEmitter;\n  }\n})();\n/*</replacement>*/\n\nvar Buffer = require('buffer').Buffer;\n/*<replacement>*/\nvar bufferShim = require('buffer-shims');\n/*</replacement>*/\n\nutil.inherits(Writable, Stream);\n\nfunction nop() {}\n\nfunction WriteReq(chunk, encoding, cb) {\n  this.chunk = chunk;\n  this.encoding = encoding;\n  this.callback = cb;\n  this.next = null;\n}\n\nvar Duplex;\nfunction WritableState(options, stream) {\n  Duplex = Duplex || require('./_stream_duplex');\n\n  options = options || {};\n\n  // object stream flag to indicate whether or not this stream\n  // contains buffers or objects.\n  this.objectMode = !!options.objectMode;\n\n  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;\n\n  // the point at which write() starts returning false\n  // Note: 0 is a valid value, means that we always return false if\n  // the entire buffer is not flushed immediately on write()\n  var hwm = options.highWaterMark;\n  var defaultHwm = this.objectMode ? 16 : 16 * 1024;\n  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;\n\n  // cast to ints.\n  this.highWaterMark = ~ ~this.highWaterMark;\n\n  this.needDrain = false;\n  // at the start of calling end()\n  this.ending = false;\n  // when end() has been called, and returned\n  this.ended = false;\n  // when 'finish' is emitted\n  this.finished = false;\n\n  // should we decode strings into buffers before passing to _write?\n  // this is here so that some node-core streams can optimize string\n  // handling at a lower level.\n  var noDecode = options.decodeStrings === false;\n  this.decodeStrings = !noDecode;\n\n  // Crypto is kind of old and crusty.  Historically, its default string\n  // encoding is 'binary' so we have to make this configurable.\n  // Everything else in the universe uses 'utf8', though.\n  this.defaultEncoding = options.defaultEncoding || 'utf8';\n\n  // not an actual buffer we keep track of, but a measurement\n  // of how much we're waiting to get pushed to some underlying\n  // socket or file.\n  this.length = 0;\n\n  // a flag to see when we're in the middle of a write.\n  this.writing = false;\n\n  // when true all writes will be buffered until .uncork() call\n  this.corked = 0;\n\n  // a flag to be able to tell if the onwrite cb is called immediately,\n  // or on a later tick.  We set this to true at first, because any\n  // actions that shouldn't happen until \"later\" should generally also\n  // not happen before the first write call.\n  this.sync = true;\n\n  // a flag to know if we're processing previously buffered items, which\n  // may call the _write() callback in the same tick, so that we don't\n  // end up in an overlapped onwrite situation.\n  this.bufferProcessing = false;\n\n  // the callback that's passed to _write(chunk,cb)\n  this.onwrite = function (er) {\n    onwrite(stream, er);\n  };\n\n  // the callback that the user supplies to write(chunk,encoding,cb)\n  this.writecb = null;\n\n  // the amount that is being written when _write is called.\n  this.writelen = 0;\n\n  this.bufferedRequest = null;\n  this.lastBufferedRequest = null;\n\n  // number of pending user-supplied write callbacks\n  // this must be 0 before 'finish' can be emitted\n  this.pendingcb = 0;\n\n  // emit prefinish if the only thing we're waiting for is _write cbs\n  // This is relevant for synchronous Transform streams\n  this.prefinished = false;\n\n  // True if the error was already emitted and should not be thrown again\n  this.errorEmitted = false;\n\n  // count buffered requests\n  this.bufferedRequestCount = 0;\n\n  // allocate the first CorkedRequest, there is always\n  // one allocated and free to use, and we maintain at most two\n  this.corkedRequestsFree = new CorkedRequest(this);\n}\n\nWritableState.prototype.getBuffer = function writableStateGetBuffer() {\n  var current = this.bufferedRequest;\n  var out = [];\n  while (current) {\n    out.push(current);\n    current = current.next;\n  }\n  return out;\n};\n\n(function () {\n  try {\n    Object.defineProperty(WritableState.prototype, 'buffer', {\n      get: internalUtil.deprecate(function () {\n        return this.getBuffer();\n      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')\n    });\n  } catch (_) {}\n})();\n\nvar Duplex;\nfunction Writable(options) {\n  Duplex = Duplex || require('./_stream_duplex');\n\n  // Writable ctor is applied to Duplexes, though they're not\n  // instanceof Writable, they're instanceof Readable.\n  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);\n\n  this._writableState = new WritableState(options, this);\n\n  // legacy.\n  this.writable = true;\n\n  if (options) {\n    if (typeof options.write === 'function') this._write = options.write;\n\n    if (typeof options.writev === 'function') this._writev = options.writev;\n  }\n\n  Stream.call(this);\n}\n\n// Otherwise people can pipe Writable streams, which is just wrong.\nWritable.prototype.pipe = function () {\n  this.emit('error', new Error('Cannot pipe, not readable'));\n};\n\nfunction writeAfterEnd(stream, cb) {\n  var er = new Error('write after end');\n  // TODO: defer error events consistently everywhere, not just the cb\n  stream.emit('error', er);\n  processNextTick(cb, er);\n}\n\n// If we get something that is not a buffer, string, null, or undefined,\n// and we're not in objectMode, then that's an error.\n// Otherwise stream chunks are all considered to be of length=1, and the\n// watermarks determine how many objects to keep in the buffer, rather than\n// how many bytes or characters.\nfunction validChunk(stream, state, chunk, cb) {\n  var valid = true;\n  var er = false;\n  // Always throw error if a null is written\n  // if we are not in object mode then throw\n  // if it is not a buffer, string, or undefined.\n  if (chunk === null) {\n    er = new TypeError('May not write null values to stream');\n  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {\n    er = new TypeError('Invalid non-string/buffer chunk');\n  }\n  if (er) {\n    stream.emit('error', er);\n    processNextTick(cb, er);\n    valid = false;\n  }\n  return valid;\n}\n\nWritable.prototype.write = function (chunk, encoding, cb) {\n  var state = this._writableState;\n  var ret = false;\n\n  if (typeof encoding === 'function') {\n    cb = encoding;\n    encoding = null;\n  }\n\n  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;\n\n  if (typeof cb !== 'function') cb = nop;\n\n  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {\n    state.pendingcb++;\n    ret = writeOrBuffer(this, state, chunk, encoding, cb);\n  }\n\n  return ret;\n};\n\nWritable.prototype.cork = function () {\n  var state = this._writableState;\n\n  state.corked++;\n};\n\nWritable.prototype.uncork = function () {\n  var state = this._writableState;\n\n  if (state.corked) {\n    state.corked--;\n\n    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);\n  }\n};\n\nWritable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {\n  // node::ParseEncoding() requires lower case.\n  if (typeof encoding === 'string') encoding = encoding.toLowerCase();\n  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);\n  this._writableState.defaultEncoding = encoding;\n  return this;\n};\n\nfunction decodeChunk(state, chunk, encoding) {\n  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {\n    chunk = bufferShim.from(chunk, encoding);\n  }\n  return chunk;\n}\n\n// if we're already writing something, then just put this\n// in the queue, and wait our turn.  Otherwise, call _write\n// If we return false, then we need a drain event, so set that flag.\nfunction writeOrBuffer(stream, state, chunk, encoding, cb) {\n  chunk = decodeChunk(state, chunk, encoding);\n\n  if (Buffer.isBuffer(chunk)) encoding = 'buffer';\n  var len = state.objectMode ? 1 : chunk.length;\n\n  state.length += len;\n\n  var ret = state.length < state.highWaterMark;\n  // we must ensure that previous needDrain will not be reset to false.\n  if (!ret) state.needDrain = true;\n\n  if (state.writing || state.corked) {\n    var last = state.lastBufferedRequest;\n    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);\n    if (last) {\n      last.next = state.lastBufferedRequest;\n    } else {\n      state.bufferedRequest = state.lastBufferedRequest;\n    }\n    state.bufferedRequestCount += 1;\n  } else {\n    doWrite(stream, state, false, len, chunk, encoding, cb);\n  }\n\n  return ret;\n}\n\nfunction doWrite(stream, state, writev, len, chunk, encoding, cb) {\n  state.writelen = len;\n  state.writecb = cb;\n  state.writing = true;\n  state.sync = true;\n  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);\n  state.sync = false;\n}\n\nfunction onwriteError(stream, state, sync, er, cb) {\n  --state.pendingcb;\n  if (sync) processNextTick(cb, er);else cb(er);\n\n  stream._writableState.errorEmitted = true;\n  stream.emit('error', er);\n}\n\nfunction onwriteStateUpdate(state) {\n  state.writing = false;\n  state.writecb = null;\n  state.length -= state.writelen;\n  state.writelen = 0;\n}\n\nfunction onwrite(stream, er) {\n  var state = stream._writableState;\n  var sync = state.sync;\n  var cb = state.writecb;\n\n  onwriteStateUpdate(state);\n\n  if (er) onwriteError(stream, state, sync, er, cb);else {\n    // Check if we're actually ready to finish, but don't emit yet\n    var finished = needFinish(state);\n\n    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {\n      clearBuffer(stream, state);\n    }\n\n    if (sync) {\n      /*<replacement>*/\n      asyncWrite(afterWrite, stream, state, finished, cb);\n      /*</replacement>*/\n    } else {\n        afterWrite(stream, state, finished, cb);\n      }\n  }\n}\n\nfunction afterWrite(stream, state, finished, cb) {\n  if (!finished) onwriteDrain(stream, state);\n  state.pendingcb--;\n  cb();\n  finishMaybe(stream, state);\n}\n\n// Must force callback to be called on nextTick, so that we don't\n// emit 'drain' before the write() consumer gets the 'false' return\n// value, and has a chance to attach a 'drain' listener.\nfunction onwriteDrain(stream, state) {\n  if (state.length === 0 && state.needDrain) {\n    state.needDrain = false;\n    stream.emit('drain');\n  }\n}\n\n// if there's something in the buffer waiting, then process it\nfunction clearBuffer(stream, state) {\n  state.bufferProcessing = true;\n  var entry = state.bufferedRequest;\n\n  if (stream._writev && entry && entry.next) {\n    // Fast case, write everything using _writev()\n    var l = state.bufferedRequestCount;\n    var buffer = new Array(l);\n    var holder = state.corkedRequestsFree;\n    holder.entry = entry;\n\n    var count = 0;\n    while (entry) {\n      buffer[count] = entry;\n      entry = entry.next;\n      count += 1;\n    }\n\n    doWrite(stream, state, true, state.length, buffer, '', holder.finish);\n\n    // doWrite is almost always async, defer these to save a bit of time\n    // as the hot path ends with doWrite\n    state.pendingcb++;\n    state.lastBufferedRequest = null;\n    if (holder.next) {\n      state.corkedRequestsFree = holder.next;\n      holder.next = null;\n    } else {\n      state.corkedRequestsFree = new CorkedRequest(state);\n    }\n  } else {\n    // Slow case, write chunks one-by-one\n    while (entry) {\n      var chunk = entry.chunk;\n      var encoding = entry.encoding;\n      var cb = entry.callback;\n      var len = state.objectMode ? 1 : chunk.length;\n\n      doWrite(stream, state, false, len, chunk, encoding, cb);\n      entry = entry.next;\n      // if we didn't call the onwrite immediately, then\n      // it means that we need to wait until it does.\n      // also, that means that the chunk and cb are currently\n      // being processed, so move the buffer counter past them.\n      if (state.writing) {\n        break;\n      }\n    }\n\n    if (entry === null) state.lastBufferedRequest = null;\n  }\n\n  state.bufferedRequestCount = 0;\n  state.bufferedRequest = entry;\n  state.bufferProcessing = false;\n}\n\nWritable.prototype._write = function (chunk, encoding, cb) {\n  cb(new Error('not implemented'));\n};\n\nWritable.prototype._writev = null;\n\nWritable.prototype.end = function (chunk, encoding, cb) {\n  var state = this._writableState;\n\n  if (typeof chunk === 'function') {\n    cb = chunk;\n    chunk = null;\n    encoding = null;\n  } else if (typeof encoding === 'function') {\n    cb = encoding;\n    encoding = null;\n  }\n\n  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);\n\n  // .end() fully uncorks\n  if (state.corked) {\n    state.corked = 1;\n    this.uncork();\n  }\n\n  // ignore unnecessary end() calls.\n  if (!state.ending && !state.finished) endWritable(this, state, cb);\n};\n\nfunction needFinish(state) {\n  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;\n}\n\nfunction prefinish(stream, state) {\n  if (!state.prefinished) {\n    state.prefinished = true;\n    stream.emit('prefinish');\n  }\n}\n\nfunction finishMaybe(stream, state) {\n  var need = needFinish(state);\n  if (need) {\n    if (state.pendingcb === 0) {\n      prefinish(stream, state);\n      state.finished = true;\n      stream.emit('finish');\n    } else {\n      prefinish(stream, state);\n    }\n  }\n  return need;\n}\n\nfunction endWritable(stream, state, cb) {\n  state.ending = true;\n  finishMaybe(stream, state);\n  if (cb) {\n    if (state.finished) processNextTick(cb);else stream.once('finish', cb);\n  }\n  state.ended = true;\n  stream.writable = false;\n}\n\n// It seems a linked list but it is not\n// there will be only 2 of these for each stream\nfunction CorkedRequest(state) {\n  var _this = this;\n\n  this.next = null;\n  this.entry = null;\n\n  this.finish = function (err) {\n    var entry = _this.entry;\n    _this.entry = null;\n    while (entry) {\n      var cb = entry.callback;\n      state.pendingcb--;\n      cb(err);\n      entry = entry.next;\n    }\n    if (state.corkedRequestsFree) {\n      state.corkedRequestsFree.next = _this;\n    } else {\n      state.corkedRequestsFree = _this;\n    }\n  };\n}\n}).call(this,require('_process'))\n},{\"./_stream_duplex\":69,\"_process\":67,\"buffer\":44,\"buffer-shims\":43,\"core-util-is\":45,\"events\":48,\"inherits\":51,\"process-nextick-args\":66,\"util-deprecate\":80}],74:[function(require,module,exports){\nmodule.exports = require(\"./lib/_stream_passthrough.js\")\n\n},{\"./lib/_stream_passthrough.js\":70}],75:[function(require,module,exports){\n(function (process){\nvar Stream = (function (){\n  try {\n    return require('st' + 'ream'); // hack to fix a circular dependency issue when used with browserify\n  } catch(_){}\n}());\nexports = module.exports = require('./lib/_stream_readable.js');\nexports.Stream = Stream || exports;\nexports.Readable = exports;\nexports.Writable = require('./lib/_stream_writable.js');\nexports.Duplex = require('./lib/_stream_duplex.js');\nexports.Transform = require('./lib/_stream_transform.js');\nexports.PassThrough = require('./lib/_stream_passthrough.js');\n\nif (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {\n  module.exports = Stream;\n}\n\n}).call(this,require('_process'))\n},{\"./lib/_stream_duplex.js\":69,\"./lib/_stream_passthrough.js\":70,\"./lib/_stream_readable.js\":71,\"./lib/_stream_transform.js\":72,\"./lib/_stream_writable.js\":73,\"_process\":67}],76:[function(require,module,exports){\nmodule.exports = require(\"./lib/_stream_transform.js\")\n\n},{\"./lib/_stream_transform.js\":72}],77:[function(require,module,exports){\nmodule.exports = require(\"./lib/_stream_writable.js\")\n\n},{\"./lib/_stream_writable.js\":73}],78:[function(require,module,exports){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nmodule.exports = Stream;\n\nvar EE = require('events').EventEmitter;\nvar inherits = require('inherits');\n\ninherits(Stream, EE);\nStream.Readable = require('readable-stream/readable.js');\nStream.Writable = require('readable-stream/writable.js');\nStream.Duplex = require('readable-stream/duplex.js');\nStream.Transform = require('readable-stream/transform.js');\nStream.PassThrough = require('readable-stream/passthrough.js');\n\n// Backwards-compat with node 0.4.x\nStream.Stream = Stream;\n\n\n\n// old-style streams.  Note that the pipe method (the only relevant\n// part of this class) is overridden in the Readable class.\n\nfunction Stream() {\n  EE.call(this);\n}\n\nStream.prototype.pipe = function(dest, options) {\n  var source = this;\n\n  function ondata(chunk) {\n    if (dest.writable) {\n      if (false === dest.write(chunk) && source.pause) {\n        source.pause();\n      }\n    }\n  }\n\n  source.on('data', ondata);\n\n  function ondrain() {\n    if (source.readable && source.resume) {\n      source.resume();\n    }\n  }\n\n  dest.on('drain', ondrain);\n\n  // If the 'end' option is not supplied, dest.end() will be called when\n  // source gets the 'end' or 'close' events.  Only dest.end() once.\n  if (!dest._isStdio && (!options || options.end !== false)) {\n    source.on('end', onend);\n    source.on('close', onclose);\n  }\n\n  var didOnEnd = false;\n  function onend() {\n    if (didOnEnd) return;\n    didOnEnd = true;\n\n    dest.end();\n  }\n\n\n  function onclose() {\n    if (didOnEnd) return;\n    didOnEnd = true;\n\n    if (typeof dest.destroy === 'function') dest.destroy();\n  }\n\n  // don't leave dangling pipes when there are errors.\n  function onerror(er) {\n    cleanup();\n    if (EE.listenerCount(this, 'error') === 0) {\n      throw er; // Unhandled stream error in pipe.\n    }\n  }\n\n  source.on('error', onerror);\n  dest.on('error', onerror);\n\n  // remove all the event listeners that were added.\n  function cleanup() {\n    source.removeListener('data', ondata);\n    dest.removeListener('drain', ondrain);\n\n    source.removeListener('end', onend);\n    source.removeListener('close', onclose);\n\n    source.removeListener('error', onerror);\n    dest.removeListener('error', onerror);\n\n    source.removeListener('end', cleanup);\n    source.removeListener('close', cleanup);\n\n    dest.removeListener('close', cleanup);\n  }\n\n  source.on('end', cleanup);\n  source.on('close', cleanup);\n\n  dest.on('close', cleanup);\n\n  dest.emit('pipe', source);\n\n  // Allow for unix-like usage: A.pipe(B).pipe(C)\n  return dest;\n};\n\n},{\"events\":48,\"inherits\":51,\"readable-stream/duplex.js\":68,\"readable-stream/passthrough.js\":74,\"readable-stream/readable.js\":75,\"readable-stream/transform.js\":76,\"readable-stream/writable.js\":77}],79:[function(require,module,exports){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar Buffer = require('buffer').Buffer;\n\nvar isBufferEncoding = Buffer.isEncoding\n  || function(encoding) {\n       switch (encoding && encoding.toLowerCase()) {\n         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;\n         default: return false;\n       }\n     }\n\n\nfunction assertEncoding(encoding) {\n  if (encoding && !isBufferEncoding(encoding)) {\n    throw new Error('Unknown encoding: ' + encoding);\n  }\n}\n\n// StringDecoder provides an interface for efficiently splitting a series of\n// buffers into a series of JS strings without breaking apart multi-byte\n// characters. CESU-8 is handled as part of the UTF-8 encoding.\n//\n// @TODO Handling all encodings inside a single object makes it very difficult\n// to reason about this code, so it should be split up in the future.\n// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code\n// points as used by CESU-8.\nvar StringDecoder = exports.StringDecoder = function(encoding) {\n  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');\n  assertEncoding(encoding);\n  switch (this.encoding) {\n    case 'utf8':\n      // CESU-8 represents each of Surrogate Pair by 3-bytes\n      this.surrogateSize = 3;\n      break;\n    case 'ucs2':\n    case 'utf16le':\n      // UTF-16 represents each of Surrogate Pair by 2-bytes\n      this.surrogateSize = 2;\n      this.detectIncompleteChar = utf16DetectIncompleteChar;\n      break;\n    case 'base64':\n      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.\n      this.surrogateSize = 3;\n      this.detectIncompleteChar = base64DetectIncompleteChar;\n      break;\n    default:\n      this.write = passThroughWrite;\n      return;\n  }\n\n  // Enough space to store all bytes of a single character. UTF-8 needs 4\n  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).\n  this.charBuffer = new Buffer(6);\n  // Number of bytes received for the current incomplete multi-byte character.\n  this.charReceived = 0;\n  // Number of bytes expected for the current incomplete multi-byte character.\n  this.charLength = 0;\n};\n\n\n// write decodes the given buffer and returns it as JS string that is\n// guaranteed to not contain any partial multi-byte characters. Any partial\n// character found at the end of the buffer is buffered up, and will be\n// returned when calling write again with the remaining bytes.\n//\n// Note: Converting a Buffer containing an orphan surrogate to a String\n// currently works, but converting a String to a Buffer (via `new Buffer`, or\n// Buffer#write) will replace incomplete surrogates with the unicode\n// replacement character. See https://codereview.chromium.org/121173009/ .\nStringDecoder.prototype.write = function(buffer) {\n  var charStr = '';\n  // if our last write ended with an incomplete multibyte character\n  while (this.charLength) {\n    // determine how many remaining bytes this buffer has to offer for this char\n    var available = (buffer.length >= this.charLength - this.charReceived) ?\n        this.charLength - this.charReceived :\n        buffer.length;\n\n    // add the new bytes to the char buffer\n    buffer.copy(this.charBuffer, this.charReceived, 0, available);\n    this.charReceived += available;\n\n    if (this.charReceived < this.charLength) {\n      // still not enough chars in this buffer? wait for more ...\n      return '';\n    }\n\n    // remove bytes belonging to the current character from the buffer\n    buffer = buffer.slice(available, buffer.length);\n\n    // get the character that was split\n    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);\n\n    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character\n    var charCode = charStr.charCodeAt(charStr.length - 1);\n    if (charCode >= 0xD800 && charCode <= 0xDBFF) {\n      this.charLength += this.surrogateSize;\n      charStr = '';\n      continue;\n    }\n    this.charReceived = this.charLength = 0;\n\n    // if there are no more bytes in this buffer, just emit our char\n    if (buffer.length === 0) {\n      return charStr;\n    }\n    break;\n  }\n\n  // determine and set charLength / charReceived\n  this.detectIncompleteChar(buffer);\n\n  var end = buffer.length;\n  if (this.charLength) {\n    // buffer the incomplete character bytes we got\n    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);\n    end -= this.charReceived;\n  }\n\n  charStr += buffer.toString(this.encoding, 0, end);\n\n  var end = charStr.length - 1;\n  var charCode = charStr.charCodeAt(end);\n  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character\n  if (charCode >= 0xD800 && charCode <= 0xDBFF) {\n    var size = this.surrogateSize;\n    this.charLength += size;\n    this.charReceived += size;\n    this.charBuffer.copy(this.charBuffer, size, 0, size);\n    buffer.copy(this.charBuffer, 0, 0, size);\n    return charStr.substring(0, end);\n  }\n\n  // or just emit the charStr\n  return charStr;\n};\n\n// detectIncompleteChar determines if there is an incomplete UTF-8 character at\n// the end of the given buffer. If so, it sets this.charLength to the byte\n// length that character, and sets this.charReceived to the number of bytes\n// that are available for this character.\nStringDecoder.prototype.detectIncompleteChar = function(buffer) {\n  // determine how many bytes we have to check at the end of this buffer\n  var i = (buffer.length >= 3) ? 3 : buffer.length;\n\n  // Figure out if one of the last i bytes of our buffer announces an\n  // incomplete char.\n  for (; i > 0; i--) {\n    var c = buffer[buffer.length - i];\n\n    // See http://en.wikipedia.org/wiki/UTF-8#Description\n\n    // 110XXXXX\n    if (i == 1 && c >> 5 == 0x06) {\n      this.charLength = 2;\n      break;\n    }\n\n    // 1110XXXX\n    if (i <= 2 && c >> 4 == 0x0E) {\n      this.charLength = 3;\n      break;\n    }\n\n    // 11110XXX\n    if (i <= 3 && c >> 3 == 0x1E) {\n      this.charLength = 4;\n      break;\n    }\n  }\n  this.charReceived = i;\n};\n\nStringDecoder.prototype.end = function(buffer) {\n  var res = '';\n  if (buffer && buffer.length)\n    res = this.write(buffer);\n\n  if (this.charReceived) {\n    var cr = this.charReceived;\n    var buf = this.charBuffer;\n    var enc = this.encoding;\n    res += buf.slice(0, cr).toString(enc);\n  }\n\n  return res;\n};\n\nfunction passThroughWrite(buffer) {\n  return buffer.toString(this.encoding);\n}\n\nfunction utf16DetectIncompleteChar(buffer) {\n  this.charReceived = buffer.length % 2;\n  this.charLength = this.charReceived ? 2 : 0;\n}\n\nfunction base64DetectIncompleteChar(buffer) {\n  this.charReceived = buffer.length % 3;\n  this.charLength = this.charReceived ? 3 : 0;\n}\n\n},{\"buffer\":44}],80:[function(require,module,exports){\n(function (global){\n\n/**\n * Module exports.\n */\n\nmodule.exports = deprecate;\n\n/**\n * Mark that a method should not be used.\n * Returns a modified function which warns once by default.\n *\n * If `localStorage.noDeprecation = true` is set, then it is a no-op.\n *\n * If `localStorage.throwDeprecation = true` is set, then deprecated functions\n * will throw an Error when invoked.\n *\n * If `localStorage.traceDeprecation = true` is set, then deprecated functions\n * will invoke `console.trace()` instead of `console.error()`.\n *\n * @param {Function} fn - the function to deprecate\n * @param {String} msg - the string to print to the console when `fn` is invoked\n * @returns {Function} a new \"deprecated\" version of `fn`\n * @api public\n */\n\nfunction deprecate (fn, msg) {\n  if (config('noDeprecation')) {\n    return fn;\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (config('throwDeprecation')) {\n        throw new Error(msg);\n      } else if (config('traceDeprecation')) {\n        console.trace(msg);\n      } else {\n        console.warn(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n}\n\n/**\n * Checks `localStorage` for boolean values for the given `name`.\n *\n * @param {String} name\n * @returns {Boolean}\n * @api private\n */\n\nfunction config (name) {\n  // accessing global.localStorage can trigger a DOMException in sandboxed iframes\n  try {\n    if (!global.localStorage) return false;\n  } catch (_) {\n    return false;\n  }\n  var val = global.localStorage[name];\n  if (null == val) return false;\n  return String(val).toLowerCase() === 'true';\n}\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{}],81:[function(require,module,exports){\nmodule.exports = function isBuffer(arg) {\n  return arg && typeof arg === 'object'\n    && typeof arg.copy === 'function'\n    && typeof arg.fill === 'function'\n    && typeof arg.readUInt8 === 'function';\n}\n},{}],82:[function(require,module,exports){\n(function (process,global){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar formatRegExp = /%[sdj%]/g;\nexports.format = function(f) {\n  if (!isString(f)) {\n    var objects = [];\n    for (var i = 0; i < arguments.length; i++) {\n      objects.push(inspect(arguments[i]));\n    }\n    return objects.join(' ');\n  }\n\n  var i = 1;\n  var args = arguments;\n  var len = args.length;\n  var str = String(f).replace(formatRegExp, function(x) {\n    if (x === '%%') return '%';\n    if (i >= len) return x;\n    switch (x) {\n      case '%s': return String(args[i++]);\n      case '%d': return Number(args[i++]);\n      case '%j':\n        try {\n          return JSON.stringify(args[i++]);\n        } catch (_) {\n          return '[Circular]';\n        }\n      default:\n        return x;\n    }\n  });\n  for (var x = args[i]; i < len; x = args[++i]) {\n    if (isNull(x) || !isObject(x)) {\n      str += ' ' + x;\n    } else {\n      str += ' ' + inspect(x);\n    }\n  }\n  return str;\n};\n\n\n// Mark that a method should not be used.\n// Returns a modified function which warns once by default.\n// If --no-deprecation is set, then it is a no-op.\nexports.deprecate = function(fn, msg) {\n  // Allow for deprecating things in the process of starting up.\n  if (isUndefined(global.process)) {\n    return function() {\n      return exports.deprecate(fn, msg).apply(this, arguments);\n    };\n  }\n\n  if (process.noDeprecation === true) {\n    return fn;\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (process.throwDeprecation) {\n        throw new Error(msg);\n      } else if (process.traceDeprecation) {\n        console.trace(msg);\n      } else {\n        console.error(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n};\n\n\nvar debugs = {};\nvar debugEnviron;\nexports.debuglog = function(set) {\n  if (isUndefined(debugEnviron))\n    debugEnviron = process.env.NODE_DEBUG || '';\n  set = set.toUpperCase();\n  if (!debugs[set]) {\n    if (new RegExp('\\\\b' + set + '\\\\b', 'i').test(debugEnviron)) {\n      var pid = process.pid;\n      debugs[set] = function() {\n        var msg = exports.format.apply(exports, arguments);\n        console.error('%s %d: %s', set, pid, msg);\n      };\n    } else {\n      debugs[set] = function() {};\n    }\n  }\n  return debugs[set];\n};\n\n\n/**\n * Echos the value of a value. Trys to print the value out\n * in the best way possible given the different types.\n *\n * @param {Object} obj The object to print out.\n * @param {Object} opts Optional options object that alters the output.\n */\n/* legacy: obj, showHidden, depth, colors*/\nfunction inspect(obj, opts) {\n  // default options\n  var ctx = {\n    seen: [],\n    stylize: stylizeNoColor\n  };\n  // legacy...\n  if (arguments.length >= 3) ctx.depth = arguments[2];\n  if (arguments.length >= 4) ctx.colors = arguments[3];\n  if (isBoolean(opts)) {\n    // legacy...\n    ctx.showHidden = opts;\n  } else if (opts) {\n    // got an \"options\" object\n    exports._extend(ctx, opts);\n  }\n  // set default options\n  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;\n  if (isUndefined(ctx.depth)) ctx.depth = 2;\n  if (isUndefined(ctx.colors)) ctx.colors = false;\n  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;\n  if (ctx.colors) ctx.stylize = stylizeWithColor;\n  return formatValue(ctx, obj, ctx.depth);\n}\nexports.inspect = inspect;\n\n\n// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics\ninspect.colors = {\n  'bold' : [1, 22],\n  'italic' : [3, 23],\n  'underline' : [4, 24],\n  'inverse' : [7, 27],\n  'white' : [37, 39],\n  'grey' : [90, 39],\n  'black' : [30, 39],\n  'blue' : [34, 39],\n  'cyan' : [36, 39],\n  'green' : [32, 39],\n  'magenta' : [35, 39],\n  'red' : [31, 39],\n  'yellow' : [33, 39]\n};\n\n// Don't use 'blue' not visible on cmd.exe\ninspect.styles = {\n  'special': 'cyan',\n  'number': 'yellow',\n  'boolean': 'yellow',\n  'undefined': 'grey',\n  'null': 'bold',\n  'string': 'green',\n  'date': 'magenta',\n  // \"name\": intentionally not styling\n  'regexp': 'red'\n};\n\n\nfunction stylizeWithColor(str, styleType) {\n  var style = inspect.styles[styleType];\n\n  if (style) {\n    return '\\u001b[' + inspect.colors[style][0] + 'm' + str +\n           '\\u001b[' + inspect.colors[style][1] + 'm';\n  } else {\n    return str;\n  }\n}\n\n\nfunction stylizeNoColor(str, styleType) {\n  return str;\n}\n\n\nfunction arrayToHash(array) {\n  var hash = {};\n\n  array.forEach(function(val, idx) {\n    hash[val] = true;\n  });\n\n  return hash;\n}\n\n\nfunction formatValue(ctx, value, recurseTimes) {\n  // Provide a hook for user-specified inspect functions.\n  // Check that value is an object with an inspect function on it\n  if (ctx.customInspect &&\n      value &&\n      isFunction(value.inspect) &&\n      // Filter out the util module, it's inspect function is special\n      value.inspect !== exports.inspect &&\n      // Also filter out any prototype objects using the circular check.\n      !(value.constructor && value.constructor.prototype === value)) {\n    var ret = value.inspect(recurseTimes, ctx);\n    if (!isString(ret)) {\n      ret = formatValue(ctx, ret, recurseTimes);\n    }\n    return ret;\n  }\n\n  // Primitive types cannot have properties\n  var primitive = formatPrimitive(ctx, value);\n  if (primitive) {\n    return primitive;\n  }\n\n  // Look up the keys of the object.\n  var keys = Object.keys(value);\n  var visibleKeys = arrayToHash(keys);\n\n  if (ctx.showHidden) {\n    keys = Object.getOwnPropertyNames(value);\n  }\n\n  // IE doesn't make error fields non-enumerable\n  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx\n  if (isError(value)\n      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {\n    return formatError(value);\n  }\n\n  // Some type of object without properties can be shortcutted.\n  if (keys.length === 0) {\n    if (isFunction(value)) {\n      var name = value.name ? ': ' + value.name : '';\n      return ctx.stylize('[Function' + name + ']', 'special');\n    }\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    }\n    if (isDate(value)) {\n      return ctx.stylize(Date.prototype.toString.call(value), 'date');\n    }\n    if (isError(value)) {\n      return formatError(value);\n    }\n  }\n\n  var base = '', array = false, braces = ['{', '}'];\n\n  // Make Array say that they are Array\n  if (isArray(value)) {\n    array = true;\n    braces = ['[', ']'];\n  }\n\n  // Make functions say that they are functions\n  if (isFunction(value)) {\n    var n = value.name ? ': ' + value.name : '';\n    base = ' [Function' + n + ']';\n  }\n\n  // Make RegExps say that they are RegExps\n  if (isRegExp(value)) {\n    base = ' ' + RegExp.prototype.toString.call(value);\n  }\n\n  // Make dates with properties first say the date\n  if (isDate(value)) {\n    base = ' ' + Date.prototype.toUTCString.call(value);\n  }\n\n  // Make error with message first say the error\n  if (isError(value)) {\n    base = ' ' + formatError(value);\n  }\n\n  if (keys.length === 0 && (!array || value.length == 0)) {\n    return braces[0] + base + braces[1];\n  }\n\n  if (recurseTimes < 0) {\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    } else {\n      return ctx.stylize('[Object]', 'special');\n    }\n  }\n\n  ctx.seen.push(value);\n\n  var output;\n  if (array) {\n    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);\n  } else {\n    output = keys.map(function(key) {\n      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);\n    });\n  }\n\n  ctx.seen.pop();\n\n  return reduceToSingleString(output, base, braces);\n}\n\n\nfunction formatPrimitive(ctx, value) {\n  if (isUndefined(value))\n    return ctx.stylize('undefined', 'undefined');\n  if (isString(value)) {\n    var simple = '\\'' + JSON.stringify(value).replace(/^\"|\"$/g, '')\n                                             .replace(/'/g, \"\\\\'\")\n                                             .replace(/\\\\\"/g, '\"') + '\\'';\n    return ctx.stylize(simple, 'string');\n  }\n  if (isNumber(value))\n    return ctx.stylize('' + value, 'number');\n  if (isBoolean(value))\n    return ctx.stylize('' + value, 'boolean');\n  // For some reason typeof null is \"object\", so special case here.\n  if (isNull(value))\n    return ctx.stylize('null', 'null');\n}\n\n\nfunction formatError(value) {\n  return '[' + Error.prototype.toString.call(value) + ']';\n}\n\n\nfunction formatArray(ctx, value, recurseTimes, visibleKeys, keys) {\n  var output = [];\n  for (var i = 0, l = value.length; i < l; ++i) {\n    if (hasOwnProperty(value, String(i))) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          String(i), true));\n    } else {\n      output.push('');\n    }\n  }\n  keys.forEach(function(key) {\n    if (!key.match(/^\\d+$/)) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          key, true));\n    }\n  });\n  return output;\n}\n\n\nfunction formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {\n  var name, str, desc;\n  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };\n  if (desc.get) {\n    if (desc.set) {\n      str = ctx.stylize('[Getter/Setter]', 'special');\n    } else {\n      str = ctx.stylize('[Getter]', 'special');\n    }\n  } else {\n    if (desc.set) {\n      str = ctx.stylize('[Setter]', 'special');\n    }\n  }\n  if (!hasOwnProperty(visibleKeys, key)) {\n    name = '[' + key + ']';\n  }\n  if (!str) {\n    if (ctx.seen.indexOf(desc.value) < 0) {\n      if (isNull(recurseTimes)) {\n        str = formatValue(ctx, desc.value, null);\n      } else {\n        str = formatValue(ctx, desc.value, recurseTimes - 1);\n      }\n      if (str.indexOf('\\n') > -1) {\n        if (array) {\n          str = str.split('\\n').map(function(line) {\n            return '  ' + line;\n          }).join('\\n').substr(2);\n        } else {\n          str = '\\n' + str.split('\\n').map(function(line) {\n            return '   ' + line;\n          }).join('\\n');\n        }\n      }\n    } else {\n      str = ctx.stylize('[Circular]', 'special');\n    }\n  }\n  if (isUndefined(name)) {\n    if (array && key.match(/^\\d+$/)) {\n      return str;\n    }\n    name = JSON.stringify('' + key);\n    if (name.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)) {\n      name = name.substr(1, name.length - 2);\n      name = ctx.stylize(name, 'name');\n    } else {\n      name = name.replace(/'/g, \"\\\\'\")\n                 .replace(/\\\\\"/g, '\"')\n                 .replace(/(^\"|\"$)/g, \"'\");\n      name = ctx.stylize(name, 'string');\n    }\n  }\n\n  return name + ': ' + str;\n}\n\n\nfunction reduceToSingleString(output, base, braces) {\n  var numLinesEst = 0;\n  var length = output.reduce(function(prev, cur) {\n    numLinesEst++;\n    if (cur.indexOf('\\n') >= 0) numLinesEst++;\n    return prev + cur.replace(/\\u001b\\[\\d\\d?m/g, '').length + 1;\n  }, 0);\n\n  if (length > 60) {\n    return braces[0] +\n           (base === '' ? '' : base + '\\n ') +\n           ' ' +\n           output.join(',\\n  ') +\n           ' ' +\n           braces[1];\n  }\n\n  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];\n}\n\n\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(ar) {\n  return Array.isArray(ar);\n}\nexports.isArray = isArray;\n\nfunction isBoolean(arg) {\n  return typeof arg === 'boolean';\n}\nexports.isBoolean = isBoolean;\n\nfunction isNull(arg) {\n  return arg === null;\n}\nexports.isNull = isNull;\n\nfunction isNullOrUndefined(arg) {\n  return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\nexports.isNumber = isNumber;\n\nfunction isString(arg) {\n  return typeof arg === 'string';\n}\nexports.isString = isString;\n\nfunction isSymbol(arg) {\n  return typeof arg === 'symbol';\n}\nexports.isSymbol = isSymbol;\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\nexports.isUndefined = isUndefined;\n\nfunction isRegExp(re) {\n  return isObject(re) && objectToString(re) === '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\nexports.isObject = isObject;\n\nfunction isDate(d) {\n  return isObject(d) && objectToString(d) === '[object Date]';\n}\nexports.isDate = isDate;\n\nfunction isError(e) {\n  return isObject(e) &&\n      (objectToString(e) === '[object Error]' || e instanceof Error);\n}\nexports.isError = isError;\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\nexports.isFunction = isFunction;\n\nfunction isPrimitive(arg) {\n  return arg === null ||\n         typeof arg === 'boolean' ||\n         typeof arg === 'number' ||\n         typeof arg === 'string' ||\n         typeof arg === 'symbol' ||  // ES6 symbol\n         typeof arg === 'undefined';\n}\nexports.isPrimitive = isPrimitive;\n\nexports.isBuffer = require('./support/isBuffer');\n\nfunction objectToString(o) {\n  return Object.prototype.toString.call(o);\n}\n\n\nfunction pad(n) {\n  return n < 10 ? '0' + n.toString(10) : n.toString(10);\n}\n\n\nvar months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',\n              'Oct', 'Nov', 'Dec'];\n\n// 26 Feb 16:19:34\nfunction timestamp() {\n  var d = new Date();\n  var time = [pad(d.getHours()),\n              pad(d.getMinutes()),\n              pad(d.getSeconds())].join(':');\n  return [d.getDate(), months[d.getMonth()], time].join(' ');\n}\n\n\n// log is just a thin wrapper to console.log that prepends a timestamp\nexports.log = function() {\n  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));\n};\n\n\n/**\n * Inherit the prototype methods from one constructor into another.\n *\n * The Function.prototype.inherits from lang.js rewritten as a standalone\n * function (not on Function.prototype). NOTE: If this file is to be loaded\n * during bootstrapping this function needs to be rewritten using some native\n * functions as prototype setup using normal JavaScript does not work as\n * expected during bootstrapping (see mirror.js in r114903).\n *\n * @param {function} ctor Constructor function which needs to inherit the\n *     prototype.\n * @param {function} superCtor Constructor function to inherit prototype from.\n */\nexports.inherits = require('inherits');\n\nexports._extend = function(origin, add) {\n  // Don't do anything if add isn't an object\n  if (!add || !isObject(add)) return origin;\n\n  var keys = Object.keys(add);\n  var i = keys.length;\n  while (i--) {\n    origin[keys[i]] = add[keys[i]];\n  }\n  return origin;\n};\n\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\n}).call(this,require('_process'),typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})\n},{\"./support/isBuffer\":81,\"_process\":67,\"inherits\":51}]},{},[1]);\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	const assert = __webpack_require__(24).assert;
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var used = [],
	    exports = module.exports = {};

	/*!
	 * Chai version
	 */

	exports.version = '3.5.0';

	/*!
	 * Assertion Error
	 */

	exports.AssertionError = __webpack_require__(26);

	/*!
	 * Utils for plugins (not exported)
	 */

	var util = __webpack_require__(27);

	/**
	 * # .use(function)
	 *
	 * Provides a way to extend the internals of Chai
	 *
	 * @param {Function}
	 * @returns {this} for chaining
	 * @api public
	 */

	exports.use = function (fn) {
	  if (!~used.indexOf(fn)) {
	    fn(this, util);
	    used.push(fn);
	  }

	  return this;
	};

	/*!
	 * Utility Functions
	 */

	exports.util = util;

	/*!
	 * Configuration
	 */

	var config = __webpack_require__(40);
	exports.config = config;

	/*!
	 * Primary `Assertion` prototype
	 */

	var assertion = __webpack_require__(59);
	exports.use(assertion);

	/*!
	 * Core Assertions
	 */

	var core = __webpack_require__(60);
	exports.use(core);

	/*!
	 * Expect interface
	 */

	var expect = __webpack_require__(61);
	exports.use(expect);

	/*!
	 * Should interface
	 */

	var should = __webpack_require__(62);
	exports.use(should);

	/*!
	 * Assert interface
	 */

	var assert = __webpack_require__(63);
	exports.use(assert);

/***/ },
/* 26 */
/***/ function(module, exports) {

	/*!
	 * assertion-error
	 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
	 * MIT Licensed
	 */

	/*!
	 * Return a function that will copy properties from
	 * one object to another excluding any originally
	 * listed. Returned function will create a new `{}`.
	 *
	 * @param {String} excluded properties ...
	 * @return {Function}
	 */

	function exclude() {
	  var excludes = [].slice.call(arguments);

	  function excludeProps(res, obj) {
	    Object.keys(obj).forEach(function (key) {
	      if (!~excludes.indexOf(key)) res[key] = obj[key];
	    });
	  }

	  return function extendExclude() {
	    var args = [].slice.call(arguments),
	        i = 0,
	        res = {};

	    for (; i < args.length; i++) {
	      excludeProps(res, args[i]);
	    }

	    return res;
	  };
	};

	/*!
	 * Primary Exports
	 */

	module.exports = AssertionError;

	/**
	 * ### AssertionError
	 *
	 * An extension of the JavaScript `Error` constructor for
	 * assertion and validation scenarios.
	 *
	 * @param {String} message
	 * @param {Object} properties to include (optional)
	 * @param {callee} start stack function (optional)
	 */

	function AssertionError(message, _props, ssf) {
	  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON'),
	      props = extend(_props || {});

	  // default values
	  this.message = message || 'Unspecified AssertionError';
	  this.showDiff = false;

	  // copy from properties
	  for (var key in props) {
	    this[key] = props[key];
	  }

	  // capture stack trace
	  ssf = ssf || arguments.callee;
	  if (ssf && Error.captureStackTrace) {
	    Error.captureStackTrace(this, ssf);
	  } else {
	    try {
	      throw new Error();
	    } catch (e) {
	      this.stack = e.stack;
	    }
	  }
	}

	/*!
	 * Inherit from Error.prototype
	 */

	AssertionError.prototype = Object.create(Error.prototype);

	/*!
	 * Statically set name
	 */

	AssertionError.prototype.name = 'AssertionError';

	/*!
	 * Ensure correct constructor
	 */

	AssertionError.prototype.constructor = AssertionError;

	/**
	 * Allow errors to be converted to JSON for static transfer.
	 *
	 * @param {Boolean} include stack (default: `true`)
	 * @return {Object} object that can be `JSON.stringify`
	 */

	AssertionError.prototype.toJSON = function (stack) {
	  var extend = exclude('constructor', 'toJSON', 'stack'),
	      props = extend({ name: this.name }, this);

	  // include stack if exists and not turned off
	  if (false !== stack && this.stack) {
	    props.stack = this.stack;
	  }

	  return props;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Main exports
	 */

	var exports = module.exports = {};

	/*!
	 * test utility
	 */

	exports.test = __webpack_require__(28);

	/*!
	 * type utility
	 */

	exports.type = __webpack_require__(30);

	/*!
	 * expectTypes utility
	 */
	exports.expectTypes = __webpack_require__(32);

	/*!
	 * message utility
	 */

	exports.getMessage = __webpack_require__(33);

	/*!
	 * actual utility
	 */

	exports.getActual = __webpack_require__(34);

	/*!
	 * Inspect util
	 */

	exports.inspect = __webpack_require__(35);

	/*!
	 * Object Display util
	 */

	exports.objDisplay = __webpack_require__(39);

	/*!
	 * Flag utility
	 */

	exports.flag = __webpack_require__(29);

	/*!
	 * Flag transferring utility
	 */

	exports.transferFlags = __webpack_require__(41);

	/*!
	 * Deep equal utility
	 */

	exports.eql = __webpack_require__(42);

	/*!
	 * Deep path value
	 */

	exports.getPathValue = __webpack_require__(50);

	/*!
	 * Deep path info
	 */

	exports.getPathInfo = __webpack_require__(51);

	/*!
	 * Check if a property exists
	 */

	exports.hasProperty = __webpack_require__(52);

	/*!
	 * Function name
	 */

	exports.getName = __webpack_require__(36);

	/*!
	 * add Property
	 */

	exports.addProperty = __webpack_require__(53);

	/*!
	 * add Method
	 */

	exports.addMethod = __webpack_require__(54);

	/*!
	 * overwrite Property
	 */

	exports.overwriteProperty = __webpack_require__(55);

	/*!
	 * overwrite Method
	 */

	exports.overwriteMethod = __webpack_require__(56);

	/*!
	 * Add a chainable method
	 */

	exports.addChainableMethod = __webpack_require__(57);

	/*!
	 * Overwrite chainable method
	 */

	exports.overwriteChainableMethod = __webpack_require__(58);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var flag = __webpack_require__(29);

	/**
	 * # test(object, expression)
	 *
	 * Test and object for expression.
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name test
	 */

	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate'),
	      expr = args[0];
	  return negate ? !expr : expr;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### flag(object, key, [value])
	 *
	 * Get or set a flag value on an object. If a
	 * value is provided it will be set, else it will
	 * return the currently set value or `undefined` if
	 * the value is not set.
	 *
	 *     utils.flag(this, 'foo', 'bar'); // setter
	 *     utils.flag(this, 'foo'); // getter, returns `bar`
	 *
	 * @param {Object} object constructed Assertion
	 * @param {String} key
	 * @param {Mixed} value (optional)
	 * @namespace Utils
	 * @name flag
	 * @api private
	 */

	module.exports = function (obj, key, value) {
	  var flags = obj.__flags || (obj.__flags = Object.create(null));
	  if (arguments.length === 3) {
	    flags[key] = value;
	  } else {
	    return flags[key];
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31);

/***/ },
/* 31 */
/***/ function(module, exports) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Primary Exports
	 */

	var exports = module.exports = getType;

	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */
	var objectTypeRegexp = /^\[object (.*)\]$/;

	function getType(obj) {
	  var type = Object.prototype.toString.call(obj).match(objectTypeRegexp)[1].toLowerCase();
	  // Let "new String('')" return 'object'
	  if (typeof Promise === 'function' && obj instanceof Promise) return 'promise';
	  // PhantomJS has type "DOMWindow" for null
	  if (obj === null) return 'null';
	  // PhantomJS has type "DOMWindow" for undefined
	  if (obj === undefined) return 'undefined';
	  return type;
	}

	exports.Library = Library;

	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */

	function Library() {
	  if (!(this instanceof Library)) return new Library();
	  this.tests = {};
	}

	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */

	Library.prototype.of = getType;

	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */

	Library.prototype.define = function (type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};

	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */

	Library.prototype.test = function (obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];

	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - expectTypes utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### expectTypes(obj, types)
	 *
	 * Ensures that the object being tested against is of a valid type.
	 *
	 *     utils.expectTypes(this, ['array', 'object', 'string']);
	 *
	 * @param {Mixed} obj constructed Assertion
	 * @param {Array} type A list of allowed types for this assertion
	 * @namespace Utils
	 * @name expectTypes
	 * @api public
	 */

	var AssertionError = __webpack_require__(26);
	var flag = __webpack_require__(29);
	var type = __webpack_require__(30);

	module.exports = function (obj, types) {
	  var obj = flag(obj, 'object');
	  types = types.map(function (t) {
	    return t.toLowerCase();
	  });
	  types.sort();

	  // Transforms ['lorem', 'ipsum'] into 'a lirum, or an ipsum'
	  var str = types.map(function (t, index) {
	    var art = ~['a', 'e', 'i', 'o', 'u'].indexOf(t.charAt(0)) ? 'an' : 'a';
	    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
	    return or + art + ' ' + t;
	  }).join(', ');

	  if (!types.some(function (expected) {
	    return type(obj) === expected;
	  })) {
	    throw new AssertionError('object tested must be ' + str + ', but ' + type(obj) + ' given');
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var flag = __webpack_require__(29),
	    getActual = __webpack_require__(34),
	    inspect = __webpack_require__(35),
	    objDisplay = __webpack_require__(39);

	/**
	 * ### .getMessage(object, message, negateMessage)
	 *
	 * Construct the error message based on flags
	 * and template tags. Template tags will return
	 * a stringified inspection of the object referenced.
	 *
	 * Message template tags:
	 * - `#{this}` current asserted object
	 * - `#{act}` actual value
	 * - `#{exp}` expected value
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name getMessage
	 * @api public
	 */

	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate'),
	      val = flag(obj, 'object'),
	      expected = args[3],
	      actual = getActual(obj, args),
	      msg = negate ? args[2] : args[1],
	      flagMsg = flag(obj, 'message');

	  if (typeof msg === "function") msg = msg();
	  msg = msg || '';
	  msg = msg.replace(/#\{this\}/g, function () {
	    return objDisplay(val);
	  }).replace(/#\{act\}/g, function () {
	    return objDisplay(actual);
	  }).replace(/#\{exp\}/g, function () {
	    return objDisplay(expected);
	  });

	  return flagMsg ? flagMsg + ': ' + msg : msg;
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	/*!
	 * Chai - getActual utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * # getActual(object, [actual])
	 *
	 * Returns the `actual` value for an Assertion
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name getActual
	 */

	module.exports = function (obj, args) {
	  return args.length > 4 ? args[4] : obj._obj;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// This is (almost) directly from Node.js utils
	// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

	var getName = __webpack_require__(36);
	var getProperties = __webpack_require__(37);
	var getEnumerableProperties = __webpack_require__(38);

	module.exports = inspect;

	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
	 *    properties of objects.
	 * @param {Number} depth Depth in which to descend in object. Default is 2.
	 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
	 *    output. Default is false (no coloring).
	 * @namespace Utils
	 * @name inspect
	 */
	function inspect(obj, showHidden, depth, colors) {
	  var ctx = {
	    showHidden: showHidden,
	    seen: [],
	    stylize: function (str) {
	      return str;
	    }
	  };
	  return formatValue(ctx, obj, typeof depth === 'undefined' ? 2 : depth);
	}

	// Returns true if object is a DOM element.
	var isDOMElement = function (object) {
	  if (typeof HTMLElement === 'object') {
	    return object instanceof HTMLElement;
	  } else {
	    return object && typeof object === 'object' && object.nodeType === 1 && typeof object.nodeName === 'string';
	  }
	};

	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (value && typeof value.inspect === 'function' &&
	  // Filter out the util module, it's inspect function is special
	  value.inspect !== exports.inspect &&
	  // Also filter out any prototype objects using the circular check.
	  !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes);
	    if (typeof ret !== 'string') {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // If this is a DOM element, try to get the outer HTML.
	  if (isDOMElement(value)) {
	    if ('outerHTML' in value) {
	      return value.outerHTML;
	      // This value does not have an outerHTML attribute,
	      //   it could still be an XML element
	    } else {
	      // Attempt to serialize it
	      try {
	        if (document.xmlVersion) {
	          var xmlSerializer = new XMLSerializer();
	          return xmlSerializer.serializeToString(value);
	        } else {
	          // Firefox 11- do not support outerHTML
	          //   It does, however, support innerHTML
	          //   Use the following to render the element
	          var ns = "http://www.w3.org/1999/xhtml";
	          var container = document.createElementNS(ns, '_');

	          container.appendChild(value.cloneNode(false));
	          html = container.innerHTML.replace('><', '>' + value.innerHTML + '<');
	          container.innerHTML = '';
	          return html;
	        }
	      } catch (err) {
	        // This could be a non-native DOM implementation,
	        //   continue with the normal flow:
	        //   printing the element as if it is an object.
	      }
	    }
	  }

	  // Look up the keys of the object.
	  var visibleKeys = getEnumerableProperties(value);
	  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

	  // Some type of object without properties can be shortcutted.
	  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
	  // a `stack` plus `description` property; ignore those for consistency.
	  if (keys.length === 0 || isError(value) && (keys.length === 1 && keys[0] === 'stack' || keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')) {
	    if (typeof value === 'function') {
	      var name = getName(value);
	      var nameSuffix = name ? ': ' + name : '';
	      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '',
	      array = false,
	      braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (typeof value === 'function') {
	    var name = getName(value);
	    var nameSuffix = name ? ': ' + name : '';
	    base = ' [Function' + nameSuffix + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    return formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function (key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}

	function formatPrimitive(ctx, value) {
	  switch (typeof value) {
	    case 'undefined':
	      return ctx.stylize('undefined', 'undefined');

	    case 'string':
	      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
	      return ctx.stylize(simple, 'string');

	    case 'number':
	      if (value === 0 && 1 / value === -Infinity) {
	        return ctx.stylize('-0', 'number');
	      }
	      return ctx.stylize('' + value, 'number');

	    case 'boolean':
	      return ctx.stylize('' + value, 'boolean');
	  }
	  // For some reason typeof null is "object", so special case here.
	  if (value === null) {
	    return ctx.stylize('null', 'null');
	  }
	}

	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}

	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function (key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
	    }
	  });
	  return output;
	}

	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str;
	  if (value.__lookupGetter__) {
	    if (value.__lookupGetter__(key)) {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Getter/Setter]', 'special');
	      } else {
	        str = ctx.stylize('[Getter]', 'special');
	      }
	    } else {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Setter]', 'special');
	      }
	    }
	  }
	  if (visibleKeys.indexOf(key) < 0) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(value[key]) < 0) {
	      if (recurseTimes === null) {
	        str = formatValue(ctx, value[key], null);
	      } else {
	        str = formatValue(ctx, value[key], recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function (line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function (line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (typeof name === 'undefined') {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}

	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function (prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}

	function isArray(ar) {
	  return Array.isArray(ar) || typeof ar === 'object' && objectToString(ar) === '[object Array]';
	}

	function isRegExp(re) {
	  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
	}

	function isDate(d) {
	  return typeof d === 'object' && objectToString(d) === '[object Date]';
	}

	function isError(e) {
	  return typeof e === 'object' && objectToString(e) === '[object Error]';
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	/*!
	 * Chai - getName utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * # getName(func)
	 *
	 * Gets the name of a function, in a cross-browser way.
	 *
	 * @param {Function} a function (usually a constructor)
	 * @namespace Utils
	 * @name getName
	 */

	module.exports = function (func) {
	  if (func.name) return func.name;

	  var match = /^\s?function ([^(]*)\(/.exec(func);
	  return match && match[1] ? match[1] : "";
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	/*!
	 * Chai - getProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### .getProperties(object)
	 *
	 * This allows the retrieval of property names of an object, enumerable or not,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @namespace Utils
	 * @name getProperties
	 * @api public
	 */

	module.exports = function getProperties(object) {
	  var result = Object.getOwnPropertyNames(object);

	  function addProperty(property) {
	    if (result.indexOf(property) === -1) {
	      result.push(property);
	    }
	  }

	  var proto = Object.getPrototypeOf(object);
	  while (proto !== null) {
	    Object.getOwnPropertyNames(proto).forEach(addProperty);
	    proto = Object.getPrototypeOf(proto);
	  }

	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	/*!
	 * Chai - getEnumerableProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### .getEnumerableProperties(object)
	 *
	 * This allows the retrieval of enumerable property names of an object,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @namespace Utils
	 * @name getEnumerableProperties
	 * @api public
	 */

	module.exports = function getEnumerableProperties(object) {
	  var result = [];
	  for (var name in object) {
	    result.push(name);
	  }
	  return result;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependancies
	 */

	var inspect = __webpack_require__(35);
	var config = __webpack_require__(40);

	/**
	 * ### .objDisplay (object)
	 *
	 * Determines if an object or an array matches
	 * criteria to be inspected in-line for error
	 * messages or should be truncated.
	 *
	 * @param {Mixed} javascript object to inspect
	 * @name objDisplay
	 * @namespace Utils
	 * @api public
	 */

	module.exports = function (obj) {
	  var str = inspect(obj),
	      type = Object.prototype.toString.call(obj);

	  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
	    if (type === '[object Function]') {
	      return !obj.name || obj.name === '' ? '[Function]' : '[Function: ' + obj.name + ']';
	    } else if (type === '[object Array]') {
	      return '[ Array(' + obj.length + ') ]';
	    } else if (type === '[object Object]') {
	      var keys = Object.keys(obj),
	          kstr = keys.length > 2 ? keys.splice(0, 2).join(', ') + ', ...' : keys.join(', ');
	      return '{ Object (' + kstr + ') }';
	    } else {
	      return str;
	    }
	  } else {
	    return str;
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = {

	  /**
	   * ### config.includeStack
	   *
	   * User configurable property, influences whether stack trace
	   * is included in Assertion error message. Default of false
	   * suppresses stack trace in the error message.
	   *
	   *     chai.config.includeStack = true;  // enable stack on error
	   *
	   * @param {Boolean}
	   * @api public
	   */

	  includeStack: false,

	  /**
	   * ### config.showDiff
	   *
	   * User configurable property, influences whether or not
	   * the `showDiff` flag should be included in the thrown
	   * AssertionErrors. `false` will always be `false`; `true`
	   * will be true when the assertion has requested a diff
	   * be shown.
	   *
	   * @param {Boolean}
	   * @api public
	   */

	  showDiff: true,

	  /**
	   * ### config.truncateThreshold
	   *
	   * User configurable property, sets length threshold for actual and
	   * expected values in assertion errors. If this threshold is exceeded, for
	   * example for large data structures, the value is replaced with something
	   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
	   *
	   * Set it to zero if you want to disable truncating altogether.
	   *
	   * This is especially userful when doing assertions on arrays: having this
	   * set to a reasonable large value makes the failure messages readily
	   * inspectable.
	   *
	   *     chai.config.truncateThreshold = 0;  // disable truncating
	   *
	   * @param {Number}
	   * @api public
	   */

	  truncateThreshold: 40

	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	/*!
	 * Chai - transferFlags utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### transferFlags(assertion, object, includeAll = true)
	 *
	 * Transfer all the flags for `assertion` to `object`. If
	 * `includeAll` is set to `false`, then the base Chai
	 * assertion flags (namely `object`, `ssfi`, and `message`)
	 * will not be transferred.
	 *
	 *
	 *     var newAssertion = new Assertion();
	 *     utils.transferFlags(assertion, newAssertion);
	 *
	 *     var anotherAsseriton = new Assertion(myObj);
	 *     utils.transferFlags(assertion, anotherAssertion, false);
	 *
	 * @param {Assertion} assertion the assertion to transfer the flags from
	 * @param {Object} object the object to transfer the flags to; usually a new assertion
	 * @param {Boolean} includeAll
	 * @namespace Utils
	 * @name transferFlags
	 * @api private
	 */

	module.exports = function (assertion, object, includeAll) {
	  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

	  if (!object.__flags) {
	    object.__flags = Object.create(null);
	  }

	  includeAll = arguments.length === 3 ? includeAll : true;

	  for (var flag in flags) {
	    if (includeAll || flag !== 'object' && flag !== 'ssfi' && flag != 'message') {
	      object.__flags[flag] = flags[flag];
	    }
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(43);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependencies
	 */

	var type = __webpack_require__(44);

	/*!
	 * Buffer.isBuffer browser shim
	 */

	var Buffer;
	try {
	  Buffer = __webpack_require__(46).Buffer;
	} catch (ex) {
	  Buffer = {};
	  Buffer.isBuffer = function () {
	    return false;
	  };
	}

	/*!
	 * Primary Export
	 */

	module.exports = deepEqual;

	/**
	 * Assert super-strict (egal) equality between
	 * two objects of any type.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @param {Array} memoised (optional)
	 * @return {Boolean} equal match
	 */

	function deepEqual(a, b, m) {
	  if (sameValue(a, b)) {
	    return true;
	  } else if ('date' === type(a)) {
	    return dateEqual(a, b);
	  } else if ('regexp' === type(a)) {
	    return regexpEqual(a, b);
	  } else if (Buffer.isBuffer(a)) {
	    return bufferEqual(a, b);
	  } else if ('arguments' === type(a)) {
	    return argumentsEqual(a, b, m);
	  } else if (!typeEqual(a, b)) {
	    return false;
	  } else if ('object' !== type(a) && 'object' !== type(b) && 'array' !== type(a) && 'array' !== type(b)) {
	    return sameValue(a, b);
	  } else {
	    return objectEqual(a, b, m);
	  }
	}

	/*!
	 * Strict (egal) equality test. Ensures that NaN always
	 * equals NaN and `-0` does not equal `+0`.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} equal match
	 */

	function sameValue(a, b) {
	  if (a === b) return a !== 0 || 1 / a === 1 / b;
	  return a !== a && b !== b;
	}

	/*!
	 * Compare the types of two given objects and
	 * return if they are equal. Note that an Array
	 * has a type of `array` (not `object`) and arguments
	 * have a type of `arguments` (not `array`/`object`).
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function typeEqual(a, b) {
	  return type(a) === type(b);
	}

	/*!
	 * Compare two Date objects by asserting that
	 * the time values are equal using `saveValue`.
	 *
	 * @param {Date} a
	 * @param {Date} b
	 * @return {Boolean} result
	 */

	function dateEqual(a, b) {
	  if ('date' !== type(b)) return false;
	  return sameValue(a.getTime(), b.getTime());
	}

	/*!
	 * Compare two regular expressions by converting them
	 * to string and checking for `sameValue`.
	 *
	 * @param {RegExp} a
	 * @param {RegExp} b
	 * @return {Boolean} result
	 */

	function regexpEqual(a, b) {
	  if ('regexp' !== type(b)) return false;
	  return sameValue(a.toString(), b.toString());
	}

	/*!
	 * Assert deep equality of two `arguments` objects.
	 * Unfortunately, these must be sliced to arrays
	 * prior to test to ensure no bad behavior.
	 *
	 * @param {Arguments} a
	 * @param {Arguments} b
	 * @param {Array} memoize (optional)
	 * @return {Boolean} result
	 */

	function argumentsEqual(a, b, m) {
	  if ('arguments' !== type(b)) return false;
	  a = [].slice.call(a);
	  b = [].slice.call(b);
	  return deepEqual(a, b, m);
	}

	/*!
	 * Get enumerable properties of a given object.
	 *
	 * @param {Object} a
	 * @return {Array} property names
	 */

	function enumerable(a) {
	  var res = [];
	  for (var key in a) res.push(key);
	  return res;
	}

	/*!
	 * Simple equality for flat iterable objects
	 * such as Arrays or Node.js buffers.
	 *
	 * @param {Iterable} a
	 * @param {Iterable} b
	 * @return {Boolean} result
	 */

	function iterableEqual(a, b) {
	  if (a.length !== b.length) return false;

	  var i = 0;
	  var match = true;

	  for (; i < a.length; i++) {
	    if (a[i] !== b[i]) {
	      match = false;
	      break;
	    }
	  }

	  return match;
	}

	/*!
	 * Extension to `iterableEqual` specifically
	 * for Node.js Buffers.
	 *
	 * @param {Buffer} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function bufferEqual(a, b) {
	  if (!Buffer.isBuffer(b)) return false;
	  return iterableEqual(a, b);
	}

	/*!
	 * Block for `objectEqual` ensuring non-existing
	 * values don't get in.
	 *
	 * @param {Mixed} object
	 * @return {Boolean} result
	 */

	function isValue(a) {
	  return a !== null && a !== undefined;
	}

	/*!
	 * Recursively check the equality of two objects.
	 * Once basic sameness has been established it will
	 * defer to `deepEqual` for each enumerable key
	 * in the object.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */

	function objectEqual(a, b, m) {
	  if (!isValue(a) || !isValue(b)) {
	    return false;
	  }

	  if (a.prototype !== b.prototype) {
	    return false;
	  }

	  var i;
	  if (m) {
	    for (i = 0; i < m.length; i++) {
	      if (m[i][0] === a && m[i][1] === b || m[i][0] === b && m[i][1] === a) {
	        return true;
	      }
	    }
	  } else {
	    m = [];
	  }

	  try {
	    var ka = enumerable(a);
	    var kb = enumerable(b);
	  } catch (ex) {
	    return false;
	  }

	  ka.sort();
	  kb.sort();

	  if (!iterableEqual(ka, kb)) {
	    return false;
	  }

	  m.push([a, b]);

	  var key;
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], m)) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45);

/***/ },
/* 45 */
/***/ function(module, exports) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Primary Exports
	 */

	var exports = module.exports = getType;

	/*!
	 * Detectable javascript natives
	 */

	var natives = {
	  '[object Array]': 'array',
	  '[object RegExp]': 'regexp',
	  '[object Function]': 'function',
	  '[object Arguments]': 'arguments',
	  '[object Date]': 'date'
	};

	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */

	function getType(obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	}

	exports.Library = Library;

	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */

	function Library() {
	  this.tests = {};
	}

	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */

	Library.prototype.of = getType;

	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */

	Library.prototype.define = function (type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};

	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */

	Library.prototype.test = function (obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];

	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict';

	var base64 = __webpack_require__(47);
	var ieee754 = __webpack_require__(48);
	var isArray = __webpack_require__(49);

	exports.Buffer = Buffer;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength();

	function typedArraySupport() {
	  try {
	    var arr = new Uint8Array(1);
	    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () {
	        return 42;
	      } };
	    return arr.foo() === 42 && // typed array instances can be augmented
	    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
	  } catch (e) {
	    return false;
	  }
	}

	function kMaxLength() {
	  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
	}

	function createBuffer(that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length');
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }

	  return that;
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer(arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length);
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error('If encoding is specified then the first argument must be a string');
	    }
	    return allocUnsafe(this, arg);
	  }
	  return from(this, arg, encodingOrOffset, length);
	}

	Buffer.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr;
	};

	function from(that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length);
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset);
	  }

	  return fromObject(that, value);
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length);
	};

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    });
	  }
	}

	function assertSize(size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number');
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative');
	  }
	}

	function alloc(that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size);
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
	  }
	  return createBuffer(that, size);
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding);
	};

	function allocUnsafe(that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that;
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size);
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size);
	};

	function fromString(that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding');
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that;
	}

	function fromArrayLike(that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that;
	}

	function fromArrayBuffer(that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds');
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds');
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that;
	}

	function fromObject(that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that;
	    }

	    obj.copy(that, 0, 0, len);
	    return that;
	  }

	  if (obj) {
	    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0);
	      }
	      return fromArrayLike(that, obj);
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data);
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
	}

	function checked(length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
	  }
	  return length | 0;
	}

	function SlowBuffer(length) {
	  if (+length != length) {
	    // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer.alloc(+length);
	}

	Buffer.isBuffer = function isBuffer(b) {
	  return !!(b != null && b._isBuffer);
	};

	Buffer.compare = function compare(a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers');
	  }

	  if (a === b) return 0;

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }

	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	Buffer.isEncoding = function isEncoding(encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true;
	    default:
	      return false;
	  }
	};

	Buffer.concat = function concat(list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers');
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0);
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers');
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer;
	};

	function byteLength(string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length;
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength;
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0;

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len;
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length;
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2;
	      case 'hex':
	        return len >>> 1;
	      case 'base64':
	        return base64ToBytes(string).length;
	      default:
	        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString(encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return '';
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return '';
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return '';
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end);

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end);

	      case 'ascii':
	        return asciiSlice(this, start, end);

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end);

	      case 'base64':
	        return base64Slice(this, start, end);

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end);

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;

	function swap(b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16() {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits');
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this;
	};

	Buffer.prototype.swap32 = function swap32() {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits');
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this;
	};

	Buffer.prototype.swap64 = function swap64() {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits');
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this;
	};

	Buffer.prototype.toString = function toString() {
	  var length = this.length | 0;
	  if (length === 0) return '';
	  if (arguments.length === 0) return utf8Slice(this, 0, length);
	  return slowToString.apply(this, arguments);
	};

	Buffer.prototype.equals = function equals(b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
	  if (this === b) return true;
	  return Buffer.compare(this, b) === 0;
	};

	Buffer.prototype.inspect = function inspect() {
	  var str = '';
	  var max = exports.INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>';
	};

	Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer');
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index');
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0;
	  }
	  if (thisStart >= thisEnd) {
	    return -1;
	  }
	  if (start >= end) {
	    return 1;
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0;

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break;
	    }
	  }

	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1;

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset; // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : buffer.length - 1;
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1;else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;else return -1;
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1;
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
	      }
	    }
	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
	  }

	  throw new TypeError('val must be string, number or Buffer');
	}

	function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1;
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read(buf, i) {
	    if (indexSize === 1) {
	      return buf[i];
	    } else {
	      return buf.readUInt16BE(i * indexSize);
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break;
	        }
	      }
	      if (found) return i;
	    }
	  }

	  return -1;
	}

	Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1;
	};

	Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
	};

	function hexWrite(buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i;
	    buf[offset + i] = parsed;
	  }
	  return i;
	}

	function utf8Write(buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
	}

	function asciiWrite(buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length);
	}

	function latin1Write(buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length);
	}

	function base64Write(buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length);
	}

	function ucs2Write(buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
	}

	Buffer.prototype.write = function write(string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	    // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds');
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length);

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length);

	      case 'ascii':
	        return asciiWrite(this, string, offset, length);

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length);

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length);

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length);

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON() {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  };
	};

	function base64Slice(buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf);
	  } else {
	    return base64.fromByteArray(buf.slice(start, end));
	  }
	}

	function utf8Slice(buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break;
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res);
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray(codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
	  }
	  return res;
	}

	function asciiSlice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret;
	}

	function latin1Slice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret;
	}

	function hexSlice(buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out;
	}

	function utf16leSlice(buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res;
	}

	Buffer.prototype.slice = function slice(start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf;
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset(offset, ext, length) {
	  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
	}

	Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val;
	};

	Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val;
	};

	Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset];
	};

	Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | this[offset + 1] << 8;
	};

	Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] << 8 | this[offset + 1];
	};

	Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
	};

	Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
	};

	Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val;
	};

	Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val;
	};

	Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return this[offset];
	  return (0xff - this[offset] + 1) * -1;
	};

	Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | this[offset + 1] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};

	Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | this[offset] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};

	Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
	};

	Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
	};

	Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, true, 23, 4);
	};

	Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, false, 23, 4);
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, true, 52, 8);
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, false, 52, 8);
	};

	function checkInt(buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = value & 0xff;
	  return offset + 1;
	};

	function objectWriteUInt16(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};

	function objectWriteUInt32(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = value >>> 24;
	    this[offset + 2] = value >>> 16;
	    this[offset + 1] = value >>> 8;
	    this[offset] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = value & 0xff;
	  return offset + 1;
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	    this[offset + 2] = value >>> 16;
	    this[offset + 3] = value >>> 24;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};

	function checkIEEE754(buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	  if (offset < 0) throw new RangeError('Index out of range');
	}

	function writeFloat(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4;
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert);
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert);
	};

	function writeDouble(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8;
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert);
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert);
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy(target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0;
	  if (target.length === 0 || this.length === 0) return 0;

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds');
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
	  if (end < 0) throw new RangeError('sourceEnd out of bounds');

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
	  }

	  return len;
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill(val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string');
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding);
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index');
	  }

	  if (end <= start) {
	    return this;
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this;
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean(str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return '';
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str;
	}

	function stringtrim(str) {
	  if (str.trim) return str.trim();
	  return str.replace(/^\s+|\s+$/g, '');
	}

	function toHex(n) {
	  if (n < 16) return '0' + n.toString(16);
	  return n.toString(16);
	}

	function utf8ToBytes(string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue;
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue;
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break;
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break;
	      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break;
	      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break;
	      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else {
	      throw new Error('Invalid code point');
	    }
	  }

	  return bytes;
	}

	function asciiToBytes(str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray;
	}

	function utf16leToBytes(str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break;

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray;
	}

	function base64ToBytes(str) {
	  return base64.toByteArray(base64clean(str));
	}

	function blitBuffer(src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if (i + offset >= dst.length || i >= src.length) break;
	    dst[i + offset] = src[i];
	  }
	  return i;
	}

	function isnan(val) {
	  return val !== val; // eslint-disable-line no-self-compare
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46).Buffer, (function() { return this; }())))

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

	function init() {
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	init();

	function toByteArray(b64) {
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4');
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = tmp >> 16 & 0xFF;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr;
	}

	function tripletToBase64(num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}

	function encodeChunk(uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('');
	}

	function fromByteArray(uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[tmp << 4 & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    output += lookup[tmp >> 10];
	    output += lookup[tmp >> 4 & 0x3F];
	    output += lookup[tmp << 2 & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('');
	}

/***/ },
/* 48 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? nBytes - 1 : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & (1 << -nBits) - 1;
	  s >>= -nBits;
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : (s ? -1 : 1) * Infinity;
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
	  var i = isLE ? 0 : nBytes - 1;
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */

	var getPathInfo = __webpack_require__(51);

	/**
	 * ### .getPathValue(path, object)
	 *
	 * This allows the retrieval of values in an
	 * object given a string path.
	 *
	 *     var obj = {
	 *         prop1: {
	 *             arr: ['a', 'b', 'c']
	 *           , str: 'Hello'
	 *         }
	 *       , prop2: {
	 *             arr: [ { nested: 'Universe' } ]
	 *           , str: 'Hello again!'
	 *         }
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     getPathValue('prop1.str', obj); // Hello
	 *     getPathValue('prop1.att[2]', obj); // b
	 *     getPathValue('prop2.arr[0].nested', obj); // Universe
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} value or `undefined`
	 * @namespace Utils
	 * @name getPathValue
	 * @api public
	 */
	module.exports = function (path, obj) {
	  var info = getPathInfo(path, obj);
	  return info.value;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathInfo utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var hasProperty = __webpack_require__(52);

	/**
	 * ### .getPathInfo(path, object)
	 *
	 * This allows the retrieval of property info in an
	 * object given a string path.
	 *
	 * The path info consists of an object with the
	 * following properties:
	 *
	 * * parent - The parent object of the property referenced by `path`
	 * * name - The name of the final property, a number if it was an array indexer
	 * * value - The value of the property, if it exists, otherwise `undefined`
	 * * exists - Whether the property exists or not
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} info
	 * @namespace Utils
	 * @name getPathInfo
	 * @api public
	 */

	module.exports = function getPathInfo(path, obj) {
	  var parsed = parsePath(path),
	      last = parsed[parsed.length - 1];

	  var info = {
	    parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
	    name: last.p || last.i,
	    value: _getPathValue(parsed, obj)
	  };
	  info.exists = hasProperty(info.name, info.parent);

	  return info;
	};

	/*!
	 * ## parsePath(path)
	 *
	 * Helper function used to parse string object
	 * paths. Use in conjunction with `_getPathValue`.
	 *
	 *      var parsed = parsePath('myobject.property.subprop');
	 *
	 * ### Paths:
	 *
	 * * Can be as near infinitely deep and nested
	 * * Arrays are also valid using the formal `myobject.document[3].property`.
	 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
	 *
	 * @param {String} path
	 * @returns {Object} parsed
	 * @api private
	 */

	function parsePath(path) {
	  var str = path.replace(/([^\\])\[/g, '$1.['),
	      parts = str.match(/(\\\.|[^.]+?)+/g);
	  return parts.map(function (value) {
	    var re = /^\[(\d+)\]$/,
	        mArr = re.exec(value);
	    if (mArr) return { i: parseFloat(mArr[1]) };else return { p: value.replace(/\\([.\[\]])/g, '$1') };
	  });
	}

	/*!
	 * ## _getPathValue(parsed, obj)
	 *
	 * Helper companion function for `.parsePath` that returns
	 * the value located at the parsed address.
	 *
	 *      var value = getPathValue(parsed, obj);
	 *
	 * @param {Object} parsed definition from `parsePath`.
	 * @param {Object} object to search against
	 * @param {Number} object to search against
	 * @returns {Object|Undefined} value
	 * @api private
	 */

	function _getPathValue(parsed, obj, index) {
	  var tmp = obj,
	      res;

	  index = index === undefined ? parsed.length : index;

	  for (var i = 0, l = index; i < l; i++) {
	    var part = parsed[i];
	    if (tmp) {
	      if ('undefined' !== typeof part.p) tmp = tmp[part.p];else if ('undefined' !== typeof part.i) tmp = tmp[part.i];
	      if (i == l - 1) res = tmp;
	    } else {
	      res = undefined;
	    }
	  }
	  return res;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - hasProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var type = __webpack_require__(30);

	/**
	 * ### .hasProperty(object, name)
	 *
	 * This allows checking whether an object has
	 * named property or numeric array index.
	 *
	 * Basically does the same thing as the `in`
	 * operator but works properly with natives
	 * and null/undefined values.
	 *
	 *     var obj = {
	 *         arr: ['a', 'b', 'c']
	 *       , str: 'Hello'
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     hasProperty('str', obj);  // true
	 *     hasProperty('constructor', obj);  // true
	 *     hasProperty('bar', obj);  // false
	 *
	 *     hasProperty('length', obj.str); // true
	 *     hasProperty(1, obj.str);  // true
	 *     hasProperty(5, obj.str);  // false
	 *
	 *     hasProperty('length', obj.arr);  // true
	 *     hasProperty(2, obj.arr);  // true
	 *     hasProperty(3, obj.arr);  // false
	 *
	 * @param {Objuect} object
	 * @param {String|Number} name
	 * @returns {Boolean} whether it exists
	 * @namespace Utils
	 * @name getPathInfo
	 * @api public
	 */

	var literals = {
	  'number': Number,
	  'string': String
	};

	module.exports = function hasProperty(name, obj) {
	  var ot = type(obj);

	  // Bad Object, obviously no props at all
	  if (ot === 'null' || ot === 'undefined') return false;

	  // The `in` operator does not work with certain literals
	  // box these before the check
	  if (literals[ot] && typeof obj !== 'object') obj = new literals[ot](obj);

	  return name in obj;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(40);
	var flag = __webpack_require__(29);

	/**
	 * ### addProperty (ctx, name, getter)
	 *
	 * Adds a property to the prototype of an object.
	 *
	 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.instanceof(Foo);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.foo;
	 *
	 * @param {Object} ctx object to which the property is added
	 * @param {String} name of property to add
	 * @param {Function} getter function to be used for name
	 * @namespace Utils
	 * @name addProperty
	 * @api public
	 */

	module.exports = function (ctx, name, getter) {
	  Object.defineProperty(ctx, name, { get: function addProperty() {
	      var old_ssfi = flag(this, 'ssfi');
	      if (old_ssfi && config.includeStack === false) flag(this, 'ssfi', addProperty);

	      var result = getter.call(this);
	      return result === undefined ? this : result;
	    },
	    configurable: true
	  });
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(40);

	/**
	 * ### .addMethod (ctx, name, method)
	 *
	 * Adds a method to the prototype of an object.
	 *
	 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for name
	 * @namespace Utils
	 * @name addMethod
	 * @api public
	 */
	var flag = __webpack_require__(29);

	module.exports = function (ctx, name, method) {
	  ctx[name] = function () {
	    var old_ssfi = flag(this, 'ssfi');
	    if (old_ssfi && config.includeStack === false) flag(this, 'ssfi', ctx[name]);
	    var result = method.apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteProperty (ctx, name, fn)
	 *
	 * Overwites an already existing property getter and provides
	 * access to previous value. Must return function to use as getter.
	 *
	 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
	 *       return function () {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.name).to.equal('bar');
	 *         } else {
	 *           _super.call(this);
	 *         }
	 *       }
	 *     });
	 *
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.ok;
	 *
	 * @param {Object} ctx object whose property is to be overwritten
	 * @param {String} name of property to overwrite
	 * @param {Function} getter function that returns a getter function to be used for name
	 * @namespace Utils
	 * @name overwriteProperty
	 * @api public
	 */

	module.exports = function (ctx, name, getter) {
	  var _get = Object.getOwnPropertyDescriptor(ctx, name),
	      _super = function () {};

	  if (_get && 'function' === typeof _get.get) _super = _get.get;

	  Object.defineProperty(ctx, name, { get: function () {
	      var result = getter(_super).call(this);
	      return result === undefined ? this : result;
	    },
	    configurable: true
	  });
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteMethod (ctx, name, fn)
	 *
	 * Overwites an already existing method and provides
	 * access to previous function. Must return function
	 * to be used for name.
	 *
	 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
	 *       return function (str) {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.value).to.equal(str);
	 *         } else {
	 *           _super.apply(this, arguments);
	 *         }
	 *       }
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.equal('bar');
	 *
	 * @param {Object} ctx object whose method is to be overwritten
	 * @param {String} name of method to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @namespace Utils
	 * @name overwriteMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method) {
	  var _method = ctx[name],
	      _super = function () {
	    return this;
	  };

	  if (_method && 'function' === typeof _method) _super = _method;

	  ctx[name] = function () {
	    var result = method(_super).apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/*!
	 * Module dependencies
	 */

	var transferFlags = __webpack_require__(41);
	var flag = __webpack_require__(29);
	var config = __webpack_require__(40);

	/*!
	 * Module variables
	 */

	// Check whether `__proto__` is supported
	var hasProtoSupport = '__proto__' in Object;

	// Without `__proto__` support, this module will need to add properties to a function.
	// However, some Function.prototype methods cannot be overwritten,
	// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
	var excludeNames = /^(?:length|name|arguments|caller)$/;

	// Cache `Function` properties
	var call = Function.prototype.call,
	    apply = Function.prototype.apply;

	/**
	 * ### addChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Adds a method to an object, such that the method can also be chained.
	 *
	 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
	 *
	 * The result can then be used as both a method assertion, executing both `method` and
	 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *     expect(fooStr).to.be.foo.equal('foo');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for `name`, when called
	 * @param {Function} chainingBehavior function to be called every time the property is accessed
	 * @namespace Utils
	 * @name addChainableMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method, chainingBehavior) {
	  if (typeof chainingBehavior !== 'function') {
	    chainingBehavior = function () {};
	  }

	  var chainableBehavior = {
	    method: method,
	    chainingBehavior: chainingBehavior
	  };

	  // save the methods so we can overwrite them later, if we need to.
	  if (!ctx.__methods) {
	    ctx.__methods = {};
	  }
	  ctx.__methods[name] = chainableBehavior;

	  Object.defineProperty(ctx, name, { get: function () {
	      chainableBehavior.chainingBehavior.call(this);

	      var assert = function assert() {
	        var old_ssfi = flag(this, 'ssfi');
	        if (old_ssfi && config.includeStack === false) flag(this, 'ssfi', assert);
	        var result = chainableBehavior.method.apply(this, arguments);
	        return result === undefined ? this : result;
	      };

	      // Use `__proto__` if available
	      if (hasProtoSupport) {
	        // Inherit all properties from the object by replacing the `Function` prototype
	        var prototype = assert.__proto__ = Object.create(this);
	        // Restore the `call` and `apply` methods from `Function`
	        prototype.call = call;
	        prototype.apply = apply;
	      }
	      // Otherwise, redefine all properties (slow!)
	      else {
	          var asserterNames = Object.getOwnPropertyNames(ctx);
	          asserterNames.forEach(function (asserterName) {
	            if (!excludeNames.test(asserterName)) {
	              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
	              Object.defineProperty(assert, asserterName, pd);
	            }
	          });
	        }

	      transferFlags(this, assert);
	      return assert;
	    },
	    configurable: true
	  });
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteChainableMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	/**
	 * ### overwriteChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Overwites an already existing chainable method
	 * and provides access to the previous function or
	 * property.  Must return functions to be used for
	 * name.
	 *
	 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
	 *       function (_super) {
	 *       }
	 *     , function (_super) {
	 *       }
	 *     );
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.have.length(3);
	 *     expect(myFoo).to.have.length.above(3);
	 *
	 * @param {Object} ctx object whose method / property is to be overwritten
	 * @param {String} name of method / property to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @param {Function} chainingBehavior function that returns a function to be used for property
	 * @namespace Utils
	 * @name overwriteChainableMethod
	 * @api public
	 */

	module.exports = function (ctx, name, method, chainingBehavior) {
	  var chainableBehavior = ctx.__methods[name];

	  var _chainingBehavior = chainableBehavior.chainingBehavior;
	  chainableBehavior.chainingBehavior = function () {
	    var result = chainingBehavior(_chainingBehavior).call(this);
	    return result === undefined ? this : result;
	  };

	  var _method = chainableBehavior.method;
	  chainableBehavior.method = function () {
	    var result = method(_method).apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	var config = __webpack_require__(40);

	module.exports = function (_chai, util) {
	  /*!
	   * Module dependencies.
	   */

	  var AssertionError = _chai.AssertionError,
	      flag = util.flag;

	  /*!
	   * Module export.
	   */

	  _chai.Assertion = Assertion;

	  /*!
	   * Assertion Constructor
	   *
	   * Creates object for chaining.
	   *
	   * @api private
	   */

	  function Assertion(obj, msg, stack) {
	    flag(this, 'ssfi', stack || arguments.callee);
	    flag(this, 'object', obj);
	    flag(this, 'message', msg);
	  }

	  Object.defineProperty(Assertion, 'includeStack', {
	    get: function () {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      return config.includeStack;
	    },
	    set: function (value) {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      config.includeStack = value;
	    }
	  });

	  Object.defineProperty(Assertion, 'showDiff', {
	    get: function () {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      return config.showDiff;
	    },
	    set: function (value) {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      config.showDiff = value;
	    }
	  });

	  Assertion.addProperty = function (name, fn) {
	    util.addProperty(this.prototype, name, fn);
	  };

	  Assertion.addMethod = function (name, fn) {
	    util.addMethod(this.prototype, name, fn);
	  };

	  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
	    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };

	  Assertion.overwriteProperty = function (name, fn) {
	    util.overwriteProperty(this.prototype, name, fn);
	  };

	  Assertion.overwriteMethod = function (name, fn) {
	    util.overwriteMethod(this.prototype, name, fn);
	  };

	  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
	    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };

	  /**
	   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
	   *
	   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
	   *
	   * @name assert
	   * @param {Philosophical} expression to be tested
	   * @param {String|Function} message or function that returns message to display if expression fails
	   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
	   * @param {Mixed} expected value (remember to check for negation)
	   * @param {Mixed} actual (optional) will default to `this.obj`
	   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
	   * @api private
	   */

	  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
	    var ok = util.test(this, arguments);
	    if (true !== showDiff) showDiff = false;
	    if (true !== config.showDiff) showDiff = false;

	    if (!ok) {
	      var msg = util.getMessage(this, arguments),
	          actual = util.getActual(this, arguments);
	      throw new AssertionError(msg, {
	        actual: actual,
	        expected: expected,
	        showDiff: showDiff
	      }, config.includeStack ? this.assert : flag(this, 'ssfi'));
	    }
	  };

	  /*!
	   * ### ._obj
	   *
	   * Quick reference to stored `actual` value for plugin developers.
	   *
	   * @api private
	   */

	  Object.defineProperty(Assertion.prototype, '_obj', { get: function () {
	      return flag(this, 'object');
	    },
	    set: function (val) {
	      flag(this, 'object', val);
	    }
	  });
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, _) {
	  var Assertion = chai.Assertion,
	      toString = Object.prototype.toString,
	      flag = _.flag;

	  /**
	   * ### Language Chains
	   *
	   * The following are provided as chainable getters to
	   * improve the readability of your assertions. They
	   * do not provide testing capabilities unless they
	   * have been overwritten by a plugin.
	   *
	   * **Chains**
	   *
	   * - to
	   * - be
	   * - been
	   * - is
	   * - that
	   * - which
	   * - and
	   * - has
	   * - have
	   * - with
	   * - at
	   * - of
	   * - same
	   *
	   * @name language chains
	   * @namespace BDD
	   * @api public
	   */

	  ['to', 'be', 'been', 'is', 'and', 'has', 'have', 'with', 'that', 'which', 'at', 'of', 'same'].forEach(function (chain) {
	    Assertion.addProperty(chain, function () {
	      return this;
	    });
	  });

	  /**
	   * ### .not
	   *
	   * Negates any of assertions following in the chain.
	   *
	   *     expect(foo).to.not.equal('bar');
	   *     expect(goodFn).to.not.throw(Error);
	   *     expect({ foo: 'baz' }).to.have.property('foo')
	   *       .and.not.equal('bar');
	   *
	   * @name not
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('not', function () {
	    flag(this, 'negate', true);
	  });

	  /**
	   * ### .deep
	   *
	   * Sets the `deep` flag, later used by the `equal` and
	   * `property` assertions.
	   *
	   *     expect(foo).to.deep.equal({ bar: 'baz' });
	   *     expect({ foo: { bar: { baz: 'quux' } } })
	   *       .to.have.deep.property('foo.bar.baz', 'quux');
	   *
	   * `.deep.property` special characters can be escaped
	   * by adding two slashes before the `.` or `[]`.
	   *
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name deep
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('deep', function () {
	    flag(this, 'deep', true);
	  });

	  /**
	   * ### .any
	   *
	   * Sets the `any` flag, (opposite of the `all` flag)
	   * later used in the `keys` assertion.
	   *
	   *     expect(foo).to.have.any.keys('bar', 'baz');
	   *
	   * @name any
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('any', function () {
	    flag(this, 'any', true);
	    flag(this, 'all', false);
	  });

	  /**
	   * ### .all
	   *
	   * Sets the `all` flag (opposite of the `any` flag)
	   * later used by the `keys` assertion.
	   *
	   *     expect(foo).to.have.all.keys('bar', 'baz');
	   *
	   * @name all
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('all', function () {
	    flag(this, 'all', true);
	    flag(this, 'any', false);
	  });

	  /**
	   * ### .a(type)
	   *
	   * The `a` and `an` assertions are aliases that can be
	   * used either as language chains or to assert a value's
	   * type.
	   *
	   *     // typeof
	   *     expect('test').to.be.a('string');
	   *     expect({ foo: 'bar' }).to.be.an('object');
	   *     expect(null).to.be.a('null');
	   *     expect(undefined).to.be.an('undefined');
	   *     expect(new Error).to.be.an('error');
	   *     expect(new Promise).to.be.a('promise');
	   *     expect(new Float32Array()).to.be.a('float32array');
	   *     expect(Symbol()).to.be.a('symbol');
	   *
	   *     // es6 overrides
	   *     expect({[Symbol.toStringTag]:()=>'foo'}).to.be.a('foo');
	   *
	   *     // language chain
	   *     expect(foo).to.be.an.instanceof(Foo);
	   *
	   * @name a
	   * @alias an
	   * @param {String} type
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function an(type, msg) {
	    if (msg) flag(this, 'message', msg);
	    type = type.toLowerCase();
	    var obj = flag(this, 'object'),
	        article = ~['a', 'e', 'i', 'o', 'u'].indexOf(type.charAt(0)) ? 'an ' : 'a ';

	    this.assert(type === _.type(obj), 'expected #{this} to be ' + article + type, 'expected #{this} not to be ' + article + type);
	  }

	  Assertion.addChainableMethod('an', an);
	  Assertion.addChainableMethod('a', an);

	  /**
	   * ### .include(value)
	   *
	   * The `include` and `contain` assertions can be used as either property
	   * based language chains or as methods to assert the inclusion of an object
	   * in an array or a substring in a string. When used as language chains,
	   * they toggle the `contains` flag for the `keys` assertion.
	   *
	   *     expect([1,2,3]).to.include(2);
	   *     expect('foobar').to.contain('foo');
	   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
	   *
	   * @name include
	   * @alias contain
	   * @alias includes
	   * @alias contains
	   * @param {Object|String|Number} obj
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function includeChainingBehavior() {
	    flag(this, 'contains', true);
	  }

	  function include(val, msg) {
	    _.expectTypes(this, ['array', 'object', 'string']);

	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var expected = false;

	    if (_.type(obj) === 'array' && _.type(val) === 'object') {
	      for (var i in obj) {
	        if (_.eql(obj[i], val)) {
	          expected = true;
	          break;
	        }
	      }
	    } else if (_.type(val) === 'object') {
	      if (!flag(this, 'negate')) {
	        for (var k in val) new Assertion(obj).property(k, val[k]);
	        return;
	      }
	      var subset = {};
	      for (var k in val) subset[k] = obj[k];
	      expected = _.eql(subset, val);
	    } else {
	      expected = obj != undefined && ~obj.indexOf(val);
	    }
	    this.assert(expected, 'expected #{this} to include ' + _.inspect(val), 'expected #{this} to not include ' + _.inspect(val));
	  }

	  Assertion.addChainableMethod('include', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
	  Assertion.addChainableMethod('includes', include, includeChainingBehavior);

	  /**
	   * ### .ok
	   *
	   * Asserts that the target is truthy.
	   *
	   *     expect('everything').to.be.ok;
	   *     expect(1).to.be.ok;
	   *     expect(false).to.not.be.ok;
	   *     expect(undefined).to.not.be.ok;
	   *     expect(null).to.not.be.ok;
	   *
	   * @name ok
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('ok', function () {
	    this.assert(flag(this, 'object'), 'expected #{this} to be truthy', 'expected #{this} to be falsy');
	  });

	  /**
	   * ### .true
	   *
	   * Asserts that the target is `true`.
	   *
	   *     expect(true).to.be.true;
	   *     expect(1).to.not.be.true;
	   *
	   * @name true
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('true', function () {
	    this.assert(true === flag(this, 'object'), 'expected #{this} to be true', 'expected #{this} to be false', this.negate ? false : true);
	  });

	  /**
	   * ### .false
	   *
	   * Asserts that the target is `false`.
	   *
	   *     expect(false).to.be.false;
	   *     expect(0).to.not.be.false;
	   *
	   * @name false
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('false', function () {
	    this.assert(false === flag(this, 'object'), 'expected #{this} to be false', 'expected #{this} to be true', this.negate ? true : false);
	  });

	  /**
	   * ### .null
	   *
	   * Asserts that the target is `null`.
	   *
	   *     expect(null).to.be.null;
	   *     expect(undefined).to.not.be.null;
	   *
	   * @name null
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('null', function () {
	    this.assert(null === flag(this, 'object'), 'expected #{this} to be null', 'expected #{this} not to be null');
	  });

	  /**
	   * ### .undefined
	   *
	   * Asserts that the target is `undefined`.
	   *
	   *     expect(undefined).to.be.undefined;
	   *     expect(null).to.not.be.undefined;
	   *
	   * @name undefined
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('undefined', function () {
	    this.assert(undefined === flag(this, 'object'), 'expected #{this} to be undefined', 'expected #{this} not to be undefined');
	  });

	  /**
	   * ### .NaN
	   * Asserts that the target is `NaN`.
	   *
	   *     expect('foo').to.be.NaN;
	   *     expect(4).not.to.be.NaN;
	   *
	   * @name NaN
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('NaN', function () {
	    this.assert(isNaN(flag(this, 'object')), 'expected #{this} to be NaN', 'expected #{this} not to be NaN');
	  });

	  /**
	   * ### .exist
	   *
	   * Asserts that the target is neither `null` nor `undefined`.
	   *
	   *     var foo = 'hi'
	   *       , bar = null
	   *       , baz;
	   *
	   *     expect(foo).to.exist;
	   *     expect(bar).to.not.exist;
	   *     expect(baz).to.not.exist;
	   *
	   * @name exist
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('exist', function () {
	    this.assert(null != flag(this, 'object'), 'expected #{this} to exist', 'expected #{this} to not exist');
	  });

	  /**
	   * ### .empty
	   *
	   * Asserts that the target's length is `0`. For arrays and strings, it checks
	   * the `length` property. For objects, it gets the count of
	   * enumerable keys.
	   *
	   *     expect([]).to.be.empty;
	   *     expect('').to.be.empty;
	   *     expect({}).to.be.empty;
	   *
	   * @name empty
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('empty', function () {
	    var obj = flag(this, 'object'),
	        expected = obj;

	    if (Array.isArray(obj) || 'string' === typeof object) {
	      expected = obj.length;
	    } else if (typeof obj === 'object') {
	      expected = Object.keys(obj).length;
	    }

	    this.assert(!expected, 'expected #{this} to be empty', 'expected #{this} not to be empty');
	  });

	  /**
	   * ### .arguments
	   *
	   * Asserts that the target is an arguments object.
	   *
	   *     function test () {
	   *       expect(arguments).to.be.arguments;
	   *     }
	   *
	   * @name arguments
	   * @alias Arguments
	   * @namespace BDD
	   * @api public
	   */

	  function checkArguments() {
	    var obj = flag(this, 'object'),
	        type = Object.prototype.toString.call(obj);
	    this.assert('[object Arguments]' === type, 'expected #{this} to be arguments but got ' + type, 'expected #{this} to not be arguments');
	  }

	  Assertion.addProperty('arguments', checkArguments);
	  Assertion.addProperty('Arguments', checkArguments);

	  /**
	   * ### .equal(value)
	   *
	   * Asserts that the target is strictly equal (`===`) to `value`.
	   * Alternately, if the `deep` flag is set, asserts that
	   * the target is deeply equal to `value`.
	   *
	   *     expect('hello').to.equal('hello');
	   *     expect(42).to.equal(42);
	   *     expect(1).to.not.equal(true);
	   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
	   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
	   *
	   * @name equal
	   * @alias equals
	   * @alias eq
	   * @alias deep.equal
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertEqual(val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'deep')) {
	      return this.eql(val);
	    } else {
	      this.assert(val === obj, 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{exp}', val, this._obj, true);
	    }
	  }

	  Assertion.addMethod('equal', assertEqual);
	  Assertion.addMethod('equals', assertEqual);
	  Assertion.addMethod('eq', assertEqual);

	  /**
	   * ### .eql(value)
	   *
	   * Asserts that the target is deeply equal to `value`.
	   *
	   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
	   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
	   *
	   * @name eql
	   * @alias eqls
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertEql(obj, msg) {
	    if (msg) flag(this, 'message', msg);
	    this.assert(_.eql(obj, flag(this, 'object')), 'expected #{this} to deeply equal #{exp}', 'expected #{this} to not deeply equal #{exp}', obj, this._obj, true);
	  }

	  Assertion.addMethod('eql', assertEql);
	  Assertion.addMethod('eqls', assertEql);

	  /**
	   * ### .above(value)
	   *
	   * Asserts that the target is greater than `value`.
	   *
	   *     expect(10).to.be.above(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *
	   * @name above
	   * @alias gt
	   * @alias greaterThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertAbove(n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(len > n, 'expected #{this} to have a length above #{exp} but got #{act}', 'expected #{this} to not have a length above #{exp}', n, len);
	    } else {
	      this.assert(obj > n, 'expected #{this} to be above ' + n, 'expected #{this} to be at most ' + n);
	    }
	  }

	  Assertion.addMethod('above', assertAbove);
	  Assertion.addMethod('gt', assertAbove);
	  Assertion.addMethod('greaterThan', assertAbove);

	  /**
	   * ### .least(value)
	   *
	   * Asserts that the target is greater than or equal to `value`.
	   *
	   *     expect(10).to.be.at.least(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.least(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
	   *
	   * @name least
	   * @alias gte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertLeast(n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(len >= n, 'expected #{this} to have a length at least #{exp} but got #{act}', 'expected #{this} to have a length below #{exp}', n, len);
	    } else {
	      this.assert(obj >= n, 'expected #{this} to be at least ' + n, 'expected #{this} to be below ' + n);
	    }
	  }

	  Assertion.addMethod('least', assertLeast);
	  Assertion.addMethod('gte', assertLeast);

	  /**
	   * ### .below(value)
	   *
	   * Asserts that the target is less than `value`.
	   *
	   *     expect(5).to.be.below(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *
	   * @name below
	   * @alias lt
	   * @alias lessThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertBelow(n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(len < n, 'expected #{this} to have a length below #{exp} but got #{act}', 'expected #{this} to not have a length below #{exp}', n, len);
	    } else {
	      this.assert(obj < n, 'expected #{this} to be below ' + n, 'expected #{this} to be at least ' + n);
	    }
	  }

	  Assertion.addMethod('below', assertBelow);
	  Assertion.addMethod('lt', assertBelow);
	  Assertion.addMethod('lessThan', assertBelow);

	  /**
	   * ### .most(value)
	   *
	   * Asserts that the target is less than or equal to `value`.
	   *
	   *     expect(5).to.be.at.most(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.most(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
	   *
	   * @name most
	   * @alias lte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertMost(n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(len <= n, 'expected #{this} to have a length at most #{exp} but got #{act}', 'expected #{this} to have a length above #{exp}', n, len);
	    } else {
	      this.assert(obj <= n, 'expected #{this} to be at most ' + n, 'expected #{this} to be above ' + n);
	    }
	  }

	  Assertion.addMethod('most', assertMost);
	  Assertion.addMethod('lte', assertMost);

	  /**
	   * ### .within(start, finish)
	   *
	   * Asserts that the target is within a range.
	   *
	   *     expect(7).to.be.within(5,10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a length range. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name within
	   * @param {Number} start lowerbound inclusive
	   * @param {Number} finish upperbound inclusive
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('within', function (start, finish, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object'),
	        range = start + '..' + finish;
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(len >= start && len <= finish, 'expected #{this} to have a length within ' + range, 'expected #{this} to not have a length within ' + range);
	    } else {
	      this.assert(obj >= start && obj <= finish, 'expected #{this} to be within ' + range, 'expected #{this} to not be within ' + range);
	    }
	  });

	  /**
	   * ### .instanceof(constructor)
	   *
	   * Asserts that the target is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , Chai = new Tea('chai');
	   *
	   *     expect(Chai).to.be.an.instanceof(Tea);
	   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
	   *
	   * @name instanceof
	   * @param {Constructor} constructor
	   * @param {String} message _optional_
	   * @alias instanceOf
	   * @namespace BDD
	   * @api public
	   */

	  function assertInstanceOf(constructor, msg) {
	    if (msg) flag(this, 'message', msg);
	    var name = _.getName(constructor);
	    this.assert(flag(this, 'object') instanceof constructor, 'expected #{this} to be an instance of ' + name, 'expected #{this} to not be an instance of ' + name);
	  };

	  Assertion.addMethod('instanceof', assertInstanceOf);
	  Assertion.addMethod('instanceOf', assertInstanceOf);

	  /**
	   * ### .property(name, [value])
	   *
	   * Asserts that the target has a property `name`, optionally asserting that
	   * the value of that property is strictly equal to  `value`.
	   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
	   * references into objects and arrays.
	   *
	   *     // simple referencing
	   *     var obj = { foo: 'bar' };
	   *     expect(obj).to.have.property('foo');
	   *     expect(obj).to.have.property('foo', 'bar');
	   *
	   *     // deep referencing
	   *     var deepObj = {
	   *         green: { tea: 'matcha' }
	   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
	   *     };
	   *
	   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
	   *
	   * You can also use an array as the starting point of a `deep.property`
	   * assertion, or traverse nested arrays.
	   *
	   *     var arr = [
	   *         [ 'chai', 'matcha', 'konacha' ]
	   *       , [ { tea: 'chai' }
	   *         , { tea: 'matcha' }
	   *         , { tea: 'konacha' } ]
	   *     ];
	   *
	   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
	   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
	   *
	   * Furthermore, `property` changes the subject of the assertion
	   * to be the value of that property from the original object. This
	   * permits for further chainable assertions on that property.
	   *
	   *     expect(obj).to.have.property('foo')
	   *       .that.is.a('string');
	   *     expect(deepObj).to.have.property('green')
	   *       .that.is.an('object')
	   *       .that.deep.equals({ tea: 'matcha' });
	   *     expect(deepObj).to.have.property('teas')
	   *       .that.is.an('array')
	   *       .with.deep.property('[2]')
	   *         .that.deep.equals({ tea: 'konacha' });
	   *
	   * Note that dots and bracket in `name` must be backslash-escaped when
	   * the `deep` flag is set, while they must NOT be escaped when the `deep`
	   * flag is not set.
	   *
	   *     // simple referencing
	   *     var css = { '.link[target]': 42 };
	   *     expect(css).to.have.property('.link[target]', 42);
	   *
	   *     // deep referencing
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name property
	   * @alias deep.property
	   * @param {String} name
	   * @param {Mixed} value (optional)
	   * @param {String} message _optional_
	   * @returns value of property for chaining
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('property', function (name, val, msg) {
	    if (msg) flag(this, 'message', msg);

	    var isDeep = !!flag(this, 'deep'),
	        descriptor = isDeep ? 'deep property ' : 'property ',
	        negate = flag(this, 'negate'),
	        obj = flag(this, 'object'),
	        pathInfo = isDeep ? _.getPathInfo(name, obj) : null,
	        hasProperty = isDeep ? pathInfo.exists : _.hasProperty(name, obj),
	        value = isDeep ? pathInfo.value : obj[name];

	    if (negate && arguments.length > 1) {
	      if (undefined === value) {
	        msg = msg != null ? msg + ': ' : '';
	        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
	      }
	    } else {
	      this.assert(hasProperty, 'expected #{this} to have a ' + descriptor + _.inspect(name), 'expected #{this} to not have ' + descriptor + _.inspect(name));
	    }

	    if (arguments.length > 1) {
	      this.assert(val === value, 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}', 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}', val, value);
	    }

	    flag(this, 'object', value);
	  });

	  /**
	   * ### .ownProperty(name)
	   *
	   * Asserts that the target has an own property `name`.
	   *
	   *     expect('test').to.have.ownProperty('length');
	   *
	   * @name ownProperty
	   * @alias haveOwnProperty
	   * @param {String} name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertOwnProperty(name, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(obj.hasOwnProperty(name), 'expected #{this} to have own property ' + _.inspect(name), 'expected #{this} to not have own property ' + _.inspect(name));
	  }

	  Assertion.addMethod('ownProperty', assertOwnProperty);
	  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

	  /**
	   * ### .ownPropertyDescriptor(name[, descriptor[, message]])
	   *
	   * Asserts that the target has an own property descriptor `name`, that optionally matches `descriptor`.
	   *
	   *     expect('test').to.have.ownPropertyDescriptor('length');
	   *     expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
	   *     expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
	   *     expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
	   *     expect('test').ownPropertyDescriptor('length').to.have.keys('value');
	   *
	   * @name ownPropertyDescriptor
	   * @alias haveOwnPropertyDescriptor
	   * @param {String} name
	   * @param {Object} descriptor _optional_
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertOwnPropertyDescriptor(name, descriptor, msg) {
	    if (typeof descriptor === 'string') {
	      msg = descriptor;
	      descriptor = null;
	    }
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
	    if (actualDescriptor && descriptor) {
	      this.assert(_.eql(descriptor, actualDescriptor), 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor), 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor), descriptor, actualDescriptor, true);
	    } else {
	      this.assert(actualDescriptor, 'expected #{this} to have an own property descriptor for ' + _.inspect(name), 'expected #{this} to not have an own property descriptor for ' + _.inspect(name));
	    }
	    flag(this, 'object', actualDescriptor);
	  }

	  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
	  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

	  /**
	   * ### .length
	   *
	   * Sets the `doLength` flag later used as a chain precursor to a value
	   * comparison for the `length` property.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * *Deprecation notice:* Using `length` as an assertion will be deprecated
	   * in version 2.4.0 and removed in 3.0.0. Code using the old style of
	   * asserting for `length` property value using `length(value)` should be
	   * switched to use `lengthOf(value)` instead.
	   *
	   * @name length
	   * @namespace BDD
	   * @api public
	   */

	  /**
	   * ### .lengthOf(value[, message])
	   *
	   * Asserts that the target's `length` property has
	   * the expected value.
	   *
	   *     expect([ 1, 2, 3]).to.have.lengthOf(3);
	   *     expect('foobar').to.have.lengthOf(6);
	   *
	   * @name lengthOf
	   * @param {Number} length
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertLengthChain() {
	    flag(this, 'doLength', true);
	  }

	  function assertLength(n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).to.have.property('length');
	    var len = obj.length;

	    this.assert(len == n, 'expected #{this} to have a length of #{exp} but got #{act}', 'expected #{this} to not have a length of #{act}', n, len);
	  }

	  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
	  Assertion.addMethod('lengthOf', assertLength);

	  /**
	   * ### .match(regexp)
	   *
	   * Asserts that the target matches a regular expression.
	   *
	   *     expect('foobar').to.match(/^foo/);
	   *
	   * @name match
	   * @alias matches
	   * @param {RegExp} RegularExpression
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	  function assertMatch(re, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(re.exec(obj), 'expected #{this} to match ' + re, 'expected #{this} not to match ' + re);
	  }

	  Assertion.addMethod('match', assertMatch);
	  Assertion.addMethod('matches', assertMatch);

	  /**
	   * ### .string(string)
	   *
	   * Asserts that the string target contains another string.
	   *
	   *     expect('foobar').to.have.string('bar');
	   *
	   * @name string
	   * @param {String} string
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('string', function (str, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('string');

	    this.assert(~obj.indexOf(str), 'expected #{this} to contain ' + _.inspect(str), 'expected #{this} to not contain ' + _.inspect(str));
	  });

	  /**
	   * ### .keys(key1, [key2], [...])
	   *
	   * Asserts that the target contains any or all of the passed-in keys.
	   * Use in combination with `any`, `all`, `contains`, or `have` will affect
	   * what will pass.
	   *
	   * When used in conjunction with `any`, at least one key that is passed
	   * in must exist in the target object. This is regardless whether or not
	   * the `have` or `contain` qualifiers are used. Note, either `any` or `all`
	   * should be used in the assertion. If neither are used, the assertion is
	   * defaulted to `all`.
	   *
	   * When both `all` and `contain` are used, the target object must have at
	   * least all of the passed-in keys but may have more keys not listed.
	   *
	   * When both `all` and `have` are used, the target object must both contain
	   * all of the passed-in keys AND the number of keys in the target object must
	   * match the number of keys passed in (in other words, a target object must
	   * have all and only all of the passed-in keys).
	   *
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo': 7});
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys({'bar': 6});
	   *
	   *
	   * @name keys
	   * @alias key
	   * @param {...String|Array|Object} keys
	   * @namespace BDD
	   * @api public
	   */

	  function assertKeys(keys) {
	    var obj = flag(this, 'object'),
	        str,
	        ok = true,
	        mixedArgsMsg = 'keys must be given single argument of Array|Object|String, or multiple String arguments';

	    switch (_.type(keys)) {
	      case "array":
	        if (arguments.length > 1) throw new Error(mixedArgsMsg);
	        break;
	      case "object":
	        if (arguments.length > 1) throw new Error(mixedArgsMsg);
	        keys = Object.keys(keys);
	        break;
	      default:
	        keys = Array.prototype.slice.call(arguments);
	    }

	    if (!keys.length) throw new Error('keys required');

	    var actual = Object.keys(obj),
	        expected = keys,
	        len = keys.length,
	        any = flag(this, 'any'),
	        all = flag(this, 'all');

	    if (!any && !all) {
	      all = true;
	    }

	    // Has any
	    if (any) {
	      var intersection = expected.filter(function (key) {
	        return ~actual.indexOf(key);
	      });
	      ok = intersection.length > 0;
	    }

	    // Has all
	    if (all) {
	      ok = keys.every(function (key) {
	        return ~actual.indexOf(key);
	      });
	      if (!flag(this, 'negate') && !flag(this, 'contains')) {
	        ok = ok && keys.length == actual.length;
	      }
	    }

	    // Key string
	    if (len > 1) {
	      keys = keys.map(function (key) {
	        return _.inspect(key);
	      });
	      var last = keys.pop();
	      if (all) {
	        str = keys.join(', ') + ', and ' + last;
	      }
	      if (any) {
	        str = keys.join(', ') + ', or ' + last;
	      }
	    } else {
	      str = _.inspect(keys[0]);
	    }

	    // Form
	    str = (len > 1 ? 'keys ' : 'key ') + str;

	    // Have / include
	    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

	    // Assertion
	    this.assert(ok, 'expected #{this} to ' + str, 'expected #{this} to not ' + str, expected.slice(0).sort(), actual.sort(), true);
	  }

	  Assertion.addMethod('keys', assertKeys);
	  Assertion.addMethod('key', assertKeys);

	  /**
	   * ### .throw(constructor)
	   *
	   * Asserts that the function target will throw a specific error, or specific type of error
	   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
	   * for the error's message.
	   *
	   *     var err = new ReferenceError('This is a bad function.');
	   *     var fn = function () { throw err; }
	   *     expect(fn).to.throw(ReferenceError);
	   *     expect(fn).to.throw(Error);
	   *     expect(fn).to.throw(/bad function/);
	   *     expect(fn).to.not.throw('good function');
	   *     expect(fn).to.throw(ReferenceError, /bad function/);
	   *     expect(fn).to.throw(err);
	   *
	   * Please note that when a throw expectation is negated, it will check each
	   * parameter independently, starting with error constructor type. The appropriate way
	   * to check for the existence of a type of error but for a message that does not match
	   * is to use `and`.
	   *
	   *     expect(fn).to.throw(ReferenceError)
	   *        .and.not.throw(/good function/);
	   *
	   * @name throw
	   * @alias throws
	   * @alias Throw
	   * @param {ErrorConstructor} constructor
	   * @param {String|RegExp} expected error message
	   * @param {String} message _optional_
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @returns error for chaining (null if no error)
	   * @namespace BDD
	   * @api public
	   */

	  function assertThrows(constructor, errMsg, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('function');

	    var thrown = false,
	        desiredError = null,
	        name = null,
	        thrownError = null;

	    if (arguments.length === 0) {
	      errMsg = null;
	      constructor = null;
	    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
	      errMsg = constructor;
	      constructor = null;
	    } else if (constructor && constructor instanceof Error) {
	      desiredError = constructor;
	      constructor = null;
	      errMsg = null;
	    } else if (typeof constructor === 'function') {
	      name = constructor.prototype.name;
	      if (!name || name === 'Error' && constructor !== Error) {
	        name = constructor.name || new constructor().name;
	      }
	    } else {
	      constructor = null;
	    }

	    try {
	      obj();
	    } catch (err) {
	      // first, check desired error
	      if (desiredError) {
	        this.assert(err === desiredError, 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp}', desiredError instanceof Error ? desiredError.toString() : desiredError, err instanceof Error ? err.toString() : err);

	        flag(this, 'object', err);
	        return this;
	      }

	      // next, check constructor
	      if (constructor) {
	        this.assert(err instanceof constructor, 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp} but #{act} was thrown', name, err instanceof Error ? err.toString() : err);

	        if (!errMsg) {
	          flag(this, 'object', err);
	          return this;
	        }
	      }

	      // next, check message
	      var message = 'error' === _.type(err) && "message" in err ? err.message : '' + err;

	      if (message != null && errMsg && errMsg instanceof RegExp) {
	        this.assert(errMsg.exec(message), 'expected #{this} to throw error matching #{exp} but got #{act}', 'expected #{this} to throw error not matching #{exp}', errMsg, message);

	        flag(this, 'object', err);
	        return this;
	      } else if (message != null && errMsg && 'string' === typeof errMsg) {
	        this.assert(~message.indexOf(errMsg), 'expected #{this} to throw error including #{exp} but got #{act}', 'expected #{this} to throw error not including #{act}', errMsg, message);

	        flag(this, 'object', err);
	        return this;
	      } else {
	        thrown = true;
	        thrownError = err;
	      }
	    }

	    var actuallyGot = '',
	        expectedThrown = name !== null ? name : desiredError ? '#{exp}' //_.inspect(desiredError)
	    : 'an error';

	    if (thrown) {
	      actuallyGot = ' but #{act} was thrown';
	    }

	    this.assert(thrown === true, 'expected #{this} to throw ' + expectedThrown + actuallyGot, 'expected #{this} to not throw ' + expectedThrown + actuallyGot, desiredError instanceof Error ? desiredError.toString() : desiredError, thrownError instanceof Error ? thrownError.toString() : thrownError);

	    flag(this, 'object', thrownError);
	  };

	  Assertion.addMethod('throw', assertThrows);
	  Assertion.addMethod('throws', assertThrows);
	  Assertion.addMethod('Throw', assertThrows);

	  /**
	   * ### .respondTo(method)
	   *
	   * Asserts that the object or class target will respond to a method.
	   *
	   *     Klass.prototype.bar = function(){};
	   *     expect(Klass).to.respondTo('bar');
	   *     expect(obj).to.respondTo('bar');
	   *
	   * To check if a constructor will respond to a static function,
	   * set the `itself` flag.
	   *
	   *     Klass.baz = function(){};
	   *     expect(Klass).itself.to.respondTo('baz');
	   *
	   * @name respondTo
	   * @alias respondsTo
	   * @param {String} method
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function respondTo(method, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object'),
	        itself = flag(this, 'itself'),
	        context = 'function' === _.type(obj) && !itself ? obj.prototype[method] : obj[method];

	    this.assert('function' === typeof context, 'expected #{this} to respond to ' + _.inspect(method), 'expected #{this} to not respond to ' + _.inspect(method));
	  }

	  Assertion.addMethod('respondTo', respondTo);
	  Assertion.addMethod('respondsTo', respondTo);

	  /**
	   * ### .itself
	   *
	   * Sets the `itself` flag, later used by the `respondTo` assertion.
	   *
	   *     function Foo() {}
	   *     Foo.bar = function() {}
	   *     Foo.prototype.baz = function() {}
	   *
	   *     expect(Foo).itself.to.respondTo('bar');
	   *     expect(Foo).itself.not.to.respondTo('baz');
	   *
	   * @name itself
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('itself', function () {
	    flag(this, 'itself', true);
	  });

	  /**
	   * ### .satisfy(method)
	   *
	   * Asserts that the target passes a given truth test.
	   *
	   *     expect(1).to.satisfy(function(num) { return num > 0; });
	   *
	   * @name satisfy
	   * @alias satisfies
	   * @param {Function} matcher
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function satisfy(matcher, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var result = matcher(obj);
	    this.assert(result, 'expected #{this} to satisfy ' + _.objDisplay(matcher), 'expected #{this} to not satisfy' + _.objDisplay(matcher), this.negate ? false : true, result);
	  }

	  Assertion.addMethod('satisfy', satisfy);
	  Assertion.addMethod('satisfies', satisfy);

	  /**
	   * ### .closeTo(expected, delta)
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     expect(1.5).to.be.closeTo(1, 0.5);
	   *
	   * @name closeTo
	   * @alias approximately
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function closeTo(expected, delta, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');

	    new Assertion(obj, msg).is.a('number');
	    if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
	      throw new Error('the arguments to closeTo or approximately must be numbers');
	    }

	    this.assert(Math.abs(obj - expected) <= delta, 'expected #{this} to be close to ' + expected + ' +/- ' + delta, 'expected #{this} not to be close to ' + expected + ' +/- ' + delta);
	  }

	  Assertion.addMethod('closeTo', closeTo);
	  Assertion.addMethod('approximately', closeTo);

	  function isSubsetOf(subset, superset, cmp) {
	    return subset.every(function (elem) {
	      if (!cmp) return superset.indexOf(elem) !== -1;

	      return superset.some(function (elem2) {
	        return cmp(elem, elem2);
	      });
	    });
	  }

	  /**
	   * ### .members(set)
	   *
	   * Asserts that the target is a superset of `set`,
	   * or that the target and `set` have the same strictly-equal (===) members.
	   * Alternately, if the `deep` flag is set, set members are compared for deep
	   * equality.
	   *
	   *     expect([1, 2, 3]).to.include.members([3, 2]);
	   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
	   *
	   *     expect([4, 2]).to.have.members([2, 4]);
	   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
	   *
	   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
	   *
	   * @name members
	   * @param {Array} set
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addMethod('members', function (subset, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');

	    new Assertion(obj).to.be.an('array');
	    new Assertion(subset).to.be.an('array');

	    var cmp = flag(this, 'deep') ? _.eql : undefined;

	    if (flag(this, 'contains')) {
	      return this.assert(isSubsetOf(subset, obj, cmp), 'expected #{this} to be a superset of #{act}', 'expected #{this} to not be a superset of #{act}', obj, subset);
	    }

	    this.assert(isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp), 'expected #{this} to have the same members as #{act}', 'expected #{this} to not have the same members as #{act}', obj, subset);
	  });

	  /**
	   * ### .oneOf(list)
	   *
	   * Assert that a value appears somewhere in the top level of array `list`.
	   *
	   *     expect('a').to.be.oneOf(['a', 'b', 'c']);
	   *     expect(9).to.not.be.oneOf(['z']);
	   *     expect([3]).to.not.be.oneOf([1, 2, [3]]);
	   *
	   *     var three = [3];
	   *     // for object-types, contents are not compared
	   *     expect(three).to.not.be.oneOf([1, 2, [3]]);
	   *     // comparing references works
	   *     expect(three).to.be.oneOf([1, 2, three]);
	   *
	   * @name oneOf
	   * @param {Array<*>} list
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function oneOf(list, msg) {
	    if (msg) flag(this, 'message', msg);
	    var expected = flag(this, 'object');
	    new Assertion(list).to.be.an('array');

	    this.assert(list.indexOf(expected) > -1, 'expected #{this} to be one of #{exp}', 'expected #{this} to not be one of #{exp}', list, expected);
	  }

	  Assertion.addMethod('oneOf', oneOf);

	  /**
	   * ### .change(function)
	   *
	   * Asserts that a function changes an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val += 3 };
	   *     var noChangeFn = function() { return 'foo' + 'bar'; }
	   *     expect(fn).to.change(obj, 'val');
	   *     expect(noChangeFn).to.not.change(obj, 'val')
	   *
	   * @name change
	   * @alias changes
	   * @alias Change
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertChanges(object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(initial !== object[prop], 'expected .' + prop + ' to change', 'expected .' + prop + ' to not change');
	  }

	  Assertion.addChainableMethod('change', assertChanges);
	  Assertion.addChainableMethod('changes', assertChanges);

	  /**
	   * ### .increase(function)
	   *
	   * Asserts that a function increases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 15 };
	   *     expect(fn).to.increase(obj, 'val');
	   *
	   * @name increase
	   * @alias increases
	   * @alias Increase
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertIncreases(object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(object[prop] - initial > 0, 'expected .' + prop + ' to increase', 'expected .' + prop + ' to not increase');
	  }

	  Assertion.addChainableMethod('increase', assertIncreases);
	  Assertion.addChainableMethod('increases', assertIncreases);

	  /**
	   * ### .decrease(function)
	   *
	   * Asserts that a function decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 5 };
	   *     expect(fn).to.decrease(obj, 'val');
	   *
	   * @name decrease
	   * @alias decreases
	   * @alias Decrease
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */

	  function assertDecreases(object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');

	    var initial = object[prop];
	    fn();

	    this.assert(object[prop] - initial < 0, 'expected .' + prop + ' to decrease', 'expected .' + prop + ' to not decrease');
	  }

	  Assertion.addChainableMethod('decrease', assertDecreases);
	  Assertion.addChainableMethod('decreases', assertDecreases);

	  /**
	   * ### .extensible
	   *
	   * Asserts that the target is extensible (can have new properties added to
	   * it).
	   *
	   *     var nonExtensibleObject = Object.preventExtensions({});
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect({}).to.be.extensible;
	   *     expect(nonExtensibleObject).to.not.be.extensible;
	   *     expect(sealedObject).to.not.be.extensible;
	   *     expect(frozenObject).to.not.be.extensible;
	   *
	   * @name extensible
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('extensible', function () {
	    var obj = flag(this, 'object');

	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.

	    var isExtensible;

	    try {
	      isExtensible = Object.isExtensible(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isExtensible = false;else throw err;
	    }

	    this.assert(isExtensible, 'expected #{this} to be extensible', 'expected #{this} to not be extensible');
	  });

	  /**
	   * ### .sealed
	   *
	   * Asserts that the target is sealed (cannot have new properties added to it
	   * and its existing properties cannot be removed).
	   *
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect(sealedObject).to.be.sealed;
	   *     expect(frozenObject).to.be.sealed;
	   *     expect({}).to.not.be.sealed;
	   *
	   * @name sealed
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('sealed', function () {
	    var obj = flag(this, 'object');

	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
	    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.

	    var isSealed;

	    try {
	      isSealed = Object.isSealed(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isSealed = true;else throw err;
	    }

	    this.assert(isSealed, 'expected #{this} to be sealed', 'expected #{this} to not be sealed');
	  });

	  /**
	   * ### .frozen
	   *
	   * Asserts that the target is frozen (cannot have new properties added to it
	   * and its existing properties cannot be modified).
	   *
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect(frozenObject).to.be.frozen;
	   *     expect({}).to.not.be.frozen;
	   *
	   * @name frozen
	   * @namespace BDD
	   * @api public
	   */

	  Assertion.addProperty('frozen', function () {
	    var obj = flag(this, 'object');

	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
	    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.

	    var isFrozen;

	    try {
	      isFrozen = Object.isFrozen(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isFrozen = true;else throw err;
	    }

	    this.assert(isFrozen, 'expected #{this} to be frozen', 'expected #{this} to not be frozen');
	  });
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, util) {
	  chai.expect = function (val, message) {
	    return new chai.Assertion(val, message);
	  };

	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @namespace Expect
	   * @api public
	   */

	  chai.expect.fail = function (actual, expected, message, operator) {
	    message = message || 'expect.fail()';
	    throw new chai.AssertionError(message, {
	      actual: actual,
	      expected: expected,
	      operator: operator
	    }, chai.expect.fail);
	  };
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, util) {
	  var Assertion = chai.Assertion;

	  function loadShould() {
	    // explicitly define this method as function as to have it's name to include as `ssfi`
	    function shouldGetter() {
	      if (this instanceof String || this instanceof Number || this instanceof Boolean) {
	        return new Assertion(this.valueOf(), null, shouldGetter);
	      }
	      return new Assertion(this, null, shouldGetter);
	    }
	    function shouldSetter(value) {
	      // See https://github.com/chaijs/chai/issues/86: this makes
	      // `whatever.should = someValue` actually set `someValue`, which is
	      // especially useful for `global.should = require('chai').should()`.
	      //
	      // Note that we have to use [[DefineProperty]] instead of [[Put]]
	      // since otherwise we would trigger this very setter!
	      Object.defineProperty(this, 'should', {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    }
	    // modify Object.prototype to have `should`
	    Object.defineProperty(Object.prototype, 'should', {
	      set: shouldSetter,
	      get: shouldGetter,
	      configurable: true
	    });

	    var should = {};

	    /**
	     * ### .fail(actual, expected, [message], [operator])
	     *
	     * Throw a failure.
	     *
	     * @name fail
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @param {String} operator
	     * @namespace Should
	     * @api public
	     */

	    should.fail = function (actual, expected, message, operator) {
	      message = message || 'should.fail()';
	      throw new chai.AssertionError(message, {
	        actual: actual,
	        expected: expected,
	        operator: operator
	      }, should.fail);
	    };

	    /**
	     * ### .equal(actual, expected, [message])
	     *
	     * Asserts non-strict equality (`==`) of `actual` and `expected`.
	     *
	     *     should.equal(3, '3', '== coerces values to strings');
	     *
	     * @name equal
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @namespace Should
	     * @api public
	     */

	    should.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.equal(val2);
	    };

	    /**
	     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
	     *
	     * Asserts that `function` will throw an error that is an instance of
	     * `constructor`, or alternately that it will throw an error with message
	     * matching `regexp`.
	     *
	     *     should.throw(fn, 'function throws a reference error');
	     *     should.throw(fn, /function throws a reference error/);
	     *     should.throw(fn, ReferenceError);
	     *     should.throw(fn, ReferenceError, 'function throws a reference error');
	     *     should.throw(fn, ReferenceError, /function throws a reference error/);
	     *
	     * @name throw
	     * @alias Throw
	     * @param {Function} function
	     * @param {ErrorConstructor} constructor
	     * @param {RegExp} regexp
	     * @param {String} message
	     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	     * @namespace Should
	     * @api public
	     */

	    should.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.Throw(errt, errs);
	    };

	    /**
	     * ### .exist
	     *
	     * Asserts that the target is neither `null` nor `undefined`.
	     *
	     *     var foo = 'hi';
	     *
	     *     should.exist(foo, 'foo exists');
	     *
	     * @name exist
	     * @namespace Should
	     * @api public
	     */

	    should.exist = function (val, msg) {
	      new Assertion(val, msg).to.exist;
	    };

	    // negation
	    should.not = {};

	    /**
	     * ### .not.equal(actual, expected, [message])
	     *
	     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	     *
	     *     should.not.equal(3, 4, 'these numbers are not equal');
	     *
	     * @name not.equal
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @namespace Should
	     * @api public
	     */

	    should.not.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.not.equal(val2);
	    };

	    /**
	     * ### .throw(function, [constructor/regexp], [message])
	     *
	     * Asserts that `function` will _not_ throw an error that is an instance of
	     * `constructor`, or alternately that it will not throw an error with message
	     * matching `regexp`.
	     *
	     *     should.not.throw(fn, Error, 'function does not throw');
	     *
	     * @name not.throw
	     * @alias not.Throw
	     * @param {Function} function
	     * @param {ErrorConstructor} constructor
	     * @param {RegExp} regexp
	     * @param {String} message
	     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	     * @namespace Should
	     * @api public
	     */

	    should.not.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.not.Throw(errt, errs);
	    };

	    /**
	     * ### .not.exist
	     *
	     * Asserts that the target is neither `null` nor `undefined`.
	     *
	     *     var bar = null;
	     *
	     *     should.not.exist(bar, 'bar does not exist');
	     *
	     * @name not.exist
	     * @namespace Should
	     * @api public
	     */

	    should.not.exist = function (val, msg) {
	      new Assertion(val, msg).to.not.exist;
	    };

	    should['throw'] = should['Throw'];
	    should.not['throw'] = should.not['Throw'];

	    return should;
	  };

	  chai.should = loadShould;
	  chai.Should = loadShould;
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */

	module.exports = function (chai, util) {

	  /*!
	   * Chai dependencies.
	   */

	  var Assertion = chai.Assertion,
	      flag = util.flag;

	  /*!
	   * Module export.
	   */

	  /**
	   * ### assert(expression, message)
	   *
	   * Write your own test expressions.
	   *
	   *     assert('foo' !== 'bar', 'foo is not bar');
	   *     assert(Array.isArray([]), 'empty arrays are arrays');
	   *
	   * @param {Mixed} expression to test for truthiness
	   * @param {String} message to display on error
	   * @name assert
	   * @namespace Assert
	   * @api public
	   */

	  var assert = chai.assert = function (express, errmsg) {
	    var test = new Assertion(null, null, chai.assert);
	    test.assert(express, errmsg, '[ negation message unavailable ]');
	  };

	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure. Node.js `assert` module-compatible.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @namespace Assert
	   * @api public
	   */

	  assert.fail = function (actual, expected, message, operator) {
	    message = message || 'assert.fail()';
	    throw new chai.AssertionError(message, {
	      actual: actual,
	      expected: expected,
	      operator: operator
	    }, assert.fail);
	  };

	  /**
	   * ### .isOk(object, [message])
	   *
	   * Asserts that `object` is truthy.
	   *
	   *     assert.isOk('everything', 'everything is ok');
	   *     assert.isOk(false, 'this will fail');
	   *
	   * @name isOk
	   * @alias ok
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isOk = function (val, msg) {
	    new Assertion(val, msg).is.ok;
	  };

	  /**
	   * ### .isNotOk(object, [message])
	   *
	   * Asserts that `object` is falsy.
	   *
	   *     assert.isNotOk('everything', 'this will fail');
	   *     assert.isNotOk(false, 'this will pass');
	   *
	   * @name isNotOk
	   * @alias notOk
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotOk = function (val, msg) {
	    new Assertion(val, msg).is.not.ok;
	  };

	  /**
	   * ### .equal(actual, expected, [message])
	   *
	   * Asserts non-strict equality (`==`) of `actual` and `expected`.
	   *
	   *     assert.equal(3, '3', '== coerces values to strings');
	   *
	   * @name equal
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.equal = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.equal);

	    test.assert(exp == flag(test, 'object'), 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{act}', exp, act);
	  };

	  /**
	   * ### .notEqual(actual, expected, [message])
	   *
	   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	   *
	   *     assert.notEqual(3, 4, 'these numbers are not equal');
	   *
	   * @name notEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notEqual = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.notEqual);

	    test.assert(exp != flag(test, 'object'), 'expected #{this} to not equal #{exp}', 'expected #{this} to equal #{act}', exp, act);
	  };

	  /**
	   * ### .strictEqual(actual, expected, [message])
	   *
	   * Asserts strict equality (`===`) of `actual` and `expected`.
	   *
	   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
	   *
	   * @name strictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.strictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.equal(exp);
	  };

	  /**
	   * ### .notStrictEqual(actual, expected, [message])
	   *
	   * Asserts strict inequality (`!==`) of `actual` and `expected`.
	   *
	   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
	   *
	   * @name notStrictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notStrictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.equal(exp);
	  };

	  /**
	   * ### .deepEqual(actual, expected, [message])
	   *
	   * Asserts that `actual` is deeply equal to `expected`.
	   *
	   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
	   *
	   * @name deepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.eql(exp);
	  };

	  /**
	   * ### .notDeepEqual(actual, expected, [message])
	   *
	   * Assert that `actual` is not deeply equal to `expected`.
	   *
	   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
	   *
	   * @name notDeepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notDeepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.eql(exp);
	  };

	  /**
	  * ### .isAbove(valueToCheck, valueToBeAbove, [message])
	  *
	  * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`
	  *
	  *     assert.isAbove(5, 2, '5 is strictly greater than 2');
	  *
	  * @name isAbove
	  * @param {Mixed} valueToCheck
	  * @param {Mixed} valueToBeAbove
	  * @param {String} message
	  * @namespace Assert
	  * @api public
	  */

	  assert.isAbove = function (val, abv, msg) {
	    new Assertion(val, msg).to.be.above(abv);
	  };

	  /**
	  * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
	  *
	  * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`
	  *
	  *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
	  *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
	  *
	  * @name isAtLeast
	  * @param {Mixed} valueToCheck
	  * @param {Mixed} valueToBeAtLeast
	  * @param {String} message
	  * @namespace Assert
	  * @api public
	  */

	  assert.isAtLeast = function (val, atlst, msg) {
	    new Assertion(val, msg).to.be.least(atlst);
	  };

	  /**
	  * ### .isBelow(valueToCheck, valueToBeBelow, [message])
	  *
	  * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`
	  *
	  *     assert.isBelow(3, 6, '3 is strictly less than 6');
	  *
	  * @name isBelow
	  * @param {Mixed} valueToCheck
	  * @param {Mixed} valueToBeBelow
	  * @param {String} message
	  * @namespace Assert
	  * @api public
	  */

	  assert.isBelow = function (val, blw, msg) {
	    new Assertion(val, msg).to.be.below(blw);
	  };

	  /**
	  * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
	  *
	  * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`
	  *
	  *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
	  *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
	  *
	  * @name isAtMost
	  * @param {Mixed} valueToCheck
	  * @param {Mixed} valueToBeAtMost
	  * @param {String} message
	  * @namespace Assert
	  * @api public
	  */

	  assert.isAtMost = function (val, atmst, msg) {
	    new Assertion(val, msg).to.be.most(atmst);
	  };

	  /**
	   * ### .isTrue(value, [message])
	   *
	   * Asserts that `value` is true.
	   *
	   *     var teaServed = true;
	   *     assert.isTrue(teaServed, 'the tea has been served');
	   *
	   * @name isTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isTrue = function (val, msg) {
	    new Assertion(val, msg).is['true'];
	  };

	  /**
	   * ### .isNotTrue(value, [message])
	   *
	   * Asserts that `value` is not true.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotTrue(tea, 'great, time for tea!');
	   *
	   * @name isNotTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotTrue = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(true);
	  };

	  /**
	   * ### .isFalse(value, [message])
	   *
	   * Asserts that `value` is false.
	   *
	   *     var teaServed = false;
	   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
	   *
	   * @name isFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isFalse = function (val, msg) {
	    new Assertion(val, msg).is['false'];
	  };

	  /**
	   * ### .isNotFalse(value, [message])
	   *
	   * Asserts that `value` is not false.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotFalse(tea, 'great, time for tea!');
	   *
	   * @name isNotFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotFalse = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(false);
	  };

	  /**
	   * ### .isNull(value, [message])
	   *
	   * Asserts that `value` is null.
	   *
	   *     assert.isNull(err, 'there was no error');
	   *
	   * @name isNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNull = function (val, msg) {
	    new Assertion(val, msg).to.equal(null);
	  };

	  /**
	   * ### .isNotNull(value, [message])
	   *
	   * Asserts that `value` is not null.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotNull(tea, 'great, time for tea!');
	   *
	   * @name isNotNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotNull = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(null);
	  };

	  /**
	   * ### .isNaN
	   * Asserts that value is NaN
	   *
	   *    assert.isNaN('foo', 'foo is NaN');
	   *
	   * @name isNaN
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNaN = function (val, msg) {
	    new Assertion(val, msg).to.be.NaN;
	  };

	  /**
	   * ### .isNotNaN
	   * Asserts that value is not NaN
	   *
	   *    assert.isNotNaN(4, '4 is not NaN');
	   *
	   * @name isNotNaN
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	  assert.isNotNaN = function (val, msg) {
	    new Assertion(val, msg).not.to.be.NaN;
	  };

	  /**
	   * ### .isUndefined(value, [message])
	   *
	   * Asserts that `value` is `undefined`.
	   *
	   *     var tea;
	   *     assert.isUndefined(tea, 'no tea defined');
	   *
	   * @name isUndefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isUndefined = function (val, msg) {
	    new Assertion(val, msg).to.equal(undefined);
	  };

	  /**
	   * ### .isDefined(value, [message])
	   *
	   * Asserts that `value` is not `undefined`.
	   *
	   *     var tea = 'cup of chai';
	   *     assert.isDefined(tea, 'tea has been defined');
	   *
	   * @name isDefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isDefined = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(undefined);
	  };

	  /**
	   * ### .isFunction(value, [message])
	   *
	   * Asserts that `value` is a function.
	   *
	   *     function serveTea() { return 'cup of tea'; };
	   *     assert.isFunction(serveTea, 'great, we can have tea now');
	   *
	   * @name isFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isFunction = function (val, msg) {
	    new Assertion(val, msg).to.be.a('function');
	  };

	  /**
	   * ### .isNotFunction(value, [message])
	   *
	   * Asserts that `value` is _not_ a function.
	   *
	   *     var serveTea = [ 'heat', 'pour', 'sip' ];
	   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
	   *
	   * @name isNotFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotFunction = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('function');
	  };

	  /**
	   * ### .isObject(value, [message])
	   *
	   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
	   * _The assertion does not match subclassed objects._
	   *
	   *     var selection = { name: 'Chai', serve: 'with spices' };
	   *     assert.isObject(selection, 'tea selection is an object');
	   *
	   * @name isObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isObject = function (val, msg) {
	    new Assertion(val, msg).to.be.a('object');
	  };

	  /**
	   * ### .isNotObject(value, [message])
	   *
	   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
	   *
	   *     var selection = 'chai'
	   *     assert.isNotObject(selection, 'tea selection is not an object');
	   *     assert.isNotObject(null, 'null is not an object');
	   *
	   * @name isNotObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotObject = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('object');
	  };

	  /**
	   * ### .isArray(value, [message])
	   *
	   * Asserts that `value` is an array.
	   *
	   *     var menu = [ 'green', 'chai', 'oolong' ];
	   *     assert.isArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isArray = function (val, msg) {
	    new Assertion(val, msg).to.be.an('array');
	  };

	  /**
	   * ### .isNotArray(value, [message])
	   *
	   * Asserts that `value` is _not_ an array.
	   *
	   *     var menu = 'green|chai|oolong';
	   *     assert.isNotArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isNotArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotArray = function (val, msg) {
	    new Assertion(val, msg).to.not.be.an('array');
	  };

	  /**
	   * ### .isString(value, [message])
	   *
	   * Asserts that `value` is a string.
	   *
	   *     var teaOrder = 'chai';
	   *     assert.isString(teaOrder, 'order placed');
	   *
	   * @name isString
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isString = function (val, msg) {
	    new Assertion(val, msg).to.be.a('string');
	  };

	  /**
	   * ### .isNotString(value, [message])
	   *
	   * Asserts that `value` is _not_ a string.
	   *
	   *     var teaOrder = 4;
	   *     assert.isNotString(teaOrder, 'order placed');
	   *
	   * @name isNotString
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotString = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('string');
	  };

	  /**
	   * ### .isNumber(value, [message])
	   *
	   * Asserts that `value` is a number.
	   *
	   *     var cups = 2;
	   *     assert.isNumber(cups, 'how many cups');
	   *
	   * @name isNumber
	   * @param {Number} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNumber = function (val, msg) {
	    new Assertion(val, msg).to.be.a('number');
	  };

	  /**
	   * ### .isNotNumber(value, [message])
	   *
	   * Asserts that `value` is _not_ a number.
	   *
	   *     var cups = '2 cups please';
	   *     assert.isNotNumber(cups, 'how many cups');
	   *
	   * @name isNotNumber
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotNumber = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('number');
	  };

	  /**
	   * ### .isBoolean(value, [message])
	   *
	   * Asserts that `value` is a boolean.
	   *
	   *     var teaReady = true
	   *       , teaServed = false;
	   *
	   *     assert.isBoolean(teaReady, 'is the tea ready');
	   *     assert.isBoolean(teaServed, 'has tea been served');
	   *
	   * @name isBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isBoolean = function (val, msg) {
	    new Assertion(val, msg).to.be.a('boolean');
	  };

	  /**
	   * ### .isNotBoolean(value, [message])
	   *
	   * Asserts that `value` is _not_ a boolean.
	   *
	   *     var teaReady = 'yep'
	   *       , teaServed = 'nope';
	   *
	   *     assert.isNotBoolean(teaReady, 'is the tea ready');
	   *     assert.isNotBoolean(teaServed, 'has tea been served');
	   *
	   * @name isNotBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotBoolean = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('boolean');
	  };

	  /**
	   * ### .typeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
	   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
	   *     assert.typeOf('tea', 'string', 'we have a string');
	   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
	   *     assert.typeOf(null, 'null', 'we have a null');
	   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
	   *
	   * @name typeOf
	   * @param {Mixed} value
	   * @param {String} name
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.typeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.a(type);
	  };

	  /**
	   * ### .notTypeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is _not_ `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
	   *
	   * @name notTypeOf
	   * @param {Mixed} value
	   * @param {String} typeof name
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notTypeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.a(type);
	  };

	  /**
	   * ### .instanceOf(object, constructor, [message])
	   *
	   * Asserts that `value` is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new Tea('chai');
	   *
	   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
	   *
	   * @name instanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.instanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.instanceOf(type);
	  };

	  /**
	   * ### .notInstanceOf(object, constructor, [message])
	   *
	   * Asserts `value` is not an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new String('chai');
	   *
	   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
	   *
	   * @name notInstanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notInstanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.instanceOf(type);
	  };

	  /**
	   * ### .include(haystack, needle, [message])
	   *
	   * Asserts that `haystack` includes `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
	   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
	   *
	   * @name include
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.include = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.include).include(inc);
	  };

	  /**
	   * ### .notInclude(haystack, needle, [message])
	   *
	   * Asserts that `haystack` does not include `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.notInclude('foobar', 'baz', 'string not include substring');
	   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
	   *
	   * @name notInclude
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notInclude = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.notInclude).not.include(inc);
	  };

	  /**
	   * ### .match(value, regexp, [message])
	   *
	   * Asserts that `value` matches the regular expression `regexp`.
	   *
	   *     assert.match('foobar', /^foo/, 'regexp matches');
	   *
	   * @name match
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.match = function (exp, re, msg) {
	    new Assertion(exp, msg).to.match(re);
	  };

	  /**
	   * ### .notMatch(value, regexp, [message])
	   *
	   * Asserts that `value` does not match the regular expression `regexp`.
	   *
	   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
	   *
	   * @name notMatch
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notMatch = function (exp, re, msg) {
	    new Assertion(exp, msg).to.not.match(re);
	  };

	  /**
	   * ### .property(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`.
	   *
	   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
	   *
	   * @name property
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.property = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.property(prop);
	  };

	  /**
	   * ### .notProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`.
	   *
	   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
	   *
	   * @name notProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop);
	  };

	  /**
	   * ### .deepProperty(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`, which can be a
	   * string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
	   *
	   * @name deepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop);
	  };

	  /**
	   * ### .notDeepProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`, which
	   * can be a string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
	   *
	   * @name notDeepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.notDeepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop);
	  };

	  /**
	   * ### .propertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`.
	   *
	   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
	   *
	   * @name propertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.propertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.property(prop, val);
	  };

	  /**
	   * ### .propertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`.
	   *
	   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
	   *
	   * @name propertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.propertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop, val);
	  };

	  /**
	   * ### .deepPropertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`. `property` can use dot- and bracket-notation for deep
	   * reference.
	   *
	   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
	   *
	   * @name deepPropertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepPropertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop, val);
	  };

	  /**
	   * ### .deepPropertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`. `property` can use dot- and
	   * bracket-notation for deep reference.
	   *
	   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
	   *
	   * @name deepPropertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop, val);
	  };

	  /**
	   * ### .lengthOf(object, length, [message])
	   *
	   * Asserts that `object` has a `length` property with the expected value.
	   *
	   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
	   *     assert.lengthOf('foobar', 6, 'string has length of 6');
	   *
	   * @name lengthOf
	   * @param {Mixed} object
	   * @param {Number} length
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.lengthOf = function (exp, len, msg) {
	    new Assertion(exp, msg).to.have.length(len);
	  };

	  /**
	   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
	   *
	   * Asserts that `function` will throw an error that is an instance of
	   * `constructor`, or alternately that it will throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.throws(fn, 'function throws a reference error');
	   *     assert.throws(fn, /function throws a reference error/);
	   *     assert.throws(fn, ReferenceError);
	   *     assert.throws(fn, ReferenceError, 'function throws a reference error');
	   *     assert.throws(fn, ReferenceError, /function throws a reference error/);
	   *
	   * @name throws
	   * @alias throw
	   * @alias Throw
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @namespace Assert
	   * @api public
	   */

	  assert.throws = function (fn, errt, errs, msg) {
	    if ('string' === typeof errt || errt instanceof RegExp) {
	      errs = errt;
	      errt = null;
	    }

	    var assertErr = new Assertion(fn, msg).to.throw(errt, errs);
	    return flag(assertErr, 'object');
	  };

	  /**
	   * ### .doesNotThrow(function, [constructor/regexp], [message])
	   *
	   * Asserts that `function` will _not_ throw an error that is an instance of
	   * `constructor`, or alternately that it will not throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.doesNotThrow(fn, Error, 'function does not throw');
	   *
	   * @name doesNotThrow
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @namespace Assert
	   * @api public
	   */

	  assert.doesNotThrow = function (fn, type, msg) {
	    if ('string' === typeof type) {
	      msg = type;
	      type = null;
	    }

	    new Assertion(fn, msg).to.not.Throw(type);
	  };

	  /**
	   * ### .operator(val1, operator, val2, [message])
	   *
	   * Compares two values using `operator`.
	   *
	   *     assert.operator(1, '<', 2, 'everything is ok');
	   *     assert.operator(1, '>', 2, 'this will fail');
	   *
	   * @name operator
	   * @param {Mixed} val1
	   * @param {String} operator
	   * @param {Mixed} val2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.operator = function (val, operator, val2, msg) {
	    var ok;
	    switch (operator) {
	      case '==':
	        ok = val == val2;
	        break;
	      case '===':
	        ok = val === val2;
	        break;
	      case '>':
	        ok = val > val2;
	        break;
	      case '>=':
	        ok = val >= val2;
	        break;
	      case '<':
	        ok = val < val2;
	        break;
	      case '<=':
	        ok = val <= val2;
	        break;
	      case '!=':
	        ok = val != val2;
	        break;
	      case '!==':
	        ok = val !== val2;
	        break;
	      default:
	        throw new Error('Invalid operator "' + operator + '"');
	    }
	    var test = new Assertion(ok, msg);
	    test.assert(true === flag(test, 'object'), 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2), 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2));
	  };

	  /**
	   * ### .closeTo(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name closeTo
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.closeTo = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.closeTo(exp, delta);
	  };

	  /**
	   * ### .approximately(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name approximately
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.approximately = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.approximately(exp, delta);
	  };

	  /**
	   * ### .sameMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members.
	   * Order is not taken into account.
	   *
	   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
	   *
	   * @name sameMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.sameMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.members(set2);
	  };

	  /**
	   * ### .sameDeepMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members - using a deep equality checking.
	   * Order is not taken into account.
	   *
	   *     assert.sameDeepMembers([ {b: 3}, {a: 2}, {c: 5} ], [ {c: 5}, {b: 3}, {a: 2} ], 'same deep members');
	   *
	   * @name sameDeepMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.sameDeepMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.deep.members(set2);
	  };

	  /**
	   * ### .includeMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset`.
	   * Order is not taken into account.
	   *
	   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
	   *
	   * @name includeMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.includeMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.members(subset);
	  };

	  /**
	   * ### .includeDeepMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset` - using deep equality checking.
	   * Order is not taken into account.
	   * Duplicates are ignored.
	   *
	   *     assert.includeDeepMembers([ {a: 1}, {b: 2}, {c: 3} ], [ {b: 2}, {a: 1}, {b: 2} ], 'include deep members');
	   *
	   * @name includeDeepMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.includeDeepMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.deep.members(subset);
	  };

	  /**
	   * ### .oneOf(inList, list, [message])
	   *
	   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
	   *
	   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
	   *
	   * @name oneOf
	   * @param {*} inList
	   * @param {Array<*>} list
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */

	  assert.oneOf = function (inList, list, msg) {
	    new Assertion(inList, msg).to.be.oneOf(list);
	  };

	  /**
	  * ### .changes(function, object, property)
	  *
	  * Asserts that a function changes the value of a property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { obj.val = 22 };
	  *     assert.changes(fn, obj, 'val');
	  *
	  * @name changes
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.changes = function (fn, obj, prop) {
	    new Assertion(fn).to.change(obj, prop);
	  };

	  /**
	  * ### .doesNotChange(function, object, property)
	  *
	  * Asserts that a function does not changes the value of a property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { console.log('foo'); };
	  *     assert.doesNotChange(fn, obj, 'val');
	  *
	  * @name doesNotChange
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.doesNotChange = function (fn, obj, prop) {
	    new Assertion(fn).to.not.change(obj, prop);
	  };

	  /**
	  * ### .increases(function, object, property)
	  *
	  * Asserts that a function increases an object property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { obj.val = 13 };
	  *     assert.increases(fn, obj, 'val');
	  *
	  * @name increases
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.increases = function (fn, obj, prop) {
	    new Assertion(fn).to.increase(obj, prop);
	  };

	  /**
	  * ### .doesNotIncrease(function, object, property)
	  *
	  * Asserts that a function does not increase object property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { obj.val = 8 };
	  *     assert.doesNotIncrease(fn, obj, 'val');
	  *
	  * @name doesNotIncrease
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.doesNotIncrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.increase(obj, prop);
	  };

	  /**
	  * ### .decreases(function, object, property)
	  *
	  * Asserts that a function decreases an object property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { obj.val = 5 };
	  *     assert.decreases(fn, obj, 'val');
	  *
	  * @name decreases
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.decreases = function (fn, obj, prop) {
	    new Assertion(fn).to.decrease(obj, prop);
	  };

	  /**
	  * ### .doesNotDecrease(function, object, property)
	  *
	  * Asserts that a function does not decreases an object property
	  *
	  *     var obj = { val: 10 };
	  *     var fn = function() { obj.val = 15 };
	  *     assert.doesNotDecrease(fn, obj, 'val');
	  *
	  * @name doesNotDecrease
	  * @param {Function} modifier function
	  * @param {Object} object
	  * @param {String} property name
	  * @param {String} message _optional_
	  * @namespace Assert
	  * @api public
	  */

	  assert.doesNotDecrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.decrease(obj, prop);
	  };

	  /*!
	   * ### .ifError(object)
	   *
	   * Asserts if value is not a false value, and throws if it is a true value.
	   * This is added to allow for chai to be a drop-in replacement for Node's
	   * assert class.
	   *
	   *     var err = new Error('I am a custom error');
	   *     assert.ifError(err); // Rethrows err!
	   *
	   * @name ifError
	   * @param {Object} object
	   * @namespace Assert
	   * @api public
	   */

	  assert.ifError = function (val) {
	    if (val) {
	      throw val;
	    }
	  };

	  /**
	   * ### .isExtensible(object)
	   *
	   * Asserts that `object` is extensible (can have new properties added to it).
	   *
	   *     assert.isExtensible({});
	   *
	   * @name isExtensible
	   * @alias extensible
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isExtensible = function (obj, msg) {
	    new Assertion(obj, msg).to.be.extensible;
	  };

	  /**
	   * ### .isNotExtensible(object)
	   *
	   * Asserts that `object` is _not_ extensible.
	   *
	   *     var nonExtensibleObject = Object.preventExtensions({});
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freese({});
	   *
	   *     assert.isNotExtensible(nonExtensibleObject);
	   *     assert.isNotExtensible(sealedObject);
	   *     assert.isNotExtensible(frozenObject);
	   *
	   * @name isNotExtensible
	   * @alias notExtensible
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotExtensible = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.extensible;
	  };

	  /**
	   * ### .isSealed(object)
	   *
	   * Asserts that `object` is sealed (cannot have new properties added to it
	   * and its existing properties cannot be removed).
	   *
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.seal({});
	   *
	   *     assert.isSealed(sealedObject);
	   *     assert.isSealed(frozenObject);
	   *
	   * @name isSealed
	   * @alias sealed
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isSealed = function (obj, msg) {
	    new Assertion(obj, msg).to.be.sealed;
	  };

	  /**
	   * ### .isNotSealed(object)
	   *
	   * Asserts that `object` is _not_ sealed.
	   *
	   *     assert.isNotSealed({});
	   *
	   * @name isNotSealed
	   * @alias notSealed
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotSealed = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.sealed;
	  };

	  /**
	   * ### .isFrozen(object)
	   *
	   * Asserts that `object` is frozen (cannot have new properties added to it
	   * and its existing properties cannot be modified).
	   *
	   *     var frozenObject = Object.freeze({});
	   *     assert.frozen(frozenObject);
	   *
	   * @name isFrozen
	   * @alias frozen
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isFrozen = function (obj, msg) {
	    new Assertion(obj, msg).to.be.frozen;
	  };

	  /**
	   * ### .isNotFrozen(object)
	   *
	   * Asserts that `object` is _not_ frozen.
	   *
	   *     assert.isNotFrozen({});
	   *
	   * @name isNotFrozen
	   * @alias notFrozen
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */

	  assert.isNotFrozen = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.frozen;
	  };

	  /*!
	   * Aliases.
	   */

	  (function alias(name, as) {
	    assert[as] = assert[name];
	    return alias;
	  })('isOk', 'ok')('isNotOk', 'notOk')('throws', 'throw')('throws', 'Throw')('isExtensible', 'extensible')('isNotExtensible', 'notExtensible')('isSealed', 'sealed')('isNotSealed', 'notSealed')('isFrozen', 'frozen')('isNotFrozen', 'notFrozen');
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* globals describe, it, context*/

	const assert = __webpack_require__(24).assert;
	const Contact = __webpack_require__(7);

	describe('Contact', function () {
	  context('constructor', function () {
	    it('constructor should create new contact which should be an object', function () {
	      let contact = new Contact({ firstName: 'David', lastName: 'Kerr' });
	      assert.isObject(contact, 'contact is not an object');
	    });
	    it('has default null values for photo, compnay, jobTitle, and social media links', function () {
	      let contact = new Contact({ firstName: 'David', lastName: 'Kerr', company: 'Turing' });
	      assert.equal(contact.firstName, 'David');
	      assert.equal(contact.lastName, 'Kerr');
	      assert.equal(contact.photo, null);
	      assert.equal(contact.company, 'Turing');
	      assert.equal(contact.jobTitle, null);
	      assert.equal(contact.linkedIn, null);
	      assert.equal(contact.twitter, null);
	      assert.equal(contact.gitHub, null);
	      assert.equal(contact.followUp, true);
	    });
	  });

	  context('update info', function () {
	    it('should have function updateInfo which updates a given property to a given value', function () {
	      let contact = new Contact({ firstName: 'David', lastName: 'Kerr', company: 'Turing' });
	      contact.updateInfo('firstName', 'Lebron');
	      contact.updateInfo('lastName', 'James');
	      assert.equal(contact.firstName, 'Lebron');
	      assert.equal(contact.lastName, 'James');
	    });
	    it('should be able to add items to properties which are arrays', function () {
	      let contact = new Contact({ firstName: 'David', lastName: 'Kerr', company: 'Turing' });
	      contact.addPhoneEmailCategory('email', 'kerrd89@gmail.com');
	      contact.addPhoneEmailCategory('email', 'blahblah@gmail.com');
	      contact.addPhoneEmailCategory('phone', 6145583850);
	      contact.addPhoneEmailCategory('phone', 5555555555);
	      contact.addPhoneEmailCategory('category', 'Design');
	      contact.addPhoneEmailCategory('category', 'Job Lead');
	      assert.deepEqual(contact.email, ['kerrd89@gmail.com', 'blahblah@gmail.com']);
	      assert.deepEqual(contact.phone, [6145583850, 5555555555]);
	      assert.deepEqual(contact.category, ['Design', 'Job Lead']);
	    });
	  });

	  context('add and remove notes', function () {
	    it('should have a function to add an object note to its note property', function () {
	      let contact = new Contact({ firstName: 'David', lastName: 'Kerr', company: 'Turing' });
	      contact.addNote('follow-up after Turing is over');
	      assert.equal(contact.notes[0].content, 'follow-up after Turing is over');
	    });
	    it('should have a function to remove a specific note', function () {
	      let contact = new Contact({ firstName: 'David', lastName: 'Kerr', company: 'Turing' });
	      contact.addNote('1');
	      contact.addNote('2');
	      contact.addNote('3');
	      //should delete the note with content of '2'
	      contact.deleteNote(1);
	      assert.equal(contact.notes[0].content, '1');
	      assert.equal(contact.notes[1].content, '3');
	    });
	  });
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* globals describe, it, context */

	const assert = __webpack_require__(24).assert;
	const Note = __webpack_require__(5);

	describe('Note', function () {
	  var note;
	  context('constructor', function () {
	    it('should default this.content to a value of null', function () {
	      note = new Note();
	      assert.equal(note.content, null);
	    });

	    it('can receive a different value as an argument', function () {
	      note = new Note('programming');
	      assert.equal(note.content, 'programming');
	    });

	    it('should default this.time to a number value', function () {
	      note = new Note();
	      assert.equal(typeof note.time, 'number');
	    });
	  });

	  context('updateContent', function () {

	    it('should update content of note', function () {
	      note = new Note('content');
	      note.updateContent('new content');
	      assert.equal(note.content, 'new content');
	    });

	    it('should update time of note', function () {
	      note = new Note();
	      var pastTime = note.time;
	      setTimeout(function () {
	        note.updateContent('');
	        assert.notEqual(note.time, pastTime);
	      }, 1000);
	    });
	  });
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* globals describe, it, context*/

	const assert = __webpack_require__(24).assert;
	const User = __webpack_require__(11);

	describe('User', function () {

	  context('constructor', function () {

	    // beforeEach(function() {
	    //   this.rightNow = Date.now();
	    //   this.dateNow = Date.now;
	    //   Date.now = () => this.rightNow;
	    // });
	    //
	    // afterEach(function() {
	    //   Date.now = this.dateNow;
	    // });

	    let user = new User({});

	    it('is an object', function () {
	      assert.isObject(user);
	    });

	    it('should have an array called contacts', function () {
	      assert.isArray(user.contacts);
	    });

	    it('has correct default values', function () {
	      // debugger;
	      let user = new User({});
	      let now = Date.now();
	      user.id = now;
	      assert.deepEqual(user, {
	        photo: null,
	        firstName: user.firstName,
	        lastName: user.lastName,
	        contacts: [],
	        id: now
	      });
	    });
	  });

	  context('set values for object properties', function () {
	    let userFirstName = "Bob";
	    let userLastName = "Loblaw";
	    let newUser = new User({ firstName: userFirstName, lastName: userLastName });

	    it('should update a users firstName using  updateUserInfo', function () {
	      let newFirstName = "George";
	      newUser.updateUserInfo('firstName', newFirstName);
	      assert.equal(newUser.firstName, "George");
	    });

	    it('should update a users lastName using updateUserInfo', function () {
	      let newLastName = "Smith";
	      newUser.updateUserInfo('lastName', newLastName);
	      assert.equal(newUser.lastName, "Smith");
	    });

	    context('contact array functions', function () {
	      let anotherUser = new User({});

	      it('should add a new contact into the array of contacts using addContacts', function () {
	        anotherUser.addContact({ firstName: "Fancy", lastName: "Pants" });
	        assert.lengthOf(anotherUser.contacts, 1);
	        anotherUser.addContact({ firstName: "Indigo", lastName: "Montoya" });
	        assert.lengthOf(anotherUser.contacts, 2);
	      });

	      it('should remove a contact from the array of contacts using deleteContacts', function () {
	        anotherUser.deleteContacts(0);
	        assert.lengthOf(anotherUser.contacts, 1);
	      });
	    });

	    // TODO:  it should add a users photo using updateUserInfo

	    // TODO: it should update a users photo using updateUserInfo
	  });
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {process.nextTick(function() {
		delete __webpack_require__.c[module.id];
		if(typeof window !== "undefined" && window.mochaPhantomJS)
			mochaPhantomJS.run();
		else
			mocha.run();
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)))

/***/ },
/* 68 */
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
	function defaultClearTimeout() {
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
	})();
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
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
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
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
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
	    while (len) {
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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=test.bundle.js.map