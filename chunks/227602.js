            "use strict";
            let a;
            n.r(t), n.d(t, {
                DEFAULT_MUTE_KEYBIND: function() {
                    return R
                },
                default: function() {
                    return Q
                }
            }), n("808653"), n("424973"), n("222007"), n("781738");
            var l = n("800648"),
                o = n.n(l),
                i = n("969230"),
                r = n.n(i),
                d = n("714617"),
                E = n.n(d),
                u = n("917351"),
                s = n.n(u),
                c = n("446674"),
                _ = n("913144"),
                O = n("485328"),
                T = n("605250"),
                A = n("999819"),
                I = n("42887"),
                S = n("599110"),
                f = n("773336"),
                N = n("50885"),
                L = n("13798"),
                C = n("860957"),
                y = n("49111"),
                D = n("80028"),
                p = n("846325"),
                h = n("390493");
            let v = new T.default("KeybindsStore"),
                R = {
                    id: "1000",
                    action: y.GlobalKeybindActions.TOGGLE_MUTE,
                    shortcut: (0, L.toCombo)("mod+shift+m"),
                    enabled: !0,
                    managed: !0,
                    params: {}
                },
                g = {},
                P = {},
                G = 0,
                b = !0,
                m = {},
                U = !1,
                M = [y.GlobalKeybindActions.PUSH_TO_TALK, y.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, y.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];

            function Y() {
                let {
                    showKeybindIndicators: e
                } = A.default.getCurrentConfig({
                    location: "KeybindsStore"
                }), t = s.find(P, e => R.action === e.action && e.enabled && e.shortcut.length > 0);
                null == t && !__OVERLAY__ && !U && b && e && (K(R), U = !0)
            }

            function w() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                (U || e) && (V(R.id), U = !1)
            }

            function H(e) {
                let {
                    showKeybindIndicators: t
                } = e;
                t ? Y() : w(!0)
            }

            function V(e) {
                if (f.isPlatformEmbedded) N.default.inputEventUnregister(parseInt(e, 10));
                else {
                    let t = g[e];
                    if (t) {
                        let t = P[e],
                            n = m[t.action];
                        (null == n ? void 0 : n.isPressed) === !0 && h.nextTick(() => n.onTrigger(!1, t)), g[e].reset(), g[e] = null
                    }
                }
            }

            function K(e) {
                if (!b || __OVERLAY__) return;
                let {
                    shortcut: t,
                    action: n,
                    enabled: a
                } = e;
                if ("" === t || null == t || n === y.GlobalKeybindActions.UNASSIGNED || !a) return;
                if (null == m[n]) {
                    v.error("[kb store] KeybindStore: Looking for callback action ".concat(n, " but it doesn't exist in this version. Skipping"));
                    return
                }
                let l = e.id,
                    i = m[n].keyEvents;
                e.action === y.GlobalKeybindActions.TOGGLE_MUTE && w(), ! function(e, t, n, a) {
                    if (f.isPlatformEmbedded) N.default.inputEventRegister(parseInt(e), t, n, a);
                    else {
                        V(e);
                        let l = r(new o(document));
                        a.keyup && l.bindGlobal((0, L.toString)(t), () => n(!1), "keyup"), a.keydown && l.bindGlobal((0, L.toString)(t), () => n(!0), "keydown"), g[e] = l
                    }
                }(l, t, e => (function(e, t) {
                    let n = e === R.id ? R : P[e];
                    null != n && m[n.action].onTrigger(t, n)
                })(l, e), {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1,
                    ...i
                }), O.default.validateKeybind((0, L.toString)(e.shortcut))
            }

            function k(e) {
                let t = {
                    id: G.toString(),
                    enabled: !0,
                    action: y.GlobalKeybindActions.UNASSIGNED,
                    shortcut: [],
                    managed: !1,
                    params: {},
                    ...e
                };
                return P = {
                    ...P,
                    [t.id]: t
                }, G += 1, t
            }

            function W(e) {
                V(e.id), P = {
                    ...P
                }, delete P[e.id], e.action === y.GlobalKeybindActions.TOGGLE_MUTE && Y()
            }

            function F(e) {
                let {
                    keybind: t
                } = e;
                P = {
                    ...P,
                    [t.id]: t
                }, !__OVERLAY__ && (S.default.track(y.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                    keybind_action: t.action,
                    keybind_is_bound: !0,
                    keybind_has_shortcut: t.shortcut.length > 0
                }), t.action === y.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? S.default.track(y.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                    hotkey: t.action === y.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK ? (0, L.toString)(t.shortcut) : null
                }) : t.action === y.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && S.default.track(y.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                    text_activation_hotkey: t.action === y.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, L.toString)(t.shortcut) : null
                })), K(t)
            }

            function x(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = s.find(P, t => t.action === e && (!n || t.managed === n));
                return null == a && (K(k({
                    action: e,
                    enabled: !0,
                    shortcut: (0, L.toCombo)(t),
                    managed: !0,
                    params: {}
                })), !0)
            }
            let B = [function() {
                let e = I.default.getShortcuts();
                return s.each(P, t => {
                    t.action === y.GlobalKeybindActions.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && W(t)
                }), s.reduce(I.default.getShortcuts(), (e, t, n) => {
                    let a = s.find(P, e => e.action === y.GlobalKeybindActions.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == a) K(k({
                        action: y.GlobalKeybindActions.PUSH_TO_TALK,
                        enabled: !0,
                        shortcut: t,
                        managed: !0,
                        params: {},
                        context: n
                    }));
                    else {
                        if (null == t) return e || !1;
                        F({
                            keybind: {
                                ...a,
                                shortcut: "string" == typeof t ? (0, L.toCombo)(t) : t,
                                context: n
                            }
                        })
                    }
                    return !0
                }, !1)
            }, function() {
                return !!C.default.enabled && x(y.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, "shift+`")
            }, function() {
                return !!C.default.enabled && x(y.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
            }, function() {
                return x(y.GlobalKeybindActions.SOUNDBOARD_HOLD, p.DEFAULT_KEYBIND, !1)
            }, function() {
                return x(y.GlobalKeybindActions.SAVE_CLIP, D.DEFAULT_KEYBIND)
            }];

            function X() {
                return Y(), B.reduce((e, t) => t() || e, !1)
            }
            O.default.setGetKeybindList(() => {
                let e = [];
                for (let t in P) P.hasOwnProperty(t) && e.push((0, L.toString)(P[t].shortcut));
                let {
                    showKeybindIndicators: t
                } = A.default.getCurrentConfig({
                    location: "KeybindsStore"
                });
                return t && e.push((0, L.toString)(R.shortcut)), e
            });
            class z extends c.default.DeviceSettingsStore {
                initialize(e) {
                    !__OVERLAY__ && this.waitFor(I.default, C.default), P = null != e ? e : {}
                }
                getUserAgnosticState() {
                    return P
                }
                hasKeybind(e, t, n) {
                    for (let a in P)
                        for (let l of P[a].shortcut)
                            if (l[0] === e && l[1] === t && (void 0 === n || n === l[2])) return !0;
                    return !1
                }
                hasExactKeybind(e) {
                    for (let t in P) {
                        let n = P[t];
                        if (s.isEqual(n.shortcut, e)) return !0
                    }
                    return !1
                }
                getKeybindForAction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        {
                            showKeybindIndicators: a
                        } = A.default.getCurrentConfig({
                            location: "KeybindsStore"
                        }),
                        l = s.find(P, a => a.action === e && (!t || a.managed) && (!n || a.shortcut.length > 0 && a.enabled));
                    return null != l ? l : a && e === y.GlobalKeybindActions.TOGGLE_MUTE ? R : null
                }
                getOverlayKeybind() {
                    return this.getKeybindForAction(y.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK, !0)
                }
                getOverlayChatKeybind() {
                    return this.getKeybindForAction(y.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0)
                }
            }
            z.displayName = "KeybindsStore", z.persistKey = "keybinds", z.migrations = [function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        v: t,
                        keybinds: n = e
                    } = e;
                return s.reduce(n, (e, n, a) => {
                    let l = parseInt(n.id, 10);
                    return isNaN(l) || n.id !== a ? e : ((null == t || t < 2) && ("string" == typeof n.shortcut ? (n.shortcut = n.shortcut.replace("escape", "esc").replace("capslock", "caps lock").replace("numlock", "num lock").replace("pageup", "page up").replace("pagedown", "page down"), n.shortcut = (0, L.toCombo)(n.shortcut)) : n.shortcut = n.shortcut.map(e => e.length < 3 ? [...e, (0, L.getEnv)()] : e)), e[a] = n, e)
                }, {})
            }, e => e, e => {
                let {
                    keybinds: t = e
                } = e;
                return s.reduce(t, (e, t, n) => {
                    if ((0, f.isLinux)() && t.action === y.GlobalKeybindActions.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map(e => e[1]),
                            a = (0, L.toCombo)("`").map(e => e[1]);
                        if (E(n, a)) return e
                    }
                    return {
                        ...e,
                        [n]: t
                    }
                }, {})
            }, e => {
                let t = {};
                for (let a in e) {
                    let l = e[a];
                    if (null != l) {
                        if (null == l.params || null == l.enabled) {
                            var n;
                            l = {
                                ...l,
                                enabled: !1 !== l.enabled,
                                params: null !== (n = l.params) && void 0 !== n ? n : {}
                            }
                        }
                        t[a] = l
                    }
                }
                return t
            }];
            var Q = new z(_.default, {
                CONNECTION_OPEN: X,
                AUDIO_SET_MODE: X,
                OVERLAY_SET_ENABLED: X,
                RPC_APP_CONNECTED: X,
                RPC_APP_DISCONNECTED: X,
                KEYBINDS_ADD_KEYBIND: function(e) {
                    let {
                        keybind: t
                    } = e, n = k(t);
                    K(n)
                },
                KEYBINDS_DELETE_KEYBIND: function(e) {
                    let {
                        id: t
                    } = e, n = P[t];
                    !__OVERLAY__ && S.default.track(y.AnalyticEvents.USER_SETTINGS_KEYBIND_UPDATED, {
                        keybind_action: n.action,
                        keybind_is_bound: !1,
                        keybind_has_shortcut: !1
                    }), null != n && W(n)
                },
                KEYBINDS_SET_KEYBIND: F,
                KEYBINDS_ENABLE_ALL_KEYBINDS: function(e) {
                    let {
                        enable: t
                    } = e;
                    b = t, t ? (O.default.enable(), s.forEach(P, K), Y()) : (O.default.disable(), s.forEach(P, e => V(e.id)), w())
                },
                KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function(e) {
                    let {
                        keybinds: t
                    } = e;
                    m = t, g = {}, G = 0;
                    let n = Object.values(P).filter(e => M.includes(e.action) && e.managed);
                    n.length !== M.length && X(), s.forEach(P, e => {
                        G = Math.max(parseInt(e.id, 10), G) + 1;
                        try {
                            K(e)
                        } catch (t) {
                            v.error("Failed to register keybind", e, t)
                        }
                    }), b = !0, null == a && (a = A.default.subscribe({
                        location: "KeybindsStore"
                    }, H))
                }
            })