"use strict";
var s, i, r, a, o, d, u, l, f, _, c, g, m, h;
n.r(t), n.d(t, {
  StickerFormat: function() {
    return s
  },
  MetaStickerType: function() {
    return i
  },
  StickerExtensions: function() {
    return r
  },
  isAnimatedSticker: function() {
    return v
  },
  isCustomSticker: function() {
    return E
  },
  StickerGridItemTypes: function() {
    return a
  },
  StickerCategoryTypes: function() {
    return o
  },
  StickerMetadataTypes: function() {
    return d
  },
  StickerSelectLocation: function() {
    return u
  }
}), (l = s || (s = {}))[l.PNG = 1] = "PNG", l[l.APNG = 2] = "APNG", l[l.LOTTIE = 3] = "LOTTIE", l[l.GIF = 4] = "GIF", (f = i || (i = {}))[f.STANDARD = 1] = "STANDARD", f[f.GUILD = 2] = "GUILD", (_ = r || (r = {})).PNG = "png", _.APNG = "png", _.LOTTIE = "json", _.WEBP = "webp", _.GIF = "gif";
let v = e => 1 !== e,
  E = e => 1 !== e;
(c = a || (a = {}))[c.STICKER = 0] = "STICKER", c[c.CREATE_STICKER = 1] = "CREATE_STICKER", (g = o || (o = {})).PACK = "PACK", g.FAVORITE = "FAVORITE", g.RECENT = "RECENT", g.SEARCH_RESULTS = "SEARCH_RESULTS", g.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS", g.GUILD = "GUILD", g.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL", g.CREATE_STICKER = "CREATE_STICKER", (m = d || (d = {}))[m.STICKER_NAME = 0] = "STICKER_NAME", m[m.TAG = 1] = "TAG", m[m.CORRELATED_EMOJI = 2] = "CORRELATED_EMOJI", m[m.GUILD_NAME = 3] = "GUILD_NAME", m[m.PACK_NAME = 4] = "PACK_NAME", (h = u || (u = {}))[h.STICKER_PICKER = 0] = "STICKER_PICKER", h[h.EXPRESSION_SUGGESTIONS = 1] = "EXPRESSION_SUGGESTIONS", h[h.AUTOCOMPLETE = 2] = "AUTOCOMPLETE"