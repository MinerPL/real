            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("974667"),
                r = n("446674"),
                o = n("77078"),
                u = n("145079"),
                d = n("87657"),
                c = n("824563"),
                f = n("145131"),
                h = n("158998"),
                p = n("539058");

            function m(e) {
                let {
                    user: t,
                    row: n,
                    hideDiscriminator: l,
                    comparator: m,
                    selected: E,
                    checked: C,
                    onClick: g,
                    onMouseEnter: S,
                    "aria-setsize": _,
                    "aria-posinset": I
                } = e, T = (0, r.useStateFromStores)([c.default], () => c.default.getStatus(t.id)), v = (0, i.useListItem)(String(t.id));
                return (0, a.jsx)(o.Clickable, {
                    id: "user-row-".concat(n),
                    className: p.friendWrapper,
                    onClick: () => {
                        null != g && g(t.id)
                    },
                    onMouseEnter: () => {
                        null != S && S(n)
                    },
                    ...v,
                    role: "option",
                    "aria-selected": C,
                    "aria-setsize": _,
                    "aria-posinset": I,
                    children: (0, a.jsxs)(f.default, {
                        align: f.default.Align.CENTER,
                        className: s(p.friend, {
                            [p.friendSelected]: E
                        }),
                        children: [(0, a.jsx)(d.default, {
                            user: t,
                            status: T,
                            className: p.avatar
                        }), (0, a.jsxs)(f.default, {
                            className: p.match,
                            align: f.default.Align.BASELINE,
                            children: [(0, a.jsx)(o.Text, {
                                tag: "strong",
                                className: p.nickname,
                                "aria-hidden": !0,
                                variant: "text-md/medium",
                                children: null != m && m === t.tag ? h.default.getName(t) : null != m && "" !== m ? m : h.default.getName(t)
                            }), (0, a.jsx)(u.default, {
                                user: t,
                                hideDiscriminator: l,
                                className: p.discordTag,
                                usernameClass: p.weightMedium,
                                discriminatorClass: p.weightMedium,
                                forceUsername: !0
                            })]
                        }), (0, a.jsx)(o.Checkbox, {
                            displayOnly: !0,
                            size: 22,
                            value: C,
                            className: p.checkbox
                        })]
                    })
                })
            }