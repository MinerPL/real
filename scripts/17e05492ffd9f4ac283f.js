(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["45978"], {
        467094: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchStickerPack: function() {
                    return p
                },
                fetchStickerPacks: function() {
                    return g
                },
                fetchSticker: function() {
                    return T
                },
                fetchGuildStickers: function() {
                    return h
                },
                deleteGuildSticker: function() {
                    return _
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
            });
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
            let p = async (e, t) => {
                let {
                    body: r
                } = await (0, k.httpGetWithCountryCodeQuery)(y.Endpoints.STICKER_PACK(e));
                return s.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: r,
                    ingestStickers: t
                }), r
            }, g = async function() {
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
                } = await (0, k.httpGetWithCountryCodeQuery)({
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
            }, h = async e => {
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
            }, _ = async e => {
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
        },
        256860: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useFetchStickerPack: function() {
                    return R
                },
                useShouldAnimateSticker: function() {
                    return m
                },
                useStickersGrid: function() {
                    return F
                },
                useHasSendableSticker: function() {
                    return A
                },
                useFetchStickerPacks: function() {
                    return v
                },
                useFavoriteStickerIds: function() {
                    return G
                },
                useFavoriteStickers: function() {
                    return L
                },
                useLatestFrecentStickers: function() {
                    return K
                },
                useStickerForRenderableSticker: function() {
                    return b
                },
                useFilteredStickerPackCategories: function() {
                    return D
                }
            });
            var i = r("884691"),
                u = r("446674"),
                n = r("817963"),
                s = r("845579"),
                l = r("42507"),
                a = r("305961"),
                c = r("162771"),
                d = r("677099"),
                o = r("697218"),
                S = r("427459"),
                f = r("991170"),
                k = r("719923"),
                E = r("4233"),
                y = r("866353"),
                C = r("467094"),
                I = r("865372"),
                p = r("364685"),
                g = r("161585"),
                T = r("24373"),
                h = r("49111"),
                _ = r("782340");
            let R = e => {
                    v();
                    let t = (0, u.useStateFromStores)([p.default], () => p.default.hasLoadedStickerPacks);
                    i.useEffect(() => {
                        t && null == p.default.getStickerPack(e) && (0, C.fetchStickerPack)(e)
                    }, [e, t])
                },
                m = e => {
                    let t = s.AnimateStickers.useSetting();
                    return (0, T.shouldAnimateSticker)(t, e)
                },
                F = e => {
                    let {
                        collapsedStickersCategories: t,
                        filteredStickers: r,
                        listPaddingRight: u = 0,
                        listWidth: s = 0,
                        stickerNodeMargin: l = 0,
                        stickerNodeWidth: d,
                        stickersCategories: o
                    } = e;
                    return i.useMemo(() => {
                        let e = Math.floor((s - u + l) / (d + l)),
                            i = Math.floor(Math.max(l, (s - u - d * e) / (e - 1))),
                            f = [],
                            k = [],
                            E = [],
                            y = 0,
                            C = 0,
                            I = 0;
                        if (0 !== s) {
                            let i = function(t, r) {
                                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    u = (0, T.isGuildSticker)(t[0]) ? a.default.getGuild(t[0].guild_id) : void 0,
                                    {
                                        canCreateExpressions: s
                                    } = (0, n.getManageResourcePermissions)(u),
                                    l = c.default.getGuildId(),
                                    d = o.findIndex(e => e.type === g.StickerCategoryTypes.FAVORITE),
                                    p = o.findIndex(e => e.type === g.StickerCategoryTypes.RECENT),
                                    h = t.length;
                                null != u && l === u.id && s && t.length < (0, S.getTotalStickerCountForTier)(u.premiumTier) && h++;
                                let R = Math.ceil(h / e);
                                k[C] = i ? 0 : R;
                                for (let n = 0; n < R; n++) {
                                    let s = n * e,
                                        l = s + e,
                                        a = t.slice(s, l).map((e, t) => ({
                                            type: g.StickerGridItemTypes.STICKER,
                                            sticker: e,
                                            packId: (0, T.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                            gridSectionIndex: C,
                                            rowIndex: y,
                                            columnIndex: t,
                                            visibleRowIndex: I,
                                            category: r
                                        }));
                                    C > p && C > d && null != u && h > t.length && a.push({
                                        type: g.StickerGridItemTypes.CREATE_STICKER,
                                        guild_id: u.id,
                                        name: _.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                        gridSectionIndex: C,
                                        rowIndex: y,
                                        columnIndex: a.length,
                                        visibleRowIndex: I
                                    }), !i && (I++, E.push(a), f.push(a.length)), y++
                                }
                                C++
                            };
                            if (null == r)
                                for (let e of o)
                                    if (e.stickers.length > 0) y++, i(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0);
                                    else e.type === g.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (k[C] = 0, C++);
                            else r.sendable.length > 0 && i(r.sendable, g.StickerCategoryTypes.SEARCH_RESULTS), r.sendableWithPremium.length > 0 && i(r.sendableWithPremium, g.StickerCategoryTypes.SEARCH_RESULTS)
                        }
                        return {
                            rowCount: y,
                            rowCountBySection: k,
                            stickersGrid: E,
                            gutterWidth: i,
                            columnCounts: f
                        }
                    }, [t, r, u, s, l, d, o])
                },
                A = e => {
                    let t = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                    return (0, u.useStateFromStores)([p.default], () => {
                        let r = p.default.getAllStickersIterator();
                        for (let i of r)
                            if ((0, y.isSendableSticker)(i, t, e)) return !0;
                        return !1
                    }, [t, e])
                },
                v = () => {
                    i.useEffect(() => {
                        (0, C.fetchStickerPacks)()
                    }, [])
                },
                P = e => {
                    let t = (0, u.useStateFromStores)([p.default], () => p.default.getAllGuildStickers()),
                        r = (0, u.useStateFromStoresArray)([d.default, a.default], () => {
                            let e = d.default.getFlattenedGuildIds(),
                                t = [];
                            return e.forEach(e => {
                                let r = a.default.getGuild(e);
                                null != r && t.push(r)
                            }), t
                        }, []),
                        s = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                    return i.useMemo(() => {
                        let i = [];
                        for (let {
                                name: e,
                                id: u
                            }
                            of r) {
                            let r = t.get(u);
                            null != r && 0 !== r.length && i.push({
                                type: g.StickerCategoryTypes.GUILD,
                                id: u,
                                name: e,
                                stickers: r
                            })
                        }
                        if ((null == e ? void 0 : e.getGuildId()) != null) {
                            let t = a.default.getGuild(e.getGuildId()),
                                {
                                    canManageAllExpressions: r
                                } = (0, n.getManageResourcePermissions)(t),
                                u = i.findIndex(t => t.id === e.getGuildId());
                            u >= 1 ? i.unshift(i.splice(u, 1)[0]) : -1 === u && null != t && r && i.unshift({
                                type: g.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                                id: t.id,
                                name: t.name,
                                stickers: []
                            }), null != s && !f.default.can({
                                permission: h.Permissions.USE_EXTERNAL_EMOJIS,
                                user: s,
                                context: e
                            }) && (i = i.filter(t => t.id === e.getGuildId()))
                        }
                        return i
                    }, [t, r, s, e])
                },
                U = [];

            function G() {
                var e, t;
                let r = (0, l.useFrecencySettings)();
                return null !== (t = null === (e = r.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : U
            }

            function L() {
                let e = G(),
                    t = (0, u.useStateFromStoresArray)([p.default], () => e.map(e => p.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
                return t
            }

            function K() {
                let e = function() {
                        var e, t;
                        let r = (0, l.useFrecencySettings)(),
                            i = U;
                        return (null == r ? void 0 : null === (e = r.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (i = Object.keys(null == r ? void 0 : null === (t = r.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), i
                    }(),
                    t = (0, u.useStateFromStoresArray)([p.default], () => e.map(e => p.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
                return t
            }
            let M = e => {
                    let t = L(),
                        {
                            packs: r,
                            frequentlyUsedStickers: n
                        } = (0, u.useStateFromStoresObject)([p.default, I.default], () => ({
                            packs: p.default.getPremiumPacks(),
                            frequentlyUsedStickers: I.default.stickerFrecencyWithoutFetchingLatest.frequently
                        }), []),
                        s = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                        l = k.default.canUseStickersEverywhere(s),
                        {
                            freeStickersEnabled: a
                        } = E.default.useExperiment({
                            location: "3228cc_1"
                        }, {
                            autoTrackExposure: !1
                        }),
                        c = P(e);
                    return i.useMemo(() => {
                        var i;
                        let u = r.map(T.createStickerPackCategory),
                            d = {
                                type: g.StickerCategoryTypes.FAVORITE,
                                id: g.StickerCategoryTypes.FAVORITE,
                                name: _.default.Messages.CATEGORY_FAVORITE,
                                stickers: t
                            },
                            o = {
                                type: g.StickerCategoryTypes.RECENT,
                                id: g.StickerCategoryTypes.RECENT,
                                name: _.default.Messages.STICKER_CATEGORY_RECENT,
                                stickers: null !== (i = null == n ? void 0 : n.filter(t => {
                                    if ((0, T.isGuildSticker)(t)) {
                                        var i, u;
                                        return null !== (u = null === (i = p.default.getStickersByGuildId(t.guild_id)) || void 0 === i ? void 0 : i.some(e => e.id === t.id)) && void 0 !== u && u && (0, y.getStickerSendability)(t, s, e) !== y.StickerSendability.NONSENDABLE
                                    }
                                    if ((0, T.isStandardSticker)(t)) return r.some(e => e.id === t.pack_id)
                                })) && void 0 !== i ? i : []
                            };
                        return [d, o, ...c, ...l || a || c.length > 0 ? u : []]
                    }, [r, t, n, c, l, s, e, a])
                },
                b = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = (0, u.useStateFromStores)([p.default], () => p.default.getStickerById(e.id)),
                        [n, s] = i.useState(!0),
                        [l, a] = i.useState(!1),
                        c = (0, T.isGuildSticker)(e) || (0, T.isStandardSticker)(e);
                    return (i.useEffect(() => {
                        let i = async () => {
                            if (t && !c && null == r && n && !l) {
                                s(!1);
                                try {
                                    await (0, C.fetchSticker)(e.id)
                                } catch {}
                                a(!0)
                            }
                        };
                        i()
                    }, [t]), c) ? [e, l] : [null != r ? r : null, l]
                },
                D = e => {
                    let t = M(e);
                    return i.useMemo(() => t.filter(e => e.type === g.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
                }
        },
        42507: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useFrecencySettings: function() {
                    return l
                }
            });
            var i = r("884691"),
                u = r("446674"),
                n = r("872173"),
                s = r("374363");

            function l() {
                return i.useEffect(() => {
                    n.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, u.useStateFromStores)([s.default], () => s.default.frecencyWithoutFetchingLatest)
            }
        }
    }
]);