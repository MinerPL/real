"use strict";
n.r(t), n.d(t, {
  transitionToChannel: function() {
    return o
  },
  transitionToPage: function() {
    return u
  }
});
var s = n("77078"),
  l = n("255397"),
  a = n("406189"),
  i = n("393027"),
  r = n("49111");

function o(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  !(0, s.hasAnyModalOpen)() && (n && a.default.channelListScrollTo(e, t), o && null != t && l.default.updateChatOpen(t, !0), i.default.getState().updatePath(r.Routes.CHANNEL(e, t)))
}

function u(e) {
  !(0, s.hasAnyModalOpen)() && i.default.getState().updatePath(e)
}