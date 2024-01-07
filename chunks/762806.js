            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("854937"),
                s = l("871388"),
                i = l("429928"),
                r = l("49111"),
                o = l("808480");

            function u(e) {
                let {
                    activity: t,
                    user: l,
                    color: u,
                    look: d,
                    guildId: c,
                    channelId: f,
                    source: m
                } = e;
                if (null == t || !(0, s.default)(t, r.ActivityFlags.SYNC)) return null;
                let p = {
                    key: "sync",
                    className: o.button,
                    size: o.buttonSize,
                    color: u,
                    look: d,
                    user: l,
                    activity: t
                };
                return (0, i.default)(t) ? (0, n.jsx)(a.default, {
                    guildId: null != c ? c : void 0,
                    channelId: f,
                    source: m,
                    ...p
                }) : null
            }