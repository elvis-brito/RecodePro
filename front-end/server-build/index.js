/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".index.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', function (req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body {\\n|     padding-top: 80px;\\n| }\");\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_Menu_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Menu/index */ \"./src/Components/Menu/index.js\");\n/* harmony import */ var _rotas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rotas */ \"./src/rotas.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_Menu_Menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Menu/Menu.css */ \"./src/Components/Menu/Menu.css\");\n/* harmony import */ var _Components_Menu_Menu_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Components_Menu_Menu_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Footer/Footer.css */ \"./src/Components/Footer/Footer.css\");\n/* harmony import */ var _Components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n //import Footer from './Components/Footer/index'\n\n\n\n\n\n\n\n\nvar Footer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./Components/Footer/index */ \"./src/Components/Footer/index.js\"));\n});\n\nfunction App() {\n  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/React.createElement(\"header\", null, /*#__PURE__*/React.createElement(_Components_Menu_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), /*#__PURE__*/React.createElement(\"main\", null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    fluid: true\n  }, /*#__PURE__*/React.createElement(_rotas__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null))), /*#__PURE__*/React.createElement(\"footer\", null, /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_7__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(\"p\", null, \"Carregando ...\")\n  }, /*#__PURE__*/React.createElement(Footer, null)))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Components/Footer/Footer.css":
/*!******************************************!*\
  !*** ./src/Components/Footer/Footer.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .rodape {\\n|     width:100%;\\n|     height: 50px;\");\n\n//# sourceURL=webpack:///./src/Components/Footer/Footer.css?");

/***/ }),

/***/ "./src/Components/Home/Home.css":
/*!**************************************!*\
  !*** ./src/Components/Home/Home.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .banner {\\n|     \\n|     background-image: url('./img/banner.png');\");\n\n//# sourceURL=webpack:///./src/Components/Home/Home.css?");

/***/ }),

/***/ "./src/Components/Home/index.js":
/*!**************************************!*\
  !*** ./src/Components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.css */ \"./src/Components/Home/Home.css\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n  return /*#__PURE__*/React.createElement(\"main\", {\n    class: \"container-with-fixed-width\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    class: \"banner\"\n  }));\n}\n\n//# sourceURL=webpack:///./src/Components/Home/index.js?");

/***/ }),

/***/ "./src/Components/Menu/Menu.css":
/*!**************************************!*\
  !*** ./src/Components/Menu/Menu.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .nav-item {\\n|     display: flex;\\n|     justify-content: center;\");\n\n//# sourceURL=webpack:///./src/Components/Menu/Menu.css?");

/***/ }),

/***/ "./src/Components/Menu/index.js":
/*!**************************************!*\
  !*** ./src/Components/Menu/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.css */ \"./src/Components/Menu/Menu.css\");\n/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Menu_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction BaseMenu(props) {\n  var location = props.location;\n  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Navbar\"], {\n    className: \"navbar-custom\",\n    expand: \"lg\",\n    fixed: \"top\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Navbar\"].Brand, null, \"FullStackEletro React\"), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Navbar\"].Toggle, {\n    \"aria-controls\": \"item-menu\"\n  }), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Navbar\"].Collapse, {\n    id: \"item-menu\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"], {\n    activeKey: location.pathname,\n    className: \"ml-auto mr-5\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Item, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    href: \"/\",\n    to: \"/\"\n  }, \"Inicio\")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Item, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    href: \"/sobre\",\n    to: \"/sobre\"\n  }, \"Sobre\")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Item, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    href: \"/produtos\",\n    to: \"/produtos\"\n  }, \"Produtos\")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Item, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    href: \"/pedidos\",\n    to: \"/pedidos\"\n  }, \"Pedidos\")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Item, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    href: \"/lojas\",\n    to: \"/lojas\"\n  }, \"Lojas\")))));\n}\n\nvar Menu = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(BaseMenu);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./src/Components/Menu/index.js?");

/***/ }),

/***/ "./src/Components/Produto/Produto.css":
/*!********************************************!*\
  !*** ./src/Components/Produto/Produto.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:6)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> figure{\\n|     width: 350px;\\n|     margin-right: 1%;\");\n\n//# sourceURL=webpack:///./src/Components/Produto/Produto.css?");

/***/ }),

/***/ "./src/Components/Produto/img sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./src/Components/Produto/img sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./CafeteiraDolceGusto.jpg\": \"./src/Components/Produto/img/CafeteiraDolceGusto.jpg\",\n\t\"./CafeteiraDolceGusto2.jpg\": \"./src/Components/Produto/img/CafeteiraDolceGusto2.jpg\",\n\t\"./SmartTVSamsung.jpg\": \"./src/Components/Produto/img/SmartTVSamsung.jpg\",\n\t\"./SmartTVSamsung2.jpg\": \"./src/Components/Produto/img/SmartTVSamsung2.jpg\",\n\t\"./SmartTVSamsung3.jpg\": \"./src/Components/Produto/img/SmartTVSamsung3.jpg\",\n\t\"./SmartTVSamsung4.jpg\": \"./src/Components/Produto/img/SmartTVSamsung4.jpg\",\n\t\"./SmartTVSamsung5.jpg\": \"./src/Components/Produto/img/SmartTVSamsung5.jpg\",\n\t\"./arCondicionadoSplitLG.jpg\": \"./src/Components/Produto/img/arCondicionadoSplitLG.jpg\",\n\t\"./arCondicionadoSplitLG2.jpg\": \"./src/Components/Produto/img/arCondicionadoSplitLG2.jpg\",\n\t\"./iphone.jpg\": \"./src/Components/Produto/img/iphone.jpg\",\n\t\"./iphone2.jpg\": \"./src/Components/Produto/img/iphone2.jpg\",\n\t\"./iphone3.jpg\": \"./src/Components/Produto/img/iphone3.jpg\",\n\t\"./iphone_large.jpg\": \"./src/Components/Produto/img/iphone_large.jpg\",\n\t\"./moto-x.png\": \"./src/Components/Produto/img/moto-x.png\",\n\t\"./motoMaxx.jpg\": \"./src/Components/Produto/img/motoMaxx.jpg\",\n\t\"./motoMaxx2.jpg\": \"./src/Components/Produto/img/motoMaxx2.jpg\",\n\t\"./motoMaxx3.jpg\": \"./src/Components/Produto/img/motoMaxx3.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/Components/Produto/img sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/Components/Produto/img_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/Components/Produto/img/CafeteiraDolceGusto.jpg":
/*!************************************************************!*\
  !*** ./src/Components/Produto/img/CafeteiraDolceGusto.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/CafeteiraDolceGusto.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/CafeteiraDolceGusto2.jpg":
/*!*************************************************************!*\
  !*** ./src/Components/Produto/img/CafeteiraDolceGusto2.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/CafeteiraDolceGusto2.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/SmartTVSamsung.jpg":
/*!*******************************************************!*\
  !*** ./src/Components/Produto/img/SmartTVSamsung.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/SmartTVSamsung.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/SmartTVSamsung2.jpg":
/*!********************************************************!*\
  !*** ./src/Components/Produto/img/SmartTVSamsung2.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/SmartTVSamsung2.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/SmartTVSamsung3.jpg":
/*!********************************************************!*\
  !*** ./src/Components/Produto/img/SmartTVSamsung3.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/SmartTVSamsung3.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/SmartTVSamsung4.jpg":
/*!********************************************************!*\
  !*** ./src/Components/Produto/img/SmartTVSamsung4.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/SmartTVSamsung4.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/SmartTVSamsung5.jpg":
/*!********************************************************!*\
  !*** ./src/Components/Produto/img/SmartTVSamsung5.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/SmartTVSamsung5.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/arCondicionadoSplitLG.jpg":
/*!**************************************************************!*\
  !*** ./src/Components/Produto/img/arCondicionadoSplitLG.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/arCondicionadoSplitLG.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/arCondicionadoSplitLG2.jpg":
/*!***************************************************************!*\
  !*** ./src/Components/Produto/img/arCondicionadoSplitLG2.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/arCondicionadoSplitLG2.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/iphone.jpg":
/*!***********************************************!*\
  !*** ./src/Components/Produto/img/iphone.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/iphone.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/iphone2.jpg":
/*!************************************************!*\
  !*** ./src/Components/Produto/img/iphone2.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/iphone2.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/iphone3.jpg":
/*!************************************************!*\
  !*** ./src/Components/Produto/img/iphone3.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/iphone3.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/iphone_large.jpg":
/*!*****************************************************!*\
  !*** ./src/Components/Produto/img/iphone_large.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/iphone_large.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/moto-x.png":
/*!***********************************************!*\
  !*** ./src/Components/Produto/img/moto-x.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/moto-x.png?");

/***/ }),

/***/ "./src/Components/Produto/img/motoMaxx.jpg":
/*!*************************************************!*\
  !*** ./src/Components/Produto/img/motoMaxx.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/motoMaxx.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/motoMaxx2.jpg":
/*!**************************************************!*\
  !*** ./src/Components/Produto/img/motoMaxx2.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/motoMaxx2.jpg?");

/***/ }),

/***/ "./src/Components/Produto/img/motoMaxx3.jpg":
/*!**************************************************!*\
  !*** ./src/Components/Produto/img/motoMaxx3.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Components/Produto/img/motoMaxx3.jpg?");

/***/ }),

/***/ "./src/Components/Produto/index.js":
/*!*****************************************!*\
  !*** ./src/Components/Produto/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Produto; });\n/* harmony import */ var _Produto_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Produto.css */ \"./src/Components/Produto/Produto.css\");\n/* harmony import */ var _Produto_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Produto_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Produto(props) {\n  return /*#__PURE__*/React.createElement(\"figure\", {\n    className: props.categoria + \"produto ml-3 lg-3 mx-auto\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: __webpack_require__(\"./src/Components/Produto/img sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(props.imagem)).default,\n    alt: \"imagem do produto\"\n  }), /*#__PURE__*/React.createElement(\"h1\", null, props.nome), /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"strong\", null, \"150\"), \" p\\xE7s\"), /*#__PURE__*/React.createElement(\"p\", null, \"Valor: \", /*#__PURE__*/React.createElement(\"span\", null, props.valor)), /*#__PURE__*/React.createElement(\"a\", {\n    href: \"#\"\n  }, \"Adicionar ao carrinho\"));\n}\n\n//# sourceURL=webpack:///./src/Components/Produto/index.js?");

/***/ }),

/***/ "./src/Components/Sobre/Sobre.css":
/*!****************************************!*\
  !*** ./src/Components/Sobre/Sobre.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/Components/Sobre/Sobre.css?");

/***/ }),

/***/ "./src/Components/Sobre/index.js":
/*!***************************************!*\
  !*** ./src/Components/Sobre/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sobre; });\n/* harmony import */ var _Sobre_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sobre.css */ \"./src/Components/Sobre/Sobre.css\");\n/* harmony import */ var _Sobre_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Sobre_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Sobre() {\n  return /*#__PURE__*/React.createElement(\"main\", null);\n}\n\n//# sourceURL=webpack:///./src/Components/Sobre/index.js?");

/***/ }),

/***/ "./src/Pages/Home.js":
/*!***************************!*\
  !*** ./src/Pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _Components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Home */ \"./src/Components/Home/index.js\");\n\nfunction Index() {\n  return /*#__PURE__*/React.createElement(_Components_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null);\n}\n\n//# sourceURL=webpack:///./src/Pages/Home.js?");

/***/ }),

/***/ "./src/Pages/Lojas.js":
/*!****************************!*\
  !*** ./src/Pages/Lojas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Loja; });\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n//import Lojas from '../Components/Lojas';\n\n\nvar Lojas = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../Components/Lojas */ \"./src/Components/Lojas/index.js\"));\n});\nfunction Loja() {\n  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Container\"], null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Row\"], null, /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(\"p\", null, \"Carregando ...\")\n  }, /*#__PURE__*/React.createElement(Lojas, null))));\n}\n\n//# sourceURL=webpack:///./src/Pages/Lojas.js?");

/***/ }),

/***/ "./src/Pages/Pedidos.js":
/*!******************************!*\
  !*** ./src/Pages/Pedidos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pedidos; });\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n //import Pedido from '../Components/Pedido'\n\n\nvar Pedido = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../Components/Pedido */ \"./src/Components/Pedido/index.js\"));\n});\nfunction Pedidos() {\n  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Container\"], {\n    fluid: true\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Row\"], null, /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(\"p\", null, \"Carregando...\")\n  }, /*#__PURE__*/React.createElement(Pedido, null))));\n}\n\n//# sourceURL=webpack:///./src/Pages/Pedidos.js?");

/***/ }),

/***/ "./src/Pages/Produtos.js":
/*!*******************************!*\
  !*** ./src/Pages/Produtos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Produtos; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Produto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Produto */ \"./src/Components/Produto/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction Produtos() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      produtos = _useState2[0],\n      setProdutos = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var resposta, dados;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"http://localhost:5000/produtos\");\n\n          case 2:\n            resposta = _context.sent;\n            _context.next = 5;\n            return resposta.json();\n\n          case 5:\n            dados = _context.sent;\n            setProdutos(dados);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, produtos && produtos.map(function (item) {\n    return /*#__PURE__*/React.createElement(_Components_Produto__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      imagem: item.imagem,\n      nome: item.nome,\n      valor: item.preco\n    });\n  })));\n}\n\n//# sourceURL=webpack:///./src/Pages/Produtos.js?");

/***/ }),

/***/ "./src/Pages/Sobre.js":
/*!****************************!*\
  !*** ./src/Pages/Sobre.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sobres; });\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Sobre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Sobre */ \"./src/Components/Sobre/index.js\");\n\n\nfunction Sobres() {\n  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Container\"], {\n    fluid: true\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Row\"], null, /*#__PURE__*/React.createElement(_Components_Sobre__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n}\n\n//# sourceURL=webpack:///./src/Pages/Sobre.js?");

/***/ }),

/***/ "./src/rotas.js":
/*!**********************!*\
  !*** ./src/rotas.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Pages_Produtos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/Produtos */ \"./src/Pages/Produtos.js\");\n/* harmony import */ var _Pages_Pedidos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Pedidos */ \"./src/Pages/Pedidos.js\");\n/* harmony import */ var _Pages_Lojas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/Lojas */ \"./src/Pages/Lojas.js\");\n/* harmony import */ var _Pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/Home */ \"./src/Pages/Home.js\");\n/* harmony import */ var _Pages_Sobre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/Sobre */ \"./src/Pages/Sobre.js\");\n\n\n\n\n\n\n\nfunction Rotas() {\n  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Switch\"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _Pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/sobre\",\n    component: _Pages_Sobre__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/pedidos\",\n    component: _Pages_Pedidos__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/produtos\",\n    component: _Pages_Produtos__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/lojas\",\n    component: _Pages_Lojas__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rotas);\n\n//# sourceURL=webpack:///./src/rotas.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });