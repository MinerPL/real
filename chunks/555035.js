            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007"), n("808653");
            var s = n("446674"),
                i = n("913144"),
                r = n("353927");
            let a = null,
                o = null,
                d = {};

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    s = d[e];
                if (null == s) return;
                let i = s[null != t ? t : "null"];
                if (null != i) {
                    for (let e of Object.values(r.MediaEngineContextTypes))(n === e || null == n) && delete i[e];
                    d[e][null != t ? t : "null"] = i
                }
            }
            class l extends s.default.Store {
                getStreamId(e, t) {
                    var n, s, i;
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.MediaEngineContextTypes.DEFAULT;
                    return null === (i = d[e]) || void 0 === i ? void 0 : null === (s = i[null != t ? t : "null"]) || void 0 === s ? void 0 : null === (n = s[a]) || void 0 === n ? void 0 : n.streamId
                }
                getUserStreamData(e, t) {
                    var n, s;
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.MediaEngineContextTypes.DEFAULT;
                    return null === (s = d[e]) || void 0 === s ? void 0 : null === (n = s[null != t ? t : "null"]) || void 0 === n ? void 0 : n[i]
                }
            }
            l.displayName = "VideoStreamStore";
            var f = new l(i.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        user: t,
                        sessionId: n
                    } = e;
                    a = t.id, o = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        user: t,
                        sessionId: n
                    } = e;
                    a = t.id, o = n
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        userId: t,
                        guildId: n,
                        streamId: s,
                        context: i
                    } = e;
                    null != s ? ! function(e, t, n, s) {
                        var i;
                        !(e in d) && (d[e] = {});
                        let r = null !== (i = d[e][null != t ? t : "null"]) && void 0 !== i ? i : {};
                        d[e][null != t ? t : "null"] = {
                            ...r,
                            [s]: {
                                streamId: n
                            }
                        }
                    }(t, n, s, i) : u(t, n, i)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        var n;
                        let {
                            userId: s,
                            sessionId: i,
                            channelId: r,
                            guildId: l
                        } = t;
                        if (null == r && s === a) {
                            if (i !== o) return e;
                            d = {}
                        } else {
                            if (null != r || (null === (n = d[s]) || void 0 === n ? void 0 : n[null != l ? l : "null"]) == null) return e;
                            u(s, l)
                        }
                        return !0
                    }, !1)
                }
            })