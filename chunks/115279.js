"use strict";
var s, i, r, a, o, d, u, l, f, _;
n.r(t), n.d(t, {
  EmojiCategoryTypes: function() {
    return s
  },
  GRID_NAVIGATOR_ID: function() {
    return c
  },
  EmojiCategories: function() {
    return i
  },
  EmojiSubCategory: function() {
    return r
  },
  INACTIVE_CATEGORY_INDEX: function() {
    return g
  },
  EmojiSize: function() {
    return o
  },
  EMOJI_PICKER_TAB_PANEL_ID: function() {
    return m
  },
  EMOJI_PICKER_TAB_ID: function() {
    return h
  },
  SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
    return v
  },
  SOUNDBOARD_PICKER_TAB_ID: function() {
    return E
  },
  GIF_PICKER_TAB_PANEL_ID: function() {
    return p
  },
  GIF_PICKER_TAB_ID: function() {
    return y
  },
  EMOJI_SIZE_MAP: function() {
    return C
  },
  EMOJI_ROW_SIZE: function() {
    return T
  }
}), (d = s || (s = {})).GUILD = "GUILD", d.PACK = "PACK", d.UNICODE = "UNICODE", d.RECENT = "RECENT", d.CUSTOM = "CUSTOM", d.SEARCH_RESULTS = "SEARCH_RESULTS", d.FAVORITES = "FAVORITES", d.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", d.PREMIUM_UPSELL = "PREMIUM_UPSELL";
let c = "emoji-picker-grid";
(u = i || (i = {})).RECENT = "recent", u.FAVORITES = "favorites", u.TOP_GUILD_EMOJI = "top guild emoji", u.CUSTOM = "custom", u.PEOPLE = "people", u.NATURE = "nature", u.FOOD = "food", u.ACTIVITY = "activity", u.TRAVEL = "travel", u.OBJECTS = "objects", u.SYMBOLS = "symbols", u.FLAGS = "flags", u.PREMIUM_UPSELL = "premium emoji", (l = r || (r = {})).NONE = "", l.TOP_GUILD_EMOJI = "top_server", l.NEWLY_ADDED_EMOJI = "newly_added", (f = a || (a = {}))[f.EMOJI = 0] = "EMOJI", f[f.NSFW = 1] = "NSFW";
let g = -1;
(_ = o || (o = {}))[_.MEDIUM = 40] = "MEDIUM", _[_.LARGE = 48] = "LARGE";
let m = "emoji-picker-tab-panel",
  h = "emoji-picker-tab",
  v = "soundboard-picker-tab-panel",
  E = "soundboard-picker-tab",
  p = "gif-picker-tab-panel",
  y = "gif-picker-tab",
  C = {
    reaction: 32,
    default: 44,
    jumbo: 96
  },
  T = 9