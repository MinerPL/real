            var r = n("68421");
            e.exports = function(e, t) {
                var n = -1,
                    u = e.length,
                    i = u - 1;
                for (t = void 0 === t ? u : t; ++n < t;) {
                    var l = r(n, i),
                        a = e[l];
                    e[l] = e[n], e[n] = a
                }
                return e.length = t, e
            }