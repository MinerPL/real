"use strict";
n.r(t), n.d(t, {
  useFavoritesTooltipStore: function() {
    return l
  }
});
var i = n("308503");
let l = (0, i.default)(e => ({
  favoriteAdded: !1,
  notifyFavoriteAdded: () => e({
    favoriteAdded: !0
  }),
  clearFavoriteAdded: () => e({
    favoriteAdded: !1
  })
}))