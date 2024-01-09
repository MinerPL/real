            "use strict";
            n.r(t), n.d(t, {
                useFavoritesTooltipStore: function() {
                    return l
                }
            });
            var a = n("308503");
            let l = (0, a.default)(e => ({
                favoriteAdded: !1,
                notifyFavoriteAdded: () => e({
                    favoriteAdded: !0
                }),
                clearFavoriteAdded: () => e({
                    favoriteAdded: !1
                })
            }))