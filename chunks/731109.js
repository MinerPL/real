            "use strict";
            a.r(t), a.d(t, {
                submitDateOfBirth: function() {
                    return u
                },
                preventUnderageRegistration: function() {
                    return c
                },
                logoutUnderageNewUser: function() {
                    return d
                }
            });
            var n = a("872717"),
                l = a("913144"),
                r = a("395724"),
                o = a("599110"),
                s = a("586391"),
                i = a("49111");

            function u(e, t) {
                return (0, r.default)(e, t), o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                    source: t,
                    action: s.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), n.default.patch({
                    url: i.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then(e => {
                    let a = e.body;
                    l.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: a
                    }), o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                        source: t,
                        action: s.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                })
            }

            function c(e) {
                l.default.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                }), o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: s.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function d(e) {
                l.default.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                }), o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: s.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }