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
                d = null;
            class r extends s.default.Store {
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
                    return d
                }
            }
            r.displayName = "ConsentStore";
            var u = new r(o.default, {
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
                    d = e.consentRequired
                },
                LOGOUT: function() {
                    d = null
                }
            })