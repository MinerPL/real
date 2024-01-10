            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("907002"),
                u = n("446674"),
                o = n("430568"),
                d = n("206230"),
                c = n("568088"),
                f = n("151435");
            let h = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

            function p(e) {
                let {
                    userId: t,
                    voiceChannelEffect: n,
                    onComplete: s
                } = e, {
                    emoji: p,
                    sentAt: m
                } = n, E = (0, u.useStateFromStores)([d.default], () => d.default.useReducedMotion), [C, g] = l.useState(!0), S = !E, _ = (0, r.useTransition)(C, {
                    from: {
                        rotate: -120
                    },
                    enter: {
                        rotate: 0
                    },
                    leave: {
                        rotate: -120
                    },
                    config: r.config.default,
                    immediate: E,
                    onRest: (e, t) => {
                        let {
                            phase: n
                        } = t;
                        "leave" === n && s()
                    }
                });
                return (l.useEffect(() => {
                    let e;
                    return Date.now() - m >= 2e3 ? (0, c.clearVoiceChannelEffectForUser)(t) : e = setTimeout(() => {
                        g(!1), S && (0, c.clearVoiceChannelEffectForUser)(t)
                    }, S ? 2e3 : 6e3), () => {
                        null != e && clearTimeout(e)
                    }
                }, [m, t, S]), S) ? null : _((e, t) => {
                    var n;
                    let {
                        rotate: l
                    } = e;
                    return t && (0, a.jsx)(r.animated.div, {
                        className: f.voiceChannelEffectEmojiContainer,
                        style: {
                            transform: l.to(h)
                        },
                        children: (0, a.jsx)(o.default, {
                            className: i(f.voiceChannelEffectEmoji),
                            emojiId: p.id,
                            emojiName: p.name,
                            animated: null !== (n = p.animated) && void 0 !== n && n
                        })
                    })
                })
            }