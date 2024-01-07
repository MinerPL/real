            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("49111"),
                a = n("782340");

            function s(e) {
                let {
                    channel: t,
                    embeddedApps: n
                } = e;
                if (t.type === l.ChannelTypes.GUILD_VOICE) {
                    if (null == n || !(n.length > 0)) return;
                    {
                        let e = n.map(e => e.application.name);
                        return a.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_DESCRIBED_BY_LABEL_ACTIVITIES.format({
                            activeActivities: e.join(", ")
                        })
                    }
                }
            }