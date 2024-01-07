            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return o
                }
            });
            var l = i("37983");
            i("884691");
            var r = i("77078"),
                n = i("987772"),
                a = i("782340"),
                s = i("833837");

            function o() {
                return (0, l.jsx)(r.Tooltip, {
                    text: a.default.Messages.CLYDE_PERSONALITY_BADGE_TOOLTIP,
                    tooltipClassName: s.tooltip,
                    children: t => (0, l.jsx)("div", {
                        className: s.personalityBadge,
                        ...t,
                        children: (0, l.jsx)(n.default, {
                            width: 12,
                            height: 12
                        })
                    })
                })
            }