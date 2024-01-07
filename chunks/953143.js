            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("866227"),
                s = l.n(n),
                r = l("77078"),
                d = l("812204"),
                u = l("685665"),
                i = l("381546"),
                c = l("351825"),
                o = l("651072"),
                E = l("822516"),
                _ = l("844808"),
                g = l("782340"),
                f = l("234865");

            function h(e) {
                let {
                    className: t,
                    guildId: l,
                    onScheduleChange: n,
                    onRecurrenceChange: h,
                    onTimeChange: R,
                    timeSelected: T = !0,
                    schedule: A,
                    recurrenceRule: N,
                    showEndDate: x = !1,
                    requireEndDate: m = !1,
                    disableStartDateTime: D = !1
                } = e, {
                    analyticsLocations: I
                } = (0, u.default)(d.default.EVENT_SETTINGS), {
                    enabled: S
                } = o.default.useExperiment({
                    guildId: null != l ? l : "",
                    location: I[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == A) return null;
                let C = null,
                    v = A.startDate,
                    M = s(),
                    j = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    p = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
                null != N && (j.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), p.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
                let L = e => {
                    n({
                        ...A,
                        endDate: e
                    })
                };
                return null != v && o.default.trackExposure({
                    guildId: null != l ? l : "",
                    location: I[0]
                }), x && (C = null != A.endDate || m ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: f.doubleInput,
                        children: [(0, a.jsx)(r.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: m,
                            children: (0, a.jsx)(r.DateInput, {
                                value: A.endDate,
                                onSelect: L,
                                minDate: A.startDate,
                                maxDate: p
                            })
                        }), (0, a.jsx)(r.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: m,
                            children: (0, a.jsx)(r.TimeInput, {
                                value: A.endDate,
                                onChange: L
                            })
                        })]
                    }), m ? null : (0, a.jsx)(r.Button, {
                        onClick: () => {
                            L(void 0)
                        },
                        look: r.Button.Looks.BLANK,
                        size: r.Button.Sizes.MIN,
                        children: (0, a.jsxs)("div", {
                            className: f.link,
                            children: [(0, a.jsx)(i.default, {
                                width: 17,
                                height: 17,
                                className: f.removeIcon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: g.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, a.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                        L(s(A.startDate).add(1, "hour"))
                    },
                    children: (0, a.jsxs)("div", {
                        className: f.link,
                        children: [(0, a.jsx)(c.default, {
                            width: 20,
                            height: 20,
                            className: f.addIcon
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: g.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsxs)("div", {
                        className: f.doubleInput,
                        children: [(0, a.jsx)(r.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, a.jsx)(r.DateInput, {
                                value: A.startDate,
                                onSelect: e => {
                                    n({
                                        ...A,
                                        startDate: e
                                    })
                                },
                                minDate: M,
                                maxDate: j,
                                disabled: D
                            })
                        }), (0, a.jsx)(r.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, a.jsx)(r.TimeInput, {
                                value: A.startDate,
                                onChange: e => {
                                    e.isValid() && (null == R || R(!0), n({
                                        ...A,
                                        startDate: e
                                    }))
                                },
                                hideValue: !T,
                                disabled: D
                            })
                        })]
                    }), C, S && null != v && null != h && (0, a.jsx)(_.default, {
                        onRecurrenceChange: h,
                        startDate: v,
                        recurrenceRule: N
                    })]
                })
            }