            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("519794"),
                s = n("393900"),
                i = n("981913"),
                r = n("782340");

            function o(e) {
                let {
                    popoutWindowAlwaysOnTop: t,
                    onToggleStayOnTop: n,
                    ...o
                } = e, u = t ? r.default.Messages.POPOUT_REMOVE_FROM_TOP : r.default.Messages.POPOUT_STAY_ON_TOP, d = t ? s.default : l.default;
                return (0, a.jsx)(i.default, {
                    onClick: () => n(!t),
                    label: u,
                    iconComponent: d,
                    ...o
                })
            }