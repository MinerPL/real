            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var u = s("90915"),
                n = s("73749"),
                o = s("563555"),
                c = s("33942"),
                r = s("941281"),
                h = s("49111");

            function i() {
                return (0, a.jsxs)(u.Switch, {
                    children: [(0, a.jsx)(n.default, {
                        path: h.Routes.OAUTH2_AUTHORIZED,
                        component: r.OAuth2AuthorizedPage
                    }), (0, a.jsx)(n.default, {
                        path: h.Routes.OAUTH2_AUTHORIZE,
                        component: c.OAuth2AuthorizePage
                    }), (0, a.jsx)(n.default, {
                        path: h.Routes.OAUTH2_ERROR,
                        component: r.OAuth2ErrorPage
                    }), (0, a.jsx)(n.default, {
                        path: [h.Routes.OAUTH2_WHITELIST_ACCEPT, "/oauth2/whitelist/accept"],
                        component: o.default
                    })]
                })
            }