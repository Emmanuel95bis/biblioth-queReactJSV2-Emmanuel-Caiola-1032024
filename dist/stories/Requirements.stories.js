"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Template = exports.App = exports.AnotherStory = void 0;
require("./style.css");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Requirements = require("../components/Requirements");
var employees = [{
  FirstName: "Tony",
  LastName: "Stark",
  StartDate: "12/08/1993",
  Department: "Sales",
  DateOfBirth: "15/02/1978",
  Street: "13 rue de Paris",
  City: "Paris",
  State: "AL",
  ZipCode: "75005"
}, {
  FirstName: "Steve",
  LastName: "Job",
  StartDate: "10/04/1997",
  Department: "Marketing",
  DateOfBirth: "11/09/1967",
  Street: "13 rue victor Hugo",
  City: "Lyon",
  State: "AS",
  ZipCode: "005"
}];
var entete = ["FirstName", "LastName", "StartDate", "Department", "DateOfBirth", "Street", "City", "State", "ZipCode"];
console.log(employees);
console.log(entete);

// Metadata for the story
var meta = {
  title: "App Test",
  component: _Requirements.Requirements
};

// Template for the story
var Template = exports.Template = function Template() {
  return /*#__PURE__*/_react["default"].createElement(_Requirements.Requirements, {
    header: entete,
    users: employees
  });
};

// Prop types for the Template component
Template.propTypes = {
  // Define any prop types needed for your component
};

// Default story export with metadata and template
var _default = exports["default"] = meta;
var App = exports.App = Template;

// Optionally, you can also include additional stories or parameters
var AnotherStory = exports.AnotherStory = function AnotherStory() {
  return /*#__PURE__*/_react["default"].createElement(_Requirements.Requirements, {
    header: entete,
    users: employees
  });
};
AnotherStory.storyName = "Another Story";