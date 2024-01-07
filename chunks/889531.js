            var n = r("128387"),
                o = r("169828");
            e.exports = function(e, t) {
                var r = -1,
                    a = o(e) ? Array(e.length) : [];
                return n(e, function(e, n, o) {
                    a[++r] = t(e, n, o)
                }), a
            }