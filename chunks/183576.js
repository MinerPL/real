            "use strict";
            r("424973");
            var n = r("516017"),
                i = r("646601"),
                o = i.List,
                a = i.Repeat,
                u = i.Record,
                s = function() {
                    return !0
                },
                c = u({
                    start: null,
                    end: null
                }),
                l = u({
                    start: null,
                    end: null,
                    decoratorKey: null,
                    leaves: null
                });

            function f(t, e) {
                return t === e
            }
            t.exports = {
                generate: function(t, e, r) {
                    var i = e.getLength();
                    if (!i) return o.of(new l({
                        start: 0,
                        end: 0,
                        decoratorKey: null,
                        leaves: o.of(new c({
                            start: 0,
                            end: 0
                        }))
                    }));
                    var u = [],
                        p = r ? r.getDecorations(e, t) : o(a(null, i)),
                        h = e.getCharacterList();
                    return n(p, f, s, function(t, e) {
                        u.push(new l({
                            start: t,
                            end: e,
                            decoratorKey: p.get(t),
                            leaves: function(t, e) {
                                var r = [];
                                return n(t.map(function(t) {
                                    return t.getStyle()
                                }).toList(), f, s, function(t, n) {
                                    r.push(new c({
                                        start: t + e,
                                        end: n + e
                                    }))
                                }), o(r)
                            }(h.slice(t, e).toList(), t)
                        }))
                    }), o(u)
                }
            }