            "use strict";
            let i, a, l;
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007"), n("860677");
            var s = n("446674"),
                r = n("913144"),
                u = n("737292"),
                o = n("845579"),
                d = n("374363"),
                c = n("686470");
            let _ = {
                    applicationId: null,
                    originURL: null
                },
                E = _,
                f = new Set,
                h = !1;

            function p() {
                l = null
            }

            function T() {
                i = null, a = null, f = new Set, E.applicationId = null, E.originURL = null, p()
            }
            class C extends s.default.PersistedStore {
                initialize(e) {
                    i = (E = {
                        ...null != e ? e : _
                    }).applicationId, a = E.originURL, this.waitFor(d.default, u.default), this.syncWith([d.default, u.default], () => !0), c.default.whenInitialized(() => {
                        h = !0
                    })
                }
                inTestModeForApplication(e) {
                    return i === e
                }
                inTestModeForEmbeddedApplication(e) {
                    return i === e && null != a
                }
                shouldDisplayTestMode(e) {
                    return o.DeveloperMode.getSetting() && this.inTestModeForApplication(e)
                }
                getState() {
                    return E
                }
                get isTestMode() {
                    return null != i
                }
                get isFetchingAuthorization() {
                    return f.size > 0
                }
                get testModeEmbeddedApplicationId() {
                    return null != a ? i : null
                }
                get testModeApplicationId() {
                    return i
                }
                get testModeOriginURL() {
                    return a
                }
                get error() {
                    return l
                }
                whenInitialized(e) {
                    this.addConditionalChangeListener(() => {
                        if (h) return setImmediate(e), !1
                    })
                }
            }
            C.displayName = "TestModeStore", C.persistKey = "TestModeStore";
            var m = new C(r.default, {
                DEVELOPER_TEST_MODE_AUTHORIZATION_START: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    f.add(t), l = null
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function(e) {
                    let {
                        applicationId: t,
                        originURL: n
                    } = e;
                    i = t, a = n, f.delete(t), l = null, E.applicationId = t, E.originURL = n
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function(e) {
                    let {
                        applicationId: t,
                        error: n
                    } = e;
                    f.delete(t), l = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        testModeApplicationId: t
                    } = e;
                    i = t
                },
                DEVELOPER_TEST_MODE_RESET_ERROR: p,
                LOGOUT: T,
                DEVELOPER_TEST_MODE_RESET: T
            })