"use strict";
n.r(t), n.d(t, {
  navigateToOwnedStickerPack: function() {
    return r
  }
});
var a = n("986632"),
  s = n("659500"),
  l = n("49111"),
  i = n("13030");

function r(e) {
  let {
    stickerPack: t,
    stickerPickerCategories: n
  } = e;
  s.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.OPEN_EXPRESSION_PICKER, {
    activeView: i.ExpressionPickerViewType.STICKER
  });
  let r = n.findIndex(e => e.id === t.id); - 1 !== r && a.StickerPickerStore.setActiveCategoryIndex(r)
}