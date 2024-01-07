            "use strict";
            n.r(t), n.d(t, {
                reportFalsePositive: function() {
                    return l
                },
                sendMessagesForScanning: function() {
                    return s
                },
                sendMultiChannelMessagesForScanning: function() {
                    return r
                }
            });
            var i = n("872717"),
                a = n("49111");

            function l(e, t, n, l) {
                return i.default.post({
                    url: a.Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
                    body: {
                        channel_id: e,
                        message_id: t,
                        attachment_ids: n,
                        embed_ids: l
                    }
                })
            }

            function s(e, t) {
                return i.default.patch({
                    url: a.Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
                    body: {
                        message_ids: t
                    }
                })
            }

            function r(e) {
                let t = e.map(e => ({
                    channel_id: e.channel_id,
                    message_id: e.id
                }));
                return i.default.patch({
                    url: a.Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
                    body: {
                        messages: t
                    }
                })
            }