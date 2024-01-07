            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("424973"), n("222007");
            var i = n("714617"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("77173");
            let u = [r.default],
                o = [];

            function d() {
                let e = [];
                for (let t of u) {
                    let n = t.getActivity();
                    null != n && e.push(n)
                }
                return !a(e, o) && (o = e, !0)
            }
            class c extends l.default.Store {
                initialize() {
                    this.syncWith(u, d)
                }
                getActivities() {
                    return o
                }
            }
            c.displayName = "FirstPartyRichPresenceStore";
            var _ = new c(s.default)