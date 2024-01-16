"use strict";
n.r(t);
var i = n("862205");
let r = {
    showRedesign: !1,
    showPanels: !1
  },
  s = [{
    id: 1,
    label: "Redesign",
    config: {
      showRedesign: !0,
      showPanels: !1
    }
  }, {
    id: 2,
    label: "Panels",
    config: {
      showRedesign: !0,
      showPanels: !0
    }
  }];
(0, i.createExperiment)({
  kind: "user",
  id: "2023-10_mobile_redesign_one_percent_existing_users",
  label: "Tabs V2 - One Percent - Existing Users",
  defaultConfig: r,
  treatments: s
}), (0, i.createExperiment)({
  kind: "user",
  id: "2023-10_mobile_redesign_one_percent_new_users",
  label: "Tabs V2 - One Percent - New Users",
  defaultConfig: r,
  treatments: s
})