"use strict";
l.r(t), l.d(t, {
  CaretPosition: function() {
    return s
  },
  ButtonLayout: function() {
    return i
  },
  default: function() {
    return p
  }
});
var n, a, s, i, r = l("37983"),
  o = l("884691"),
  u = l("414456"),
  d = l.n(u),
  c = l("77078"),
  f = l("994428"),
  m = l("142190");

function p(e) {
  let {
    className: t,
    header: l,
    headerClassName: n,
    content: a,
    contentClassName: s,
    buttonCTA: i,
    secondaryButtonCTA: u,
    onClick: p,
    onSecondaryClick: E,
    onComponentMount: T,
    asset: _,
    markAsDismissed: S,
    caretPosition: h = "caretTopCenter",
    buttonLayout: I = 0
  } = e;
  o.useEffect(() => {
    null == T || T()
  }, []);
  let A = null != u;
  return (0, r.jsxs)("div", {
    className: d(t, m.upsellTooltipWrapper, m[h]),
    children: [_, null == l ? null : (0, r.jsx)(c.Heading, {
      className: d(n, m.upsellTooltipHeader),
      variant: "heading-md/semibold",
      children: l
    }), (0, r.jsx)(c.Text, {
      color: "always-white",
      className: d(s, m.content),
      variant: "text-sm/normal",
      children: a
    }), null != i || A ? (0, r.jsxs)("div", {
      className: d(m.upsellButtonsContainer, {
        [m.upsellButtonsAdjacent]: 0 === I,
        [m.upsellButtonsStacked]: 1 === I
      }),
      children: [A ? (0, r.jsx)(c.Button, {
        color: c.Button.Colors.BRAND,
        onClick: () => {
          null == E || E(), null == S || S(f.ContentDismissActionType.SECONDARY)
        },
        children: u
      }) : null, null == i ? null : (0, r.jsx)(c.Button, {
        className: d({
          [m.fullWidth]: !A
        }),
        color: c.Button.Colors.BRAND,
        look: c.Button.Looks.INVERTED,
        onClick: e => {
          p(e), null == S || S(f.ContentDismissActionType.PRIMARY)
        },
        children: i
      })]
    }) : null]
  })
}(n = s || (s = {})).TOP_CENTER = "caretTopCenter", n.TOP_RIGHT = "caretTopRight", n.TOP_LEFT = "caretTopLeft", n.BOTTOM_CENTER = "caretBottomCenter", n.BOTTOM_LEFT = "caretBottomLeft", n.LEFT_CENTER = "caretLeftCenter", n.LEFT_TOP = "caretLeftTop", n.RIGHT_CENTER = "caretRightCenter", (a = i || (i = {}))[a.ADJACENT = 0] = "ADJACENT", a[a.STACKED = 1] = "STACKED", p.CaretPosition = s, p.ButtonLayout = i