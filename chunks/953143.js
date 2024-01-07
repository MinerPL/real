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
                    schedule: R,
                    recurrenceRule: m,
                    showEndDate: C = !1,
                    requireEndDate: N = !1,
                    disableStartDateTime: T = !1
                } = e, {
                    analyticsLocations: p
                } = (0, u.default)(i.default.EVENT_SETTINGS), {
                    enabled: I
                } = d.default.useExperiment({
                    guildId: null != n ? n : "",
                    location: p[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == R) return null;
                let x = null,
                    L = R.startDate,
                    A = r(),
                    y = r().add(f.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    D = r().add(f.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
                null != m && (y.add(f.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), D.add(f.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
                let M = e => {
                    a({
                        ...R,
                        endDate: e
                    })
                };
                return null != L && d.default.trackExposure({
                    guildId: null != n ? n : "",
                    location: p[0]
                }), C && (x = null != R.endDate || N ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: g.doubleInput,
                        children: [(0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: N,
                            children: (0, l.jsx)(s.DateInput, {
                                value: R.endDate,
                                onSelect: M,
                                minDate: R.startDate,
                                maxDate: D
                            })
                        }), (0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: N,
                            children: (0, l.jsx)(s.TimeInput, {
                                value: R.endDate,
                                onChange: M
                            })
                        })]
                    }), N ? null : (0, l.jsx)(s.Button, {
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
                        M(r(R.startDate).add(1, "hour"))
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
                                value: R.startDate,
                                onSelect: e => {
                                    a({
                                        ...R,
                                        startDate: e
                                    })
                                },
                                minDate: A,
                                maxDate: y,
                                disabled: T
                            })
                        }), (0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, l.jsx)(s.TimeInput, {
                                value: R.startDate,
                                onChange: e => {
                                    e.isValid() && (null == S || S(!0), a({
                                        ...R,
                                        startDate: e
                                    }))
                                },
                                hideValue: !v,
                                disabled: T
                            })
                        })]
                    }), x, I && null != L && null != _ && (0, l.jsx)(E.default, {
                        onRecurrenceChange: _,
                        startDate: L,
                        recurrenceRule: m
                    })]
                })
            }