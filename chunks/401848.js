            "use strict";
            n.r(t), n.d(t, {
                SlowmodeType: function() {
                    return a
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var a, l, s = n("446674"),
                i = n("862337"),
                r = n("913144"),
                d = n("42203"),
                u = n("957255"),
                o = n("49111");
            (l = a || (a = {}))[l.SendMessage = 0] = "SendMessage", l[l.CreateThread = 1] = "CreateThread";
            let c = {
                0: {},
                1: {}
            };

            function E(e, t, n) {
                if (function(e, t) {
                        null != c[t][e.id] && (c[t][e.id].timer.stop(), delete c[t][e.id])
                    }(e, t), function(e, t) {
                        return 0 === t ? u.default.can(o.Permissions.MANAGE_CHANNELS, e) || u.default.can(o.Permissions.MANAGE_MESSAGES, e) : u.default.can(o.Permissions.MANAGE_THREADS, e)
                    }(e, t) || n <= 0) return;
                let a = n + Date.now();
                c[t][e.id] = {
                    rateLimitPerUser: e.rateLimitPerUser,
                    cooldownMs: n,
                    cooldownEndTimestamp: a,
                    timer: new i.Timeout
                }, c[t][e.id].timer.start(1e3, () => {
                    r.default.dispatch({
                        type: "SLOWMODE_SET_COOLDOWN",
                        channelId: e.id,
                        slowmodeType: t,
                        cooldownMs: Math.max(a - Date.now(), 0)
                    })
                }, !0)
            }

            function f(e, t) {
                let n = d.default.getChannel(e);
                if (null == n) return !1;
                E(n, t, 0 === n.rateLimitPerUser ? 0 : 1e3 * n.rateLimitPerUser + 100)
            }

            function _(e) {
                let {
                    file: t
                } = e, n = d.default.getChannel(t.channelId);
                return null != n && E(n, 0, 0)
            }
            class g extends s.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getSlowmodeCooldownGuess(e, t) {
                    let n = c[null != t ? t : 0][e];
                    return null != n ? n.cooldownMs : 0
                }
            }
            g.displayName = "SlowmodeStore";
            var h = new g(r.default, {
                SLOWMODE_RESET_COOLDOWN: function(e) {
                    let {
                        channelId: t,
                        slowmodeType: n
                    } = e;
                    return f(t, n)
                },
                SLOWMODE_SET_COOLDOWN: function(e) {
                    let {
                        channelId: t,
                        slowmodeType: n,
                        cooldownMs: a
                    } = e, l = d.default.getChannel(t);
                    if (null == l) return !1;
                    E(l, n, 0 === a ? 0 : a + 100)
                },
                UPLOAD_START: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return f(t, 0)
                },
                UPLOAD_FAIL: _,
                UPLOAD_CANCEL_REQUEST: _,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    [0, 1].forEach(e => {
                        for (let a of t) {
                            var n;
                            let t = c[e][a.id],
                                l = a.rateLimitPerUser;
                            if (null == t || t.rateLimitPerUser === l) continue;
                            let s = Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, 1e3 * l);
                            E(a, e, s)
                        }
                    })
                },
                LOGOUT: function() {
                    [0, 1].forEach(e => {
                        Object.keys(c[e]).forEach(t => c[e][t].timer.stop()), c[e] = {}
                    })
                }
            })