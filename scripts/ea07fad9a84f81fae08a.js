(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65296"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                r = n.n(i),
                u = n("587974"),
                l = n("315102"),
                d = n("524768"),
                c = n("616674"),
                o = n("363577");

            function _(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: i,
                    height: _,
                    className: m,
                    selectable: f = !1,
                    onFocus: g,
                    onBlur: E,
                    onMouseOver: S,
                    onMouseLeave: p,
                    ...h
                } = e, [I, M] = s.useState(!1), A = s.useCallback(() => {
                    M(!0), null == g || g()
                }, [g]), y = s.useCallback(() => {
                    M(!1), null == E || E()
                }, [E]), R = s.useCallback(() => {
                    M(!0), null == S || S()
                }, [S]), v = s.useCallback(() => {
                    M(!1), null == p || p()
                }, [p]), k = s.useMemo(() => {
                    if (t.type === d.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return l.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: i
                        })
                    }
                    return o
                }, [t, i]);
                return (0, a.jsx)("div", {
                    ...h,
                    className: r(c.wrapper, m, {
                        [c.selectable]: f,
                        [c.selected]: f && n
                    }),
                    onFocus: A,
                    onBlur: y,
                    onMouseOver: R,
                    onMouseLeave: v,
                    children: (0, a.jsx)(u.default, {
                        className: c.mask,
                        mask: f && (n || I) ? u.MaskIDs.SQUIRCLE : u.MaskIDs.AVATAR_DEFAULT,
                        width: i,
                        height: _,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            className: c.icon,
                            style: {
                                width: i,
                                height: _
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
                i = n.n(s),
                r = n("83910"),
                u = n("93393"),
                l = n("317041"),
                d = n("749296");
            let c = e => {
                switch (e.id) {
                    case l.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case l.BuiltInSectionId.FRECENCY:
                        return u.default;
                    default:
                        return
                }
            };

            function o(e) {
                let {
                    section: t,
                    className: n,
                    width: s,
                    height: r,
                    padding: u,
                    isSelected: l,
                    selectable: o = !1,
                    ..._
                } = e, m = c(t);
                return (0, a.jsx)("div", {
                    className: i(d.wrapper, n, {
                        [d.selectable]: o,
                        [d.selected]: o && l
                    }),
                    style: {
                        width: s,
                        height: r,
                        padding: null != u ? u : 0
                    },
                    children: null != m ? (0, a.jsx)(m, {
                        className: d.icon,
                        width: s,
                        height: r,
                        ..._
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return u
                },
                pxToRem: function() {
                    return l
                },
                getCommandQuery: function() {
                    return d
                }
            });
            var a = n("524768"),
                s = n("991630"),
                i = n("943161"),
                r = n("317041");
            let u = e => e.type === a.ApplicationCommandSectionType.BUILT_IN ? i.default : s.default;

            function l(e) {
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
                let i = t.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return i.length > r.MAX_SUBCOMMAND_LEVEL && (a = !0, i.pop()), t = i.join(" "), (n.length > t.length || t.endsWith(" ")) && (a = !0, t = t.trimEnd()), {
                    text: t,
                    parts: i,
                    hasSpaceTerminator: a
                }
            }
        },
        695681: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                reportFalsePositive: function() {
                    return i
                },
                sendMessagesForScanning: function() {
                    return r
                }
            });
            var a = n("872717"),
                s = n("49111");

            function i(e, t, n, i) {
                return a.default.post({
                    url: s.Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
                    body: {
                        channel_id: e,
                        message_id: t,
                        attachment_ids: n,
                        embed_ids: i
                    }
                })
            }

            function r(e, t) {
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
                    return f
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
                    return p
                },
                fetchAndUpdateSavedMessages: function() {
                    return M
                }
            });
            var a = n("872717"),
                s = n("913144"),
                i = n("679653"),
                r = n("42203"),
                u = n("305961"),
                l = n("27618"),
                d = n("697218"),
                c = n("599110"),
                o = n("520899"),
                _ = n("988864"),
                m = n("49111");

            function f(e, t) {
                c.default.track(m.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: "".concat(o.default.getMessageReminders().length)
                }), I([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = r.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = u.default.getGuild(t.guild_id),
                            a = "",
                            s = (0, i.computeChannelName)(t, d.default, l.default, !0);
                        if (t.isPrivate()) a = s;
                        else if (t.isThread()) {
                            let e = r.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, i.computeChannelName)(e, d.default, l.default, !0);
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
                c.default.track(m.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
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
                c.default.track(m.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
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
                c.default.track(m.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let t = o.default.getMessageReminders();
                I([], t.filter(t => t.messageId === e))
            }

            function p() {
                c.default.track(m.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let e = o.default.getMessageReminders();
                e.some(e => e.complete) && I([], e.filter(e => e.complete))
            }

            function h(e) {
                c.default.track(m.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
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
                    url: m.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(_.savedMessageToServer),
                        removed: t.map(_.savedMessageToServer)
                    }
                }).then(e => {
                    h(e.body.saved_messages.map(_.savedMessageToClient))
                })
            }

            function M() {
                return o.default.recentlyFetched() ? Promise.resolve() : a.default.get({
                    url: m.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    let t = e.body.saved_messages,
                        n = t.map(_.savedMessageToClient);
                    h(n)
                })
            }
        },
        979268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
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
            var i = s
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
                i = n("718517");
            let r = [],
                u = new Set,
                l = 0;
            class d extends a.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * i.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return r
                }
                isMessageReminder(e) {
                    let t = r.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return r.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - l < 1 * i.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return u.has(e)
                }
                getState() {
                    return {
                        messages: r
                    }
                }
            }
            d.displayName = "MessageRemindersStore";
            var c = new d(s.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    l = new Date().getTime(), r = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && u.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && u.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, a = r.findIndex(e => e.messageId === t);
                    if (-1 === a) return !1;
                    r[a] = {
                        ...r[a],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    u.add(t)
                }
            })
        },
        988864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                savedMessageToServer: function() {
                    return i
                },
                savedMessageToClient: function() {
                    return r
                },
                savedMessageHasMetadata: function() {
                    return u
                },
                MESSAGE_REMINDER_DURATION_ITEMS: function() {
                    return l
                }
            });
            var a = n("718517"),
                s = n("782340");

            function i(e) {
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

            function r(e) {
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

            function u(e) {
                return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
            }
            let l = [{
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
                    return _
                },
                trackStickerSearchSelect: function() {
                    return m
                },
                trackStickerSelect: function() {
                    return f
                },
                trackStickerSearchEmpty: function() {
                    return g
                }
            });
            var a = n("716241"),
                s = n("599110"),
                i = n("161585"),
                r = n("49111"),
                u = n("13030"),
                l = n("646718");
            let d = e => {
                    let {
                        containerWidth: t,
                        favoriteStickers: n,
                        frequentlyUsedStickers: s,
                        guildStickers: l,
                        stickersTotal: d
                    } = e;
                    a.default.trackWithMetadata(r.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                        width: t,
                        tab: u.ExpressionPickerViewType.STICKER,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter(e => (0, i.isAnimatedSticker)(e.format_type)).length,
                        num_custom_expressions_favorites: n.filter(e => (0, i.isCustomSticker)(e.type)).length,
                        num_standard_expressions_favorites: n.filter(e => !(0, i.isCustomSticker)(e.type)).length,
                        num_expressions_frecent: s.length,
                        num_custom_expressions_frecent: s.filter(e => (0, i.isCustomSticker)(e.type)).length,
                        num_animated_expressions_frecent: s.filter(e => (0, i.isAnimatedSticker)(e.format_type)).length,
                        num_standard_expressions_frecent: s.filter(e => !(0, i.isCustomSticker)(e.type)).length,
                        num_current_guild_expressions: l.length,
                        num_custom_expressions_total: d
                    })
                },
                c = e => {
                    let t, {
                        sticker: n,
                        location: s
                    } = e;
                    n.type === i.MetaStickerType.GUILD && (t = n.guild_id), a.default.trackWithMetadata(r.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: s,
                        expression_type: u.ExpressionPickerViewType.STICKER,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_guild_id: t,
                        is_animated: (0, i.isAnimatedSticker)(n.format_type),
                        is_custom: (0, i.isCustomSticker)(n.type)
                    })
                },
                o = () => {
                    s.default.track(r.AnalyticEvents.SEARCH_STARTED, {
                        search_type: r.SearchTypes.STICKER
                    })
                },
                _ = (e, t, n) => {
                    a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: r.SearchTypes.STICKER,
                        total_results: t,
                        query: e,
                        is_suggestion: n
                    })
                },
                m = (e, t, n) => {
                    let s;
                    let {
                        sticker: u
                    } = e;
                    u.type === i.MetaStickerType.GUILD && (s = u.guild_id), a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        load_id: u.id,
                        search_type: r.SearchTypes.STICKER,
                        source_object: "Sticker Picker",
                        total_results: n,
                        expression_guild_id: s,
                        sticker_id: u.id,
                        query: t
                    })
                },
                f = e => {
                    let t;
                    let {
                        sticker: n,
                        category: s
                    } = e;
                    n.type === i.MetaStickerType.GUILD && (t = n.guild_id), a.default.trackWithMetadata(r.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: l.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_picker_section: s,
                        expression_guild_id: t,
                        is_animated: (0, i.isAnimatedSticker)(n.format_type),
                        is_custom: (0, i.isCustomSticker)(n.type)
                    })
                },
                g = e => {
                    null != e && "" !== e && a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        query: e,
                        search_type: r.SearchTypes.STICKER,
                        source_object: "Sticker Picker"
                    })
                }
        }
    }
]);