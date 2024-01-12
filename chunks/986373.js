            "use strict";
            n.r(t), n.d(t, {
                useCanFavoriteChannel: function() {
                    return h
                },
                useFavorite: function() {
                    return E
                },
                useFavoritesCategories: function() {
                    return _
                },
                useFavoritesGuildSelected: function() {
                    return p
                },
                useFavoriteAdded: function() {
                    return I
                }
            }), n("424973"), n("222007");
            var i = n("884691"),
                l = n("298386"),
                a = n("446674");
            n("42203");
            var r = n("923959"),
                s = n("162771"),
                o = n("697218"),
                u = n("379881"),
                d = n("498139"),
                c = n("136569"),
                f = n("49111");

            function h(e) {
                let {
                    favoritesEnabled: t,
                    hasStaffPrivileges: n
                } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), i = (0, a.useStateFromStores)([u.default], () => u.default.isFavorite(e.id)), l = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()), r = e.isDM() || e.isThread(), s = !r || n && (null == l ? void 0 : l.isStaff()) === !0;
                return t && !__OVERLAY__ && !i && s
            }

            function E(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.getFavorite(e));
                return t
            }

            function _() {
                let e = (0, a.useStateFromStores)([r.default], () => r.default.getChannels(f.FAVORITES))[l.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function p() {
                let e = (0, a.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === f.FAVORITES
            }

            function I() {
                let {
                    isFavoritesPerk: e
                } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, c.useFavoritesTooltipStore)(), n = i.useCallback(() => {
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