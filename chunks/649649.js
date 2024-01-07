            "use strict";
            s.r(t), s.d(t, {
                listSnapshots: function() {
                    return r
                },
                takeSnapshot: function() {
                    return o
                },
                restoreSnapshot: function() {
                    return d
                },
                restoreNewestSnapshot: function() {
                    return c
                },
                backupSettings: function() {
                    return S
                }
            });
            var a = s("917351"),
                n = s.n(a),
                l = s("872717"),
                i = s("49111");
            async function r() {
                return (await l.default.get(i.Endpoints.NOTIFICATION_SNAPSHOTS)).body
            }
            async function o(e) {
                return (await l.default.post({
                    url: i.Endpoints.NOTIFICATION_SNAPSHOTS,
                    body: {
                        label: e
                    }
                })).body
            }
            async function d(e) {
                return (await l.default.post(i.Endpoints.RESTORE_NOTIFICATION_SNAPSHOT(e))).body
            }
            async function u(e) {
                return (await l.default.delete(i.Endpoints.NOTIFICATION_SNAPSHOT(e))).body
            }
            async function c() {
                let e = await r(),
                    t = n.sortBy(e, e => new Date(e.recorded_at).getTime());
                0 !== t.length && await d(t[t.length - 1].id)
            }
            async function S(e) {
                if (e.length > 0) {
                    var t;
                    let s = n.sum(e.map(e => e.length)),
                        a = null !== (t = n.max(e.map(e => e.length))) && void 0 !== t ? t : 0;
                    if (e.length >= 5 || s + a > 1e6) {
                        let t = n.sortBy(e, e => new Date(e.recorded_at).getTime());
                        await u(t[0].id)
                    }
                }
                return o("Backup from ".concat(new Date().toLocaleDateString()))
            }