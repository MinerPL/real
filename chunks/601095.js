"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var i = s("37983"),
  n = s("884691"),
  a = s("414456"),
  o = s.n(a),
  u = s("859498"),
  r = s("635471"),
  l = s("825054"),
  c = s("93902"),
  d = e => {
    let {
      profileEffectId: t,
      isHovering: s,
      forCollectedModal: a = !1,
      isPurchased: d,
      removeSetHeight: p = !1
    } = e, f = a ? 250 : .1, [m, h] = n.useState(!0);
    return (n.useEffect(() => {
      if (!0 !== a) h(!1);
      else {
        let e = setTimeout(() => {
          h(!1)
        }, f);
        return () => {
          clearTimeout(e)
        }
      }
    }, [f, a]), null != t) ? (0, i.jsxs)("div", {
      className: o(l.previewContainer, {
        [l.previewContainerAnimation]: a,
        [l.previewContainerSetHeight]: !p
      }),
      children: [(0, i.jsx)("img", {
        src: c,
        alt: " ",
        className: a ? l.previewForCollected : l.preview,
        "aria-hidden": !0
      }), !m && (0, i.jsx)("div", {
        className: d ? l.purchasedEffect : void 0,
        children: (0, i.jsx)(r.default, {
          profileEffectId: t,
          useThumbnail: !0,
          autoPlay: a,
          restartMethod: u.RestartMethod.FromStart,
          resetOnHover: !0,
          isHovering: s,
          introDelay: f,
          useOpacityOnHover: !1
        })
      })]
    }) : null
  }