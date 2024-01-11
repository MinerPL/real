            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("848848"),
                d = n("300322"),
                c = n("800762"),
                f = n("242740"),
                h = n("782340");

            function p(e) {
                let t = (0, d.useCanJoinThreadVoice)(e),
                    n = (0, r.useStateFromStores)([c.default], () => c.default.isInChannel(e.id)),
                    s = (0, r.useStateFromStores)([c.default], () => !i.isEmpty(c.default.getVoiceStatesForChannel(e.id))),
                    {
                        needSubscriptionToAccess: p
                    } = (0, u.default)(e.id),
                    m = l.useCallback(() => {
                        f.default.handleVoiceConnect({
                            channel: e,
                            connected: n,
                            needSubscriptionToAccess: p,
                            locked: !1
                        })
                    }, [e, n, p]);
                return n || !t ? null : (0, a.jsx)(o.MenuItem, {
                    id: "join-thread-voice",
                    label: s ? h.default.Messages.JOIN_CALL : h.default.Messages.START_CALL,
                    action: m
                })
            }