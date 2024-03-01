"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Requirement = require("./Requirement");
Object.keys(_Requirement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Requirement[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Requirement[key];
    }
  });
});