"use strict";
var t, o, n, r;
E.r(_), E.d(_, {
  JumpTypes: function() {
    return t
  },
  RunningProcessFullscreenType: function() {
    return o
  },
  DEFAULT_OVERLAY_OPTIONS: function() {
    return i
  }
}), (n = t || (t = {})).ANIMATED = "ANIMATED", n.INSTANT = "INSTANT", (r = o || (o = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.WINDOWED = 1] = "WINDOWED", r[r.MAXIMIZED = 2] = "MAXIMIZED", r[r.BORDERLESS_FULLSCREEN = 3] = "BORDERLESS_FULLSCREEN", r[r.FULLSCREEN = 4] = "FULLSCREEN", r[r.MINIMIZED = 5] = "MINIMIZED";
let i = {
  compatibilityHook: !1,
  warn: !1,
  enabled: !1,
  allowHook: !0,
  supportsOutOfProcessOverlay: !1
}