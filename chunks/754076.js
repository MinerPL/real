            var e = n("27556"),
                o = 1 / 0;
            t.exports = function(t) {
                if ("string" == typeof t || e(t)) return t;
                var r = t + "";
                return "0" == r && 1 / t == -o ? "-0" : r
            }