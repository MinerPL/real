            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("943722"),
                i = n("158998"),
                l = n("848179"),
                r = function(e) {
                    let {
                        hovered: t,
                        activities: n,
                        applicationStream: r,
                        status: o,
                        user: u
                    } = e;
                    return n.length > 0 ? (0, a.jsx)(s.default, {
                        className: l.activity,
                        textClassName: l.text,
                        emojiClassName: l.customStatusEmoji,
                        activities: n,
                        applicationStream: r,
                        animate: t,
                        user: u
                    }) : (0, a.jsx)("div", {
                        className: l.text,
                        children: (0, i.humanizeStatus)(o)
                    })
                }