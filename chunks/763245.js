"use strict";
a.r(t), a.d(t, {
  useIsForumPostPreviewEnabled: function() {
    return l
  }
});
var s = a("862205");
let n = (0, s.createExperiment)({
  kind: "user",
  id: "2023-10_forum_post_preview",
  label: "Enable preview of Forum post content before creation",
  defaultConfig: {
    isEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      isEnabled: !0
    }
  }]
});

function l() {
  let {
    isEnabled: e
  } = n.useExperiment({
    location: "forum_post_1"
  }, {
    autoTrackExposure: !0
  });
  return e
}