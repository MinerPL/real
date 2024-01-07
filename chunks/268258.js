            "use strict";
            l("222007"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stringSimilarity = void 0;
            t.stringSimilarity = function(e, t, l, n) {
                if (void 0 === l && (l = 2), void 0 === n && (n = !1), !n && (e = e.toLowerCase(), t = t.toLowerCase()), e.length < l || t.length < l) return 0;
                for (var a = new Map, s = 0; s < e.length - (l - 1); s++) {
                    var r = e.substr(s, l);
                    a.set(r, a.has(r) ? a.get(r) + 1 : 1)
                }
                for (var i = 0, u = 0; u < t.length - (l - 1); u++) {
                    var o = t.substr(u, l),
                        d = a.has(o) ? a.get(o) : 0;
                    d > 0 && (a.set(o, d - 1), i++)
                }
                return 2 * i / (e.length + t.length - (l - 1) * 2)
            }, t.default = t.stringSimilarity