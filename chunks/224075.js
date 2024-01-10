            var i = r("626785"),
                n = r("698273"),
                o = r("583048"),
                a = r("854060"),
                s = r("492692"),
                f = r("558304"),
                h = r("540893");
            t.exports = function(t, e, r) {
                var c = -1;
                return e = i(e.length ? e : [h], s(n)), a(o(t, function(t, r, n) {
                    return {
                        criteria: i(e, function(e) {
                            return e(t)
                        }),
                        index: ++c,
                        value: t
                    }
                }), function(t, e) {
                    return f(t, e, r)
                })
            }