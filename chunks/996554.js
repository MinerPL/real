"use strict";
n.r(t), n.d(t, {
  AppLauncherDesktopExperiment: function() {
    return i
  }
});
var l = n("862205");
(0, l.createExperiment)({
  kind: "user",
  id: "2023-06_app_launcher_mobile",
  label: "App Launcher - Mobile",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable the app launcher feature on mobile",
    config: {
      enabled: !0
    }
  }]
});
let i = (0, l.createExperiment)({
  kind: "user",
  id: "2023-11_app_launcher_desktop",
  label: "App Launcher - Desktop",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable the app launcher feature on desktop",
    config: {
      enabled: !0
    }
  }]
})