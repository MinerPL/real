"use strict";
var r = {
    foo: {}
  },
  o = Object;
e.exports = function() {
  return ({
    __proto__: r
  }).foo === r.foo && !(({
    __proto__: null
  }) instanceof o)
}