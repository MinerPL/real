            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("969176"),
                s = l.n(n),
                i = l("866227"),
                o = l.n(i),
                d = l("65597"),
                r = l("178406"),
                u = l("645266"),
                C = l("731612"),
                c = l("782340");

            function f(e) {
                let {
                    guildId: t,
                    onClose: l
                } = e, n = (0, d.default)([r.default], () => r.default.getSearchStateByGuildId(t), [t], s), {
                    selectedJoinDateOption: i
                } = n, {
                    afterDate: f,
                    beforeDate: m,
                    optionId: E
                } = i, M = E === C.DATE_OPTION.CUSTOM, T = M && null != f ? o(f).format(C.MENU_DATE_FORMAT) : c.default.Messages.NONE, h = M && null != m ? o(m).format(C.MENU_DATE_FORMAT) : c.default.Messages.NONE, x = M && null != f && null != m;
                return (0, a.jsx)(C.default, {
                    startDateLabel: T,
                    endDateLabel: h,
                    afterDate: f,
                    beforeDate: m,
                    selectedOption: E,
                    isCustomDateRange: M,
                    shouldShowCustomDateSubtext: x,
                    menuName: "joined-date",
                    accessibilityLabel: c.default.Messages.MEMBER_SAFETY_JOINED_DATE_LABEL,
                    onClose: l,
                    onSelectDateOption: function(e, l) {
                        let a = null != l ? o().subtract(l.input, l.unit).valueOf() : null;
                        (0, u.updateSearchState)(t, {
                            ...n,
                            selectedJoinDateOption: {
                                optionId: e,
                                afterDate: a,
                                beforeDate: null
                            }
                        })
                    },
                    onToggleCustomDateRange: function() {
                        (0, u.updateSearchState)(t, {
                            ...n,
                            selectedJoinDateOption: {
                                optionId: C.DATE_OPTION.CUSTOM,
                                afterDate: M ? f : null,
                                beforeDate: M ? m : null
                            }
                        })
                    },
                    onSelectStartDate: function(e) {
                        (0, u.updateSearchState)(t, {
                            ...n,
                            selectedJoinDateOption: {
                                optionId: C.DATE_OPTION.CUSTOM,
                                afterDate: e.valueOf(),
                                beforeDate: m
                            }
                        })
                    },
                    onSelectEndDate: function(e) {
                        (0, u.updateSearchState)(t, {
                            ...n,
                            selectedJoinDateOption: {
                                optionId: C.DATE_OPTION.CUSTOM,
                                afterDate: f,
                                beforeDate: e.valueOf()
                            }
                        })
                    }
                })
            }