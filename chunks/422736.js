            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("255397"),
                s = n("229997"),
                i = n("763984"),
                r = n("981913"),
                u = n("99795"),
                o = n("782340");

            function d(e) {
                let {
                    channelId: t,
                    isHorizontal: n,
                    ...d
                } = e;
                return (0, a.jsx)(r.default, {
                    onClick: function() {
                        l.default.selectParticipant(t, u.ParticipantSelectionTypes.AUTO)
                    },
                    label: o.default.Messages.VIDEO_CALL_AUTO_SELECT,
                    iconComponent: n ? s.default : i.default,
                    tooltipPosition: "bottom",
                    ...d
                })
            }