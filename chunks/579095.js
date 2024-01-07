            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("42203"),
                u = n("316133"),
                d = n("449008"),
                c = n("120969"),
                f = n("782340"),
                h = n("15304"),
                C = a.memo(function(e) {
                    let {
                        className: t,
                        channel: n,
                        selectedChannel: a,
                        selectedVoiceChannelId: s,
                        sortedThreadIds: C
                    } = e, p = (0, r.useStateFromStoresArray)([o.default], () => C.map(e => o.default.getChannel(e)).filter(d.isNotNullish), [C]), m = (0, r.useStateFromStores)([u.default], () => {
                        let e = p[p.length - 1];
                        if (null == e) return 0;
                        let t = u.default.getVoiceStates(e.guild_id)[e.id];
                        return null == t || 0 === t.length ? 0 : s !== e.id ? 40 : 32 * t.length + 8
                    });
                    return (0, l.jsx)("li", {
                        className: i(h.container, t),
                        children: (0, l.jsxs)("ul", {
                            role: "group",
                            "aria-label": f.default.Messages.THREAD_GROUP_A11Y_LABEL.format({
                                channelName: n.name
                            }),
                            children: [(0, l.jsx)("div", {
                                className: h.spineBorder,
                                style: {
                                    bottom: 24 + m
                                }
                            }), p.map((e, t) => (0, l.jsx)(c.default, {
                                thread: e,
                                isSelectedChannel: (null == a ? void 0 : a.id) === e.id,
                                isSelectedVoice: s === e.id,
                                isLast: t === p.length - 1
                            }, e.id))]
                        })
                    })
                })