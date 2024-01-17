"use strict";
n.r(t), n.d(t, {
  useUserEligibleForPolls: function() {
    return l
  }
});
var s = n("83995");

function l(e) {
  let {
    enabled: t
  } = s.PollsUserExperiment.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}