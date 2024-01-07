            var a = A("306551"),
                l = A("952133"),
                n = A("543066"),
                r = 0 / 0,
                s = /^[-+]0x[0-9a-f]+$/i,
                o = /^0b[01]+$/i,
                i = /^0o[0-7]+$/i,
                d = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (n(e)) return r;
                if (l(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = l(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = a(e);
                var A = o.test(e);
                return A || i.test(e) ? d(e.slice(2), A ? 2 : 8) : s.test(e) ? r : +e
            }