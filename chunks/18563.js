"use strict";
var n = r("511892"),
  o = r("541368");
t.exports = function(t, e, r) {
  return r.get && n(r.get, e, {
    getter: !0
  }), r.set && n(r.set, e, {
    setter: !0
  }), o.f(t, e, r)
}