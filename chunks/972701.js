            "use strict";
            a.r(t), a.d(t, {
                useAddToFavoritesItem: function() {
                    return A
                },
                useRemoveFromFavoritesItem: function() {
                    return v
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var l = a("917351"),
                i = a.n(l),
                d = a("446674"),
                u = a("77078"),
                s = a("923959"),
                o = a("379881"),
                r = a("200008"),
                c = a("986373"),
                f = a("498139"),
                I = a("49111"),
                p = a("782340");

            function _(e, t) {
                return e.type === I.ChannelTypes.GROUP_DM ? t ? p.default.Messages.UNFAVORITE_GDM : p.default.Messages.FAVORITE_GDM : e.type === I.ChannelTypes.DM ? t ? p.default.Messages.UNFAVORITE_DM : p.default.Messages.FAVORITE_DM : t ? p.default.Messages.UNFAVORITE_CHANNEL : p.default.Messages.FAVORITE_CHANNEL
            }

            function A(e) {
                let t = (0, d.useStateFromStores)([s.default], () => s.default.getChannels(I.FAVORITES))[I.ChannelTypes.GUILD_CATEGORY],
                    [
                        [a], l
                    ] = i.partition(t, e => "null" === e.channel.id),
                    {
                        favoritesEnabled: p,
                        isFavoritesPerk: A
                    } = (0, f.useFavoritesServerExperiment)("58e21a_1"),
                    {
                        notifyFavoriteAdded: v
                    } = (0, c.useFavoriteAdded)(),
                    E = (0, d.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
                if (__OVERLAY__ || E || !p) return null;

                function T(t) {
                    v(), (0, r.addFavoriteChannel)(e.id, t)
                }
                return 0 === l.length ? (0, n.jsx)(u.MenuItem, {
                    id: "favorite-channel",
                    label: _(e, !1),
                    action: () => T(null)
                }) : (0, n.jsxs)(u.MenuItem, {
                    id: "favorite-channel",
                    label: _(e, !1),
                    action: () => T(null),
                    children: [A && (0, n.jsx)(u.MenuGroup, {
                        children: (0, n.jsx)(u.MenuItem, {
                            id: "favorite-".concat(a.channel.id),
                            label: a.channel.name,
                            action: () => T("null" === a.channel.id ? null : a.channel.id)
                        }, a.channel.id)
                    }), (0, n.jsx)(u.MenuGroup, {
                        children: l.map(e => (0, n.jsx)(u.MenuItem, {
                            id: "favorite-".concat(e.channel.id),
                            label: e.channel.name,
                            action: () => T(e.channel.id)
                        }, e.channel.id))
                    })]
                })
            }

            function v(e) {
                let t = (0, d.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
                return __OVERLAY__ || !t ? null : (0, n.jsx)(u.MenuItem, {
                    id: "favorite-channel",
                    label: _(e, !0),
                    color: "danger",
                    action: () => e.type === I.ChannelTypes.GUILD_CATEGORY ? (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await a.el("338052").then(a.bind(a, "338052"));
                        return a => (0, n.jsx)(t, {
                            ...a,
                            onConfirm: () => {
                                a.onClose(), (0, r.removeFavoriteChannel)(e.id)
                            },
                            channel: e
                        })
                    }) : (0, r.removeFavoriteChannel)(e.id)
                })
            }