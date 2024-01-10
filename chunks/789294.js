            "use strict";
            r("781738"), r("424973");

            function i(t) {
                return 1 === t.length ? "0" + t : t
            }

            function n(t) {
                for (var e = "", r = 0; r < t.length; r++) e += i(t[r].toString(16));
                return e
            }
            e.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" != typeof t) {
                    for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
                    return r
                }
                if ("hex" === e) {
                    (t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t);
                    for (var i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
                } else
                    for (var i = 0; i < t.length; i++) {
                        var n = t.charCodeAt(i),
                            o = n >> 8,
                            a = 255 & n;
                        o ? r.push(o, a) : r.push(a)
                    }
                return r
            }, e.zero2 = i, e.toHex = n, e.encode = function(t, e) {
                return "hex" === e ? n(t) : t
            }