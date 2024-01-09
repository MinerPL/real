            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("884691"),
                s = n("65597"),
                l = n("913144"),
                i = n("206230"),
                r = n("166257"),
                o = n("845579"),
                u = n("15935");

            function d() {
                let e = o.AnimateEmoji.useSetting(),
                    t = (0, s.default)([i.default], () => i.default.useReducedMotion);
                a.useEffect(() => {
                    function n(n) {
                        let {
                            messageId: a,
                            channelId: s,
                            emoji: l,
                            optimistic: i,
                            burst: o
                        } = n;
                        !i && o && e && !t && (0, r.playBurstReaction)({
                            channelId: s,
                            messageId: a,
                            emoji: l,
                            key: u.BurstReactionEffectSource.EXTERNAL
                        })
                    }
                    return l.default.subscribe("MESSAGE_REACTION_ADD", n), () => {
                        l.default.unsubscribe("MESSAGE_REACTION_ADD", n)
                    }
                }, [e, t])
            }