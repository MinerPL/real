            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("446674"),
                u = s("77078"),
                o = s("106435"),
                d = s("446488"),
                c = s("52904"),
                _ = s("782340"),
                E = s("659972");

            function I(e) {
                let {
                    smallerText: t
                } = e, s = (0, i.useStateFromStores)([d.default], () => d.default.affinities.slice(0, 3).reverse()), r = s.map((e, t) => (0, a.jsx)(T, {
                    affinity: e,
                    applyMask: t !== s.length - 1
                }, e.id)), l = e => null != e.globalName ? e.globalName : e.username, o = n.useMemo(() => 3 === s.length ? _.default.Messages.AFFINITIES_MARKETING_HEADER_3.format({
                    username: l(s[2])
                }) : 2 === s.length ? _.default.Messages.AFFINITIES_MARKETING_HEADER_2.format({
                    username: l(s[1]),
                    otherUsername: l(s[0])
                }) : 1 === s.length ? _.default.Messages.AFFINITIES_MARKETING_HEADER_1.format({
                    username: l(s[0])
                }) : "", [s]);
                return 0 === s.length ? null : (0, a.jsxs)("div", {
                    className: E.container,
                    children: [(0, a.jsx)("div", {
                        className: E.iconContainer,
                        children: r
                    }), (0, a.jsx)("div", {
                        className: E.textContainer,
                        children: (0, a.jsx)(function() {
                            return t ? (0, a.jsx)(u.Text, {
                                variant: "text-lg/medium",
                                color: "always-white",
                                children: o
                            }) : (0, a.jsx)(u.Heading, {
                                variant: "heading-xl/medium",
                                color: "always-white",
                                children: o
                            })
                        }, {})
                    })]
                })
            }

            function T(e) {
                let {
                    affinity: t,
                    applyMask: s
                } = e, {
                    avatarSrc: n,
                    eventHandlers: r
                } = (0, o.default)({
                    user: t,
                    size: c.AvatarSizes.SIZE_32,
                    animateOnHover: !0
                });
                return (0, a.jsx)(u.Avatar, {
                    className: l(E.icon, {
                        [E.mask]: s
                    }),
                    src: n,
                    "aria-label": t.username,
                    size: c.AvatarSizes.SIZE_32,
                    ...r
                })
            }