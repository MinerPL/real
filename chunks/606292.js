            "use strict";
            n.r(t), n.d(t, {
                getDecorationSizeForAvatarSize: function() {
                    return u
                },
                openAvatarDecorationModal: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("393414");
            n("103603");
            var o = n("573135"),
                a = n("49111");

            function u(e) {
                return "number" != typeof e ? (0, r.getAvatarSize)(e) * o.DECORATION_TO_AVATAR_RATIO : e * o.DECORATION_TO_AVATAR_RATIO
            }
            let s = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: o,
                    isTryItOutFlow: u
                } = e;
                (0, r.openModalLazy)(async () => {
                    (0, l.getHistory)().location.pathname === a.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, l.transitionTo)(a.Routes.APP);
                    let {
                        default: e
                    } = await n.el("791050").then(n.bind(n, "791050"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        analyticsLocations: t,
                        initialSelectedDecoration: o,
                        isTryItOutFlow: u
                    })
                }, {})
            }