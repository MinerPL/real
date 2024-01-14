"use strict";
n.r(t), n.d(t, {
  usePreventIdle: function() {
    return i
  },
  default: function() {
    return r
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("908583");

function i(e) {
  let {
    onPreventIdle: t,
    onAllowIdle: n,
    onActive: l
  } = a.useContext(s.IdleHandlerContext), i = a.useCallback(() => {
    t(e)
  }, [e, t]), r = a.useCallback(() => {
    n(e)
  }, [e, n]);
  return {
    preventIdle: i,
    allowIdle: r,
    onActive: l
  }
}

function r(e) {
  let {
    children: t,
    className: n
  } = e, {
    onForceIdle: r,
    onActive: o
  } = a.useContext(s.IdleHandlerContext), {
    preventIdle: u,
    allowIdle: d
  } = i("interact");
  a.useEffect(() => () => d(), [d]);
  let c = a.useCallback(e => {
    var t;
    let n = null !== (t = e.target.ownerDocument) && void 0 !== t ? t : document;
    !e.currentTarget.contains(n.activeElement) && r()
  }, [r]);
  return (0, l.jsx)("div", {
    className: n,
    onMouseEnter: u,
    onMouseLeave: d,
    onFocus: o,
    onBlur: c,
    children: t
  })
}