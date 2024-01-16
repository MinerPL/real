"use strict";
s.r(l), s.d(l, {
  default: function() {
    return x
  }
}), s("222007");
var a = s("37983"),
  t = s("884691"),
  n = s("77078"),
  i = s("698609"),
  d = s("124539"),
  o = s("57242"),
  r = s("299738"),
  c = s("170213"),
  u = s("701098");

function x(e) {
  let {
    classificationId: l,
    transitionState: s,
    initialSlide: x = c.AppealIngestionSlideTypes.SPEED_BUMP,
    onClose: E
  } = e, [_, N] = t.useState(x), {
    classification: f,
    isDsaEligible: S
  } = (0, i.useSafetyHubClassification)(null != l ? l : ""), T = (null == f ? void 0 : f.is_spam) || !1, A = (null == f ? void 0 : f.is_coppa) || !1;
  t.useEffect(() => {
    S ? N(x) : N(c.AppealIngestionSlideTypes.COLLECT_SIGNAL)
  }, [N, x, S]);
  let h = t.useCallback(() => {
      o.default.close(), E()
    }, [E]),
    I = t.useCallback(() => {
      var e, l;
      let s = null;
      (s = S ? null === (e = c.SlidesOrderDsaEligible[_]) || void 0 === e ? void 0 : e.next : null === (l = c.SlidesOrderNonDsaEligible[_]) || void 0 === l ? void 0 : l.next) ? N(s): h()
    }, [_, S, h]),
    p = t.useCallback(() => {
      var e, l;
      let s;
      (s = S ? null === (e = c.SlidesOrderDsaEligible[_]) || void 0 === e ? void 0 : e.prev : null === (l = c.SlidesOrderNonDsaEligible[_]) || void 0 === l ? void 0 : l.prev) ? N(s): h()
    }, [_, S, h]);
  return (0, a.jsx)(n.ModalRoot, {
    transitionState: s,
    disableTrack: !0,
    children: (0, a.jsx)("div", {
      className: u.container,
      children: (0, a.jsxs)(n.Slides, {
        activeSlide: _,
        width: 440,
        children: [(0, a.jsx)(n.Slide, {
          id: c.AppealIngestionSlideTypes.SPEED_BUMP,
          children: (0, a.jsx)(r.default, {
            classification: f,
            onClose: h,
            onNext: I,
            isSpam: T,
            isCoppa: A
          })
        }), (0, a.jsx)(n.Slide, {
          id: c.AppealIngestionSlideTypes.COLLECT_SIGNAL,
          children: (0, a.jsx)(d.default, {
            isDsaEligible: S,
            onClose: h,
            onNext: I,
            onBack: p
          })
        }), (0, a.jsx)(n.Slide, {
          id: c.AppealIngestionSlideTypes.CONFIRM_SUBMISSION,
          children: (0, a.jsx)(d.default, {
            onClose: h,
            onNext: I,
            onBack: p
          })
        }), (0, a.jsx)(n.Slide, {
          id: c.AppealIngestionSlideTypes.REQUEST_SENT,
          children: (0, a.jsx)(d.default, {
            onClose: h,
            onNext: I,
            onBack: p
          })
        }), (0, a.jsx)(n.Slide, {
          id: c.AppealIngestionSlideTypes.THANKS,
          children: (0, a.jsx)(d.default, {
            onClose: h,
            onNext: I,
            onBack: p
          })
        })]
      })
    })
  })
}