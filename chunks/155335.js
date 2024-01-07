            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
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
                _ = l("646186"),
                f = l("49111"),
                h = l("782340"),
                C = l("21316");

            function g(e) {
                let {
                    className: t
                } = e, l = (0, m.useApplicationDirectoryHistory)(e => e.guildId), n = (0, r.default)([u.default], () => u.default.getCategories()), g = a.useMemo(() => {
                    let e = [(0, p.getAllCategory)(), ...n];
                    return e
                }, [n]), I = (0, m.getCurrentView)(), A = e => {
                    let t = g.find(t => t.id === e);
                    o.default.track(f.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.name,
                        category_id: t.id,
                        current_page: null == I ? void 0 : I.type,
                        guild_id: l
                    }), (0, _.goToCategory)({
                        categoryId: t.id
                    })
                };
                return (0, i.jsx)("nav", {
                    className: s(C.container, t),
                    children: g.map(e => {
                        let t = e.id,
                            l = e.name,
                            a = (0, p.getCategoryIcon)(e),
                            n = new URLSearchParams;
                        return n.set("category_id", t.toString()), (0, i.jsx)(d.default, {
                            href: "".concat(f.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(n),
                            children: (0, i.jsxs)(c.Clickable, {
                                className: C.category,
                                "aria-label": h.default.Messages.APP_DIRECTORY_CATEGORY_BUTTON_A11Y_LABEL.format({
                                    categoryName: l
                                }),
                                onClick: () => A(t),
                                children: [(0, i.jsx)(a, {
                                    className: C.icon,
                                    width: "24",
                                    height: "24"
                                }), (0, i.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: l
                                })]
                            })
                        }, t)
                    })
                })
            }