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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function () {\n    function Game() {\n        _classCallCheck(this, Game);\n\n        console.log(111);\n    }\n\n    _createClass(Game, [{\n        key: \"lalala\",\n        value: function lalala() {\n            console.log(222);\n        }\n    }]);\n\n    return Game;\n}();\n\nexports.default = Game;\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Game = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\nvar _Game2 = _interopRequireDefault(_Game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar gg = new _Game2.default(); // let app = new PIXI.Application({ width: 256, height: 256 });\n// document.body.appendChild(app.view);\n\ngg.lalala();\nvar stage = new PIXI.Container();\nvar NUM_THEMES = 1;\nvar themesLoaded = 0;\n\nvar renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0xffffff });\ndocument.body.appendChild(renderer.view);\n\nvar metalbtn;\nfunction onCompleteMetal() {\n    metalbtn = new GOWN.Button();\n    metalbtn.width = 150;\n    metalbtn.height = 100;\n    metalbtn.x = 320;\n    metalbtn.y = 30;\n    metalbtn.label = \"third\";\n    stage.addChild(metalbtn);\n\n    metalbtn.on(GOWN.Button.TRIGGERED, function () {\n        if (window.console) {\n            console.log(\"you clicked the third button!\");\n        }\n    });\n\n    themesLoaded++;\n    if (themesLoaded === NUM_THEMES) {\n        requestAnimationFrame(animate);\n    }\n\n    var a = new GOWN.shapes.Line(0, 1, 500, 1);\n    stage.addChild(a);\n}\n\nvar theme = new GOWN.ThemeParser(\"../themes/aeon_desktop/aeon_desktop.json\");\ntheme.once(GOWN.Theme.COMPLETE, onCompleteMetal, undefined);\n\nfunction animate() {\n    // render the stage\n    renderer.render(stage);\n    requestAnimationFrame(animate);\n}\nGOWN.loader.load();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });