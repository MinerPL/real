            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007"), n("424973");
            var s = n("102053"),
                i = n("446674"),
                r = n("913144"),
                a = n("802493"),
                o = n("595525"),
                d = n("212084"),
                u = n("867805"),
                l = n("267567"),
                f = n("813006"),
                _ = n("778689"),
                c = n("305961"),
                g = n("161585"),
                m = n("24373"),
                h = n("49111");
            let v = 2,
                E = new Map,
                p = new Map,
                y = null,
                T = [],
                C = null,
                S = !1,
                I = new Map,
                A = (e, t) => {
                    I = new Map(I.set(e, t))
                },
                D = 1e3 * h.Durations.HOUR,
                N = () => {
                    if (0 !== v) return;
                    let e = a.default.database();
                    if (null == e) return;
                    v = 2;
                    let t = (0, o.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => s.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (_.default.isMember(e) && !I.has(e)) {
                                for (let t of n) O(t, !0, c.default.getGuild(e));
                                A(e, n)
                            }
                    }
                },
                O = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    p.set(e.id, e), t && b(e, n)
                },
                b = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == y) return;
                    let {
                        tags: n
                    } = e, s = {
                        type: g.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, m.isStandardSticker)(e)) {
                        let t = T.find(t => t.id === e.pack_id),
                            i = [s, ...(null != n ? n : "").split(",").map(e => ({
                                type: g.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && i.push({
                            type: g.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), y.set(e.id, i)
                    } else if ((0, m.isGuildSticker)(e) && null != n) {
                        let i = u.default.getByName(n),
                            r = {
                                type: g.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [s, r];
                        if (null != t) {
                            let e = (t instanceof(0, f.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: g.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == i) {
                            y.set(e.id, a);
                            return
                        }
                        a.push({
                            type: g.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: i.surrogates
                        }), i.forEachDiversity(e => a.push({
                            type: g.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), y.set(e.id, a)
                    }
                },
                P = (e, t, n) => {
                    E.set(e.id, e);
                    let s = [...T];
                    if (t) {
                        let t = s.findIndex(t => t.id === e.id); - 1 !== t ? s[t] = e : s.push(e), T = s
                    }(t || n) && e.stickers.forEach(e => O(e))
                },
                V = () => {
                    I.forEach((e, t) => {
                        let n = c.default.getGuild(t);
                        null != n && e.forEach(e => b(e, n))
                    }), T.forEach(e => {
                        e.stickers.forEach(e => b(e))
                    })
                };

            function R(e) {
                null != e.stickers && (e.stickers.forEach(t => O(t, !0, e)), A(e.id, e.stickers))
            }
            class k extends i.default.Store {
                initialize() {
                    this.waitFor(a.default, _.default, c.default)
                }
                get isLoaded() {
                    return 0 !== v
                }
                get stickerMetadata() {
                    return N(), null == y && (y = new Map, V()), y
                }
                get hasLoadedStickerPacks() {
                    return null != C && C + D > Date.now()
                }
                get isFetchingStickerPacks() {
                    return S
                }
                getStickerById(e) {
                    return !p.has(e) && N(), p.get(e)
                }
                getStickerPack(e) {
                    return E.get(e)
                }
                getPremiumPacks() {
                    return T
                }
                isPremiumPack(e) {
                    return T.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return I
                }
                getAllStickersIterator() {
                    return N(), p.values()
                }
                getAllGuildStickers() {
                    return N(), I
                }
                getStickersByGuildId(e) {
                    return N(), I.get(e)
                }
            }
            k.displayName = "StickersStore";
            var M = new k(r.default, {
                BACKGROUND_SYNC: () => {
                    y = null, p = new Map, I = new Map, v = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    y = null, p = new Map, I = new Map, t.forEach(R), v = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !l.default.isLurking(t.id) && (R(t), 1 === v && null == t.stickers && null != t.stickerUpdates && (v = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, s = null !== (t = I.get(n.id)) && void 0 !== t ? t : [];
                    s.forEach(e => {
                        null != y && y.delete(e.id), p.delete(e.id)
                    }), I.delete(n.id), I = new Map(I)
                },
                LOGOUT: () => {
                    v = 0, T = [], p.clear(), E.clear(), y = null, I.clear(), I = new Map(I), S = !1, C = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    S = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => P(e, !0)), C = Date.now(), S = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    P(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => O(e)), A(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: s,
                        sticker: i
                    } = e, r = null !== (t = I.get(s)) && void 0 !== t ? t : [];
                    A(s, [...null !== (n = r.filter(e => e.id !== i.id)) && void 0 !== n ? n : [], i]), O(i)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    O(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: s
                    } = e, i = e => {
                        let t;
                        let n = p.get(e.id);
                        return null != n && (0, m.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, r = null !== (t = I.get(n)) && void 0 !== t ? t : [], a = r.filter(e => null == s.find(t => t.id === e.id));
                    a.forEach(e => {
                        p.delete(e.id), null != y && y.delete(e.id)
                    });
                    let o = s.map(e => i(e));
                    o.forEach(e => O(e)), A(n, o)
                }
            })