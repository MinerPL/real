            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("424973"), n("222007");
            var s = n("714617"),
                i = n.n(s),
                r = n("446674"),
                a = n("913144"),
                o = n("77173");
            let d = [o.default],
                u = [];

            function l() {
                let e = [];
                for (let t of d) {
                    let n = t.getActivity();
                    null != n && e.push(n)
                }
                return !i(e, u) && (u = e, !0)
            }
            class f extends r.default.Store {
                initialize() {
                    this.syncWith(d, l)
                }
                getActivities() {
                    return u
                }
            }
            f.displayName = "FirstPartyRichPresenceStore";
            var _ = new f(a.default)