            t.exports = function(t, r) {
                return function(n) {
                    return null != n && n[t] === r && (void 0 !== r || t in Object(n))
                }
            }