"use strict";
var e = n("664144");
t.exports = !e(function() {
  return 7 !== Object.defineProperty({}, 1, {
    get: function() {
      return 7
    }
  })[1]
})