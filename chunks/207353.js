            "use strict";
            s.r(t), s.d(t, {
                getDefaultSorter: function() {
                    return I
                },
                createColumn: function() {
                    return S
                },
                createListingNameColumn: function() {
                    return g
                },
                createCurrencyAmountColumn: function() {
                    return f
                },
                createPersonCountColumn: function() {
                    return A
                },
                createTableColumns: function() {
                    return L
                },
                HeaderCell: function() {
                    return m
                },
                Cell: function() {
                    return C
                },
                default: function() {
                    return R
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l);
            s("866227");
            var r = s("77078"),
                o = s("158352"),
                d = s("781896"),
                u = s("153160"),
                c = s("750482"),
                E = s("49111"),
                _ = s("782340"),
                T = s("960282");

            function I(e) {
                return (t, s, a) => {
                    let n = e(t),
                        l = e(s);
                    return null != n && null != l ? n === l ? 0 : n < l ? -1 : 1 : 0
                }
            }

            function S(e) {
                let {
                    key: t,
                    cellClassName: s,
                    renderHeader: a,
                    renderContent: n,
                    ...l
                } = e;
                return {
                    key: t,
                    bodyCellClassName: T.cell,
                    cellClassName: s,
                    renderHeader: a,
                    render: n,
                    ...l
                }
            }

            function N() {
                return (0, a.jsx)(r.Text, {
                    variant: "text-xs/medium",
                    className: T.unpublishedBadge,
                    children: _.default.Messages.GUILD_PRODUCT_UNPUBLISHED_TITLE
                })
            }

            function g(e) {
                let {
                    cellClassName: t,
                    key: s,
                    renderHeader: n,
                    ...l
                } = e;
                return S({
                    cellClassName: t,
                    key: s,
                    renderHeader: n,
                    renderContent(e) {
                        let {
                            listing: t
                        } = e, s = null;
                        return null != t && (s = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(c.default, {
                                listing: t,
                                imageSize: 128,
                                alt: "",
                                className: T.listingImage
                            }), (0, a.jsxs)(r.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                className: T.listingNameLabel,
                                children: [t.name, !t.published && (0, a.jsx)(N, {})]
                            })]
                        })), (0, a.jsx)(C, {
                            className: T.listingNameCell,
                            children: s
                        })
                    },
                    ...l
                })
            }

            function f(e) {
                let {
                    cellClassName: t,
                    getAmount: s,
                    key: n,
                    renderHeader: l,
                    ...i
                } = e;
                return S({
                    key: n,
                    cellClassName: t,
                    renderHeader: l,
                    renderContent(e) {
                        let t = s(e);
                        return (0, a.jsx)(O, {
                            children: t
                        })
                    },
                    ...i
                })
            }

            function A(e) {
                let {
                    cellClassName: t,
                    getCount: s,
                    key: n,
                    renderHeader: l,
                    ...i
                } = e;
                return S({
                    key: n,
                    cellClassName: t,
                    renderHeader: l,
                    renderContent(e) {
                        let t = s(e);
                        return (0, a.jsx)(h, {
                            children: t
                        })
                    },
                    ...i
                })
            }

            function L(e) {
                let t = [...e];
                for (let s = 1; s < e.length; ++s) {
                    let a = e[s];
                    t[s] = {
                        ...a,
                        cellClassName: i(a.cellClassName, T.cellAlignRight)
                    }
                }
                return t
            }
            let m = e => {
                    let {
                        children: t
                    } = e;
                    return (0, a.jsx)(r.Text, {
                        className: T.headerCell,
                        variant: "text-xs/medium",
                        color: "interactive-normal",
                        "aria-hidden": !0,
                        children: t
                    })
                },
                C = e => {
                    let {
                        children: t,
                        className: s
                    } = e;
                    return (0, a.jsx)(r.Text, {
                        className: s,
                        variant: "text-md/normal",
                        color: "interactive-normal",
                        children: t
                    })
                },
                O = e => {
                    let {
                        children: t
                    } = e;
                    return (0, a.jsx)(C, {
                        children: (0, u.formatPrice)(null != t ? t : 0, E.CurrencyCodes.USD)
                    })
                },
                h = e => {
                    let {
                        children: t
                    } = e;
                    return (0, a.jsxs)(C, {
                        className: T.personCountCell,
                        children: [null != t ? t : "-", " ", (0, a.jsx)(d.default, {
                            className: T.personCountIcon,
                            "aria-hidden": !0
                        })]
                    })
                };

            function R(e) {
                let {
                    className: t,
                    headerClassName: s,
                    rowClassName: l,
                    enableRowSeparators: r = !1,
                    initialSortKey: d,
                    initialSortDirection: u = E.TableSortDirections.ASCENDING,
                    ...c
                } = e, [_, I] = n.useState(d), [S, N] = n.useState(u);
                return (0, a.jsx)("div", {
                    className: i(T.tableContainer, t),
                    children: (0, a.jsx)(o.default, {
                        className: i({
                            [T.tableWithoutSeparators]: !r
                        }, T.table),
                        rowClassName: i({
                            [T.rowWithSeparators]: r
                        }, l),
                        headerClassName: i(T.header, {
                            [T.headerWithoutSeparators]: !r
                        }, s),
                        sortKey: _,
                        sortDirection: S,
                        onSort: (e, t) => {
                            I(e), N(t)
                        },
                        ...c
                    })
                })
            }