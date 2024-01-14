"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("627445"),
  l = n.n(i),
  r = n("446674"),
  o = n("913144"),
  a = n("816454");
let u = new Map;

function s(e) {
  let t = u.get(e);
  return null == t ? (console.warn("Window state not initialized", e), {
    isElementFullscreen: !1,
    focused: !1,
    windowSize: {
      width: 0,
      height: 0
    }
  }) : t
}
class c extends r.default.Store {
  isFocused() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return s(e).focused
  }
  getFocusedWindowId() {
    let e = null;
    return u.forEach((t, n) => {
      t.focused && (e = n)
    }), e
  }
  isElementFullScreen() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return s(e).isElementFullscreen
  }
  windowSize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return s(e).windowSize
  }
}
c.displayName = "WindowStore";
let d = new c(o.default, {
  WINDOW_INIT: function(e) {
    l(!u.has(e.windowId), "Window initialized multiple times");
    let {
      width: t,
      height: n,
      isElementFullscreen: i,
      focused: r
    } = e;
    return u.set(e.windowId, {
      windowSize: {
        width: t,
        height: n
      },
      isElementFullscreen: i,
      focused: r
    }), !0
  },
  WINDOW_FULLSCREEN_CHANGE: function(e) {
    let t = s(e.windowId);
    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
      ...t,
      isElementFullscreen: e.isElementFullscreen
    }), !0)
  },
  WINDOW_FOCUS: function(e) {
    let t = s(e.windowId);
    return t.focused !== e.focused && (u.set(e.windowId, {
      ...t,
      focused: e.focused
    }), !0)
  },
  WINDOW_RESIZED: function(e) {
    let t = s(e.windowId);
    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
      ...t,
      windowSize: {
        width: e.width,
        height: e.height
      }
    }), !0)
  },
  WINDOW_UNLOAD: function(e) {
    return u.delete(e.windowId), !0
  }
});
n.el("599110").then(n.bind(n, "599110")).then(e => {
  let {
    addExtraAnalyticsDecorator: t
  } = e;
  t(e => {
    e.client_app_state = d.isFocused() ? "focused" : "unfocused"
  })
});
var f = d