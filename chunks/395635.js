            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("298878"),
                i = n("782340");

            function r(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)(a.Tooltip, {
                    text: i.default.Messages.BROADCASTING_BETA_TOOLTIP_TEXT,
                    children: e => (0, l.jsx)(s.default, {
                        ...e,
                        className: t
                    })
                })
            }