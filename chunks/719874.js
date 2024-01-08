            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("394832"),
                s = n("981913"),
                i = n("782340");

            function r(e) {
                let {
                    hasPermission: t,
                    centerButton: n = !1,
                    ...r
                } = e, o = n ? s.CenterControlButton : s.default, u = t ? i.default.Messages.SHARE_YOUR_SCREEN : i.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE;
                return (0, a.jsx)(o, {
                    label: u,
                    disabled: !t,
                    iconComponent: l.default,
                    ...r
                })
            }