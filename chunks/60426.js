"use strict";
var r = s("366400"),
  i = s("16662");
t.exports = function() {
  var t = i();
  return r(Array.prototype, {
    map: t
  }, {
    map: function() {
      return Array.prototype.map !== t
    }
  }), t
}