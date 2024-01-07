            t.exports = function(t, n) {
                return function(r) {
                    return null != r && r[t] === n && (void 0 !== n || t in Object(r))
                }
            }