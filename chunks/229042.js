            r("70102");
            var n = r("478098"),
                i = r("952133");
            t.exports = function(t, e, r) {
                var o = !0,
                    a = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");
                return i(r) && (o = "leading" in r ? !!r.leading : o, a = "trailing" in r ? !!r.trailing : a), n(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: a
                })
            }