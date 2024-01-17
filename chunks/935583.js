"use strict";
var t, o, n, r;
E.r(_), E.d(_, {
  dirtyChars: function() {
    return i
  },
  coalescePeriods: function() {
    return a
  },
  EditState: function() {
    return t
  },
  PomeloEntrypoints: function() {
    return o
  },
  MAX_DISPLAY_NAME_LENGTH: function() {
    return I
  },
  POMELO_KEYWORD: function() {
    return s
  },
  CONTROL_CHARACTERS_CODE: function() {
    return T
  },
  TIMEOUT_TIME: function() {
    return S
  }
});
let i = /([^A-Za-z0-9_.]+)/g,
  a = /\.+/g;
(n = t || (t = {})).NONE = "none", n.EDIT_DISPLAY_NAME = "display-name", n.EDIT_USERNAME = "username", n.PREVIEW = "preview", n.SUGGESTION = "suggestion", (r = o || (o = {})).APP_START = "app start", r.NOTICE = "notice", r.USER_SETTINGS = "user settings", r.USER_SETTINGS_EDIT = "user settings edit", r.YOU_TAB = "you tab";
let I = 32,
  s = "pomelo",
  T = [1564, 917505, 12644, 65279, 173, 6068, 10240, 4447, 847, 4448, 65440],
  S = 2e3