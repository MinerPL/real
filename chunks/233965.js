            "use strict";
            n.r(t), n.d(t, {
                updateHangStatus: function() {
                    return o
                },
                updateCustomHangStatus: function() {
                    return d
                },
                clearHangStatus: function() {
                    return c
                }
            });
            var a = n("913144"),
                s = n("42203"),
                r = n("945956"),
                i = n("18494"),
                l = n("599110"),
                u = n("49111");

            function o(e, t) {
                var n;
                if (null == e) {
                    c(t);
                    return
                }
                a.default.dispatch({
                    type: "UPDATE_HANG_STATUS",
                    status: e,
                    saveAsDefault: t
                }), l.default.track(u.AnalyticEvents.SET_HANG_STATUS, {
                    status_type: e,
                    channel_id: i.default.getVoiceChannelId(),
                    guild_id: null === (n = s.default.getChannel(i.default.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
                    media_session_id: r.default.getMediaSessionId()
                })
            }

            function d(e, t, n) {
                var o;
                if ("" === e) {
                    c(n);
                    return
                }
                a.default.dispatch({
                    type: "UPDATE_HANG_STATUS_CUSTOM",
                    emoji: t,
                    status: e,
                    saveAsDefault: n
                }), l.default.track(u.AnalyticEvents.SET_HANG_STATUS, {
                    status_type: e,
                    channel_id: i.default.getVoiceChannelId(),
                    guild_id: null === (o = s.default.getChannel(i.default.getVoiceChannelId())) || void 0 === o ? void 0 : o.guild_id,
                    media_session_id: r.default.getMediaSessionId()
                })
            }

            function c(e) {
                var t;
                a.default.dispatch({
                    type: "CLEAR_HANG_STATUS",
                    saveAsDefault: e
                }), l.default.track(u.AnalyticEvents.CLEAR_HANG_STATUS, {
                    channel_id: i.default.getVoiceChannelId(),
                    guild_id: null === (t = s.default.getChannel(i.default.getVoiceChannelId())) || void 0 === t ? void 0 : t.guild_id,
                    media_session_id: r.default.getMediaSessionId()
                })
            }