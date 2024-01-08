            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("561288"),
                s = n("945330"),
                i = n("981913"),
                r = n("782340");

            function u(e) {
                let {
                    channel: t,
                    ...n
                } = e;
                return (0, a.jsx)(i.CenterControlButton, {
                    ...n,
                    iconComponent: s.default,
                    label: r.default.Messages.DISMISS,
                    onClick: () => l.default.stopRinging(t.id)
                })
            }