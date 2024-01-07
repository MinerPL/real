            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("70102");
            var r = n("37983");
            n("884691");
            var i = n("784917"),
                l = n("326880"),
                s = n("131777"),
                a = n("49111");

            function o(e) {
                let {
                    tier: t,
                    ...n
                } = e;
                switch (t) {
                    case a.BoostedGuildTiers.NONE:
                    case a.BoostedGuildTiers.TIER_1:
                        return (0, r.jsx)(i.default, {
                            ...n
                        });
                    case a.BoostedGuildTiers.TIER_2:
                        return (0, r.jsx)(l.default, {
                            ...n
                        });
                    case a.BoostedGuildTiers.TIER_3:
                        return (0, r.jsx)(s.default, {
                            ...n
                        });
                    default:
                        throw Error("Not a valid tier type")
                }
            }