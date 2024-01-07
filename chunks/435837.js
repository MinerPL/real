            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("355262"),
                i = a("801110"),
                d = a("446674"),
                r = a("77078"),
                u = a("679653"),
                o = a("419830"),
                c = a("42203"),
                f = a("26989"),
                m = a("27618"),
                h = a("697218"),
                E = a("116320"),
                g = a("867544"),
                I = a("387111"),
                _ = a("713810"),
                x = a("60036"),
                v = a("339274"),
                S = a("605143"),
                C = a("782340"),
                N = a("327797");

            function p(e) {
                let {
                    guildId: t,
                    feedItem: a,
                    onSendFeedback: n
                } = e, s = (0, x.default)(a), g = s.channel_id, v = (0, d.useStateFromStores)([c.default], () => c.default.getChannel(g)), S = (0, u.default)(v), p = (0, o.getChannelIconComponent)(v), T = (0, d.useStateFromStores)([h.default], () => h.default.getUser(s.author.id)), A = (0, d.useStateFromStores)([c.default, f.default, m.default], () => I.default.getName(t, g, T)), j = e => {
                    (0, _.setFeedItemPreference)(t, e), n()
                };
                return (0, l.jsxs)("div", {
                    className: N.options,
                    children: [(0, l.jsx)(r.Clickable, {
                        className: N.option,
                        onClick: () => j({
                            channel_id: g,
                            message_id: s.id,
                            entity_type: i.GuildFeedPreferenceEntityTypes.MESSAGE
                        }),
                        children: (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "interactive-active",
                            children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_NO_LIKE
                        })
                    }), (0, l.jsx)(r.Clickable, {
                        className: N.option,
                        onClick: () => j({
                            channel_id: g,
                            entity_type: i.GuildFeedPreferenceEntityTypes.CHANNEL
                        }),
                        children: (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "interactive-active",
                            children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_SHOW_LESS_CHANNEL.format({
                                channelName: S,
                                channelNameHook: (e, t) => (0, l.jsxs)("span", {
                                    children: [null != p && (0, l.jsx)(p, {
                                        className: N.mentionIcon,
                                        width: 20,
                                        height: 20
                                    }), " ", e]
                                }, t)
                            })
                        })
                    }), (0, l.jsx)(r.Clickable, {
                        className: N.option,
                        onClick: () => {
                            var e;
                            return j({
                                user_id: null == s ? void 0 : null === (e = s.author) || void 0 === e ? void 0 : e.id,
                                entity_type: i.GuildFeedPreferenceEntityTypes.USER
                            })
                        },
                        children: (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "interactive-active",
                            children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_SHOW_LESS_USER.format({
                                username: A,
                                usernameHook: (e, t) => (0, l.jsxs)("span", {
                                    children: [(0, l.jsx)(E.default, {
                                        className: N.mentionIcon,
                                        width: 20,
                                        height: 20
                                    }), " ", e]
                                }, t)
                            })
                        })
                    })]
                })
            }

            function T(e) {
                let {
                    guildId: t,
                    feedItem: a
                } = e, [i, d] = n.useState(!1), u = (0, s.useListItem)(a.id);
                return (0, l.jsxs)(v.default, {
                    ariaLabel: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM,
                    listItemProps: u,
                    children: [(0, l.jsxs)(S.default, {
                        hideBorder: i,
                        children: [(0, l.jsx)(g.default, {
                            className: N.icon,
                            width: 16,
                            height: 16,
                            foregroundColor: "currentColor"
                        }), i ? (0, l.jsxs)("div", {
                            className: N.title,
                            children: [(0, l.jsx)(r.Text, {
                                className: N.title,
                                variant: "text-md/medium",
                                color: "interactive-active",
                                children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM_FEEDBACK_RECEIVED_TITLE
                            }), (0, l.jsx)(r.Text, {
                                className: N.title,
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM_FEEDBACK_RECEIVED_SUBTITLE
                            })]
                        }) : (0, l.jsx)(r.Text, {
                            className: N.title,
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM
                        }), (0, l.jsx)(r.Button, {
                            size: r.Button.Sizes.SMALL,
                            color: r.Button.Colors.PRIMARY,
                            onClick: () => {
                                (0, _.unhideItemFromGuildFeed)(a, t)
                            },
                            children: C.default.Messages.UNDO
                        })]
                    }), !i && (0, l.jsx)(p, {
                        guildId: t,
                        feedItem: a,
                        onSendFeedback: () => d(!0)
                    })]
                })
            }