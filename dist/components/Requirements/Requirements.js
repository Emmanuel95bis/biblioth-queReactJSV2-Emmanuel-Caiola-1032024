"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Requirements = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _react = _interopRequireDefault(require("react"));
var Requirements = exports.Requirements = function Requirements(_ref) {
  var header = _ref.header,
    users = _ref.users;
  return /*#__PURE__*/_react["default"].createElement("table", {
    className: "styled-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, header.map(function (element, index) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: index
    }, element, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa-solid fa-caret-up"
    }), /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa-solid fa-caret-down"
    })));
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, users.map(function (employee, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: rowIndex
    }, Array.isArray(employee) && employee.map(function (line, cellIndex) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: cellIndex
      }, line);
    }), (0, _typeof2["default"])(employee) === "object" && employee !== null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Object.values(employee).map(function (value, cellIndex) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: cellIndex
      }, value);
    })));
  })));
};