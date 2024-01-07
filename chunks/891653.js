            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("77078"),
                a = n("216422"),
                o = n("782340"),
                u = n("881609");

            function c(e) {
                let {
                    text: t = o.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, l.jsx)(s.Tooltip, {
                    text: t,
                    children: e => (0, l.jsx)(s.Clickable, {
                        ...e,
                        children: (0, l.jsx)(a.default, {
                            className: r(u.nitroWheel, n)
                        })
                    })
                })
            }