'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _helloworld = require('./helloworld');

var _helloworld2 = _interopRequireDefault(_helloworld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloMess = function (_React$Component) {
	_inherits(HelloMess, _React$Component);

	function HelloMess() {
		_classCallCheck(this, HelloMess);

		return _possibleConstructorReturn(this, (HelloMess.__proto__ || Object.getPrototypeOf(HelloMess)).apply(this, arguments));
	}

	_createClass(HelloMess, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Hello ',
				this.props.name
			);
		}
	}]);

	return HelloMess;
}(_react2.default.Component);

/*时间*/


var Tick = function (_React$Component2) {
	_inherits(Tick, _React$Component2);

	function Tick(props) {
		_classCallCheck(this, Tick);

		var _this2 = _possibleConstructorReturn(this, (Tick.__proto__ || Object.getPrototypeOf(Tick)).call(this, props));

		_this2.state = { sent: new Date().toLocaleTimeString() };
		return _this2;
	}

	_createClass(Tick, [{
		key: 'tick',
		value: function tick() {
			this.setState(function () {
				return {
					sent: new Date().toLocaleTimeString()
				};
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			this.intime = setInterval(function () {
				return _this3.tick();
			}, 1000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			cleatInterval(this.intime);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					'time:',
					this.state.sent
				)
			);
		}
	}]);

	return Tick;
}(_react2.default.Component);
/*时间*/


var Time = function (_React$Component3) {
	_inherits(Time, _React$Component3);

	function Time(props) {
		_classCallCheck(this, Time);

		var _this4 = _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, props));

		_this4.state = { secondsElapsed: 0 };
		return _this4;
	}

	_createClass(Time, [{
		key: 'tick',
		value: function tick() {
			this.setState(function (prevState) {
				return {
					secondsElapsed: prevState.secondsElapsed + 1
				};
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this5 = this;

			this.interval = setInterval(function () {
				return _this5.tick();
			}, 1000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			cleatInterval(this.interval);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Time:',
				this.state.secondsElapsed
			);
		}
	}]);

	return Time;
}(_react2.default.Component);
/*判断*/


var Judge = function (_React$Component4) {
	_inherits(Judge, _React$Component4);

	function Judge(props) {
		_classCallCheck(this, Judge);

		var _this6 = _possibleConstructorReturn(this, (Judge.__proto__ || Object.getPrototypeOf(Judge)).call(this, props));

		_this6.state = { IsOn: true };
		_this6.handChick = _this6.handChick.bind(_this6); //这个绑定是必要的，使‘this’在回调中起作用
		return _this6;
	}

	_createClass(Judge, [{
		key: 'handChick',
		value: function handChick() {
			this.setState(function (prevent) {
				return {
					IsOn: !prevent.IsOn
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this7 = this;

			return _react2.default.createElement(
				'button',
				{ onClick: function onClick(e) {
						return _this7.handChick(e);
					} },
				this.state.IsOn ? 'ON' : 'OFF'
			);
		}
	}]);

	return Judge;
}(_react2.default.Component);
/*if*/


function Mailbox(props) {

	var dad = props.dad;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'Hello!'
		),
		'You have ',
		dad,
		' unread messages.'
	);
}
var messages = ['React', 'Re: React', 'Re:Re: React'];
var list = messages.map(function (mess, index) {
	return _react2.default.createElement(
		'div',
		{ key: 'mess' + index },
		mess
	);
});
/*表单*/

var Form = function (_React$Component5) {
	_inherits(Form, _React$Component5);

	function Form(props) {
		_classCallCheck(this, Form);

		var _this8 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

		_this8.state = { value: '' };
		_this8.handSubmit = _this8.handSubmit.bind(_this8);
		_this8.handChange = _this8.handChange.bind(_this8);
		return _this8;
	}

	_createClass(Form, [{
		key: 'handSubmit',
		value: function handSubmit(event) {
			alert(this.state.value);
			event.preventDefault();
		}
	}, {
		key: 'handChange',
		value: function handChange(event) {
			this.setState({ value: event.target.value });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				{ onSubmit: this.handSubmit },
				_react2.default.createElement(
					'label',
					null,
					_react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.handChange })
				),
				_react2.default.createElement('input', { type: 'submit', value: 'submit' })
			);
		}
	}]);

	return Form;
}(_react2.default.Component);
/*多个元素*/


var Infrom = function (_React$Component6) {
	_inherits(Infrom, _React$Component6);

	function Infrom(props) {
		_classCallCheck(this, Infrom);

		var _this9 = _possibleConstructorReturn(this, (Infrom.__proto__ || Object.getPrototypeOf(Infrom)).call(this, props));

		_this9.state = {
			isGoing: true,
			megss: '1'
		};
		_this9.handbox = _this9.handbox.bind(_this9);
		return _this9;
	}

	_createClass(Infrom, [{
		key: 'handbox',
		value: function handbox(event) {
			event.preventDefault();
			var target = event.target;
			var name = target.name;
			var value = target.type === 'checkbox' ? target.checked : target.value;
			this.setState(_defineProperty({}, name, value));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				null,
				_react2.default.createElement(
					'label',
					null,
					_react2.default.createElement('input', { name: 'isGoing', type: 'checkbox', checked: this.state.isGoing, onChange: this.handbox })
				),
				_react2.default.createElement(
					'label',
					null,
					_react2.default.createElement('input', { type: 'text', name: 'megss', value: this.state.megss, onChange: this.handbox })
				),
				_react2.default.createElement('input', { type: 'submit', value: 'submit' })
			);
		}
	}]);

	return Infrom;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(
	'div',
	null,
	_react2.default.createElement(_helloworld2.default, { url: 'http://120.76.31.111/app/XhlGetSubjectTypeList', setTime: '2000' })
), document.getElementById('root'));