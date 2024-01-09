            "use strict";
            n.r(t), n.d(t, {
                useCanFavoriteChannel: function() {
                    return _
                },
                useFavorite: function() {
                    return p
                },
                useFavoritesCategories: function() {
                    return E
                },
                useFavoritesGuildSelected: function() {
                    return S
                },
                useFavoriteAdded: function() {
                    return m
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                i = n("298386"),
                s = n("446674");
            n("42203");
            var u = n("923959"),
                l = n("162771"),
                o = n("697218"),
                r = n("379881"),
                d = n("498139"),
                c = n("136569"),
                f = n("49111");

            function _(e) {
                let {
                    favoritesEnabled: t,
                    isFavoritesPerk: n
                } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), a = (0, s.useStateFromStores)([r.default], () => r.default.isFavorite(e.id)), i = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser()), u = e.isDM() || e.isThread(), l = !u || n && (null == i ? void 0 : i.isStaff()) === !0;
                return t && !__OVERLAY__ && !a && l
            }

            function p(e) {
                let t = (0, s.useStateFromStores)([r.default], () => r.default.getFavorite(e));
                return t
            }

            function E() {
                let e = (0, s.useStateFromStores)([u.default], () => u.default.getChannels(f.FAVORITES))[i.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function S() {
                let e = (0, s.useStateFromStores)([l.default], () => l.default.getGuildId());
                return e === f.FAVORITES
            }

            function m() {
                let {
                    isFavoritesPerk: e
                } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, c.useFavoritesTooltipStore)(), n = a.useCallback(() => {
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