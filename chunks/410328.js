"use strict";
n.r(t), n.d(t, {
  buildPlatformPollResources: function() {
    return i
  },
  getAvatarUrl: function() {
    return r
  }
}), n("794252");
var a = n("506838"),
  s = n("418009"),
  l = n("944313");

function i(e, t) {
  let n = (0, a.match)(t).with(s.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => l.normalStylesImageOnlyAnswers).otherwise(() => l.normalStylesDefault),
    i = {
      styles: {
        loser: n,
        normal: n,
        notVoted: n,
        selected: n,
        voted: l.votedStyles,
        victor: l.victorStyles
      }
    };
  return i
}

function r(e, t) {
  return e.getAvatarURL(t, 20, !1)
}