            r("70102");
            var i = r("483366"),
                n = r("285162");
            t.exports = function(t, e, r) {
                var o = !0,
                    a = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");
                return n(r) && (o = "leading" in r ? !!r.leading : o, a = "trailing" in r ? !!r.trailing : a), i(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: a
                })
            }