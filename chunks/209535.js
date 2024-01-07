            "use strict";
            a.r(t), a.d(t, {
                getRedirectPath: function() {
                    return u
                },
                default: function() {
                    return l
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("803182"),
                s = a("447669"),
                o = a("49111"),
                i = a("492397");

            function u() {
                let e = location.pathname + location.search,
                    t = i.CONFERENCE_MODE_ENABLED ? o.Routes.REGISTER : (0, s.getLoginPath)(e, !1);
                return t
            }
            var l = function() {
                return (0, n.jsx)(r.Redirect, {
                    to: u()
                })
            }