            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("917351"),
                u = n.n(i),
                r = n("446674"),
                s = n("77078"),
                d = n("848848"),
                o = n("300322"),
                f = n("800762"),
                c = n("242740"),
                _ = n("782340");

            function E(e) {
                let t = (0, o.useCanJoinThreadVoice)(e),
                    n = (0, r.useStateFromStores)([f.default], () => f.default.isInChannel(e.id)),
                    i = (0, r.useStateFromStores)([f.default], () => !u.isEmpty(f.default.getVoiceStatesForChannel(e.id))),
                    {
                        needSubscriptionToAccess: E
                    } = (0, d.default)(e.id),
                    T = l.useCallback(() => {
                        c.default.handleVoiceConnect({
                            channel: e,
                            connected: n,
                            needSubscriptionToAccess: E,
                            locked: !1
                        })
                    }, [e, n, E]);
                return n || !t ? null : (0, a.jsx)(s.MenuItem, {
                    id: "join-thread-voice",
                    label: i ? _.default.Messages.JOIN_CALL : _.default.Messages.START_CALL,
                    action: T
                })
            }