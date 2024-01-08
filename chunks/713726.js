            "use strict";
            n.r(t), n.d(t, {
                getGameName: function() {
                    return h
                },
                startBroadcastForStream: function() {
                    return p
                },
                stopBroadcast: function() {
                    return S
                },
                fetchBroadcasterBuckets: function() {
                    return C
                },
                maybeFetchBroadcastChannels: function() {
                    return m
                }
            });
            var a = n("872717"),
                s = n("913144"),
                r = n("374014"),
                i = n("766274"),
                l = n("271938"),
                u = n("42203"),
                o = n("546463"),
                d = n("568307"),
                c = n("9759"),
                f = n("194051"),
                E = n("49111");

            function h(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
                return null != n ? n.trim() : null
            }

            function p(e, t) {
                if (null == t) return;
                let {
                    canBroadcast: n
                } = c.default.getCurrentConfig({
                    location: "start_broadcast_for_stream"
                }, {
                    autoTrackExposure: !1
                });
                if (!n) return;
                let a = (0, r.decodeStreamKey)(e),
                    {
                        ownerId: i,
                        channelId: f
                    } = a;
                if (null == i || null == f) return;
                let E = l.default.getId();
                if (i !== E) return;
                let p = l.default.getSessionId();
                if (null == p) return;
                let S = u.default.getChannel(f),
                    _ = null != S && S.isBroadcastChannel();
                if (null == S || i !== S.ownerId || !_) return;
                let C = function(e) {
                    var t;
                    let n = d.default.getGameForPID(e),
                        a = h(n),
                        s = o.default.getGameByName(a);
                    return null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "0"
                }(t);
                null != C && ! function(e) {
                    let t = l.default.getId(),
                        n = l.default.getSessionId();
                    null != t && null != n && s.default.dispatch({
                        type: "BROADCAST_START",
                        broadcast: e
                    })
                }({
                    sessionId: p,
                    userId: E,
                    applicationId: C,
                    channelId: S.id,
                    streamKey: e
                })
            }

            function S() {
                s.default.dispatch({
                    type: "BROADCAST_STOP"
                })
            }

            function _(e) {
                let t = {};
                e.forEach(e => {
                    t[e] = -1
                }), s.default.dispatch({
                    type: "BROADCASTER_BUCKETS_RECEIVED",
                    data: t
                })
            }
            async function C() {
                let e = f.default.getUserIdsToValidate();
                try {
                    let t = await a.default.get({
                        url: E.Endpoints.USER_BROADCASTS,
                        query: {
                            user_ids: e
                        }
                    });
                    if (t.ok && null != t.body) {
                        let n = {};
                        e.forEach(e => {
                            var a;
                            n[e] = null !== (a = t.body[e]) && void 0 !== a ? a : -1
                        }), s.default.dispatch({
                            type: "BROADCASTER_BUCKETS_RECEIVED",
                            data: n
                        })
                    } else _(e)
                } catch (t) {
                    _(e)
                }
            }
            async function m() {
                let e = f.default.getBroadcastsToValidateChannels(),
                    t = e.filter(e => null == e.viewers).map(e => e.channelId);
                if (0 !== t.length) try {
                    let e = await a.default.get({
                        url: E.Endpoints.BROADCAST_CHANNELS,
                        query: {
                            channel_ids: t
                        }
                    });
                    if (e.ok && null != e.body) {
                        let t = e.body,
                            n = {};
                        t.forEach(e => {
                            var t;
                            let a = f.default.getBroadcastByChannel(e.id).userId,
                                s = null !== (t = e.recipients) && void 0 !== t ? t : [];
                            n[a] = s.map(e => new i.default(e)).filter(e => e.id !== a)
                        }), s.default.dispatch({
                            type: "BROADCAST_VIEWERS_UPDATE",
                            viewers: n
                        })
                    }
                } catch (e) {}
            }