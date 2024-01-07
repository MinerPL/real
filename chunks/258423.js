            var e = r("888633"),
                o = r("466731");
            t.exports = function(t) {
                for (var n = o(t), r = n.length; r--;) {
                    var i = n[r],
                        u = t[i];
                    n[r] = [i, u, e(u)]
                }
                return n
            }