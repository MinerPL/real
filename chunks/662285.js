            "use strict";
            let s, i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return eu
                }
            }), n("222007"), n("424973"), n("808653"), n("781738"), n("702976");
            var a, o, d = n("917351"),
                u = n.n(d),
                l = n("981980"),
                f = n("446674"),
                _ = n("233736"),
                c = n("862337"),
                g = n("913144"),
                m = n("899633"),
                h = n("376556"),
                v = n("823704"),
                E = n("605250"),
                p = n("271938"),
                y = n("47319"),
                T = n("603699"),
                C = n("824563"),
                S = n("568307"),
                I = n("280168"),
                A = n("800762"),
                D = n("599110"),
                N = n("550368"),
                O = n("613691"),
                b = n("450484"),
                P = n("49111");
            let V = h.default.get(P.PlatformTypes.SPOTIFY),
                R = "hm://pusher/v1/connections/";
            (o = a || (a = {})).PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED", o.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED";
            let k = {
                    MESSAGE: "message",
                    PING: "ping",
                    PONG: "pong"
                },
                M = {
                    SINGLE: "single"
                },
                w = new E.default("Spotify"),
                L = new c.Timeout,
                U = new c.Timeout,
                G = new c.Timeout,
                F = new c.Timeout,
                x = new c.Timeout,
                B = {},
                H = {},
                Y = {},
                j = !1,
                K = null;

            function W() {
                for (let e in B) {
                    let t = B[e];
                    if (!t.connected || null == H[e]) continue;
                    let n = H[e].find(e => e.is_active);
                    if (null != n) return {
                        socket: t,
                        device: n
                    }
                }
            }

            function z(e) {
                g.default.dispatch({
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
                return C.default.findActivity(e, e => null != e.party && null != e.party.id && (0, b.isSpotifyParty)(e.party.id))
            }
            let X = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
            class Q {
                get connected() {
                    return null != this.socket && X.has(this.socket.readyState)
                }
                connect() {
                    !this.connected && !this._requestedConnect && (w.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, ea(this.accountId, this.accessToken).then(() => {
                        this._requestedConnect = !1, this.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
                    }).catch(e => {
                        w.error(e), this._requestedConnect = !1, this.handleClose()
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
                        type: k.PING
                    })))
                }
                handleOpen() {
                    w.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(3e4, () => this.ping()), (0, O.getProfile)(this.accountId, this.accessToken), (0, O.getDevices)(this.accountId, this.accessToken)
                }
                handleMessage(e) {
                    let {
                        data: t
                    } = e;
                    if ("string" != typeof t) return;
                    let {
                        type: n,
                        uri: s,
                        payloads: i
                    } = JSON.parse(t);
                    switch (n) {
                        case k.MESSAGE:
                            if ("string" == typeof s && s.startsWith(R)) this.connectionId = decodeURIComponent(s.split(R)[1]), (0, O.subscribePlayerStateNotifications)(this.accountId, this.accessToken, this.connectionId);
                            else if (Array.isArray(i)) {
                                for (let {
                                        events: e
                                    }
                                    of i)
                                    if (null != e)
                                        for (let t of e) this.handleEvent(t)
                            }
                        case k.PONG:
                    }
                }
                handleClose() {
                    if (this.pingInterval.stop(), !this._requestedDisconnect) try {
                        let e = this.backoff.fail(() => {
                            !this._requestedDisconnect && this.connect()
                        });
                        w.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
                    } catch (e) {}
                }
                handleEvent(e) {
                    let {
                        type: t,
                        event: n
                    } = e;
                    switch (t) {
                        case "PLAYER_STATE_CHANGED":
                            null != n && null != n.state && er(this.accountId, this.accessToken, n.state);
                            break;
                        case "DEVICE_STATE_CHANGED":
                            this.handleDeviceStateChange()
                    }
                }
                constructor(e, t) {
                    this._requestedDisconnect = !1, this._requestedConnect = !1, this.handleDeviceStateChange = u.throttle(() => {
                        (0, O.getDevices)(this.accountId, this.accessToken), ea(this.accountId, this.accessToken)
                    }, 3e3), this.accountId = e, this.accessToken = t, this.pingInterval = new c.Interval, this.backoff = new l.default(void 0, 6e4), this.connect()
                }
            }

            function Z(e, t) {
                e in B ? (B[e].accessToken = t, w.info("Updated account access token: ".concat(e))) : (B[e] = new Q(e, t), w.info("Added account: ".concat(e)))
            }

            function J(e) {
                if (!(e in B)) return;
                B[e].disconnect(), delete B[e];
                let t = Y[e];
                null != t && null != s && t.track.id === s.track.id && (s = null), delete Y[e], w.info("Removed account: ".concat(e))
            }

            function $(e, t) {
                for (let n of H[e]) n.is_active = n.id === t
            }

            function ee(e, t, n) {
                let s = W();
                if (null == s) return !1;
                let {
                    socket: r,
                    device: a
                } = s, {
                    sync_id: o,
                    party: d,
                    timestamps: u
                } = t;
                if (null == o || null == d || null == d.id || !(0, b.isSpotifyParty)(d.id)) return !1;
                let l = null != u && null != u.start ? u.start : Date.now(),
                    f = Math.max(0, Date.now() - l),
                    _ = !1,
                    c = Y[r.accountId];
                null != c && !1 === c.repeat && (_ = null), (0, O.play)(r.accountId, r.accessToken, o, {
                    position: +f,
                    deviceId: a.id,
                    repeat: _
                }), i = {
                    userId: e,
                    partyId: d.id,
                    trackId: o,
                    startTime: l
                };
                let g = "presence change";
                n && (g = "started", D.default.track(P.AnalyticEvents.SPOTIFY_LISTEN_ALONG_STARTED, {
                    party_id: d.id,
                    other_user_id: e
                })), w.info("Listen along ".concat(g, ": ").concat(r.accountId, " to ").concat(e, " playing ").concat(o, " on ").concat(a.name))
            }

            function et() {
                D.default.track(P.AnalyticEvents.SPOTIFY_LISTEN_ALONG_ENDED, {
                    party_id: null != i ? i.partyId : null,
                    other_user_id: null != i ? i.userId : null
                });
                let e = null != i ? i.trackId : null;
                i = null, w.info("Listen along stopped");
                let t = W();
                if (null == t) return;
                let {
                    socket: n
                } = t, s = Y[n.accountId];
                null != s && s.track.id === e && (0, O.pause)(n.accountId, n.accessToken)
            }

            function en() {
                let e = Object.keys(B),
                    t = y.default.getAccounts().filter(e => {
                        let {
                            type: t
                        } = e;
                        return t === P.PlatformTypes.SPOTIFY
                    });
                if (null == t) return !1;
                let n = t.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                });
                for (let t of e) !n.includes(t) && J(t);
                let i = !1;
                for (let n of t)
                    if (null != s && s.account.id === n.id && (s.account = n, i = !0), !e.includes(n.id)) {
                        if (null != n.accessToken) {
                            Z(n.id, n.accessToken);
                            continue
                        }(0, O.getAccessToken)(n.id)
                    } return i
            }

            function es() {
                if (null == s) return;
                let e = W();
                if (null == e) return;
                let {
                    socket: t
                } = e;
                j = !0, (0, O.pause)(t.accountId, t.accessToken), D.default.track(P.AnalyticEvents.SPOTIFY_AUTO_PAUSED), w.info("Playback auto paused")
            }

            function ei(e) {
                if (e === p.default.getId()) {
                    let t = A.default.isCurrentClientInVoiceChannel(),
                        n = (0, m.getIsSpeaking)({
                            userId: e,
                            checkSoundSharing: !0,
                            checkSoundboardSounds: !1
                        });
                    t && n && null != s ? (L.start(3e4, es, !1), U.stop()) : U.start(100, () => L.stop(), !1)
                }
                return !1
            }

            function er(e, t, n) {
                let s, i, {
                    device: r,
                    progress_ms: a,
                    is_playing: o,
                    repeat_state: d,
                    item: u,
                    context: l
                } = n;
                if (null != u && u.type === b.SpotifyResourceTypes.TRACK) {
                    let e = u.id;
                    null != u.linked_from && null != u.linked_from.id && (e = u.linked_from.id), s = {
                        id: e,
                        name: u.name,
                        duration: u.duration_ms,
                        album: {
                            id: u.album.id,
                            name: u.album.name,
                            image: u.album.images[0]
                        },
                        artists: u.artists,
                        isLocal: u.is_local || !1
                    }
                }
                if (null != r && !0 !== r.is_active && (r = {
                        ...r,
                        is_active: !0
                    }), null != l && [b.SpotifyResourceTypes.PLAYLIST, b.SpotifyResourceTypes.ALBUM].includes(l.type)) {
                    let n = ed.getPlayerState(e);
                    i = null != n && null != n.context && n.context.uri === l.uri ? Promise.resolve(n.context) : l.type === b.SpotifyResourceTypes.ALBUM ? Promise.resolve(l) : O.SpotifyAPI.get(e, t, {
                        url: l.href
                    }).then(e => {
                        let {
                            body: t
                        } = e;
                        return t
                    }).catch(e => {
                        if (e && 404 === e.status) return null;
                        throw e
                    })
                } else i = Promise.resolve(void 0);
                return i.then(t => {
                    null != t && t.type === b.SpotifyResourceTypes.PLAYLIST && !t.public && (t = null), g.default.dispatch({
                        type: "SPOTIFY_PLAYER_STATE",
                        accountId: e,
                        track: s,
                        volumePercent: null != r ? r.volume_percent : 0,
                        isPlaying: o,
                        repeat: "off" !== d,
                        position: a,
                        context: t,
                        device: r
                    })
                })
            }

            function ea(e, t) {
                return O.SpotifyAPI.get(e, t, {
                    url: b.SpotifyEndpoints.PLAYER,
                    onlyRetryOnAuthorizationErrors: !0
                }).then(n => {
                    let s = n.body;
                    null != s ? er(e, t, s).then(() => n) : z(e)
                }).catch(() => z(e))
            }
            class eo extends f.default.Store {
                initialize() {
                    this.waitFor(y.default, I.default), this.syncWith([C.default], () => (function() {
                        if (null == i) return !1;
                        let e = W();
                        if (null == e) return !1;
                        let {
                            userId: t
                        } = i, n = q(t);
                        if (null == n) return G.start(3e5, () => {
                            null != i && i.userId === t && (0, v.default)()
                        }), !1;
                        G.stop();
                        let {
                            sync_id: s,
                            timestamps: r,
                            party: a
                        } = n, o = null != s && i.trackId !== s, d = null != r && i.startTime !== r.start;
                        return o || d ? ee(t, n, !1) : null != a && a.id !== i.partyId && (i.partyId = a.id, !0)
                    })()), (0, O.fetchIsSpotifyProtocolRegistered)()
                }
                hasConnectedAccount() {
                    return Object.keys(B).length > 0
                }
                getActiveSocketAndDevice() {
                    return W()
                }
                getPlayableComputerDevices() {
                    let e = [];
                    for (let t in B) {
                        let n = B[t];
                        if (!n.connected || null == H[t]) continue;
                        let s = H[t].find(e => !e.is_restricted && "Computer" === e.type);
                        null != s && e.push({
                            socket: n,
                            device: s
                        })
                    }
                    return e
                }
                canPlay(e) {
                    let {
                        sync_id: t,
                        party: n
                    } = e;
                    return null != W() && null != t && null != n && null != n.id && (0, b.isSpotifyParty)(n.id)
                }
                getSyncingWith() {
                    return i
                }
                wasAutoPaused() {
                    return j
                }
                getLastPlayedTrackId() {
                    return r
                }
                getTrack() {
                    return null != s ? s.track : null
                }
                getPlayerState(e) {
                    return Y[e]
                }
                shouldShowActivity() {
                    return null != s && s.account.showActivity && !T.default.isIdle()
                }
                getActivity() {
                    let e, t, n;
                    if (null == s) return null != i ? q(i.userId) : null;
                    let {
                        track: {
                            artists: r,
                            album: a,
                            name: o,
                            id: d,
                            duration: u,
                            isLocal: l
                        },
                        startTime: f,
                        context: _
                    } = s, c = r.slice(0, 5);
                    r.length > 0 && (e = c.map(e => {
                        let {
                            name: t
                        } = e;
                        return t.replace(/;/g, "")
                    }).join("; "));
                    let g = {},
                        m = null != a.image ? (0, N.getAssetFromImageURL)(P.PlatformTypes.SPOTIFY, a.image.url) : null;
                    null != a.image && null != m && (g.large_image = m), "single" !== a.type && (g.large_text = a.name), null != _ && (t = _.uri), n = null != i && null != i.partyId ? i.partyId : "".concat(b.SPOTIFY_PARTY_PREFIX).concat(p.default.getId());
                    let h = o.length > 128 ? o.substring(0, 125) + "..." : o,
                        v = {
                            name: V.name,
                            assets: g,
                            details: h,
                            state: e,
                            timestamps: {
                                start: f,
                                end: f + u
                            },
                            party: {
                                id: n
                            }
                        };
                    return !l && (v.sync_id = d, v.flags = P.ActivityFlags.PLAY | P.ActivityFlags.SYNC, v.metadata = {
                        context_uri: t,
                        album_id: a.id,
                        artist_ids: c.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })
                    }), v
                }
            }
            eo.displayName = "SpotifyStore";
            let ed = new eo(g.default, {
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
                    } = e, s = B[t];
                    if (null == s) return !1;
                    s.isPremium = n, w.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
                },
                SPOTIFY_PLAYER_STATE: function(e) {
                    let {
                        accountId: t,
                        isPlaying: n,
                        repeat: r,
                        track: a,
                        position: o,
                        device: d,
                        context: l
                    } = e, f = !1;
                    if (null != d) {
                        if (null != H[t]) {
                            let e = H[t].find(e => {
                                let {
                                    id: t
                                } = e;
                                return t === d.id
                            });
                            null == e ? (H[t].push(d), f = !0) : !(0, _.default)(e, d) && (Object.assign(e, d), f = !0), $(t, d.id)
                        } else H[t] = [d], f = !0
                    }
                    n ? null == K || K.start(3e4, es) : (a = null, null == K || K.stop());
                    let c = y.default.getAccount(t, P.PlatformTypes.SPOTIFY);
                    if (null == c) return f;
                    let g = Y[t],
                        m = null != a ? {
                            account: c,
                            track: a,
                            startTime: function(e, t) {
                                let n = Date.now(),
                                    s = null != e ? e.startTime : 0,
                                    i = n - t;
                                return Math.abs(i - s) > 1500 ? i : s
                            }(g, o),
                            context: l,
                            repeat: r
                        } : null,
                        h = null != d && null != i && 0 === o && !n;
                    !h && (Y[t] = m);
                    let E = s;
                    if (s = u.values(Y).find(e => null != e), ei(p.default.getId()), null == a || h ? F.stop() : F.start(a.duration - o + 5e3, () => z(c.id)), null != i && (!n && o > 0 || null == d || null != m && i.trackId !== m.track.id) ? (w.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(5e3, "ms")), x.start(5e3, () => {
                            w.info("Stopping listening along"), (0, v.default)(), z(c.id)
                        })) : x.isStarted() && (w.info("Listen along stop cancelled as playback of track resumed"), x.stop()), E === s || null == g && null == m || null != g && null != m && g.track.id === m.track.id && g.startTime === m.startTime) return f;
                    null != a && D.default.track(P.AnalyticEvents.ACTIVITY_UPDATED, {
                        party_platform: P.PlatformTypes.SPOTIFY,
                        track_id: a.id,
                        has_images: !0
                    })
                },
                SPOTIFY_PLAYER_PLAY: function(e) {
                    let {
                        id: t
                    } = e;
                    r = t
                },
                ACTIVITY_PLAY: function(e) {
                    let t, {
                            activity: n,
                            metadata: s
                        } = e,
                        r = W();
                    if (null == r) return !1;
                    let {
                        socket: a,
                        device: o
                    } = r, {
                        sync_id: d,
                        party: u
                    } = n;
                    if (null == d || null == u || null == u.id || !(0, b.isSpotifyParty)(u.id)) return !1;
                    null != s && (t = s.context_uri), null != i && et(), (0, O.play)(a.accountId, a.accessToken, d, {
                        contextUri: t,
                        deviceId: o.id
                    }), w.info("Play started: ".concat(a.accountId, " playing ").concat(d, " on ").concat(o.name))
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
                    H[t] = n, w.info("Devices updated for ".concat(t, ":"), n)
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
                    return ei(t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            userId: n
                        } = t;
                        return ei(n) || e
                    }, !1)
                },
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
                    let {
                        settings: t
                    } = e;
                    if ((null == t ? void 0 : t.desktopSettings) != null) {
                        null == K || K.stop();
                        let {
                            sourceId: e,
                            sound: n
                        } = null == t ? void 0 : t.desktopSettings, s = null != e && S.default.getObservedAppNameForWindow(e) === V.name;
                        s && n ? (K = new c.Interval).start(3e4, es) : K = null
                    }
                }
            });
            var eu = ed