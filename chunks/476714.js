"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007");
var r = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  u = n("77078"),
  s = n("960476"),
  c = n("140331"),
  o = n("118849"),
  d = n("671434"),
  I = n("659500"),
  f = n("49111"),
  _ = n("782340"),
  E = n("414763"),
  F = l.memo(function(e) {
    let {
      width: t,
      height: n,
      src: a,
      url: F,
      format: S,
      className: p
    } = e, [G, h] = l.useState(!1), R = (0, c.useIsFavoriteGIF)(F), T = R ? _.default.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : _.default.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, g = R ? d.default : o.default;
    l.useEffect(() => {
      if (!G) return;
      let e = setTimeout(() => {
        h(!1)
      }, 500);
      return () => clearTimeout(e)
    }, [G]);
    let m = e => {
      e.preventDefault(), e.stopPropagation(), h(!0), R ? (0, s.removeFavoriteGIF)(F) : ((0, s.addFavoriteGIF)({
        url: F,
        src: a,
        width: t,
        height: n,
        format: S
      }), I.ComponentDispatch.dispatch(f.ComponentActions.FAVORITE_GIF))
    };
    return (0, r.jsx)(u.Tooltip, {
      text: T,
      children: e => (0, r.jsx)(u.Clickable, {
        ...e,
        className: i(p, E.size, E.gifFavoriteButton, {
          [E.selected]: R,
          [E.showPulse]: G
        }),
        onMouseDown: e => e.preventDefault(),
        onClick: m,
        onDoubleClick: e => e.preventDefault(),
        children: (0, r.jsx)(g, {
          className: E.icon
        })
      })
    })
  })