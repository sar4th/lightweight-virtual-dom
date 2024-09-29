/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./core/vdom.js":
/*!**********************!*\
  !*** ./core/vdom.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vDom: () => (/* binding */ vDom)\n/* harmony export */ });\n/* harmony import */ var _utils_setProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setProps */ \"./utils/setProps.js\");\n\nfunction render(element, container) {\n  // Check if the element is a functional component\n  if (typeof element.type === \"function\") {\n    var component = element.type(); // Call the component\n    render(component, container); // Recursively render the component\n    return;\n  }\n  var type = element.type,\n    props = element.props,\n    children = element.children;\n\n  // Create a new DOM element\n  var newElement = document.createElement(type);\n\n  // Set properties\n  (0,_utils_setProps__WEBPACK_IMPORTED_MODULE_0__.setProps)(newElement, props);\n\n  // Append children if they are text or elements\n  if (Array.isArray(children)) {\n    children.forEach(function (child) {\n      if (typeof child === \"string\") {\n        var textNode = document.createTextNode(child);\n        newElement.appendChild(textNode);\n      } else {\n        render(child, newElement); // Recursively render child elements\n      }\n    });\n  } else if (typeof children === \"string\") {\n    var textNode = document.createTextNode(children);\n    newElement.appendChild(textNode);\n  }\n\n  // Append the newly created element to the container, if it exists\n  if (container) {\n    container.appendChild(newElement);\n  }\n}\nfunction createElement(type, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  return {\n    type: type,\n    props: props,\n    children: children\n  };\n}\nvar vDom = {\n  createElement: createElement,\n  render: render\n};\n\n//# sourceURL=webpack:///./core/vdom.js?");

/***/ }),

/***/ "./tests/vdom.test.js":
/*!****************************!*\
  !*** ./tests/vdom.test.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/vdom */ \"./core/vdom.js\");\n\n\n/** @jsx vDom.createElement */\nvar App = function App() {\n  return _core_vdom__WEBPACK_IMPORTED_MODULE_0__.vDom.createElement(\"div\", null, _core_vdom__WEBPACK_IMPORTED_MODULE_0__.vDom.createElement(\"h1\", {\n    className: \"test\",\n    onClick: \"testClick\"\n  }, \"Hello, Virtual DOM with \", _core_vdom__WEBPACK_IMPORTED_MODULE_0__.vDom.createElement(\"span\", {\n    className: \"ptag\"\n  }, \"JSX!\")));\n};\nvar container = document.getElementById(\"root\");\n_core_vdom__WEBPACK_IMPORTED_MODULE_0__.vDom.render(_core_vdom__WEBPACK_IMPORTED_MODULE_0__.vDom.createElement(App, null), container);\n\n//# sourceURL=webpack:///./tests/vdom.test.js?");

/***/ }),

/***/ "./utils/setProp.js":
/*!**************************!*\
  !*** ./utils/setProp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setProp: () => (/* binding */ setProp)\n/* harmony export */ });\nfunction setProp($target, name, value) {\n  var DOMAttribute;\n  switch (name) {\n    case \"className\":\n      DOMAttribute = \"class\";\n      break;\n    default:\n      DOMAttribute = name;\n      break;\n  }\n  $target.setAttribute(DOMAttribute, value);\n}\n\n//# sourceURL=webpack:///./utils/setProp.js?");

/***/ }),

/***/ "./utils/setProps.js":
/*!***************************!*\
  !*** ./utils/setProps.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setProps: () => (/* binding */ setProps)\n/* harmony export */ });\n/* harmony import */ var _setProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setProp */ \"./utils/setProp.js\");\n\nfunction setProps($target, props) {\n  if (props && Object.keys(props).length > 0) {\n    Object.keys(props).forEach(function (name) {\n      (0,_setProp__WEBPACK_IMPORTED_MODULE_0__.setProp)($target, name, props[name]);\n    });\n  }\n}\n\n//# sourceURL=webpack:///./utils/setProps.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./tests/vdom.test.js");
/******/ 	
/******/ })()
;