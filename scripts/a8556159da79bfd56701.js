(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78995"], {
        46773: function(e, t, l) {
            "use strict";
            e.exports = l.p + "289b6053fc6a89d75452.svg"
        },
        888503: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                AVATAR_DECORATION_PADDING: function() {
                    return R
                },
                default: function() {
                    return C
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("414456"),
                u = l.n(r),
                i = l("769846"),
                o = l("77078"),
                s = l("502651"),
                d = l("390886"),
                c = l("357021"),
                f = l("106435"),
                m = l("79798"),
                p = l("982475"),
                I = l("928201"),
                S = l("118503"),
                E = l("11056"),
                h = l("159885"),
                T = l("158998"),
                g = l("943722"),
                x = l("49111"),
                v = l("988268"),
                _ = l("39141"),
                N = l("782340"),
                j = l("282730");
            let R = (0, h.cssValueToNumber)(i.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
            var C = function(e) {
                let {
                    selected: t = !1,
                    colorString: l,
                    colorRoleName: r,
                    isOwner: i,
                    ownerTooltipText: h,
                    lostPermissionTooltipText: R,
                    isTyping: C = !1,
                    nick: M,
                    user: P,
                    currentUser: A,
                    activities: L,
                    applicationStream: y,
                    status: F,
                    shouldAnimateStatus: b = !1,
                    isMobile: U,
                    premiumSince: O,
                    channel: k,
                    guildId: w,
                    className: D,
                    onMouseDown: B,
                    onKeyDown: G,
                    onClick: z,
                    onContextMenu: V,
                    onClickPremiumGuildIcon: H,
                    onFocus: Y,
                    "aria-controls": Z,
                    "aria-expanded": W,
                    "aria-posinset": q,
                    "aria-setsize": J,
                    id: K,
                    tabIndex: X,
                    itemProps: Q
                } = e, $ = T.default.useName(P), [ee, et] = n.useState(!1), [el, ea] = n.useState(null), {
                    avatarDecorationSrc: en,
                    avatarSrc: er,
                    eventHandlers: eu
                } = (0, f.default)({
                    user: P,
                    size: o.AvatarSizes.SIZE_32,
                    animateOnHover: !(t || ee),
                    guildId: w
                }), ei = e => {
                    ea(e)
                }, eo = () => null != i && i && null == R ? (0, a.jsx)(o.Tooltip, {
                    text: null != h ? h : N.default.Messages.GUILD_OWNER,
                    children: e => (0, a.jsx)(I.default, {
                        ...e,
                        className: j.ownerIcon
                    })
                }) : null, es = () => null == O ? null : (0, a.jsx)(o.Tooltip, {
                    text: N.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                        date: O
                    }),
                    children: e => (0, a.jsx)(o.Clickable, {
                        onClick: H,
                        tabIndex: -1,
                        children: (0, a.jsx)(S.default, {
                            ...e,
                            className: j.premiumIcon
                        })
                    })
                }), ed = () => {
                    let e = (null == P ? void 0 : P.isClyde()) ? v.BotTagTypes.AI : v.BotTagTypes.BOT;
                    return null != P && P.bot ? (0, a.jsx)(m.default, {
                        className: j.botTag,
                        type: e,
                        verified: P.isVerifiedBot()
                    }) : null
                }, ec = () => (0, a.jsx)(o.NameWithRole, {
                    roleName: r,
                    color: null != l ? l : void 0,
                    name: null != M ? M : $
                }), ef = F === x.StatusTypes.OFFLINE;
                return null == P ? (0, a.jsx)(p.default, {
                    avatarSize: o.AvatarSizes.SIZE_32,
                    className: j.placeholder
                }) : (0, a.jsx)(E.default, {
                    selected: t,
                    className: u(j.member, D, {
                        [j.offline]: ef && !t
                    }),
                    innerClassName: j.memberInner,
                    onClick: z,
                    onKeyDown: G,
                    onMouseDown: B,
                    onContextMenu: V,
                    onMouseEnter: () => {
                        et(!0)
                    },
                    onMouseLeave: () => {
                        et(!1)
                    },
                    name: null == R ? (0, a.jsx)("span", {
                        className: j.username,
                        children: ec()
                    }) : (0, a.jsx)(o.Tooltip, {
                        text: R,
                        children: e => (0, a.jsx)("span", {
                            ...e,
                            className: u(j.username, j.lostPermission),
                            children: ec()
                        })
                    }),
                    avatar: ((e, t) => {
                        let l = b ? o.AnimatedAvatar : o.Avatar,
                            n = (0, s.default)(L) ? x.StatusTypes.STREAMING : F;
                        return n = t ? void 0 : n, (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(l, {
                                ...eu,
                                size: o.AvatarSizes.SIZE_32,
                                src: er,
                                isMobile: U,
                                isTyping: C,
                                status: n,
                                "aria-label": e.username,
                                statusTooltip: !0,
                                avatarDecoration: en,
                                typingIndicatorRef: ei
                            }), (0, a.jsx)(c.default, {
                                confettiSpawnRef: el,
                                shouldFire: C && null != A && e.id !== A.id,
                                confettiLocation: _.ConfettiLocation.MEMBER_USER
                            })]
                        })
                    })(P, ef),
                    subText: (() => {
                        let e = null != L ? L.find(e => e.type === x.ActivityTypes.CUSTOM_STATUS) : null,
                            t = null != e && null != P && (0, d.default)(e, P, k);
                        return (0, a.jsx)(g.default, {
                            className: j.activity,
                            textClassName: j.activityText,
                            emojiClassName: j.activityEmoji,
                            activities: L,
                            applicationStream: y,
                            animate: ee,
                            hideEmoji: !t,
                            hideTooltip: !0
                        })
                    })(),
                    decorators: (0, a.jsxs)(a.Fragment, {
                        children: [ed(), eo(), es()]
                    }),
                    "aria-controls": Z,
                    "aria-expanded": W,
                    "aria-setsize": J,
                    "aria-posinset": q,
                    id: K,
                    tabIndex: X,
                    onFocus: Y,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    },
                    ...Q
                })
            }
        },
        390886: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("385976"),
                n = l("233069"),
                r = l("402671"),
                u = l("991170"),
                i = l("49111");

            function o(e, t, l) {
                if (e.type !== i.ActivityTypes.CUSTOM_STATUS || null == e.emoji) return !1;
                let o = e.emoji;
                if (null == o.id || null == l || !(0, n.isGuildTextChannelType)(l.type)) return !0;
                let s = a.default.getUsableCustomEmojiById(o.id),
                    d = r.default.isInternalEmojiForGuildId(s, l.getGuildId()),
                    c = u.default.can({
                        permission: i.Permissions.USE_EXTERNAL_EMOJIS,
                        user: t,
                        context: l
                    });
                return !d || c
            }
        },
        367376: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var a = l("917351"),
                n = l.n(a),
                r = l("176309"),
                u = l("52140"),
                i = l("888198"),
                o = l("788554");
            let s = null;

            function d(e, t) {
                let l = {};
                return null != e.mention && null != s && (l = {
                    mention: s
                }), (0, o.default)([e, ...t, l])
            }
            s = l("236180").default;
            let c = {
                    enableBuildOverrides: !1,
                    enableEmojiClick: !0
                },
                f = d(i.default.RULES, [(0, u.default)({
                    enableBuildOverrides: !0
                })]),
                m = n.omit(d(i.default.RULES, [(0, u.default)(c)]), "paragraph", "newline"),
                p = d(i.default.CHANNEL_TOPIC_RULES, [(0, u.default)({
                    ...c,
                    emojiTooltipPosition: "bottom"
                }), {
                    codeBlock: {
                        react: i.default.RULES.text.react
                    }
                }]),
                I = d(i.default.VOICE_CHANNEL_STATUS_RULES, [(0, u.default)({
                    ...c,
                    enableEmojiClick: !1
                })]),
                S = d(i.default.EMBED_TITLE_RULES, [(0, u.default)(c)]),
                E = d(i.default.INLINE_REPLY_RULES, [(0, u.default)(c)]),
                h = d(i.default.GUILD_VERIFICATION_FORM_RULES, [(0, u.default)(c)]),
                T = d(i.default.GUILD_EVENT_RULES, [(0, u.default)(c)]),
                g = d(i.default.INLINE_REPLY_RULES, [(0, u.default)({
                    ...c,
                    emoji: {
                        height: 14,
                        width: 14,
                        lineHeight: 18
                    }
                })]),
                x = d(i.default.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, u.default)(c)]),
                v = n.omit(d(i.default.RULES, [(0, u.default)({
                    ...c,
                    emoji: {
                        height: 14,
                        width: 14
                    }
                })]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading");
            var _ = {
                combineAndInjectMentionRule: d,
                createReactRules: u.default,
                defaultReactRuleOptions: c,
                defaultRules: f,
                guildEventRules: T,
                notifCenterV2MessagePreviewRules: v,
                astParserFor: r.astParserFor,
                reactParserFor: r.reactParserFor,
                parse: r.reactParserFor(f),
                parseTopic: r.reactParserFor(p),
                parseVoiceChannelStatus: r.reactParserFor(I),
                parseEmbedTitle: r.reactParserFor(S),
                parseInlineReply: r.reactParserFor(E),
                parseGuildVerificationFormRule: r.reactParserFor(h),
                parseGuildEventDescription: r.reactParserFor(T),
                parseAutoModerationSystemMessage: r.reactParserFor(x),
                parseForumPostGuidelines: r.reactParserFor(m),
                parseForumPostMostRecentMessage: r.reactParserFor(g),
                parseNotifCenterMessagePreview: r.reactParserFor(v),
                parseToAST: r.astParserFor(f),
                parseTopicToAST: r.astParserFor(p),
                parseEmbedTitleToAST: r.astParserFor(S),
                parseInlineReplyToAST: r.astParserFor(E),
                parseAutoModerationSystemMessageToAST: r.astParserFor(x)
            }
        },
        236180: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("272030"),
                r = l("643306"),
                u = l("470648"),
                i = l("42203"),
                o = {
                    handleUserContextMenu(e, t, r, u) {
                        let o = i.default.getChannel(t);
                        null != o && (0, n.openContextMenuLazy)(u, async () => {
                            let {
                                default: t
                            } = await l.el("834247").then(l.bind(l, "834247"));
                            return l => (0, a.jsx)(t, {
                                ...l,
                                user: e,
                                channel: o,
                                guildId: r
                            })
                        })
                    },
                    react(e, t, l) {
                        let {
                            userId: n,
                            channelId: i
                        } = e;
                        return null == n ? (0, a.jsx)(r.default, {
                            inlinePreview: l.formatInline,
                            ...e,
                            children: t(e.content, l)
                        }, l.key) : (0, a.jsx)(u.default, {
                            className: "mention",
                            userId: n,
                            channelId: i,
                            inlinePreview: l.noStyleAndInteraction
                        }, l.key)
                    }
                }
        },
        643306: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return P
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                r = l.n(n),
                u = l("917351"),
                i = l.n(u),
                o = l("509043"),
                s = l("446674"),
                d = l("77078"),
                c = l("272030"),
                f = l("888503"),
                m = l("206230"),
                p = l("862205"),
                I = l("895026"),
                S = l("506885"),
                E = l("981601"),
                h = l("42203"),
                T = l("26989"),
                g = l("305961"),
                x = l("697218"),
                v = l("145131"),
                _ = l("666897"),
                N = l("826684"),
                j = l("782340"),
                R = l("191213"),
                C = l("632215");
            let M = (0, p.createExperiment)({
                kind: "user",
                id: "2021-07_role_popout",
                label: "Role Popout",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Popout",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function P(e) {
                let {
                    roleColor: t,
                    roleId: n,
                    channelId: u,
                    roleName: p,
                    guildId: P,
                    children: A,
                    inlinePreview: L = !1
                } = e, y = (0, s.useStateFromStores)([m.default], () => m.default.roleStyle), F = null != t && 0 !== t && !L, b = F && "dot" === y, U = e => (0, a.jsxs)(_.default, {
                    className: r(C.roleMention),
                    color: "username" === y && F ? t : null,
                    ...e,
                    children: [b && (0, a.jsx)(d.RoleDot, {
                        color: (0, o.int2hex)(t),
                        className: R.roleDot,
                        background: !1,
                        tooltip: !1
                    }), A]
                }), {
                    enabled: O
                } = M.getCurrentConfig({
                    location: "2ec235_1"
                }, {
                    autoTrackExposure: !1
                });
                return !O || L || null == u || null == P || null == n && "@everyone" !== p ? U() : (0, a.jsx)(d.Popout, {
                    preload: async () => {
                        null != n && await (0, I.requestMembersForRole)(P, n)
                    },
                    renderPopout: e => {
                        let t = h.default.getChannel(u),
                            r = g.default.getGuild(P),
                            o = T.default.getMembers(r.id),
                            s = null == n ? r.roles[r.id] : r.roles[n],
                            m = i(o).filter(e => {
                                if ("@everyone" === p || e.roles.includes(n)) {
                                    let t = x.default.getUser(e.userId);
                                    return null != t
                                }
                                return !1
                            }).sortBy(e => {
                                var t;
                                let l = x.default.getUser(e.userId);
                                return (null != l ? null !== (t = e.nick) && void 0 !== t ? t : l.username : "").toLocaleLowerCase()
                            }).map(e => {
                                let n = x.default.getUser(e.userId);
                                return (0, a.jsx)(d.Popout, {
                                    preload: () => (0, S.default)(n.id, n.getAvatarURL(t.guild_id, 80), {
                                        guildId: t.guild_id,
                                        channelId: t.id
                                    }),
                                    renderPopout: l => (0, a.jsx)(E.default, {
                                        ...l,
                                        userId: e.userId,
                                        guildId: r.id,
                                        channelId: t.id
                                    }),
                                    spacing: 14,
                                    children: (u, i) => {
                                        let {
                                            isShown: o
                                        } = i;
                                        return (0, a.jsx)(f.default, {
                                            selected: o,
                                            colorString: e.colorString,
                                            colorRoleName: s.name,
                                            user: n,
                                            isOwner: e.userId === r.ownerId,
                                            nick: e.nick,
                                            premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                            channel: t,
                                            guildId: r.id,
                                            onContextMenu: e => {
                                                (0, c.openContextMenuLazy)(e, async () => {
                                                    let {
                                                        default: e
                                                    } = await l.el("834247").then(l.bind(l, "834247"));
                                                    return l => (0, a.jsx)(e, {
                                                        ...l,
                                                        user: n,
                                                        guildId: r.id,
                                                        channel: t,
                                                        showMediaItems: !0
                                                    })
                                                })
                                            },
                                            ...u
                                        }, e.userId)
                                    }
                                }, n.id)
                            }).value();
                        return (0, a.jsx)(v.default, {
                            className: C.rolePopout,
                            ...e,
                            children: (0, a.jsxs)(d.Scroller, {
                                className: C.roleScroller,
                                children: [(0, a.jsx)(N.default, {
                                    className: C.roleHeader,
                                    "aria-label": j.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                                        title: s.name,
                                        count: m.length
                                    }),
                                    children: (0, a.jsxs)("span", {
                                        "aria-hidden": !0,
                                        children: [s.name, " — ", m.length]
                                    })
                                }), m]
                            })
                        })
                    },
                    position: "right",
                    children: U
                })
            }
        },
        470648: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("627445"),
                r = l.n(n),
                u = l("394846"),
                i = l("446674"),
                o = l("77078"),
                s = l("272030"),
                d = l("980215"),
                c = l("506885"),
                f = l("981601"),
                m = l("42203"),
                p = l("26989"),
                I = l("305961"),
                S = l("27618"),
                E = l("697218"),
                h = l("666897"),
                T = l("387111"),
                g = l("158998"),
                x = l("680894");

            function v(e) {
                let {
                    className: t,
                    userId: n,
                    channelId: v,
                    inlinePreview: _ = !1
                } = e, N = (0, i.useStateFromStores)([E.default], () => E.default.getUser(n)), j = (0, i.useStateFromStores)([m.default], () => m.default.getChannel(v)), R = null != j ? j.getGuildId() : null, C = _ || null == N || null == R || null == v ? void 0 : e => {
                    null != j && (0, s.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("834247").then(l.bind(l, "834247"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            user: N,
                            channel: j,
                            guildId: R
                        })
                    })
                }, M = g.default.useName(N), P = (0, i.useStateFromStores)([m.default, p.default, S.default], () => T.default.getNickname(R, v, N)), A = I.default.getGuild(R), L = (0, d.useClydeEnabled)(A, j), y = L && n === x.CLYDE_AI_USER_ID ? x.CLYDE_AI_MENTION_COLOR : null, F = e => (0, a.jsx)(h.default, {
                    className: t,
                    onContextMenu: C,
                    color: y,
                    ...e,
                    children: "@".concat(null != P ? P : M)
                });
                return _ ? F() : (0, a.jsx)(o.Popout, {
                    preload: null == N ? void 0 : () => (0, c.default)(N.id, N.getAvatarURL(R, 80), {
                        guildId: null != R ? R : void 0,
                        channelId: null != v ? v : void 0
                    }),
                    renderPopout: e => (r(null != N, "Unexpected missing user"), (0, a.jsx)(f.default, {
                        userId: N.id,
                        guildId: null != R ? R : void 0,
                        channelId: v,
                        ...e
                    })),
                    position: u.isMobile ? "top" : "right",
                    children: e => F(e)
                })
            }
        },
        357021: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("446674"),
                u = l("471671"),
                i = l("232268"),
                o = l("759432"),
                s = l("798592");

            function d(e) {
                let {
                    confettiSpawnRef: t,
                    shouldFire: l
                } = e, a = (0, r.useStateFromStores)([u.default], () => u.default.isFocused()), i = (0, s.default)(), d = (0, o.default)(t);
                return n.useEffect(() => {
                    a && l && null != d && i.fire(d.x, d.y)
                }, [i, a, d, l]), null
            }

            function c(e) {
                return (0, a.jsx)(i.default, {
                    confettiLocation: e.confettiLocation,
                    children: (0, a.jsx)(d, {
                        ...e
                    })
                })
            }
        },
        759432: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("884691");

            function n(e) {
                let t = null == e ? void 0 : e.getBoundingClientRect(),
                    l = null == t ? void 0 : t.left,
                    n = null == t ? void 0 : t.top,
                    r = (0, a.useMemo)(() => null != l && null != n ? {
                        x: l,
                        y: n
                    } : null, [l, n]);
                return r
            }
        }
    }
]);