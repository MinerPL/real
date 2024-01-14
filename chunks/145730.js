"use strict";

function r(t) {
  return (t - 30) * 3.62 + 194
}

function i(t) {
  return (t - 8) * 3 + 25
}
t.exports = {
  fromOrigamiTensionAndFriction: function(t, e) {
    return {
      tension: r(t),
      friction: (e - 8) * 3 + 25
    }
  },
  fromBouncinessAndSpeed: function(t, e) {
    function n(t, e, n) {
      return (t - e) / (n - e)
    }

    function i(t, e, n) {
      return e + t * (n - e)
    }
    var o, a, u, s, c, l, f, h, p = (t / 1.7 - (o = 0)) / (20 - o);
    var d = (s = .5) + (e / 1.7 - (u = 0)) / (20 - u) * (200 - s);
    var v = (c = p = (a = 0) + p * (.8 - a), l = function(t) {
      var e, n, r;
      if (t <= 18) {
        ;
        return 7e-4 * Math.pow(e = t, 3) - .031 * Math.pow(e, 2) + .64 * e + 1.28
      }
      if (t > 18 && t <= 44) {
        ;
        return 44e-6 * Math.pow(n = t, 3) - .006 * Math.pow(n, 2) + .36 * n + 2
      }
      return 45e-8 * Math.pow(r = t, 3) - 332e-6 * Math.pow(r, 2) + .1078 * r + 5.84
    }(d), f = .01, .01 * (h = 2 * c - c * c) + (1 - h) * l);
    return {
      tension: r(d),
      friction: (v - 8) * 3 + 25
    }
  }
}