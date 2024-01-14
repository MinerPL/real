"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("424973"), n("222007"), n("702976"), n("808653");
var a = n("917351"),
  i = n.n(a),
  s = n("233069"),
  l = n("870691"),
  r = n("42203"),
  u = n("350522"),
  o = n("319781"),
  d = n("957255"),
  c = n("282109"),
  f = n("718517"),
  m = n("568734"),
  _ = n("449008"),
  h = n("380353"),
  g = n("49111"),
  S = n("397336");

function p(e, t, n, a, m) {
  if (t !== h.Mode.UseGreyDot) return [{
    label: "Setting the guild to a white dot unread",
    apply: (e, t) => {
      E(e, t, !0)
    }
  }];
  let S = [],
    p = Object.values(r.default.getMutableGuildChannelsForGuild(e.id)).filter(e => d.default.can(g.Permissions.VIEW_CHANNEL, e));
  return S.push(... function(e, t) {
    let n = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
    if (!n) return [];
    let a = [{
        label: "Unmuting the guild and marking it as read",
        apply: e => {
          e.muted = !1, e.mute_config = null
        },
        needsMarkedAsRead: !0
      }],
      i = t.filter(t => c.default.getChannelMessageNotifications(e.id, t.id) === g.UserNotificationSettings.ALL_MESSAGES);
    return i.length > 0 && a.push({
      label: "Setting ".concat(i.length, " to mentions-only since they were all-messages and we are unmuting the guild"),
      debug: i.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of i) T(e, t, n.id, e => {
          e.message_notifications = g.UserNotificationSettings.ONLY_MENTIONS
        })
      }
    }), a
  }(e, p)), S.push(function(e) {
    let t = c.default.getMessageNotifications(e.id);
    if (t === g.UserNotificationSettings.ALL_MESSAGES) return {
      label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
      apply: e => {
        e.message_notifications = g.UserNotificationSettings.ONLY_MENTIONS
      }
    }
  }(e)), S.push(function() {
    return {
      label: "Setting the guild to a grey dot unread",
      apply: (e, t) => {
        E(e, t, !1)
      }
    }
  }()), S.push(... function(e) {
    let t = [],
      [n, a] = i(e).filter(e => e.type === g.ChannelTypes.GUILD_ANNOUNCEMENT).partition(e => c.default.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && c.default.isChannelMuted(e.guild_id, e.parent_id)).value();
    return n.length > 0 && t.push({
      label: "Not touching ".concat(n.length, " announcement channels since they are muted"),
      debug: n.map(e => "\n    - #".concat(e.name)).join("")
    }), a.length > 0 && t.push({
      label: "Setting ".concat(a.length, " announcement channels to white-dot"),
      debug: a.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of a) v(e, t, n.id, !0)
      }
    }), t
  }(p)), S.push(... function(e) {
    let t = [],
      n = [];
    for (let t of e)
      if (c.default.isChannelMuted(t.guild_id, t.id) && t.isCategory()) {
        let e = l.default.isCollapsed(t.id);
        !e && n.push(t)
      } return n.length > 0 && t.push({
      label: "Unmuting ".concat(n.length, " categories and setting to grey-dot"),
      debug: n.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let a of n) v(e, t, a.id, !1), T(e, t, a.id, e => {
          e.muted = !1, e.mute_config = null
        })
      }
    }), t
  }(p)), S.push(... function(e) {
    let t = [],
      n = [],
      a = [];
    return e.forEach(e => {
      if (c.default.isChannelMuted(e.guild_id, e.id)) return;
      let t = c.default.getChannelMessageNotifications(e.guild_id, e.id);
      t === g.UserNotificationSettings.ALL_MESSAGES ? n.push(e) : t === g.UserNotificationSettings.ONLY_MENTIONS && a.push(e)
    }), n.length > 0 && t.push({
      label: "Setting ".concat(n.length, " channels to white-dot since they were explicitly All Messages"),
      debug: n.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let a of n) v(e, t, a.id, !0)
      }
    }), a.length > 0 && t.push({
      label: "Setting ".concat(a.length, " channels to grey-dot since they were explicitly Mentions Only"),
      debug: a.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of a) v(e, t, n.id, !1)
      }
    }), t
  }(p)), u.default.hasConsented(g.Consents.PERSONALIZATION) ? S.push(... function(e, t, n, a, s) {
    let l = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
    if (l) return [];
    let r = new Set(t.map(e => e.id)),
      u = a.filter(e => r.has(e.channel_id)),
      o = i.keyBy(u, "channel_id"),
      d = Math.max(n.messages === h.PainLevel.High ? s.frecency.yearMinOpensLargeServer : s.frecency.yearMinOpensSmallServer, u.reduce((e, t) => {
        var n;
        return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
      }, 0) * s.frecency.totalOpensPercent),
      f = Math.max(s.frecency.monthMinOpens, u.reduce((e, t) => {
        var n;
        return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0)
      }, 0) * s.frecency.totalOpensPercent),
      m = [],
      _ = [];
    t.forEach(e => {
      var t, n, a, i;
      let s = null !== (t = o[e.id]) && void 0 !== t ? t : {};
      Number(null !== (n = s.num_year_opens) && void 0 !== n ? n : 0) > d || Number(null !== (a = s.num_month_opens) && void 0 !== a ? a : 0) > f ? m.push(e) : Number(null !== (i = s.num_three_month_opens) && void 0 !== i ? i : 0) > 2 && _.push(e)
    });
    let g = [];
    return m.length > 0 && g.push({
      label: "Setting ".concat(m.length, " channels to white-dot since they are recent and frequently viewed"),
      debug: m.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(o[e.id]), ")")).join(""),
      apply: (e, t) => {
        for (let n of m) v(e, t, n.id, !0)
      }
    }), _.length > 0 && g.push({
      label: "NOT setting ".concat(_.length, " channels to white-dot because they were only viewed a little."),
      debug: _.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(o[e.id]), ")")).join("")
    }), g
  }(e, p, n, a, m)) : S.push(... function(e, t) {
    let n = c.default.isMuted(e.id) && !c.default.isTemporarilyMuted(e.id);
    if (n) return [];
    let a = [],
      i = new Set(t.map(e => e.id)),
      l = Date.now() - f.default.Millis.DAYS_30,
      r = o.default.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof s.ChannelRecordBase && i.has(e.id)),
      u = r.filter(e => {
        var t, n;
        let a = null !== (n = null === (t = o.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
        return 0 !== a.length && a[a.length - 1] >= l
      });
    return u.length > 0 && a.push({
      label: "Setting ".concat(u.length, " channels to white-dot since they are recent and frequently viewed"),
      debug: u.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of u) v(e, t, n.id, !0)
      }
    }), a
  }(e, p)), S.filter(_.isNotNullish)
}

function E(e, t, n) {
  var a, i;
  e.flags = (0, m.setFlag)(null !== (i = null !== (a = e.flags) && void 0 !== a ? a : t.flags) && void 0 !== i ? i : 0, S.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n), e.flags = (0, m.setFlag)(e.flags, S.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !n)
}

function T(e, t, n, a) {
  var s, l, r, u;
  let o = null !== (r = null === (s = e.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== r ? r : {},
    d = null !== (u = null === (l = t.channel_overrides) || void 0 === l ? void 0 : l[n]) && void 0 !== u ? u : {};
  a(o, d), !i.isEmpty(o) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = o)
}

function v(e, t, n, a) {
  T(e, t, n, (e, t) => {
    var n, i;
    e.flags = (0, m.setFlag)(null !== (i = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== i ? i : 0, S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a), e.flags = (0, m.setFlag)(e.flags, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !a)
  })
}