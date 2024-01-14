"use strict";
var r = s("37549")("%Object.defineProperty%", !0),
  i = function() {
    if (r) try {
      return r({}, "a", {
        value: 1
      }), !0
    } catch (t) {}
    return !1
  };
i.hasArrayLengthDefineBug = function() {
  if (!i()) return null;
  try {
    return 1 !== r([], "length", {
      value: 1
    }).length
  } catch (t) {
    return !0
  }
}, t.exports = i