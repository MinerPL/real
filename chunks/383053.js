    "use strict";
    var e = r("727204"),
      o = r("116180"),
      u = r("949580"),
      i = r("308274"),
      c = TypeError,
      f = function(t) {
        return function(n, r, f, s) {
          e(r);
          var a = o(n),
            _ = u(a),
            E = i(a),
            p = t ? E - 1 : 0,
            O = t ? -1 : 1;
          if (f < 2)
            for (;;) {
              if (p in _) {
                s = _[p], p += O;
                break
              }
              if (p += O, t ? p < 0 : E <= p) throw c("Reduce of empty array with no initial value")
            }
          for (; t ? p >= 0 : E > p; p += O) p in _ && (s = r(s, _[p], p, a));
          return s
        }
      };
    t.exports = {
      left: f(!1),
      right: f(!0)
    }