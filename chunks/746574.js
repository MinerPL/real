            "use strict";
            n.r(t), n.d(t, {
                moveItemFromTo: function() {
                    return o
                },
                default: function() {
                    return i
                }
            }), n("424973"), n("222007");
            var r = n("917351"),
                l = n.n(r),
                a = n("605250");
            let s = new a.default("DragAndDropUtils");

            function u(e) {
                let {
                    oldOrdering: t,
                    newOrdering: n,
                    idGetter: r,
                    existingPositionGetter: l,
                    ascending: a = !0
                } = e, u = n.length;
                if (t.length !== u) return s.warn("Arrays are not of the same length!", t, n), [];
                let o = t.map(r).sort().join(":"),
                    i = n.map(r).sort().join(":");
                if (o !== i) return s.warn("Object IDs in the old ordering and the new ordering are not the same.", o, i), [];
                let c = {};
                for (let e = 0; e < u; e++) c[r(t[e])] = l(t[e]);
                let d = [];
                for (let e = 0; e < u; e++) {
                    let t = r(n[e]),
                        s = c[t],
                        o = a ? e : u - 1 - e;
                    (s !== o || l(n[e]) !== o) && d.push({
                        id: t,
                        position: o
                    })
                }
                return !a && d.reverse(), d
            }

            function o(e, t, n) {
                let r = e[t],
                    l = [...e];
                return l.splice(t, 1), l.splice(n, 0, r), l
            }
            var i = {
                moveItemFromTo: o,
                calculatePositionDeltas: u,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: t,
                        fromPosition: n,
                        toPosition: r,
                        idGetter: a,
                        existingPositionGetter: s,
                        ascending: i = !0
                    } = e;
                    !Array.isArray(t) && (t = l.values(t));
                    let c = o(t, n, r);
                    return u({
                        oldOrdering: t,
                        newOrdering: c,
                        idGetter: a,
                        existingPositionGetter: s,
                        ascending: i
                    })
                }
            }