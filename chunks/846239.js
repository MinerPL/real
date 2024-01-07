            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                n = a.n(l),
                r = a("384785");

            function i(e) {
                let {
                    application: t,
                    splashSize: a,
                    className: l,
                    overrideSplash: i
                } = e, d = null != i ? i : t.getSplashURL(a);
                return (0, s.jsx)("div", {
                    className: n(r.splashBackground, l),
                    style: {
                        backgroundImage: null != d ? "url(".concat(d, ")") : void 0
                    }
                })
            }