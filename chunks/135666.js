"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var l = n("534438"),
  a = n("174622"),
  i = e => {
    let {
      stageInstance: t,
      guild: n,
      isMember: i,
      onTransitionToInviteChannel: r,
      onAcceptInstantInvite: o
    } = e;
    return (0, s.jsx)(a.default, {
      children: (0, s.jsx)(l.default, {
        isEmbed: !0,
        stageInstance: t,
        guild: n,
        onClick: i ? r : o
      })
    })
  }