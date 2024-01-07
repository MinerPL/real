            var i = r("978603"),
                n = r("603108");
            t.exports = function(t, e) {
                var r = -1,
                    o = n(t) ? Array(t.length) : [];
                return i(t, function(t, i, n) {
                    o[++r] = e(t, i, n)
                }), o
            }