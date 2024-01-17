"use strict";
n.r(t), n.d(t, {
  navigateToOwnedStickerPack: function() {
    return r
  }
});
var s = n("986632"),
  l = n("659500"),
  a = n("49111"),
  i = n("13030");

function r(e) {
  let {
    stickerPack: t,
    stickerPickerCategories: n
  } = e;
  l.ComponentDispatch.dispatchToLastSubscribed(a.ComponentActions.OPEN_EXPRESSION_PICKER, {
    activeView: i.ExpressionPickerViewType.STICKER
  });
  let r = n.findIndex(e => e.id === t.id); - 1 !== r && s.StickerPickerStore.setActiveCategoryIndex(r)
}