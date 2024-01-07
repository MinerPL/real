            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var l = s("37983"),
                i = s("884691"),
                r = s("77078"),
                a = s("191814"),
                n = s("837899"),
                d = s("425190"),
                o = s("891152"),
                u = s("387678"),
                c = s("874146"),
                C = s("782340"),
                _ = s("270560");

            function f(e) {
                let {
                    closePopout: t,
                    sortOptionContext: s
                } = e, {
                    sortOption: a,
                    setSortOption: n,
                    onReset: d
                } = s, o = i.useMemo(() => c.DISPLAYED_SORT_OPTIONS.map(e => (0, l.jsx)(r.MenuRadioItem, {
                    id: "".concat(e),
                    group: "sort-by",
                    label: (0, c.getGuildProductSortOptionLabel)(e),
                    action: () => n(e),
                    checked: a === e
                }, e)), [n, a]);
                return (0, l.jsx)("div", {
                    className: _.container,
                    children: (0, l.jsxs)(r.Menu, {
                        navId: "sort-and-view",
                        "aria-label": C.default.Messages.GUILD_STORE_SORT_OPTION_SELECT_MENU_ARIA,
                        hideScroller: !0,
                        onClose: t,
                        onSelect: t,
                        children: [(0, l.jsx)(r.MenuGroup, {
                            label: C.default.Messages.GUILD_STORE_SORT_OPTION_SELECT_MENU_SORT_BY_LABEL,
                            children: o
                        }), (0, l.jsx)(r.MenuGroup, {
                            children: (0, l.jsx)(r.MenuItem, {
                                id: "reset-all",
                                className: _.clearText,
                                label: (0, l.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children: C.default.Messages.FORUM_CHANNEL_RESET_ALL
                                }),
                                action: d
                            })
                        })]
                    })
                })
            }

            function h() {
                let e = (0, u.useGuildProductsSortOptionContext)(),
                    t = (0, c.getGuildProductSortOptionLabel)(e.sortOption);
                return (0, l.jsx)(r.Popout, {
                    renderPopout: t => {
                        let {
                            closePopout: s
                        } = t;
                        return (0, l.jsx)(f, {
                            closePopout: s,
                            sortOptionContext: e
                        })
                    },
                    position: "bottom",
                    align: "left",
                    children: (e, s) => {
                        let {
                            isShown: i
                        } = s;
                        return (0, l.jsxs)(r.Button, {
                            ...e,
                            size: r.Button.Sizes.MIN,
                            color: r.Button.Colors.CUSTOM,
                            className: _.sortDropdown,
                            innerClassName: _.sortDropdownInner,
                            children: [(0, l.jsx)(o.default, {
                                "aria-label": C.default.Messages.GUILD_STORE_SORT_OPTION_TOGGLE_ARIA
                            }), (0, l.jsx)(a.default, {
                                size: 8,
                                horizontal: !0
                            }), (0, l.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                color: "header-primary",
                                children: t
                            }), i ? (0, l.jsx)(d.default, {
                                width: 20
                            }) : (0, l.jsx)(n.default, {
                                width: 20
                            })]
                        })
                    }
                })
            }