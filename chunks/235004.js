            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("222007"), n("424973"), n("834022");
            var l, i, r = n("917351"),
                s = n.n(r),
                a = n("446674"),
                o = n("913144"),
                u = n("845579"),
                d = n("374363"),
                c = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                f = n("846325"),
                I = n("49111"),
                h = n("397336");
            (i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let g = new Map,
                N = new Map,
                T = new Set,
                A = 0,
                p = 0,
                S = new Set,
                m = new Map,
                v = !1;

            function C(e) {
                let {
                    sound: t
                } = e, n = g.get(t.guildId), l = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != l && -1 !== l ? (n[l] = t, g.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), g.set(t.guildId, [...n]))
            }
            let R = s.debounce(e => {
                E.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function L(e) {
                var t, n;
                let l = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(l)) t.soundboardMuted ? T.add(e) : T.delete(e);
                for (let e of T.keys()) null == l[e] && T.delete(e)
            }
            class O extends a.default.Store {
                initialize() {
                    this.waitFor(d.default), L(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(g),
                        favoritedSoundIds: Array.from(S),
                        localSoundboardMutes: Array.from(T)
                    }
                }
                getSounds() {
                    return g
                }
                getSoundsForGuild(e) {
                    return g.get(e)
                }
                getSound(e, t) {
                    var n;
                    let l = null !== (n = g.get(e)) && void 0 !== n ? n : [];
                    return l.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(g.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return 1 === p
                }
                isFetchingDefaultSounds() {
                    return 1 === A
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return 0 === A
                }
                hasFetchedDefaultSounds() {
                    return 2 === A
                }
                isUserPlayingSounds(e) {
                    let t = m.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != N.get(e)
                }
                isFavoriteSound(e) {
                    return S.has(e)
                }
                getFavorites() {
                    return S
                }
                isLocalSoundboardMuted(e) {
                    return T.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return v
                }
                hasFetchedAllSounds() {
                    return 2 === p && 2 === A
                }
            }
            O.displayName = "SoundboardStore";
            var D = new O(o.default, {
                LOGOUT: function() {
                    g.clear(), N.clear(), m.clear(), v = !1, p = 0, A = 0
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    p = 1
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: C,
                GUILD_SOUNDBOARD_SOUND_UPDATE: C,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    g.delete(t);
                    let l = g.get(n),
                        i = null == l ? void 0 : l.findIndex(e => e.soundId === t);
                    null != l && null != i && !(i < 0) && (l.splice(i, 1), g.set(n, [...l]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, l;
                    let {
                        soundId: i,
                        userId: r
                    } = e, s = (null !== (n = N.get(i)) && void 0 !== n ? n : 0) + 1, a = (null !== (l = m.get(r)) && void 0 !== l ? l : 0) + 1;
                    N.set(i, s), m.set(r, a), r !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (v = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: l,
                        userId: i
                    } = e, r = (null !== (t = N.get(l)) && void 0 !== t ? t : 0) - 1, s = (null !== (n = m.get(i)) && void 0 !== n ? n : 0) - 1;
                    r <= 0 ? N.delete(l) : N.set(l, r), s <= 0 ? m.delete(i) : m.set(i, s)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    R(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    N.clear(), m.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: l
                    } = t;
                    if (n === h.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, r;
                        S = new Set(null !== (r = null == l ? void 0 : null === (i = l.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== r ? r : [])
                    } else n === h.UserSettingsTypes.PRELOADED_USER_SETTINGS && L(l)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    A = 1
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    g.set(f.DEFAULT_SOUND_GUILD_ID, t), A = 2
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
                        g.set(t, n)
                    }), p = 2
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    g.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    T.has(t) ? T.delete(t) : T.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    g = new Map(Object.entries(t.soundboardSounds)), S = new Set(t.favoritedSoundIds), T = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    g.set(t, n)
                }
            })