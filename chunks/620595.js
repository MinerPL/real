"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var o = n("37983");
n("884691");
var s = n("77078"),
  i = n("997511"),
  r = n("780421"),
  a = n("768064"),
  l = n("579574"),
  d = n("168503"),
  C = n("920460"),
  u = n("598347"),
  c = n("49111"),
  L = n("429152");

function f(e) {
  let {
    transitionState: t,
    onClose: n,
    analyticsLocation: f
  } = e, {
    slide: N,
    gotoNext: T,
    gotoError: R,
    handleWaitingForConnection: h,
    handleAuthToken: _,
    expectedCallbackState: p,
    callbackData: O
  } = (0, i.useTwoWayLinkModalSlideManager)(f, c.PlatformTypes.CRUNCHYROLL);
  return (0, o.jsx)(s.ModalRoot, {
    className: L.modal,
    transitionState: t,
    disableTrack: !0,
    children: (0, o.jsxs)(s.Slides, {
      activeSlide: N,
      width: 408,
      children: [(0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.LANDING,
        children: (0, o.jsx)(l.default, {
          onContinue: T,
          onClose: n
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT,
        children: (0, o.jsx)(d.default, {
          isWaitingForConnection: !1,
          onWaitingForConnection: h,
          onAuthToken: _,
          onError: R,
          onClose: n
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(d.default, {
          isWaitingForConnection: !0,
          expectedCallbackState: p,
          onAuthToken: _,
          onError: R,
          onClose: n
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
        children: (0, o.jsx)(r.default, {
          authToken: O,
          onContinue: T,
          onError: R,
          onClose: n
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.ERROR,
        children: (0, o.jsx)(a.default, {
          onContinue: T,
          onClose: n
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.SUCCESS,
        children: (0, o.jsx)(C.default, {
          onClose: n
        })
      })]
    })
  })
}