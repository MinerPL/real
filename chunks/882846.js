"use strict";
n.r(t), n.d(t, {
  reduce: function() {
    return o
  }
});
var r = n("714413");

function o() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case r.ADD_SOURCE:
    case r.ADD_TARGET:
      return e + 1;
    case r.REMOVE_SOURCE:
    case r.REMOVE_TARGET:
      return e - 1;
    default:
      return e
  }
}