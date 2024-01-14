"use strict";
s("781738"), s("808653"), s("424973");
var r = s("272074"),
  i = s("766811"),
  n = s("526504");

function c(t, e) {
  return e.encode ? e.strict ? r(t) : encodeURIComponent(t) : t
}
e.extract = function(t) {
  return t.split("?")[1] || ""
}, e.parse = function(t, e) {
  var s = function(t) {
      var e;
      switch (t.arrayFormat) {
        case "index":
          return function(t, s, r) {
            if (e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), !e) {
              r[t] = s;
              return
            }
            void 0 === r[t] && (r[t] = {}), r[t][e[1]] = s
          };
        case "bracket":
          return function(t, s, r) {
            if (e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), e) {
              if (void 0 === r[t]) {
                r[t] = [s];
                return
              }
            } else {
              r[t] = s;
              return
            }
            r[t] = [].concat(r[t], s)
          };
        default:
          return function(t, e, s) {
            if (void 0 === s[t]) {
              s[t] = e;
              return
            }
            s[t] = [].concat(s[t], e)
          }
      }
    }(e = i({
      arrayFormat: "none"
    }, e)),
    r = Object.create(null);
  return "string" == typeof t && (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach(function(t) {
    var e = t.replace(/\+/g, " ").split("="),
      i = e.shift(),
      c = e.length > 0 ? e.join("=") : void 0;
    c = void 0 === c ? null : n(c), s(n(i), c, r)
  }), Object.keys(r).sort().reduce(function(t, e) {
    var s = r[e];
    return s && "object" == typeof s && !Array.isArray(s) ? t[e] = function t(e) {
      return Array.isArray(e) ? e.sort() : "object" == typeof e ? t(Object.keys(e)).sort(function(t, e) {
        return Number(t) - Number(e)
      }).map(function(t) {
        return e[t]
      }) : e
    }(s) : t[e] = s, t
  }, Object.create(null))) : r
}, e.stringify = function(t, e) {
  var s = function(t) {
    switch (t.arrayFormat) {
      case "index":
        return function(e, s, r) {
          return null === s ? [c(e, t), "[", r, "]"].join("") : [c(e, t), "[", c(r, t), "]=", c(s, t)].join("")
        };
      case "bracket":
        return function(e, s) {
          return null === s ? c(e, t) : [c(e, t), "[]=", c(s, t)].join("")
        };
      default:
        return function(e, s) {
          return null === s ? c(e, t) : [c(e, t), "=", c(s, t)].join("")
        }
    }
  }(e = i({
    encode: !0,
    strict: !0,
    arrayFormat: "none"
  }, e));
  return t ? Object.keys(t).sort().map(function(r) {
    var i = t[r];
    if (void 0 === i) return "";
    if (null === i) return c(r, e);
    if (Array.isArray(i)) {
      var n = [];
      return i.slice().forEach(function(t) {
        void 0 !== t && n.push(s(r, t, n.length))
      }), n.join("&")
    }
    return c(r, e) + "=" + c(i, e)
  }).filter(function(t) {
    return t.length > 0
  }).join("&") : ""
}