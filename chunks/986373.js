            "use strict";
            n.r(t), n.d(t, {
                useCanFavoriteChannel: function() {
                    return _
                },
                useFavorite: function() {
                    return E
                },
                useFavoritesCategories: function() {
                    return T
                },
                useFavoritesGuildSelected: function() {
                    return S
                },
                useFavoriteAdded: function() {
                    return h
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                l = n("298386"),
                i = n("446674");
            n("42203");
            var u = n("923959"),
                r = n("162771"),
                s = n("697218"),
                d = n("379881"),
                o = n("498139"),
                f = n("136569"),
                c = n("49111");

            function _(e) {
                let {
                    favoritesEnabled: t,
                    isFavoritesPerk: n
                } = (0, o.useFavoritesServerExperiment)("useCanFavoriteChannel"), a = (0, i.useStateFromStores)([d.default], () => d.default.isFavorite(e.id)), l = (0, i.useStateFromStores)([s.default], () => s.default.getCurrentUser()), u = e.isDM() || e.isThread(), r = !u || n && (null == l ? void 0 : l.isStaff()) === !0;
                return t && !__OVERLAY__ && !a && r
            }

            function E(e) {
                let t = (0, i.useStateFromStores)([d.default], () => d.default.getFavorite(e));
                return t
            }

            function T() {
                let e = (0, i.useStateFromStores)([u.default], () => u.default.getChannels(c.FAVORITES))[l.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function S() {
                let e = (0, i.useStateFromStores)([r.default], () => r.default.getGuildId());
                return e === c.FAVORITES
            }

            function h() {
                let {
                    isFavoritesPerk: e
                } = (0, o.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, f.useFavoritesTooltipStore)(), n = a.useCallback(() => {
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