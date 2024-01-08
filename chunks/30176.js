            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("646240"),
                i = n("246053"),
                r = n("791679"),
                u = n("782340"),
                o = n("512233"),
                d = n("64298"),
                c = n("16873"),
                f = e => {
                    let t, {
                        searchQuery: n,
                        setSearchQuery: f,
                        mostRecentQuery: h,
                        handleClearSearch: p,
                        handleSearchKeyPress: m,
                        handleCreateOrAddGuild: E,
                        searchResults: C,
                        searchFetching: S
                    } = e;
                    if (S) t = (0, a.jsx)("div", {
                        className: o.pageContainer,
                        children: (0, a.jsx)(l.Spinner, {
                            className: o.spinner
                        })
                    });
                    else if (0 === C.length) {
                        let e = null != E ? u.default.Messages.DIRECTORY_SEARCH_NO_RESULTS_SUBTITLE.format({
                            addServerHook: function(e, t) {
                                return (0, a.jsx)(l.Anchor, {
                                    onClick: E,
                                    children: e
                                }, t)
                            }
                        }) : u.default.Messages.DIRECTORY_SEARCH_NO_RESULTS_NO_ADD;
                        t = (0, a.jsxs)("div", {
                            className: d.emptySearchWrapper,
                            children: [(0, a.jsx)("img", {
                                className: d.emptySearchImage,
                                alt: "",
                                src: c
                            }), (0, a.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                className: d.emptySearchTitle,
                                children: u.default.Messages.DIRECTORY_SEARCH_NO_RESULTS_TITLE
                            }), (0, a.jsx)(l.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                className: d.emptySearchSubtitle,
                                children: e
                            })]
                        })
                    } else t = (0, a.jsx)("div", {
                        className: o.cardsContainer,
                        children: C.map(e => (0, a.jsx)(r.default, {
                            entry: e
                        }, e.guildId))
                    });
                    return (0, a.jsx)("div", {
                        className: o.pageContainer,
                        children: (0, a.jsxs)(l.ScrollerAuto, {
                            className: o.scroller,
                            children: [(0, a.jsxs)("div", {
                                className: d.searchHeader,
                                children: [(0, a.jsxs)("div", {
                                    className: d.headerTitleWrapper,
                                    children: [(0, a.jsx)(l.Clickable, {
                                        onClick: p,
                                        className: d.arrow,
                                        children: (0, a.jsx)(i.default, {
                                            direction: i.default.Directions.LEFT
                                        })
                                    }), (0, a.jsx)(l.Heading, {
                                        variant: "heading-xl/semibold",
                                        className: d.searchPageTitle,
                                        children: u.default.Messages.DIRECTORY_SEARCH_RESULTS_HEADER.format({
                                            numResults: C.length,
                                            query: h
                                        })
                                    })]
                                }), (0, a.jsx)(s.default, {
                                    searchTerm: n,
                                    className: d.searchPageBox,
                                    inputClassName: d.searchPageInput,
                                    label: u.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
                                    placeholder: u.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
                                    onChange: f,
                                    onClear: p,
                                    onKeyPress: m,
                                    cta: null != n && n.length > 0 ? u.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
                                })]
                            }), t]
                        })
                    })
                }