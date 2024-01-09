            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("446674"),
                o = n("77078"),
                u = n("106435"),
                d = n("446488"),
                c = n("782340"),
                m = n("760068");

            function f() {
                let e = (0, a.useStateFromStores)([d.default], () => d.default.affinities.slice(0, 3)),
                    t = e[0],
                    {
                        avatarSrc: n,
                        eventHandlers: l
                    } = (0, u.default)({
                        user: t,
                        size: o.AvatarSizes.SIZE_24,
                        animateOnHover: !0
                    }),
                    f = e => null != e.globalName ? e.globalName : e.username,
                    _ = r.useMemo(() => e.length >= 2 ? c.default.Messages.AFFINITIES_MARKETING_HEADER_3.format({
                        username: f(e[0])
                    }) : 1 === e.length ? c.default.Messages.AFFINITIES_MARKETING_HEADER_1.format({
                        username: f(e[0])
                    }) : "", [e]);
                return 0 === e.length ? null : (0, i.jsxs)("div", {
                    className: m.container,
                    children: [(0, i.jsx)(o.Avatar, {
                        className: m.icon,
                        src: n,
                        "aria-label": t.username,
                        size: o.AvatarSizes.SIZE_24,
                        ...l
                    }), (0, i.jsx)(o.Text, {
                        className: s(m.text),
                        variant: "text-sm/normal",
                        color: "always-white",
                        children: _
                    })]
                })
            }