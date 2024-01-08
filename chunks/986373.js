            "use strict";
            n.r(t), n.d(t, {
                useFavorite: function() {
                    return c
                },
                useFavoritesCategories: function() {
                    return _
                },
                useFavoritesGuildSelected: function() {
                    return E
                },
                useFavoriteAdded: function() {
                    return T
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                l = n("298386"),
                i = n("446674");
            n("42203");
            var u = n("923959"),
                r = n("162771"),
                s = n("379881"),
                d = n("498139"),
                o = n("136569"),
                f = n("49111");

            function c(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getFavorite(e));
                return t
            }

            function _() {
                let e = (0, i.useStateFromStores)([u.default], () => u.default.getChannels(f.FAVORITES))[l.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function E() {
                let e = (0, i.useStateFromStores)([r.default], () => r.default.getGuildId());
                return e === f.FAVORITES
            }

            function T() {
                let {
                    isFavoritesPerk: e
                } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, o.useFavoritesTooltipStore)(), n = a.useCallback(() => {
                    e && t.notifyFavoriteAdded()
                }, [t, e]), l = a.useCallback(() => {
                    e && t.clearFavoriteAdded()
                }, [t, e]);
                return {
                    favoriteAdded: t.favoriteAdded,
                    notifyFavoriteAdded: n,
                    clearFavoriteAdded: l
                }
            }