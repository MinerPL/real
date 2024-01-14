"use strict";
n.r(t), n.d(t, {
  FavoriteAddedTooltip: function() {
    return p
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  o = n("986373"),
  u = n("49111"),
  d = n("782340"),
  c = n("45912"),
  f = n("455547"),
  h = n("805959");

function C() {
  return (0, l.jsx)("div", {
    className: i(f.row, f.rowGuildName),
    children: (0, l.jsx)("span", {
      className: i(f.guildNameText, f.guildNameTextLimitedSize, c.tooltipText),
      children: d.default.Messages.FAVORITE_ADDED
    })
  })
}
let p = a.memo(function(e) {
  let {
    "aria-label": t = !1,
    children: n
  } = e, s = function() {
    let {
      favoriteAdded: e,
      clearFavoriteAdded: t
    } = (0, o.useFavoriteAdded)();
    return a.useEffect(() => {
      if (e) {
        let e = setTimeout(() => {
          t()
        }, 1500);
        return () => {
          t(), clearTimeout(e)
        }
      }
    }, [e, t]), e
  }();
  return (0, l.jsx)(r.Tooltip, {
    forceOpen: s,
    color: r.TooltipColors.GREEN,
    hideOnClick: !0,
    spacing: 20,
    position: "right",
    align: "center",
    text: (0, l.jsx)(C, {}),
    "aria-label": t,
    tooltipClassName: h.listItemTooltip,
    children: e => (0, l.jsx)("div", {
      ...e,
      onMouseEnter: u.NOOP,
      onMouseLeave: u.NOOP,
      children: n
    })
  })
})