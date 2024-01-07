            "use strict";

            function n(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), n.forEach(function(e) {
                        (function(t, e, r) {
                            e in t ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = r
                        })(t, e, r[e])
                    })
                }
                return t
            }
            r("222007"), r("808653");
            var i = r("117811"),
                o = r("768232"),
                a = r("212416"),
                u = r("188552"),
                s = r("37414");
            r("15591");
            var c = r("455562"),
                l = r("351214"),
                f = r("478904"),
                p = r("160200"),
                h = r("568355"),
                d = r("707736"),
                g = r("646601"),
                y = r("808598"),
                v = d("draft_tree_data_support"),
                m = g.List,
                Map = g.Map,
                _ = g.OrderedMap,
                b = function(t, e) {
                    var r = t.key,
                        n = t.type,
                        i = t.data;
                    return {
                        text: t.text,
                        depth: t.depth || 0,
                        type: n || "unstyled",
                        key: r || h(),
                        data: Map(i),
                        characterList: S(t, e)
                    }
                },
                S = function(t, e) {
                    var r = t.text,
                        i = t.entityRanges,
                        o = t.inlineStyleRanges;
                    return l(p(r, o || []), f(r, (i || []).filter(function(t) {
                        return e.hasOwnProperty(t.key)
                    }).map(function(t) {
                        return n({}, t, {
                            key: e[t.key]
                        })
                    })))
                },
                w = function(t) {
                    return n({}, t, {
                        key: t.key || h()
                    })
                },
                k = function(t, e, r) {
                    var i = e.map(function(t) {
                        return n({}, t, {
                            parentRef: r
                        })
                    });
                    return t.concat(i.reverse())
                },
                x = function(t, e) {
                    var r, a, u, c, l = t.blocks.find(function(t) {
                            return Array.isArray(t.children) && t.children.length > 0
                        }),
                        f = v && !l ? s.fromRawStateToRawTreeState(t).blocks : t.blocks;
                    if (!v) {
                        ;
                        return r = l ? s.fromRawTreeStateToRawState(t).blocks : f, a = e, _(r.map(function(t) {
                            var e = new i(b(t, a));
                            return [e.getKey(), e]
                        }))
                    }
                    return u = f, c = e, u.map(w).reduce(function(t, e, r) {
                        Array.isArray(e.children) || y(!1);
                        var i = e.children.map(w),
                            a = new o(n({}, b(e, c), {
                                prevSibling: 0 === r ? null : u[r - 1].key,
                                nextSibling: r === u.length - 1 ? null : u[r + 1].key,
                                children: m(i.map(function(t) {
                                    return t.key
                                }))
                            }));
                        t = t.set(a.getKey(), a);
                        for (var s = k([], i, a); s.length > 0;) {
                            var l = s.pop(),
                                f = l.parentRef,
                                p = f.getChildKeys(),
                                h = p.indexOf(l.key),
                                d = Array.isArray(l.children);
                            if (!d) {
                                d || y(!1);
                                break
                            }
                            var g = l.children.map(w),
                                v = new o(n({}, b(l, c), {
                                    parent: f.getKey(),
                                    children: m(g.map(function(t) {
                                        return t.key
                                    })),
                                    prevSibling: 0 === h ? null : p.get(h - 1),
                                    nextSibling: h === p.size - 1 ? null : p.get(h + 1)
                                }));
                            t = t.set(v.getKey(), v), s = k(s, g, v)
                        }
                        return t
                    }, _())
                },
                C = function(t) {
                    var e = t.entityMap,
                        r = {};
                    return Object.keys(e).forEach(function(t) {
                        var n = e[t],
                            i = n.type,
                            o = n.mutability,
                            a = n.data;
                        r[t] = u.__create(i, o, a || {})
                    }), r
                };
            t.exports = function(t) {
                Array.isArray(t.blocks) || y(!1);
                var e = C(t),
                    r = x(t, e),
                    n = r.isEmpty() ? new c : c.createEmpty(r.first().getKey());
                return new a({
                    blockMap: r,
                    entityMap: e,
                    selectionBefore: n,
                    selectionAfter: n
                })
            }