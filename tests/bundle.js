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

/***/ "./core/diff.js":
/*!**********************!*\
  !*** ./core/diff.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   diff: () => (/* binding */ diff)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction diff(oldNode, newNode) {\n  if (_typeof(oldNode) === \"object\" && _typeof(newNode) === \"object\") {\n    //check both child node is string \n    if (typeof oldNode.children[0] === \"string\" && newNode.children[0] === \"string\") {\n      isIdentical = isBothStringIdentical(oldNode.children[0], newNode.children[0]);\n      if (isIdentical) {\n        return {\n          status: \"noop\"\n        };\n      } else {\n        return {\n          type: \"STRING\",\n          status: \"REPLACE\",\n          oldNode: oldNode,\n          newNode: newNode\n        };\n      }\n    }\n    //check it is a entirely new element\n    if ((oldNode === null || oldNode === void 0 ? void 0 : oldNode.type) !== newNode.type) {\n      return {\n        status: \"REPLACE\",\n        type: \"ELM_NODE\",\n        newNode: newNode,\n        oldNode: oldNode\n      };\n    }\n    //check  only if the props has changed \n  } else {\n    return new Error(\"not valid element\");\n  }\n}\nfunction isBothStringIdentical(str1, str2) {\n  return str1 === str2;\n}\nvar object1 = {\n  \"className\": \"test\",\n  \"onClick\": \"testClick\",\n  \"disabled\": \"false\"\n};\nvar object2 = {\n  \"className\": \"test\",\n  \"onClick\": \"testClick\"\n};\nvar _isDeepEqual = function isDeepEqual(object1, object2) {\n  var objKeys1 = Object.keys(object1);\n  var objKeys2 = Object.keys(object2);\n  if (objKeys1.length !== objKeys2.length) return false;\n  for (var _i = 0, _objKeys = objKeys1; _i < _objKeys.length; _i++) {\n    var key = _objKeys[_i];\n    var value1 = object1[key];\n    var value2 = object2[key];\n    var isObjects = isObject(value1) && isObject(value2);\n    if (isObjects && !_isDeepEqual(value1, value2) || !isObjects && value1 !== value2) {\n      return false;\n    }\n  }\n  return true;\n};\nvar isObject = function isObject(object) {\n  return object != null && _typeof(object) === \"object\";\n};\nconsole.log(_isDeepEqual(object1, object2));\n\n//# sourceURL=webpack:///./core/diff.js?");

/***/ }),

/***/ "./core/patch.js":
/*!***********************!*\
  !*** ./core/patch.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patch: () => (/* binding */ patch)\n/* harmony export */ });\nfunction patch(patch, element, container) {\n  // Check if the element is a functional component\n  if (typeof element.type === \"function\") {\n    var component = element.type(); // Call the component\n    render(component, container); // Recursively render the component\n    return;\n  }\n  var type = element.type,\n    props = element.props,\n    children = element.children;\n\n  // Create a new DOM element\n  var newElement = document.createElement(type);\n\n  // Set properties\n  setProps(newElement, props);\n\n  // Append children if they are text or elements\n  if (Array.isArray(children)) {\n    children.forEach(function (child) {\n      if (typeof child === \"string\") {\n        var textNode = document.createTextNode(child);\n        newElement.appendChild(textNode);\n      } else {\n        render(child, newElement); // Recursively render child elements\n      }\n    });\n  } else if (typeof children === \"string\") {\n    var textNode = document.createTextNode(children);\n    newElement.appendChild(textNode);\n  }\n  container._vDOM = element;\n  // Append the newly created element to the container, if it exists\n  if (container) {\n    container.appendChild(newElement);\n  }\n}\n\n//# sourceURL=webpack:///./core/patch.js?");

/***/ }),

/***/ "./core/vdom.js":
/*!**********************!*\
  !*** ./core/vdom.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vDom: () => (/* binding */ vDom)\n/* harmony export */ });\n/* harmony import */ var _utils_setProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setProps */ \"./utils/setProps.js\");\n/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diff */ \"./core/diff.js\");\n/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patch */ \"./core/patch.js\");\n\n\n\n\n// function render(element, container) {\n\n//   diff(element, container)\n//   //this is checking if the element is rendering for the first time or not\n//   let oldNode = container._vDOM;\n//   if (oldNode) {\n//     let patch = diff(oldNode, element);\n//     if (patch) {\n//       applyPatch(patch, oldNode, element);\n//       container._vDOM = element;\n//     } else {\n//       return;\n//     }\n//   } else {\n//     mountNewElement(element, container);\n//     container._vDOM = element;\n//   }\n// }\n\nfunction render(element, container) {\n  // if (!container._vDOM) {\n  mountNewElement(element, container);\n  // container._vDOM = element;\n  return;\n  // }\n\n  console.log(\"Diff logic to be added later\");\n}\nfunction mountNewElement(element, container) {\n  if (typeof element.type === \"function\") {\n    var component = element.type();\n    render(component, container);\n    return;\n  }\n  var type = element.type,\n    props = element.props,\n    children = element.children;\n  var newElement = document.createElement(type);\n  (0,_utils_setProps__WEBPACK_IMPORTED_MODULE_0__.setProps)(newElement, props);\n  if (Array.isArray(children)) {\n    children.forEach(function (child) {\n      console.log(child, \"child\");\n      if (typeof child === \"string\") {\n        var textNode = document.createTextNode(child);\n        newElement.appendChild(textNode);\n      } else {\n        render(child, newElement);\n      }\n    });\n  } else if (typeof children === \"string\") {\n    var textNode = document.createTextNode(children);\n    newElement.appendChild(textNode);\n  }\n  container.appendChild(newElement);\n}\nfunction createElement(type, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  return {\n    type: type,\n    props: props,\n    children: children\n  };\n}\nvar vDom = {\n  createElement: createElement,\n  render: render\n};\n\n//# sourceURL=webpack:///./core/vdom.js?");

/***/ }),

/***/ "./tests/vdom.test.js":
/*!****************************!*\
  !*** ./tests/vdom.test.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/vdom */ \"./core/vdom.js\");\n\n\n/** @jsx vDom.createElement */\nvar App = function App() {\n  return _core_vdom__WEBPACK_IMPORTED_MODULE_0__.vDom.createElement(\"div\", {\n    \"class\": \"wrapper\"\n  }, _core_vdom__WEBPACK_IMPORTED_MODULE_0__.vDom.createElement(\"h1\", {\n    \"class\": \"h1\"\n  }, \"Hello from virtual dom\"));\n};\nvar container = document.getElementById(\"root\");\nconsole.log(container, \"container\");\n_core_vdom__WEBPACK_IMPORTED_MODULE_0__.vDom.render(_core_vdom__WEBPACK_IMPORTED_MODULE_0__.vDom.createElement(App, null), container);\n\n//# sourceURL=webpack:///./tests/vdom.test.js?");

/***/ }),

/***/ "./utils/setProp.js":
/*!**************************!*\
  !*** ./utils/setProp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners),\n/* harmony export */   setProp: () => (/* binding */ setProp)\n/* harmony export */ });\nfunction setProp($target, name, value) {\n  var DOMAttribute;\n  switch (name) {\n    case \"className\":\n      DOMAttribute = \"class\";\n      break;\n    default:\n      DOMAttribute = name;\n      break;\n  }\n  $target.setAttribute(DOMAttribute, value);\n}\nfunction addEventListeners($target, name, value) {}\n\n//# sourceURL=webpack:///./utils/setProp.js?");

/***/ }),

/***/ "./utils/setProps.js":
/*!***************************!*\
  !*** ./utils/setProps.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setProps: () => (/* binding */ setProps)\n/* harmony export */ });\n/* harmony import */ var _setProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setProp */ \"./utils/setProp.js\");\n\n\nfunction setProps($target, props) {\n  if (props && Object.keys(props).length > 0) {\n    Object.keys(props).forEach(function (name) {\n      if (/^on/.test(name)) {\n        $target.addEventListener(name.slice(2).toLowerCase(), props[name]);\n      } else {\n        Object.keys(props).forEach(function (name) {\n          (0,_setProp__WEBPACK_IMPORTED_MODULE_0__.setProp)($target, name, props[name]);\n        });\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack:///./utils/setProps.js?");

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