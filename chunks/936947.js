            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                i = a("200008"),
                d = a("986373"),
                u = a("498139"),
                s = a("782340");

            function o(e) {
                let t = (0, d.useFavoritesGuildSelected)(),
                    a = (0, d.useFavorite)(e.id),
                    o = (0, d.useFavoritesCategories)(),
                    {
                        isFavoritesPerk: r
                    } = (0, u.useFavoritesServerExperiment)("useChannelMoveToCategory");
                if (__OVERLAY__ || !t || null == a || !r) return null;
                let c = o.filter(e => e.id !== (null == a ? void 0 : a.parentId));
                return (0, n.jsx)(l.MenuItem, {
                    id: "move-to-category",
                    label: s.default.Messages.MOVE_TO,
                    children: c.map(e => {
                        let {
                            id: t,
                            name: d
                        } = e;
                        return (0, n.jsx)(l.MenuItem, {
                            id: "favorite-".concat(t),
                            label: d,
                            action: () => {
                                var e;
                                return e = t, void(null != a && (0, i.updateFavoriteChannelParent)(a.id, e))
                            }
                        }, null != t ? t : "null")
                    })
                })
            }