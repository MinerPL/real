"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("424973"), n("222007");
var a = n("446674"),
  l = n("913144"),
  s = n("867805"),
  i = n("697218"),
  r = n("402671"),
  o = n("315841"),
  u = n("52477"),
  d = n("827520");
let c = {},
  f = {},
  h = {},
  p = !0,
  m = null;

function E(e) {
  if (null == f[e]) {
    let t = i.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, d.AVATAR_COLOR_AVATAR_SIZE),
      a = new Image;
    a.src = n, f[e] = a
  }
}
class C extends a.default.Store {
  get visibleOverlayCanvas() {
    return p
  }
  getDrawables(e) {
    return null != c[e] ? c[e] : []
  }
  getAvatarImage(e) {
    return f[e]
  }
  getEmojiImage(e) {
    return h[e]
  }
  getDrawMode() {
    return m
  }
}
C.displayName = "SharedCanvasStore";
let g = new C(l.default, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
    let {
      lineId: t,
      newPoints: n,
      userId: a,
      streamerId: l
    } = e, s = c[l];
    if (null == s) c[l] = [{
      type: o.DrawableType.LINE,
      id: t,
      userId: a,
      points: n
    }];
    else {
      let e = s.find(e => e.id === t);
      null == e ? s.push({
        type: o.DrawableType.LINE,
        id: t,
        userId: a,
        points: n
      }) : (0, u.isLine)(e) && e.points.push(...n)
    }
    E(a)
  },
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
    var t, n, a;
    let {
      emojiHose: l,
      streamerId: i,
      userId: u
    } = e, f = {
      ...l,
      type: o.DrawableType.EMOJI_HOSE
    };
    if (null == c[i]) c[i] = [f];
    else {
      let e = c[i].findIndex(e => e.id === l.id);
      e >= 0 ? c[i][e] = {
        ...c[i][e],
        ...f
      } : c[i].push(f)
    }
    let p = null !== (n = null !== (t = l.emojiId) && void 0 !== t ? t : l.emojiName) && void 0 !== n ? n : "";
    if (null == h[p]) {
      let e = null != l.emojiName ? s.default.convertNameToSurrogate(l.emojiName) : null;
      h[p] = new Image, h[p].src = (0, r.getEmojiUrl)({
        id: l.emojiId,
        name: null !== (a = null != e ? e : l.emojiName) && void 0 !== a ? a : "",
        animated: !1
      }, d.EMOJI_HOSE_EMOJI_SIZE)
    }
    E(u)
  },
  SHARED_CANVAS_CLEAR_DRAWABLES: function(e) {
    let {
      drawables: t,
      streamerId: n
    } = e;
    if (null != c[n]) {
      let e = new Set;
      t.forEach(t => e.add(t.id)), c[n] = c[n].filter(t => !e.has(t.id))
    }
  },
  SHARED_CANVAS_SET_DRAW_MODE: function(e) {
    let {
      drawMode: t
    } = e;
    m = t
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
    let {} = e;
    p = !p
  }
});
var S = g