"use strict";
n.r(t), n.d(t, {
  MenuControlItem: function() {
    return c
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("697917"),
  l = n("389802"),
  u = n("946032");

function c(e) {
  let {
    color: t = "default",
    label: n,
    control: s,
    disabled: c,
    isFocused: d,
    showDefaultFocus: f = !1,
    menuItemProps: E,
    onClose: h
  } = e, p = r.useRef(null), _ = r.useRef(null);
  r.useLayoutEffect(() => {
    var e, t, n;
    d ? ((0, o.ensureItemVisible)(p), null === (e = _.current) || void 0 === e || e.focus()) : null === (n = _.current) || void 0 === n || null === (t = n.blur) || void 0 === t || t.call(n)
  }, [d]);
  let S = r.useCallback(() => {
      var e, t;
      let n = null === (t = _.current) || void 0 === t ? void 0 : null === (e = t.activate) || void 0 === e ? void 0 : e.call(t);
      n && h()
    }, [h]),
    m = s({
      onClose: h,
      disabled: c,
      isFocused: d
    }, _);
  return (0, i.jsxs)("div", {
    onClick: S,
    className: a(u.item, l.MENU_ITEM_COLORS[t], {
      [u.disabled]: c,
      [u.focused]: f && d,
      [u.hideInteraction]: !f
    }),
    "aria-disabled": c,
    ...E,
    children: [null != n ? (0, i.jsx)("div", {
      className: u.labelContainer,
      children: (0, i.jsx)("div", {
        className: u.label,
        children: n
      })
    }) : null, m]
  })
}