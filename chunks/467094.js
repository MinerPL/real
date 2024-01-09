            "use strict";
            n.r(t), n.d(t, {
                fetchStickerPack: function() {
                    return T
                },
                fetchStickerPacks: function() {
                    return m
                },
                fetchSticker: function() {
                    return _
                },
                fetchGuildStickers: function() {
                    return S
                },
                deleteGuildSticker: function() {
                    return A
                },
                createGuildSticker: function() {
                    return R
                },
                updateGuildSticker: function() {
                    return g
                },
                addStickerPreview: function() {
                    return N
                },
                clearStickerPreview: function() {
                    return x
                },
                favoriteSticker: function() {
                    return P
                },
                unfavoriteSticker: function() {
                    return w
                }
            }), n("424973");
            var s = n("917351"),
                r = n.n(s),
                i = n("872717"),
                l = n("913144"),
                a = n("404118"),
                u = n("619443"),
                o = n("915639"),
                c = n("872173"),
                d = n("766274"),
                f = n("341542"),
                h = n("697218"),
                p = n("271560"),
                I = n("364685"),
                v = n("49111"),
                C = n("397336"),
                E = n("782340");
            let T = async (e, t) => {
                let {
                    body: n
                } = await (0, p.httpGetWithCountryCodeQuery)(v.Endpoints.STICKER_PACK(e));
                return l.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: n,
                    ingestStickers: t
                }), n
            }, m = async function() {
                let {
                    locale: e = o.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (I.default.isFetchingStickerPacks || I.default.hasLoadedStickerPacks) return;
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await i.default.get({
                    url: v.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                l.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, _ = async e => {
                let {
                    body: t
                } = await i.default.get({
                    url: v.Endpoints.STICKER(e)
                });
                l.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, S = async e => {
                let {
                    body: t
                } = await i.default.get({
                    url: v.Endpoints.GUILD_STICKER_PACKS(e)
                });
                l.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new d.default(e.user)
                    } : e)
                })
            }, A = async e => {
                await i.default.delete({
                    url: v.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, R = async (e, t) => {
                let n = await i.default.post({
                    url: v.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return l.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...n.body,
                        user: h.default.getCurrentUser()
                    }
                }), n.body
            }, g = async (e, t, n) => {
                let s = await i.default.patch({
                    url: v.Endpoints.GUILD_STICKER(e, t),
                    body: n
                });
                return s.body
            };

            function N(e, t, n) {
                l.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: n
                })
            }

            function x(e, t) {
                l.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function L(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != I.default.getStickerById(e))
            }

            function P(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = L(t.stickerIds), r.size(t.stickerIds) >= C.MAX_FAVORITES) ? (a.default.show({
                    title: E.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: E.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: C.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), C.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function w(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = L(t.stickerIds)
                }, C.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }