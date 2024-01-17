"use strict";
n.r(t), n.d(t, {
  isForumActivityExperimentEnabled: function() {
    return a
  }
});
var i = n("943314"),
  l = n("531869");

function a(e) {
  let t = l.default.getCurrentConfig({
      guildId: null != e ? e : "",
      location: "3fde52_1"
    }),
    n = i.default.getCurrentConfig({
      location: "3fde52_2"
    });
  return !!(t.enabled || n.enabled)
}