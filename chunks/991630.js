"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  r = n.n(l),
  s = n("587974"),
  u = n("315102"),
  o = n("524768"),
  d = n("616674"),
  c = n("363577");

function E(e) {
  let {
    section: t,
    isSelected: n,
    width: l,
    height: E,
    className: _,
    selectable: I = !1,
    onFocus: T,
    onBlur: f,
    onMouseOver: S,
    onMouseLeave: N,
    ...p
  } = e, [h, A] = a.useState(!1), m = a.useCallback(() => {
    A(!0), null == T || T()
  }, [T]), C = a.useCallback(() => {
    A(!1), null == f || f()
  }, [f]), g = a.useCallback(() => {
    A(!0), null == S || S()
  }, [S]), G = a.useCallback(() => {
    A(!1), null == N || N()
  }, [N]), O = a.useMemo(() => {
    if (t.type === o.ApplicationCommandSectionType.APPLICATION) {
      var e;
      return u.default.getApplicationIconURL({
        id: t.id,
        icon: t.icon,
        bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
        botIconFirst: !0,
        size: l
      })
    }
    return c
  }, [t, l]);
  return (0, i.jsx)("div", {
    ...p,
    className: r(d.wrapper, _, {
      [d.selectable]: I,
      [d.selected]: I && n
    }),
    onFocus: m,
    onBlur: C,
    onMouseOver: g,
    onMouseLeave: G,
    children: (0, i.jsx)(s.default, {
      className: d.mask,
      mask: I && (n || h) ? s.MaskIDs.SQUIRCLE : s.MaskIDs.AVATAR_DEFAULT,
      width: l,
      height: E,
      children: (0, i.jsx)("img", {
        alt: "",
        className: d.icon,
        style: {
          width: l,
          height: E
        },
        src: O
      })
    })
  })
}