"use strict";
n.r(t), n.d(t, {
  ExperimentBirthdayActivitiesJamspaceTile: function() {
    return s
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2023-04_birthday_activities_jamspace_tile",
  label: "Birthday Activities Whats New Jamspace Tile",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Jamspace tile",
    config: {
      enabled: !0
    }
  }]
})