            "use strict";
            let a, s;
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                o = n("95410"),
                u = n("913144"),
                d = n("991170"),
                c = n("492114"),
                E = n("42203"),
                f = n("49111"),
                _ = n("606762");
            let h = new Set,
                C = f.FormStates.CLOSED,
                T = !1,
                I = null,
                S = null,
                N = null,
                A = null,
                p = null,
                m = null,
                g = o.default.get(_.ADVANCED_MODE_ON_KEY) || !1;

            function R(e) {
                let t = e.getGuildId(),
                    n = {
                        ...e.permissionOverwrites
                    };
                return null != t && null == n[t] && (n[t] = d.default.makeEveryoneOverwrite(t)), n
            }

            function O() {
                if (N = c.default.getChannel(), A = c.default.getCategory(), null == N) return !1;
                let e = N.getGuildId();
                S = I = R(N), null == I[p] && (p = e), s = null != A, a = d.default.areChannelsLocked(N, A), m = null, T = !1, C = f.FormStates.CLOSED, h.clear()
            }
            class L extends r.default.Store {
                initialize() {
                    this.waitFor(c.default, E.default)
                }
                hasChanges() {
                    return T
                }
                showNotice() {
                    return this.hasChanges()
                }
                getPermissionOverwrite(e) {
                    return null == I ? void 0 : I[e]
                }
                get editedPermissionIds() {
                    return Array.from(h)
                }
                get permissionOverwrites() {
                    return I
                }
                get selectedOverwriteId() {
                    return p
                }
                get formState() {
                    return C
                }
                get isLockable() {
                    return s
                }
                get locked() {
                    return a
                }
                get channel() {
                    return N
                }
                get category() {
                    return A
                }
                get advancedMode() {
                    return g
                }
            }
            L.displayName = "ChannelSettingsPermissionsStore";
            var v = new L(u.default, {
                CHANNEL_SETTINGS_SET_SECTION: function(e) {
                    let {
                        section: t
                    } = e;
                    if (null != N || t !== f.ChannelSettingsSections.PERMISSIONS) return !1;
                    O()
                },
                CHANNEL_SETTINGS_PERMISSIONS_INIT: O,
                CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
                    let {
                        id: t,
                        allow: n,
                        deny: s
                    } = e, i = null == I ? void 0 : I[t];
                    if (null == i || null == N) return !1;
                    i = {
                        ...i,
                        allow: n,
                        deny: s
                    }, I = {
                        ...I,
                        [t]: i
                    }, h.add(t), C = f.FormStates.OPEN, T = !l.isEqual(I, S), a = d.default.areChannelsLocked(N, A)
                },
                CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
                    let {
                        id: t
                    } = e;
                    if (null != I && null != I[t]) p = t;
                    else {
                        if (null == N) return !1;
                        m = t
                    }
                },
                CHANNEL_SETTINGS_CLOSE: function() {
                    C = f.FormStates.CLOSED, I = null, S = null, N = null, A = null, T = !1, h.clear(), p = null, m = null
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    if (null == N) return !1;
                    let n = !1;
                    for (let e of t) !1 !== function(e) {
                        if (null == N || N.id !== e || null == (N = E.default.getChannel(e))) return !1;
                        A = c.default.getCategory();
                        let t = N.getGuildId();
                        if (null == t) return !1;
                        S = R(N);
                        let n = {};
                        return h.forEach(e => {
                            null != I && (n[e] = I[e])
                        }), null == n[t] && null == N.permissionOverwrites[t] && (n[t] = d.default.makeEveryoneOverwrite(t)), null == (I = {
                            ...N.permissionOverwrites,
                            ...n
                        })[p] ? p = t : null != m && null != I[m] && (p = m, m = null), a = d.default.areChannelsLocked(N, A), !0
                    }(e.id) && (n = !0);
                    return n
                },
                CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
                    C = f.FormStates.SUBMITTING
                },
                CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
                    let {
                        silent: t
                    } = e;
                    t ? C = f.FormStates.OPEN : (C = f.FormStates.CLOSED, O())
                },
                CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
                    let {
                        advancedMode: t
                    } = e;
                    g = t, o.default.set(_.ADVANCED_MODE_ON_KEY, t)
                }
            })