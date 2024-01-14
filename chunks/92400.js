n("424973"), n("274635"), e.exports = u, u.default = u, u.stable = d, u.stableStringify = d;
var r = "[...]",
  a = "[Circular]",
  o = [],
  i = [];

function s() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

function u(e, t, n, u) {
  void 0 === u && (u = s()),
    function e(t, n, o, i, s, u, c) {
      if (u += 1, "object" == typeof t && null !== t) {
        for (d = 0; d < i.length; d++)
          if (i[d] === t) {
            l(a, t, n, s);
            return
          } if (void 0 !== c.depthLimit && u > c.depthLimit || void 0 !== c.edgesLimit && o + 1 > c.edgesLimit) {
          l(r, t, n, s);
          return
        }
        if (i.push(t), Array.isArray(t))
          for (d = 0; d < t.length; d++) e(t[d], d, d, i, t, u, c);
        else {
          var d, f = Object.keys(t);
          for (d = 0; d < f.length; d++) {
            var p = f[d];
            e(t[p], p, d, i, t, u, c)
          }
        }
        i.pop()
      }
    }(e, "", 0, [], void 0, 0, u);
  try {
    c = 0 === i.length ? JSON.stringify(e, t, n) : JSON.stringify(e, f(t), n)
  } catch (e) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; 0 !== o.length;) {
      var c, d = o.pop();
      4 === d.length ? Object.defineProperty(d[0], d[1], d[3]) : d[0][d[1]] = d[2]
    }
  }
  return c
}

function l(e, t, n, r) {
  var a = Object.getOwnPropertyDescriptor(r, n);
  void 0 !== a.get ? a.configurable ? (Object.defineProperty(r, n, {
    value: e
  }), o.push([r, n, t, a])) : i.push([t, n, e]) : (r[n] = e, o.push([r, n, t]))
}

function c(e, t) {
  return e < t ? -1 : e > t ? 1 : 0
}

function d(e, t, n, u) {
  void 0 === u && (u = s());
  var d, p = function e(t, n, i, s, u, d, f) {
    if (d += 1, "object" == typeof t && null !== t) {
      for (p = 0; p < s.length; p++)
        if (s[p] === t) {
          l(a, t, n, u);
          return
        } try {
        if ("function" == typeof t.toJSON) return
      } catch (e) {
        return
      }
      if (void 0 !== f.depthLimit && d > f.depthLimit || void 0 !== f.edgesLimit && i + 1 > f.edgesLimit) {
        l(r, t, n, u);
        return
      }
      if (s.push(t), Array.isArray(t))
        for (p = 0; p < t.length; p++) e(t[p], p, p, s, t, d, f);
      else {
        var p, m = {},
          h = Object.keys(t).sort(c);
        for (p = 0; p < h.length; p++) {
          var _ = h[p];
          e(t[_], _, p, s, t, d, f), m[_] = t[_]
        }
        if (void 0 === u) return m;
        o.push([u, n, t]), u[n] = m
      }
      s.pop()
    }
  }(e, "", 0, [], void 0, 0, u) || e;
  try {
    d = 0 === i.length ? JSON.stringify(p, t, n) : JSON.stringify(p, f(t), n)
  } catch (e) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; 0 !== o.length;) {
      var m = o.pop();
      4 === m.length ? Object.defineProperty(m[0], m[1], m[3]) : m[0][m[1]] = m[2]
    }
  }
  return d
}

function f(e) {
  return e = void 0 !== e ? e : function(e, t) {
      return t
    },
    function(t, n) {
      if (i.length > 0)
        for (var r = 0; r < i.length; r++) {
          var a = i[r];
          if (a[1] === t && a[0] === n) {
            n = a[2], i.splice(r, 1);
            break
          }
        }
      return e.call(this, t, n)
    }
}