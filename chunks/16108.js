            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return o
                },
                clearMessageRequestState: function() {
                    return u
                },
                markAsMessageRequest: function() {
                    return d
                },
                rejectMessageRequest: function() {
                    return c
                },
                rejectMessageRequestBatch: function() {
                    return f
                },
                fetchUserCountryCode: function() {
                    return h
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("437822"),
                r = n("773163"),
                s = n("49111");
            async function o(e) {
                await i.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), l.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function u(e) {
                return i.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return i.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function c(e) {
                return i.default.delete({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function f(e) {
                return i.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function h() {
                a.default.getLocationMetadata()
            }