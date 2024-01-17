"use strict";
n.r(t), n.d(t, {
  trackStickerPickerOpen: function() {
    return d
  },
  trackStickerFavorited: function() {
    return c
  },
  trackStickerSearchStart: function() {
    return o
  },
  trackStickerSearchResultsViewed: function() {
    return m
  },
  trackStickerSearchSelect: function() {
    return f
  },
  trackStickerSelect: function() {
    return _
  },
  trackStickerSearchEmpty: function() {
    return g
  }
});
var a = n("716241"),
  s = n("599110"),
  i = n("161585"),
  r = n("49111"),
  l = n("13030"),
  u = n("646718");
let d = e => {
    let {
      containerWidth: t,
      favoriteStickers: n,
      frequentlyUsedStickers: s,
      guildStickers: u,
      stickersTotal: d
    } = e;
    a.default.trackWithMetadata(r.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
      width: t,
      tab: l.ExpressionPickerViewType.STICKER,
      badged: !1,
      num_expressions_favorites: n.length,
      num_animated_expressions_favorites: n.filter(e => (0, i.isAnimatedSticker)(e.format_type)).length,
      num_custom_expressions_favorites: n.filter(e => (0, i.isCustomSticker)(e.type)).length,
      num_standard_expressions_favorites: n.filter(e => !(0, i.isCustomSticker)(e.type)).length,
      num_expressions_frecent: s.length,
      num_custom_expressions_frecent: s.filter(e => (0, i.isCustomSticker)(e.type)).length,
      num_animated_expressions_frecent: s.filter(e => (0, i.isAnimatedSticker)(e.format_type)).length,
      num_standard_expressions_frecent: s.filter(e => !(0, i.isCustomSticker)(e.type)).length,
      num_current_guild_expressions: u.length,
      num_custom_expressions_total: d
    })
  },
  c = e => {
    let t, {
      sticker: n,
      location: s
    } = e;
    n.type === i.MetaStickerType.GUILD && (t = n.guild_id), a.default.trackWithMetadata(r.AnalyticEvents.EXPRESSION_FAVORITED, {
      location: s,
      expression_type: l.ExpressionPickerViewType.STICKER,
      expression_id: n.id,
      expression_name: n.name,
      expression_guild_id: t,
      is_animated: (0, i.isAnimatedSticker)(n.format_type),
      is_custom: (0, i.isCustomSticker)(n.type)
    })
  },
  o = () => {
    s.default.track(r.AnalyticEvents.SEARCH_STARTED, {
      search_type: r.SearchTypes.STICKER
    })
  },
  m = (e, t, n) => {
    a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_RESULT_VIEWED, {
      search_type: r.SearchTypes.STICKER,
      total_results: t,
      query: e,
      is_suggestion: n
    })
  },
  f = (e, t, n) => {
    let s;
    let {
      sticker: l
    } = e;
    l.type === i.MetaStickerType.GUILD && (s = l.guild_id), a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_RESULT_SELECTED, {
      load_id: l.id,
      search_type: r.SearchTypes.STICKER,
      source_object: "Sticker Picker",
      total_results: n,
      expression_guild_id: s,
      sticker_id: l.id,
      query: t
    })
  },
  _ = e => {
    let t;
    let {
      sticker: n,
      category: s
    } = e;
    n.type === i.MetaStickerType.GUILD && (t = n.guild_id), a.default.trackWithMetadata(r.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: u.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
      expression_id: n.id,
      expression_name: n.name,
      expression_picker_section: s,
      expression_guild_id: t,
      is_animated: (0, i.isAnimatedSticker)(n.format_type),
      is_custom: (0, i.isCustomSticker)(n.type)
    })
  },
  g = e => {
    null != e && "" !== e && a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_RESULT_EMPTY, {
      query: e,
      search_type: r.SearchTypes.STICKER,
      source_object: "Sticker Picker"
    })
  }