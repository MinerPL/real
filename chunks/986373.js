            "use strict";
            n.r(t), n.d(t, {
                useFavorite: function() {
                    return f
                },
                useFavoritesCategories: function() {
                    return h
                },
                useFavoritesGuildSelected: function() {
                    return E
                },
                useFavoriteAdded: function() {
                    return _
                }
            }), n("424973"), n("222007");
            var i = n("884691"),
                l = n("298386"),
                a = n("446674");
            n("42203");
            var r = n("923959"),
                s = n("162771"),
                o = n("379881"),
                u = n("498139"),
                d = n("136569"),
                c = n("49111");

            function f(e) {
                let t = (0, a.useStateFromStores)([o.default], () => o.default.getFavorite(e));
                return t
            }

            function h() {
                let e = (0, a.useStateFromStores)([r.default], () => r.default.getChannels(c.FAVORITES))[l.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function E() {
                let e = (0, a.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === c.FAVORITES
            }

            function _() {
                let {
                    isFavoritesPerk: e
                } = (0, u.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, d.useFavoritesTooltipStore)(), n = i.useCallback(() => {
                    e && t.notifyFavoriteAdded()
                }, [t, e]), l = i.useCallback(() => {
                    e && t.clearFavoriteAdded()
                }, [t, e]);
                return {
                    favoriteAdded: t.favoriteAdded,
                    notifyFavoriteAdded: n,
                    clearFavoriteAdded: l
                }
            }