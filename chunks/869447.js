            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("430568"),
                r = l("86678"),
                o = l("145106"),
                i = l("882641"),
                u = l("958706");

            function d(e) {
                let {
                    className: t,
                    emojiClassName: l,
                    emoji: d,
                    setEmoji: c,
                    channel: h
                } = e, m = e => (t, l) => {
                    var n, a;
                    null != t && (null == t.id ? c({
                        name: null !== (n = t.optionallyDiverseSequence) && void 0 !== n ? n : ""
                    }) : c({
                        id: t.id,
                        name: null !== (a = t.originalName) && void 0 !== a ? a : t.name,
                        animated: t.animated
                    }), l && e())
                }, N = null == d || null == d.name ? null : () => {
                    var e;
                    return (0, n.jsx)(s.default, {
                        className: l,
                        animated: null !== (e = d.animated) && void 0 !== e && e,
                        emojiId: d.id,
                        emojiName: d.name
                    })
                };
                return (0, n.jsx)(o.default, {
                    hasSetEmoji: null != d && null != d.name,
                    onClick: () => {
                        c(null)
                    },
                    children: (0, n.jsx)(a.Popout, {
                        position: "bottom",
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, n.jsx)(r.default, {
                                closePopout: t,
                                onSelectEmoji: m(t),
                                pickerIntention: u.EmojiIntention.COMMUNITY_CONTENT,
                                channel: h
                            })
                        },
                        children: (e, l) => {
                            let {
                                isShown: a
                            } = l;
                            return (0, n.jsx)(i.default, {
                                ...e,
                                tabIndex: 0,
                                active: a,
                                className: t,
                                renderButtonContents: N
                            })
                        }
                    })
                })
            }