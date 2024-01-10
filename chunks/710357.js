            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("206230"),
                r = n("843962"),
                o = n("679653"),
                u = n("106435"),
                d = n("172554");

            function c(e) {
                var t;
                let {
                    channel: n,
                    children: c,
                    user: f
                } = e, h = (0, s.useStateFromStores)([i.default], () => i.default.useReducedMotion), C = null !== (t = (0, o.default)(n)) && void 0 !== t ? t : "", {
                    avatarDecorationSrc: p,
                    eventHandlers: m,
                    isAnimating: E
                } = (0, u.default)({
                    user: f,
                    size: l.AvatarSizes.SIZE_80,
                    animateOnHover: !0
                });
                return (0, a.jsxs)(d.default, {
                    channelId: n.id,
                    ...m,
                    children: [(0, a.jsx)(l.Avatar, {
                        "aria-label": C,
                        size: l.AvatarSizes.SIZE_80,
                        src: (0, r.getChannelIconURL)(n, 80, !h && E),
                        avatarDecoration: p
                    }), (0, a.jsx)(d.EmptyMessageHeader, {
                        children: C
                    }), (0, a.jsx)(d.EmptyMessageBody, {
                        children: c
                    })]
                })
            }