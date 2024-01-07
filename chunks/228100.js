            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            }), s("222007");
            var a = s("884691"),
                n = s("446674"),
                l = s("448993"),
                i = s("651057"),
                r = s("299285");

            function o(e, t) {
                let s = (0, n.useStateFromStores)([r.default], () => r.default.getGuildApplication(e, t)),
                    [o, d] = a.useState(null == s),
                    [u, c] = a.useState(),
                    [E, _] = a.useState(!1),
                    T = a.useCallback(async () => {
                        if (null == s && null != e) {
                            _(!0), d(!0);
                            try {
                                await i.default.getApplicationsForGuild(e, {
                                    type: t,
                                    includeTeam: !0
                                })
                            } catch (e) {
                                c(new l.APIError(e))
                            } finally {
                                d(!1)
                            }
                        }
                    }, [s, t, e]);
                return a.useEffect(() => {
                    !E && T()
                }, [E, T]), {
                    application: s,
                    error: u,
                    loading: o
                }
            }