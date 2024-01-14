"use strict";
r.r(t), r.d(t, {
  useStickerViewAllStore: function() {
    return a
  },
  setInspectedStickerPosition: function() {
    return i
  },
  resetInspectedStickerPosition: function() {
    return c
  }
});
var s = r("308503");
let l = Object.freeze({
    inspectedStickerPosition: {
      rowIndex: -1,
      columnIndex: -1
    }
  }),
  n = (0, s.default)(e => l),
  a = n,
  i = (e, t, r) => {
    n.setState({
      inspectedStickerPosition: {
        rowIndex: t,
        columnIndex: e,
        source: r
      }
    })
  },
  c = () => {
    i(-1, -1)
  }