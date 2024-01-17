"use strict";
s.r(e), s.d(e, {
  default: function() {
    return c
  }
}), s("222007");
var i = s("37983"),
  l = s("884691"),
  a = s("414456"),
  n = s.n(a),
  r = s("859498"),
  o = s("635471"),
  u = s("825054"),
  d = s("93902"),
  c = t => {
    let {
      profileEffectId: e,
      isHovering: s,
      forCollectedModal: a = !1,
      isPurchased: c,
      removeSetHeight: f = !1
    } = t, p = a ? 250 : .1, [h, m] = l.useState(!0);
    return (l.useEffect(() => {
      if (!0 !== a) m(!1);
      else {
        let t = setTimeout(() => {
          m(!1)
        }, p);
        return () => {
          clearTimeout(t)
        }
      }
    }, [p, a]), null != e) ? (0, i.jsxs)("div", {
      className: n(u.previewContainer, {
        [u.previewContainerAnimation]: a,
        [u.previewContainerSetHeight]: !f
      }),
      children: [(0, i.jsx)("img", {
        src: d,
        alt: " ",
        className: a ? u.previewForCollected : u.preview,
        "aria-hidden": !0
      }), !h && (0, i.jsx)("div", {
        className: c ? u.purchasedEffect : void 0,
        children: (0, i.jsx)(o.default, {
          profileEffectId: e,
          useThumbnail: !0,
          autoPlay: a,
          restartMethod: r.RestartMethod.FromStart,
          resetOnHover: !0,
          isHovering: s,
          introDelay: p,
          useOpacityOnHover: !1
        })
      })]
    }) : null
  }