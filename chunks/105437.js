            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("884691"),
                s = n("386411"),
                i = n.n(s),
                l = n("597755"),
                r = n.n(l),
                o = n("446674"),
                u = n("952451"),
                d = n("385649"),
                c = n("27618"),
                E = n("31957"),
                f = n("773336"),
                _ = n("50885"),
                h = n("69927"),
                C = n("49111"),
                I = n("782340");
            let T = new Set(["Blink", "Gecko", "WebKit"]),
                S = C.NOOP;
            if (f.isPlatformEmbedded) S = e => _.default.setBadge(e);
            else if (T.has(r.layout)) {
                let e = new i({
                    animation: "none"
                });
                S = t => {
                    try {
                        (0, h.setPageTitleNotificationCount)(t), e.badge(-1 === t ? "•" : t)
                    } catch (e) {}
                }
            }

            function N() {
                let e = (0, o.useStateFromStores)([E.default], () => E.default.hasIncomingCalls()),
                    t = (0, o.useStateFromStores)([u.default, c.default, d.default], () => {
                        let e = u.default.getTotalMentionCount(),
                            t = c.default.getPendingCount(),
                            n = u.default.hasAnyUnread(),
                            a = d.default.getDisableUnreadBadge(),
                            s = e + t;
                        return 0 === s && n && !a && (s = -1), s
                    });
                a.useEffect(() => {
                    if (!e) return;
                    let t = _.default.bounceDock("critical"),
                        n = (0, h.flashPageTitle)({
                            messages: [I.default.Messages.INCOMING_CALL],
                            count: 50
                        });
                    return () => {
                        null == t || t(), n()
                    }
                }, [e]), a.useEffect(() => {
                    S(t)
                }, [t]), a.useEffect(() => () => S(0), [])
            }