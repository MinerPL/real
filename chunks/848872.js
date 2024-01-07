            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007"), n("70102"), n("424973"), n("462568");
            var i = n("714617"),
                a = n.n(i),
                l = n("446674"),
                s = n("872717"),
                r = n("913144"),
                u = n("619340"),
                o = n("376556"),
                d = n("550368"),
                c = n("47319"),
                _ = n("102985"),
                E = n("49111");
            let f = e => "https://youtube.com/watch?v=".concat(e),
                h = /live_user_(.*)-\{width\}/,
                p = null,
                T = 0,
                C = null,
                m = new Set,
                S = {};

            function I(e, t, n) {
                return s.default.get({
                    url: "".concat("https://api.twitch.tv/helix").concat(e),
                    query: t,
                    headers: {
                        "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s",
                        Authorization: "Bearer ".concat(n)
                    }
                })
            }
            async function g(e, t) {
                let n = S[e];
                if (null != n) return n;
                let {
                    body: {
                        data: i
                    }
                } = await I("/games", {
                    id: e
                }, t), a = i[0].name;
                return S[e] = a, a
            }
            let A = new class e {
                start() {
                    !this._started && (this._started = !0, c.default.isFetching() ? u.default.fetch() : this._check())
                }
                stop() {
                    this._started = !1, C = null, T = 0, null != this._nextCheck && clearTimeout(this._nextCheck), r.default.dispatch({
                        type: "STREAMING_UPDATE",
                        stream: null
                    })
                }
                async _checkTwitch(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
                    try {
                        var n, i, a, l, s;
                        let {
                            body: {
                                data: r
                            }
                        } = await I("/streams", {
                            user_id: e.id,
                            first: 1
                        }, t), u = r[0];
                        if (null == u || "live" !== u.type) throw Error("no stream");
                        let {
                            thumbnail_url: c,
                            game_id: _,
                            title: f
                        } = u, p = {
                            large_image: null != c && null !== (i = (0, d.getAssetFromImageURL)(E.PlatformTypes.TWITCH, c)) && void 0 !== i ? i : void 0
                        }, T = await g(_, t), C = o.default.get(E.PlatformTypes.TWITCH);
                        let m = null !== (l = c, a = null === (s = h.exec(l)) || void 0 === s ? void 0 : s[1]) && void 0 !== a ? a : e.name;
                        return {
                            url: null === (n = C.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(C, {
                                id: e.id,
                                name: m
                            }),
                            name: C.name,
                            assets: p,
                            details: f,
                            state: T
                        }
                    } catch (n) {
                        if (401 === n.status && null == t) return u.default.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
                        return null
                    }
                }
                async _checkYouTube(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (C = null, e.revoked || m.has(e.id)) return null;
                    try {
                        var n;
                        let {
                            body: {
                                items: i
                            }
                        } = await s.default.get({
                            url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                            query: {
                                part: "id,snippet",
                                broadcastStatus: "active",
                                broadcastType: "all"
                            },
                            headers: {
                                Authorization: "Bearer ".concat(null != t ? t : e.accessToken)
                            },
                            oldFormErrors: !0
                        });
                        if (i.length < 1) throw Error("no stream");
                        let {
                            id: a,
                            snippet: {
                                title: l,
                                thumbnails: r
                            }
                        } = i[0], u = {
                            large_image: null !== (n = (0, d.getAssetFromImageURL)(E.PlatformTypes.YOUTUBE, r.high.url)) && void 0 !== n ? n : void 0
                        };
                        return C = {
                            url: f(a),
                            name: o.default.get(E.PlatformTypes.YOUTUBE).name,
                            details: l,
                            assets: u
                        }
                    } catch (n) {
                        if (401 === n.status && null == t) return u.default.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
                        return 403 === n.status && m.add(e.id), null
                    }
                }
                _check() {
                    if (!this._started) return;
                    let e = c.default.getAccounts();
                    if (null == e) return;
                    null != this._nextCheck && clearTimeout(this._nextCheck);
                    let t = [E.PlatformTypes.TWITCH],
                        n = Date.now();
                    T <= n && (t.push(E.PlatformTypes.YOUTUBE), T = n + 3e5);
                    let i = e.filter(e => t.includes(e.type)).map(e => e.type === E.PlatformTypes.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e));
                    Promise.allSettled(i).then(e => {
                        if (this._started) {
                            var t;
                            let n = null === (t = e.find(e => "fulfilled" === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
                            null == n && null != C && (n = C), r.default.dispatch({
                                type: "STREAMING_UPDATE",
                                stream: n
                            })
                        }
                        this._scheduleCheck()
                    })
                }
                _scheduleCheck() {
                    this._started && (this._nextCheck = setTimeout(() => this._check(), 6e4))
                }
                constructor() {
                    this._started = !1
                }
            };

            function N() {
                _.default.enabled ? A.start() : A.stop()
            }
            class O extends l.default.Store {
                initialize() {
                    N(), this.waitFor(c.default), this.syncWith([_.default], N)
                }
                getStream() {
                    return p
                }
            }
            O.displayName = "ExternalStreamingStore";
            var R = new O(r.default, {
                STREAMING_UPDATE: function(e) {
                    var t;
                    if (a(e.stream, p)) return !1;
                    p = null !== (t = e.stream) && void 0 !== t ? t : null
                },
                USER_CONNECTIONS_UPDATE: () => A._check()
            })