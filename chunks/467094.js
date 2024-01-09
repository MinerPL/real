            "use strict";
            r.r(t), r.d(t, {
                fetchStickerPack: function() {
                    return g
                },
                fetchStickerPacks: function() {
                    return p
                },
                fetchSticker: function() {
                    return T
                },
                fetchGuildStickers: function() {
                    return _
                },
                deleteGuildSticker: function() {
                    return h
                },
                createGuildSticker: function() {
                    return R
                },
                updateGuildSticker: function() {
                    return m
                },
                addStickerPreview: function() {
                    return F
                },
                clearStickerPreview: function() {
                    return A
                },
                favoriteSticker: function() {
                    return P
                },
                unfavoriteSticker: function() {
                    return U
                }
            }), r("424973");
            var i = r("917351"),
                u = r.n(i),
                n = r("872717"),
                s = r("913144"),
                l = r("404118"),
                a = r("619443"),
                c = r("915639"),
                d = r("872173"),
                o = r("766274"),
                S = r("341542"),
                f = r("697218"),
                k = r("271560"),
                E = r("364685"),
                y = r("49111"),
                C = r("397336"),
                I = r("782340");
            let g = async (e, t) => {
                let {
                    body: r
                } = await (0, k.httpGetWithCountryCodeQuery)(y.Endpoints.STICKER_PACK(e));
                return s.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: r,
                    ingestStickers: t
                }), r
            }, p = async function() {
                let {
                    locale: e = c.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (E.default.isFetchingStickerPacks || E.default.hasLoadedStickerPacks) return;
                s.default.wait(() => {
                    s.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await n.default.get({
                    url: y.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                s.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, T = async e => {
                let {
                    body: t
                } = await n.default.get({
                    url: y.Endpoints.STICKER(e)
                });
                s.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, _ = async e => {
                let {
                    body: t
                } = await n.default.get({
                    url: y.Endpoints.GUILD_STICKER_PACKS(e)
                });
                s.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new o.default(e.user)
                    } : e)
                })
            }, h = async e => {
                await n.default.delete({
                    url: y.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, R = async (e, t) => {
                let r = await n.default.post({
                    url: y.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return s.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...r.body,
                        user: f.default.getCurrentUser()
                    }
                }), r.body
            }, m = async (e, t, r) => {
                let i = await n.default.patch({
                    url: y.Endpoints.GUILD_STICKER(e, t),
                    body: r
                });
                return i.body
            };

            function F(e, t, r) {
                s.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: r
                })
            }

            function A(e, t) {
                s.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function v(e) {
                return S.default.totalUnavailableGuilds > 0 || !a.default.isConnected() ? e : e.filter(e => null != E.default.getStickerById(e))
            }

            function P(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = v(t.stickerIds), u.size(t.stickerIds) >= C.MAX_FAVORITES) ? (l.default.show({
                    title: I.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: I.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: C.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), C.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function U(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = v(t.stickerIds)
                }, C.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }