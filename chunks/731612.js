            "use strict";
            l.r(t), l.d(t, {
                MENU_DATE_FORMAT: function() {
                    return E
                },
                DATE_OPTION: function() {
                    return a
                },
                default: function() {
                    return T
                }
            }), l("222007");
            var a, n, s = l("37983"),
                i = l("884691"),
                o = l("866227"),
                d = l.n(o),
                C = l("868233"),
                r = l("77078"),
                u = l("980428"),
                c = l("49111"),
                f = l("782340"),
                m = l("165258");
            let E = "MMM Do, YYYY",
                M = d("2015-05-15").local(),
                h = (0, C.makeLazy)({
                    createPromise: () => l.el("201959").then(l.bind(l, "201959")),
                    webpackId: "201959"
                });
            (n = a || (a = {}))[n.ALL = 0] = "ALL", n[n["1_HOUR"] = 1] = "1_HOUR", n[n["24_HOURS"] = 2] = "24_HOURS", n[n["7_DAYS"] = 3] = "7_DAYS", n[n["2_WEEKS"] = 4] = "2_WEEKS", n[n["4_WEEKS"] = 5] = "4_WEEKS", n[n["3_MONTHS"] = 6] = "3_MONTHS", n[n.CUSTOM = 7] = "CUSTOM";

            function T(e) {
                let {
                    startDateLabel: t,
                    endDateLabel: l,
                    afterDate: a,
                    beforeDate: n,
                    selectedOption: o,
                    isCustomDateRange: C,
                    shouldShowCustomDateSubtext: E,
                    menuName: T,
                    onClose: x,
                    onSelectDateOption: H,
                    onToggleCustomDateRange: _,
                    onSelectStartDate: A,
                    onSelectEndDate: L
                } = e, g = [{
                    id: 0,
                    option: null,
                    label: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_ALL
                }, {
                    id: 1,
                    option: {
                        input: 1,
                        unit: "h"
                    },
                    label: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_1_HOUR
                }, {
                    id: 2,
                    option: {
                        input: 24,
                        unit: "h"
                    },
                    label: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_24_HOURS
                }, {
                    id: 3,
                    option: {
                        input: 7,
                        unit: "d"
                    },
                    label: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_7_DAYS
                }, {
                    id: 4,
                    option: {
                        input: 2,
                        unit: "w"
                    },
                    label: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_2_WEEKS
                }, {
                    id: 5,
                    option: {
                        input: 4,
                        unit: "w"
                    },
                    label: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_4_WEEKS
                }, {
                    id: 6,
                    option: {
                        input: 3,
                        unit: "M"
                    },
                    label: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_3_MONTHS
                }], [N, p] = i.useState(!1), S = i.useCallback(() => {
                    p(!0), _()
                }, [_]), v = i.useCallback(e => {
                    A(e)
                }, [A]), R = i.useCallback(e => {
                    L(e)
                }, [L]);
                return (0, s.jsx)(r.Menu, {
                    navId: "member-safety-guild-member-".concat(T, "-menu"),
                    onClose: x,
                    "aria-label": f.default.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
                    onSelect: c.NOOP,
                    children: (0, s.jsx)(r.MenuGroup, {
                        children: N ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(r.MenuItem, {
                                id: "back",
                                action: () => p(!1),
                                render: e => (0, s.jsxs)("span", {
                                    ...e,
                                    className: m.nagivateBackContainer,
                                    children: [(0, s.jsx)(u.default, {
                                        width: 16,
                                        height: 16
                                    }), (0, s.jsx)(r.Text, {
                                        variant: "eyebrow",
                                        color: "header-primary",
                                        children: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
                                    })]
                                })
                            }), (0, s.jsx)(r.MenuItem, {
                                id: "after-date-menu-item",
                                label: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER,
                                subtext: t,
                                subMenuClassName: m.calendarContainer,
                                children: (0, s.jsx)(r.MenuItem, {
                                    id: "after-date-picker",
                                    render: e => (0, s.jsx)(h, {
                                        ...e,
                                        calendarClassName: m.calendar,
                                        value: C && null != a ? d(a) : void 0,
                                        onSelect: v,
                                        maxDate: d().local(),
                                        minDate: M
                                    })
                                })
                            }), (0, s.jsx)(r.MenuItem, {
                                id: "before-date-menu-item",
                                label: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE,
                                subtext: l,
                                subMenuClassName: m.calendarContainer,
                                children: (0, s.jsx)(r.MenuItem, {
                                    id: "before-date-picker",
                                    render: e => (0, s.jsx)(h, {
                                        ...e,
                                        calendarClassName: m.calendar,
                                        value: C && null != n ? d(n) : void 0,
                                        onSelect: R,
                                        maxDate: d().local(),
                                        minDate: C && null != a ? d(a) : M
                                    })
                                })
                            })]
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [g.map(e => {
                                let {
                                    id: t,
                                    option: l,
                                    label: a
                                } = e;
                                return (0, s.jsx)(r.MenuRadioItem, {
                                    group: "member-safety-guild-member-".concat(T, "-menu"),
                                    id: "guild-member-".concat(T, "-option-").concat(t),
                                    label: a,
                                    action: () => H(t, l),
                                    checked: t === o
                                }, "option-".concat(t))
                            }), (0, s.jsx)(r.MenuSeparator, {}), (0, s.jsx)(r.MenuRadioItem, {
                                group: "member-safety-guild-member-".concat(T, "-menu"),
                                id: "guild-member-".concat(T, "-custom-option}"),
                                label: f.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM,
                                subtext: E ? "".concat(t, " - ").concat(l) : void 0,
                                action: S,
                                checked: 7 === o
                            }, "option-".concat(7))]
                        })
                    })
                })
            }