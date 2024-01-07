            "use strict";
            var i, r, s, a;
            n.r(t), n.d(t, {
                AGE_GATE_REGISTER_TIMEOUT_MS: function() {
                    return o
                },
                NEW_USER_AGE_GATE_MODAL_KEY: function() {
                    return l
                },
                EXISTING_USER_AGE_GATE_MODAL_KEY: function() {
                    return u
                },
                AgeGateSource: function() {
                    return i
                },
                AgeGateAnalyticAction: function() {
                    return r
                }
            });
            let o = 72e5,
                l = "new-user-age-gate-modal",
                u = "existing-user-age-gate-modal";
            (s = i || (i = {})).AUTH = "Register Age Gate", s.NEW_USER_FLOW = "NUF", s.CLAIM_ACCOUNT = "Claim Age Gate", s.NSFW_CHANNEL = "NSFW Channel", s.NSFW_SERVER = "NSFW Server", s.NSFW_SERVER_INVITE = "NSFW Server Invite", s.NSFW_VOICE_CHANNEL = "NSFW Voice Channel", s.FAMILY_CENTER = "Family Center", s.REGISTER = "Register", s.DEEP_LINK_PROMPT = "Deep Link Prompt", s.UNSPECIFIED = "Unspecified", (a = r || (r = {})).AGE_GATE_OPEN = "AGE_GATE_OPEN", a.AGE_GATE_CLOSE = "AGE_GATE_CLOSE", a.AGE_GATE_SUBMITTED = "AGE_GATE_SUBMITTED", a.AGE_GATE_SUCCESS = "AGE_GATE_SUCCESS", a.AGE_GATE_FAILURE = "AGE_GATE_FAILURE", a.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE", a.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION = "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION", a.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER = "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"