            "use strict";
            n.r(t), n.d(t, {
                recordChannelVisit: function() {
                    return s
                },
                recordBannerRender: function() {
                    return l
                }
            });
            var a = n("913144");

            function s(e, t) {
                a.default.dispatch({
                    guildId: e,
                    channelId: t,
                    type: "UNREAD_SETTING_NOTICE_CHANNEL_VISIT"
                })
            }

            function l(e, t) {
                a.default.dispatch({
                    guildId: e,
                    channelId: t,
                    type: "UNREAD_SETTING_NOTICE_RENDERED"
                })
            }