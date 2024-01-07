            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("974667"),
                i = n("446674"),
                l = n("266491"),
                r = n("77078"),
                o = n("206230"),
                u = n("49111"),
                d = n("112082"),
                c = function(e) {
                    let {
                        statusSections: t,
                        renderRow: n,
                        searchQuery: c,
                        sectionFilter: E,
                        useReducedMotion: f
                    } = e, _ = (0, i.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), h = (0, s.default)({
                        id: "people",
                        isEnabled: _,
                        async scrollToStart() {},
                        async scrollToEnd() {}
                    }), C = E !== u.FriendsSections.ONLINE && E !== u.FriendsSections.ALL, T = f || "" !== c || C, I = t.map((e, t) => T ? (0, a.jsx)("div", {
                        children: e.map(n)
                    }, t) : (0, a.jsx)(l.default, {
                        transitionAppear: !1,
                        component: "div",
                        children: e.map(n)
                    }, t));
                    return (0, a.jsx)(s.ListNavigatorProvider, {
                        navigator: h,
                        children: (0, a.jsx)(s.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    ...n
                                } = e;
                                return (0, a.jsx)(r.ScrollerAuto, {
                                    ref: t,
                                    className: d.peopleList,
                                    ...n,
                                    children: I
                                })
                            }
                        })
                    })
                }