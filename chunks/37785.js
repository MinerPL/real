"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("37983"),
  u = n("884691"),
  o = n("77078"),
  r = n("393414"),
  i = n("49111"),
  a = u.forwardRef(function(e, t) {
    let {
      href: n,
      children: a,
      onClick: c,
      onKeyPress: d,
      focusProps: p,
      ...l
    } = e, f = u.useCallback(e => {
      !e.repeat && ((e.charCode === i.KeyboardKeys.SPACE || e.charCode === i.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, r.transitionTo)(n), null == c || c()), null == d || d(e))
    }, [n, d, c]), m = u.useCallback(e => {
      !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, r.transitionTo)(n), null == c || c())
    }, [n, c]), _ = (0, s.jsx)("a", {
      ref: t,
      href: n,
      onClick: m,
      onKeyPress: f,
      ...l,
      children: a
    });
    return (0, s.jsx)(o.FocusRing, {
      ...p,
      children: _
    })
  })