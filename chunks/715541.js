"use strict";
r.r(t), r.d(t, {
  ThemeContext: function() {
    return p
  }
}), r("854508"), r("70102");
var n, i, o, s, a = r("884691"),
  u = r.n(a);
r("416037");
var l = r("204527"),
  c = r.n(l);

function f(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}

function d() {
  return (d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  }).apply(this, arguments)
}
r("48487");

function h(e) {
  if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}
var p = (0, a.createContext)();
var y = {
  context: n = p,
  withTheme: (i = n, function(e) {
    var t = u.forwardRef(function(t, r) {
      return u.createElement(i.Consumer, null, function(n) {
        return u.createElement(e, d({
          theme: n,
          ref: r
        }, t))
      })
    });
    return c(t, e), t
  }),
  useTheme: (o = n, function() {
    return u.useContext(o)
  }),
  ThemeProvider: (s = n, function(e) {
    function t() {
      for (var t, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
      return f(h(h(t = e.call.apply(e, [this].concat(n)) || this)), "cachedTheme", void 0), f(h(h(t)), "lastOuterTheme", void 0), f(h(h(t)), "lastTheme", void 0), f(h(h(t)), "renderProvider", function(e) {
        var r = t.props.children;
        return u.createElement(s.Provider, {
          value: t.getTheme(e)
        }, r)
      }), t
    }
    r = t, n = e, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
    var r, n, i = t.prototype;
    return i.getTheme = function(e) {
      if (this.props.theme !== this.lastTheme || e !== this.lastOuterTheme || !this.cachedTheme) {
        if (this.lastOuterTheme = e, this.lastTheme = this.props.theme, "function" == typeof this.lastTheme) {
          var t = this.props.theme;
          this.cachedTheme = t(e)
        } else {
          var r = this.props.theme;
          this.cachedTheme = e ? d({}, e, r) : r
        }
      }
      return this.cachedTheme
    }, i.render = function() {
      return this.props.children ? u.createElement(s.Consumer, null, this.renderProvider) : null
    }, t
  }(u.Component))
};
y.withTheme, y.ThemeProvider, y.useTheme