"use strict";
n.r(t), n.d(t, {
  transitionToChannel: function() {
    return u
  },
  transitionToPage: function() {
    return o
  }
});
var s = n("77078"),
  i = n("255397"),
  l = n("406189"),
  r = n("393027"),
  a = n("49111");

function u(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  !(0, s.hasAnyModalOpen)() && (n && l.default.channelListScrollTo(e, t), u && null != t && i.default.updateChatOpen(t, !0), r.default.getState().updatePath(a.Routes.CHANNEL(e, t)))
}

function o(e) {
  !(0, s.hasAnyModalOpen)() && r.default.getState().updatePath(e)
}