"use strict";
n.r(t), n.d(t, {
  useUserEligibleForPolls: function() {
    return s
  }
});
var a = n("83995");

function s(e) {
  let {
    enabled: t
  } = a.PollsUserExperiment.useExperiment({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}