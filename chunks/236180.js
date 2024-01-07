            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("272030"),
                r = l("643306"),
                i = l("470648"),
                u = l("42203"),
                s = {
                    handleUserContextMenu(e, t, r, i) {
                        let s = u.default.getChannel(t);
                        null != s && (0, n.openContextMenuLazy)(i, async () => {
                            let {
                                default: t
                            } = await l.el("834247").then(l.bind(l, "834247"));
                            return l => (0, a.jsx)(t, {
                                ...l,
                                user: e,
                                channel: s,
                                guildId: r
                            })
                        })
                    },
                    react(e, t, l) {
                        let {
                            userId: n,
                            channelId: u
                        } = e;
                        return null == n ? (0, a.jsx)(r.default, {
                            inlinePreview: l.formatInline,
                            ...e,
                            children: t(e.content, l)
                        }, l.key) : (0, a.jsx)(i.default, {
                            className: "mention",
                            userId: n,
                            channelId: u,
                            inlinePreview: l.noStyleAndInteraction
                        }, l.key)
                    }
                }