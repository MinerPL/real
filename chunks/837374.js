            "use strict";
            var i, a;

            function l(e) {
                let {
                    sessionId: t,
                    userId: n,
                    applicationId: i,
                    channelId: a,
                    streamKey: l
                } = e;
                return {
                    session_id: t,
                    user_id: n,
                    application_id: i,
                    channel_id: a,
                    stream_key: l
                }
            }

            function s(e, t, n) {
                let {
                    session_id: i,
                    application_id: a,
                    channel_id: l,
                    stream_key: s
                } = e;
                return {
                    sessionId: i,
                    userId: t,
                    applicationId: a,
                    channelId: l,
                    streamKey: s,
                    source: n
                }
            }
            n.r(t), n.d(t, {
                BroadcastSourceType: function() {
                    return i
                },
                broadcastToServer: function() {
                    return l
                },
                broadcastFromServer: function() {
                    return s
                }
            }), (a = i || (i = {}))[a.GLOBAL = 0] = "GLOBAL", a[a.GUILD = 1] = "GUILD"