            "use strict";
            n.r(t), n.d(t, {
                BadgeSizes: function() {
                    return a
                },
                default: function() {
                    return C
                }
            }), n("424973");
            var a, l, s = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                u = n("77078"),
                o = n("572544"),
                c = n("244201"),
                d = n("298878"),
                f = n("643121"),
                T = n("217513"),
                E = n("590456"),
                A = n("49111"),
                _ = n("782340"),
                S = n("730684"),
                m = n("696246");

            function C(e) {
                let {
                    user: t,
                    guildId: n,
                    className: a,
                    shrinkAtCount: l,
                    shrinkToSize: i,
                    isTryItOutFlow: C,
                    size: N = 0
                } = e, g = (0, T.default)(t.id, n), v = (0, f.default)(g).map(e => ({
                    ...e,
                    src: (0, E.getBadgeAsset)(e.icon)
                })), p = (0, c.useWindowDispatch)();
                if (t.isClyde()) return (0, s.jsx)("div", {
                    className: r(a, S.container, S.clydeBadgeList),
                    "aria-label": _.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: (0, s.jsx)(d.default, {})
                });
                C && null == v.find(e => "premium" === e.id) && v.push({
                    id: "premium",
                    icon: m,
                    src: m,
                    description: _.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                        date: new Date
                    })
                });
                let I = null != l && null != i && v.length > l ? i : N;
                return (0, s.jsx)("div", {
                    className: r(a, v.length > 0 ? S.containerWithContent : S.container),
                    "aria-label": _.default.Messages.PROFILE_USER_BADGES,
                    role: "group",
                    children: v.map(e => (0, s.jsx)(u.Tooltip, {
                        position: "top",
                        text: e.description,
                        spacing: 12,
                        children: t => (0, s.jsx)(u.Anchor, {
                            ...t,
                            onClick: n => {
                                var a;
                                null === (a = t.onClick) || void 0 === a || a.call(t);
                                let l = null != e.link ? (0, o.default)(e.link) : null;
                                if (null != l) return p.dispatch(A.ComponentActions.POPOUT_CLOSE), l(n)
                            },
                            href: e.link,
                            children: (0, s.jsx)("img", {
                                alt: " ",
                                "aria-hidden": !0,
                                src: e.src,
                                className: r({
                                    [S.profileBadge24]: 0 === I,
                                    [S.profileBadge22]: 1 === I,
                                    [S.profileBadge18]: 2 === I
                                })
                            })
                        })
                    }, e.id))
                })
            }(l = a || (a = {}))[l.SIZE_24 = 0] = "SIZE_24", l[l.SIZE_22 = 1] = "SIZE_22", l[l.SIZE_18 = 2] = "SIZE_18"