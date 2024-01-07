            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("872717"),
                r = n("913144"),
                u = n("42203"),
                o = n("18494"),
                d = n("162771"),
                c = n("49111");
            let _ = {},
                E = {};

            function f() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default.getChannelId(),
                    n = u.default.getChannel(t);
                if (null != n && null == n.getGuildId() && null != t && (null == _[t] || e)) {
                    var i;
                    return _[t] = null !== (i = _[t]) && void 0 !== i ? i : {
                        channelId: t,
                        ringing: []
                    }, r.default.dispatch({
                        type: "CALL_CONNECT",
                        channelId: t
                    }), !0
                }
                return !1
            }
            class h extends l.default.Store {
                initialize() {
                    this.waitFor(d.default, o.default)
                }
                getCall(e) {
                    return _[e]
                }
                getCalls() {
                    return Object.values(_)
                }
                getMessageId(e) {
                    let t = this.getCall(e);
                    return null != t ? t.messageId : null
                }
                isCallActive(e, t) {
                    let n = _[e];
                    return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
                }
                isCallUnavailable(e) {
                    let t = _[e];
                    return null != t && t.unavailable
                }
                getInternalState() {
                    return {
                        calls: _,
                        enqueuedRings: E
                    }
                }
            }
            h.displayName = "CallStore";
            var p = new h(r.default, {
                CONNECTION_OPEN: function() {
                    return f(!0)
                },
                CONNECTION_CLOSED: function() {
                    _ = {}, E = {}
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        callStoreInternalState: t
                    } = e;
                    _ = {
                        ...t.calls
                    }, E = {
                        ...t.enqueuedRings
                    }
                },
                CONNECTION_RESUMED: function() {
                    return f(!0)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return f(!1, t)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null != E[t.id] && delete E[t.id], null == _[t.id]) return !1;
                    delete _[t.id]
                },
                CALL_CREATE: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        region: i,
                        ringing: a
                    } = e;
                    if (_[t] = {
                            channelId: t,
                            messageId: n,
                            region: i,
                            ringing: a,
                            unavailable: !1,
                            regionUpdated: !1
                        }, null != E[t]) {
                        let e = E[t];
                        delete E[t], 1 !== e.indexOf("all") && (e = null), s.default.post({
                            url: c.Endpoints.CALL_RING(t),
                            body: {
                                recipients: e
                            },
                            oldFormErrors: !0
                        })
                    }
                },
                CALL_UPDATE: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        region: i,
                        ringing: a
                    } = e, l = _[t], s = null != l && (l.regionUpdated || l.region !== i);
                    _[t] = {
                        ..._[t],
                        messageId: n,
                        region: i,
                        ringing: a,
                        regionUpdated: s
                    }
                },
                CALL_DELETE: function(e) {
                    let {
                        channelId: t,
                        unavailable: n
                    } = e, i = _[t];
                    !0 === n && null != i ? _[t] = {
                        ...i,
                        unavailable: n
                    } : _[t] = {
                        channelId: t,
                        ringing: [],
                        messageId: null,
                        region: null,
                        regionUpdated: !1,
                        unavailable: n
                    }, null != E[t] && delete E[t]
                },
                CALL_ENQUEUE_RING: function(e) {
                    var t;
                    let {
                        channelId: n,
                        recipients: i
                    } = e;
                    E[n] = a.union(null !== (t = E[n]) && void 0 !== t ? t : [], null != i ? i : ["all"])
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    null == t && (E = {})
                }
            })