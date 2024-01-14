"use strict";
n.r(t), n.d(t, {
  isWidgetContainerVisible: function() {
    return l
  },
  dispatchOverlayWidgetIfChanged: function() {
    return s
  },
  dispatchOverlayWidgetChanged: function() {
    return o
  }
});
var i = n("913144"),
  a = n("703370");

function l(e) {
  return !e.isPreviewingInGame && !e.locked || e.pinned
}

function s(e, t, n) {
  (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || l(e) !== l(t)) && o(t, n(t))
}

function o(e, t) {
  var n, s;
  let o = l(e),
    r = a.default.getGame();
  i.default.dispatch({
    type: "OVERLAY_WIDGET_CHANGED",
    gameName: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : null,
    gameId: null !== (s = null == r ? void 0 : r.id) && void 0 !== s ? s : null,
    widgetType: e.widget,
    visible: o && t,
    locked: e.locked,
    pinned: e.pinned
  })
}