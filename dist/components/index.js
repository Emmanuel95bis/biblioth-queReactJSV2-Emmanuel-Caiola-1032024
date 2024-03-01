"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Requirements = require("./Requirements/Requirements.js");
Object.keys(_Requirements).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Requirements[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Requirements[key];
    }
  });
});