"use strict";
i.r(t), i.d(t, {
  EmojiGridItemTypes: function() {
    return n
  },
  useEmojiGrid: function() {
    return D
  },
  EmojiUpsellType: function() {
    return s
  },
  useEmojiSelectHandler: function() {
    return b
  },
  useCategorySelectHandler: function() {
    return U
  }
}), i("222007"), i("424973");
var n, l, s, a, r, o, u = i("884691"),
  c = i("917351"),
  d = i.n(c),
  f = i("748820"),
  E = i("446674"),
  m = i("150021"),
  I = i("385976"),
  p = i("858619"),
  g = i("867805"),
  _ = i("986632"),
  S = i("538282"),
  h = i("252931"),
  C = i("166465"),
  T = i("817963"),
  N = i("923959"),
  A = i("305961"),
  y = i("162771"),
  v = i("677099"),
  j = i("402671"),
  R = i("788506"),
  O = i("255214"),
  M = i("352046"),
  x = i("115279"),
  P = i("958706"),
  L = i("782340");
(a = n || (n = {}))[a.EMOJI = 0] = "EMOJI", a[a.CREATE_EMOJI = 1] = "CREATE_EMOJI", (r = l || (l = {}))[r.SECTION_HEADING = 0] = "SECTION_HEADING", r[r.SECTION_ROW = 1] = "SECTION_ROW";
let D = e => {
  let {
    channel: t,
    collapsedSections: i,
    includeCreateEmojiButton: n = !0,
    pickerIntention: l,
    emojiSearchResults: s,
    gridWidth: a,
    emojiPaddingHorizontal: r,
    emojiSpriteSize: o
  } = e, c = (0, E.useStateFromStores)([I.default], () => I.default.categories), m = (0, E.useStateFromStores)([A.default], () => A.default.getGuild(null == t ? void 0 : t.getGuildId()), [t]), _ = null == t ? null : t.getGuildId(), S = (0, E.useStateFromStores)([I.default], () => I.default.getDisambiguatedEmojiContext(_), [_]), D = (0, R.useFavoriteEmojis)(_), b = (0, R.useFrequentlyUsedEmojis)(_), {
    topEmojis: U,
    newlyAddedEmojis: w
  } = (0, M.default)(_, l), G = (0, E.useStateFromStoresArray)([v.default], () => v.default.getFlattenedGuildIds(), []), k = (0, E.useStateFromStoresArray)([C.default], () => C.default.getSortedPackIds(), []), {
    canCreateExpressions: F
  } = (0, T.useManageResourcePermissions)(m), {
    viewAndUseEnabled: V
  } = (0, h.useInventoryGuildPacksUserExperiment)({
    autoTrackExposure: !1
  }), K = S.getCustomEmoji(), H = e => {
    switch (e.type) {
      case p.EmojiTypes.GUILD:
        return e.guildId;
      case p.EmojiTypes.PACK:
        return e.packId
    }
  }, B = u.useMemo(() => d.groupBy(K, H), [K]);
  return u.useMemo(() => {
    let e = [],
      u = [],
      E = [],
      I = [],
      p = 0,
      _ = 0;
    if (null != S && null != a) {
      let S = Math.floor(a / (o + 2 * r)),
        h = (s, a) => {
          let r = new Map,
            c = i.has(a.sectionId),
            [f, m] = d.partition(s, e => {
              let i = j.default.isEmojiDisabled({
                emoji: e,
                channel: t,
                intention: l,
                canViewAndUsePackEmoji: V
              });
              return r.set(e, i), !i
            }),
            g = f.concat(m),
            h = a.guild,
            C = y.default.getGuildId(),
            T = g.length;
          null != h && C === h.id && F && n && (g.length < h.getMaxEmojiSlots() && a.sectionId !== x.EmojiCategoryTypes.TOP_GUILD_EMOJI || g.length < 9 && a.sectionId === x.EmojiCategoryTypes.TOP_GUILD_EMOJI) && T++;
          let N = Math.ceil(T / S),
            A = [];
          for (let e = 0; e < N; e++) {
            let t = e * S,
              i = g.slice(t, t + S).map((e, t) => {
                var i, n;
                return {
                  type: 0,
                  emoji: e,
                  size: o,
                  isDisabled: r.get(e),
                  rowIndex: _,
                  columnIndex: t,
                  visibleRowIndex: p,
                  category: a.type,
                  subCategory: a.sectionId === x.EmojiCategoryTypes.TOP_GUILD_EMOJI ? (0, R.getEmojiSubCategory)(U, w, null !== (n = null !== (i = e.id) && void 0 !== i ? i : e.uniqueName) && void 0 !== n ? n : e.name) : x.EmojiSubCategory.NONE
                }
              });
            if (A.push(i), !c) {
              if (e === N - 1 && null != h && T > g.length) {
                let e = A.length - 1,
                  t = A[e];
                t.push({
                  type: 1,
                  guildId: h.id,
                  name: L.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                  size: o,
                  rowIndex: e,
                  columnIndex: t.length,
                  visibleRowIndex: p
                })
              }
              I.push(i.length), E.push(i), p++
            }
            _++
          }
          let v = {
            ...a,
            count: s.length
          };
          u.push(v), e.push(c ? 0 : N)
        };
      if (null != s) 0 !== s.unlocked.length && h(s.unlocked, {
        type: x.EmojiCategoryTypes.SEARCH_RESULTS,
        sectionId: x.EmojiCategoryTypes.SEARCH_RESULTS,
        count: s.unlocked.length
      }), 0 !== s.locked.length && h(s.locked, {
        type: x.EmojiCategoryTypes.PREMIUM_UPSELL,
        categoryId: x.EmojiCategories.PREMIUM_UPSELL,
        sectionId: x.EmojiCategoryTypes.PREMIUM_UPSELL,
        count: s.locked.length
      });
      else
        for (let e of c)
          if (e === x.EmojiCategories.CUSTOM) {
            let i = i => {
                let n = B[i];
                if (null == n) return;
                let s = n.filter(e => j.default.getEmojiUnavailableReason({
                  emoji: e,
                  channel: t,
                  intention: l,
                  canViewAndUsePackEmoji: V
                }) !== P.EmojiDisabledReasons.DISALLOW_EXTERNAL);
                if (0 === s.length) return;
                let a = C.default.getPackByPackId({
                  packId: i
                });
                h(s, {
                  categoryId: e,
                  pack: a,
                  type: x.EmojiCategoryTypes.PACK,
                  sectionId: null != a ? a.id : (0, f.v4)(),
                  count: s.length
                })
              },
              n = i => {
                let n = B[i];
                if (null == n) return;
                let s = n.filter(e => j.default.getEmojiUnavailableReason({
                  emoji: e,
                  channel: null != t ? t : N.default.getDefaultChannel(i),
                  intention: l,
                  canViewAndUsePackEmoji: V
                }) !== P.EmojiDisabledReasons.DISALLOW_EXTERNAL);
                if (0 === s.length) return;
                let a = A.default.getGuild(i);
                h(s, {
                  categoryId: e,
                  guild: a,
                  type: x.EmojiCategoryTypes.GUILD,
                  sectionId: null != a ? a.id : (0, f.v4)(),
                  count: s.length
                })
              };
            if (null != m && n(m.id), (0, P.isExternalEmojiAllowedForIntention)(l)) {
              if (V)
                for (let e of k) i(e);
              for (let e of G)(null == m || m.id !== e) && n(e)
            }
          } else if (e === x.EmojiCategories.TOP_GUILD_EMOJI) {
        if (null != m) {
          let {
            allEmojis: t
          } = (0, O.getEmojiHotrail)({
            topEmojis: U,
            newlyAddedEmojis: w
          });
          if (t.length > 0) {
            let i = A.default.getGuild(m.id);
            h(t, {
              categoryId: e,
              guild: i,
              type: x.EmojiCategoryTypes.TOP_GUILD_EMOJI,
              sectionId: x.EmojiCategoryTypes.TOP_GUILD_EMOJI,
              count: t.length
            })
          }
        }
      } else if (e === x.EmojiCategories.RECENT) {
        let i = (0, R.dedupeUnicodeEmojis)(b).filter(e => !j.default.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: l,
          canViewAndUsePackEmoji: V
        }));
        h(i, {
          categoryId: e,
          type: x.EmojiCategoryTypes.RECENT,
          sectionId: x.EmojiCategoryTypes.RECENT,
          count: i.length
        })
      } else if (e === x.EmojiCategories.FAVORITES) {
        let i = (0, R.dedupeUnicodeEmojis)(D).filter(e => !j.default.isEmojiFiltered({
          emoji: e,
          channel: t,
          intention: l,
          canViewAndUsePackEmoji: V
        }));
        0 !== i.length && h(i, {
          categoryId: e,
          type: x.EmojiCategoryTypes.FAVORITES,
          sectionId: x.EmojiCategoryTypes.FAVORITES,
          count: i.length
        })
      } else if ((0, R.allowUnicodeEmojiForIntention)(l)) {
        let t = g.default.getByCategory(e);
        null != t && h(t, {
          categoryId: e,
          type: x.EmojiCategoryTypes.UNICODE,
          sectionId: e,
          count: t.length
        })
      }
    }
    return {
      columnCounts: I,
      emojiGrid: E,
      rowCountBySection: e,
      sectionDescriptors: u
    }
  }, [S, a, o, r, s, i, t, l, c, m, B, G, k, V, w, U, b, D, F, n])
};
(o = s || (s = {}))[o.PREMIUM = 0] = "PREMIUM", o[o.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION";
let b = e => {
    let {
      pickerIntention: t,
      selectedChannel: i,
      onSelectEmoji: n,
      setUpsellConfigs: l,
      emojiSelectAnalytics: s,
      trackEmojiFavorited: a
    } = e, r = (0, E.useStateFromStores)([I.default], () => I.default.getDisambiguatedEmojiContext(null == i ? void 0 : i.getGuildId()), [i]), {
      viewAndUseEnabled: o
    } = (0, h.useInventoryGuildPacksUserExperiment)({
      autoTrackExposure: !1
    });
    return u.useCallback((e, u) => {
      switch (e.type) {
        case 1:
          n(void 0, u.isFinalSelection, u.isBurst);
          return;
        case 0: {
          let {
            emoji: c
          } = e;
          if (null == c) return;
          let d = j.default.getEmojiUnavailableReason({
            emoji: c,
            channel: i,
            intention: t,
            canViewAndUsePackEmoji: o
          });
          if (u.toggleFavorite) {
            r.isFavoriteEmojiWithoutFetchingLatest(c) || null != d ? (0, m.unfavoriteEmoji)(c) : (null == a || a(e), (0, m.favoriteEmoji)(c));
            return
          }
          if (d === P.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
          if (d === P.EmojiDisabledReasons.PREMIUM_LOCKED) {
            l({
              type: 0,
              emojiDescriptor: e
            });
            return
          }
          if (d === P.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && c.type === p.EmojiTypes.GUILD) {
            l({
              type: 1,
              guildId: c.guildId,
              emojiId: c.id
            });
            return
          }
          if (d === P.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
          null == s || s(e), n(c, u.isFinalSelection, u.isBurst)
        }
      }
    }, [i, t, o, n, l, r, s, a])
  },
  U = e => {
    let {
      emojiListRef: t
    } = e, i = (0, S.useExpressionPickerStore)(e => e.searchQuery), n = u.useCallback(e => {
      var i;
      return null === (i = t.current) || void 0 === i ? void 0 : i.scrollToSectionTop(e)
    }, [t]);
    return u.useCallback(e => {
      "" !== i ? ((0, S.setSearchQuery)(""), _.EmojiPickerStore.setActiveCategoryIndex(e)) : n(e)
    }, [n, i])
  }