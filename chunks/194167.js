"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("37983");
n("884691");
var o = n("77078"),
  r = n("997511"),
  i = n("458250"),
  a = n("268767"),
  l = n("867528"),
  d = n("572235"),
  c = n("590882"),
  u = n("598347"),
  f = n("49111"),
  C = n("429152");

function h(e) {
  let {
    transitionState: t,
    onClose: n,
    analyticsLocation: h
  } = e, {
    slide: p,
    gotoNext: T,
    gotoError: x,
    handleWaitingForConnection: _,
    handleAuthToken: N,
    expectedCallbackState: O,
    callbackData: g
  } = (0, r.useTwoWayLinkModalSlideManager)(h, f.PlatformTypes.XBOX);
  return (0, s.jsx)(o.ModalRoot, {
    className: C.modal,
    transitionState: t,
    disableTrack: !0,
    children: (0, s.jsxs)(o.Slides, {
      activeSlide: p,
      width: 408,
      children: [(0, s.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.LANDING,
        children: (0, s.jsx)(l.default, {
          onContinue: T,
          onClose: n
        })
      }), (0, s.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT,
        children: (0, s.jsx)(d.default, {
          isWaitingForConnection: !1,
          onWaitingForConnection: _,
          onAuthToken: N,
          onError: x,
          onClose: n
        })
      }), (0, s.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
        children: (0, s.jsx)(d.default, {
          isWaitingForConnection: !0,
          expectedCallbackState: O,
          onAuthToken: N,
          onError: x,
          onClose: n
        })
      }), (0, s.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
        children: (0, s.jsx)(i.default, {
          authToken: g,
          onContinue: T,
          onError: x,
          onClose: n
        })
      }), (0, s.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.ERROR,
        children: (0, s.jsx)(a.default, {
          onContinue: T,
          onClose: n
        })
      }), (0, s.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.SUCCESS,
        children: (0, s.jsx)(c.default, {
          onClose: n
        })
      })]
    })
  })
}