            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007"), n("424973"), n("834022");
            var r, i, a = n("917351"),
                o = n.n(a),
                s = n("446674"),
                l = n("913144"),
                u = n("845579"),
                d = n("374363"),
                c = n("697218"),
                _ = n("599110"),
                E = n("829536"),
                f = n("846325"),
                I = n("49111"),
                A = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let S = new Map,
                h = new Map,
                R = new Set,
                N = 0,
                p = 0,
                T = new Set,
                g = new Map,
                O = !1;

            function D(e) {
                let {
                    sound: t
                } = e, n = S.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, S.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), S.set(t.guildId, [...n]))
            }
            let m = o.debounce(e => {
                _.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, E.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function v(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? R.add(e) : R.delete(e);
                for (let e of R.keys()) null == r[e] && R.delete(e)
            }
            class C extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), v(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(S),
                        favoritedSoundIds: Array.from(T),
                        localSoundboardMutes: Array.from(R)
                    }
                }
                getSounds() {
                    return S
                }
                getSoundsForGuild(e) {
                    return S.get(e)
                }
                getSound(e, t) {
                    var n;
                    let r = null !== (n = S.get(e)) && void 0 !== n ? n : [];
                    return r.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(S.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return 1 === p
                }
                isFetchingDefaultSounds() {
                    return 1 === N
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return 0 === N
                }
                hasFetchedDefaultSounds() {
                    return 2 === N
                }
                isUserPlayingSounds(e) {
                    let t = g.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != h.get(e)
                }
                isFavoriteSound(e) {
                    return T.has(e)
                }
                getFavorites() {
                    return T
                }
                isLocalSoundboardMuted(e) {
                    return R.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return O
                }
                hasFetchedAllSounds() {
                    return 2 === p && 2 === N
                }
            }
            C.displayName = "SoundboardStore";
            var L = new C(l.default, {
                LOGOUT: function() {
                    S.clear(), h.clear(), g.clear(), O = !1, p = 0, N = 0
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    p = 1
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: D,
                GUILD_SOUNDBOARD_SOUND_UPDATE: D,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    S.delete(t);
                    let r = S.get(n),
                        i = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != i && !(i < 0) && (r.splice(i, 1), S.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: i,
                        userId: a
                    } = e, o = (null !== (n = h.get(i)) && void 0 !== n ? n : 0) + 1, s = (null !== (r = g.get(a)) && void 0 !== r ? r : 0) + 1;
                    h.set(i, o), g.set(a, s), a !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (O = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: i
                    } = e, a = (null !== (t = h.get(r)) && void 0 !== t ? t : 0) - 1, o = (null !== (n = g.get(i)) && void 0 !== n ? n : 0) - 1;
                    a <= 0 ? h.delete(r) : h.set(r, a), o <= 0 ? g.delete(i) : g.set(i, o)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    m(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    h.clear(), g.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === A.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, a;
                        T = new Set(null !== (a = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== a ? a : [])
                    } else n === A.UserSettingsTypes.PRELOADED_USER_SETTINGS && v(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    N = 1
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    S.set(f.DEFAULT_SOUND_GUILD_ID, t), N = 2
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        S.set(t, n)
                    }), p = 2
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    S.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    R.has(t) ? R.delete(t) : R.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    S = new Map(Object.entries(t.soundboardSounds)), T = new Set(t.favoritedSoundIds), R = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    S.set(t, n)
                }
            })