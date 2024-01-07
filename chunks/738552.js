            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("393414"),
                s = n("922577"),
                i = n("708402"),
                r = n("49111"),
                o = n("724210"),
                u = n("782340");

            function d(e) {
                let {
                    guild: t,
                    selected: n
                } = e;
                return (0, l.jsx)(i.default, {
                    renderIcon: e => (0, l.jsx)(s.default, {
                        className: e,
                        width: 24,
                        height: 24
                    }),
                    text: u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
                    selected: n,
                    onClick: () => {
                        (0, a.transitionTo)(r.Routes.CHANNEL(t.id, o.StaticChannelRoute.MEMBER_APPLICATIONS))
                    }
                })
            }