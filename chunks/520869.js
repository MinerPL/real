"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
}), r("106442"), r("175143");
var n = r("797286"),
  i = r("151261"),
  o = function() {
    return {
      onProcessRule: function(e) {
        "keyframes" === e.type && (e.at = (0, n.supportedKeyframes)(e.at))
      },
      onProcessStyle: function(e, t) {
        return "style" !== t.type ? e : function e(t) {
          for (var r in t) {
            var o = t[r];
            if ("fallbacks" === r && Array.isArray(o)) {
              t[r] = o.map(e);
              continue
            }
            var s = !1,
              a = (0, n.supportedProperty)(r);
            a && a !== r && (s = !0);
            var u = !1,
              l = (0, n.supportedValue)(a, (0, i.toCssValue)(o));
            l && l !== o && (u = !0), (s || u) && (s && delete t[r], t[a || r] = l || o)
          }
          return t
        }(e)
      },
      onChangeValue: function(e, t) {
        return (0, n.supportedValue)(t, (0, i.toCssValue)(e)) || e
      }
    }
  }