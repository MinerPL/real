            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                },
                useSearchCategories: function() {
                    return v
                }
            }), n("222007"), n("424973"), n("834022");
            var l = n("884691"),
                i = n("249654"),
                r = n("446674"),
                o = n("817963"),
                s = n("872173"),
                a = n("305961"),
                u = n("957255"),
                d = n("697218"),
                c = n("719923"),
                f = n("880342"),
                p = n("469607"),
                m = n("235004"),
                h = n("389480"),
                E = n("774473"),
                S = n("846325");

            function g(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = e.map(e => ({
                        type: h.SoundboardSoundItemType.SOUND,
                        sound: e
                    }));
                return t ? n.sort((e, t) => i.default.compare(e.sound.soundId, t.sound.soundId)) : n
            }

            function C(e, t) {
                var n;
                let l = null !== (n = t.get(S.DEFAULT_SOUND_GUILD_ID)) && void 0 !== n ? n : S.EMPTY_SOUND_LIST;
                e.push({
                    key: h.SoundboardSoundGridSectionType.DEFAULTS,
                    categoryInfo: {
                        type: h.SoundboardSoundGridSectionType.DEFAULTS
                    },
                    items: g(l)
                })
            }

            function T(e) {
                let {
                    filterOutEmptyCurrentGuild: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = (0, r.useStateFromStores)([d.default], () => d.default.getCurrentUser()), [T, v, y] = (0, r.useStateFromStoresArray)([m.default], () => [m.default.getSounds(), m.default.getFavorites(), m.default.isFetching()]), x = (0, r.useStateFromStoresArray)([p.default], () => p.default.recentlyHeardSoundIds), {
                    canSeeRecentlyHeard: I,
                    canSeeFrequentlyPlayed: N
                } = (0, f.useRecentlyHeardExperiment)({
                    location: "soundboard-useSoundGrid",
                    autoTrackExposure: !0
                }), _ = function() {
                    l.useEffect(() => {
                        s.FrecencyUserSettingsActionCreators.loadIfNecessary()
                    }, []);
                    let e = (0, r.useStateFromStores)([p.default], () => p.default.frecentlyPlayedSounds);
                    return e
                }(), A = (0, E.useSortedGuildIdsForSoundboard)(e, !1), R = (0, r.useStateFromStoresArray)([a.default], () => {
                    let e = [];
                    return A.forEach(t => {
                        let n = a.default.getGuild(t);
                        null != n && e.push(n)
                    }), e
                }), O = c.default.canUseSoundboardEverywhere(i), M = (0, r.useStateFromStores)([a.default], () => a.default.getGuild(null == e ? void 0 : e.guild_id)), k = (0, r.useStateFromStores)([u.default], () => {
                    let {
                        canCreateExpressions: e
                    } = (0, o.getManageResourcePermissions)(M);
                    return e
                }, [M]);
                return l.useMemo(() => {
                    let e = [];
                    if (n) return C(e, T), {
                        categories: e,
                        isFetching: y
                    };
                    if (! function(e, t, n, l) {
                            let i = [],
                                r = [...t, S.DEFAULT_SOUND_GUILD_ID];
                            for (let e of r) {
                                var o;
                                let t = null !== (o = n.get(e)) && void 0 !== o ? o : [];
                                for (let e of t) l.has(e.soundId) && i.push(e)
                            }
                            let s = g(i);
                            s.length > 0 && e.push({
                                key: h.SoundboardSoundGridSectionType.FAVORITES,
                                categoryInfo: {
                                    type: h.SoundboardSoundGridSectionType.FAVORITES
                                },
                                items: s
                            })
                        }(e, A, T, v), I && ! function(e, t, n) {
                            let l = Array.from(t.values()).flat(),
                                i = [];
                            for (let e of n) {
                                let t = l.find(t => t.soundId.toString() === e);
                                null != t && i.push(t)
                            }
                            let r = g(i, !1);
                            r.length > 0 && e.push({
                                key: h.SoundboardSoundGridSectionType.RECENTLY_HEARD,
                                categoryInfo: {
                                    type: h.SoundboardSoundGridSectionType.RECENTLY_HEARD
                                },
                                items: r
                            })
                        }(e, T, x), N) {
                        var l, i;
                        l = e, (i = _).length > 0 && l.push({
                            key: h.SoundboardSoundGridSectionType.FREQUENTLY_USED,
                            categoryInfo: {
                                type: h.SoundboardSoundGridSectionType.FREQUENTLY_USED
                            },
                            items: g(i, !1)
                        })
                    }
                    return ! function(e, t, n, l, i) {
                        var r;
                        if (null == t) return;
                        let o = null !== (r = l.get(t.id)) && void 0 !== r ? r : [],
                            s = g(o),
                            a = o.length < t.getMaxSoundboardSlots() && n,
                            u = 0 === s.length;
                        (a || u) && !i && s.push({
                            type: h.SoundboardSoundItemType.ADD_SOUND,
                            guild: t
                        });
                        !(i && u) && e.push({
                            categoryInfo: {
                                type: h.SoundboardSoundGridSectionType.GUILD,
                                guild: t
                            },
                            key: t.id,
                            items: s
                        })
                    }(e, M, k, T, t), !O && C(e, T), ! function(e, t, n, l) {
                        for (let r of t) {
                            var i;
                            if (r.id === n) continue;
                            let t = null !== (i = l.get(r.id)) && void 0 !== i ? i : [],
                                o = g(t);
                            o.length > 0 && e.push({
                                categoryInfo: {
                                    type: h.SoundboardSoundGridSectionType.GUILD,
                                    guild: r
                                },
                                key: r.id,
                                items: o
                            })
                        }
                    }(e, R, null == M ? void 0 : M.id, T), O && C(e, T), {
                        categories: e,
                        isFetching: y
                    }
                }, [A, T, v, x, _, N, I, M, k, t, O, R, n, y])
            }

            function v(e, t, n) {
                return l.useMemo(() => n.length > 0 ? [{
                    key: h.SoundboardSoundGridSectionType.SEARCH,
                    categoryInfo: {
                        type: h.SoundboardSoundGridSectionType.SEARCH
                    },
                    items: g(t, !1)
                }] : e, [e, n.length, t])
            }