            "use strict";
            n.r(t), n.d(t, {
                useCanFavoriteChannel: function() {
                    return c
                },
                useFavorite: function() {
                    return C
                },
                useFavoritesCategories: function() {
                    return N
                },
                useFavoritesGuildSelected: function() {
                    return _
                },
                useFavoriteAdded: function() {
                    return A
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                i = n("298386"),
                r = n("446674");
            n("42203");
            var u = n("923959"),
                s = n("162771"),
                l = n("697218"),
                o = n("379881"),
                d = n("498139"),
                f = n("136569"),
                E = n("49111");

            function c(e) {
                let {
                    favoritesEnabled: t,
                    isFavoritesPerk: n
                } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), a = (0, r.useStateFromStores)([o.default], () => o.default.isFavorite(e.id)), i = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUser()), u = e.isDM() || e.isThread(), s = !u || n && (null == i ? void 0 : i.isStaff()) === !0;
                return t && !__OVERLAY__ && !a && s
            }

            function C(e) {
                let t = (0, r.useStateFromStores)([o.default], () => o.default.getFavorite(e));
                return t
            }

            function N() {
                let e = (0, r.useStateFromStores)([u.default], () => u.default.getChannels(E.FAVORITES))[i.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function _() {
                let e = (0, r.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === E.FAVORITES
            }

            function A() {
                let {
                    isFavoritesPerk: e
                } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, f.useFavoritesTooltipStore)(), n = a.useCallback(() => {
                    e && t.notifyFavoriteAdded()
                }, [t, e]), i = a.useCallback(() => {
                    e && t.clearFavoriteAdded()
                }, [t, e]);
                return {
                    favoriteAdded: t.favoriteAdded,
                    notifyFavoriteAdded: n,
                    clearFavoriteAdded: i
                }
            }