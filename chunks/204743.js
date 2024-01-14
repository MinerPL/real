"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var a = n("446674"),
  l = n("913144");
let s = {};
class i extends a.default.PersistedStore {
  initialize(e) {
    for (let t in e) {
      let n = e[t];
      s[t] = new Set(n)
    }
  }
  hasViewedPrompt(e, t) {
    let n = s[t];
    return null != n && (!!n.has(e) || !1)
  }
  getState() {
    return s
  }
}
i.displayName = "GuildPromptsStore", i.persistKey = "GuildPromptsStore";
var r = new i(l.default, {
  GUILD_PROMPT_VIEWED: function(e) {
    let {
      prompt: t,
      guildId: n
    } = e, a = s[n];
    return null == a ? (s[n] = new Set, s[n].add(t), !0) : !a.has(t) && (a.add(t), !0)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return null != s[t.id] && !t.unavailable && (delete s[t.id], !0)
  }
})