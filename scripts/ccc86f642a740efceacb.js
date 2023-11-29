(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["88081"], {
        929887: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b024d0fd63aa42ba8670.png"
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
            }), n("702976");
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
            }), n("222007"), n("781738"), n("355025");
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
                        return ("link" === n.type || "attachmentLink" === n.type) && s.has(a.type) && (0, i.isEmbedInline)(a) ? [] : e
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
                return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
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
                    h = m && e.content === e.embeds[0].url && e.embeds[0].type === r.MessageEmbedTypes.GIFV,
                    A = e.type !== r.MessageTypes.DEFAULT || !h && "" !== e.content,
                    y = (0, i.default)(e),
                    I = !y && (null == n ? void 0 : n.hasTimestamp) !== !1,
                    T = o(e, t),
                    M = l(e),
                    x = y ? "" : "".concat(c ? M : T, " ").concat(a.MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID);
                if (A) {
                    let t = s(e);
                    x += " ".concat(t)
                }
                if (S) {
                    let t = d(e);
                    x += " ".concat(t)
                }
                if (I) {
                    let t = u(e);
                    x += " ".concat(a.MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID, " ").concat(t)
                }
                return x.trim()
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
        119001: function(e, t, n) {
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
                l = n("956089"),
                o = n("855891"),
                u = n("782340"),
                c = n("301893");

            function d(e) {
                let {
                    isRepliedPoll: t = !1,
                    className: n
                } = e, i = t ? c.badgeReplied : c.badgeDefault;
                return (0, a.jsx)(l.TextBadge, {
                    className: r(n, i),
                    disableColor: !0,
                    text: (0, a.jsxs)("div", {
                        className: c.innerBadge,
                        children: [(0, a.jsx)(o.default, {
                            className: c.icon
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-xs/semibold",
                            color: t ? "interactive-active" : "text-normal",
                            children: u.default.Messages.POLL
                        })]
                    })
                })
            }
        },
        855891: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("75196");

            function r(e) {
                let {
                    color: t = "currentColor",
                    ...n
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, i.default)(n),
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: t,
                    children: [(0, a.jsx)("path", {
                        d: "M3.48325 0H0.727273C0.325611 0 0 0.325611 0 0.727273V15.2727C0 15.6744 0.325611 16 0.727273 16H3.48325C3.88492 16 4.21053 15.6744 4.21053 15.2727V0.727273C4.21053 0.325611 3.88492 0 3.48325 0Z"
                    }), (0, a.jsx)("path", {
                        d: "M9.37799 8H6.62201C6.22035 8 5.89474 8.32561 5.89474 8.72727V15.2727C5.89474 15.6744 6.22035 16 6.62201 16H9.37799C9.77965 16 10.1053 15.6744 10.1053 15.2727V8.72727C10.1053 8.32561 9.77965 8 9.37799 8Z"
                    }), (0, a.jsx)("path", {
                        d: "M15.2727 4.36364H12.5167C12.1151 4.36364 11.7895 4.68925 11.7895 5.09091V15.2727C11.7895 15.6744 12.1151 16 12.5167 16H15.2727C15.6744 16 16 15.6744 16 15.2727V5.09091C16 4.68925 15.6744 4.36364 15.2727 4.36364Z"
                    })]
                })
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
                    return h
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
            var h = i.memo(function(e) {
                var t;
                let {
                    className: n,
                    message: r,
                    children: l,
                    content: u,
                    onUpdate: S,
                    contentRef: h,
                    asPartialPreview: A
                } = e, y = r.isEdited(), I = r.state === m.MessageStates.SEND_FAILED, T = r.state === m.MessageStates.SENDING, M = r.isCommandType(), x = null === (t = r.editedTimestamp) || void 0 === t ? void 0 : t.toString(), v = i.useRef(!1);
                return i.useLayoutEffect(() => {
                    v.current ? null != S && S() : v.current = !0
                }, [S, r.content, u, x, l]), (0, a.jsxs)("div", {
                    id: (0, c.getMessageContentId)(r),
                    ref: h,
                    className: s(n, g.markup, {
                        [p.messageContent]: !0,
                        [p.isSending]: T && !M,
                        [p.markupRtl]: "rtl" === o(r.content),
                        [p.isFailed]: I
                    }),
                    children: [null != l ? l : E(r, u, {
                        asPartialPreview: A
                    }), y && null != r.editedTimestamp && (0, a.jsxs)(a.Fragment, {
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
                    } = e, S = (0, o.accessibilityLabelCalendarFormat)(d), h = i ? (0, o.dateFormat)(d, "LT") : (0, o.calendarFormat)(d), A = i ? (0, l.default)(h) : null, y = E ? u.default.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
                        timeFormatted: S
                    }) : S;
                    return (0, a.jsx)("span", {
                        className: r(n, A, {
                            [c.timestamp]: !0,
                            [c.timestampVisibleOnHover]: m,
                            [c.timestampInline]: g,
                            [c.alt]: f
                        }),
                        children: (0, a.jsx)(s.Tooltip, {
                            text: (0, o.dateFormat)(d, "LLLL"),
                            "aria-label": y,
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
                                    }), h, i && (0, a.jsxs)("i", {
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
                    return I
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
                g = n("500858"),
                p = n("238956"),
                E = n("506885"),
                S = n("79798"),
                h = n("315102"),
                A = n("741566");

            function y(e) {
                let {
                    compact: t
                } = e;
                return (0, r.jsx)(S.default, {
                    className: t ? A.botTagCompact : A.botTagCozy,
                    type: S.default.Types.REMIX,
                    useRemSizes: !0
                })
            }

            function I(e) {
                let t, {
                        author: n,
                        message: a,
                        userOverride: i,
                        compact: l = !1,
                        withMentionPrefix: S = !1,
                        showPopout: I = !1,
                        className: T,
                        onClick: M,
                        onContextMenu: x,
                        onPopoutRequestClose: v,
                        renderPopout: _,
                        renderRemixTag: b = !1,
                        decorations: L
                    } = e,
                    C = s.useContext(f.default),
                    {
                        nick: N,
                        colorString: R,
                        colorRoleName: k
                    } = n,
                    j = null != a.messageReference && null != a.webhookId,
                    D = (0, c.useStateFromStores)([m.default], () => m.default.roleStyle),
                    w = (0, p.useCanSeeRemixBadge)(),
                    F = {
                        className: A.username,
                        style: "username" === D && null != R ? {
                            color: R
                        } : void 0,
                        onClick: M,
                        onContextMenu: x,
                        children: (S ? "@" : "") + N
                    };
                t = null != _ && null != I ? (0, r.jsx)(d.Popout, {
                    preload: j ? void 0 : function() {
                        let e = null != i ? i : a.author;
                        return (0, E.default)(e.id, null != n.guildMemberAvatar && null != C ? (0, h.getGuildMemberAvatarURLSimple)({
                            guildId: C,
                            userId: e.id,
                            avatar: n.guildMemberAvatar,
                            size: 80
                        }) : e.getAvatarURL(C, 80), {
                            guildId: C,
                            channelId: a.channel_id
                        })
                    },
                    renderPopout: _,
                    shouldShow: I,
                    position: u.isMobile ? "window_center" : "right",
                    onRequestClose: v,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, r.jsx)(d.Clickable, {
                            tag: "span",
                            ...n,
                            ...F,
                            className: o(F.className, A.clickable, T)
                        })
                    }
                }) : (0, r.jsx)(d.Clickable, {
                    ...F,
                    className: o(F.className, T)
                });
                let P = null != L ? L[0] : null,
                    B = null != L ? L[1] : null;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != P && l ? (0, r.jsxs)(r.Fragment, {
                        children: [" ", P, " "]
                    }) : null, "dot" === D ? (0, r.jsx)(d.RoleDot, {
                        color: R,
                        name: k,
                        className: A.roleDot
                    }) : null, t, null != B ? (0, r.jsx)(r.Fragment, {
                        children: B
                    }) : null, null == P || l ? null : P, null != a && (0, g.default)(a) && w && b ? (0, r.jsx)(y, {}) : null]
                })
            }(a = i || (i = {}))[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES"
        }
    }
]);