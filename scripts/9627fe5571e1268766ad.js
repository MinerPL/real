(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11048"], {
        31745: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CirclePlusIcon: function() {
                    return r
                }
            });
            var n = l("920040");
            l("773670");
            var a = l("912557"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...i
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: d
                    })
                })
            }
        },
        651072: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
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
            var s = a
        },
        229798: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var n = l("920040"),
                a = l("773670"),
                s = l("377849"),
                r = l.n(s),
                d = l("500947"),
                i = l("77078"),
                u = l("686904"),
                o = l("322224"),
                c = l("397680"),
                E = l("822516"),
                _ = l("953143"),
                f = l("782340"),
                h = l("972071");

            function g(e) {
                let {
                    guildEvent: t,
                    recurrenceId: l,
                    transitionState: s,
                    onClose: g
                } = e, m = (0, c.default)(l, t.id), v = (0, E.getScheduleFromEvent)(t), [x, T] = a.useState((() => {
                    if (null != m) return {
                        startDate: r(m.scheduled_start_time),
                        endDate: null != m.scheduled_end_time ? r(m.scheduled_end_time) : void 0
                    };
                    {
                        let e = r(d.default.extractTimestamp(l)),
                            t = (null == v ? void 0 : v.endDate) != null ? e.clone().add(v.endDate.diff(v.startDate)) : void 0;
                        return {
                            startDate: e,
                            endDate: t
                        }
                    }
                })()), [N, {
                    loading: A,
                    error: D
                }] = (0, u.default)(async () => {
                    var e, n, a, s;
                    if (null != m) await o.default.updateGuildEventException({
                        scheduled_start_time: null === (e = x.startDate) || void 0 === e ? void 0 : e.toISOString(),
                        scheduled_end_time: null === (n = x.endDate) || void 0 === n ? void 0 : n.toISOString(),
                        is_canceled: m.is_canceled
                    }, t.guild_id, t.id, l);
                    else {
                        let e = d.default.extractTimestamp(l);
                        await o.default.createGuildEventException({
                            original_scheduled_start_time: new Date(e).toISOString(),
                            scheduled_start_time: null === (a = x.startDate) || void 0 === a ? void 0 : a.toISOString(),
                            scheduled_end_time: null === (s = x.endDate) || void 0 === s ? void 0 : s.toISOString(),
                            is_canceled: !1
                        }, t.guild_id, t.id)
                    }
                    null == D && g()
                });
                return (0, n.jsxs)(i.ModalRoot, {
                    transitionState: s,
                    children: [(0, n.jsx)(i.ModalHeader, {
                        children: (0, n.jsx)(i.Heading, {
                            variant: "heading-lg/semibold",
                            children: f.default.Messages.EDIT_THIS_EVENT
                        })
                    }), (0, n.jsxs)(i.ModalContent, {
                        className: h.content,
                        children: [(0, n.jsx)(_.default, {
                            onScheduleChange: e => {
                                var t;
                                let {
                                    startDate: l,
                                    endDate: n
                                } = e;
                                null != l && null != n && (null === (t = n) || void 0 === t ? void 0 : t.isBefore(l)) && (n = l.add(1, "hour")), T({
                                    startDate: l,
                                    endDate: n
                                })
                            },
                            schedule: x,
                            showEndDate: null != x.endDate,
                            guildId: t.guild_id
                        }), null != D ? (0, n.jsx)(i.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: h.warning,
                            children: D.getAnyErrorMessage()
                        }) : null]
                    }), (0, n.jsxs)(i.ModalFooter, {
                        className: h.footer,
                        children: [(0, n.jsx)(i.Button, {
                            color: i.Button.Colors.BRAND,
                            onClick: N,
                            className: h.button,
                            submitting: A,
                            children: f.default.Messages.SAVE_EVENT
                        }), (0, n.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            onClick: g,
                            children: f.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        844808: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("920040"),
                a = l("773670"),
                s = l("77078"),
                r = l("822516"),
                d = l("757767"),
                i = l("782340");

            function u(e) {
                let {
                    startDate: t,
                    recurrenceRule: l,
                    onRecurrenceChange: u
                } = e, o = a.useMemo(() => (0, r.recurrenceRuleToOption)(t, l), [l, t]), c = function(e) {
                    let t = e.toDate(),
                        l = t.toLocaleString(i.default.getLocale(), {
                            weekday: "long"
                        });
                    return [{
                        value: d.RecurrenceOptions.NONE,
                        label: i.default.Messages.CREATE_EVENT_RECUR_NONE
                    }, {
                        value: d.RecurrenceOptions.WEEKLY,
                        label: i.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                            weekday: l
                        })
                    }, {
                        value: d.RecurrenceOptions.YEARLY,
                        label: i.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                            date: t.toLocaleString(i.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        })
                    }, {
                        value: d.RecurrenceOptions.WEEKDAY_ONLY,
                        label: i.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }]
                }(t), E = e => e.toString();
                return (0, n.jsx)(s.FormItem, {
                    title: i.default.Messages.CREATE_EVENT_RECUR_LABEL,
                    required: !0,
                    children: (0, n.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: c,
                        select: u,
                        serialize: E,
                        isSelected: e => null != o && E(e) === E(o)
                    })
                })
            }
        },
        953143: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var n = l("920040");
            l("773670");
            var a = l("377849"),
                s = l.n(a),
                r = l("77078"),
                d = l("812204"),
                i = l("685665"),
                u = l("381546"),
                o = l("351825"),
                c = l("651072"),
                E = l("822516"),
                _ = l("844808"),
                f = l("782340"),
                h = l("856599");

            function g(e) {
                let {
                    className: t,
                    guildId: l,
                    onScheduleChange: a,
                    onRecurrenceChange: g,
                    onTimeChange: m,
                    timeSelected: v = !0,
                    schedule: x,
                    recurrenceRule: T,
                    showEndDate: N = !1,
                    requireEndDate: A = !1,
                    disableStartDateTime: D = !1
                } = e, {
                    analyticsLocations: R
                } = (0, i.default)(d.default.EVENT_SETTINGS), {
                    enabled: C
                } = c.default.useExperiment({
                    guildId: null != l ? l : "",
                    location: R[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == x) return null;
                let I = null,
                    j = x.startDate,
                    S = s(),
                    p = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    M = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    L = e => {
                        a({
                            ...x,
                            endDate: e
                        })
                    };
                return null != j && c.default.trackExposure({
                    guildId: null != l ? l : "",
                    location: R[0]
                }), N && (I = null != x.endDate || A ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: h.doubleInput,
                        children: [(0, n.jsx)(r.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: A,
                            children: (0, n.jsx)(r.DateInput, {
                                value: x.endDate,
                                onSelect: L,
                                minDate: x.startDate,
                                maxDate: M
                            })
                        }), (0, n.jsx)(r.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: A,
                            children: (0, n.jsx)(r.TimeInput, {
                                value: x.endDate,
                                onChange: L
                            })
                        })]
                    }), A ? null : (0, n.jsx)(r.Button, {
                        onClick: () => {
                            L(void 0)
                        },
                        look: r.Button.Looks.BLANK,
                        size: r.Button.Sizes.MIN,
                        children: (0, n.jsxs)("div", {
                            className: h.link,
                            children: [(0, n.jsx)(u.default, {
                                width: 17,
                                height: 17,
                                className: h.removeIcon
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: f.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, n.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                        L(s(x.startDate).add(1, "hour"))
                    },
                    children: (0, n.jsxs)("div", {
                        className: h.link,
                        children: [(0, n.jsx)(o.default, {
                            width: 20,
                            height: 20,
                            className: h.addIcon
                        }), (0, n.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: f.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, n.jsxs)("div", {
                    className: t,
                    children: [(0, n.jsxs)("div", {
                        className: h.doubleInput,
                        children: [(0, n.jsx)(r.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, n.jsx)(r.DateInput, {
                                value: x.startDate,
                                onSelect: e => {
                                    a({
                                        ...x,
                                        startDate: e
                                    })
                                },
                                minDate: S,
                                maxDate: p,
                                disabled: D
                            })
                        }), (0, n.jsx)(r.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, n.jsx)(r.TimeInput, {
                                value: x.startDate,
                                onChange: e => {
                                    e.isValid() && (null == m || m(!0), a({
                                        ...x,
                                        startDate: e
                                    }))
                                },
                                hideValue: !v,
                                disabled: D
                            })
                        })]
                    }), I, C && null != j && null != g && (0, n.jsx)(_.default, {
                        onRecurrenceChange: g,
                        startDate: j,
                        recurrenceRule: T
                    })]
                })
            }
        },
        351825: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("920040");
            l("773670");
            var a = l("469563"),
                s = l("31745"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: a = "currentColor",
                        className: s,
                        foreground: r
                    } = e;
                    return (0, n.jsx)("svg", {
                        className: s,
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, s.CirclePlusIcon)
        },
        686904: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("773670"),
                a = l("448993");

            function s(e, t) {
                let [l, s] = n.useState(!1), [r, d] = n.useState(null), i = async () => {
                    s(!0), d(null);
                    try {
                        let t = await e();
                        return s(!1), d(null), t
                    } catch (l) {
                        let e = new a.APIError(l);
                        return null == t || t(e), d(e), s(!1), null
                    }
                };
                return [i, {
                    loading: l,
                    error: r
                }]
            }
        }
    }
]);