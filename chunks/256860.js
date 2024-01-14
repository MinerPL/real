"use strict";
r.r(t), r.d(t, {
  useFetchStickerPack: function() {
    return _
  },
  useShouldAnimateSticker: function() {
    return h
  },
  useStickersGrid: function() {
    return R
  },
  useHasSendableSticker: function() {
    return m
  },
  useFetchStickerPacks: function() {
    return A
  },
  useFavoriteStickerIds: function() {
    return P
  },
  useFavoriteStickers: function() {
    return G
  },
  useLatestFrecentStickers: function() {
    return U
  },
  useStickerForRenderableSticker: function() {
    return K
  },
  useFilteredStickerPackCategories: function() {
    return M
  }
}), r("424973"), r("222007"), r("843762");
var i = r("884691"),
  u = r("446674"),
  n = r("817963"),
  s = r("845579"),
  l = r("42507"),
  a = r("305961"),
  d = r("162771"),
  c = r("677099"),
  o = r("697218"),
  S = r("427459"),
  f = r("991170"),
  k = r("866353"),
  E = r("467094"),
  y = r("865372"),
  C = r("364685"),
  I = r("161585"),
  p = r("24373"),
  g = r("49111"),
  T = r("782340");
let _ = e => {
    A();
    let t = (0, u.useStateFromStores)([C.default], () => C.default.hasLoadedStickerPacks);
    i.useEffect(() => {
      t && null == C.default.getStickerPack(e) && (0, E.fetchStickerPack)(e)
    }, [e, t])
  },
  h = e => {
    let t = s.AnimateStickers.useSetting();
    return (0, p.shouldAnimateSticker)(t, e)
  },
  R = e => {
    let {
      collapsedStickersCategories: t,
      filteredStickers: r,
      listPaddingRight: u = 0,
      listWidth: s = 0,
      stickerNodeMargin: l = 0,
      stickerNodeWidth: c,
      stickersCategories: o
    } = e;
    return i.useMemo(() => {
      let e = Math.floor((s - u + l) / (c + l)),
        i = Math.floor(Math.max(l, (s - u - c * e) / (e - 1))),
        f = [],
        k = [],
        E = [],
        y = 0,
        C = 0,
        g = 0;
      if (0 !== s) {
        let i = function(t, r) {
          let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            u = (0, p.isGuildSticker)(t[0]) ? a.default.getGuild(t[0].guild_id) : void 0,
            {
              canCreateExpressions: s
            } = (0, n.getManageResourcePermissions)(u),
            l = d.default.getGuildId(),
            c = o.findIndex(e => e.type === I.StickerCategoryTypes.FAVORITE),
            _ = o.findIndex(e => e.type === I.StickerCategoryTypes.RECENT),
            h = t.length;
          null != u && l === u.id && s && t.length < (0, S.getTotalStickerCountForTier)(u.premiumTier) && h++;
          let R = Math.ceil(h / e);
          k[C] = i ? 0 : R;
          for (let n = 0; n < R; n++) {
            let s = n * e,
              l = s + e,
              a = t.slice(s, l).map((e, t) => ({
                type: I.StickerGridItemTypes.STICKER,
                sticker: e,
                packId: (0, p.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                gridSectionIndex: C,
                rowIndex: y,
                columnIndex: t,
                visibleRowIndex: g,
                category: r
              }));
            C > _ && C > c && null != u && h > t.length && a.push({
              type: I.StickerGridItemTypes.CREATE_STICKER,
              guild_id: u.id,
              name: T.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
              gridSectionIndex: C,
              rowIndex: y,
              columnIndex: a.length,
              visibleRowIndex: g
            }), !i && (g++, E.push(a), f.push(a.length)), y++
          }
          C++
        };
        if (null == r)
          for (let e of o) e.stickers.length > 0 ? (y++, i(e.stickers, e.type, (null == t ? void 0 : t.has(e.id)) === !0)) : e.type === I.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (k[C] = 0, C++);
        else r.sendable.length > 0 && i(r.sendable, I.StickerCategoryTypes.SEARCH_RESULTS), r.sendableWithPremium.length > 0 && i(r.sendableWithPremium, I.StickerCategoryTypes.SEARCH_RESULTS)
      }
      return {
        rowCount: y,
        rowCountBySection: k,
        stickersGrid: E,
        gutterWidth: i,
        columnCounts: f
      }
    }, [t, r, u, s, l, c, o])
  },
  m = e => {
    let t = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser());
    return (0, u.useStateFromStores)([C.default], () => {
      let r = C.default.getAllStickersIterator();
      for (let i of r)
        if ((0, k.isSendableSticker)(i, t, e)) return !0;
      return !1
    }, [t, e])
  },
  A = () => {
    i.useEffect(() => {
      (0, E.fetchStickerPacks)()
    }, [])
  },
  F = e => {
    let t = (0, u.useStateFromStores)([C.default], () => C.default.getAllGuildStickers()),
      r = (0, u.useStateFromStoresArray)([c.default, a.default], () => {
        let e = c.default.getFlattenedGuildIds(),
          t = [];
        return e.forEach(e => {
          let r = a.default.getGuild(e);
          null != r && t.push(r)
        }), t
      }, []),
      s = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser());
    return i.useMemo(() => {
      let i = [];
      for (let {
          name: e,
          id: u
        }
        of r) {
        let r = t.get(u);
        null != r && 0 !== r.length && i.push({
          type: I.StickerCategoryTypes.GUILD,
          id: u,
          name: e,
          stickers: r
        })
      }
      if ((null == e ? void 0 : e.getGuildId()) != null) {
        let t = a.default.getGuild(e.getGuildId()),
          {
            canManageAllExpressions: r
          } = (0, n.getManageResourcePermissions)(t),
          u = i.findIndex(t => t.id === e.getGuildId());
        u >= 1 ? i.unshift(i.splice(u, 1)[0]) : -1 === u && null != t && r && i.unshift({
          type: I.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
          id: t.id,
          name: t.name,
          stickers: []
        }), null != s && !f.default.can({
          permission: g.Permissions.USE_EXTERNAL_EMOJIS,
          user: s,
          context: e
        }) && (i = i.filter(t => t.id === e.getGuildId()))
      }
      return i
    }, [t, r, s, e])
  },
  v = [];

function P() {
  var e, t;
  let r = (0, l.useFrecencySettings)();
  return null !== (t = null === (e = r.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : v
}

function G() {
  let e = P(),
    t = (0, u.useStateFromStoresArray)([C.default], () => e.map(e => C.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
  return t
}

function U() {
  let e = function() {
      var e, t;
      let r = (0, l.useFrecencySettings)(),
        i = v;
      return (null == r ? void 0 : null === (e = r.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (i = Object.keys(null == r ? void 0 : null === (t = r.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), i
    }(),
    t = (0, u.useStateFromStoresArray)([C.default], () => e.map(e => C.default.getStickerById(e)).filter(e => void 0 !== e), [e]);
  return t
}
let L = e => {
    let t = G(),
      {
        packs: r,
        frequentlyUsedStickers: n
      } = (0, u.useStateFromStoresObject)([C.default, y.default], () => ({
        packs: C.default.getPremiumPacks(),
        frequentlyUsedStickers: y.default.stickerFrecencyWithoutFetchingLatest.frequently
      }), []),
      s = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
      l = F(e);
    return i.useMemo(() => {
      var i;
      let u = r.map(p.createStickerPackCategory),
        a = {
          type: I.StickerCategoryTypes.FAVORITE,
          id: I.StickerCategoryTypes.FAVORITE,
          name: T.default.Messages.CATEGORY_FAVORITE,
          stickers: t
        },
        d = {
          type: I.StickerCategoryTypes.RECENT,
          id: I.StickerCategoryTypes.RECENT,
          name: T.default.Messages.STICKER_CATEGORY_RECENT,
          stickers: null !== (i = null == n ? void 0 : n.filter(t => {
            if ((0, p.isGuildSticker)(t)) {
              var i, u;
              return null !== (u = null === (i = C.default.getStickersByGuildId(t.guild_id)) || void 0 === i ? void 0 : i.some(e => e.id === t.id)) && void 0 !== u && u && (0, k.getStickerSendability)(t, s, e) !== k.StickerSendability.NONSENDABLE
            }
            if ((0, p.isStandardSticker)(t)) return r.some(e => e.id === t.pack_id)
          })) && void 0 !== i ? i : []
        };
      return [a, d, ...l, ...u]
    }, [r, t, n, l, s, e])
  },
  K = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = (0, u.useStateFromStores)([C.default], () => C.default.getStickerById(e.id)),
      [n, s] = i.useState(!0),
      [l, a] = i.useState(!1),
      d = (0, p.isGuildSticker)(e) || (0, p.isStandardSticker)(e);
    return (i.useEffect(() => {
      let i = async () => {
        if (t && !d && null == r && n && !l) {
          s(!1);
          try {
            await (0, E.fetchSticker)(e.id)
          } catch {}
          a(!0)
        }
      };
      i()
    }, [t]), d) ? [e, l] : [null != r ? r : null, l]
  },
  M = e => {
    let t = L(e);
    return i.useMemo(() => t.filter(e => e.type === I.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
  }