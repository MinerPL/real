"use strict";
n.r(t), n.d(t, {
  transitionToChannel: function() {
    return o
  },
  transitionToPage: function() {
    return u
  }
});
var a = n("77078"),
  s = n("255397"),
  l = n("406189"),
  i = n("393027"),
  r = n("49111");

function o(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  !(0, a.hasAnyModalOpen)() && (n && l.default.channelListScrollTo(e, t), o && null != t && s.default.updateChatOpen(t, !0), i.default.getState().updatePath(r.Routes.CHANNEL(e, t)))
}

function u(e) {
  !(0, a.hasAnyModalOpen)() && i.default.getState().updatePath(e)
}