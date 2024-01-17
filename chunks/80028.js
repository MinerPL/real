"use strict";
n.r(t), n.d(t, {
  ClipsLengthSettings: function() {
    return s
  },
  ClipsViewerConnectivitySettings: function() {
    return a
  },
  DEFAULT_KEYBIND: function() {
    return u
  },
  CLIPS_TOAST_DURATION: function() {
    return c
  },
  ClipsLogger: function() {
    return d
  },
  CLIPS_EXPORT_FILENAME: function() {
    return f
  },
  CURRENT_CLIP_METADATA_VERSION: function() {
    return E
  },
  CLIPS_HARDWARE_CLASSIFICATION_VERSION: function() {
    return h
  },
  WINDOWS_HARDWARE_MINIMUM_GPU_REGEX: function() {
    return p
  },
  WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
    return _
  },
  OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX: function() {
    return S
  },
  MIN_CLIP_DURATION_SECONDS: function() {
    return m
  },
  CLIP_PLAYING_DEBOUNCE_MS: function() {
    return T
  },
  CLIP_NAME_MIN_CHAR_LENGTH: function() {
    return g
  },
  CLIP_NAME_MAX_CHAR_LENGTH: function() {
    return I
  },
  CLIPS_EDIT_MODAL_KEY: function() {
    return C
  },
  CLIPS_GALLERY_MODAL_KEY: function() {
    return v
  },
  CLIPS_THUMBNAIL_MAX_WIDTH: function() {
    return A
  },
  CLIPS_THUMBNAIL_MAX_HEIGHT: function() {
    return R
  },
  CLIPS_MAX_PARTICIPANTS: function() {
    return N
  },
  CLIP_NAME_TEMPLATE: function() {
    return O
  },
  MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: function() {
    return D
  },
  CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY: function() {
    return y
  },
  SEEK_DENOMINATOR: function() {
    return P
  },
  SEEK_SHIFT_MODIFIER: function() {
    return L
  }
});
var i, r, s, a, o = n("605250"),
  l = n("718517");
(i = s || (s = {}))[i.SECONDS_30 = 30 * l.default.Millis.SECOND] = "SECONDS_30", i[i.MINUTES_1 = l.default.Millis.MINUTE] = "MINUTES_1", i[i.MINUTES_2 = 2 * l.default.Millis.MINUTE] = "MINUTES_2", (r = a || (a = {}))[r.ALL = 0] = "ALL", r[r.FRIENDS = 1] = "FRIENDS";
let u = "alt+c",
  c = 6 * l.default.Millis.SECOND,
  d = new o.default("Clips"),
  f = e => "Discord_Clip_".concat(e, ".mp4"),
  E = 3,
  h = 1,
  p = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
  _ = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
  S = /(Apple M[12].*)/,
  m = .1,
  T = 25,
  g = 0,
  I = 200,
  C = "clips-edit",
  v = "clips-gallery",
  A = 640,
  R = 360,
  N = 100,
  O = e => "Clip - ".concat(new Date(e).toLocaleString()),
  D = 15,
  y = 15e3,
  P = 30,
  L = 10