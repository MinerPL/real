"use strict";
n.r(t), n.d(t, {
  useShowKrunkerStrikeCoachmark: function() {
    return i
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
    kind: "user",
    id: "2023-12_krunker_strike_coachmark",
    label: "Krunker Strike Coachmark",
    defaultConfig: {
      showCoachmark: !1
    },
    treatments: [{
      id: 1,
      label: "Show Coachmark",
      config: {
        showCoachmark: !0
      }
    }]
  }),
  i = () => {
    let e = s.useExperiment({
      location: "guild_sidebar"
    }, {
      autoTrackExposure: !0
    });
    return e.showCoachmark
  }