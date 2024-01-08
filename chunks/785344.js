            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("14124"),
                i = n("849467"),
                r = n("97347"),
                u = n("981913"),
                o = n("870320");

            function d(e) {
                let {
                    className: t
                } = e, n = (0, l.useRedesignIconContext)().enabled;
                return (0, a.jsx)(r.default, {
                    foreground: n ? void 0 : o.slash,
                    className: t
                })
            }

            function c(e) {
                let {
                    selfMute: t,
                    serverMute: n,
                    suppress: l,
                    centerButton: r = !1,
                    awaitingRemote: o,
                    ...c
                } = e, f = t || n || l, h = r ? u.CenterControlButton : u.default, p = (0, s.default)(t, n, l, o), m = f ? d : i.default;
                return (0, a.jsx)(h, {
                    isActive: !f,
                    iconComponent: m,
                    label: p,
                    ...c
                })
            }