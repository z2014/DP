webpackJsonp([13],{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.computedConfig = function () {
            var style = {
                backgroundColor: '#1890ff',
                color: 'white',
                borderRadius: '10px',
                padding: '5px',
                cursor: 'pointer',
                textAlign: 'center'
            };
            switch (_this.config.size.value) {
                case 'big':
                    style.fontSize = '18px';style.width = '60px';break;
                case 'middle':
                    style.fontSize = '16px';style.width = '50px';break;
                case 'small':
                    style.fontSize = '14px';style.width = '40px';break;
                default:
                    style.fontSize = '14px';
            }
            switch (_this.config.location.value) {
                case 'left':
                    break;
                case 'center':
                    style.margin = '0 auto';break;
                case 'right':
                    style.float = 'right';break;
                default:
                    style.margin = '0 auto';
            }
            return style;
        };

        _this.config = _this.props.com.com.component_meta;
        return _this;
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var style = this.computedConfig();
            return _react2.default.createElement(
                'div',
                { style: style },
                this.config.content.value
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

exports.default = Button;
module.exports = exports['default'];

/***/ })

});