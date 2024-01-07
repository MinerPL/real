            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            });
            var a, n, l = s("37983"),
                i = s("884691"),
                r = s("627445"),
                o = s.n(r),
                d = s("866227"),
                u = s.n(d),
                c = s("77078"),
                E = s("434014"),
                _ = s("488499"),
                T = s("860598"),
                I = s("445940"),
                S = s("578706"),
                N = s("381546"),
                g = s("68238"),
                f = s("717559"),
                A = s("207353"),
                L = s("215393"),
                m = s("397056"),
                C = s("782340"),
                O = s("944061");
            (a = n || (n = {})).DROPDOWN = "DROPDOWN", a.PERIOD = "PERIOD", a.AMOUNT = "AMOUNT ", a.STATUS = "STATUS ";
            let h = e => {
                let {
                    dateUtc: t
                } = e;
                return (0, l.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "interactive-active",
                    children: u(t).utc().format("MMMM YYYY")
                })
            };

            function R(e) {
                let {
                    item: t
                } = e, {
                    ppgStatus: s,
                    payoutStatus: a,
                    ppgDeferralReasons: n,
                    periodEndDate: i
                } = (0, f.getStatusForPeriod)(t), r = null != i ? u(i).add(15, "days").toISOString() : void 0, o = (0, E.formatNextPaymentDate)(r, "MMM D");
                switch (s) {
                    case m.PaymentPayoutGroupStatuses.OPEN:
                        return (0, l.jsxs)(l.Fragment, {
                            children: [null != o ? C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
                                payoutDate: o
                            }) : C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING, (0, l.jsx)(T.default, {
                                className: O.statusScheduledIcon
                            })]
                        });
                    case m.PaymentPayoutGroupStatuses.CANCELED:
                        return (0, l.jsxs)(l.Fragment, {
                            children: [C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(N.default, {
                                className: O.statusErrorIcon
                            })]
                        });
                    case m.PaymentPayoutGroupStatuses.PAYOUT_DEFERRED:
                        if ((null == n ? void 0 : n.includes(m.PaymentPayoutGroupDeferralReasons.PAYOUT_SEIZED)) === !0) return (0, l.jsxs)(l.Fragment, {
                            children: [C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(N.default, {
                                className: O.statusErrorIcon
                            })]
                        });
                        return (0, l.jsxs)(l.Fragment, {
                            children: [C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED, (0, l.jsx)(I.default, {
                                className: O.statusDeferredIcon
                            })]
                        })
                }
                switch (a) {
                    case m.PayoutStatuses.MANUAL:
                    case m.PayoutStatuses.OPEN:
                    case m.PayoutStatuses.PENDING:
                    case m.PayoutStatuses.PROCESSING:
                    case m.PayoutStatuses.SUBMITTED:
                    case m.PayoutStatuses.PENDING_FUNDS:
                    case m.PayoutStatuses.CANCELED:
                    case m.PayoutStatuses.ERROR:
                        return (0, l.jsxs)(l.Fragment, {
                            children: [null != o ? C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
                                payoutDate: o
                            }) : C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_SCHEDULED, (0, l.jsx)(T.default, {
                                className: O.statusScheduledIcon
                            })]
                        });
                    case m.PayoutStatuses.PAID:
                        return (0, l.jsxs)(l.Fragment, {
                            children: [C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PAID, (0, l.jsx)(S.default, {
                                className: O.statusPaidIcon
                            })]
                        });
                    case m.PayoutStatuses.DEFERRED:
                    case m.PayoutStatuses.DEFERRED_INTERNAL:
                    case m.PayoutStatuses.REJECTED:
                    case m.PayoutStatuses.RISK_REVIEW:
                        return (0, l.jsxs)(l.Fragment, {
                            children: [_.default.getStatusErrorText(a), (0, l.jsx)(N.default, {
                                className: O.statusErrorIcon
                            })]
                        })
                }
                return null
            }
            let D = (0, A.createCurrencyAmountColumn)({
                    key: "AMOUNT ",
                    cellClassName: O.amountColumn,
                    renderHeader() {
                        let e = (0, l.jsx)(c.Tooltip, {
                            text: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT_DISCLAIMER,
                            children: e => (0, l.jsx)(g.default, {
                                className: O.amountDisclaimer,
                                ...e
                            })
                        });
                        return (0, l.jsxs)(A.HeaderCell, {
                            children: [C.default.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PRICE_COLUMN_TITLE, e]
                        })
                    },
                    getAmount: e => e.amount
                }),
                M = (0, L.createExpandableTableColumns)([(0, L.createExpandableColumn)({
                    key: "PERIOD",
                    cellClassName: O.periodColumn,
                    renderHeader: () => (0, l.jsx)(A.HeaderCell, {
                        children: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PERIOD
                    }),
                    renderContent: e => (0, l.jsx)(h, {
                        dateUtc: e.periodStartingAt
                    }),
                    renderExpandedContent(e, t) {
                        o(null != t, "CellProps should always be provided");
                        let {
                            ListingIdLabel: s
                        } = t;
                        return (0, l.jsx)(s, {
                            listingId: e.listingId
                        })
                    }
                }), (0, L.createExpandableColumn)({
                    ...D,
                    renderContent: D.render,
                    renderExpandedContent: (e, t) => D.render(e, t)
                }), (0, A.createColumn)({
                    key: "STATUS ",
                    cellClassName: O.statusColumn,
                    renderHeader() {
                        let e = (0, l.jsx)(c.Tooltip, {
                            text: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_NEXT_PAYMENT_DISCLAIMER,
                            children: e => (0, l.jsx)(g.default, {
                                className: O.statusDisclaimer,
                                ...e
                            })
                        });
                        return (0, l.jsxs)(A.HeaderCell, {
                            children: [C.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS, e]
                        })
                    },
                    renderContent: e => (0, l.jsx)(A.Cell, {
                        className: O.statusCell,
                        children: (0, l.jsx)(R, {
                            item: e
                        })
                    })
                })], {
                    expandableToggleColumnKey: "DROPDOWN"
                });

            function G(e) {
                let {
                    ListingIdLabel: t,
                    payoutsByPeriod: s
                } = e, {
                    cellProps: a,
                    data: n
                } = (0, L.useExpandableRows)(s, {
                    generateExpandedRows: e => Object.keys(e.ppgs).map(t => {
                        var s;
                        return {
                            key: e.key + t,
                            listingId: t,
                            amount: null === (s = e.ppgs[t]) || void 0 === s ? void 0 : s.amount
                        }
                    })
                }), r = i.useMemo(() => ({
                    ListingIdLabel: t,
                    ...a
                }), [a, t]);
                return (0, l.jsx)(A.default, {
                    columns: M,
                    data: n,
                    cellProps: r
                })
            }