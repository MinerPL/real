"use strict";
r.r(t), r.d(t, {
  supportedKeyframes: function() {
    return g
  },
  supportedProperty: function() {
    return T
  },
  supportedValue: function() {
    return V
  }
}), r("781738"), r("808653"), r("424973");
var n, i, o = r("719687"),
  s = r("138754"),
  a = "",
  u = "",
  l = "",
  c = "",
  f = o.default && "ontouchstart" in document.documentElement;
if (o.default) {
  var d = {
      Moz: "-moz-",
      ms: "-ms-",
      O: "-o-",
      Webkit: "-webkit-"
    },
    h = document.createElement("p").style;
  for (var p in d)
    if (p + "Transform" in h) {
      a = p, u = d[p];
      break
    }
  "Webkit" === a && "msHyphens" in h && (a = "ms", u = d.ms, c = "edge"), "Webkit" === a && "-apple-trailing-word" in h && (l = "apple")
}
var y = {
  js: a,
  css: u,
  vendor: l,
  browser: c,
  isTouch: f
};

function g(e) {
  return "-" === e[1] || "ms" === y.js ? e : "@" + y.css + "keyframes" + e.substr(10)
}
var m = /[-\s]+(.)?/g;

function v(e, t) {
  return t ? t.toUpperCase() : ""
}

function b(e) {
  return e.replace(m, v)
}

function x(e) {
  return b("-" + e)
}
var w = {
    "flex-grow": "flex-positive",
    "flex-shrink": "flex-negative",
    "flex-basis": "flex-preferred-size",
    "justify-content": "flex-pack",
    order: "flex-order",
    "align-items": "flex-align",
    "align-content": "flex-line-pack"
  },
  k = {
    flex: "box-flex",
    "flex-grow": "box-flex",
    "flex-direction": ["box-orient", "box-direction"],
    order: "box-ordinal-group",
    "align-items": "box-align",
    "flex-flow": ["box-orient", "box-direction"],
    "justify-content": "box-pack"
  },
  S = Object.keys(k),
  R = function(e) {
    return y.css + e
  },
  P = [{
    noPrefill: ["appearance"],
    supportedProperty: function(e) {
      return "appearance" === e && ("ms" === y.js ? "-webkit-" + e : y.css + e)
    }
  }, {
    noPrefill: ["color-adjust"],
    supportedProperty: function(e) {
      return "color-adjust" === e && ("Webkit" === y.js ? y.css + "print-" + e : e)
    }
  }, {
    noPrefill: ["mask"],
    supportedProperty: function(e, t) {
      if (!/^mask/.test(e)) return !1;
      if ("Webkit" === y.js) {
        var r = "mask-image";
        if (b(r) in t) return e;
        if (y.js + x(r) in t) return y.css + e
      }
      return e
    }
  }, {
    noPrefill: ["text-orientation"],
    supportedProperty: function(e) {
      return "text-orientation" === e && ("apple" !== y.vendor || y.isTouch ? e : y.css + e)
    }
  }, {
    noPrefill: ["transform"],
    supportedProperty: function(e, t, r) {
      return "transform" === e && (r.transform ? e : y.css + e)
    }
  }, {
    noPrefill: ["transition"],
    supportedProperty: function(e, t, r) {
      return "transition" === e && (r.transition ? e : y.css + e)
    }
  }, {
    noPrefill: ["writing-mode"],
    supportedProperty: function(e) {
      return "writing-mode" === e && ("Webkit" === y.js || "ms" === y.js && "edge" !== y.browser ? y.css + e : e)
    }
  }, {
    noPrefill: ["user-select"],
    supportedProperty: function(e) {
      return "user-select" === e && ("Moz" === y.js || "ms" === y.js || "apple" === y.vendor ? y.css + e : e)
    }
  }, {
    supportedProperty: function(e, t) {
      return !!/^break-/.test(e) && ("Webkit" === y.js ? "WebkitColumn" + x(e) in t && y.css + "column-" + e : "Moz" === y.js && "page" + x(e) in t && "page-" + e)
    }
  }, {
    supportedProperty: function(e, t) {
      if (!/^(border|margin|padding)-inline/.test(e)) return !1;
      if ("Moz" === y.js) return e;
      var r = e.replace("-inline", "");
      return y.js + x(r) in t && y.css + r
    }
  }, {
    supportedProperty: function(e, t) {
      return b(e) in t && e
    }
  }, {
    supportedProperty: function(e, t) {
      var r = x(e);
      return "-" === e[0] || "-" === e[0] && "-" === e[1] ? e : y.js + r in t ? y.css + e : "Webkit" !== y.js && "Webkit" + r in t && "-webkit-" + e
    }
  }, {
    supportedProperty: function(e) {
      return "scroll-snap" === e.substring(0, 11) && ("ms" === y.js ? "" + y.css + e : e)
    }
  }, {
    supportedProperty: function(e) {
      return "overscroll-behavior" === e && ("ms" === y.js ? y.css + "scroll-chaining" : e)
    }
  }, {
    supportedProperty: function(e, t) {
      var r = w[e];
      return !!r && y.js + x(r) in t && y.css + r
    }
  }, {
    supportedProperty: function(e, t, r) {
      var n = r.multiple;
      if (S.indexOf(e) > -1) {
        var i = k[e];
        if (!Array.isArray(i)) return y.js + x(i) in t && y.css + i;
        if (!n) return !1;
        for (var o = 0; o < i.length; o++)
          if (!(y.js + x(i[0]) in t)) return !1;
        return i.map(R)
      }
      return !1
    }
  }],
  C = P.filter(function(e) {
    return e.supportedProperty
  }).map(function(e) {
    return e.supportedProperty
  }),
  O = P.filter(function(e) {
    return e.noPrefill
  }).reduce(function(e, t) {
    return e.push.apply(e, (0, s.default)(t.noPrefill)), e
  }, []),
  j = {};
if (o.default) {
  n = document.createElement("p");
  var A = window.getComputedStyle(document.documentElement, "");
  for (var M in A) !isNaN(M) && (j[A[M]] = A[M]);
  O.forEach(function(e) {
    return delete j[e]
  })
}

function T(e, t) {
  if (void 0 === t && (t = {}), !n) return e;
  if (null != j[e]) return j[e];
  ("transition" === e || "transform" === e) && (t[e] = e in n.style);
  for (var r = 0; r < C.length && (j[e] = C[r](e, n.style, t), !j[e]); r++);
  try {
    n.style[e] = ""
  } catch (e) {
    return !1
  }
  return j[e]
}
var I = {},
  E = {
    transition: 1,
    "transition-property": 1,
    "-webkit-transition": 1,
    "-webkit-transition-property": 1
  },
  z = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;

function N(e, t, r) {
  if ("var" === t) return "var";
  if ("all" === t) return "all";
  if ("all" === r) return ", all";
  var n = t ? T(t) : ", " + T(r);
  return n ? n : t || r
}

function V(e, t) {
  var r = t;
  if (!i || "content" === e) return t;
  if ("string" != typeof r || !isNaN(parseInt(r, 10))) return r;
  var n = e + r;
  if (null != I[n]) return I[n];
  try {
    i.style[e] = r
  } catch (e) {
    return I[n] = !1, !1
  }
  if (E[e]) r = r.replace(z, N);
  else if ("" === i.style[e] && ("-ms-flex" === (r = y.css + r) && (i.style[e] = "-ms-flexbox"), i.style[e] = r, "" === i.style[e])) return I[n] = !1, !1;
  return i.style[e] = "", I[n] = r, I[n]
}
o.default && (i = document.createElement("p"))