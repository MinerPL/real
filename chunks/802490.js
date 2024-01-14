    "use strict";
    var e = r("434978"),
      o = r("59393"),
      u = r("366483"),
      i = r("470984"),
      c = r("823493"),
      f = r("539536"),
      s = r("681645"),
      a = r("688358"),
      _ = r("391358"),
      E = r("561051"),
      p = r("571503"),
      O = r("814026"),
      l = r("140925");
    t.exports = function(t, n, r, A) {
      var T = "stackTraceLimit",
        d = A ? 2 : 1,
        R = t.split("."),
        I = R[R.length - 1],
        y = e.apply(null, R);
      if (y) {
        var h = y.prototype;
        if (!l && o(h, "cause") && delete h.cause, !r) return y;
        var v = e("Error"),
          N = n(function(t, n) {
            var r = _(A ? n : t, void 0),
              e = A ? new y(t) : new y;
            return void 0 !== r && u(e, "message", r), p(e, N, e.stack, 2), this && i(h, this) && a(e, this, N), arguments.length > d && E(e, arguments[d]), e
          });
        if (N.prototype = h, "Error" !== I ? c ? c(N, v) : f(N, v, {
            name: !0
          }) : O && T in y && (s(N, y, T), s(N, y, "prepareStackTrace")), f(N, y), !l) try {
          h.name !== I && u(h, "name", I), h.constructor = N
        } catch (t) {}
        return N
      }
    }