            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("446674"),
                a = n("913144"),
                l = n("987317"),
                s = n("49671"),
                r = n("845579"),
                u = n("773336"),
                o = n("271938"),
                d = n("49111"),
                c = n("353927");
            let _ = Date.now(),
                E = !1,
                f = !1,
                h = !1,
                p = !1,
                T = !1;

            function C() {
                return h || p || (0, u.isAndroid)() && T
            }

            function m() {
                Date.now() - _ > d.IDLE_DURATION || C() ? E || a.default.dispatch({
                    type: "IDLE",
                    idle: !0,
                    idleSince: _
                }) : E && a.default.dispatch({
                    type: "IDLE",
                    idle: !1
                }), Date.now() - _ > Math.min(1e3 * r.AfkTimeout.getSetting(), d.IDLE_DURATION) || C() ? f || a.default.dispatch({
                    type: "AFK",
                    afk: !0
                }) : f && a.default.dispatch({
                    type: "AFK",
                    afk: !1
                })
            }!__OVERLAY__ && (u.isPlatformEmbedded && (null === s.default || void 0 === s.default ? void 0 : s.default.remotePowerMonitor) != null ? (! function e() {
                var t;
                let n = t => {
                    _ = Math.max(Date.now() - t, _), m(), setTimeout(e, 1e4)
                };
                if ((null === s.default || void 0 === s.default ? void 0 : null === (t = s.default.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
                    let e = s.default.remotePowerMonitor.getSystemIdleTimeMs();
                    e instanceof Promise ? e.then(n) : n(e)
                }
            }(), s.default.remotePowerMonitor.on("resume", () => {
                h = !1, S({})
            }), s.default.remotePowerMonitor.on("suspend", () => {
                h = !0, S({}), l.default.disconnect()
            }), s.default.remotePowerMonitor.on("lock-screen", () => {
                p = !0, S({})
            }), s.default.remotePowerMonitor.on("unlock-screen", () => {
                p = !1, S({})
            })) : setInterval(m, .25 * d.IDLE_DURATION));

            function S(e) {
                let {
                    timestamp: t,
                    type: n
                } = e, i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
                return (!i || !(t <= _)) && (_ = i ? t : Date.now(), __OVERLAY__ ? a.default.dispatch({
                    type: "OVERLAY_SET_NOT_IDLE",
                    timestamp: _
                }) : m(), !1)
            }
            class I extends i.default.Store {
                isIdle() {
                    return E
                }
                isAFK() {
                    return f
                }
                getIdleSince() {
                    return E ? _ : null
                }
            }
            I.displayName = "IdleStore";
            var g = new I(a.default, {
                IDLE: function(e) {
                    E = e.idle
                },
                AFK: function(e) {
                    f = e.afk
                },
                SPEAKING: function(e) {
                    let {
                        userId: t,
                        speakingFlags: n
                    } = e;
                    return n !== c.SpeakingFlags.NONE && t === o.default.getId() && S({}), !1
                },
                APP_STATE_UPDATE: function(e) {
                    let {
                        state: t
                    } = e;
                    return T = t === d.AppStates.BACKGROUND, _ = Date.now(), m(), !1
                },
                OVERLAY_SET_NOT_IDLE: S,
                CHANNEL_SELECT: S,
                VOICE_CHANNEL_SELECT: S,
                WINDOW_FOCUS: S,
                OVERLAY_INITIALIZE: S,
                OVERLAY_SET_INPUT_LOCKED: S,
                USER_SETTINGS_PROTO_UPDATE: S
            })