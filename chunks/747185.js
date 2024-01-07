            e.exports = function(e, t) {
                return function(r) {
                    return null != r && r[e] === t && (void 0 !== t || e in Object(r))
                }
            }