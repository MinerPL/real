            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("816494"),
                r = n.n(i),
                l = n("446674"),
                a = n("913144"),
                o = n("908539");
            let s = {},
                u = {},
                c = {
                    state: o.AccountStandingState.ALL_GOOD
                },
                d = !1,
                f = !1,
                E = null,
                _ = null,
                p = !1,
                h = null;
            class I extends l.default.Store {
                isFetching() {
                    return d
                }
                getClassifications() {
                    return Object.values(s)
                }
                getClassification(e) {
                    return s[e]
                }
                getAccountStanding() {
                    return c
                }
                getFetchError() {
                    return E
                }
                isInitialized() {
                    return f
                }
                getClassificationRequestState(e) {
                    return u[e]
                }
                getAppealClassificationId() {
                    return _
                }
                getIsDsaEligible() {
                    return p
                }
                getAppealSignal() {
                    return h
                }
            }
            I.displayName = "SafetyHubStore";
            var S = new I(a.default, {
                SAFETY_HUB_FETCH_START: function(e) {
                    d = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(e) {
                    let {
                        classifications: t,
                        accountStanding: n
                    } = e;
                    s = r(t, "id"), c = n, d = !1, f = !0, E = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(e) {
                    let {
                        error: t
                    } = e;
                    d = !1, f = !1, E = t
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_START: function(e) {
                    u[e.classificationId] = o.ClassificationRequestState.PENDING, d = !0
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(e) {
                    let {
                        classification: t,
                        accountStanding: n,
                        isDsaEligible: i
                    } = e;
                    s[t.id] = t, u[t.id] = o.ClassificationRequestState.SUCCESS, c = n, d = !1, E = null, p = i
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(e) {
                    let {
                        error: t,
                        classificationId: n
                    } = e;
                    d = !1, E = t, u[n] = o.ClassificationRequestState.FAILED
                },
                SAFETY_HUB_APPEAL_OPEN: function(e) {
                    let {
                        classificationId: t
                    } = e;
                    _ = t
                },
                SAFETY_HUB_APPEAL_CLOSE: function() {
                    _ = null, h = null
                },
                SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(e) {
                    let {
                        signal: t
                    } = e;
                    h = t
                },
                LOGOUT: function() {
                    d = !1, s = {}, c = {
                        state: o.AccountStandingState.ALL_GOOD
                    }, _ = null, h = null
                }
            })