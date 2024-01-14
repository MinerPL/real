"use strict";
n.r(t), n.d(t, {
  drawLinePoint: function() {
    return o
  },
  addLinePoints: function() {
    return u
  },
  updateLinePoints: function() {
    return d
  },
  startEmojiHose: function() {
    return c
  },
  stopEmojiHose: function() {
    return f
  },
  stopRenderedEmojiHose: function() {
    return h
  },
  updateEmojiHose: function() {
    return p
  },
  clearDrawables: function() {
    return m
  },
  setDrawMode: function() {
    return E
  },
  toggleOverlayCanvas: function() {
    return C
  }
});
var a = n("981980"),
  l = n("872717"),
  s = n("913144"),
  i = n("315841"),
  r = n("49111");

function o(e, t, n, a, l) {
  s.default.dispatch({
    type: "SHARED_CANVAS_DRAW_LINE_POINT",
    channelId: e,
    userId: n,
    lineId: t,
    streamerId: a,
    point: l
  })
}

function u(e, t, n, a) {
  return l.default.post({
    url: r.Endpoints.SHARED_CANVAS_LINES(e, n),
    body: {
      line_id: t,
      points: a
    }
  })
}

function d(e, t, n, a) {
  s.default.dispatch({
    type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
    userId: t,
    lineId: e,
    newPoints: a,
    streamerId: n
  })
}

function c(e, t, n) {
  return l.default.post({
    url: r.Endpoints.SHARED_CANVAS_EMOJI_HOSES(e, t),
    body: {
      emoji_hose: n
    }
  })
}

function f(e, t, n) {
  l.default.delete({
    url: r.Endpoints.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
    backoff: new a.default
  })
}

function h(e, t) {
  t.state = i.EmojiHoseState.STOP, s.default.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: t,
    userId: t.userId,
    streamerId: e
  })
}

function p(e, t, n) {
  s.default.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: e,
    userId: t,
    streamerId: n
  })
}

function m(e, t) {
  s.default.dispatch({
    type: "SHARED_CANVAS_CLEAR_DRAWABLES",
    drawables: e,
    streamerId: t
  })
}

function E(e) {
  s.default.dispatch({
    type: "SHARED_CANVAS_SET_DRAW_MODE",
    drawMode: e
  })
}

function C() {
  s.default.dispatch({
    type: "TOGGLE_OVERLAY_CANVAS"
  })
}