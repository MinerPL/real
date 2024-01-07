            "use strict";
            n.r(t), n.d(t, {
                showPremiumChannelIconButton: function() {
                    return d
                },
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("20606"),
                r = n("915675"),
                o = n("216997"),
                u = n("708995");

            function d(e) {
                return e
            }

            function c(e) {
                let {
                    locked: t
                } = e;
                return (0, l.jsx)("div", {
                    className: s(u.iconItem, o.premiumChannelIcon),
                    children: (0, l.jsx)(r.default, {
                        className: u.actionIcon,
                        color: t ? i.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON : void 0
                    })
                })
            }