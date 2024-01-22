"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("627445"),
  r = a.n(s),
  i = a("241488"),
  o = a("254398"),
  u = a("264317"),
  c = a("929574");

function d(e) {
  let {
    channel: t,
    layout: a,
    parentModalKey: s,
    lastActiveInputIndex: d,
    onEmojiSelect: E,
    onGifSelect: _,
    onCustomUpload: A,
    positionTargetRef: m
  } = e, {
    showPollExpressionPicker: f,
    closePollExpressionPicker: L,
    chatInputType: T
  } = (0, u.default)(a), C = n.useCallback(e => {
    r(null != d, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && _(t.id, d, (0, o.makeTenorProxyURL)(e.gifSrc)), L()
  }, [L, d, _, t.id]), p = n.useCallback(e => {
    r(null != d, "Expected to have an active input"), r(null != e, "Expected to have an emoji"), E(e, d), L()
  }, [d, E, L]), R = n.useCallback(e => {
    r(null != d, "Expected to have an active input"), A(t.id, d, e), L()
  }, [t.id, L, d, A]), P = n.useCallback(() => {}, []);
  return f ? (0, l.jsx)(i.default, {
    positionTargetRef: m,
    type: T,
    hideGifFavorites: !0,
    includeCreateEmojiButton: !1,
    onSelectGIF: C,
    onSelectEmoji: p,
    onSelectSticker: P,
    onCustomUpload: R,
    channel: t,
    parentModalKey: s,
    closeOnModalOuterClick: !0,
    position: "bottom",
    align: "left",
    positionLayerClassName: c.expressionPickerPositionLayer
  }) : null
}