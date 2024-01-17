"use strict";
n.r(t), n.d(t, {
  INCREASED_ACTIVITY_LIST_FORUM_LAYOUT: function() {
    return a
  },
  useForumActivityExperiment: function() {
    return s
  }
});
var i = n("943314"),
  l = n("531869");
let a = 3;

function s(e) {
  let t = l.default.useExperiment({
      guildId: null != e ? e : "",
      location: "9a247a_1"
    }),
    n = i.default.useExperiment({
      location: "9a247a_2"
    });
  return !!(t.enabled || n.enabled)
}