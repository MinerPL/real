            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("424973"), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("200008"),
                d = n("986373"),
                u = n("498139"),
                s = n("782340");

            function o(e) {
                let t = (0, d.useFavoritesGuildSelected)(),
                    n = (0, d.useFavorite)(e.id),
                    o = (0, d.useFavoritesCategories)(),
                    {
                        isFavoritesPerk: r
                    } = (0, u.useFavoritesServerExperiment)("useChannelMoveToCategory");
                if (__OVERLAY__ || !t || null == n || !r) return null;
                let c = o.filter(e => e.id !== (null == n ? void 0 : n.parentId)),
                    [f, I] = function(e) {
                        let t = [],
                            n = null;
                        for (let a of e) null == a.id ? n = a : t.push(a);
                        return [n, t]
                    }(c);

                function p(e) {
                    null != n && (0, i.updateFavoriteChannelParent)(n.id, e)
                }
                return null == f && 0 === I.length ? null : (0, a.jsxs)(l.MenuItem, {
                    id: "move-to-category",
                    label: s.default.Messages.MOVE_TO,
                    children: [null != f && (0, a.jsx)(l.MenuGroup, {
                        children: (0, a.jsx)(l.MenuItem, {
                            id: "favorite-uncategorized",
                            label: f.name,
                            action: () => p(f.id)
                        })
                    }), I.length > 0 && (0, a.jsx)(l.MenuGroup, {
                        children: I.map(e => {
                            let {
                                id: t,
                                name: n
                            } = e;
                            return (0, a.jsx)(l.MenuItem, {
                                id: "favorite-".concat(t),
                                label: n,
                                action: () => p(t)
                            }, t)
                        })
                    })]
                })
            }