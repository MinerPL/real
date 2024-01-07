            "use strict";
            var n = r("706621"),
                i = r("516017"),
                o = r("808598");

            function a(t, e, r) {
                var a = e.getCharacterList(),
                    u = r > 0 ? a.get(r - 1) : void 0,
                    s = r < a.count() ? a.get(r) : void 0,
                    c = u ? u.getEntity() : void 0,
                    l = s ? s.getEntity() : void 0;
                if (l && l === c && "MUTABLE" !== t.__get(l).getMutability()) {
                    for (var f, p, h, d, g, y = (f = a, p = l, h = r, i(f, function(t, e) {
                            return t.getEntity() === e.getEntity()
                        }, function(t) {
                            return t.getEntity() === p
                        }, function(t, e) {
                            t <= h && e >= h && (d = {
                                start: t,
                                end: e
                            })
                        }), "object" != typeof d && o(!1), d), v = y.start, m = y.end; v < m;) g = a.get(v), a = a.set(v, n.applyEntity(g, null)), v++;
                    return e.set("characterList", a)
                }
                return e
            }
            t.exports = function(t, e) {
                var r = t.getBlockMap(),
                    n = t.getEntityMap(),
                    i = {},
                    o = e.getStartKey(),
                    u = e.getStartOffset(),
                    s = r.get(o),
                    c = a(n, s, u);
                c !== s && (i[o] = c);
                var l = e.getEndKey(),
                    f = e.getEndOffset(),
                    p = r.get(l);
                o === l && (p = c);
                var h = a(n, p, f);
                return (h !== p && (i[l] = h), Object.keys(i).length) ? t.merge({
                    blockMap: r.merge(i),
                    selectionAfter: e
                }) : t.set("selectionAfter", e)
            }