(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57543"], {
        929887: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b024d0fd63aa42ba8670.png"
        },
        25116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("49111");

            function a(e) {
                return e.type === r.MessageTypes.DEFAULT && null != e.messageReference
            }
        },
        500858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("568734"),
                a = n("49111"),
                i = e => null != e && null != e.attachments && !(e.attachments.length < 1) && e.attachments.some(e => null != e.flags && (0, r.hasFlag)(e.flags, a.MessageAttachmentFlags.IS_REMIX))
        },
        95045: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                },
                renderAutomodMessageMarkup: function() {
                    return u
                }
            }), n("355025");
            var r = n("367376"),
                a = n("240873"),
                i = n("49111");
            let s = new Set([i.MessageEmbedTypes.IMAGE, i.MessageEmbedTypes.GIFV]),
                o = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? r.default.parseInlineReply : r.default.parse;
                return function(e, t, n) {
                    var r, i;
                    let {
                        toAST: c = !1,
                        hideSimpleEmbedContent: u = !0,
                        formatInline: f = !1,
                        postProcessor: m
                    } = n, g = !1;
                    let p = e(t.content, !0, (r = t, i = n, {
                        allowLinks: null != r.webhookId || !!i.allowLinks,
                        allowEmojiLinks: null != r.webhookId,
                        channelId: r.channel_id,
                        messageId: r.id,
                        mentionChannels: r.mentionChannels,
                        isInteracting: !!i.isInteracting,
                        formatInline: !!i.formatInline,
                        noStyleAndInteraction: !!i.noStyleAndInteraction,
                        allowHeading: !!i.allowHeading,
                        allowList: !!i.allowList,
                        previewLinkTarget: !!i.previewLinkTarget,
                        disableAnimatedEmoji: !!i.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, n) => (!Array.isArray(e) && (e = [e]), u && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let n = e[0],
                            r = t[0];
                        return "link" === n.type && s.has(r.type) && (0, a.isEmbedInline)(r) ? [] : e
                    }(e, t.embeds)), !f && (e = function(e, t) {
                        return t ? l(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = l(e[0].content)), e)
                    }(e, n)), g = function(e, t) {
                        return t ? d(e) : "paragraph" === e[0].type && e[0].content instanceof Array && d(e[0].content)
                    }(e, n), f && (e = function e(t) {
                        return t.forEach(t => {
                            o.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != m && (e = m(e, n)), e));
                    return {
                        hasSpoilerEmbeds: g,
                        content: p
                    }
                }(n, e, t)
            }

            function u(e, t, n) {
                var a;
                return a = r.default.parseAutoModerationSystemMessage, a(e, !0, {
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

            function l(e) {
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
                    return o
                },
                getMessageUsernameId: function() {
                    return c
                },
                getMessageTimestampId: function() {
                    return u
                },
                getMessageReactionsId: function() {
                    return l
                },
                getMessageAccessoriesId: function() {
                    return d
                },
                getMessageAriaLabelledBy: function() {
                    return f
                },
                getMessageAriaDescribedBy: function() {
                    return m
                }
            });
            var r = n("862013"),
                a = n("913491"),
                i = n("49111");

            function s(e) {
                return "message-content-".concat(e.id)
            }

            function o(e) {
                return "message-reply-context-".concat(e.id)
            }

            function c(e, t) {
                let n = null != t ? t : e.id;
                return "message-username-".concat(n)
            }

            function u(e) {
                return "message-timestamp-".concat(e.id)
            }

            function l(e) {
                return "message-reactions-".concat(e.id)
            }

            function d(e) {
                return "message-accessories-".concat(e.id)
            }

            function f(e, t, n) {
                let l = e.type === i.MessageTypes.REPLY && null != e.messageReference,
                    f = e.embeds.length > 0,
                    m = e.attachments.length > 0,
                    g = e.stickerItems.length > 0,
                    p = e.codedLinks.length > 0,
                    A = e.hasFlag(i.MessageFlags.HAS_THREAD),
                    E = f || m || g || p || A || e.type === i.MessageTypes.THREAD_CREATED,
                    h = f && e.content === e.embeds[0].url && e.embeds[0].type === i.MessageEmbedTypes.GIFV,
                    y = e.type !== i.MessageTypes.DEFAULT || !h && "" !== e.content,
                    I = (0, a.default)(e),
                    M = !I && (null == n ? void 0 : n.hasTimestamp) !== !1,
                    S = c(e, t),
                    _ = o(e),
                    x = I ? "" : "".concat(l ? _ : S, " ").concat(r.MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID);
                if (y) {
                    let t = s(e);
                    x += " ".concat(t)
                }
                if (E) {
                    let t = d(e);
                    x += " ".concat(t)
                }
                if (M) {
                    let t = u(e);
                    x += " ".concat(r.MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID, " ").concat(t)
                }
                return x.trim()
            }

            function m(e) {
                if (0 === e.reactions.length) return;
                let t = l(e);
                return "".concat(r.MESSAGE_REACTIONS_LABEL_SEGMENT_ID, " ").concat(t)
            }
        },
        14526: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("473374"),
                i = n("195483"),
                s = n("574073");

            function o(e) {
                var t, n;
                let o = (0, s.default)(e.message),
                    c = (0, a.renderSystemTag)({
                        message: e.message,
                        channel: e.channel,
                        user: null !== (n = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== n ? n : e.userOverride,
                        compact: !!e.compact,
                        isRepliedMessage: !!e.isRepliedMessage
                    }),
                    u = {};
                return null != c && (u[i.UsernameDecorationTypes.SYSTEM_TAG] = c), (0, r.jsx)(i.default, {
                    ...e,
                    author: o,
                    decorations: u
                })
            }
        },
        38600: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("741566");
            let a = {
                    LATIN12: r.latin12CompactTimeStamp,
                    LATIN24: r.latin24CompactTimeStamp,
                    ASIAN: r.asianCompactTimeStamp
                },
                i = /(AM|PM)$/;

            function s(e) {
                return null != e.match(i) ? a.LATIN24 : e.length <= 5 ? a.LATIN12 : a.ASIAN
            }
        },
        119001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                s = n("77078"),
                o = n("956089"),
                c = n("855891"),
                u = n("782340"),
                l = n("301893");

            function d(e) {
                let {
                    isRepliedPoll: t = !1,
                    className: n
                } = e, a = t ? l.badgeReplied : l.badgeDefault;
                return (0, r.jsx)(o.TextBadge, {
                    className: i(n, a),
                    disableColor: !0,
                    text: (0, r.jsxs)("div", {
                        className: l.innerBadge,
                        children: [(0, r.jsx)(c.default, {
                            className: l.icon
                        }), (0, r.jsx)(s.Text, {
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
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("75196");

            function i(e) {
                let {
                    color: t = "currentColor",
                    ...n
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(n),
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: t,
                    children: [(0, r.jsx)("path", {
                        d: "M3.48325 0H0.727273C0.325611 0 0 0.325611 0 0.727273V15.2727C0 15.6744 0.325611 16 0.727273 16H3.48325C3.88492 16 4.21053 15.6744 4.21053 15.2727V0.727273C4.21053 0.325611 3.88492 0 3.48325 0Z"
                    }), (0, r.jsx)("path", {
                        d: "M9.37799 8H6.62201C6.22035 8 5.89474 8.32561 5.89474 8.72727V15.2727C5.89474 15.6744 6.22035 16 6.62201 16H9.37799C9.77965 16 10.1053 15.6744 10.1053 15.2727V8.72727C10.1053 8.32561 9.77965 8 9.37799 8Z"
                    }), (0, r.jsx)("path", {
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
                    return l
                },
                trackEnableCommunityFlow: function() {
                    return d
                }
            });
            var r = n("716241"),
                a = n("25116"),
                i = n("599110"),
                s = n("69741"),
                o = n("49111"),
                c = n("929887");

            function u(e) {
                return (0, a.default)(e) && e.messageReference.guild_id === s.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === s.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
            }

            function l() {
                return c
            }
            let d = e => {
                i.default.track(o.AnalyticEvents.USER_FLOW_TRANSITION, {
                    flow_type: s.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
                    from_step: e.fromStep,
                    to_step: e.toStep,
                    ...(0, r.collectGuildAnalyticsMetadata)(e.guildId)
                })
            }
        },
        238956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanSeeRemixBadge: function() {
                    return i
                },
                useIsRemixANitroPerk: function() {
                    return s
                }
            }), n("685665");
            var r = n("862205");
            let a = (0, r.createExperiment)({
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

            function i() {
                return a.useExperiment({
                    location: "canSeeRemixBadge"
                }, {
                    autoTrackExposure: !0
                }).canSeeRemixBadge
            }

            function s() {
                return !!a.useExperiment({
                    location: "isRemixANitroPerkHook"
                }, {
                    autoTrackExposure: !0
                }).isNitroPerk
            }
        },
        862846: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return !!(null != t && e.mentions.includes(t.author.id)) || !1
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        }
    }
]);