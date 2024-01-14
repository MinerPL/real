"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
});
var n = function() {
  return {
    onProcessStyle: function(e, t) {
      return "composes" in e ? (! function e(t, r) {
        if (!r) return !0;
        if (Array.isArray(r)) {
          for (var n = 0; n < r.length; n++)
            if (!e(t, r[n])) return !1;
          return !0
        }
        if (r.indexOf(" ") > -1) return e(t, r.split(" "));
        var i = t.options.parent;
        if ("$" === r[0]) {
          var o = i.getRule(r.substr(1));
          return !!o && o !== t && (i.classes[t.key] += " " + i.classes[o.key], !0)
        }
        return i.classes[t.key] += " " + r, !0
      }(t, e.composes), delete e.composes, e) : e
    }
  }
}