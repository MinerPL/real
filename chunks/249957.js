            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("65597"),
                r = n("77078"),
                u = n("26989"),
                o = n("697218"),
                d = n("703433"),
                c = n("21363"),
                f = n("608973"),
                h = n("132881"),
                p = n("63893");

            function m(e) {
                let {} = e;
                return (0, a.jsxs)("div", {
                    className: s(p.header),
                    children: [(0, a.jsx)("div", {
                        className: s(p.headerTitle),
                        children: (0, a.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: "Mod View"
                        })
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsx)(r.KeyCombo, {
                            shortcut: "esc",
                            keyClassName: p.keyComboInner,
                            className: p.keyComboContainer
                        })
                    })]
                })
            }

            function E(e) {
                let {
                    userId: t,
                    guildId: n,
                    location: l,
                    className: r,
                    onNavigate: E
                } = e, C = (0, i.default)([o.default], () => o.default.getUser(t), [t]), g = (0, i.default)([u.default], () => u.default.getMember(n, t), [n, t]);
                return null == C || null == g ? null : (0, a.jsxs)("div", {
                    className: s(p.container, r),
                    children: [(0, a.jsx)(m, {}), (0, a.jsxs)("div", {
                        className: s(p.innerContainer),
                        children: [(0, a.jsx)(f.default, {
                            member: g
                        }), (0, a.jsx)(h.default, {
                            userId: t,
                            guildId: n,
                            onNavigate: E
                        }), (0, a.jsx)(c.default, {
                            member: g
                        }), (0, a.jsx)(d.default, {
                            member: g
                        })]
                    })]
                })
            }