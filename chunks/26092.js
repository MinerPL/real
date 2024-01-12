            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                a = n("913144"),
                o = n("697218"),
                d = n("49111");
            let u = d.FormStates.CLOSED,
                l = null,
                f = null,
                _ = {},
                c = {},
                g = {},
                m = null,
                h = null,
                v = !1,
                E = !1,
                p = null,
                y = null,
                T = null,
                C = [],
                S = null,
                I = null;

            function A(e) {
                var t, n, s, i, r, a;
                let l = o.default.getCurrentUser();
                if (null == l) return D();
                f = null !== (t = e.section) && void 0 !== t ? t : f, S = null !== (n = e.section) && void 0 !== n ? n : f, null != e.subsection && null != f && (_[f] = e.subsection), null != e.scrollPosition && null != f && (c[f] = e.scrollPosition), E = !!e.openWithoutBackstack, u = d.FormStates.OPEN, g = {}, h = {
                    ...m = {
                        [d.UserSettingsSections.ACCOUNT]: {
                            userId: l.id,
                            username: l.username,
                            discriminator: l.discriminator,
                            email: l.email,
                            avatar: l.avatar,
                            password: "",
                            newPassword: null,
                            claimed: l.isClaimed()
                        }
                    }
                }, y = null !== (s = e.onClose) && void 0 !== s ? s : null, T = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null, C = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], I = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function D() {
                u = d.FormStates.CLOSED, v = !1, m = null, S = null, h = null, l = null, f = null, _ = {}, c = {}, y = null, T = null, C = [], I = null
            }

            function N() {
                u = d.FormStates.OPEN, g = {}
            }
            class O extends r.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                hasChanges() {
                    return null != h && null != m && (!!this.isOpen() || p === d.DrawerTabTypes.USER_SETTINGS) && !i.isEqual(h, m)
                }
                isOpen() {
                    return v
                }
                getPreviousSection() {
                    return l
                }
                getSection() {
                    return f
                }
                getSubsection() {
                    return null != f ? _[f] : null
                }
                getScrollPosition() {
                    return null != f ? c[f] : null
                }
                shouldOpenWithoutBackstack() {
                    return E
                }
                getProps() {
                    return {
                        submitting: u === d.FormStates.SUBMITTING,
                        section: f,
                        subsection: null != f ? _[f] : null,
                        scrollPosition: null != f ? c[f] : null,
                        settings: h,
                        errors: g,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: E,
                        analyticsLocation: T,
                        analyticsLocations: C,
                        initialSection: S,
                        impressionSource: I
                    }
                }
                get onClose() {
                    return y
                }
            }
            O.displayName = "UserSettingsModalStore";
            var b = new O(a.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    v = !0, A(e)
                },
                USER_SETTINGS_MODAL_INIT: A,
                USER_SETTINGS_MODAL_CLOSE: D,
                LOGOUT: D,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    u = d.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (u !== d.FormStates.SUBMITTING) return !1;
                    u = d.FormStates.OPEN, f = d.UserSettingsSections.ACCOUNT, g = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    l = f, f = e.section, T = null, C = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (_[f] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != f && delete _[f]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete c[t] : null != f && delete c[f]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == h && (h = {});
                    let n = h[d.UserSettingsSections.ACCOUNT];
                    h[d.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: N,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = o.default.getCurrentUser();
                    N(), null != e && (h = {
                        ...m = {
                            [d.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return p = e.tab, null == f && p === d.DrawerTabTypes.USER_SETTINGS && A({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })