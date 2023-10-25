(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43168"], {
        642399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FiltersVerticalIcon: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("912557"),
                a = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M19 22a1 1 0 0 1-1-1v-8.208a2.5 2.5 0 1 1 2 0V21a1 1 0 0 1-1 1Zm0-16a4.5 4.5 0 0 0-1 .113V3a1 1 0 1 1 2 0v3.113A4.5 4.5 0 0 0 19 6ZM5 22a1 1 0 0 1-1-1v-8.208a2.5 2.5 0 1 1 2 0V21a1 1 0 0 1-1 1ZM5 6a4.5 4.5 0 0 0-1 .113V3a1 1 0 1 1 2 0v3.113A4.5 4.5 0 0 0 5 6Zm6 15a1 1 0 1 0 2 0v-3.208a2.5 2.5 0 1 0-2 0V21Zm0-9.887a4.5 4.5 0 0 1 2 0V3a1 1 0 1 0-2 0v8.113Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        510889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("773670"),
                r = n("947980"),
                a = n("498225"),
                u = n("206230");

            function i(e, t, n) {
                let i = (0, a.useStateFromStores)([u.default], () => u.default.keyboardModeEnabled),
                    s = l.useCallback(e => {
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
                    isEnabled: i,
                    setFocus: s,
                    scrollToStart: o,
                    scrollToEnd: c,
                    orientation: null == n ? void 0 : n.orientation
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return E
                },
                default: function() {
                    return T
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("377849"),
                a = n.n(r),
                u = n("498225"),
                i = n("77078"),
                s = n("820542"),
                o = n("519705"),
                c = n("319165"),
                d = n("282109"),
                f = n("679653"),
                g = n("49111"),
                m = n("468200"),
                M = n("782340");
            let E = () => [{
                    value: m.MuteUntilSeconds.MINUTES_15,
                    label: M.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: m.MuteUntilSeconds.HOURS_1,
                    label: M.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: m.MuteUntilSeconds.HOURS_3,
                    label: M.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: m.MuteUntilSeconds.HOURS_8,
                    label: M.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: m.MuteUntilSeconds.HOURS_24,
                    label: M.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: m.MuteUntilSeconds.ALWAYS,
                    label: M.default.Messages.MUTE_DURATION_ALWAYS
                }],
                S = e => {
                    let t = e > 0 ? a().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function T(e, t) {
                let [n, r] = (0, u.useStateFromStoresArray)([d.default], () => [d.default.isChannelMuted(e.guild_id, e.id), d.default.getChannelMuteConfig(e.guild_id, e.id)]), a = (0, c.useMutedUntilText)(r), m = (0, f.default)(e, !0);

                function T(t) {
                    t && e.type === g.ChannelTypes.GUILD_CATEGORY && (0, s.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let C = M.default.Messages.MUTE_CHANNEL_GENERIC,
                    _ = M.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case g.ChannelTypes.GUILD_CATEGORY:
                        C = M.default.Messages.MUTE_CATEGORY, _ = M.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case g.ChannelTypes.GROUP_DM:
                        C = M.default.Messages.MUTE_CONVERSATION, _ = M.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case g.ChannelTypes.DM:
                        C = M.default.Messages.MUTE_CHANNEL.format({
                            name: m
                        }), _ = M.default.Messages.UNMUTE_CHANNEL.format({
                            name: m
                        });
                        break;
                    default:
                        C = M.default.Messages.MUTE_CHANNEL_GENERIC, _ = M.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, l.jsx)(i.MenuItem, {
                    id: "unmute-channel",
                    label: _,
                    subtext: a,
                    action: () => T(!1)
                }) : (0, l.jsx)(i.MenuItem, {
                    id: "mute-channel",
                    label: C,
                    action: () => T(!0),
                    children: E().map(n => {
                        let {
                            value: r,
                            label: a
                        } = n;
                        return (0, l.jsx)(i.MenuItem, {
                            id: "".concat(r),
                            label: a,
                            action: () => (function(n) {
                                e.type === g.ChannelTypes.GUILD_CATEGORY && (0, s.categoryCollapse)(e.id);
                                let l = S(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, l, t)
                            })(r)
                        }, r)
                    })
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
                    return C
                },
                default: function() {
                    return _
                },
                ForumTagOverflow: function() {
                    return A
                }
            });
            var l, r, a = n("920040"),
                u = n("773670"),
                i = n("575482"),
                s = n.n(i),
                o = n("947980"),
                c = n("498225"),
                d = n("77078"),
                f = n("430568"),
                g = n("206230"),
                m = n("385976"),
                M = n("945330"),
                E = n("782340"),
                S = n("476922");

            function T(e) {
                let {
                    tag: t,
                    size: n = r.MEDIUM,
                    disabled: l,
                    className: i,
                    onClick: T,
                    onRemove: C,
                    selected: _,
                    ariaLabel: A
                } = e, {
                    name: p,
                    emojiId: N,
                    emojiName: O
                } = t, h = null != C, [v, I] = u.useState(!1), U = (0, c.useStateFromStores)([m.default], () => null != N ? m.default.getUsableCustomEmojiById(N) : null), b = h || null != T, x = (!h || !v) && (null != N || null != O), y = n === r.SMALL, R = u.useRef(null), L = (0, c.useStateFromStores)([g.default], () => g.default.keyboardModeEnabled), D = (0, a.jsxs)(a.Fragment, {
                    children: [x ? (0, a.jsx)(f.default, {
                        className: s(S.emoji, {
                            [S.small]: y
                        }),
                        emojiId: N,
                        emojiName: O,
                        animated: !!(null == U ? void 0 : U.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, v && h && (0, a.jsx)("div", {
                        className: S.closeCircle,
                        children: (0, a.jsx)(M.default, {
                            className: S.close
                        })
                    }), (0, a.jsx)(d.Text, {
                        className: S.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: p
                    })]
                }), j = {
                    key: t.id,
                    className: s(S.pill, S.increasedActivityPill, {
                        [S.disabled]: l,
                        [S.clickable]: b,
                        [S.increasedActivitySmall]: y,
                        [S.selected]: _
                    }, i),
                    onClick: e => {
                        null == T || T(e), null == C || C(t), !L && null != R.current && R.current.blur()
                    },
                    onMouseEnter: () => h && I(!0),
                    onMouseLeave: () => h && I(!1)
                }, F = (0, o.useListItem)("forum-tag-".concat(t.id));
                return b ? (0, a.jsx)(d.Clickable, {
                    ...F,
                    innerRef: R,
                    focusProps: {
                        ringTarget: R
                    },
                    "aria-label": null != A ? A : E.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: p
                    }),
                    role: "button",
                    "aria-pressed": _,
                    ...j,
                    children: D
                }) : (0, a.jsx)("div", {
                    "aria-label": null != A ? A : E.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: p
                    }),
                    ...j,
                    children: D
                })
            }

            function C(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = r.MEDIUM
                } = e, u = l === r.SMALL;
                return (0, a.jsx)(d.Tooltip, {
                    "aria-label": E.default.Messages.FORUM_TAGS,
                    text: (0, a.jsx)(a.Fragment, {
                        children: t.map(e => (0, a.jsx)(_, {
                            tag: e,
                            className: S.tooltipPill,
                            size: _.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: s(S.pill, S.increasedActivityPill, {
                            [S.increasedActivitySmall]: u
                        }),
                        children: (0, a.jsxs)(d.Text, {
                            className: S.increasedActivityText,
                            variant: u ? "text-xs/medium" : "text-sm/medium",
                            children: ["+", n]
                        })
                    })
                })
            }

            function _(e) {
                let {
                    tag: t,
                    size: n = r.MEDIUM,
                    disabled: l,
                    className: i,
                    onClick: T,
                    onRemove: C,
                    selected: _,
                    ariaLabel: A
                } = e, {
                    name: p,
                    emojiId: N,
                    emojiName: O
                } = t, h = null != C, [v, I] = u.useState(!1), U = (0, c.useStateFromStores)([m.default], () => null != N ? m.default.getUsableCustomEmojiById(N) : null), b = h || null != T, x = (!h || !v) && (null != N || null != O), y = n === r.SMALL, R = u.useRef(null), L = (0, c.useStateFromStores)([g.default], () => g.default.keyboardModeEnabled), D = (0, a.jsxs)(a.Fragment, {
                    children: [x ? (0, a.jsx)(f.default, {
                        className: s(S.emoji, {
                            [S.small]: y
                        }),
                        emojiId: N,
                        emojiName: O,
                        animated: !!(null == U ? void 0 : U.animated),
                        size: "reaction"
                    }) : null, v && h && (0, a.jsx)("div", {
                        className: S.closeCircle,
                        children: (0, a.jsx)(M.default, {
                            className: S.close
                        })
                    }), (0, a.jsx)(d.Text, {
                        variant: y ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: p
                    })]
                }), j = {
                    key: t.id,
                    className: s(S.pill, {
                        [S.disabled]: l,
                        [S.clickable]: b,
                        [S.small]: y,
                        [S.selected]: _
                    }, i),
                    onClick: e => {
                        null == T || T(e), null == C || C(t), !L && null != R.current && R.current.blur()
                    },
                    onMouseEnter: () => h && I(!0),
                    onMouseLeave: () => h && I(!1)
                }, F = (0, o.useListItem)("forum-tag-".concat(t.id));
                return b ? (0, a.jsx)(d.Clickable, {
                    ...F,
                    innerRef: R,
                    focusProps: {
                        ringTarget: R
                    },
                    "aria-label": null != A ? A : E.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: p
                    }),
                    role: "button",
                    "aria-pressed": _,
                    ...j,
                    children: D
                }) : (0, a.jsx)("div", {
                    ...j,
                    children: D
                })
            }

            function A(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = r.MEDIUM
                } = e, u = l === r.SMALL;
                return (0, a.jsx)(d.Tooltip, {
                    "aria-label": E.default.Messages.FORUM_TAGS,
                    text: (0, a.jsx)(a.Fragment, {
                        children: t.map(e => (0, a.jsx)(_, {
                            tag: e,
                            className: S.tooltipPill,
                            size: _.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: s(S.pill, {
                            [S.small]: u
                        }),
                        children: (0, a.jsxs)(d.Text, {
                            variant: u ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(l = r || (r = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", _.Sizes = r
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("377849"),
                a = n.n(r),
                u = n("498225"),
                i = n("77078"),
                s = n("519705"),
                o = n("531674"),
                c = n("319165"),
                d = n("282109"),
                f = n("782340");

            function g(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: r,
                        muteConfig: g
                    } = (0, u.useStateFromStoresObject)([d.default], () => ({
                        muted: null != n ? d.default.isMuted(n) : void 0,
                        muteConfig: null != n ? d.default.getMuteConfig(n) : void 0
                    }), [n]),
                    m = (0, c.useMutedUntilText)(g);
                return null == n ? null : r ? (0, l.jsx)(i.MenuItem, {
                    id: "unmute-guild",
                    label: f.default.Messages.UNMUTE_SERVER,
                    subtext: m,
                    action: () => s.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, l.jsx)(i.MenuItem, {
                    id: "mute-guild",
                    label: f.default.Messages.MUTE_SERVER,
                    action: () => s.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, o.getMuteTimes)().map(e => {
                        let {
                            value: r,
                            label: u
                        } = e;
                        return (0, l.jsx)(i.MenuItem, {
                            id: "".concat(r),
                            label: u,
                            action: () => (function(e) {
                                if (null == n) return;
                                let l = e > 0 ? a().add(e, "second").toISOString() : null;
                                s.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: l
                                    }
                                }, t)
                            })(r)
                        }, r)
                    })
                })
            }
        },
        619259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("500947"),
                r = n("498225"),
                a = n("913144"),
                u = n("979911"),
                i = n("692038"),
                s = n("42203"),
                o = n("377253"),
                c = n("600798"),
                d = n("201131"),
                f = n("49111");
            let g = {},
                m = 0,
                M = {},
                E = {},
                S = (e, t) => {
                    let n = (0, u.getFailedMessageId)(e),
                        l = {
                            id: n,
                            isBlockedEdit: (0, u.isMessageDataEdit)(e),
                            messageData: e,
                            errorMessage: (0, c.getAutomodErrorMessage)(e, t)
                        };
                    g[n] = l, m++
                },
                T = e => g[e],
                C = e => {
                    let t = g[e];
                    null != t && delete g[e], m++
                };

            function _(e) {
                let {
                    messageData: t,
                    errorResponseBody: n
                } = e;
                return S(t, n), !0
            }

            function A(e) {
                var t;
                let {
                    channelId: n,
                    messages: r
                } = e, a = null === (t = s.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == a) return !1;
                let u = E[a],
                    i = r.reduce((e, t) => {
                        var n;
                        let r = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
                        if (!r) return e;
                        let a = null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
                            let {
                                type: t
                            } = e;
                            return t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                        });
                        return a ? null == e || -1 === l.default.compare(e, t.id) ? t.id : void 0 : e
                    }, u);
                return null != i && E[a] !== i && (E[a] = i, !0)
            }
            class p extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (g = e.automodFailedMessages, M = e.mentionRaidDetectionByGuild)
                }
                getState() {
                    return {
                        automodFailedMessages: g,
                        mentionRaidDetectionByGuild: M,
                        lastIncidentAlertMessage: E
                    }
                }
                getMessage(e) {
                    var t;
                    return null == e ? null : null !== (t = T(e)) && void 0 !== t ? t : null
                }
                getMessagesVersion() {
                    return m
                }
                getMentionRaidDetected(e) {
                    var t;
                    return null !== (t = M[e]) && void 0 !== t ? t : null
                }
                getLastIncidentAlertMessage(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : null
                }
            }
            p.displayName = "GuildAutomodMessageStore", p.persistKey = "GuildAutomodMessages";
            var N = new p(a.default, {
                CONNECTION_OPEN: function(e) {
                    return g = {}, m++, !0
                },
                LOAD_MESSAGES_SUCCESS: A,
                LOCAL_MESSAGES_LOADED: A,
                MESSAGE_CREATE: function(e) {
                    let {
                        guildId: t,
                        message: n
                    } = e;
                    if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION) return !1;
                    let l = (0, i.createMessageRecord)(n);
                    return !!(0, d.isAutomodMessageRecord)(l) && !!(0, d.isAutomodNotification)(l) && (E[t] = l.id, !0)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: _,
                MESSAGE_EDIT_FAILED_AUTOMOD: _,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    let {
                        messageId: t
                    } = e;
                    return C(t), !0
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        response: t
                    } = e;
                    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    let n = t.body.id;
                    if (null == n) return !1;
                    C(n)
                },
                AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
                    let {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: l
                    } = e;
                    return M[t] = {
                        guildId: t,
                        decisionId: n,
                        suspiciousMentionActivityUntil: l
                    }, !0
                },
                AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return delete M[t], !0
                }
            })
        },
        211248: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleIconButtonColors: function() {
                    return s
                },
                CircleIconButtonSizes: function() {
                    return o
                },
                default: function() {
                    return c
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("575482"),
                a = n.n(r),
                u = n("77078"),
                i = n("847855");
            let s = {
                    TERTIARY: i.tertiary,
                    SECONDARY: i.secondary,
                    PRIMARY: i.primary
                },
                o = {
                    SIZE_24: i.size24,
                    SIZE_32: i.size32,
                    SIZE_36: i.size36
                };

            function c(e) {
                let {
                    className: t,
                    tooltip: n,
                    color: r,
                    size: s = o.SIZE_32,
                    icon: c,
                    onClick: d,
                    disabled: f,
                    focusProps: g
                } = e;
                return (0, l.jsx)(u.Tooltip, {
                    text: n,
                    shouldShow: !f,
                    children: e => {
                        let {
                            onClick: o,
                            ...m
                        } = e;
                        return (0, l.jsx)(u.Clickable, {
                            ...m,
                            "aria-label": n,
                            "aria-disabled": f,
                            className: a(t, i.button, r, s, {
                                [i.disabled]: f
                            }),
                            onClick: e => {
                                null == o || o(), d(e)
                            },
                            focusProps: g,
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
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("469563"),
                a = n("642399"),
                u = n("75196"),
                i = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(i),
                        width: t,
                        height: n,
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.33331 1.33331C3.78103 1.33331 3.33331 1.78103 3.33331 2.33331V9.99998H2.33331C1.78103 9.99998 1.33331 10.4477 1.33331 11C1.33331 11.5523 1.78103 12 2.33331 12H3.33331V13.6666C3.33331 14.2189 3.78103 14.6666 4.33331 14.6666C4.8856 14.6666 5.33331 14.2189 5.33331 13.6666V12H6.33331C6.8856 12 7.33331 11.5523 7.33331 11C7.33331 10.4477 6.8856 9.99998 6.33331 9.99998H5.33331V2.33331C5.33331 1.78103 4.8856 1.33331 4.33331 1.33331ZM10.6666 2.33331C10.6666 1.78103 11.1144 1.33331 11.6666 1.33331C12.2189 1.33331 12.6666 1.78103 12.6666 2.33331V3.99998H13.6666C14.2189 3.99998 14.6666 4.44769 14.6666 4.99998C14.6666 5.55226 14.2189 5.99998 13.6666 5.99998H12.6666V13.6666C12.6666 14.2189 12.2189 14.6666 11.6666 14.6666C11.1144 14.6666 10.6666 14.2189 10.6666 13.6666V5.99998H9.66665C9.11436 5.99998 8.66665 5.55226 8.66665 4.99998C8.66665 4.44769 9.11436 3.99998 9.66665 3.99998H10.6666V2.33331Z",
                            fill: r,
                            className: a
                        })
                    })
                }, a.FiltersVerticalIcon)
        },
        202752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDefaultKeyBinding: function() {
                    return a
                },
                updateContent: function() {
                    return h
                },
                deleteContent: function() {
                    return v
                },
                miscCommand: function() {
                    return I
                },
                getFirstTextBlock: function() {
                    return U
                },
                applyTokensAsEntities: function() {
                    return b
                },
                createEmptyEditorState: function() {
                    return x
                },
                clearContent: function() {
                    return y
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
                    return F
                },
                setToEndSelection: function() {
                    return k
                },
                truncateContent: function() {
                    return G
                },
                scrollCursorIntoView: function() {
                    return w
                },
                isEmpty: function() {
                    return V
                }
            });
            var l = n("214134"),
                r = n("478260"),
                a = n.n(r),
                u = n("132954"),
                i = n.n(u),
                s = n("341109"),
                o = n.n(s),
                c = n("406231"),
                d = n.n(c),
                f = n("227633"),
                g = n.n(f),
                m = n("922856"),
                M = n.n(m),
                E = n("345554"),
                S = n.n(E),
                T = n("955887"),
                C = n.n(T),
                _ = n("149991"),
                A = n.n(_),
                p = n("418853"),
                N = n.n(p);

            function O(e, t, n, r) {
                let a = r.getCurrentContent(),
                    u = null;
                null != e && (u = (a = a.createEntity(...e)).getLastCreatedEntityKey());
                let i = a.getFirstBlock(),
                    s = new l.SelectionState({
                        anchorKey: i.getKey(),
                        anchorOffset: t,
                        focusKey: i.getKey(),
                        focusOffset: n
                    });
                return a = l.Modifier.applyEntity(a, s, u), l.EditorState.set(r, {
                    currentContent: a
                })
            }

            function h(e, t, n, r) {
                let a, u;
                let s = t.getCurrentContent(),
                    o = s.getFirstBlock(),
                    c = o.getText();
                "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), a = new l.SelectionState({
                    anchorKey: o.getKey(),
                    anchorOffset: n,
                    focusKey: o.getKey(),
                    focusOffset: null != r && 0 !== r ? r : n
                })) : a = t.getSelection();
                let d = t.getCurrentInlineStyle(),
                    f = i(s, a);
                return a.isCollapsed() ? (s = l.Modifier.insertText(s, a, e, d, f), u = "insert-characters") : (s = l.Modifier.replaceText(s, a, e, d, f), u = "replace-characters"), l.EditorState.push(t, s, u)
            }

            function v(e, t) {
                switch (e) {
                    case "delete":
                        return A(t);
                    case "delete-word":
                        return g(t);
                    case "backspace":
                        return C(t);
                    case "backspace-word":
                        return d(t);
                    case "backspace-to-start-of-line":
                        return o(t);
                    default:
                        return t
                }
            }

            function I(e, t) {
                switch (e) {
                    case "transpose-characters":
                        return N(t);
                    case "move-selection-to-start-of-block":
                        return S(t);
                    case "move-selection-to-end-of-block":
                        return M(t);
                    default:
                        return t
                }
            }

            function U(e) {
                return e.getCurrentContent().getFirstBlock().getText()
            }

            function b(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = t.getCurrentContent(),
                    r = l.getFirstBlock(),
                    a = r.getText(),
                    u = [];
                return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
                    let n = l.getEntity(r.getEntityAt(e)).getType(),
                        i = a.substring(e, t);
                    u.push({
                        processed: !1,
                        type: n,
                        start: e,
                        end: t,
                        text: i
                    })
                }), e.forEach(e => {
                    let l = !1;
                    if (u.forEach(n => {
                            let {
                                type: r,
                                start: a,
                                end: u
                            } = e, i = e.getFullMatch();
                            !n.processed && (n.type === r && n.start === a && n.text === i ? (n.processed = !0, l = !0) : (a >= n.start && a < n.end || u > n.start && u <= n.end) && (n.processed = !0, t = O(null, n.start, n.end, t)))
                        }), l) return;
                    let r = n[e.type];
                    t = O([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
                        token: e
                    }], e.start, e.end, t)
                }), u.forEach(e => {
                    !e.processed && (t = O(null, e.start, e.end, t))
                }), t
            }

            function x(e) {
                return l.EditorState.createEmpty(new l.CompositeDecorator(e))
            }

            function y(e) {
                let t = l.EditorState.push(e, l.ContentState.createFromText("")),
                    n = e.getSelection();
                return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
            }

            function R(e, t) {
                let n = U(t);
                return h(e, t, 0, n.length)
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

            function F(e) {
                let t = e.getSelection();
                return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
            }

            function k(e) {
                let t = U(e),
                    n = e.getSelection();
                return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
            }

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = U(e);
                if (n.length > t) {
                    let r = e.getSelection();
                    e = h("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
                }
                return e
            }

            function w(e) {
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
                let a = l.left - r.left,
                    u = a + e.scrollLeft;
                u < e.scrollLeft ? e.scrollLeft = u - 10 : u > e.scrollLeft + e.offsetWidth && (e.scrollLeft = u - e.offsetWidth + 3)
            }

            function V(e) {
                return 0 === U(e).length
            }
        }
    }
]);