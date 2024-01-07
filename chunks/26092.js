            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return U
                }
            });
            var r = n("917351"),
                l = n.n(r),
                i = n("446674"),
                o = n("913144"),
                s = n("697218"),
                u = n("49111");
            let a = u.FormStates.CLOSED,
                d = null,
                c = null,
                h = {},
                f = {},
                _ = {},
                p = null,
                E = null,
                I = !1,
                S = !1,
                T = null,
                g = null,
                m = null,
                N = [],
                v = null,
                L = null;

            function A(t) {
                var e, n, r, l, i, o;
                let d = s.default.getCurrentUser();
                if (null == d) return C();
                c = null !== (e = t.section) && void 0 !== e ? e : c, v = null !== (n = t.section) && void 0 !== n ? n : c, null != t.subsection && null != c && (h[c] = t.subsection), null != t.scrollPosition && null != c && (f[c] = t.scrollPosition), S = !!t.openWithoutBackstack, a = u.FormStates.OPEN, _ = {}, E = {
                    ...p = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: d.id,
                            username: d.username,
                            discriminator: d.discriminator,
                            email: d.email,
                            avatar: d.avatar,
                            password: "",
                            newPassword: null,
                            claimed: d.isClaimed()
                        }
                    }
                }, g = null !== (r = t.onClose) && void 0 !== r ? r : null, m = null !== (l = t.analyticsLocation) && void 0 !== l ? l : null, N = null !== (i = t.analyticsLocations) && void 0 !== i ? i : [], L = null !== (o = t.impressionSource) && void 0 !== o ? o : null
            }

            function C() {
                a = u.FormStates.CLOSED, I = !1, p = null, v = null, E = null, d = null, c = null, h = {}, f = {}, g = null, m = null, N = [], L = null
            }

            function M() {
                a = u.FormStates.OPEN, _ = {}
            }
            class O extends i.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != E && null != p && (!!this.isOpen() || T === u.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(E, p)
                }
                isOpen() {
                    return I
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? h[c] : null
                }
                getScrollPosition() {
                    return null != c ? f[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return S
                }
                getProps() {
                    return {
                        submitting: a === u.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? h[c] : null,
                        scrollPosition: null != c ? f[c] : null,
                        settings: E,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: S,
                        analyticsLocation: m,
                        analyticsLocations: N,
                        initialSection: v,
                        impressionSource: L
                    }
                }
                get onClose() {
                    return g
                }
            }
            O.displayName = "UserSettingsModalStore";
            var U = new O(o.default, {
                USER_SETTINGS_MODAL_OPEN: function(t) {
                    I = !0, A(t)
                },
                USER_SETTINGS_MODAL_INIT: A,
                USER_SETTINGS_MODAL_CLOSE: C,
                LOGOUT: C,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    a = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (a !== u.FormStates.SUBMITTING) return !1;
                    a = u.FormStates.OPEN, c = u.UserSettingsSections.ACCOUNT, _ = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    var e;
                    d = c, c = t.section, m = null, N = null !== (e = t.analyticsLocations) && void 0 !== e ? e : [], null != t.subsection && (h[c] = t.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(t) {
                    let {
                        forSection: e
                    } = t;
                    null != e ? delete h[e] : null != c && delete h[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(t) {
                    let {
                        forSection: e
                    } = t;
                    null != e ? delete f[e] : null != c && delete f[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(t) {
                    let {
                        settings: e
                    } = t;
                    null == E && (E = {});
                    let n = E[u.UserSettingsSections.ACCOUNT];
                    E[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...e
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
                USER_SETTINGS_MODAL_RESET: function() {
                    let t = s.default.getCurrentUser();
                    M(), null != t && (E = {
                        ...p = {
                            [u.UserSettingsSections.ACCOUNT]: {
                                userId: t.id,
                                username: t.username,
                                discriminator: t.discriminator,
                                email: t.email,
                                avatar: t.avatar,
                                password: "",
                                newPassword: null,
                                claimed: t.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(t) {
                    return T = t.tab, null == c && T === u.DrawerTabTypes.USER_SETTINGS && A({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })