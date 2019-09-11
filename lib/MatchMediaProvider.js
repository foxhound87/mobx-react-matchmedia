'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobx = require('mobx');

var _matchMedia = require('./matchMedia');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var breakpoints = void 0;

var setObservable = function setObservable(observable, obj) {
  return _mobx.set ? (0, _mobx.set)(observable, obj) : (0, _mobx.extendObservable)(observable, obj);
};

var MatchMediaProvider = (_temp = _class = function (_Component) {
  _inherits(MatchMediaProvider, _Component);

  function MatchMediaProvider(props) {
    _classCallCheck(this, MatchMediaProvider);

    var _this = _possibleConstructorReturn(this, (MatchMediaProvider.__proto__ || Object.getPrototypeOf(MatchMediaProvider)).call(this, props));

    _this.handleResize = function (e) {
      e.preventDefault();
      _this.matchBreakpoints();
    };

    _this.matchBreakpoints = function () {
      (0, _mobx.runInAction)('match breakpoints', function () {
        (0, _matchMedia.setMatchMediaConfig)();
        Object.keys(_this.templates).forEach(function (key) {
          return _this.updateBreakpoints(key, _this.templates[key]);
        });
      });
    };

    _this.updateBreakpoints = (0, _mobx.action)('update breakpoints', function (key, val) {
      var match = (0, _matchMedia.matchMedia)(val).matches;
      setObservable(_this.props.breakpoints, _defineProperty({}, key, match));
    });

    if (!breakpoints) breakpoints = Object.assign({}, (0, _mobx.toJS)(_this.props.breakpoints));
    if (!_this.templates) _this.templates = Object.assign({}, (0, _mobx.toJS)(breakpoints));
    return _this;
  }

  _createClass(MatchMediaProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize); // eslint-disable-line
      this.matchBreakpoints(); // set initials values
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize); // eslint-disable-line
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props && this.props.children
      );
    }
  }]);

  return MatchMediaProvider;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  breakpoints: _propTypes2.default.object
}, _temp);
exports.default = MatchMediaProvider;
module.exports = exports['default'];