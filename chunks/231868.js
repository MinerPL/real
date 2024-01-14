"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("446674"),
  o = n("77078"),
  s = n("328511"),
  a = n("467094"),
  u = n("41170"),
  d = n("381546"),
  c = n("898260"),
  f = n("782340"),
  p = n("108755"),
  m = i.memo(function(e) {
    var t;
    let {
      channelId: n,
      chatInputType: m
    } = e, [h, E] = i.useState(null), S = (0, r.useStateFromStores)([s.default], () => s.default.getStickerPreview(n, m.drafts.type));
    return (null === (t = m.stickers) || void 0 === t ? void 0 : t.allowSending) && null != S && 0 !== S.length ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: p.stickerPreviews,
        children: S.map(e => (0, l.jsxs)("div", {
          className: p.stickerPreviewContainer,
          children: [(0, l.jsx)(o.Clickable, {
            onFocus: () => E(e.id),
            onBlur: () => E(null),
            className: p.closeButton,
            "aria-label": f.default.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({
              name: e.name
            }),
            onClick: () => (0, a.clearStickerPreview)(n, m.drafts.type),
            children: (0, l.jsx)("div", {
              className: p.closeIconContainer,
              children: (0, l.jsx)(d.default, {
                className: p.closeIcon
              })
            })
          }), (0, l.jsx)(u.default, {
            isInteracting: h === e.id,
            className: p.stickerPreview,
            size: 48,
            sticker: e
          })]
        }, e.id))
      }), (0, l.jsx)(c.default, {
        className: p.stickerPreviewDivider
      })]
    }) : null
  })