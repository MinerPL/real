            "use strict";
            n.r(t), n.d(t, {
                Paginator: function() {
                    return S
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("271841"),
                l = n("227645"),
                u = n("605451"),
                c = n("240353"),
                d = n("980428"),
                f = n("772280"),
                E = n("21872"),
                h = n("782340"),
                p = n("959279");

            function _(e) {
                let {
                    page: t,
                    totalPageCount: n,
                    disabled: s,
                    onPageChange: o
                } = e, [d, f] = r.useState(!1), [E, h] = r.useState(null), _ = null != E && E >= 1 && E <= n;
                return s ? (0, i.jsx)(u.Heading, {
                    className: p.gap,
                    "aria-hidden": !0,
                    variant: "heading-sm/semibold",
                    children: "…"
                }, t.key) : d ? (0, i.jsx)(c.TextInput, {
                    autoFocus: !0,
                    className: p.jumpToPageInlineInput,
                    size: c.TextInput.Sizes.MINI,
                    value: null == E ? "" : "".concat(E),
                    onChange: e => {
                        let t = parseInt(e);
                        if ("" === e || isNaN(t)) {
                            h(null);
                            return
                        }
                        h(t)
                    },
                    onBlur: () => {
                        f(!1), h(null)
                    },
                    onKeyPress: e => {
                        "Enter" === e.key && null != E && _ && (o(E), f(!1), h(null))
                    },
                    disabled: s
                }, t.key) : (0, i.jsx)(l.Clickable, {
                    onClick: () => f(!0),
                    children: (0, i.jsx)(u.Heading, {
                        className: a(p.roundButton, p.gap),
                        "aria-hidden": !0,
                        variant: "heading-sm/semibold",
                        children: "…"
                    })
                }, t.key)
            }

            function S(e) {
                let {
                    currentPage: t,
                    totalCount: n,
                    pageSize: r,
                    maxVisiblePages: s,
                    disablePaginationGap: u,
                    onPageChange: c,
                    hideMaxPage: S = !1,
                    className: m
                } = e, T = Math.ceil(n / r);
                return (0, i.jsx)(E.PaginationController, {
                    totalPageCount: T,
                    selectedPage: t,
                    maxVisiblePages: s,
                    hideMaxPage: S,
                    onPageChange: function(e) {
                        null != c && c(e)
                    },
                    children: function(e) {
                        let {
                            pages: t,
                            hasMultiplePages: n
                        } = e;
                        return n ? (0, i.jsx)("div", {
                            className: a(p.pageControlContainer, m),
                            children: (0, i.jsx)("nav", {
                                className: p.pageControl,
                                children: t.map(e => {
                                    var t, n;
                                    switch (e.type) {
                                        case E.PaginationTypes.BACK:
                                            return function(e) {
                                                let {
                                                    key: t,
                                                    disabled: n,
                                                    navigateToPage: r
                                                } = e;
                                                return (0, i.jsxs)(o.Button, {
                                                    className: p.endButton,
                                                    innerClassName: p.endButtonInner,
                                                    look: o.Button.Looks.BLANK,
                                                    color: o.Button.Colors.TRANSPARENT,
                                                    onClick: r,
                                                    disabled: n,
                                                    rel: "prev",
                                                    children: [(0, i.jsx)(d.default, {
                                                        className: p.iconCaret,
                                                        "aria-hidden": !0
                                                    }), (0, i.jsx)("span", {
                                                        children: h.default.Messages.BACK
                                                    })]
                                                }, t)
                                            }(e);
                                        case E.PaginationTypes.PAGE:
                                            ;
                                            return t = e, (0, i.jsx)(l.Clickable, {
                                                className: a(p.roundButton, {
                                                    [p.activeButton]: t.selected
                                                }),
                                                onClick: t.selected ? void 0 : t.navigateToPage,
                                                "aria-label": h.default.Messages.PAGINATION_PAGE_LABEL.format({
                                                    pageNumber: t.targetPage
                                                }),
                                                "aria-current": t.selected ? "page" : void 0,
                                                children: (0, i.jsx)("span", {
                                                    children: t.targetPage
                                                })
                                            }, t.key);
                                        case E.PaginationTypes.GAP:
                                            ;
                                            return n = e, (0, i.jsx)(_, {
                                                page: n,
                                                totalPageCount: T,
                                                disabled: !!u,
                                                onPageChange: c
                                            }, n.key);
                                        case E.PaginationTypes.NEXT:
                                            return function(e) {
                                                let {
                                                    key: t,
                                                    disabled: n,
                                                    navigateToPage: r
                                                } = e;
                                                return (0, i.jsxs)(o.Button, {
                                                    className: p.endButton,
                                                    innerClassName: p.endButtonInner,
                                                    look: o.Button.Looks.BLANK,
                                                    color: o.Button.Colors.TRANSPARENT,
                                                    onClick: r,
                                                    disabled: n,
                                                    rel: "next",
                                                    children: [(0, i.jsx)("span", {
                                                        children: h.default.Messages.NEXT
                                                    }), (0, i.jsx)(f.default, {
                                                        className: p.iconCaret,
                                                        "aria-hidden": !0
                                                    })]
                                                }, t)
                                            }(e);
                                        default:
                                            return null
                                    }
                                })
                            })
                        }) : null
                    }
                })
            }