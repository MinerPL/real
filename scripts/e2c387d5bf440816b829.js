(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89253"], {
        510889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691"),
                r = n("974667"),
                u = n("446674"),
                a = n("206230");

            function s(e, t, n) {
                let s = (0, u.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled),
                    i = l.useCallback(e => {
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
                    setFocus: i,
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
            var l = n("37983");
            n("884691");
            var r = n("866227"),
                u = n.n(r),
                a = n("446674"),
                s = n("77078"),
                i = n("820542"),
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
                    let t = e > 0 ? u().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function T(e, t) {
                let [n, r] = (0, a.useStateFromStoresArray)([d.default], () => [d.default.isChannelMuted(e.guild_id, e.id), d.default.getChannelMuteConfig(e.guild_id, e.id)]), u = (0, c.useMutedUntilText)(r), m = (0, f.default)(e, !0);

                function T(t) {
                    t && e.type === g.ChannelTypes.GUILD_CATEGORY && (0, i.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let _ = M.default.Messages.MUTE_CHANNEL_GENERIC,
                    A = M.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case g.ChannelTypes.GUILD_CATEGORY:
                        _ = M.default.Messages.MUTE_CATEGORY, A = M.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case g.ChannelTypes.GROUP_DM:
                        _ = M.default.Messages.MUTE_CONVERSATION, A = M.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case g.ChannelTypes.DM:
                        _ = M.default.Messages.MUTE_CHANNEL.format({
                            name: m
                        }), A = M.default.Messages.UNMUTE_CHANNEL.format({
                            name: m
                        });
                        break;
                    default:
                        _ = M.default.Messages.MUTE_CHANNEL_GENERIC, A = M.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, l.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: A,
                    subtext: u,
                    action: () => T(!1)
                }) : (0, l.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: _,
                    action: () => T(!0),
                    children: E().map(n => {
                        let {
                            value: r,
                            label: u
                        } = n;
                        return (0, l.jsx)(s.MenuItem, {
                            id: "".concat(r),
                            label: u,
                            action: () => (function(n) {
                                e.type === g.ChannelTypes.GUILD_CATEGORY && (0, i.categoryCollapse)(e.id);
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
                    return _
                },
                default: function() {
                    return A
                },
                ForumTagOverflow: function() {
                    return C
                }
            });
            var l, r, u = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                o = n("974667"),
                c = n("446674"),
                d = n("77078"),
                f = n("430568"),
                g = n("206230"),
                m = n("385976"),
                M = n("945330"),
                E = n("782340"),
                S = n("951779");

            function T(e) {
                let {
                    tag: t,
                    size: n = r.MEDIUM,
                    disabled: l,
                    className: s,
                    onClick: T,
                    onRemove: _,
                    selected: A,
                    ariaLabel: C
                } = e, {
                    name: O,
                    emojiId: p,
                    emojiName: N
                } = t, U = null != _, [h, I] = a.useState(!1), b = (0, c.useStateFromStores)([m.default], () => null != p ? m.default.getUsableCustomEmojiById(p) : null), y = U || null != T, v = (!U || !h) && (null != p || null != N), x = n === r.SMALL, R = a.useRef(null), L = (0, c.useStateFromStores)([g.default], () => g.default.keyboardModeEnabled), D = (0, u.jsxs)(u.Fragment, {
                    children: [v ? (0, u.jsx)(f.default, {
                        className: i(S.emoji, {
                            [S.small]: x
                        }),
                        emojiId: p,
                        emojiName: N,
                        animated: !!(null == b ? void 0 : b.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, h && U && (0, u.jsx)("div", {
                        className: S.closeCircle,
                        children: (0, u.jsx)(M.default, {
                            className: S.close
                        })
                    }), (0, u.jsx)(d.Text, {
                        className: S.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: O
                    })]
                }), F = {
                    key: t.id,
                    className: i(S.pill, S.increasedActivityPill, {
                        [S.disabled]: l,
                        [S.clickable]: y,
                        [S.increasedActivitySmall]: x,
                        [S.selected]: A
                    }, s),
                    onClick: e => {
                        null == T || T(e), null == _ || _(t), !L && null != R.current && R.current.blur()
                    },
                    onMouseEnter: () => U && I(!0),
                    onMouseLeave: () => U && I(!1)
                }, j = (0, o.useListItem)("forum-tag-".concat(t.id));
                return y ? (0, u.jsx)(d.Clickable, {
                    ...j,
                    innerRef: R,
                    focusProps: {
                        ringTarget: R
                    },
                    "aria-label": null != C ? C : E.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: O
                    }),
                    role: "button",
                    "aria-pressed": A,
                    ...F,
                    children: D
                }) : (0, u.jsx)("div", {
                    "aria-label": null != C ? C : E.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: O
                    }),
                    ...F,
                    children: D
                })
            }

            function _(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = r.MEDIUM
                } = e, a = l === r.SMALL;
                return (0, u.jsx)(d.Tooltip, {
                    "aria-label": E.default.Messages.FORUM_TAGS,
                    text: (0, u.jsx)(u.Fragment, {
                        children: t.map(e => (0, u.jsx)(A, {
                            tag: e,
                            className: S.tooltipPill,
                            size: A.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, u.jsx)("div", {
                        ...e,
                        className: i(S.pill, S.increasedActivityPill, {
                            [S.increasedActivitySmall]: a
                        }),
                        children: (0, u.jsxs)(d.Text, {
                            className: S.increasedActivityText,
                            variant: a ? "text-xs/medium" : "text-sm/medium",
                            children: ["+", n]
                        })
                    })
                })
            }

            function A(e) {
                let {
                    tag: t,
                    size: n = r.MEDIUM,
                    disabled: l,
                    className: s,
                    onClick: T,
                    onRemove: _,
                    selected: A,
                    ariaLabel: C
                } = e, {
                    name: O,
                    emojiId: p,
                    emojiName: N
                } = t, U = null != _, [h, I] = a.useState(!1), b = (0, c.useStateFromStores)([m.default], () => null != p ? m.default.getUsableCustomEmojiById(p) : null), y = U || null != T, v = (!U || !h) && (null != p || null != N), x = n === r.SMALL, R = a.useRef(null), L = (0, c.useStateFromStores)([g.default], () => g.default.keyboardModeEnabled), D = (0, u.jsxs)(u.Fragment, {
                    children: [v ? (0, u.jsx)(f.default, {
                        className: i(S.emoji, {
                            [S.small]: x
                        }),
                        emojiId: p,
                        emojiName: N,
                        animated: !!(null == b ? void 0 : b.animated),
                        size: "reaction"
                    }) : null, h && U && (0, u.jsx)("div", {
                        className: S.closeCircle,
                        children: (0, u.jsx)(M.default, {
                            className: S.close
                        })
                    }), (0, u.jsx)(d.Text, {
                        variant: x ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: O
                    })]
                }), F = {
                    key: t.id,
                    className: i(S.pill, {
                        [S.disabled]: l,
                        [S.clickable]: y,
                        [S.small]: x,
                        [S.selected]: A
                    }, s),
                    onClick: e => {
                        null == T || T(e), null == _ || _(t), !L && null != R.current && R.current.blur()
                    },
                    onMouseEnter: () => U && I(!0),
                    onMouseLeave: () => U && I(!1)
                }, j = (0, o.useListItem)("forum-tag-".concat(t.id));
                return y ? (0, u.jsx)(d.Clickable, {
                    ...j,
                    innerRef: R,
                    focusProps: {
                        ringTarget: R
                    },
                    "aria-label": null != C ? C : E.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: O
                    }),
                    role: "button",
                    "aria-pressed": A,
                    ...F,
                    children: D
                }) : (0, u.jsx)("div", {
                    ...F,
                    children: D
                })
            }

            function C(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = r.MEDIUM
                } = e, a = l === r.SMALL;
                return (0, u.jsx)(d.Tooltip, {
                    "aria-label": E.default.Messages.FORUM_TAGS,
                    text: (0, u.jsx)(u.Fragment, {
                        children: t.map(e => (0, u.jsx)(A, {
                            tag: e,
                            className: S.tooltipPill,
                            size: A.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, u.jsx)("div", {
                        ...e,
                        className: i(S.pill, {
                            [S.small]: a
                        }),
                        children: (0, u.jsxs)(d.Text, {
                            variant: a ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(l = r || (r = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", A.Sizes = r
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("866227"),
                u = n.n(r),
                a = n("446674"),
                s = n("77078"),
                i = n("519705"),
                o = n("531674"),
                c = n("319165"),
                d = n("282109"),
                f = n("782340");

            function g(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: r,
                        muteConfig: g
                    } = (0, a.useStateFromStoresObject)([d.default], () => ({
                        muted: null != n ? d.default.isMuted(n) : void 0,
                        muteConfig: null != n ? d.default.getMuteConfig(n) : void 0
                    }), [n]),
                    m = (0, c.useMutedUntilText)(g);
                return null == n ? null : r ? (0, l.jsx)(s.MenuItem, {
                    id: "unmute-guild",
                    label: f.default.Messages.UNMUTE_SERVER,
                    subtext: m,
                    action: () => i.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, l.jsx)(s.MenuItem, {
                    id: "mute-guild",
                    label: f.default.Messages.MUTE_SERVER,
                    action: () => i.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, o.getMuteTimes)().map(e => {
                        let {
                            value: r,
                            label: a
                        } = e;
                        return (0, l.jsx)(s.MenuItem, {
                            id: "".concat(r),
                            label: a,
                            action: () => (function(e) {
                                if (null == n) return;
                                let l = e > 0 ? u().add(e, "second").toISOString() : null;
                                i.default.updateGuildNotificationSettings(n, {
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
                    return p
                }
            });
            var l = n("249654"),
                r = n("446674"),
                u = n("913144"),
                a = n("979911"),
                s = n("692038"),
                i = n("42203"),
                o = n("377253"),
                c = n("600798"),
                d = n("201131"),
                f = n("49111");
            let g = {},
                m = 0,
                M = {},
                E = {},
                S = (e, t) => {
                    let n = (0, a.getFailedMessageId)(e),
                        l = {
                            id: n,
                            isBlockedEdit: (0, a.isMessageDataEdit)(e),
                            messageData: e,
                            errorMessage: (0, c.getAutomodErrorMessage)(e, t)
                        };
                    g[n] = l, m++
                },
                T = e => g[e],
                _ = e => {
                    let t = g[e];
                    null != t && delete g[e], m++
                };

            function A(e) {
                let {
                    messageData: t,
                    errorResponseBody: n
                } = e;
                return S(t, n), !0
            }

            function C(e) {
                var t;
                let {
                    channelId: n,
                    messages: r
                } = e, u = null === (t = i.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
                if (null == u) return !1;
                let a = E[u],
                    s = r.reduce((e, t) => {
                        var n;
                        let r = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
                        if (!r) return e;
                        let u = null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
                            let {
                                type: t
                            } = e;
                            return t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
                        });
                        return u ? null == e || -1 === l.default.compare(e, t.id) ? t.id : void 0 : e
                    }, a);
                return null != s && E[u] !== s && (E[u] = s, !0)
            }
            class O extends r.default.PersistedStore {
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
            O.displayName = "GuildAutomodMessageStore", O.persistKey = "GuildAutomodMessages";
            var p = new O(u.default, {
                CONNECTION_OPEN: function(e) {
                    return g = {}, m++, !0
                },
                LOAD_MESSAGES_SUCCESS: C,
                LOCAL_MESSAGES_LOADED: C,
                MESSAGE_CREATE: function(e) {
                    let {
                        guildId: t,
                        message: n
                    } = e;
                    if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION) return !1;
                    let l = (0, s.createMessageRecord)(n);
                    return !!(0, d.isAutomodMessageRecord)(l) && !!(0, d.isAutomodNotification)(l) && (E[t] = l.id, !0)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: A,
                MESSAGE_EDIT_FAILED_AUTOMOD: A,
                REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
                    let {
                        messageId: t
                    } = e;
                    return _(t), !0
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        response: t
                    } = e;
                    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
                    let n = t.body.id;
                    if (null == n) return !1;
                    _(n)
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
        202752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDefaultKeyBinding: function() {
                    return u
                },
                updateContent: function() {
                    return U
                },
                deleteContent: function() {
                    return h
                },
                miscCommand: function() {
                    return I
                },
                getFirstTextBlock: function() {
                    return b
                },
                applyTokensAsEntities: function() {
                    return y
                },
                createEmptyEditorState: function() {
                    return v
                },
                clearContent: function() {
                    return x
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
                    return F
                },
                setToStartSelection: function() {
                    return j
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
                    return B
                }
            });
            var l = n("98159"),
                r = n("952352"),
                u = n.n(r),
                a = n("401816"),
                s = n.n(a),
                i = n("958551"),
                o = n.n(i),
                c = n("661183"),
                d = n.n(c),
                f = n("823821"),
                g = n.n(f),
                m = n("928429"),
                M = n.n(m),
                E = n("234553"),
                S = n.n(E),
                T = n("65994"),
                _ = n.n(T),
                A = n("718144"),
                C = n.n(A),
                O = n("640330"),
                p = n.n(O);

            function N(e, t, n, r) {
                let u = r.getCurrentContent(),
                    a = null;
                null != e && (a = (u = u.createEntity(...e)).getLastCreatedEntityKey());
                let s = u.getFirstBlock(),
                    i = new l.SelectionState({
                        anchorKey: s.getKey(),
                        anchorOffset: t,
                        focusKey: s.getKey(),
                        focusOffset: n
                    });
                return u = l.Modifier.applyEntity(u, i, a), l.EditorState.set(r, {
                    currentContent: u
                })
            }

            function U(e, t, n, r) {
                let u, a;
                let i = t.getCurrentContent(),
                    o = i.getFirstBlock(),
                    c = o.getText();
                "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), u = new l.SelectionState({
                    anchorKey: o.getKey(),
                    anchorOffset: n,
                    focusKey: o.getKey(),
                    focusOffset: null != r && 0 !== r ? r : n
                })) : u = t.getSelection();
                let d = t.getCurrentInlineStyle(),
                    f = s(i, u);
                return u.isCollapsed() ? (i = l.Modifier.insertText(i, u, e, d, f), a = "insert-characters") : (i = l.Modifier.replaceText(i, u, e, d, f), a = "replace-characters"), l.EditorState.push(t, i, a)
            }

            function h(e, t) {
                switch (e) {
                    case "delete":
                        return C(t);
                    case "delete-word":
                        return g(t);
                    case "backspace":
                        return _(t);
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
                        return p(t);
                    case "move-selection-to-start-of-block":
                        return S(t);
                    case "move-selection-to-end-of-block":
                        return M(t);
                    default:
                        return t
                }
            }

            function b(e) {
                return e.getCurrentContent().getFirstBlock().getText()
            }

            function y(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = t.getCurrentContent(),
                    r = l.getFirstBlock(),
                    u = r.getText(),
                    a = [];
                return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
                    let n = l.getEntity(r.getEntityAt(e)).getType(),
                        s = u.substring(e, t);
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
                                start: u,
                                end: a
                            } = e, s = e.getFullMatch();
                            !n.processed && (n.type === r && n.start === u && n.text === s ? (n.processed = !0, l = !0) : (u >= n.start && u < n.end || a > n.start && a <= n.end) && (n.processed = !0, t = N(null, n.start, n.end, t)))
                        }), l) return;
                    let r = n[e.type];
                    t = N([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
                        token: e
                    }], e.start, e.end, t)
                }), a.forEach(e => {
                    !e.processed && (t = N(null, e.start, e.end, t))
                }), t
            }

            function v(e) {
                return l.EditorState.createEmpty(new l.CompositeDecorator(e))
            }

            function x(e) {
                let t = l.EditorState.push(e, l.ContentState.createFromText("")),
                    n = e.getSelection();
                return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
            }

            function R(e, t) {
                let n = b(t);
                return U(e, t, 0, n.length)
            }

            function L(e, t) {
                let n = t.getSelection();
                return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
            }

            function D(e) {
                let t = e.getCurrentContent().getFirstBlock().getText();
                return L(t.length, e)
            }

            function F(e) {
                return L(0, e)
            }

            function j(e) {
                let t = e.getSelection();
                return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
            }

            function k(e) {
                let t = b(e),
                    n = e.getSelection();
                return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
            }

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = b(e);
                if (n.length > t) {
                    let r = e.getSelection();
                    e = U("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
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
                let u = l.left - r.left,
                    a = u + e.scrollLeft;
                a < e.scrollLeft ? e.scrollLeft = a - 10 : a > e.scrollLeft + e.offsetWidth && (e.scrollLeft = a - e.offsetWidth + 3)
            }

            function B(e) {
                return 0 === b(e).length
            }
        }
    }
]);