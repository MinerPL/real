            "use strict";
            r("424973");
            var i = r("839309"),
                n = r("463483"),
                a = r("789294");
            e.assert = n, e.toArray = a.toArray, e.zero2 = a.zero2, e.toHex = a.toHex, e.encode = a.encode;
            e.getNAF = function(t, e, r) {
                var i = Array(Math.max(t.bitLength(), r) + 1);
                i.fill(0);
                for (var n = 1 << e + 1, a = t.clone(), o = 0; o < i.length; o++) {
                    var s, f = a.andln(n - 1);
                    a.isOdd() ? (s = f > (n >> 1) - 1 ? (n >> 1) - f : f, a.isubn(s)) : s = 0, i[o] = s, a.iushrn(1)
                }
                return i
            };
            e.getJSF = function(t, e) {
                var r = [
                    [],
                    []
                ];
                t = t.clone(), e = e.clone();
                for (var i = 0, n = 0; t.cmpn(-i) > 0 || e.cmpn(-n) > 0;) {
                    var a, o, s, f = t.andln(3) + i & 3,
                        h = e.andln(3) + n & 3;
                    3 === f && (f = -1), 3 === h && (h = -1), o = (1 & f) == 0 ? 0 : (3 == (a = t.andln(7) + i & 7) || 5 === a) && 2 === h ? -f : f, r[0].push(o), s = (1 & h) == 0 ? 0 : (3 == (a = e.andln(7) + n & 7) || 5 === a) && 2 === f ? -h : h, r[1].push(s), 2 * i === o + 1 && (i = 1 - i), 2 * n === s + 1 && (n = 1 - n), t.iushrn(1), e.iushrn(1)
                }
                return r
            };
            e.cachedProperty = function(t, e, r) {
                var i = "_" + e;
                t.prototype[e] = function() {
                    return void 0 !== this[i] ? this[i] : this[i] = r.call(this)
                }
            };
            e.parseBytes = function(t) {
                return "string" == typeof t ? e.toArray(t, "hex") : t
            };
            e.intFromLE = function(t) {
                return new i(t, "hex", "le")
            }