            var i = Date.now;
            t.exports = function(t) {
                var e = 0,
                    r = 0;
                return function() {
                    var n = i(),
                        o = 16 - (n - r);
                    if (r = n, o > 0) {
                        if (++e >= 800) return arguments[0]
                    } else e = 0;
                    return t.apply(void 0, arguments)
                }
            }