"use strict";
var s, i;
n.r(t), n.d(t, {
  MAX_LENGTH_SOUND_NAME: function() {
    return r
  },
  MAX_SOUND_LENGTH_SECONDS: function() {
    return a
  },
  DEFAULT_SOUND_GUILD_ID: function() {
    return o
  },
  SoundboardWheelSize: function() {
    return d
  },
  DEFAULT_KEYBIND: function() {
    return u
  },
  EMPTY_SOUND_LIST: function() {
    return l
  },
  CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
    return f
  },
  NUM_RECENTLY_HEARD_SOUNDS: function() {
    return _
  },
  NUM_FREQUENTLY_USED_SOUNDS: function() {
    return c
  }
}), n("222007");
let r = 32,
  a = 5,
  o = "DEFAULT";
(i = s || (s = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED";
let d = {
    width: 424,
    height: 424,
    padding: 100
  },
  u = "ctrl+`",
  l = [],
  f = "0",
  _ = 6,
  c = 6