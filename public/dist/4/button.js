webpackJsonp([10],{

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
            console.log(_this.config);
            var style = {};
            switch (_this.config.size.value) {
                case 'big':
                    style.width = '28px';break;
                case 'middle':
                    style.width = '24px';break;
                case 'small':
                    style.width = '20px';break;
                default:
                    style.width = '24px';
            }
            switch (_this.config.location.value) {
                case 'left':
                    style.textAlign = 'left';break;
                case 'center':
                    style.textAlign = 'center';break;
                case 'right':
                    style.textAlign = 'right';break;
                default:
                    style.textAlign = 'center';
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