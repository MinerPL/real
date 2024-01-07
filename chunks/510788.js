            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("605250"),
                s = l("871388"),
                i = l("295999"),
                r = l("49111"),
                o = l("782340");

            function u(e) {
                let {
                    activity: t,
                    user: l,
                    look: u,
                    color: d
                } = e;
                return (0, s.default)(t, r.ActivityFlags.INSTANCE) ? (0, n.jsx)(i.default, {
                    look: u,
                    color: d,
                    onClick: function() {
                        new(0, a.default)("UserActivityActions").log("notify", l.id, t)
                    },
                    fullWidth: !0,
                    children: o.default.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME
                }, "notify") : null
            }