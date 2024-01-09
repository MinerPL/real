            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return u
                },
                default: function() {
                    return _
                }
            });
            var l, u, a = n("37983");
            n("884691");
            var d = n("414456"),
                i = n.n(d),
                r = n("77078"),
                s = n("36694"),
                o = n("381546"),
                c = n("68238"),
                E = n("423487"),
                f = n("557296");
            (l = u || (u = {}))[l.WARNING = 0] = "WARNING", l[l.INFO = 1] = "INFO", l[l.ERROR = 2] = "ERROR", l[l.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: l,
                    textColor: u = "text-normal",
                    textVariant: d = "text-sm/medium"
                } = e, _ = function(e) {
                    switch (e) {
                        case 0:
                            return E.default;
                        case 1:
                            return c.default;
                        case 2:
                            return o.default;
                        case 3:
                            return s.default
                    }
                }(n), S = function(e) {
                    switch (e) {
                        case 0:
                            return f.warning;
                        case 1:
                            return f.info;
                        case 2:
                            return f.error;
                        case 3:
                            return f.positive
                    }
                }(n);
                return (0, a.jsxs)("div", {
                    className: i(f.container, S, l),
                    children: [(0, a.jsx)("div", {
                        className: f.iconDiv,
                        children: (0, a.jsx)(_, {
                            className: f.icon
                        })
                    }), (0, a.jsx)(r.Text, {
                        className: f.text,
                        color: u,
                        variant: d,
                        children: t
                    })]
                })
            }