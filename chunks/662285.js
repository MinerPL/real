            "use strict";
            let i, a, l;
            n.r(t), n.d(t, {
                default: function() {
                    return eo
                }
            }), n("222007"), n("424973"), n("808653"), n("781738"), n("702976");
            var s, r, u = n("917351"),
                o = n.n(u),
                d = n("981980"),
                c = n("446674"),
                _ = n("233736"),
                E = n("862337"),
                f = n("913144"),
                h = n("899633"),
                p = n("376556"),
                T = n("823704"),
                C = n("605250"),
                m = n("271938"),
                S = n("47319"),
                I = n("603699"),
                g = n("824563"),
                A = n("568307"),
                N = n("280168"),
                O = n("800762"),
                R = n("599110"),
                y = n("550368"),
                v = n("613691"),
                M = n("450484"),
                L = n("49111");
            let D = p.default.get(L.PlatformTypes.SPOTIFY),
                U = "hm://pusher/v1/connections/";
            (r = s || (s = {})).PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED", r.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED";
            let P = {
                    MESSAGE: "message",
                    PING: "ping",
                    PONG: "pong"
                },
                b = {
                    SINGLE: "single"
                },
                G = new C.default("Spotify"),
                k = new E.Timeout,
                F = new E.Timeout,
                w = new E.Timeout,
                H = new E.Timeout,
                x = new E.Timeout,
                V = {},
                B = {},
                Y = {},
                K = !1,
                j = null;

            function W() {
                for (let e in V) {
                    let t = V[e];
                    if (!t.connected || null == B[e]) continue;
                    let n = B[e].find(e => e.is_active);
                    if (null != n) return {
                        socket: t,
                        device: n
                    }
                }
            }

            function z(e) {
                f.default.dispatch({
                    type: "SPOTIFY_PLAYER_STATE",
                    accountId: e,
                    track: null,
                    volumePercent: 0,
                    isPlaying: !1,
                    repeat: !1,
                    position: 0,
                    context: null
                })
            }

            function q(e) {
                return g.default.findActivity(e, e => null != e.party && null != e.party.id && (0, M.isSpotifyParty)(e.party.id))
            }
            let Q = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
            class X {
                get connected() {
                    return null != this.socket && Q.has(this.socket.readyState)
                }
                connect() {
                    !this.connected && !this._requestedConnect && (G.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, es(this.accountId, this.accessToken).then(() => {
                        this._requestedConnect = !1, this.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
                    }).catch(e => {
                        G.error(e), this._requestedConnect = !1, this.handleClose()
                    }))
                }
                disconnect() {
                    this._requestedDisconnect = !0, this.backoff.cancel();
                    try {
                        var e;
                        null === (e = this.socket) || void 0 === e || e.close()
                    } catch (e) {}
                }
                ping() {
                    var e;
                    this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({
                        type: P.PING
                    })))
                }
                handleOpen() {
                    G.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(3e4, () => this.ping()), (0, v.getProfile)(this.accountId, this.accessToken), (0, v.getDevices)(this.accountId, this.accessToken)
                }
                handleMessage(e) {
                    let {
                        data: t
                    } = e;
                    if ("string" != typeof t) return;
                    let {
                        type: n,
                        uri: i,
                        payloads: a
                    } = JSON.parse(t);
                    switch (n) {
                        case P.MESSAGE:
                            if ("string" == typeof i && i.startsWith(U)) this.connectionId = decodeURIComponent(i.split(U)[1]), (0, v.subscribePlayerStateNotifications)(this.accountId, this.accessToken, this.connectionId);
                            else if (Array.isArray(a)) {
                                for (let {
                                        events: e
                                    }
                                    of a)
                                    if (null != e)
                                        for (let t of e) this.handleEvent(t)
                            }
                        case P.PONG:
                    }
                }
                handleClose() {
                    if (this.pingInterval.stop(), !this._requestedDisconnect) try {
                        let e = this.backoff.fail(() => {
                            !this._requestedDisconnect && this.connect()
                        });
                        G.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
                    } catch (e) {}
                }
                handleEvent(e) {
                    let {
                        type: t,
                        event: n
                    } = e;
                    switch (t) {
                        case "PLAYER_STATE_CHANGED":
                            null != n && null != n.state && el(this.accountId, this.accessToken, n.state);
                            break;
                        case "DEVICE_STATE_CHANGED":
                            this.handleDeviceStateChange()
                    }
                }
                constructor(e, t) {
                    this._requestedDisconnect = !1, this._requestedConnect = !1, this.handleDeviceStateChange = o.throttle(() => {
                        (0, v.getDevices)(this.accountId, this.accessToken), es(this.accountId, this.accessToken)
                    }, 3e3), this.accountId = e, this.accessToken = t, this.pingInterval = new E.Interval, this.backoff = new d.default(void 0, 6e4), this.connect()
                }
            }

            function Z(e, t) {
                e in V ? (V[e].accessToken = t, G.info("Updated account access token: ".concat(e))) : (V[e] = new X(e, t), G.info("Added account: ".concat(e)))
            }

            function J(e) {
                if (!(e in V)) return;
                V[e].disconnect(), delete V[e];
                let t = Y[e];
                null != t && null != i && t.track.id === i.track.id && (i = null), delete Y[e], G.info("Removed account: ".concat(e))
            }

            function $(e, t) {
                for (let n of B[e]) n.is_active = n.id === t
            }

            function ee(e, t, n) {
                let i = W();
                if (null == i) return !1;
                let {
                    socket: l,
                    device: s
                } = i, {
                    sync_id: r,
                    party: u,
                    timestamps: o
                } = t;
                if (null == r || null == u || null == u.id || !(0, M.isSpotifyParty)(u.id)) return !1;
                let d = null != o && null != o.start ? o.start : Date.now(),
                    c = Math.max(0, Date.now() - d),
                    _ = !1,
                    E = Y[l.accountId];
                null != E && !1 === E.repeat && (_ = null), (0, v.play)(l.accountId, l.accessToken, r, {
                    position: +c,
                    deviceId: s.id,
                    repeat: _
                }), a = {
                    userId: e,
                    partyId: u.id,
                    trackId: r,
                    startTime: d
                };
                let f = "presence change";
                n && (f = "started", R.default.track(L.AnalyticEvents.SPOTIFY_LISTEN_ALONG_STARTED, {
                    party_id: u.id,
                    other_user_id: e
                })), G.info("Listen along ".concat(f, ": ").concat(l.accountId, " to ").concat(e, " playing ").concat(r, " on ").concat(s.name))
            }

            function et() {
                R.default.track(L.AnalyticEvents.SPOTIFY_LISTEN_ALONG_ENDED, {
                    party_id: null != a ? a.partyId : null,
                    other_user_id: null != a ? a.userId : null
                });
                let e = null != a ? a.trackId : null;
                a = null, G.info("Listen along stopped");
                let t = W();
                if (null == t) return;
                let {
                    socket: n
                } = t, i = Y[n.accountId];
                null != i && i.track.id === e && (0, v.pause)(n.accountId, n.accessToken)
            }

            function en() {
                let e = Object.keys(V),
                    t = S.default.getAccounts().filter(e => {
                        let {
                            type: t
                        } = e;
                        return t === L.PlatformTypes.SPOTIFY
                    });
                if (null == t) return !1;
                let n = t.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                });
                for (let t of e) !n.includes(t) && J(t);
                let a = !1;
                for (let n of t)
                    if (null != i && i.account.id === n.id && (i.account = n, a = !0), !e.includes(n.id)) {
                        if (null != n.accessToken) {
                            Z(n.id, n.accessToken);
                            continue
                        }(0, v.getAccessToken)(n.id)
                    } return a
            }

            function ei() {
                if (null == i) return;
                let e = W();
                if (null == e) return;
                let {
                    socket: t
                } = e;
                K = !0, (0, v.pause)(t.accountId, t.accessToken), R.default.track(L.AnalyticEvents.SPOTIFY_AUTO_PAUSED), G.info("Playback auto paused")
            }

            function ea(e) {
                if (e === m.default.getId()) {
                    let t = O.default.isCurrentClientInVoiceChannel(),
                        n = (0, h.getIsSpeaking)({
                            userId: e,
                            checkSoundSharing: !0,
                            checkSoundboardSounds: !1
                        });
                    t && n && null != i ? (k.start(3e4, ei, !1), F.stop()) : F.start(100, () => k.stop(), !1)
                }
                return !1
            }

            function el(e, t, n) {
                let i, a, {
                    device: l,
                    progress_ms: s,
                    is_playing: r,
                    repeat_state: u,
                    item: o,
                    context: d
                } = n;
                if (null != o && o.type === M.SpotifyResourceTypes.TRACK) {
                    let e = o.id;
                    null != o.linked_from && null != o.linked_from.id && (e = o.linked_from.id), i = {
                        id: e,
                        name: o.name,
                        duration: o.duration_ms,
                        album: {
                            id: o.album.id,
                            name: o.album.name,
                            image: o.album.images[0]
                        },
                        artists: o.artists,
                        isLocal: o.is_local || !1
                    }
                }
                if (null != l && !0 !== l.is_active && (l = {
                        ...l,
                        is_active: !0
                    }), null != d && [M.SpotifyResourceTypes.PLAYLIST, M.SpotifyResourceTypes.ALBUM].includes(d.type)) {
                    let n = eu.getPlayerState(e);
                    a = null != n && null != n.context && n.context.uri === d.uri ? Promise.resolve(n.context) : d.type === M.SpotifyResourceTypes.ALBUM ? Promise.resolve(d) : v.SpotifyAPI.get(e, t, {
                        url: d.href
                    }).then(e => {
                        let {
                            body: t
                        } = e;
                        return t
                    }).catch(e => {
                        if (e && 404 === e.status) return null;
                        throw e
                    })
                } else a = Promise.resolve(void 0);
                return a.then(t => {
                    null != t && t.type === M.SpotifyResourceTypes.PLAYLIST && !t.public && (t = null), f.default.dispatch({
                        type: "SPOTIFY_PLAYER_STATE",
                        accountId: e,
                        track: i,
                        volumePercent: null != l ? l.volume_percent : 0,
                        isPlaying: r,
                        repeat: "off" !== u,
                        position: s,
                        context: t,
                        device: l
                    })
                })
            }

            function es(e, t) {
                return v.SpotifyAPI.get(e, t, {
                    url: M.SpotifyEndpoints.PLAYER,
                    onlyRetryOnAuthorizationErrors: !0
                }).then(n => {
                    let i = n.body;
                    null != i ? el(e, t, i).then(() => n) : z(e)
                }).catch(() => z(e))
            }
            class er extends c.default.Store {
                initialize() {
                    this.waitFor(S.default, N.default), this.syncWith([g.default], () => (function() {
                        if (null == a) return !1;
                        let e = W();
                        if (null == e) return !1;
                        let {
                            userId: t
                        } = a, n = q(t);
                        if (null == n) return w.start(3e5, () => {
                            null != a && a.userId === t && (0, T.default)()
                        }), !1;
                        w.stop();
                        let {
                            sync_id: i,
                            timestamps: l,
                            party: s
                        } = n, r = null != i && a.trackId !== i, u = null != l && a.startTime !== l.start;
                        return r || u ? ee(t, n, !1) : null != s && s.id !== a.partyId && (a.partyId = s.id, !0)
                    })()), (0, v.fetchIsSpotifyProtocolRegistered)()
                }
                hasConnectedAccount() {
                    return Object.keys(V).length > 0
                }
                getActiveSocketAndDevice() {
                    return W()
                }
                getPlayableComputerDevices() {
                    let e = [];
                    for (let t in V) {
                        let n = V[t];
                        if (!n.connected || null == B[t]) continue;
                        let i = B[t].find(e => !e.is_restricted && "Computer" === e.type);
                        null != i && e.push({
                            socket: n,
                            device: i
                        })
                    }
                    return e
                }
                canPlay(e) {
                    let {
                        sync_id: t,
                        party: n
                    } = e;
                    return null != W() && null != t && null != n && null != n.id && (0, M.isSpotifyParty)(n.id)
                }
                getSyncingWith() {
                    return a
                }
                wasAutoPaused() {
                    return K
                }
                getLastPlayedTrackId() {
                    return l
                }
                getTrack() {
                    return null != i ? i.track : null
                }
                getPlayerState(e) {
                    return Y[e]
                }
                shouldShowActivity() {
                    return null != i && i.account.showActivity && !I.default.isIdle()
                }
                getActivity() {
                    let e, t, n;
                    if (null == i) return null != a ? q(a.userId) : null;
                    let {
                        track: {
                            artists: l,
                            album: s,
                            name: r,
                            id: u,
                            duration: o,
                            isLocal: d
                        },
                        startTime: c,
                        context: _
                    } = i, E = l.slice(0, 5);
                    l.length > 0 && (e = E.map(e => {
                        let {
                            name: t
                        } = e;
                        return t.replace(/;/g, "")
                    }).join("; "));
                    let f = {},
                        h = null != s.image ? (0, y.getAssetFromImageURL)(L.PlatformTypes.SPOTIFY, s.image.url) : null;
                    null != s.image && null != h && (f.large_image = h), "single" !== s.type && (f.large_text = s.name), null != _ && (t = _.uri), n = null != a && null != a.partyId ? a.partyId : "".concat(M.SPOTIFY_PARTY_PREFIX).concat(m.default.getId());
                    let p = r.length > 128 ? r.substring(0, 125) + "..." : r,
                        T = {
                            name: D.name,
                            assets: f,
                            details: p,
                            state: e,
                            timestamps: {
                                start: c,
                                end: c + o
                            },
                            party: {
                                id: n
                            }
                        };
                    return !d && (T.sync_id = u, T.flags = L.ActivityFlags.PLAY | L.ActivityFlags.SYNC, T.metadata = {
                        context_uri: t,
                        album_id: s.id,
                        artist_ids: E.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })
                    }), T
                }
            }
            er.displayName = "SpotifyStore";
            let eu = new er(f.default, {
                USER_CONNECTIONS_UPDATE: en,
                CONNECTION_OPEN: en,
                SPOTIFY_ACCOUNT_ACCESS_TOKEN: function(e) {
                    let {
                        accountId: t,
                        accessToken: n
                    } = e;
                    return Z(t, n), !1
                },
                SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function(e) {
                    let {
                        accountId: t
                    } = e;
                    J(t)
                },
                SPOTIFY_PROFILE_UPDATE: function(e) {
                    let {
                        accountId: t,
                        isPremium: n
                    } = e, i = V[t];
                    if (null == i) return !1;
                    i.isPremium = n, G.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
                },
                SPOTIFY_PLAYER_STATE: function(e) {
                    let {
                        accountId: t,
                        isPlaying: n,
                        repeat: l,
                        track: s,
                        position: r,
                        device: u,
                        context: d
                    } = e, c = !1;
                    if (null != u) {
                        if (null != B[t]) {
                            let e = B[t].find(e => {
                                let {
                                    id: t
                                } = e;
                                return t === u.id
                            });
                            null == e ? (B[t].push(u), c = !0) : !(0, _.default)(e, u) && (Object.assign(e, u), c = !0), $(t, u.id)
                        } else B[t] = [u], c = !0
                    }
                    n ? null == j || j.start(3e4, ei) : (s = null, null == j || j.stop());
                    let E = S.default.getAccount(t, L.PlatformTypes.SPOTIFY);
                    if (null == E) return c;
                    let f = Y[t],
                        h = null != s ? {
                            account: E,
                            track: s,
                            startTime: function(e, t) {
                                let n = Date.now(),
                                    i = null != e ? e.startTime : 0,
                                    a = n - t;
                                return Math.abs(a - i) > 1500 ? a : i
                            }(f, r),
                            context: d,
                            repeat: l
                        } : null,
                        p = null != u && null != a && 0 === r && !n;
                    !p && (Y[t] = h);
                    let C = i;
                    if (i = o.values(Y).find(e => null != e), ea(m.default.getId()), null == s || p ? H.stop() : H.start(s.duration - r + 5e3, () => z(E.id)), null != a && (!n && r > 0 || null == u || null != h && a.trackId !== h.track.id) ? (G.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(5e3, "ms")), x.start(5e3, () => {
                            G.info("Stopping listening along"), (0, T.default)(), z(E.id)
                        })) : x.isStarted() && (G.info("Listen along stop cancelled as playback of track resumed"), x.stop()), C === i || null == f && null == h || null != f && null != h && f.track.id === h.track.id && f.startTime === h.startTime) return c;
                    null != s && R.default.track(L.AnalyticEvents.ACTIVITY_UPDATED, {
                        party_platform: L.PlatformTypes.SPOTIFY,
                        track_id: s.id,
                        has_images: !0
                    })
                },
                SPOTIFY_PLAYER_PLAY: function(e) {
                    let {
                        id: t
                    } = e;
                    l = t
                },
                ACTIVITY_PLAY: function(e) {
                    let t, {
                            activity: n,
                            metadata: i
                        } = e,
                        l = W();
                    if (null == l) return !1;
                    let {
                        socket: s,
                        device: r
                    } = l, {
                        sync_id: u,
                        party: o
                    } = n;
                    if (null == u || null == o || null == o.id || !(0, M.isSpotifyParty)(o.id)) return !1;
                    null != i && (t = i.context_uri), null != a && et(), (0, v.play)(s.accountId, s.accessToken, u, {
                        contextUri: t,
                        deviceId: r.id
                    }), G.info("Play started: ".concat(s.accountId, " playing ").concat(u, " on ").concat(r.name))
                },
                ACTIVITY_SYNC: function(e) {
                    let {
                        activity: t,
                        userId: n
                    } = e;
                    return ee(n, t, !0)
                },
                ACTIVITY_SYNC_STOP: et,
                SPOTIFY_SET_DEVICES: function(e) {
                    let {
                        accountId: t,
                        devices: n
                    } = e;
                    B[t] = n, G.info("Devices updated for ".concat(t, ":"), n)
                },
                SPOTIFY_SET_ACTIVE_DEVICE: function(e) {
                    let {
                        accountId: t,
                        deviceId: n
                    } = e;
                    $(t, n)
                },
                SPEAKING: function(e) {
                    let {
                        userId: t
                    } = e;
                    return ea(t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            userId: n
                        } = t;
                        return ea(n) || e
                    }, !1)
                },
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
                    let {
                        settings: t
                    } = e;
                    if ((null == t ? void 0 : t.desktopSettings) != null) {
                        null == j || j.stop();
                        let {
                            sourceId: e,
                            sound: n
                        } = null == t ? void 0 : t.desktopSettings, i = null != e && A.default.getObservedAppNameForWindow(e) === D.name;
                        i && n ? (j = new E.Interval).start(3e4, ei) : j = null
                    }
                }
            });
            var eo = eu