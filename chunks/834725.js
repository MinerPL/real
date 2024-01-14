"use strict";
n.r(t), n.d(t, {
  trackAutocompleteOpen: function() {
    return u
  },
  trackAutocompleteSelect: function() {
    return d
  },
  trackStickerPreviewSelect: function() {
    return c
  }
});
var l, i, r = n("716241"),
  o = n("161585"),
  s = n("599110"),
  a = n("49111");

function u(e, t, n) {
  var l, i;
  s.default.track(a.AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, {
    ...(0, r.collectChannelAnalyticsMetadata)(t),
    ...(0, r.collectGuildAnalyticsMetadata)(t.guild_id),
    autocomplete_type: e,
    num_emoji_results: null !== (l = null == n ? void 0 : n.numEmojiResults) && void 0 !== l ? l : 0,
    num_sticker_results: null !== (i = null == n ? void 0 : n.numStickerResults) && void 0 !== i ? i : 0
  })
}

function d(e, t, n, l) {
  var i, o, u, d, c;
  s.default.track(a.AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, {
    ...(0, r.collectChannelAnalyticsMetadata)(n),
    ...(0, r.collectGuildAnalyticsMetadata)(n.guild_id),
    autocomplete_type: e,
    selection_type: t,
    emoji_id: null == l ? void 0 : l.emojiId,
    sticker_id: null == l ? void 0 : l.stickerId,
    num_emoji_results: null !== (i = null == l ? void 0 : l.numEmojiResults) && void 0 !== i ? i : 0,
    num_sticker_results: null !== (o = null == l ? void 0 : l.numStickerResults) && void 0 !== o ? o : 0,
    emoji_name: null !== (u = null == l ? void 0 : l.expressionName) && void 0 !== u ? u : "",
    is_custom: null !== (d = null == l ? void 0 : l.isCustom) && void 0 !== d && d,
    is_animated: null !== (c = null == l ? void 0 : l.isAnimated) && void 0 !== c && c
  })
}(l = i || (i = {})).AUTOCOMPLETE = "autocomplete", l.AUTOSUGGEST = "autosuggest", l.STICKER_PICKER = "picker";

function c(e) {
  let {
    sticker: t,
    stickerSelectLocation: n,
    isReplacement: l,
    analyticsLocations: i
  } = e;
  s.default.track(a.AnalyticEvents.STICKER_ATTACHED, {
    replaced: l,
    source: function(e) {
      switch (e) {
        case o.StickerSelectLocation.AUTOCOMPLETE:
          return "autocomplete";
        case o.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
          return "autosuggest";
        case o.StickerSelectLocation.STICKER_PICKER:
          return "picker";
        default:
          return null
      }
    }(n),
    sticker_id: t.id,
    location_stack: i
  })
}