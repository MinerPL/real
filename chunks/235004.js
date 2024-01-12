            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007"), n("424973"), n("834022");
            var s, i, r = n("917351"),
                a = n.n(r),
                o = n("446674"),
                d = n("913144"),
                u = n("845579"),
                l = n("374363"),
                f = n("697218"),
                _ = n("599110"),
                c = n("829536"),
                g = n("846325"),
                m = n("49111"),
                h = n("397336");
            (i = s || (s = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let v = new Map,
                E = new Map,
                p = new Set,
                y = 0,
                T = 0,
                C = new Set,
                S = new Map,
                I = !1;

            function A(e) {
                let {
                    sound: t
                } = e, n = v.get(t.guildId), s = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != s && -1 !== s ? (n[s] = t, v.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), v.set(t.guildId, [...n]))
            }
            let D = a.debounce(e => {
                _.default.track(m.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, c.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function N(e) {
                var t, n;
                let s = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(s)) t.soundboardMuted ? p.add(e) : p.delete(e);
                for (let e of p.keys()) null == s[e] && p.delete(e)
            }
            class O extends o.default.Store {
                initialize() {
                    this.waitFor(l.default), N(l.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(v),
                        favoritedSoundIds: Array.from(C),
                        localSoundboardMutes: Array.from(p)
                    }
                }
                getSounds() {
                    return v
                }
                getSoundsForGuild(e) {
                    return v.get(e)
                }
                getSound(e, t) {
                    var n;
                    let s = null !== (n = v.get(e)) && void 0 !== n ? n : [];
                    return s.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(v.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return 1 === T
                }
                isFetchingDefaultSounds() {
                    return 1 === y
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return 0 === y
                }
                hasFetchedDefaultSounds() {
                    return 2 === y
                }
                isUserPlayingSounds(e) {
                    let t = S.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != E.get(e)
                }
                isFavoriteSound(e) {
                    return C.has(e)
                }
                getFavorites() {
                    return C
                }
                isLocalSoundboardMuted(e) {
                    return p.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return I
                }
                hasFetchedAllSounds() {
                    return 2 === T && 2 === y
                }
            }
            O.displayName = "SoundboardStore";
            var b = new O(d.default, {
                LOGOUT: function() {
                    v.clear(), E.clear(), S.clear(), I = !1, T = 0, y = 0
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    T = 1
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: A,
                GUILD_SOUNDBOARD_SOUND_UPDATE: A,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    v.delete(t);
                    let s = v.get(n),
                        i = null == s ? void 0 : s.findIndex(e => e.soundId === t);
                    null != s && null != i && !(i < 0) && (s.splice(i, 1), v.set(n, [...s]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, s;
                    let {
                        soundId: i,
                        userId: r
                    } = e, a = (null !== (n = E.get(i)) && void 0 !== n ? n : 0) + 1, o = (null !== (s = S.get(r)) && void 0 !== s ? s : 0) + 1;
                    E.set(i, a), S.set(r, o), r !== (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (I = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: s,
                        userId: i
                    } = e, r = (null !== (t = E.get(s)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = S.get(i)) && void 0 !== n ? n : 0) - 1;
                    r <= 0 ? E.delete(s) : E.set(s, r), a <= 0 ? S.delete(i) : S.set(i, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    D(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    E.clear(), S.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: s
                    } = t;
                    if (n === h.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, r;
                        C = new Set(null !== (r = null == s ? void 0 : null === (i = s.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== r ? r : [])
                    } else n === h.UserSettingsTypes.PRELOADED_USER_SETTINGS && N(s)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    y = 1
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    v.set(g.DEFAULT_SOUND_GUILD_ID, t), y = 2
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
                        v.set(t, n)
                    }), T = 2
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    v.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    p.has(t) ? p.delete(t) : p.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    v = new Map(Object.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), p = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    v.set(t, n)
                }
            })