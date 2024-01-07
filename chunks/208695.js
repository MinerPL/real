            "use strict";
            a.r(t), a.d(t, {
                GuildFeedMessage: function() {
                    return P
                },
                default: function() {
                    return V
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("446674"),
                r = a("77078"),
                u = a("193865"),
                o = a("405645"),
                c = a("887446"),
                f = a("913491"),
                m = a("574073"),
                h = a("865343"),
                E = a("909917"),
                g = a("380986"),
                I = a("969706"),
                _ = a("39331"),
                x = a("115859"),
                v = a("862451"),
                S = a("611792"),
                C = a("554372"),
                N = a("256572"),
                p = a("208021"),
                T = a("582713"),
                A = a("42203"),
                j = a("780571"),
                M = a("497880"),
                D = a("93332"),
                F = a("713810"),
                L = a("185014"),
                R = a("2804"),
                b = a("603371"),
                G = a("515631"),
                y = a("49111"),
                O = a("724210"),
                H = a("894488"),
                k = a("782340"),
                U = a("923254"),
                w = a("877671");
            let B = n.memo(function(e) {
                    let {
                        message: t,
                        channel: a,
                        animateAvatar: s,
                        repliedMessage: i
                    } = e, {
                        popouts: d,
                        setPopout: r
                    } = (0, I.default)(t.id, H.DEFAULT_POPOUTS), {
                        usernameProfile: u,
                        avatarProfile: c
                    } = d, f = (0, g.useContextMenuUser)(t.author.id, a.id), h = (0, g.useClickMessageAuthorUsername)(t, a, u, r), _ = (0, g.useClickMessageAuthorAvatar)(c, r), x = n.useCallback(() => r({
                        usernameProfile: !1,
                        avatarProfile: !1,
                        referencedUsernameProfile: !1
                    }), [r]), v = (0, m.default)(t), S = (0, o.useRoleIcon)({
                        guildId: a.guild_id,
                        roleId: v.iconRoleId
                    });
                    return (0, l.jsx)(D.default, {
                        guildId: a.guild_id,
                        message: t,
                        channel: a,
                        repliedMessage: i,
                        author: v,
                        showTimestampOnHover: t.type !== y.MessageTypes.REPLY,
                        renderPopout: E.default,
                        showAvatarPopout: c,
                        showUsernamePopout: u,
                        onClickAvatar: _,
                        onClickUsername: h,
                        onPopoutRequestClose: x,
                        onContextMenu: f,
                        roleIcon: S,
                        animate: s
                    })
                }),
                P = n.forwardRef(function(e, t) {
                    var a, s;
                    let {
                        guildId: o,
                        channel: m,
                        message: E,
                        feedItemId: g,
                        className: I,
                        animateAvatar: D,
                        contentClassName: b,
                        children: H,
                        groupId: k,
                        onMessageClick: U,
                        hideHeader: P = !1,
                        forceAddReactions: V = !0,
                        ...W
                    } = e, K = n.useRef(null), z = (0, d.useStateFromStores)([A.default], () => A.default.getChannel(m.id)), Y = null != z && E.isFirstMessageInForumPost(z), Z = (0, u.useShowImprovedMarkdownUserExperimentConfig)((null !== (a = E.editedTimestamp) && void 0 !== a ? a : E.timestamp).valueOf()), X = (0, u.useShowImprovedMarkdownGuildExperimentConfig)(o, (null !== (s = E.editedTimestamp) && void 0 !== s ? s : E.timestamp).valueOf()), {
                        content: J,
                        hasSpoilerEmbeds: q
                    } = (0, _.default)(E, {
                        hideSimpleEmbedContent: !0,
                        allowList: Y || Z.showListsAndHeaders || X.showListsAndHeaders,
                        allowHeading: Y || Z.showListsAndHeaders || X.showListsAndHeaders,
                        allowLinks: Z.showMaskedLinks || X.showMaskedLinks,
                        previewLinkTarget: Z.showMaskedLinks || X.showMaskedLinks
                    }), Q = E.type === y.MessageTypes.REPLY ? E.messageReference : void 0, $ = (0, d.useStateFromStores)([N.default], () => N.default.getMessageByReference(Q)), ee = (0, d.useStateFromStores)([A.default], () => E.hasFlag(y.MessageFlags.HAS_THREAD) && A.default.getChannel(E.id)), et = (0, h.getMessageAriaLabelledBy)(E, k, {
                        hasTimestamp: E.id === k
                    }), ea = (0, h.getMessageAriaDescribedBy)(E), el = null != Q ? (0, l.jsx)(r.Clickable, {
                        onClick: e => {
                            null != $.message && (e.stopPropagation(), (0, F.trackFeedItemInteracted)({
                                feed_item_type: (0, R.getFeedItemTypeFromId)(g),
                                feed_item_id: g,
                                load_id: L.default.getLoadId(o),
                                action_type: G.FeedItemInteractionType.REFERENCED_MESSAGE_CLICKED,
                                guild_id: o,
                                channel_id: m.id,
                                message_id: E.id,
                                home_session_id: c.default.getHomeSessionId(o)
                            }), p.default.openChannelAsSidebar({
                                guildId: m.guild_id,
                                channelId: m.id,
                                baseChannelId: O.StaticChannelRoute.GUILD_HOME,
                                details: {
                                    type: T.SidebarOpenDetailsType.HOME,
                                    initialMessageId: $.message.id
                                }
                            }))
                        },
                        children: (0, C.default)(E, m, Q, $, !1)
                    }) : null, en = (0, f.default)(E), es = n.useCallback(e => {
                        U(e, K.current, E)
                    }, [U, E]);
                    return (0, l.jsx)(j.default, {
                        messageRef: K,
                        className: i(I, {
                            [w.mentioned]: E.mentioned && !(0, f.default)(E)
                        }),
                        onClick: es,
                        childrenRepliedMessage: el,
                        childrenExecutedCommand: (0, S.default)(E, m, !1),
                        childrenHeader: en || P ? null : (0, l.jsx)(B, {
                            channel: m,
                            message: E,
                            animateAvatar: D,
                            repliedMessage: $
                        }),
                        childrenAccessories: (0, x.default)({
                            channelMessageProps: e,
                            hasSpoilerEmbeds: q,
                            isInteracting: !1,
                            forceAddReactions: V
                        }),
                        childrenMessageContent: (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(M.default, {
                                className: b,
                                message: E,
                                content: J,
                                contentRef: t
                            }), H]
                        }),
                        childrenSystemMessage: (0, v.default)(e),
                        hasThread: null != ee && E.hasFlag(y.MessageFlags.HAS_THREAD),
                        hasReply: E.type === y.MessageTypes.REPLY,
                        isSystemMessage: en,
                        "aria-labelledby": et,
                        "aria-describedby": ea,
                        ...W
                    })
                });
            var V = n.memo(function(e) {
                let {
                    message: t,
                    guildId: a,
                    feedItemId: s,
                    disableTruncation: d
                } = e, u = t.attachments.length > 0, [o, c] = n.useState(!1), [f, m] = (0, b.default)(a, s);
                return (0, l.jsx)(P, {
                    ref: e => {
                        null != e && !d && c(e.scrollHeight > e.clientHeight)
                    },
                    contentClassName: i({
                        [U.clampLarge]: !d && !f && !u,
                        [U.clampSmall]: !d && !f && u
                    }),
                    ...e,
                    children: o && !f ? (0, l.jsx)(r.Clickable, {
                        className: U.showMore,
                        onClick: e => m(e, t),
                        "aria-hidden": !0,
                        children: k.default.Messages.GUILD_FEED_TRUNCATED_MESSAGE_SEE_MORE
                    }) : null
                })
            })