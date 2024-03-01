(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/helpers/typeof'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/helpers/typeof', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.YourLibraryName = {}, global._typeof, global.React));
})(this, (function (exports, _typeof, React) { 'use strict';

  var Requirements = function Requirements(_ref) {
    var header = _ref.header,
      users = _ref.users;
    console.log("AAAAAAAAAAAAAA");
    console.log(header);
    console.log(users);
    return /*#__PURE__*/React.createElement("table", {
      className: "styled-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, header.map(function (element, index) {
      return /*#__PURE__*/React.createElement("th", {
        key: index
      }, element, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
        className: "fa-solid fa-caret-up"
      }), /*#__PURE__*/React.createElement("i", {
        className: "fa-solid fa-caret-down"
      })));
    }))), /*#__PURE__*/React.createElement("tbody", null, users.map(function (employee, rowIndex) {
      return /*#__PURE__*/React.createElement("tr", {
        key: rowIndex
      }, Array.isArray(employee) && employee.map(function (line, cellIndex) {
        return /*#__PURE__*/React.createElement("td", {
          key: cellIndex
        }, line);
      }), _typeof(employee) === "object" && employee !== null && /*#__PURE__*/React.createElement(React.Fragment, null, Object.values(employee).map(function (value, cellIndex) {
        return /*#__PURE__*/React.createElement("td", {
          key: cellIndex
        }, value);
      })));
    })));
  };

  exports.Requirements = Requirements;

}));
