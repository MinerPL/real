            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                r = n("574073"),
                o = n("79798"),
                u = n("93332"),
                d = n("304198"),
                c = n("250375"),
                f = n("988268"),
                m = n("782340"),
                E = n("413362");

            function _(e) {
                let {
                    message: t,
                    compact: n,
                    usernameHook: s
                } = e, _ = (0, r.default)(t), h = s(_), {
                    avatarSrc: p,
                    eventHandlers: {
                        onMouseEnter: I,
                        onMouseLeave: T
                    }
                } = (0, c.useAutomodAvatar)(!0);
                return (0, a.jsx)("div", {
                    onMouseEnter: I,
                    onMouseLeave: T,
                    children: (0, a.jsx)(d.default, {
                        className: l(E.mainContainer, {
                            [E.compact]: n
                        }),
                        iconNode: n ? null : (0, a.jsx)(c.AutomodAvatar, {
                            src: p
                        }),
                        iconContainerClassName: E.iconContainer,
                        compact: n,
                        children: (0, a.jsxs)("div", {
                            className: l(E.content, {
                                [E.compact]: n
                            }),
                            children: [(0, a.jsx)(u.BaseMessageHeader, {
                                message: t,
                                messageClassname: E.spanCorrection,
                                className: l(E.usernameContainer, E.spanCorrection, {
                                    [E.compact]: n
                                }),
                                username: (0, a.jsxs)("div", {
                                    className: E.spanCorrection,
                                    children: [(0, a.jsx)(i.Text, {
                                        variant: "text-md/normal",
                                        color: "text-brand",
                                        tag: "span",
                                        className: E.username,
                                        children: m.default.Messages.GUILD_AUTOMOD_USERNAME
                                    }), (0, a.jsx)(o.default, {
                                        type: f.BotTagTypes.SYSTEM_DM,
                                        className: E.systemTag
                                    })]
                                }),
                                compact: n,
                                showTimestamp: !0
                            }), (0, a.jsx)("div", {
                                className: l(E.messageContent, {
                                    [E.compact]: n
                                }),
                                children: m.default.Messages.GUILD_REPORT_FALSE_ALARM_SYSTEM_MESSAGE_SHORT.format({
                                    username: _.nick,
                                    usernameHook: h
                                })
                            })]
                        })
                    })
                })
            }