    "use strict";
    var n = r("511892"),
      o = r("541368");
    e.exports = function(e, t, r) {
      return r.get && n(r.get, t, {
        getter: !0
      }), r.set && n(r.set, t, {
        setter: !0
      }), o.f(e, t, r)
    }