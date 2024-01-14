"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007"), n("702976"), n("808653");
var i = n("446674"),
  r = n("913144"),
  s = n("305961"),
  a = n("568734"),
  o = n("507950"),
  l = n("49111"),
  u = n("397336");
let c = {};
class d extends i.default.Store {
  hasViewingRoles() {
    return Object.keys(c).length > 0
  }
  isViewingRoles(e) {
    return null != e && null != c[e]
  }
  getViewingRoles(e) {
    var t;
    return null === (t = c[e]) || void 0 === t ? void 0 : t.roles
  }
  getViewingRolesTimestamp(e) {
    var t;
    return null != e ? null === (t = c[e]) || void 0 === t ? void 0 : t.timestamp : null
  }
  getData(e) {
    return c[e]
  }
  isFullServerPreview(e) {
    var t;
    return (null === (t = c[e]) || void 0 === t ? void 0 : t.type) === o.ImpersonateType.NEW_MEMBER
  }
  isOptInEnabled(e) {
    let t = c[e];
    return null != t && t.type === o.ImpersonateType.NEW_MEMBER && t.optInEnabled
  }
  isOnboardingEnabled(e) {
    let t = c[e];
    return null != t && t.type === o.ImpersonateType.NEW_MEMBER && t.onboardingEnabled
  }
  getViewingChannels(e) {
    let t = c[e];
    return null == t || t.type !== o.ImpersonateType.NEW_MEMBER ? null : t.optInChannels
  }
  getOnboardingResponses(e) {
    let t = c[e];
    return null == t || t.type !== o.ImpersonateType.NEW_MEMBER ? null : t.onboardingResponses
  }
  getMemberOptions(e) {
    let t = c[e];
    return null == t || t.type !== o.ImpersonateType.NEW_MEMBER ? null : t.memberOptions
  }
  isChannelOptedIn(e, t) {
    let n = this.getViewingChannels(e);
    return null != n && n.has(t)
  }
  isViewingSubscriptionRoles(e) {
    var t;
    return null != e && (null === (t = c[e]) || void 0 === t ? void 0 : t.type) === o.ImpersonateType.ROLE_SUBSCRIPTION
  }
  getImpersonateType(e) {
    if (null == e) return null;
    let t = c[e];
    return null == t ? null : t.type
  }
  getBackNavigationSection(e) {
    if (null == e) return l.GuildSettingsSections.ROLES;
    let t = c[e];
    if (null == t) return l.GuildSettingsSections.ROLES;
    switch (t.type) {
      case o.ImpersonateType.ROLES:
        return t.returnToSection;
      case o.ImpersonateType.ROLE_SUBSCRIPTION:
        return l.GuildSettingsSections.ROLE_SUBSCRIPTIONS;
      case o.ImpersonateType.NEW_MEMBER:
        return l.GuildSettingsSections.ONBOARDING;
      default:
        return l.GuildSettingsSections.ROLES
    }
  }
}
d.displayName = "ImpersonateStore";
var f = new d(r.default, {
  IMPERSONATE_UPDATE: function(e) {
    let {
      guildId: t,
      data: n
    } = e;
    delete n.roles[t], c[t] = {
      ...n,
      timestamp: Date.now()
    }
  },
  IMPERSONATE_STOP: function(e) {
    let {
      guildId: t
    } = e;
    if (null == c[t]) return !1;
    delete c[t]
  },
  GUILD_ROLE_DELETE: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e;
    if (null == c[t]) return !1;
    delete c[t].roles[n]
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
    var t;
    let {
      guildId: n,
      overrides: i
    } = e;
    if (null == n || null == c[n]) return !1;
    let r = c[n];
    if (null == r || r.type !== o.ImpersonateType.NEW_MEMBER) return !1;
    let s = null !== (t = r.optInChannels) && void 0 !== t ? t : new Set;
    return Object.keys(i).forEach(e => {
      var t;
      let n = i[e];
      a.hasFlag(null !== (t = n.flags) && void 0 !== t ? t : 0, u.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? s.add(e) : s.delete(e)
    }), r.optInChannels = s, !0
  },
  GUILD_ONBOARDING_SELECT_OPTION: function(e) {
    var t;
    let {
      guildId: n,
      optionId: i,
      selected: r,
      removedOptionIds: s
    } = e;
    if (null == n || null == c[n]) return !1;
    let a = c[n];
    if (null == a || a.type !== o.ImpersonateType.NEW_MEMBER) return !1;
    let l = null !== (t = a.onboardingResponses) && void 0 !== t ? t : new Set;
    return null != s && s.length > 0 && s.forEach(e => l.delete(e)), r ? l.add(i) : l.delete(i), a.onboardingResponses = l, !0
  },
  GUILD_MEMBER_UPDATE_LOCAL: function(e) {
    let {
      guildId: t,
      roles: n,
      flags: i
    } = e;
    if (null == t) return !1;
    let r = c[t],
      a = s.default.getGuild(t);
    return null != a && null != r && (null != n && (r.roles = n.reduce((e, t) => {
      let n = a.getRole(t);
      return null != n && (e[t] = n), e
    }, {})), null != i && r.type === o.ImpersonateType.NEW_MEMBER && (r.memberOptions.flags = i), !0)
  }
})