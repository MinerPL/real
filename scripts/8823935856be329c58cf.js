(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56946"], {
        809764: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6d5235992c9995ab87e8.svg"
        },
        929887: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b024d0fd63aa42ba8670.png"
        },
        321905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldShowNitroBadge: function() {
                    return r
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_social_proofing_message_nitro_badge",
                label: "Social Proofing Message Nitro Badge",
                defaultConfig: {
                    enabled: !1,
                    hideNitroBadgeWhenRoleBadgePresent: !1
                },
                treatments: [{
                    id: 1,
                    label: "Prefer BOTH nitro badge AND role icon(s)",
                    config: {
                        enabled: !0,
                        hideNitroBadgeWhenRoleBadgePresent: !1
                    }
                }, {
                    id: 2,
                    label: "Prefer role icon(s) over nitro badge if both are present",
                    config: {
                        enabled: !0,
                        hideNitroBadgeWhenRoleBadgePresent: !0
                    }
                }]
            });

            function r(e, t) {
                let n = i.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: !1
                });
                return n.enabled && (!n.hideNitroBadgeWhenRoleBadgePresent || n.hideNitroBadgeWhenRoleBadgePresent && !e)
            }
        },
        25116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("49111");

            function i(e) {
                return e.type === a.MessageTypes.DEFAULT && null != e.messageReference
            }
        },
        500858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("568734"),
                i = n("49111"),
                r = e => null != e && null != e.attachments && !(e.attachments.length < 1) && e.attachments.some(e => null != e.flags && (0, a.hasFlag)(e.flags, i.MessageAttachmentFlags.IS_REMIX))
        },
        95045: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                renderAutomodMessageMarkup: function() {
                    return u
                }
            }), n("355025");
            var a = n("367376"),
                i = n("240873"),
                r = n("49111");
            let s = new Set([r.MessageEmbedTypes.IMAGE, r.MessageEmbedTypes.GIFV]),
                l = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? a.default.parseInlineReply : a.default.parse;
                return function(e, t, n) {
                    var a, r;
                    let {
                        toAST: o = !1,
                        hideSimpleEmbedContent: u = !0,
                        formatInline: m = !1,
                        postProcessor: f
                    } = n, g = !1;
                    let p = e(t.content, !0, (a = t, r = n, {
                        allowLinks: null != a.webhookId || !!r.allowLinks,
                        allowEmojiLinks: null != a.webhookId,
                        channelId: a.channel_id,
                        messageId: a.id,
                        mentionChannels: a.mentionChannels,
                        isInteracting: !!r.isInteracting,
                        formatInline: !!r.formatInline,
                        noStyleAndInteraction: !!r.noStyleAndInteraction,
                        allowHeading: !!r.allowHeading,
                        allowList: !!r.allowList,
                        previewLinkTarget: !!r.previewLinkTarget,
                        disableAnimatedEmoji: !!r.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, n) => (!Array.isArray(e) && (e = [e]), u && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let n = e[0],
                            a = t[0];
                        return "link" === n.type && s.has(a.type) && (0, i.isEmbedInline)(a) ? [] : e
                    }(e, t.embeds)), !m && (e = function(e, t) {
                        return t ? c(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = c(e[0].content)), e)
                    }(e, n)), g = function(e, t) {
                        return t ? d(e) : "paragraph" === e[0].type && e[0].content instanceof Array && d(e[0].content)
                    }(e, n), m && (e = function e(t) {
                        return t.forEach(t => {
                            l.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != f && (e = f(e, n)), e));
                    return {
                        hasSpoilerEmbeds: g,
                        content: p
                    }
                }(n, e, t)
            }

            function u(e, t, n) {
                var i;
                return i = a.default.parseAutoModerationSystemMessage, i(e, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: t,
                    disableAnimatedEmoji: !1,
                    channelId: n,
                    muted: !1
                }, e => (!Array.isArray(e) && (e = [e]), e))
            }

            function c(e) {
                let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
                if (t) return e;
                let n = 0;
                return (e.forEach(e => {
                    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (n += 1), n > 30) return !1
                }), n > 30) ? e : (e.forEach(e => {
                    e.jumboable = !0
                }), e)
            }

            function d(e) {
                return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type))
            }
        },
        865343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMessageContentId: function() {
                    return s
                },
                getMessageReplyId: function() {
                    return l
                },
                getMessageUsernameId: function() {
                    return o
                },
                getMessageTimestampId: function() {
                    return u
                },
                getMessageReactionsId: function() {
                    return c
                },
                getMessageAccessoriesId: function() {
                    return d
                },
                getMessageAriaLabelledBy: function() {
                    return m
                },
                getMessageAriaDescribedBy: function() {
                    return f
                }
            });
            var a = n("862013"),
                i = n("913491"),
                r = n("49111");

            function s(e) {
                return "message-content-".concat(e.id)
            }

            function l(e) {
                return "message-reply-context-".concat(e.id)
            }

            function o(e, t) {
                let n = null != t ? t : e.id;
                return "message-username-".concat(n)
            }

            function u(e) {
                return "message-timestamp-".concat(e.id)
            }

            function c(e) {
                return "message-reactions-".concat(e.id)
            }

            function d(e) {
                return "message-accessories-".concat(e.id)
            }

            function m(e, t, n) {
                let c = e.type === r.MessageTypes.REPLY && null != e.messageReference,
                    m = e.embeds.length > 0,
                    f = e.attachments.length > 0,
                    g = e.stickerItems.length > 0,
                    p = e.codedLinks.length > 0,
                    E = e.hasFlag(r.MessageFlags.HAS_THREAD),
                    S = m || f || g || p || E || e.type === r.MessageTypes.THREAD_CREATED,
                    A = m && e.content === e.embeds[0].url && e.embeds[0].type === r.MessageEmbedTypes.GIFV,
                    h = e.type !== r.MessageTypes.DEFAULT || !A && "" !== e.content,
                    T = (0, i.default)(e),
                    I = !T && (null == n ? void 0 : n.hasTimestamp) !== !1,
                    M = o(e, t),
                    y = l(e),
                    _ = T ? "" : "".concat(c ? y : M, " ").concat(a.MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID);
                if (h) {
                    let t = s(e);
                    _ += " ".concat(t)
                }
                if (S) {
                    let t = d(e);
                    _ += " ".concat(t)
                }
                if (I) {
                    let t = u(e);
                    _ += " ".concat(a.MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID, " ").concat(t)
                }
                return _.trim()
            }

            function f(e) {
                if (0 === e.reactions.length) return;
                let t = c(e);
                return "".concat(a.MESSAGE_REACTIONS_LABEL_SEGMENT_ID, " ").concat(t)
            }
        },
        38600: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("741566");
            let i = {
                    LATIN12: a.latin12CompactTimeStamp,
                    LATIN24: a.latin24CompactTimeStamp,
                    ASIAN: a.asianCompactTimeStamp
                },
                r = /(AM|PM)$/;

            function s(e) {
                return null != e.match(r) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN
            }
        },
        730541: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isPublicSystemMessage: function() {
                    return u
                },
                getPublicSystemMessageAvatar: function() {
                    return c
                },
                trackEnableCommunityFlow: function() {
                    return d
                }
            });
            var a = n("716241"),
                i = n("25116"),
                r = n("599110"),
                s = n("69741"),
                l = n("49111"),
                o = n("929887");

            function u(e) {
                return (0, i.default)(e) && e.messageReference.guild_id === s.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === s.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
            }

            function c() {
                return o
            }
            let d = e => {
                r.default.track(l.AnalyticEvents.USER_FLOW_TRANSITION, {
                    flow_type: s.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
                    from_step: e.fromStep,
                    to_step: e.toStep,
                    ...(0, a.collectGuildAnalyticsMetadata)(e.guildId)
                })
            }
        },
        238956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanSeeRemixBadge: function() {
                    return r
                },
                useIsRemixANitroPerk: function() {
                    return s
                }
            }), n("685665");
            var a = n("862205");
            let i = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_remix_ga",
                label: "Remix General Available",
                defaultConfig: {
                    canSeeRemixBadge: !1,
                    canRemix: !1,
                    isNitroPerk: !1
                },
                treatments: [{
                    id: 1,
                    label: "Remix for Nitro Subscribers",
                    config: {
                        canSeeRemixBadge: !0,
                        canRemix: !0,
                        isNitroPerk: !0
                    }
                }, {
                    id: 3,
                    label: "Upsell Remix for Non-Nitro Users",
                    config: {
                        canSeeRemixBadge: !0,
                        canRemix: !1,
                        isNitroPerk: !0
                    }
                }, {
                    id: 5,
                    label: "Remix GA for everyone",
                    config: {
                        canSeeRemixBadge: !0,
                        canRemix: !0,
                        isNitroPerk: !1
                    }
                }]
            });

            function r() {
                return i.useExperiment({
                    location: "canSeeRemixBadge"
                }, {
                    autoTrackExposure: !0
                }).canSeeRemixBadge
            }

            function s() {
                return !!i.useExperiment({
                    location: "isRemixANitroPerkHook"
                }, {
                    autoTrackExposure: !0
                }).isNitroPerk
            }
        },
        497880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getContent: function() {
                    return E
                },
                memoizeMessageProps: function() {
                    return S
                },
                default: function() {
                    return A
                }
            });
            var a = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                l = n("717837"),
                o = n.n(l),
                u = n("233736"),
                c = n("865343"),
                d = n("587904"),
                m = n("49111"),
                f = n("782340"),
                g = n("632215"),
                p = n("741566");

            function E(e, t) {
                let {
                    asPartialPreview: n = !1
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (e.isPoll() && n) {
                    var a, i, r;
                    return null !== (r = null === (i = e.poll) || void 0 === i ? void 0 : null === (a = i.question) || void 0 === a ? void 0 : a.text) && void 0 !== r ? r : ""
                }
                return e.isPoll() ? "" : e.hasFlag(m.MessageFlags.SOURCE_MESSAGE_DELETED) ? f.default.Messages.SOURCE_MESSAGE_DELETED : t
            }

            function S(e, t) {
                var n, a;
                let {
                    message: i
                } = t, {
                    message: r
                } = e;
                return (0, u.default)(e, t, ["message"]) && i.content === r.content && i.state === r.state && (null === (n = i.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (a = r.editedTimestamp) || void 0 === a ? void 0 : a.toString())
            }
            var A = i.memo(function(e) {
                var t;
                let {
                    className: n,
                    message: r,
                    children: l,
                    content: u,
                    onUpdate: S,
                    contentRef: A,
                    asPartialPreview: h
                } = e, T = r.isEdited(), I = r.state === m.MessageStates.SEND_FAILED, M = r.state === m.MessageStates.SENDING, y = r.isCommandType(), _ = null === (t = r.editedTimestamp) || void 0 === t ? void 0 : t.toString(), b = i.useRef(!1);
                return i.useLayoutEffect(() => {
                    b.current ? null != S && S() : b.current = !0
                }, [S, r.content, u, _, l]), (0, a.jsxs)("div", {
                    id: (0, c.getMessageContentId)(r),
                    ref: A,
                    className: s(n, g.markup, {
                        [p.messageContent]: !0,
                        [p.isSending]: M && !y,
                        [p.markupRtl]: "rtl" === o(r.content),
                        [p.isFailed]: I
                    }),
                    children: [null != l ? l : E(r, u, {
                        asPartialPreview: h
                    }), T && null != r.editedTimestamp && (0, a.jsxs)(a.Fragment, {
                        children: [" ", (0, a.jsx)(d.default, {
                            timestamp: r.editedTimestamp,
                            isEdited: !0,
                            isInline: !1,
                            children: (0, a.jsxs)("span", {
                                className: p.edited,
                                children: ["(", f.default.Messages.MESSAGE_EDITED, ")"]
                            })
                        })]
                    })]
                })
            }, S)
        },
        587904: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("77078"),
                l = n("38600"),
                o = n("888400"),
                u = n("782340"),
                c = n("741566"),
                d = function(e) {
                    let {
                        children: t,
                        className: n,
                        compact: i = !1,
                        timestamp: d,
                        isVisibleOnlyOnHover: m = !1,
                        cozyAlt: f = !1,
                        isInline: g = !0,
                        id: p,
                        isEdited: E = !1
                    } = e, S = (0, o.accessibilityLabelCalendarFormat)(d), A = i ? (0, o.dateFormat)(d, "LT") : (0, o.calendarFormat)(d), h = i ? (0, l.default)(A) : null, T = E ? u.default.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
                        timeFormatted: S
                    }) : S;
                    return (0, a.jsx)("span", {
                        className: r(n, h, {
                            [c.timestamp]: !0,
                            [c.timestampVisibleOnHover]: m,
                            [c.timestampInline]: g,
                            [c.alt]: f
                        }),
                        children: (0, a.jsx)(s.Tooltip, {
                            text: (0, o.dateFormat)(d, "LLLL"),
                            "aria-label": T,
                            tooltipClassName: c.timestampTooltip,
                            delay: 750,
                            children: e => (0, a.jsx)("time", {
                                ...e,
                                id: p,
                                dateTime: d.toISOString(),
                                children: null != t ? t : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("i", {
                                        className: c.separator,
                                        "aria-hidden": !0,
                                        children: i ? "[" : " — "
                                    }), A, i && (0, a.jsxs)("i", {
                                        className: c.separator,
                                        "aria-hidden": !0,
                                        children: ["]", " "]
                                    })]
                                })
                            })
                        })
                    })
                }
        },
        473374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderSystemTag: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("25116"),
                r = n("730541"),
                s = n("79798"),
                l = n("680894"),
                o = n("741566");

            function u(e) {
                let t, {
                    message: n,
                    channel: u,
                    user: c,
                    compact: d,
                    isRepliedMessage: m,
                    hideIcon: f = !1,
                    children: g
                } = e;
                return ((null == n ? void 0 : n.isSystemDM()) ? t = s.default.Types.SYSTEM_DM : null != n && (0, i.default)(n) ? t = (0, r.isPublicSystemMessage)(n) ? s.default.Types.OFFICIAL : s.default.Types.SERVER : (null == c ? void 0 : c.id) === l.CLYDE_AI_USER_ID ? t = s.default.Types.AI : (null == c ? void 0 : c.bot) ? t = s.default.Types.BOT : null != u && u.isForumPost() && u.ownerId === (null == c ? void 0 : c.id) && !m && (t = s.default.Types.ORIGINAL_POSTER), null == t) ? null : (0, a.jsx)(s.default, {
                    className: d ? o.botTagCompact : o.botTagCozy,
                    type: t,
                    verified: null == c ? void 0 : c.isVerifiedBot(),
                    hideIcon: f,
                    useRemSizes: !0,
                    children: g
                })
            }
        },
        195483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UsernameDecorationTypes: function() {
                    return i
                },
                default: function() {
                    return x
                }
            });
            var a, i, r = n("37983"),
                s = n("884691"),
                l = n("414456"),
                o = n.n(l),
                u = n("394846"),
                c = n("446674"),
                d = n("77078"),
                m = n("206230"),
                f = n("390236"),
                g = n("321905"),
                p = n("500858"),
                E = n("626301"),
                S = n("238956"),
                A = n("506885"),
                h = n("697218"),
                T = n("79798"),
                I = n("315102"),
                M = n("719923"),
                y = n("782340"),
                _ = n("741566"),
                b = n("809764");

            function N(e) {
                let {
                    compact: t
                } = e;
                return (0, r.jsx)(T.default, {
                    className: t ? _.botTagCompact : _.botTagCozy,
                    type: T.default.Types.REMIX,
                    useRemSizes: !0
                })
            }(a = i || (i = {}))[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES";
            let R = e => {
                !e && (0, E.navigateToPremiumMarketingPage)()
            };

            function v(e) {
                let {
                    currentUserIsPremium: t,
                    isRepliedMessage: n
                } = e;
                return (0, r.jsx)(d.Tooltip, {
                    text: y.default.Messages.MESSAGE_AUTHOR_NITRO_BADGE,
                    children: e => (0, r.jsx)(d.Clickable, {
                        className: _.nitroAuthorBadgeContainer,
                        onClick: () => R(t),
                        "aria-label": y.default.Messages.MESSAGE_AUTHOR_NITRO_BADGE,
                        children: (0, r.jsx)("img", {
                            alt: "",
                            className: o(_.nitroBadgeSvg, {
                                [_.nitroBadgeSvgRepliedMessage]: n
                            }),
                            src: b,
                            ...e
                        })
                    })
                })
            }

            function x(e) {
                let t, {
                        author: n,
                        message: a,
                        userOverride: l,
                        compact: E = !1,
                        withMentionPrefix: T = !1,
                        showPopout: y = !1,
                        roleIcon: b,
                        className: R,
                        onClick: x,
                        onContextMenu: L,
                        onPopoutRequestClose: C,
                        renderPopout: k,
                        renderRemixTag: B = !1,
                        decorations: D,
                        isRepliedMessage: P = !1
                    } = e,
                    j = s.useContext(f.default),
                    {
                        nick: G,
                        colorString: w,
                        colorRoleName: F
                    } = n,
                    U = null != a.messageReference && null != a.webhookId,
                    O = (0, c.useStateFromStores)([m.default], () => m.default.roleStyle),
                    H = (0, S.useCanSeeRemixBadge)(),
                    W = (0, c.useStateFromStores)([h.default], () => h.default.getCurrentUser()),
                    Y = {
                        className: _.username,
                        style: "username" === O && null != w ? {
                            color: w
                        } : void 0,
                        onClick: x,
                        onContextMenu: L,
                        children: (T ? "@" : "") + G
                    };
                t = null != k && null != y ? (0, r.jsx)(d.Popout, {
                    preload: U ? void 0 : function() {
                        let e = null != l ? l : a.author;
                        return (0, A.default)(e.id, null != n.guildMemberAvatar && null != j ? (0, I.getGuildMemberAvatarURLSimple)({
                            guildId: j,
                            userId: e.id,
                            avatar: n.guildMemberAvatar,
                            size: 80
                        }) : e.getAvatarURL(j, 80), {
                            guildId: j,
                            channelId: a.channel_id
                        })
                    },
                    renderPopout: k,
                    shouldShow: y,
                    position: u.isMobile ? "window_center" : "right",
                    onRequestClose: C,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, r.jsx)(d.Clickable, {
                            tag: "span",
                            ...n,
                            ...Y,
                            className: o(Y.className, _.clickable, R)
                        })
                    }
                }) : (0, r.jsx)(d.Clickable, {
                    ...Y,
                    className: o(Y.className, R)
                });
                let z = null != D ? D[i.SYSTEM_TAG] : null,
                    V = null != D ? D[i.BADGES] : null,
                    K = M.default.isPremium(a.author),
                    q = M.default.isPremium(W);
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != z && E ? (0, r.jsxs)(r.Fragment, {
                        children: [" ", z, " "]
                    }) : null, "dot" === O ? (0, r.jsx)(d.RoleDot, {
                        color: w,
                        name: F,
                        className: _.roleDot
                    }) : null, t, (0, g.shouldShowNitroBadge)(null != b, "Message Username") && K ? (0, r.jsx)(v, {
                        currentUserIsPremium: q,
                        isRepliedMessage: P
                    }) : null, null != V ? (0, r.jsx)(r.Fragment, {
                        children: V
                    }) : null, null == z || E ? null : z, null != a && (0, p.default)(a) && H && B ? (0, r.jsx)(N, {}) : null]
                })
            }
        }
    }
]);