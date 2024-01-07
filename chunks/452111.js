            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("222007");
            var a = s("884691"),
                n = s("837008"),
                l = s("795228");

            function i(e) {
                let t = (0, n.useSubscriptionListingsForGuild)(e),
                    s = (0, l.default)(e);
                return a.useMemo(() => {
                    let e = 0;
                    for (let a of t) {
                        let t = null == a ? void 0 : a.role_id;
                        if (null != t) {
                            let a = null == s ? void 0 : s[t];
                            null != a && (e += a)
                        }
                    }
                    return e
                }, [t, s])
            }