            A("70102");
            var a = A("478098"),
                l = A("952133");
            e.exports = function(e, t, A) {
                var n = !0,
                    r = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");
                return l(A) && (n = "leading" in A ? !!A.leading : n, r = "trailing" in A ? !!A.trailing : r), a(e, t, {
                    leading: n,
                    maxWait: t,
                    trailing: r
                })
            }