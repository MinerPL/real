"use strict";
s.r(l), s.d(l, {
  default: function() {
    return N
  }
}), s("222007");
var a = s("37983"),
  t = s("884691"),
  n = s("77078"),
  i = s("698609"),
  o = s("124539"),
  d = s("776724"),
  r = s("57242"),
  c = s("711734"),
  u = s("299738"),
  E = s("170213"),
  x = s("701098");

function N(e) {
  let {
    classificationId: l,
    transitionState: s,
    initialSlide: N = E.AppealIngestionSlideTypes.SPEED_BUMP,
    onClose: _
  } = e, [S, A] = t.useState(N), {
    classification: I,
    isDsaEligible: T
  } = (0, i.useSafetyHubClassification)(null != l ? l : ""), f = (null == I ? void 0 : I.is_spam) || !1, h = (null == I ? void 0 : I.is_coppa) || !1;
  t.useEffect(() => {
    T ? A(N) : A(E.AppealIngestionSlideTypes.COLLECT_SIGNAL)
  }, [A, N, T]);
  let m = t.useCallback(() => {
      r.default.close(), _()
    }, [_]),
    M = t.useCallback(() => {
      var e, l;
      let s = null;
      (s = T ? null === (e = E.SlidesOrderDsaEligible[S]) || void 0 === e ? void 0 : e.next : null === (l = E.SlidesOrderNonDsaEligible[S]) || void 0 === l ? void 0 : l.next) ? A(s): m()
    }, [S, T, m]),
    g = t.useCallback(() => {
      var e, l;
      let s;
      (s = T ? null === (e = E.SlidesOrderDsaEligible[S]) || void 0 === e ? void 0 : e.prev : null === (l = E.SlidesOrderNonDsaEligible[S]) || void 0 === l ? void 0 : l.prev) ? A(s): m()
    }, [S, T, m]);
  return (0, a.jsx)(n.ModalRoot, {
    transitionState: s,
    disableTrack: !0,
    children: (0, a.jsx)("div", {
      className: x.container,
      children: (0, a.jsxs)(n.Slides, {
        activeSlide: S,
        width: 440,
        children: [(0, a.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.SPEED_BUMP,
          children: (0, a.jsx)(u.default, {
            classification: I,
            onClose: m,
            onNext: M,
            isSpam: f,
            isCoppa: h
          })
        }), (0, a.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.COLLECT_SIGNAL,
          children: (0, a.jsx)(o.default, {
            isDsaEligible: T,
            onClose: m,
            onNext: M,
            onBack: g
          })
        }), (0, a.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.CONFIRM_SUBMISSION,
          children: (0, a.jsx)(d.default, {
            onClose: m,
            onNext: M,
            onBack: g
          })
        }), (0, a.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.REQUEST_SENT,
          children: (0, a.jsx)(c.default, {
            onNext: M
          })
        }), (0, a.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.THANKS,
          children: (0, a.jsx)(o.default, {
            onClose: m,
            onNext: M,
            onBack: g
          })
        })]
      })
    })
  })
}