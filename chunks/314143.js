            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("65597"),
                d = l("77078"),
                C = l("691386"),
                r = l("804160"),
                u = l("178406"),
                c = l("645266"),
                f = l("782340"),
                E = l("32334");

            function m(e) {
                let {
                    guildId: t,
                    onPageChange: l
                } = e, [s, m] = n.useTransition(), M = (0, o.default)([u.default], () => u.default.getEstimatedMemberSearchCountByGuildId(t), [t]), T = (0, o.useStateFromStoresObject)([u.default], () => u.default.getPaginationStateByGuildId(t), [t]), h = (0, r.useIsMakingRequest)(t), x = n.useMemo(() => C.PAGINATION_PAGE_SIZE_OPTIONS.map(e => ({
                    value: e,
                    label: Number(e).toLocaleString()
                })), []), _ = new Intl.NumberFormat(f.default.getLocale()).format(M), H = f.default.Messages.MEMBER_SAFETY_TABLE_PAGINATION_LABEL.format({
                    count: h ? "..." : _
                }), A = M > T.pageSize || h, N = M > C.PAGINATION_PAGE_SIZE_OPTIONS[0];
                return (0, a.jsxs)("div", {
                    className: i(E.paginationContainer),
                    children: [(0, a.jsx)("div", {
                        className: i(E.pageSizeSelection),
                        children: N ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(d.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: f.default.Messages.MEMBER_SAFETY_TABLE_PAGINATION_PRE_LABEL
                            }), (0, a.jsx)(d.Select, {
                                "aria-label": H,
                                className: E.pageSizeInput,
                                options: x,
                                isSelected: e => e === T.pageSize,
                                select: e => {
                                    m(() => {
                                        (0, c.updateMemberSafetyTablePagination)(t, {
                                            ...T,
                                            pageSize: e
                                        })
                                    })
                                },
                                serialize: e => "".concat(e),
                                popoutPosition: "top"
                            }), (0, a.jsx)(d.Tooltip, {
                                text: f.default.Messages.LOADING,
                                shouldShow: h,
                                children: e => (0, a.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    className: i(E.pageLabel),
                                    ...e,
                                    children: H
                                })
                            })]
                        }) : (0, a.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: f.default.Messages.MEMBER_SAFETY_TABLE_PAGINATION_NO_PAGE_NUMBERS_LABEL.format({
                                count: M
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: i(E.pagination),
                        children: A && (0, a.jsx)(d.Paginator, {
                            className: i(E.paginationInput),
                            totalCount: M,
                            pageSize: T.pageSize,
                            disablePaginationGap: !0,
                            hideMaxPage: !0,
                            currentPage: T.currentPage,
                            onPageChange: e => {
                                null == l || l(e), requestIdleCallback(() => {
                                    m(() => {
                                        (0, c.updateMemberSafetyTablePagination)(t, {
                                            ...T,
                                            currentPage: e
                                        })
                                    })
                                })
                            },
                            maxVisiblePages: C.MAX_VISIBLE_PAGES
                        })
                    })]
                })
            }