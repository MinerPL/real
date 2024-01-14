"use strict";
i.r(t), i.d(t, {
  useEmojiCategories: function() {
    return A
  },
  trackPremiumSettingsPaneOpened: function() {
    return h
  },
  trackEmojiSearchStart: function() {
    return M
  },
  trackEmojiSearchResultsViewed: function() {
    return R
  },
  trackEmojiSearchSelect: function() {
    return N
  },
  trackEmojiSearchEmpty: function() {
    return P
  },
  trackEmojiFocus: function() {
    return v
  },
  trackEmojiSelect: function() {
    return F
  },
  trackEmojiFavorited: function() {
    return D
  },
  getAriaIdForEmojiCategory: function() {
    return L
  },
  getStringForEmojiCategory: function() {
    return k
  },
  allowUnicodeEmojiForIntention: function() {
    return J
  },
  useEmojiSearchResults: function() {
    return G
  },
  useFrequentlyUsedEmojis: function() {
    return x
  },
  useFavoriteEmojis: function() {
    return b
  },
  useIsFavoriteEmoji: function() {
    return w
  },
  useEmojiInPriorityOrder: function() {
    return Y
  },
  useTrackEmojiPickerOpened: function() {
    return K
  },
  getEmojiSubCategory: function() {
    return W
  },
  dedupeUnicodeEmojis: function() {
    return q
  },
  getSearchPlaceholder: function() {
    return H
  }
}), i("843762"), i("424973"), i("222007"), i("808653"), i("781738");
var n = i("884691");
i("375128");
var r = i("446674"),
  a = i("716241"),
  o = i("385976"),
  s = i("858619"),
  u = i("630400"),
  l = i("252931"),
  E = i("166465"),
  d = i("872173"),
  c = i("305961"),
  m = i("677099"),
  _ = i("599110"),
  f = i("402671"),
  g = i("577426"),
  I = i("255214"),
  p = i("352046"),
  C = i("115279"),
  O = i("49111"),
  y = i("958706"),
  T = i("13030"),
  j = i("646718"),
  S = i("782340");
let A = function(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
    (0, u.maybeFetchTopEmojisByGuild)(i);
    let a = (0, y.isExternalEmojiAllowedForIntention)(e),
      s = x(i),
      d = b(i),
      _ = (0, r.useStateFromStoresArray)([E.default], () => E.default.getSortedPackIds(), []),
      {
        topEmojis: g,
        newlyAddedEmojis: O
      } = (0, p.default)(i, e),
      {
        allEmojis: T
      } = (0, I.default)({
        topEmojis: g,
        newlyAddedEmojis: O
      }),
      {
        viewAndUseEnabled: j
      } = (0, l.useInventoryGuildPacksUserExperiment)({
        autoTrackExposure: !1
      }),
      A = (0, r.useStateFromStores)([o.default], () => o.default.getDisambiguatedEmojiContext(i), [i]),
      h = (0, r.useStateFromStores)([c.default], () => {
        var e;
        return null === (e = c.default.getGuild(i)) || void 0 === e ? void 0 : e.name
      }),
      M = n.useMemo(() => {
        let n = A.getGroupedCustomEmoji(),
          r = m.default.getFlattenedGuildIds(),
          u = [],
          l = (r, a) => {
            for (let o of r) {
              let r;
              if (a === C.EmojiCategoryTypes.PACK ? r = E.default.getPackByPackId({
                  packId: o
                }) : a === C.EmojiCategoryTypes.GUILD && (r = c.default.getGuild(o)), null == r) continue;
              let s = null == n ? void 0 : n[r.id];
              if (null == s || 0 === s.length || null != t && s.every(i => f.default.isEmojiFiltered({
                  emoji: i,
                  channel: t,
                  intention: e,
                  canViewAndUsePackEmoji: j
                }))) continue;
              let l = null;
              if (a === C.EmojiCategoryTypes.PACK) {
                let e = r;
                l = {
                  type: C.EmojiCategoryTypes.PACK,
                  pack: e,
                  id: e.id
                }
              } else a === C.EmojiCategoryTypes.GUILD && (l = {
                type: C.EmojiCategoryTypes.GUILD,
                guild: r
              });
              null != l && (r.id === i ? u.unshift(l) : u.push(l))
            }
          };
        return l(_, C.EmojiCategoryTypes.PACK), l(r, C.EmojiCategoryTypes.GUILD), o.default.categories.reduce((t, n) => {
          if (n === C.EmojiCategories.TOP_GUILD_EMOJI) {
            if (0 === T.length) return t;
            t.push({
              type: C.EmojiCategoryTypes.TOP_GUILD_EMOJI,
              id: n,
              name: S.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                guildName: h
              })
            })
          } else if (n === C.EmojiCategories.RECENT) {
            if (0 === s.length) return t;
            t.push({
              type: C.EmojiCategoryTypes.RECENT,
              id: n,
              name: S.default.Messages.EMOJI_CATEGORY_RECENT
            })
          } else if (n === C.EmojiCategories.FAVORITES) {
            if (0 === d.length) return t;
            t.push({
              type: C.EmojiCategoryTypes.FAVORITES,
              id: n,
              name: S.default.Messages.CATEGORY_FAVORITE
            })
          } else if (n === C.EmojiCategories.CUSTOM) {
            let e = u;
            !a && (e = u.filter(e => e.type === C.EmojiCategoryTypes.GUILD && e.guild.id === i)), t.push(...e)
          } else if (J(e)) t.push({
            type: C.EmojiCategoryTypes.UNICODE,
            id: n,
            name: n
          });
          return t
        }, [])
      }, [A, t, i, e, T.length, h, _, s.length, d.length, a, j]);
    return M
  },
  h = e => {
    let t = (null == e ? void 0 : e.getGuildId()) != null;
    _.default.track(O.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
      location_page: t ? O.AnalyticsPages.GUILD_CHANNEL : O.AnalyticsPages.DM_CHANNEL,
      location_section: null != e ? O.AnalyticsSections.EMOJI_PICKER_POPOUT : O.AnalyticsSections.CUSTOM_STATUS_MODAL
    })
  },
  M = (e, t) => {
    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_STARTED, {
      search_type: null != t && t === y.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
      location: e
    })
  },
  R = (e, t, i, n, r) => {
    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_VIEWED, {
      search_type: null != r && r === y.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
      total_results: e,
      num_results_locked: t,
      query: n,
      location: i
    })
  },
  N = (e, t, i, n) => {
    var r;
    let o = null !== (r = e.uniqueName) && void 0 !== r ? r : e.name;
    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_SELECTED, {
      search_type: null != n && n === y.EmojiIntention.REACTION ? O.SearchTypes.EMOJI_REACTION : O.SearchTypes.EMOJI,
      location: t,
      expression_guild_id: U(e),
      expression_pack_id: e.type === s.EmojiTypes.PACK ? e.packId : void 0,
      emoji_id: e.id,
      emoji_name: o,
      is_custom: null != e.id,
      is_animated: e.animated,
      query: i
    })
  },
  P = (e, t) => {
    a.default.trackWithMetadata(O.AnalyticEvents.SEARCH_RESULT_EMPTY, {
      search_type: O.SearchTypes.EMOJI,
      query: t,
      location: e
    })
  },
  v = e => {
    let {
      emoji: t,
      subCategory: i,
      position: n,
      newlyAddedHighlight: r
    } = e;
    a.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
      expression_section: null == i ? void 0 : i.toString(),
      newly_added_highlight: r,
      emoji_id: t.id,
      emoji_name: t.name,
      emoji_animated: t.animated,
      emoji_position: n
    })
  },
  F = e => {
    var t;
    let i, {
      emoji: n,
      location: r,
      pickerIntention: o,
      category: u,
      subCategory: l = C.EmojiSubCategory.NONE,
      position: E,
      newlyAddedHighlight: d,
      isBurstReaction: c
    } = e;
    switch (o) {
      case y.EmojiIntention.REACTION:
        i = c ? j.PremiumUpsellTypes.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : j.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
        break;
      case y.EmojiIntention.STATUS:
        i = j.PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
        break;
      default:
        i = j.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED
    }
    let m = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
    a.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: i,
      location: r,
      expression_id: n.id,
      expression_name: m,
      expression_guild_id: U(n),
      expression_pack_id: n.type === s.EmojiTypes.PACK ? n.packId : void 0,
      is_custom: null != n.id,
      is_animated: n.animated,
      expression_picker_section: u,
      expression_section: null == l ? void 0 : l.toString(),
      emoji_position: E,
      newly_added_highlight: d,
      is_burst: c
    })
  },
  D = e => {
    var t;
    let {
      emoji: i,
      location: n
    } = e, r = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
    a.default.trackWithMetadata(O.AnalyticEvents.EXPRESSION_FAVORITED, {
      location: n,
      expression_type: T.ExpressionPickerViewType.EMOJI,
      expression_id: i.id,
      expression_name: r,
      expression_guild_id: U(i),
      expression_pack_id: i.type === s.EmojiTypes.PACK ? i.packId : void 0,
      is_custom: null != i.id,
      is_animated: i.animated
    })
  };

function U(e) {
  return e.type !== s.EmojiTypes.PACK ? e.guildId : void 0
}
let L = (e, t, i) => {
    switch (e.type) {
      case C.EmojiCategoryTypes.GUILD:
        if (null != t) return t.toString();
        return "";
      case C.EmojiCategoryTypes.PACK:
        if (null != i) return i.name;
        return e.id;
      default:
        return e.id
    }
  },
  k = (e, t, i) => {
    switch (e) {
      case C.EmojiCategories.TOP_GUILD_EMOJI:
        return S.default.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
          guildName: t
        });
      case C.EmojiCategories.RECENT:
        return S.default.Messages.EMOJI_CATEGORY_RECENT;
      case C.EmojiCategories.FAVORITES:
        return S.default.Messages.CATEGORY_FAVORITE;
      case C.EmojiCategories.ACTIVITY:
        return S.default.Messages.EMOJI_CATEGORY_ACTIVITY;
      case C.EmojiCategories.FLAGS:
        return S.default.Messages.EMOJI_CATEGORY_FLAGS;
      case C.EmojiCategories.FOOD:
        return S.default.Messages.EMOJI_CATEGORY_FOOD;
      case C.EmojiCategories.NATURE:
        return S.default.Messages.EMOJI_CATEGORY_NATURE;
      case C.EmojiCategories.OBJECTS:
        return S.default.Messages.EMOJI_CATEGORY_OBJECTS;
      case C.EmojiCategories.PEOPLE:
        return S.default.Messages.EMOJI_CATEGORY_PEOPLE;
      case C.EmojiCategories.SYMBOLS:
        return S.default.Messages.EMOJI_CATEGORY_SYMBOLS;
      case C.EmojiCategories.TRAVEL:
        return S.default.Messages.EMOJI_CATEGORY_TRAVEL;
      case C.EmojiCategories.PREMIUM_UPSELL:
        return S.default.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
      default:
        return null != i ? S.default.Messages.EMOJI_CATEGORY_PACK.format({
          packName: i
        }) : null != t ? t : e
    }
  },
  J = e => e !== y.EmojiIntention.COMMUNITY_CONTENT_ONLY;

function G(e, t, i) {
  let {
    viewAndUseEnabled: a
  } = (0, l.useInventoryGuildPacksUserExperiment)({
    autoTrackExposure: !1
  });
  n.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []);
  let s = (0, y.isExternalEmojiAllowedForIntention)(i);
  return (0, r.useStateFromStores)([o.default], () => {
    let n = e.replace(/^:/, "").replace(/:$/, "");
    return "" === n ? null : o.default.searchWithoutFetchingLatest({
      channel: t,
      query: n,
      count: 0,
      intention: i,
      includeExternalGuilds: s,
      canViewAndUsePackEmoji: a
    })
  }, [t, i, e, s, a], r.statesWillNeverBeEqual)
}

function x(e) {
  return n.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, r.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
}

function b(e) {
  return n.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, r.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
}

function w(e, t) {
  return n.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, r.useStateFromStores)([o.default], () => null != t && o.default.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
}

function Y(e) {
  return n.useEffect(() => {
    d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, r.useStateFromStoresArray)([o.default], () => o.default.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
}

function K(e) {
  let t = n.useCallback(() => {
    (0, g.default)(e)
  }, [e]);
  return n.useEffect(() => {
    e.intention === y.EmojiIntention.REACTION && t()
  }, []), {
    trackOnPickerOpen: t
  }
}

function W(e, t, i) {
  if (null == i) return C.EmojiSubCategory.NONE;
  let n = e.map(e => {
      var t, i;
      return null !== (i = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== i ? i : e.name
    }),
    r = t.map(e => e.id);
  return n.includes(i) ? C.EmojiSubCategory.TOP_GUILD_EMOJI : r.includes(i) ? C.EmojiSubCategory.NEWLY_ADDED_EMOJI : C.EmojiSubCategory.NONE
}

function q(e) {
  let t = new Set,
    i = e.filter(e => null == e.uniqueName || (t.has(e.optionallyDiverseSequence) ? void 0 : (t.add(e.optionallyDiverseSequence), !0)));
  return i
}

function H(e, t) {
  return e === y.EmojiIntention.REACTION ? t ? S.default.Messages.SEARCH_FOR_SUPER_REACTION : S.default.Messages.SEARCH_FOR_REACTION : S.default.Messages.SEARCH_FOR_EMOJI
}