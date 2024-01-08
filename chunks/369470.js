            r("70102");
            var i = r("483366"),
                n = r("285162");
            t.exports = function(t, e, r) {
                var a = !0,
                    o = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");
                return n(r) && (a = "leading" in r ? !!r.leading : a, o = "trailing" in r ? !!r.trailing : o), i(t, e, {
                    leading: a,
                    maxWait: e,
                    trailing: o
                })
            }