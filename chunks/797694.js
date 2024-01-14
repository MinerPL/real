"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var i = n("446674"),
  s = n("913144");
let l = new Set;
class a extends i.default.PersistedStore {
  initialize(e) {
    l.clear(), null == e || e.guilds.forEach(e => l.add(e))
  }
  isCollapsed(e) {
    return l.has(e)
  }
  getState() {
    return {
      guilds: l
    }
  }
}
a.displayName = "RecentlyActiveCollapseStore", a.persistKey = "RecentlyActiveCollapseStore";
var r = new a(s.default, {
  SET_RECENTLY_ACTIVE_COLLAPSED: function(e) {
    let {
      guildId: t,
      collapsed: n
    } = e;
    n ? l.add(t) : l.delete(t)
  }
})