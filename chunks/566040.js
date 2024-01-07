            var r = n("561662"),
                o = n("603108"),
                a = n("476540"),
                i = n("285162");
            e.exports = function(e, t, n) {
                if (!i(n)) return !1;
                var s = typeof t;
                return ("number" == s ? !!(o(n) && a(t, n.length)) : "string" == s && t in n) && r(n[t], e)
            }