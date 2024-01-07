            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("300322"),
                s = n("959097"),
                u = n("363396"),
                r = n("782340");

            function d(e, t) {
                let n = (0, l.useCanStartPublicThread)(t, e);
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "thread",
                    label: r.default.Messages.CREATE_THREAD,
                    icon: s.default,
                    action: () => {
                        (0, u.createThread)(t, e)
                    }
                }) : null
            }