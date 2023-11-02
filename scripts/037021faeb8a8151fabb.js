(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["32435"], {
        575351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                r = n("884691"),
                u = n("446674"),
                a = n("77078"),
                s = n("679653"),
                i = n("929278"),
                o = n("347895"),
                d = n("848848"),
                E = n("735251"),
                c = n("534222"),
                f = n("592407"),
                _ = n("610730"),
                R = n("271938"),
                N = n("305961"),
                D = n("957255"),
                h = n("49111"),
                T = n("782340"),
                M = n("413075"),
                C = e => {
                    var t;
                    let {
                        channel: n,
                        onClose: C,
                        onConfirm: O,
                        transitionState: L
                    } = e, A = (0, s.default)(n, !0), m = n.id, S = n.isForumPost(), g = (0, u.useStateFromStores)([N.default], () => N.default.getGuild(n.getGuildId())), y = (0, c.useGuildChannelScheduledEvents)(m), {
                        isSubscriptionGated: w
                    } = (0, d.default)(n.id), I = (0, E.default)(g, n), [p, v] = r.useState(null), G = (0, u.useStateFromStores)([R.default], () => n.isOwner(R.default.getId()), [n]), b = (0, u.useStateFromStores)([D.default], () => D.default.can(n.isThread() ? h.Permissions.MANAGE_THREADS : h.Permissions.MANAGE_CHANNELS, n), [n]), Y = (0, u.useStateFromStores)([_.default], () => null !== (t = _.default.getCount(n.id)) && void 0 !== t ? t : 0, [n.id]), H = S && (b || G && Y < 1), U = y.length > 0 && (n.type === h.ChannelTypes.GUILD_VOICE || n.type === h.ChannelTypes.GUILD_STAGE_VOICE);
                    if (r.useEffect(() => {
                            (async () => {
                                let e = await (0, i.isDefaultChannelThresholdMetAfterDelete)(n.getGuildId(), m);
                                if (!e) {
                                    v("default");
                                    return
                                }
                                let t = await (0, o.getBlockForChannelDeletion)(n.getGuildId(), m);
                                if (!1 !== t) {
                                    v(t);
                                    return
                                }
                            })()
                        }, [n, m]), null != p) {
                        let e;
                        let t = T.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
                        return e = "todo" === p ? T.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === p ? T.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : T.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(a.ModalRoot, {
                            transitionState: L,
                            "aria-label": T.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: T.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(a.ModalContent, {
                                className: M.modalContent,
                                children: [(0, l.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    children: t
                                }), (0, l.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    children: e.format({
                                        onClick: () => {
                                            if (null != g) f.default.open(g.id, h.GuildSettingsSections.ONBOARDING), null == C || C()
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(a.ModalFooter, {
                                children: (0, l.jsx)(a.Button, {
                                    onClick: C,
                                    children: T.default.Messages.OKAY
                                })
                            })]
                        })
                    }
                    if (null == g) return null;
                    if (g.hasFeature(h.GuildFeatures.COMMUNITY) && (g.rulesChannelId === m || g.publicUpdatesChannelId === m)) {
                        let e = g.rulesChannelId === m,
                            t = e ? T.default.Messages.DELETE_RULES_CHANNEL_BODY : T.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
                        return (0, l.jsxs)(a.ModalRoot, {
                            transitionState: L,
                            "aria-label": T.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: T.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(a.ModalContent, {
                                children: [(0, l.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    className: M.modalText,
                                    children: t
                                }), (0, l.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    className: M.modalText,
                                    children: T.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
                                        onClick: () => {
                                            f.default.open(g.id, h.GuildSettingsSections.COMMUNITY), null == C || C()
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(a.ModalFooter, {
                                children: (0, l.jsx)(a.Button, {
                                    onClick: C,
                                    children: T.default.Messages.OKAY
                                })
                            })]
                        })
                    } {
                        let {
                            deleteText: e,
                            deleteBody: t
                        } = (() => {
                            if (n.type === h.ChannelTypes.GUILD_CATEGORY) return {
                                deleteText: T.default.Messages.DELETE_CATEGORY,
                                deleteBody: T.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: A
                                })
                            };
                            if (n.isForumPost()) return {
                                deleteText: H ? T.default.Messages.DELETE_FORUM_POST : T.default.Messages.DELETE_MESSAGE,
                                deleteBody: H && G && !b ? T.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
                                    postName: A
                                }) : H ? T.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
                                    postName: A
                                }) : T.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
                            };
                            if (n.isThread()) return {
                                deleteText: T.default.Messages.DELETE_THREAD,
                                deleteBody: T.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: A
                                })
                            };
                            else if (w && I > 0) return {
                                deleteText: T.default.Messages.DELETE_CHANNEL,
                                deleteBody: T.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
                                    channelName: A,
                                    numGuildRoleSubscriptionMembers: I
                                })
                            };
                            return {
                                deleteText: T.default.Messages.DELETE_CHANNEL,
                                deleteBody: T.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: A
                                })
                            }
                        })();
                        return (0, l.jsxs)(a.ModalRoot, {
                            transitionState: L,
                            "aria-label": e,
                            children: [(0, l.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, l.jsxs)(a.ModalContent, {
                                className: M.modalContent,
                                children: [(0, l.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    children: t
                                }), U ? (0, l.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    className: M.warningText,
                                    children: T.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
                                        count: y.length
                                    })
                                }) : null]
                            }), (0, l.jsxs)(a.ModalFooter, {
                                children: [(0, l.jsx)(a.Button, {
                                    onClick: O,
                                    color: a.Button.Colors.RED,
                                    children: e
                                }), (0, l.jsx)(a.Button, {
                                    onClick: C,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: T.default.Messages.CANCEL
                                })]
                            })]
                        })
                    }
                }
        },
        929278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isDefaultChannelThresholdMetAfterDelete: function() {
                    return f
                },
                checkDefaultChannelThresholdMetAfterChannelPermissionDeny: function() {
                    return R
                }
            });
            var l = n("316693"),
                r = n("404118"),
                u = n("592407"),
                a = n("305961"),
                s = n("685829"),
                i = n("863636"),
                o = n("380710"),
                d = n("653138"),
                E = n("49111"),
                c = n("782340");
            async function f(e, t) {
                return null == e || await _(e, t, {
                    removingView: !0,
                    removingChat: !0
                })
            }
            async function _(e, t, n) {
                var l;
                let r = a.default.getGuild(e);
                if (null == r) return !0;
                let u = null != r && (null === (l = r.features) || void 0 === l ? void 0 : l.has(E.GuildFeatures.GUILD_ONBOARDING));
                if (!u) return !0;
                u && i.default.shouldFetchPrompts(e) && await (0, s.fetchOnboardingPrompts)(e);
                let c = i.default.getDefaultChannelIds(e),
                    [f, _] = (0, o.getChattableDefaultChannels)(e, c),
                    R = c.includes(t);
                if (!R) return !0;
                let N = n.removingView && _.length - 1 < d.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
                    D = (n.removingChat || n.removingView) && f.length - 1 < d.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
                return !N && !D
            }
            async function R(e, t, n) {
                let a = e.getGuildId();
                if (null == a) return !0;
                null != n && (t = l.default.filter(t, l.default.invert(n)));
                let s = e.permissionOverwrites[a],
                    i = null != s ? l.default.filter(s.deny, l.default.invert(s.allow)) : l.default.deserialize(0),
                    o = {
                        removingView: l.default.has(t, E.Permissions.VIEW_CHANNEL) && !l.default.has(i, E.Permissions.VIEW_CHANNEL),
                        removingChat: !1
                    };
                if (e.isForumLikeChannel() ? o.removingChat = l.default.has(t, E.Permissions.SEND_MESSAGES_IN_THREADS) && !l.default.has(i, E.Permissions.SEND_MESSAGES_IN_THREADS) : o.removingChat = l.default.has(t, E.Permissions.SEND_MESSAGES) && !l.default.has(i, E.Permissions.SEND_MESSAGES), !o.removingChat && !o.removingView) return !0;
                let d = await _(a, e.id, o);
                return !!d || (r.default.show({
                    title: c.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                    body: c.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                        onClick: () => {
                            r.default.close(), u.default.open(a, E.GuildSettingsSections.ONBOARDING)
                        }
                    })
                }), !1)
            }
        },
        848848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getChannelRoleSubscriptionStatus: function() {
                    return d
                }
            });
            var l = n("446674"),
                r = n("203288"),
                u = n("42203"),
                a = n("957255"),
                s = n("49111");
            let i = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function o(e) {
                return (0, l.useStateFromStoresObject)([u.default, r.default, a.default], () => d(e, u.default, r.default, a.default), [e])
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.default,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
                    o = t.getChannel(e);
                if (null == o ? void 0 : o.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == o || !n.isChannelGated(o.guild_id, o.id)) return i;
                let d = o.isGuildVocal() ? !l.can(s.Permissions.CONNECT, o) : !l.can(s.Permissions.VIEW_CHANNEL, o);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: d
                }
            }
        },
        795228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691"),
                r = n("446674"),
                u = n("895026"),
                a = n("36402");
            let s = {};

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, r.useStateFromStores)([a.default], () => a.default.getRoleMemberCount(e));
                return l.useEffect(() => {
                    if (null == e) return;
                    let n = s[e],
                        l = null != n && t > 0 && Date.now() - n < t;
                    !l && (s[e] = Date.now(), u.fetchMemberCounts(e))
                }, [e, t]), n
            }
        },
        735251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("884691"),
                r = n("316693"),
                u = n("828674"),
                a = n("866595"),
                s = n("795228"),
                i = n("49111");

            function o(e, t) {
                let n = (0, s.default)(null == e ? void 0 : e.id);
                return l.useMemo(() => {
                    let l = null != e ? function(e, t) {
                            let n = new Set;
                            for (let l of Object.keys(t.permissionOverwrites)) {
                                let r = e.roles[l],
                                    s = t.permissionOverwrites[l];
                                (0, u.isSubscriptionRole)(r) && (0, a.isChannelAccessGrantedBy)(t, s) && n.add(r)
                            }
                            let l = e.getRole(e.id),
                                s = null != l && !r.default.has(l.permissions, i.Permissions.VIEW_CHANNEL),
                                o = (0, a.isChannelAccessDeniedBy)(t, t.permissionOverwrites[e.id]);
                            if (s && !o)
                                for (let t of Object.values(e.roles))(0, u.isSubscriptionRole)(t) && (0, a.isAllChannelsRole)(t) && n.add(t);
                            return [...n]
                        }(e, t) : [],
                        s = 0;
                    for (let e of l) {
                        let t = e.id;
                        if (null != t) {
                            let e = null == n ? void 0 : n[t];
                            null != e && (s += e)
                        }
                    }
                    return s
                }, [n, e, t])
            }
        },
        757767: function(e, t, n) {
            "use strict";
            var l, r;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return l
                }
            }), (r = l || (l = {}))[r.NONE = 0] = "NONE", r[r.WEEKLY = 1] = "WEEKLY", r[r.MONTHLY = 2] = "MONTHLY", r[r.YEARLY = 3] = "YEARLY", r[r.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY"
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return i
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return o
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return d
                },
                getInitialEventStartDate: function() {
                    return _
                },
                getEventTimeData: function() {
                    return D
                },
                getScheduleFromEventData: function() {
                    return T
                },
                getScheduleFromEvent: function() {
                    return M
                },
                getRRule: function() {
                    return C
                },
                generateNextRecurrences: function() {
                    return O
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return A
                },
                recurrenceRuleToOption: function() {
                    return m
                }
            });
            var l = n("917351"),
                r = n("866227"),
                u = n.n(r),
                a = n("614137"),
                s = n("757767");
            n("745049");
            let i = 365,
                o = i + 1,
                d = 4,
                E = [a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday],
                c = [a.RRule.SU.weekday, a.RRule.MO.weekday, a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday],
                f = [a.RRule.TU.weekday, a.RRule.WE.weekday, a.RRule.TH.weekday, a.RRule.FR.weekday, a.RRule.SA.weekday],
                _ = () => {
                    let e = u().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                R = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                N = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? R(e, t) : e.calendar(t)
                };

            function D(e, t, n) {
                null == n && (n = u());
                let l = u(e),
                    r = null != t && "" !== t ? u(t) : void 0,
                    a = null != t && l.isSame(r, "day");
                return {
                    startDateTimeString: N(l, n),
                    endDateTimeString: null != r ? a ? r.format("LT") : R(r, n) : void 0,
                    currentOrPastEvent: l <= n,
                    upcomingEvent: l <= u().add(1, "hour"),
                    withinStartWindow: l <= u().add(15, "minute"),
                    diffMinutes: l.diff(n, "minutes")
                }
            }

            function h(e, t) {
                let n;
                return null != e && (n = {
                    startDate: u(e),
                    endDate: void 0
                }, null != t && (n.endDate = u(t))), n
            }

            function T(e) {
                return h(e.scheduledStartTime, e.scheduledEndTime)
            }

            function M(e) {
                return h(e.scheduled_start_time, e.scheduled_end_time)
            }

            function C(e) {
                return new a.RRule({
                    dtstart: new Date(e.start),
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != e.byWeekday ? [...e.byWeekday] : null,
                    bymonth: null != e.byMonth ? [...e.byMonth] : null,
                    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
                    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
                    count: e.count
                })
            }

            function O(e, t, n) {
                let l = [],
                    r = null == n,
                    u = null != n ? n : new Date,
                    a = new Date;
                a.setFullYear(a.getFullYear() + d);
                let s = r ? e + 1 : e;
                for (let e = 0; e < s && u < a; e++) {
                    let n = t.after(u);
                    if (null == n) break;
                    u = new Date(n), n.setMilliseconds(0), (!r || e > 0) && l.push(n)
                }
                return l
            }

            function L(e) {
                let t = new a.Weekday(e.toDate().getDay()),
                    n = new a.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? f : n.weekday - t.weekday < 0 ? c : E
            }

            function A(e, t) {
                let n = function(e, t) {
                    let n = L(t),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case s.RecurrenceOptions.NONE:
                            return null;
                        case s.RecurrenceOptions.WEEKLY:
                            return new a.RRule({
                                dtstart: l,
                                freq: a.RRule.WEEKLY
                            });
                        case s.RecurrenceOptions.YEARLY:
                            return new a.RRule({
                                dtstart: l,
                                freq: a.RRule.YEARLY
                            });
                        case s.RecurrenceOptions.WEEKDAY_ONLY:
                            return new a.RRule({
                                dtstart: l,
                                freq: a.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                let {
                    dtstart: l,
                    until: r,
                    freq: u,
                    interval: i,
                    byweekday: o,
                    bymonth: d,
                    bymonthday: E,
                    byyearday: c,
                    count: f
                } = n.options;
                return {
                    start: l.toISOString(),
                    end: null == r ? void 0 : r.toISOString(),
                    frequency: u,
                    interval: i,
                    byWeekday: null != o ? new Set(o) : null,
                    byMonth: null != d ? new Set(d) : null,
                    byMonthDay: null != E ? new Set(E) : null,
                    byYearDay: null != c ? new Set(c) : null,
                    count: f
                }
            }

            function m(e, t) {
                if (null == t) return s.RecurrenceOptions.NONE;
                let n = C(t);
                switch (n.options.freq) {
                    case a.RRule.WEEKLY:
                        return s.RecurrenceOptions.WEEKLY;
                    case a.RRule.YEARLY:
                        return s.RecurrenceOptions.YEARLY;
                    case a.RRule.DAILY:
                        if (!(0, l.isEqual)(n.options.byweekday, L(e))) return s.RecurrenceOptions.NONE;
                        return s.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return s.RecurrenceOptions.NONE
                }
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return E
                },
                requestMembersForRole: function() {
                    return f
                }
            });
            var l = n("693566"),
                r = n.n(l),
                u = n("872717"),
                a = n("913144"),
                s = n("851387"),
                i = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await u.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function E(e) {
                i.default.shouldFetch(e) && await d(e)
            }
            let c = new r({
                maxAge: 1e4
            });

            function f(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == c.get(l)) {
                    var r, a;
                    return c.set(l, !0), r = e, a = t, u.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(r, a)
                    }).then(e => (s.default.requestMembersById(r, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                r = n("913144");
            let u = {},
                a = {};
            class s extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? u[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = a[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            s.displayName = "GuildRoleMemberCountStore";
            var i = new s(r.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    u[t] = n, a[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, r = u[t];
                    if (null == r) return !1;
                    r[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, r = u[t];
                    if (null == r || null == r[n]) return !1;
                    let a = Object.keys(l).length;
                    r[n] += a
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = u[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = u[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == u[t] && (u[t] = {}), u[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete u[t.id], delete a[t.id]
                }
            })
        }
    }
]);