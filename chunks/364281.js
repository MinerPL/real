"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var i = n("446674"),
  s = n("913144"),
  l = n("42203"),
  a = n("18494"),
  r = n("282109");
let d = {},
  h = {},
  o = {};

function u() {
  let e = a.default.getChannelId();
  if (null == e) return;
  let t = l.default.getChannel(e);
  if (null == t || null == t.guild_id) return;
  let n = t.guild_id;
  if (null == o[e] && (o[e] = 0), t.isThread() || r.default.isOptInEnabled(n) && !r.default.isChannelOrParentOptedIn(n, t.id)) {
    delete o[e], null != d[n] && d[n].delete(e);
    return
  }
  if (o[e]++, null == d[n] && (d[n] = new Set), r.default.isFavorite(n, e)) {
    d[n].delete(e);
    return
  }
  if ((null == h[n] || !h[n].has(e)) && o[e] > 50) return d[n].add(e), !0
}
class c extends i.default.PersistedStore {
  initialize(e) {
    var t, n;
    if (this.syncWith([a.default], u), null == e) return;
    let {
      suggestedChannels: i,
      dismissedSuggestions: s,
      channelOpensByChannelId: l
    } = e;
    if (null != i)
      for (let e in i) t = new Set(i[e]), d[e] = void 0 !== t ? t : new Set;
    if (null != s)
      for (let e in s) n = new Set(s[e]), h[e] = void 0 !== n ? n : new Set;
    o = null != l ? l : {}
  }
  getSuggestedChannelId(e) {
    return null
  }
  getState() {
    return {
      suggestedChannels: {},
      dismissedSuggestions: {},
      channelOpensByChannelId: {}
    }
  }
}
c.displayName = "FavoritesSuggestionStore", c.persistKey = "FavoritesSuggestionStore";
var C = new c(s.default, {
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null == h[t] && (h[t] = new Set), h[t].add(n), d[t].delete(n), !0
  }
})