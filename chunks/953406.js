            var r = s("345238"),
                i = s("224075"),
                n = s("616601"),
                c = s("566040"),
                o = n(function(t, e) {
                    if (null == t) return [];
                    var s = e.length;
                    return s > 1 && c(t, e[0], e[1]) ? e = [] : s > 2 && c(e[0], e[1], e[2]) && (e = [e[0]]), i(t, r(e, 1), [])
                });
            t.exports = o