"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LoggedOut = exports.LoggedIn = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _test = require("@storybook/test");
var _Page = require("./Page");
var _default = exports["default"] = {
  title: 'Example/Page',
  component: _Page.Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
};
var LoggedOut = exports.LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
var LoggedIn = exports.LoggedIn = {
  play: function () {
    var _play = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var canvasElement, canvas, loginButton, logoutButton;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            canvasElement = _ref.canvasElement;
            canvas = (0, _test.within)(canvasElement);
            loginButton = canvas.getByRole('button', {
              name: /Log in/i
            });
            _context.next = 5;
            return (0, _test.expect)(loginButton).toBeInTheDocument();
          case 5:
            _context.next = 7;
            return _test.userEvent.click(loginButton);
          case 7:
            _context.next = 9;
            return (0, _test.expect)(loginButton).not.toBeInTheDocument();
          case 9:
            logoutButton = canvas.getByRole('button', {
              name: /Log out/i
            });
            _context.next = 12;
            return (0, _test.expect)(logoutButton).toBeInTheDocument();
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function play(_x) {
      return _play.apply(this, arguments);
    }
    return play;
  }()
};