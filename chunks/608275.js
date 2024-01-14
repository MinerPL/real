"use strict";
a.r(t), a.d(t, {
  saveGuildHomeScrollPosition: function() {
    return d
  },
  ensureGuildHomeSession: function() {
    return r
  },
  trackGuildHomeOpened: function() {
    return u
  }
});
var l = a("913144"),
  n = a("599110"),
  s = a("887446"),
  i = a("49111");

function d(e, t) {
  l.default.dispatch({
    type: "GUILD_HOME_SET_SCROLL_POSITION",
    guildId: e,
    scrollPosition: t
  })
}

function r(e) {
  l.default.dispatch({
    type: "GUILD_HOME_ENSURE_HOME_SESSION",
    guildId: e
  })
}

function u(e, t) {
  n.default.track(i.AnalyticEvents.HOME_OPENED, {
    guild_id: e,
    home_session_id: s.default.getHomeSessionId(e),
    home_session_source: t
  })
}