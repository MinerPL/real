"use strict";
var i, s, r, a, o, l, u, d, c, f;
n.r(t), n.d(t, {
  EmojiCategoryTypes: function() {
    return i
  },
  GRID_NAVIGATOR_ID: function() {
    return _
  },
  EmojiCategories: function() {
    return s
  },
  EmojiSubCategory: function() {
    return r
  },
  INACTIVE_CATEGORY_INDEX: function() {
    return h
  },
  EmojiSize: function() {
    return o
  },
  EMOJI_PICKER_TAB_PANEL_ID: function() {
    return g
  },
  EMOJI_PICKER_TAB_ID: function() {
    return m
  },
  SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
    return E
  },
  SOUNDBOARD_PICKER_TAB_ID: function() {
    return p
  },
  GIF_PICKER_TAB_PANEL_ID: function() {
    return v
  },
  GIF_PICKER_TAB_ID: function() {
    return S
  },
  CUSTOM_UPLOAD_PICKER_TAB_PANEL_ID: function() {
    return T
  },
  CUSTOM_UPLOAD_PICKER_TAB_ID: function() {
    return I
  },
  EMOJI_SIZE_MAP: function() {
    return C
  },
  EMOJI_ROW_SIZE: function() {
    return A
  }
}), (l = i || (i = {})).GUILD = "GUILD", l.PACK = "PACK", l.UNICODE = "UNICODE", l.RECENT = "RECENT", l.CUSTOM = "CUSTOM", l.SEARCH_RESULTS = "SEARCH_RESULTS", l.FAVORITES = "FAVORITES", l.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", l.PREMIUM_UPSELL = "PREMIUM_UPSELL";
let _ = "emoji-picker-grid";
(u = s || (s = {})).RECENT = "recent", u.FAVORITES = "favorites", u.TOP_GUILD_EMOJI = "top guild emoji", u.CUSTOM = "custom", u.PEOPLE = "people", u.NATURE = "nature", u.FOOD = "food", u.ACTIVITY = "activity", u.TRAVEL = "travel", u.OBJECTS = "objects", u.SYMBOLS = "symbols", u.FLAGS = "flags", u.PREMIUM_UPSELL = "premium emoji", (d = r || (r = {})).NONE = "", d.TOP_GUILD_EMOJI = "top_server", d.NEWLY_ADDED_EMOJI = "newly_added", (c = a || (a = {}))[c.EMOJI = 0] = "EMOJI", c[c.NSFW = 1] = "NSFW";
let h = -1;
(f = o || (o = {}))[f.MEDIUM = 40] = "MEDIUM", f[f.LARGE = 48] = "LARGE";
let g = "emoji-picker-tab-panel",
  m = "emoji-picker-tab",
  E = "soundboard-picker-tab-panel",
  p = "soundboard-picker-tab",
  v = "gif-picker-tab-panel",
  S = "gif-picker-tab",
  T = "custom-upload-picker-tab-panel",
  I = "custom-upload-picker-tab",
  C = {
    reaction: 32,
    default: 44,
    jumbo: 96
  },
  A = 9