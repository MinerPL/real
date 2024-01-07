            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("917351"),
                n = s.n(a),
                l = s("171718"),
                i = s("446674"),
                r = s("913144");
            let o = !1,
                d = [],
                u = "",
                c = "",
                S = !1,
                E = {
                    viewNonce: "",
                    regenerateNonce: ""
                };
            class f extends i.default.Store {
                getVerificationKey() {
                    return u
                }
                getBackupCodes() {
                    return d
                }
                get togglingSMS() {
                    return o
                }
                getNonces() {
                    return E
                }
                get emailToken() {
                    return c
                }
                get hasSeenBackupPrompt() {
                    return S
                }
            }
            f.displayName = "MFAStore";
            var m = new f(r.default, {
                MFA_ENABLE_SUCCESS: function(e) {
                    let {
                        token: t,
                        codes: s
                    } = e;
                    void 0 !== t && l.default.setToken(t), d = s
                },
                MFA_ENABLE_EMAIL_TOKEN: function(e) {
                    let {
                        token: t
                    } = e;
                    c = t
                },
                MFA_DISABLE_SUCCESS: function(e) {
                    let {
                        token: t
                    } = e;
                    l.default.setToken(t)
                },
                MFA_SMS_TOGGLE: function() {
                    o = !0
                },
                MFA_SMS_TOGGLE_COMPLETE: function() {
                    o = !1
                },
                MFA_CLEAR_BACKUP_CODES: function() {
                    d = []
                },
                MFA_VIEW_BACKUP_CODES: function(e) {
                    let {
                        codes: t,
                        key: s
                    } = e;
                    d = n.sortBy(t, "code"), u = s
                },
                MFA_SEND_VERIFICATION_KEY: function(e) {
                    let {
                        nonces: t
                    } = e;
                    E = t
                },
                MFA_SEEN_BACKUP_CODE_PROMPT: function() {
                    S = !0
                }
            })