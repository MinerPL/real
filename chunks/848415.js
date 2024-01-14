"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("424973");
var i = n("627445"),
  r = n.n(i),
  s = n("446674"),
  a = n("913144"),
  o = n("42203"),
  l = n("923959"),
  u = n("305961"),
  c = n("957255"),
  d = n("677099"),
  f = n("299039"),
  E = n("49111");
let h = null,
  p = [],
  _ = null,
  S = null;

function m(e) {
  return null == e ? 0 : new Date().getTime() - e.getTime()
}
class T extends s.default.Store {
  initialize() {
    this.waitFor(d.default, l.default, o.default)
  }
  isCallout(e) {
    return p.some(t => t.targetId === e)
  }
  getCurrentAction() {
    return 0 === p.length ? null : p[0]
  }
  isCurrentKind(e) {
    return 0 !== p.length && p[0].kind === e
  }
  isActive(e) {
    return null != h && h === e && p.length > 0
  }
  getAnalyticsProperties() {
    let e = this.getCurrentAction();
    return {
      step: null == e ? void 0 : e.kind,
      is_final_step: 1 === p.length,
      step_duration: m(S),
      total_duration: m(_)
    }
  }
  isAnyActive() {
    return p.length > 0
  }
}
T.displayName = "AssistantStore";
var g = new T(a.default, {
  ASSISTANT_REBUILD_ACTION_STACK: function(e) {
    let {
      guildId: t
    } = e, n = u.default.getGuild(t);
    if (null == n) return !1;
    h = t, (p = []).push({
      guildId: t,
      kind: "splashScreen",
      targetKey: void 0,
      targetId: void 0
    });
    let i = function(e) {
      let t = l.default.getVocalChannelIds(e);
      for (var n = 0; n < t.length; n++) {
        let e = t[n],
          i = o.default.getChannel(e);
        if (null != i && !i.nsfw && c.default.can(E.Permissions.VIEW_CHANNEL, i)) return i
      }
      return null
    }(t);
    null != i && (p.push({
      guildId: t,
      kind: "joinVoiceChannel",
      targetKey: "voiceChannel",
      targetId: i.id
    }), p.push({
      guildId: t,
      kind: "joinVoiceChannelMultitask",
      targetKey: "voiceChannel",
      targetId: i.id
    }));
    let r = function(e) {
      let t = l.default.getSelectableChannels(e.id),
        n = t.sort((e, t) => f.default.compare(e.channel.id, t.channel.id)).find(e => !e.channel.nsfw);
      if (null != n) return n.channel;
      let i = o.default.getChannel(e.systemChannelId);
      return null != i && !i.nsfw && c.default.can(E.Permissions.VIEW_CHANNEL, i) ? i : l.default.getSFWDefaultChannel(e.id)
    }(n);
    null != r && (p.push({
      guildId: t,
      kind: "openTextChannel",
      targetKey: "textChannel",
      targetId: r.id
    }), p.push({
      guildId: t,
      kind: "sendMessage",
      targetKey: void 0,
      targetId: void 0
    })), p.push({
      guildId: t,
      kind: "navigateAround",
      targetKey: void 0,
      targetId: void 0
    }), p.push({
      guildId: t,
      kind: "wumpusJoined",
      targetKey: void 0,
      targetId: void 0
    }), p.push({
      guildId: t,
      kind: "startActivity",
      targetKey: void 0,
      targetId: void 0
    }), _ = new Date, S = new Date
  },
  ASSISTANT_COMPLETE_ACTION: function(e) {
    let {
      kind: t
    } = e;
    return 0 === p.length ? (r("AssistantStore: no actions to complete"), !1) : p[0].kind === t && void(p.shift(), S = new Date)
  },
  ASSISTANT_DISMISS: function() {
    p = [], S = null, _ = null
  }
})