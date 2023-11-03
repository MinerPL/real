(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64072"], {
        273481: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowAngleLeftUpIcon: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M2.293 7.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L5.414 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5Z",
                        className: u
                    })
                })
            }
        },
        549990: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanGuildFeedFeatureChannel: function() {
                    return c
                }
            });
            var a = n("316693"),
                i = n("446674"),
                l = n("886484"),
                s = n("677315"),
                u = n("305961"),
                r = n("957255"),
                d = n("49111");
            let o = a.default.combine(d.Permissions.VIEW_CHANNEL, d.Permissions.MANAGE_MESSAGES, d.Permissions.READ_MESSAGE_HISTORY);

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.getGuildId(),
                    a = (0, i.useStateFromStores)([r.default], () => r.default.can(o, e), [e]),
                    c = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(n), [n]),
                    f = (0, s.useGuildHomeExperiment)(c, !1);
                return !!(a && null !== n && f && (null != e.parentChannelThreadType && d.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, l.isChannelAvailableInGuildFeed)(e)) || !1
            }
        },
        530101: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("611221"),
                s = n("446674"),
                u = n("77078"),
                r = n("185014"),
                d = n("886484"),
                o = n("300322"),
                c = n("549990"),
                f = n("782340");

            function E(e, t) {
                let E = e.guild_id,
                    M = i.useMemo(() => ({
                        guildId: E,
                        entity: e,
                        entityType: l.GuildFeedItemTypes.FORUM_POST
                    }), [E, e]),
                    m = (0, s.useStateFromStores)([r.default], () => r.default.getIsItemFeatured(M), [M]),
                    g = (0, o.useIsThreadModerator)(e),
                    I = (0, c.useCanGuildFeedFeatureChannel)(e);
                return g && I ? m ? (0, a.jsx)(u.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: f.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            UnfeatureItemConfirmationModal: e
                        } = await n.el("969715").then(n.bind(n, "969715"));
                        return t => (0, a.jsx)(e, {
                            featureableItem: M,
                            header: f.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
                            body: f.default.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY,
                            ...t
                        })
                    })
                }) : (0, a.jsx)(u.MenuItem, {
                    id: "guild-feed-feature",
                    label: f.default.Messages.GUILD_FEED_FEATURE_FORUM_POST,
                    children: (0, d.getFeatureItemsTimes)().map(i => {
                        let {
                            value: l,
                            timePeriod: s
                        } = i;
                        return (0, a.jsx)(u.MenuItem, {
                            id: "".concat(l),
                            label: (0, d.createFeatureItemsTimeLabel)(s),
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    FeatureForumPostConfirmationModal: i
                                } = await n.el("969715").then(n.bind(n, "969715"));
                                return n => (0, a.jsx)(i, {
                                    thread: e,
                                    guildId: E,
                                    expiresSeconds: l,
                                    timePeriod: s,
                                    options: t,
                                    ...n
                                })
                            })
                        }, l)
                    })
                }) : null
            }
        },
        612920: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTED_EMBED_TYPES: function() {
                    return i
                }
            });
            var a = n("246111");
            let i = new Set([a.MessageEmbedTypes.IMAGE, a.MessageEmbedTypes.VIDEO, a.MessageEmbedTypes.GIFV])
        },
        908480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useExplicitMediaActions: function() {
                    return s
                }
            });
            var a = n("884691"),
                i = n("448993"),
                l = n("695681");

            function s(e) {
                let {
                    onError: t,
                    onSuccess: n
                } = null != e ? e : {}, [s, u] = a.useState(!1), r = a.useCallback(async (e, a, r, d) => {
                    if (!s) {
                        u(!0);
                        try {
                            await (0, l.reportFalsePositive)(e, a, r, d), null == n || n()
                        } catch (n) {
                            let e = new i.APIError(n);
                            null == t || t(e)
                        } finally {
                            u(!1)
                        }
                    }
                }, [s, t, n]);
                return {
                    reportFalsePositive: r,
                    isReportFalsePositiveLoading: s
                }
            }
        },
        39393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useExplicitMediaAttachmentsForMessage: function() {
                    return s
                },
                useExplicitMediaEmbedsForMessage: function() {
                    return u
                }
            });
            var a = n("65597"),
                i = n("377253"),
                l = n("793441");
            let s = (e, t, n) => {
                    var s, u;
                    let r = (0, a.default)([i.default], () => i.default.getMessage(e, t));
                    if (null == r) return [];
                    let d = void 0 !== n ? e => e.id === n : e => (0, l.isMediaObscured)({
                        type: l.ObscuredMediaTypes.Attachment,
                        media: e
                    }, (0, l.shouldRedactExplicitContent)(r));
                    return null !== (u = null == r ? void 0 : null === (s = r.attachments) || void 0 === s ? void 0 : s.filter(d)) && void 0 !== u ? u : []
                },
                u = (e, t, n) => {
                    var s, u;
                    let r = (0, a.default)([i.default], () => i.default.getMessage(e, t));
                    if (null == r) return [];
                    let d = void 0 !== n ? e => e.id === n : e => (0, l.isMediaObscured)({
                        type: l.ObscuredMediaTypes.Embed,
                        media: e
                    }, (0, l.shouldRedactExplicitContent)(r));
                    return null !== (u = null == r ? void 0 : null === (s = r.embeds) || void 0 === s ? void 0 : s.filter(d)) && void 0 !== u ? u : []
                }
        },
        723653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                u = n("246111"),
                r = n("77078"),
                d = n("772017"),
                o = n("651693"),
                c = n("476765"),
                f = n("58608"),
                E = n("457971"),
                M = n("793441"),
                m = n("908480"),
                g = n("39393"),
                I = n("612920"),
                S = n("782340"),
                p = n("629325");
            let _ = e => {
                    let {
                        attachment: t
                    } = e, {
                        url: n,
                        description: i
                    } = t;
                    return null == n ? null : (0, a.jsx)(T, {
                        url: n,
                        description: i
                    })
                },
                A = e => {
                    var t, n, i;
                    let {
                        embed: l
                    } = e;
                    if (!I.SUPPORTED_EMBED_TYPES.has(l.type)) return null;
                    let s = void 0 !== l.video && l.type !== u.MessageEmbedTypes.GIFV ? l.video.url : null !== (i = null === (t = l.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== i ? i : null === (n = l.image) || void 0 === n ? void 0 : n.url;
                    return null == s ? null : (0, a.jsx)(T, {
                        url: s
                    })
                },
                T = e => {
                    let {
                        url: t,
                        description: n
                    } = e, i = (0, o.isVideoUrl)(t);
                    return (0, a.jsx)("div", {
                        className: p.mediaContainer,
                        children: i ? (0, a.jsx)(f.default, {
                            className: s(p.video, p.media),
                            controls: !0,
                            src: t
                        }) : (0, a.jsx)("img", {
                            className: s(p.image, p.media),
                            src: t,
                            alt: n
                        })
                    })
                };

            function h(e) {
                let {
                    channelId: t,
                    messageId: n,
                    attachmentId: l,
                    embedId: s,
                    transitionState: u,
                    onClose: o
                } = e, f = (0, c.useUID)(), I = (0, E.useIsEligibleForExplicitMediaRedaction)(), T = (0, g.useExplicitMediaAttachmentsForMessage)(t, n, l), h = (0, g.useExplicitMediaEmbedsForMessage)(t, n, s), v = i.useCallback(() => {
                    d.default.pop(), (0, r.showToast)((0, r.createToast)(S.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, r.ToastType.CUSTOM)), o()
                }, [o]), {
                    reportFalsePositive: C,
                    isReportFalsePositiveLoading: R
                } = (0, m.useExplicitMediaActions)({
                    onSuccess: v,
                    onError: () => {
                        (0, r.showToast)((0, r.createToast)(S.default.Messages.ERROR_GENERIC_TITLE, r.ToastType.FAILURE))
                    }
                }), O = () => {
                    (0, M.trackMediaRedactionAction)({
                        action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                        channelId: t,
                        messageId: n
                    }), o()
                }, y = I && (T.length > 0 || h.length > 0);
                return i.useEffect(() => {
                    y && (0, M.trackMediaRedactionAction)({
                        action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                        channelId: t,
                        messageId: n
                    })
                }, [t, n, y]), !y && O(), (0, a.jsxs)(r.ModalRoot, {
                    transitionState: u,
                    "aria-labelledby": f,
                    size: r.ModalSize.SMALL,
                    children: [(0, a.jsxs)(r.ModalContent, {
                        children: [(0, a.jsx)(r.ModalCloseButton, {
                            onClick: O,
                            className: p.closeButton
                        }), (0, a.jsx)(r.Heading, {
                            id: f,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: p.header,
                            children: S.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: p.subheader,
                            children: S.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }), 1 === T.length && 0 === h.length ? (0, a.jsx)(_, {
                            attachment: T[0]
                        }) : null, 1 === h.length && 0 === T.length ? (0, a.jsx)(A, {
                            embed: h[0]
                        }) : null]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        children: [(0, a.jsx)(r.Button, {
                            className: p.button,
                            disabled: R,
                            submitting: R,
                            size: r.Button.Sizes.MEDIUM,
                            color: r.Button.Colors.BRAND,
                            onClick: () => {
                                C(t, n, T.map(e => e.id), h.map(e => e.id)), (0, M.trackMediaRedactionAction)({
                                    action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                                    channelId: t,
                                    messageId: n
                                })
                            },
                            children: S.default.Messages.CONFIRM
                        }), (0, a.jsx)(r.Button, {
                            className: p.button,
                            disabled: R,
                            color: r.Button.Colors.TRANSPARENT,
                            size: r.Button.Sizes.MEDIUM,
                            onClick: O,
                            children: S.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        485684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-07_allow_welcome_message_replies",
                label: "Allow replies to welcome messages",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = i
        },
        613387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                i = n("913144");
            let l = {};
            class s extends a.default.Store {
                getOptions(e) {
                    return l[e]
                }
            }
            s.displayName = "SendMessageOptionsStore";
            var u = new s(i.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        sendMessageOptions: n
                    } = e;
                    null != n && (l[t.id] = n), null != t.nonce && t.nonce in l && delete l[t.nonce]
                }
            })
        },
        901205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canGuildFeedFeatureMessage: function() {
                    return d
                }
            });
            var a = n("316693"),
                i = n("886484"),
                l = n("677315"),
                s = n("957255"),
                u = n("49111");
            let r = a.default.combine(u.Permissions.VIEW_CHANNEL, u.Permissions.MANAGE_MESSAGES, u.Permissions.READ_MESSAGE_HISTORY);

            function d(e, t) {
                let n = e.getGuildId();
                return !!(null !== n && (0, l.canSeeGuildHome)(n) && u.ChannelTypesSets.GUILD_FEED_FEATURABLE_MESSAGES.has(e.type) && (0, i.isChannelAvailableInGuildFeed)(e) && (0, i.isMessageAvailableInGuildFeed)(t) && s.default.can(r, e)) || !1
            }
        },
        327054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("300322"),
                i = n("913491"),
                l = n("49111");

            function s(e, t, n) {
                let s = t.isSystemDM(),
                    u = !s && !(0, i.default)(e);
                return u && (n || t.isPrivate()) && (0, a.getIsActiveChannelOrUnarchivableThread)(t) && t.type !== l.ChannelTypes.GUILD_VOICE && t.type !== l.ChannelTypes.GUILD_STAGE_VOICE
            }
        },
        409058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("819689"),
                i = n("916565");

            function l(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (a.default.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
                    null != t.interactionData && null != l.applicationId && (0, i.retryCommandMessage)(t, e, l.applicationId);
                    return
                }
                let {
                    content: s,
                    tts: u,
                    flags: r,
                    nonce: d
                } = t;
                a.default.sendMessage(e.id, {
                    content: s,
                    tts: u,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                }, void 0, {
                    nonce: d,
                    flags: r,
                    ...l
                })
            }
        },
        363396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                configureJoin: function() {
                    return A
                },
                copyId: function() {
                    return T
                },
                copyLink: function() {
                    return h
                },
                deleteMessage: function() {
                    return v
                },
                editMessage: function() {
                    return C
                },
                markMessageUnread: function() {
                    return R
                },
                pinMessage: function() {
                    return O
                },
                publishMessage: function() {
                    return y
                },
                retrySendMessage: function() {
                    return x
                },
                replyToMessage: function() {
                    return N
                },
                createThread: function() {
                    return b
                },
                goToThread: function() {
                    return j
                },
                markMessageAsReminder: function() {
                    return D
                },
                markMessageRemindersAsComplete: function() {
                    return G
                }
            }), n("37983"), n("884691"), n("77078");
            var a = n("828986"),
                i = n("819689"),
                l = n("249561"),
                s = n("550762"),
                u = n("592407");
            n("377114");
            var r = n("931318"),
                d = n("529805"),
                o = n("967241"),
                c = n("271938"),
                f = n("42203"),
                E = n("599110"),
                M = n("404008"),
                m = n("306160"),
                g = n("659500"),
                I = n("613387"),
                S = n("456936"),
                p = n("409058"),
                _ = n("49111");

            function A(e) {
                let t = e.getGuildId();
                null != t && u.default.open(t, _.GuildSettingsSections.OVERVIEW)
            }

            function T(e, t, n) {
                (0, m.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
            }

            function h(e, t) {
                E.default.track(_.AnalyticEvents.MESSAGE_LINK_COPIED, {
                    message_id: t.id,
                    channel: t.channel_id
                }), (0, m.copy)((0, M.getChannelPermalink)(e.guild_id, e.id, t.id))
            }

            function v(e, t, n) {
                t.state === _.MessageStates.SEND_FAILED || n.shiftKey ? i.default.deleteMessage(e.id, t.id, t.state === _.MessageStates.SEND_FAILED) : l.default.confirmDelete(e, t)
            }

            function C(e, t) {
                i.default.startEditMessage(e.id, t.id, t.content)
            }

            function R(e, t) {
                (0, S.default)(e.id, t.id)
            }

            function O(e, t, n) {
                if (!1 === t.pinned) {
                    n.shiftKey ? a.default.pinMessage(e, t.id) : l.default.confirmPin(e, t);
                    return
                }
                n.shiftKey ? a.default.unpinMessage(e, t.id) : l.default.confirmUnpin(e, t)
            }

            function y(e, t) {
                (0, s.default)(e.id, t.id)
            }

            function x(e, t) {
                (0, p.default)(e, t, void 0, I.default.getOptions(t.id))
            }

            function N(e, t, n) {
                let a = e.isPrivate(),
                    i = t.author.id === c.default.getId();
                (0, d.createPendingReply)({
                    channel: e,
                    message: t,
                    shouldMention: !n.shiftKey && !i,
                    showMentionToggle: !a && !i
                }), g.ComponentDispatch.dispatchToLastSubscribed(_.ComponentActions.TEXTAREA_FOCUS)
            }

            function b(e, t) {
                (0, o.openThreadSidebarForCreating)(e, t, "Message")
            }

            function j(e, t) {
                let n = f.default.getChannel(t.id);
                null != n && (0, o.openThreadSidebarForViewing)(n)
            }

            function D(e, t) {
                (0, r.addMessageReminders)(t)
            }

            function G(e, t) {
                (0, r.completeMessageReminders)(t.id)
            }
        },
        261649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                },
                useMessageMenu: function() {
                    return w
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("118810"),
                l = n("77078"),
                s = n("272030"),
                u = n("225664"),
                r = n("798609"),
                d = n("861370"),
                o = n("152298"),
                c = n("447651"),
                f = n("26051"),
                E = n("667358"),
                M = n("563816"),
                m = n("875978"),
                g = n("761136"),
                I = n("126423"),
                S = n("175537"),
                p = n("485598"),
                _ = n("518155"),
                A = n("355669"),
                T = n("718381"),
                h = n("442711"),
                v = n("702495"),
                C = n("875834"),
                R = n("780657"),
                O = n("204462"),
                y = n("487051"),
                x = n("815384"),
                N = n("263879"),
                b = n("604179"),
                j = n("167670"),
                D = n("913274"),
                G = n("514705"),
                P = n("321456"),
                L = n("470254"),
                U = n("678803"),
                F = n("782340");

            function k(e) {
                var t, n;
                let a, l, u, r, {
                        channel: d,
                        message: o,
                        target: c,
                        attachment: f,
                        shouldHideMediaOptions: E,
                        onSelect: M,
                        onHeightUpdate: m
                    } = e,
                    g = c,
                    I = c.getAttribute("data-type"),
                    S = c.getAttribute("data-id"),
                    p = c.getAttribute("data-name");
                if (null != f) l = a = u = f.url;
                else
                    for (;
                        (0, i.isElement)(g);)(0, i.isElement)(g, HTMLImageElement) && null != g.src && (l = g.src), (0, i.isElement)(g, HTMLAnchorElement) && null != g.href && (a = g.href, r = g.textContent, null == l && "img" === g.getAttribute("data-role") && (l = a, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (u = g.getAttribute("data-safe-src")))), g = g.parentNode;
                let _ = null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "";
                return w({
                    message: o,
                    channel: d,
                    attachment: f,
                    textSelection: _,
                    favoriteableType: I,
                    favoriteableId: S,
                    favoriteableName: p,
                    itemHref: a,
                    itemSrc: l,
                    itemSafeSrc: u,
                    itemTextContent: r,
                    canReport: !0,
                    onHeightUpdate: m,
                    onSelect: M,
                    onClose: s.closeContextMenu,
                    navId: "message",
                    ariaLabel: F.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    shouldHideMediaOptions: E
                })
            }

            function w(e) {
                let {
                    message: t,
                    channel: n,
                    attachment: i,
                    textSelection: s,
                    favoriteableType: k,
                    favoriteableId: w,
                    favoriteableName: V,
                    itemHref: B,
                    itemSrc: K,
                    itemSafeSrc: H,
                    itemTextContent: Y,
                    canReport: z,
                    onHeightUpdate: X,
                    onSelect: W,
                    onClose: J,
                    navId: Z,
                    ariaLabel: q,
                    shouldHideMediaOptions: $ = !1
                } = e, {
                    enabled: Q,
                    hasTwoButtonEntryPoint: ee,
                    hasBurstToggle: et
                } = (0, u.useBurstReactionsExperiment)(n.getGuildId()), en = (0, o.default)(s), ea = (0, E.default)(s), ei = (0, O.default)(t, n), el = (0, S.default)(t, n), es = (0, S.default)(t, n, m.ReactionTypes.BURST, ee), eu = (0, h.default)(t, n), er = (0, R.default)(t, n), ed = (0, v.default)({
                    type: k,
                    id: w,
                    name: V
                }), eo = (0, G.default)(t, n), ec = (0, C.default)(t, n), ef = (0, y.default)(t), eE = (0, p.default)(t, n), eM = (0, _.default)(t, n), em = (0, N.default)(t, n), eg = (0, b.default)(t, n), eI = (0, T.default)(t, n), eS = (0, D.default)(t), ep = (0, P.default)(t, n), e_ = (0, f.default)(null != B ? B : K, Y, t, {
                    shouldHideMediaOptions: $
                }), eA = (0, c.default)(H, t, {
                    shouldHideMediaOptions: $
                }), eT = (0, U.default)(t, i), eh = (0, d.default)({
                    id: t.id,
                    label: F.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(t.channel_id, "-").concat(t.id)
                }), ev = (0, j.default)(t, n), eC = (0, L.default)(t, n), eR = (0, I.default)(t, n, {
                    hoist: !0
                }), eO = (0, g.default)(s, n.getGuildId()), ey = (0, x.default)(t), ex = (0, A.default)(t), eN = (0, M.default)({
                    commandType: r.ApplicationCommandType.MESSAGE,
                    commandTargetId: t.id,
                    channel: n,
                    guildId: void 0,
                    onShow: X
                });
                return (0, a.jsxs)(l.Menu, {
                    navId: Z,
                    onClose: J,
                    "aria-label": q,
                    onSelect: W,
                    children: [(0, a.jsx)(l.MenuGroup, {
                        children: en
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: ea
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: ["" === s ? ei : null, el, Q && !et && es, ef, eu, er, ed, ev, eC, ex, eN, eo, ec, ey, eE, eM, ep, eR, eg, em, eI, z && eS]
                    }), null != eO && (0, a.jsx)(l.MenuGroup, {
                        children: eO
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [eA, eT]
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: e_
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: eh
                    })]
                })
            }
        },
        761136: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("77078"),
                s = n("272030"),
                u = n("353575"),
                r = n("296839"),
                d = n("348934"),
                o = n("151866"),
                c = n("462392"),
                f = n("155158"),
                E = n("592407"),
                M = n("49111"),
                m = n("143460"),
                g = n("782340"),
                I = n("490291");
            let S = m.AutomodTriggerType.KEYWORD;

            function p(e, t) {
                let {
                    perGuildMaxCount: n
                } = r.triggerConfigs[S], {
                    isLoading: m,
                    saveRule: p
                } = (0, o.useAutomodEditingRuleActions)(), {
                    createNewEditingRule: _
                } = (0, o.useAutomodEditingRuleState)(), [A, T] = i.useState(!1), [h, v] = (0, u.useSyncAutomodRules)(t), {
                    rulesByTriggerType: C,
                    updateRule: R
                } = (0, u.useAutomodRulesList)(t), O = i.useMemo(() => {
                    var e;
                    return null !== (e = C[S]) && void 0 !== e ? e : []
                }, [C]), y = 0 === O.length, x = n > O.length && !y, N = i.useMemo(() => (0, d.canCurrentUserManageMessageFilters)(t), [t]);
                if (!N || null == e || 0 === e.length || null == t) return null;
                let b = e.split(" ").length,
                    j = () => {
                        null != t && ((0, s.closeContextMenu)(), E.default.open(t, M.GuildSettingsSections.GUILD_AUTOMOD), setTimeout(() => {
                            _(t, S, {
                                triggerMetadata: {
                                    keywordFilter: [e],
                                    regexPatterns: [],
                                    allowList: []
                                }
                            })
                        }, 400))
                    },
                    D = async t => {
                        var n, a;
                        (0, s.closeContextMenu)();
                        let i = await (0, f.confirmAddKeyword)(t.name, e);
                        if (!i) return;
                        let l = {
                            ...t,
                            triggerMetadata: {
                                ...t.triggerMetadata,
                                keywordFilter: [...null !== (a = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== a ? a : [], e]
                            }
                        };
                        await p(l, O), R(l)
                    }, G = (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(l.MenuItem, {
                            id: "automod-rules-loading",
                            label: g.default.Messages.LOADING
                        })
                    });
                return !h && (G = (0, a.jsxs)(a.Fragment, {
                    children: [y && (0, a.jsx)(l.MenuItem, {
                        id: "add-first-rule",
                        label: g.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                        action: j,
                        disabled: m
                    }), O.map(e => {
                        let t = (0, r.getAvailableActionTypes)(S).reduce((t, n) => {
                            let a = e.actions.find(e => {
                                let {
                                    type: t
                                } = e;
                                return n === t
                            });
                            if (null == a) return t;
                            let i = (0, c.getActionInfo)(n, a);
                            return t += ", ".concat(null == i ? void 0 : i.headerText)
                        }, "");
                        return (0, a.jsx)(l.MenuRadioItem, {
                            id: e.id,
                            label: e.name,
                            subtext: (0, a.jsx)(l.Text, {
                                color: "text-muted",
                                className: I.actionTextHeader,
                                variant: "text-xs/normal",
                                children: t.slice(2)
                            }),
                            group: "automod-rule-selection",
                            checked: !1,
                            disabled: m,
                            action: () => D(e)
                        }, e.id)
                    }), x && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l.MenuSeparator, {}), (0, a.jsx)(l.MenuItem, {
                            id: "add-another-rule",
                            label: g.default.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                            action: j,
                            disabled: m
                        })]
                    })]
                })), (0, a.jsx)(l.MenuItem, {
                    id: "guild-automod-add-selection",
                    label: g.default.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
                        keywordCount: b
                    }),
                    onFocus: () => {
                        !A && (T(!0), v())
                    },
                    children: G
                })
            }
        },
        126423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("611221"),
                l = n("446674"),
                s = n("77078"),
                u = n("530101"),
                r = n("185014"),
                d = n("886484"),
                o = n("901205"),
                c = n("782340");

            function f(e, t, f) {
                let E = t.getGuildId(),
                    M = (0, l.useStateFromStores)([r.default], () => null !== E && r.default.getIsItemFeatured({
                        guildId: E,
                        entity: e,
                        entityType: i.GuildFeedItemTypes.MESSAGE
                    }), [e, E]),
                    m = (0, u.default)(t, f);
                if (e.isFirstMessageInForumPost(t)) return m;
                let g = (0, o.canGuildFeedFeatureMessage)(t, e);
                return g ? M ? (0, a.jsx)(s.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: c.default.Messages.GUILD_FEED_UNFEATURE_MESSAGE,
                    action: () => null == E ? null : (0, s.openModalLazy)(async () => {
                        let {
                            UnfeatureItemConfirmationModal: t
                        } = await n.el("969715").then(n.bind(n, "969715"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            featureableItem: {
                                guildId: E,
                                entity: e,
                                entityType: i.GuildFeedItemTypes.MESSAGE
                            },
                            header: c.default.Messages.GUILD_FEED_UNFEATURED_MESSAGE_MODAL_HEADER,
                            body: c.default.Messages.GUILD_FEED_UNFEATURED_MESSAGE_MODAL_BODY
                        })
                    })
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "guild-feed-feature",
                    label: c.default.Messages.GUILD_FEED_FEATURE_MESSAGE,
                    children: (0, d.getFeatureItemsTimes)().map(i => {
                        let {
                            value: l,
                            timePeriod: u
                        } = i;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "".concat(l),
                            label: (0, d.createFeatureItemsTimeLabel)(u),
                            action: () => null == E ? null : (0, s.openModalLazy)(async () => {
                                let {
                                    FeatureMessageConfirmationModal: i
                                } = await n.el("969715").then(n.bind(n, "969715"));
                                return n => (0, a.jsx)(i, {
                                    ...n,
                                    message: e,
                                    channel: t,
                                    guildId: E,
                                    expiresSeconds: l,
                                    timePeriod: u,
                                    options: f
                                })
                            })
                        }, l)
                    })
                }) : null
            }
        },
        175537: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                u = n("446674"),
                r = n("77078"),
                d = n("788506"),
                o = n("252931"),
                c = n("85589"),
                f = n("166257"),
                E = n("432173"),
                M = n("300322"),
                m = n("845579"),
                g = n("957255"),
                I = n("697218"),
                S = n("79945"),
                p = n("491614"),
                _ = n("790950"),
                A = n("216422"),
                T = n("315102"),
                h = n("659500"),
                v = n("402671"),
                C = n("764364"),
                R = n("590527"),
                O = n("692171"),
                y = n("875978"),
                x = n("255135"),
                N = n("49111"),
                b = n("958706"),
                j = n("646718"),
                D = n("782340"),
                G = n("221215");

            function P(e, t) {
                var n, l, P, L;
                let U = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.ReactionTypes.NORMAL,
                    F = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    {
                        reducedMotion: k
                    } = i.useContext(r.AccessibilityPreferencesContext),
                    w = (0, M.useIsActiveChannelOrUnarchivableThread)(t),
                    V = (0, u.useStateFromStores)([g.default], () => (t.isPrivate() || g.default.can(N.Permissions.ADD_REACTIONS, t)) && w, [t, w]),
                    B = (0, d.useEmojiInPriorityOrder)(t.getGuildId()),
                    K = (0, u.useStateFromStores)([O.default], () => O.default.remainingBurstCurrency),
                    {
                        viewAndUseEnabled: H
                    } = (0, o.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }),
                    Y = U === y.ReactionTypes.BURST,
                    z = Y && K < 1,
                    X = I.default.getCurrentUser(),
                    W = (0, C.isPremium)(X);
                if (!m.RenderReactions.getSetting() || !V || e.type === N.MessageTypes.GUILD_INVITE_REMINDER) return null;
                let J = B.filter(e => !v.default.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: b.EmojiIntention.REACTION,
                    canViewAndUsePackEmoji: H
                })).slice(0, 12).map((i, s) => (0, a.jsx)(r.MenuItem, {
                    color: Y ? "premium-gradient" : "default",
                    id: null !== (P = null !== (l = null !== (n = i.id) && void 0 !== n ? n : i.optionallyDiverseSequence) && void 0 !== l ? l : i.name) && void 0 !== P ? P : ":".concat(i.name, ":"),
                    label: null == i.id ? i.name : ":".concat(i.name, ":"),
                    disabled: z,
                    imageUrl: e => {
                        let {
                            isFocused: t
                        } = e;
                        return null != i.id ? T.default.getEmojiURL({
                            id: i.id,
                            animated: i.animated && (!k.enabled || t),
                            size: 18
                        }) : v.default.getURL(null !== (L = i.optionallyDiverseSequence) && void 0 !== L ? L : "")
                    },
                    action: () => {
                        (0, f.addReaction)(t.id, e.id, (0, E.toReactionEmoji)(i), void 0, {
                            burst: Y
                        })
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                }, s));
                return (0, a.jsx)(r.MenuItem, {
                    id: "add-reaction-".concat(U),
                    icon: Y && !W ? A.default : void 0,
                    label: Y ? W || K > 0 ? D.default.Messages.ADD_BURST_REACTION : D.default.Messages.GET_SUPER_REACTIONS : D.default.Messages.ADD_REACTION,
                    action: () => {
                        if (z) {
                            if (W) {
                                (0, x.openOutOfBurstsModal)();
                                return
                            }(0, c.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: j.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                    page: null != t.getGuildId() ? N.AnalyticsPages.GUILD_CHANNEL : N.AnalyticsPages.DM_CHANNEL,
                                    section: (0, E.getBurstAnalyticsSection)(t),
                                    object: N.AnalyticsObjects.REACTION_RIGHT_CLICK_MENU_UPSELL
                                }
                            });
                            return
                        }
                        if (Y && !F) {
                            (0, R.toggleBurstReactionPicker)(!0), h.ComponentDispatch.dispatchKeyed(N.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
                                emojiPicker: !0,
                                emojiBurstPicker: !1
                            });
                            return
                        }(0, R.toggleBurstReactionPicker)(Y), h.ComponentDispatch.dispatchKeyed(N.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
                            emojiPicker: !Y,
                            emojiBurstPicker: Y
                        })
                    },
                    color: Y ? "premium-gradient" : "default",
                    subMenuClassName: s({
                        [G.isBurstReactionPicker]: Y
                    }),
                    children: Y && K < 1 ? null : (0, a.jsxs)(a.Fragment, {
                        children: [Y ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(r.MenuItem, {
                                id: "add-burst-reaction-count",
                                navigable: !1,
                                render: () => (0, a.jsxs)("div", {
                                    className: G.burstCount,
                                    children: [(0, a.jsx)(p.default, {
                                        width: 16,
                                        height: 16,
                                        className: G.burstIcon
                                    }), (0, a.jsx)(r.Heading, {
                                        variant: "heading-sm/bold",
                                        color: "text-normal",
                                        children: D.default.Messages.SUPER_REACTIONS_LEFT_WITH_PLURAL.format({
                                            count: K
                                        })
                                    })]
                                })
                            }), (0, a.jsx)(r.MenuSeparator, {})]
                        }) : null, J, (0, a.jsx)(r.MenuSeparator, {}), (0, a.jsx)(r.MenuItem, {
                            color: Y ? "premium-gradient" : "default",
                            id: "other-reactions",
                            label: D.default.Messages.VIEW_MORE,
                            icon: Y ? _.default : S.default,
                            disabled: z,
                            action: () => {
                                if (Y && !F) {
                                    (0, R.toggleBurstReactionPicker)(!0), h.ComponentDispatch.dispatchKeyed(N.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
                                        emojiPicker: !0,
                                        emojiBurstPicker: !1
                                    });
                                    return
                                }(0, R.toggleBurstReactionPicker)(Y), h.ComponentDispatch.dispatchKeyed(N.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
                                    emojiPicker: !Y,
                                    emojiBurstPicker: Y
                                })
                            }
                        })]
                    })
                })
            }
        },
        485598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("957255"),
                s = n("85175"),
                u = n("363396"),
                r = n("49111"),
                d = n("782340");

            function o(e, t) {
                let n = t.getGuildId(),
                    o = null != n && (e.type === r.MessageTypes.USER_JOIN || e.type === r.MessageTypes.GUILD_INVITE_REMINDER) && l.default.canWithPartialContext(r.Permissions.MANAGE_GUILD, {
                        guildId: n
                    });
                return o ? (0, a.jsx)(i.MenuItem, {
                    id: "configure",
                    label: d.default.Messages.CONFIGURE,
                    icon: s.default,
                    action: () => (0, u.configureJoin)(t)
                }) : null
            }
        },
        355669: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("413709"),
                s = n("306160"),
                u = n("782340");

            function r(e) {
                return s.SUPPORTS_COPY ? (0, a.jsx)(i.MenuItem, {
                    id: "copy-text",
                    label: u.default.Messages.COPY_TEXT,
                    icon: l.default,
                    action: () => {
                        (0, s.copy)(e.content)
                    }
                }) : null
            }
        },
        442711: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("819689"),
                u = n("300322"),
                r = n("271938"),
                d = n("987772"),
                o = n("61400"),
                c = n("782340");

            function f(e, t) {
                let n = (0, i.useStateFromStores)([r.default], () => r.default.getId()),
                    f = (0, u.useIsActiveChannelOrUnarchivableThread)(t),
                    E = (0, u.useIsNonModInLockedThread)(t);
                return (0, o.default)(e, n) && f && !E ? (0, a.jsx)(l.MenuItem, {
                    id: "edit",
                    label: c.default.Messages.EDIT_MESSAGE,
                    action: () => s.default.startEditMessage(t.id, e.id, e.content),
                    icon: d.default
                }) : null
            }
        },
        702495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("77078"),
                u = n("150021"),
                r = n("997289"),
                d = n("788506"),
                o = n("385976"),
                c = n("867805"),
                f = n("246511"),
                E = n("467094"),
                M = n("178207"),
                m = n("256860"),
                g = n("364685"),
                I = n("24373"),
                S = n("49111"),
                p = n("782340");

            function _(e) {
                return c.default.getByName(e.replace(/(^:|:$)/g, ""))
            }

            function A(e) {
                let {
                    type: t,
                    id: n,
                    name: A,
                    isInExpressionPicker: T = !1
                } = e, {
                    location: h
                } = (0, r.useAnalyticsContext)(), v = i.useMemo(() => ({
                    ...h,
                    section: T ? S.AnalyticsSections.EXPRESSION_PICKER : S.AnalyticsSections.CONTEXT_MENU
                }), [h, T]), C = (0, m.useFavoriteStickerIds)(), R = (0, l.useStateFromStores)([g.default], () => t === f.PickerContextMenuDataTypes.STICKER && null != n ? g.default.getStickerById(n) : null), O = null != R && C.includes(R.id), y = (0, l.useStateFromStores)([o.default], () => {
                    if (t === f.PickerContextMenuDataTypes.EMOJI) {
                        if (null != n) return o.default.getDisambiguatedEmojiContext().getById(n);
                        if (null != A) {
                            var e;
                            return null !== (e = _(A)) && void 0 !== e ? e : _(c.default.convertSurrogateToName(A))
                        }
                    }
                }), x = (0, d.useIsFavoriteEmoji)(null, y);
                if (null != R && t === f.PickerContextMenuDataTypes.STICKER) return (0, I.isGuildSticker)(R) && !(0, I.isAvailableGuildSticker)(R) ? null : O ? (0, a.jsx)(s.MenuItem, {
                    id: "unfavorite",
                    action: () => (0, E.unfavoriteSticker)(R.id),
                    label: p.default.Messages.UNFAVORITE_ITEM
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "favorite",
                    action: () => {
                        (0, M.trackStickerFavorited)({
                            sticker: R,
                            location: {
                                ...v,
                                object: S.AnalyticsObjects.STICKER
                            }
                        }), (0, E.favoriteSticker)(null == R ? void 0 : R.id)
                    },
                    label: p.default.Messages.FAVORITE_ITEM
                });
                if (null != y && t === f.PickerContextMenuDataTypes.EMOJI) return x ? (0, a.jsx)(s.MenuItem, {
                    id: "unfavorite",
                    action: () => (0, u.unfavoriteEmoji)(y),
                    label: p.default.Messages.UNFAVORITE_ITEM
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "favorite",
                    action: () => {
                        (0, d.trackEmojiFavorited)({
                            emoji: y,
                            location: {
                                ...v,
                                object: S.AnalyticsObjects.EMOJI
                            }
                        }), (0, u.favoriteEmoji)(y)
                    },
                    label: p.default.Messages.FAVORITE_ITEM
                })
            }
        },
        780657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("828986"),
                u = n("249561"),
                r = n("957255"),
                d = n("566998"),
                o = n("327054"),
                c = n("49111"),
                f = n("782340");

            function E(e, t) {
                let n = (0, i.useStateFromStores)([r.default], () => r.default.can(c.Permissions.MANAGE_MESSAGES, t), [t]);
                return e.state !== c.MessageStates.SEND_FAILED && (0, o.default)(e, t, n) ? !1 === e.pinned ? (0, a.jsx)(l.MenuItem, {
                    id: "pin",
                    action: function(n) {
                        n.shiftKey ? s.default.pinMessage(t, e.id) : u.default.confirmPin(t, e)
                    },
                    label: f.default.Messages.PIN_MESSAGE,
                    icon: d.default
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "unpin",
                    action: function(n) {
                        n.shiftKey ? s.default.unpinMessage(t, e.id) : u.default.confirmUnpin(t, e)
                    },
                    label: f.default.Messages.UNPIN_MESSAGE,
                    icon: d.default
                }) : null
            }
        },
        204462: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("446674"),
                u = n("77078"),
                r = n("788506"),
                d = n("252931"),
                o = n("166257"),
                c = n("432173"),
                f = n("300322"),
                E = n("845579"),
                M = n("957255"),
                m = n("315102"),
                g = n("402671"),
                I = n("49111"),
                S = n("958706"),
                p = n("782340"),
                _ = n("791507");
            let A = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

            function T(e) {
                var t;
                let {
                    emoji: n,
                    isFocused: i
                } = e, {
                    animated: s,
                    src: r,
                    surrogates: d
                } = n;
                return null == r && null != n.id ? r = m.default.getEmojiURL({
                    id: n.id,
                    animated: !!s,
                    size: 20
                }) : null == r && (r = g.default.getURL(d)), (0, a.jsx)(u.Tooltip, {
                    text: n.allNamesString,
                    hideOnClick: !0,
                    spacing: 16,
                    forceOpen: i,
                    children: e => (0, a.jsx)("div", {
                        "aria-label": p.default.Messages.ADD_REACTION_NAMED.format({
                            emojiName: n.name
                        }),
                        className: l(_.button, {
                            [_.focused]: i
                        }),
                        ...e,
                        children: null == r || "" === r.trim() ? (0, a.jsx)("span", {
                            className: l("emoji", "emoji-text", _.icon),
                            ...e,
                            children: d
                        }) : (0, a.jsx)("img", {
                            className: _.icon,
                            src: r,
                            alt: ""
                        })
                    })
                }, null !== (t = n.id) && void 0 !== t ? t : n.name)
            }

            function h(e, t) {
                var n;
                let i = (0, r.useEmojiInPriorityOrder)(t.guild_id),
                    {
                        viewAndUseEnabled: l
                    } = (0, d.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }),
                    m = i.filter(e => {
                        var n;
                        return !(e.useSpriteSheet && A.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : "") >= 0) && !g.default.isEmojiPremiumLocked({
                            emoji: e,
                            channel: t,
                            intention: S.EmojiIntention.REACTION,
                            canViewAndUsePackEmoji: l
                        })
                    });
                m.length > 4 && (m.length = 4);
                let p = E.RenderReactions.useSetting(),
                    h = (0, f.useIsActiveChannelOrUnarchivableThread)(t),
                    v = (0, s.useStateFromStores)([M.default], () => p && h && (t.isPrivate() || M.default.can(I.Permissions.ADD_REACTIONS, t)), [t, h, p]),
                    C = n => {
                        (0, o.addReaction)(t.id, e.id, (0, c.toReactionEmoji)(n), void 0)
                    };
                return v && m.length > 0 ? (0, a.jsx)(u.MenuGroup, {
                    className: _.wrapper,
                    children: m.map((e, t) => (0, a.jsx)(u.MenuItem, {
                        id: "quickreact-".concat(null !== (n = e.id) && void 0 !== n ? n : t),
                        render: t => {
                            let {
                                isFocused: n
                            } = t;
                            return (0, a.jsx)(T, {
                                emoji: e,
                                isFocused: n
                            })
                        },
                        action: () => C(e),
                        dontCloseOnActionIfHoldingShiftKey: !0
                    }, t))
                }) : null
            }
        },
        487051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("259687"),
                s = n("782340");

            function u(e) {
                return null == e.reactions || 0 === e.reactions.length ? null : (0, a.jsx)(i.MenuItem, {
                    id: "reactions",
                    label: s.default.Messages.VIEW_REACTIONS,
                    icon: l.default,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("57155").then(n.bind(n, "57155"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            message: e
                        })
                    })
                })
            }
        },
        815384: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                },
                useMessageReminderDurations: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                l = n.n(i),
                s = n("446674"),
                u = n("77078"),
                r = n("931318"),
                d = n("979268"),
                o = n("520899"),
                c = n("988864"),
                f = n("36562"),
                E = n("782340");

            function M(e) {
                let {
                    showReminders: t
                } = d.default.useExperiment({
                    location: "a65531_1"
                }, {
                    autoTrackExposure: !1
                }), n = (0, s.useStateFromStores)([o.default], () => null != o.default.getMessageReminders().find(t => t.messageId === e.id)), i = m(e, t => (0, r.addMessageReminders)(e, l().add(t, "millisecond").toDate()));
                return t ? (0, a.jsx)(u.MenuItem, {
                    id: "mark-todo",
                    label: n ? E.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : E.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
                    icon: n ? f.default : void 0,
                    action: () => n ? (0, r.completeMessageReminders)(e.id) : (0, r.addMessageReminders)(e),
                    children: n ? null : i
                }) : null
            }

            function m(e, t) {
                return c.MESSAGE_REMINDER_DURATION_ITEMS.map(e => {
                    let {
                        duration: n,
                        getLabel: i
                    } = e;
                    return (0, a.jsx)(u.MenuItem, {
                        id: "mark-todo-".concat(n),
                        label: i(),
                        action: () => t(n)
                    }, n)
                })
            }
        },
        263879: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("404118"),
                u = n("166257"),
                r = n("300322"),
                d = n("957255"),
                o = n("49111"),
                c = n("782340");

            function f(e, t) {
                let n = (0, r.useIsActiveChannelOrUnarchivableThread)(t),
                    f = (0, i.useStateFromStores)([d.default], () => d.default.can(o.Permissions.MANAGE_MESSAGES, t) && n, [t, n]);
                return f && null != e.reactions && 0 !== e.reactions.length ? (0, a.jsx)(l.MenuItem, {
                    id: "remove-reactions",
                    label: c.default.Messages.REMOVE_ALL_REACTIONS,
                    action: function(n) {
                        n.shiftKey ? (0, u.removeAllReactions)(t.id, e.id) : s.default.show({
                            title: c.default.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
                            body: c.default.Messages.REMOVE_ALL_REACTIONS_CONFIRM_BODY,
                            confirmText: c.default.Messages.YES_TEXT,
                            cancelText: c.default.Messages.NO_TEXT,
                            onConfirm: () => {
                                (0, u.removeAllReactions)(t.id, e.id)
                            }
                        })
                    },
                    color: "danger"
                }) : null
            }
        },
        604179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("77078"),
                u = n("404118"),
                r = n("166257"),
                d = n("300322"),
                o = n("957255"),
                c = n("315102"),
                f = n("402671"),
                E = n("49111"),
                M = n("782340");

            function m(e, t) {
                var n, m, g;
                let {
                    reducedMotion: I
                } = i.useContext(s.AccessibilityPreferencesContext), S = (0, d.useIsActiveChannelOrUnarchivableThread)(t), p = (0, l.useStateFromStores)([o.default], () => o.default.can(E.Permissions.MANAGE_MESSAGES, t) && S, [t, S]), _ = e.reactions.reduce((e, t) => {
                    var n;
                    return (null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji]
                }, []), A = (n, a) => {
                    n.shiftKey ? (0, r.removeEmojiReactions)(t.id, e.id, a) : u.default.show({
                        title: M.default.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
                        body: M.default.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
                        confirmText: M.default.Messages.YES_TEXT,
                        cancelText: M.default.Messages.NO_TEXT,
                        onConfirm: () => {
                            (0, r.removeEmojiReactions)(t.id, e.id, a)
                        }
                    })
                };
                return p && null != e.reactions && 0 !== e.reactions.length ? (0, a.jsx)(s.MenuItem, {
                    id: "remove-emoji-reactions",
                    label: M.default.Messages.REMOVE_EMOJI_REACTIONS,
                    color: "danger",
                    children: _.map(e => (0, a.jsx)(s.MenuItem, {
                        id: "remove-emoji-reactions-".concat(null !== (n = e.name) && void 0 !== n ? n : e.id),
                        label: null == e.id ? e.name : ":".concat(e.name, ":"),
                        action: t => A(t, e),
                        imageUrl: t => {
                            let {
                                isFocused: n
                            } = t;
                            return null != e.id ? c.default.getEmojiURL({
                                id: e.id,
                                animated: e.animated && (!I.enabled || n),
                                size: 18
                            }) : f.default.getURL(null !== (m = e.name) && void 0 !== m ? m : "")
                        },
                        dontCloseOnActionIfHoldingShiftKey: !0
                    }, null !== (g = e.name) && void 0 !== g ? g : e.id))
                }) : null
            }
        },
        167670: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("625149"),
                s = n("516358"),
                u = n("363396"),
                r = n("782340");

            function d(e, t) {
                let n = (0, l.useCanReplyToMessage)(t, e);
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "reply",
                    label: r.default.Messages.MESSAGE_ACTION_REPLY,
                    icon: s.default,
                    action: n => {
                        (0, u.replyToMessage)(t, e, n)
                    }
                }) : null
            }
        },
        913274: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("377114"),
                s = n("907566"),
                u = n("870190"),
                r = n("782340");

            function d(e) {
                return (0, u.canReportMessage)(e) ? (0, a.jsx)(i.MenuItem, {
                    id: "report",
                    label: r.default.Messages.REPORT_MESSAGE_MENU_OPTION,
                    action: () => (0, l.showReportModalForMessage)(e),
                    icon: s.default,
                    color: "danger"
                }) : null
            }
        },
        514705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("613387"),
                s = n("409058"),
                u = n("49111"),
                r = n("782340");

            function d(e, t) {
                return e.state !== u.MessageStates.SEND_FAILED ? null : (0, a.jsx)(i.MenuItem, {
                    id: "resend",
                    label: r.default.Messages.RESEND_MESSAGE,
                    action: () => (0, s.default)(t, e, void 0, l.default.getOptions(e.id))
                })
            }
        },
        321456: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("76629"),
                u = n("981957"),
                r = n("156690"),
                d = n("782340");

            function o(e, t) {
                let n = (0, i.useStateFromStores)([u.default], () => u.default.isSpeakingMessage(t.id, e.id), [t, e]);
                return "" === e.content ? null : (0, a.jsx)(l.MenuItem, {
                    id: "tts",
                    label: n ? d.default.Messages.STOP_SPEAKING_MESSAGE : d.default.Messages.SPEAK_MESSAGE,
                    icon: r.default,
                    action: () => n ? (0, s.stopSpeaking)() : (0, s.speakMessage)(t, e)
                })
            }
        },
        470254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("300322"),
                s = n("959097"),
                u = n("363396"),
                r = n("782340");

            function d(e, t) {
                let n = (0, l.useCanStartPublicThread)(t, e);
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "thread",
                    label: r.default.Messages.CREATE_THREAD,
                    icon: s.default,
                    action: () => {
                        (0, u.createThread)(t, e)
                    }
                }) : null
            }
        },
        678803: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("793441"),
                s = n("721618"),
                u = n("782340");

            function r(e, t) {
                return null != t && (0, l.isMediaObscured)({
                    type: l.ObscuredMediaTypes.Attachment,
                    media: t
                }, (0, l.shouldRedactExplicitContent)(e)) ? (0, a.jsx)(i.MenuItem, {
                    id: "report-image-false-positive",
                    label: u.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
                    action: () => {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: i
                            } = await n("723653");
                            return n => (0, a.jsx)(i, {
                                channelId: e.channel_id,
                                messageId: e.id,
                                attachmentId: t.id,
                                ...n
                            })
                        })
                    },
                    icon: s.default
                }, "report-image-false-positive") : null
            }
        },
        447651: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("404118"),
                s = n("689226"),
                u = n("467475"),
                r = n("599110"),
                d = n("773336"),
                o = n("286235"),
                c = n("50885"),
                f = n("146574"),
                E = n("49111"),
                M = n("782340");
            let m = "https://media.discordapp.net",
                g = /^.*\.discordapp\.net$/,
                I = "https://cdn.discordapp.com",
                S = "".concat(m, "/stickers"),
                p = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                _ = new Set(["jpg", "jpeg", "png"]),
                A = e => {
                    var t;
                    return null === (t = new URL(e).pathname.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()
                };

            function T(e, t) {
                l.default.show({
                    title: M.default.Messages.ERROR,
                    body: e
                }), o.default.captureException(t)
            }

            function h(e, t, n) {
                let l = (0, u.default)(null == t ? void 0 : t.getChannelId());
                if (l || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !d.isPlatformEmbedded || null == e || ! function(e) {
                        let t = new URL(e),
                            n = A(e);
                        return (g.test(t.hostname) || t.origin === I) && !e.startsWith(S) && !(0, s.isRoleIconAssetUrl)(e) && null != n && p.has(n)
                    }(e)) return null;
                let o = function(e) {
                        let t = new URL(e);
                        return t.origin === I ? e : t.origin === m ? I + t.pathname : (t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.set("quality", "lossless"), t.toString())
                    }(e),
                    h = async () => {
                        try {
                            await c.default.saveImage(o), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (e) {
                            r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            }), T(M.default.Messages.ERROR_SAVING_IMAGE, e)
                        }
                    }, v = async () => {
                        try {
                            await c.default.copyImage(o), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (e) {
                            T(M.default.Messages.ERROR_COPYING_IMAGE, e), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        }
                    };
                return [c.default.canCopyImage() && function(e) {
                    let t = A(e);
                    return null != t && _.has(t)
                }(e) ? (0, a.jsx)(i.MenuItem, {
                    id: "copy-image",
                    label: M.default.Messages.COPY_IMAGE_MENU_ITEM,
                    action: v
                }, "copy-image") : null, (0, a.jsx)(i.MenuItem, {
                    id: "save-image",
                    label: M.default.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: h
                }, "save-image")]
            }
        },
        625149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanReplyToMessage: function() {
                    return M
                },
                canReplyToMessage: function() {
                    return m
                }
            });
            var a = n("637612"),
                i = n("446674"),
                l = n("406043"),
                s = n("485684"),
                u = n("913491"),
                r = n("300322"),
                d = n("957255"),
                o = n("49111"),
                c = n("843455");

            function f(e, t, n) {
                let i;
                i = e.isPrivate() ? !e.isSystemDM() : n.can(c.Permissions.SEND_MESSAGES, e) && n.can(c.Permissions.READ_MESSAGE_HISTORY, e);
                let l = !(0, u.default)(t),
                    r = a.MessageTypesSets.REPLYABLE.has(t.type),
                    {
                        enabled: d
                    } = s.default.getCurrentConfig({
                        guildId: e.guild_id,
                        location: "51c7ba_1"
                    }, {
                        autoTrackExposure: t.type === a.MessageTypes.USER_JOIN
                    });
                return i && (d ? r : l)
            }

            function E(e, t, n, a, i) {
                let l = t.hasFlag(o.MessageFlags.EPHEMERAL),
                    s = t.state === o.MessageStates.SENT,
                    u = !e.isArchivedThread() || i;
                return n && s && !l && !a && u
            }

            function M(e, t) {
                var n;
                let a = (0, r.useCanUnarchiveThread)(e),
                    [, s] = (0, l.useCurrentUserCommunicationDisabled)(null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : void 0),
                    u = (0, i.useStateFromStores)([d.default], () => null != e && null != t && f(e, t, d.default));
                return null != e && null != t && E(e, t, u, s, a)
            }

            function m(e, t) {
                var n;
                let a = (0, r.canUnarchiveThread)(e),
                    i = f(e, t, d.default),
                    [, s] = (0, l.userCommunicationDisabled)(null !== (n = e.getGuildId()) && void 0 !== n ? n : void 0);
                return E(e, t, i, s, a)
            }
        },
        76629: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                speakText: function() {
                    return i
                },
                speakMessage: function() {
                    return l
                },
                speakingMessage: function() {
                    return s
                },
                stopSpeaking: function() {
                    return u
                },
                setSpeechRate: function() {
                    return r
                }
            });
            var a = n("913144");

            function i(e, t, n, i, l) {
                a.default.dispatch({
                    type: "SPEAK_TEXT",
                    text: e,
                    interrupt: t,
                    maxLength: n,
                    onStart: i,
                    onEnd: l
                })
            }

            function l(e, t) {
                a.default.dispatch({
                    type: "SPEAK_MESSAGE",
                    channel: e,
                    message: t
                })
            }

            function s(e, t) {
                a.default.dispatch({
                    type: "SPEAKING_MESSAGE",
                    channelId: e,
                    messageId: t
                })
            }

            function u() {
                a.default.dispatch({
                    type: "STOP_SPEAKING"
                })
            }

            function r(e) {
                a.default.dispatch({
                    type: "SET_TTS_SPEECH_RATE",
                    speechRate: e
                })
            }
        },
        981957: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                i = n("913144");
            let l = {
                    speechRate: 1,
                    currentMessage: null
                },
                s = l;
            class u extends a.default.DeviceSettingsStore {
                initialize(e) {
                    s = {
                        ...l,
                        ...null != e ? e : null
                    }
                }
                isSpeakingMessage(e, t) {
                    let {
                        currentMessage: n
                    } = s;
                    return null !== n && n.channelId === e && n.messageId === t
                }
                get currentMessage() {
                    return s.currentMessage
                }
                get speechRate() {
                    return s.speechRate
                }
                getUserAgnosticState() {
                    return s
                }
            }
            u.displayName = "TTSStore", u.persistKey = "TTSStore", u.migrations = [];
            var r = new u(i.default, __OVERLAY__ ? {} : {
                SPEAKING_MESSAGE: function(e) {
                    let {
                        messageId: t,
                        channelId: n
                    } = e;
                    s = {
                        ...s,
                        currentMessage: {
                            messageId: t,
                            channelId: n
                        }
                    }
                },
                STOP_SPEAKING: function() {
                    s = {
                        ...s,
                        currentMessage: null
                    }
                },
                SET_TTS_SPEECH_RATE: function(e) {
                    s = {
                        ...s,
                        speechRate: e.speechRate
                    }
                }
            })
        },
        259687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("906069"),
                s = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.522 17.523 22 12 22C6.477 22 2 17.522 2 12ZM6.375 12.8713C7.41054 12.8713 8.25 12.0318 8.25 10.9963C8.25 9.96073 7.41053 9.12128 6.375 9.12128C5.33947 9.12128 4.5 9.96073 4.5 10.9963C4.5 12.0318 5.33946 12.8713 6.375 12.8713ZM19.5 10.9963C19.5 12.0318 18.6605 12.8713 17.625 12.8713C16.5895 12.8713 15.75 12.0318 15.75 10.9963C15.75 9.96073 16.5895 9.12128 17.625 9.12128C18.6605 9.12128 19.5 9.96073 19.5 10.9963ZM10.4867 14.825C10.3576 14.3236 9.8465 14.0217 9.34508 14.1508C8.84365 14.2798 8.54179 14.791 8.67085 15.2924C9.0524 16.7748 10.397 17.8712 12 17.8712C13.603 17.8712 14.9476 16.7748 15.3291 15.2924C15.4582 14.791 15.1563 14.2798 14.6549 14.1508C14.1535 14.0217 13.6424 14.3236 13.5133 14.825C13.3398 15.4991 12.7268 15.9962 12 15.9962C11.2732 15.9962 10.6602 15.4991 10.4867 14.825Z"
                        })
                    })
                }, l.ReactionIcon)
        },
        516358: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("273481"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: l,
                        foreground: s
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            d: "M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z",
                            className: s,
                            fill: i
                        })
                    })
                }, l.ArrowAngleLeftUpIcon)
        },
        156690: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = "currentColor",
                    foreground: s,
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        className: s,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.99805 4.8C2.99805 3.8055 3.80445 3 4.79805 3H19.198C20.1925 3 20.998 3.8055 20.998 4.8V15.6C20.998 16.5936 20.1925 17.4 19.198 17.4H11.098L7.49805 21V17.4H4.79805C3.80445 17.4 2.99805 16.5936 2.99805 15.6V4.8ZM11.5737 5.16264C11.7336 5.00375 11.9739 4.95652 12.183 5.04208C12.3921 5.12708 12.5279 5.33098 12.5279 5.55487V14.444C12.5279 14.669 12.3921 14.8718 12.183 14.9579C11.9739 15.0435 11.7336 14.9963 11.5737 14.8374L9.1739 12.2217H7.4969C7.18945 12.2217 6.9379 11.9717 6.9379 11.6662V8.33273C6.9379 8.02772 7.18945 7.77716 7.4969 7.77716H9.1739L11.5737 5.16264ZM13.6459 7.22159V6.11044C15.8037 6.11044 17.5589 7.85549 17.5589 9.99944C17.5589 12.1445 15.8037 13.8884 13.6459 13.8884V12.7773C15.1871 12.7773 16.4409 11.5312 16.4409 9.99944C16.4409 8.46829 15.1871 7.22159 13.6459 7.22159ZM15.3229 9.99944C15.3229 9.08108 14.5705 8.33273 13.6459 8.33273V9.44387C13.9539 9.44387 14.2049 9.69332 14.2049 9.99944C14.2049 10.3056 13.9539 10.555 13.6459 10.555V11.6662C14.5705 11.6662 15.3229 10.9189 15.3229 9.99944Z"
                    })
                })
            }
        }
    }
]);