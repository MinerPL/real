"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("446674"),
  s = n("913144"),
  i = n("271938"),
  l = n("356702"),
  r = n("880731"),
  o = n("943551");
let u = {
    unlockedAchievements: {}
  },
  d = {
    ...u
  };
class c extends a.default.PersistedStore {
  initialize(e) {
    this.waitFor(i.default, o.default);
    let t = null != e ? e : {
      ...u
    };
    for (let e in t) d[e] = t[e]
  }
  getState() {
    return d
  }
  getAllUnlockedAchievements() {
    return d.unlockedAchievements
  }
  getUnlocked(e) {
    var t;
    return null !== (t = d.unlockedAchievements[e]) && void 0 !== t ? t : null
  }
}
c.displayName = "PoggermodeAchievementStore", c.persistKey = "PoggermodeAchievementStore";
var E = new c(s.default, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
    var t;
    let {
      achievementId: n
    } = e;
    if (!r.default.isEnabled()) return !1;
    t = n, null != d.unlockedAchievements[t] || (d.unlockedAchievements = {
      ...d.unlockedAchievements,
      [t]: {
        achievementId: t,
        dateUnlocked: Date.now()
      }
    }, setTimeout(() => {
      (0, l.showAchievementToast)(t, !0)
    }, 2e3))
  }
})