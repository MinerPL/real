"use strict";

function r(e) {
  return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
n("222007"), n("70102"), n("808653"), Object.defineProperty(t, "__esModule", {
  value: !0
});
var o, a = "https://js.stripe.com/v3",
  c = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
  i = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
  u = function() {
    for (var e = document.querySelectorAll('script[src^="'.concat(a, '"]')), t = 0; t < e.length; t++) {
      var n = e[t];
      if (c.test(n.src)) return n
    }
    return null
  },
  s = function(e) {
    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
      n = document.createElement("script");
    n.src = "".concat(a).concat(t);
    var r = document.head || document.body;
    if (!r) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
    return r.appendChild(n), n
  },
  l = function(e, t) {
    e && e._registerWrapper && e._registerWrapper({
      name: "stripe-js",
      version: "2.0.0",
      startTime: t
    })
  },
  f = null,
  p = function(e, t, n) {
    if (null === e) return null;
    var r = e.apply(void 0, t);
    return l(r, n), r
  },
  d = function(e) {
    var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
    if (null === e || "object" !== r(e)) throw Error(t);
    if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
    throw Error(t)
  },
  m = !1,
  y = function() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    m = !0;
    var a = Date.now();
    return (e = o, null !== f ? f : f = new Promise(function(t, n) {
      if ("undefined" == typeof window || "undefined" == typeof document) {
        t(null);
        return
      }
      if (window.Stripe && e && console.warn(i), window.Stripe) {
        t(window.Stripe);
        return
      }
      try {
        var r = u();
        r && e ? console.warn(i) : !r && (r = s(e)), r.addEventListener("load", function() {
          window.Stripe ? t(window.Stripe) : n(Error("Stripe.js not available"))
        }), r.addEventListener("error", function() {
          n(Error("Failed to load Stripe.js"))
        })
      } catch (e) {
        n(e);
        return
      }
    })).then(function(e) {
      return p(e, n, a)
    })
  };
y.setLoadParameters = function(e) {
  if (!(m && o && Object.keys(d(e)).reduce(function(t, n) {
      var r;
      return t && e[n] === (null === (r = o) || void 0 === r ? void 0 : r[n])
    }, !0))) {
    if (m) throw Error("You cannot change load parameters after calling loadStripe");
    o = d(e)
  }
}, t.loadStripe = y