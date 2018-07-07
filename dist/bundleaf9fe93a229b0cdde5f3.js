/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/components/App/App.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/App/App.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".App {\\n  text-align: center;\\n}\\n\\n.App-logo {\\n  animation: App-logo-spin infinite 20s linear;\\n  height: 80px;\\n}\\n\\n.App-header {\\n  background-color: #222;\\n  height: 150px;\\n  padding: 20px;\\n  color: white;\\n}\\n\\n.App-title {\\n  font-size: 1.5em;\\n}\\n\\n.App-intro {\\n  font-size: large;\\n}\\n\\n@keyframes App-logo-spin {\\n  from { transform: rotate(0deg); }\\n  to { transform: rotate(360deg); }\\n}\\n\\n.mb-4 {\\n    margin-bottom: 4px;\\n}\\n\\n.ml-4 {\\n    margin-left: 4px;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/App/App.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.actSetEditingProductAsyn = exports.actClearAddingProduct = exports.actClearEditingProduct = exports.actSaveCurrentAddingProduct = exports.actUpdateProductRequest = exports.actAddProductRequest = exports.actDeleteProductRequest = exports.actFetchProductRequest = undefined;\n\nvar _ActionType = __webpack_require__(/*! ./../constants/ActionType */ \"./src/constants/ActionType.js\");\n\nvar ActionType = _interopRequireWildcard(_ActionType);\n\nvar _apiCaller = __webpack_require__(/*! ../utils/apiCaller */ \"./src/utils/apiCaller.js\");\n\nvar _apiCaller2 = _interopRequireDefault(_apiCaller);\n\nvar _endpoints = __webpack_require__(/*! ./../constants/endpoints */ \"./src/constants/endpoints.js\");\n\nvar Endpoints = _interopRequireWildcard(_endpoints);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar actFetchProduct = function actFetchProduct(products) {\n    return {\n        type: ActionType.FETCH_PRODUCTS,\n        products: products\n    };\n};\n\nvar actFetchProductRequest = function actFetchProductRequest() {\n    return function (dispatch) {\n        return (0, _apiCaller2.default)('GET', \"\" + Endpoints.PRODUCTS, null).then(function (res) {\n            dispatch(actFetchProduct(res.data));\n        }).catch(function (err) {\n            return console.log(err);\n        });\n    };\n};\n\nvar actDeleteProduct = function actDeleteProduct(id) {\n    return {\n        type: ActionType.DELETE_PRODUCT,\n        id: id\n    };\n};\n\nvar actDeleteProductRequest = function actDeleteProductRequest(id) {\n    return function (dispatch) {\n        return (0, _apiCaller2.default)('DELETE', Endpoints.PRODUCTS + \"/\" + id, null).then(function (res) {\n            //call dispatch\n            dispatch(actDeleteProduct(id));\n        }).catch(function (err) {\n            return console.log(err);\n        });\n    };\n};\n\nvar actAddProduct = function actAddProduct(product) {\n    return {\n        type: ActionType.ADD_PRODUCT,\n        product: product\n    };\n};\n\nvar actAddProductRequest = function actAddProductRequest(product) {\n    return function (dispatch) {\n        return (0, _apiCaller2.default)('POST', \"\" + Endpoints.PRODUCTS, product).then(function (res) {\n            //call dispatch redux reducer\n            dispatch(actAddProduct(res.data));\n        }).catch(function (err) {\n            return console.log(err);\n        });\n    };\n};\n\n// const actGetProductRequest = id => {\n//     return dispatch => {\n//         callAPI('GET', `${Endpoints.PRODUCTS}/${id}`, null)\n//             .then(res => {\n//                 dispatch(actSetEditingProductToStore(res.data))\n//             }).catch(err => console.log(err))\n//     }\n// }\n\n// const actSetEditingProductToStore = product => {\n//     return {\n//         type: ActionType.SET_EDITING_PRODUCT,\n//         product\n//     }\n// }\n\nvar actSetEditingProductAsyn = function actSetEditingProductAsyn(id) {\n    return {\n        type: ActionType.SET_EDITING_PRODUCT_ASYN,\n        id: id\n    };\n};\n\nvar actUpdateProduct = function actUpdateProduct(product) {\n    return {\n        type: ActionType.EDIT_PRODUCT,\n        product: product\n    };\n};\n\nvar actUpdateProductRequest = function actUpdateProductRequest(product) {\n    return function (dispatch) {\n        return (0, _apiCaller2.default)('PUT', Endpoints.PRODUCTS + \"/\" + product.id, product).then(function (res) {\n            //call update product redux store\n            dispatch(actUpdateProduct(res.data));\n        }).catch(function (err) {\n            return console.log(err);\n        });\n    };\n};\n\nvar actSaveCurrentAddingProduct = function actSaveCurrentAddingProduct(product) {\n    return {\n        type: ActionType.SAVE_CURRENT_ADDING_PRODUCT,\n        product: product\n    };\n};\n\nvar actClearEditingProduct = function actClearEditingProduct() {\n    return {\n        type: ActionType.CLEAR_EDITING_PRODUCT\n    };\n};\n\nvar actClearAddingProduct = function actClearAddingProduct() {\n    return {\n        type: ActionType.CLEAR_ADDING_PRODUCT\n    };\n};\n\nexports.actFetchProductRequest = actFetchProductRequest;\nexports.actDeleteProductRequest = actDeleteProductRequest;\nexports.actAddProductRequest = actAddProductRequest;\nexports.actUpdateProductRequest = actUpdateProductRequest;\nexports.actSaveCurrentAddingProduct = actSaveCurrentAddingProduct;\nexports.actClearEditingProduct = actClearEditingProduct;\nexports.actClearAddingProduct = actClearAddingProduct;\nexports.actSetEditingProductAsyn = actSetEditingProductAsyn;\n\n//# sourceURL=webpack:///./src/actions/index.js?");

/***/ }),

/***/ "./src/components/App/App.css":
/*!************************************!*\
  !*** ./src/components/App/App.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./App.css */ \"./node_modules/css-loader/index.js!./src/components/App/App.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/App/App.css?");

/***/ }),

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Menu = __webpack_require__(/*! ./../Menu/Menu */ \"./src/components/Menu/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _routes = __webpack_require__(/*! ./../../routes */ \"./src/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\n__webpack_require__(/*! ./App.css */ \"./src/components/App/App.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n    }\n\n    _createClass(App, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                _reactRouterDom.HashRouter,\n                null,\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"container\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"row\" },\n                        _react2.default.createElement(\n                            \"div\",\n                            { className: \"col-xs-12 col-sm-12 col-md-12 col-lg-12\" },\n                            _react2.default.createElement(_Menu2.default, null)\n                        )\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"row\" },\n                        this.showMenusContent(_routes2.default)\n                    )\n                )\n            );\n        }\n    }, {\n        key: \"showMenusContent\",\n        value: function showMenusContent(routes) {\n            var rs = null;\n            if (routes.length) {\n                rs = (0, _lodash.map)(routes, function (route, index) {\n                    return _react2.default.createElement(_reactRouterDom.Route, { key: index, path: route.path, exact: route.exact, component: route.main });\n                });\n            }\n            return _react2.default.createElement(\n                _reactRouterDom.Switch,\n                null,\n                rs\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/components/App/App.js?");

/***/ }),

/***/ "./src/components/Menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar menus = [{\n    label: 'Home',\n    to: '/',\n    exact: true\n}, {\n    label: 'Product',\n    to: '/product/list',\n    exact: false\n}];\n\nvar CustomLink = function CustomLink(_ref) {\n    var label = _ref.label,\n        to = _ref.to,\n        activeWhenOnlyExact = _ref.activeWhenOnlyExact;\n    return _react2.default.createElement(_reactRouterDom.Route, {\n        path: to,\n        exact: activeWhenOnlyExact,\n        children: function children(_ref2) {\n            var match = _ref2.match;\n\n            return _react2.default.createElement(\n                \"li\",\n                { className: match ? 'active' : '' },\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: to },\n                    label\n                )\n            );\n        }\n    });\n};\n\nvar Menu = function (_Component) {\n    _inherits(Menu, _Component);\n\n    function Menu() {\n        var _ref3;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Menu);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref3, [this].concat(args))), _this), _this.createCustomMenu = function (menus) {\n            var rs = null;\n            if (menus.length) {\n                rs = (0, _lodash.map)(menus, function (menu, index) {\n                    return _react2.default.createElement(CustomLink, { key: index, label: menu.label, to: menu.to, activeWhenOnlyExact: menu.exact });\n                });\n            };\n            return rs;\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Menu, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"navbar navbar-default\" },\n                _react2.default.createElement(\n                    \"a\",\n                    { className: \"navbar-brand\" },\n                    \"Demo Call API\"\n                ),\n                _react2.default.createElement(\n                    \"ul\",\n                    { className: \"nav navbar-nav\" },\n                    this.createCustomMenu(menus)\n                )\n            );\n        }\n    }]);\n\n    return Menu;\n}(_react.Component);\n\nexports.default = Menu;\n\n//# sourceURL=webpack:///./src/components/Menu/Menu.js?");

/***/ }),

/***/ "./src/components/ProductItem/ProductItem.js":
/*!***************************************************!*\
  !*** ./src/components/ProductItem/ProductItem.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductItem = function (_Component) {\n    _inherits(ProductItem, _Component);\n\n    function ProductItem() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, ProductItem);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductItem.__proto__ || Object.getPrototypeOf(ProductItem)).call.apply(_ref, [this].concat(args))), _this), _this.onDeleteItem = function (id) {\n            if (window.confirm('are you sure?')) {\n                _this.props.onDeleteItem(id);\n            }\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(ProductItem, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var _props = this.props,\n                index = _props.index,\n                product = _props.product;\n\n            var productStatus = product.status ? 'in stock' : 'out of stock';\n            var productClass = product.status ? 'label-success' : 'label-warning';\n            return _react2.default.createElement(\n                'tr',\n                null,\n                _react2.default.createElement(\n                    'td',\n                    null,\n                    index + 1\n                ),\n                _react2.default.createElement(\n                    'td',\n                    null,\n                    product.id\n                ),\n                _react2.default.createElement(\n                    'td',\n                    null,\n                    product.name\n                ),\n                _react2.default.createElement(\n                    'td',\n                    null,\n                    product.price\n                ),\n                _react2.default.createElement(\n                    'td',\n                    null,\n                    _react2.default.createElement(\n                        'span',\n                        { className: 'label ' + productClass },\n                        productStatus\n                    )\n                ),\n                _react2.default.createElement(\n                    'td',\n                    null,\n                    _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        {\n                            to: '/product/' + product.id + '/edit',\n                            className: 'btn btn-warning'\n                        },\n                        'Edit'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        {\n                            type: 'button',\n                            className: 'btn btn-danger ml-4',\n                            onClick: function onClick() {\n                                _this2.onDeleteItem(product.id);\n                            }\n                        },\n                        'Delete'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ProductItem;\n}(_react.Component);\n\nexports.default = ProductItem;\n\n//# sourceURL=webpack:///./src/components/ProductItem/ProductItem.js?");

/***/ }),

/***/ "./src/components/ProductsList/ProductList.js":
/*!****************************************************!*\
  !*** ./src/components/ProductsList/ProductList.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductList = function (_Component) {\n    _inherits(ProductList, _Component);\n\n    function ProductList() {\n        _classCallCheck(this, ProductList);\n\n        return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));\n    }\n\n    _createClass(ProductList, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"panel panel-primary\" },\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"panel-heading\" },\n                    _react2.default.createElement(\n                        \"h3\",\n                        { className: \"panel-title\" },\n                        \"Product List\"\n                    )\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"panel-body\" },\n                    _react2.default.createElement(\n                        \"table\",\n                        { className: \"table table-bordered table-hover\" },\n                        _react2.default.createElement(\n                            \"thead\",\n                            null,\n                            _react2.default.createElement(\n                                \"tr\",\n                                null,\n                                _react2.default.createElement(\n                                    \"th\",\n                                    null,\n                                    \"ID\"\n                                ),\n                                _react2.default.createElement(\n                                    \"th\",\n                                    null,\n                                    \"Id Product\"\n                                ),\n                                _react2.default.createElement(\n                                    \"th\",\n                                    null,\n                                    \"Name\"\n                                ),\n                                _react2.default.createElement(\n                                    \"th\",\n                                    null,\n                                    \"Price\"\n                                ),\n                                _react2.default.createElement(\n                                    \"th\",\n                                    null,\n                                    \"Status\"\n                                ),\n                                _react2.default.createElement(\n                                    \"th\",\n                                    null,\n                                    \"Actions\"\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            \"tbody\",\n                            null,\n                            this.props.children\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ProductList;\n}(_react.Component);\n\nexports.default = ProductList;\n\n//# sourceURL=webpack:///./src/components/ProductsList/ProductList.js?");

/***/ }),

/***/ "./src/config/configureStore.js":
/*!**************************************!*\
  !*** ./src/config/configureStore.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.persistedStore = exports.store = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reduxPersist = __webpack_require__(/*! redux-persist */ \"./node_modules/redux-persist/es/index.js\");\n\nvar _storage = __webpack_require__(/*! redux-persist/lib/storage */ \"./node_modules/redux-persist/lib/storage/index.js\");\n\nvar _storage2 = _interopRequireDefault(_storage);\n\nvar _autoMergeLevel = __webpack_require__(/*! redux-persist/lib/stateReconciler/autoMergeLevel1 */ \"./node_modules/redux-persist/lib/stateReconciler/autoMergeLevel1.js\");\n\nvar _autoMergeLevel2 = _interopRequireDefault(_autoMergeLevel);\n\nvar _reduxSaga = __webpack_require__(/*! redux-saga */ \"./node_modules/redux-saga/es/index.js\");\n\nvar _reduxSaga2 = _interopRequireDefault(_reduxSaga);\n\nvar _sagas = __webpack_require__(/*! ./sagas */ \"./src/config/sagas.js\");\n\nvar _sagas2 = _interopRequireDefault(_sagas);\n\nvar _index = __webpack_require__(/*! ./../reducers/index */ \"./src/reducers/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar sagaMiddleWare = (0, _reduxSaga2.default)();\n\nvar persisConfig = {\n    key: 'root',\n    storage: _storage2.default,\n    stateReconciler: _autoMergeLevel2.default,\n    whitelist: ['productForm']\n};\n\nvar persistedReducer = (0, _reduxPersist.persistReducer)(persisConfig, _index2.default);\n\nvar store = (0, _redux.createStore)(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), (0, _redux.applyMiddleware)(sagaMiddleWare));\n\nsagaMiddleWare.run(_sagas2.default);\n\nvar persistedStore = (0, _reduxPersist.persistStore)(store);\n\nexports.store = store;\nexports.persistedStore = persistedStore;\n\n//# sourceURL=webpack:///./src/config/configureStore.js?");

/***/ }),

/***/ "./src/config/sagas.js":
/*!*****************************!*\
  !*** ./src/config/sagas.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = rootSaga;\n\nvar _effects = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/es/effects.js\");\n\nvar _apiCaller = __webpack_require__(/*! ./../utils/apiCaller */ \"./src/utils/apiCaller.js\");\n\nvar _apiCaller2 = _interopRequireDefault(_apiCaller);\n\nvar _endpoints = __webpack_require__(/*! ./../constants/endpoints */ \"./src/constants/endpoints.js\");\n\nvar Endpoints = _interopRequireWildcard(_endpoints);\n\nvar _ActionType = __webpack_require__(/*! ./../constants/ActionType */ \"./src/constants/ActionType.js\");\n\nvar ActionType = _interopRequireWildcard(_ActionType);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(getProductAsyn),\n    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchGetProductAsyn),\n    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);\n\nfunction getProductAsyn(id) {\n    var product;\n    return regeneratorRuntime.wrap(function getProductAsyn$(_context) {\n        while (1) {\n            switch (_context.prev = _context.next) {\n                case 0:\n                    _context.next = 2;\n                    return (0, _effects.call)(_apiCaller2.default, 'GET', Endpoints.PRODUCTS + \"/\" + id, null);\n\n                case 2:\n                    product = _context.sent;\n                    _context.next = 5;\n                    return (0, _effects.put)({\n                        type: ActionType.SET_EDITING_PRODUCT,\n                        product: product\n                    });\n\n                case 5:\n                case \"end\":\n                    return _context.stop();\n            }\n        }\n    }, _marked, this);\n}\n\nfunction watchGetProductAsyn() {\n    return regeneratorRuntime.wrap(function watchGetProductAsyn$(_context2) {\n        while (1) {\n            switch (_context2.prev = _context2.next) {\n                case 0:\n                    _context2.next = 2;\n                    return (0, _effects.takeEvery)('SET_EDITING_PRODUCT_ASYN', getProductAsyn);\n\n                case 2:\n                case \"end\":\n                    return _context2.stop();\n            }\n        }\n    }, _marked2, this);\n}\n\nfunction rootSaga() {\n    return regeneratorRuntime.wrap(function rootSaga$(_context3) {\n        while (1) {\n            switch (_context3.prev = _context3.next) {\n                case 0:\n                    _context3.next = 2;\n                    return (0, _effects.all)([watchGetProductAsyn()]);\n\n                case 2:\n                case \"end\":\n                    return _context3.stop();\n            }\n        }\n    }, _marked3, this);\n}\n\n//# sourceURL=webpack:///./src/config/sagas.js?");

/***/ }),

/***/ "./src/constants/ActionType.js":
/*!*************************************!*\
  !*** ./src/constants/ActionType.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar FETCH_PRODUCTS = exports.FETCH_PRODUCTS = 'FETCH_PRODUCTS';\nvar DELETE_PRODUCT = exports.DELETE_PRODUCT = 'DELETE_PRODUCT';\nvar ADD_PRODUCT = exports.ADD_PRODUCT = 'ADD_PRODUCT';\nvar EDIT_PRODUCT = exports.EDIT_PRODUCT = 'EDIT_PRODUCT';\nvar SET_EDITING_PRODUCT = exports.SET_EDITING_PRODUCT = 'SET_EDITING_PRODUCT';\nvar SET_EDITING_PRODUCT_ASYN = exports.SET_EDITING_PRODUCT_ASYN = 'SET_EDITING_PRODUCT_ASYN';\nvar SAVE_CURRENT_ADDING_PRODUCT = exports.SAVE_CURRENT_ADDING_PRODUCT = 'SAVE_CURRENT_ADDING_PRODUCT';\nvar CLEAR_EDITING_PRODUCT = exports.CLEAR_EDITING_PRODUCT = 'CLEAR_EDITING_PRODUCT';\nvar CLEAR_ADDING_PRODUCT = exports.CLEAR_ADDING_PRODUCT = 'CLEAR_ADDING_PRODUCT';\n\n//# sourceURL=webpack:///./src/constants/ActionType.js?");

/***/ }),

/***/ "./src/constants/config.js":
/*!*********************************!*\
  !*** ./src/constants/config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar HOSTNAME = exports.HOSTNAME = 'https://5b30fe687ad3350014b43369.mockapi.io/api';\n\n//# sourceURL=webpack:///./src/constants/config.js?");

/***/ }),

/***/ "./src/constants/endpoints.js":
/*!************************************!*\
  !*** ./src/constants/endpoints.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//endpoint for products\nvar PRODUCTS = exports.PRODUCTS = 'products';\n\n//# sourceURL=webpack:///./src/constants/endpoints.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _App = __webpack_require__(/*! ./components/App/App */ \"./src/components/App/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _configureStore = __webpack_require__(/*! ./config/configureStore */ \"./src/config/configureStore.js\");\n\nvar _react3 = __webpack_require__(/*! redux-persist/integration/react */ \"./node_modules/redux-persist/es/integration/react.js\");\n\n__webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n\n__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\n__webpack_require__(/*! bootstrap/dist/js/bootstrap.js */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: _configureStore.store },\n    _react2.default.createElement(\n        _react3.PersistGate,\n        { loading: null, persistor: _configureStore.persistedStore },\n        _react2.default.createElement(_App2.default, null)\n    )\n), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HomePage = function (_Component) {\n    _inherits(HomePage, _Component);\n\n    function HomePage() {\n        _classCallCheck(this, HomePage);\n\n        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));\n    }\n\n    _createClass(HomePage, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'h1',\n                null,\n                'this is home page'\n            );\n        }\n    }]);\n\n    return HomePage;\n}(_react.Component);\n\nexports.default = HomePage;\n\n//# sourceURL=webpack:///./src/pages/HomePage/HomePage.js?");

/***/ }),

/***/ "./src/pages/NotfoundPage/NotfoundPage.js":
/*!************************************************!*\
  !*** ./src/pages/NotfoundPage/NotfoundPage.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NotfoundPage = function (_Component) {\n    _inherits(NotfoundPage, _Component);\n\n    function NotfoundPage() {\n        _classCallCheck(this, NotfoundPage);\n\n        return _possibleConstructorReturn(this, (NotfoundPage.__proto__ || Object.getPrototypeOf(NotfoundPage)).apply(this, arguments));\n    }\n\n    _createClass(NotfoundPage, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"alert alert-warning text-center\" },\n                _react2.default.createElement(\n                    \"button\",\n                    { type: \"button\", className: \"close\", \"data-dismiss\": \"alert\", \"aria-hidden\": \"true\" },\n                    \"\\xD7\"\n                ),\n                _react2.default.createElement(\n                    \"strong\",\n                    null,\n                    \"404 Notfound!\"\n                )\n            );\n        }\n    }]);\n\n    return NotfoundPage;\n}(_react.Component);\n\nexports.default = NotfoundPage;\n\n//# sourceURL=webpack:///./src/pages/NotfoundPage/NotfoundPage.js?");

/***/ }),

/***/ "./src/pages/ProductActionPage/ProductActionPage.js":
/*!**********************************************************!*\
  !*** ./src/pages/ProductActionPage/ProductActionPage.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _index = __webpack_require__(/*! ./../../actions/index */ \"./src/actions/index.js\");\n\nvar Action = _interopRequireWildcard(_index);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductActionPage = function (_Component) {\n    _inherits(ProductActionPage, _Component);\n\n    function ProductActionPage(props) {\n        _classCallCheck(this, ProductActionPage);\n\n        var _this = _possibleConstructorReturn(this, (ProductActionPage.__proto__ || Object.getPrototypeOf(ProductActionPage)).call(this, props));\n\n        _this.handleChange = function (event) {\n            var onSaveCurrentAddingProduct = _this.props.onSaveCurrentAddingProduct;\n\n            var target = event.target;\n            var name = target.name;\n            var value = target.type === 'checkbox' ? target.checked : target.value;\n            _this.setState(_defineProperty({}, name, value), function () {\n                if (!_this.state.id) {\n                    console.log('saving addding');\n                    onSaveCurrentAddingProduct(_this.state);\n                    //console.log(this.state);\n                }\n            });\n        };\n\n        _this.handleSubmit = function (event) {\n            event.preventDefault();\n            var history = _this.props.history;\n            var _this$state = _this.state,\n                id = _this$state.id,\n                name = _this$state.name,\n                price = _this$state.price,\n                status = _this$state.status;\n\n            if (name && price && (status || status === false)) {\n                //check if existsed id, then edit product\n                if (id) {\n                    _this.props.onUpdateProduct(_this.state);\n                    history.goBack();\n                } else {\n                    //otherwise add product to backend\n                    _this.props.onAddProduct(_this.state);\n                    _this.props.onClearAddingProduct();\n                    history.goBack();\n                }\n            }\n        };\n\n        _this.state = {\n            id: '',\n            name: '',\n            price: '',\n            status: false\n        };\n        return _this;\n    }\n\n    _createClass(ProductActionPage, [{\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n            var match = this.props.match;\n\n            if (match) {\n                console.log('load editing');\n                var id = match.params.id;\n                //get product info when edit product\n\n                this.props.onGetProduct(id);\n            } else {\n                console.log('load adding');\n                var addingItem = this.props.addingItem;\n\n                this.setState({\n                    id: addingItem.id,\n                    name: addingItem.name,\n                    price: addingItem.price,\n                    status: addingItem.status\n                });\n            }\n        }\n    }, {\n        key: \"componentWillReceiveProps\",\n        value: function componentWillReceiveProps(nextProps) {\n            //console.log(nextProps);\n            console.log('receive prop');\n            if (nextProps && nextProps.editingItem.id) {\n                console.log('jump to edit');\n                var editingItem = nextProps.editingItem;\n\n                this.setState({\n                    id: editingItem.id,\n                    name: editingItem.name,\n                    price: editingItem.price,\n                    status: editingItem.status\n                });\n            } else if (nextProps && nextProps.addingItem) {\n                console.log('jump to add');\n                var addingItem = nextProps.addingItem;\n\n                this.setState({\n                    id: addingItem.id,\n                    name: addingItem.name,\n                    price: addingItem.price,\n                    status: addingItem.status\n                });\n            }\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var _state = this.state,\n                name = _state.name,\n                price = _state.price,\n                status = _state.status;\n\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"col-xs-12 col-sm-12 col-md-12 col-lg-12\" },\n                _react2.default.createElement(\n                    \"form\",\n                    { onSubmit: this.handleSubmit },\n                    _react2.default.createElement(\n                        \"legend\",\n                        null,\n                        this.state.id ? 'Editing Product' : 'Add Product'\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"form-group\" },\n                        _react2.default.createElement(\n                            \"label\",\n                            null,\n                            \"Name\"\n                        ),\n                        _react2.default.createElement(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            id: \"\",\n                            placeholder: \"Name\",\n                            name: \"name\",\n                            value: name,\n                            onChange: this.handleChange\n                        })\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"form-group\" },\n                        _react2.default.createElement(\n                            \"label\",\n                            null,\n                            \"Price\"\n                        ),\n                        _react2.default.createElement(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            id: \"\",\n                            placeholder: \"Price\",\n                            name: \"price\",\n                            value: price,\n                            onChange: this.handleChange\n                        })\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"form-group\" },\n                        _react2.default.createElement(\n                            \"label\",\n                            null,\n                            \"Status\"\n                        ),\n                        _react2.default.createElement(\n                            \"div\",\n                            { className: \"checkbox\" },\n                            _react2.default.createElement(\n                                \"label\",\n                                null,\n                                _react2.default.createElement(\"input\", {\n                                    type: \"checkbox\",\n                                    name: \"status\",\n                                    checked: status,\n                                    onChange: this.handleChange\n                                }),\n                                \"in stock\"\n                            )\n                        )\n                    ),\n                    _react2.default.createElement(\n                        \"button\",\n                        { type: \"submit\", className: \"btn btn-primary\" },\n                        \"Submit\"\n                    ),\n                    _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: \"/product/list\", className: \"btn btn-primary ml-4\" },\n                        \"Back\"\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ProductActionPage;\n}(_react.Component);\n\nvar mapStateToProp = function mapStateToProp(state) {\n    return {\n        editingItem: state.editingItem,\n        addingItem: state.productForm\n    };\n};\n\nvar mapDispatchToProp = function mapDispatchToProp(dispatch, prop) {\n    return {\n        onAddProduct: function onAddProduct(product) {\n            dispatch(Action.actAddProductRequest(product));\n        },\n        onGetProduct: function onGetProduct(id) {\n            dispatch(Action.actSetEditingProductAsyn(id));\n        },\n        onUpdateProduct: function onUpdateProduct(product) {\n            dispatch(Action.actUpdateProductRequest(product));\n        },\n        onSaveCurrentAddingProduct: function onSaveCurrentAddingProduct(product) {\n            dispatch(Action.actSaveCurrentAddingProduct(product));\n        },\n        onClearAddingProduct: function onClearAddingProduct() {\n            dispatch(Action.actClearAddingProduct());\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProp, mapDispatchToProp)(ProductActionPage);\n\n//# sourceURL=webpack:///./src/pages/ProductActionPage/ProductActionPage.js?");

/***/ }),

/***/ "./src/pages/ProductListPage/ProductListPage.js":
/*!******************************************************!*\
  !*** ./src/pages/ProductListPage/ProductListPage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ProductList = __webpack_require__(/*! ./../../components/ProductsList/ProductList */ \"./src/components/ProductsList/ProductList.js\");\n\nvar _ProductList2 = _interopRequireDefault(_ProductList);\n\nvar _ProductItem = __webpack_require__(/*! ./../../components/ProductItem/ProductItem */ \"./src/components/ProductItem/ProductItem.js\");\n\nvar _ProductItem2 = _interopRequireDefault(_ProductItem);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _index = __webpack_require__(/*! ./../../actions/index */ \"./src/actions/index.js\");\n\nvar Action = _interopRequireWildcard(_index);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductListPage = function (_Component) {\n    _inherits(ProductListPage, _Component);\n\n    function ProductListPage(props) {\n        _classCallCheck(this, ProductListPage);\n\n        var _this = _possibleConstructorReturn(this, (ProductListPage.__proto__ || Object.getPrototypeOf(ProductListPage)).call(this, props));\n\n        _this.onDeleteItem = function (id) {\n            _this.props.ondeleteProduct(id);\n        };\n\n        _this.showProductItem = function (products) {\n            var rs = null;\n            if (products.length) {\n                rs = (0, _lodash.map)(products, function (product, index) {\n                    return _react2.default.createElement(_ProductItem2.default, { key: index, index: index, product: product, onDeleteItem: _this.onDeleteItem });\n                });\n            }\n            return rs;\n        };\n\n        _this.addProduct = _this.addProduct.bind(_this);\n        return _this;\n    }\n\n    _createClass(ProductListPage, [{\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n            this.props.onFetchProductsToReduxState();\n        }\n    }, {\n        key: \"addProduct\",\n        value: function addProduct() {\n            console.log('click add product');\n            this.props.onClearEditingProduct();\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            //let { products } = this.props;\n            var products = this.props.products;\n\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"col-xs-12 col-sm-12 col-md-12 col-lg-12\" },\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    {\n                        to: \"/product/add\",\n                        className: \"btn btn-success mb-4\",\n                        onClick: this.addProduct\n                    },\n                    \"Add Product\"\n                ),\n                _react2.default.createElement(\n                    _ProductList2.default,\n                    null,\n                    this.showProductItem(products)\n                )\n            );\n        }\n    }]);\n\n    return ProductListPage;\n}(_react.Component);\n\nvar mapStateToProp = function mapStateToProp(state) {\n    return {\n        products: state.products\n    };\n};\n\nvar mapDispatchToProp = function mapDispatchToProp(dispatch, prop) {\n    return {\n        onFetchProductsToReduxState: function onFetchProductsToReduxState() {\n            dispatch(Action.actFetchProductRequest());\n        },\n        ondeleteProduct: function ondeleteProduct(id) {\n            dispatch(Action.actDeleteProductRequest(id));\n        },\n        onClearEditingProduct: function onClearEditingProduct() {\n            dispatch(Action.actClearEditingProduct());\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProp, mapDispatchToProp)(ProductListPage);\n\n//# sourceURL=webpack:///./src/pages/ProductListPage/ProductListPage.js?");

/***/ }),

/***/ "./src/reducers/editingItem.js":
/*!*************************************!*\
  !*** ./src/reducers/editingItem.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _ActionType = __webpack_require__(/*! ./../constants/ActionType */ \"./src/constants/ActionType.js\");\n\nvar ActionType = _interopRequireWildcard(_ActionType);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar initialState = {};\nvar editingItem = function editingItem() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case ActionType.SET_EDITING_PRODUCT:\n            return _extends({}, action.product);\n        case ActionType.CLEAR_EDITING_PRODUCT:\n            return {};\n        default:\n            return state;\n    }\n};\n\nexports.default = editingItem;\n\n//# sourceURL=webpack:///./src/reducers/editingItem.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _products = __webpack_require__(/*! ./../reducers/products */ \"./src/reducers/products.js\");\n\nvar _products2 = _interopRequireDefault(_products);\n\nvar _editingItem = __webpack_require__(/*! ./editingItem */ \"./src/reducers/editingItem.js\");\n\nvar _editingItem2 = _interopRequireDefault(_editingItem);\n\nvar _productForm = __webpack_require__(/*! ./productForm */ \"./src/reducers/productForm.js\");\n\nvar _productForm2 = _interopRequireDefault(_productForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar appReducer = (0, _redux.combineReducers)({\n    products: _products2.default,\n    editingItem: _editingItem2.default,\n    productForm: _productForm2.default\n});\n\nexports.default = appReducer;\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/productForm.js":
/*!*************************************!*\
  !*** ./src/reducers/productForm.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _ActionType = __webpack_require__(/*! ./../constants/ActionType */ \"./src/constants/ActionType.js\");\n\nvar ActionType = _interopRequireWildcard(_ActionType);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar initialState = {\n    id: '',\n    name: '',\n    price: '',\n    status: false\n};\nvar productForm = function productForm() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case ActionType.SAVE_CURRENT_ADDING_PRODUCT:\n            var product = action.product;\n\n            return action.product;\n        case ActionType.CLEAR_ADDING_PRODUCT:\n            return {\n                id: '',\n                name: '',\n                price: '',\n                status: false\n            };\n        default:\n            return state;\n    }\n};\n\nexports.default = productForm;\n\n//# sourceURL=webpack:///./src/reducers/productForm.js?");

/***/ }),

/***/ "./src/reducers/products.js":
/*!**********************************!*\
  !*** ./src/reducers/products.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _ActionType = __webpack_require__(/*! ./../constants/ActionType */ \"./src/constants/ActionType.js\");\n\nvar ActionType = _interopRequireWildcard(_ActionType);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar initialState = [];\n\nvar products = function products() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n\n    var index = -1;\n    switch (action.type) {\n        case ActionType.FETCH_PRODUCTS:\n            state = action.products;\n            return [].concat(_toConsumableArray(state));\n        case ActionType.DELETE_PRODUCT:\n            var id = action.id;\n            index = (0, _lodash.findIndex)(state, function (product, index) {\n                return product.id === id;\n            });\n            if (index !== -1) state.splice(index, 1);\n            return [].concat(_toConsumableArray(state));\n        case ActionType.ADD_PRODUCT:\n            var product = action.product;\n            state.push(product);\n            return [].concat(_toConsumableArray(state));\n        case ActionType.EDIT_PRODUCT:\n            index = (0, _lodash.findIndex)(state, function (product, index) {\n                return product.id === action.product.id;\n            });\n            if (index !== -1) {\n                state[index] = action.product;\n            }\n            return [].concat(_toConsumableArray(state));\n        default:\n            return [].concat(_toConsumableArray(state));\n    }\n};\n\nexports.default = products;\n\n//# sourceURL=webpack:///./src/reducers/products.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage/HomePage */ \"./src/pages/HomePage/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _NotfoundPage = __webpack_require__(/*! ./pages/NotfoundPage/NotfoundPage */ \"./src/pages/NotfoundPage/NotfoundPage.js\");\n\nvar _NotfoundPage2 = _interopRequireDefault(_NotfoundPage);\n\nvar _ProductListPage = __webpack_require__(/*! ./pages/ProductListPage/ProductListPage */ \"./src/pages/ProductListPage/ProductListPage.js\");\n\nvar _ProductListPage2 = _interopRequireDefault(_ProductListPage);\n\nvar _ProductActionPage = __webpack_require__(/*! ./pages/ProductActionPage/ProductActionPage */ \"./src/pages/ProductActionPage/ProductActionPage.js\");\n\nvar _ProductActionPage2 = _interopRequireDefault(_ProductActionPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = [{\n    path: '/',\n    exact: true,\n    main: function main() {\n        return _react2.default.createElement(_HomePage2.default, null);\n    }\n}, {\n    path: '/product/list',\n    exact: false,\n    main: function main() {\n        return _react2.default.createElement(_ProductListPage2.default, null);\n    }\n}, {\n    path: '/product/add',\n    exact: false,\n    main: function main(_ref) {\n        var history = _ref.history;\n        return _react2.default.createElement(_ProductActionPage2.default, { history: history });\n    }\n}, {\n    path: '/product/:id/edit',\n    exact: false,\n    main: function main(_ref2) {\n        var match = _ref2.match,\n            history = _ref2.history;\n        return _react2.default.createElement(_ProductActionPage2.default, { match: match, history: history });\n    }\n}, {\n    path: '',\n    exact: false,\n    main: function main() {\n        return _react2.default.createElement(_NotfoundPage2.default, null);\n    }\n}];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/utils/apiCaller.js":
/*!********************************!*\
  !*** ./src/utils/apiCaller.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _config = __webpack_require__(/*! ./../constants/config */ \"./src/constants/config.js\");\n\nvar Config = _interopRequireWildcard(_config);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar callAPI = function callAPI() {\n    var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';\n    var endpoint = arguments[1];\n    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n    return (0, _axios2.default)({\n        method: method,\n        url: Config.HOSTNAME + \"/\" + endpoint,\n        data: data\n    });\n};\n\nexports.default = callAPI;\n\n//# sourceURL=webpack:///./src/utils/apiCaller.js?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"./node_modules/babel-polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/index.js?");

/***/ })

/******/ });