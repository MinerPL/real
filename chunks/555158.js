            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return a
                },
                default: function() {
                    return p
                }
            });
            var u, a, s = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                l = n("77078"),
                c = n("36694"),
                d = n("381546"),
                o = n("68238"),
                f = n("423487"),
                h = n("557296");
            (u = a || (a = {}))[u.WARNING = 0] = "WARNING", u[u.INFO = 1] = "INFO", u[u.ERROR = 2] = "ERROR", u[u.POSITIVE = 3] = "POSITIVE";
            var p = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: u,
                    textColor: a = "text-normal",
                    textVariant: r = "text-sm/medium"
                } = e, p = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return o.default;
                        case 2:
                            return d.default;
                        case 3:
                            return c.default
                    }
                }(n), M = function(e) {
                    switch (e) {
                        case 0:
                            return h.warning;
                        case 1:
                            return h.info;
                        case 2:
                            return h.error;
                        case 3:
                            return h.positive
                    }
                }(n);
                return (0, s.jsxs)("div", {
                    className: i(h.container, M, u),
                    children: [(0, s.jsx)("div", {
                        className: h.iconDiv,
                        children: (0, s.jsx)(p, {
                            className: h.icon
                        })
                    }), (0, s.jsx)(l.Text, {
                        className: h.text,
                        color: a,
                        variant: r,
                        children: t
                    })]
                })
            }