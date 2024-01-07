            "use strict";
            let n;
            u.r(t), u.d(t, {
                default: function() {
                    return E
                }
            });
            var r = u("446674"),
                l = u("872717"),
                a = u("913144"),
                i = u("271938"),
                o = u("401848"),
                d = u("49111"),
                s = u("724210");
            let f = {},
                c = Object.freeze({});

            function m(e) {
                var t;
                return null !== (t = f[e]) && void 0 !== t ? t : c
            }

            function g(e) {
                var t, u;
                let {
                    channelId: n,
                    userId: r
                } = e, l = {
                    ...m(n)
                };
                clearTimeout(l[r]), l[r] = (t = n, u = r, setTimeout(() => {
                    a.default.dispatch({
                        type: "TYPING_STOP",
                        channelId: t,
                        userId: u
                    })
                }, 1e4)), f[n] = l
            }

            function S(e) {
                let {
                    channelId: t,
                    userId: u
                } = e, n = f[t];
                if (null == n || null == n[u]) return !1;
                let r = {
                    ...n
                };
                clearTimeout(r[u]), delete r[u], f[t] = r
            }

            function T() {
                f = {}
            }
            class h extends r.default.Store {
                getTypingUsers(e) {
                    return m(e)
                }
                isTyping(e, t) {
                    return null != m(e)[t]
                }
            }
            h.displayName = "TypingStore";
            var E = new h(a.default, {
                TYPING_START: g,
                TYPING_STOP: S,
                TYPING_START_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, u = i.default.getId();
                    if (null == u || t === s.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    null != n && n.channelId !== t && (null != n.timeout && clearTimeout(n.timeout), n = null);
                    let r = Date.now(),
                        f = 8e3;
                    if (null != n && (null != n.timeout || n.prevSend + f > r)) return !1;
                    let S = null == n || n.prevSend > r - 2 * f ? 1500 : 0,
                        T = setTimeout(() => {
                            if (null != n && n.channelId === t && u === i.default.getId() && null != n.timeout) n.timeout = null, !(function(e) {
                                let t = m(e);
                                return t === c ? 0 : Object.keys(t).length
                            }(t) > 5) && l.default.post({
                                url: d.Endpoints.TYPING(t),
                                oldFormErrors: !0
                            }).then(e => {
                                if (200 === e.status) {
                                    var u, n;
                                    let r = null !== (u = e.body.message_send_cooldown_ms) && void 0 !== u ? u : 0,
                                        l = null !== (n = e.body.thread_create_cooldown_ms) && void 0 !== n ? n : 0;
                                    r > 0 && a.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: o.SlowmodeType.SendMessage,
                                        cooldownMs: r
                                    }), l > 0 && a.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: o.SlowmodeType.CreateThread,
                                        cooldownMs: l
                                    })
                                }
                            })
                        }, S);
                    return n = {
                        channelId: t,
                        timeout: T,
                        prevSend: r
                    }, g({
                        channelId: t,
                        userId: u
                    })
                },
                TYPING_STOP_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, u = i.default.getId();
                    return null != u && null != n && n.channelId === t && null != n.timeout && (clearTimeout(n.timeout), n = null, S({
                        channelId: t,
                        userId: u
                    }))
                },
                CONNECTION_OPEN: T,
                OVERLAY_INITIALIZE: T,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: {
                            author: u
                        },
                        optimistic: r
                    } = e;
                    return r && ! function(e) {
                        if (null == n || n.channelId !== e) return;
                        null != n.timeout && clearTimeout(n.timeout), n = null
                    }(t), null != u && S({
                        channelId: t,
                        userId: u.id
                    })
                }
            })