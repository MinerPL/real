            t.exports = function(t, r) {
                return function(n) {
                    return t(r(n))
                }
            }