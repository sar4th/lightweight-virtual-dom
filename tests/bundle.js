/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./tests/vdom.test.js":
/*!****************************!*\
  !*** ./tests/vdom.test.js ***!
  \****************************/
/***/ (() => {

eval("function render(element, container) {\n  if (typeof element.type === \"function\") {\n    render(element.type(), container);\n  }\n  var type = element.type,\n    children = element.children;\n  // Create an element based on the tag name\n  var newElement = document.createElement(type);\n  var text = document.createTextNode(children);\n  newElement.appendChild(text);\n  // Append the newly created element to the container, if it exists\n  container === null || container === void 0 ? void 0 : container.appendChild(newElement);\n}\nfunction createElement(type, props, children) {\n  return {\n    type: type,\n    props: props,\n    children: children\n  };\n}\nvar vDom = {\n  createElement: createElement,\n  render: render\n};\n/** @jsx vDom.createElement */\nvar App = function App() {\n  return vDom.createElement(\"h1\", null, \"Hello, Virtual DOM with JSX!\");\n};\nconsole.log(vDom.createElement(App, null), \"App\");\nvar container = document.getElementById(\"root\");\nvDom.render(vDom.createElement(App, null), container);\n\n//# sourceURL=webpack:///./tests/vdom.test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./tests/vdom.test.js"]();
/******/ 	
/******/ })()
;