"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  n = a("77078"),
  i = a("698609"),
  o = a("124539"),
  d = a("776724"),
  r = a("57242"),
  c = a("711734"),
  u = a("299738"),
  E = a("170213"),
  A = a("701098");

function _(e) {
  let {
    classificationId: t,
    transitionState: a,
    initialSlide: _ = E.AppealIngestionSlideTypes.SPEED_BUMP,
    onClose: S
  } = e, [N, I] = s.useState(_), {
    classification: x,
    isDsaEligible: f
  } = (0, i.useSafetyHubClassification)(null != t ? t : ""), T = (null == x ? void 0 : x.is_spam) || !1, g = (null == x ? void 0 : x.is_coppa) || !1;
  s.useEffect(() => {
    f ? I(_) : I(E.AppealIngestionSlideTypes.COLLECT_SIGNAL)
  }, [I, _, f]);
  let p = s.useCallback(() => {
      r.default.close(), S()
    }, [S]),
    C = s.useCallback(() => {
      var e, t;
      let a = null;
      (a = f ? null === (e = E.SlidesOrderDsaEligible[N]) || void 0 === e ? void 0 : e.next : null === (t = E.SlidesOrderNonDsaEligible[N]) || void 0 === t ? void 0 : t.next) ? I(a): p()
    }, [N, f, p]),
    m = s.useCallback(() => {
      var e, t;
      let a;
      (a = f ? null === (e = E.SlidesOrderDsaEligible[N]) || void 0 === e ? void 0 : e.prev : null === (t = E.SlidesOrderNonDsaEligible[N]) || void 0 === t ? void 0 : t.prev) ? I(a): p()
    }, [N, f, p]);
  return (0, l.jsx)(n.ModalRoot, {
    transitionState: a,
    disableTrack: !0,
    children: (0, l.jsx)("div", {
      className: A.container,
      children: (0, l.jsxs)(n.Slides, {
        activeSlide: N,
        width: 440,
        children: [(0, l.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.SPEED_BUMP,
          children: (0, l.jsx)(u.default, {
            classification: x,
            onClose: p,
            onNext: C,
            isSpam: T,
            isCoppa: g
          })
        }), (0, l.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.COLLECT_SIGNAL,
          children: (0, l.jsx)(o.default, {
            isDsaEligible: f,
            onClose: p,
            onNext: C,
            onBack: m
          })
        }), (0, l.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.CONFIRM_SUBMISSION,
          children: (0, l.jsx)(d.default, {
            onClose: p,
            onNext: C,
            onBack: m
          })
        }), (0, l.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.REQUEST_SENT,
          children: (0, l.jsx)(c.default, {
            onNext: C
          })
        }), (0, l.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.THANKS,
          children: (0, l.jsx)(o.default, {
            isDsaEligible: f,
            onClose: p,
            onNext: C,
            onBack: m
          })
        })]
      })
    })
  })
}