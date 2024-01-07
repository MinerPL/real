            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return r
                },
                clearMessageRequestState: function() {
                    return d
                },
                markAsMessageRequest: function() {
                    return o
                },
                rejectMessageRequest: function() {
                    return f
                },
                rejectMessageRequestBatch: function() {
                    return c
                },
                fetchUserCountryCode: function() {
                    return E
                }
            });
            var a = n("872717"),
                u = n("913144"),
                i = n("437822"),
                l = n("773163"),
                s = n("49111");
            async function r(e) {
                await a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), u.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function d(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function o(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function f(e) {
                return a.default.delete({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function c(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                i.default.getLocationMetadata()
            }