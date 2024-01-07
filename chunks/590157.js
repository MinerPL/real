            "use strict";
            a.r(t), a.d(t, {
                makeAuthenticated: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("271938"),
                s = a("831588"),
                o = a("209535"),
                i = a("49111");

            function u(e, t) {
                var a, u;
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    passProps: !0
                };

                function c(a) {
                    if (!(0, s.isAuthenticated)() && r.default.getLoginStatus() !== i.LoginStates.LOGGING_IN && r.default.allowLogoutRedirect()) return null != t ? (0, n.jsx)(t, {
                        renderRedirect: (0, n.jsx)(o.default, {})
                    }) : (0, n.jsx)(o.default, {});
                    return (0, n.jsx)(e, {
                        ...l.passProps ? a : null
                    })
                }
                return c.displayName = "Authenticated(".concat(null !== (u = null !== (a = e.displayName) && void 0 !== a ? a : e.name) && void 0 !== u ? u : "<Unknown>", ")"), c
            }