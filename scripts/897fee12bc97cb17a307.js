(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["95814"], {
        310013: function(e, t, n) {
            "use strict";
            var l = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var s = Object.getOwnPropertyNames(t);
                    r && (s = s.concat(Object.getOwnPropertySymbols(t)));
                    for (var i = 0; i < s.length; ++i)
                        if (!l[s[i]] && !a[s[i]] && (!n || !n[s[i]])) try {
                            e[s[i]] = t[s[i]]
                        } catch (e) {}
                }
                return e
            }
        },
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            }), n("424973");
            var l = n("37983"),
                a = n("884691"),
                r = n("310013"),
                s = n.n(r),
                i = n("407063");
            let u = /url\(['"](.*)['"]\)/,
                o = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(u);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends a.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: l
                        } = this.state, {
                            style: a
                        } = this.props, r = null != a ? o(a.backgroundImage) : null;
                        null == r && r !== n ? this.setState({
                            loaded: !0,
                            cached: r
                        }) : this.cachedURLs.indexOf(r) >= 0 ? this.setState({
                            loaded: !0,
                            cached: r
                        }) : null != r && r !== n && !0 === l && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(r))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, i.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...a
                        } = this.props, {
                            loaded: r,
                            cached: s
                        } = this.state;
                        if (!r && null != t) {
                            var i;
                            t = {
                                ...t,
                                backgroundImage: null == (i = s) || "" === i || "none" === i ? "none" : "url(".concat(i, ")")
                            }
                        }
                        return (0, l.jsx)(e, {
                            style: t,
                            ...a
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? o(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return s(t, e), t
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: i = "",
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: i = "",
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        772279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CompassIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM7.739 9.307A2 2 0 0 1 9.307 7.74l7.222-1.445a1 1 0 0 1 1.177 1.177l-1.444 7.222a2 2 0 0 1-1.57 1.569l-7.221 1.444a1 1 0 0 1-1.177-1.177L7.74 9.307Z",
                        clipRule: "evenodd",
                        className: i
                    })]
                })
            }
        },
        907572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FriendsIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M3 5v-.75C3 3.56 3.56 3 4.25 3s1.242.562 1.326 1.248C6.117 8.649 9.462 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.199-.147c-.289-.885-.841-1.723-1.317-2.31-.15-.184-.423-.056-.394.18l.25 1.996a.25.25 0 0 1-.248.281H9a2 2 0 0 1-2-2v-2.22c0-1.574-.671-3.054-1.53-4.374C3.888 10.969 3 7.888 3 5Z",
                        className: i
                    })]
                })
            }
        },
        358917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HeadphonesIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 3a9 9 0 0 0-8.945 10h1.862a5 5 0 0 1 4.097 2.133L10.39 17.1a3.104 3.104 0 0 1-.17 3.782c-.821.973-2.279 1.448-3.551.742A10.997 10.997 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 4.143-2.29 7.75-5.67 9.624-1.272.707-2.73.23-3.55-.742a3.104 3.104 0 0 1-.17-3.782l1.377-1.967A5 5 0 0 1 19.082 13h1.862A9 9 0 0 0 12 3Z",
                        className: i
                    })
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        className: i
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: i
                    })]
                })
            }
        },
        757767: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return l
                }
            }), (a = l || (l = {}))[a.NONE = 0] = "NONE", a[a.WEEKLY = 1] = "WEEKLY", a[a.MONTHLY = 2] = "MONTHLY", a[a.YEARLY = 3] = "YEARLY", a[a.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY"
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var r = a
        },
        776863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return i
                }
            }), n("808653"), n("424973");
            var l = n("446674"),
                a = n("923510"),
                r = n("923959"),
                s = n("957255");

            function i(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, l.useStateFromStoresArray)([r.default, s.default], () => {
                    let e = r.default.getChannels(n)[r.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let n = t.channel;
                        return n.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default;
                            return !!e.isGuildStageVoice() && t.can(a.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, s.default) && e.push(n), e) : e
                    }, [])
                }, [n])
            }
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return c
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return d
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return f
                },
                getInitialEventStartDate: function() {
                    return _
                },
                getEventTimeData: function() {
                    return m
                },
                getBaseScheduleForRecurrence: function() {
                    return N
                },
                getScheduleForRecurrenceWithException: function() {
                    return T
                },
                getScheduleFromEventData: function() {
                    return R
                },
                areDatesIdentical: function() {
                    return p
                },
                areSchedulesIdentical: function() {
                    return x
                },
                getRRule: function() {
                    return I
                },
                generateNextRecurrences: function() {
                    return L
                },
                getNextRecurrenceIdInEvent: function() {
                    return A
                },
                isValidRecurrence: function() {
                    return D
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return M
                },
                recurrenceRuleToOption: function() {
                    return j
                }
            }), n("222007"), n("424973");
            var l = n("917351"),
                a = n("866227"),
                r = n.n(a),
                s = n("614137"),
                i = n("249654"),
                u = n("718517"),
                o = n("757767");
            n("745049");
            let c = 365,
                d = c + 1,
                f = 4,
                E = [s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday],
                h = [s.RRule.SU.weekday, s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday],
                g = [s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday, s.RRule.SA.weekday],
                _ = () => {
                    let e = r().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                S = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                v = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? S(e, t) : e.calendar(t)
                };

            function m(e, t, n) {
                null == n && (n = r());
                let l = r(e),
                    a = null != t && "" !== t ? r(t) : void 0,
                    s = null != t && l.isSame(a, "day");
                return {
                    startDateTimeString: v(l, n),
                    endDateTimeString: null != a ? s ? a.format("LT") : S(a, n) : void 0,
                    currentOrPastEvent: l <= n,
                    upcomingEvent: l <= r().add(1, "hour"),
                    withinStartWindow: l <= r().add(15, "minute"),
                    diffMinutes: l.diff(n, "minutes")
                }
            }

            function C(e, t) {
                let n;
                return null != e && (n = {
                    startDate: r(e),
                    endDate: void 0
                }, null != t && (n.endDate = r(t))), n
            }

            function N(e, t) {
                let n = function(e) {
                        return C(e.scheduled_start_time, e.scheduled_end_time)
                    }(t),
                    l = r(i.default.extractTimestamp(e)),
                    a = (null == n ? void 0 : n.endDate) != null ? l.clone().add(n.endDate.diff(n.startDate)) : void 0;
                return {
                    startDate: l,
                    endDate: a
                }
            }

            function T(e, t) {
                var n;
                if (null == t) return e;
                let l = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
                return {
                    startDate: null != t.scheduled_start_time ? r(t.scheduled_start_time) : e.startDate,
                    endDate: null != l ? r(l) : void 0
                }
            }

            function R(e) {
                return C(e.scheduledStartTime, e.scheduledEndTime)
            }

            function p(e, t) {
                return null == e || null == t ? null == e && null == t : e.isSame(t)
            }

            function x(e, t) {
                return null == e || null == t ? null == e && null == t : p(e.startDate, t.startDate) && p(e.endDate, t.endDate)
            }

            function I(e) {
                let t = new Date(e.start);
                return t.setMilliseconds(0), new s.RRule({
                    dtstart: t,
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

            function L(e, t, n) {
                let l = [],
                    a = null == n,
                    r = null != n ? n : new Date,
                    s = new Date;
                s.setFullYear(s.getFullYear() + f);
                let i = a ? e + 1 : e;
                for (let e = 0; e < i && r < s; e++) {
                    let n = t.after(r);
                    if (null == n) break;
                    r = new Date(n), (!a || e > 0) && l.push(n)
                }
                return l
            }

            function A(e) {
                var t;
                let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
                return null != n ? i.default.fromTimestamp(Math.floor(n.getTime() / u.default.Millis.SECOND) * u.default.Millis.SECOND) : null
            }

            function D(e, t) {
                if (null == t || null == e) return !1;
                let n = new Date(e.start),
                    l = i.default.extractTimestamp(t),
                    a = new Date(l);
                if (n.getUTCHours() !== a.getUTCHours() || n.getUTCMinutes() !== a.getUTCMinutes() || n.getUTCSeconds() !== a.getUTCSeconds()) return !1;
                switch (e.frequency) {
                    case s.RRule.WEEKLY:
                        return n.getUTCDay() === a.getUTCDate();
                    case s.RRule.YEARLY:
                        return n.getUTCDay() === a.getUTCDay();
                    default:
                        return !0
                }
            }

            function y(e) {
                let t = new s.Weekday(e.toDate().getDay()),
                    n = new s.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? g : n.weekday - t.weekday < 0 ? h : E
            }

            function M(e, t) {
                let n = function(e, t) {
                    let n = y(t),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case o.RecurrenceOptions.NONE:
                            return null;
                        case o.RecurrenceOptions.WEEKLY:
                            return new s.RRule({
                                dtstart: l,
                                freq: s.RRule.WEEKLY
                            });
                        case o.RecurrenceOptions.YEARLY:
                            return new s.RRule({
                                dtstart: l,
                                freq: s.RRule.YEARLY
                            });
                        case o.RecurrenceOptions.WEEKDAY_ONLY:
                            return new s.RRule({
                                dtstart: l,
                                freq: s.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                let {
                    dtstart: l,
                    until: a,
                    freq: r,
                    interval: i,
                    byweekday: u,
                    bymonth: c,
                    bymonthday: d,
                    byyearday: f,
                    count: E
                } = n.options;
                return {
                    start: l.toISOString(),
                    end: null == a ? void 0 : a.toISOString(),
                    frequency: r,
                    interval: i,
                    byWeekday: null != u ? new Set(u) : null,
                    byMonth: null != c ? new Set(c) : null,
                    byMonthDay: null != d ? new Set(d) : null,
                    byYearDay: null != f ? new Set(f) : null,
                    count: E
                }
            }

            function j(e, t) {
                if (null == t) return o.RecurrenceOptions.NONE;
                let n = I(t);
                switch (n.options.freq) {
                    case s.RRule.WEEKLY:
                        return o.RecurrenceOptions.WEEKLY;
                    case s.RRule.YEARLY:
                        return o.RecurrenceOptions.YEARLY;
                    case s.RRule.DAILY:
                        if (!(0, l.isEqual)(n.options.byweekday, y(e))) return o.RecurrenceOptions.NONE;
                        return o.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return o.RecurrenceOptions.NONE
                }
            }
        },
        124163: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("782340"),
                s = n("93086");

            function i(e) {
                let {
                    sendStartNotification: t,
                    setSendStartNotification: n
                } = e, i = t ? r.default.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : r.default.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
                return (0, l.jsx)("div", {
                    className: s.notificationToggle,
                    children: (0, l.jsx)(a.Checkbox, {
                        type: a.Checkbox.Types.INVERTED,
                        size: 14,
                        className: s.checkbox,
                        value: t,
                        onChange: function() {
                            n(!t)
                        },
                        children: (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: (0, l.jsx)(a.Tooltip, {
                                position: "bottom",
                                tooltipClassName: s.tooltip,
                                text: r.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                "aria-label": r.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                children: e => (0, l.jsx)("span", {
                                    ...e,
                                    children: i
                                })
                            })
                        })
                    })
                })
            }
        },
        844808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                r = n("77078"),
                s = n("20606"),
                i = n("956089"),
                u = n("822516"),
                o = n("757767"),
                c = n("782340"),
                d = n("572721");
            let f = new Set([0, 6]);

            function E(e) {
                let {
                    startDate: t,
                    recurrenceRule: n,
                    onRecurrenceChange: E
                } = e, h = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, n), [n, t]), g = function(e) {
                    let t = e.toDate(),
                        n = t.toLocaleString(c.default.getLocale(), {
                            weekday: "long"
                        }),
                        l = [{
                            value: o.RecurrenceOptions.NONE,
                            label: c.default.Messages.CREATE_EVENT_RECUR_NONE
                        }, {
                            value: o.RecurrenceOptions.WEEKLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                                weekday: n
                            })
                        }, {
                            value: o.RecurrenceOptions.YEARLY,
                            label: c.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                                date: t.toLocaleString(c.default.getLocale(), {
                                    month: "short",
                                    day: "2-digit"
                                })
                            })
                        }];
                    return !f.has(t.getDay()) && l.push({
                        value: o.RecurrenceOptions.WEEKDAY_ONLY,
                        label: c.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }), l
                }(t), _ = e => e.toString(), S = (0, l.jsxs)("div", {
                    className: d.title,
                    children: [c.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, l.jsx)(i.TextBadge, {
                        text: c.default.Messages.NEW,
                        color: s.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, l.jsx)(r.FormItem, {
                    title: S,
                    required: !0,
                    children: (0, l.jsx)(r.Select, {
                        placeholder: "gaming",
                        options: g,
                        select: E,
                        serialize: _,
                        isSelected: e => null != h && _(e) === _(h)
                    })
                })
            }
        },
        953143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                r = n.n(a),
                s = n("77078"),
                i = n("812204"),
                u = n("685665"),
                o = n("381546"),
                c = n("351825"),
                d = n("651072"),
                f = n("822516"),
                E = n("844808"),
                h = n("782340"),
                g = n("234865");

            function _(e) {
                let {
                    className: t,
                    guildId: n,
                    onScheduleChange: a,
                    onRecurrenceChange: _,
                    onTimeChange: S,
                    timeSelected: v = !0,
                    schedule: m,
                    recurrenceRule: C,
                    showEndDate: N = !1,
                    requireEndDate: T = !1,
                    disableStartDateTime: R = !1
                } = e, {
                    analyticsLocations: p
                } = (0, u.default)(i.default.EVENT_SETTINGS), {
                    enabled: x
                } = d.default.useExperiment({
                    guildId: null != n ? n : "",
                    location: p[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == m) return null;
                let I = null,
                    L = m.startDate,
                    A = r(),
                    D = r().add(f.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    y = r().add(f.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
                null != C && (D.add(f.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), y.add(f.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
                let M = e => {
                    a({
                        ...m,
                        endDate: e
                    })
                };
                return null != L && d.default.trackExposure({
                    guildId: null != n ? n : "",
                    location: p[0]
                }), N && (I = null != m.endDate || T ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: g.doubleInput,
                        children: [(0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: T,
                            children: (0, l.jsx)(s.DateInput, {
                                value: m.endDate,
                                onSelect: M,
                                minDate: m.startDate,
                                maxDate: y
                            })
                        }), (0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: T,
                            children: (0, l.jsx)(s.TimeInput, {
                                value: m.endDate,
                                onChange: M
                            })
                        })]
                    }), T ? null : (0, l.jsx)(s.Button, {
                        onClick: () => {
                            M(void 0)
                        },
                        look: s.Button.Looks.BLANK,
                        size: s.Button.Sizes.MIN,
                        children: (0, l.jsxs)("div", {
                            className: g.link,
                            children: [(0, l.jsx)(o.default, {
                                width: 17,
                                height: 17,
                                className: g.removeIcon
                            }), (0, l.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: h.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, l.jsx)(s.Button, {
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    onClick: () => {
                        M(r(m.startDate).add(1, "hour"))
                    },
                    children: (0, l.jsxs)("div", {
                        className: g.link,
                        children: [(0, l.jsx)(c.default, {
                            width: 20,
                            height: 20,
                            className: g.addIcon
                        }), (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: h.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, l.jsxs)("div", {
                    className: t,
                    children: [(0, l.jsxs)("div", {
                        className: g.doubleInput,
                        children: [(0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, l.jsx)(s.DateInput, {
                                value: m.startDate,
                                onSelect: e => {
                                    a({
                                        ...m,
                                        startDate: e
                                    })
                                },
                                minDate: A,
                                maxDate: D,
                                disabled: R
                            })
                        }), (0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, l.jsx)(s.TimeInput, {
                                value: m.startDate,
                                onChange: e => {
                                    e.isValid() && (null == S || S(!0), a({
                                        ...m,
                                        startDate: e
                                    }))
                                },
                                hideValue: !v,
                                disabled: R
                            })
                        })]
                    }), I, x && null != L && null != _ && (0, l.jsx)(E.default, {
                        onRecurrenceChange: _,
                        startDate: L,
                        recurrenceRule: C
                    })]
                })
            }
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                s = n("77078"),
                i = n("849467"),
                u = n("782340"),
                o = n("130221");

            function c(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: a,
                    className: c
                } = e, d = n.slice(0, 5), f = d.map(e => {
                    var n, a;
                    return (0, l.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, l.jsx)(s.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: s.AvatarSizes.SIZE_20,
                            className: o.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, l.jsx)("div", {
                            className: o.textInGridContainer,
                            children: (0, l.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: o.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), E = a - d.length;
                return (0, l.jsxs)("div", {
                    className: r(o.grid, c),
                    children: [f, E > 0 && (0, l.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: o.iconMicrophone,
                            children: (0, l.jsx)(i.default, {
                                height: 12
                            })
                        }), (0, l.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: o.textInGrid,
                            children: u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: E
                            })
                        })]
                    })]
                })
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return s
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var l = n("913144"),
                a = n("599110"),
                r = n("49111");

            function s(e) {
                a.default.track(r.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), l.default.wait(() => {
                    l.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144"),
                r = n("197881"),
                s = n("492397");
            let i = new Set,
                u = {};
            class o extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(s.CONFERENCE_MODE_ENABLED || r.ProcessArgs.isDisallowPopupsSet()) && (n || !i.has(e))
                }
                hasHiddenHotspot(e) {
                    return i.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: i,
                        hotspotOverrides: u
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new o(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    i = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (i.has(t)) return !1;
                    i.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    u[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                }
            })
        },
        887143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanSendStageStartNotification: function() {
                    return i
                },
                useDefaultSendStartStageNotificationToggle: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("525065"),
                r = n("957255"),
                s = n("843455");

            function i(e) {
                let t = (0, l.useStateFromStores)([r.default], () => null != e && r.default.can(s.Permissions.MENTION_EVERYONE, e), [e]);
                return t
            }

            function u(e) {
                let t = null == e ? void 0 : e.guild_id,
                    n = (0, l.useStateFromStores)([a.default], () => a.default.getMemberCount(t), [t]);
                return null == e || null != n && !(n > 5e4) && !0
            }
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return i
                },
                useStageParticipantsCount: function() {
                    return u
                },
                useSortedRequestToSpeakParticipants: function() {
                    return o
                },
                useActualStageSpeakerCount: function() {
                    return c
                }
            }), n("222007");
            var l = n("446674"),
                a = n("334572"),
                r = n("488464"),
                s = n("998716");

            function i(e, t) {
                let [n] = (0, l.useStateFromStores)([r.default], () => [r.default.getMutableParticipants(e, t), r.default.getParticipantsVersion(e)], [e, t], a.isVersionEqual);
                return n
            }

            function u(e, t) {
                return (0, l.useStateFromStores)([r.default], () => r.default.getParticipantCount(e, t), [e, t])
            }

            function o(e) {
                let [t] = (0, l.useStateFromStores)([r.default], () => {
                    let t = r.default.getMutableRequestToSpeakParticipants(e);
                    return [t, r.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], a.isVersionEqual);
                return t
            }

            function c(e) {
                return (0, l.useStateFromStores)([r.default], () => {
                    let t = r.default.getMutableParticipants(e, s.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === s.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        193038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                s = n("77078"),
                i = n("272339"),
                u = n("333352"),
                o = function(e) {
                    let {
                        count: t,
                        className: n
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: r(u.container, n),
                        children: [(0, l.jsx)(i.default, {
                            width: 12,
                            height: 12,
                            className: u.icon
                        }), (0, l.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: null != t ? t : 0
                        })]
                    })
                }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                s = n("782340"),
                i = n("53061"),
                u = n("284434"),
                o = n("315956");

            function c(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: r(i.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: s.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: r(i.sparkleIcon, i.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: s.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u,
                        className: r(i.sparkleIcon, i.sparkleTop)
                    })]
                })
            }
        },
        911457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageDiscoveryRecommendationSource: function() {
                    return a
                },
                default: function() {
                    return _
                }
            });
            var l, a, r = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                u = n("77078"),
                o = n("687521"),
                c = n("29913"),
                d = n("580357"),
                f = n("476263"),
                E = n("228427"),
                h = n("193038"),
                g = n("366091");

            function _(e) {
                let {
                    guild: t,
                    stageInstance: n,
                    showGuildPopout: l,
                    setShowGuildPopout: a,
                    handleGuildNameClick: s,
                    source: _,
                    speakers: S,
                    speakerCount: v,
                    audienceCount: m,
                    channelName: C
                } = e, N = t.id;
                return (0, r.jsx)("div", {
                    className: g.contentContainer,
                    children: (0, r.jsxs)("div", {
                        className: g.headerContainer,
                        children: [(0, r.jsxs)("div", {
                            className: g.guildInfoContainer,
                            children: [(0, r.jsx)(o.default, {
                                guildId: N,
                                shouldShow: l,
                                onRequestClose: () => a(!1),
                                children: () => (0, r.jsxs)(u.Clickable, {
                                    className: g.flexContainerRow,
                                    onClick: s,
                                    children: [(0, r.jsx)(f.default, {
                                        guild: t,
                                        size: f.default.Sizes.MINI,
                                        className: g.guildIcon
                                    }), (0, r.jsxs)("div", {
                                        className: g.flexContainerRow,
                                        children: [(0, r.jsx)(u.Text, {
                                            color: "header-secondary",
                                            variant: "text-sm/normal",
                                            className: i(g.guildName, {
                                                [g.disabled]: null == s
                                            }),
                                            children: t.name
                                        }), (0, r.jsx)(d.default, {
                                            guild: t
                                        })]
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: g.rightJustifiedContent,
                                children: [6 === _ && (0, r.jsx)("div", {
                                    className: g.featuredTag,
                                    children: (0, r.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        className: g.featuredTagText,
                                        children: "Featured"
                                    })
                                }), (0, r.jsx)(h.default, {
                                    count: m,
                                    className: g.audienceCount
                                })]
                            })]
                        }), (0, r.jsx)(u.Text, {
                            color: "header-primary",
                            variant: "text-lg/semibold",
                            className: g.topicText,
                            children: n.topic
                        }), (0, r.jsx)(u.Text, {
                            color: "header-secondary",
                            className: g.description,
                            variant: "text-sm/normal",
                            children: n.description
                        }), (0, r.jsx)(c.default, {
                            guild: t,
                            speakers: S,
                            speakerCount: v,
                            className: g.speakers
                        }), null != C && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("hr", {
                                className: g.divider
                            }), (0, r.jsxs)("div", {
                                className: g.footer,
                                children: [(0, r.jsx)(E.default, {
                                    width: 20,
                                    height: 20,
                                    className: g.icon
                                }), (0, r.jsx)(u.Text, {
                                    color: "header-secondary",
                                    className: g.label,
                                    variant: "text-sm/normal",
                                    children: C
                                })]
                            })]
                        })]
                    })
                })
            }(l = a || (a = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.TRENDING = 1] = "TRENDING", l[l.PERSONALIZED = 2] = "PERSONALIZED", l[l.USER_GUILDS = 3] = "USER_GUILDS", l[l.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", l[l.INTRO_CARD = 5] = "INTRO_CARD", l[l.FEATURED = 6] = "FEATURED"
        },
        444594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("424973");
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                s = n("697218"),
                i = n("627490"),
                u = n("987772"),
                o = n("564875"),
                c = n("625687"),
                d = n("701909"),
                f = n("387111"),
                E = n("567469"),
                h = n("998716"),
                g = n("911457"),
                _ = n("49111"),
                S = n("745049"),
                v = n("782340"),
                m = n("600329");

            function C(e) {
                let {
                    icon: t
                } = e;
                return (0, l.jsx)("div", {
                    className: m.iconContainer,
                    children: (0, l.jsx)(t, {
                        width: 24,
                        height: 24
                    })
                })
            }

            function N(e) {
                let {
                    icon: t,
                    text: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: m.listItemContainer,
                    children: [(0, l.jsx)("div", {
                        className: m.listItemIconContainer,
                        children: t
                    }), (0, l.jsx)(r.Text, {
                        className: m.listItemText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: n
                    })]
                })
            }

            function T(e) {
                var t;
                let {
                    guild: n,
                    channel: r,
                    stageData: i
                } = e, u = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser(), []), o = {
                    id: "1337",
                    guild_id: n.id,
                    channel_id: r.id,
                    topic: i.topic,
                    description: i.description,
                    privacy_level: null !== (t = i.privacyLevel) && void 0 !== t ? t : S.GuildScheduledEventPrivacyLevel.PUBLIC
                }, c = (0, E.useStageParticipants)(r.id, h.StageChannelParticipantNamedIndex.SPEAKER), d = (0, E.useStageParticipantsCount)(r.id, h.StageChannelParticipantNamedIndex.AUDIENCE), _ = c.slice(0, 5);
                return null == _.find(e => {
                    var t;
                    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == u ? void 0 : u.id)
                }) && _.push({
                    user: u,
                    userNick: f.default.getName(n.id, r.id, u)
                }), (0, l.jsx)("div", {
                    className: m.previewCardContainer,
                    children: (0, l.jsx)("div", {
                        className: m.previewCard,
                        children: (0, l.jsx)(g.default, {
                            guild: n,
                            stageInstance: o,
                            showGuildPopout: !1,
                            setShowGuildPopout: () => {},
                            source: g.StageDiscoveryRecommendationSource.UNSPECIFIED,
                            speakers: _,
                            speakerCount: c.length,
                            audienceCount: Math.max(1337, d),
                            channelName: r.name
                        })
                    })
                })
            }

            function R(e) {
                let {
                    guild: t,
                    channel: n,
                    stageData: a,
                    headerId: s,
                    loading: f,
                    onNext: E,
                    onCancel: h,
                    onBack: g
                } = e;
                return null == t || null == n || null == a ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(T, {
                        guild: t,
                        channel: n,
                        stageData: a
                    }), (0, l.jsxs)(r.ModalContent, {
                        className: m.container,
                        children: [(0, l.jsxs)("div", {
                            className: m.header,
                            children: [(0, l.jsx)(r.Heading, {
                                id: s,
                                className: m.title,
                                variant: "heading-xl/semibold",
                                children: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
                            }), (0, l.jsx)(r.Text, {
                                className: m.subtitle,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
                            })]
                        }), (0, l.jsxs)("div", {
                            className: m.list,
                            children: [(0, l.jsx)(N, {
                                icon: (0, l.jsx)(C, {
                                    icon: i.default
                                }),
                                text: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
                            }), (0, l.jsx)(N, {
                                icon: (0, l.jsx)(C, {
                                    icon: o.default
                                }),
                                text: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
                            }), (0, l.jsx)(N, {
                                icon: (0, l.jsx)(C, {
                                    icon: u.default
                                }),
                                text: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
                            }), (0, l.jsx)(N, {
                                icon: (0, l.jsx)(c.default, {
                                    className: m.badgeIconBackground,
                                    foreground: m.badgeIconForeground,
                                    width: 40,
                                    height: 40
                                }),
                                text: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
                                    articleURL: d.default.getArticleURL(_.HelpdeskArticles.STAGE_CHANNEL_GUIDELINES)
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(r.ModalFooter, {
                        children: [(0, l.jsx)(r.Button, {
                            color: r.Button.Colors.GREEN,
                            onClick: E,
                            submitting: f,
                            children: v.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        }), (0, l.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            className: m.cancelButton,
                            onClick: h,
                            children: v.default.Messages.CANCEL
                        }), (0, l.jsx)(r.Button, {
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.LINK,
                            className: m.backButton,
                            onClick: g,
                            size: r.Button.Sizes.MIN,
                            children: v.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        813934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                r = n("866227"),
                s = n.n(r),
                i = n("446674"),
                u = n("77078"),
                o = n("679653"),
                c = n("776863"),
                d = n("822516"),
                f = n("124163"),
                E = n("953143"),
                h = n("269596"),
                g = n("27618"),
                _ = n("697218"),
                S = n("228427"),
                v = n("599110"),
                m = n("887143"),
                C = n("834052"),
                N = n("151642"),
                T = n("29846"),
                R = n("837979"),
                p = n("49111"),
                x = n("745049"),
                I = n("533613"),
                L = n("782340"),
                A = n("529555");

            function D(e) {
                let {
                    stageChannelsInGuild: t,
                    channel: n,
                    onSelectChannel: a
                } = e;
                return null == a ? null : (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(u.FormItem, {
                        title: L.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
                        className: A.channelSelectionFormItem,
                        required: !0,
                        children: (0, l.jsx)(u.SearchableSelect, {
                            value: n.id,
                            options: t.map(e => ({
                                value: e.id,
                                label: (0, o.computeChannelName)(e, _.default, g.default, !0)
                            })),
                            onChange: e => {
                                let n = t.find(t => t.id === e);
                                null != n && a(n)
                            },
                            renderOptionPrefix: () => (0, l.jsx)(S.default, {
                                height: 24
                            })
                        })
                    })
                })
            }

            function y(e) {
                var t, n, r, g, _, S, y, M;
                let {
                    channel: j,
                    guild: O,
                    header: w,
                    error: k,
                    loading: G,
                    onSave: U,
                    onEventSave: P,
                    onClose: V,
                    onSelectChannel: B,
                    isEvent: b = !1,
                    defaultOptions: H,
                    isSlideReady: Y = !0
                } = e, F = a.useMemo(() => C.default.getStageInstanceByChannel(j.id), [j.id]), [W, Z] = a.useState(null !== (n = null !== (t = null == H ? void 0 : H.topic) && void 0 !== t ? t : null == F ? void 0 : F.topic) && void 0 !== n ? n : ""), [z, K] = a.useState(null !== (r = null == H ? void 0 : H.description) && void 0 !== r ? r : ""), [q] = a.useState(b), [X, J] = a.useState(null !== (g = null == H ? void 0 : H.schedule) && void 0 !== g ? g : {
                    startDate: (0, d.getInitialEventStartDate)()
                }), [Q, $] = a.useState(q && (null == H ? void 0 : H.schedule) != null), ee = (0, m.useCanSendStageStartNotification)(j), et = (0, m.useDefaultSendStartStageNotificationToggle)(j), en = null == F && ee && !q, [el, ea] = a.useState(en && et), er = (0, i.useStateFromStores)([h.default], () => h.default.hasHotspot(I.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), es = x.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [ei] = a.useState(null !== (S = null !== (_ = null == H ? void 0 : H.privacyLevel) && void 0 !== _ ? _ : null == F ? void 0 : F.privacy_level) && void 0 !== S ? S : es), [eu, eo] = a.useState(null == H ? void 0 : H.recurrenceRule), ec = (0, N.useStageBlockedUsersCount)(j.id), [ed, ef] = a.useState(!1), eE = (0, o.default)(j), eh = (0, c.useChannelsUserCanStartStageIn)(O), eg = null != B, e_ = eh.length > 1;
                a.useEffect(() => {
                    v.default.track(p.AnalyticEvents.START_STAGE_OPENED, {
                        stage_instance_id: null == F ? void 0 : F.id,
                        can_start_public_stage: !1,
                        guild_id: j.guild_id
                    })
                }, []);
                let eS = e => {
                    if (e.preventDefault(), ei === x.GuildScheduledEventPrivacyLevel.PUBLIC && W.length < 20 && !ed) {
                        ef(!0);
                        return
                    }
                    let t = {
                        topic: W,
                        privacyLevel: ei,
                        sendStartNotification: el
                    };
                    if (q) {
                        if (!Q) return;
                        null == P || P({
                            ...t,
                            schedule: X,
                            description: z,
                            entityType: x.GuildScheduledEventEntityTypes.STAGE_INSTANCE
                        });
                        return
                    }
                    null == U || U(t)
                };
                let {
                    color: ev,
                    text: em
                } = (y = F, M = ei, q ? {
                    color: u.Button.Colors.BRAND,
                    text: L.default.Messages.SCHEDULE_EVENT
                } : M === x.GuildScheduledEventPrivacyLevel.PUBLIC && (null == y ? void 0 : y.privacy_level) !== x.GuildScheduledEventPrivacyLevel.PUBLIC ? {
                    color: u.Button.Colors.BRAND,
                    text: L.default.Messages.CONTINUE
                } : null == y ? {
                    color: u.Button.Colors.GREEN,
                    text: L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                } : {
                    color: u.Button.Colors.BRAND,
                    text: L.default.Messages.SAVE_CHANGES
                }), eC = a.useRef(null);
                a.useEffect(() => {
                    var e;
                    Y && (null === (e = eC.current) || void 0 === e || e.focus())
                }, [Y]);
                let eN = Q && null != X.startDate && X.startDate >= s();
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(u.ModalContent, {
                        className: A.modalContent,
                        children: [w, (0, l.jsx)("div", {
                            className: A.blockedUsersContainer,
                            children: null == F && ec > 0 && (0, l.jsx)(T.BlockedUsersNotice, {
                                channelId: j.id
                            })
                        }), (0, l.jsxs)("form", {
                            onSubmit: eS,
                            className: A.form,
                            children: [(0, l.jsxs)(u.FormItem, {
                                title: b ? L.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                                className: A.topicFormItem,
                                required: !0,
                                children: [(0, l.jsx)(u.TextInput, {
                                    className: A.textInput,
                                    onChange: e => Z(e),
                                    placeholder: L.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                                    maxLength: R.MAX_STAGE_TOPIC_LENGTH,
                                    value: W,
                                    autoComplete: "off",
                                    inputRef: eC
                                }), ed && (0, l.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-warning",
                                    className: A.warning,
                                    children: L.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
                                }), null != k ? (0, l.jsx)(u.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: A.warning,
                                    children: k.getAnyErrorMessage()
                                }) : null]
                            }), eg && e_ ? (0, l.jsx)(D, {
                                stageChannelsInGuild: eh,
                                channel: j,
                                onSelectChannel: B
                            }) : null, q && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(E.default, {
                                    className: A.formItem,
                                    onScheduleChange: J,
                                    onRecurrenceChange: e => {
                                        let t = X.startDate;
                                        if (null == t) return;
                                        let n = (0, d.recurrenceOptionToRecurrenceRule)(e, t);
                                        eo(n)
                                    },
                                    schedule: X,
                                    recurrenceRule: eu,
                                    timeSelected: Q,
                                    onTimeChange: $
                                }), null != X.startDate && X.startDate < s() ? (0, l.jsx)(u.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: A.warning,
                                    children: L.default.Messages.GUILD_EVENT_PAST_START_DATE
                                }) : null]
                            }), b && (0, l.jsx)(u.FormItem, {
                                title: L.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                                className: A.formItem,
                                children: (0, l.jsx)(u.TextArea, {
                                    placeholder: L.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                    value: z,
                                    onChange: e => K(e),
                                    maxLength: x.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
                                })
                            }), en ? (0, l.jsx)(f.default, {
                                sendStartNotification: el,
                                setSendStartNotification: ea,
                                showNotificationNewBadge: er
                            }) : null, eg && !e_ ? (0, l.jsx)(u.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: A.channelSelection,
                                children: L.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
                                    stageName: eE,
                                    stageHook: (e, t) => (0, l.jsx)("span", {
                                        className: A.channelName,
                                        children: j.name
                                    }, t)
                                })
                            }) : null]
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            color: ev,
                            onClick: eS,
                            disabled: "" === W || null == ei || b && !eN,
                            submitting: G,
                            children: em
                        }), (0, l.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            className: A.cancelButton,
                            onClick: V,
                            children: L.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        435768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("446674"),
                s = n("77078"),
                i = n("305961"),
                u = n("476765"),
                o = n("228427"),
                c = n("834052"),
                d = n("119184"),
                f = n("444594"),
                E = n("813934"),
                h = n("767680"),
                g = n("249873"),
                _ = n("837979"),
                S = n("782340"),
                v = n("636843");

            function m(e) {
                let {
                    guild: t,
                    channel: n,
                    stageInstance: a,
                    headerId: r,
                    onClose: i,
                    loading: u,
                    error: c,
                    onSave: f,
                    defaultOptions: h,
                    isSlideReady: g
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: v.content,
                        children: [(0, l.jsx)(d.default, {
                            children: (0, l.jsx)("div", {
                                className: v.stageIconBackground,
                                children: (0, l.jsx)(o.default, {
                                    width: 32,
                                    height: 32,
                                    className: v.stageIcon
                                })
                            })
                        }), (0, l.jsx)(s.Heading, {
                            id: r,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: v.headerTitle,
                            children: null == a ? S.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : S.default.Messages.EDIT_STAGE_CHANNEL_TITLE
                        }), (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: v.headerSubtitle,
                            children: null == a ? S.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : S.default.Messages.EDIT_STAGE_SUBTITLE
                        })]
                    }), (0, l.jsx)(E.default, {
                        guild: t,
                        channel: n,
                        onSave: f,
                        error: c,
                        loading: u,
                        onClose: i,
                        defaultOptions: h,
                        isSlideReady: g
                    })]
                })
            }

            function C(e) {
                let {
                    channel: t,
                    onClose: n,
                    transitionState: o,
                    ...d
                } = e, E = (0, u.useUID)(), S = (0, r.useStateFromStores)([i.default], () => i.default.getGuild(t.guild_id)), C = a.useMemo(() => c.default.getStageInstanceByChannel(t.id), [t.id]), {
                    loading: N,
                    error: T,
                    onSave: R
                } = (0, h.default)(t, n), {
                    modalStep: p,
                    setModalStep: x,
                    readySlide: I,
                    handleSlideReady: L,
                    savedOptions: A,
                    handleSettingsSave: D,
                    handleDelayedSave: y
                } = (0, g.default)({
                    stageInstance: C,
                    defaultStep: _.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                    error: T,
                    onSave: R
                });
                return (a.useEffect(() => {
                    null == S && n()
                }, [S, n]), null == S) ? null : (0, l.jsx)(s.ModalRoot, {
                    transitionState: o,
                    "aria-labelledby": E,
                    ...d,
                    size: s.ModalSize.SMALL,
                    children: (0, l.jsxs)(s.Slides, {
                        activeSlide: p,
                        width: 440,
                        onSlideReady: L,
                        children: [(0, l.jsx)(s.Slide, {
                            id: _.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                            children: (0, l.jsx)("div", {
                                className: v.slideContainer,
                                children: (0, l.jsx)(m, {
                                    guild: S,
                                    channel: t,
                                    stageInstance: C,
                                    headerId: E,
                                    onClose: n,
                                    loading: N,
                                    error: T,
                                    onSave: D,
                                    defaultOptions: A,
                                    isSlideReady: I === _.StartStageSteps.STAGE_CHANNEL_SETTINGS
                                })
                            })
                        }), (0, l.jsx)(s.Slide, {
                            id: _.StartStageSteps.PUBLIC_STAGE_PREVIEW,
                            children: (0, l.jsx)("div", {
                                className: v.slideContainer,
                                children: (0, l.jsx)(f.default, {
                                    headerId: E,
                                    guild: S,
                                    channel: t,
                                    stageData: A,
                                    loading: N,
                                    onNext: y,
                                    onCancel: n,
                                    onBack: () => x(_.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                                })
                            })
                        })]
                    })
                })
            }
        },
        767680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("884691"),
                a = n("851387"),
                r = n("987317"),
                s = n("448993"),
                i = n("597517"),
                u = n("887143"),
                o = n("244480"),
                c = n("834052"),
                d = n("533613");

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    [f, E] = l.useState(!1),
                    [h, g] = l.useState(null),
                    _ = l.useMemo(() => c.default.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
                    S = (0, u.useCanSendStageStartNotification)(e),
                    v = async l => {
                        let {
                            topic: u,
                            privacyLevel: c,
                            sendStartNotification: f
                        } = l;
                        if (null != e && "" !== u && null != c) {
                            E(!0), g(null), null != n && (a.default.selectGuild(n), r.default.selectVoiceChannel(e.id));
                            try {
                                let n;
                                null != _ ? n = await o.editStage(e, u, c) : (n = await o.startStage(e, u, c, null != f && f), S && i.hideHotspot(d.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
                            } catch (t) {
                                let e = new s.APIError(t);
                                g(e), E(!1)
                            }
                        }
                    };
                return {
                    loading: f,
                    error: h,
                    onSave: v
                }
            }
        },
        249873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var l = n("884691"),
                a = n("627445"),
                r = n.n(a),
                s = n("837979"),
                i = n("745049");

            function u(e) {
                let {
                    stageInstance: t,
                    defaultStep: n,
                    error: a,
                    onSave: u
                } = e, [o, c] = l.useState(n), [d, f] = l.useState(), [E, h] = l.useState(null);
                return l.useEffect(() => {
                    null != a && c(s.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                }, [a]), {
                    modalStep: o,
                    setModalStep: c,
                    readySlide: E,
                    handleSlideReady: function(e) {
                        return h(e)
                    },
                    savedOptions: d,
                    handleSettingsSave: function(e) {
                        if (f(e), e.privacyLevel === i.GuildScheduledEventPrivacyLevel.PUBLIC && (null == t ? void 0 : t.privacy_level) !== i.GuildScheduledEventPrivacyLevel.PUBLIC) {
                            c(s.StartStageSteps.PUBLIC_STAGE_PREVIEW);
                            return
                        }
                        u(e)
                    },
                    handleDelayedSave: function() {
                        r(null != d, "Must have some saved options."), u(d)
                    }
                }
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("414456"),
                s = n.n(r),
                i = n("77078"),
                u = n("760607"),
                o = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: r,
                    flowerStarClassName: c,
                    ...d
                } = e, f = a.Children.only(t), E = (0, i.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: s(o.flowerStarContainer, r),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(u.default, {
                        ...d,
                        className: s(c, o.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: s(o.childContainer, {
                            [o.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }
        },
        476263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("414456"),
                s = n.n(r),
                i = n("90915"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("80300"),
                f = n("471671"),
                E = n("103603"),
                h = n("474293"),
                g = n("580357"),
                _ = n("491088");
            let S = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                v = {
                    [S.SMOL]: 16,
                    [S.MINI]: 20,
                    [S.SMALLER]: 24,
                    [S.SMALL]: 30,
                    [S.MEDIUM]: 40,
                    [S.LARGE]: 50,
                    [S.LARGER]: 64,
                    [S.XLARGE]: 100
                },
                m = {
                    [S.SMOL]: [10, 10, 8, 6, 6, 4],
                    [S.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [S.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [S.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [S.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [S.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [S.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [S.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class C extends a.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, l.jsx)("div", {
                        className: _.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: n
                    } = this.props;
                    return e && null != t.hasFeature ? (0, l.jsx)(g.default, {
                        className: _.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: n,
                        className: a,
                        showBadge: r,
                        active: i,
                        size: u,
                        style: o = {},
                        textScale: d,
                        showTooltip: f,
                        tooltipPosition: E,
                        onClick: g,
                        to: S,
                        badgeStrokeColor: v,
                        animate: C,
                        tabIndex: N,
                        iconSrc: T,
                        "aria-hidden": R,
                        ...p
                    } = this.props, x = m[u], I = null != g ? c.Clickable : "div";
                    return (0, l.jsxs)(I, {
                        className: s(_.icon, a, (0, h.getClass)(_, "iconSize", u), {
                            [null !== (e = (0, h.getClass)(_, "iconActive", u)) && void 0 !== e ? e : ""]: i,
                            [_.iconInactive]: !i,
                            [_.noIcon]: null == n.icon
                        }),
                        "aria-hidden": R,
                        style: null == n.icon ? {
                            fontSize: (null !== (t = x[n.acronym.length]) && void 0 !== t ? t : x[x.length - 1]) * d,
                            ...o
                        } : o,
                        onClick: null != S || null == g ? void 0 : g,
                        tabIndex: N,
                        ...p,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: n
                    } = this.props;
                    return t ? (0, l.jsx)(c.Tooltip, {
                        text: e.name,
                        position: n,
                        "aria-label": !1,
                        children: e => a.cloneElement(a.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: n,
                        tabIndex: a,
                        "aria-hidden": r
                    } = this.props;
                    return null != e ? (0, l.jsx)(i.Link, {
                        "aria-hidden": r,
                        to: {
                            pathname: e,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: a,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let N = u.default.connectStores([f.default], e => {
                let {
                    guild: t,
                    animate: n,
                    iconSrc: l,
                    style: a,
                    size: r
                } = e;
                return {
                    style: {
                        ...a,
                        backgroundImage: (0, E.makeCssUrlString)(null != l ? l : t.getIconURL(v[r], n && f.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, l.jsx)(C, {
                ...e
            })));
            class T extends a.PureComponent {
                render() {
                    return (0, l.jsx)(N, {
                        ...this.props
                    })
                }
            }
            T.Sizes = S, T.defaultProps = {
                size: S.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: o.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var R = T
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return i
                },
                UID: function() {
                    return u
                }
            });
            var l = n("995008"),
                a = n.n(l),
                r = n("775560");
            let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return a(e)
                },
                i = () => (0, r.useLazyValue)(() => s()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(i())
                }
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("505088"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        backgroundColor: i,
                        ...u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != i ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: i
                        }) : null, (0, l.jsx)("path", {
                            fill: a,
                            className: r,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, r.CircleXIcon, void 0, {
                    size: 24
                })
        },
        627490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("772279"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        className: r,
                        foreground: i,
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(u),
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                        })
                    })
                }, r.CompassIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196"),
                r = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        272339: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("358917"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            children: (0, l.jsx)("path", {
                                d: "M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z",
                                className: r,
                                fill: a
                            })
                        })
                    })
                }, r.HeadphonesIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("504318"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: r,
                            fill: a
                        })
                    })
                }, r.PencilIcon, void 0, {
                    size: 16
                })
        },
        564875: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("907572"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                fill: a,
                                className: r,
                                fillRule: "nonzero",
                                d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                                transform: "translate(2 4)"
                            }), (0, l.jsx)("path", {
                                d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                            })]
                        })
                    })
                }, r.FriendsIcon, void 0, {
                    size: 16
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("31745"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        className: r,
                        foreground: s
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, r.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("287083"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: a = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: a
                        })
                    })
                }, r.StageIcon, void 0, {
                    size: 32
                })
        },
        625687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function r(e) {
                let {
                    width: t = 32,
                    height: n = 32,
                    color: r = "currentColor",
                    foreground: s,
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 32 32",
                    children: [(0, l.jsx)("rect", {
                        width: "32",
                        height: "32",
                        rx: "16",
                        fill: r
                    }), (0, l.jsx)("path", {
                        d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
                        className: s
                    })]
                })
            }
        },
        794818: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsContexts: function() {
                    return l
                },
                MINIMUM_MEMBER_COUNT: function() {
                    return g
                },
                startLurking: function() {
                    return _
                },
                viewGuild: function() {
                    return S
                },
                makeDiscoverableGuild: function() {
                    return v
                },
                trackDiscoveryViewed: function() {
                    return m
                },
                trackDiscoveryExited: function() {
                    return C
                },
                trackSearchClosed: function() {
                    return N
                },
                trackSearchStarted: function() {
                    return T
                },
                trackTagSearchStarted: function() {
                    return R
                },
                trackSearchResultsViewed: function() {
                    return p
                },
                trackGuildJoinClicked: function() {
                    return x
                },
                getDiscoverableGuild: function() {
                    return I
                }
            }), n("222007");
            var l, a, r = n("522632"),
                s = n("872717"),
                i = n("851387"),
                u = n("267567"),
                o = n("393414"),
                c = n("239380"),
                d = n("525065"),
                f = n("305961"),
                E = n("599110"),
                h = n("49111");
            (a = l || (l = {})).SEARCH = "Search", a.RECOMMENDED = "Recommended", a.POPULAR = "Popular", a.RECOMMENDED_E3 = "Recommended - E3", a.HEADER = "Header";
            let g = ">200";
            async function _(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        channelId: l,
                        onSuccess: a,
                        joinSource: r,
                        loadId: s,
                        setsHistorySnapshot: d = !0
                    } = n,
                    E = (0, o.getHistory)();
                d && u.default.setHistorySnapshot({
                    ...E
                });
                let h = f.default.getGuild(e),
                    g = {
                        state: {
                            analyticsSource: t
                        }
                    };
                null != h && null != h.joinedAt ? (0, c.transitionToGuild)(e, g) : (await i.default.joinGuild(e, {
                    lurker: !0,
                    source: r,
                    loadId: s,
                    lurkLocation: null == t ? void 0 : t.page
                }), await i.default.transitionToGuildSync(e, {
                    ...g,
                    welcomeModalChannelId: l,
                    search: E.location.search
                }, l)), null == a || a()
            }
            async function S(e) {
                let t, {
                    loadId: n,
                    guildId: a,
                    index: r,
                    analyticsContext: s,
                    categoryId: i
                } = e;
                "string" == typeof s && s in l && (t = s);
                let u = {
                    page: h.AnalyticsPages.GUILD_DISCOVERY,
                    object: h.AnalyticsObjects.CARD,
                    section: t
                };
                await _(a, u, {
                        loadId: n
                    }),
                    function(e) {
                        let {
                            loadId: t,
                            guildId: n,
                            index: l,
                            analyticsContext: a,
                            categoryId: r
                        } = e, s = {
                            page: h.AnalyticsPages.GUILD_DISCOVERY,
                            section: a
                        };
                        "string" != typeof a && null != a.location && (s = a.location), E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                            location: s,
                            guild_id: n,
                            load_id: t,
                            card_index: l,
                            location_object: h.AnalyticsObjects.CARD,
                            category_id: r
                        })
                    }({
                        loadId: n,
                        guildId: a,
                        index: r,
                        analyticsContext: s,
                        categoryId: i
                    })
            }

            function v(e) {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    splash: e.splash,
                    banner: e.banner,
                    icon: e.icon,
                    features: new Set(e.features),
                    presenceCount: e.approximate_presence_count,
                    memberCount: e.approximate_member_count,
                    premiumSubscriptionCount: e.premium_subscription_count,
                    preferredLocale: e.preferred_locale,
                    discoverySplash: e.discovery_splash,
                    emojis: e.emojis,
                    emojiCount: e.emoji_count,
                    stickers: e.stickers,
                    stickerCount: e.sticker_count,
                    keywords: e.keywords
                }
            }

            function m(e) {
                let {
                    loadId: t,
                    gamesYouPlayGuilds: n,
                    allGuilds: l,
                    categoryId: a,
                    recommendationsSource: r = null
                } = e, s = n.length, i = l.length;
                E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
                    load_id: t,
                    num_guilds: s + i,
                    num_guilds_recommended: s,
                    num_guilds_popular: i,
                    recommended_guild_ids: n.map(e => e.id),
                    category_id: a,
                    recommendations_source: r
                })
            }

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
                    load_id: e,
                    guild_ids_viewed: t,
                    recommendations_source: n
                })
            }

            function N(e) {
                E.default.track(h.AnalyticEvents.SEARCH_CLOSED, {
                    load_id: e
                })
            }

            function T(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                E.default.track(h.AnalyticEvents.SEARCH_STARTED, {
                    search_type: h.SearchTypes.GUILD_DISCOVERY,
                    load_id: e,
                    location: n.location,
                    category_id: t
                })
            }

            function R(e, t, n, l) {
                E.default.track(h.AnalyticEvents.SEARCH_STARTED, {
                    search_type: h.SearchTypes.GUILD_DISCOVERY_TAG,
                    load_id: e,
                    location: {
                        page: h.AnalyticsPages.GUILD_DISCOVERY,
                        section: n
                    },
                    category_id: t,
                    guild_id: l
                })
            }

            function p(e) {
                let {
                    loadId: t,
                    searchId: n,
                    query: l,
                    guildResults: a,
                    analyticsContext: r,
                    categoryId: s,
                    isTagSearch: i
                } = e;
                E.default.track(h.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    search_type: i ? h.SearchTypes.GUILD_DISCOVERY_TAG : h.SearchTypes.GUILD_DISCOVERY,
                    load_id: t,
                    search_id: n,
                    total_results: void 0 !== a ? a.length : null,
                    guild_ids: void 0 !== a ? a.map(e => e.id) : null,
                    query: l,
                    location: r.location,
                    category_id: s
                })
            }

            function x(e) {
                let t = u.default.getLoadId(e);
                E.default.track(h.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                    guild_id: e,
                    load_id: t,
                    guild_size: d.default.getMemberCount(e)
                })
            }
            async function I(e) {
                try {
                    var t, n;
                    let l = await s.default.get({
                            url: h.Endpoints.GUILD_DISCOVERY,
                            query: r.stringify({
                                guild_ids: e
                            }),
                            oldFormErrors: !0
                        }),
                        a = null === (n = l.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
                    if (null == a) return a;
                    return v(a)
                } catch (e) {
                    return null
                }
            }
        },
        334572: function(e, t, n) {
            "use strict";

            function l(e, t) {
                let [, n] = e, [, l] = t;
                return n === l
            }
            n.r(t), n.d(t, {
                isVersionEqual: function() {
                    return l
                }
            }), n("222007")
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return a
                }
            }), n("808653");
            var l = n("159885");

            function a(e, t) {
                for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) a[r - 2] = arguments[r];
                let s = a.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
                    i = "".concat(t).concat(s),
                    u = e[i];
                if (null != u) return u
            }
        }
    }
]);