"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var s = n("37983"),
  o = n("884691"),
  r = n("759843"),
  l = n("446674"),
  a = n("77078"),
  i = n("152584"),
  u = n("697218"),
  d = n("893044"),
  E = n("509943"),
  _ = n("457818"),
  c = n("397336"),
  T = n("679012"),
  S = n("92693");

function N(e) {
  var t;
  let {
    transitionState: n,
    onClose: N
  } = e, C = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), f = o.useRef(null !== (t = null == C ? void 0 : C.verified) && void 0 !== t && t);
  o.useEffect(() => () => (0, i.accountDetailsClose)(), []);
  let A = null == C ? void 0 : C.verified,
    I = A ? c.ChangeEmailSteps.CONFIRM_START : c.ChangeEmailSteps.EMAIL_AND_PASSWORD,
    [R, h] = o.useState(I),
    [p, U] = o.useState(null),
    [O, m] = o.useState(null),
    [v, g] = o.useState(null),
    M = {
      impression_group: r.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
    };
  return (0, s.jsxs)(a.ModalRoot, {
    transitionState: n,
    disableTrack: !0,
    children: [R === c.ChangeEmailSteps.CONFIRM_START ? (0, s.jsx)("img", {
      alt: "",
      className: T.headerImage,
      src: S
    }) : null, (0, s.jsxs)(a.Slides, {
      activeSlide: R,
      width: 440,
      onSlideReady: e => U(e),
      children: [(0, s.jsx)(a.Slide, {
        id: c.ChangeEmailSteps.CONFIRM_START,
        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
        impressionProperties: M,
        children: (0, s.jsx)(E.default, {
          onNext: () => h(c.ChangeEmailSteps.CONFIRM_CODE),
          onClose: N
        })
      }), (0, s.jsx)(a.Slide, {
        id: c.ChangeEmailSteps.CONFIRM_CODE,
        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
        impressionProperties: M,
        children: (0, s.jsx)(d.default, {
          error: v,
          setError: g,
          setEmailToken: m,
          isSlideReady: p === c.ChangeEmailSteps.CONFIRM_CODE,
          onNext: () => h(c.ChangeEmailSteps.EMAIL_AND_PASSWORD),
          onClose: N
        })
      }), (0, s.jsx)(a.Slide, {
        id: c.ChangeEmailSteps.EMAIL_AND_PASSWORD,
        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
        impressionProperties: {
          ...M,
          email_verified: f.current
        },
        children: (0, s.jsx)(_.default, {
          emailToken: O,
          isSlideReady: p === c.ChangeEmailSteps.EMAIL_AND_PASSWORD,
          onBack: A ? () => h(c.ChangeEmailSteps.CONFIRM_CODE) : null,
          onClose: N
        })
      })]
    })]
  })
}