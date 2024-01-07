            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var i = n("884691"),
                a = n("446674"),
                l = n("327037"),
                s = n("84339"),
                r = n("271938");

            function u() {
                let [e, t] = (0, a.useStateFromStoresArray)([r.default], () => [r.default.isAuthenticated(), null != r.default.getAnalyticsToken()]), n = (0, s.default)(e);
                i.useEffect(() => {
                    !n && e && !t && l.fetchCurrentUser({
                        withAnalyticsToken: !0
                    })
                }, [n, e, t])
            }