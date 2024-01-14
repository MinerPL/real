"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("769846"),
  o = n("917764"),
  s = n("986632"),
  a = n("562323"),
  u = n("305961"),
  d = n("151185"),
  c = n("159885"),
  f = n("364685"),
  p = n("161585"),
  m = n("24373"),
  h = n("41170"),
  E = n("782340"),
  S = n("13763");
let g = (0, c.cssValueToNumber)(r.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
  C = (0, c.cssValueToNumber)(r.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
  T = e => {
    let t = null,
      n = null;
    if (!(0, m.isStandardSticker)(e) && !(0, m.isGuildSticker)(e) || (0, m.isGuildSticker)(e)) {
      let i = u.default.getGuild(e.guild_id);
      null != i && (t = E.default.Messages.STICKER_FROM_SOURCE.format({
        source: i.name
      }), n = (0, l.jsx)(o.default, {
        guild: i
      }))
    } else if ((0, m.isStandardSticker)(e)) {
      let i = f.default.getStickerPack(e.pack_id);
      null != i && (t = E.default.Messages.STICKER_FROM_SOURCE.format({
        source: i.name
      }), n = (0, l.jsx)(h.default, {
        size: C,
        sticker: (0, m.getStickerPackPreviewSticker)(i),
        disableAnimation: !0
      }))
    }
    return {
      title: t,
      graphic: n
    }
  },
  v = i.memo(function(e) {
    let {
      stickersGrid: t
    } = e, n = s.StickerPickerStore.useStore(e => e.inspectedExpressionPosition), r = i.useMemo(() => {
      var e;
      let {
        rowIndex: l,
        columnIndex: i
      } = n, r = null === (e = t[l]) || void 0 === e ? void 0 : e[i];
      return (null == r ? void 0 : r.type) === p.StickerGridItemTypes.CREATE_STICKER ? {
        guild_id: r.guild_id,
        name: r.name
      } : (null == r ? void 0 : r.type) !== p.StickerGridItemTypes.STICKER ? null : r.sticker
    }, [t, n]);
    if (null == r) return null;
    let {
      graphic: o,
      title: u
    } = T(r), c = (0, m.isStandardSticker)(r) || (0, m.isGuildSticker)(r) ? (0, l.jsx)(h.default, {
      isInteracting: !0,
      size: g,
      sticker: r,
      disableAnimation: !0
    }) : (0, l.jsx)("div", {
      className: S.iconWrapper,
      children: (0, l.jsx)(d.default, {
        className: S.icon
      })
    });
    return (0, l.jsx)(a.default, {
      graphicPrimary: c,
      graphicSecondary: o,
      titlePrimary: r.name,
      titleSecondary: (0, m.isStandardSticker)(r) || (0, m.isGuildSticker)(r) ? u : null
    })
  });
var y = v