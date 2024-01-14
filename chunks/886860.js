"use strict";
n.r(t), n.d(t, {
  ActivitiesAutoSuggestExperiment: function() {
    return l
  }
});
var a = n("862205");
let l = (0, a.createExperiment)({
  kind: "user",
  id: "2022-12_activities_auto_suggest",
  label: "Activities Auto Suggest",
  defaultConfig: {
    enableCenterControlTrayMiniShelf: !1
  },
  treatments: [{
    id: 1,
    label: "Enable VC Activities Mini Shelf",
    config: {
      enableCenterControlTrayMiniShelf: !0
    }
  }]
})