"use strict";

function n(t, e) {
  void 0 === e && (e = 0);
  var r = t % 19,
    n = Math.floor(t / 100),
    i = t % 100,
    a = Math.floor(19 * r + n - Math.floor(n / 4) - Math.floor((n - Math.floor((n + 8) / 25) + 1) / 3) + 15) % 30,
    o = Math.floor(32 + 2 * (n % 4) + 2 * Math.floor(i / 4) - a - i % 4) % 7,
    s = Math.floor((r + 11 * a + 22 * o) / 451);
  return [Math.ceil((Date.UTC(t, Math.floor((a + o - 7 * s + 114) / 31) - 1, (a + o - 7 * s + 114) % 31 + 1 + e) - Date.UTC(t, 0, 1)) / 864e5)]
}
r.r(e), r.d(e, {
  easter: function() {
    return n
  }
})