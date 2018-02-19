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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Nav = __webpack_require__(2);

var _Nav2 = _interopRequireDefault(_Nav);

var _Profile = __webpack_require__(4);

var _Profile2 = _interopRequireDefault(_Profile);

var _Feed = __webpack_require__(5);

var _Feed2 = _interopRequireDefault(_Feed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Start of Main Class, With ES6 refactor

var Main = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(_Nav2.default, null),
        React.createElement(_Profile2.default, null),
        React.createElement(_Feed2.default, null)
      );
    }
  }]);

  return Container;
}(React.Component);

ReactDOM.render(React.createElement(Main), document.getElementById('root'));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Start of Nav Class, With ES6 refactor
var Nav = function (_React$Component) {
		_inherits(Nav, _React$Component);

		function Nav() {
				_classCallCheck(this, Nav);

				return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
		}

		_createClass(Nav, [{
				key: "render",
				value: function render() {
						return React.createElement(
								"nav",
								{ className: "navbar navbar-light" },
								React.createElement(
										"a",
										{ className: "navbar-brand", href: "#" },
										React.createElement("img", { src: "../../resources/bootstrap-solid.svg", width: "30", height: "30", className: "d-inline-block align-top mr-2", alt: "" }),
										React.createElement(
												"span",
												null,
												" Sociality "
										)
								),
								React.createElement(
										"div",
										{ className: "float-right" },
										React.createElement("img", { src: "../../resources/account.png", width: "30", height: "30", className: "d-inline-block align-top mr-2", alt: "" }),
										React.createElement("img", { src: "../../resources/cog.svg", width: "30", height: "30", className: "d-inline-block align-top", alt: "" })
								)
						);
				}
		}]);

		return Nav;
}(React.Component);

exports.default = Nav;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Start of Profile Class, With ES6 refactor
var SideNav = function (_React$Component) {
	_inherits(SideNav, _React$Component);

	function SideNav(props) {
		_classCallCheck(this, SideNav);

		var _this = _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, props));

		_this.state = {
			platformToggles: [{ platform: "Reddit", toggle: false }, { platform: "Twitter", toggle: false }, { platform: "Instagram", toggle: false }, { platform: "Youtube", toggle: false }, { platform: "Facebook", toggle: false }],
			allToggle: true,
			profileDisplay: false
		};

		_this.platformToggler = _this.platformToggler.bind(_this);
		_this.profileToggler = _this.profileToggler.bind(_this);
		_this.constructProfile = _this.constructProfile.bind(_this);
		_this.buildSocialAccounts = _this.buildSocialAccounts.bind(_this);
		_this.buildAllAccountTab = _this.buildAllAccountTab.bind(_this);
		_this.buildSocialAccountTab = _this.buildSocialAccountTab.bind(_this);
		return _this;
	}

	_createClass(SideNav, [{
		key: "profileToggler",
		value: function profileToggler(e) {
			this.setState({ profileDisplay: this.state.profileDisplay ? false : true });
		}
	}, {
		key: "platformToggler",
		value: function platformToggler(e) {
			if (e.target.id != "All") {
				var tempArray = this.state.platformToggles;
				tempArray.find(function (x) {
					return x.platform === e.target.id;
				}).toggle = tempArray.find(function (x) {
					return x.platform === e.target.id;
				}).toggle === true ? false : true;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = Object.keys(tempArray)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var key = _step.value;

						if (tempArray[key].toggle == true) {
							this.setState({ allToggle: false });
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				this.setState({ platformToggles: tempArray });

				tempArray = this.state.platformToggles;
				var count = 0;
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = Object.keys(tempArray)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var _key = _step2.value;

						if (tempArray[_key].toggle == false) {
							count = count + 1;
							if (count == this.state.platformToggles.length) {
								this.setState({ allToggle: true });
							}
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			} else {
				var tempArray = this.state.platformToggles;
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = Object.keys(tempArray)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var _key2 = _step3.value;

						tempArray[_key2].toggle = false;
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				this.setState({ allToggle: this.state.allToggle ? false : true, platformToggles: tempArray });
			}
		}
	}, {
		key: "constructProfile",
		value: function constructProfile() {
			return React.createElement(
				"div",
				{ className: "row profile" },
				React.createElement(
					"div",
					{ className: "col-sm-4 text-center align-middle" },
					React.createElement("img", { src: "../../resources/profile.png", className: "rounded", alt: "..." })
				),
				React.createElement(
					"div",
					{ className: "col-sm-8 align-middle" },
					React.createElement(
						"h2",
						null,
						"Profile Name"
					),
					React.createElement("hr", null),
					"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
				)
			);
		}
	}, {
		key: "buildSocialAccounts",
		value: function buildSocialAccounts(social) {

			//Test
			var social = [{ platform: "Reddit", account: "Sample" }, { platform: "Twitter", account: "Sample" }, { platform: "Instagram", account: "Sample" }, { platform: "Youtube", account: "Sample" }, { platform: "Facebook", account: "Sample" }];
			//Test

			var SocialAccounts = [];
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = Object.keys(social)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var key = _step4.value;

					SocialAccounts.push(this.buildSocialAccountTab(social[key].platform, social[key].account));
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			if (SocialAccounts.length >= 2) {
				SocialAccounts.unshift(this.buildAllAccountTab());
			}

			return SocialAccounts;
		}
	}, {
		key: "buildAllAccountTab",
		value: function buildAllAccountTab() {
			var activeButton = this.state.allToggle === true ? " active" : "";
			return React.createElement(
				"label",
				{ className: "btn btn-secondary toggle-button" + activeButton },
				React.createElement("input", { id: "All", type: "checkbox", autoComplete: "off", onChange: this.platformToggler.bind(this) }),
				" All"
			);
		}
	}, {
		key: "buildSocialAccountTab",
		value: function buildSocialAccountTab(platform, account) {
			var activeButton = this.state.platformToggles.find(function (x) {
				return x.platform === platform;
			}).toggle ? " active" : "";
			return React.createElement(
				"label",
				{ className: "btn btn-secondary toggle-button" + activeButton },
				React.createElement("input", { id: platform, type: "checkbox", autoComplete: "off", onChange: this.platformToggler.bind(this) }),
				" ",
				platform
			);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ hidden: !this.state.profileDisplay },
					this.constructProfile(),
					React.createElement(
						"div",
						{ className: "btn-group btn-group-toggle toggle-bar" },
						this.buildSocialAccounts(null)
					)
				),
				React.createElement(
					"div",
					{ className: "collapse-profile" },
					React.createElement("p", { className: "text-center p-clean", onClick: this.profileToggler.bind(this) })
				)
			);
		}
	}]);

	return SideNav;
}(React.Component);

exports.default = SideNav;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Start of Feed Class, With ES6 refactor
var Feed = function (_React$Component) {
	_inherits(Feed, _React$Component);

	function Feed(props) {
		_classCallCheck(this, Feed);

		var _this = _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).call(this, props));

		_this.state = {
			numberOfCards: 5
		};
		_this.addFeedCard = _this.addFeedCard.bind(_this);
		_this.fillFeed = _this.fillFeed.bind(_this);
		return _this;
	}

	_createClass(Feed, [{
		key: "addFeedCard",
		value: function addFeedCard(title, description, imageSrc) {
			return React.createElement(
				"div",
				null,
				React.createElement("hr", null),
				React.createElement(
					"div",
					{ className: "row feed-card" },
					React.createElement(
						"div",
						{ className: "col-sm-4 text-center align-middle" },
						React.createElement("img", { src: "../../resources/bg.svg", className: "rounded", alt: "..." })
					),
					React.createElement(
						"div",
						{ className: "col-sm-8 align-middle" },
						React.createElement(
							"h4",
							{ className: "purple-text" },
							"Profile Name"
						),
						React.createElement("hr", null),
						"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
					)
				)
			);
		}
	}, {
		key: "fillFeed",
		value: function fillFeed() {
			var array = [];
			for (var i = 0; i < this.state.numberOfCards; i++) {
				array.push(this.addFeedCard("title", "description", "imageSrc"));
			}
			return array;
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "container" },
				this.fillFeed(),
				React.createElement("hr", null),
				React.createElement(
					"button",
					{ type: "button", className: "btn btn-primary btn-lg btn-block purple-button" },
					"Load More"
				)
			);
		}
	}]);

	return Feed;
}(React.Component);

exports.default = Feed;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map