            "use strict";
            n.r(t), n.d(t, {
                Emoji: function() {
                    return N
                },
                CustomEmoji: function() {
                    return _
                },
                TextMention: function() {
                    return A
                },
                UserMention: function() {
                    return R
                },
                RoleMention: function() {
                    return O
                },
                ChannelMention: function() {
                    return M
                },
                SoundboardMention: function() {
                    return k
                },
                StaticRouteMention: function() {
                    return b
                },
                CommandMention: function() {
                    return P
                },
                Timestamp: function() {
                    return L
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                o = n("430568"),
                s = n("308289"),
                a = n("206230"),
                u = n("980215"),
                d = n("361572"),
                c = n("82300"),
                f = n("235004"),
                p = n("42203"),
                m = n("305961"),
                h = n("102985"),
                E = n("697218"),
                S = n("666897"),
                g = n("404008"),
                C = n("387111"),
                T = n("158998"),
                v = n("680894"),
                y = n("782340"),
                x = n("503241"),
                I = n("632215");

            function N(e) {
                let {
                    emoji: t
                } = e;
                return (0, l.jsx)(r.Tooltip, {
                    text: t.name,
                    delay: 750,
                    position: "top",
                    children: e => (0, l.jsx)(o.default, {
                        src: t.src,
                        emojiName: t.name,
                        animated: !1,
                        ...e
                    })
                })
            }

            function _(e) {
                let {
                    emoji: t
                } = e;
                return (0, l.jsx)(r.Tooltip, {
                    text: t.name,
                    delay: 750,
                    position: "top",
                    children: e => (0, l.jsx)(o.default, {
                        emojiId: t.emojiId,
                        emojiName: t.name,
                        animated: t.animated,
                        ...e
                    })
                })
            }

            function A(e) {
                let {
                    text: t,
                    channelId: n,
                    guildId: i
                } = e, r = m.default.getGuild(i), o = p.default.getChannel(n), s = (0, u.useClydeEnabled)(r, o), a = s && "@Clyde" === t ? v.CLYDE_AI_MENTION_COLOR : null;
                return (0, l.jsx)(S.default, {
                    color: a,
                    children: t
                })
            }

            function R(e) {
                let {
                    id: t,
                    guildId: n,
                    channelId: o
                } = e, a = (0, i.useStateFromStores)([E.default], () => E.default.getUser(t)), u = (0, i.useStateFromStores)([h.default], () => h.default.hidePersonalInformation), d = C.default.useName(n, o, a), c = (0, l.jsx)(S.default, {
                    children: null == d ? "<@".concat(t, ">") : "@".concat(d)
                });
                if (null != a) {
                    let e = u || a.isPomelo() ? null : "#".concat(a.discriminator);
                    return (0, l.jsx)(r.Tooltip, {
                        text: (0, l.jsxs)("div", {
                            className: x.userTooltip,
                            children: [(0, l.jsx)(s.default, {
                                user: a,
                                animate: !0,
                                size: r.AvatarSizes.SIZE_16,
                                className: x.avatar
                            }), T.default.getUserTag(a, {
                                mode: "username",
                                identifiable: u ? "never" : "always"
                            }), (0, l.jsx)("span", {
                                className: x.discriminator,
                                children: e
                            })]
                        }),
                        delay: 750,
                        position: "top",
                        "aria-label": T.default.getUserTag(a, {
                            decoration: "never"
                        }),
                        children: e => (0, l.jsx)(r.Clickable, {
                            tag: "span",
                            ...e,
                            children: c
                        })
                    })
                }
                return c
            }

            function O(e) {
                let {
                    id: t,
                    guildId: n
                } = e, o = (0, i.useStateFromStores)([m.default], () => {
                    let e = m.default.getGuild(n);
                    return null == e ? null : e.roles[t]
                }), s = (0, i.useStateFromStores)([a.default], () => a.default.roleStyle);
                if (null == o) return (0, l.jsx)("span", {
                    children: "@deleted-role"
                });
                let u = null != o.color && 0 !== o.color;
                return (0, l.jsxs)(S.default, {
                    color: "username" === s && u ? o.color : null,
                    children: ["dot" === s && (0, l.jsx)(r.RoleDot, {
                        color: o.colorString,
                        background: !1,
                        tooltip: !1
                    }), "@", o.name]
                })
            }

            function M(e) {
                let {
                    id: t
                } = e, n = (0, i.useStateFromStores)([p.default], () => p.default.getChannel(t)), r = y.default.Messages.UNKNOWN_CHANNEL, o = "text", s = !0;
                if (null != n) {
                    var a;
                    r = (0, d.canViewChannel)(n) ? n.name : y.default.Messages.NO_ACCESS, o = (0, d.canViewChannel)(n) ? null !== (a = (0, g.getMentionIconType)(n)) && void 0 !== a ? a : "text" : "locked", s = (0, c.isChannelTypeMentionable)(n.type)
                }
                return s ? (0, l.jsx)(S.default, {
                    iconType: o,
                    children: r
                }) : (0, l.jsx)("span", {
                    children: "#" + r
                })
            }

            function k(e) {
                var t;
                let {
                    id: n
                } = e, r = (0, i.useStateFromStores)([f.default], () => f.default.getSoundById(n));
                return (0, l.jsx)(S.default, {
                    children: null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : "Sound"
                })
            }

            function b(e) {
                let {
                    id: t
                } = e, n = {
                    home: y.default.Messages.SERVER_GUIDE,
                    guide: y.default.Messages.SERVER_GUIDE,
                    browse: y.default.Messages.CHANNEL_BROWSER_TITLE,
                    customize: y.default.Messages.CHANNELS_AND_ROLES
                };
                return (0, l.jsx)(S.default, {
                    iconType: t,
                    children: n[t]
                })
            }

            function P(e) {
                let {
                    text: t,
                    id: n
                } = e;
                return (0, l.jsxs)(S.default, {
                    children: [t, "(", n, ")"]
                })
            }

            function L(e) {
                let {
                    timestamp: t
                } = e;
                return (0, l.jsx)("span", {
                    className: I.timestamp,
                    children: t.formatted
                })
            }