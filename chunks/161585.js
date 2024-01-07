            "use strict";
            var i, a, l, s, r, u, o, d, c, _, E, f, h, p;
            n.r(t), n.d(t, {
                StickerFormat: function() {
                    return i
                },
                MetaStickerType: function() {
                    return a
                },
                StickerExtensions: function() {
                    return l
                },
                isAnimatedSticker: function() {
                    return T
                },
                isCustomSticker: function() {
                    return C
                },
                StickerGridItemTypes: function() {
                    return s
                },
                StickerCategoryTypes: function() {
                    return r
                },
                StickerMetadataTypes: function() {
                    return u
                },
                StickerSelectLocation: function() {
                    return o
                }
            }), (d = i || (i = {}))[d.PNG = 1] = "PNG", d[d.APNG = 2] = "APNG", d[d.LOTTIE = 3] = "LOTTIE", d[d.GIF = 4] = "GIF", (c = a || (a = {}))[c.STANDARD = 1] = "STANDARD", c[c.GUILD = 2] = "GUILD", (_ = l || (l = {})).PNG = "png", _.APNG = "png", _.LOTTIE = "json", _.WEBP = "webp", _.GIF = "gif";
            let T = e => 1 !== e,
                C = e => 1 !== e;
            (E = s || (s = {}))[E.STICKER = 0] = "STICKER", E[E.CREATE_STICKER = 1] = "CREATE_STICKER", (f = r || (r = {})).PACK = "PACK", f.FAVORITE = "FAVORITE", f.RECENT = "RECENT", f.SEARCH_RESULTS = "SEARCH_RESULTS", f.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS", f.GUILD = "GUILD", f.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL", f.CREATE_STICKER = "CREATE_STICKER", (h = u || (u = {}))[h.STICKER_NAME = 0] = "STICKER_NAME", h[h.TAG = 1] = "TAG", h[h.CORRELATED_EMOJI = 2] = "CORRELATED_EMOJI", h[h.GUILD_NAME = 3] = "GUILD_NAME", h[h.PACK_NAME = 4] = "PACK_NAME", (p = o || (o = {}))[p.STICKER_PICKER = 0] = "STICKER_PICKER", p[p.EXPRESSION_SUGGESTIONS = 1] = "EXPRESSION_SUGGESTIONS", p[p.AUTOCOMPLETE = 2] = "AUTOCOMPLETE"