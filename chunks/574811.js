"use strict";
s.r(l), s.d(l, {
  default: function() {
    return E
  }
}), s("222007");
var t = s("37983"),
  a = s("884691"),
  n = s("77078"),
  i = s("775032"),
  d = s("698609"),
  o = s("124539"),
  r = s("57242"),
  c = s("299738"),
  u = s("170213"),
  x = s("701098");

function E(e) {
  let {
    classificationId: l,
    transitionState: s,
    initialSlide: E = u.AppealIngestionSlideTypes.SPEED_BUMP,
    onClose: f
  } = e, [_, N] = a.useState(E), S = !1 === (0, i.default)(), {
    classification: A,
    isDsaEligible: T
  } = (0, d.useSafetyHubClassification)(null != l ? l : "");
  a.useEffect(() => {
    T ? N(E) : N(u.AppealIngestionSlideTypes.COLLECT_SIGNAL)
  }, [N, E, T]);
  let h = a.useCallback(() => {
      r.default.close(), f()
    }, [f]),
    I = a.useCallback(() => {
      var e, l;
      let s = null;
      (s = T ? null === (e = u.SlidesOrderDsaEligible[_]) || void 0 === e ? void 0 : e.next : null === (l = u.SlidesOrderNonDsaEligible[_]) || void 0 === l ? void 0 : l.next) ? N(s): h()
    }, [_, T, h]),
    p = a.useCallback(() => {
      var e, l;
      let s;
      (s = T ? null === (e = u.SlidesOrderDsaEligible[_]) || void 0 === e ? void 0 : e.prev : null === (l = u.SlidesOrderNonDsaEligible[_]) || void 0 === l ? void 0 : l.prev) ? N(s): h()
    }, [_, T, h]);
  return (0, t.jsx)(n.ModalRoot, {
    transitionState: s,
    disableTrack: !0,
    children: (0, t.jsx)("div", {
      className: x.container,
      children: (0, t.jsxs)(n.Slides, {
        activeSlide: _,
        width: 440,
        children: [(0, t.jsx)(n.Slide, {
          id: u.AppealIngestionSlideTypes.SPEED_BUMP,
          children: (0, t.jsx)(c.default, {
            classification: A,
            onClose: h,
            onNext: I,
            isSpam: !1,
            isCoppa: S
          })
        }), (0, t.jsx)(n.Slide, {
          id: u.AppealIngestionSlideTypes.COLLECT_SIGNAL,
          children: (0, t.jsx)(o.default, {
            isDsaEligible: T,
            onClose: h,
            onNext: I,
            onBack: p
          })
        }), (0, t.jsx)(n.Slide, {
          id: u.AppealIngestionSlideTypes.CONFIRM_SUBMISSION,
          children: (0, t.jsx)(o.default, {
            onClose: h,
            onNext: I,
            onBack: p
          })
        }), (0, t.jsx)(n.Slide, {
          id: u.AppealIngestionSlideTypes.REQUEST_SENT,
          children: (0, t.jsx)(o.default, {
            onClose: h,
            onNext: I,
            onBack: p
          })
        }), (0, t.jsx)(n.Slide, {
          id: u.AppealIngestionSlideTypes.THANKS,
          children: (0, t.jsx)(o.default, {
            onClose: h,
            onNext: I,
            onBack: p
          })
        })]
      })
    })
  })
}