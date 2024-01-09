            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var a = n("884691"),
                s = n("446674"),
                l = n("697218"),
                i = n("16108"),
                r = n("288518");
            let o = new Set(["GB"]);

            function u() {
                let e = (0, s.useStateFromStores)([r.default], () => r.default.getUserCountryCode()),
                    t = !1 === (0, s.useStateFromStores)([l.default], () => {
                        var e;
                        return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                    });
                return a.useEffect(() => {
                    null == e && (0, i.fetchUserCountryCode)()
                }, [e]), !!(null != e && o.has(e.alpha2)) && !!t || !1
            }