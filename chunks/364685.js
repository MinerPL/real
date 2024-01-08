            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007"), n("424973");
            var i = n("102053"),
                a = n("446674"),
                l = n("913144"),
                s = n("802493"),
                r = n("595525"),
                u = n("212084"),
                o = n("867805"),
                d = n("267567"),
                c = n("813006"),
                _ = n("778689"),
                E = n("305961"),
                f = n("161585"),
                h = n("24373"),
                p = n("49111");
            let T = 2,
                C = new Map,
                m = new Map,
                S = null,
                I = [],
                g = null,
                A = !1,
                N = new Map,
                O = (e, t) => {
                    N = new Map(N.set(e, t))
                },
                R = 1e3 * p.Durations.HOUR,
                y = () => {
                    if (0 !== T) return;
                    let e = s.default.database();
                    if (null == e) return;
                    T = 2;
                    let t = (0, r.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => i.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => u.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (_.default.isMember(e) && !N.has(e)) {
                                for (let t of n) v(t, !0, E.default.getGuild(e));
                                O(e, n)
                            }
                    }
                },
                v = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    m.set(e.id, e), t && M(e, n)
                },
                M = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == S) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: f.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, h.isStandardSticker)(e)) {
                        let t = I.find(t => t.id === e.pack_id),
                            a = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: f.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && a.push({
                            type: f.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), S.set(e.id, a)
                    } else if ((0, h.isGuildSticker)(e) && null != n) {
                        let a = o.default.getByName(n),
                            l = {
                                type: f.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            s = [i, l];
                        if (null != t) {
                            let e = (t instanceof(0, c.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && s.push({
                                type: f.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == a) {
                            S.set(e.id, s);
                            return
                        }
                        s.push({
                            type: f.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: a.surrogates
                        }), a.forEachDiversity(e => s.push({
                            type: f.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), S.set(e.id, s)
                    }
                },
                D = (e, t, n) => {
                    C.set(e.id, e);
                    let i = [...I];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), I = i
                    }(t || n) && e.stickers.forEach(e => v(e))
                },
                L = () => {
                    N.forEach((e, t) => {
                        let n = E.default.getGuild(t);
                        null != n && e.forEach(e => M(e, n))
                    }), I.forEach(e => {
                        e.stickers.forEach(e => M(e))
                    })
                };

            function U(e) {
                null != e.stickers && (e.stickers.forEach(t => v(t, !0, e)), O(e.id, e.stickers))
            }
            class P extends a.default.Store {
                initialize() {
                    this.waitFor(s.default, _.default, E.default)
                }
                get isLoaded() {
                    return 0 !== T
                }
                get stickerMetadata() {
                    return y(), null == S && (S = new Map, L()), S
                }
                get hasLoadedStickerPacks() {
                    return null != g && g + R > Date.now()
                }
                get isFetchingStickerPacks() {
                    return A
                }
                getStickerById(e) {
                    return !m.has(e) && y(), m.get(e)
                }
                getStickerPack(e) {
                    return C.get(e)
                }
                getPremiumPacks() {
                    return I
                }
                isPremiumPack(e) {
                    return I.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return N
                }
                getAllStickersIterator() {
                    return y(), m.values()
                }
                getAllGuildStickers() {
                    return y(), N
                }
                getStickersByGuildId(e) {
                    return y(), N.get(e)
                }
            }
            P.displayName = "StickersStore";
            var b = new P(l.default, {
                BACKGROUND_SYNC: () => {
                    S = null, m = new Map, N = new Map, T = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    S = null, m = new Map, N = new Map, t.forEach(U), T = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !d.default.isLurking(t.id) && (U(t), 1 === T && null == t.stickers && null != t.stickerUpdates && (T = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = N.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != S && S.delete(e.id), m.delete(e.id)
                    }), N.delete(n.id), N = new Map(N)
                },
                LOGOUT: () => {
                    T = 0, I = [], m.clear(), C.clear(), S = null, N.clear(), N = new Map(N), A = !1, g = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    A = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => D(e, !0)), g = Date.now(), A = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    D(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => v(e)), O(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: a
                    } = e, l = null !== (t = N.get(i)) && void 0 !== t ? t : [];
                    O(i, [...null !== (n = l.filter(e => e.id !== a.id)) && void 0 !== n ? n : [], a]), v(a)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    v(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, a = e => {
                        let t;
                        let n = m.get(e.id);
                        return null != n && (0, h.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = N.get(n)) && void 0 !== t ? t : [], s = l.filter(e => null == i.find(t => t.id === e.id));
                    s.forEach(e => {
                        m.delete(e.id), null != S && S.delete(e.id)
                    });
                    let r = i.map(e => a(e));
                    r.forEach(e => v(e)), O(n, r)
                }
            })