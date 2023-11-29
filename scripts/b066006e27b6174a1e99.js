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
                    return L
                },
                default: function() {
                    return A
                }
            }), l("222007");
            var a = l("37983"),
                r = l("884691"),
                n = l("414456"),
                s = l.n(n),
                i = l("769846"),
                u = l("77078"),
                o = l("502651"),
                d = l("390886"),
                c = l("357021"),
                f = l("106435"),
                m = l("79798"),
                p = l("982475"),
                h = l("928201"),
                v = l("118503"),
                x = l("11056"),
                I = l("159885"),
                S = l("158998"),
                g = l("943722"),
                E = l("49111"),
                j = l("988268"),
                N = l("39141"),
                T = l("782340"),
                C = l("282730");
            let L = (0, I.cssValueToNumber)(i.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
            var A = function(e) {
                let {
                    selected: t = !1,
                    colorString: l,
                    colorRoleName: n,
                    isOwner: i,
                    ownerTooltipText: I,
                    lostPermissionTooltipText: L,
                    isTyping: A = !1,
                    nick: _,
                    user: M,
                    currentUser: R,
                    activities: P,
                    applicationStream: y,
                    status: b,
                    shouldAnimateStatus: F = !1,
                    isMobile: U,
                    premiumSince: w,
                    channel: k,
                    guildId: O,
                    className: D,
                    onMouseDown: B,
                    onKeyDown: G,
                    onClick: z,
                    onContextMenu: V,
                    onClickPremiumGuildIcon: H,
                    onFocus: Z,
                    "aria-controls": W,
                    "aria-expanded": Y,
                    "aria-posinset": q,
                    "aria-setsize": J,
                    id: K,
                    tabIndex: X,
                    itemProps: Q
                } = e, $ = S.default.useName(M), [ee, et] = r.useState(!1), [el, ea] = r.useState(null), {
                    avatarDecorationSrc: er,
                    avatarSrc: en,
                    eventHandlers: es
                } = (0, f.default)({
                    user: M,
                    size: u.AvatarSizes.SIZE_32,
                    animateOnHover: !(t || ee),
                    guildId: O
                }), ei = e => {
                    ea(e)
                }, eu = () => null != i && i && null == L ? (0, a.jsx)(u.Tooltip, {
                    text: null != I ? I : T.default.Messages.GUILD_OWNER,
                    children: e => (0, a.jsx)(h.default, {
                        ...e,
                        className: C.ownerIcon
                    })
                }) : null, eo = () => null == w ? null : (0, a.jsx)(u.Tooltip, {
                    text: T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                        date: w
                    }),
                    children: e => (0, a.jsx)(u.Clickable, {
                        onClick: H,
                        tabIndex: -1,
                        children: (0, a.jsx)(v.default, {
                            ...e,
                            className: C.premiumIcon
                        })
                    })
                }), ed = () => {
                    let e = (null == M ? void 0 : M.isClyde()) ? j.BotTagTypes.AI : j.BotTagTypes.BOT;
                    return null != M && M.bot ? (0, a.jsx)(m.default, {
                        className: C.botTag,
                        type: e,
                        verified: M.isVerifiedBot()
                    }) : null
                }, ec = () => (0, a.jsx)(u.NameWithRole, {
                    roleName: n,
                    color: null != l ? l : void 0,
                    name: null != _ ? _ : $
                }), ef = b === E.StatusTypes.OFFLINE;
                return null == M ? (0, a.jsx)(p.default, {
                    avatarSize: u.AvatarSizes.SIZE_32,
                    className: C.placeholder
                }) : (0, a.jsx)(x.default, {
                    selected: t,
                    className: s(C.member, D, {
                        [C.offline]: ef && !t
                    }),
                    innerClassName: C.memberInner,
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
                    name: null == L ? (0, a.jsx)("span", {
                        className: C.username,
                        children: ec()
                    }) : (0, a.jsx)(u.Tooltip, {
                        text: L,
                        children: e => (0, a.jsx)("span", {
                            ...e,
                            className: s(C.username, C.lostPermission),
                            children: ec()
                        })
                    }),
                    avatar: ((e, t) => {
                        let l = F ? u.AnimatedAvatar : u.Avatar,
                            r = (0, o.default)(P) ? E.StatusTypes.STREAMING : b;
                        return r = t ? void 0 : r, (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(l, {
                                ...es,
                                size: u.AvatarSizes.SIZE_32,
                                src: en,
                                isMobile: U,
                                isTyping: A,
                                status: r,
                                "aria-label": e.username,
                                statusTooltip: !0,
                                avatarDecoration: er,
                                typingIndicatorRef: ei
                            }), (0, a.jsx)(c.default, {
                                confettiSpawnRef: el,
                                shouldFire: A && null != R && e.id !== R.id,
                                confettiLocation: N.ConfettiLocation.MEMBER_USER
                            })]
                        })
                    })(M, ef),
                    subText: (() => {
                        let e = null != P ? P.find(e => e.type === E.ActivityTypes.CUSTOM_STATUS) : null,
                            t = null != e && null != M && (0, d.default)(e, M, k);
                        return (0, a.jsx)(g.default, {
                            className: C.activity,
                            textClassName: C.activityText,
                            emojiClassName: C.activityEmoji,
                            activities: P,
                            applicationStream: y,
                            animate: ee,
                            hideEmoji: !t,
                            hideTooltip: !0,
                            user: M
                        })
                    })(),
                    decorators: (0, a.jsxs)(a.Fragment, {
                        children: [ed(), eu(), eo()]
                    }),
                    "aria-controls": W,
                    "aria-expanded": Y,
                    "aria-setsize": J,
                    "aria-posinset": q,
                    id: K,
                    tabIndex: X,
                    onFocus: Z,
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
        698644: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CrownIcon: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var r = l("669491"),
                n = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, n.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M5 18a1 1 0 0 0-1 1 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 1 1 0 0 0-1-1H5ZM3.035 7.764C2.24 7.21 1.2 8 1.52 8.914l2.246 6.416a1 1 0 0 0 .944.67h14.546a1 1 0 0 0 .958-.713l1.934-6.447c.275-.917-.772-1.66-1.546-1.096l-4.112 2.99-3.553-5.328.82-.82a.828.828 0 0 0 0-1.172l-1.171-1.171a.828.828 0 0 0-1.172 0l-1.171 1.171a.828.828 0 0 0 0 1.172l.82.82-3.617 5.426-4.41-3.068Z",
                        className: i
                    })
                })
            }
        },
        390886: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("385976"),
                r = l("233069"),
                n = l("402671"),
                s = l("991170"),
                i = l("49111");

            function u(e, t, l) {
                if (e.type !== i.ActivityTypes.CUSTOM_STATUS || null == e.emoji) return !1;
                let u = e.emoji;
                if (null == u.id || null == l || !(0, r.isGuildTextChannelType)(l.type)) return !0;
                let o = a.default.getUsableCustomEmojiById(u.id),
                    d = n.default.isInternalEmojiForGuildId(o, l.getGuildId()),
                    c = s.default.can({
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
                    return N
                }
            }), l("222007");
            var a = l("917351"),
                r = l.n(a),
                n = l("176309"),
                s = l("52140"),
                i = l("888198"),
                u = l("788554");
            let o = null;

            function d(e, t) {
                let l = {};
                return null != e.mention && null != o && (l = {
                    mention: o
                }), (0, u.default)([e, ...t, l])
            }
            o = l("236180").default;
            let c = {
                    enableBuildOverrides: !1,
                    enableEmojiClick: !0
                },
                f = d(i.default.RULES, [(0, s.default)({
                    enableBuildOverrides: !0
                })]),
                m = r.omit(d(i.default.RULES, [(0, s.default)(c)]), "paragraph", "newline"),
                p = d(i.default.CHANNEL_TOPIC_RULES, [(0, s.default)({
                    ...c,
                    emojiTooltipPosition: "bottom"
                }), {
                    codeBlock: {
                        react: i.default.RULES.text.react
                    }
                }]),
                h = d(i.default.VOICE_CHANNEL_STATUS_RULES, [(0, s.default)({
                    ...c,
                    enableEmojiClick: !1
                })]),
                v = d(i.default.EMBED_TITLE_RULES, [(0, s.default)(c)]),
                x = d(i.default.INLINE_REPLY_RULES, [(0, s.default)(c)]),
                I = d(i.default.GUILD_VERIFICATION_FORM_RULES, [(0, s.default)(c)]),
                S = d(i.default.GUILD_EVENT_RULES, [(0, s.default)(c)]),
                g = d(i.default.INLINE_REPLY_RULES, [(0, s.default)({
                    ...c,
                    emoji: {
                        height: 14,
                        width: 14,
                        lineHeight: 18
                    }
                })]),
                E = d(i.default.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.default)(c)]),
                j = r.omit(d(i.default.RULES, [(0, s.default)({
                    ...c,
                    emoji: {
                        height: 14,
                        width: 14
                    }
                })]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading");
            var N = {
                combineAndInjectMentionRule: d,
                createReactRules: s.default,
                defaultReactRuleOptions: c,
                defaultRules: f,
                guildEventRules: S,
                notifCenterV2MessagePreviewRules: j,
                astParserFor: n.astParserFor,
                reactParserFor: n.reactParserFor,
                parse: n.reactParserFor(f),
                parseTopic: n.reactParserFor(p),
                parseVoiceChannelStatus: n.reactParserFor(h),
                parseEmbedTitle: n.reactParserFor(v),
                parseInlineReply: n.reactParserFor(x),
                parseGuildVerificationFormRule: n.reactParserFor(I),
                parseGuildEventDescription: n.reactParserFor(S),
                parseAutoModerationSystemMessage: n.reactParserFor(E),
                parseForumPostGuidelines: n.reactParserFor(m),
                parseForumPostMostRecentMessage: n.reactParserFor(g),
                parseNotifCenterMessagePreview: n.reactParserFor(j),
                parseToAST: n.astParserFor(f),
                parseTopicToAST: n.astParserFor(p),
                parseEmbedTitleToAST: n.astParserFor(v),
                parseInlineReplyToAST: n.astParserFor(x),
                parseAutoModerationSystemMessageToAST: n.astParserFor(E)
            }
        },
        236180: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("37983");
            l("884691");
            var r = l("272030"),
                n = l("643306"),
                s = l("470648"),
                i = l("42203"),
                u = {
                    handleUserContextMenu(e, t, n, s) {
                        let u = i.default.getChannel(t);
                        null != u && (0, r.openContextMenuLazy)(s, async () => {
                            let {
                                default: t
                            } = await l.el("834247").then(l.bind(l, "834247"));
                            return l => (0, a.jsx)(t, {
                                ...l,
                                user: e,
                                channel: u,
                                guildId: n
                            })
                        })
                    },
                    react(e, t, l) {
                        let {
                            userId: r,
                            channelId: i
                        } = e;
                        return null == r ? (0, a.jsx)(n.default, {
                            inlinePreview: l.formatInline,
                            ...e,
                            children: t(e.content, l)
                        }, l.key) : (0, a.jsx)(s.default, {
                            className: "mention",
                            userId: r,
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
                    return M
                }
            });
            var a = l("37983");
            l("884691");
            var r = l("414456"),
                n = l.n(r),
                s = l("917351"),
                i = l.n(s),
                u = l("509043"),
                o = l("446674"),
                d = l("77078"),
                c = l("272030"),
                f = l("888503"),
                m = l("206230"),
                p = l("862205"),
                h = l("895026"),
                v = l("506885"),
                x = l("981601"),
                I = l("42203"),
                S = l("26989"),
                g = l("305961"),
                E = l("697218"),
                j = l("145131"),
                N = l("666897"),
                T = l("826684"),
                C = l("782340"),
                L = l("191213"),
                A = l("632215");
            let _ = (0, p.createExperiment)({
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

            function M(e) {
                let {
                    roleColor: t,
                    roleId: r,
                    channelId: s,
                    roleName: p,
                    guildId: M,
                    children: R,
                    inlinePreview: P = !1
                } = e, y = (0, o.useStateFromStores)([m.default], () => m.default.roleStyle), b = null != t && 0 !== t && !P, F = b && "dot" === y, U = e => (0, a.jsxs)(N.default, {
                    className: n(A.roleMention),
                    color: "username" === y && b ? t : null,
                    ...e,
                    children: [F && (0, a.jsx)(d.RoleDot, {
                        color: (0, u.int2hex)(t),
                        className: L.roleDot,
                        background: !1,
                        tooltip: !1
                    }), R]
                }), {
                    enabled: w
                } = _.getCurrentConfig({
                    location: "2ec235_1"
                }, {
                    autoTrackExposure: !1
                });
                return !w || P || null == s || null == M || null == r && "@everyone" !== p ? U() : (0, a.jsx)(d.Popout, {
                    preload: async () => {
                        null != r && await (0, h.requestMembersForRole)(M, r)
                    },
                    renderPopout: e => {
                        let t = I.default.getChannel(s),
                            n = g.default.getGuild(M),
                            u = S.default.getMembers(n.id),
                            o = null == r ? n.roles[n.id] : n.roles[r],
                            m = i(u).filter(e => {
                                if ("@everyone" === p || e.roles.includes(r)) {
                                    let t = E.default.getUser(e.userId);
                                    return null != t
                                }
                                return !1
                            }).sortBy(e => {
                                var t;
                                let l = E.default.getUser(e.userId);
                                return (null != l ? null !== (t = e.nick) && void 0 !== t ? t : l.username : "").toLocaleLowerCase()
                            }).map(e => {
                                let r = E.default.getUser(e.userId);
                                return (0, a.jsx)(d.Popout, {
                                    preload: () => (0, v.default)(r.id, r.getAvatarURL(t.guild_id, 80), {
                                        guildId: t.guild_id,
                                        channelId: t.id
                                    }),
                                    renderPopout: l => (0, a.jsx)(x.default, {
                                        ...l,
                                        userId: e.userId,
                                        guildId: n.id,
                                        channelId: t.id
                                    }),
                                    spacing: 14,
                                    children: (s, i) => {
                                        let {
                                            isShown: u
                                        } = i;
                                        return (0, a.jsx)(f.default, {
                                            selected: u,
                                            colorString: e.colorString,
                                            colorRoleName: o.name,
                                            user: r,
                                            isOwner: e.userId === n.ownerId,
                                            nick: e.nick,
                                            premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                            channel: t,
                                            guildId: n.id,
                                            onContextMenu: e => {
                                                (0, c.openContextMenuLazy)(e, async () => {
                                                    let {
                                                        default: e
                                                    } = await l.el("834247").then(l.bind(l, "834247"));
                                                    return l => (0, a.jsx)(e, {
                                                        ...l,
                                                        user: r,
                                                        guildId: n.id,
                                                        channel: t,
                                                        showMediaItems: !0
                                                    })
                                                })
                                            },
                                            ...s
                                        }, e.userId)
                                    }
                                }, r.id)
                            }).value();
                        return (0, a.jsx)(j.default, {
                            className: A.rolePopout,
                            ...e,
                            children: (0, a.jsxs)(d.Scroller, {
                                className: A.roleScroller,
                                children: [(0, a.jsx)(T.default, {
                                    className: A.roleHeader,
                                    "aria-label": C.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                                        title: o.name,
                                        count: m.length
                                    }),
                                    children: (0, a.jsxs)("span", {
                                        "aria-hidden": !0,
                                        children: [o.name, " — ", m.length]
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
                    return j
                }
            });
            var a = l("37983");
            l("884691");
            var r = l("627445"),
                n = l.n(r),
                s = l("394846"),
                i = l("446674"),
                u = l("77078"),
                o = l("272030"),
                d = l("980215"),
                c = l("506885"),
                f = l("981601"),
                m = l("42203"),
                p = l("26989"),
                h = l("305961"),
                v = l("27618"),
                x = l("697218"),
                I = l("666897"),
                S = l("387111"),
                g = l("158998"),
                E = l("680894");

            function j(e) {
                let {
                    className: t,
                    userId: r,
                    channelId: j,
                    inlinePreview: N = !1
                } = e, T = (0, i.useStateFromStores)([x.default], () => x.default.getUser(r)), C = (0, i.useStateFromStores)([m.default], () => m.default.getChannel(j)), L = null != C ? C.getGuildId() : null, A = N || null == T || null == L || null == j ? void 0 : e => {
                    null != C && (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("834247").then(l.bind(l, "834247"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            user: T,
                            channel: C,
                            guildId: L
                        })
                    })
                }, _ = g.default.useName(T), M = (0, i.useStateFromStores)([m.default, p.default, v.default], () => S.default.getNickname(L, j, T)), R = h.default.getGuild(L), P = (0, d.useClydeEnabled)(R, C), y = P && r === E.CLYDE_AI_USER_ID ? E.CLYDE_AI_MENTION_COLOR : null, b = e => (0, a.jsx)(I.default, {
                    className: t,
                    onContextMenu: A,
                    color: y,
                    ...e,
                    children: "@".concat(null != M ? M : _)
                });
                return N ? b() : (0, a.jsx)(u.Popout, {
                    preload: null == T ? void 0 : () => (0, c.default)(T.id, T.getAvatarURL(L, 80), {
                        guildId: null != L ? L : void 0,
                        channelId: null != j ? j : void 0
                    }),
                    renderPopout: e => (n(null != T, "Unexpected missing user"), (0, a.jsx)(f.default, {
                        userId: T.id,
                        guildId: null != L ? L : void 0,
                        channelId: j,
                        ...e
                    })),
                    position: s.isMobile ? "top" : "right",
                    children: e => b(e)
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
                r = l("884691"),
                n = l("446674"),
                s = l("471671"),
                i = l("232268"),
                u = l("759432"),
                o = l("798592");

            function d(e) {
                let {
                    confettiSpawnRef: t,
                    shouldFire: l
                } = e, a = (0, n.useStateFromStores)([s.default], () => s.default.isFocused()), i = (0, o.default)(), d = (0, u.default)(t);
                return r.useEffect(() => {
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
                    return r
                }
            });
            var a = l("884691");

            function r(e) {
                let t = null == e ? void 0 : e.getBoundingClientRect(),
                    l = null == t ? void 0 : t.left,
                    r = null == t ? void 0 : t.top,
                    n = (0, a.useMemo)(() => null != l && null != r ? {
                        x: l,
                        y: r
                    } : null, [l, r]);
                return n
            }
        },
        982475: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            }), l("222007");
            var a, r, n = l("37983"),
                s = l("884691"),
                i = l("414456"),
                u = l.n(i),
                o = l("77078"),
                d = l("145131"),
                c = l("618556");
            (r = a || (a = {})).SINGLE_AVATAR = "1", r.MULTIPLE_AVATAR = "2";
            let f = {
                [o.AvatarSizes.SIZE_32]: c.avatarSmall,
                [o.AvatarSizes.SIZE_40]: c.avatarLarge
            };
            class m extends s.Component {
                render() {
                    let {
                        type: e,
                        avatarSize: t,
                        className: l
                    } = this.props;
                    return "2" === e ? (0, n.jsxs)("div", {
                        className: u(c.multiplePlaceholder, l),
                        children: [(0, n.jsxs)(d.default, {
                            children: [(0, n.jsx)("div", {
                                className: u(c.placeholderAvatar, f[t], c.avatarMasked)
                            }), (0, n.jsx)("div", {
                                className: u(c.placeholderAvatar, f[t], c.avatarMasked)
                            }), (0, n.jsx)("div", {
                                className: u(c.placeholderAvatar, f[t])
                            })]
                        }), (0, n.jsx)(d.default, {
                            grow: 1,
                            className: c.mulitplePlaceholderUsername,
                            style: {
                                maxWidth: this.placeholderMaxWidth
                            }
                        })]
                    }) : (0, n.jsxs)(d.default, {
                        className: u(c.placeholder, l),
                        children: [(0, n.jsx)("div", {
                            className: u(c.placeholderAvatar, f[t])
                        }), (0, n.jsx)(d.default, {
                            grow: 1,
                            className: c.placeholderUsername,
                            style: {
                                maxWidth: this.placeholderMaxWidth
                            }
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.placeholderMaxWidth = "".concat(Math.floor(40 * Math.random()) + 40, "%")
                }
            }
            m.defaultProps = {
                type: "1"
            }, m.Types = a;
            var p = m
        },
        928201: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var r = l("469563"),
                n = l("698644"),
                s = l("75196"),
                i = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: r = "currentColor",
                        ...n
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(n),
                        width: t,
                        height: l,
                        viewBox: "0 0 16 16",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z",
                            fill: r,
                            "aria-hidden": !0
                        })
                    })
                }, n.CrownIcon, void 0, {
                    size: 24
                })
        },
        11056: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("37983"),
                r = l("884691"),
                n = l("414456"),
                s = l.n(n),
                i = l("90915"),
                u = l("77078"),
                o = l("726446");
            let d = r.forwardRef(function(e, t) {
                var l;
                let {
                    avatar: r,
                    name: n,
                    children: d,
                    subText: c,
                    decorators: f,
                    onClick: m,
                    selected: p,
                    muted: h,
                    to: v,
                    avatarClassName: x,
                    selectedClassName: I,
                    innerClassName: S,
                    wrapContent: g,
                    highlighted: E,
                    focusProps: j,
                    ...N
                } = e;
                N.className = s(N.className, o.container, {
                    [o.selected]: p,
                    [o.highlighted]: E,
                    [null != I ? I : ""]: p,
                    [o.clickable]: !p && (null != v || null != m)
                }), N["aria-selected"] = null !== (l = N["aria-selected"]) && void 0 !== l ? l : p;
                let T = (0, a.jsxs)("div", {
                    className: s(S, o.layout, {
                        [o.muted]: !p && h,
                        [o.wrappedLayout]: g
                    }),
                    children: [(0, a.jsx)("div", {
                        className: s(o.avatar, x),
                        children: r
                    }), (0, a.jsxs)("div", {
                        className: o.content,
                        children: [(0, a.jsxs)("div", {
                            className: o.nameAndDecorators,
                            children: [(0, a.jsx)("div", {
                                className: s(o.name, {
                                    [o.wrappedName]: g
                                }),
                                children: n
                            }), f]
                        }), null != c ? (0, a.jsx)("div", {
                            className: o.subText,
                            children: c
                        }) : null]
                    }), null != d ? (0, a.jsx)("div", {
                        className: o.children,
                        children: d
                    }) : null]
                });
                return null != v ? (0, a.jsx)(u.FocusRing, {
                    ...j,
                    children: (0, a.jsx)(i.Link, {
                        to: v,
                        onClick: m,
                        ...N,
                        role: "listitem",
                        ref: t,
                        children: T
                    })
                }) : null != m ? (0, a.jsx)(u.Clickable, {
                    onClick: m,
                    focusProps: j,
                    ...N,
                    role: "listitem",
                    innerRef: t,
                    children: T
                }) : (0, a.jsx)(u.FocusRing, {
                    ...j,
                    children: (0, a.jsx)("div", {
                        ...N,
                        role: "listitem",
                        ref: t,
                        children: T
                    })
                })
            });
            var c = d
        },
        826684: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("37983");
            l("884691");
            var r = l("414456"),
                n = l.n(r),
                s = l("77078"),
                i = l("75589"),
                u = e => {
                    let {
                        className: t,
                        children: l,
                        "aria-label": r,
                        id: u
                    } = e;
                    return (0, a.jsx)(s.H, {
                        className: n(t, i.container),
                        "aria-label": r,
                        id: u,
                        children: l
                    })
                }
        }
    }
]);