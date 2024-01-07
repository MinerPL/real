            "use strict";
            s.r(t), s.d(t, {
                useAuthSessions: function() {
                    return u
                },
                formatDate: function() {
                    return c
                }
            }), s("222007");
            var a = s("884691"),
                n = s("866227"),
                l = s.n(n),
                i = s("446674"),
                r = s("271938"),
                o = s("797175"),
                d = s("782340");

            function u() {
                let e = (0, i.useStateFromStoresObject)([o.default], () => o.default.getSessions());
                return a.useMemo(() => {
                    let t = [...e],
                        s = null,
                        a = r.default.getAuthSessionIdHash();
                    if (null != a) {
                        let e = t.findIndex(e => e.id_hash === a);
                        e >= 0 && (s = t.splice(e, 1)[0])
                    }
                    return t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()), {
                        currentSession: s,
                        otherSessions: t
                    }
                }, [e])
            }

            function c(e) {
                let t = (Date.now() - e.valueOf()) / 1e3 / 60 / 60;
                return t < 1 ? d.default.Messages.AUTH_SESSIONS_ACTIVE_RECENTLY : l(e).fromNow()
            }