            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            }), l("222007");
            var i = l("37983"),
                a = l("884691"),
                n = l("77078"),
                s = l("599110"),
                r = l("682777"),
                c = l("436846"),
                o = l("412707"),
                d = l("646186"),
                u = l("49111"),
                p = l("782340"),
                m = l("417722"),
                _ = l("885634");

            function f() {
                let e = (0, o.useApplicationDirectoryHistory)(e => e.guildId),
                    [t, l] = a.useState(""),
                    f = a.useCallback(() => {
                        let l = (0, r.getAllCategory)();
                        s.default.track(u.AnalyticEvents.APP_DIRECTORY_SEARCH_STARTED, {
                            search_term: t,
                            category: l.name,
                            current_page: o.ApplicationDirectoryViews.HOME,
                            category_id: l.id,
                            guild_id: e
                        }), (0, d.goSearch)({
                            query: t
                        })
                    }, [e, t]);
                return (0, i.jsxs)("div", {
                    className: m.container,
                    children: [(0, i.jsxs)("div", {
                        className: m.searchBarContainer,
                        children: [(0, i.jsx)(n.Heading, {
                            variant: "display-lg",
                            className: m.heading,
                            children: p.default.Messages.APP_DIRECTORY_HERO_HEADING
                        }), (0, i.jsx)(c.default, {
                            className: m.searchBar,
                            query: t,
                            onChange: l,
                            onSubmit: f,
                            canShowCta: !0
                        })]
                    }), (0, i.jsx)("img", {
                        src: _,
                        alt: "",
                        className: m.rightImage
                    })]
                })
            }