"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007"), n("70102");
var r = n("37983"),
  u = n("884691"),
  s = n("446674"),
  l = n("206230"),
  i = n("491605"),
  o = n("210721"),
  a = n("78345");

function c(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: c = !0,
    defaultAnimationState: d,
    idleAnimationState: f
  } = e, h = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion), [p, v] = u.useState(d), S = u.useRef((0, o.getGiftAnimationData)(t, p)), [E, m] = u.useState(null == f), [x, I] = u.useState(!1), [C, g] = u.useState(-1), T = () => {
    S.current = (0, o.getGiftAnimationData)(t, p), g(e => e + 1)
  }, N = () => {
    m(!1), I(!0), g(-1), v(d)
  };
  u.useEffect(() => {
    null == f && v(d)
  }, [f, d]), u.useEffect(() => {
    if (null != f && C >= 0) {
      N();
      return
    }
    T()
  }, [t, f]), u.useEffect(() => {
    (!x || null == f) && T()
  }, [p]), u.useEffect(() => {
    x && (m(null == f), I(!1), T())
  }, [x]);
  if (!a.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, r.jsx)(i.default, {
    importData: S.current,
    shouldAnimate: !h && c,
    className: n,
    versionKey: C,
    onComplete: null != f ? () => {
      null != f && (v(f), m(!0))
    } : void 0,
    loop: E
  })
}