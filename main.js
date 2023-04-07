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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n\\t--primary-light: #fefefe;\\n\\t--secondary-light: #e5e7eb;\\n\\t/* --primary-dark: #1f2937; */\\n}\\nbody {\\n\\t/* display: flex; */\\n\\tmin-height: 100vh;\\n\\tmin-width: 100vw;\\n\\t/* background-color: #81d8d0 !important; */\\n\\tbackground-color: lightskyblue !important;\\n\\t/* background-image: url(\\\"./img/weather_background.jpg\\\"); */\\n\\t/* background-size: cover; */\\n}\\n.weather__row {\\n\\t/* background-color: #81d8d0 !important; */\\n}\\n.footerContainer {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\twidth: 100%;\\n\\tposition: absolute;\\n\\tbottom: 0;\\n\\tmargin-top: 1rem;\\n\\tcolor: var(--primary-light);\\n\\ttext-shadow: rgba(0, 0, 0, 0.24) 0px 10px 8px;\\n}\\n.footer__link {\\n\\tcolor: var(--primary-light);\\n}\\n\\n.weather__row{\\n\\t/* background-image: url(\\\"./img/Untitled\\\\ 8.png\\\"); */\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\nlet cityName = \"Chicago\";\nlet units = \"imperial\";\n\nconst fahrenheitButton = document.querySelector(\".fahrenheit__button\");\nconst celsiusButton = document.querySelector(\".celsius__button\");\nfahrenheitButton.addEventListener(\"click\", () => {\n\tif (celsiusButton.classList.contains(\"active\")) {\n\t\tfahrenheitButton.classList.add(\"active\");\n\t\tcelsiusButton.classList.remove(\"active\");\n\t\tunits = \"imperial\";\n\t\tlet cityName;\n\t\tif (searchInput.value === \"\") {\n\t\t\tcityName = \"Chicago\";\n\t\t} else {\n\t\t\tcityName = searchInput.value;\n\t\t}\n\t\tgetCurrentWeather(cityName, units);\n\t\tgetDailyForecast(cityName, units);\n\t\tgetHourlyForecast(cityName, units);\n\t}\n});\ncelsiusButton.addEventListener(\"click\", () => {\n\tif (fahrenheitButton.classList.contains(\"active\")) {\n\t\tcelsiusButton.classList.add(\"active\");\n\t\tfahrenheitButton.classList.remove(\"active\");\n\t\tunits = \"metric\";\n\t\tlet cityName;\n\t\tif (searchInput.value === \"\") {\n\t\t\tcityName = \"Chicago\";\n\t\t} else {\n\t\t\tcityName = searchInput.value;\n\t\t}\n\n\t\tgetCurrentWeather(cityName, units);\n\t\tgetDailyForecast(cityName, units);\n\t\tgetHourlyForecast(cityName, units);\n\t}\n});\n\nconst searchInput = document.querySelector(\".form-control\");\nsearchInput.addEventListener(\"submit\", (e) => {\n\te.preventDefault();\n});\n\nconst searchButton = document.querySelector(\".search__button\");\nsearchButton.addEventListener(\"click\", async () => {\n\tif (searchInput.value === \"\") {\n\t\treturn \"Chicago\";\n\t}\n\t// const currentWeatherData = await getCurrentWeather(\n\t// \tsearchInput.value,\n\t// \tunits\n\t// );\n\t// const hourlyWeatherData = await getHourlyForecast(searchInput.value, units);\n\t// const dailyWeatherData = await getDailyForecast(searchInput.value, units);\n});\n\nconst getCurrentWeather = async (cityName, units) => {\n\tconst weatherConditions = document.querySelector(\".weather__conditions\");\n\tconst locationCity = document.querySelector(\".location__city\");\n\tconst locationDate = document.querySelector(\".location__date\");\n\tconst locationTemperature = document.querySelector(\n\t\t\".location__temperature\"\n\t);\n\tconst locationIcon = document.querySelector(\".location__image\");\n\tconst weatherSunrise = document.querySelector(\".weather__sunriseTime\");\n\tconst weatherSunset = document.querySelector(\".weather__sunsetTime\");\n\tconst weatherFeel = document.querySelector(\".weather__feelsTemperature\");\n\tconst weatherHumidity = document.querySelector(\n\t\t\".weather__humidityPercentage\"\n\t);\n\t// const weatherChance = document.querySelector(\".weather__rainChance\");\n\tconst weatherWind = document.querySelector(\".weather__windSpeed\");\n\n\ttry {\n\t\tconst apikey = \"3df118afb0098e7f7c49145c27c3f311\";\n\t\t// const response = await fetch(\n\t\t// \t`http://api.weatherapi.com/v1/current.json?key=${key}&q=Chicago`\n\t\t// );\n\t\tconsole.log(cityName);\n\t\tconst location = await fetch(\n\t\t\t`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apikey}`\n\t\t);\n\t\tconst locationData = await location.json();\n\t\t// console.log(locationData);\n\t\tconst latitude = locationData[0].lat;\n\t\tconst longitude = locationData[0].lon;\n\t\tconst response = await fetch(\n\t\t\t`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`\n\t\t);\n\t\tconst weatherData = await response.json();\n\t\tconsole.log(weatherData);\n\n\t\tweatherConditions.innerHTML = weatherData.weather[0].description;\n\t\tlocationCity.innerHTML = weatherData.name;\n\n\t\t// const options = { weekday: \"long\" };\n\t\tconst date = new Date(weatherData.dt * 1000);\n\t\tconst timeOfDay = `${date\n\t\t\t.toLocaleTimeString([], {\n\t\t\t\thour: \"numeric\",\n\t\t\t\tminute: \"2-digit\",\n\t\t\t})\n\t\t\t.replace(\" AM\", \"AM\")\n\t\t\t.replace(\" PM\", \"PM\")}`;\n\t\t// const dayOfTheWeek = new Intl.DateTimeFormat(\"en-US\", options).format(\n\t\t// \tdate\n\t\t// );\n\t\t// const dayOfTheMonth = new Intl.DateTimeFormat(\"en-US\").format(date);\n\n\t\tlocationDate.innerHTML = `Today at ${timeOfDay}`;\n\t\tlocationTemperature.innerHTML = `${Math.round(weatherData.main.temp)}°`;\n\t\tlocationIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;\n\t\t// locationIcon.src = \"./img/Untitled 6.png\";\n\n\t\tweatherSunrise.innerHTML = `${new Date(\n\t\t\tweatherData.sys.sunrise * 1000\n\t\t).toLocaleTimeString(\"en-US\", {\n\t\t\thour: \"numeric\",\n\t\t\tminute: \"2-digit\",\n\t\t})}`;\n\t\tweatherSunset.innerHTML = `${new Date(\n\t\t\tweatherData.sys.sunset * 1000\n\t\t).toLocaleTimeString(\"en-US\", {\n\t\t\thour: \"numeric\",\n\t\t\tminute: \"2-digit\",\n\t\t})}`;\n\n\t\tweatherFeel.innerHTML = `${Math.round(weatherData.main.feels_like)}° `;\n\t\tweatherHumidity.innerHTML = `${weatherData.main.humidity}%`;\n\t\tweatherWind.innerHTML = `${Math.round(weatherData.wind.speed)} mph`;\n\t} catch (error) {\n\t\talert(error);\n\t\treturn null;\n\t}\n};\n\nconst dailyForecastContainer = document.querySelector(\n\t\".daily__forecastContainer\"\n);\nconst hourlyForecastContainer = document.querySelector(\n\t\".hourly__forecastContainer\"\n);\nconst dailyButton = document.querySelector(\".daily__button\");\nconst hourlyButton = document.querySelector(\".hourly__button\");\n\ndailyButton.addEventListener(\"click\", () => {\n\tif (dailyForecastContainer.classList.contains(\"d-none\")) {\n\t\tdailyButton.classList.add(\"active\");\n\t\tdailyForecastContainer.classList.remove(\"d-none\");\n\t\thourlyButton.classList.remove(\"active\");\n\t\thourlyForecastContainer.classList.add(\"d-none\");\n\t}\n});\nhourlyButton.addEventListener(\"click\", () => {\n\tif (hourlyForecastContainer.classList.contains(\"d-none\")) {\n\t\thourlyButton.classList.add(\"active\");\n\t\thourlyForecastContainer.classList.remove(\"d-none\");\n\t\tdailyButton.classList.remove(\"active\");\n\t\tdailyForecastContainer.classList.add(\"d-none\");\n\t}\n});\n\nconst getDailyForecast = async (cityName, units) => {\n\ttry {\n\t\tconst apikey = \"3df118afb0098e7f7c49145c27c3f311\";\n\t\tconst location = await fetch(\n\t\t\t`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apikey}`\n\t\t);\n\t\tconst locationData = await location.json();\n\t\t// console.log(locationData);\n\t\tconst latitude = locationData[0].lat;\n\t\tconst longitude = locationData[0].lon;\n\t\tconst weatherData = await fetch(\n\t\t\t`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=8&appid=${apikey}&units=${units}`\n\t\t);\n\t\tconst forecastData = await weatherData.json();\n\t\t// console.log(forecastData);\n\n\t\tconst options = { weekday: \"long\", timeZone: \"Etc/GMT\" };\n\n\t\t// const time = new Intl.DateTimeFormat(\"en-US\", options).format(\n\t\t// \tnew Date(forecastData.list[0].dt * 1000)\n\t\t// );\n\t\t// console.log(time);\n\n\t\tconst dailyForecast = document.querySelector(\".daily__forecast\");\n\t\tdailyForecast.innerHTML = \"\";\n\t\tfor (let i = 0; i < 8; i++) {\n\t\t\tconst row = document.createElement(\"div\");\n\t\t\trow.className =\n\t\t\t\t\"weather__row d-flex justify-content-evenly bg-light bg-opacity-50 shadow-4-strong rounded-3 mb-2 pt-2\";\n\n\t\t\tconst dayPlusX = document.createElement(\"div\");\n\t\t\tdayPlusX.className = `day__plus${i + 1} col-4 mb-4`;\n\t\t\tdayPlusX.innerHTML = `${new Intl.DateTimeFormat(\n\t\t\t\t\"en-US\",\n\t\t\t\toptions\n\t\t\t).format(new Date(forecastData.list[i].dt * 1000))}`;\n\n\t\t\tconst dayPlusXTemp = document.createElement(\"div\");\n\t\t\tdayPlusXTemp.className = `day__plus${i + 1}col-4 text-center`;\n\n\t\t\tconst dayPlusXMaxTemp = document.createElement(\"h6\");\n\t\t\tdayPlusXMaxTemp.className = `day__plus${i + 1}High m-0`;\n\t\t\tdayPlusXMaxTemp.innerHTML = `${Math.round(\n\t\t\t\tforecastData.list[i].temp.max\n\t\t\t)}° `;\n\n\t\t\tconst dayPlusXMinTemp = document.createElement(\"p\");\n\t\t\tdayPlusXMinTemp.className = `day__plus${i + 1}High m-0`;\n\t\t\tdayPlusXMinTemp.innerHTML = `${Math.round(\n\t\t\t\tforecastData.list[i].temp.min\n\t\t\t)}° `;\n\n\t\t\tconst dayPlusXImage = document.createElement(\"div\");\n\t\t\tdayPlusXImage.className = `day__plus${i + 1}Image col-4 text-end`;\n\n\t\t\tconst dayPlusXIcon = document.createElement(\"img\");\n\t\t\tdayPlusXIcon.className = `day__plus${i + 1}Icon`;\n\t\t\tdayPlusXIcon.style = \"height: 48px\";\n\t\t\tdayPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;\n\n\t\t\tdayPlusXTemp.appendChild(dayPlusXMaxTemp);\n\t\t\tdayPlusXTemp.appendChild(dayPlusXMinTemp);\n\n\t\t\tdayPlusXImage.appendChild(dayPlusXIcon);\n\n\t\t\trow.appendChild(dayPlusX);\n\t\t\trow.appendChild(dayPlusXTemp);\n\t\t\trow.appendChild(dayPlusXImage);\n\t\t\tdailyForecast.appendChild(row);\n\t\t}\n\t} catch (error) {\n\t\talert(error);\n\t\treturn null;\n\t}\n};\n\nconst getHourlyForecast = async (cityName, units) => {\n\ttry {\n\t\tconst apikey = \"3df118afb0098e7f7c49145c27c3f311\";\n\n\t\tconst location = await fetch(\n\t\t\t`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apikey}`\n\t\t);\n\t\tconst locationData = await location.json();\n\t\t// console.log(locationData);\n\t\tconst latitude = locationData[0].lat;\n\t\tconst longitude = locationData[0].lon;\n\t\tconst weatherData = await fetch(\n\t\t\t`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}&cnt=24`\n\t\t);\n\t\tconst forecastData = await weatherData.json();\n\t\t// console.log(forecastData);\n\t\t// const time = forecastData.list;\n\t\t// console.log(time);\n\t\tconst carousel1 = document.querySelector(\".carousel__1\");\n\t\tconst carousel2 = document.querySelector(\".carousel__2\");\n\t\tconst carousel3 = document.querySelector(\".carousel__3\");\n\t\tcarousel1.innerHTML = \"\";\n\t\tcarousel2.innerHTML = \"\";\n\t\tcarousel3.innerHTML = \"\";\n\n\t\t// first carousel data\n\t\tfor (let i = 0; i < 8; i++) {\n\t\t\tconst hourPlusX = document.createElement(\"div\");\n\t\t\thourPlusX.className = `hour__plus${\n\t\t\t\ti + 1\n\t\t\t} d-flex justify-content-between justify-content-md-evenly  align-items-center`;\n\n\t\t\tconst time = new Date(forecastData.list[i].dt * 1000);\n\t\t\tconst hourPlusXTime = document.createElement(\"div\");\n\t\t\thourPlusXTime.className = `hour__plus${i + 1}Time`;\n\t\t\thourPlusXTime.innerHTML = `${time.toLocaleTimeString(\n\t\t\t\tnavigator.language,\n\t\t\t\t{\n\t\t\t\t\thour: \"2-digit\",\n\t\t\t\t\tminute: \"2-digit\",\n\t\t\t\t}\n\t\t\t)}`;\n\n\t\t\tconst hourPlusXTemp = document.createElement(\"h6\");\n\t\t\thourPlusXTemp.className = `hour__plus${i + 1}Temp m-0`;\n\t\t\thourPlusXTemp.innerHTML = `${Math.round(\n\t\t\t\tforecastData.list[i].main.temp_max\n\t\t\t)}° `;\n\n\t\t\tconst hourPlusXIcon = document.createElement(\"img\");\n\t\t\thourPlusXIcon.className = `hour__plus${i + 1}Icon `;\n\t\t\thourPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;\n\n\t\t\thourPlusX.appendChild(hourPlusXTime);\n\t\t\thourPlusX.appendChild(hourPlusXTemp);\n\t\t\thourPlusX.appendChild(hourPlusXIcon);\n\t\t\tcarousel1.appendChild(hourPlusX);\n\t\t}\n\t\t// second carousel data\n\t\tfor (let i = 8; i < 16; i++) {\n\t\t\tconst hourPlusX = document.createElement(\"div\");\n\t\t\thourPlusX.className = `hour__plus${\n\t\t\t\ti + 1\n\t\t\t} d-flex justify-content-between justify-content-md-evenly  align-items-center`;\n\n\t\t\tconst time = new Date(forecastData.list[i].dt * 1000);\n\t\t\tconst hourPlusXTime = document.createElement(\"div\");\n\t\t\thourPlusXTime.className = `hour__plus${i + 1}Time`;\n\t\t\thourPlusXTime.innerHTML = `${time.toLocaleTimeString(\n\t\t\t\tnavigator.language,\n\t\t\t\t{\n\t\t\t\t\thour: \"2-digit\",\n\t\t\t\t\tminute: \"2-digit\",\n\t\t\t\t}\n\t\t\t)}`;\n\n\t\t\tconst hourPlusXTemp = document.createElement(\"h6\");\n\t\t\thourPlusXTemp.className = `hour__plus${i + 1}Temp m-0`;\n\t\t\thourPlusXTemp.innerHTML = `${Math.round(\n\t\t\t\tforecastData.list[i].main.temp_max\n\t\t\t)}° `;\n\n\t\t\tconst hourPlusXIcon = document.createElement(\"img\");\n\t\t\thourPlusXIcon.className = `hour__plus${i + 1}Icon `;\n\t\t\thourPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;\n\n\t\t\thourPlusX.appendChild(hourPlusXTime);\n\t\t\thourPlusX.appendChild(hourPlusXTemp);\n\t\t\thourPlusX.appendChild(hourPlusXIcon);\n\t\t\tcarousel2.appendChild(hourPlusX);\n\t\t}\n\t\t// third carousel data\n\t\tfor (let i = 16; i < 24; i++) {\n\t\t\tconst hourPlusX = document.createElement(\"div\");\n\t\t\thourPlusX.className = `hour__plus${\n\t\t\t\ti + 1\n\t\t\t} d-flex justify-content-between justify-content-md-evenly align-items-center`;\n\n\t\t\tconst time = new Date(forecastData.list[i].dt * 1000);\n\t\t\tconst hourPlusXTime = document.createElement(\"div\");\n\t\t\thourPlusXTime.className = `hour__plus${i + 1}Time`;\n\t\t\thourPlusXTime.innerHTML = `${time.toLocaleTimeString(\n\t\t\t\tnavigator.language,\n\t\t\t\t{\n\t\t\t\t\thour: \"2-digit\",\n\t\t\t\t\tminute: \"2-digit\",\n\t\t\t\t}\n\t\t\t)}`;\n\n\t\t\tconst hourPlusXTemp = document.createElement(\"h6\");\n\t\t\thourPlusXTemp.className = `hour__plus${i + 1}Temp m-0`;\n\t\t\thourPlusXTemp.innerHTML = `${Math.round(\n\t\t\t\tforecastData.list[i].main.temp_max\n\t\t\t)}° `;\n\n\t\t\tconst hourPlusXIcon = document.createElement(\"img\");\n\t\t\thourPlusXIcon.className = `hour__plus${i + 1}Icon `;\n\t\t\thourPlusXIcon.src = `https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}.png`;\n\n\t\t\thourPlusX.appendChild(hourPlusXTime);\n\t\t\thourPlusX.appendChild(hourPlusXTemp);\n\t\t\thourPlusX.appendChild(hourPlusXIcon);\n\t\t\tcarousel3.appendChild(hourPlusX);\n\t\t}\n\t} catch (error) {\n\t\talert(error);\n\t\treturn null;\n\t}\n};\n\ngetCurrentWeather(cityName, units);\ngetDailyForecast(cityName, units);\ngetHourlyForecast(cityName, units);\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;