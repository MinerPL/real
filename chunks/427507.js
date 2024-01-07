            var n = e("921563"),
                o = e("169828"),
                i = e("227290"),
                u = e("952133");
            t.exports = function(t, r, e) {
                if (!u(e)) return !1;
                var a = typeof r;
                return ("number" == a ? !!(o(e) && i(r, e.length)) : "string" == a && r in e) && n(e[r], t)
            }