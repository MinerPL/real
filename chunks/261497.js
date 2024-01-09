            var n = r("306551"),
                i = r("952133"),
                o = r("543066"),
                a = 0 / 0,
                c = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                s = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (o(t)) return a;
                if (i(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = i(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = n(t);
                var r = l.test(t);
                return r || u.test(t) ? s(t.slice(2), r ? 2 : 8) : c.test(t) ? a : +t
            }