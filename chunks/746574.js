            "use strict";
            n.r(t), n.d(t, {
                moveItemFromTo: function() {
                    return s
                },
                default: function() {
                    return i
                }
            }), n("424973"), n("222007");
            var l = n("917351"),
                a = n.n(l),
                r = n("605250");
            let u = new r.default("DragAndDropUtils");

            function o(e) {
                let {
                    oldOrdering: t,
                    newOrdering: n,
                    idGetter: l,
                    existingPositionGetter: a,
                    ascending: r = !0
                } = e, o = n.length;
                if (t.length !== o) return u.warn("Arrays are not of the same length!", t, n), [];
                let s = t.map(l).sort().join(":"),
                    i = n.map(l).sort().join(":");
                if (s !== i) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", s, i), [];
                let c = {};
                for (let e = 0; e < o; e++) c[l(t[e])] = a(t[e]);
                let E = [];
                for (let e = 0; e < o; e++) {
                    let t = l(n[e]),
                        u = c[t],
                        s = r ? e : o - 1 - e;
                    (u !== s || a(n[e]) !== s) && E.push({
                        id: t,
                        position: s
                    })
                }
                return !r && E.reverse(), E
            }

            function s(e, t, n) {
                let l = e[t],
                    a = [...e];
                return a.splice(t, 1), a.splice(n, 0, l), a
            }
            var i = {
                moveItemFromTo: s,
                calculatePositionDeltas: o,
                getPositionUpdates: function(e) {
                    let {
                        objectArray: t,
                        fromPosition: n,
                        toPosition: l,
                        idGetter: r,
                        existingPositionGetter: u,
                        ascending: i = !0
                    } = e;
                    !Array.isArray(t) && (t = a.values(t));
                    let c = s(t, n, l);
                    return o({
                        oldOrdering: t,
                        newOrdering: c,
                        idGetter: r,
                        existingPositionGetter: u,
                        ascending: i
                    })
                }
            }