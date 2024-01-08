            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("781738");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("90915"),
                o = n("394846"),
                u = n("446674"),
                d = n("77078"),
                c = n("913144"),
                E = n("939488"),
                f = n("630086"),
                _ = n("69927"),
                h = n("449004"),
                C = n("539938"),
                I = n("718091"),
                T = n("698343"),
                S = n("970366"),
                N = n("161778"),
                A = n("545429"),
                m = n("476765"),
                p = n("564875"),
                g = n("956089"),
                R = n("439932"),
                O = n("161011"),
                L = n("756183"),
                v = n("49111"),
                M = n("586391"),
                P = n("782340"),
                D = n("905360");

            function y() {
                return (0, a.jsxs)("div", {
                    className: D.inviteToolbar,
                    children: [(0, a.jsx)(I.default, {
                        tooltip: P.default.Messages.NEW_GROUP_DM
                    }), (0, a.jsx)(C.default.Divider, {})]
                })
            }
            var x = function(e) {
                let {
                    initialSection: t
                } = e, n = (0, r.useLocation)(), i = (0, r.useHistory)();
                s.useEffect(() => {
                    let e = "true" === new URLSearchParams(n.search).get("confirm-age");
                    e && c.default.dispatch({
                        type: "AGE_GATE_MODAL_OPEN",
                        source: M.AgeGateSource.DEEP_LINK_PROMPT
                    }).then(() => {
                        i.replace(v.Routes.ME)
                    })
                }, [i, n]), s.useEffect(() => {
                    E.setHomeLink(v.Routes.FRIENDS), (0, S.trackAppUIViewed)("friends")
                }), s.useEffect(() => {
                    null != t && f.default.setInitialSection(t)
                }, [t]);
                let I = (0, u.useStateFromStores)([N.default], () => N.default.theme),
                    {
                        section: x,
                        pendingCount: b
                    } = (0, u.useStateFromStoresObject)([A.default], () => A.default.getState()),
                    U = (0, u.useStateFromStoresObject)([h.default], () => h.default.getSuggestionCount()),
                    G = (0, m.useUID)(),
                    j = (0, m.useUID)();
                return (0, a.jsxs)("main", {
                    className: D.container,
                    "aria-label": P.default.Messages.FRIENDS,
                    children: [(0, a.jsx)(_.AppPageTitle, {
                        location: P.default.Messages.FRIENDS
                    }), (0, a.jsxs)(C.default, {
                        className: (0, R.getThemeClass)(I),
                        toolbar: (0, a.jsx)(y, {}),
                        scrollable: o.isMobile,
                        role: "navigation",
                        "aria-labelledby": G,
                        children: [(0, a.jsx)(C.default.Icon, {
                            icon: p.default,
                            "aria-hidden": !0
                        }), (0, a.jsx)(C.default.Title, {
                            id: G,
                            children: P.default.Messages.FRIENDS
                        }), (0, a.jsx)(C.default.Divider, {}), (0, a.jsxs)(d.TabBar, {
                            "aria-label": P.default.Messages.FRIENDS,
                            selectedItem: x,
                            type: "top-pill",
                            onItemSelect: e => {
                                f.default.setSection(e)
                            },
                            className: D.tabBar,
                            children: [(0, a.jsx)(d.TabBar.Item, {
                                id: v.FriendsSections.ONLINE,
                                className: D.item,
                                children: P.default.Messages.FRIENDS_SECTION_ONLINE
                            }), (0, a.jsx)(d.TabBar.Item, {
                                id: v.FriendsSections.ALL,
                                className: D.item,
                                children: P.default.Messages.FRIENDS_SECTION_ALL
                            }), (0, a.jsxs)(d.TabBar.Item, {
                                id: v.FriendsSections.PENDING,
                                className: D.item,
                                "aria-label": P.default.Messages.FRIENDS_SECTION_PENDING,
                                children: [P.default.Messages.FRIENDS_SECTION_PENDING, b > 0 ? (0, a.jsx)(g.NumberBadge, {
                                    count: b,
                                    className: D.badge,
                                    style: {
                                        paddingRight: 0
                                    }
                                }) : null]
                            }), U > 0 ? (0, a.jsxs)(d.TabBar.Item, {
                                id: v.FriendsSections.SUGGESTIONS,
                                className: D.item,
                                "aria-label": P.default.Messages.FRIENDS_SECTION_SUGGESTIONS,
                                children: [P.default.Messages.FRIENDS_SECTION_SUGGESTIONS, (0, a.jsx)(g.NumberBadge, {
                                    count: U,
                                    className: D.badge,
                                    style: {
                                        paddingRight: 0
                                    }
                                })]
                            }) : null, (0, a.jsx)(d.TabBar.Item, {
                                id: v.FriendsSections.BLOCKED,
                                className: D.item,
                                children: P.default.Messages.BLOCKED
                            }), (0, a.jsx)(d.TabBar.Item, {
                                "aria-label": P.default.Messages.FRIENDS_SECTION_ADD_FRIEND,
                                className: l(D.item, D.addFriend),
                                id: v.FriendsSections.ADD_FRIEND,
                                children: (0, a.jsx)("span", {
                                    children: P.default.Messages.FRIENDS_SECTION_ADD_FRIEND
                                })
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: D.tabBody,
                        children: [(0, a.jsx)(d.TabBar.Panel, {
                            id: x,
                            className: D.peopleColumn,
                            "aria-labelledby": j,
                            children: x === v.FriendsSections.ADD_FRIEND ? (0, a.jsx)(O.default, {}) : (0, a.jsx)(L.default, {
                                titleId: j,
                                sectionFilter: x
                            })
                        }), (0, a.jsx)("div", {
                            className: D.nowPlayingColumn,
                            children: (0, a.jsx)(T.default, {})
                        })]
                    })]
                })
            }