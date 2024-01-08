            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("255397"),
                s = n("407691"),
                i = n("981913"),
                r = n("782340");

            function u(e) {
                let {
                    channelId: t,
                    ...n
                } = e;
                return (0, a.jsx)(i.default, {
                    onClick: function() {
                        l.default.selectParticipant(t, null)
                    },
                    label: r.default.Messages.VIDEO_CALL_RETURN_TO_GRID,
                    iconComponent: s.default,
                    tooltipPosition: "bottom",
                    ...n
                })
            }