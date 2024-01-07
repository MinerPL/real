            t.exports = function(t) {
                return function(n, r, e) {
                    for (var o = -1, i = Object(n), u = e(n), a = u.length; a--;) {
                        var c = u[t ? a : ++o];
                        if (!1 === r(i[c], c, i)) break
                    }
                    return n
                }
            }