            "use strict";
            n.r(t), n.d(t, {
                SpotifyAPI: function() {
                    return _
                },
                getAccessToken: function() {
                    return E
                },
                subscribePlayerStateNotifications: function() {
                    return function e(t, n, i) {
                        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                        return _.put(t, n, {
                            url: o.SpotifyEndpoints.NOTIFICATIONS_PLAYER,
                            query: {
                                connection_id: i
                            }
                        }).catch(s => l <= 0 ? Promise.reject(s) : (0, a.timeoutPromise)(5e3).then(() => e(t, n, i, l - 1)))
                    }
                },
                getProfile: function() {
                    return f
                },
                getDevices: function() {
                    return h
                },
                play: function() {
                    return p
                },
                pause: function() {
                    return T
                },
                fetchIsSpotifyProtocolRegistered: function() {
                    return C
                },
                setActiveDevice: function() {
                    return m
                }
            }), n("860677");
            var i = n("872717"),
                a = n("862337"),
                l = n("913144"),
                s = n("269180"),
                r = n("773336"),
                u = n("155815"),
                o = n("450484"),
                d = n("49111");

            function c(e, t, n, i) {
                let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                return e(i = {
                    ...i,
                    headers: {
                        authorization: "Bearer ".concat(n)
                    }
                }).then(e => 202 === e.status ? Promise.reject(e) : e).catch(n => {
                    let s = !0 !== i.onlyRetryOnAuthorizationErrors && 202 === n.status;
                    return (401 === n.status || s) && l > 0 ? (202 === n.status ? (0, a.timeoutPromise)(5e3) : Promise.resolve()).then(() => E(t)).then(n => {
                        let {
                            body: {
                                access_token: a
                            }
                        } = n;
                        return c(e, t, a, i, l - 1)
                    }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(n)
                })
            }
            let _ = {
                get: c.bind(null, i.default.get),
                put: c.bind(null, i.default.put)
            };

            function E(e) {
                return i.default.get({
                    url: d.Endpoints.CONNECTION_ACCESS_TOKEN(d.PlatformTypes.SPOTIFY, e),
                    oldFormErrors: !0
                }).catch(t => {
                    if (401 === t.status) l.default.dispatch({
                        type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
                        accountId: e
                    });
                    else if (429 === t.status) {
                        let n = 1e3 * t.headers["retry-after"],
                            i = isNaN(n) || 0 === n ? 5e3 : n;
                        return (0, a.timeoutPromise)(i).then(() => E(e))
                    }
                    return Promise.reject(t)
                }).then(t => {
                    let {
                        access_token: n
                    } = t.body;
                    return l.default.dispatch({
                        type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
                        accountId: e,
                        accessToken: n
                    }), t
                })
            }

            function f(e, t) {
                return _.get(e, t, {
                    url: o.SpotifyEndpoints.PROFILE
                }).then(t => (l.default.dispatch({
                    type: "SPOTIFY_PROFILE_UPDATE",
                    accountId: e,
                    isPremium: "premium" === t.body.product
                }), t))
            }

            function h(e, t) {
                return _.get(e, t, {
                    url: o.SpotifyEndpoints.PLAYER_DEVICES
                }).then(t => (t.body && l.default.dispatch({
                    type: "SPOTIFY_SET_DEVICES",
                    accountId: e,
                    devices: t.body.devices
                }), t))
            }

            function p(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = o.SpotifyEndpoints.PLAYER_OPEN(o.SpotifyResourceTypes.TRACK, n, !1),
                    {
                        deviceId: s,
                        position: r,
                        contextUri: u,
                        repeat: d
                    } = i;
                return _.put(e, t, {
                    url: o.SpotifyEndpoints.PLAYER_PLAY,
                    query: {
                        device_id: s
                    },
                    body: {
                        context_uri: null != u ? u : void 0,
                        uris: null == u ? [a] : void 0,
                        offset: null != u ? {
                            uri: a
                        } : void 0,
                        position_ms: null != r ? r : 0
                    }
                }).then(n => null == d ? n : _.put(e, t, {
                    url: o.SpotifyEndpoints.PLAYER_REPEAT,
                    query: {
                        device_id: s,
                        state: d ? "context" : "off"
                    }
                })).then(e => (l.default.dispatch({
                    type: "SPOTIFY_PLAYER_PLAY",
                    id: n,
                    position: null != r ? r : 0
                }), e))
            }

            function T(e, t) {
                return _.put(e, t, {
                    url: o.SpotifyEndpoints.PLAYER_PAUSE
                }).then(e => (l.default.dispatch({
                    type: "SPOTIFY_PLAYER_PAUSE"
                }), e))
            }

            function C() {
                !u.default.isProtocolRegistered() && (0, r.isDesktop)() && s.default.isProtocolRegistered(o.SPOTIFY_APP_PROTOCOL).then(e => {
                    l.default.dispatch({
                        type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
                        isRegistered: e
                    })
                })
            }

            function m(e, t) {
                l.default.dispatch({
                    type: "SPOTIFY_SET_ACTIVE_DEVICE",
                    accountId: e,
                    deviceId: t
                })
            }