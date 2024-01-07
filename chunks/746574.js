            "use strict";
            n.r(t), n.d(t, {
                moveItemFromTo: function() {
                    return i
                },
                default: function() {
                    return s
                }
            }), n("424973"), n("222007");
            var l = n("917351"),
                r = n.n(l),
                a = n("605250");
            let o = new a.default("DragAndDropUtils");

            function u(e) {
                let {
                    oldOrdering: t,
                    newOrdering: n,
                    idGetter: l,
                    existingPositionGetter: r,
                    ascending: a = !0
                } = e, u = n.length;
                if (t.length !== u) return o.warn("Arrays are not of the same length!", t, n), [];
                let i = t.map(l).sort().join(":"),
                    s = n.map(l).sort().join(":");
                if (i !== s) return o.warn("Object IDs in the old ordering and the new ordering are not the same.", i, s), [];
                let c = {};
                for (let e = 0; e < u; e++) c[l(t[e])] = r(t[e]);
                let E = [];
                for (let e = 0; e < u; e++) {
                    let t = l(n[e]),
                        o = c[t],
                        i = a ? e : u - 1 - e;
                    (o !== i || r(n[e]) !== i) && E.push({
                        id: t,
                        position: i
                    })
                }
                return !a && E.reverse(), E
            }

            function i(e, t, n) {
                let l = e[t],
                    r = [...e];
                return r.splice(t, 1), r.splice(n, 0, l), r
            }
            var s = {
                moveItemFromTo: i,
                calculatePositionDeltas: u,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: t,
                        fromPosition: n,
                        toPosition: l,
                        idGetter: a,
                        existingPositionGetter: o,
                        ascending: s = !0
                    } = e;
                    !Array.isArray(t) && (t = r.values(t));
                    let c = i(t, n, l);
                    return u({
                        oldOrdering: t,
                        newOrdering: c,
                        idGetter: a,
                        existingPositionGetter: o,
                        ascending: s
                    })
                }
            }