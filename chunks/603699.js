            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var s = n("446674"),
                i = n("913144"),
                r = n("987317"),
                a = n("49671"),
                o = n("845579"),
                d = n("773336"),
                u = n("271938"),
                l = n("49111"),
                f = n("353927");
            let _ = Date.now(),
                c = !1,
                g = !1,
                m = !1,
                h = !1,
                v = !1;

            function E() {
                return m || h || (0, d.isAndroid)() && v
            }

            function p() {
                Date.now() - _ > l.IDLE_DURATION || E() ? c || i.default.dispatch({
                    type: "IDLE",
                    idle: !0,
                    idleSince: _
                }) : c && i.default.dispatch({
                    type: "IDLE",
                    idle: !1
                }), Date.now() - _ > Math.min(1e3 * o.AfkTimeout.getSetting(), l.IDLE_DURATION) || E() ? g || i.default.dispatch({
                    type: "AFK",
                    afk: !0
                }) : g && i.default.dispatch({
                    type: "AFK",
                    afk: !1
                })
            }!__OVERLAY__ && (d.isPlatformEmbedded && (null === a.default || void 0 === a.default ? void 0 : a.default.remotePowerMonitor) != null ? (! function e() {
                var t;
                let n = t => {
                    _ = Math.max(Date.now() - t, _), p(), setTimeout(e, 1e4)
                };
                if ((null === a.default || void 0 === a.default ? void 0 : null === (t = a.default.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
                    let e = a.default.remotePowerMonitor.getSystemIdleTimeMs();
                    e instanceof Promise ? e.then(n) : n(e)
                }
            }(), a.default.remotePowerMonitor.on("resume", () => {
                m = !1, y({})
            }), a.default.remotePowerMonitor.on("suspend", () => {
                m = !0, y({}), r.default.disconnect()
            }), a.default.remotePowerMonitor.on("lock-screen", () => {
                h = !0, y({})
            }), a.default.remotePowerMonitor.on("unlock-screen", () => {
                h = !1, y({})
            })) : setInterval(p, .25 * l.IDLE_DURATION));

            function y(e) {
                let {
                    timestamp: t,
                    type: n
                } = e, s = "OVERLAY_SET_NOT_IDLE" === n && null != t;
                return (!s || !(t <= _)) && (_ = s ? t : Date.now(), __OVERLAY__ ? i.default.dispatch({
                    type: "OVERLAY_SET_NOT_IDLE",
                    timestamp: _
                }) : p(), !1)
            }
            class T extends s.default.Store {
                isIdle() {
                    return c
                }
                isAFK() {
                    return g
                }
                getIdleSince() {
                    return c ? _ : null
                }
            }
            T.displayName = "IdleStore";
            var C = new T(i.default, {
                IDLE: function(e) {
                    c = e.idle
                },
                AFK: function(e) {
                    g = e.afk
                },
                SPEAKING: function(e) {
                    let {
                        userId: t,
                        speakingFlags: n
                    } = e;
                    return n !== f.SpeakingFlags.NONE && t === u.default.getId() && y({}), !1
                },
                APP_STATE_UPDATE: function(e) {
                    let {
                        state: t
                    } = e;
                    return v = t === l.AppStates.BACKGROUND, _ = Date.now(), p(), !1
                },
                OVERLAY_SET_NOT_IDLE: y,
                CHANNEL_SELECT: y,
                VOICE_CHANNEL_SELECT: y,
                WINDOW_FOCUS: y,
                OVERLAY_INITIALIZE: y,
                OVERLAY_SET_INPUT_LOCKED: y,
                USER_SETTINGS_PROTO_UPDATE: y
            })