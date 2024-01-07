            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            }), l("222007"), l("313619"), l("654714"), l("287168"), l("956660");
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("65597"),
                c = l("77078"),
                o = l("599110"),
                d = l("599994"),
                u = l("831109"),
                p = l("682777"),
                m = l("412707"),
                _ = l("49111"),
                f = l("988865");

            function h(e) {
                let {
                    currentCategoryId: t,
                    className: l,
                    countsByCategory: n,
                    onView: h
                } = e, C = (0, m.useApplicationDirectoryHistory)(e => e.guildId), g = (0, r.default)([u.default], () => u.default.getCategories()), I = a.useMemo(() => {
                    let e = [(0, p.getAllCategory)(), ...g];
                    return e
                }, [g]), A = (0, m.getCurrentView)();
                return (0, i.jsx)(c.TabBar, {
                    className: s(f.container, l),
                    selectedItem: t,
                    type: "top-pill",
                    onItemSelect: e => {
                        if (e === t) return;
                        let l = I.find(t => t.id === e);
                        o.default.track(_.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
                            category: l.name,
                            category_id: l.id,
                            current_page: null == A ? void 0 : A.type,
                            guild_id: C
                        }), h(l)
                    },
                    orientation: "vertical",
                    children: I.map(e => {
                        var l;
                        let a = e.id,
                            r = e.name,
                            o = (0, p.getCategoryIcon)(e),
                            u = s(f.category, {
                                [f.activeCategory]: t === a
                            }),
                            m = new URLSearchParams;
                        return m.set("category_id", a.toString()), (0, i.jsx)(c.TabBar.Item, {
                            id: a,
                            "aria-label": r,
                            disableItemStyles: !0,
                            children: (0, i.jsxs)(d.default, {
                                href: "".concat(_.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(m),
                                className: u,
                                children: [(0, i.jsx)(o, {
                                    className: f.icon,
                                    width: "24",
                                    height: "24"
                                }), (0, i.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: r
                                }), null != n ? (0, i.jsx)(c.Text, {
                                    className: f.count,
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: null !== (l = null == n ? void 0 : n[a]) && void 0 !== l ? l : 0
                                }) : null]
                            })
                        }, a)
                    })
                })
            }