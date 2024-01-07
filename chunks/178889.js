            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("129953"),
                i = n("305961"),
                r = n("304198"),
                o = n("49111"),
                u = n("782340"),
                d = n("985140");

            function c(e) {
                let t, {
                        compact: c,
                        isOwner: f,
                        channel: m
                    } = e,
                    E = () => {
                        let e = i.default.getGuild(m.getGuildId());
                        null != e && ((0, s.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("310688").then(n.bind(n, "310688"));
                            return n => (0, a.jsx)(t, {
                                ...n,
                                guild: e,
                                channel: m,
                                source: o.InstantInviteSources.INVITE_SYSTEM_MESSAGE
                            })
                        }), (0, l.trackGuildInviteNotificationAction)())
                    },
                    _ = (e, t) => (0, a.jsx)(s.Anchor, {
                        className: d.inviteLink,
                        onClick: E,
                        children: e
                    }, t);
                return t = c ? (0, a.jsx)("div", {
                    className: d.inviteContent,
                    children: f ? u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER_COMPACT.format({
                        inviteHook: _
                    }) : u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_COMPACT.format({
                        inviteHook: _
                    })
                }) : (0, a.jsxs)("div", {
                    className: d.content,
                    children: [(0, a.jsx)("div", {
                        className: d.inviteHeader,
                        children: f ? u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER : u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS
                    }), (0, a.jsx)("div", {
                        className: d.inviteContent,
                        children: f ? u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION_OWNER : u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION
                    }), (0, a.jsx)(s.Button, {
                        onClick: E,
                        size: s.Button.Sizes.SMALL,
                        className: d.inviteButton,
                        children: u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_BUTTON
                    })]
                }), (0, a.jsx)(r.default, {
                    className: c ? d.compact : d.inviteContent,
                    iconNode: c ? null : (0, a.jsx)("img", {
                        alt: "",
                        src: n("190368"),
                        width: 40,
                        height: 40
                    }),
                    iconContainerClassName: d.iconContainer,
                    compact: c,
                    children: t
                })
            }