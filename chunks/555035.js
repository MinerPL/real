            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("808653");
            var i = n("446674"),
                a = n("913144"),
                l = n("353927");
            let s = null,
                r = null,
                u = {};

            function o(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = u[e];
                if (null == i) return;
                let a = i[null != t ? t : "null"];
                if (null != a) {
                    for (let e of Object.values(l.MediaEngineContextTypes))(n === e || null == n) && delete a[e];
                    u[e][null != t ? t : "null"] = a
                }
            }
            class d extends i.default.Store {
                getStreamId(e, t) {
                    var n, i, a;
                    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.MediaEngineContextTypes.DEFAULT;
                    return null === (a = u[e]) || void 0 === a ? void 0 : null === (i = a[null != t ? t : "null"]) || void 0 === i ? void 0 : null === (n = i[s]) || void 0 === n ? void 0 : n.streamId
                }
                getUserStreamData(e, t) {
                    var n, i;
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.MediaEngineContextTypes.DEFAULT;
                    return null === (i = u[e]) || void 0 === i ? void 0 : null === (n = i[null != t ? t : "null"]) || void 0 === n ? void 0 : n[a]
                }
            }
            d.displayName = "VideoStreamStore";
            var c = new d(a.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        user: t,
                        sessionId: n
                    } = e;
                    s = t.id, r = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        user: t,
                        sessionId: n
                    } = e;
                    s = t.id, r = n
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        userId: t,
                        guildId: n,
                        streamId: i,
                        context: a
                    } = e;
                    null != i ? ! function(e, t, n, i) {
                        var a;
                        !(e in u) && (u[e] = {});
                        let l = null !== (a = u[e][null != t ? t : "null"]) && void 0 !== a ? a : {};
                        u[e][null != t ? t : "null"] = {
                            ...l,
                            [i]: {
                                streamId: n
                            }
                        }
                    }(t, n, i, a) : o(t, n, a)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        var n;
                        let {
                            userId: i,
                            sessionId: a,
                            channelId: l,
                            guildId: d
                        } = t;
                        if (null == l && i === s) {
                            if (a !== r) return e;
                            u = {}
                        } else {
                            if (null != l || (null === (n = u[i]) || void 0 === n ? void 0 : n[null != d ? d : "null"]) == null) return e;
                            o(i, d)
                        }
                        return !0
                    }, !1)
                }
            })