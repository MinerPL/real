"use strict";
var r = n("911718")("%Object.defineProperty%", !0),
  o = function() {
    if (r) try {
      return r({}, "a", {
        value: 1
      }), !0
    } catch (e) {}
    return !1
  };
o.hasArrayLengthDefineBug = function() {
  if (!o()) return null;
  try {
    return 1 !== r([], "length", {
      value: 1
    }).length
  } catch (e) {
    return !0
  }
}, e.exports = o