            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            }), l("222007"), l("808653"), l("424973");
            var i = l("37983"),
                a = l("884691"),
                n = l("125352"),
                s = l("769846"),
                r = l("476765"),
                c = l("599110"),
                o = l("599994"),
                d = l("967473"),
                u = l("412707"),
                p = l("646186"),
                m = l("121631"),
                _ = l("417152"),
                f = l("49111"),
                h = l("859546");

            function C(e) {
                let {
                    collection: t,
                    collection: {
                        id: l,
                        title: C,
                        application_directory_collection_items: g
                    }
                } = e, [I, A] = a.useState(300), [E, v] = a.useState(4), x = parseFloat(s.default.COLLECTION_LIST_CARD_GAP), R = (0, u.useApplicationDirectoryHistory)(e => e.guildId), T = (0, _.default)({
                    collection: t
                });
                a.useEffect(() => {
                    function e() {
                        var e;
                        let t = null === (e = T.current) || void 0 === e ? void 0 : e.offsetWidth,
                            l = 1;
                        if (null == t) return 300;
                        t >= 500 && (l = 2), t >= 700 && (l = 3), t >= 1e3 && (l = 4), v(l);
                        let i = (l - 1) * x;
                        return (t - i) / l
                    }
                    let t = T.current;
                    if (null == t) return;
                    let l = new ResizeObserver(() => {
                        A(e())
                    });
                    return A(e()), l.observe(t), () => {
                        l.disconnect()
                    }
                }, [x, T]);
                let N = (0, r.useUID)();
                return (0, i.jsx)("div", {
                    ref: T,
                    children: (0, i.jsx)(m.default, {
                        header: C,
                        headerId: N,
                        tileWidth: I,
                        tileMargin: x,
                        onScroll: e => {
                            let {
                                tileIndex: t
                            } = e, i = g.slice(t, t + E).reduce((e, t) => {
                                let {
                                    type: l,
                                    application: i
                                } = t;
                                return l === n.ApplicationDirectoryCollectionItemType.APPLICATION && null != i && e.push(i.id), e
                            }, []);
                            c.default.track(f.AnalyticEvents.APP_DIRECTORY_COLLECTION_SCROLLED, {
                                collection_id: l,
                                offset: t,
                                results: i,
                                guild_id: R
                            })
                        },
                        children: (0, i.jsx)("ul", {
                            "aria-labelledby": N,
                            className: h.itemsContainer,
                            children: g.map(e => {
                                let {
                                    id: t,
                                    type: a,
                                    application: s
                                } = e;
                                if (a === n.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) return (0, i.jsx)("li", {
                                    style: {
                                        width: I
                                    },
                                    className: h.itemContainer,
                                    children: (0, i.jsx)(o.default, {
                                        href: f.Routes.APPLICATION_DIRECTORY_PROFILE(s.id),
                                        children: (0, i.jsx)(d.default, {
                                            application: s,
                                            onClick: e => {
                                                let {
                                                    mutualGuilds: t
                                                } = e;
                                                c.default.track(f.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                                    collection_id: l,
                                                    application_id: s.id,
                                                    guild_id: R,
                                                    shown_mutual_guilds_count: t.length
                                                }), (0, p.goToApplication)({
                                                    applicationId: s.id
                                                })
                                            },
                                            animatesOnHover: !0
                                        })
                                    })
                                }, t)
                            })
                        })
                    })
                })
            }