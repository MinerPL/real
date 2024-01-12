            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("446674"),
                o = n("913144");
            let l = !1,
                a = !1,
                i = {},
                r = null;
            class d extends s.default.Store {
                hasConsented(e) {
                    return null != i[e] && i[e].consented
                }
                get fetchedConsents() {
                    return l
                }
                get receivedConsentsInConnectionOpen() {
                    return a
                }
                getAuthenticationConsentRequired() {
                    return r
                }
            }
            d.displayName = "ConsentStore";
            var u = new d(o.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        consents: t
                    } = e;
                    null != t && (i = {
                        ...i,
                        ...t
                    }, a = !0)
                },
                UPDATE_CONSENTS: function(e) {
                    let {
                        consents: t
                    } = e;
                    i = {
                        ...t
                    }, l = !0
                },
                SET_CONSENT_REQUIRED: function(e) {
                    r = e.consentRequired
                },
                LOGOUT: function() {
                    r = null
                }
            })