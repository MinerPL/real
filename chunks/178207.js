"use strict";
n.r(t), n.d(t, {
  trackStickerPickerOpen: function() {
    return u
  },
  trackStickerFavorited: function() {
    return d
  },
  trackStickerSearchStart: function() {
    return c
  },
  trackStickerSearchResultsViewed: function() {
    return f
  },
  trackStickerSearchSelect: function() {
    return p
  },
  trackStickerSelect: function() {
    return m
  },
  trackStickerSearchEmpty: function() {
    return h
  }
});
var l = n("716241"),
  i = n("599110"),
  r = n("161585"),
  o = n("49111"),
  s = n("13030"),
  a = n("646718");
let u = e => {
    let {
      containerWidth: t,
      favoriteStickers: n,
      frequentlyUsedStickers: i,
      guildStickers: a,
      stickersTotal: u
    } = e;
    l.default.trackWithMetadata(o.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
      width: t,
      tab: s.ExpressionPickerViewType.STICKER,
      badged: !1,
      num_expressions_favorites: n.length,
      num_animated_expressions_favorites: n.filter(e => (0, r.isAnimatedSticker)(e.format_type)).length,
      num_custom_expressions_favorites: n.filter(e => (0, r.isCustomSticker)(e.type)).length,
      num_standard_expressions_favorites: n.filter(e => !(0, r.isCustomSticker)(e.type)).length,
      num_expressions_frecent: i.length,
      num_custom_expressions_frecent: i.filter(e => (0, r.isCustomSticker)(e.type)).length,
      num_animated_expressions_frecent: i.filter(e => (0, r.isAnimatedSticker)(e.format_type)).length,
      num_standard_expressions_frecent: i.filter(e => !(0, r.isCustomSticker)(e.type)).length,
      num_current_guild_expressions: a.length,
      num_custom_expressions_total: u
    })
  },
  d = e => {
    let t, {
      sticker: n,
      location: i
    } = e;
    n.type === r.MetaStickerType.GUILD && (t = n.guild_id), l.default.trackWithMetadata(o.AnalyticEvents.EXPRESSION_FAVORITED, {
      location: i,
      expression_type: s.ExpressionPickerViewType.STICKER,
      expression_id: n.id,
      expression_name: n.name,
      expression_guild_id: t,
      is_animated: (0, r.isAnimatedSticker)(n.format_type),
      is_custom: (0, r.isCustomSticker)(n.type)
    })
  },
  c = () => {
    i.default.track(o.AnalyticEvents.SEARCH_STARTED, {
      search_type: o.SearchTypes.STICKER
    })
  },
  f = (e, t, n) => {
    l.default.trackWithMetadata(o.AnalyticEvents.SEARCH_RESULT_VIEWED, {
      search_type: o.SearchTypes.STICKER,
      total_results: t,
      query: e,
      is_suggestion: n
    })
  },
  p = (e, t, n) => {
    let i;
    let {
      sticker: s
    } = e;
    s.type === r.MetaStickerType.GUILD && (i = s.guild_id), l.default.trackWithMetadata(o.AnalyticEvents.SEARCH_RESULT_SELECTED, {
      load_id: s.id,
      search_type: o.SearchTypes.STICKER,
      source_object: "Sticker Picker",
      total_results: n,
      expression_guild_id: i,
      sticker_id: s.id,
      query: t
    })
  },
  m = e => {
    let t;
    let {
      sticker: n,
      category: i
    } = e;
    n.type === r.MetaStickerType.GUILD && (t = n.guild_id), l.default.trackWithMetadata(o.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: a.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
      expression_id: n.id,
      expression_name: n.name,
      expression_picker_section: i,
      expression_guild_id: t,
      is_animated: (0, r.isAnimatedSticker)(n.format_type),
      is_custom: (0, r.isCustomSticker)(n.type)
    })
  },
  h = e => {
    null != e && "" !== e && l.default.trackWithMetadata(o.AnalyticEvents.SEARCH_RESULT_EMPTY, {
      query: e,
      search_type: o.SearchTypes.STICKER,
      source_object: "Sticker Picker"
    })
  }