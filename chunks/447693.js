            "use strict";
            r("424973");
            var n = r("258310"),
                i = r("768232"),
                o = r("646601"),
                a = r("441408"),
                u = r("808598"),
                s = r("832997"),
                c = o.List,
                l = function(t, e, r, n, i, o) {
                    var u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "REPLACE_WITH_NEW_DATA",
                        s = r.get(i),
                        c = s.getText(),
                        l = s.getCharacterList(),
                        f = o + n.getText().length,
                        p = null;
                    switch (u) {
                        case "MERGE_OLD_DATA_TO_NEW_DATA":
                            p = n.getData().merge(s.getData());
                            break;
                        case "REPLACE_WITH_NEW_DATA":
                            p = n.getData()
                    }
                    var h = s.merge({
                        text: c.slice(0, o) + n.getText() + c.slice(o),
                        characterList: a(l, n.getCharacterList(), o),
                        data: p
                    });
                    return t.merge({
                        blockMap: r.set(i, h),
                        selectionBefore: e,
                        selectionAfter: e.merge({
                            anchorKey: i,
                            anchorOffset: f,
                            focusKey: i,
                            focusOffset: f,
                            isBackward: !1
                        })
                    })
                },
                f = function(t, e, r) {
                    var n = t.getText(),
                        i = t.getCharacterList(),
                        o = n.slice(0, e),
                        a = i.slice(0, e),
                        u = r.first();
                    return t.merge({
                        text: o + u.getText(),
                        characterList: a.concat(u.getCharacterList()),
                        type: o ? t.getType() : u.getType(),
                        data: u.getData()
                    })
                },
                p = function(t, e, r) {
                    var n = t.getText(),
                        i = t.getCharacterList(),
                        o = n.length,
                        a = n.slice(e, o),
                        u = i.slice(e, o),
                        s = r.last();
                    return s.merge({
                        text: s.getText() + a,
                        characterList: s.getCharacterList().concat(u),
                        data: s.getData()
                    })
                },
                h = function(t, e) {
                    var r = t.getKey(),
                        n = t,
                        i = [];
                    for (e.get(r) && i.push(r); n && n.getNextSiblingKey();) {
                        var o = n.getNextSiblingKey();
                        if (!o) break;
                        i.push(o), n = e.get(o)
                    }
                    return i
                },
                d = function(t, e, r, o, a, u) {
                    var s, l, d, g, y = r.first() instanceof i,
                        v = [],
                        m = o.size,
                        _ = r.get(a),
                        b = o.first(),
                        S = o.last(),
                        w = S.getLength(),
                        k = S.getKey(),
                        x = y && (!_.getChildKeys().isEmpty() || !b.getChildKeys().isEmpty());
                    r.forEach(function(t, e) {
                        if (e !== a) {
                            v.push(t);
                            return
                        }
                        x ? v.push(t) : v.push(f(t, u, o)), o.slice(x ? 0 : 1, m - 1).forEach(function(t) {
                            return v.push(t)
                        }), v.push(p(t, u, o))
                    });
                    var C = n.createFromArray(v);
                    if (y) {
                        ;
                        s = C, l = 0, d = _, g = b, C = s.withMutations(function(t) {
                            var e = d.getKey(),
                                r = g.getKey(),
                                n = d.getNextSiblingKey(),
                                i = d.getParentKey(),
                                o = h(g, s),
                                a = o[o.length - 1];
                            if (t.get(r) ? (t.setIn([e, "nextSibling"], r), t.setIn([r, "prevSibling"], e)) : (t.setIn([e, "nextSibling"], g.getNextSiblingKey()), t.setIn([g.getNextSiblingKey(), "prevSibling"], e)), t.setIn([a, "nextSibling"], n), n && t.setIn([n, "prevSibling"], a), o.forEach(function(e) {
                                    return t.setIn([e, "parent"], i)
                                }), i) {
                                var u = s.get(i).getChildKeys(),
                                    l = u.indexOf(e),
                                    f = u.toArray();
                                f.splice.apply(f, [l + 1, 0].concat(o)), t.setIn([i, "children"], c(f))
                            }
                        })
                    }
                    return t.merge({
                        blockMap: C,
                        selectionBefore: e,
                        selectionAfter: e.merge({
                            anchorKey: k,
                            anchorOffset: w,
                            focusKey: k,
                            focusOffset: w,
                            isBackward: !1
                        })
                    })
                };
            t.exports = function(t, e, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA";
                e.isCollapsed() || u(!1);
                var o = t.getBlockMap(),
                    a = s(r),
                    c = e.getStartKey(),
                    f = e.getStartOffset(),
                    p = o.get(c);
                return (p instanceof i && (p.getChildKeys().isEmpty() || u(!1)), 1 === a.size) ? l(t, e, o, a.first(), c, f, n) : d(t, e, o, a, c, f)
            }