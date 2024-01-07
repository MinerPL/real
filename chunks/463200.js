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
                C = l("178406"),
                r = l("645266"),
                u = l("731612"),
                c = l("782340");

            function f(e) {
                let {
                    guildId: t,
                    onClose: l
                } = e, n = (0, d.default)([C.default], () => C.default.getSearchStateByGuildId(t), [t], s), {
                    selectedAccountAgeOption: i
                } = n, {
                    afterDate: f,
                    beforeDate: E,
                    optionId: m
                } = i, M = m === u.DATE_OPTION.CUSTOM, T = M && null != f ? o(f).format(u.MENU_DATE_FORMAT) : c.default.Messages.NONE, h = M && null != E ? o(E).format(u.MENU_DATE_FORMAT) : c.default.Messages.NONE, x = M && null != f && null != E;
                return (0, a.jsx)(u.default, {
                    startDateLabel: T,
                    endDateLabel: h,
                    afterDate: f,
                    beforeDate: E,
                    selectedOption: m,
                    isCustomDateRange: M,
                    shouldShowCustomDateSubtext: x,
                    menuName: "account-age",
                    accessibilityLabel: c.default.Messages.MEMBER_SAFETY_ACCOUNT_AGE_LABEL,
                    onClose: l,
                    onSelectDateOption: function(e, l) {
                        let a = null != l ? o().subtract(l.input, l.unit).valueOf() : null;
                        (0, r.updateSearchState)(t, {
                            ...n,
                            selectedAccountAgeOption: {
                                optionId: e,
                                afterDate: a,
                                beforeDate: null
                            }
                        })
                    },
                    onToggleCustomDateRange: function() {
                        (0, r.updateSearchState)(t, {
                            ...n,
                            selectedAccountAgeOption: {
                                optionId: u.DATE_OPTION.CUSTOM,
                                afterDate: M ? f : null,
                                beforeDate: M ? E : null
                            }
                        })
                    },
                    onSelectStartDate: function(e) {
                        (0, r.updateSearchState)(t, {
                            ...n,
                            selectedAccountAgeOption: {
                                optionId: u.DATE_OPTION.CUSTOM,
                                afterDate: e.valueOf(),
                                beforeDate: E
                            }
                        })
                    },
                    onSelectEndDate: function(e) {
                        (0, r.updateSearchState)(t, {
                            ...n,
                            selectedAccountAgeOption: {
                                optionId: u.DATE_OPTION.CUSTOM,
                                afterDate: f,
                                beforeDate: e.valueOf()
                            }
                        })
                    }
                })
            }