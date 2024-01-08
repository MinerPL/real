            "use strict";
            n.r(t), n.d(t, {
                useFavorite: function() {
                    return E
                },
                useFavoritesCategories: function() {
                    return c
                },
                useFavoritesGuildSelected: function() {
                    return C
                },
                useFavoriteAdded: function() {
                    return N
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                i = n("298386"),
                r = n("446674");
            n("42203");
            var u = n("923959"),
                s = n("162771"),
                l = n("379881"),
                o = n("498139"),
                d = n("136569"),
                f = n("49111");

            function E(e) {
                let t = (0, r.useStateFromStores)([l.default], () => l.default.getFavorite(e));
                return t
            }

            function c() {
                let e = (0, r.useStateFromStores)([u.default], () => u.default.getChannels(f.FAVORITES))[i.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function C() {
                let e = (0, r.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === f.FAVORITES
            }

            function N() {
                let {
                    isFavoritesPerk: e
                } = (0, o.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, d.useFavoritesTooltipStore)(), n = a.useCallback(() => {
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