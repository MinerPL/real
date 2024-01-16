"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("781738");
var a = n("37983"),
  i = n("884691"),
  l = n("446674"),
  s = n("77078"),
  u = n("150021"),
  r = n("997289"),
  d = n("788506"),
  o = n("385976"),
  c = n("867805"),
  f = n("246511"),
  E = n("467094"),
  M = n("178207"),
  m = n("256860"),
  g = n("364685"),
  I = n("24373"),
  p = n("49111"),
  S = n("782340");

function A(e) {
  return c.default.getByName(e.replace(/(^:|:$)/g, ""))
}

function v(e) {
  let {
    type: t,
    id: n,
    name: v,
    isInExpressionPicker: _ = !1
  } = e, {
    location: h
  } = (0, r.useAnalyticsContext)(), T = i.useMemo(() => ({
    ...h,
    section: _ ? p.AnalyticsSections.EXPRESSION_PICKER : p.AnalyticsSections.CONTEXT_MENU
  }), [h, _]), C = (0, m.useFavoriteStickerIds)(), R = (0, l.useStateFromStores)([g.default], () => t === f.PickerContextMenuDataTypes.STICKER && null != n ? g.default.getStickerById(n) : null), O = null != R && C.includes(R.id), x = (0, l.useStateFromStores)([o.default], () => {
    if (t === f.PickerContextMenuDataTypes.EMOJI) {
      if (null != n) return o.default.getDisambiguatedEmojiContext().getById(n);
      if (null != v) {
        var e;
        return null !== (e = A(v)) && void 0 !== e ? e : A(c.default.convertSurrogateToName(v))
      }
    }
  }), y = (0, d.useIsFavoriteEmoji)(null, x);
  if (null != R && t === f.PickerContextMenuDataTypes.STICKER) return (0, I.isGuildSticker)(R) && !(0, I.isAvailableGuildSticker)(R) ? null : O ? (0, a.jsx)(s.MenuItem, {
    id: "unfavorite",
    action: () => (0, E.unfavoriteSticker)(R.id),
    label: S.default.Messages.UNFAVORITE_ITEM
  }) : (0, a.jsx)(s.MenuItem, {
    id: "favorite",
    action: () => {
      (0, M.trackStickerFavorited)({
        sticker: R,
        location: {
          ...T,
          object: p.AnalyticsObjects.STICKER
        }
      }), (0, E.favoriteSticker)(null == R ? void 0 : R.id)
    },
    label: S.default.Messages.FAVORITE_ITEM
  });
  if (null != x && t === f.PickerContextMenuDataTypes.EMOJI) return y ? (0, a.jsx)(s.MenuItem, {
    id: "unfavorite",
    action: () => (0, u.unfavoriteEmoji)(x),
    label: S.default.Messages.UNFAVORITE_ITEM
  }) : (0, a.jsx)(s.MenuItem, {
    id: "favorite",
    action: () => {
      (0, d.trackEmojiFavorited)({
        emoji: x,
        location: {
          ...T,
          object: p.AnalyticsObjects.EMOJI
        }
      }), (0, u.favoriteEmoji)(x)
    },
    label: S.default.Messages.FAVORITE_ITEM
  })
}