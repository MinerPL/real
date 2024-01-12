            "use strict";
            l.r(t), l.d(t, {
                TimeUnits: function() {
                    return a
                },
                getTimeAndUnit: function() {
                    return I
                },
                default: function() {
                    return A
                }
            }), l("70102"), l("700225"), l("222007");
            var n, a, s, i, r, o, u = l("37983"),
                d = l("884691"),
                c = l("917351"),
                f = l.n(c),
                m = l("862337"),
                p = l("782340");
            (i = n || (n = {})).ACTIVITY_FEED = "ACTIVITY_FEED", i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", i.USER_ACTIVITY = "USER_ACTIVITY", i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", (r = a || (a = {})).NONE = "NONE", r.SECONDS = "SECONDS", r.MINUTES = "MINUTES", r.HOURS = "HOURS", r.DAYS = "DAYS", r.WEEKS = "WEEKS", r.MONTHS = "MONTHS", r.YEARS = "YEARS", (o = s || (s = {})).START = "START", o.END = "END", o.TIME = "TIME";
            let E = {
                    NONE: e => 0,
                    SECONDS: e => 60 * e,
                    MINUTES: e => e,
                    HOURS: e => e / 60,
                    DAYS: e => e / 60 / 24,
                    WEEKS: e => e / 60 / 24 / 7,
                    MONTHS: e => e / 60 / 24 / 31,
                    YEARS: e => e / 60 / 24 / 365
                },
                T = [{
                    unit: "NONE",
                    max: 0
                }, {
                    unit: "SECONDS",
                    max: 1
                }, {
                    unit: "MINUTES",
                    max: 60
                }, {
                    unit: "HOURS",
                    max: 1440
                }, {
                    unit: "DAYS",
                    max: 44640
                }, {
                    unit: "WEEKS",
                    max: 40320
                }, {
                    unit: "MONTHS",
                    max: 525600
                }, {
                    unit: "YEARS",
                    max: 1 / 0
                }],
                _ = e => (t, l) => null == l ? "" : e().format({
                    time: t,
                    ...l
                }),
                S = {
                    ACTIVITY_FEED: {
                        START: {
                            SECONDS: () => p.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                            MINUTES: e => p.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                                time: e
                            }),
                            HOURS: e => p.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                                time: e
                            }),
                            DAYS: e => p.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                                time: e
                            })
                        },
                        END: {
                            SECONDS: () => p.default.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED,
                            MINUTES: e => p.default.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({
                                time: e
                            }),
                            HOURS: e => p.default.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({
                                time: e
                            }),
                            DAYS: e => p.default.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({
                                time: e
                            }),
                            WEEKS: e => p.default.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({
                                time: e
                            }),
                            MONTHS: e => p.default.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({
                                time: e
                            }),
                            YEARS: e => p.default.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({
                                time: e
                            })
                        }
                    },
                    ACTIVITY_FEED_NEW: {
                        START: {
                            SECONDS: _(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED),
                            MINUTES: _(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES),
                            HOURS: _(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS),
                            DAYS: _(() => p.default.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS)
                        },
                        END: {
                            SECONDS: e => p.default.Messages.DURATION_SECONDS_AGO.format({
                                seconds: e
                            }),
                            MINUTES: e => p.default.Messages.DURATION_MINUTES_AGO.format({
                                minutes: e
                            }),
                            HOURS: e => p.default.Messages.DURATION_HOURS_AGO.format({
                                hours: e
                            }),
                            DAYS: e => p.default.Messages.DURATION_DAYS_AGO.format({
                                days: e
                            })
                        }
                    },
                    USER_ACTIVITY: {
                        START: {
                            SECONDS: () => p.default.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
                            MINUTES: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? p.default.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({
                                    time: e
                                }) : p.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({
                                    time: e
                                })
                            },
                            HOURS: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? p.default.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({
                                    time: e
                                }) : p.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({
                                    time: e
                                })
                            },
                            DAYS: function(e, t) {
                                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return l ? p.default.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({
                                    time: e
                                }) : p.default.Messages.USER_ACTIVITY_USER_PLAYING_FOR_DAYS.format({
                                    time: e
                                })
                            }
                        }
                    },
                    GAME_LIBRARY_TIME_PLAYED: {
                        TIME: {
                            NONE: () => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_NONE,
                            SECONDS: e => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({
                                time: e
                            }),
                            MINUTES: e => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({
                                time: e
                            }),
                            HOURS: e => p.default.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({
                                time: e
                            })
                        }
                    },
                    GAME_LIBRARY_LAST_PLAYED: {
                        END: {
                            NONE: () => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_NONE,
                            SECONDS: () => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW,
                            MINUTES: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({
                                time: e
                            }),
                            HOURS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({
                                time: e
                            }),
                            DAYS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({
                                time: e
                            }),
                            WEEKS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({
                                time: e
                            }),
                            MONTHS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({
                                time: e
                            }),
                            YEARS: e => p.default.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({
                                time: e
                            })
                        }
                    }
                };

            function h(e, t) {
                let l = T.findIndex(t => {
                        let {
                            max: l,
                            unit: n
                        } = t;
                        return "NONE" === n && e === l || e < l
                    }),
                    n = f.findLast(T, e => {
                        let {
                            unit: l
                        } = e;
                        return t(l)
                    }, l);
                if (null != n) return n.unit;
                let a = T.find(e => {
                    let {
                        unit: l
                    } = e;
                    return t(l)
                });
                return null != a ? a.unit : null
            }

            function I(e, t) {
                let l = null != e ? h(e, e => t.includes(e)) : "NONE",
                    n = null != l ? E[l] : null;
                return {
                    unit: l,
                    time: null != e && null != n ? Math.floor(n(e)) : null
                }
            }

            function A(e) {
                var t;
                return (t = class extends d.PureComponent {
                    componentDidMount() {
                        this.timer.start(1e4, this.update)
                    }
                    componentDidUpdate(e) {
                        let {
                            start: t,
                            end: l,
                            time: n
                        } = this.props;
                        (e.start !== t || e.end !== l || e.time !== n) && this.update()
                    }
                    componentWillUnmount() {
                        this.timer.stop()
                    }
                    getDiff() {
                        let {
                            start: e,
                            end: t,
                            time: l
                        } = this.props;
                        if (null != l) return l / 1e3 / 60;
                        let n = Date.now(),
                            a = 0;
                        return null != e ? a = n - e : null != t && (a = n - t), Math.abs(a) / 1e3 / 60
                    }
                    getTimeUnit(e, t, l) {
                        let n = h(e, e => (function(e, t, l) {
                            let n = S[l];
                            if (null != n) {
                                let l = n[t];
                                if (null != l) return null != l[e]
                            }
                            return !1
                        })(e, l, t));
                        if (null == n) throw Error("Could not get the time unit in PlayTime with time: ".concat(e, " for type: ").concat(l, " in location: ").concat(t));
                        return n
                    }
                    getType() {
                        let {
                            start: e,
                            end: t,
                            time: l
                        } = this.props;
                        if (null != e) return "START";
                        if (null != t) return "END";
                        if (null != l) return "TIME";
                        return null
                    }
                    transformTime(e, t) {
                        return E[e](t)
                    }
                    render() {
                        let {
                            location: t,
                            messageProps: l,
                            isApplicationStreaming: n,
                            ...a
                        } = this.props, {
                            time: s
                        } = this.state, i = this.getType();
                        if (null == i) return null;
                        let r = this.getTimeUnit(s, t, i),
                            o = S[t][i];
                        if (null == o) return null;
                        let d = o[r],
                            c = Math.floor(this.transformTime(r, s));
                        return (0, u.jsx)(e, {
                            ...a,
                            children: null == d ? void 0 : d(c, l, n)
                        })
                    }
                    constructor(...e) {
                        super(...e), this.timer = new m.Interval, this.state = {
                            time: this.getDiff()
                        }, this.update = () => {
                            this.setState({
                                time: this.getDiff()
                            })
                        }
                    }
                }).Locations = n, t.Types = s, t
            }