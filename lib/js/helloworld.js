'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ajaxGet = require('./ajaxGet.js');

var _ajaxGet2 = _interopRequireDefault(_ajaxGet);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*heand*/
var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'h1',
				null,
				'Home'
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

var Type = function (_React$Component2) {
	_inherits(Type, _React$Component2);

	function Type() {
		_classCallCheck(this, Type);

		return _possibleConstructorReturn(this, (Type.__proto__ || Object.getPrototypeOf(Type)).apply(this, arguments));
	}

	_createClass(Type, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'h1',
				null,
				'Type'
			);
		}
	}]);

	return Type;
}(_react2.default.Component);

var Search = function (_React$Component3) {
	_inherits(Search, _React$Component3);

	function Search() {
		_classCallCheck(this, Search);

		return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
	}

	_createClass(Search, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'h1',
				null,
				'Search'
			);
		}
	}]);

	return Search;
}(_react2.default.Component);

var Header = function (_React$Component4) {
	_inherits(Header, _React$Component4);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'h1',
				null,
				'Header'
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

var App = function (_React$Component5) {
	_inherits(App, _React$Component5);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(Header, null),
				this.props.children
			);
		}
	}]);

	return App;
}(_react2.default.Component);

var ComponentBos = function (_React$Component6) {
	_inherits(ComponentBos, _React$Component6);

	function ComponentBos() {
		_classCallCheck(this, ComponentBos);

		return _possibleConstructorReturn(this, (ComponentBos.__proto__ || Object.getPrototypeOf(ComponentBos)).apply(this, arguments));
	}

	_createClass(ComponentBos, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactRouter.Router,
				{ history: history },
				_react2.default.createElement(
					_reactRouter.Route,
					{ path: '/', component: App },
					_react2.default.createElement(_reactRouter.IndexRoute, { component: Home }),
					_react2.default.createElement(_reactRouter.Route, { path: 'type/:id', component: Type }),
					_react2.default.createElement(_reactRouter.Route, { path: 'search/:id', component: Search })
				)
			);
		}
	}]);

	return ComponentBos;
}(_react2.default.Component);

/**/


var InputDom = function (_React$Component7) {
	_inherits(InputDom, _React$Component7);

	function InputDom(props) {
		_classCallCheck(this, InputDom);

		var _this7 = _possibleConstructorReturn(this, (InputDom.__proto__ || Object.getPrototypeOf(InputDom)).call(this, props));

		_this7.state = { value: '' };

		return _this7;
	}

	_createClass(InputDom, [{
		key: 'handSubmit',
		value: function handSubmit(e) {
			e.preventDefault();
			alert(this.state.value);
		}
	}, {
		key: 'handAlert',
		value: function handAlert(e) {
			this.setState({ value: e.target.value });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this8 = this;

			return _react2.default.createElement(
				'form',
				{ onSubmit: function onSubmit(e) {
						_this8.handSubmit(e);
					} },
				_react2.default.createElement(
					'label',
					null,
					_react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: function onChange(e) {
							_this8.handAlert(e);
						} })
				),
				_react2.default.createElement('input', { type: 'submit' })
			);
		}
	}]);

	return InputDom;
}(_react2.default.Component);

var Manp = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$199.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }, { category: "Electronics", price: "$129.99", stocked: true, name: "Nexus 7" }, { category: "Electronics", price: "$500.99", stocked: true, name: "Nexus 8" }];

/**/
/*const data = [
  {Id: "Pete Hunt", name: "This is one comment"},
  {Id: "Jordan Walke", name: "This is *another* comment"}
];*/

var Map = function (_React$Component8) {
	_inherits(Map, _React$Component8);

	function Map() {
		var _ref;

		_classCallCheck(this, Map);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this9 = _possibleConstructorReturn(this, (_ref = Map.__proto__ || Object.getPrototypeOf(Map)).call.apply(_ref, [this].concat(args)));

		_this9.state = {
			data: []
		};

		_this9.getAjax = _this9.getAjax.bind(_this9);
		return _this9;
	}

	_createClass(Map, [{
		key: 'getAjax',
		value: function getAjax() {
			var _this10 = this;

			(0, _ajaxGet2.default)('GET', this.props.url, function (res) {
				if (!res.errno) {

					_this10.setState({
						data: res
					});
				}
			});

			/* $.ajax({
         url:this.props.url,
         dataType:'json',
         success(data){
         	const dataE =data;
           this.setState({
           	data:dataE
           })
   console.log(dataE)
         },
         error(e){
           }
          
     })*/
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.getAjax();
			setInterval(this.getAjax, this.props.setTime);
		}
	}, {
		key: 'render',
		value: function render() {
			var serviceShows = this.state.data.map(function (data, index) {

				return _react2.default.createElement(
					'div',
					{ key: index },
					data.Name,
					',',
					data.Id
				);
			});

			return _react2.default.createElement(
				'view',
				null,
				serviceShows
			);
		}
	}]);

	return Map;
}(_react2.default.Component);

exports.default = Map;