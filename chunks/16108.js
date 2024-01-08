            "use strict";
            i.r(t), i.d(t, {
                acceptMessageRequest: function() {
                    return u
                },
                clearMessageRequestState: function() {
                    return l
                },
                markAsMessageRequest: function() {
                    return c
                },
                rejectMessageRequest: function() {
                    return S
                },
                rejectMessageRequestBatch: function() {
                    return o
                },
                fetchUserCountryCode: function() {
                    return E
                }
            });
            var n = i("872717"),
                s = i("913144"),
                a = i("437822"),
                d = i("773163"),
                r = i("49111");
            async function u(e) {
                await n.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: d.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), s.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function l(e) {
                return n.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: d.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function c(e) {
                return n.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: d.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function S(e) {
                return n.default.delete({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function o(e) {
                return n.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                a.default.getLocationMetadata()
            }