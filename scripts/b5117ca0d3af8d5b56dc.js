(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21669"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        502546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BookmarkIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                r = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M19.379 11.379a3 3 0 0 0 4.242 0l.025-.025a.5.5 0 0 0 0-.708L13.353.353a.5.5 0 0 0-.707 0l-.025.026a3 3 0 0 0 0 4.242L13 5l-2.917 2.917-3.65-.332a2 2 0 0 0-1.595.577l-.631.63a1 1 0 0 0 0 1.415l9.586 9.586a1 1 0 0 0 1.414 0l.63-.63a2 2 0 0 0 .578-1.596l-.332-3.65L19 11l.379.379Zm-10.31 5.69a.5.5 0 0 1-.077.77l-5.151 3.434a.5.5 0 0 1-.63-.063l-.421-.42a.5.5 0 0 1-.063-.631l3.435-5.152a.5.5 0 0 1 .77-.076l2.137 2.138Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                s = n("884691"),
                r = n("414456"),
                i = n.n(r),
                l = n("587974"),
                u = n("315102"),
                d = n("524768"),
                c = n("616674"),
                o = n("363577");

            function m(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: r,
                    height: m,
                    className: f,
                    selectable: _ = !1,
                    onFocus: g,
                    onBlur: E,
                    onMouseOver: S,
                    onMouseLeave: h,
                    ...p
                } = e, [I, R] = s.useState(!1), M = s.useCallback(() => {
                    R(!0), null == g || g()
                }, [g]), v = s.useCallback(() => {
                    R(!1), null == E || E()
                }, [E]), A = s.useCallback(() => {
                    R(!0), null == S || S()
                }, [S]), y = s.useCallback(() => {
                    R(!1), null == h || h()
                }, [h]), k = s.useMemo(() => {
                    if (t.type === d.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return u.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: r
                        })
                    }
                    return o
                }, [t, r]);
                return (0, a.jsx)("div", {
                    ...p,
                    className: i(c.wrapper, f, {
                        [c.selectable]: _,
                        [c.selected]: _ && n
                    }),
                    onFocus: M,
                    onBlur: v,
                    onMouseOver: A,
                    onMouseLeave: y,
                    children: (0, a.jsx)(l.default, {
                        className: c.mask,
                        mask: _ && (n || I) ? l.MaskIDs.SQUIRCLE : l.MaskIDs.AVATAR_DEFAULT,
                        width: r,
                        height: m,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            className: c.icon,
                            style: {
                                width: r,
                                height: m
                            },
                            src: k
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                i = n("83910"),
                l = n("93393"),
                u = n("317041"),
                d = n("749296");
            let c = e => {
                switch (e.id) {
                    case u.BuiltInSectionId.BUILT_IN:
                        return i.default;
                    case u.BuiltInSectionId.FRECENCY:
                        return l.default;
                    default:
                        return
                }
            };

            function o(e) {
                let {
                    section: t,
                    className: n,
                    width: s,
                    height: i,
                    padding: l,
                    isSelected: u,
                    selectable: o = !1,
                    ...m
                } = e, f = c(t);
                return (0, a.jsx)("div", {
                    className: r(d.wrapper, n, {
                        [d.selectable]: o,
                        [d.selected]: o && u
                    }),
                    style: {
                        width: s,
                        height: i,
                        padding: null != l ? l : 0
                    },
                    children: null != f ? (0, a.jsx)(f, {
                        className: d.icon,
                        width: s,
                        height: i,
                        ...m
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return l
                },
                pxToRem: function() {
                    return u
                },
                getCommandQuery: function() {
                    return d
                }
            });
            var a = n("524768"),
                s = n("991630"),
                r = n("943161"),
                i = n("317041");
            let l = e => e.type === a.ApplicationCommandSectionType.BUILT_IN ? r.default : s.default;

            function u(e) {
                return "".concat(e / 16, "rem")
            }

            function d(e, t) {
                let n = t,
                    a = !1,
                    s = t.indexOf(":");
                if (s >= 0) {
                    let e = t.lastIndexOf(" ", s);
                    e >= 0 ? (t = t.substring(0, e), a = !0) : t = t.substring(0, s)
                } else t = t.substring(0, t.length);
                let r = t.split(" ", i.MAX_SUBCOMMAND_LEVEL + 1);
                return r.length > i.MAX_SUBCOMMAND_LEVEL && (a = !0, r.pop()), t = r.join(" "), (n.length > t.length || t.endsWith(" ")) && (a = !0, t = t.trimEnd()), {
                    text: t,
                    parts: r,
                    hasSpaceTerminator: a
                }
            }
        },
        695681: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                reportFalsePositive: function() {
                    return r
                },
                sendMessagesForScanning: function() {
                    return i
                }
            });
            var a = n("872717"),
                s = n("49111");

            function r(e, t, n, r) {
                return a.default.post({
                    url: s.Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
                    body: {
                        channel_id: e,
                        message_id: t,
                        attachment_ids: n,
                        embed_ids: r
                    }
                })
            }

            function i(e, t) {
                return a.default.patch({
                    url: s.Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
                    body: {
                        message_ids: t
                    }
                })
            }
        },
        931318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addMessageReminders: function() {
                    return _
                },
                updateReminderDueAt: function() {
                    return g
                },
                toggleMessageReminders: function() {
                    return E
                },
                completeMessageReminders: function() {
                    return S
                },
                cleanupMessageReminders: function() {
                    return h
                },
                fetchAndUpdateSavedMessages: function() {
                    return R
                }
            });
            var a = n("872717"),
                s = n("913144"),
                r = n("679653"),
                i = n("42203"),
                l = n("305961"),
                u = n("27618"),
                d = n("697218"),
                c = n("599110"),
                o = n("520899"),
                m = n("988864"),
                f = n("49111");

            function _(e, t) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: "".concat(o.default.getMessageReminders().length)
                }), I([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = i.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = l.default.getGuild(t.guild_id),
                            a = "",
                            s = (0, r.computeChannelName)(t, d.default, u.default, !0);
                        if (t.isPrivate()) a = s;
                        else if (t.isThread()) {
                            let e = i.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, r.computeChannelName)(e, d.default, u.default, !0);
                            a = "".concat(n, " > ").concat(s)
                        } else a = s;
                        let c = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
                        return {
                            authorSummary: e.author.username,
                            authorId: e.author.id,
                            channelSummary: a,
                            messageSummary: c.length > 200 ? "".concat(c.slice(0, 197), "...") : c,
                            guildId: null == n ? void 0 : n.id
                        }
                    }(e)
                }], [])
            }

            function g(e, t) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let n = o.default.getMessageReminders(),
                    a = n.find(t => t.messageId === e);
                null != a && I([{
                    ...a,
                    savedAt: new Date,
                    dueAt: t
                }], [a])
            }

            function E(e, t) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: t,
                    reason: "updating within the list",
                    rating: "".concat(o.default.getMessageReminders().length)
                }), s.default.dispatch({
                    type: "MESSAGE_REMINDER_TOGGLE",
                    messageId: e,
                    complete: t
                })
            }

            function S(e) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let t = o.default.getMessageReminders();
                I([], t.filter(t => t.messageId === e))
            }

            function h() {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let e = o.default.getMessageReminders();
                e.some(e => e.complete) && I([], e.filter(e => e.complete))
            }

            function p(e) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: "".concat(o.default.getMessageReminders().length)
                }), s.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function I(e, t) {
                (0 !== e.length || 0 !== t.length) && a.default.post({
                    url: f.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(m.savedMessageToServer),
                        removed: t.map(m.savedMessageToServer)
                    }
                }).then(e => {
                    p(e.body.saved_messages.map(m.savedMessageToClient))
                })
            }

            function R() {
                return o.default.recentlyFetched() ? Promise.resolve() : a.default.get({
                    url: f.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    let t = e.body.saved_messages,
                        n = t.map(m.savedMessageToClient);
                    p(n)
                })
            }
        },
        979268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_message_todos_staff_only",
                label: "Message TODO list",
                defaultConfig: {
                    showReminders: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show message TODOs CTA",
                    config: {
                        showReminders: !0
                    }
                }]
            });
            var r = s
        },
        520899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("446674"),
                s = n("913144"),
                r = n("718517");
            let i = [],
                l = new Set,
                u = 0;
            class d extends a.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * r.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return i
                }
                isMessageReminder(e) {
                    let t = i.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return i.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - u < 1 * r.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return l.has(e)
                }
                getState() {
                    return {
                        messages: i
                    }
                }
            }
            d.displayName = "MessageRemindersStore";
            var c = new d(s.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    u = new Date().getTime(), i = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && l.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && l.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, a = i.findIndex(e => e.messageId === t);
                    if (-1 === a) return !1;
                    i[a] = {
                        ...i[a],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    l.add(t)
                }
            })
        },
        988864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                savedMessageToServer: function() {
                    return r
                },
                savedMessageToClient: function() {
                    return i
                },
                savedMessageHasMetadata: function() {
                    return l
                },
                MESSAGE_REMINDER_DURATION_ITEMS: function() {
                    return u
                }
            });
            var a = n("718517"),
                s = n("782340");

            function r(e) {
                var t;
                return {
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    saved_at: e.savedAt.toISOString(),
                    author_summary: e.authorSummary,
                    channel_summary: e.channelSummary,
                    message_summary: e.messageSummary,
                    guild_id: e.guildId,
                    author_id: e.authorId,
                    notes: e.notes,
                    due_at: null === (t = e.dueAt) || void 0 === t ? void 0 : t.toISOString()
                }
            }

            function i(e) {
                return {
                    channelId: e.channel_id,
                    messageId: e.message_id,
                    savedAt: new Date(e.saved_at),
                    authorSummary: e.author_summary,
                    channelSummary: e.channel_summary,
                    messageSummary: e.message_summary,
                    guildId: 0 === e.guild_id ? void 0 : e.guild_id,
                    authorId: 0 === e.author_id ? void 0 : e.author_id,
                    notes: e.notes,
                    dueAt: null != e.due_at ? new Date(e.due_at) : void 0
                }
            }

            function l(e) {
                return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
            }
            let u = [{
                duration: a.default.Millis.HOUR,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
            }, {
                duration: 2 * a.default.Millis.HOUR,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
            }, {
                duration: 4 * a.default.Millis.HOUR,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
            }, {
                duration: a.default.Millis.DAY,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
            }, {
                duration: a.default.Millis.WEEK,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
            }]
        },
        178207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackStickerPickerOpen: function() {
                    return d
                },
                trackStickerFavorited: function() {
                    return c
                },
                trackStickerSearchStart: function() {
                    return o
                },
                trackStickerSearchResultsViewed: function() {
                    return m
                },
                trackStickerSearchSelect: function() {
                    return f
                },
                trackStickerSelect: function() {
                    return _
                },
                trackStickerSearchEmpty: function() {
                    return g
                }
            });
            var a = n("716241"),
                s = n("599110"),
                r = n("161585"),
                i = n("49111"),
                l = n("13030"),
                u = n("646718");
            let d = e => {
                    let {
                        containerWidth: t,
                        favoriteStickers: n,
                        frequentlyUsedStickers: s,
                        guildStickers: u,
                        stickersTotal: d
                    } = e;
                    a.default.trackWithMetadata(i.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                        width: t,
                        tab: l.ExpressionPickerViewType.STICKER,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter(e => (0, r.isAnimatedSticker)(e.format_type)).length,
                        num_custom_expressions_favorites: n.filter(e => (0, r.isCustomSticker)(e.type)).length,
                        num_standard_expressions_favorites: n.filter(e => !(0, r.isCustomSticker)(e.type)).length,
                        num_expressions_frecent: s.length,
                        num_custom_expressions_frecent: s.filter(e => (0, r.isCustomSticker)(e.type)).length,
                        num_animated_expressions_frecent: s.filter(e => (0, r.isAnimatedSticker)(e.format_type)).length,
                        num_standard_expressions_frecent: s.filter(e => !(0, r.isCustomSticker)(e.type)).length,
                        num_current_guild_expressions: u.length,
                        num_custom_expressions_total: d
                    })
                },
                c = e => {
                    let t, {
                        sticker: n,
                        location: s
                    } = e;
                    n.type === r.MetaStickerType.GUILD && (t = n.guild_id), a.default.trackWithMetadata(i.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: s,
                        expression_type: l.ExpressionPickerViewType.STICKER,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_guild_id: t,
                        is_animated: (0, r.isAnimatedSticker)(n.format_type),
                        is_custom: (0, r.isCustomSticker)(n.type)
                    })
                },
                o = () => {
                    s.default.track(i.AnalyticEvents.SEARCH_STARTED, {
                        search_type: i.SearchTypes.STICKER
                    })
                },
                m = (e, t, n) => {
                    a.default.trackWithMetadata(i.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: i.SearchTypes.STICKER,
                        total_results: t,
                        query: e,
                        is_suggestion: n
                    })
                },
                f = (e, t, n) => {
                    let s;
                    let {
                        sticker: l
                    } = e;
                    l.type === r.MetaStickerType.GUILD && (s = l.guild_id), a.default.trackWithMetadata(i.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        load_id: l.id,
                        search_type: i.SearchTypes.STICKER,
                        source_object: "Sticker Picker",
                        total_results: n,
                        expression_guild_id: s,
                        sticker_id: l.id,
                        query: t
                    })
                },
                _ = e => {
                    let t;
                    let {
                        sticker: n,
                        category: s
                    } = e;
                    n.type === r.MetaStickerType.GUILD && (t = n.guild_id), a.default.trackWithMetadata(i.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: u.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_picker_section: s,
                        expression_guild_id: t,
                        is_animated: (0, r.isAnimatedSticker)(n.format_type),
                        is_custom: (0, r.isCustomSticker)(n.type)
                    })
                },
                g = e => {
                    null != e && "" !== e && a.default.trackWithMetadata(i.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        query: e,
                        search_type: i.SearchTypes.STICKER,
                        source_object: "Sticker Picker"
                    })
                }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return s
                },
                default: function() {
                    return _
                }
            });
            var a, s, r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                u = n("77078"),
                d = n("36694"),
                c = n("381546"),
                o = n("68238"),
                m = n("423487"),
                f = n("557296");
            (a = s || (s = {}))[a.WARNING = 0] = "WARNING", a[a.INFO = 1] = "INFO", a[a.ERROR = 2] = "ERROR", a[a.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: a,
                    textColor: i = "text-normal",
                    textVariant: _ = "text-sm/medium"
                } = e, g = function(e) {
                    switch (e) {
                        case s.WARNING:
                            return m.default;
                        case s.INFO:
                            return o.default;
                        case s.ERROR:
                            return c.default;
                        case s.POSITIVE:
                            return d.default
                    }
                }(n), E = function(e) {
                    switch (e) {
                        case s.WARNING:
                            return f.warning;
                        case s.INFO:
                            return f.info;
                        case s.ERROR:
                            return f.error;
                        case s.POSITIVE:
                            return f.positive
                    }
                }(n);
                return (0, r.jsxs)("div", {
                    className: l(f.container, E, a),
                    children: [(0, r.jsx)("div", {
                        className: f.iconDiv,
                        children: (0, r.jsx)(g, {
                            className: f.icon
                        })
                    }), (0, r.jsx)(u.Text, {
                        className: f.text,
                        color: i,
                        variant: _,
                        children: t
                    })]
                })
            }
        },
        566998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                r = n("502546"),
                i = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...l
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: r,
                            fill: s,
                            d: "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
                        })
                    })
                }, r.BookmarkIcon)
        }
    }
]);