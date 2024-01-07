            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("701909"),
                i = n("49111"),
                r = n("782340"),
                o = n("14310");

            function u(e) {
                let {
                    searchMode: t,
                    searchByMode: n
                } = e;
                return (0, a.jsxs)("header", {
                    className: o.searchHeader,
                    children: [(0, a.jsx)(d, {
                        ...e
                    }), (0, a.jsxs)(l.TabBar, {
                        orientation: "horizontal",
                        className: o.searchHeaderTabList,
                        selectedItem: t,
                        onItemSelect: n,
                        children: [(0, a.jsx)(l.TabBar.Item, {
                            id: i.SearchModes.NEWEST,
                            children: r.default.Messages.SEARCH_NEWEST_SHORT
                        }), (0, a.jsx)(l.TabBar.Item, {
                            id: i.SearchModes.OLDEST,
                            children: r.default.Messages.SEARCH_OLDEST_SHORT
                        }), (0, a.jsx)(l.TabBar.Item, {
                            id: i.SearchModes.MOST_RELEVANT,
                            children: r.default.Messages.SEARCH_MOST_RELEVANT_SHORT
                        })]
                    })]
                })
            }

            function d(e) {
                let t;
                let {
                    isSearching: n,
                    isIndexing: s,
                    documentsIndexed: i
                } = e;
                (s || n) && (t = (0, a.jsx)("div", {
                    className: o.spinnerWrapper,
                    children: (0, a.jsx)(l.Spinner, {
                        type: l.Spinner.Type.SPINNING_CIRCLE,
                        className: o.spinner,
                        itemClassName: o.spinnerPath
                    })
                }));
                let u = s && !n;
                return (0, a.jsxs)("div", {
                    className: o.totalResults,
                    role: "status",
                    children: [u ? (0, a.jsx)(l.Tooltip, {
                        text: r.default.Messages.SEARCH_STILL_INDEXING_HINT.format({
                            count: i
                        }),
                        children: n => (0, a.jsxs)("div", {
                            className: o.totalResultsWrapper,
                            ...n,
                            children: [(0, a.jsx)(c, {
                                ...e
                            }), t]
                        })
                    }) : (0, a.jsx)(c, {
                        ...e
                    }), u ? null : t]
                })
            }

            function c(e) {
                let {
                    isSearching: t,
                    isIndexing: n,
                    totalResults: u
                } = e;
                if (t) return (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "header-primary",
                    children: r.default.Messages.SEARCHING
                });
                {
                    if (n) return (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: (0, a.jsx)(l.Anchor, {
                            className: o.helpdeskLink,
                            href: s.default.getArticleURL(i.HelpdeskArticles.SEARCH_INDEXING),
                            children: r.default.Messages.STILL_INDEXING
                        })
                    });
                    let e = u.toLocaleString();
                    return (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-primary",
                        children: r.default.Messages.TOTAL_RESULTS.format({
                            count: e
                        })
                    })
                }
            }