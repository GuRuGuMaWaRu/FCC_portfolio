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
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var css = __webpack_require__(1);

	'use strict';

	$(document).ready(function() {

	  var regexObj = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

	  // highlight nav-button helper function
	  function highlightButton(currentButton) {
	    var buttons = ['about', 'portfolio', 'contact'];
	    buttons.forEach(function(button) {
	      if (button === currentButton) {
	        $('.' + button).addClass('highlight');
	      } else {
	        $('.' + button).removeClass('highlight');
	      }
	    });
	  }

	  // highlight nav-button of the current section
	  function checkPosition() {
	    if (window.scrollY > 2800) {
	      highlightButton('contact');
	    } else if (window.scrollY > 400) {
	      highlightButton('portfolio');
	    } else if (window.scrollY < 400) {
	      highlightButton('about');
	    }

	  }

	  // show error message if input field is invalid
	  function checkInput(inputField) {
	    if (inputField.attr('id') === 'form-email') {
	      return regexObj.test(inputField.val()) ? inputField.next().css('opacity', '0') : inputField.next().css('opacity', '1');
	    } else {
	      return inputField.val() ? inputField.next().css('opacity', '0') : inputField.next().css('opacity', '1');
	    }
	  }

	  checkPosition();

	  $(window).on('scroll', checkPosition);

	  $('#form-email').on('keyup', function(event) {
	    regexObj.test(event.target.value) ?
	      $('#form-email').removeClass('false-input') : $('#form-email').addClass('false-input');
	  });

	  // scroll to a page section after nav-button click
	  $('body').on('click', '.nav-bar a', function(event) {
	    event.preventDefault();
	    var $anchor = $(this);

	    $('body,html').stop().animate({
	      scrollTop: $($anchor.attr('href')).offset().top
	    }, 1000);
	  });

	  // form validation
	  $('form').submit(function(event) {
	    event.preventDefault();
	    checkInput($('#form-name'));
	    checkInput($('#form-email'));
	    checkInput($('#form-message'));
	    return false;
	  });

	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Quattrocento:400,700);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Istok+Web);", ""]);
	exports.push([module.id, "@import url(https://use.fonticons.com/3c624b60.js);", ""]);

	// module
	exports.push([module.id, ".content, #about li, #portfolio li, #contact button {\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px; }\n\n.nav-bar li, .nav-bar i, #contact .warning-message, #contact button, #contact a {\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s; }\n\n/*****************************************************\r\n/ GLOBAL\r\n*****************************************************/\nbody,\ntextarea,\ninput {\n  background-color: #dbdbdb;\n  margin: 0;\n  font-family: \"Quattrocento\", \"Times New Roman\", serif; }\n\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"Istok Web\", Helvetica, Arial, sans-serif; }\n\np,\nul,\nlabel,\ninput,\ntextarea,\nbutton {\n  font-size: 1.2em; }\n\nul {\n  list-style: none;\n  padding-left: 0; }\n\na {\n  text-decoration: none; }\n\n/*****************************************************\r\n/ NAVBAR\r\n*****************************************************/\n.nav-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  height: 100%;\n  width: 90px;\n  background-color: #3e3e3b; }\n  .nav-bar ul {\n    display: flex;\n    flex-direction: column; }\n  .nav-bar li {\n    align-self: center;\n    margin-bottom: 1.1em;\n    opacity: 0.3; }\n    .nav-bar li:hover {\n      opacity: 1; }\n    .nav-bar li.highlight {\n      opacity: 1; }\n      .nav-bar li.highlight i {\n        color: #65A66A; }\n  .nav-bar i {\n    color: #fff;\n    font-size: 2.5em; }\n\n/*****************************************************\r\n/ NAVBAR - TOOLTIPS\r\n*****************************************************/\n.about::before, .about::after,\n.portfolio::before,\n.portfolio::after,\n.contact::before,\n.contact::after {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  transition: all .3s; }\n\n.about::before,\n.portfolio::before,\n.contact::before {\n  text-align: center;\n  font-size: 0.9em;\n  width: auto;\n  height: 40px;\n  line-height: 40px;\n  color: #fff;\n  background: #3e3e3b;\n  padding: 0 10px;\n  border-radius: .25em;\n  left: 100px; }\n\n.about::before {\n  content: 'About';\n  top: 23px; }\n\n.portfolio::before {\n  content: 'Portfolio';\n  top: 92px; }\n\n.contact::before {\n  content: 'Contact';\n  top: 163px; }\n\n.about::after,\n.portfolio::after,\n.contact::after {\n  content: '';\n  width: 0;\n  height: 0;\n  border: 9px solid transparent;\n  border-right-color: #3e3e3b;\n  left: 83px; }\n\n.about::after {\n  top: 33px; }\n\n.portfolio::after {\n  top: 102px; }\n\n.contact::after {\n  top: 173px; }\n\n.about:hover::before, .about:hover::after,\n.portfolio:hover::before,\n.portfolio:hover::after,\n.contact:hover::before,\n.contact:hover::after {\n  opacity: 1;\n  visibility: visible; }\n\n.about:hover::before,\n.portfolio:hover::before,\n.contact:hover::before {\n  left: 105px; }\n\n.about:hover::after,\n.portfolio:hover::after,\n.contact:hover::after {\n  left: 87px; }\n\n/*****************************************************\r\n/ PAGE SECTIONS: ABOUT, PORTFOLIO, CONTACT\r\n*****************************************************/\n.content {\n  display: flex;\n  background-color: #f5f5f5;\n  flex-wrap: wrap;\n  margin: 40px 40px 10px 130px;\n  box-shadow: 0 1px 2px #888; }\n  .content ul {\n    margin: 1.9em 0 0; }\n\n.content-title {\n  text-align: center;\n  color: #fff;\n  padding: 0.5em 0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  width: 100%; }\n  .content-title h1 {\n    display: inline-block;\n    margin: 0.5em 0; }\n  #about .content-title {\n    background-color: #65A66A; }\n  #portfolio .content-title {\n    background-color: #de6a6a; }\n  #contact .content-title {\n    background-color: #569AE8; }\n\n.left-column,\n.right-column {\n  flex: 1;\n  margin: 2em 3em;\n  text-align: justify; }\n\n#about .left-column {\n  flex: 2; }\n  #about .left-column p:first-child {\n    margin-top: 0; }\n\n#about .right-column {\n  text-align: center; }\n\n#about img {\n  height: 250px;\n  width: 250px;\n  padding: 5px;\n  margin-top: auto;\n  margin-bottom: auto;\n  border-radius: 50%; }\n\n#about li {\n  display: inline-block;\n  color: #fff;\n  background-color: #65A66A;\n  font-weight: bold;\n  padding: 8px;\n  border: 2px solid #65A66A;\n  margin-right: 0.4em; }\n\n#portfolio img {\n  height: auto;\n  width: 100%;\n  padding: 2px;\n  border: 1px solid #888; }\n\n#portfolio h3 {\n  margin: 0 0 0.6em; }\n\n#portfolio p,\n#portfolio ul {\n  margin-top: 0.8em; }\n\n#portfolio li {\n  display: inline-block;\n  color: #fff;\n  background-color: #de6a6a;\n  font-weight: bold;\n  padding: 8px;\n  border: 2px solid #de6a6a;\n  margin-top: 0.4em;\n  margin-right: 0.4em; }\n\n#portfolio .left-column,\n#portfolio .right-column {\n  flex-basis: 30%; }\n\n#contact .left-column p:first-child,\n#contact .right-column p:first-child {\n  margin-top: 0; }\n\n#contact form span {\n  background-color: #569AE8;\n  display: inline-block;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  margin-right: 8px;\n  margin-bottom: -1px; }\n\n#contact label {\n  display: inline-block;\n  margin-bottom: 0.5em; }\n\n#contact input,\n#contact textarea {\n  background-color: #f5f5f5;\n  display: block;\n  width: 100%;\n  padding: 0;\n  border: none;\n  border-bottom: 1px solid #3e3e3b; }\n  #contact input:focus,\n  #contact textarea:focus {\n    outline: 0; }\n\n#contact input.false-input {\n  border-bottom: 1px solid red; }\n\n#contact textarea {\n  font-size: 1.2rem;\n  resize: none; }\n\n#contact .warning-message {\n  color: red;\n  font-size: 0.8em;\n  text-align: center;\n  margin-top: 2px;\n  opacity: 0; }\n\n#contact button {\n  color: #fff;\n  background-color: #569AE8;\n  position: relative;\n  padding: 10px 25px;\n  border: 1px solid #569AE8;\n  width: 100%; }\n  #contact button:hover {\n    background-color: #144e91; }\n\n#contact i {\n  padding-right: 0.5em; }\n\n#contact a {\n  color: #569AE8;\n  display: inline-block;\n  padding-top: 1.5em; }\n  #contact a:hover {\n    color: #144e91; }\n\n/*****************************************************\r\n/ FOOTER\r\n*****************************************************/\n#footer {\n  display: flex;\n  color: #3e3e3b;\n  background-color: #dbdbdb;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 40px 40px 10px 130px; }\n  #footer .left-c,\n  #footer .right-c {\n    flex: 0 0 20em;\n    text-align: center; }\n  #footer .divider {\n    border-left: 1px solid #3e3e3b;\n    margin: 0 2em; }\n  #footer h3 {\n    margin-top: 0;\n    margin-bottom: 1.5em; }\n  #footer li {\n    text-align: center;\n    display: inline-block;\n    padding: 0 0.5em; }\n  #footer i {\n    color: #3e3e3b; }\n    #footer i:hover {\n      color: #65A66A; }\n  #footer .copyright {\n    text-align: center;\n    font-size: 0.9em;\n    margin: 0;\n    padding: 3.4em 0 5px;\n    width: 100%; }\n\n/*****************************************************\r\n/ MEDIA QUERIES\r\n*****************************************************/\n@media (max-width: 1100px) {\n  .content {\n    flex-direction: column; }\n    .content .left-column {\n      margin: 1em 3em 1em; }\n    .content .right-column {\n      margin: 1em 3em 4em; }\n  #about .left-column {\n    order: 2;\n    margin: 1em 3em 4em; }\n  #about .right-column {\n    order: 1;\n    margin: 1em 3em 1em; }\n  #about img {\n    height: auto;\n    width: auto; }\n  #contact button {\n    display: inline-block;\n    width: 40%;\n    margin-left: 30%;\n    margin-right: 30%; }\n  #footer .left-c,\n  #footer .right-c {\n    flex: 1; } }\n\n@media (max-width: 690px) {\n  p,\n  ul,\n  label,\n  input,\n  textarea,\n  button {\n    font-size: 1em; }\n  h1,\n  h2,\n  h3,\n  h4 {\n    font-size: 1em; }\n  .nav-bar {\n    height: 80px;\n    width: 100%;\n    background-color: rgba(62, 62, 59, 0.97); }\n    .nav-bar ul {\n      flex-direction: row;\n      justify-content: space-around;\n      text-align: center;\n      height: 100%;\n      margin: 0; }\n    .nav-bar li {\n      flex: 1;\n      padding: 16px 0;\n      margin: 0; }\n  .about:hover::before, .about:hover::after,\n  .portfolio:hover::before,\n  .portfolio:hover::after,\n  .contact:hover::before,\n  .contact:hover::after {\n    opacity: 0;\n    visibility: hidden; }\n  .content {\n    border-radius: 0;\n    margin: 0; }\n    .content .content-title {\n      border-radius: 0; }\n    .content ul {\n      text-align: center; }\n    .content .left-column {\n      margin: 10px 5% 15px; }\n    .content .right-column {\n      margin: 5px 5% 80px; }\n  #about {\n    margin-top: 80px; }\n    #about .left-column {\n      margin: 5px 5% 80px; }\n    #about .right-column {\n      margin: 10px 5% 15px; }\n  #portfolio h3,\n  #portfolio .project-title {\n    text-align: center; }\n  #contact .contact-email {\n    text-align: center; }\n  #contact textarea {\n    font-size: 1em; }\n  #footer {\n    flex-direction: column;\n    margin: 40px 0 0; }\n    #footer h3 {\n      margin-bottom: 0.5em; }\n    #footer p, #footer ul {\n      margin-top: 0.5em;\n      margin-bottom: 2em; }\n    #footer .divider {\n      position: absolute;\n      opacity: 0;\n      visibility: hidden; }\n    #footer .copyright {\n      padding-top: 1em; } }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
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
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

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

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
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

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
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

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);