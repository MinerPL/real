"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
});
var n = r("261438"),
  i = function(e) {
    return e && "object" == typeof e && !Array.isArray(e)
  },
  o = "extendCurrValue" + Date.now();

function s(e, t, r, o) {
  return void 0 === o && (o = {}), ! function(e, t, r, o) {
    if ("string" == typeof e.extend) {
      if (!r) return;
      var a = r.getRule(e.extend);
      if (!a || a === t) return;
      var u = a.options.parent;
      u && s(u.rules.raw[e.extend], t, r, o);
      return
    }
    if (Array.isArray(e.extend)) {
      for (var l = 0; l < e.extend.length; l++) {
        var c = e.extend[l];
        s("string" == typeof c ? (0, n.default)({}, e, {
          extend: c
        }) : e.extend[l], t, r, o)
      }
      return
    }
    for (var f in e.extend) {
      if ("extend" === f) {
        s(e.extend.extend, t, r, o);
        continue
      }
      if (i(e.extend[f])) {
        !(f in o) && (o[f] = {}), s(e.extend[f], t, r, o[f]);
        continue
      }
      o[f] = e.extend[f]
    }
  }(e, t, r, o), ! function(e, t, r, n) {
    for (var o in e)
      if ("extend" !== o) {
        if (i(n[o]) && i(e[o])) {
          s(e[o], t, r, n[o]);
          continue
        }
        if (i(e[o])) {
          n[o] = s(e[o], t, r);
          continue
        }
        n[o] = e[o]
      }
  }(e, t, r, o), o
}
var a = function() {
  return {
    onProcessStyle: function(e, t, r) {
      return "extend" in e ? s(e, t, r) : e
    },
    onChangeValue: function(e, t, r) {
      if ("extend" !== t) return e;
      if (null == e || !1 === e) {
        for (var n in r[o]) r.prop(n, null);
        return r[o] = null, null
      }
      if ("object" == typeof e) {
        for (var i in e) r.prop(i, e[i]);
        r[o] = e
      }
      return null
    }
  }
}