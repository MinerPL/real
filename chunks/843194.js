            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("574073"),
                r = n("780571"),
                o = n("497880"),
                u = n("93332"),
                d = n("97194");

            function c(e) {
                let {
                    message: t,
                    channel: n,
                    content: s,
                    className: c,
                    compact: f,
                    popoutProps: m,
                    hideTimestamp: E = !1,
                    withFooter: _ = !1,
                    ...h
                } = e, p = (0, i.default)(t);
                return (0, a.jsx)("div", {
                    className: l({
                        [d.withFooter]: _
                    }, d.embedCard, {
                        [d.compact]: f
                    }, c),
                    children: (0, a.jsx)(r.default, {
                        ...h,
                        className: l(d.messageContainer, {
                            [d.compact]: f
                        }),
                        childrenMessageContent: (0, a.jsx)(o.default, {
                            className: l(d.messageContent, {
                                [d.compact]: f
                            }),
                            message: t,
                            content: s
                        }),
                        childrenHeader: (0, a.jsx)(u.default, {
                            message: t,
                            channel: n,
                            author: p,
                            guildId: null == n ? void 0 : n.guild_id,
                            compact: f,
                            hideTimestamp: E,
                            className: l(d.header, {
                                [d.compact]: f
                            }),
                            ...null != m ? m : {}
                        }),
                        compact: f
                    })
                })
            }