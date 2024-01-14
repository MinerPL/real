"use strict";
var r = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
  },
  i = n("627445"),
  o = n("867031"),
  a = n("375028"),
  u = n("112479"),
  s = n("469559"),
  c = n("22659"),
  l = n("213410"),
  f = n("611903"),
  h = n("158318"),
  p = n("832268");
n("439382");
var d = n("603235"),
  v = n("319931"),
  y = n("925419"),
  m = function(t, e, n) {
    if (t instanceof u) {
      var i = r({}, e),
        o = r({}, e);
      for (var a in e) {
        var s = e[a],
          c = s.x,
          l = s.y;
        void 0 !== c && void 0 !== l && (i[a] = c, o[a] = l)
      }
      return _([n(t.x, i), n(t.y, o)], {
        stopTogether: !1
      })
    }
    return null
  },
  g = function t(e, n) {
    return m(e, n, t) || {
      start: function(t) {
        e.stopTracking(), n.toValue instanceof o ? e.track(new h(e, n.toValue, d, n, t)) : e.animate(new d(n), t)
      },
      stop: function() {
        e.stopAnimation()
      }
    }
  },
  b = function(t) {
    var e = 0;
    return {
      start: function(n) {
        0 === t.length ? n && n({
          finished: !0
        }) : t[e].start(function r(i) {
          if (!i.finished || ++e === t.length) {
            n && n(i);
            return
          }
          t[e].start(r)
        })
      },
      stop: function() {
        e < t.length && t[e].stop()
      }
    }
  },
  _ = function(t, e) {
    var n = 0,
      r = {},
      i = !(e && !1 === e.stopTogether),
      o = {
        start: function(e) {
          if (n === t.length) {
            e && e({
              finished: !0
            });
            return
          }
          t.forEach(function(a, u) {
            var s = function(a) {
              if (r[u] = !0, ++n === t.length) {
                n = 0, e && e(a);
                return
              }!a.finished && i && o.stop()
            };
            a ? a.start(s) : s({
              finished: !0
            })
          })
        },
        stop: function() {
          t.forEach(function(t, e) {
            r[e] || t.stop(), r[e] = !0
          })
        }
      };
    return o
  },
  x = function(t) {
    return g(new a(0), {
      toValue: 0,
      delay: t,
      duration: 0
    })
  };
t.exports = {
  Value: a,
  ValueXY: u,
  decay: function t(e, n) {
    return m(e, n, t) || {
      start: function(t) {
        e.stopTracking(), e.animate(new v(n), t)
      },
      stop: function() {
        e.stopAnimation()
      }
    }
  },
  timing: g,
  spring: function t(e, n) {
    return m(e, n, t) || {
      start: function(t) {
        e.stopTracking(), n.toValue instanceof o ? e.track(new h(e, n.toValue, y, n, t)) : e.animate(new y(n), t)
      },
      stop: function() {
        e.stopAnimation()
      }
    }
  },
  add: function(t, e) {
    return new s(t, e)
  },
  multiply: function(t, e) {
    return new c(t, e)
  },
  modulo: function(t, e) {
    return new l(t, e)
  },
  template: function(t) {
    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
    return new f(t, n)
  },
  delay: x,
  sequence: b,
  parallel: _,
  stagger: function(t, e) {
    return _(e.map(function(e, n) {
      return b([x(t * n), e])
    }))
  },
  event: function(t, e) {
    return function() {
      for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
      var u = function t(e, n, r) {
        if ("number" == typeof n) {
          i(e instanceof a, "Bad mapping of type " + typeof e + " for key " + r + ", event value must map to AnimatedValue"), e.setValue(n);
          return
        }
        for (var r in i("object" == typeof e, "Bad mapping of type " + typeof e + " for key " + r), i("object" == typeof n, "Bad event of type " + typeof n + " for key " + r), e) t(e[r], n[r], r)
      };
      t.forEach(function(t, e) {
        u(t, r[e], "arg" + e)
      }), e && e.listener && e.listener.apply(null, r)
    }
  },
  isAnimated: p,
  createAnimatedComponent: n("880460"),
  inject: {
    ApplyAnimatedValues: n("24243").inject,
    InteractionManager: n("561621").inject,
    FlattenStyle: n("189248").inject,
    RequestAnimationFrame: n("330139").inject,
    CancelAnimationFrame: n("242173").inject
  },
  __PropsOnlyForTests: n("599277")
}