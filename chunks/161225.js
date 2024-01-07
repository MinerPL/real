            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
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
                f = n("49111"),
                m = n("988268"),
                E = n("782340"),
                _ = n("413362");

            function h(e) {
                let {
                    message: t,
                    compact: n,
                    usernameHook: s
                } = e, h = (0, r.default)(t), p = s(h), {
                    avatarSrc: I,
                    eventHandlers: {
                        onMouseEnter: T,
                        onMouseLeave: g
                    }
                } = (0, c.useAutomodAvatar)(!0), C = "" !== t.content ? new Date(t.content).toLocaleString(E.default.getLocale(), {
                    hour: "numeric",
                    minute: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric"
                }) : "";
                return (0, a.jsx)("div", {
                    onMouseEnter: T,
                    onMouseLeave: g,
                    children: (0, a.jsx)(d.default, {
                        className: l(_.mainContainer, {
                            [_.compact]: n
                        }),
                        iconNode: n ? null : (0, a.jsx)(c.AutomodAvatar, {
                            src: I
                        }),
                        iconContainerClassName: _.iconContainer,
                        compact: n,
                        children: (0, a.jsxs)("div", {
                            className: l(_.content, {
                                [_.compact]: n
                            }),
                            children: [(0, a.jsx)(u.BaseMessageHeader, {
                                message: t,
                                messageClassname: _.spanCorrection,
                                className: l(_.usernameContainer, _.spanCorrection, {
                                    [_.compact]: n
                                }),
                                username: (0, a.jsxs)("div", {
                                    className: _.spanCorrection,
                                    children: [(0, a.jsx)(i.Text, {
                                        variant: "text-md/normal",
                                        color: "text-brand",
                                        tag: "span",
                                        className: _.username,
                                        children: E.default.Messages.GUILD_AUTOMOD_USERNAME
                                    }), (0, a.jsx)(o.default, {
                                        type: m.BotTagTypes.SYSTEM_DM,
                                        className: _.systemTag
                                    })]
                                }),
                                compact: n,
                                showTimestamp: !0
                            }), (0, a.jsx)("div", {
                                className: l(_.messageContent, {
                                    [_.compact]: n
                                }),
                                children: t.type === f.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED ? E.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_SYSTEM_MESSAGE_SHORT.format({
                                    username: h.nick,
                                    usernameHook: p,
                                    time: C
                                }) : E.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_SYSTEM_MESSAGE.format({
                                    username: h.nick,
                                    usernameHook: p
                                })
                            })]
                        })
                    })
                })
            }