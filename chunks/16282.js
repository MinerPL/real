                n("781738");
                var r = n("285162"),
                    o = n("27556"),
                    i = 0 / 0,
                    u = /^\s+|\s+$/g,
                    c = /^[-+]0x[0-9a-f]+$/i,
                    l = /^0b[01]+$/i,
                    a = /^0o[0-7]+$/i,
                    f = parseInt;
                t.exports = function(t) {
                    if ("number" == typeof t) return t;
                    if (o(t)) return i;
                    if (r(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = r(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(u, "");
                    var n = l.test(t);
                    return n || a.test(t) ? f(t.slice(2), n ? 2 : 8) : c.test(t) ? i : +t
                }