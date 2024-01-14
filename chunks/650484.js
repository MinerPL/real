"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  PaymentPortalBody: function() {
    return p
  },
  PaymentPortalFooter: function() {
    return C
  }
});
var r = n("37983"),
  i = n("884691"),
  l = n("414456"),
  o = n.n(l),
  s = n("627445"),
  a = n.n(s),
  u = n("817736"),
  c = n.n(u),
  d = n("77078"),
  f = n("642906"),
  E = n("990893");

function _(e) {
  var t, n, l, s, u, c;
  let {
    header: _,
    isLargeModal: p,
    stepProps: C
  } = function(e) {
    let {
      header: t,
      isLargeModal: n,
      ...r
    } = e;
    return {
      header: t,
      isLargeModal: n,
      stepProps: r
    }
  }(e), {
    step: I,
    stepConfigs: A,
    setBodyNode: T,
    setFooterNode: R,
    setModalOverlayNode: h,
    setReadySlideId: S
  } = (0, f.usePaymentContext)(), N = A.find(e => e.key === I);
  i.useEffect(() => {
    h(null)
  }, [I, h]), a(null != N, "Unknown step for current payment flow.");
  let m = null !== (u = null == N ? void 0 : null === (t = N.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
    g = null == N ? void 0 : null === (n = N.options) || void 0 === n ? void 0 : n.bodyClassName,
    P = void 0 !== p && p ? E.sliderBodyLarge : null == N ? void 0 : null === (l = N.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
  return (0, r.jsxs)(r.Fragment, {
    children: [null === (c = null == N ? void 0 : null === (s = N.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === c || c ? _ : null, N.renderStep(C), null == I || m ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.ModalContent, {
        className: o(E.body, g),
        children: (0, r.jsx)(d.Slides, {
          activeSlide: I,
          centered: !1,
          onSlideReady: e => S(e),
          children: A.filter(e => null != e.key).map(e => (0, r.jsx)(d.Slide, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: o(E.sliderBody, P),
              ref: e => T(e),
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, r.jsx)("div", {
        ref: e => R(e)
      }), (0, r.jsx)("div", {
        ref: e => h(e)
      })]
    })]
  })
}

function p(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}

function C(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, f.usePaymentContext)();
  return null == n ? null : c.createPortal(t, n)
}