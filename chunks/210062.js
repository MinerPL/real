            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("884691"),
                a = n("65597"),
                l = n("913144"),
                i = n("206230"),
                r = n("166257"),
                o = n("845579"),
                u = n("15935");

            function d() {
                let e = o.AnimateEmoji.useSetting(),
                    t = (0, a.default)([i.default], () => i.default.useReducedMotion);
                s.useEffect(() => {
                    function n(n) {
                        let {
                            messageId: s,
                            channelId: a,
                            emoji: l,
                            optimistic: i,
                            burst: o
                        } = n;
                        !i && o && e && !t && (0, r.playBurstReaction)({
                            channelId: a,
                            messageId: s,
                            emoji: l,
                            key: u.BurstReactionEffectSource.EXTERNAL
                        })
                    }
                    return l.default.subscribe("MESSAGE_REACTION_ADD", n), () => {
                        l.default.unsubscribe("MESSAGE_REACTION_ADD", n)
                    }
                }, [e, t])
            }