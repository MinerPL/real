"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
}), r("222007"), r("424973");
var n = r("151261"),
  i = r("603398"),
  o = (0, n.create)((0, i.default)()),
  s = function(e) {
    void 0 === e && (e = o);
    var t, r = new Map,
      n = 0,
      i = function() {
        return (!t || t.rules.index.length > 1e4) && (t = e.createStyleSheet().attach()), t
      };

    function s() {
      var e = arguments,
        t = JSON.stringify(e),
        o = r.get(t);
      if (o) return o.className;
      var s = [];
      for (var a in e) {
        var u = e[a];
        if (!Array.isArray(u)) {
          s.push(u);
          continue
        }
        for (var l = 0; l < u.length; l++) s.push(u[l])
      }
      for (var c = {}, f = [], d = 0; d < s.length; d++) {
        var h = s[d];
        if (h) {
          var p = h;
          if ("string" == typeof h) {
            var y = r.get(h);
            y && (y.labels.length && f.push.apply(f, y.labels), p = y.style)
          }
          p.label && -1 === f.indexOf(p.label) && f.push(p.label), Object.assign(c, p)
        }
      }
      delete c.label;
      var g = (0 === f.length ? "css" : f.join("-")) + "-" + n++;
      i().addRule(g, c);
      var m = i().classes[g],
        v = {
          style: c,
          labels: f,
          className: m
        };
      return r.set(t, v), r.set(m, v), m
    }
    return s.getSheet = i, s
  }()