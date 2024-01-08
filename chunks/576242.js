            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("550766"),
                r = n("893011"),
                i = n("981913"),
                l = n("782340");

            function u(e) {
                let {
                    channelId: t,
                    applicationId: n,
                    centerButton: u = !1,
                    ...o
                } = e, d = u ? i.CenterControlButton : i.default;
                return (0, a.jsx)(d, {
                    ...o,
                    onClick: () => {
                        (0, s.stopEmbeddedActivity)({
                            channelId: t,
                            applicationId: n
                        })
                    },
                    iconComponent: r.default,
                    label: l.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
                })
            }