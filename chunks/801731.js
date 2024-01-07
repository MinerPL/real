            "use strict";
            r("222007");
            var n = r("768232"),
                i = r("568355"),
                o = r("646601"),
                a = r("808598"),
                u = r("12094"),
                s = o.List,
                Map = o.Map,
                c = function(t, e, r) {
                    if (!!t) {
                        var n = e.get(t);
                        n && e.set(t, r(n))
                    }
                };
            t.exports = function(t, e) {
                e.isCollapsed() || a(!1);
                var r, o, l, f = e.getAnchorKey(),
                    p = t.getBlockMap(),
                    h = p.get(f),
                    d = h.getText();
                if (!d) {
                    var g = h.getType();
                    if ("unordered-list-item" === g || "ordered-list-item" === g) return u(t, e, function(t) {
                        return t.merge({
                            type: "unstyled",
                            depth: 0
                        })
                    })
                }
                var y = e.getAnchorOffset(),
                    v = h.getCharacterList(),
                    m = i(),
                    _ = h.merge({
                        text: d.slice(0, y),
                        characterList: v.slice(0, y)
                    }),
                    b = _.merge({
                        key: m,
                        text: d.slice(y),
                        characterList: v.slice(y),
                        data: Map()
                    }),
                    S = p.toSeq().takeUntil(function(t) {
                        return t === h
                    }),
                    w = p.toSeq().skipUntil(function(t) {
                        return t === h
                    }).rest(),
                    k = S.concat([
                        [f, _],
                        [m, b]
                    ], w).toOrderedMap();
                if (h instanceof n) {
                    ;
                    h.getChildKeys().isEmpty() || a(!1), r = k, o = _, l = b, k = r.withMutations(function(t) {
                        var e = o.getKey(),
                            r = l.getKey();
                        c(o.getParentKey(), t, function(t) {
                            var n = t.getChildKeys(),
                                i = n.indexOf(e) + 1,
                                o = n.toArray();
                            return o.splice(i, 0, r), t.merge({
                                children: s(o)
                            })
                        }), c(o.getNextSiblingKey(), t, function(t) {
                            return t.merge({
                                prevSibling: r
                            })
                        }), c(e, t, function(t) {
                            return t.merge({
                                nextSibling: r
                            })
                        }), c(r, t, function(t) {
                            return t.merge({
                                prevSibling: e
                            })
                        })
                    })
                }
                return t.merge({
                    blockMap: k,
                    selectionBefore: e,
                    selectionAfter: e.merge({
                        anchorKey: m,
                        anchorOffset: 0,
                        focusKey: m,
                        focusOffset: 0,
                        isBackward: !1
                    })
                })
            }