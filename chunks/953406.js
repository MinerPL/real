            var i = r("345238"),
                n = r("224075"),
                a = r("616601"),
                o = r("566040"),
                s = a(function(t, e) {
                    if (null == t) return [];
                    var r = e.length;
                    return r > 1 && o(t, e[0], e[1]) ? e = [] : r > 2 && o(e[0], e[1], e[2]) && (e = [e[0]]), n(t, i(e, 1), [])
                });
            t.exports = s