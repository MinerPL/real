            var r = Date.now;
            t.exports = function(t) {
                var e = 0,
                    s = 0;
                return function() {
                    var i = r(),
                        n = 16 - (i - s);
                    if (s = i, n > 0) {
                        if (++e >= 800) return arguments[0]
                    } else e = 0;
                    return t.apply(void 0, arguments)
                }
            }