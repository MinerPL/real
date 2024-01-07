            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("174727"),
                i = s("888400"),
                r = s("782340"),
                o = function(e) {
                    let {
                        className: t,
                        cooldown: s
                    } = e, o = (0, l.default)(s);
                    return (0, a.jsx)(n.Text, {
                        className: t,
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: (0, i.unitsAsStrings)(o, {
                            days: r.default.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_DAYS,
                            hours: r.default.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_HOURS,
                            minutes: r.default.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_MINUTES
                        })
                    })
                }