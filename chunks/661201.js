            r("70102");
            var e = r("664007");

            function o(t, n) {
                if ("function" != typeof t || null != n && "function" != typeof n) throw TypeError("Expected a function");
                var r = function() {
                    var e = arguments,
                        o = n ? n.apply(this, e) : e[0],
                        i = r.cache;
                    if (i.has(o)) return i.get(o);
                    var u = t.apply(this, e);
                    return r.cache = i.set(o, u) || i, u
                };
                return r.cache = new(o.Cache || e), r
            }
            o.Cache = e, t.exports = o