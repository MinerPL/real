(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34995"], {
        410507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FiltersHorizontalIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M22 5a1 1 0 0 1-1 1h-8.208a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 5c0 .337.038.673.113 1H3a1 1 0 0 1 0-2h3.113A4.5 4.5 0 0 0 6 5ZM22 19a1 1 0 0 1-1 1h-8.208a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 19c0 .337.038.673.113 1H3a1 1 0 1 1 0-2h3.113A4.5 4.5 0 0 0 6 19ZM21 13a1 1 0 1 0 0-2h-3.208a2.5 2.5 0 1 0 0 2H21ZM11.113 13a4.5 4.5 0 0 1 0-2H3a1 1 0 1 0 0 2h8.113Z",
                        className: s
                    })
                })
            }
        },
        510889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691"),
                r = n("974667"),
                i = n("446674"),
                a = n("206230");

            function s(e, t, n) {
                let s = (0, i.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled),
                    u = l.useCallback(e => {
                        let n = document.querySelector(e),
                            l = t.current;
                        null != n && null != l && (n.focus(), l.scrollIntoViewNode({
                            node: n,
                            padding: 80
                        }))
                    }, [t]),
                    o = l.useCallback(() => new Promise(e => {
                        let n = t.current;
                        if (null == n) return e();
                        n.scrollTo({
                            to: 0,
                            callback: () => requestAnimationFrame(() => e())
                        })
                    }), [t]),
                    c = l.useCallback(() => new Promise(e => {
                        let n = t.current;
                        if (null == n) return e();
                        n.scrollTo({
                            to: Number.MAX_SAFE_INTEGER,
                            callback: () => requestAnimationFrame(() => e())
                        })
                    }), [t]);
                return (0, r.default)({
                    id: e,
                    isEnabled: s,
                    setFocus: u,
                    scrollToStart: o,
                    scrollToEnd: c,
                    orientation: null == n ? void 0 : n.orientation
                })
            }
        },
        90625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IncreasedActivityForumTagPill: function() {
                    return T
                },
                IncreasedActivityForumTagOverflow: function() {
                    return S
                },
                default: function() {
                    return h
                },
                ForumTagOverflow: function() {
                    return M
                }
            }), n("222007");
            var l, r, i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                u = n.n(s),
                o = n("974667"),
                c = n("446674"),
                d = n("77078"),
                f = n("430568"),
                E = n("206230"),
                g = n("385976"),
                m = n("945330"),
                A = n("782340"),
                C = n("951779");

            function T(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: s,
                    onRemove: T,
                    selected: S,
                    ariaLabel: h
                } = e, {
                    name: M,
                    emojiId: p,
                    emojiName: v
                } = t, O = null != T, [I, _] = a.useState(!1), N = (0, c.useStateFromStores)([g.default], () => null != p ? g.default.getUsableCustomEmojiById(p) : null), y = O || null != s, x = (!O || !I) && (null != p || null != v), b = 0 === n, F = a.useRef(null), R = (0, c.useStateFromStores)([E.default], () => E.default.keyboardModeEnabled), L = (0, i.jsxs)(i.Fragment, {
                    children: [x ? (0, i.jsx)(f.default, {
                        className: u(C.emoji, {
                            [C.small]: b
                        }),
                        emojiId: p,
                        emojiName: v,
                        animated: !!(null == N ? void 0 : N.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, I && O && (0, i.jsx)("div", {
                        className: C.closeCircle,
                        children: (0, i.jsx)(m.default, {
                            className: C.close
                        })
                    }), (0, i.jsx)(d.Text, {
                        className: C.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: M
                    })]
                }), D = {
                    key: t.id,
                    className: u(C.pill, C.increasedActivityPill, {
                        [C.disabled]: l,
                        [C.clickable]: y,
                        [C.increasedActivitySmall]: b,
                        [C.selected]: S
                    }, r),
                    onClick: e => {
                        null == s || s(e), null == T || T(t), !R && null != F.current && F.current.blur()
                    },
                    onMouseEnter: () => O && _(!0),
                    onMouseLeave: () => O && _(!1)
                }, j = (0, o.useListItem)("forum-tag-".concat(t.id));
                return y ? (0, i.jsx)(d.Clickable, {
                    ...j,
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != h ? h : A.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: M
                    }),
                    role: "button",
                    "aria-pressed": S,
                    ...D,
                    children: L
                }) : (0, i.jsx)("div", {
                    "aria-label": null != h ? h : A.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: M
                    }),
                    ...D,
                    children: L
                })
            }

            function S(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, i.jsx)(d.Tooltip, {
                    "aria-label": A.default.Messages.FORUM_TAGS,
                    text: (0, i.jsx)(i.Fragment, {
                        children: t.map(e => (0, i.jsx)(h, {
                            tag: e,
                            className: C.tooltipPill,
                            size: h.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: u(C.pill, C.increasedActivityPill, {
                            [C.increasedActivitySmall]: r
                        }),
                        children: (0, i.jsxs)(d.Text, {
                            className: C.increasedActivityText,
                            variant: r ? "text-xs/medium" : "text-sm/medium",
                            children: ["+", n]
                        })
                    })
                })
            }

            function h(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: r,
                    onClick: s,
                    onRemove: T,
                    selected: S,
                    ariaLabel: h
                } = e, {
                    name: M,
                    emojiId: p,
                    emojiName: v
                } = t, O = null != T, [I, _] = a.useState(!1), N = (0, c.useStateFromStores)([g.default], () => null != p ? g.default.getUsableCustomEmojiById(p) : null), y = O || null != s, x = (!O || !I) && (null != p || null != v), b = 0 === n, F = a.useRef(null), R = (0, c.useStateFromStores)([E.default], () => E.default.keyboardModeEnabled), L = (0, i.jsxs)(i.Fragment, {
                    children: [x ? (0, i.jsx)(f.default, {
                        className: u(C.emoji, {
                            [C.small]: b
                        }),
                        emojiId: p,
                        emojiName: v,
                        animated: !!(null == N ? void 0 : N.animated),
                        size: "reaction"
                    }) : null, I && O && (0, i.jsx)("div", {
                        className: C.closeCircle,
                        children: (0, i.jsx)(m.default, {
                            className: C.close
                        })
                    }), (0, i.jsx)(d.Text, {
                        variant: b ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: M
                    })]
                }), D = {
                    key: t.id,
                    className: u(C.pill, {
                        [C.disabled]: l,
                        [C.clickable]: y,
                        [C.small]: b,
                        [C.selected]: S
                    }, r),
                    onClick: e => {
                        null == s || s(e), null == T || T(t), !R && null != F.current && F.current.blur()
                    },
                    onMouseEnter: () => O && _(!0),
                    onMouseLeave: () => O && _(!1)
                }, j = (0, o.useListItem)("forum-tag-".concat(t.id));
                return y ? (0, i.jsx)(d.Clickable, {
                    ...j,
                    innerRef: F,
                    focusProps: {
                        ringTarget: F
                    },
                    "aria-label": null != h ? h : A.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: M
                    }),
                    role: "button",
                    "aria-pressed": S,
                    ...D,
                    children: L
                }) : (0, i.jsx)("div", {
                    ...D,
                    children: L
                })
            }

            function M(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, r = 0 === l;
                return (0, i.jsx)(d.Tooltip, {
                    "aria-label": A.default.Messages.FORUM_TAGS,
                    text: (0, i.jsx)(i.Fragment, {
                        children: t.map(e => (0, i.jsx)(h, {
                            tag: e,
                            className: C.tooltipPill,
                            size: h.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: u(C.pill, {
                            [C.small]: r
                        }),
                        children: (0, i.jsxs)(d.Text, {
                            variant: r ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(r = l || (l = {}))[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", h.Sizes = l
        },
        619259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("808653");
            var l = n("249654"),
                r = n("446674"),
                i = n("913144"),
                a = n("979911"),
                s = n("692038"),
                u = n("42203"),
                o = n("377253"),
                c = n("600798"),
                d = n("201131"),
                f = n("49111");
            let E = {},
                g = 0,
                m = {},
                A = {},
                C = (e, t) => {
                    let n = (0, a.getFailedMessageId)(e),
                        l = {
                            id: n,
                            isBlockedEdit: (0, a.isMessageDataEdit)(e),
                            messageData: e,
                            errorMessage: (0, c.getAutomodErrorMessage)(e, t)
                        };
                    E[n] = l, g++
                },
                T = e => E[e],
                S = e => {
                    let t = E[e];
                    null != t && delete E[e], g++
                };

            function h(e) {
                let {
                    messageData: t,
                    errorResponseBody: n
                } = e;
                return C(t, n), !0
            }

            function M(e) {
                var t;
                let {
                    channelId: n,
                    messages: r
                } = e, i = null === (t = u.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == i) return !1;
                let a = A[i],
                    s = r.reduce((e, t) => {
                        var n;
                        let r = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
                        if (!r) return e;
                        let i = null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
                            let {
                                type: t
                            } = e;
                            return t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                        });
                        return i ? null == e || -1 === l.default.compare(e, t.id) ? t.id : void 0 : e
                    }, a);
                return null != s && A[i] !== s && (A[i] = s, !0)
            }
            class p extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (E = e.automodFailedMessages, m = e.mentionRaidDetectionByGuild)
                }
                getState() {
                    return {
                        automodFailedMessages: E,
                        mentionRaidDetectionByGuild: m,
                        lastIncidentAlertMessage: A
                    }
                }
                getMessage(e) {
                    var t;
                    return null == e ? null : null !== (t = T(e)) && void 0 !== t ? t : null
                }
                getMessagesVersion() {
                    return g
                }
                getMentionRaidDetected(e) {
                    var t;
                    return null !== (t = m[e]) && void 0 !== t ? t : null
                }
                getLastIncidentAlertMessage(e) {
                    var t;
                    return null !== (t = A[e]) && void 0 !== t ? t : null
                }
            }
            p.displayName = "GuildAutomodMessageStore", p.persistKey = "GuildAutomodMessages";
            var v = new p(i.default, {
                CONNECTION_OPEN: function(e) {
                    return E = {}, g++, !0
                },
                LOAD_MESSAGES_SUCCESS: M,
                LOCAL_MESSAGES_LOADED: M,
                MESSAGE_CREATE: function(e) {
                    let {
                        guildId: t,
                        message: n
                    } = e;
                    if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION) return !1;
                    let l = (0, s.createMessageRecord)(n);
                    return !!(0, d.isAutomodMessageRecord)(l) && !!(0, d.isAutomodNotification)(l) && (A[t] = l.id, !0)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: h,
                MESSAGE_EDIT_FAILED_AUTOMOD: h,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    let {
                        messageId: t
                    } = e;
                    return S(t), !0
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        response: t
                    } = e;
                    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    let n = t.body.id;
                    if (null == n) return !1;
                    S(n)
                },
                AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
                    let {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: l
                    } = e;
                    return m[t] = {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: l
                    }, !0
                },
                AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return delete m[t], !0
                }
            })
        },
        287850: function(e, t, n) {
            "use strict";
            let l, r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007"), n("424973");
            var a, s, u = n("866227"),
                o = n.n(u),
                c = n("446674"),
                d = n("407846"),
                f = n("913144"),
                E = n("21121"),
                g = n("934306"),
                m = n("288518"),
                A = n("486503"),
                C = n("233069"),
                T = n("42203"),
                S = n("305961"),
                h = n("660478"),
                M = n("282109"),
                p = n("697218"),
                v = n("299039"),
                O = n("724210");
            (s = a || (a = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
            let I = new d.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let l = null !== (n = null !== (t = h.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        r = e.isMessageRequestTimestamp;
                    if (null != r) {
                        let e = o(r).valueOf(),
                            t = v.default.fromTimestamp(e);
                        return v.default.compare(l, t) > 0 ? l : t
                    }
                    return l
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: M.default.isMessagesFavorite(e.id) && (0, E.isInMainTabsExperiment)(),
                    isRequest: m.default.isMessageRequest(e.id) || A.default.isSpam(e.id)
                }
            }

            function N() {
                I.clear(), Object.values(T.default.getMutablePrivateChannels()).forEach(e => {
                    I.set(e.id, _(e))
                }), (0, E.isInMainTabsExperiment)() && (0, g.isSplitMessagesTab)() && M.default.getAddedToMessages().forEach(e => {
                    let t = T.default.getChannel(e);
                    null != t && (0, C.isGuildTextChannelType)(t.type) && I.set(t.id, _(t))
                })
            }

            function y() {
                let e = T.default.getMutablePrivateChannels();
                for (let t in e) I.set(t, _(e[t]))
            }
            let x = (l = [], r = [], i = [], () => {
                let e = I.values("FAVORITE"),
                    t = I.values("DEFAULT");
                return (l !== e || r !== t) && (i = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return i.push(t)
                }), l = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return i.push(t)
                }), r = t), i
            });
            class b extends c.default.Store {
                initialize() {
                    this.waitFor(T.default, S.default, p.default, m.default, M.default), this.syncWith([M.default, m.default], N)
                }
                getPrivateChannelIds() {
                    return x()
                }
                getSortedChannels() {
                    return [I.values("FAVORITE"), I.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return I.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: l
                        } = t;
                        e[n] = l
                    }), e
                }
            }
            b.displayName = "PrivateChannelSortStore";
            var F = new b(f.default, {
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: N,
                OVERLAY_INITIALIZE: N,
                CACHE_LOADED: y,
                CACHE_LOADED_LAZY: y,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, C.isPrivate)(e.type) || I.has(e.id)) && I.set(e.id, _(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, C.isPrivate)(t.type) || t.id === O.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    I.set(t.id, _(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return I.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!I.has(t)) return !1;
                    let l = T.default.getChannel(t);
                    return null != l && I.set(t, _(l, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return I.delete(t)
                }
            })
        },
        211248: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleIconButtonColors: function() {
                    return u
                },
                CircleIconButtonSizes: function() {
                    return o
                },
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                a = n("77078"),
                s = n("739926");
            let u = {
                    TERTIARY: s.tertiary,
                    SECONDARY: s.secondary,
                    PRIMARY: s.primary
                },
                o = {
                    SIZE_24: s.size24,
                    SIZE_32: s.size32,
                    SIZE_36: s.size36
                };

            function c(e) {
                let {
                    className: t,
                    tooltip: n,
                    color: r,
                    size: u = o.SIZE_32,
                    icon: c,
                    onClick: d,
                    disabled: f,
                    focusProps: E
                } = e;
                return (0, l.jsx)(a.Tooltip, {
                    text: n,
                    shouldShow: !f,
                    children: e => {
                        let {
                            onClick: o,
                            ...g
                        } = e;
                        return (0, l.jsx)(a.Clickable, {
                            ...g,
                            "aria-label": n,
                            "aria-disabled": f,
                            className: i(t, s.button, r, u, {
                                [s.disabled]: f
                            }),
                            onClick: e => {
                                null == o || o(), d(e)
                            },
                            focusProps: E,
                            children: c
                        })
                    }
                })
            }
        },
        118530: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                i = n("410507"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.33331 1.33331C3.78103 1.33331 3.33331 1.78103 3.33331 2.33331V9.99998H2.33331C1.78103 9.99998 1.33331 10.4477 1.33331 11C1.33331 11.5523 1.78103 12 2.33331 12H3.33331V13.6666C3.33331 14.2189 3.78103 14.6666 4.33331 14.6666C4.8856 14.6666 5.33331 14.2189 5.33331 13.6666V12H6.33331C6.8856 12 7.33331 11.5523 7.33331 11C7.33331 10.4477 6.8856 9.99998 6.33331 9.99998H5.33331V2.33331C5.33331 1.78103 4.8856 1.33331 4.33331 1.33331ZM10.6666 2.33331C10.6666 1.78103 11.1144 1.33331 11.6666 1.33331C12.2189 1.33331 12.6666 1.78103 12.6666 2.33331V3.99998H13.6666C14.2189 3.99998 14.6666 4.44769 14.6666 4.99998C14.6666 5.55226 14.2189 5.99998 13.6666 5.99998H12.6666V13.6666C12.6666 14.2189 12.2189 14.6666 11.6666 14.6666C11.1144 14.6666 10.6666 14.2189 10.6666 13.6666V5.99998H9.66665C9.11436 5.99998 8.66665 5.55226 8.66665 4.99998C8.66665 4.44769 9.11436 3.99998 9.66665 3.99998H10.6666V2.33331Z",
                            fill: r,
                            className: i
                        })
                    })
                }, i.FiltersHorizontalIcon, void 0, {
                    size: 16
                })
        },
        202752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDefaultKeyBinding: function() {
                    return i
                },
                updateContent: function() {
                    return I
                },
                deleteContent: function() {
                    return _
                },
                miscCommand: function() {
                    return N
                },
                getFirstTextBlock: function() {
                    return y
                },
                applyTokensAsEntities: function() {
                    return x
                },
                createEmptyEditorState: function() {
                    return b
                },
                clearContent: function() {
                    return F
                },
                replaceAllContent: function() {
                    return R
                },
                setCollapsedSelection: function() {
                    return L
                },
                setCollapsedEndSelection: function() {
                    return D
                },
                setCollapsedStartSelection: function() {
                    return j
                },
                setToStartSelection: function() {
                    return k
                },
                setToEndSelection: function() {
                    return w
                },
                truncateContent: function() {
                    return U
                },
                scrollCursorIntoView: function() {
                    return P
                },
                isEmpty: function() {
                    return G
                }
            }), n("222007"), n("424973");
            var l = n("98159"),
                r = n("952352"),
                i = n.n(r),
                a = n("401816"),
                s = n.n(a),
                u = n("958551"),
                o = n.n(u),
                c = n("661183"),
                d = n.n(c),
                f = n("823821"),
                E = n.n(f),
                g = n("928429"),
                m = n.n(g),
                A = n("234553"),
                C = n.n(A),
                T = n("65994"),
                S = n.n(T),
                h = n("718144"),
                M = n.n(h),
                p = n("640330"),
                v = n.n(p);

            function O(e, t, n, r) {
                let i = r.getCurrentContent(),
                    a = null;
                null != e && (a = (i = i.createEntity(...e)).getLastCreatedEntityKey());
                let s = i.getFirstBlock(),
                    u = new l.SelectionState({
                        anchorKey: s.getKey(),
                        anchorOffset: t,
                        focusKey: s.getKey(),
                        focusOffset: n
                    });
                return i = l.Modifier.applyEntity(i, u, a), l.EditorState.set(r, {
                    currentContent: i
                })
            }

            function I(e, t, n, r) {
                let i, a;
                let u = t.getCurrentContent(),
                    o = u.getFirstBlock(),
                    c = o.getText();
                "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), i = new l.SelectionState({
                    anchorKey: o.getKey(),
                    anchorOffset: n,
                    focusKey: o.getKey(),
                    focusOffset: null != r && 0 !== r ? r : n
                })) : i = t.getSelection();
                let d = t.getCurrentInlineStyle(),
                    f = s(u, i);
                return i.isCollapsed() ? (u = l.Modifier.insertText(u, i, e, d, f), a = "insert-characters") : (u = l.Modifier.replaceText(u, i, e, d, f), a = "replace-characters"), l.EditorState.push(t, u, a)
            }

            function _(e, t) {
                switch (e) {
                    case "delete":
                        return M(t);
                    case "delete-word":
                        return E(t);
                    case "backspace":
                        return S(t);
                    case "backspace-word":
                        return d(t);
                    case "backspace-to-start-of-line":
                        return o(t);
                    default:
                        return t
                }
            }

            function N(e, t) {
                switch (e) {
                    case "transpose-characters":
                        return v(t);
                    case "move-selection-to-start-of-block":
                        return C(t);
                    case "move-selection-to-end-of-block":
                        return m(t);
                    default:
                        return t
                }
            }

            function y(e) {
                return e.getCurrentContent().getFirstBlock().getText()
            }

            function x(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = t.getCurrentContent(),
                    r = l.getFirstBlock(),
                    i = r.getText(),
                    a = [];
                return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
                    let n = l.getEntity(r.getEntityAt(e)).getType(),
                        s = i.substring(e, t);
                    a.push({
                        processed: !1,
                        type: n,
                        start: e,
                        end: t,
                        text: s
                    })
                }), e.forEach(e => {
                    let l = !1;
                    if (a.forEach(n => {
                            let {
                                type: r,
                                start: i,
                                end: a
                            } = e, s = e.getFullMatch();
                            !n.processed && (n.type === r && n.start === i && n.text === s ? (n.processed = !0, l = !0) : (i >= n.start && i < n.end || a > n.start && a <= n.end) && (n.processed = !0, t = O(null, n.start, n.end, t)))
                        }), l) return;
                    let r = n[e.type];
                    t = O([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
                        token: e
                    }], e.start, e.end, t)
                }), a.forEach(e => {
                    !e.processed && (t = O(null, e.start, e.end, t))
                }), t
            }

            function b(e) {
                return l.EditorState.createEmpty(new l.CompositeDecorator(e))
            }

            function F(e) {
                let t = l.EditorState.push(e, l.ContentState.createFromText("")),
                    n = e.getSelection();
                return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
            }

            function R(e, t) {
                let n = y(t);
                return I(e, t, 0, n.length)
            }

            function L(e, t) {
                let n = t.getSelection();
                return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
            }

            function D(e) {
                let t = e.getCurrentContent().getFirstBlock().getText();
                return L(t.length, e)
            }

            function j(e) {
                return L(0, e)
            }

            function k(e) {
                let t = e.getSelection();
                return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
            }

            function w(e) {
                let t = y(e),
                    n = e.getSelection();
                return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
            }

            function U(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = y(e);
                if (n.length > t) {
                    let r = e.getSelection();
                    e = I("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
                }
                return e
            }

            function P(e) {
                let t = window.getSelection();
                if (null == t || "Caret" !== t.type || null == e) return;
                let n = t.getRangeAt(0);
                if (! function(e, t) {
                        for (; null != e;) {
                            if (e === t) return !0;
                            e = e.parentNode
                        }
                        return !1
                    }(n.commonAncestorContainer, e)) return;
                let l = n.getClientRects()[0],
                    r = e.getClientRects()[0];
                if (null == l || null == r) return;
                let i = l.left - r.left,
                    a = i + e.scrollLeft;
                a < e.scrollLeft ? e.scrollLeft = a - 10 : a > e.scrollLeft + e.offsetWidth && (e.scrollLeft = a - e.offsetWidth + 3)
            }

            function G(e) {
                return 0 === y(e).length
            }
        }
    }
]);