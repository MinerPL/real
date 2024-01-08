            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                u = n("748820"),
                o = n("446674"),
                d = n("913144"),
                c = n("430568"),
                f = n("206230"),
                h = n("962367");
            let p = [h.emoji1, h.emoji2, h.emoji3, h.emoji4],
                m = l.memo(function(e) {
                    var t;
                    let {
                        emoji: n,
                        onAnimationEnd: s
                    } = e, u = (0, r.sample)(p), o = l.useCallback(() => {
                        s(n.key)
                    }, [n.key, s]);
                    return (0, a.jsx)("div", {
                        className: i(h.emoji, u),
                        onAnimationEnd: o,
                        children: (0, a.jsx)(c.default, {
                            emojiId: n.id,
                            emojiName: n.name,
                            animated: null !== (t = n.animated) && void 0 !== t && t
                        })
                    })
                });

            function E(e) {
                let {
                    channelId: t,
                    callHeight: n
                } = e, s = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), [i, r] = l.useState([]);
                l.useEffect(() => {
                    function e(e) {
                        let {
                            channelId: n,
                            emoji: a
                        } = e;
                        n === t && !s && null != a && r(e => [...e, {
                            key: (0, u.v4)(),
                            ...a
                        }])
                    }
                    return d.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
                        d.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
                    }
                }, [t, s]);
                let c = l.useCallback(e => {
                    r(t => t.filter(t => t.key !== e))
                }, []);
                return s ? null : (0, a.jsx)("div", {
                    className: h.container,
                    style: {
                        top: n - 16
                    },
                    "aria-hidden": !0,
                    children: i.map(e => (0, a.jsx)(m, {
                        emoji: e,
                        onAnimationEnd: c
                    }, e.key))
                })
            }