            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("798609"),
                u = n("240249"),
                d = n("776007"),
                c = n("810567"),
                f = n("113713"),
                p = n("968918"),
                m = n("317041"),
                h = n("440987");

            function E(e) {
                var t, n;
                let {
                    channel: r,
                    isAppDetailPresent: E
                } = e, [S, g] = i.useState(""), C = i.useCallback(() => g(""), [g]), {
                    commandsByActiveSection: T,
                    sectionDescriptors: v,
                    filterSection: y
                } = u.useDiscovery(r, {
                    commandType: a.ApplicationCommandType.CHAT
                }, {
                    placeholderCount: 0,
                    limit: m.DISCOVERY_COMMANDS_QUERY_LIMIT,
                    includeFrecency: !0
                });
                i.useEffect(() => {
                    y(m.BuiltInSectionId.FRECENCY)
                }, [y]);
                let x = null !== (n = null === (t = T[0]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : [],
                    I = v.filter(e => e.id !== m.BuiltInSectionId.FRECENCY && e.id !== m.BuiltInSectionId.BUILT_IN),
                    N = (0, d.useSortApplicationsViaFrecency)(I);
                return (0, l.jsxs)("div", {
                    className: o(h.container, {
                        [h.appDetailVisible]: E
                    }),
                    children: [(0, l.jsx)("div", {
                        className: h.searchBarContainer,
                        children: (0, l.jsx)(c.default, {
                            placeholder: "Search Apps & Commands",
                            onChange: g,
                            query: S,
                            onClear: C,
                            size: c.default.Sizes.MEDIUM
                        })
                    }), (0, l.jsxs)(s.Scroller, {
                        className: h.scrollableContent,
                        fade: !0,
                        children: [(0, l.jsx)(f.default, {
                            channel: r,
                            commands: x,
                            sectionDescriptors: v
                        }), (0, l.jsx)(p.default, {
                            channel: r,
                            applications: N
                        })]
                    })]
                })
            }