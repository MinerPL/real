            "use strict";
            n.r(t), n.d(t, {
                setSessionExtendingEnabled: function() {
                    return c
                },
                getSession: function() {
                    return d
                },
                timestampOrZero: function() {
                    return f
                }
            });
            var i = n("748820"),
                r = n("95410");
            let o = "LATEST_SESSION_TIMESTAMP",
                s = "LATEST_SESSION_UUID",
                l = "LATEST_SESSION_INITIALIZED_TIMESTAMP",
                a = Promise.resolve(),
                u = !1;

            function c(e) {
                u = e
            }

            function d() {
                let e = a.then(async () => {
                    let e = await _();
                    if (null == e || function(e) {
                            let t = 18e5 + e.lastUsed - Date.now();
                            return t <= 0
                        }(e)) {
                        if (!u) return null;
                        let t = {
                            uuid: (0, i.v4)(),
                            initialized: Date.now(),
                            lastUsed: Date.now()
                        };
                        r.default.set(s, t.uuid), r.default.set(l, t.initialized.toString()), r.default.set(o, Date.now().toString()), e = t
                    } else u && r.default.set(o, Date.now().toString());
                    return e
                });
                return a = e
            }
            async function _() {
                let e = await r.default.getAfterRefresh(s),
                    t = await r.default.getAfterRefresh(l).then(f),
                    n = await r.default.getAfterRefresh(o).then(f);
                return null != e && null != t ? {
                    uuid: e,
                    initialized: t,
                    lastUsed: n
                } : null
            }

            function f(e) {
                return null != e ? Number(e) : 0
            }