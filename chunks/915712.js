            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("463848"),
                s = l("777003"),
                i = l("49111"),
                r = l("477691");

            function o(e) {
                let {
                    activity: t,
                    user: l,
                    guild: o,
                    channelId: u,
                    onClose: d
                } = e;
                return (0, n.jsx)(s.default, {
                    children: (0, n.jsx)(a.default, {
                        type: a.UserActivityTypes.USER_POPOUT_V2,
                        activity: t,
                        className: r.activity,
                        user: l,
                        guildId: null == o ? void 0 : o.id,
                        channelId: u,
                        source: i.AnalyticsLocations.PROFILE_POPOUT,
                        onOpenGameProfile: d,
                        onAction: d,
                        actionColor: r.buttonColor
                    })
                })
            }