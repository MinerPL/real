"use strict";
r.r(t), r.d(t, {
  createUseStyles: function() {
    return T
  }
}), r("222007"), r("781738"), r("424973");
var n, i = r("261438"),
  o = r("59079"),
  s = r("884691"),
  a = r.n(s);
r("204527");
var u = r("715541"),
  l = r("719687"),
  c = r("151261"),
  f = r("603398");
r("898924"), r("785768");
var d = r("519879"),
  h = Number.MIN_SAFE_INTEGER || -1e9,
  p = (0, s.createContext)({
    classNamePrefix: "",
    disableStylesGeneration: !1,
    isSSR: !l.default
  }),
  y = new Map,
  g = function(e, t) {
    var r = e.managers;
    if (r) return !r[t] && (r[t] = new c.SheetsManager), r[t];
    var n = y.get(t);
    return !n && (n = new c.SheetsManager, y.set(t, n)), n
  },
  m = function(e) {
    var t = e.sheet,
      r = e.context,
      n = e.index,
      i = e.theme;
    t && (g(r, n).manage(i), r.registry && r.registry.add(t))
  },
  v = function(e) {
    e.sheet && g(e.context, e.index).unmanage(e.theme)
  },
  b = (0, c.create)((0, f.default)()),
  x = new WeakMap,
  w = function(e) {
    return x.get(e)
  },
  k = function(e, t) {
    x.set(e, t)
  },
  S = function(e) {
    var t = e.styles;
    return "function" != typeof t ? t : t(e.theme)
  },
  R = function(e) {
    if (!e.context.disableStylesGeneration) {
      var t, r, n, o, s, a = g(e.context, e.index),
        u = a.get(e.theme);
      if (u) return u;
      var l = e.context.jss || b,
        f = S(e),
        d = (0, c.getDynamicStyles)(f);
      var h = l.createStyleSheet(f, (t = e, r = null !== d, t.context.id && null != t.context.id.minify && (n = t.context.id.minify), o = t.context.classNamePrefix || "", t.name && !n && (o += t.name.replace(/\s/g, "-") + "-"), s = "", t.name && (s = t.name + ", "), s += "function" == typeof t.styles ? "Themed" : "Unthemed", (0, i.default)({}, t.sheetOptions, {
        index: t.index,
        meta: s,
        classNamePrefix: o,
        link: r,
        generateId: t.sheetOptions && t.sheetOptions.generateId ? t.sheetOptions.generateId : t.context.generateId
      })));
      return k(h, {
        dynamicStyles: d,
        styles: f
      }), a.add(e.theme, h), h
    }
  },
  P = function(e, t) {
    for (var r in t) e.deleteRule(t[r])
  },
  C = function(e, t, r) {
    for (var n in r) t.updateOne(r[n], e)
  },
  O = function(e, t) {
    var r = w(e);
    if (r) {
      var n = {};
      for (var i in r.dynamicStyles) {
        for (var o = e.rules.index.length, s = e.addRule(i, r.dynamicStyles[i]), a = o; a < e.rules.index.length; a++) {
          var u = e.rules.index[a];
          e.updateOne(u, t), n[s === u ? i : u.key] = u
        }
      }
      return n
    }
  },
  j = function(e, t) {
    if (!t) return e.classes;
    var r = w(e);
    if (!r) return e.classes;
    var n = {};
    for (var i in r.styles) n[i] = e.classes[i], i in t && (n[i] += " " + e.classes[t[i].key]);
    return n
  };

function A(e) {
  return e ? s.useEffect : a.useInsertionEffect || s.useLayoutEffect
}
var M = {},
  T = function(e, t) {
    void 0 === t && (t = {});
    var r = t,
      n = r.index,
      i = void 0 === n ? h++ : n,
      a = r.theming,
      l = r.name,
      c = (0, o.default)(r, ["index", "theming", "name"]),
      f = a && a.context || u.ThemeContext,
      d = {};
    return function(t) {
      var r, n = (0, s.useRef)(!0),
        o = (0, s.useContext)(p);
      var a = (r = t && t.theme, "function" == typeof e && (r || (0, s.useContext)(f)) || M),
        u = (0, s.useMemo)(function() {
          var r = R({
            context: o,
            styles: e,
            name: l,
            theme: a,
            index: i,
            sheetOptions: c
          });
          return r && o.isSSR && m({
            index: i,
            context: o,
            sheet: r,
            theme: a
          }), [r, r ? O(r, t) : null]
        }, [o, a]),
        h = u[0],
        y = u[1];
      A(o.isSSR)(function() {
        h && y && !n.current && C(t, h, y)
      }, [t]), A(o.isSSR)(function() {
        return h && m({
            index: i,
            context: o,
            sheet: h,
            theme: a
          }),
          function() {
            h && (v({
              index: i,
              context: o,
              sheet: h,
              theme: a
            }), y && P(h, y))
          }
      }, [h]);
      var g = (0, s.useMemo)(function() {
        return h && y ? j(h, y) : d
      }, [h, y]);
      return (0, s.useDebugValue)(g), (0, s.useDebugValue)(a === M ? "No theme" : a), (0, s.useEffect)(function() {
        n.current = !1
      }), g
    }
  };
Symbol("react-jss-styled");
void 0 === n && (n = d.default)