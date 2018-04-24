module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jamesonknoll/development/react-typewriter-loop/node_modules/prop-types/index.js'");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TypewriterLoop = function (_React$Component) {
  _inherits(TypewriterLoop, _React$Component);

  function TypewriterLoop(props) {
    _classCallCheck(this, TypewriterLoop);

    var _this = _possibleConstructorReturn(this, (TypewriterLoop.__proto__ || Object.getPrototypeOf(TypewriterLoop)).call(this, props));

    _this.state = {
      activeString: 'test',
      stringCounter: 0,
      typedString: ''
    };

    _this.loopStrings = _this.loopStrings.bind(_this);
    _this.animateLetters = _this.animateLetters.bind(_this);
    return _this;
  }

  _createClass(TypewriterLoop, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.loopStrings();
    }
  }, {
    key: 'loopStrings',
    value: function loopStrings() {
      var _this2 = this;

      var _props = this.props,
          typedStrings = _props.typedStrings,
          delay = _props.delay,
          typeSpeed = _props.typeSpeed;


      function calculateDelay(index) {
        // get # of letters up to index
        var count = typedStrings.slice(0, index).join('').split('').length;
        // and calculate delay from total # of letters
        var totalDelay = typeSpeed * count * 2 + delay * index * 2;
        return totalDelay;
      }

      var stringCounter = 0;

      var _loop = function _loop(i) {
        window.setTimeout(function () {
          _this2.animateLetters(typedStrings[stringCounter]);
          stringCounter++;
          if (stringCounter === typedStrings.length) {
            window.setTimeout(function () {
              _this2.loopStrings();
            }, delay * 2 + typedStrings[i].length * typeSpeed * 2);
          }
        }, calculateDelay(i));
      };

      for (var i = 0; i < typedStrings.length; i++) {
        _loop(i);
      }

      /*
       window.setInterval( () => {
         this.setState({activeString: typedStrings[this.state.stringCounter]});
         this.animateLetters(typedStrings[this.state.stringCounter])
          if (this.state.stringCounter >= typedStrings.length - 1){
          this.setState({
            stringCounter: 0,
          });
        } else {
          this.setState({
            stringCounter: this.state.stringCounter + 1
          })
        };
      }, 5000)
      */
    }
  }, {
    key: 'animateLetters',
    value: function animateLetters(string) {
      var _this3 = this;

      var typingSpeed = 100;
      var delay = 1000;

      var ar = string.split('');
      var letterCounter = 0;

      for (var i = 0; i < ar.length; i++) {
        window.setTimeout(function () {
          if (letterCounter <= ar.length - 1) {
            _this3.setState({
              typedString: _this3.state.typedString + ar[letterCounter]
            });
            letterCounter++;
          } else {
            return;
          }
        }, typingSpeed * (i + 1));
      }

      for (var _i = 0; _i < ar.length; _i++) {
        window.setTimeout(function () {
          if (letterCounter >= 0) {
            var str = _this3.state.typedString;
            var newstr = str.substring(0, str.length - 1);
            _this3.setState({
              typedString: newstr
            });
          } else {
            return;
          }
        }, typingSpeed * (_i + 1 + ar.length) + delay);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'h2',
          null,
          'Here we\'re looping strings (with animation?)'
        ),
        _react2.default.createElement(
          'p',
          null,
          this.state.typedString
        )
      );
    }
  }]);

  return TypewriterLoop;
}(_react2.default.Component);

exports.default = TypewriterLoop;

/* props

className: class name
typedStrings: array of strings to type out
typeSpeed: a number to indicate typing speed, 0 - 100, 100 is instant
deleteSpeed: a number to indicate deletion speed, 0 - 100, 100 is instant
delay: delay after typing each string, in ms
loop: loop over items or just run through them once
cursor: boolean to indicate whether cursor should show

*/

TypewriterLoop.defaultProps = {
  className: 'typewriter-loop',
  typedStrings: ['react typewriter loop', 'can display products, services, or features', 'of your business', 'starting from today'],
  typeSpeed: 100,
  deleteSpeed: 100,
  delay: 1000,
  loop: true,
  cursor: true
};

TypewriterLoop.PropTypes = {
  className: _propTypes2.default.string,
  typedStrings: _propTypes2.default.arrayOf(_propTypes2.default.string),
  typeSpeed: _propTypes2.default.number,
  deleteSpeed: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  loop: _propTypes2.default.bool,
  cursor: _propTypes2.default.bool
};

/***/ })
/******/ ]);