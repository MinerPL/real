"use strict";
n.r(t), n.d(t, {
  useHubStudyGroupExperiment: function() {
    return r
  }
});
var a = n("884691"),
  s = n("862205"),
  i = n("49111");
let l = (0, s.createExperiment)({
    kind: "guild",
    id: "2021-10_study_group",
    label: "Student hub study group",
    defaultConfig: {
      enableStudyGroup: !1
    },
    treatments: [{
      id: 1,
      label: "Enables study group sidebar",
      config: {
        enableStudyGroup: !0
      }
    }]
  }),
  r = e => {
    var t;
    a.useEffect(() => {
      null != e && e.hasFeature(i.GuildFeatures.HUB) && l.trackExposure({
        guildId: e.id,
        location: "467c32_1"
      })
    }, [e]);
    let n = l.useExperiment({
      guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
      location: "467c32_2"
    }, {
      autoTrackExposure: !1,
      disable: null == e || !e.hasFeature(i.GuildFeatures.HUB)
    });
    return n
  }