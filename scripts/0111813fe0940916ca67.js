(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44592"], {
        397659: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                HeadphonesSlashIcon: function() {
                    return n
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("669491"),
                r = s("75196");
            let n = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: n = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20Zm-5.649.234a.478.478 0 0 0-.111-.769A10.954 10.954 0 0 0 12 1C5.925 1 1 5.925 1 12c0 1.78.423 3.46 1.173 4.947a.478.478 0 0 0 .769.111l3.19-3.19c.256-.256.16-.69-.196-.763A4.997 4.997 0 0 0 4.917 13H3.055a9 9 0 0 1 12.662-9.199c.196.09.429.053.582-.1l.76-.76ZM20.2 8.283a.518.518 0 0 1 .1-.582l.76-.76a.478.478 0 0 1 .769.112A10.954 10.954 0 0 1 23 12c0 4.143-2.29 7.75-5.67 9.624-1.272.707-2.73.23-3.55-.742a3.104 3.104 0 0 1-.17-3.782l1.377-1.967A5 5 0 0 1 19.082 13h1.862a8.967 8.967 0 0 0-.746-4.717Zm-10.09 9.609c.237-.238.636-.176.727.147.273.97.062 2.04-.616 2.843-.82.973-2.278 1.448-3.55.742a.164.164 0 0 1-.035-.259l3.473-3.473Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        780624: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MicrophoneSlashIcon: function() {
                    return n
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("669491"),
                r = s("75196");
            let n = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: n = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "m2.707 22.707 20-20a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414ZM10.803 17.319c-.216.216-.106.581.197.62V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 0 0-2 0 5.976 5.976 0 0 1-1.38 3.828l-.022.027a5.988 5.988 0 0 1-4.274 2.136.524.524 0 0 0-.344.15l-1.177 1.178ZM15.357 4.521c.15-.15.192-.38.084-.562A4 4 0 0 0 8 6v4c-.001.294.03.58.091.857.076.346.498.432.749.181l6.516-6.517ZM5.062 13.985a.473.473 0 0 0 .747.084l.748-.747a.53.53 0 0 0 .087-.614A5.974 5.974 0 0 1 6 10a1 1 0 0 0-2 0c0 1.45.386 2.812 1.062 3.985Z",
                        className: i
                    })
                })
            }
        },
        776863: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return i
                }
            });
            var a = s("446674"),
                l = s("923510"),
                r = s("923959"),
                n = s("957255");

            function i(e) {
                var t;
                let s = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, a.useStateFromStoresArray)([r.default, n.default], () => {
                    let e = r.default.getChannels(s)[r.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let s = t.channel;
                        return s.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.default;
                            return !!e.isGuildStageVoice() && t.can(l.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, n.default) && e.push(s), e) : e
                    }, [])
                }, [s])
            }
        },
        844808: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("77078"),
                n = s("822516"),
                i = s("757767"),
                d = s("782340");

            function u(e) {
                let {
                    startDate: t,
                    recurrenceRule: s,
                    onRecurrenceChange: u
                } = e, o = l.useMemo(() => (0, n.recurrenceRuleToOption)(t, s), [s, t]), c = function(e) {
                    let t = e.toDate(),
                        s = t.toLocaleString(d.default.getLocale(), {
                            weekday: "long"
                        });
                    return [{
                        value: i.RecurrenceOptions.NONE,
                        label: d.default.Messages.CREATE_EVENT_RECUR_NONE
                    }, {
                        value: i.RecurrenceOptions.WEEKLY,
                        label: d.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                            weekday: s
                        })
                    }, {
                        value: i.RecurrenceOptions.YEARLY,
                        label: d.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                            date: t.toLocaleString(d.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        })
                    }, {
                        value: i.RecurrenceOptions.WEEKDAY_ONLY,
                        label: d.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }]
                }(t), E = e => e.toString();
                return (0, a.jsx)(r.FormItem, {
                    title: d.default.Messages.CREATE_EVENT_RECUR_LABEL,
                    required: !0,
                    children: (0, a.jsx)(r.Select, {
                        placeholder: "gaming",
                        options: c,
                        select: u,
                        serialize: E,
                        isSelected: e => null != o && E(e) === E(o)
                    })
                })
            }
        },
        953143: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("866227"),
                r = s.n(l),
                n = s("77078"),
                i = s("812204"),
                d = s("685665"),
                u = s("381546"),
                o = s("351825"),
                c = s("651072"),
                E = s("822516"),
                h = s("844808"),
                f = s("782340"),
                _ = s("234865");

            function A(e) {
                let {
                    className: t,
                    guildId: s,
                    onScheduleChange: l,
                    onRecurrenceChange: A,
                    onTimeChange: g,
                    timeSelected: x = !0,
                    schedule: p,
                    recurrenceRule: N,
                    showEndDate: T = !1,
                    requireEndDate: v = !1,
                    disableStartDateTime: m = !1
                } = e, {
                    analyticsLocations: C
                } = (0, d.default)(i.default.EVENT_SETTINGS), {
                    enabled: I
                } = c.default.useExperiment({
                    guildId: null != s ? s : "",
                    location: C[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == p) return null;
                let S = null,
                    L = p.startDate,
                    O = r(),
                    R = r().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    j = r().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    M = e => {
                        l({
                            ...p,
                            endDate: e
                        })
                    };
                return null != L && c.default.trackExposure({
                    guildId: null != s ? s : "",
                    location: C[0]
                }), T && (S = null != p.endDate || v ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: _.doubleInput,
                        children: [(0, a.jsx)(n.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: v,
                            children: (0, a.jsx)(n.DateInput, {
                                value: p.endDate,
                                onSelect: M,
                                minDate: p.startDate,
                                maxDate: j
                            })
                        }), (0, a.jsx)(n.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: v,
                            children: (0, a.jsx)(n.TimeInput, {
                                value: p.endDate,
                                onChange: M
                            })
                        })]
                    }), v ? null : (0, a.jsx)(n.Button, {
                        onClick: () => {
                            M(void 0)
                        },
                        look: n.Button.Looks.BLANK,
                        size: n.Button.Sizes.MIN,
                        children: (0, a.jsxs)("div", {
                            className: _.link,
                            children: [(0, a.jsx)(u.default, {
                                width: 17,
                                height: 17,
                                className: _.removeIcon
                            }), (0, a.jsx)(n.Text, {
                                variant: "text-sm/normal",
                                children: f.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, a.jsx)(n.Button, {
                    look: n.Button.Looks.BLANK,
                    size: n.Button.Sizes.MIN,
                    onClick: () => {
                        M(r(p.startDate).add(1, "hour"))
                    },
                    children: (0, a.jsxs)("div", {
                        className: _.link,
                        children: [(0, a.jsx)(o.default, {
                            width: 20,
                            height: 20,
                            className: _.addIcon
                        }), (0, a.jsx)(n.Text, {
                            variant: "text-sm/normal",
                            children: f.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsxs)("div", {
                        className: _.doubleInput,
                        children: [(0, a.jsx)(n.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, a.jsx)(n.DateInput, {
                                value: p.startDate,
                                onSelect: e => {
                                    l({
                                        ...p,
                                        startDate: e
                                    })
                                },
                                minDate: O,
                                maxDate: R,
                                disabled: m
                            })
                        }), (0, a.jsx)(n.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, a.jsx)(n.TimeInput, {
                                value: p.startDate,
                                onChange: e => {
                                    e.isValid() && (null == g || g(!0), l({
                                        ...p,
                                        startDate: e
                                    }))
                                },
                                hideValue: !x,
                                disabled: m
                            })
                        })]
                    }), S, I && null != L && null != A && (0, a.jsx)(h.default, {
                        onRecurrenceChange: A,
                        startDate: L,
                        recurrenceRule: N
                    })]
                })
            }
        },
        597517: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                hideHotspot: function() {
                    return n
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return d
                }
            });
            var a = s("913144"),
                l = s("599110"),
                r = s("49111");

            function n(e) {
                l.default.track(r.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), a.default.wait(() => {
                    a.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                a.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("446674"),
                l = s("913144"),
                r = s("197881"),
                n = s("492397");
            let i = new Set,
                d = {};
            class u extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (d = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        s = !t && d[e];
                    return !(n.CONFERENCE_MODE_ENABLED || r.ProcessArgs.isDisallowPopupsSet()) && (s || !i.has(e))
                }
                hasHiddenHotspot(e) {
                    return i.has(e)
                }
                getHotspotOverride(e) {
                    return d[e]
                }
                getState() {
                    return {
                        hiddenHotspots: i,
                        hotspotOverrides: d
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var o = new u(l.default, {
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
                        enabled: s
                    } = e;
                    d[t] = s
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == d[t]) return !1;
                    delete d[t]
                }
            })
        },
        29846: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BlockedUsersNotice: function() {
                    return g
                },
                BlockedUser: function() {
                    return x
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("446674"),
                r = s("669491"),
                n = s("77078"),
                i = s("272030"),
                d = s("328275"),
                u = s("849467"),
                o = s("258078"),
                c = s("823050"),
                E = s("158998"),
                h = s("325861"),
                f = s("151642"),
                _ = s("782340"),
                A = s("960236");
            let g = e => {
                    let {
                        channelId: t
                    } = e, s = (0, f.useStageBlockedUsersCount)(t);
                    return 0 === s ? null : (0, a.jsxs)("div", {
                        className: A.blockedNotice,
                        children: [(0, a.jsx)(d.default, {
                            className: A.blockedIcon,
                            color: r.default.unsafe_rawColors.RED_400.css
                        }), (0, a.jsx)(n.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: _.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: s
                            })
                        }), (0, a.jsx)(n.Clickable, {
                            className: A.blockedButton,
                            onClick: e => {
                                (0, i.openContextMenu)(e, e => (0, a.jsx)(p, {
                                    ...e,
                                    channelId: t
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: _.default.Messages.VIEW_ALL
                        })]
                    })
                },
                x = e => {
                    let {
                        user: t,
                        showStatus: s,
                        speaker: r,
                        channelId: i
                    } = e, d = (0, l.useStateFromStores)([h.default], () => h.default.isModerator(t.id, i)), f = null;
                    return s && (f = r ? _.default.Messages.STAGE_SPEAKER : d ? _.default.Messages.STAGE_MODERATOR_TOOLTIP : _.default.Messages.STAGE_AUDIENCE), (0, a.jsxs)("div", {
                        className: A.user,
                        children: [(0, a.jsx)(c.default, {
                            src: t.getAvatarURL(null, 32),
                            size: n.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: r ? () => (0, a.jsx)(u.default, {
                                className: A.icon
                            }) : null
                        }, t.id), (0, a.jsxs)("div", {
                            className: A.userInfo,
                            children: [(0, a.jsxs)("div", {
                                className: A.username,
                                children: [(0, a.jsx)(o.default, {
                                    size: s ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
                                    children: E.default.getName(t)
                                }), (0, a.jsx)(o.default, {
                                    size: s ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
                                    color: o.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, a.jsxs)("div", {
                                className: A.username,
                                children: [(0, a.jsx)(n.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: _.default.Messages.BLOCKED
                                }), (0, a.jsxs)(n.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", f]
                                })]
                            })]
                        })]
                    })
                },
                p = e => {
                    let {
                        channelId: t
                    } = e, s = (0, f.useStageBlockedUsers)(t);
                    return (0, a.jsx)(n.Scroller, {
                        className: A.container,
                        children: s.map(e => {
                            let {
                                user: s
                            } = e;
                            return (0, a.jsx)(x, {
                                user: s,
                                channelId: t
                            }, s.id)
                        })
                    })
                }
        },
        328275: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("75196");

            function r(e) {
                let {
                    width: t = 32,
                    height: s = 32,
                    color: r = "currentColor",
                    ...n
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(n),
                    width: t,
                    height: s,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: [(0, a.jsx)("clipPath", {
                        children: (0, a.jsx)("path", {
                            d: "m.000183 0h16v16h-16z"
                        })
                    }), (0, a.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, a.jsx)("path", {
                            d: "m7.90039 1c-3.9 0-6.999999 3.1-6.999999 7s3.099999 7 6.999999 7c3.90001 0 7.00001-3.1 7.00001-7s-3.2-7-7.00001-7zm0 2.3c.8 0 1.6.3 2.30001.7l-6.40001 6.4c-.3-.7-.6-1.5-.6-2.4 0-2.6 2.1-4.7 4.7-4.7zm0 9.4c-.9 0-1.7-.3-2.4-.7l6.40001-6.4c.4.7.7 1.5.7 2.4-.1 2.6-2.2 4.7-4.70001 4.7z",
                            fill: r
                        })
                    })]
                })
            }
        },
        200639: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("397659"),
                n = s("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, n.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            d: "M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z",
                            fill: l
                        }), (0, a.jsx)("path", {
                            d: "M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z",
                            fill: l
                        }), (0, a.jsx)("path", {
                            d: "M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z",
                            className: r,
                            fill: l
                        })]
                    })
                }, r.HeadphonesSlashIcon)
        },
        97347: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("780624"),
                n = s("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, n.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsx)("path", {
                            d: "M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z",
                            fill: l
                        }), (0, a.jsx)("path", {
                            d: "M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z",
                            fill: l
                        }), (0, a.jsx)("path", {
                            d: "M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z",
                            fill: l
                        }), (0, a.jsx)("path", {
                            d: "M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z",
                            className: r,
                            fill: l
                        })]
                    })
                }, r.MicrophoneSlashIcon)
        },
        823050: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a, l, r = s("37983"),
                n = s("884691"),
                i = s("414456"),
                d = s.n(i),
                u = s("77078"),
                o = s("200639"),
                c = s("97347"),
                E = s("587974"),
                h = s("989769");
            (a = l || (l = {}))[a.OUTGOING = 0] = "OUTGOING", a[a.INCOMING = 1] = "INCOMING";
            class f extends n.PureComponent {
                renderStatus() {
                    let {
                        muted: e,
                        deafen: t
                    } = this.props, s = t ? o.default : c.default;
                    return e || t ? (0, r.jsx)(s, {
                        className: h.status
                    }, "status") : null
                }
                renderBorder() {
                    let {
                        speaking: e
                    } = this.props;
                    return (0, r.jsx)("div", {
                        className: d(h.border, {
                            [h.speaking]: e
                        })
                    }, "border")
                }
                renderMask() {
                    let {
                        muted: e,
                        speaking: t,
                        deafen: s
                    } = this.props;
                    return e && t ? (0, r.jsxs)(r.Fragment, {
                        children: [this.renderBorder(), this.renderStatus()]
                    }) : e || s ? (0, r.jsx)(r.Fragment, {
                        children: this.renderStatus()
                    }) : (0, r.jsx)(r.Fragment, {
                        children: this.renderBorder()
                    })
                }
                renderVoiceCallAvatar() {
                    let {
                        src: e,
                        disabled: t,
                        ringing: s,
                        ringingType: a,
                        avatarClassName: n,
                        muted: i,
                        deafen: o,
                        size: c,
                        renderIcon: f
                    } = this.props, _ = (0, u.getAvatarSize)(c), A = (0, r.jsx)("img", {
                        src: e,
                        alt: " ",
                        className: d(h.voiceAvatar, n, {
                            [h.ringingOutgoing]: s && a === l.OUTGOING
                        })
                    });
                    if (t) return A;
                    let g = E.MaskIDs.AVATAR_DEFAULT;
                    return null != f ? g = c === u.AvatarSizes.SIZE_32 ? E.MaskIDs.AVATAR_CALL_ICON_32 : E.MaskIDs.AVATAR_CALL_ICON : (i || o) && (g = E.MaskIDs.AVATAR_VOICE_CALL_80), (0, r.jsxs)("div", {
                        className: h.callAvatarMaskContainer,
                        children: [(0, r.jsxs)(E.default, {
                            className: h.callAvatarMask,
                            width: _,
                            height: _,
                            mask: g,
                            children: [null == f ? void 0 : f(), A]
                        }), this.renderMask()]
                    })
                }
                render() {
                    let {
                        size: e,
                        onClick: t,
                        style: s,
                        onContextMenu: a,
                        className: n,
                        ringingType: i,
                        ringing: o
                    } = this.props, c = d(h.wrapper, {
                        [h.clickable]: null != t,
                        [h.ringingOutgoing]: o && i === l.OUTGOING,
                        [h.ringingIncoming]: o && i === l.INCOMING
                    }, n), E = (0, u.getAvatarSize)(e), f = {
                        height: E,
                        width: E,
                        ...s
                    };
                    return (0, r.jsx)("div", {
                        style: f,
                        onContextMenu: a,
                        className: c,
                        children: this.renderVoiceCallAvatar()
                    })
                }
            }
            f.defaultProps = {
                size: u.AvatarSizes.SIZE_80,
                ringingType: l.OUTGOING,
                speaking: !1,
                soundsharing: !1,
                ringing: !1,
                muted: !1,
                deafen: !1,
                hasVideo: !1,
                mirror: !1,
                disabled: !1,
                paused: !1
            }, f.RingingType = l;
            var _ = f
        }
    }
]);