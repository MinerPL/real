"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("769846"),
  i = n("77078"),
  r = n("812204"),
  o = n("716241"),
  u = n("685665"),
  d = n("933629"),
  c = n("437472"),
  f = n("159885"),
  E = n("256860"),
  _ = n("161585"),
  T = n("41170"),
  I = n("139185"),
  m = n("49111"),
  N = n("646718"),
  p = n("814809");
let S = (0, f.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_DIMENSION),
  A = e => {
    null != e && o.default.trackWithMetadata(m.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
      type: N.PremiumUpsellTypes.STICKER_IN_MESSAGE_HOVER,
      expression_id: e.id,
      expression_name: e.name,
      is_animated: (0, _.isAnimatedSticker)(e.format_type),
      is_custom: (0, _.isCustomSticker)(e.type)
    })
  };
var C = e => {
  let {
    renderableSticker: t,
    channel: n,
    isInteracting: a
  } = e, [o, f] = l.useState(!0), [_, m] = l.useState(String(Date.now())), [N] = (0, E.useStickerForRenderableSticker)(t, a), {
    AnalyticsLocationProvider: C
  } = (0, u.default)(r.default.STICKER_MESSAGE), h = (0, s.jsxs)("span", {
    className: p.stickerName,
    children: [(0, s.jsx)(c.default, {
      className: p.stickerIcon
    }), (null != N ? N : t).name]
  });
  return (0, s.jsx)(C, {
    children: (0, s.jsx)(i.Popout, {
      align: "center",
      animation: i.Popout.Animation.TRANSLATE,
      positionKey: _,
      onRequestClose: () => {
        f(!0)
      },
      renderPopout: e => (0, s.jsx)(I.default, {
        ...e,
        renderableSticker: t,
        channel: n,
        refreshPositionKey: () => m(String(Date.now()))
      }),
      children: e => {
        let {
          onClick: n
        } = e;
        return (0, s.jsx)(i.Tooltip, {
          ...d.EXPRESSION_TOOLTIP_PROPS,
          shouldShow: o,
          text: (0, d.renderClickableTooltipNode)(h),
          "aria-label": !1,
          onTooltipShow: () => {
            A(N)
          },
          children: e => (0, s.jsx)(i.Clickable, {
            ...e,
            className: p.clickableSticker,
            onClick: e => {
              f(!o), n(e)
            },
            tag: "span",
            children: (0, s.jsx)(T.default, {
              isInteracting: a,
              size: S,
              sticker: null != N ? N : t
            })
          })
        })
      }
    })
  })
}