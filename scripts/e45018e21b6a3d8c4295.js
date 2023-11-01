(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64072"], {
        549990: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanGuildFeedFeatureChannel: function() {
                    return c
                }
            });
            var a = n("316693"),
                i = n("446674"),
                s = n("886484"),
                l = n("677315"),
                u = n("305961"),
                r = n("957255"),
                d = n("49111");
            let o = a.default.combine(d.Permissions.VIEW_CHANNEL, d.Permissions.MANAGE_MESSAGES, d.Permissions.READ_MESSAGE_HISTORY);

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.getGuildId(),
                    a = (0, i.useStateFromStores)([r.default], () => r.default.can(o, e), [e]),
                    c = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(n), [n]),
                    f = (0, l.useGuildHomeExperiment)(c, !1);
                return !!(a && null !== n && f && (null != e.parentChannelThreadType && d.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, s.isChannelAvailableInGuildFeed)(e)) || !1
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
                s = n("611221"),
                l = n("446674"),
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
                        entityType: s.GuildFeedItemTypes.FORUM_POST
                    }), [E, e]),
                    m = (0, l.useStateFromStores)([r.default], () => r.default.getIsItemFeatured(M), [M]),
                    g = (0, o.useIsThreadModerator)(e),
                    S = (0, c.useCanGuildFeedFeatureChannel)(e);
                return g && S ? m ? (0, a.jsx)(u.MenuItem, {
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
                            value: s,
                            timePeriod: l
                        } = i;
                        return (0, a.jsx)(u.MenuItem, {
                            id: "".concat(s),
                            label: (0, d.createFeatureItemsTimeLabel)(l),
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    FeatureForumPostConfirmationModal: i
                                } = await n.el("969715").then(n.bind(n, "969715"));
                                return n => (0, a.jsx)(i, {
                                    thread: e,
                                    guildId: E,
                                    expiresSeconds: s,
                                    timePeriod: l,
                                    options: t,
                                    ...n
                                })
                            })
                        }, s)
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
                    return l
                }
            });
            var a = n("884691"),
                i = n("448993"),
                s = n("695681");

            function l(e) {
                let {
                    onError: t,
                    onSuccess: n
                } = null != e ? e : {}, [l, u] = a.useState(!1), r = a.useCallback(async (e, a, r, d) => {
                    if (!l) {
                        u(!0);
                        try {
                            await (0, s.reportFalsePositive)(e, a, r, d), null == n || n()
                        } catch (n) {
                            let e = new i.APIError(n);
                            null == t || t(e)
                        } finally {
                            u(!1)
                        }
                    }
                }, [l, t, n]);
                return {
                    reportFalsePositive: r,
                    isReportFalsePositiveLoading: l
                }
            }
        },
        39393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useExplicitMediaAttachmentsForMessage: function() {
                    return l
                },
                useExplicitMediaEmbedsForMessage: function() {
                    return u
                }
            });
            var a = n("65597"),
                i = n("377253"),
                s = n("793441");
            let l = (e, t, n) => {
                    var l, u;
                    let r = (0, a.default)([i.default], () => i.default.getMessage(e, t));
                    if (null == r) return [];
                    let d = void 0 !== n ? e => e.id === n : e => (0, s.isMediaObscured)({
                        type: s.ObscuredMediaTypes.Attachment,
                        media: e
                    }, (0, s.shouldRedactExplicitContent)(r));
                    return null !== (u = null == r ? void 0 : null === (l = r.attachments) || void 0 === l ? void 0 : l.filter(d)) && void 0 !== u ? u : []
                },
                u = (e, t, n) => {
                    var l, u;
                    let r = (0, a.default)([i.default], () => i.default.getMessage(e, t));
                    if (null == r) return [];
                    let d = void 0 !== n ? e => e.id === n : e => (0, s.isMediaObscured)({
                        type: s.ObscuredMediaTypes.Embed,
                        media: e
                    }, (0, s.shouldRedactExplicitContent)(r));
                    return null !== (u = null == r ? void 0 : null === (l = r.embeds) || void 0 === l ? void 0 : l.filter(d)) && void 0 !== u ? u : []
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
                s = n("414456"),
                l = n.n(s),
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
                S = n("612920"),
                I = n("782340"),
                _ = n("629325");
            let p = e => {
                    let {
                        attachment: t
                    } = e, {
                        url: n,
                        description: i
                    } = t;
                    return null == n ? null : (0, a.jsx)(A, {
                        url: n,
                        description: i
                    })
                },
                T = e => {
                    var t, n, i;
                    let {
                        embed: s
                    } = e;
                    if (!S.SUPPORTED_EMBED_TYPES.has(s.type)) return null;
                    let l = void 0 !== s.video && s.type !== u.MessageEmbedTypes.GIFV ? s.video.url : null !== (i = null === (t = s.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== i ? i : null === (n = s.image) || void 0 === n ? void 0 : n.url;
                    return null == l ? null : (0, a.jsx)(A, {
                        url: l
                    })
                },
                A = e => {
                    let {
                        url: t,
                        description: n
                    } = e, i = (0, o.isVideoUrl)(t);
                    return (0, a.jsx)("div", {
                        className: _.mediaContainer,
                        children: i ? (0, a.jsx)(f.default, {
                            className: l(_.video, _.media),
                            controls: !0,
                            src: t
                        }) : (0, a.jsx)("img", {
                            className: l(_.image, _.media),
                            src: t,
                            alt: n
                        })
                    })
                };

            function h(e) {
                let {
                    channelId: t,
                    messageId: n,
                    attachmentId: s,
                    embedId: l,
                    transitionState: u,
                    onClose: o
                } = e, f = (0, c.useUID)(), S = (0, E.useIsEligibleForExplicitMediaRedaction)(), A = (0, g.useExplicitMediaAttachmentsForMessage)(t, n, s), h = (0, g.useExplicitMediaEmbedsForMessage)(t, n, l), v = i.useCallback(() => {
                    d.default.pop(), (0, r.showToast)((0, r.createToast)(I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, r.ToastType.CUSTOM)), o()
                }, [o]), {
                    reportFalsePositive: R,
                    isReportFalsePositiveLoading: C
                } = (0, m.useExplicitMediaActions)({
                    onSuccess: v,
                    onError: () => {
                        (0, r.showToast)((0, r.createToast)(I.default.Messages.ERROR_GENERIC_TITLE, r.ToastType.FAILURE))
                    }
                }), O = () => {
                    (0, M.trackMediaRedactionAction)({
                        action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                        channelId: t,
                        messageId: n
                    }), o()
                }, y = S && (A.length > 0 || h.length > 0);
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
                            className: _.closeButton
                        }), (0, a.jsx)(r.Heading, {
                            id: f,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: _.header,
                            children: I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: _.subheader,
                            children: I.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }), 1 === A.length && 0 === h.length ? (0, a.jsx)(p, {
                            attachment: A[0]
                        }) : null, 1 === h.length && 0 === A.length ? (0, a.jsx)(T, {
                            embed: h[0]
                        }) : null]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        children: [(0, a.jsx)(r.Button, {
                            className: _.button,
                            disabled: C,
                            submitting: C,
                            size: r.Button.Sizes.MEDIUM,
                            color: r.Button.Colors.BRAND,
                            onClick: () => {
                                R(t, n, A.map(e => e.id), h.map(e => e.id)), (0, M.trackMediaRedactionAction)({
                                    action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                                    channelId: t,
                                    messageId: n
                                })
                            },
                            children: I.default.Messages.CONFIRM
                        }), (0, a.jsx)(r.Button, {
                            className: _.button,
                            disabled: C,
                            color: r.Button.Colors.TRANSPARENT,
                            size: r.Button.Sizes.MEDIUM,
                            onClick: O,
                            children: I.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        485684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
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
            var s = i
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
            let s = {};
            class l extends a.default.Store {
                getOptions(e) {
                    return s[e]
                }
            }
            l.displayName = "SendMessageOptionsStore";
            var u = new l(i.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        sendMessageOptions: n
                    } = e;
                    null != n && (s[t.id] = n), null != t.nonce && t.nonce in s && delete s[t.nonce]
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
                s = n("677315"),
                l = n("957255"),
                u = n("49111");
            let r = a.default.combine(u.Permissions.VIEW_CHANNEL, u.Permissions.MANAGE_MESSAGES, u.Permissions.READ_MESSAGE_HISTORY);

            function d(e, t) {
                let n = e.getGuildId();
                return !!(null !== n && (0, s.canSeeGuildHome)(n) && u.ChannelTypesSets.GUILD_FEED_FEATURABLE_MESSAGES.has(e.type) && (0, i.isChannelAvailableInGuildFeed)(e) && (0, i.isMessageAvailableInGuildFeed)(t) && l.default.can(r, e)) || !1
            }
        },
        327054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("300322"),
                i = n("913491"),
                s = n("49111");

            function l(e, t, n) {
                let l = t.isSystemDM(),
                    u = !l && !(0, i.default)(e);
                return u && (n || t.isPrivate()) && (0, a.getIsActiveChannelOrUnarchivableThread)(t) && t.type !== s.ChannelTypes.GUILD_VOICE && t.type !== s.ChannelTypes.GUILD_STAGE_VOICE
            }
        },
        409058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("819689"),
                i = n("916565");

            function s(e, t, n) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (a.default.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
                    null != t.interactionData && null != s.applicationId && (0, i.retryCommandMessage)(t, e, s.applicationId);
                    return
                }
                let {
                    content: l,
                    tts: u,
                    flags: r,
                    nonce: d
                } = t;
                a.default.sendMessage(e.id, {
                    content: l,
                    tts: u,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                }, void 0, {
                    nonce: d,
                    flags: r,
                    ...s
                })
            }
        },
        363396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                configureJoin: function() {
                    return h
                },
                copyId: function() {
                    return v
                },
                copyLink: function() {
                    return R
                },
                deleteMessage: function() {
                    return C
                },
                editMessage: function() {
                    return O
                },
                markMessageUnread: function() {
                    return y
                },
                pinMessage: function() {
                    return N
                },
                publishMessage: function() {
                    return b
                },
                retrySendMessage: function() {
                    return x
                },
                showReactionsModal: function() {
                    return D
                },
                replyToMessage: function() {
                    return j
                },
                createThread: function() {
                    return G
                },
                goToThread: function() {
                    return P
                },
                markMessageAsReminder: function() {
                    return U
                },
                markMessageRemindersAsComplete: function() {
                    return F
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("828986"),
                l = n("819689"),
                u = n("249561"),
                r = n("550762"),
                d = n("592407");
            n("377114");
            var o = n("931318"),
                c = n("529805"),
                f = n("967241"),
                E = n("271938"),
                M = n("42203"),
                m = n("599110"),
                g = n("404008"),
                S = n("306160"),
                I = n("659500"),
                _ = n("613387"),
                p = n("456936"),
                T = n("409058"),
                A = n("49111");

            function h(e) {
                let t = e.getGuildId();
                null != t && d.default.open(t, A.GuildSettingsSections.OVERVIEW)
            }

            function v(e, t, n) {
                (0, S.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
            }

            function R(e, t) {
                m.default.track(A.AnalyticEvents.MESSAGE_LINK_COPIED, {
                    message_id: t.id,
                    channel: t.channel_id
                }), (0, S.copy)((0, g.getChannelPermalink)(e.guild_id, e.id, t.id))
            }

            function C(e, t, n) {
                t.state === A.MessageStates.SEND_FAILED || n.shiftKey ? l.default.deleteMessage(e.id, t.id, t.state === A.MessageStates.SEND_FAILED) : u.default.confirmDelete(e, t)
            }

            function O(e, t) {
                l.default.startEditMessage(e.id, t.id, t.content)
            }

            function y(e, t) {
                (0, p.default)(e.id, t.id)
            }

            function N(e, t, n) {
                if (!1 === t.pinned) {
                    n.shiftKey ? s.default.pinMessage(e, t.id) : u.default.confirmPin(e, t);
                    return
                }
                n.shiftKey ? s.default.unpinMessage(e, t.id) : u.default.confirmUnpin(e, t)
            }

            function b(e, t) {
                (0, r.default)(e.id, t.id)
            }

            function x(e, t) {
                (0, T.default)(e, t, void 0, _.default.getOptions(t.id))
            }

            function D(e, t) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("57155").then(n.bind(n, "57155"));
                    return n => (0, a.jsx)(e, {
                        ...n,
                        message: t
                    })
                })
            }

            function j(e, t, n) {
                let a = e.isPrivate(),
                    i = t.author.id === E.default.getId();
                (0, c.createPendingReply)({
                    channel: e,
                    message: t,
                    shouldMention: !n.shiftKey && !i,
                    showMentionToggle: !a && !i
                }), I.ComponentDispatch.dispatchToLastSubscribed(A.ComponentActions.TEXTAREA_FOCUS)
            }

            function G(e, t) {
                (0, f.openThreadSidebarForCreating)(e, t, "Message")
            }

            function P(e, t) {
                let n = M.default.getChannel(t.id);
                null != n && (0, f.openThreadSidebarForViewing)(n)
            }

            function U(e, t) {
                (0, o.addMessageReminders)(t)
            }

            function F(e, t) {
                (0, o.completeMessageReminders)(t.id)
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
                s = n("77078"),
                l = n("272030"),
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
                S = n("126423"),
                I = n("175537"),
                _ = n("485598"),
                p = n("518155"),
                T = n("355669"),
                A = n("718381"),
                h = n("442711"),
                v = n("702495"),
                R = n("875834"),
                C = n("780657"),
                O = n("204462"),
                y = n("487051"),
                N = n("815384"),
                b = n("263879"),
                x = n("604179"),
                D = n("167670"),
                j = n("913274"),
                G = n("514705"),
                P = n("321456"),
                U = n("470254"),
                F = n("678803"),
                L = n("782340");

            function k(e) {
                var t, n;
                let a, s, u, r, {
                        channel: d,
                        message: o,
                        target: c,
                        attachment: f,
                        shouldHideMediaOptions: E,
                        onSelect: M,
                        onHeightUpdate: m
                    } = e,
                    g = c,
                    S = c.getAttribute("data-type"),
                    I = c.getAttribute("data-id"),
                    _ = c.getAttribute("data-name");
                if (null != f) s = a = u = f.url;
                else
                    for (;
                        (0, i.isElement)(g);)(0, i.isElement)(g, HTMLImageElement) && null != g.src && (s = g.src), (0, i.isElement)(g, HTMLAnchorElement) && null != g.href && (a = g.href, r = g.textContent, null == s && "img" === g.getAttribute("data-role") && (s = a, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (u = g.getAttribute("data-safe-src")))), g = g.parentNode;
                let p = null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "";
                return w({
                    message: o,
                    channel: d,
                    attachment: f,
                    textSelection: p,
                    favoriteableType: S,
                    favoriteableId: I,
                    favoriteableName: _,
                    itemHref: a,
                    itemSrc: s,
                    itemSafeSrc: u,
                    itemTextContent: r,
                    canReport: !0,
                    onHeightUpdate: m,
                    onSelect: M,
                    onClose: l.closeContextMenu,
                    navId: "message",
                    ariaLabel: L.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    shouldHideMediaOptions: E
                })
            }

            function w(e) {
                let {
                    message: t,
                    channel: n,
                    attachment: i,
                    textSelection: l,
                    favoriteableType: k,
                    favoriteableId: w,
                    favoriteableName: K,
                    itemHref: B,
                    itemSrc: V,
                    itemSafeSrc: H,
                    itemTextContent: Y,
                    canReport: z,
                    onHeightUpdate: X,
                    onSelect: W,
                    onClose: J,
                    navId: q,
                    ariaLabel: $,
                    shouldHideMediaOptions: Q = !1
                } = e, {
                    enabled: Z,
                    hasTwoButtonEntryPoint: ee,
                    hasBurstToggle: et
                } = (0, u.useBurstReactionsExperiment)(n.getGuildId()), en = (0, o.default)(l), ea = (0, E.default)(l), ei = (0, O.default)(t, n), es = (0, I.default)(t, n), el = (0, I.default)(t, n, m.ReactionTypes.BURST, ee), eu = (0, h.default)(t, n), er = (0, C.default)(t, n), ed = (0, v.default)({
                    type: k,
                    id: w,
                    name: K
                }), eo = (0, G.default)(t, n), ec = (0, R.default)(t, n), ef = (0, y.default)(t), eE = (0, _.default)(t, n), eM = (0, p.default)(t, n), em = (0, b.default)(t, n), eg = (0, x.default)(t, n), eS = (0, A.default)(t, n), eI = (0, j.default)(t), e_ = (0, P.default)(t, n), ep = (0, f.default)(null != B ? B : V, Y, t, {
                    shouldHideMediaOptions: Q
                }), eT = (0, c.default)(H, t, {
                    shouldHideMediaOptions: Q
                }), eA = (0, F.default)(t, i), eh = (0, d.default)({
                    id: t.id,
                    label: L.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(t.channel_id, "-").concat(t.id)
                }), ev = (0, D.default)(t, n), eR = (0, U.default)(t, n), eC = (0, S.default)(t, n, {
                    hoist: !0
                }), eO = (0, g.default)(l, n.getGuildId()), ey = (0, N.default)(t), eN = (0, T.default)(t), eb = (0, M.default)({
                    commandType: r.ApplicationCommandType.MESSAGE,
                    commandTargetId: t.id,
                    channel: n,
                    guildId: void 0,
                    onShow: X
                });
                return (0, a.jsxs)(s.Menu, {
                    navId: q,
                    onClose: J,
                    "aria-label": $,
                    onSelect: W,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: en
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: ea
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: ["" === l ? ei : null, es, Z && !et && el, ef, eu, er, ed, ev, eR, eN, eb, eo, ec, ey, eE, eM, e_, eC, eg, em, eS, z && eI]
                    }), null != eO && (0, a.jsx)(s.MenuGroup, {
                        children: eO
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [eT, eA]
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: ep
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: eh
                    })]
                })
            }
        },
        761136: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983"),
                i = n("884691"),
                s = n("77078"),
                l = n("272030"),
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
                S = n("490291");
            let I = m.AutomodTriggerType.KEYWORD;

            function _(e, t) {
                let {
                    perGuildMaxCount: n
                } = r.triggerConfigs[I], {
                    isLoading: m,
                    saveRule: _
                } = (0, o.useAutomodEditingRuleActions)(), {
                    createNewEditingRule: p
                } = (0, o.useAutomodEditingRuleState)(), [T, A] = i.useState(!1), [h, v] = (0, u.useSyncAutomodRules)(t), {
                    rulesByTriggerType: R,
                    updateRule: C
                } = (0, u.useAutomodRulesList)(t), O = i.useMemo(() => {
                    var e;
                    return null !== (e = R[I]) && void 0 !== e ? e : []
                }, [R]), y = 0 === O.length, N = n > O.length && !y, b = i.useMemo(() => (0, d.canCurrentUserManageMessageFilters)(t), [t]);
                if (!b || null == e || 0 === e.length || null == t) return null;
                let x = e.split(" ").length,
                    D = () => {
                        null != t && ((0, l.closeContextMenu)(), E.default.open(t, M.GuildSettingsSections.GUILD_AUTOMOD), setTimeout(() => {
                            p(t, I, {
                                triggerMetadata: {
                                    keywordFilter: [e],
                                    regexPatterns: [],
                                    allowList: []
                                }
                            })
                        }, 400))
                    },
                    j = async t => {
                        var n, a;
                        (0, l.closeContextMenu)();
                        let i = await (0, f.confirmAddKeyword)(t.name, e);
                        if (!i) return;
                        let s = {
                            ...t,
                            triggerMetadata: {
                                ...t.triggerMetadata,
                                keywordFilter: [...null !== (a = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== a ? a : [], e]
                            }
                        };
                        await _(s, O), C(s)
                    }, G = (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(s.MenuItem, {
                            id: "automod-rules-loading",
                            label: g.default.Messages.LOADING
                        })
                    });
                return !h && (G = (0, a.jsxs)(a.Fragment, {
                    children: [y && (0, a.jsx)(s.MenuItem, {
                        id: "add-first-rule",
                        label: g.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                        action: D,
                        disabled: m
                    }), O.map(e => {
                        let t = (0, r.getAvailableActionTypes)(I).reduce((t, n) => {
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
                        return (0, a.jsx)(s.MenuRadioItem, {
                            id: e.id,
                            label: e.name,
                            subtext: (0, a.jsx)(s.Text, {
                                color: "text-muted",
                                className: S.actionTextHeader,
                                variant: "text-xs/normal",
                                children: t.slice(2)
                            }),
                            group: "automod-rule-selection",
                            checked: !1,
                            disabled: m,
                            action: () => j(e)
                        }, e.id)
                    }), N && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.MenuSeparator, {}), (0, a.jsx)(s.MenuItem, {
                            id: "add-another-rule",
                            label: g.default.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                            action: D,
                            disabled: m
                        })]
                    })]
                })), (0, a.jsx)(s.MenuItem, {
                    id: "guild-automod-add-selection",
                    label: g.default.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
                        keywordCount: x
                    }),
                    onFocus: () => {
                        !T && (A(!0), v())
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
                s = n("446674"),
                l = n("77078"),
                u = n("530101"),
                r = n("185014"),
                d = n("886484"),
                o = n("901205"),
                c = n("782340");

            function f(e, t, f) {
                let E = t.getGuildId(),
                    M = (0, s.useStateFromStores)([r.default], () => null !== E && r.default.getIsItemFeatured({
                        guildId: E,
                        entity: e,
                        entityType: i.GuildFeedItemTypes.MESSAGE
                    }), [e, E]),
                    m = (0, u.default)(t, f);
                if (e.isFirstMessageInForumPost(t)) return m;
                let g = (0, o.canGuildFeedFeatureMessage)(t, e);
                return g ? M ? (0, a.jsx)(l.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: c.default.Messages.GUILD_FEED_UNFEATURE_MESSAGE,
                    action: () => null == E ? null : (0, l.openModalLazy)(async () => {
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
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "guild-feed-feature",
                    label: c.default.Messages.GUILD_FEED_FEATURE_MESSAGE,
                    children: (0, d.getFeatureItemsTimes)().map(i => {
                        let {
                            value: s,
                            timePeriod: u
                        } = i;
                        return (0, a.jsx)(l.MenuItem, {
                            id: "".concat(s),
                            label: (0, d.createFeatureItemsTimeLabel)(u),
                            action: () => null == E ? null : (0, l.openModalLazy)(async () => {
                                let {
                                    FeatureMessageConfirmationModal: i
                                } = await n.el("969715").then(n.bind(n, "969715"));
                                return n => (0, a.jsx)(i, {
                                    ...n,
                                    message: e,
                                    channel: t,
                                    guildId: E,
                                    expiresSeconds: s,
                                    timePeriod: u,
                                    options: f
                                })
                            })
                        }, s)
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
                s = n("414456"),
                l = n.n(s),
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
                S = n("697218"),
                I = n("79945"),
                _ = n("491614"),
                p = n("790950"),
                T = n("216422"),
                A = n("315102"),
                h = n("659500"),
                v = n("402671"),
                R = n("764364"),
                C = n("590527"),
                O = n("692171"),
                y = n("875978"),
                N = n("255135"),
                b = n("49111"),
                x = n("958706"),
                D = n("646718"),
                j = n("782340"),
                G = n("221215");

            function P(e, t) {
                var n, s, P, U;
                let F = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.ReactionTypes.NORMAL,
                    L = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    {
                        reducedMotion: k
                    } = i.useContext(r.AccessibilityPreferencesContext),
                    w = (0, M.useIsActiveChannelOrUnarchivableThread)(t),
                    K = (0, u.useStateFromStores)([g.default], () => (t.isPrivate() || g.default.can(b.Permissions.ADD_REACTIONS, t)) && w, [t, w]),
                    B = (0, d.useEmojiInPriorityOrder)(t.getGuildId()),
                    V = (0, u.useStateFromStores)([O.default], () => O.default.remainingBurstCurrency),
                    {
                        viewAndUseEnabled: H
                    } = (0, o.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }),
                    Y = F === y.ReactionTypes.BURST,
                    z = Y && V < 1,
                    X = S.default.getCurrentUser(),
                    W = (0, R.isPremium)(X);
                if (!m.RenderReactions.getSetting() || !K || e.type === b.MessageTypes.GUILD_INVITE_REMINDER) return null;
                let J = B.filter(e => !v.default.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: x.EmojiIntention.REACTION,
                    canViewAndUsePackEmoji: H
                })).slice(0, 12).map((i, l) => (0, a.jsx)(r.MenuItem, {
                    color: Y ? "premium-gradient" : "default",
                    id: null !== (P = null !== (s = null !== (n = i.id) && void 0 !== n ? n : i.optionallyDiverseSequence) && void 0 !== s ? s : i.name) && void 0 !== P ? P : ":".concat(i.name, ":"),
                    label: null == i.id ? i.name : ":".concat(i.name, ":"),
                    disabled: z,
                    imageUrl: e => {
                        let {
                            isFocused: t
                        } = e;
                        return null != i.id ? A.default.getEmojiURL({
                            id: i.id,
                            animated: i.animated && (!k.enabled || t),
                            size: 18
                        }) : v.default.getURL(null !== (U = i.optionallyDiverseSequence) && void 0 !== U ? U : "")
                    },
                    action: () => {
                        (0, f.addReaction)(t.id, e.id, (0, E.toReactionEmoji)(i), void 0, {
                            burst: Y
                        })
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                }, l));
                return (0, a.jsx)(r.MenuItem, {
                    id: "add-reaction-".concat(F),
                    icon: Y && !W ? T.default : void 0,
                    label: Y ? W || V > 0 ? j.default.Messages.ADD_BURST_REACTION : j.default.Messages.GET_SUPER_REACTIONS : j.default.Messages.ADD_REACTION,
                    action: () => {
                        if (z) {
                            if (W) {
                                (0, N.openOutOfBurstsModal)();
                                return
                            }(0, c.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: D.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                    page: null != t.getGuildId() ? b.AnalyticsPages.GUILD_CHANNEL : b.AnalyticsPages.DM_CHANNEL,
                                    section: (0, E.getBurstAnalyticsSection)(t),
                                    object: b.AnalyticsObjects.REACTION_RIGHT_CLICK_MENU_UPSELL
                                }
                            });
                            return
                        }
                        if (Y && !L) {
                            (0, C.toggleBurstReactionPicker)(!0), h.ComponentDispatch.dispatchKeyed(b.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
                                emojiPicker: !0,
                                emojiBurstPicker: !1
                            });
                            return
                        }(0, C.toggleBurstReactionPicker)(Y), h.ComponentDispatch.dispatchKeyed(b.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
                            emojiPicker: !Y,
                            emojiBurstPicker: Y
                        })
                    },
                    color: Y ? "premium-gradient" : "default",
                    subMenuClassName: l({
                        [G.isBurstReactionPicker]: Y
                    }),
                    children: Y && V < 1 ? null : (0, a.jsxs)(a.Fragment, {
                        children: [Y ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(r.MenuItem, {
                                id: "add-burst-reaction-count",
                                navigable: !1,
                                render: () => (0, a.jsxs)("div", {
                                    className: G.burstCount,
                                    children: [(0, a.jsx)(_.default, {
                                        width: 16,
                                        height: 16,
                                        className: G.burstIcon
                                    }), (0, a.jsx)(r.Heading, {
                                        variant: "heading-sm/bold",
                                        color: "text-normal",
                                        children: j.default.Messages.SUPER_REACTIONS_LEFT_WITH_PLURAL.format({
                                            count: V
                                        })
                                    })]
                                })
                            }), (0, a.jsx)(r.MenuSeparator, {})]
                        }) : null, J, (0, a.jsx)(r.MenuSeparator, {}), (0, a.jsx)(r.MenuItem, {
                            color: Y ? "premium-gradient" : "default",
                            id: "other-reactions",
                            label: j.default.Messages.VIEW_MORE,
                            icon: Y ? p.default : I.default,
                            disabled: z,
                            action: () => {
                                if (Y && !L) {
                                    (0, C.toggleBurstReactionPicker)(!0), h.ComponentDispatch.dispatchKeyed(b.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
                                        emojiPicker: !0,
                                        emojiBurstPicker: !1
                                    });
                                    return
                                }(0, C.toggleBurstReactionPicker)(Y), h.ComponentDispatch.dispatchKeyed(b.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
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
                s = n("957255"),
                l = n("85175"),
                u = n("363396"),
                r = n("49111"),
                d = n("782340");

            function o(e, t) {
                let n = t.getGuildId(),
                    o = null != n && (e.type === r.MessageTypes.USER_JOIN || e.type === r.MessageTypes.GUILD_INVITE_REMINDER) && s.default.canWithPartialContext(r.Permissions.MANAGE_GUILD, {
                        guildId: n
                    });
                return o ? (0, a.jsx)(i.MenuItem, {
                    id: "configure",
                    label: d.default.Messages.CONFIGURE,
                    icon: l.default,
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
                s = n("413709"),
                l = n("306160"),
                u = n("782340");

            function r(e) {
                return l.SUPPORTS_COPY ? (0, a.jsx)(i.MenuItem, {
                    id: "copy-text",
                    label: u.default.Messages.COPY_TEXT,
                    icon: s.default,
                    action: () => {
                        (0, l.copy)(e.content)
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
                s = n("77078"),
                l = n("819689"),
                u = n("300322"),
                r = n("271938"),
                d = n("987772"),
                o = n("61400"),
                c = n("782340");

            function f(e, t) {
                let n = (0, i.useStateFromStores)([r.default], () => r.default.getId()),
                    f = (0, u.useIsActiveChannelOrUnarchivableThread)(t),
                    E = (0, u.useIsNonModInLockedThread)(t);
                return (0, o.default)(e, n) && f && !E ? (0, a.jsx)(s.MenuItem, {
                    id: "edit",
                    label: c.default.Messages.EDIT_MESSAGE,
                    action: () => l.default.startEditMessage(t.id, e.id, e.content),
                    icon: d.default
                }) : null
            }
        },
        702495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983"),
                i = n("884691"),
                s = n("446674"),
                l = n("77078"),
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
                S = n("24373"),
                I = n("49111"),
                _ = n("782340");

            function p(e) {
                return c.default.getByName(e.replace(/(^:|:$)/g, ""))
            }

            function T(e) {
                let {
                    type: t,
                    id: n,
                    name: T,
                    isInExpressionPicker: A = !1
                } = e, {
                    location: h
                } = (0, r.useAnalyticsContext)(), v = i.useMemo(() => ({
                    ...h,
                    section: A ? I.AnalyticsSections.EXPRESSION_PICKER : I.AnalyticsSections.CONTEXT_MENU
                }), [h, A]), R = (0, m.useFavoriteStickerIds)(), C = (0, s.useStateFromStores)([g.default], () => t === f.PickerContextMenuDataTypes.STICKER && null != n ? g.default.getStickerById(n) : null), O = null != C && R.includes(C.id), y = (0, s.useStateFromStores)([o.default], () => {
                    if (t === f.PickerContextMenuDataTypes.EMOJI) {
                        if (null != n) return o.default.getDisambiguatedEmojiContext().getById(n);
                        if (null != T) {
                            var e;
                            return null !== (e = p(T)) && void 0 !== e ? e : p(c.default.convertSurrogateToName(T))
                        }
                    }
                }), N = (0, d.useIsFavoriteEmoji)(null, y);
                if (null != C && t === f.PickerContextMenuDataTypes.STICKER) return (0, S.isGuildSticker)(C) && !(0, S.isAvailableGuildSticker)(C) ? null : O ? (0, a.jsx)(l.MenuItem, {
                    id: "unfavorite",
                    action: () => (0, E.unfavoriteSticker)(C.id),
                    label: _.default.Messages.UNFAVORITE_ITEM
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "favorite",
                    action: () => {
                        (0, M.trackStickerFavorited)({
                            sticker: C,
                            location: {
                                ...v,
                                object: I.AnalyticsObjects.STICKER
                            }
                        }), (0, E.favoriteSticker)(null == C ? void 0 : C.id)
                    },
                    label: _.default.Messages.FAVORITE_ITEM
                });
                if (null != y && t === f.PickerContextMenuDataTypes.EMOJI) return N ? (0, a.jsx)(l.MenuItem, {
                    id: "unfavorite",
                    action: () => (0, u.unfavoriteEmoji)(y),
                    label: _.default.Messages.UNFAVORITE_ITEM
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "favorite",
                    action: () => {
                        (0, d.trackEmojiFavorited)({
                            emoji: y,
                            location: {
                                ...v,
                                object: I.AnalyticsObjects.EMOJI
                            }
                        }), (0, u.favoriteEmoji)(y)
                    },
                    label: _.default.Messages.FAVORITE_ITEM
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
                s = n("77078"),
                l = n("828986"),
                u = n("249561"),
                r = n("957255"),
                d = n("566998"),
                o = n("327054"),
                c = n("49111"),
                f = n("782340");

            function E(e, t) {
                let n = (0, i.useStateFromStores)([r.default], () => r.default.can(c.Permissions.MANAGE_MESSAGES, t), [t]);
                return e.state !== c.MessageStates.SEND_FAILED && (0, o.default)(e, t, n) ? !1 === e.pinned ? (0, a.jsx)(s.MenuItem, {
                    id: "pin",
                    action: function(n) {
                        n.shiftKey ? l.default.pinMessage(t, e.id) : u.default.confirmPin(t, e)
                    },
                    label: f.default.Messages.PIN_MESSAGE,
                    icon: d.default
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "unpin",
                    action: function(n) {
                        n.shiftKey ? l.default.unpinMessage(t, e.id) : u.default.confirmUnpin(t, e)
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
                s = n.n(i),
                l = n("446674"),
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
                S = n("49111"),
                I = n("958706"),
                _ = n("782340"),
                p = n("791507");
            let T = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

            function A(e) {
                var t;
                let {
                    emoji: n,
                    isFocused: i
                } = e, {
                    animated: l,
                    src: r,
                    surrogates: d
                } = n;
                return null == r && null != n.id ? r = m.default.getEmojiURL({
                    id: n.id,
                    animated: !!l,
                    size: 20
                }) : null == r && (r = g.default.getURL(d)), (0, a.jsx)(u.Tooltip, {
                    text: n.allNamesString,
                    hideOnClick: !0,
                    spacing: 16,
                    forceOpen: i,
                    children: e => (0, a.jsx)("div", {
                        "aria-label": _.default.Messages.ADD_REACTION_NAMED.format({
                            emojiName: n.name
                        }),
                        className: s(p.button, {
                            [p.focused]: i
                        }),
                        ...e,
                        children: null == r || "" === r.trim() ? (0, a.jsx)("span", {
                            className: s("emoji", "emoji-text", p.icon),
                            ...e,
                            children: d
                        }) : (0, a.jsx)("img", {
                            className: p.icon,
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
                        viewAndUseEnabled: s
                    } = (0, d.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }),
                    m = i.filter(e => {
                        var n;
                        return !(e.useSpriteSheet && T.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : "") >= 0) && !g.default.isEmojiPremiumLocked({
                            emoji: e,
                            channel: t,
                            intention: I.EmojiIntention.REACTION,
                            canViewAndUsePackEmoji: s
                        })
                    });
                m.length > 4 && (m.length = 4);
                let _ = E.RenderReactions.useSetting(),
                    h = (0, f.useIsActiveChannelOrUnarchivableThread)(t),
                    v = (0, l.useStateFromStores)([M.default], () => _ && h && (t.isPrivate() || M.default.can(S.Permissions.ADD_REACTIONS, t)), [t, h, _]),
                    R = n => {
                        (0, o.addReaction)(t.id, e.id, (0, c.toReactionEmoji)(n), void 0)
                    };
                return v && m.length > 0 ? (0, a.jsx)(u.MenuGroup, {
                    className: p.wrapper,
                    children: m.map((e, t) => (0, a.jsx)(u.MenuItem, {
                        id: "quickreact-".concat(null !== (n = e.id) && void 0 !== n ? n : t),
                        render: t => {
                            let {
                                isFocused: n
                            } = t;
                            return (0, a.jsx)(A, {
                                emoji: e,
                                isFocused: n
                            })
                        },
                        action: () => R(e),
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
                s = n("259687"),
                l = n("782340");

            function u(e) {
                return null == e.reactions || 0 === e.reactions.length ? null : (0, a.jsx)(i.MenuItem, {
                    id: "reactions",
                    label: l.default.Messages.VIEW_REACTIONS,
                    icon: s.default,
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
                s = n.n(i),
                l = n("446674"),
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
                }), n = (0, l.useStateFromStores)([o.default], () => null != o.default.getMessageReminders().find(t => t.messageId === e.id)), i = m(e, t => (0, r.addMessageReminders)(e, s().add(t, "millisecond").toDate()));
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
                s = n("77078"),
                l = n("404118"),
                u = n("166257"),
                r = n("300322"),
                d = n("957255"),
                o = n("49111"),
                c = n("782340");

            function f(e, t) {
                let n = (0, r.useIsActiveChannelOrUnarchivableThread)(t),
                    f = (0, i.useStateFromStores)([d.default], () => d.default.can(o.Permissions.MANAGE_MESSAGES, t) && n, [t, n]);
                return f && null != e.reactions && 0 !== e.reactions.length ? (0, a.jsx)(s.MenuItem, {
                    id: "remove-reactions",
                    label: c.default.Messages.REMOVE_ALL_REACTIONS,
                    action: function(n) {
                        n.shiftKey ? (0, u.removeAllReactions)(t.id, e.id) : l.default.show({
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
                s = n("446674"),
                l = n("77078"),
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
                    reducedMotion: S
                } = i.useContext(l.AccessibilityPreferencesContext), I = (0, d.useIsActiveChannelOrUnarchivableThread)(t), _ = (0, s.useStateFromStores)([o.default], () => o.default.can(E.Permissions.MANAGE_MESSAGES, t) && I, [t, I]), p = e.reactions.reduce((e, t) => {
                    var n;
                    return (null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji]
                }, []), T = (n, a) => {
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
                return _ && null != e.reactions && 0 !== e.reactions.length ? (0, a.jsx)(l.MenuItem, {
                    id: "remove-emoji-reactions",
                    label: M.default.Messages.REMOVE_EMOJI_REACTIONS,
                    color: "danger",
                    children: p.map(e => (0, a.jsx)(l.MenuItem, {
                        id: "remove-emoji-reactions-".concat(null !== (n = e.name) && void 0 !== n ? n : e.id),
                        label: null == e.id ? e.name : ":".concat(e.name, ":"),
                        action: t => T(t, e),
                        imageUrl: t => {
                            let {
                                isFocused: n
                            } = t;
                            return null != e.id ? c.default.getEmojiURL({
                                id: e.id,
                                animated: e.animated && (!S.enabled || n),
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
                s = n("625149"),
                l = n("516358"),
                u = n("363396"),
                r = n("782340");

            function d(e, t) {
                let n = (0, s.useCanReplyToMessage)(t, e);
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "reply",
                    label: r.default.Messages.MESSAGE_ACTION_REPLY,
                    icon: l.default,
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
                s = n("377114"),
                l = n("907566"),
                u = n("870190"),
                r = n("782340");

            function d(e) {
                return (0, u.canReportMessage)(e) ? (0, a.jsx)(i.MenuItem, {
                    id: "report",
                    label: r.default.Messages.REPORT_MESSAGE_MENU_OPTION,
                    action: () => (0, s.showReportModalForMessage)(e),
                    icon: l.default,
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
                s = n("613387"),
                l = n("409058"),
                u = n("49111"),
                r = n("782340");

            function d(e, t) {
                return e.state !== u.MessageStates.SEND_FAILED ? null : (0, a.jsx)(i.MenuItem, {
                    id: "resend",
                    label: r.default.Messages.RESEND_MESSAGE,
                    action: () => (0, l.default)(t, e, void 0, s.default.getOptions(e.id))
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
                s = n("77078"),
                l = n("76629"),
                u = n("981957"),
                r = n("156690"),
                d = n("782340");

            function o(e, t) {
                let n = (0, i.useStateFromStores)([u.default], () => u.default.isSpeakingMessage(t.id, e.id), [t, e]);
                return "" === e.content ? null : (0, a.jsx)(s.MenuItem, {
                    id: "tts",
                    label: n ? d.default.Messages.STOP_SPEAKING_MESSAGE : d.default.Messages.SPEAK_MESSAGE,
                    icon: r.default,
                    action: () => n ? (0, l.stopSpeaking)() : (0, l.speakMessage)(t, e)
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
                s = n("300322"),
                l = n("959097"),
                u = n("363396"),
                r = n("782340");

            function d(e, t) {
                let n = (0, s.useCanStartPublicThread)(t, e);
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "thread",
                    label: r.default.Messages.CREATE_THREAD,
                    icon: l.default,
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
                s = n("793441"),
                l = n("721618"),
                u = n("782340");

            function r(e, t) {
                return null != t && (0, s.isMediaObscured)({
                    type: s.ObscuredMediaTypes.Attachment,
                    media: t
                }, (0, s.shouldRedactExplicitContent)(e)) ? (0, a.jsx)(i.MenuItem, {
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
                    icon: l.default
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
                s = n("404118"),
                l = n("689226"),
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
                S = "https://cdn.discordapp.com",
                I = "".concat(m, "/stickers"),
                _ = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                p = new Set(["jpg", "jpeg", "png"]),
                T = e => {
                    var t;
                    return null === (t = new URL(e).pathname.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()
                };

            function A(e, t) {
                s.default.show({
                    title: M.default.Messages.ERROR,
                    body: e
                }), o.default.captureException(t)
            }

            function h(e, t, n) {
                let s = (0, u.default)(null == t ? void 0 : t.getChannelId());
                if (s || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !d.isPlatformEmbedded || null == e || ! function(e) {
                        let t = new URL(e),
                            n = T(e);
                        return (g.test(t.hostname) || t.origin === S) && !e.startsWith(I) && !(0, l.isRoleIconAssetUrl)(e) && null != n && _.has(n)
                    }(e)) return null;
                let o = function(e) {
                        let t = new URL(e);
                        return t.origin === S ? e : t.origin === m ? S + t.pathname : (t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.set("quality", "lossless"), t.toString())
                    }(e),
                    h = async () => {
                        try {
                            await c.default.saveImage(o), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (e) {
                            r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            }), A(M.default.Messages.ERROR_SAVING_IMAGE, e)
                        }
                    }, v = async () => {
                        try {
                            await c.default.copyImage(o), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (e) {
                            A(M.default.Messages.ERROR_COPYING_IMAGE, e), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        }
                    };
                return [c.default.canCopyImage() && function(e) {
                    let t = T(e);
                    return null != t && p.has(t)
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
                s = n("406043"),
                l = n("485684"),
                u = n("913491"),
                r = n("300322"),
                d = n("957255"),
                o = n("49111"),
                c = n("843455");

            function f(e, t, n) {
                let i;
                i = e.isPrivate() ? !e.isSystemDM() : n.can(c.Permissions.SEND_MESSAGES, e) && n.can(c.Permissions.READ_MESSAGE_HISTORY, e);
                let s = !(0, u.default)(t),
                    r = a.MessageTypesSets.REPLYABLE.has(t.type),
                    {
                        enabled: d
                    } = l.default.getCurrentConfig({
                        guildId: e.guild_id,
                        location: "51c7ba_1"
                    }, {
                        autoTrackExposure: t.type === a.MessageTypes.USER_JOIN
                    });
                return i && (d ? r : s)
            }

            function E(e, t, n, a, i) {
                let s = t.hasFlag(o.MessageFlags.EPHEMERAL),
                    l = t.state === o.MessageStates.SENT,
                    u = !e.isArchivedThread() || i;
                return n && l && !s && !a && u
            }

            function M(e, t) {
                var n;
                let a = (0, r.useCanUnarchiveThread)(e),
                    [, l] = (0, s.useCurrentUserCommunicationDisabled)(null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : void 0),
                    u = (0, i.useStateFromStores)([d.default], () => null != e && null != t && f(e, t, d.default));
                return null != e && null != t && E(e, t, u, l, a)
            }

            function m(e, t) {
                var n;
                let a = (0, r.canUnarchiveThread)(e),
                    i = f(e, t, d.default),
                    [, l] = (0, s.userCommunicationDisabled)(null !== (n = e.getGuildId()) && void 0 !== n ? n : void 0);
                return E(e, t, i, l, a)
            }
        },
        76629: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                speakText: function() {
                    return i
                },
                speakMessage: function() {
                    return s
                },
                speakingMessage: function() {
                    return l
                },
                stopSpeaking: function() {
                    return u
                },
                setSpeechRate: function() {
                    return r
                }
            });
            var a = n("913144");

            function i(e, t, n, i, s) {
                a.default.dispatch({
                    type: "SPEAK_TEXT",
                    text: e,
                    interrupt: t,
                    maxLength: n,
                    onStart: i,
                    onEnd: s
                })
            }

            function s(e, t) {
                a.default.dispatch({
                    type: "SPEAK_MESSAGE",
                    channel: e,
                    message: t
                })
            }

            function l(e, t) {
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
            let s = {
                    speechRate: 1,
                    currentMessage: null
                },
                l = s;
            class u extends a.default.DeviceSettingsStore {
                initialize(e) {
                    l = {
                        ...s,
                        ...null != e ? e : null
                    }
                }
                isSpeakingMessage(e, t) {
                    let {
                        currentMessage: n
                    } = l;
                    return null !== n && n.channelId === e && n.messageId === t
                }
                get currentMessage() {
                    return l.currentMessage
                }
                get speechRate() {
                    return l.speechRate
                }
                getUserAgnosticState() {
                    return l
                }
            }
            u.displayName = "TTSStore", u.persistKey = "TTSStore", u.migrations = [];
            var r = new u(i.default, __OVERLAY__ ? {} : {
                SPEAKING_MESSAGE: function(e) {
                    let {
                        messageId: t,
                        channelId: n
                    } = e;
                    l = {
                        ...l,
                        currentMessage: {
                            messageId: t,
                            channelId: n
                        }
                    }
                },
                STOP_SPEAKING: function() {
                    l = {
                        ...l,
                        currentMessage: null
                    }
                },
                SET_TTS_SPEECH_RATE: function(e) {
                    l = {
                        ...l,
                        speechRate: e.speechRate
                    }
                }
            })
        }
    }
]);