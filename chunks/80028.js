"use strict";
n.r(t), n.d(t, {
  ClipsLengthSettings: function() {
    return r
  },
  ClipsViewerConnectivitySettings: function() {
    return a
  },
  DEFAULT_KEYBIND: function() {
    return u
  },
  CLIPS_TOAST_DURATION: function() {
    return d
  },
  ClipsLogger: function() {
    return c
  },
  CLIPS_EXPORT_FILENAME: function() {
    return f
  },
  CURRENT_CLIP_METADATA_VERSION: function() {
    return _
  },
  CLIPS_HARDWARE_CLASSIFICATION_VERSION: function() {
    return h
  },
  WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: function() {
    return g
  },
  WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
    return m
  },
  OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
    return E
  },
  MIN_CLIP_DURATION_SECONDS: function() {
    return p
  },
  CLIP_PLAYING_DEBOUNCE_MS: function() {
    return v
  },
  CLIP_NAME_MIN_CHAR_LENGTH: function() {
    return S
  },
  CLIP_NAME_MAX_CHAR_LENGTH: function() {
    return T
  },
  CLIPS_EDIT_MODAL_KEY: function() {
    return I
  },
  CLIPS_GALLERY_MODAL_KEY: function() {
    return C
  },
  CLIPS_THUMBNAIL_MAX_WIDTH: function() {
    return A
  },
  CLIPS_THUMBNAIL_MAX_HEIGHT: function() {
    return y
  },
  CLIPS_MAX_PARTICIPANTS: function() {
    return N
  },
  CLIP_NAME_TEMPLATE: function() {
    return R
  },
  MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: function() {
    return O
  },
  CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY: function() {
    return D
  },
  SEEK_DENOMINATOR: function() {
    return P
  },
  SEEK_SHIFT_MODIFIER: function() {
    return b
  }
});
var i, s, r, a, o = n("605250"),
  l = n("718517");
(i = r || (r = {}))[i.SECONDS_30 = 30 * l.default.Millis.SECOND] = "SECONDS_30", i[i.MINUTES_1 = l.default.Millis.MINUTE] = "MINUTES_1", i[i.MINUTES_2 = 2 * l.default.Millis.MINUTE] = "MINUTES_2", (s = a || (a = {}))[s.ALL = 0] = "ALL", s[s.FRIENDS = 1] = "FRIENDS";
let u = "alt+c",
  d = 6 * l.default.Millis.SECOND,
  c = new o.default("Clips"),
  f = e => "Discord_Clip_".concat(e, ".mp4"),
  _ = 3,
  h = 1,
  g = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
  m = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
  E = /(Apple M[12].*)/,
  p = .1,
  v = 25,
  S = 0,
  T = 200,
  I = "clips-edit",
  C = "clips-gallery",
  A = 640,
  y = 360,
  N = 100,
  R = e => "Clip - ".concat(new Date(e).toLocaleString()),
  O = 15,
  D = 3e4,
  P = 30,
  b = 10