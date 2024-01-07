            "use strict";
            n.r(t), n.d(t, {
                fetchStickerPack: function() {
                    return C
                },
                fetchStickerPacks: function() {
                    return T
                },
                fetchSticker: function() {
                    return S
                },
                fetchGuildStickers: function() {
                    return A
                },
                deleteGuildSticker: function() {
                    return m
                },
                createGuildSticker: function() {
                    return g
                },
                updateGuildSticker: function() {
                    return R
                },
                addStickerPreview: function() {
                    return N
                },
                clearStickerPreview: function() {
                    return L
                },
                favoriteSticker: function() {
                    return P
                },
                unfavoriteSticker: function() {
                    return y
                }
            }), n("424973");
            var s = n("917351"),
                i = n.n(s),
                a = n("872717"),
                l = n("913144"),
                r = n("404118"),
                u = n("619443"),
                o = n("915639"),
                c = n("872173"),
                d = n("766274"),
                f = n("341542"),
                p = n("697218"),
                h = n("271560"),
                I = n("364685"),
                E = n("49111"),
                v = n("397336"),
                _ = n("782340");
            let C = async (e, t) => {
                let {
                    body: n
                } = await (0, h.httpGetWithCountryCodeQuery)(E.Endpoints.STICKER_PACK(e));
                return l.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: n,
                    ingestStickers: t
                }), n
            }, T = async function() {
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
                } = await a.default.get({
                    url: E.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                l.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, S = async e => {
                let {
                    body: t
                } = await a.default.get({
                    url: E.Endpoints.STICKER(e)
                });
                l.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, A = async e => {
                let {
                    body: t
                } = await a.default.get({
                    url: E.Endpoints.GUILD_STICKER_PACKS(e)
                });
                l.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new d.default(e.user)
                    } : e)
                })
            }, m = async e => {
                await a.default.delete({
                    url: E.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, g = async (e, t) => {
                let n = await a.default.post({
                    url: E.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return l.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...n.body,
                        user: p.default.getCurrentUser()
                    }
                }), n.body
            }, R = async (e, t, n) => {
                let s = await a.default.patch({
                    url: E.Endpoints.GUILD_STICKER(e, t),
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

            function L(e, t) {
                l.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function x(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != I.default.getStickerById(e))
            }

            function P(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = x(t.stickerIds), i.size(t.stickerIds) >= v.MAX_FAVORITES) ? (r.default.show({
                    title: _.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: _.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: v.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), v.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function y(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = x(t.stickerIds)
                }, v.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }