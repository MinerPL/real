            t.exports = function(t) {
                var n = -1,
                    r = Array(t.size);
                return t.forEach(function(t, e) {
                    r[++n] = [e, t]
                }), r
            }