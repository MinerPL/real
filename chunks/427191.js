"use strict";
var e = n("886639"),
  o = n("949580"),
  i = n("116180"),
  u = n("308274"),
  f = function(t) {
    var r = 1 === t;
    return function(n, f, c) {
      for (var a, s = i(n), y = o(s), h = e(f, c), p = u(y); p-- > 0;)
        if (h(a = y[p], p, s)) switch (t) {
          case 0:
            return a;
          case 1:
            return p
        }
      return r ? -1 : void 0
    }
  };
t.exports = {
  findLast: f(0),
  findLastIndex: f(1)
}