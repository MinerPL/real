"use strict";
n.r(t);
var a = n("446674"),
  s = n("913144"),
  i = n("193990"),
  l = n("299285");
class r extends a.default.Store {}
r.displayName = "UserAchievementStore";
new r(s.default, {
  USER_ACHIEVEMENT_UPDATE: function(e) {
    let {
      userAchievement: t
    } = e, {
      application_id: n,
      achievement: a,
      percent_complete: s
    } = t;
    if (100 === s && null != a) {
      let e = l.default.getApplication(n),
        t = null != e ? e.getIconURL(64) : null;
      i.default.showNotification(t, a.name, a.description, {
        notif_type: "USER_ACHIEVEMENT_UPDATE"
      }, {
        omitViewTracking: !0
      })
    }
  }
})